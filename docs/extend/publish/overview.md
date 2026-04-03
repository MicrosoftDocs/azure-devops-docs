---
ms.subservice: azure-devops-ecosystem
title: Package and publish extensions
titleSuffix: Azure DevOps
description: Package, publish, share, and manage extensions for Azure DevOps in the Visual Studio Marketplace.
ms.assetid: 77b385a2-069a-4704-9a17-ad9f79a36f17
ai-usage: ai-assisted
ms.topic: how-to
monikerRange: '<= azure-devops'
ms.author: chcomley
author: chcomley
ms.date: 04/03/2026
ms.custom: engagement-fy23, sfi-image-nochange, UpdateFrequency3
---

# Package and publish extensions

[!INCLUDE [version-lt-eq-azure-devops](../../includes/version-lt-eq-azure-devops.md)]

After you [develop your extension](../get-started/node.md), package and publish it to the [Visual Studio Marketplace](https://marketplace.visualstudio.com/azuredevops). The Marketplace is the global repository for private and public extensions, integrations, and other offers from Microsoft.

> [!NOTE]
> For information on the discovery properties available in your extension's manifest file that helps users discover and learn about your extension, see the [Extension Manifest Reference](../develop/manifest.md#discoveryprops).

## Prerequisites

[!INCLUDE [](./includes/before-publishing.md)]

## Create a publisher

[!INCLUDE [](./includes/create-publisher.md)]

<a id="package"></a>

## Package your extension

To upload your extension, package it as a VSIX 2.0-compatible .vsix file.
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

   A message displays indicating your extension is successfully packaged:

   ```
   === Completed operation: create extension ===
   - VSIX: C:\my-first-extension\AnnetteNielsen.my-first-extension-1.0.0.vsix
   - Extension ID: my-first-extension
   - Extension Version: 1.0.0
   - Publisher: AnnetteNielsen
   ```

> [!NOTE]
> Increment the version in the manifest with every update.
> Use the `--rev-version` switch to automatically increment the *patch* version number and save it to your manifest.

### Check package size

If the packaged `.vsix` exceeds 50 MB, optimize it:

- **Deduplicate dependencies** — Declare shared dependencies once in the extension package.
- **Fetch at runtime** — Use the tool installer library to pull dependencies at runtime instead of bundling them. This library caches tools by version on self-hosted agents. It doesn't work in disconnected (no internet) scenarios, so note that limitation in your documentation.
- **Tree-shake** — Use Webpack to remove unused code from task bundles.

## Publish your extension

[!INCLUDE [Package_extension](../includes/procedures/publish.md)]

## Share your extension

Share your extension with an organization before you can install it in Azure DevOps. To share an extension, do the following tasks:

1. From the [Marketplace management portal](https://aka.ms/vsmarketplace-manage), select your extension from the list, right-click, and then choose **Share/Unshare** or **Publish/Unpublish**, depending on the extension.

   :::image type="content" source="../get-started/media/share-menu.png" alt-text="Screenshot of menu selection, Share/Unshare.":::

1. Select **Organization**, and then enter the name of your organization. Select **Enter**.

   :::image type="content" source="../get-started/media/share-dialog.png" alt-text="Screenshot of Enter button.":::

1. Close the panel.

Your extension can now be installed into this organization.

## Install your extension

To install your shared extension, do the following steps.

1. In the Marketplace, select your extension to open its overview page.

   :::image type="content" source="../get-started/media/details-page2.png" alt-text="Screenshot of the Overview page.":::

   > [!NOTE]
   > Since your extension is private, only you and members of the organization it's shared with can see this page.

2. Select **Get it free** to start the installation process. Select the organization you shared the extension with from the dropdown menu.

   :::image type="content" source="../get-started/media/install-dialog.png" alt-text="Screenshot showing extension installation dialog.":::

3. Select **Install**.

Congratulations! You installed your extension into an organization and you're ready to try it.

## Try your extension

1. Select **Proceed to organization** at the end of the installation wizard to go to the home page of the organization the extension was installed to (`https://dev.azure.com/{organization}`).
2. Refresh your browser.
3. Open **Organization settings**, and then select **Extensions**.

   :::image type="content" source="../get-started/media/organization-settings-extensions.png" alt-text="Screenshot of Organization settings, Extensions page.":::

You should see the new extension on the **Installed** tab.

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

During development, keep your extension private so only shared organizations can see it. When you're ready, set the [public flag](../develop/manifest.md#public-flag) to `true` in your manifest to list it publicly.

### Qualifications

Public Marketplace listings must meet the following requirements:

- Works with or extends Azure DevOps.
- You or your company own, develop, and are licensed to distribute the extension.
- The extension is actively maintained.

Microsoft might request a demo and review of your planned Marketplace entry content.

## Top Publisher

The Top Publisher program is available only for publishers with Azure DevOps extensions or integrations. It doesn't apply to Visual Studio IDE or Visual Studio Code extension publishers.

:::image type="content" source="media/top-publisher.png" alt-text="Screenshot of the Top Publisher badge.":::

The program recognizes publishers who demonstrate commitment to their customers through exemplary policies, quality, reliability, and support. Once you become a Top Publisher, all your public offerings display the badge.

### Top Publisher requirements

The Marketplace assigns the badge after reviewing the publisher across the following criteria:

- Privacy policy
- Licensing policy
- Support policy
- Documentation
- Q&A responsiveness
- Ratings and reviews
- Active uptake and install count
- At least one public Azure DevOps extension with more than 5,000 installs and an active install count exceeding 1,000

For more information on adding policies to your offering, see the [extension manifest](../develop/manifest.md).

Before applying, update your publisher profile:

1. Sign in to the [publisher management portal](https://marketplace.visualstudio.com/manage/publishers).
1. Select the publisher and complete the **About you** section in the **Details** tab.

   :::image type="content" source="media/microsoft-about-you-section.png" alt-text="Screenshot of the section about you for Microsoft publishers.":::

1. Save your changes and select **View profile** to verify how it appears to users.

> [!NOTE]
> This program certifies the publisher, not the security of their extensions. Review the [safety information](../overview.md#safety-information) when evaluating offerings from any publisher.

## Apply to be a Top Publisher

1. Sign in to the [Marketplace management portal](https://marketplace.visualstudio.com/manage/publishers).
1. Select the publisher and go to the **Top Publisher** tab. This tab appears only if you have one or more global Azure DevOps extensions or integrations.
1. If you meet the requirements and are the publisher's owner, select **Apply**. The Marketplace team reviews your application and responds within 10 business days.

The team might also consider active uptake, install counts, and ratings and reviews before granting the badge. Microsoft reserves the right to grant, reject, or revoke the Top Publisher badge at any time.

Once granted, all future updates and offerings from the publisher must continue to meet the requirements.

## Respond to Marketplace extension reviews

You can respond to reviews that customers leave for your extensions. Select **Reply** next to a review if you have owner, creator, or contributor permissions.

You can leave only one response. Avoid using reviews as a support forum. Instead, provide a support alias for the reviewer to contact, resolve the issue externally, and then update your reply with the resolution.

### Guidelines for publisher responses

- Use **Reply** only to respond to a review.
- Treat all comments as feedback — don't debate, criticize, or argue.
- Focus on addressing questions or problems directly.
- If you need more details, ask the customer to contact you by email. Update your reply when you resolve the problem.
- Flag inappropriate reviews (spam, abusive, or offensive content) for Marketplace review.

## Request to void a review

You can appeal to void a review if the reported issue is caused by the Marketplace or underlying platform. If valid, Marketplace admins void the rating. Select **Appeal** from the ratings and review section on your extension hub page.

## Unpublish an extension

You can unpublish free extensions if you no longer want to offer them in the Marketplace. Common scenarios:

- You replaced the extension with a new one.
- You need to temporarily remove it while fixing a problem.
- You published as public by mistake.

Certain criteria must be met for an extension to be unpublished or removed:

| Action    | Requirements                                                  |
|-----------|---------------------------------------------------------------|
| Unpublish | Only **free extensions** might be unpublished.                  |
| Remove    | Your extension must have **zero (0)** installs to be removed. |

> [!IMPORTANT]
> If you must remove your extension because of legal or security problems, contact [Customer Support at the Developer Community](https://developercommunity.visualstudio.com/AzureDevOps). We review the request and manually delete the extension. 

1. Select the extension on your [publisher page](https://aka.ms/vsmarketplace-manage) and choose **Unpublish** on the menu. 

   Your extension is unpublished immediately from the Marketplace, and new users can't install it. Ratings and reviews for your extension stay intact. 

To offer your extension again in the Marketplace, select **Publish** from the menu.

If your extension has zero installs, you can choose to remove it completely from the Marketplace. To do so, select **Remove** from the menu. You can't reverse this action.

<a id="extension-report">  </a>

## Extension reporting hub

After your extension is published, use the **Reports** feature to track performance. Go to your [publisher page](https://aka.ms/vsmarketplace-manage) and select the extension, or select **Reports** on the extension details page.

### Acquisition

The **Acquisition** tab shows:

- Aggregated acquisition for the selected period
- Acquisition split by downloads and Azure DevOps installs (free) or trials and purchases (paid)
- Daily trend of page views with acquisition
- Conversion percentage from page views to acquisition

For paid extensions, transactional details include date, organization name, trial end date, and quantity. Use the [Contact](#contact) action to communicate with users.

### Uninstall

The **Uninstall** tab shows:

- Number of organizations that uninstalled
- Daily uninstall trend
- Detailed feedback shared during uninstalls
- Top uninstall reasons

Use search to filter by text and dates. For paid extensions, use the [Contact](#contact) action to reach users.

### Ratings and review

The **Ratings and review** tab shows:

- Average rating for the selected period versus overall
- Average rating by number of reviewers
- Daily rating trend

From the details section, you can **Reply** to reviews, **Edit** previous responses, or **Appeal** to void a rating caused by a Marketplace or platform issue.

### Q&A

The **Q&A** tab lists all questions from extension users, with unanswered queries at the top. Reply to or edit previous responses to manage engagement.

### Export to Excel

All report data is available for download in XLS format for custom reporting.

### Contact

For paid extensions, the **Contact** action lets you communicate with users. This feature requires Contributor or higher access on the extension.

The Marketplace brokers the first communication — customer email addresses aren't shared directly. Only users who opted in receive the email.

> [!IMPORTANT]
> Follow the guidelines on transactional and promotional communication. Publishers who spam users get blocklisted and lose access to **Contact** for all extensions.

**Transactional communication** (allowed): Critical security notices, transaction confirmations, product recall notices, specific feedback requests, and service discontinuation notices.

**Promotional emails** (restricted): Event invitations, marketing program announcements, value-added content offers, and newsletters with promotional content.

For more information, see the [Marketplace Publisher Agreement](https://aka.ms/vsmarketplace-agreement).

| Terminology | Description |
|-------------|-------------|
| **Page views** | Total number of extension detail page views. Repeated views are counted. |
| **Azure DevOps Services installs** | Total number of organizations the extension is installed in. Repeated installs on the same organization get counted. |
| **Azure DevOps Server installs** | Total number of collections the extension is installed in. Repeated installs on the same collection get counted. Disconnected server data isn't available. |

## Related content

- [Develop a web extension](../get-started/node.md)
- [Extension manifest reference](../develop/manifest.md)
- [Extensibility points](../reference/targets/overview.md)

