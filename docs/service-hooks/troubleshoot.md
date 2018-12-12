---
ms.prod: devops
ms.technology: devops-collab
ms.topic: conceptual
title: Troubleshoot your service hooks integrations | VSTS
description: Troubleshoot problems with the services you have integrated with your VSTS account
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

#### Q: What should I try if a service hook is not working? 

A: Check these:

- Confirm the subscription is enabled.

- Confirm the subscription settings are correct (both event filters and actions).

- Look at the History, especially if there are failures.

#### Q: Can I grant a regular project user the ability to view and manage service hook subscriptions for a project? 

A: Use tfssecurity.exe from the command line, for example:

```
    tfssecurity /a+ /collection: https://fabrikam-fiber-inc.visualstudio.com/DefaultCollection ServiceHooks PublisherSecurity/abcdef00-abcd-0000-0000-abcdef000000 EditSubscriptions n:fabrikamfiber4@hotmail.com ALLOW
```

**Note:** The GUID represents the team project ID which can be retrieved using the [Projects](https://visualstudio.com/integrate/api/tfs/projects.md) REST API.

#### Q: Can I programmatically create subsciptions? 

A: Yes, use [REST APIs](./create-subscription.md).

<!-- ENDSECTION -->
