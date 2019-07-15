---
title: Request extensions for Azure DevOps
description: Request extensions for a project or project collection in Azure DevOps
ms.topic: quickstart
ms.prod: devops
ms.technology: devops-marketplace
ms.assetid: 93a88b2c-559d-43ae-aaa9-e75ba33272fe
ms.manager: jillfra
ms.author: chcomley
author: chcomley
ms.date: 07/11/2019
monikerRange: '>= tfs-2015'
---

# Quickstart: Request extensions

[!INCLUDE [version-vsts-tfs-2015-on](../boards/_shared/version-vsts-tfs-2015-on.md)]

If you don't have permissions to install extensions, you can request extensions instead. In this quickstart, learn how to request extensions, so you can add further capabilities to Azure DevOps.

## Request an extension

::: moniker range=" azure-devops"

1. Sign in to your organization (```https://dev.azure.com/{yourorganization}```).

2. Select ![gear icon](../_img/icons/gear-icon.png) **Organization settings**.

    ![Open Organization settings](../_shared/_img/settings/open-admin-settings-vert.png)

3. Select **Extensions**, and then **Browse marketplace**.

   ![Select Extensions and Browse marketplace](_img/select-extensions-browse-marketplace.png)  

4. Select an extension to install.
5. If you don't have permission to install the extension, you can request it now.

Review your requests after the Marketplace sends the request to your Project Collection Administrator.

Your requests appear on the **Extensions** page, **Requested** tab.

![Requested extensions](_shared/_img/requested-extensions.png)

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

Review your requests after the Marketplace sends the request to your Project Collection Administrator.

Your requests appear on the **Extensions** page, **Requested** tab.

    ![Requested extensions page](_shared/_img/requested-extensions-2019.png)

Your Project Collection Administrator can review your request after they get it.

::: moniker-end

::: moniker range=">=tfs-2015 < azure-devops-2019"

1. Try to install the extension from the [Visual Studio Marketplace > Azure DevOps](https://marketplace.visualstudio.com/azuredevops).

2. Select the project collection (TFS) where you want to install the extension. If you don't have permission to install the extension, you can request it now.

You can review your requests after the Marketplace sends the request to your Project Collection or Project Administrator.

Your requests appear on your **Manage extensions** page.

![Manage extensions](_img/manage-extensions-vsts.png)

Your Project Collection or Project Administrator can review your request after they get it.

::: moniker-end

## Next steps

> [!div class="nextstepaction"]
  > [Start a trial extension](start-trial-extension.md)

## Related articles

- [FAQs](faq-extensions.md)
- [Set up billing](../organizations/billing/set-up-billing-for-your-organization-vs.md)
- [Azure DevOps pricing](https://azure.microsoft.com/pricing/details/devops/azure-devops-services/)
- [Azure DevOps billing support](https://azure.microsoft.com/support/devops/)
- [Assign access levels and extensions by group membership](../organizations/accounts/assign-access-levels-and-extensions-by-group-membership.md)

