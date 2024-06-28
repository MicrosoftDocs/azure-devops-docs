---
title: Manage permissions for READMEs and wiki pages
titleSuffix: Azure DevOps
description: Learn how to set permissions to grant or secure access to README files and your team project built-in wiki.
ms.subservice: azure-devops-wiki
ms.custom: wiki, devdivchpfy22
ms.topic: conceptual
ms.author: chcomley
author: chcomley
ms.reviewer: gopinach
ms.date: 01/05/2024
monikerRange: "<=azure-devops"
---

# Manage Wiki permissions

[!INCLUDE [version-lt-eq-azure-devops](../../includes/version-lt-eq-azure-devops.md)]

Learn about managing permissions for your wiki. By default, all members of the Contributors group can edit Wiki pages.

## Manage wiki permissions

All contributors to a project have access to "read" and “edit” the wiki repository by default. You can manage the wiki repository permissions to manage access for reading and editing wiki pages. For more information, see [Get started with permissions, access, and security groups](../../organizations/security/about-permissions.md).

To open the Security dialog, select :::image type="icon" source="../../media/icons/more-actions.png" border="false"::: **More actions** > **Wiki security**.

> [!div class="mx-imgBorder"]  
> ![Screenshot of Wiki, Choose More, select security.](media/wiki/wiki-open-security.png)

For definitions of each repository permission, see [Git repository permissions](../../organizations/security/permissions.md).

:::image type="content" source="media/wiki/security-dialog.png" alt-text="Screenshot of Wiki security dialog.":::

If you don't have access to create a wiki page, contact an Administrator, who can grant you adequate permission on the underlying Git repository of the wiki.

## Stakeholder wiki access

**Private projects**

Users with [Stakeholder access](../../organizations/security/get-started-stakeholder.md) in a private project can read [**provisioned**](provisioned-vs-published-wiki.md) wiki pages and view revisions, but they can't edit. For example, Stakeholders can't create, edit, reorder, or revert changes to project wiki pages. These permissions can't be changed.

Stakeholders have zero access to read or edit [**published code**](provisioned-vs-published-wiki.md) wiki pages in private projects. For more information, see the [Stakeholder access quick reference for project and code wikis](../../organizations/security/stakeholder-access.md#public-versus-private-feature-access).

**Public projects**

Stakeholders have full access to wikis in public projects.

For more information about Stakeholder access, see [About access levels, Stakeholder access, Public versus private feature access](../../organizations/security/stakeholder-access.md#public-versus-private-feature-access).

> [!NOTE]
> You can only set permissions to access all wiki pages, not on a per-page basis.

## Related articles

- [Default Git repository and branch permissions](../../organizations/security/default-git-permissions.md)
- [Get Started with Git](../../repos/git/gitquickstart.md)
- [Azure DevOps security](../../organizations/security/about-security-identity.md)
