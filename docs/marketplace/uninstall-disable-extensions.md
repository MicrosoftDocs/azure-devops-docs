---
title: Uninstall or disable extensions in Azure DevOps or Team Foundation Server (TFS)
titleSuffix: Azure DevOps
description: Uninstall or disable extensions for Azure DevOps or Team Foundation Server
ms.topic: conceptual
ms.prod: devops
ms.technology: devops-marketplace
ms.assetid: fa4924f0-6013-4911-b0d5-04717ecfde0f
ms.manager: jillfra
ms.author: chcomley
author: chcomley
ms.date: 06/19/2019
monikerRange: '>= tfs-2015'
---

 
# Uninstall or disable extensions

[!INCLUDE [version-vsts-tfs-2015-on](../boards/_shared/version-vsts-tfs-2015-on.md)]

When you don't need an extension anymore, you can uninstall or disable this extension.

> [!NOTE]
> Charges continue for a paid extension until you [reduce all users to zero (0) for this extension](../organizations/billing/change-number-paid-extension-users.md).

## Prerequisites

You must be a [Project collection administrator](../organizations/security/set-project-collection-level-permissions.md) with [**Edit collection-level information** permissions](../organizations/security/permissions.md#collection) to uninstall or disable extensions.

## Disable or uninstall extensions

::: moniker range=">= azure-devops-2019"

1. Sign in to your organization, ```https://dev.azure.com/{yourorganization}```.

2. Select the shopping bag icon and **Manage extensions**.

   ![Shopping bag icon, Manage extensions](../organizations/billing/_img/_shared/marketplace-shopping-bag-manage-extensions.png)

3. Right click or choose the ellipses (...) on the extension and then choose **uninstall** or **disable**.

   ![Disable or uninstall extension](_img/disable-or-uninstall-extension.png)

::: moniker-end

::: moniker range="<= tfs-2018"

1. Sign in to your organization, ```https://dev.azure.com/{yourorganization}```.

2. Select the shopping bag icon and **Manage extensions**.

   ![Shopping bag icon, Manage extensions](../organizations/billing/_img/_shared/marketplace-shopping-bag-manage-extensions.png)

3. Right click or choose the ellipses (...) on the extension and then choose **uninstall** or **disable**.

   ![Uninstall or disable extensions](_img/disable-uninstall-extension.png)

::: moniker-end
