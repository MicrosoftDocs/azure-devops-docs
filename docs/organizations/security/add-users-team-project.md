---
title: Add users or groups to a team or project
description: How to add users or groups to a team, or add members or groups to a project.
ms.assetid: 3cfefdd2-b161-4e04-8dc0-e2deeac50262
ms.subservice: azure-devops-security
ms.author: chcomley
author: chcomley
ms.topic: how-to
monikerRange: '<= azure-devops'
ms.date: 01/22/2024
--- 


# Add users or groups to a team or project

[!INCLUDE [version-lt-eq-azure-devops](../../includes/version-lt-eq-azure-devops.md)]

::: moniker range="azure-devops"

In this article, learn how to add users or groups to a team or project. For organizations with large user bases, we recommend you use Microsoft Entra ID to add and manage new users through security groups. However, to enable flexibility for all size organizations, Azure DevOps supports the following operations.

::: moniker-end

::: moniker range="< azure-devops"
In this article, learn how to add users to a team or project. For organizations with large user bases, we recommend you use Active Directory or Windows Group to manage users through security groups. However, to enable flexibility for all size organizations, Azure DevOps supports the following operations.
 
::: moniker-end

## Prerequisites

[!INCLUDE [temp](../../includes/prerequisites-add-users-org.md)]

[!INCLUDE [temp](../../includes/prerequisites-add-users-server.md)]

**Recommended**: If you're new to Azure DevOps, familiarize yourself with the information in the following articles: 

- [Get started with permissions, access levels, and security groups](about-permissions.md)  
- [About projects and scaling your organization](../projects/about-projects.md)  
- [Default permissions and access quick reference](permissions-access.md)  
- [About teams and Azure Boards tools](../settings/about-teams-and-settings.md) 

<a id="widget"> </a>

## Supported options for adding users 

::: moniker range="azure-devops"
Depending on your administrator level and interface, you can add new or existing users to teams or projects in the following ways. 
::: moniker-end

::: moniker range="< azure-devops"
Team and project administrators can add existing users to their team or project. Existing users are ones that are known to a project collection through the Active Directory or Windows Group created for the server that hosts the on-premises Azure DevOps Server.  
::: moniker-end
 
:::row:::
   :::column span="1":::
      **Administrator level**
   :::column-end:::
   :::column span="2":::
      **Interface**
   :::column-end:::
   :::column span="2":::
      **Supported tasks**
   :::column-end:::
