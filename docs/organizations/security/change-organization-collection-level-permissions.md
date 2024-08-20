---
title: Change permissions or group membership at the organization or collection-level
titleSuffix: Azure DevOps
description: How-to guide to change permissions at the organization or collection-level in Azure DevOps
ms.subservice: azure-devops-security
ms.custom: security-refresh
ms.author: chcomley
author: chcomley
ms.topic: how-to
monikerRange: '<= azure-devops'
ai-usage: ai-assisted
ms.date: 08/19/2024
--- 


# Change permissions at the organization or collection-level

[!INCLUDE [version-lt-eq-azure-devops](../../includes/version-lt-eq-azure-devops.md)]

This article shows you how to manage permissions at the organization or collection level. Several permissions are set at these levels. You can only grant these permissions if you're a member of the **Project Collection Administrators** group.
 
::: moniker range="azure-devops"
An organization is the container for several projects that share resources. For more information, see [Plan your organizational structure](../../user-guide/plan-your-azure-devops-org-structure.md).
::: moniker-end

::: moniker range="< azure-devops"
A project collection is the container for several projects that share resources. For more information, see [About projects and scaling your organization](../../organizations/projects/about-projects.md).
::: moniker-end

You might find the following articles helpful:

- [Look up a project collection administrator](look-up-project-collection-administrators.md)
- [Manage users, groups, and security groups](add-remove-manage-user-group-security-group.md)
- [Request an increase in permission levels](request-changes-permissions.md)
- [Change project-level permissions](change-project-level-permissions.md)
- [Set object-level permissions](set-object-level-permissions.md)

[!INCLUDE [hidden-security-groups](./includes/hidden-security-groups.md)]

## Collection-level permissions 

[!INCLUDE [collection-level-permissions](./includes/collection-level-permissions.md)]

> [!NOTE]
> **Project Collection Administrators** can manage organization or collection-level security groups, group membership, and edit permission ACLs. This permission isn't controlled through the user interface.

## Prerequisites

**Security groups:**
- You must be a member of the **Project Collection Administrators** security group to manage permissions or groups at the organization or collection level. If you created the organization or collection, you're automatically a member of this group. To be added to this group, request permissions from a [member of the **Project Collection Administrators** group](look-up-project-collection-administrators.md).
- Ensure security groups in Microsoft Entra ID or Active Directory are defined before adding them. For more information, see [Add Active Directory / Microsoft Entra users or groups to a built-in security group](add-ad-aad-built-in-security-groups.md).

::: moniker range="azure-devops"
> [!NOTE]   
>- Users in the **Project-Scoped Users** group can't access most **Organization settings** pages, including **Permissions**. For more information, see [Manage your organization, limit user visibility for projects, and more](../../user-guide/manage-organization-collection.md#project-scoped-user-group).
>- Users with **Stakeholder** access can't access specific features even if they have permissions to those features. For more information, see [Stakeholder access quick reference](stakeholder-access.md).

::: moniker-end  

::: moniker range="< azure-devops" 
> [!NOTE]   
> Users with **Stakeholder** access can't access specific features even if they have permissions to those features. For more information, see [Stakeholder access quick reference](stakeholder-access.md).
::: moniker-end  

<a id="add-user-group"></a>

## Add members to the Project Administrators group 

Do the following steps to add users to the **Project Administrators** group or any other group at the organization or collection level. To add a custom security group, first [create the group](add-remove-manage-user-group-security-group.md).

::: moniker range="azure-devops"

> [!NOTE]   
> To turn on the **Organization Permissions Settings Page v2** preview page, see [Enable preview features](../../project/navigation/preview-features.md).

#### [Preview page](#tab/preview-page) 

1. Sign in to your organization (```https://dev.azure.com/{Your_Organization}```). 

2. Select **Organization settings** > **Permissions**.

    ![Screenshot showing Organization settings and Permissions selections.](media/permissions/open-project-settings-permissions-preview.png)

3. Select **Project Administrators** group, **Members**, and then **Add**.  

    > [!div class="mx-imgBorder"]  
    > ![Screenshot showing Project Settings > Permissions, Add member.](media/project-collection/project-admin-members-add-s154.png) 

4. Enter the name of the user account or custom security group into the text box and select the matching result. You can enter multiple identities into the **Add users and/or groups** box, and the system automatically searches for matches. Select the appropriate matches. 

    > [!div class="mx-imgBorder"]  
    > ![Screenshot showing Add users and group dialog, preview page.](media/project-collection/add-member-project-admin.png)  

5. Select **Save**. 

#### [Current page](#tab/current-page) 

