---
title: Manage Permissions for READMEs and Wiki Pages
titleSuffix: Azure DevOps
description: Learn how to set permissions to grant or secure access to README files and your team project built-in wiki in Azure DevOps.
ms.subservice: azure-devops-wiki
ms.custom: wiki, devdivchpfy22
ms.topic: concept-article
ms.author: chcomley
author: chcomley
ms.reviewer: gopinach
ai-usage: ai-assisted
ms.date: 06/05/2025
monikerRange: "<=azure-devops"
#cutsomer intent: As an Azure DevOps developer, I want to manage permissions for README files and my team project wiki to ensure secure access for users.
---

# Manage wiki permissions

[!INCLUDE [version-lt-eq-azure-devops](../../includes/version-lt-eq-azure-devops.md)]

This article describes how to set and manage permissions for your team project wiki and project README files. By default, all members of the Contributors group has permission to edit wiki pages.

## Manage permissions for wikis

By default, all project Contributors have "read" and "edit" access to the Git repository for the project wiki. You can manage these permissions and control who can read and edit wiki pages. For more information, see [Get started with permissions, access, and security groups](../../organizations/security/about-permissions.md).

1. Sign in to your project (`https://dev.azure.com/<Organization>/<Project>`) in Azure DevOps.

1. In the left navigation, select **Wiki** > **More options** :::image type="icon" source="../../media/icons/more-actions.png"::: > **Wiki security**:

   :::image type="content" source="media/wiki/wiki-open-security.png" alt-text="Screenshot that shows how to select the Wiki security action for a Wiki in the Azure DevOps web portal.":::

1. In the **Security for Wiki** dialog, adjust the settings for the various security options.

   :::image type="content" source="media/wiki/security-dialog.png" alt-text="Screenshot of the Wiki security dialog that shows various security options and their current settings." lightbox="media/wiki/security-dialog.png":::

   For definitions of each repository permission, see [Git repository (object-level) permissions](../../organizations/security/permissions.md#git-repository-object-level).

> [!NOTE]
> If you don't have access to create a wiki page, you can request access from a project Administrator. They can grant you adequate permission on the underlying Git repository for the wiki.

## Grant Edit permissions to an individual or group

To grant *Edit* permissions to an individual or group, complete the following steps:

1. Sign in to your project (`https://dev.azure.com/<Organization>/<Project>`) in Azure DevOps.

1. In the left navigation, select **Wiki** > **More options** :::image type="icon" source="../../media/icons/more-actions.png"::: > **Wiki security**.

1. Select **Add**.

   If this button isn't available, check your [permissions](../../organizations/security/about-permissions.md).

1. Enter the name of the user or group you want to grant permissions to and select the user or group from the search results.

   After you add the user or group, they're listed in the **Wiki security** pane.

1. To grant *Edit* permissions, set the **Contribute permission** to **Allow**.

1. Select **Save** to apply your changes.

### Other considerations

When you assign permissions to project users, review the following considerations:

- Ensure the user or group has the necessary access level to the Azure DevOps project.

- Review and adjust other permissions as needed to maintain security and proper access control, such as *Read*, *Delete*, and *Manage*.

## Stakeholder wiki access

Users with project Stakeholder access have permissions set for *private* and *public* projects.

### Private projects

Users with [Stakeholder access](../../organizations/security/get-started-stakeholder.md) in a private project can read [**provisioned**](provisioned-vs-published-wiki.md) wiki pages and view revisions, but they can't edit them. For example, Stakeholders can't create, edit, reorder, or revert changes to project wiki pages. These permissions can't be changed.

Stakeholders have no access to read or edit [**published code**](provisioned-vs-published-wiki.md) wiki pages in private projects. For more information, see the [Stakeholder access quick reference for project and code wikis](../../organizations/security/stakeholder-access.md#public-versus-private-feature-access).

### Public projects

Stakeholders have full access to wikis in public projects.

For more information about Stakeholder access, see [About access levels, Stakeholder access, Public versus private feature access](../../organizations/security/stakeholder-access.md#public-versus-private-feature-access).

> [!NOTE]
> You can set permissions for the entire wiki, but not for individual pages.

## Related content

- [Learn default Git repository and branch permissions](../../organizations/security/default-git-permissions.md)
- [Get Started with Git](../../repos/git/gitquickstart.md)
- [Learn about Azure DevOps security](../../organizations/security/about-security-identity.md)
