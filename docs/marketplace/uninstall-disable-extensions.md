---
title: Uninstall disable extensions in Azure DevOps
titleSuffix: Azure DevOps
description: Uninstall, disable, or remove extensions for Azure DevOps
ms.topic: conceptual
ms.prod: devops
ms.technology: devops-marketplace
ms.assetid: fa4924f0-6013-4911-b0d5-04717ecfde0f
ms.manager: jillfra
ms.author: chcomley
author: chcomley
ms.date: 07/03/2019
monikerRange: '>= tfs-2015'
---
 
# Uninstall or disable extensions

[!INCLUDE [version-vsts-tfs-2015-on](../boards/_shared/version-vsts-tfs-2015-on.md)]

When you don't need an extension anymore, you can uninstall or disable the extension. This article shows you how.

> [!NOTE]
> Charges continue for a paid extension until you [reduce all users to zero (0) for this extension](../organizations/billing/change-number-paid-extension-users.md).

## Prerequisites

You must be a [Project Collection Administrator](../organizations/security/set-project-collection-level-permissions.md) with [**Edit collection-level information** permissions](../organizations/security/permissions.md#collection) to uninstall or disable extensions.

::: moniker range="azure-devops"

## Uninstall or disable extensions in Azure DevOps Services

1. Sign in to your organization (```https://dev.azure.com/{yourorganization}```).
2. Select ![gear icon](../_img/icons/gear-icon.png) **Organization settings**.
   
   ![Open Organization settings](../_shared/_img/settings/open-admin-settings-vert.png)

3. Select **Extensions**, and then select the extension that you want to uninstall or disable.

   ![Select uninstall or disable for extension](_img/org-settings-select-extension.png)

4. Select **Uninstall** or select the ellipses (**...**), and then select **Disable**.

   ![Disable or uninstall extension](_img/disable-or-uninstall-extension.png)

::: moniker-end

::: moniker range=">= tfs-2015 <= azure-devops-2019"

## Uninstall extensions from the local gallery in TFS or Azure DevOps Server

1. Navigate to the local gallery management portal, (```http://{server}/_gallery/manage```).

2. For the desired extension, select the ellipses (**...**), and then select **Remove**.

   ![Remove extension](_img/remove-extension-TFS.png)

::: moniker-end

::: moniker range=">= tfs-2015 <= azure-devops-2019"

## Uninstall extensions in a Team Foundation Server Collection

1. Navigate to the local gallery management portal, (```http://{server}:8080/tfs/_gallery/manage```).

2. For the desired extension, select the ellipses (**...**), and then select **Remove**.

   ![Remove extension](_img/remove-extension-TFS.png)

::: moniker-end







