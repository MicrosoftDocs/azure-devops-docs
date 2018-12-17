---
ms.prod: devops
ms.technology: devops-collab
ms.topic: conceptual
title: Troubleshoot your service hooks integrations | Azure DevOps Services
description: Troubleshoot problems with the services you have integrated with your Azure DevOps Services organization
ms.assetid: dcf00653-24c5-4ab6-b9e8-19ec098bbb66
ms.manager: douge
monikerRange: '>= tfs-2017'
ms.author: elbatk
author: elbatk
ms.date: 08/04/2016
---

# Troubleshoot a service hooks issue

## View activity and debug problems

The Service Hooks tab in the web access admin shows your the recent activity (last 14 days)
for each subscription, and whether a subscription is enabled, disabled, or restricted.

Detailed history about a subscription can be accessed,
as well as detailed request/response data
(useful for debugging a problematic service or subscription).

1. To view the activity and status of your subscriptions,
go to the Service Hooks tab. 

   <img alt="View the activity" src="./_img/troubleshoot/service-hooks.png" style="border: 1px solid #CCCCCC" />

2. To view detailed activity for a subscription, including full request, response,
and event payload data, select a subscription in the table and click **History**.

   <img alt="View detailed activity for a subscriptions" src="./_img/troubleshoot/detailed-activity.png" style="border: 1px solid #CCCCCC" />

## FAQs

<!-- BEGINSECTION class="m-qanda" -->

#### Q: What does the status Enabled (restricted) mean? 

A: A subscription becomes restricted if too many failures occur.

#### Q: What does the status Disabled (due to failures) mean?

A: A subscription is automatically disabled after a series of consecutive failures over a prolonged period or a _terminal failure_ is encountered.  _Transient failures_ types are retried several times before being declared a failure.  _Enduring failure_ types are not retried.  The follow are examples of each type of failure.
* Transient: 408 (Request Timeout), 502 (Bad Gateway), 503 (Service Unavailable), 504 (Gateway Timeout)
* Terminal: 410 (Gone)
* Enduring: All failures that are not transient or terminal

#### Q: What does the status Disabled (user left project) mean?

A: The user who created the subscription is no longer a member of the team.


#### Q: What should I try if a service hook is not working? 

A: Check these:

- Confirm the subscription is enabled.

- Confirm the subscription settings are correct (both event filters and actions).

- Look at the History, especially if there are failures.

#### Q: Can I grant a regular project user the ability to view and manage service hook subscriptions for a project? 

A: Use tfssecurity.exe from the command line, for example:

````
    tfssecurity /a+ /collection: https://dev.azure.com/fabrikam-fiber-inc/DefaultCollection ServiceHooks PublisherSecurity/abcdef00-abcd-0000-0000-abcdef000000 EditSubscriptions n:fabrikamfiber4@hotmail.com ALLOW
```

**Note:** The GUID represents the project ID which can be retrieved using the [Projects](/azure/devops/integrate/previous-apis/tfs/projects) REST API.

#### Q: Can I programmatically create subscriptions? 

A: Yes, use [REST APIs](./create-subscription.md).

<!-- ENDSECTION -->