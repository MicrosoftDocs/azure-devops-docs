---
title: Manage high privilege scopes, pipeline decorators, and unpublished extensions
description: Learn why certain extensions are marked as high privilege and unpublished and how to best manage them in your Azure DevOps organization.
ms.topic: conceptual
ms.subservice: azure-devops-marketplace
ms.author: pliaros
author: chcomley
ms.date: 04/08/2025
#customer intent: As an Azure DevOps administrator, I want to identify and manage high privilege, pipeline decorators, and unpublished extensions so that I can protect my organization from potential security vulnerabilities and other unexpected behaviour.
---

# Manage high privilege scopes, pipeline decorators, and unpublished extensions

> [!IMPORTANT]
> This feature is in **public preview**. Features in public preview could undergo changes before becoming generally available.

Extensions in Azure DevOps enhance functionality and streamline workflows, but some extensions might pose security vulnerabilities due to their high privilege scopes or unpublished status. This article explains how to identify and manage high privilege, pipeline decorators, and unpublished extensions to protect your Azure DevOps organization from potential security vulnerabilities or unexpected behavior.

By following these practices, you can ensure your organization remains secure while benefiting from the capabilities of Azure DevOps extensions.

## What are high privilege scopes and high privilege extensions?

**High privilege scopes** are permissions that grant extensive access to your Azure DevOps organization's resources. These scopes allow extensions to perform actions such as modifying repositories, accessing sensitive data, or altering pipeline configurations. While these scopes are necessary for certain functionalities, they should be used with caution and only granted to extensions with trusted code and reputable publishers.

Examples of high privilege scopes include:
- Full access to repositories
- Write access to pipelines
- Access to sensitive organizational data

**High privilege extensions** are extensions that make use of one or more high privilege scopes. These extensions have the potential to introduce security vulnerabilities or risks if they are not properly vetted or maintained. It is essential to evaluate these extensions carefully to ensure they align with your organization's security and operational standards.

When managing high privilege extensions, consider the following:
- **Trust the publisher**: Only install extensions from reputable publishers with a history of maintaining their code.
- **Review the requested scopes**: Ensure the requested scopes are necessary for the extension's functionality.
- **Limit usage**: Avoid installing high privilege extensions unless they are critical to your workflows.

## Evaluate the usage of high privilege scopes in Azure DevOps extensions

Few of your already installed extensions might be flagged for high privilege scope usage. You can check their state in the **Extensions** section of **Organization settings**. This designation is due to several potential reasons, explained in this article.

We recommend that you only install, upgrade, or use extensions if you trust their code and their publishers.

This feature only surfaces to the user interface the fact that a specific extension makes use of certain high privilege scopes. If you're looking for virus scans check the [publication process](../extend/publish/overview) too.

![Screenshot showing high privilege extensions in Organization settings.](media/high-privilege-extensions/....png)  
  
For more information about extensions, see the [developing](../extend/overview.md) and [publishing](../extend/publish/overview.md) overviews.


By understanding and managing high privilege scopes and extensions, you can safeguard your Azure DevOps environment while still leveraging the capabilities of trusted extensions.

## Manage extensions with high privilege scopes

Extensions that use high privilege scopes can potentially expose your Azure DevOps organization to security vulnerabilities or other risks. High privilege scopes grant extensive access to your organization's resources, making it essential to evaluate their necessity carefully. To better understand which scopes fall into the high privilege category, see the Supported scopes section of the [Extension manifest reference](../extend/develop/manifest.md).

If you identify an extension with high privilege scopes, take the following actions:
- **Evaluate necessity**: Assess whether the requested scopes are essential for your use case.
- **Contact the publisher**: Reach out to the extension publisher for more information or to request a reduction in the required scopes.
- **Avoid unnecessary risks**: If the extension's functionality doesn't justify the high privilege scopes, we recommend not installing or using the extension to safeguard your Azure DevOps environment.

![Screenshot showing high privilege extension details.](media/high-privilege-extensions/....png)

You can also identify high privilege scopes flagged in the [Azure DevOps Visual Studio Marketplace](https://marketplace.visualstudio.com/azuredevops). The Marketplace provides similar indications to those shown in the admin page for high privilege scopes. 

When selecting an extension with high privilege scopes, think critically about whether the extension's functionality justifies the use of these scopes. Only proceed with installation if you trust the publisher and the extension's code.

![Screenshot showing Azure DevOps' Visual Studio Marketplace acquisition screen for a high privilege extension.](media/high-privilege-extensions/....png)

> [!NOTE]
> This feature is being released gradually. If you don't see the high privilege scope insights in your [Azure DevOps Visual Studio Marketplace](https://marketplace.visualstudio.com/azuredevops) user interface, wait a few more days until it becomes available for you too.

## Discontinue use of unpublished extensions

In the Marketplace, extensions are visually marked to show whether they are unpublished by their publishers.

When an extension is unpublished from the [Visual Studio Marketplace](https://marketplace.visualstudio.com/) by its publisher, it typically signifies that the extension is no longer maintained.

Discontinue the use of unpublished extensions by uninstalling them from your Azure DevOps organization.

![Screenshot showing high privilege extension details with unpublished status.](media/high-privilege-extensions/....png)

## Use pipeline decorators safely

[Pipeline decorators](../extend/develop/add-pipeline-decorator.md) are private extensions that modify and enhance all pipelines within your organization, which can significantly change your build and release processes. Therefore, use pipeline decorator extensions cautiously and only if you trust their publishers and code.

![Screenshot showing authorization screen for newly added scopes with pipeline decorator included.](media/high-privilege-extensions/....png)

## Use the unpublished state field in the Azure DevOps Services REST API

With the Azure DevOps Services REST API [version 7.2](/rest/api/azure/devops/extensionmanagement/installed-extensions/list?view=azure-devops-rest-7.2&tabs=HTTP#extensionstateflags&preserve-view=true), the string field `unpublished` is now available. This field allows you to programmatically identify extensions that are unpublished from the Visual Studio Marketplace. 

By using this field, you can build your own process of detecting and managing unpublished extensions within your Azure DevOps organization. This helps ensure that you're aware of any extensions that are no longer maintained and can take appropriate action to safeguard your organization.

## Related articles

- [Secure your Azure DevOps environment](../organizations/security/security-overview.md)
- [Publish extensions to the Visual Studio Marketplace](../extend/publish/overview.md)
- [Add pipeline decorators](../extend/develop/add-pipeline-decorator.md)
- [Reference the extension manifest](../extend/develop/manifest.md)
