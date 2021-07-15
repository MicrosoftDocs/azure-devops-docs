---
title: Set project or collection-level permissions 
titleSuffix: Azure DevOps
description: How-to guide to set project-level permissions in Azure DevOps
ms.technology: devops-security
ms.author: kaelli
author: KathrynEE
ms.topic: quickstart
monikerRange: '<= azure-devops'
ms.date: 01/25/2021
--- 


# Set permissions at the project- or collection-level

[!INCLUDE [version-all](../../includes/version-all.md)]

Several permissions are set at the project or at the organization/project collection level. You can grant these permissions by adding a user or group to one of the default security groups listed here. Or, you can create a custom security group within a level and add members to that group. You can then change the default permission settings.


::: moniker range="azure-devops"
An organization is the container for several projects that share resources. For more information about projects and project collections, see [Plan your organizational structure](../../user-guide/plan-your-azure-devops-org-structure.md).


> [!div class="mx-tdBreakAll"]  
> | Project level | Organization level| 
> |-------------|----------| 
> |- Build Administrators<br/>- Contributors<br/>- Project Administrators<br/>- Project Valid Users<br/>- Readers<br/>- Release Administrators<br/>- *TeamName* Team |- Project Collection Administrators<br/>-  Project Collection Build Administrators<br/>- Project Collection Build Service Accounts<br/>- Project Collection Proxy Service Accounts<br/>- Project Collection Service Accounts<br/>- Project Collection Test Service Accounts<br/>- Project Collection Valid Users<br/>- Project-Scoped Users<br/>- Security Service Group | 

[!INCLUDE [version-all](./includes/hidden-security-groups.md)]

::: moniker-end

