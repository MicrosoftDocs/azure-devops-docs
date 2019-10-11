---
title: Add and manage projects to support collaboration on software development
titleSuffix: Azure DevOps
ms.custom: seodec18
description: Index to articles about project management.
ms.prod: devops
ms.technology: devops-accounts
ms.assetid: 753DE499-C3D1-426B-B2B0-855D99669223
ms.topic: conceptual
ms.manager: jillfra
ms.author: chcomley
author: chcomley
ms.date: 03/11/2019
monikerRange: '>= tfs-2013'
---

# Manage Projects

[!INCLUDE [temp](../../_shared/version-vsts-tfs-all-versions.md)]

Structure your projects by adding area paths, iteration paths, and teams.  

## 5-minute quickstarts

- [Get started as an administrator](../../user-guide/project-admin-tutorial.md?toc=/azure/devops/organizations/toc.json&bc=/azure/devops/organizations/breadcrumb/toc.json)
- [Share your project vision](project-vision-status.md)
- [Define area paths](../settings/set-area-paths.md)
- [Define iteration paths or sprints](../settings/set-iteration-paths-sprints.md)
- [Add a team](../settings/add-teams.md)
- [Add users to a project or team](../security/add-users-team-project.md)
- [Add administrators or set permissions at the project or collection level](../security/set-project-collection-level-permissions.md)  

## Step-by-step tutorials

- [Change individual permissions, grant select access to specific functions](../security/change-individual-permissions.md)
- [Grant or restrict permissions to select tasks](../security/restrict-access.md)
-  [Customize a project (Azure DevOps Services)](../settings/work/customize-process.md)

## Concepts

- [Customize a project](../../reference/on-premises-xml-process-model.md)
- [About areas and iterations](../settings/about-areas-iterations.md)
- [About teams and Agile tools](../settings/about-teams-and-settings.md)  
- [Resources granted to project members](resources-granted-to-project-members.md)  

## How-to guides

::: moniker range="azure-devops"

- [Create a project](create-project.md)
- [Rename a project](rename-project.md)
- [Delete a project](delete-project.md)
- [Restore a project](restore-project.md)
- [Change service visibility](../settings/set-services.md)
- [Connect to projects](connect-to-projects.md)

::: moniker-end

::: moniker range="<= azure-devops-2019"

- [Create a project](create-project.md)
- [Rename a project](rename-project.md)
- [Delete a project](delete-project.md)
- [Change service visibility](../settings/set-services.md)
- [Connect to projects](connect-to-projects.md)

::: moniker-end

## Reference

- [Default permissions and access](../../organizations/security/permissions-access.md)
- [Permission lookup guide (Security)](../security/permissions-lookup-guide.md)
- [Azure DevOps data protection overview](../../organizations/security/data-protection.md)

## Resources

- [Get Started using Azure DevOps](../../get-started/index.yml)
- [Marketplace & Extensibility](../../marketplace-extensibility/index.yml)
- [Public Projects](../public/index.md)
- [Migrate from Azure DevOps Server to Azure DevOps Services](../../migrate/migrate-from-tfs.md)

## Q & A

### Q: Can I move or transfer a project to another organization or collection? 

**A:** Not without losing data. You can't move a project from one collection/organization to another collection/organization without losing data. You can either manually copy resources and leave some behind, or some third party tool, such as [Opshub Visual Studio Migration Utility](https://www.opshub.com/products/opshub-visual-studio-migration-utility/) that copies data using the REST APIs. 
 
