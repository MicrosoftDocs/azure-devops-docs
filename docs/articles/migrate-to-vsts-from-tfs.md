---
title: Migration options for migrating from TFS to Azure DevOps Services
titleSuffix: Azure DevOps Services & TFS
description: Learn about migrating from Team Foundation Server (TFS) to Azure DevOps Services
ms.prod: devops
ms.topic: article
ms.technology: devops-whitepapers
ms.assetid: 3D20B6AC-E8A8-4A6D-B9D8-68ED2F5E0E8D
ms.manager: douge
ms.author: aaronha
author: aaronhallberg
ms.date: 06/22/2017
monikerRange: '>= tfs-2013'
---


# Migration options

**Azure DevOps Services | TFS**

When you decide to make the move from TFS to Azure DevOps Services, you might start fresh with an empty organization. Often, however,
you will have existing code, work items, and other assets that you want to move. There are many approaches to doing this
which vary in both the fidelity of the data transfer and the complexity of the process.

Prior to migrating data, review the differences that exist between [TFS and Azure DevOps Services](../user-guide/about-azure-devops-services-tfs.md).

## Option 1: Copy the most important assets manually

By far the easiest option for moving data into Azure DevOps Services is to manually copy your most important assets and start relatively fresh. 
This can be difficult when you are in the middle of a large project, but you can make it easier if you do some advance planning
and schedule your move when it makes sense for your team.

For example, when the Azure DevOps team chose to move from TFS to Azure DevOps Services, we also decided to 
move from Team Foundation Version Control (TFVC) to Git. This required a fair bit of planning, but when we actually
performed our migration, we created a new Git repo using the "tip" version of our TF VC sources, and left our history
behind in TFS. We also moved our active work items, and left behind all our old bugs, completed user stories and tasks,
and so on.

Here's the general process:

1.	Identify the most important assets that you need to migrate - typically source code, work items, or both. Other assets in TFS - 
build pipelines, test plans, and so forth - are harder to manually migrate. 
2.	Identify a good time to make the transition.
3.	Prepare your target Azure DevOps organizations. Create the organizations and team projects that you need, provision users, and so on.
4.	Migrate your data.
5.	Consider making the source TFS deployments read-only. 

## Option 2: High fidelity database migration.

The TFS & Azure DevOps Services product team provides a high fidelity TFS Database Import Service. A downloadable Migration
Guide is available at [https://aka.ms/TFSImportData](https://aka.ms/TFSImportData). 

<a href="https://aka.ms/TFSImportData">
<img alt="Migration Guide" src="_img\migration-import\VSTSMigrationGuideCover-227x300.png" align="middle" />
</a>

Because the TFS Database Import Service operates at a database level, it can provide a very high fidelity migration. 
If you want to move your existing TFS data into Azure DevOps Services, we strongly recommend using this option.

## Option 3: Using public API-based tools for higher fidelity migration

If for some reason you cannot use the TFS Database Import Service but still want a higher fidelity migration than
Option 1, you can choose from a variety of tools that use public APIs to move data. Generally these tools can provide
a higher fidelity migration than a manual copy of "tip" data, but they are still relatively low fidelity. For example:

- None of them will preserve the dates of TF VC changesets.
- Many of them will not preserve the changed dates of work item revisions.
- None of them will migrate all TFS artifacts.

In general, we only recommend this approach if the extra fidelity beyond a manual copy is critical. If you decide to
take this approach, you might consider hiring a consultant who has experience with one or more of the tools. 
You should definitely consider doing a test migration before doing your final migration.

Many organizations need a very high fidelity migration for only a subset of their work. New work could 
potentially start directly in Azure DevOps Services. Other work, with less stringent fidelity requirements, 
could be migrated using one of the other approaches. You will have to weigh the pros and cons of the 
various approaches against your motivations for moving into Azure DevOps Services and decide for yourself what 
is the right strategy.


## Related notes 
- [About Azure DevOps Services and Team Foundation Server](../user-guide/about-azure-devops-services-tfs.md)  
- [Pricing, Azure DevOps Services](https://azure.microsoft.com/pricing/details/devops/azure-devops-services/)
- [Pricing, TFS](https://visualstudio.microsoft.com/team-services/tfs-pricing/)

<!---
*(c) 2016 Microsoft Corporation. All rights reserved. This document is
provided "as-is." Information and views expressed in this document,
including URL and other Internet Web site references, may change without
notice. You bear the risk of using it.*

*This document does not provide you with any legal rights to any
intellectual property in any Microsoft product. You may copy and use
this document for your internal, reference purposes.*
--> 