:::row-end:::
::: moniker range="azure-devops"
:::row:::
   :::column span="1":::
      Team administrators
   :::column-end:::
   :::column span="2":::
      [Team Members dashboard widget](#widget)
   :::column-end:::
   :::column span="2":::
      - Add new or existing users to a team. 
	  - Send new users an invitation.
   :::column-end:::
:::row-end:::
::: moniker-end
:::row:::
   :::column span="1":::
      
   :::column-end:::
   :::column span="2":::
      [**Project settings** > **Teams** > **Team** > **Members**](#teams-page)  
   :::column-end:::
   :::column span="2":::
      Add existing users or groups to a team.
   :::column-end:::
:::row-end:::
:::row:::
   :::column span="1":::
      Project Administrators
   :::column-end:::
   :::column span="2":::
      [Project **Summary** page > **Invite**](#summary-page)  
   :::column-end:::
   :::column span="2":::
      - Add new or existing users. 
	  - Send new users an invite. 
	  - Optionally add users to one or more teams.   
   :::column-end:::
:::row-end:::
:::row:::
   :::column span="1":::
      
   :::column-end:::
   :::column span="2":::
      [**Project settings** > **Permissions** > **Groups** > **Group** > **Members**](#project-permissions)  
   :::column-end:::
   :::column span="2":::
      - Add existing users or groups to a security group. By adding to a team group, you effectively add them to the team. 
	  - Optionally remove a user from a group.   
   :::column-end:::
:::row-end:::
::: moniker range="azure-devops"
:::row:::
   :::column span="1":::
      Project Collection Administrators
   :::column-end:::
   :::column span="2":::
      [**Organization settings** > **Users**](../accounts/add-organization-users.md)   
   :::column-end:::
   :::column span="2":::
      - Add new users to an organization and send an invite. Must specify the access level.
      - Optionally add users to select projects. 
      - Use [Group rules](../accounts/assign-access-levels-by-group-membership.md) to further manage groups.  
   :::column-end:::
:::row-end:::
:::row:::
   :::column span="1":::
      
   :::column-end:::
   :::column span="2":::
      [`az devops user` CLI](../accounts/add-organization-users.md#add-users-to-your-organization)
   :::column-end:::
   :::column span="2":::
      Add new users to an organization and send an invite. Must specify the access level.  
   :::column-end:::
:::row-end:::
::: moniker-end
::: moniker range="azure-devops"
:::row:::
   :::column span="1":::
      Microsoft Entra Administrators
   :::column-end:::
   :::column span="2":::
      Microsoft Entra ID
   :::column-end:::
   :::column span="2":::
      Add users to Microsoft Entra, connected to Azure DevOps Services. These users get added to the Project Collection Valid Users group. For more information, see [Connect your organization to Microsoft Entra ID](../accounts/connect-organization-to-azure-ad.md). 
   :::column-end:::
:::row-end:::
::: moniker-end
::: moniker range="< azure-devops"
:::row:::
   :::column span="1":::
      Active Directory Administrators
   :::column-end:::
   :::column span="2":::
      Active Directory or Windows Group
   :::column-end:::
   :::column span="2":::
      Add users to Active Directory or Windows Group, connected to Azure DevOps. These users get added as members of the Project Collection Valid Users group and have access to all projects within a project collection. For more information, see [Set up groups for use in Azure DevOps on-premises](/azure/devops/server/admin/setup-ad-groups?view=azure-devops-2020&preserve-view=true). 
   :::column-end:::
:::row-end:::
::: moniker-end

::: moniker range="azure-devops"

## Add a user from the Team Members widget  

As a team administrator, you can add new or existing members from the **Team Members** dashboard widget. For more information, see [Add widgets to a dashboard](../../report/dashboards/add-widget-to-dashboard.md). 
 
1. Sign in to your project (```https://dev.azure.com/{Your_Organization/Your_Project}```).
2. Select **Dashboards** and then choose your dashboard.

   :::image type="content" source="../../report/dashboards/media/dashboards/open-dashboards-vert.png" alt-text="Screenshot shows Dashboards tab selected.":::

3. Select :::image type="icon" source="../../media/icons/add-team-member-plus-sign-blue.png" border="false"::: **Manage team members** on the Team Members widget. 

	:::image type="content" source="media/add-users/team-member-widget.png" alt-text="Screenshot of Team Members widget added to a dashboard, plus icon.":::

4. Enter email addresses for new users. For existing users, enter their name until it resolves as a known name to the system. Separate multiple entries with a semicolon (;). Select **Add**.

	When the user's unknown, a notification advises that an access level must be assigned. To complete the invitation, select **Add**.    
	:::image type="content" source="media/add-users/invite-members-dialog-add-info.png" alt-text="Screenshot of the Invite members to a team dialog, Add new user account.":::

	When you add a new user, the system assigns Stakeholder as the access level when all free five Basic access levels are already assigned. Active contributors to a project need to have Basic access as a minimum. A Project Collection Administrator can change the access level and resend invitations from the [**Organization Settings** > **Users** page](#manage-users).  

	> [!NOTE]
	> Users with limited access, such as Stakeholders, can't access select features even if granted permissions to those features. For more information, see [Permissions and access](permissions-access.md).

5. (Optional) A notification briefly displays to indicate success or failure. Select **Details** to open the notification and review details. 

	:::row:::
	   :::column span="":::
	      :::image type="content" source="media/add-users/notification-success.png" alt-text="Screenshot of notification success message. ":::  
	   :::column-end:::
	   :::column span="":::
	      :::image type="content" source="media/add-users/notification-failure.png" alt-text="Screenshot of notification failure message. ":::  
	   :::column-end:::
	:::row-end:::
	:::row:::
	   :::column span="":::
	      :::image type="content" source="media/add-users/summary-invite-notifications-success.png" alt-text="Notification dialog of Success. "::: ":::  
	   :::column-end:::
	   :::column span="":::
	      :::image type="content" source="media/add-users/notification-failure-outside-directory.png" alt-text="Notification dialog of failure. ":::
	   :::column-end:::
	:::row-end:::

6. New users receive an email invitation to sign in to the project. Existing users don't receive a formal notification. 

::: moniker-end

<a id="teams-page"> </a>
<a id="add-team-members"> </a>
<a id="add-team-members-team-services"></a>
<a id="add-users-to-a-team"> </a>

## Add users or groups to a team 

Do the following steps to add existing users or security groups to a team. To add a custom security group, see [Manage security groups](add-remove-manage-user-group-security-group.md).   
 
::: moniker range="azure-devops"
[!INCLUDE [note-new-teams-page](../../includes/note-new-teams-page.md)]
::: moniker-end

#### [Preview page](#tab/preview-page)

::: moniker range="azure-devops" 

1. Select **Boards** > **Boards** > **Show team profile** > **Team Settings**.

   > [!div class="mx-imgBorder"]  
   > ![Screenshot of Work Backlog or Board, choose team profile icon.](../settings/media/team-defaults/open-team-profile-choose-team-settings.png)  

2. If you need to switch the team context, use the team selector within the breadcrumbs.  

	:::image type="content" source="media/add-users/change-team-context.png" alt-text="Screenshot of Project Settings>Teams>Team and Teams breadcrumb.":::

3. Select **Add**. 

	> [!div class="mx-imgBorder"]  
	> ![Screenshot of Team Profile, choose Add, preview page.](media/add-users/new-teams-page-add-member.png)   

   You can toggle between direct or expanded membership views. The **Direct Members** view displays users and groups added to the team. The **Expanded Members** view replaces any Azure DevOps groups with the members who belong to those groups. Microsoft Entra ID or Active Directory groups don't expand. 

4. Enter the sign-in address or display name one at a time or all together, separated by commas. You can also add a project security group--such as another team group, custom group, or Microsoft Entra group if used by the organization.

	:::image type="content" source="media/add-users/change-team-context.png" alt-text="Screenshot of Invite members to team dialog, choose user account.":::

	Select :::image type="icon" source="../../media/icons/refresh.png" border="false":::  **Refresh** if you don't see your updates. 

5. To [add an account as a Team administrator](../../organizations/settings/add-team-administrator.md), go to the **Settings** page and select **Add** in the Administrators section.

::: moniker-end

::: moniker range="< azure-devops"
Select the **Current page** tab for information on adding a user to a team. The **New Teams Page** preview feature is only available for Azure DevOps Services at this time. 
::: moniker-end

#### [Current page](#tab/current-page)

::: moniker range=">= azure-devops-2019"

You add team members from **Project Settings>Work>Team configuration**. You can quickly navigate to it from a team work tracking backlog, board, or dashboard. 

1. Select **Boards** > **Show team profile** > **Team Settings**.

   > [!div class="mx-imgBorder"]  
   > ![Screenshot of Work Backlog or Board, choose team profile icon.](../settings/media/team-defaults/open-team-profile-choose-team-settings.png)  

2. If you need to switch the team context, use the team selector within the breadcrumbs.  

	> [!div class="mx-imgBorder"]  
	> ![Screenshot of Team Configuration, Team breadcrumb.](../settings/media/team-defaults/select-team-context.png) 

3. Select **Add**. 

	> [!div class="mx-imgBorder"]  
	> ![Screenshot of Team Profile, choose Add, current page.](media/add-users/team-profile-choose-add.png)   

4. Enter the sign-in address or display name for each account you want to add. Add them one at a time or all at the same time, separated by commas, and then **Save changes**.

	![Screenshot of Add users and group dialog, current page.](media/project-level-permissions-add-a-user.png)

	Select :::image type="icon" source="../../media/icons/refresh.png" border="false"::: **Refresh** if you don't see your updates. 

5. To add an account as a Team administrator, select **Add** on the Team Profile page. For more information, see [Add a team administrator](../../organizations/settings/add-team-administrator.md)

::: moniker-end



---
> [!TIP]
> The total count display stops incrementing at 500, but you can still add more users.
> :::image type="content" source="media/add-users/total-team-members.png" alt-text="Screenshot showing display of total team members.":::

## Remove users or groups from a team 

Do the following steps to remove a user or group from a team.
 
#### [Preview UI](#tab/preview-page)

::: moniker range="azure-devops"

1. Select **Project settings** > **Teams** > **Members** > **Direct Members**. For the user to be removed, select :::image type="icon" source="../../media/icons/more-actions.png" border="false"::: **More options** >**Remove**.

	> [!div class="mx-imgBorder"]  
	> ![Screenshot of Team profile page, remove a team member, new nav.](media/add-users/direct-members-remove.png)   

   > [!TIP]
   > To remove a team administrator as a team member, you must first remove them as an administrator. 

2. Select **Delete** to confirm.  

	:::image type="content" source="media/add-users/remove-user-confirmation.png" alt-text="Screenshot of Delete member dialog confirmation.":::

::: moniker-end

::: moniker range="< azure-devops"
Choose the **Current page** tab for information on adding a user to a team. The **New Teams Page** preview feature is only available for Azure DevOps Services at this time. 
::: moniker-end

#### [Current UI](#tab/current-page)

::: moniker range=">= azure-devops-2019"

1. To remove members, open the team's **Members** page, choose **direct** membership, return to this page, highlight the user name and choose **Remove**.

	> [!div class="mx-imgBorder"]  
	> ![Screenshot of Team profile page, remove a team member.](media/add-users/team-page-remove-team-member-vert.png)   

   > [!NOTE]
   > To remove a team administrator as a team member, you must first remove them as an administrator. 

::: moniker-end



---

<a name="add-users-team-project"></a>
<a name="add-users-to-a-project"></a>
 
## Add users or groups to a project

As a member of the **Project Administrators** group, you can add users or groups to a project from the **Project settings> Permissions** page by adding them to a security group. To add a custom security group, see [Add or remove users or groups, manage security groups](add-remove-manage-user-group-security-group.md).   


::: moniker range="azure-devops"
> [!NOTE]   
> To enable the **Project Permissions Settings Page** preview page, see [Enable preview features](../../project/navigation/preview-features.md).
::: moniker-end 

<a id="project-permissions"></a>

#### [Preview UI](#tab/preview-page)

::: moniker range="azure-devops"

1. Sign in to your project (`https://dev.azure.com/{Your_Organization/Your_Project}`).

2. Select **Project settings** > **Permissions**. 

	![Screenshot of project settings permissions.](media/permissions/project-settings-permissions.png)

3. Under **Groups**, choose one of the following options:
   - **Readers**: To add users who require read-only access to the project, choose.
   - **Contributors**: To add users who contribute fully to this project or have Stakeholder access.
   - **Project Administrators**: To add users who need to administrate the project. For more information, see [Change project-level permissions](change-project-level-permissions.md).

	Or, you can choose any team group to add users to a specific team. 

   Here we choose the **Contributors** group.

	> [!div class="mx-imgBorder"]  
	> ![Screenshot of Security page, Contributors group.](media/add-users/open-contributors-groups-s154-new.png) 

4. Next, choose the **Members** tab.

   The default team group, and any other teams you add to the project, get included as members of the **Contributors** group. Add a new user as a member of a team instead, and the user automatically inherits Contributor permissions. 

    > [!TIP]
    > Managing users is much easier [using groups](../../organizations/security/about-permissions.md), not individual users.

5. Choose **Add** to add a user or a user group.

	> [!div class="mx-imgBorder"]  
	> ![Screenshot of Security page, Contributors group, Members page, Add button.](media/add-users/add-users-to-contributors-s154.png) 

6. Enter the name of the user account into the text box. You can enter several identities into the text box, separated by commas. The system automatically searches for matches. Choose the match(es) that meets your requirements.

	![Screenshot of Add users and group dialog.](media/add-users/invite-members-contributors-s154.png)  

   > [!NOTE]
   > The first time you add a user or group to Azure DevOps,
   > you can't browse to it or check the friendly name.
   > After the identity has been added, you can just enter the friendly name.

	Choose **Save** when done. 

7. You might customize user permissions for other functionality in the project. For example, in [areas and iterations](set-permissions-access-work-tracking.md) or [shared queries](../../boards/queries/set-query-permissions.md).

::: moniker-end

::: moniker range="< azure-devops"

Choose the **Current page** tab for information on adding a user to a project. The Project Permissions Settings Page preview feature is only available for Azure DevOps Services at this time. 

::: moniker-end

#### [Current UI](#tab/current-page) 

::: moniker range=">= azure-devops-2019"

1. Sign in to your project (`https://dev.azure.com/{Your_Organization/Your_Project}`).

2. Select **Project settings** > **Security**.

	![Screenshot of Project settings, Security.](media/view-permissions/open-security-project-level-vert.png) 

3. Under **Groups**, choose one of the following options:
   - **Readers**: To add users who require read-only access to the project.
   - **Contributors**: To add users who contribute fully to this project or have Stakeholder access.
   - **Project Administrators**: To add users who need to administrate the project. For more information, see [Change project-level permissions](change-project-level-permissions.md).

4. Next, choose the **Members** tab.

   Here we choose the **Contributors** group.

	> [!div class="mx-imgBorder"]  
	> ![Screenshot of Security page, Contributors group, Membership page.](media/add-users/add-members-to-contributors-group.png)  

   The default team group, and any other teams you add to the project, get included as members of the **Contributors** group. Add a new user as a member of a team instead, and the user automatically inherits Contributor permissions. 

    > [!TIP]
    > Managing users is much easier [using groups](../../organizations/security/about-permissions.md), not individual users.

5. Choose ![gear icon](../../media/icons/add-light-icon.png)**Add** to add a user or a user group.

6. Enter the name of the user account into the text box. You can enter several identities into the text box, separated by commas. The system automatically searches for matches. choose the match(es) that meets your requirements.

	![Screenshot of Add users and group dialog, server version.](media/project-level-permissions-add-a-user.png)  

   > [!NOTE]
   > The first time you add a user or group to Azure DevOps, you can't browse to it or check the friendly name. After the identity has been added, you can just enter the friendly name.

	Choose **Save changes** when complete. 

7. (Optional) You can customize a user's permission for other functionality in the project. For example, in [areas and iterations](set-permissions-access-work-tracking.md) or [shared queries](../../boards/queries/set-query-permissions.md).

   > [!NOTE]
   > Users that have limited access, such as Stakeholders, won't be able to access select features even if granted permissions to those features. For more information, see [Permissions and access](permissions-access.md).

::: moniker-end



---

<a name="summary-page"></a>

## Invite users from the Summary page 

As a member of the Project Administrators group, you can add members to a project from the [**Summary** page](../../organizations/projects/project-vision-status.md) and optionally add them to one or more teams.

::: moniker range="< azure-devops"

> [!NOTE]
> For on-premises Azure DevOps, all email actions require an [SMTP server to be configured](/azure/devops/server/admin/setup-customize-alerts).  
::: moniker-end

::: moniker range=">= azure-devops-2019"

1. Open your **Project** > **Summary** page, and select **Invite**.  

	:::image type="content" source="media/add-users/summary-invite-users.png" alt-text="Screenshot of Summary page, Invite button.":::

::: moniker-end



2. For new users, enter their email address. For existing users, enter their name until it resolves as a known name to the system. You can add several email addresses or account names by separating them with a semicolon (;). 

	:::row:::
	   :::column span="":::
	      Choose the entry listed under **Add users** to complete the entry.   
	   :::column-end:::
	   :::column span="":::
	      If you're adding a user known by the organization or collection, enter the name or email address and then choose the name that appears to complete the entry.   
	   :::column-end:::
	:::row-end:::
	:::row:::
	   :::column span="":::
	      :::image type="content" source="media/add-users/summary-page-invite-dialog-new-unknown-user.png" alt-text="Screenshot of the Invite members to a project dialog, showing unknown user.":::
	   :::column-end:::
	   :::column span="":::
	      :::image type="content" source="media/add-users/summary-invite-known-user.png" alt-text="Screenshot of the Invite members to a project dialog, entering a known user account.":::
	   :::column-end:::
	:::row-end:::

	> [!NOTE]  
	> Any valid email address is acceptable. When the user accepts the invitation and signs into Azure DevOps, they register their email address as a Microsoft account and choose a password.  

2. Optionally, select the teams you want to add the user to and then choose **Add** to complete the invitation.

	:::row:::
	   :::column span="":::
	      When the user is unknown, a notification alerts that an access level must be assigned. To complete the invitation, choose **Add**.    
	   :::column-end:::
	   :::column span="":::
	      Choose **Add** to complete the invitation.     
	   :::column-end:::
	:::row-end:::
	:::row:::
	   :::column span="":::
	      :::image type="content" source="media/add-users/summary-invite-dialog-new-user-selected-team.png" alt-text="Screenshot of the Invite members to a project dialog, unknown user, selecting teams to add.":::
	   :::column-end:::
	   :::column span="":::
	      :::image type="content" source="media/add-users/summary-page-invite-project-members.png" alt-text="Screenshot of the Invite members to a project dialog, known user, selecting teams to add.":::
	   :::column-end:::
	:::row-end:::

	 When you add a new user, the system assigns Stakeholder as the access level when all free five Basic access levels get assigned. Active contributors to a project need to have Basic access as a minimum. A Project Collection Administrator can change the access level from the [**Organization settings** > **Users** page](#manage-users).  

	 > [!NOTE]
	 > Users with limited access, such as Stakeholders, can't access select features even if granted permissions to those features. For more information, see [Permissions and access](permissions-access.md).
 
3. (Optional) A message briefly displays on the screen to indicate success or failure. Select **Details** to open the notification and review details. 

	:::row:::
	   :::column span="":::
	      :::image type="content" source="media/add-users/notification-success.png" alt-text="Screenshot of notification success message. ":::  
	   :::column-end:::
	   :::column span="":::
	      :::image type="content" source="media/add-users/notification-failure.png" alt-text="Screenshot of notification failure message. ":::  
	   :::column-end:::
	:::row-end:::
	:::row:::
	   :::column span="":::
	      A success message indicates the status of adding the user to the system. 
	   :::column-end:::
	   :::column span="":::
	      A failure message indicates why the addition of the user failed. 
	   :::column-end:::
	:::row-end:::
	:::row:::
	   :::column span="":::
	      :::image type="content" source="media/add-users/summary-invite-notifications-success.png" alt-text="Screenshot of the Notification dialog of Success."::: ":::  
	   :::column-end:::
	   :::column span="":::
	      :::image type="content" source="media/add-users/notification-failure-outside-directory.png" alt-text="Screenshot of the Notification dialog of failure.":::
	   :::column-end:::
	:::row-end:::
 
4. New users receive an email inviting them to sign in to the project. Existing users don't receive any formal notification. 

::: moniker range="azure-devops"

<a id="manage-users"></a> 

##  Manage users or resend invitations 

Project Collection Administrators can update user assignments and resend invitations. For more information, see [Add account users for Azure DevOps](../accounts/add-organization-users.md).

:::image type="content" source="media/add-users/users-page-manage-options.png" alt-text="Screenshot of More options to manage users.":::

::: moniker-end

::: moniker range="azure-devops"

## List team members or team details  

From the Azure DevOps CLI command, you can see details about a team or list the individual members of that team. To first see a list of all teams in your organization, use the [az devops team list](/cli/azure/devops/team#az-devops-team-list) command.

[List team members](#list-team-members) &#124; [Show team details](#show-details)

> [!NOTE]   
> You can use the [`az devops user`](../accounts/add-organization-users.md#add-users-to-your-organization) command to add users to an organization. There is no comparable command for adding users to a team or project.

### List team members

You can list the individual members of a team in your organization with the [az devops team list-member](/cli/azure/devops/team#az-devops-team-list-member) command. To get started, see [Get started with Azure DevOps CLI](../../cli/index.md). 

```azurecli
az devops team list-member --team
                           [--org]
                           [--project]
                           [--skip]
                           [--top]
```

#### Parameters

- **team**: Required. Name or ID of the team to show.
- **org**: Azure DevOps organization URL. You can configure the default organization using `az devops configure -d organization=ORG_URL`. Required if not configured as default or picked up using `git config`. Example: `--org https://dev.azure.com/MyOrganizationName/`.
- **project**: Name or ID of the project. You can configure the default project using `az devops configure -d project=NAME_OR_ID`. Required if not configured as default or picked up using `git config`.
- **skip**: Optional. Number of members to skip.
- **top**: Optional. Maximum number of members to return.

#### Example

The following command lists the first five members of the team named **Fabrikam Team** and returns the details in table format.  

```azurecli 
az devops team list-member --team "Fabrikam Team" --top 5 --output table

ID                                    Name               Email
------------------------------------  -----------------  --------------------------
3b5f0c34-4aec-4bf4-8708-1d36f0dbc468  Christie Church    fabrikamfiber1@hotmail.com
19d9411e-9a34-45bb-b985-d24d9d87c0c9  Johnnie McLeod     fabrikamfiber2@hotmail.com
8c8c7d32-6b1b-47f4-b2e9-30b477b5ab3d  Chuck Reinhart     fabrikamfiber3@hotmail.com
d291b0c4-a05c-4ea6-8df1-4b41d5f39eff  Jamal Hartnett     fabrikamfiber4@hotmail.com
bd30c189-db0f-4dd6-9418-5d8b41dc1754  Raisa Pokrovskaya  fabrikamfiber5@hotmail.com
``` 

<a id="show-details"></a> 

### Show team details

You can view details about a team in your organization with the [az devops team show](/cli/azure/devops/team#az-devops-team-show) command. To get started, see [Get started with Azure DevOps CLI](../../cli/index.md).

```azurecli
az devops team show --team
                    [--org]
                    [--project]
```

#### Parameters

- **team**: Required. Name or ID of the team to show.
- **org**: Azure DevOps organization URL. You can configure the default organization using `az devops configure -d organization=ORG_URL`. Required if not configured as default or picked up using `git config`. Example: `--org https://dev.azure.com/MyOrganizationName/`.
- **project**: Name or ID of the project. You can configure the default project using `az devops configure -d project=NAME_OR_ID`. Required if not configured as default or picked up using `git config`.

#### Example

The following command shows information about the team in your organization named **Fabrikam Team** and returns the details in table format.  

```azurecli
az devops team show --team "Fabrikam Team" --output table

ID                                    Name          Description
------------------------------------  ------------  -------------------------------------------------
a48cb46f-7366-4f4b-baf5-b3632398ed1e  Fabrikam Team  The default project team. Was Fabrikam Fiber Team
``` 

::: moniker-end 

::: moniker range="< azure-devops"

## Add users or groups to an access level

For on-premises deployments, you might need to set the access level for a user or group, particularly if those groups don't belong to the default access level. For more information, see [Change access levels](change-access-levels.md).

::: moniker-end

::: moniker range="< azure-devops"

## Add users or groups to SQL Server Reports

If your on-premises deployment is integrated with SQL Server Reports, you must manage membership for those products separately from their websites. See [Grant permissions to view or create SQL Server reports in Azure DevOps](/previous-versions/azure/devops/report/admin/grant-permissions-to-reports).

::: moniker-end

## Next steps

> [!div class="nextstepaction"]
> [Manage your project](../../user-guide/project-admin-tutorial.md) 

## Related articles

::: moniker range="azure-devops"

* [Add users and manage access](../accounts/add-organization-users.md)   
* [Resources granted to project members](../projects/resources-granted-to-project-members.md)
* [Manage permissions with command line tool](manage-tokens-namespaces.md)
* [Change project visibility to public or private](../projects/make-project-public.md)
::: moniker-end
 
::: moniker range="< azure-devops"
* [Resources granted to project members](../projects/resources-granted-to-project-members.md)
::: moniker-end
