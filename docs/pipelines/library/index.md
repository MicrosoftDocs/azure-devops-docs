---
title: Library for Azure Pipelines and Team Foundation Server
ms.custom: seodec18
description: Understand the library in Azure Pipelines and Team Foundation Server (TFS)
ms.assetid: 45C5042C-9E31-41F8-B63B-6D5C241EEC21
ms.prod: devops
ms.technology: devops-cicd
ms.topic: conceptual
ms.manager: jillfra
ms.author: ahomer
author: alexhomer1
ms.date: 08/24/2018
monikerRange: '>= tfs-2017'
---

# Library

[!INCLUDE [version-tfs-2017-rtm](../_shared/version-tfs-2017-rtm.md)]

::: moniker range="<= tfs-2018"
[!INCLUDE [temp](../_shared/concept-rename-note.md)]
::: moniker-end

*Library* is a collection of _shared_ build and release assets for a project.
Assets defined in a library can be used in multiple build and release pipelines of the project.
The **Library** tab can be accessed directly in Azure Pipelines and Team Foundation Server (TFS).

At present, the library contains two types of assets: [variable groups](variable-groups.md) and [secure files](secure-files.md).

> Variable groups are available to only release pipelines in TFS 2017 and earlier. They are available to build and release pipelines in TFS 2018 and in Azure Pipelines. 
Task groups and service connections are available to build and release pipelines in TFS 2015 and newer, and in Azure Pipelines.

<h2 id="security">Library Security</h2>

All assets defined in the **Library** tab share a common security model. You can control who can define new items in a library,
and who can use an existing item. **Roles** are defined for library items, and **membership** of these roles governs the
operations you can perform on those items.

| Role on a library item | Purpose |
|-------------------------|---------|
| Reader | Members of this role can view the item. |
| User | Members of this role can use the item when authoring build or release pipelines. For example, you must be a 'User' for a variable group to be able to use it in a release pipeline.  |
| Administrator | In addition to all the above operations, members of this role can manage membership of all other roles for the item. The user that created an item is automatically added to the Administrator role for that item.

The security settings for the **Library** tab control access for _all_ items in the library. Role memberships for individual items are automatically inherited from those of the **Library** node.
In addition to the three roles listed above, the **Creator** role on the library defines who can create new items in the library, but it does not include **Reader** and **User** permissions and cannot be used to manage permissions for other users.
By default, the following groups are added to the **Administrator** role of the library: **Build Administrators**, **Release Administrators**, and **Project Administrators**.

[!INCLUDE [rm-help-support-shared](../_shared/rm-help-support-shared.md)]