::: moniker range="< azure-devops"
A project collection is the container for several projects that share resources. For more information about projects and project collections, see [About projects and scaling your organization](../../organizations/projects/about-projects.md).

 
> [!Note]  
> The following list indicates the latest groups defined for Azure DevOps and TFS 2017 and later versions. For earlier versions of Azure DevOps, the list may differ. Only add service accounts to [Azure DevOps service account groups](/azure/devops/server/admin/service-accounts-dependencies). To understand valid user groups, see [About security, membership, and permissions; Valid user groups](about-permissions.md#validusers). 

> [!div class="mx-tdBreakAll"]  
> | Project level | Collection level| 
> |-------------|----------| 
> |- Build Administrators<br/>- Contributors<br/>- Project Administrators<br/>- Project Valid Users<br/>- Readers<br/>- Release Administrators<br/>- *TeamName* Team |- Project Collection Administrators<br/>-  Project Collection Build Administrators<br/>- Project Collection Build Service Accounts<br/>- Project Collection Proxy Service Accounts<br/>- Project Collection Service Accounts<br/>- Project Collection Test Service Accounts<br/>- Project Collection Valid Users<br/>- Security Service Group | 

::: moniker-end

For a description of each group and each permission, see [Permissions and groups reference, Groups](permissions.md#groups).


> [!TIP] 
> For users tasked with managing project-level features &mdash;such as, teams, area and 
> iteration paths, repositories, service hooks, and service end points&mdash;add them to 
> the Project Administrators group. 
> For users tasked with managing organization or collection-level features 
> &mdash;such as, projects, policies, processes, retention policies, 
> agent and deployment pools, and extensions&mdash;add them to the Project Collection 
> Administrators group. To learn more, see [About user, team, project, and organization-level settings](../settings/about-settings.md). 

## Prerequisites

::: moniker range="azure-devops"  
* You must be a member of a project. If you don't have a project yet, create one in [Azure DevOps](../accounts/set-up-vs.md). If you haven't been added as a team member, [get added now](../accounts/add-organization-users.md). 
  ::: moniker-end  
  ::: moniker range="< azure-devops"  
* You must be a member of a project. If you don't have a project yet, create one in an [on-premises TFS](../projects/create-project.md). If you haven't been added as a team member, [get added now](../../organizations/security/add-users-team-project.md). 
  ::: moniker-end  
* To manage permissions or groups at the project level, you must be a member of the Project Administrators Group. If you created the project, you are automatically added as a member of this group. 
* To manage permissions or groups at the collection or instance level, you must be a member of the Project Collection Administrators Group. If you created the organization or collection, you are automatically added as a member of this group. 

> [!NOTE]  
> Users added to the **Project-Scoped Users** group can't access most **Organization Settings** pages, including Permissions. To learn more, see [About projects and scaling your organization, Project-scoped Users group ](../projects/about-projects.md#project-scoped-user-group). 

<a id="project-level" />

## Add a user or group to a security group

As roles and responsibilities change, you might need to change the permission levels for individual members of a project. The easiest way to do that is to add the user or a group of users to a pre-defined security group.  If roles change, you can then remove the user from a group.

Here we show how to add a user to the built-in Project Administrators group. The method is similar to adding an Azure Active Directory or Active Directory group. 

::: moniker range="azure-devops"

> [!NOTE]   
> To enable the new user interface for the Project Permissions Settings Page, see [Enable preview features](../../project/navigation/preview-features.md).

#### [Preview page](#tab/preview-page) 

1. Open the web portal and choose the project where you want to add users or groups. To choose another project, see [Switch project, repository, team](../../project/navigation/go-to-project-repo.md).

2. Choose **Project settings** and then **Permissions**.

    ![Choose Project settings, and then Permissions](media/permissions/open-project-settings-permissions-preview.png)

3. Choose **Project Administrators** group, **Members**, and then **Add**.  

    > [!div class="mx-imgBorder"]  
    > ![Project Settings > Permissions, Add member](media/project-collection/project-admin-members-add-s154.png) 

4. Enter the name of the user account into the text box and then select from the match that appears. You can enter several identities recognized by the system into the **Add users and/or groups** box. The system automatically searches for matches. Choose the matches that meet your choices. 

    > [!div class="mx-imgBorder"]  
    > ![Add users and group dialog, preview page.](media/project-collection/add-member-project-admin.png)  

    > [!NOTE]   
    > Users that have limited access, such as Stakeholders, won't be able to access select features even if granted permissions to those features. To learn more, see [Permissions and access](permissions-access.md).

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

    > [!NOTE]   
    > Users that have limited access, such as Stakeholders, won't be able to access select features even if granted permissions to those features. To learn more, see [Permissions and access](permissions-access.md).

5. Choose **Save changes**. Choose the :::image type="icon" source="../../media/icons/refresh.png" border="false"::: refresh icon to see the additions.  

* * *

::: moniker-end 


::: moniker range="azure-devops-2019 || azure-devops-2020"

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

    > [!NOTE]   
    > Users that have limited access, such as Stakeholders, won't be able to access select features even if granted permissions to those features. To learn more, see [Permissions and access](permissions-access.md).

1. Choose **Save changes**. Choose the :::image type="icon" source="../../media/icons/refresh.png" border="false"::: refresh icon to see the additions.  

::: moniker-end 

::: moniker range="<= tfs-2018"

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



## Remove a user or a group

::: moniker range="azure-devops"

1. To remove a user or group from a security group, choose the :::image type="icon" source="../../media/icons/more-actions.png" border="false"::: **More actions** icon, and then **Remove**. 

    > [!div class="mx-imgBorder"]  
    > ![Screenshot of Remove a user, cloud version.](media/project-collection/remove-admin-member-s157.png)  

1. Choose **Delete** to confirm removal of the group member.  

    > [!div class="mx-imgBorder"]  
    > ![Remove user confirmation dialog, cloud version.](media/project-collection/delete-member-confirm-dialog.png)  

::: moniker-end  

::: moniker range="< azure-devops"

1. To remove a user from a group, choose **Remove** next to the user's name that you want to remove. 

    > [!div class="mx-imgBorder"]  
    > !Remove user confirmation dialog, on-premises versions.](media/project-collection/remove-admin-member-server.png)  

::: moniker-end    

<a id= "project-level" />

## Change the permission level for a project-level group 

::: moniker range="azure-devops"

> [!NOTE]   
> To enable the new user interface for the Project Permissions Settings Page, see [Enable preview features](../../project/navigation/preview-features.md).

#### [Preview page](#tab/preview-page) 

1. From the **Permissions** page, choose the group whose permissions you want to change. 

    For example, here we grant permission to the Contributors group to **Delete and restore work items**.  

    > [!div class="mx-imgBorder"]  
    > ![Screenshot of Contributors group, permissions, preview page.](media/project-collection/delete-restore-work-items-permissions-s154.png)  

    Your changes are automatically saved. 

    > [!TIP]   
    > In general, if you add a user to the Contributors group, they can add and modify work items. You can restrict permissions of users or user groups to add and modify work items based on the area path. For details, see [Set permissions and access for work tracking, Modify work items under an area path](set-permissions-access-work-tracking.md#set-permissions-area-path).

    For a description of each permission, see [Permissions and groups reference, project-level permissions](permissions.md#project-level-permissions).

    > [!NOTE]   
    > You can't change the permission settings for the Project Administrators group. This is by design.  
 
#### [Current page](#tab/current-page) 

1. From the **Security** page, choose the group whose permissions you want to change. 

    For example, here we grant permission to the Contributors group to delete and restore work items.  

    > [!div class="mx-imgBorder"]  
    > ![[Screenshot of Contributors group, permissions, current page.](media/project-level-permissions-contributors-group.png)  

    > [!TIP]   
    > In general, if you add a user to the Contributors group, they can add and modify work items. You can restrict permissions of users or user groups to add and modify work items based on the area path. For details, see [Set permissions and access for work tracking, Modify work items under an area path](set-permissions-access-work-tracking.md#set-permissions-area-path).

    For a description of each permission, see [Permissions and groups reference, project-level permissions](permissions.md#project-level-permissions).

    > [!NOTE]   
    > You can't change the permission settings for the Project Administrators group. This is by design.  

1. Choose **Save changes**.   

* * *

::: moniker-end

::: moniker range="< azure-devops"

1. From the **Security** page, choose the group whose permissions you want to change. 

    For example, here we grant permission to the Contributors group to delete and restore work items.  

    > [!div class="mx-imgBorder"]  
    > ![Screenshot of Contributors group, permissions, on-premises versions.](media/project-level-permissions-contributors-group.png)  

    > [!TIP]   
    > In general, if you add a user to the Contributors group, they can add and modify work items. You can restrict permissions of users or user groups to add and modify work items based on the area path. For details, see [Set permissions and access for work tracking, Modify work items under an area path](set-permissions-access-work-tracking.md#set-permissions-area-path).

    For a description of each permission, see [Permissions and groups reference, project-level permissions](permissions.md#project-level-permissions).

    > [!NOTE]   
    > You can't change the permission settings for the Project Administrators group. This is by design.  

2. Choose **Save changes**.   


::: moniker-end


<a id="collection-level" />

## Add a group and change its permissions at the organization or collection-level group 

::: moniker range="azure-devops"

> [!NOTE]   
> To enable the new user interface for the **Organization Permissions Settings Page v2**, see [Enable preview features](../../project/navigation/preview-features.md). The preview page provides a group settings page that the current page does not. 

1. From your project web portal, choose the :::image type="icon" source="../../media/icons/project-icon.png" border="false"::: Azure DevOps icon, and then select ![gear icon](../../media/icons/gear-icon.png) **Organization settings**. 

    > [!div class="mx-imgBorder"]  
    > ![Open Organization settings](/azure/devops/media/settings/open-admin-settings-vert-2.png)  

1. Under **Security**, choose **Permissions**, and then choose **New group** to open the dialog for adding a group. 

   > [!div class="mx-imgBorder"]  
   > ![Create security group at the organization-level](media/project-collection/organization-permissions-add-group.png)  

2. Enter a name for the group, members of the group, and optionally a description. 
 
    For example, here we define a Work Tracking Administrators group.  

   > [!div class="mx-imgBorder"]  
   > ![Security group dialog, Add a security group at the organization-level](media/project-collection/create-new-group-at-org-level.png)  

    Choose **Create**.  

3. Choose the group name you just created and change the permission levels. For a description of each permission, see [Permissions and groups reference, Collection-level permissions](permissions.md#collection-level).

    Here we grant this group permissions to [manage customizations for the Inheritance process model](../settings/work/manage-process.md). 

    > [!div class="mx-imgBorder"]  
    > ![Create Custom group dialog, cloud version.](media/project-collection/change-org-level-work-tracking-permissions.png)   

    Your changes are automatically saved. 

    > [!NOTE]   
    > You can't change the permission settings for the Project Collection Administrators group. This is by design. 

::: moniker-end    


::: moniker range="azure-devops-2019 || azure-devops-2020"

1. From your project web portal, choose the :::image type="icon" source="../../media/icons/project-icon.png" border="false"::: Azure DevOps icon, and then select ![gear icon](../../media/icons/gear-icon.png) **Organization settings**. 

    > [!div class="mx-imgBorder"]  
    > ![Open Collection settings, on-premises versions.](/azure/devops/media/settings/open-admin-settings-vert-2.png)  

1. Choose **Security**, and then choose **Create group** to open the dialog for adding a group. 

   > [!div class="mx-imgBorder"]  
   > ![Create security group at the collection-level](media/project-level-permissions-create-group.png)  

2. Enter a name for the group, and optionally a description. 
 
    For example, here we define a Work Tracking Administrators group.  
    ![Security group dialog, Add a security group at the organization or collection level](media/project-level-permissions-add-group.png)  
    For a description of each permission, see [Permissions and groups reference, collection-level permissions](permissions.md#collection-level).

3. Choose the group name you just created and change the permission levels. 

    Here we grant this group permissions to [manage customizations for the Inheritance process model](../settings/work/manage-process.md). 

    > [!div class="mx-imgBorder"]  
    > ![Screenshot of Custom group, change permissions, on-premises versions.](media/collection-level-permissions-work-tracking-group.png)   

4. Choose **Save changes**.   

    > [!NOTE]   
    > You can't change the permission settings for the Project Collection Administrators group. This is by design. 

::: moniker-end    


::: moniker range="<= tfs-2018"

1. Choose the :::image type="icon" source="/azure/devops/media/icons/gear_icon.png" border="false"::: settings icon and select **Organization settings** (Azure DevOps) or **Collection settings** (on-premises).  
    
    > [!div class="mx-imgBorder"]  
    > ![Screenshot of Open Collection Settings, TFS-2018 and earlier versions.](/azure/devops/media/settings/open-account-settings.png)  

1. Choose **Security**, and then choose **Create group** to open the dialog for adding a group. 

   > [!div class="mx-imgBorder"]  
   > ![Create security group at the collection-level, TFS-2018 and earlier versions.](media/project-level-permissions-create-group.png)  

2. Enter a name for the group, and optionally a description. 
 
    For example, here we define a Work Tracking Administrators group.  
    ![Security group dialog, Add a security group at the organization or collection level](media/project-level-permissions-add-group.png)  
    For a description of each permission, see [Permissions and groups reference, collection-level permissions](permissions.md#collection-level).

3. Choose the group name you just created and change the permission levels. 

    Here we grant this group permissions to [manage customizations for the Inheritance process model](../settings/work/manage-process.md). 

    > [!div class="mx-imgBorder"]  
    > ![Screenshot of Custom group, change permissions, TFS-2018 and earlier versions.](media/collection-level-permissions-work-tracking-group.png)   

4. Choose **Save changes**.   

    > [!NOTE]   
    > You can't change the permission settings for the Project Collection Administrators group. This is by design.  

::: moniker-end


## Manage group settings 

::: moniker range="azure-devops" 

> [!NOTE]   
> To enable the new user interface for the **Project Permissions Settings Page** or the **Organization Permissions Settings Page v2**, see [Enable preview features](../../project/navigation/preview-features.md). Both preview pages provide a group settings page that the current page does not. 

#### [Preview page](#tab/preview-page) 

You can change a group description, add a group image, or delete a group through the group **Settings** page. 

From the **Project > Settings > Permissions** or **Organization > Settings > Permissions** page, choose the group you want to manage, and then choose **Settings**.  

For example, here we open the Settings for the Work Tracking Administrators group. 

> [!div class="mx-imgBorder"]  
> ![Screenshot of Open group settings, preview page.](media/project-collection/group-settings.png) 

You can modify the group name, group description, upload an image, or delete the group.  

#### [Current page](#tab/current-page) 

You can change a group description or add a group image by editing the group profile. Or, delete a group through the group **Delete** menu option. 

### Manage project-level groups 

1. From the **Project > Settings > Security** page, choose the group you want to manage, and choose from the **Edit** menu to either **Edit profile** or **Delete**. 
    For example, here we open the **Edit profile** for the Stakeholder Access group.  

    > [!div class="mx-imgBorder"]  
    > ![Edit group profile](media/project-collection/edit-group-profile-delete-project-level-current.png)   

    . . . and change the description. Note that you can change the name of the group as well. 

    > [!div class="mx-imgBorder"]  
    > ![Screenshot of Edit group profile description](media/project-collection/edit-project-level-group-current.png)   

1. Choose **Save** to save your changes.

### Manage organization-level groups 

1. From the **Organization > Settings > Security** page, choose the group you want to manage, and hover over the context menu and select **Edit Group** or **Delete Group**.  

    For example, here we open the **Edit Group** for the Work Tracking Administrators group.  

    > [!div class="mx-imgBorder"]  
    > ![Screenshot of context menu for Custom group](media/project-collection/org-permissions-group-edit-delete-v1.png)   

    . . . and change the description. Note that you can change the name of the group as well. 

    > [!div class="mx-imgBorder"]  
    > ![Edit group profile description, cloud version](media/project-collection/edit-org-group-dialog-v1.png)   

1. Choose **Save** to save your changes.

::: moniker-end

* * *

::: moniker range="< azure-devops" 

You can change a group name, description, add a group image, or delete a group. 

1. From the **Project > Settings > Security** or **Organization > Settings > Security** page, choose the group you want to manage

2. Choose from the **Edit** menu to either **Edit profile** or **Delete**. 

    For example, here we open the **Edit profile** for the Stakeholder Access group.  

    > [!div class="mx-imgBorder"]  
    > ![Open Edit group profile, on-premises versions.](media/project-collection/edit-group-profile-delete-project-level-current.png)   

    . . . and change the description. Note that you can change the name of the group as well. 

    > [!div class="mx-imgBorder"]  
    > ![Edit group dialog profile description, on-premises versions.](media/project-collection/edit-project-level-group-current.png)   

3. Choose **Save** to save your changes.

## On-premises deployments

For on-premises deployments, see these additional articles: 

- [Add a user as an Azure DevOps Server administrator](/azure/devops/server/admin/add-administrator) 
- [Azure DevOps Server service account groups](/azure/devops/server/admin/service-accounts-dependencies)  

::: moniker-end  

::: moniker range="tfs-2018 < azure-devops"

If your on-premises deployment is integrated with SQL Server Reports, you'll need to manage membership for those products separately from their websites. See [Grant permissions to view or create SQL Server reports in TFS](../../report/admin/grant-permissions-to-reports.md).

::: moniker-end 

::: moniker range="<= tfs-2017"
If your on-premises deployment is integrated with a SharePoint product or SQL Server Reports, you'll need to manage membership for those products separately from their websites.

* [Set SharePoint site permissions](../../organizations/security/set-sharepoint-permissions.md)
* [Grant permissions to view or create SQL Server reports in TFS](../../report/admin/grant-permissions-to-reports.md)

::: moniker-end 



## FAQs

::: moniker range="< azure-devops"

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

#### Q: Where can I find information about each individual permission?

A: You can find detailed information about individual permissions and their relationship to default security groups in the [Permission and groups reference](../../organizations/security/permissions.md). To give a user project administration permission, complete the following steps:

1. From the team page, select the settings icon ![Settings icon](media/icons/gear_icon.png) to go to the team administration page.

2. Add the user to the **Project Administrators** group.


## Next steps

> [!div class="nextstepaction"]
> [Manage projects](../projects/about-projects.md)

## Related articles

- [Get started with permissions, access, and security groups](about-permissions.md)
- [Permissions lookup reference](permissions-lookup-guide.md)
- [Permissions and groups reference](permissions.md)
- [Manage teams and configure team tools](../../organizations/settings/manage-teams.md)
- [Troubleshoot permissions](troubleshoot-permissions.md)
