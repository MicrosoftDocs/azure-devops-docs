---
title: Rate and usage limits 
titleSuffix: Azure DevOps 
description: Description of limits on rates and the resources used in Azure DevOps. 
ms.subservice: azure-devops-ecosystem
ms.topic: conceptual
ms.assetid: 6CBE3B3E-ABFF-4F66-8168-DB5D772E9DDB  
ms.author: chcomley
author: chcomley
ms.date: 03/20/2025
monikerRange: 'azure-devops'
---

<!--- Supports FWLINK: https://go.microsoft.com/fwlink/?LinkId=692096 -->

# Rate and usage limits

[!INCLUDE [version-eq-azure-devops](../../includes/version-eq-azure-devops.md)]

Azure DevOps Services uses multi-tenancy to reduce costs and improve performance. This design leaves users vulnerable to performance issues and even outages when other users of their shared resources have spikes in their consumption. So, Azure DevOps limits the resources individuals can consume, and the amount of requests they can make to certain commands. When these limits are exceeded, future requests might be either delayed or blocked.

For more information, see [Git limits](../../repos/git/limits.md) and [Best practices to avoid hitting rate limits](integration-bestpractices.md).

## Global consumption limit

Azure DevOps currently has a global consumption limit, which delays requests from individual users beyond a threshold when shared resources are in danger of being overwhelmed. This limit is focused exclusively on avoiding outages when shared resources are close to being overwhelmed.
Individual users typically only get delayed requests when one of the following incidents occurs:

- One of their shared resources is at risk of being overwhelmed
- Their personal usage exceeds 200 times the consumption of a typical user within a (sliding) five-minute window

The amount of the delay depends on the user's sustained level of consumption. Delays range from a few milliseconds per request up to 30 seconds. Once consumption goes to zero or the resource is no longer overwhelmed, the delays stop within five minutes. If consumption remains high, delays might continue indefinitely to protect the resource.

When a user request gets delayed by a significant amount, that user receives an email and a warning banner in the web.
For the build service account and others without an email address, members of the Project Collection Administrators group get the email.
For more information, see [Usage monitoring](../../organizations/accounts/usage-monitoring.md).

When an individual user's requests get blocked, responses with HTTP code 429 (too many requests) are received, with a message similar to the following message:

```TF400733: The request has been canceled: Request was blocked due to exceeding usage of resource <resource name> in namespace <namespace ID>.```

### Azure DevOps throughput units 

Azure DevOps users consume many shared resources, and consumption depends on the following factors: 

- Uploading a large number of files to version control creates a large amount of load on databases and storage accounts
- Complex work item tracking queries create database load based on the number of work items they search through
- Builds drive load by downloading files from version control, producing log output
- All operations consume CPU and memory on various parts of the service

To accommodate, Azure DevOps resource consumption is expressed in abstract units called Azure DevOps throughput units (TSTUs). TSTUs eventually incorporate a blend of the following items:

- [Azure SQL Database DTUs](/azure/azure-sql/database/purchasing-models) as a measure of database consumption
- Application tier and job agent CPU, memory, and I/O as a measure of compute consumption
- Azure Storage bandwidth as a measure of storage consumption  

For now, TSTUs are primarily focused on Azure SQL Database DTUs, since Azure SQL Databases are the shared resources most commonly overwhelmed by excessive consumption. A single TSTU is the average load we expect a typical user of Azure DevOps to generate per five minutes. Typical users also generate spikes in load. These spikes are typically 10 or fewer TSTUs per five minutes. Less frequently, spikes go as high as 100 TSTUs.

The global consumption limit is 200 TSTUs within a sliding five-minute window.

We recommend that you at least respond to the `Retry-After` header. If you detect a `Retry-After` header in any response, wait until some time passes before you send another request. Doing so helps your client application experience fewer enforced delays. Keep in mind that the response is 200, so you don't need to apply retry logic to the request.

If possible, we further recommend that you monitor `X-RateLimit-Remaining` and `X-RateLimit-Limit` headers. Doing so allows you to approximate how quickly you're approaching the delay threshold. Your client can intelligently react and spread out its requests over time.

