---
title: Install extensions for on-premises servers
description: Find and install extensions for Team Foundation Server (TFS) and Azure DevOps Server from the Visual Studio Marketplace
ms.topic: conceptual
ms.prod: devops
ms.technology: devops-marketplace
ms.assetid: 0ff7d264-68b7-4f4a-a666-b57175b5fdb8 
ms.manager: jillfra
ms.author: chcomley
author: chcomley
ms.date: 07/11/2019
monikerRange: '>= tfs-2015 < azure-devops'
---

# Install extensions for on-premises servers

**Azure DevOps Server | TFS 2018 | TFS 2017 | TFS 2015.3**

To add new features and capabilities to your Azure DevOps Server or Team Foundation Server (TFS), 
install extensions from the 
[Visual Studio Marketplace](https://marketplace.visualstudio.com/azuredevops). 

> [!TIP]
> To learn about building your own extensions, 
> see [developing](https://aka.ms/vsoextensions) 
> and [publishing](https://aka.ms/vsmarketplace-publish) extensions.

## Prerequisites

- You must be a [Project Collection Administrator](../organizations/security/set-project-collection-level-permissions.md) 
with [**Edit collection-level information** permissions](../organizations/security/permissions.md#collection) 
If you don't have permissions, you can [request extensions](request-extensions.md) instead.

- For paid extensions, you need an 
[Azure subscription](https://azure.microsoft.com/pricing/purchase-options/) 
to bill your purchase. If you don't have an Azure subscription, 
you can create a new subscription when you make your first purchase. 

> [!NOTE]
> To use an existing Azure subscription for billing,
> you must have at least Co-administrator permissions for that subscription. 
> If you don't have permissions, have an Azure Account Administrator 
> or Service Administrator go to the [Azure portal](https://azure.microsoft.com/) and 
> [add you as Co-administrator](/azure/billing-add-change-azure-subscription-administrator) 
> to the Azure subscription that you want to use for billing. 
> Co-administrator permissions are available only in the Azure portal.

Your project collection reuses your Azure subscription 
for future Marketplace purchases. 
[Where can I find more info about Azure billing?](faq-extensions.md#q-how-do-i-get-support-for-the-visual-studio-marketplace)]

::: moniker range="<= tfs-2018"

<a name="connected-tfs"></a>

## Install TFS extensions from the Marketplace

::: moniker-end

::: moniker range="tfs-2017"

* [Connect to TFS](#connected-tfs), so you can install [free, preview, and paid extensions](faq-extensions.md#difference).

::: moniker-end

::: moniker range="tfs-2015"

* Working with TFS 2015 Update 3, or disconnected from TFS 2017? 
[Download extensions, then upload them to TFS](#disconnected-tfs) to 
[install free and preview extensions](faq-extensions.md#difference). 

::: moniker-end

::: moniker range="<= tfs-2018"

1. From your TFS home page (```https://{server}:8080/tfs/```), 
   go to the project collection where you want to install the extension.

2. From your project collection, 
   go to the Marketplace.

   <img alt="Browse Marketplace in new navigation" src="_shared/_img/browse-marketplace2-new.png" style="border: 1px solid #CCCCCC" />

3. Find and select the extension that you want to install.

   <img alt="Select a TFS extension" src="_img/get-tfs-extensions/connected/marketplace-select-extension.png" style="border: 1px solid #CCCCCC" />

   TFS is connected to the Marketplace, so the Marketplace automatically filters and shows on-premises extensions only.

4. Based on the extension that you select, install or buy the extension.

   *   For free or preview extensions, select **Install**.
   *   For extensions that you haven't paid for access yet, select **Buy**.
   *   For extensions that you've already [paid for access](faq-extensions.md#paid-access), 
   expand **Buy**, and select **Install for paid users**.

   <img alt="Install or buy the extension" src="./_img/get-tfs-extensions/connected/buy-test-manager-extension.png" style="border: 1px solid #CCCCCC" />

5. Confirm the project collection where you want to install this extension.

   <img alt="Select project collection" src="./_img/get-tfs-extensions/connected/select-team-project-collection.png" style="border: 1px solid #CCCCCC" />

6. If you chose a paid extension, 
   select the [Azure subscription](https://azure.microsoft.com/pricing/purchase-options/) 
   that you'll use to pay for extension access.

   <img alt="For paid extensions, select an Azure subscription for billing" src="./_img/get-tfs-extensions/connected/select-azure-subscription.png" style="border: 1px solid #CCCCCC" />

   Select the number of users who need paid access to the extension.

   <img alt="Select number of users who need paid extension access" src="./_img/get-tfs-extensions/connected/select-extension-users.png" style="border: 1px solid #CCCCCC" />

7. Finish installing your extension. 

8. If you installed a paid extension, 
   make sure to [assign the extension to users who need access](install-extension.md#assign-paid-extensions-to-users). 
   Otherwise, you can go to your project collection to use your extension. 
   Also, tell your team about this extension, 
   so they can start using its capabilities too. 

   <img alt="Extension installed" src="./_img/get-tfs-extensions/connected/assign-extension-to-users.png" style="border: 1px solid #CCCCCC" />

   [Need help?](faq-extensions.md) 

<a name="disconnected-tfs"></a>

## Install TFS extensions when disconnected

While you're disconnected from TFS, you can install free and preview extensions by downloading them, uploading them to your TFS, 
and then installing them in a project collection. You can't install paid extensions when you're disconnected from TFS.

### Who can upload extensions?

[Team Foundation Administrators](/azure/devops/server/admin/add-administrator-tfs#server) 
with [**Edit instance-level information** permissions](../organizations/security/permissions.md#server) 
can upload extensions.

### Who can install extensions?

[Project Collection Administrators](../organizations/security/set-project-collection-level-permissions.md) 
with [**Edit collection-level information** permissions](../organizations/security/permissions.md#collection) 
can install extensions. If you don't have permissions, you can [request extensions](request-extensions.md) instead.

<a name="difference"></a>

### Download from the Marketplace

1. Sign in to the [Marketplace > Azure DevOps](https://marketplace.visualstudio.com/azuredevops).

2. Find the extension that you want to install.

   <img alt="View" src="_img/get-tfs-extensions/standalone/marketplace-find-extension.png" style="border: 1px solid #CCCCCC" />    

   <img alt="View" src="_img/get-tfs-extensions/standalone/marketplace-find-extension2.png" style="border: 1px solid #CCCCCC" />   

3. Download and save your extension.

   <img alt="Download and save your extension" src="./_img/get-tfs-extensions/standalone/download-extension.png" style="border: 1px solid #CCCCCC" />

::: moniker-end

::: moniker range="tfs-2015"

### Upload extension to TFS

1. Go to your TFS home page (```https://{server}:8080/tfs/```). 

1. Browse for your downloaded TFS extensions (```https://{server}:8080/tfs/_gallery```).

   **TFS 2015 Update 3**

   <img alt="Browse TFS extensions" src="./_img/get-tfs-extensions/standalone/browse-for-extensions.png" style="border: 1px solid #CCCCCC" />

::: moniker-end

::: moniker range="tfs-2017"

### Upload extension to TFS

1. Go to your TFS home page (```https://{server}:8080/tfs/```). 

1. Browse for your downloaded TFS extensions (```https://{server}:8080/tfs/_gallery```).

   <img alt="Browse TFS extensions" src="./_img/get-tfs-extensions/standalone/browse-tfs-extensions-new.png" style="border: 1px solid #CCCCCC" />

::: moniker-end

::: moniker range="<= tfs-2018"

### Upload extension to TFS

1. Go to your TFS home page (```https://{server}:8080/tfs/```). 

1. Browse for your downloaded TFS extensions (```https://{server}:8080/tfs/_gallery```).

2. Manage your extensions.

   <img alt="Manage extensions" src="./_img/get-tfs-extensions/standalone/manage-extensions.png" style="border: 1px solid #CCCCCC" />

3. Upload the extension that you downloaded.

	<img alt="Find and upload your downloaded extension" src="./_img/get-tfs-extensions/standalone/upload-extension.png" style="border: 1px solid #CCCCCC" />

	[[Why can't I upload extensions?](faq-extensions.md#q-why-cant-i-upload-extensions-to-tfs)]

### Install extension in your project collection

1. Select and install the extension that you just uploaded. 

	<img alt="Select extension, then select Install" src="./_img/get-tfs-extensions/standalone/install-extension.png" style="border: 1px solid #CCCCCC" />

1. Choose the project collection where you want to install the extension.

	<img alt="Select project collection, select Continue" src="./_img/get-tfs-extensions/standalone/choose-collection.png" style="border: 1px solid #CCCCCC" />

2. Review the permissions that the extension gets when it's installed. Finish installing your extension.

	<img alt="Review the permissions granted to this extension" src="./_img/get-tfs-extensions/standalone/confirm.png" style="border: 1px solid #CCCCCC" />

   You can now go to your project collection to use your extension. Also, remember to tell your team about this extension, so they can start using its capabilities too. 

## Install pre-installed extensions (first-party) for disconnected TFS

>[!NOTE] 
> This section is only for adding pre-installed extensions (first-party), if you're installing extensions that
> aren't pre-installed with TFS, head to the [Disconnected TFS section](#disconnected-tfs).

With first-party extensions that come pre-installed with TFS, there is an alternate method of installation that prevents compatibility issues.

In this case, you can manage extensions in disconnected TFS by following the steps below:

1. Hover over the shopping bag icon and select **Manage extensions**

	![Manage extensions](./_img/get-tfs-extensions/standalone/manage-extensions.png)

2. Once on the Extensions page, select **Browse local extensions**

	![Browse local extensions](./_img/get-tfs-extensions/standalone/browse-local-extensions.png)

3. Scroll down until you see the Plan and track category, which includes **Delivery Plans**. Select **Delivery Plans**.

   ![Delivery plans extension](./_img/get-tfs-extensions/standalone/delivery-plans.png)

4. You're redirected to a local extension page for Delivery Plans where you select **Install**. This works when you are both online and offline.

	![Delivery plans extension gallery](./_img/get-tfs-extensions/standalone/delivery-plans-gallery.png)

::: moniker-end

::: moniker range="> tfs-2018 < azure-devops"

<a name="connected-devops"></a>

## Install Azure DevOps Server extensions from the Marketplace

1. Open your Azure DevOps Server home page (`https://{server}:DefaultCollection`).

2. Open the extensions menu and choose **Browse Marketplace**.

   ![Browse Marketplace](_img/get-devops-extensions/install-devops-extension-01.png)

3. Find the extension that you want to install. Use the search box to filter the list of extensions.

   ![Select an extension](_img/get-devops-extensions/install-devops-extension-02.png)

4. Select the extension and choose **Get** if it is a paid extension, or **Get it free**.
   Or, for some third-party extensions, choose **Get Started** to show pricing information
   and extension-specific installation instructions.

   ![Get the extension](_img/get-devops-extensions/install-devops-extension-04.png)

   If you do not have permission to install the extension, you can request an administrator
   install it for you. Your request is [stored in Azure DevOps Server](#review-ext)
   ready for attention from an administrator.

5. Select the project collection where you want to install this extension and choose **Install**.

   ![Select project collection](_img/get-devops-extensions/install-devops-extension-06.png)

6. After installation is complete, go to the project collection or return to the Marketplace to find other extensions. 

   ![Installation done](_img/get-devops-extensions/install-devops-extension-07.png)

<a name="disconnected-devops"></a>

## Install Azure DevOps Server extensions from the local gallery

Several extensions are pre-installed in the local extensions gallery.
Users can install these extensions without requiring an external connection to Marketplace or the internet.

> [!TIP]
> Extensions that have previously been installed from Marketplace appear in the 
> local gallery automatically so that they can easily be installed into other project collections. 

1. Open the extensions menu and choose **Manage Extensions**.

   ![Manage extensions](_img/get-devops-extensions/install-devops-extension-13.png)

2. In the Extensions page, choose **Browse local extensions**

   ![Browse local extensions](_img/get-devops-extensions/install-devops-extension-09.png)

3. Choose the entension you want to install.

   ![Choose a local extension](_img/get-devops-extensions/install-devops-extension-10.png)

4. Select the project collection where you want to install this extension and choose **Install**.

   ![Select project collection](_img/get-devops-extensions/install-devops-extension-06.png)

5. After installation is complete, go to the project collection or return to the Marketplace to find other extensions. 

   ![Installation done](_img/get-devops-extensions/install-devops-extension-07.png)

## Manage Azure DevOps Server extensions

Use the **Extensions** page to manage installed extensions.

### Disable or uninstall an extension

1. Open the extensions menu and choose **Manage Extensions**.

   ![Manage extensions](_img/get-devops-extensions/install-devops-extension-13.png)

1. In the **Manage** tab, open the shortcut menu for the extension.

   ![Disable or uninstall an extension](_img/get-devops-extensions/install-devops-extension-12.png)

2. Choose **Disable** or **Uninstall**, as required.

<a name="review-ext"></a>

### Review and install requested extensions

1. Open the extensions menu and choose **Manage Extensions**.

   ![Manage extensions](_img/get-devops-extensions/install-devops-extension-13.png)

2. Open the **Requested** tab, review requests, and approve or reject them, as appropriate.

3. Filter the list of requests by using the **Status** drop-down list at the right end of the tabs bar.

   ![Filtering the list of extensions](_img/get-devops-extensions/install-devops-extension-15.png)

::: moniker-end
