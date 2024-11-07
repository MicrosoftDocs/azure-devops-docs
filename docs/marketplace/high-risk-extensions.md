---
title: High-risk extensions
description: Learn why certain extensions are marked as high-risk.
ms.topic: how-to
ms.custom: engagement-fy23, devx-track-azurecli
ms.subservice: azure-devops-marketplace
ms.author: alexpysanets
author: alexpysanets
ms.date: 11/07/2024
---

# High-risk extensions

Some extensions are flagged as high-risk during installation or upgrade. You can view their high-risk status in the **Extensions** section of **Organization settings**. This designation is due to one of the reasons explained in this article. We recommend installing, upgrading, or using such extensions only if you trust them and their publishers. Otherwise, you might expose your Azure DevOps organization to various risks, including security vulnerabilities, malfunctioning extensions, and the misuse of extensions with overly permissive scopes.

![Screenshot showing high-risk extensions in Organization settings.](media/high-risk-extensions/high-risk-extensions-in-org-settings.png)  
  
For more information about extensions, see the [developing](../extend/overview.md) and [publishing](../extend/publish/overview.md) overviews.

## Extensions with overly permissive scopes

Extensions that require overly permissive scopes for approval by a Project Collection Administrator are considered high-risk. Refer to [this article](../extend/develop/manifest.md) to determine if a particular scope falls into the high-risk category.

![Screenshot showing high-risk extension details.](media/high-risk-extensions/high-risk-extension-details.png)

## Unpublished extensions

Extensions that were once public on the Visual Stuido Marketplace but were later unpublished by their publishers are considered high-risk, as unpublishing typically indicates that an extension is no longer maintained. We recommend discontinuing the use of such extensions and uninstalling them from your Azure DevOps organization.

![Screenshot showing high-risk extension details with unpubished status.](media/high-risk-extensions/high-risk-extension-details-unpublished.png)

## Pipeline decorators

Pipeline decorators are extensions that can modify and enhance all pipelines within your organization. Therefore, use them cautiously and only if you trust their publishers.

![Screenshot showing authorization screen for newly added scopes with pipeline decorator included.](media/high-risk-extensions/high-risk-extensions-pipeline-decorator.png)
