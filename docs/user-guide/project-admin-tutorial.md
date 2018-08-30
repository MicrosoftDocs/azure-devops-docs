---
title: Get started as a project admin
description: Learn how to structure a project to support your software development teams
titleSuffix: Azure DevOps Services & TFS 
ms.technology: devops-new-user 
ms.prod: devops
ms.assetid: 
ms.manager: douge
ms.author: kaelli
author: KathrynEE
ms.topic: conceptual
ms.date: 09/05/2018
monikerRange: '>= tfs-2013'
---


# Get started as a project administrator

[!INCLUDE [version-vsts-tfs-all-versions](../_shared/version-vsts-tfs-all-versions.md)]

> [!NOTE]   
> **WORK IN PROGRESS**

Responsible for configuring project-level resources, including:

::: moniker range="vsts" 
- [Area paths](../organizations/settings/set-area-paths.md) and [Iteration paths](../organizations/settings/set-iteration-paths-sprints.md)  
- [Project permissions and repository security](../organizations/security/permissions.md)  
- [Build agents, pools, and service connections](../pipelines/overview.md)  
- [Test](../test/how-long-to-keep-test-results.md) and [release](../pipelines/policies/retention.md) retention policies  
::: moniker-end   


::: moniker range=">= tfs-2013 <= tfs-2018" 
- [Area paths](../organizations/settings/set-area-paths.md) and [Iteration paths](../organizations/settings/set-iteration-paths-sprints.md)  
- [Project permissions and repository security](../organizations/security/permissions.md)  
- [Customize work tracking objects](../reference/customize-work.md)  
- [Build agents, pools, and service connections](../pipelines/overview.md)  
- [Test](../test/how-long-to-keep-test-results.md) and [release](../pipelines/policies/retention.md) retention policies 
::: moniker-end   


### Project collection administrators

::: moniker range="vsts" 

### Organization owners and project collection administrators

Responsible for configuring organization-level resources. These include:

- Manage billing  
- Add and manage projects
- Manage collection-level permissions 
- Customize work tracking processes  
- Install and manage extensions (install custom or [Marketplace extensions](https://marketplace.visualstudio.com/)) 

To get started, see [Manage organizations](../organizations/accounts/organization-management.md) and [Settings](../organizations/settings/index.md).
::: moniker-end   

::: moniker range=">= tfs-2013 <= tfs-2018" 

### Project collection administrators

Responsible for configuring collection-level resources. These include:  
- Add and manage projects
- Manage collection-level permissions 
- Install and manage extensions (install custom or [Marketplace extensions](https://marketplace.visualstudio.com/)) 

To get started, see [Settings](../organizations/settings/index.md).

### TFS administrators

Responsible for installing, upgrading, and maintaining an on-premises TFS deployment. Tasks include:

- Install TFS 
- Update servers running TFS 
- Manage database backups 
- Server administrative settings and permissions 
- Build retention policies
- Add and manage project collections
  
To get started, see [Server Administration (TFS)](/tfs/server/index). 

::: moniker-end   


## Related articles

- [Key concepts](concepts.md)
- [Essential services](services.md)

