---
title: License Azure Artifacts for TFS 2017, 2018, and Azure DevOps Server 2019
description: Quickly start hosting NuGet, npm, or Maven packages in Team Foundation Server
ms.prod: devops
ms.technology: devops-artifacts
ms.topic: quickstart
ms.assetid: 45ECCEFD-3804-4D8C-8567-57C84F92A705
ms.manager: jillfra
ms.author: chcomley
author: chcomley
ms.date: 09/03/2019
monikerRange: '>= tfs-2017 <= azure-devops-2019'
---

# License Azure Artifacts for TFS 2017, 2018, and Azure DevOps Server 2019

**Azure DevOps Server 2019** | **TFS 2018** | **TFS 2017**

::: moniker range="= azure-devops-2019"

Users with a Basic license can use Azure Artifacts on-premises without needing to purchase an Azure Artifacts extension. This means with Azure DevOps Server 2019, users with a Basic license can create and consume Azure Artifacts on-premises if they have a Basic license assigned.

::: moniker-end

::: moniker range=">= tfs-2017 <= tfs-2018"

Azure Artifacts is an *extension* to TFS. The Azure Artifacts extension comes pre-installed in TFS 2017 and 2018.

Azure Artifacts is required for each user that consumes packages from (e.g., nuget restore or npm install) or produces packages to (e.g., nuget push or npm publish) Azure Artifacts feeds. Azure Artifacts is also required for each user that consumes or publishes symbols.

## Install Azure Artifacts in TFS

Azure Artifacts is installed by default for TFS 2017 customers.  You must upgrade to TFS 2017 in order to use Azure Artifacts.

> If the Azure Artifacts extension has been removed, you can install it from the [Marketplace page for Azure Artifacts](https://marketplace.visualstudio.com/items?itemName=ms.feed).

## Assign licenses in TFS

1. From any collection in TFS, hover over the settings menu and select the **Users** page. Then, select **Azure Artifacts**.

   ![Users page in TFS](_img/users-hub-tfs.png)

2. Select **Assign**, enter the user to whom you want to assign licenses, and then select **Ok.**

   * Users with Visual Studio Enterprise subscriptions get Azure Artifacts automatically.  
   * [Ensure that your Visual Studio Enterprise subscribers are assigned VSE access level](../organizations/security/change-access-levels.md).

::: moniker-end
