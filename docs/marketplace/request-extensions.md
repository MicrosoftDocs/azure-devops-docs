---
title: Request extensions for your Azure DevOps
description: Request extensions for a project collection in Azure DevOps Server or for a project in Azure DevOps Services
ms.topic: conceptual
ms.prod: devops
ms.technology: devops-marketplace
ms.assetid: 93a88b2c-559d-43ae-aaa9-e75ba33272fe
ms.manager: jillfra
ms.author: chcomley
author: chcomley
ms.date: 07/02/2019
monikerRange: '>= tfs-2015'
---

# Request extensions

[!INCLUDE [version-vsts-tfs-2015-on](../boards/_shared/version-vsts-tfs-2015-on.md)]

If you don't have permissions to install extensions, you can request extensions instead. In this article, learn how to request extensions.

::: moniker range=" azure-devops"

1. Sign in to your organization (```https://dev.azure.com/{yourorganization}```).

2. Select ![gear icon](../_img/icons/gear-icon.png) **Organization settings**.

    ![Open Organization settings](../_shared/_img/settings/open-admin-settings-vert.png)

3. Select **Extensions**, and then **Browse marketplace**.

  ![Select Extensions and Browse marketplace](_img/select-extensions-browse-marketplace.png)  

4. Select an extension to install.
5. If you don't have permission to install the extension, you can request it now.

Review your requests after the Marketplace sends the request to your project administrator.

Your requests appear on the **Extensions** page, **Requested** tab.

![Requested extensions](_img/requested-extensions.png)](_shared/_img/requested-extensions.png)

Your Project Collection Administrator can review your request after they get it.

::: moniker-end

::: moniker range="= azure-devops-2019"

1. Sign in to your organization (```https://dev.azure.com/{yourorganization}```).

2. Select ![gear icon](../_img/icons/gear-icon.png) **Admin settings**.

    ![Open Admin settings](../_shared/_img/settings/open-admin-settings-server.png)

3. Select **Extensions**, and then **Browse Marketplace**.

    ![Select Browse Marketplace](_shared/_img/browse-marketplace-2019.png)

4. Select an extension to install.
5. If you don't have permission to install the extension, you can request it now.

Review your requests after the Marketplace sends the request to your project administrator.

Your requests appear on the **Extensions** page, **Requested** tab.

    ![Requested extensions page](_shared/_img/requested-extensions-2019.png)

Your Project Collection Administrator can review your request after they get it.

::: moniker-end

::: moniker range=">=tfs-2015 < azure-devops-2019"

1. Try to install the extension from the [Visual Studio Marketplace](https://marketplace.visualstudio.com/azuredevops), Azure DevOps tab.

2. Select the project collection (TFS) where you want to install the extension. If you don't have permission to install the extension, you can request it now.

You can review your requests after the Visual Studio Marketplace sends the request to the project collection or project administrator.

Your requests appear on your **Manage extensions** page.

![Manage extensions](_img/manage-extensions-vsts.png)

Your Project Collection Administrator can review your request after they get it.

::: moniker-end