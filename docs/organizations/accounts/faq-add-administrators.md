---
title: Troubleshoot adding administrators to projects and project collections
titleSuffix: Azure DevOps Services
ms.custom: seodec18
description: Learn the answers to frequently asked questions (FAQs), about adding administrator to projects and collections
ms.assetid: 7ad07299-c9c5-4748-bf31-6518356ee0d0
ms.prod: devops
ms.technology: devops-accounts
ms.topic: conceptual
ms.manager: jillfra  
ms.author: chcomley
author: chcomley
ms.date: 03/05/2019
monikerRange: 'azure-devops'
---

# Troubleshoot adding administrators to projects and project collections

[!INCLUDE [version-vsts-only](../../_shared/version-vsts-only.md)]

#### Q: When do I need to add someone to the project collection administrator role in Azure DevOps?

A: It varies. For most organizations that use Azure DevOps, project collection administrators manage the collections that members of the **Team Foundation Administrators** group create. Members of the **Project Collection Administrators** group don't create the collections themselves. Project collection administrators also perform many operations that are required to maintain the collection. Operations include creating team projects, adding users to groups, modifying the settings for the collection, and so on.

#### Q: What are the optimal permissions to administer a project collection across all of its components and dependencies?

A: Project collection administrators must be members of the following groups or have the following permissions:

- Team Foundation Server: A member of the **Project Collection Administrators** group, or have the appropriate [collection-level permissions](../../organizations/security/permissions.md#collection) set to **Allow**.

- SharePoint Products: If the collection is configured with a site collection resource, then a member of the **Site Collection Administrators** group.

- Reporting Services: If the collection is configured with reporting resources, then a member of the **Team Foundation Content Manager** group.

#### Q: I'm an admin, but I don't have permission to add a project collection administrator. What do I need?

A: The following permissions are required:

- You must belong to the **Project Collection Administrators** group, or your **View Server-Level Information** and **Edit Server-Level Information** permissions must be set to **Allow**.

- To add permissions for SharePoint Products, you must be a member of the **Site Collection Administrators** or **Farm Administrators** groups for SharePoint Products.

- To add permissions for Reporting Services, you must be a member of the **Content Managers** or **Team Foundation Content Managers** groups for Reporting Services.

> [!Important]
> To perform administrative tasks like creating project collections, your user requires administrative permissions. The service account that the Team Foundation Background Job Agent uses must have certain permissions granted to it. For more information, see [Service accounts and dependencies in Team Foundation Server](/azure/devops/server/admin/service-accounts-dependencies-tfs) and [Team Foundation Background Job Agent](/azure/devops/server/architecture/background-job-agent).

#### Q: Where can I find information about each individual permission?

A: You can find detailed information about individual permissions and their relationship to default security groups in the [Permission and groups reference](../../organizations/security/permissions.md). To give a user project administration permissions, complete the following steps:

1. From the team page, select the settings icon ![Settings icon](_img/admin-gear-icon.png) to go to the team administration page.

2. Add the user to the **Project Administrators** group.