> [!NOTE]
> Identities used by tools and applications to integrate with Azure DevOps might occasionally need higher rate and usage limits beyond the allowed consumption limit. You can increase these limits by assigning the [Basic + Test Plans](../../organizations/billing/buy-basic-access-add-users.md#assign-basic-or-basic--test-plans) access level to the desired identities used by your application. Once the need for higher rate limits is fulfilled, you can revert to the previous access level. You get charged for the [Basic + Test Plans](../../organizations/billing/buy-basic-access-add-users.md#assign-basic-or-basic--test-plans) access level only for the duration assigned to the identity.
>
> Identities already assigned a Visual Studio Enterprise subscription can't get assigned the [Basic + Test Plans](../../organizations/billing/buy-basic-access-add-users.md#assign-basic-or-basic--test-plans) access level until they get removed.

## Pipelines

Rate limiting is similar for Azure Pipelines. Each pipeline gets treated as an individual entity with its own resource consumption tracked. Even if build agents are self-hosted, they generate load in the form of cloning and sending logs.

We apply a 200 TSTU limit for an individual pipeline in a sliding 5-minute window. This limit is the same as the global consumption limit for users.
If a pipeline gets delayed or blocked by rate limiting, a message appears in the attached logs.

## API client experience

When requests get delayed or blocked, Azure DevOps returns response headers to help API clients react. While not fully standardized, these headers are [broadly in line with other popular services](https://stackoverflow.com/questions/16022624/examples-of-http-api-rate-limiting-http-response-headers).

The following table lists the headers available and what they mean.
Except for `X-RateLimit-Delay`, all of these headers get sent before requests start getting delayed.
This design gives clients the opportunity to proactively slow down their rate of requests.

:::row:::
   :::column span="1":::
      **Header name** 
   :::column-end:::
   :::column span="2":::
      **Description**
   :::column-end:::
:::row-end:::
---
:::row:::
   :::column span="1":::
      `Retry-After`
   :::column-end:::
   :::column span="2":::
       The [RFC 6585](https://tools.ietf.org/html/rfc6585#section-4")-specified header sent to tell you how long to wait before you send your next request to fall under the detection threshold. Units: seconds.
   :::column-end:::
:::row-end:::
---
:::row:::
   :::column span="1":::
      `X-RateLimit-Resource`
   :::column-end:::
   :::column span="2":::
       A custom header indicating the service and type of threshold that was reached. Threshold types and service names might vary over time and without warning. We recommend displaying this string to a human, but not relying on it for computation.
   :::column-end:::
:::row-end:::
---
:::row:::
   :::column span="1":::
      `X-RateLimit-Delay`
   :::column-end:::
   :::column span="2":::
       How long the request was delayed. Units: seconds with up to three decimal places (milliseconds). 
   :::column-end:::
:::row-end:::
---
:::row:::
   :::column span="1":::
      `X-RateLimit-Limit`
   :::column-end:::
   :::column span="2":::
       Total number of TSTUs allowed before delays are imposed.
   :::column-end:::
:::row-end:::
---
:::row:::
   :::column span="1":::
      `X-RateLimit-Remaining`
   :::column-end:::
   :::column span="2":::
       Number of TSTUs remaining before being delayed. If requests are already being delayed or blocked, it's 0.
   :::column-end:::
:::row-end:::
---
:::row:::
   :::column span="1":::
       `X-RateLimit-Reset`
   :::column-end:::
   :::column span="2":::
       Time at which, if all resource consumption stopped immediately, tracked usage would return to 0 TSTUs. Expressed in Unix epoch time.
   :::column-end:::
:::row-end:::
---

## Work tracking, process, & project limits

Azure DevOps imposes limits for the number of projects you can have in an organization and the number of teams you can have within each project. Also be aware of limits for work items, queries, backlogs, boards, dashboards, and more. For more information, see [Work tracking, process, and project limits](../../organizations/settings/work/object-limits.md).

## Wiki

In addition to the usual [repository limits](../../repos/git/limits.md#repository-size), wikis defined for a project are limited to 25 MB per single file. 

## Service connections

There are no per-project limits placed on creating service connections. However, there might be limits, which are imposed through Microsoft Entra ID. For additional information, review the following articles:

- [Microsoft Entra service limits and restrictions](/azure/active-directory/enterprise-users/directory-service-limits-restrictions)
- [Azure subscription and service limits, quotas, and constraints](/azure/azure-resource-manager/management/azure-subscription-service-limits)

## Related articles

- [Track work, manage processes, and set project limits](../../organizations/settings/work/object-limits.md)
- [Configure and customize Azure Boards](../../boards/configure-customize.md)
- [Monitor usage](../../organizations/accounts/usage-monitoring.md)
- [Understand Git limits](../../repos/git/limits.md)
- [Follow best practices for avoiding hitting rate limits](integration-bestpractices.md)
