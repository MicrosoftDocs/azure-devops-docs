---
ms.subservice: azure-devops-ecosystem
title: Package, publish extensions
description: An overview of how to package, publish, unpublish, and share an extension for Azure DevOps.
ms.assetid: 77b385a2-069a-4704-9a17-ad9f79a36f17
ms.custom: engagement-fy23
ms.topic: how-to
monikerRange: '<= azure-devops'
ms.author: chcomley
author: chcomley
ms.date: 10/12/2022
---

# Package and publish extensions

[!INCLUDE [version-lt-eq-azure-devops](../../includes/version-lt-eq-azure-devops.md)]

Once you've [developed your extension](../get-started/node.md), then you can package and publish it to the [Visual Studio Marketplace](https://marketplace.visualstudio.com/azuredevops). The Marketplace is a global repository for private and public extensions, integrations, and other offers from Microsoft.

> [!NOTE]
> For information on the discovery properties available in your extension's manifest file that helps users discover and learn about your extension, see the [Extension Manifest Reference](../develop/manifest.md#discoveryprops).

## Prerequisites

[!INCLUDE [](./includes/before-publishing.md)]

## Create a publisher

[!INCLUDE [](./includes/create-publisher.md)]

<a id="package" />

## Package your extension

To upload your extension, you need to package it as a VSIX 2.0-compatible .vsix file.
Microsoft provides a cross-platform command-line interface (CLI) to package and publish your extension. 

1. Open your extension manifest file (`vss-extension.json`) and set the value of the `publisher` field to the ID of your publisher. For example:
    
    ```json
    {
        ...
        "id": "my-first-extension",
        "publisher": "AnnetteNielsen",
        ...
    }
    ```

2. From a command prompt, run the TFX tool's packaging command from your extension directory.

   ```
   npx tfx-cli extension create
   ```

   When it's completed, you see a message indicating your extension has been successfully packaged:

   ```
   === Completed operation: create extension ===
   - VSIX: C:\my-first-extension\AnnetteNielsen.my-first-extension-1.0.0.vsix
   - Extension ID: my-first-extension
   - Extension Version: 1.0.0
   - Publisher: AnnetteNielsen
   ```

> [!NOTE]
> An extension/integration's version must be incremented on every update. <br>
> If you haven't incremented your extension/integration in the manifest, you should pass the `--rev-version` command line switch. This increments the *patch* version number of your extension and saves the new version to your manifest.

#### Check package size

Check the size of the vsix after it's packaged. If it's greater than 50 MB, you need to optimize it. To do so, see the following considerations:
* De-duplicate the common dependencies, if any, by stating them once in the extension package.
* Fetch things at runtime or during install time rather than providing it within the package. Consider using the tool installer lib to pull tool dependencies at runtime. Using the lib offers benefits where the tool is cached by version so for private agents, it won't get downloaded every build. We made it a lib so it can be used outside of tool installer tasks. But, the task won't work in disconnected scenarios (no internet), which should be in the description / docs for the task.
* Some users have had success with WebPack to tree shake their dependencies in their tasks.
## Publish your extension

[!INCLUDE [Package_extension](../includes/procedures/publish.md)]

## Share your extension

You must share your extension with an organization before you can install it in Azure DevOps. To share an extension, do the following tasks:

