---
title: Service hooks in Azure DevOps Services REST APIs
description: Learn about service hooks and how to set up actions to take when specific events occur in Azure DevOps Services.
ms.assetid: ec039cf9-2731-4451-b9b8-5711b229c0ff
ms.subservice: azure-devops-ecosystem
ms.topic: conceptual
monikerRange: 'azure-devops'
ms.author: chcomley
author: chcomley
ms.date: 03/25/2022
---

# Service hooks in Azure DevOps

[!INCLUDE [version-eq-azure-devops](../../includes/version-eq-azure-devops.md)]

When you use the [Subscriptions](../../service-hooks/overview.md#create-a-subscription) REST APIs, you can programmatically create a subscription that performs an action on an external (consumer) service when a specific event occurs in a project. For example, you can create a subscription to notify your service when a build fails.

Supported events:
- Build completed
- Code pushed (for Git projects)
- Pull request create or updated (for Git projects)
- Code checked in (TFVC projects)
- Work item created, updated, deleted, restored or commented on

You can configure filters on your subscriptions to control which events trigger an action. For example, you can filter the build completed event based on the build status. For a complete set of supported events and filter options, see the [event reference](../../service-hooks/events.md).

For a complete set of supported consumer services and actions, see the [consumer reference](../../service-hooks/consumers.md).
