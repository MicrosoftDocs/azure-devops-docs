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
ms.date: 04/04/2022
--- 


# Change permissions at the organization or collection-level

[!INCLUDE [version-lt-eq-azure-devops](../../includes/version-lt-eq-azure-devops.md)]


Several permissions are set at the organization or collection level. You can grant these permissions by adding a user or group to the **Project Collection Administrators** group. Or, you can grant select collection-level permissions to a custom security group or to a user. 
 
::: moniker range="azure-devops"
An organization is the container for several projects that share resources. For more information about projects and project collections, see [Plan your organizational structure](../../user-guide/plan-your-azure-devops-org-structure.md).
::: moniker-end

::: moniker range="< azure-devops"
A project collection is the container for several projects that share resources. For more information about projects and project collections, see [About projects and scaling your organization](../../organizations/projects/about-projects.md).
::: moniker-end


See the following articles for related information: 

- [Request an increase in permission levels](request-changes-permissions.md)
- [Change project-level permissions](change-project-level-permissions.md)
- [Add or remove users or groups, manage security groups](add-remove-manage-user-group-security-group.md)
- [Set object-level permissions](set-object-level-permissions.md)
- [Look up a project collection administrator](look-up-project-collection-administrators.md)
- [Look up the organization owner](look-up-organization-owner.md)

[!INCLUDE [hidden-security-groups](./includes/hidden-security-groups.md)]


## Collection-level permissions 

[!INCLUDE [collection-level-permissions](./includes/collection-level-permissions.md)]

> [!NOTE]
> The permission to add or remove organization or collection-level security groups, add and manage organization or collection-level group membership, and edit collection and project-level permission ACLs is assigned to all members of the **Project Collection Administrator**s group. It isn't controlled by a permissions surfaced within the user interface. 


## Prerequisites

- To manage permissions or groups at the organization or collection level, you must be a member of the **Project Collection Administrators** security group. If you created the organization or collection, you are automatically added as a member of this group. To get added to this group, you need to request permissions from a member of the **Project Collection Administrators** group. See [Look up a project collection administrator](look-up-project-collection-administrators.md).
- If want to add security groups defined in Azure Active Directory or Active Directory, make sure those are first defined. To learn more, see [Add AD/Azure AD users or groups to a built-in security group](add-ad-aad-built-in-security-groups.md).


::: moniker range="azure-devops"  
> [!NOTE]   
> Users added to the **Project-Scoped Users** group can't access most **Organization Settings** pages, including **Permissions**. To learn more, see [Manage your organization, Limit  user visibility for projects and more](../../user-guide/manage-organization-collection.md#project-scoped-user-group). 
> 
> Also, users granted **Stakeholder** access, won't be able to access select features even if granted permissions to those features. To learn more, see [Stakeholder access quick reference](stakeholder-access.md).

::: moniker-end  

::: moniker range="< azure-devops" 
> [!NOTE]   
> Users granted **Stakeholder** access, won't be able to access select features even if granted permissions to those features. To learn more, see [Stakeholder access quick reference](stakeholder-access.md).
::: moniker-end  


<a id="add-user-group" />

## Add members to the Project Collection Administrators group 

You can add users who've been added to a project, organization, or collection to the **Project Collection Administrators** group, or any other group at the organization or collection-level. To add a custom security group, first create the group as described in [Add or remove users or groups, manage security groups](add-remove-manage-user-group-security-group.md).

Here we show how to add a user to the **Project Collection Administrators** group. The method is similar to adding an Azure Active Directory or Active Directory group. 

::: moniker range="azure-devops"

> [!NOTE]   
> To enable the **Organization Permissions Settings Page v2** preview page, see [Enable preview features](../../project/navigation/preview-features.md).

#### [Preview page](#tab/preview-page) 

1. Open the web portal and choose the project where you want to add users or groups. To choose another project, see [Switch project, repository, team](../../project/navigation/go-to-project-repo.md).

2. Choose **Organization settings** and then **Permissions**.

    ![Choose Organization settings, and then Permissions](media/permissions/open-project-settings-permissions-preview.png)

