---
title: Safeguard your Azure DevOps environment against risky extensions
description: Learn why certain extensions are marked as high-risk and how to protect your Azure DevOps environment from such risks.
ms.topic: conceptual
ms.subservice: azure-devops-marketplace
ms.author: alexpysanets
author: chcomley
ms.date: 03/26/2025
#customer intent: As an Azure DevOps administrator, I want to identify and manage high-risk extensions so that I can protect my organization from potential security vulnerabilities and other risks.
---

# Safeguard your Azure DevOps environment against risky extensions

When you install or upgrade extensions, some might be flagged as high-risk. You can check their high-risk status in the **Extensions** section of **Organization settings**. This designation is due to several potential reasons, explained in this article.

We recommend that you only install, upgrade, or use such extensions if you trust them and their publishers. Otherwise, you risk exposing your Azure DevOps organization to various issues, including security vulnerabilities, malfunctioning extensions, and the misuse of extensions with overly permissive scopes.

![Screenshot showing high-risk extensions in Organization settings.](media/high-risk-extensions/High-Risk-Extensions-General-List.png)  
  
For more information about extensions, see the [developing](../extend/overview.md) and [publishing](../extend/publish/overview.md) overviews.

## Manage extensions with overly permissive scopes

Extensions that require overly permissive scopes are considered high-risk. These scopes can potentially expose your Azure DevOps organization to security vulnerabilities and other risks. To determine whether a particular scope falls into the high-risk category, see the [Extension manifest reference](../extend/develop/manifest.md).

If you identify an extension with high-risk scopes, evaluate the necessity of those scopes for your use case. Consider reaching out to the extension publisher for more information or to request a reduction in the required scopes. If the extension's functionality doesn't justify the high-risk scopes, we recommend that you don't install or use the extension to safeguard your Azure DevOps environment.

![Screenshot showing high-risk extension details.](media/high-risk-extensions/High-Risk-Extensions-Risky-Scope-Details.png)

## Discontinue use of unpublished extensions

Extensions that were once public on the [Visual Studio Marketplace](https://marketplace.visualstudio.com/) but were later unpublished by their publishers are considered high-risk. Removing an extension from the marketplace typically indicates that it's no longer maintained. We recommend that you discontinue the use of such extensions and uninstall them from your Azure DevOps organization.

![Screenshot showing high-risk extension details with unpublished status.](media/high-risk-extensions/High-Risk-Extensions-Unpublished-Details-focus.png)

## Use pipeline decorators safely

[Pipeline decorators](../extend/develop/add-pipeline-decorator.md) are extensions that can modify and enhance all pipelines within your organization. They have the ability to inject steps, tasks, or other functionality into your pipelines, which can significantly affect your build and release processes. Therefore, use them cautiously and only if you trust their publishers.

When you evaluate pipeline decorators, consider the following actions:
- **Review the source code**: If the source code is available, review it to understand what the decorator does and ensure it aligns with your security and operational standards.
- **Check publisher reputation**: Ensure the publisher is reputable and has a history of maintaining their extensions.
- **Test in a controlled environment**: Before deploying a pipeline decorator in a production environment, test it in a controlled environment to observe its behavior and effect on your pipelines.
- **Monitor for changes**: Keep an eye on updates to the decorator and review any changes to ensure they don't introduce new risks.

By taking these precautions, you can safely use pipeline decorators to enhance your Azure Pipelines while minimizing potential risks.

![Screenshot showing authorization screen for newly added scopes with pipeline decorator included.](media/high-risk-extensions/High-Risk-Extensions-Pipeline-Decorator-Authorization.png)

## Identify high risk scopes flagged in the Visual Studio Marketplace

The same information on high-risk scopes is also available in the [Azure DevOps Visual Studio Marketplace](https://marketplace.visualstudio.com/azuredevops). 

If you identify an extension with high-risk scopes, evaluate the necessity of those scopes for your use case. Consider reaching out to the extension publisher for more information or to request a reduction in the required scopes. If the extension's functionality doesn't justify the high-risk scopes, we recommend that you don't install or use the extension to safeguard your Azure DevOps environment.

![Screenshot showing Azure DevOps' Visual Studio Marketplace acquisition screen for a high risk extension.](media/high-risk-extensions/High-Risk-Extensions-Pipeline-Decorator-Acquisition.png)

> [!NOTE]
> This feature is being released gradually. If you don't see the high-risk scope in your [Azure DevOps Visual Studio Marketplace](https://marketplace.visualstudio.com/azuredevops) user interface, wait a few more days until it becomes available for you.

## Use the unpublished state field in the Azure DevOps Services REST API

With the Azure DevOps Services REST API [version 7.2](/rest/api/azure/devops/extensionmanagement/installed-extensions/list?view=azure-devops-rest-7.2&tabs=HTTP#extensionstateflags&preserve-view=true), the string field `unpublished` is now available. This field allows you to programmatically identify extensions that are unpublished from the Visual Studio Marketplace. 

By using this field, you can automate the process of detecting and managing unpublished extensions within your Azure DevOps organization. This helps ensure that you're aware of any extensions that are no longer maintained and can take appropriate action to safeguard your environment.

## Related articles

- [Secure your Azure DevOps environment](../organizations/security/security-overview.md)
- [Publish extensions to the Visual Studio Marketplace](../extend/publish/overview.md)
- [Add pipeline decorators](../extend/develop/add-pipeline-decorator.md)
- [Reference the extension manifest](../extend/develop/manifest.md)
