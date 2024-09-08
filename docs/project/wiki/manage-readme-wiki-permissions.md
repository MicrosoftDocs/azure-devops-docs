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
ai-usage: ai-assisted
ms.date: 09/06/2024
monikerRange: "<=azure-devops"
---

# Manage wiki permissions

[!INCLUDE [version-lt-eq-azure-devops](../../includes/version-lt-eq-azure-devops.md)]

In this article, learn about managing permissions for your wiki. By default, all members of the Contributors group can edit wiki pages.

## Manage permissions for wikis

By default, all project contributors have "read" and "edit" access to the wiki repository. You can manage these permissions to control who can read and edit wiki pages. For more information, see [Get started with permissions, access, and security groups](../../organizations/security/about-permissions.md).

1. Sign in to your project (```https://dev.azure.com/{Your_Organization/Your_Project}```).
2. Select **Wiki** > :::image type="icon" source="../../media/icons/more-actions.png" border="false"::: **More actions** > **Wiki security**.

> [!div class="mx-imgBorder"]  
> ![Screenshot of Wiki, Choose More, select security.](media/wiki/wiki-open-security.png)

For definitions of each repository permission, see [Git repository permissions](../../organizations/security/permissions.md).

:::image type="content" source="media/wiki/security-dialog.png" alt-text="Screenshot of Wiki security dialog.":::

If you don't have access to create a wiki page, contact an Administrator, who can grant you adequate permission on the underlying Git repository of the wiki.

## Grant Edit permissions to an individual or group

To grant *Edit* permissions to an individual or group, do the following steps.

1. Sign in to your project (```https://dev.azure.com/{Your_Organization/Your_Project}```).
2. Select **Wiki** > :::image type="icon" source="../../media/icons/more-actions.png" border="false"::: **More actions** > **Wiki security**.

  > [!div class="mx-imgBorder"]  
  > ![Screenshot of Wiki, Choose More, select security.](media/wiki/wiki-open-security.png)

1. Select **Add**. If this button isn't available, check your [permissions](../../organizations/security/about-permissions.md).
2. Enter the name of the user or group you want to grant permissions to and select the user or group from the search results.
   After you add the user or group, they're listed in the Wiki security pane.
3. To grant *Edit* permissions, set the **Contribute permission** to **Allow**.
4. **Save** the changes.

### Other considerations

- Ensure that the user or group has the necessary access level to the Azure DevOps project.
- Review and adjust other permissions as needed to maintain security and proper access control, such as *Read*, *Delete*, and *Manage*.

## Stakeholder wiki access

**Private projects**

Users with [Stakeholder access](../../organizations/security/get-started-stakeholder.md) in a private project can read [**provisioned**](provisioned-vs-published-wiki.md) wiki pages and view revisions, but they can't edit them. For example, Stakeholders can't create, edit, reorder, or revert changes to project wiki pages. These permissions can't be changed.

Stakeholders have no access to read or edit [**published code**](provisioned-vs-published-wiki.md) wiki pages in private projects. For more information, see the [Stakeholder access quick reference for project and code wikis](../../organizations/security/stakeholder-access.md#public-versus-private-feature-access).

**Public projects**

Stakeholders have full access to wikis in public projects.

For more information about Stakeholder access, see [About access levels, Stakeholder access, Public versus private feature access](../../organizations/security/stakeholder-access.md#public-versus-private-feature-access).

> [!NOTE]
> You can set permissions for the entire wiki, but not for individual pages.

## Related articles

- [Learn default Git repository and branch permissions](../../organizations/security/default-git-permissions.md)
- [Get Started with Git](../../repos/git/gitquickstart.md)
- [Learn about Azure DevOps security](../../organizations/security/about-security-identity.md)
