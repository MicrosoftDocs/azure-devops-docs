---
ms.subservice: azure-devops-service-hooks
ms.topic: conceptual
title: Troubleshoot your service hooks integrations | Azure DevOps Services
description: Troubleshoot problems with the services you've integrated with your organization.
ms.assetid: dcf00653-24c5-4ab6-b9e8-19ec098bbb66
ms.custom: engagement-fy23
ms.author: chcomley
author: chcomley
monikerRange: '<= azure-devops'
ms.date: 12/02/2022
---

# Troubleshoot service hooks

[!INCLUDE [version-lt-eq-azure-devops](../includes/version-lt-eq-azure-devops.md)]

Use this article for general troubleshooting guidance and answers to frequently asked questions (FAQs).

## View activity and debug problems

The **Service Hooks** page in the web access admin shows your recent activity (last 14 days)
for each subscription, and whether a subscription is enabled, disabled, or restricted.

You can access detailed history about a subscription including detailed request/response data, which is useful for debugging a problematic service or subscription.

::: moniker range=">= azure-devops-2019"

1. To view the activity and status of your subscriptions, go to the **Service Hooks** page. 

   :::image type="content" source="media/troubleshoot/devops-service-hooks.PNG" alt-text="Screenshot showing view of activity and status of subscriptions.":::
   
1. To view detailed activity for a subscription, including full request, response, and event payload data, select a subscription in the table, and then select **History**.

   :::image type="content" source="media/troubleshoot/detailed-activity.png" alt-text="Screenshot showing detailed view of activity for a subscription.":::

::: moniker-end

::: moniker range="tfs-2018"

1. To view the activity and status of your subscriptions,
go to the Service Hooks page. 

   :::image type="content" source="media/troubleshoot/service-hooks.png" alt-text="Screenshot showing view of subscription status.":::

1. To view detailed activity for a subscription, including full request, response,
and event payload data, select a subscription in the table and select **History**.

   :::image type="content" source="media/troubleshoot/detailed-activity.png" alt-text="Screenshot showing view of detailed activity for subscription.":::

::: moniker-end

## Subscription failures and probation (restricted)

### Failure types
Failures from a Service Hooks notification are grouped into the following categories:

* Terminal Failures
* Transient Failures
* Enduring Failures

#### Terminal Failures

The only Terminal Failure is HTTP Status Code 410 (Gone). When a subscription sees a Terminal Failure, it's automatically disabled no matter its prior status.

#### Transient Failures

When a subscription sees a Transient Failure, it attempts to resend the notification up to eight times, with an increasing delay between each attempt. Transient Failures include the following codes:
* 408 (Request Timeout)
* 502 (Bad Gateway)
* 503 (Service Unavailable)
* 504 (Gateway Timeout)

#### Sequence of retries for transient failures

|Retry #  |Wait time  |
|---------|---------|
|Before retry 1    |  wait ~1 second      |
|Before retry 2     | wait ~2 seconds (total delay of 3 seconds)        |
|Before retry 3     | wait ~4 seconds (total delay of 7 seconds)        |
|Before retry 4    | wait ~8 seconds (total delay of 15 seconds)        |
|Before retry 5     | wait ~16 seconds (total delay of 31 seconds)        |
|Before retry 6     | wait ~32 seconds (total delay of 63 seconds)      |
|Before retry 7    | wait ~60 seconds (max backoff time, total delay of 123 seconds)  |
|Before retry 8    | wait ~60 seconds (max backoff time, total delay of 183 seconds)|

If the notification exhausts all of its retries and continues to see a Transient Failure for each attempt, the subscription stops trying to send the notification, and treats the notification as if it saw an Enduring Failure.

#### Enduring Failures

Enduring Failures include all other HTTP failure codes, for example: 404 (Not Found), 500 (Internal Server Error), and so on.

When a subscription sees an Enduring Failure, it's placed on [probation](#probation).

### Probation

While on probation, a subscription is limited in the number of notifications it can send. If the subscription continues to hit Enduring Failures, then it gets increasingly limited, and eventually disabled. If the subscription receives a successful response while on probation, it gets restored to a fully enabled state.

#### Sequence of seven maximum retries while subscription is on probation

When a subscription is in probation, any new events are lost. Once a retry is successful, the subscription is enabled, and events are published again.

|Retry #  |Wait time  |
|---------|---------|
|Before retry 1    |  wait ~20 minutes      |
|Before retry 2     | wait ~40 minutes (total probation time of 1 hour)        |
|Before retry 3     | wait ~1 hour 20 minutes (total probation time of 2.33 hours)        |
|Before retry 4    | wait ~2 hours 40 minutes (total probation time of 5 hours)        |
|Before retry 5     | wait ~5 hours 20 minutes (total probation time of 10.33 hours)        |
|Before retry 6     | wait ~10 hours 40 minutes (total probation time of 21 hours)        |
|Before retry 7    | wait ~15 hours (max backoff time, total probation time of 36 hours)        |

After seven retries, the subscription status gets set to _DisabledBySystem_ if notifying the consumer fails.

## FAQs

<!-- BEGINSECTION class="m-qanda" -->

### Q: What is the payload limit of a service-hook? 

**A:** The payload limit is 2 MB. Larger payloads cause degradation in performance and reliability. As a best practice, service-hooks should limit the payload to 2 MB or less. 


### Q: What does the status Enabled (restricted) mean? 

**A:** A subscription becomes restricted if too many failures occur. Enabled (restricted) is the same as being on probation.

### Q: What does the status Disabled (due to failures) mean?

A: A subscription is automatically disabled after a series of consecutive failures over a prolonged period or a _terminal failure_ is encountered.  _Transient failures_ types are retried several times before being declared a failure.  _Enduring failure_ types aren't retried.  The following are examples of each type of failure.
* Transient: 408 (Request Timeout), 502 (Bad Gateway), 503 (Service Unavailable), 504 (Gateway Timeout)
* Terminal: 410 (Gone)
* Enduring: All failures that aren't transient or terminal

### Q: What does the status Disabled (user left project) mean?

**A:** The user who created the subscription is no longer a member of the team.


### Q: What should I try if a service hook isn't working? 

**A:** Check the following items:

- Confirm the subscription is enabled

- Confirm the subscription settings are correct (both event filters and actions)

- Look at the history, especially if there are failures

### Q: Can I grant a regular project user the ability to view and manage service hook subscriptions for a project? 

**A:** By default, only project administrators have these permissions. To grant them to other users directly, you can use the [command line tool](../organizations/security/manage-tokens-namespaces.md) or the [Security](/rest/api/azure/devops/security/) REST API. 

### Q: Can I programmatically create subscriptions? 

**A:** Yes, use [REST APIs](./create-subscription.md).

<!-- ENDSECTION -->
