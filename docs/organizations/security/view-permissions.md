---
title: View permissions for yourself or others
titleSuffix: Azure DevOps
description: How you can view the permissions assigned to you or your team members, including project-level, collection-level, and object-level permissions. 
ms.assetid:  
ms.subservice: azure-devops-security
ai-usage: ai-assisted
ms.topic: quickstart
ms.author: chcomley
author: chcomley
monikerRange: '<= azure-devops'
ms.date: 10/17/2024
--- 

# View permissions for yourself or others

[!INCLUDE [version-lt-eq-azure-devops](../../includes/version-lt-eq-azure-devops.md)]

In this article, learn how to view your permissions or the permissions for other users in Azure DevOps. If you don't have permission to access a feature or function, you can request it from the right resource.

You can set and view permissions at the following three levels:
- [Project-level](#view-project-level-permissions)
- [Organization or Collection-level](#view-organization-or-collection-level-permissions)
- [Object-level](#view-object-level-permissions)
 
For more information, see [Get started with permissions, access, and security groups](about-permissions.md).

## Prerequisites

* **Project membership**: Be a [member of a project](../organizations/projects/create-project.md). 
* **Permissions:** Be a member of the **Project Valid Users** group or **Project Collection Valid Users** group.

## View project-level permissions

Do the following steps to view project-level permissions for you or other users.

::: moniker range="azure-devops"

> [!NOTE]   
> To get the new user interface for the **Project Permissions Settings Page**, [enable the preview feature](../../project/navigation/preview-features.md).

#### [Preview page](#tab/preview-page) 

1. Sign in to your project (```https://dev.azure.com/{Your_Organization/Your_Project}```).
2. Select **Project settings** > **Permissions**.

	:::image type="content" source="../settings/media/shared/open-project-settings-permissions-preview.png" alt-text="Screenshot shows Project settings and Permissions buttons.":::

3. Select **Users**. To filter the list, enter a name into the *Search users* box.

	:::image type="content" source="media/view-permissions/search-user-name-s154.png" alt-text="Screenshot shows finding a user, preview page.":::

   If your project administration is done using groups, **Expand search** after you begin to enter the user name.

4. Choose the user you want. The project-level permissions for that user display. These permissions are based on the groups the user belongs to or the permissions set specifically for the user's account.    
	
    :::image type="content" source="media/view-permissions/user-permissions-s154.png" alt-text="Screenshot shows Permissions set for a user.":::

5. Select **Member of** to see which security groups and teams that the user belongs to.  

    In the following example, *Jamal Hartnett* belongs to several teams and the Project Collection Administrators group for several projects. 

    :::image type="content" source="media/view-permissions/member-of-view-s154.png" alt-text="Screenshot shows Permissions, Member of tab.":::

#### [Current page](#tab/current-page) 

1. Sign in to your project (```https://dev.azure.com/{Your_Organization/Your_Project}```).
1. Select **Project settings** > **Security**.

   :::image type="content" source="media/view-permissions/open-security-project-level-vert.png" alt-text="Screenshot shows the Project settings and Security buttons.":::

1. Enter the user name into the *Filter users and groups* box. The system automatically shows the names that begin with the characters you enter.  

   :::image type="content" source="media/view-permissions/search-user-name-vert-nav.png" alt-text="Screenshot of find a user or group name, current page.":::

2. Choose the user name you want. The project-level permissions are based on the groups the user belongs to or the permissions set for the user.      

    :::image type="content" source="media/view-permissions/project-level-user-permissions-vsts.png" alt-text="Screenshot shows Project Administrators Group, Members tab.":::

3. Select **Member of** to see which security groups the user belongs to.  

    In the following example, *Jamal Hartnett* belongs to several teams and the Project Collection Administrators group. 

    :::image type="content" source="media/view-permissions/project-level-member-of-permissions-vsts.png" alt-text="Screenshot shows Security tab, User name, Members tab.":::

* * * 

::: moniker-end

::: moniker range="< azure-devops"

1. Open **Project settings**. Choose the ![gear icon](media/icons/gear_icon.png) gear settings icon, and select **Security**. 

    :::image type="content" source="media/view-permissions/open-project-level-security-horz.png" alt-text="Screenshot shows Open Project Settings, Security, previous nav.":::

2. Enter the user name into the *Filter users and groups* box. The system automatically shows the names that begin with the characters you enter.  

    :::image type="content" source="media/view-permissions/search-user-name.png" alt-text="Screenshot shows searching for user name.":::

3. Choose the user name you want. The project-level permissions are based on the groups the user belongs to or the permissions set for the user.      

    :::image type="content" source="media/view-permissions/project-level-user-permissions-tfs.png" alt-text="Screenshot shows Project level permissions for a user.":::

4. Select **Member of** to see which security groups the user belongs to.  

    In the following example, *Jamal Hartnett* belongs to several teams and the Project Collection Administrators group. 

    :::image type="content" source="media/view-permissions/view-permissions-member-of.png" alt-text="Screenshot shows Web portal, Security tab, User name, Members of.":::

For more information, see [Permissions and groups reference](permissions.md#project-level-groups). 

::: moniker-end

> [!TIP]
> If there's an asterisk (*) next to a 'Deny' permission, it indicates that the denial applies to all child objects or resources under the specified scope. This means that if a user is denied a permission at a higher level, they're also denied that permission for all related resources, regardless of any other permissions that might be granted at lower levels. 
> 
> For example, if a user has 'Deny' permission for 'View project' with an asterisk (*) at the project level, they can't view any of the repositories, boards, or pipelines within that project, even if they are granted 'Allow' permissions at those lower levels.

## View organization or collection-level permissions 

Do the following steps to view organization or collection-level permissions for you or other users.

::: moniker range="azure-devops"

1. Sign in to your organization (```https://dev.azure.com/{yourorganization}```).
1. Select **Organization settings**. 

    :::image type="content" source="../../media/settings/open-admin-settings-vert.png" alt-text="Screenshot shows Organization settings button."::: 

2. Select **Permissions** > **Project Collection Administrators** > **Members**. 

    :::image type="content" source="media/view-permissions/project-collection-admin-users-s154.png" alt-text="Screenshot shows Members tab in Permissions for Project Collection Administrators group.":::

3. View the user's permissions and group membership. For more information, see the previous steps in [View project-level permissions](#view-project-level-permissions).

::: moniker-end 

::: moniker range=" < azure-devops"

1. Sign in to your organization (```https://dev.azure.com/{Your_Organization}```).
2. Select **Admin settings**. 

    :::image type="content" source="../../media/settings/open-admin-settings-vert.png" alt-text="Screenshot shows the Admin settings button.":::

3. Select **Security** > **Project Collection Administrators** > **Members**.

4. View the user's permissions and group membership. For more information, see the previous steps in [View project-level permissions](#view-project-level-permissions).

::: moniker-end    



## View object-level permissions 

Do the following steps to view object-level permissions for you or other users.

1. Sign in to your organization (```https://dev.azure.com/{yourorganization}```).
2. Go to the object and open the Security dialog for the object.
   For specific instructions, see the following articles: 

:::row:::
   :::column span="1":::
   **Area**
   :::column-end:::
   :::column span="1":::
   **Task**
   :::column-end:::
:::row-end:::
:::row:::
   :::column span="1":::
   Wiki & dashboard permissions
   :::column-end:::
   :::column span="1":::   
   - [README & wiki](../../project/wiki/manage-readme-wiki-permissions.md)
   - [Dashboards](../../report/dashboards/dashboard-permissions.md)
   :::column-end:::
:::row-end:::
:::row:::
   :::column span="1":::
   Azure Repos, Azure Pipelines/DevOps (code, build, test, release) permissions 
   :::column-end:::
   :::column span="1":::   
   - [Git branch](../../repos/git/branch-permissions.md)
   - [Git repository](../../repos/git/set-git-repository-permissions.md)
   - [TFVC](../../repos/tfvc/set-tfvc-repository-permissions.md)
   - [Builds](../../pipelines/policies/permissions.md#pipeline-permissions)
   - [Release pipeline security](../../pipelines/policies/permissions.md#release-pipeline-permissions)
   - [Approvals and approvers](../../pipelines/release/approvals/index.md) 
   :::column-end:::
:::row-end:::
:::row:::
   :::column span="1":::
   Azure Boards & work tracking permissions
   :::column-end:::
   :::column span="1":::
   - [Area and iteration paths](../../organizations/security/set-permissions-access-work-tracking.md)
   - [Work item query and folder](../../boards/queries/set-query-permissions.md)
   - Plan permissions
   :::column-end:::
:::row-end:::

## Next steps

> [!div class="nextstepaction"]
> [Look up a member of the Project Administrators group](look-up-project-administrators.md) 

## Related articles

- [Troubleshoot permissions](troubleshoot-permissions.md)
- [Look up permissions and roles](permissions-lookup-guide.md)
