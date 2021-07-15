---
title: Library for Azure Pipelines
ms.custom: seodec18, pipelinesresourcesrefresh
description: Understand the library or build and release assets in Azure Pipelines.
ms.assetid: 45C5042C-9E31-41F8-B63B-6D5C241EEC21
ms.topic: conceptual
ms.author: ronai
author: RoopeshNair
ms.date: 07/14/2021
monikerRange: '>= tfs-2017'
---

# Library of assets

[!INCLUDE [version-tfs-2017-rtm](../includes/version-tfs-2017-rtm.md)]

A *library* is a collection of build and release assets for an Azure DevOps project.
Assets defined in a library can be used in multiple build and release pipelines of the project.
The **Library** tab can be accessed directly in Azure Pipelines.

The library contains two types of assets: [variable groups](variable-groups.md) and [secure files](secure-files.md).

Variable groups are only available to release pipelines in TFS 2017 and earlier. They're available to build and release pipelines in TFS 2018 and in Azure Pipelines. Task groups and service connections are available to build and release pipelines in TFS 2015 and newer, and in Azure Pipelines.

:::image type="content" source="media/assets-library.png" alt-text="Screenshot of Pipelines assets Library.":::

::: moniker range="<= tfs-2018"
[!INCLUDE [temp](../includes/concept-rename-note.md)]
::: moniker-end

## Library security

All assets defined in the **Library** share a common security model. You can control who can define new items in a library,
and who can use an existing item. **Roles** are defined for library items, and membership of these roles governs the
operations you can perform on those items.

| Library item role | Purpose |
|-------------------------|---------|
| Reader | Can view the item. |
| User | Can use the item when authoring build or release pipelines. For example, you must be a 'User' for a variable group to be able to use it in a release pipeline.  |
| Administrator | In addition to all the above operations, members of this role can manage membership of all other roles for the item. The user that created an item is automatically added to the Administrator role for that item.

The security settings for the library control access for _all_ items in the library. Role memberships for individual items get automatically inherited from those of the **Library** node.
In addition to the three roles listed above, the **Creator** role on the library defines who can create new items in the library, but it does not include **Reader** and **User** permissions and cannot be used to manage permissions for other users.
By default, the following groups are added to the **Administrator** role of the library: **Build Administrators**, **Release Administrators**, and **Project Administrators**.

[!INCLUDE [rm-help-support-shared](../includes/rm-help-support-shared.md)]
