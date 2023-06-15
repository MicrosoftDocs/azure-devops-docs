---
title: Request and approve extensions for Azure DevOps
description: Request extensions and approve extension requests for a project or project collection in Azure DevOps
ms.custom: engagement-fy23
ms.topic: how-to 
ms.subservice: azure-devops-marketplace
ms.assetid: 93a88b2c-559d-43ae-aaa9-e75ba33272fe
ms.author: chcomley
author: chcomley
ms.date: 10/06/2022
monikerRange: '<= azure-devops'
---

# Request and approve extensions

[!INCLUDE [version-lt-eq-azure-devops](../includes/version-lt-eq-azure-devops.md)]

If you don't have permissions to install extensions, you can request extensions instead. 
Project Collection Administrators receive an email when another project member requests an extension. Azure DevOps automatically installs the extension once it's approved.

## Prerequisites

- To request extensions, you must be a contributor for your organization.
- To approve extensions, you must be a member of the Project Collection Administrators group and have [**Edit collection-level information** permissions](../organizations/security/permissions.md#collection).

## Request an extension

::: moniker range=" azure-devops"

1. Sign in to your organization (```https://dev.azure.com/{yourorganization}```).

2. Select ![gear icon](../media/icons/gear-icon.png) **Organization settings**.

    ![Open Organization settings](../media/settings/open-admin-settings-vert.png)

3. Select **Extensions**, and then **Browse marketplace**.

   ![Select Extensions and Browse marketplace](media/select-extensions-browse-marketplace.png)  

4. Select an extension to install.
5. If you don't have permission to install the extension, you can request it now.

Review your requests after the Marketplace sends the request to your Project Collection Administrator.

Your requests appear on the **Extensions** page, **Requested** tab.

![Requested tab for extensions](media/requested-extensions.png)

::: moniker-end

::: moniker range="= azure-devops-2019 || azure-devops-2020"

1. Sign in to your organization (```https://dev.azure.com/{yourorganization}```).

2. Select ![gear icon](../media/icons/gear-icon.png) **Admin settings**.

    ![Open Admin settings](../media/settings/open-admin-settings-server.png)

3. Select **Extensions**, and then **Browse Marketplace**.

    ![Select Browse Marketplace](media/browse-marketplace-2019.png)

4. Select an extension to install.
5. If you don't have permission to install the extension, request it now.

Review your requests after the Marketplace sends the request to your Project Collection Administrator.

Your requests appear on the **Extensions** page, **Requested** tab.

![Requested tab for extensions page](media/requested-extensions-2019.png)

::: moniker-end

::: moniker range="tfs-2018"

1. Select an extension from the [Visual Studio Marketplace > Azure DevOps](https://marketplace.visualstudio.com/azuredevops).

2. Select the project collection where you want to install the extension. If you don't have permission to install the extension, request it now.

You can review your requests after the Marketplace sends the request to your Project Collection or Project Administrator.

Your requests appear on your **Manage extensions** page.

![On the Extension page, a drop-down list to the right of the search window has two options, Browse Marketplace and Manage extensions (highlighted).](media/manage-extensions-vsts.png)

::: moniker-end

To approve extensions, you must have [**edit collection-level information** permissions](../organizations/security/permissions.md#collection).

## Approve an extension request

::: moniker range=">= azure-devops-2019"

1. Go to your Azure DevOps project, ```https://dev.azure.com/{organization}/{project}```.

1. Select the shopping bag icon, and then **Manage extensions**.

   ![Manage extensions](../organizations/billing/media/shared/marketplace-shopping-bag-manage-extensions.png)

2. Review and approve your requested extensions.

   > [!div class="mx-imgBorder"] 
   > ![Extensions tab, requested extensions](media/get-tfs-extensions/connected/approve-request-tfs.png)

   After you approve extension requests, the extensions are automatically installed.

3. [Assign those extensions](./install-extension.md) to users who need access.

::: moniker-end

::: moniker range="tfs-2018"

1. Go to your project, ```https://{server}:8080/tfs/{team-project-collection}/{team-project}```.

1. Select the shopping bag icon, and then **Manage extensions**.

   ![On the Extension page, a drop-down list to the right of the search window has two options, Browse Marketplace and Manage extensions (highlighted)](../organizations/billing/media/shared/marketplace-shopping-bag-manage-extensions-prev-nav.png)

2. Review and approve your requested extensions.

   > [!div class="mx-imgBorder"] 
   > ![Extensions tab, requested extensions](media/get-tfs-extensions/connected/approve-request-tfs.png)

   After you approve extension requests, the extensions automatically get installed.

3. [Assign those extensions](./install-extension.md) to users who need access.

::: moniker-end

Tell your team about installed extensions, so they can start using their capabilities.

## Related articles

- [FAQs](faq-extensions.yml)
- [Set up billing](../organizations/billing/set-up-billing-for-your-organization-vs.md)
- [Azure DevOps pricing](https://azure.microsoft.com/pricing/details/devops/azure-devops-services/)
- [Assign access levels by group membership](../organizations/accounts/assign-access-levels-by-group-membership.md)