3. Choose **Project Administrators** group, **Members**, and then **Add**.  

    > [!div class="mx-imgBorder"]  
    > ![Project Settings > Permissions, Add member](media/project-collection/project-admin-members-add-s154.png) 

4. Enter the name of the user account or custom security group into the text box and then select from the match that appears. You can enter several identities recognized by the system into the **Add users and/or groups** box. The system automatically searches for matches. Choose the matches that meet your choices. 

    > [!div class="mx-imgBorder"]  
    > ![Add users and group dialog, preview page.](media/project-collection/add-member-project-admin.png)  

5. Choose **Save**. 

#### [Current page](#tab/current-page) 

1. Open the web portal and choose the project where you want to add users or groups. To choose another project, see [Switch project, repository, team](../../project/navigation/go-to-project-repo.md).

2. Choose **Project Settings** and then **Security**.

    *To see the full image, click to expand*.

    [![Project Settings>Security](media/view-permissions/open-security-project-level-vert.png)](media/view-permissions/open-security-project-level-vert-expanded.png#lightbox) 

3. Choose **Project Administrators** group, **Members**, and then **Add**.  

    > [!div class="mx-imgBorder"]  
    > ![Screenshot of Project Settings>Security, Add member.](media/project-level-permissions-add-member.png) 

4. Enter the name of the user account into the text box. You can enter several identities into the text box, separated by commas. The system automatically searches for matches. Choose the match(es) that meets your choice. 

    > [!div class="mx-imgBorder"]  
    > ![Add users and group dialog, current page.](media/project-level-permissions-add-a-user.png)  

5. Choose **Save changes**. Choose the :::image type="icon" source="../../media/icons/refresh.png" border="false"::: refresh icon to see the additions.  

* * *

::: moniker-end 


::: moniker range=">= azure-devops-2019 < azure-devops"

1. Open the web portal and choose the project where you want to add users or groups. To choose another project, see [Switch project, repository, team](../../project/navigation/go-to-project-repo.md).

2. Choose **Project Settings** and then **Security**.

    *To see the full image, click to expand*.

    [![Project Settings>Security](media/view-permissions/open-security-project-level-vert.png)](media/view-permissions/open-security-project-level-vert-expanded.png#lightbox) 

1. Choose **Project Administrators** group, **Members**, and then **Add**.  

    > [!div class="mx-imgBorder"]  
    > ![Project Settings>Security, Add member](media/project-level-permissions-add-member.png) 

1. Enter the name of the user account into the text box. You can enter several identities into the text box, separated by commas. The system automatically searches for matches. Choose the match(es) that meets your choice. 

    > [!div class="mx-imgBorder"]  
    > ![Add users and group dialog, on-premises.](media/project-level-permissions-add-a-user.png)  

1. Choose **Save changes**. Choose the :::image type="icon" source="../../media/icons/refresh.png" border="false"::: refresh icon to see the additions.  

::: moniker-end 

::: moniker range="tfs-2018"

1. Open the web portal and choose the project where you want to add users or groups. To choose another project, see [Switch project, repository, team](../../project/navigation/go-to-project-repo.md).  

1. Choose the :::image type="icon" source="../../media/icons/gear-icon.png" border="false"::: gear icon to open the administrative context.

    > [!div class="mx-imgBorder"]  
    > ![Open Project Settings, horizontal nav](../../media/settings/open-project-settings-horz.png)  

2. Choose **Security**, **Project Administrators** group, **Members**, and then **Add**.  

    > [!div class="mx-imgBorder"]  
    > ![Project Settings>Security, Add member](media/project-level-permissions-add-member.png) 

3. Enter the name of the user account into the text box. You can enter several identities into the text box, separated by commas. The system automatically searches for matches. Choose the match(es) that meets your choice. 

    > [!div class="mx-imgBorder"]  
    > ![Add users and group dialog, TFS 2018 and earlier versions.](media/project-level-permissions-add-a-user.png)  

    > [!NOTE]   
    > Users that have limited access, such as Stakeholders, won't be able to access select features even if granted permissions to those features. To learn more, see [Permissions and access](permissions-access.md).

4. Choose **Save changes**. Choose the :::image type="icon" source="../../media/icons/refresh.png" border="false"::: refresh icon to see the additions.  

::: moniker-end


## Change permissions for a group 

You can change the permissions for any organization or collection-level group, except the **Project Collection Administrators** group. You can add security groups to a collection in a similar manner to adding a security group to a project. See [Add or remove users or groups, manage security groups](add-remove-manage-user-group-security-group.md). To understand permission assignments and inheritance, see [About permissions, Permission states](about-permissions.md#permission-states).
 
    
::: moniker range="azure-devops"

> [!NOTE]   
> To enable the **Organization Permissions Settings Page v2** preview page, see [Enable preview features](../../project/navigation/preview-features.md).

#### [Preview page](#tab/preview-page) 

1. Open the **Permissions** page as described in the previous section, [Add a user or group to the Project Administrators group](#add-user-group). 

	> [!NOTE]   
	> You can't change the permission settings for the **Project Collection Administrators** group. This is by design. 

2. From the **Permissions** page, choose the group whose permissions you want to change. 

    For example, here we choose the **Stakeholders Limited** group, and change several permissions.  

	:::image type="content" source="media/change-project-collection-level/change-project-collection-level-permission-for-group.png" alt-text="Screenshot of Collection-level Prmissions for a selected group, preview page.":::  

    Your changes are automatically saved. 

 
#### [Current page](#tab/current-page) 

1. Open the **Security** page as described in the previous section, [Add a user or group to the Project Collection Administrators group](#add-user-group). 

1. From the **Security** page, choose the group whose permissions you want to change. 

    For example, here we choose the **Stakeholders Limited** group, and change several permissions.  

	:::image type="content" source="media/change-project-collection-level/change-project-collection-level-permission-for-groups-current-page.png" alt-text="Screenshot of Collection-level Prmissions for a selected group, current page.":::  

1. Choose **Save changes**.   

* * *

::: moniker-end

::: moniker range="< azure-devops"


1. Open the **Security** page as described in the previous section, [Add a user or group to the Project Collection Administrators group](#add-user-group). 

1. From the **Security** page, choose the group whose permissions you want to change. 

    For example, here we choose the **Stakeholders Limited** group, and change several permissions.  

	:::image type="content" source="media/change-project-collection-level/change-project-collection-level-permission-for-groups-current-page.png" alt-text="Screenshot of Collection-level Prmissions for a selected group, current page.":::  

1. Choose **Save changes**.   


::: moniker-end
 

## Change permissions for a user 
 
You can change the collection-level permissions for a specific user. To understand permission assignments and inheritance, see [About permissions, Permission states](about-permissions.md#permission-states).

   
::: moniker range="azure-devops"

> [!NOTE]   
> To enable the **Organization Permissions Settings Page v2** preview page, see [Enable preview features](../../project/navigation/preview-features.md).

#### [Preview page](#tab/preview-page) 

1. Open the **Permissions** page as described in the previous section, [Add a user or group to the Project Administrators group](#add-user-group). 

1. From the **Permissions** page, choose **Users**, and then choose the user whose permissions you want to change.

	:::image type="content" source="media/change-project-level/choose-users-select-user.png" alt-text="Screenshot of Users tab, choose a user.":::   

1.	From the **Permissions** page, change the assignment for one or more permissions. 

	For example, here we change the **Edit project-level information** for Christie Church. 

	:::image type="content" source="media/change-project-collection-level/change-project-level-permission-for-user.png" alt-text="Screenshot of selected users, Permissions.":::   

	Dismiss the dialog when done. Your changes are automatically saved. 

#### [Current page](#tab/current-page) 

1. Open the **Security** page as described in the previous section, [Add a user or group to the Project Administrators group](#add-user-group). 

1. From the **Security** page, in the **Filter users and groups** text box, enter the name of the user whose permissions you want to change. 

1. Change the assignment for one or more permissions. 

	For example, here we change the **Edit project-level information** for Christie Church. 

	:::image type="content" source="media/change-project-collection-level/change-project-level-permission-for-user-current-page.png" alt-text="Screenshot of selected user , change Edit project-level information permission level.":::   

1. Choose **Save changes**.   

* * *

::: moniker-end

::: moniker range="< azure-devops"

1. Open the **Security** page as described in the previous section, [Add a user or group to the Project Administrators group](#add-user-group). 

1. From the **Security** page, in the **Filter users and groups** text box, enter the name of the user whose permissions you want to change. 

1. Change change the assignment for one or more permissions. 

	For example, here we change the **Edit project-level information** for Christie Church. 

	:::image type="content" source="media/change-project-collection-level/change-project-level-permission-for-user-current-page.png" alt-text="Screenshot of selected user , change Edit project-level information permission level.":::   

1. Choose **Save changes**.   


::: moniker-end

::: moniker range="< azure-devops"

## On-premises deployments

For on-premises deployments, see these additional articles: 

- [Add a user as an Azure DevOps Server administrator](/azure/devops/server/admin/add-administrator) 
- [Azure DevOps Server service account groups](/azure/devops/server/admin/service-accounts-dependencies)  

::: moniker-end  

::: moniker range="< azure-devops"

If your on-premises deployment is integrated with SQL Server Reports, you'll need to manage membership for those products separately from their websites. See [Grant permissions to view or create SQL Server reports in TFS](/previous-versions/azure/devops/report/admin/grant-permissions-to-reports).

::: moniker-end 



::: moniker range="< azure-devops"

## FAQs

#### Q: When do I need to add someone to the Project Collection Administrator role?

A: It varies. For most organizations that use Azure DevOps, Project Collection Administrators manage the collections that members of the **Team Foundation Administrators** group create. Members of the **Project Collection Administrators** group don't create the collections themselves. Project collection administrators also do many operations required to maintain the collection. Operations include creating team projects, adding users to groups, modifying the settings for the collection, and so on.

#### Q: What are the optimal permissions to administer a project collection across all of its components and dependencies?

A: Project collection administrators must be members of the following groups or have the following permissions:

- Team Foundation Server: A member of the **Project Collection Administrators** group, or have the appropriate [collection-level permissions](../../organizations/security/permissions.md#collection) set to **Allow**.

- SharePoint Products: If the collection is configured with a site collection resource, then a member of the **Site Collection Administrators** group.

- Reporting Services: If the collection is configured with reporting resources, then a member of the **Team Foundation Content Manager** group.

#### Q: I'm an admin, but I don't have permission to add a Project Collection Administrator. What do I need?

A: The following permissions are required:

- You must be a **Project Collection Administrator**, or your **View Server-Level Information** and **Edit Server-Level Information** permissions must be set to **Allow**.

- To add permissions for SharePoint Products, you must be a member of the **Site Collection Administrators** or **Farm Administrators** groups for SharePoint Products.

- To add permissions for Reporting Services, you must be a member of the **Content Managers** or **Team Foundation Content Managers** groups for Reporting Services.

> [!Important]
> To perform administrative tasks like creating project collections, your user requires administrative permissions. The service account that the Team Foundation Background Job Agent uses must have certain permissions granted to it. For more information, see [Service accounts and dependencies in Team Foundation Server](/azure/devops/server/admin/service-accounts-dependencies) and [Team Foundation Background Job Agent](/azure/devops/server/architecture/background-job-agent).

::: moniker-end 
 
## Next steps

> [!div class="nextstepaction"]
> [Manage projects](../projects/about-projects.md)

## Related articles

- [Set object-level permissions](set-object-level-permissions.md)
- [Get started with permissions, access, and security groups](about-permissions.md)
- [Permissions lookup reference](permissions-lookup-guide.md)
- [Permissions and groups reference](permissions.md)
- [Manage teams and configure team tools](../../organizations/settings/manage-teams.md)
