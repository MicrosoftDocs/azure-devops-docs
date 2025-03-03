---
title: Request and approve extensions for Azure DevOps
description: Request extensions and approve extension requests for a project or project collection in Azure DevOps
ms.custom: engagement-fy23
ms.topic: how-to 
ms.subservice: azure-devops-marketplace
ms.assetid: 93a88b2c-559d-43ae-aaa9-e75ba33272fe
ms.author: chcomley
author: chcomley
ms.date: 03/03/2025
monikerRange: '<= azure-devops'
---

# Request and approve extensions

[!INCLUDE [version-lt-eq-azure-devops](../includes/version-lt-eq-azure-devops.md)]

If you don't have permissions to install extensions, you can request extensions instead. When another project member requests an extension, Project Collection Administrators receive an email notification. When a request gets approved, Azure DevOps automatically installs the extension.

## Prerequisites

| Category | Requirements |
|--------------|-------------|
|**Permissions**|- To request extensions: **Contributor** for your organization.<br>- To approve extensions: Member of the **Project Collection Administrators** group and [**Edit collection-level information** permissions](../organizations/security/permissions.md#collection).|

## Request an extension

::: moniker range=" azure-devops"

1. Sign in to your organization (```https://dev.azure.com/{Your_Organization}```).

2. Select ![gear icon](../media/icons/gear-icon.png) **Organization settings**.

    ![Screenshot showing Organization settings button.](../media/settings/open-admin-settings-vert.png)

3. Select **Extensions** > **Browse marketplace**.

   ![Screenshot showing Extensions and Browse marketplace buttons.](media/select-extensions-browse-marketplace.png)  

4. Select an extension to install.
5. If you don't have permission to install the extension, you can request it.

   Review your requests after the Marketplace sends the request to your Project Collection Administrator.

   Your requests appear on the **Extensions** page, **Requested** tab.

   ![Screenshot showing the Requested tab for extensions.](media/requested-extensions.png)

::: moniker-end

::: moniker range="= azure-devops-2019 || azure-devops-2020"

1. Sign in to your organization (```https://dev.azure.com/{Your_Organization}```).

2. Select ![gear icon](../media/icons/gear-icon.png) **Admin settings**.

    ![Screenshot showing Admin settings button.](../media/settings/open-admin-settings-server.png)

3. Select **Extensions** > **Browse Marketplace**.

    ![Screenshot showing Browse Marketplace selection.](media/browse-marketplace-2019.png)

4. Select an extension to install.
5. If you don't have permission to install the extension, request it.

   Review your requests after the Marketplace sends the request to your Project Collection Administrator.

   Your requests appear on the **Extensions** page, **Requested** tab.

   ![Screenshot showing the Requested tab for extensions page.](media/requested-extensions-2019.png)

::: moniker-end

To approve extensions, have [**edit collection-level information** permissions](../organizations/security/permissions.md#collection).

## Approve an extension request

1. Go to your Azure DevOps project, ```https://dev.azure.com/{Your_Organization}/{Your_Project}```.

2. Select the shopping bag icon, and then **Manage extensions**.

   ![Screenshot showing Manage extensions selection.](../organizations/billing/media/shared/marketplace-shopping-bag-manage-extensions.png)

3. Review and approve your requested extensions.

   > [!div class="mx-imgBorder"] 
   > ![Screenshot showing the Extensions tab, requested extensions.](media/get-tfs-extensions/connected/approve-request-tfs.png)

   After you approve extension requests, the extensions are automatically installed.

4. [Assign the extensions](./install-extension.md) to users who need access.

Tell your team about your installed extensions, so they can start using their capabilities.

## Related articles

- [Review FAQs](faq-extensions.yml)
- [Set up billing](../organizations/billing/set-up-billing-for-your-organization-vs.md#set-up-billing)
- [Explore Azure DevOps pricing](https://azure.microsoft.com/pricing/details/devops/azure-devops-services/)
- [Assign access levels by group membership](../organizations/accounts/assign-access-levels-by-group-membership.md)