1. From the [Marketplace management portal](https://aka.ms/vsmarketplace-manage), select your extension from the list, right-click, and then choose **Share/Unshare** or **Publish/Unpublish**, depending on the extension.

   :::image type="content" source="../get-started/media/share-menu.png" alt-text="Screenshot of menu selection, Share/Unshare.":::

1. Select **Organization**, and then enter the name of your organization. Select **Enter**.

   :::image type="content" source="../get-started/media/share-dialog.png" alt-text="Screenshot of Enter button.":::

1. Close the panel.

   Your extension can now be installed into this organization.

## Install your extension

To install your extension that has been shared, do the following steps.

::: moniker range=">= azure-devops-2019"

1. In the Marketplace, select your extension to open its overview page.

   :::image type="content" source="../get-started/media/details-page2.png" alt-text="Screenshot of the Overview page.":::
:::moniker-end

   > [!NOTE]
   > Because your extension is private, only you and any member of the organization it is shared with can see this page.

1. Select **Get it free** to start the installation process. Select the organization you shared the extension with from the dropdown menu.

   :::image type="content" source="../get-started/media/install-dialog.png" alt-text="Screenshot showing extension installation dialog.":::

1. Select **Install**.

::: moniker-end

::: moniker range=" tfs-2018"

1. From your organization home page, select the Marketplace icon in the top-right corner and choose **Manage extensions**.

   ![Manage Extensions](media/manage-extensions.png)

2. Find the extension under the **Shared with this organization** category.

   ![Shared with me](media/extensions-tab-shared.png)

3. Select the card to open the item in the Marketplace.
4. From the item's details page, select **Install**.
5. Choose the organization you shared the extension with and continue through the installation process.

::: moniker-end 

Congratulations! You installed your extension into an organization and you're ready to try it.

## Try your extension

1. Select **Proceed to organization** at the end of the installation wizard to go to the home page of the organization the extension was installed to (`https://dev.azure.com/{organization}`).

:::moniker range=">= azure-devops-2019"

1. Refresh your browser.
1. Open **Organization settings**, and then select **Extensions**. You should see the new extension on the **Installed** tab.

   :::image type="content" source="../get-started/media/organization-settings-extensions.png" alt-text="Screenshot of Organization settings, Extensions page.":::

:::moniker-end

:::moniker range="tfs-2018"

1. Open your project.

   :::image type="content" source="../get-started/media/account-home2.png" alt-text="Screenshot of project selection.":::

   If there aren't any projects in your organization, you're prompted to create one.

2. Go to the **Code** area and then to the hub contributed by your extension (**My Hub**).

   ![My hub](../get-started/media/my-hub.png)

You should see your new extension in the hub.

:::moniker-end

## Debug your extension

To debug the extension using Visual Studio or Browser Developer Tools, change the manifest by adding the `baseUri` property. This action speeds up the development without the need to redeploy the extension each time you change source code.

```json
{
    ...
    "baseUri": "https://localhost:44300",
    ...
}
```

When you change the manifest, it loads the extension from your local web server instance. For example, IISExpress in Visual Studio.
After you change the manifest, deploy and install this debugging extension only once.

> [!NOTE]
> Run your local web server in SSL mode because Azure DevOps demands that the web page is served from a secure source. Otherwise, you get an error in the browser console during the extension IFRAME loading.

## Update your extension

[!INCLUDE [Update_extension](../includes/procedures/update.md)]

## Make your extension public

For information on making your extension visible to everyone, see [Make your listing public](publicize.md).
   
## Unpublish an extension

You can unpublish free extensions, if you no longer want to offer them in the Marketplace.

The following scenarios cover when you might want to remove your extension from the Marketplace:
  * You developed another extension and no longer want to offer the current one.
  * Your extension has a problem, so you want to remove your extension from the Marketplace until you've resolved the problem.
  * You published your extension as public by mistake.

Certain criteria must be met for an extension to be unpublished or removed:

| Action    | Requirements                                                  |
|-----------|---------------------------------------------------------------|
| Unpublish | Only **free extensions** may be unpublished.                  |
| Remove    | Your extension must have **zero (0)** installs to be removed. |

**Important**: If you must remove your extension because of legal or security problems, contact the [Marketplace team](mailto:vsmarketplace@microsoft.com). We'll review the request and manually delete the extension. 


1. Select the extension on your [publisher page](https://aka.ms/vsmarketplace-manage) and choose **Unpublish** on the menu. 

   Your extension is unpublished immediately from the Marketplace, and new users can't install it. Ratings and reviews for your extension stay intact. 

To offer your extension again in the Marketplace, choose **Publish** on the menu.

You can also choose to remove your extension completely from the Marketplace if your extension has zero (0) installs. To do so, choose **Remove** on the menu. This action can't be undone. 



