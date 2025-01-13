---
title: High-risk extensions
description: Learn why certain extensions are marked as high-risk.
ms.topic: how-to
ms.custom: engagement-fy23, devx-track-azurecli
ms.subservice: azure-devops-marketplace
ms.author: alexpysanets
author: chcomley
ms.date: 11/18/2024
---

# High-risk extensions

Some extensions are flagged as high-risk during installation or upgrade. You can view their high-risk status in the **Extensions** section of **Organization settings**. This designation is due to one or several reasons explained in this article. We recommend installing, upgrading, or using such extensions only if you trust them and their publishers. Otherwise, you might expose your Azure DevOps organization to various risks, including security vulnerabilities, malfunctioning extensions, and the misuse of extensions with overly permissive scopes.

![Screenshot showing high-risk extensions in Organization settings.](media/high-risk-extensions/High-Risk-Extensions-General-List.png)  
  
For more information about extensions, see the [developing](../extend/overview.md) and [publishing](../extend/publish/overview.md) overviews.

## Extensions with overly permissive scopes

Extensions that require overly permissive scopes are considered high-risk. Refer to [this article](../extend/develop/manifest.md) to determine if a particular scope falls into the high-risk category.

![Screenshot showing high-risk extension details.](media/high-risk-extensions/High-Risk-Extensions-Risky-Scope-Details.png)

## Unpublished extensions

Extensions that were once public on the Visual Studio Marketplace but were later unpublished by their publishers are considered high-risk, as unpublishing typically indicates that an extension is no longer maintained. We recommend discontinuing the use of such extensions and uninstalling them from your Azure DevOps organization.

![Screenshot showing high-risk extension details with unpubished status.](media/high-risk-extensions/High-Risk-Extensions-Unpublished-Details-focus.png)

## Pipeline decorators

[Pipeline decorators](../extend/develop/add-pipeline-decorator.md) are extensions that can modify and enhance all pipelines within your organization. Therefore, use them cautiously and only if you trust their publishers.

![Screenshot showing authorization screen for newly added scopes with pipeline decorator included.](media/high-risk-extensions/High-Risk-Extensions-Pipeline-Decorator-Authorization.png)

## High risk scopes flagged in the Azure DevOps' Visual Studio Marketplace

You will as well see the same information on high risk scopes in the Azure DevOps's Visual Studio Marketplace 

![Screenshot showing Azure DevOps' Visual Studio Marketplace acquisition screen for a high risk extension.](media/high-risk-extensions/High-Risk-Extensions-Pipeline-Decorator-Acquisition.png)

Note: this feature is being released graduadly. So if you dont see the high risk scope in your Azure DevOps's Visual Studio Marketplace user interface, then give it few more days till it is available for you too.

## Addition of the unpublished state field in the Azure DevOps Services REST API

With the Azure DevOps Services REST API [version 7.2](https://learn.microsoft.com/en-us/rest/api/azure/devops/extensionmanagement/installed-extensions/list?view=azure-devops-rest-7.2&amp%3Btabs=HTTP&tabs=HTTP#extensionstateflags), the string field of 'unpublished' is now available too.