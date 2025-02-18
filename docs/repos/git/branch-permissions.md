---
title: Set Git branch security and permissions
titleSuffix: Azure Repos
description: Set permissions for Git branches in Azure DevOps.
ms.assetid: 0dacda14-c251-4a89-8141-ae60a47dab52
ms.service: azure-devops-repos
ms.topic: how-to
ms.date: 02/17/2025
monikerRange: '<= azure-devops'
ms.subservice: azure-devops-repos-git
---

# Set branch permissions

[!INCLUDE [version-lt-eq-azure-devops](../../includes/version-lt-eq-azure-devops.md)]

Set up permissions to control who can read and update the code in a branch on your Git repo.
You can set permissions for individual users and groups, and inherit and override permissions as needed from your [repo permissions](set-git-repository-permissions.md#git-repository).

## Prerequisites

[!INCLUDE [azure-repos-prerequisites](includes/azure-repos-prerequisites.md)]

## Use the branches view to configure security

1. Sign in to your project (```https://dev.azure.com/{Your_Organization}/{Your_Project}```).
2. Select **Repos** > **Branches**.

   ![Screenshot shows opening the Branches page on the web.](media/branches/branches_nav-new-nav.png)

3. Locate your branch in the page. You can browse the list or you can search for your branch using the **Search** box in the upper right.

   ![Screenshot shows Branches page.](media/branches/branches-page.png)

4. To open the context menu, select **...** **More actions** next to the branch name. Select **Branch security** from the menu.

   ![Screenshot shows Open the branch permissions page from the branches context menu.](media/branches/branches_context_menu_permissions.png)

## Add users or groups

> [!TIP]    
> You can only add permissions for users and groups already in your project. [Add new users and groups to your project](../../organizations/security/add-users-team-project.md) before you set branch permissions. 

1.To add users or groups to your branch permissions, select**Add**.  
2.Enter the sign-in address or group alias, then select **Save**.

## Remove users or groups

To remove permissions for a user or group, select the user or group, and then select **Remove**. This change doesn't affect other permissions for the user or group in your project.    

![Screenshot shows Remove branch permissions for a user in Azure DevOps.](media/branches/remove_permissions.png)
 
## Set permissions 

Users and groups with permissions set at the repository level [inherit those permissions](../../organizations/security/about-permissions.md#permission-inheritance) by default.

Branch creators automatically receive the following permissions:

- **Contribute**
- **Force push**
- **Manage permissions** (when allowed through the repository setting **Permissions management**)
- **Remove others' locks**

> [!NOTE]
> The **Exempt from policy enforcement** permission is replaced by the following two permissions:
>
> - **Bypass policies when completing pull requests**
> - **Bypass policies when pushing**
>
> Users who previously had **Exempt from policy enforcement** enabled have these permissions enabled instead. The following table shows more details on these permissions.
::: moniker-end

| **Permission** | **Description** |
|----------------|-----------------|
| **Bypass policies when completing pull requests** | Users with this permission are exempt from the [branch policy](branch-policies.md) set for the branch when completing pull requests and can opt in to override the policies by checking **Override branch policies and enable merge** when completing a PR. |
| **Bypass policies when pushing** | Users with this permission can push to a branch that has branch policies enabled. When a user with this permission makes a push that would override branch policy, the push automatically bypasses branch policy with no opt-in step or warning. |
| **Contribute** | Can push new commits to the branch and lock the branch. Can't rewrite existing commits on the branch. |
| **Edit policies** | Can edit [branch policies](branch-policies.md). |
| **Force push (rewrite history, delete branches and tags)** | Can force push to a branch, which can rewrite history. This permission is also required to delete a branch. |
| **Manage permissions** | Can set permissions for the branch. |
| **Remove others' locks** | Can remove [locks](lock-branches.md) set on branches by other users. |

