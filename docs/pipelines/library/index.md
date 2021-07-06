---
title: Library for Azure Pipelines
ms.custom: seodec18, pipelinesresourcesrefresh
description: Understand the build and release assets for a project in Azure Pipelines and Team Foundation Server (TFS).
ms.assetid: 45C5042C-9E31-41F8-B63B-6D5C241EEC21
ms.topic: conceptual
ms.author: ronai
author: RoopeshNair
ms.date: 07/06/2021
monikerRange: '>= tfs-2017'
---

# Library for Azure Pipelines

[!INCLUDE [version-tfs-2017-rtm](../includes/version-tfs-2017-rtm.md)]

A *library* is a collection of build and release assets for a project.
Assets defined in a library can be used in multiple build and release pipelines of the project.
You can access the **Library** tab directly in Azure Pipelines.

::: moniker range="<= tfs-2018"
[!INCLUDE [temp](../includes/concept-rename-note.md)]
::: moniker-end

The library contains the following two types of assets:

- [Variable groups](variable-groups.md) - Variable groups are only available to release pipelines in TFS 2017 and earlier. They're available to build and release pipelines in TFS 2018 and in Azure Pipelines. Task groups and service connections are available to build and release pipelines in TFS 2015 and newer, and in Azure Pipelines.
- [Secure files](secure-files.md)

## Library security

All assets defined in the **Library** tab share a common security model. You can control who can define new items in a library and who can use an existing item. **Roles** are defined for library items. **Membership** of these roles governs the operations that you can do on those items.

| Role for library item | Description |
|-------------------------|---------|
| **Reader** | Can view the item. |
| **User** | Can use the item when authoring build or release pipelines. For example, you must be a 'User' for a variable group to use it in a release pipeline.  |
| **Administrator** | Can also manage membership of all other roles for the item. The user who created an item gets automatically added to the Administrator role for that item. By default, the following groups get added to the Administrator role of the library: Build Administrators, Release Administrators, and Project Administrators.|
|**Creator** | Can create new items in the library, but this role doesn't include Reader or User permissions. The Creator role can't manage permissions for other users.

The security settings for the **Library** tab control access for _all_ items in the library. Role memberships for individual items get automatically inherited from the roles of the Library node.

For more information on pipeline security roles, see [About pipeline security roles](../../organizations/security/about-security-roles.md).

[!INCLUDE [rm-help-support-shared](../includes/rm-help-support-shared.md)]

## Related articles

- [Create and target an environment](../process/environments.md)
- [Manage service connections](service-endpoints.md)
- [Add and use variable groups](variable-groups.md)
- [Resources in YAML](../process/resources.md)
- [Agents and agent pools](../agents/agents.md)
