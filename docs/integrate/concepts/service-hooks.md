---
title: Service hooks in VSTS REST APIs
description: Learn about service hooks and how to set up actions to take when specific events occur in VSTS.
ms.assetid: ec039cf9-2731-4451-b9b8-5711b229c0ff
ms.prod: devops
ms.technology: devops-ecosystem
ms.topic: conceptual
ms.manager: douge
monikerRange: '>= tfs-2013'
ms.author: elbatk
author: elbatk
ms.date: 08/04/2016
---

# Service hooks in VSTS
Using the [Subscriptions](https://www.visualstudio.com/en-us/docs/integrate/api/hooks/subscriptions) REST APIs, you can programmatically create a subscription that performs an action on an external (consumer) service when a specific event occurs in a team project. For example, you can create a subscription to notify your service when a build fails.

Supported events:
- build completed
- code pushed (for Git team projects)
- pull request create or updated (for Git team projects)
- code checked in (TFVC team projects)
- work item created, updated, deleted, restored or commented on
- message posted to a team room

You can configure filters on your subscriptions to control which events trigger an action. For example, you can filter the build completed event based on the build status. For a complete set of supported events and filter options, see the [event reference](../../service-hooks/events.md).

For a complete set of supported consumer services and actions, see the [consumer reference](../../service-hooks/consumers.md).