1. Sign in to your organization (```https://dev.azure.com/{Your_Organization}```).

2. Select **Project Settings** and then **Security**.

    *To see the full image, select to expand*.

    [![Screenshot showing selections, Project Settings and Security.](media/view-permissions/open-security-project-level-vert.png)](media/view-permissions/open-security-project-level-vert-expanded.png#lightbox) 

3. Select **Project Administrators** group, **Members**, and then **Add**.  

    > [!div class="mx-imgBorder"]  
    > ![Screenshot of Project Settings, Security, Add member selections.](media/project-level-permissions-add-member.png) 

4. Enter the name of the user account into the text box. You can enter several identities into the text box, separated by commas. The system automatically searches for matches. Select one or more matches. 

    > [!div class="mx-imgBorder"]  
    > ![Screenshot showing Add users and group dialog, current page.](media/project-level-permissions-add-a-user.png)  

5. Select **Save changes**. Select the :::image type="icon" source="../../media/icons/refresh.png" border="false"::: refresh icon and the additions reflect.  

* * *

::: moniker-end 

::: moniker range="< azure-devops"

1. Open the web portal and choose the collection where you want to add users or groups.

2. Select **Collection Settings** > **Security**.

    [![Screenshot of Project Settings, Security selection.](media/view-permissions/open-security-project-level-vert.png)](media/view-permissions/open-security-project-level-vert-expanded.png#lightbox) 

3. Select **Project Administrators** > **Members** > **Add**.  

    > [!div class="mx-imgBorder"]  
    > ![Screenshot of Project Settings>Security, Add member selection sequence.](media/project-level-permissions-add-member.png) 

4. Enter the name of the user account into the text box. You can enter several identities into the text box, separated by commas. The system automatically searches for matches. Select one or more matches. 

    > [!div class="mx-imgBorder"]  
    > ![Screenshot of Add users and group dialog, on-premises.](media/project-level-permissions-add-a-user.png)  

5. Select **Save changes** and the :::image type="icon" source="../../media/icons/refresh.png" border="false"::: refresh icon to see the additions.  

::: moniker-end 

## Change permissions for a group 

You can change the permissions for any organization or collection-level group, except the **Project Collection Administrators** group. Adding security groups to a collection is similar to adding them to a project. For more information, see [Add or remove users or groups, manage security groups](add-remove-manage-user-group-security-group.md) and [About permissions, Permission states](about-permissions.md#permission-states).
    
::: moniker range="azure-devops"

> [!NOTE]   
> To turn on the **Organization Permissions Settings Page v2** preview page, see [Enable preview features](../../project/navigation/preview-features.md).

#### [Preview page](#tab/preview-page) 

1. Go to the **Permissions** page as described in the previous section, [Add a user or group to the Project Administrators group](#add-user-group). 

	> [!NOTE]   
	> By design, you can't change the permission settings for the **Project Collection Administrators** group.

2. Choose the group whose permissions you want to change. 

    In the following example, we choose the **Stakeholders Limited** group, and change several permissions.  

	:::image type="content" source="media/change-project-collection-level/change-project-collection-level-permission-for-group.png" alt-text="Screenshot of Collection-level Permissions for a selected group, preview page.":::  

    Your changes automatically save. 

#### [Current page](#tab/current-page) 

1. Go to the **Security** page as described in the previous section, [Add a user or group to the Project Collection Administrators group](#add-user-group). 

1. Choose the group whose permissions you want to change. 

    In the following example, we choose the **Stakeholders Limited** group, and change several permissions.  

	:::image type="content" source="media/change-project-collection-level/change-project-collection-level-permission-for-groups-current-page.png" alt-text="Screenshot of Collection-level Permissions for a selected group, current page.":::  

1. Select **Save changes**.   

* * *

::: moniker-end

::: moniker range="< azure-devops"

1. Go to the **Security** page as described in the previous section, [Add a user or group to the Project Collection Administrators group](#add-user-group). 

1. Choose the group whose permissions you want to change. 

    In the following example, we choose the **Stakeholders Limited** group and change several permissions.  

	:::image type="content" source="media/change-project-collection-level/change-project-collection-level-permission-for-groups-current-page.png" alt-text="Screenshot of Collection-level Permissions for a selected group, current page.":::  

1. Select **Save changes**.   

::: moniker-end

## Change permissions for a user 
 
You can change the collection-level permissions for a specific user. For more information, see [About permissions, Permission states](about-permissions.md#permission-states).

::: moniker range="azure-devops"

> [!NOTE]   
> To turn on the **Organization Permissions Settings Page v2** preview page, see [Enable preview features](../../project/navigation/preview-features.md).

#### [Preview page](#tab/preview-page) 

1. Go to the **Permissions** page as described in the previous section, [Add a user or group to the Project Administrators group](#add-user-group). 

2. Select **Users**, then choose the user whose permissions you want to change.

	:::image type="content" source="media/change-project-level/choose-users-select-user.png" alt-text="Screenshot of Users tab, choose a user.":::   

3.	Change the assignment for one or more permissions. 

	In the following example, we change the **Edit project-level information** for Christie Church. 

	:::image type="content" source="media/change-project-collection-level/change-project-level-permission-for-user.png" alt-text="Screenshot of selected users, Permissions.":::   

	Dismiss the dialog and your changes automatically save. 

#### [Current page](#tab/current-page) 

1. Go to the **Security** page as described in the previous section, [Add a user or group to the Project Administrators group](#add-user-group). 

1. In the **Filter users and groups** text box, enter the name of the user whose permissions you want to change. 

1. Change the assignment for one or more permissions. 

	In the following example, we change the **Edit project-level information** for Christie Church. 

	:::image type="content" source="media/change-project-collection-level/change-project-level-permission-for-user-current-page.png" alt-text="Screenshot of selected user, change Edit project-level information permission level.":::   

1. Select **Save changes**.   

* * *

::: moniker-end

::: moniker range="< azure-devops"

1. Open the **Security** page as described in the previous section, [Add a user or group to the Project Administrators group](#add-user-group). 

1. In the **Filter users and groups** text box, enter the name of the user whose permissions you want to change. 

1. Change change the assignment for one or more permissions. 

	In the following example, we change the **Edit project-level information** for Christie Church. 

	:::image type="content" source="media/change-project-collection-level/change-project-level-permission-for-user-current-page.png" alt-text="Screenshot of selected user, change Edit project-level information permission level.":::   

1. Select **Save changes**.   

::: moniker-end

::: moniker range="< azure-devops"

## On-premises deployments

For on-premises deployments, see the following articles: 

- [Add a user as an Azure DevOps Server administrator](/azure/devops/server/admin/add-administrator) 
- [Azure DevOps Server service account groups](/azure/devops/server/admin/service-accounts-dependencies)  

::: moniker-end  

::: moniker range="< azure-devops"

If your on-premises deployment is integrated with SQL Server Reports, manage membership for those products separately from their websites. For more information, see [Grant permissions to view or create SQL Server reports](/previous-versions/azure/devops/report/admin/grant-permissions-to-reports).

::: moniker-end 

::: moniker range="< azure-devops"

## FAQs

#### Q: When do I need to add someone to the Project Collection Administrator role?

A: It varies. In most organizations, Project Collection Administrators manage the collections created by the **Team Foundation Administrators** group. They don’t create collections themselves but handle tasks like creating team projects, adding users to groups, and modifying collection settings.

#### Q: What are the optimal permissions to administer a project collection across all of its components and dependencies?

A: Project Collection Administrators need the following permissions:

- **Team Foundation Server:** Members of the **Project Collection Administrators** group, or have the necessary [collection-level permissions](../../organizations/security/permissions.md#collection) set to **Allow**.
- **SharePoint Products:** Members of the **Site Collection Administrators** group if the collection includes a site collection resource.
- **Reporting Services:** Members of the **Team Foundation Content Manager** group if the collection includes reporting resources.

#### Q: I'm an admin, but I don't have permission to add a Project Collection Administrator. What do I need?

A: You need the following permissions:
- **Project Collection Administrator** or **View Server-Level Information and Edit Server-Level Information** set to **Allow**.
- For SharePoint Products, membership in the **Site Collection Administrators or Farm Administrators** groups.
- For Reporting Services, membership in the **Content Managers** or **Team Foundation Content Managers** groups.

> [!IMPORTANT]
> To create project collections and perform other administrative tasks, users need administrative permissions. Additionally, the service account for the Team Foundation Background Job Agent must have specific permissions. For more information, see [Service accounts and dependencies in Team Foundation Server](/azure/devops/server/admin/service-accounts-dependencies) and [Team Foundation Background Job Agent](/azure/devops/server/architecture/background-job-agent).

::: moniker-end 
 
## Next steps

> [!div class="nextstepaction"]
> [Manage projects](../projects/about-projects.md)

## Related articles

- [Look up a project collection administrator](look-up-project-collection-administrators.md)
- [Manage users, groups, and security groups](add-remove-manage-user-group-security-group.md)
- [Request an increase in permission levels](request-changes-permissions.md)
- [Change project-level permissions](change-project-level-permissions.md)
- [Set object-level permissions](set-object-level-permissions.md)
