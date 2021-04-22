---
title: Service hooks in Azure DevOps Services REST APIs
description: Learn about service hooks and how to set up actions to take when specific events occur in Azure DevOps Services.
ms.assetid: ec039cf9-2731-4451-b9b8-5711b229c0ff
ms.technology: devops-ecosystem
ms.topic: conceptual
monikerRange: 'azure-devops'
ms.author: chcomley
author: chcomley
ms.date: 08/04/2016
---

# Service hooks in Azure DevOps

[!INCLUDE [version-vsts-only](../../includes/version-vsts-only.md)]

Using the [Subscriptions](/azure/devops/service-hooks/overview#create-a-subscription) REST APIs, you can programmatically create a subscription that performs an action on an external (consumer) service when a specific event occurs in a project. For example, you can create a subscription to notify your service when a build fails.

Supported events:
- build completed
- code pushed (for Git projects)
- pull request create or updated (for Git projects)
- code checked in (TFVC projects)
- work item created, updated, deleted, restored or commented on
- message posted to a team room

You can configure filters on your subscriptions to control which events trigger an action. For example, you can filter the build completed event based on the build status. For a complete set of supported events and filter options, see the [event reference](../../service-hooks/events.md).

For a complete set of supported consumer services and actions, see the [consumer reference](../../service-hooks/consumers.md).
