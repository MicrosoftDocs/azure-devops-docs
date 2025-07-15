---
title: Asset library
description: Understand the Azure Pipelines asset library for secure files and variable groups.
ms.assetid: 45C5042C-9E31-41F8-B63B-6D5C241EEC21
ms.topic: conceptual
ms.author: ronai
author: RoopeshNair
ms.date: 07/31/2024
monikerRange: '<= azure-devops'
ms.custom:
  - pipelinesresourcesrefresh
  - sfi-image-nochange
---

# Asset library

[!INCLUDE [version-lt-eq-azure-devops](../../includes/version-lt-eq-azure-devops.md)]

An Azure Pipelines *library* is a collection of assets for an Azure DevOps project. You can use library assets in multiple pipelines in a project.

You can access the **Library** under **Pipelines** in the left menu of your Azure DevOps project. The library contains two types of assets, *variable groups* and *secure files*.

[Variable groups](variable-groups.md) store values and secrets in groups that you can use across project pipelines. [Secure files](secure-files.md) are a secure way to store files you can use across project pipelines without having to commit them to your repository.

:::image type="content" source="media/assets-library.png" alt-text="Screenshot of Azure Pipelines assets Library.":::

## Library security

All library assets share a common security model to control who can define and use library items. The overall library security settings control access for all items in the library.

Role memberships for individual items are automatically inherited from the overall library roles. These role memberships govern the operations that members can perform on the item.

| Role | Description |
|-------------------------|---------|
| **Reader** | Can view the item. |
| **User** | Can use the item in pipelines. For example, you must be a **User** for a variable group to use it in a release pipeline. |
| **Creator** | Can create a new library item. The **Creator** role doesn't include **Reader** or **User** permissions, and can't manage permissions for other users. |
| **Administrator** | Has **Reader**, **User**, and **Creator** privileges, and can also manage membership of all other roles for the item. The **Creator** of an item automatically belongs to the **Administrator** role for that item. By default, members of the **Build Administrators**, **Release Administrators**, and **Project Administrators** groups are also members of the library **Administrator** role.

For more information on pipeline security roles, see [About pipeline security roles](../../organizations/security/about-security-roles.md).

[!INCLUDE [rm-help-support-shared](../includes/rm-help-support-shared.md)]

## Related content

- [Create and target an environment](../process/environments.md)
- [Manage service connections](service-endpoints.md)
- [Add and use variable groups](variable-groups.md)
- [Use resources in YAML pipelines](../process/resources.md)
- [Use agents and agent pools](../agents/agents.md)
