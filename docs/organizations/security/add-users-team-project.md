---
title: Add Users or Groups to Team or Project
description: Add users or groups to a team, or add members or groups to a project by following these procedures for Azure DevOps.
ms.assetid: 3cfefdd2-b161-4e04-8dc0-e2deeac50262
ai-usage: ai-assisted
ms.subservice: azure-devops-security
ms.author: chcomley
author: chcomley
ms.topic: how-to
monikerRange: '<= azure-devops'
ms.date: 02/04/2026
ms.custom: sfi-image-nochange
#customer intent: As an Azure DevOps developer, I want to add users or groups to a team, or add members or groups to a project, so I can manage membership for my teams and projects.
--- 

# Add users or groups to a team or project

[!INCLUDE [version-lt-eq-azure-devops](../../includes/version-lt-eq-azure-devops.md)]

:::moniker range="azure-devops"

Whether you're onboarding new team members or expanding your project collaboration, adding users to your Azure DevOps teams and projects is straightforward. This article walks you through the various ways to add users or groups, from quick dashboard widgets to detailed project settings.

For larger organizations, we recommend using Microsoft Entra ID security groups to streamline user management at scale. However, all the methods described here work well for organizations of any size.

:::moniker-end
::: moniker range="< azure-devops"

Whether you're onboarding new team members or expanding your project collaboration, adding users to your Azure DevOps teams and projects is straightforward. This article walks you through the various ways to add existing users or groups to your teams and projects.

For larger organizations, we recommend using Active Directory or Windows Groups to streamline user management at scale. However, all the methods described here work well for organizations of any size.
 
:::moniker-end

## Prerequisites

[!INCLUDE [temp](../../includes/prerequisites-add-users-org.md)]

[!INCLUDE [temp](../../includes/prerequisites-add-users-server.md)]

**Recommended**: If you're new to Azure DevOps, familiarize yourself with the information in the following articles: 

- [Get started with permissions, access levels, and security groups](about-permissions.md)  
- [About projects and scaling your organization](../projects/about-projects.md)  
- [Default permissions and access quick reference](permissions-access.md)  
- [About teams and Azure Boards tools](../settings/about-teams-and-settings.md)

## Supported options for adding users 

:::moniker range="azure-devops"

Depending on your administrator level and interface, you can add new or existing users to teams or projects in the following ways.

:::moniker-end 
::: moniker range="< azure-devops"

Team and project administrators can add existing users to their team or project. An existing user is any user recognized by a project collection through the Active Directory or Windows Group created for the server that hosts the on-premises Azure DevOps Server.

:::moniker-end 

:::row:::
   :::column span="1":::
      **Administrator level**
   :::column-end:::
   :::column span="1":::
      **Interface**
   :::column-end:::
   :::column span="1":::
      **Supported tasks**
   :::column-end:::
:::row-end:::  

:::moniker range="azure-devops"

:::row:::
   :::column span="1":::
      Team Administrators
   :::column-end:::
   :::column span="1":::
      [Team Members dashboard widget](#add-a-user-from-the-team-members-widget)
   :::column-end:::
   :::column span="1":::
      - Add new or existing users to a team. 
	   - Send new users an invitation.
   :::column-end:::
:::row-end::: 
:::row:::
   :::column span="1":::
      <!-- Team Administrators -->
   :::column-end:::
   :::column span="1":::
      [**Project settings** > **Teams** > **Team** > **Members**](#add-team-members)  
   :::column-end:::
   :::column span="1":::
      - Add existing users or groups to a team.
   :::column-end:::
:::row-end::: 

:::moniker-end 
::: moniker range="< azure-devops"

:::row:::
   :::column span="1":::
      Team Administrators
   :::column-end:::
   :::column span="1":::
      [**Project settings** > **Teams** > **Team** > **Members**](#add-team-members)  
   :::column-end:::
   :::column span="1":::
      - Add existing users or groups to a team.
   :::column-end:::
:::row-end::: 

:::moniker-end 

:::row:::
   :::column span="1":::
      Project Administrators
   :::column-end:::
   :::column span="1":::
      [Project **Summary** page > **Invite**](#invite-users-from-the-summary-page)  
   :::column-end:::
   :::column span="1":::
      - Add new or existing users. 
	   - Send new users an invite. 
	   - Optionally add users to one or more teams.   
   :::column-end:::
:::row-end::: 
:::row:::
   :::column span="1":::
      <!-- Project Administrators -->
   :::column-end:::
   :::column span="1":::
      [**Project settings** > **Permissions** > **Groups** > **Group** > **Members**](#project-permissions)  
   :::column-end:::
   :::column span="1":::
      - Add existing users or groups to a security group. By adding to a team group, you effectively add them to the team. 
	   - Optionally remove a user from a group.   
   :::column-end:::
:::row-end::: 

:::moniker range="azure-devops"

:::row:::
   :::column span="1":::
      Project Collection Administrators
   :::column-end:::
   :::column span="1":::
      [**Organization settings** > **Users**](../accounts/add-organization-users.md)   
   :::column-end:::
   :::column span="1":::
      - Add new users to an organization and send an invite. Must specify the access level.
      - Optionally add users to select projects. 
      - Use [Group rules](../accounts/assign-access-levels-by-group-membership.md) to further manage groups.  
   :::column-end:::
:::row-end::: 
:::row:::
   :::column span="1":::
      <!-- Project Collection Administrators -->      
   :::column-end:::
   :::column span="1":::
      [`az devops user` CLI](../accounts/add-organization-users.md#add-users-to-your-organization)
   :::column-end:::
   :::column span="1":::
      - Add new users to an organization and send an invite. Must specify the access level.  
   :::column-end:::
:::row-end::: 

:::row:::
   :::column span="1":::
      Microsoft Entra Administrators
   :::column-end:::
   :::column span="1":::
      Microsoft Entra ID
   :::column-end:::
   :::column span="1":::
      - Add users to Microsoft Entra, connected to Azure DevOps Services. Add these users to the Project Collection Valid Users group. For more information, see [Connect your organization to Microsoft Entra ID](../accounts/connect-organization-to-azure-ad.md). 
   :::column-end:::
:::row-end:::

:::moniker-end 
::: moniker range="< azure-devops"

:::row:::
   :::column span="1":::
      Active Directory Administrators
   :::column-end:::
   :::column span="1":::
      Active Directory or Windows Group
   :::column-end:::
   :::column span="1":::
      - Add users to Active Directory or Windows Group, connected to Azure DevOps. Add these users as members of the Project Collection Valid Users group. They have access to all projects within a project collection. For more information, see [Set up groups for use in Azure DevOps on-premises](/azure/devops/server/admin/setup-ad-groups?view=azure-devops-2020&preserve-view=true). 
   :::column-end:::
:::row-end:::

:::moniker-end

:::moniker range="azure-devops"

## Add a user from the Team Members widget

As a team administrator, you can add new or existing members from the **Team Members** dashboard widget. For more information, see [Add widgets to a dashboard](../../report/dashboards/add-widget-to-dashboard.md). 
 
1. Sign in to your project (`https://dev.azure.com/<My_Organization>/<My_Project>`).

1. Select **Dashboards** and then choose your dashboard to open it in Azure DevOps:

   :::image type="content" source="../../report/dashboards/media/dashboards/open-dashboards-vert.png" alt-text="Screenshot the Dashboards tab open for a project in Azure DevOps.":::

1. Select :::image type="icon" source="../../media/icons/add-team-member-plus-sign-blue.png"::: **Manage team members** on the Team Members widget:

	:::image type="content" source="media/add-users/team-member-widget.png" border="false" alt-text="Screenshot of the Team Members widget on a dashboard with the Manage team members action (the plus symbol) highlighted.":::

1. Enter the display name or email address for the user to add to the project dashboard:

   - For an existing user, enter the information until the dialog shows a matching entry in the system. Select the matching entry, and then select **Add**. You can add multiple users by separating the entries with a semicolon (**;**). 

	- For a new user unrecognized by the system, enter the complete email address including the domain, such as `fabrikam-user@fabrikam.com`. When you add an unrecognized user, you see a notification that an access level must be assigned for the user. To complete the action, select **Add**:
      
	   :::image type="content" source="media/add-users/invite-members-dialog-add-info.png" alt-text="Screenshot of the Invite members to a team dialog, add new user account.":::

	   The system assigns the **Stakeholder** access level for the new user when all five Basic (free) access levels are already assigned. Active contributors to a project need to have **Basic** access as a minimum. A **Project Collection Administrator** can change the access level and resend invitations from the [**Organization Settings** > **Users** page](#manage-users-or-resend-invitations).

	   > [!NOTE]
	   > Users with limited access, such as **Stakeholders**, can't access select features even if granted permissions to those features. For more information, see [Permissions and access](permissions-access.md).

When the process completes, a notification briefly displays to indicate success or failure. You can select **Details** to open the notification and review the details:

:::row:::
   :::column span="":::
   **User added successfully**

   :::image type="content" source="media/add-users/notification-success.png" border="false" alt-text="Screenshot of the Notification success message.":::

   :::column-end:::
   :::column span="":::
   **Failed to add specified user**

   :::image type="content" source="media/add-users/notification-failure.png" border="false" alt-text="Screenshot of the Notification failure message.":::
       
   :::column-end:::
:::row-end:::
:::row:::
   :::column span="":::

   :::image type="content" source="media/add-users/summary-invite-notifications-success.png" alt-text="Screenshot of the Notification dialog showing details about the successful operation.":::

   :::column-end:::
   :::column span="":::

   :::image type="content" source="media/add-users/notification-failure-outside-directory.png" alt-text="Screenshot of the Notification dialog showing details about why the operation failed.":::

   :::column-end:::
:::row-end:::

When the operation succeeds, new users receive an email invitation to sign in to the project. Existing users don't receive a formal notification. 

:::moniker-end

<a id="add-team-members"></a>

## Add users or groups to a team 

You can add existing users or security groups to a team from the **Team Settings** menu. To add a custom security group, see [Use security groups to manage users and groups](add-remove-manage-user-group-security-group.md).   

The first time you add a user or group to Azure DevOps, you can't browse directly to it or check the friendly name. After Azure DevOps verifies the identity, you can browse for the user or group by using the friendly name. For example, you can browse on the friendly name _Projects_ to locate the verified group, _fabrikam-projects@fabrikam.com (Projects for Fabrikam)_.

:::moniker range="azure-devops"

[!INCLUDE [note-new-teams-page](../../includes/note-new-teams-page.md)]

:::moniker-end

### [Preview UI](#tab/preview-page)

:::moniker range="azure-devops" 

1. Select **Boards** > **Boards** > select the team profile icon (people icon) > **Team Settings**:

   :::image type="content" source="../settings/media/team-defaults/open-team-profile-choose-team-settings-preview.png" alt-text="Screenshot that shows how to access the Team Settings by selecting the Show team profile icon.":::

   If you need to switch the team context, use the **Team** selector in the breadcrumb trail for the current page:

	:::image type="content" source="media/add-users/change-team-context.png" alt-text="Screenshot of the Project Settings, Teams, and Team breadcrumb trail for the current page in Azure DevOps.":::

1. In the **Project Settings** for the **Team**, review the team membership in the **Members** section.

   You can change how the list shows the team members:
   
   - **Direct Members**: Show users and groups who are team members. Groups aren't expanded to show the individual users within the groups.
   - **Expanded Members**: Show users who are team members. For groups, expand any Azure DevOps groups to show the individual users within the groups as team members. Microsoft Entra ID or Active Directory groups don't expand. 

1. To add more users or groups as team members, select **Add**:  

   :::image type="content" source="media/add-users/new-teams-page-add-member.png" alt-text="Screenshot of the Team Profile dialog with the Add option highlighted.":::

1. Enter the display name or email address for the user or group to add to the team. Select the matching entry in the system, and then select **Save**.
   
   - You can add multiple users by separating the entries with a semicolon (**;**).
   - You can add a project security group, such as another team group, custom group, or Microsoft Entra group if used by the organization.

	:::image type="content" source="media/add-users/invite-members-dialog.png" alt-text="Screenshot of Invite members to team dialog, choose user account to add to the team.":::

	After you save your selections, the **Members** list refreshes to include the new members. If you don't see the new team members in the list, select :::image type="icon" source="../../media/icons/refresh.png"::: **Refresh** to update the view. 

1. Each team should have at least one user assigned as an administrator. Add administrators in the **Project Settings** for the **Team** in the **Settings** > **Administrators** section. For detailed instructions, see [Add an account as a Team administrator](../../organizations/settings/add-team-administrator.md).

	:::image type="content" source="media/add-users/team-settings-add-administrator.png" alt-text="Screenshot of the Administrators section in the Project Settings for Teams.":::

:::moniker-end
::: moniker range="< azure-devops"

Select the **Current UI** tab, and follow the instructions for adding new team members. The **New Teams Page** preview UI feature is currently available for Azure DevOps Services only.

:::moniker-end

### [Current UI](#tab/current-page)

::: moniker range="<=azure-devops"

You add team members from **Project Settings** > **Work** > **Team configuration**. You can quickly go to the Team membership list from a team work tracking backlog, board, or dashboard. 

1. Select **Boards** > **Boards**, select the team profile icon (people icon), and then select **Team Settings**:

   :::image type="content" source="../settings/media/team-defaults/open-team-profile-choose-team-settings.png" alt-text="Screenshot that shows how to access the Team Settings under Boards, Boards, Show team profile.":::

   If you need to switch the team context, use the **Team** selector dropdown list in the breadcrumb trail for the current page:

   :::image type="content" source="../settings/media/team-defaults/select-team-context.png" alt-text="Screenshot that shows how to select a different team by using the selector in the breadcrumb trail for the current page.":::

1. In the **Team Profile** dialog, select **Add**:

   :::image type="content" source="media/add-users/team-profile-choose-add.png" alt-text="Screenshot of the Team Profile dialog with the Add option highlighted.":::

1. Enter the display name or email address for each account to add to the team. Select the matching entry in the system, and then select **Save changes**. You can also add multiple accounts by separating the entries with a comma (**,**).

   :::image type="content" source="media/project-level-permissions-add-a-user.png" alt-text="Screenshot of the Add users and group dialog with an account selected and the Save changes action highlighted.":::

	After you save your selections, the **Members** list refreshes to include the new members. If you don't see the new team members in the list, select :::image type="icon" source="../../media/icons/refresh.png"::: **Refresh** to update the view.

1. Each team should have at least one user assigned as an administrator. You can add administrators in the **Team Profile** page. For detailed instructions, see [Add an account as a Team administrator](../../organizations/settings/add-team-administrator.md).

:::moniker-end

---

> [!NOTE]
> The team **Members** list has a **Total** indicator that shows the team size. The maximum value displayed by the indicator is 500. If your team has more than 500 members, the indicator shows the size as 500. If your team has fewer than 500 members, the indicator shows the actual size.
> 
> :::image type="content" source="media/add-users/total-team-members.png" alt-text="Screenshot of the Total indicator for the Team members.":::
> 

## Remove users or groups from a team 

Use the following procedures to remove a user or group from a team.

If the user you're removing is a team administrator, remove the user as a team administrator before removing the user from the team. For more information, see [Remove a Team administrator](../../organizations/settings/add-team-administrator.md#remove-an-administrator).

:::moniker range="azure-devops"

[!INCLUDE [note-new-teams-page](../../includes/note-new-teams-page.md)]

:::moniker-end

### [Preview UI](#tab/preview-page)

:::moniker range="azure-devops"

1. Go to **Project Settings** > **Teams** and select the team you want to update.

1. In the team **Members** section, review the **Direct Members** of the team. Find the user you want to remove and select :::image type="icon" source="../../media/icons/more-actions.png"::: **More actions** > **Remove**:

   :::image type="content" source="media/add-users/direct-members-remove.png" alt-text="Screenshot of the Team profile page showing how to select the Remove option for a team member." lightbox="media/add-users/direct-members-remove.png":::

1. In the confirmation dialog, select **Delete**:

   :::image type="content" source="media/add-users/remove-user-confirmation.png" alt-text="Screenshot of Delete member dialog confirmation.":::

:::moniker-end
::: moniker range="< azure-devops"

Select the **Current UI** tab, and follow the instructions for removing team members. The **New Teams Page** preview UI feature is currently available for Azure DevOps Services only.

:::moniker-end

### [Current UI](#tab/current-page)

::: moniker range="<=azure-devops"

1. Go to the **Team Profile** page, select **Members**, and then select the **Direct** membership view.

1. In the **Team Profile** page > **Members** list, select the user to remove (the row highlights), and then select **Remove**:

   :::image type="content" source="media/add-users/team-page-remove-team-member-vert.png"  alt-text="Screenshot of the Team profile page with the Remove option highlighted for a team member.":::

:::moniker-end

---

<a name="add-project-users"></a>

## Add users or groups to a project

As a member of the **Project Administrators** group, you can add users or groups to a project. Add the new project member to a security group on the **Project Settings** > **Permissions** page. To add a custom security group, see [Add or remove users or groups, manage security groups](add-remove-manage-user-group-security-group.md).   

:::moniker range="azure-devops"

> [!NOTE]   
> To enable the **Project Permissions Settings Page** preview page, see [Enable preview features](../../project/navigation/preview-features.md).

:::moniker-end 

<a id="project-permissions"></a>

#### [Preview UI](#tab/preview-page)

:::moniker range="azure-devops"

1. Sign in to your project (`https://dev.azure.com/<My_Organization>/<My_Project>`).

1. Select **Project Settings** > **Permissions**: 

   :::image type="content" source="media/permissions/project-settings-permissions.png" alt-text="Screenshot of the Project Settings, Permissions section.":::

1. In the security **Groups** section, select the security group to use for the new project members. You can choose any security group in the list, which includes any defined team groups. Here are some examples:

   - **Readers**: Read-only access to the project.
   - **Contributors**: Full contributor privileges to the project, which is equivalent to **Stakeholder** access.
   - **Project Administrators**: Administrator privileges for the project. For more information, see [Change project-level permissions](change-project-level-permissions.md).

   This example uses the **Contributors** security group:

   :::image type="content" source="media/add-users/open-contributors-groups.png" border="false" alt-text="Screenshot of the Security groups page showing the Contributors group selected." lightbox="media/add-users/open-contributors-groups.png":::

   After you select the security group, the configuration page opens.

1. In the configuration page for the security group, select the **Members** tab.

   The default team group, and any other teams defined for the project, are automatically included as members of the **Contributors** group. On this tab, select other users and groups to become members. If you add new users to a project team, they automatically become members of the **Contributors** security group and gain the related permissions. 

   > [!TIP]
   > It's easier to [manage permissions for users by working with groups](../../organizations/security/about-permissions.md) rather than setting permissions at the user level. When you set permissions for a group, all members of the group inherit the group permissions. You can then adjust permissions for specific users in the group, as needed.

1. On the **Members** tab, select **Add**:

   :::image type="content" source="media/add-users/add-users-to-contributors.png" alt-text="Screenshot of the Contributors security group configuration page showing the Add option highlighted.":::

1. Enter the display name or email address for the user or group to add to the security group. Select the matching entry in the system, and then select **Save**. You can also add multiple accounts by separating the entries with a semicolon (**;**).

	:::image type="content" source="media/add-users/invite-members-contributors.png" alt-text="Screenshot of Invite members to security group (Contributors) dialog, choose user account to add to the group.":::

	After you save your selections, the security group **Members** list refreshes to include the new members. If you don't see the new members in the list, select :::image type="icon" source="../../media/icons/refresh.png"::: **Refresh** to update the view. 

1. (Optional) After you add users as members of the security group, you can customize the permissions for other functionality in the project. For example, you might adjust permissions in specific [work tracking areas and iterations](set-permissions-access-work-tracking.md) or [shared queries](../../boards/queries/set-query-permissions.md#set-permissions-on-a-shared-query).

:::moniker-end
::: moniker range="< azure-devops"

Select the **Current UI** tab, and follow the instructions for adding users to projects. The **Project Permissions Settings Page** preview UI feature is currently available for Azure DevOps Services only.

:::moniker-end

#### [Current UI](#tab/current-page) 

::: moniker range="<=azure-devops"

1. Sign in to your project (`https://dev.azure.com/<My_Organization>/<My_Project>`).

1. Select **Project settings** > **Security**.

   :::image type="content" source="media/view-permissions/open-security-project-level-vert.png" border="false" alt-text="Screenshot that shows how to select the Security page under Project settings.":::

1. In the security **Groups** section, select the security group to use for the new project members. You can choose any security group in the list, which includes any defined team groups. Here are some examples:

   - **Readers**: Read-only access to the project.
   - **Contributors**: Full contributor privileges to the project, which is equivalent to **Stakeholder** access.
   - **Project Administrators**: Administrator privileges for the project. For more information, see [Change project-level permissions](change-project-level-permissions.md).

   This example uses the **Contributors** security group. After you select the security group, the configuration page opens.

1. In the configuration page for the security group, select the **Members** tab.

   :::image type="content" source="media/add-users/add-members-to-contributors-group.png" alt-text="Screenshot that shows the members of the Contributors security group.":::

   The default team group, and any other teams defined for the project, are automatically included as members of the **Contributors** group. On this tab, select other users and groups to become members. If you add new users to a project team, they automatically become members of the **Contributors** security group and gain the related permissions. 

   > [!TIP]
   > It's easier to [manage permissions for users by working with groups](../../organizations/security/about-permissions.md) rather than setting permissions at the user level. When you set permissions for a group, all members of the group inherit the group permissions. You can then adjust permissions for specific users in the group, as needed.

1. On the **Members** tab, select :::image type="icon" source="../../media/icons/add-light-icon.png"::: **Add** to add a user or group.

1. Enter the display name or email address for the user or group to add to the security group. Select the matching entry in the system, and then select **Save changes**. You can also add multiple accounts by separating the entries with a comma (**,**).

   :::image type="content" source="media/project-level-permissions-add-a-user.png" alt-text="Screenshot that shows how to add users and groups to a security group.":::

1. (Optional) After you add users as members of the security group, you can customize the permissions for other functionality in the project. For example, you might adjust permissions in specific [work tracking areas and iterations](set-permissions-access-work-tracking.md) or [shared queries](../../boards/queries/set-query-permissions.md#set-permissions-on-a-shared-query).

	> [!NOTE]
	> Users with limited access, such as **Stakeholders**, can't access select features even if granted permissions to those features. For more information, see [Permissions and access](permissions-access.md).

:::moniker-end

---

## Invite users from the Summary page 

As a member of the **Project Administrators** group, you can add members to a project from the **Summary** page and optionally add them to one or more teams. For more information, see [View and update project summary page](../../organizations/projects/project-vision-status.md).

::: moniker range="< azure-devops"

> [!NOTE]
> For on-premises Azure DevOps, all email actions require a [configurated SMTP server](/azure/devops/server/admin/setup-customize-alerts).

:::moniker-end

1. Open your **Project** > **Summary** page, and select **Invite**:  

	:::image type="content" source="media/add-users/summary-invite-users.png" alt-text="Screenshot of the project Summary page showing the Invite action highlighted.":::

1. Enter the display name or email address for the user to invite:

   - For an existing user, enter the information until the dialog shows a matching entry in the system. Select the matching entry. You can add multiple users by separating the entries with a semicolon (**;**).

      :::image type="content" source="media/add-users/summary-invite-known-user.png" alt-text="Screenshot of the Invite members to a project dialog, showing a recognized user account.":::

	- For a new user unrecognized by the system, enter the complete email address including the domain, such as `fabrikam-user@fabrikam.com`. When the user is unknown, a notification alerts that an access level must be assigned.

      :::image type="content" source="media/add-users/summary-page-invite-dialog-new-unknown-user.png" alt-text="Screenshot of the Invite members to a project dialog, showing a new or unknown user.":::

	> [!NOTE]  
	> Any valid email address is acceptable. When the user accepts the invitation and signs into Azure DevOps, they register their email address as a Microsoft account and choose a password.

   To complete the action, select **Add**. Or, continue to the next step to choose teams for the new users.

1. (Optional) You can select which teams to invite the new user to join.

   :::image type="content" source="media/add-users/summary-page-invite-project-members.png" alt-text="Screenshot of the Invite members to a project dialog, known user, selecting teams to add.":::

   When the user is unknown, a notification alerts that an access level must be assigned:

	:::image type="content" source="media/add-users/summary-invite-dialog-new-user-selected-team.png" alt-text="Screenshot of the Invite members to a project dialog, unknown user, selecting teams to add.":::

	The system assigns the **Stakeholder** access level for the new user when all five Basic (free) access levels are already assigned. Active contributors to a project need to have **Basic** access as a minimum. A **Project Collection Administrator** can change the access level and resend invitations from the [**Organization Settings** > **Users** page](#manage-users-or-resend-invitations).

	> [!NOTE]
	> Users with limited access, such as Stakeholders, can't access select features even if granted permissions to those features. For more information, see [Permissions and access](permissions-access.md).

   To complete the invitation, select **Add**.

1. (Optional) A message briefly displays on the screen to indicate success or failure. Select **Details** to open the notification and review details. 

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
	      A failure message explains why the user wasn't added. 
	   :::column-end:::
	:::row-end:::
	:::row:::
	   :::column span="":::
	      :::image type="content" source="media/add-users/summary-invite-notifications-success.png" alt-text="Screenshot of the Notification dialog of Success.":::  
	   :::column-end:::
	   :::column span="":::
	      :::image type="content" source="media/add-users/notification-failure-outside-directory.png" alt-text="Screenshot of the Notification dialog of failure.":::
	   :::column-end:::
	:::row-end:::
 
When the operation succeeds, new users receive an email invitation to sign in to the project. Existing users don't receive a formal notification. 

:::moniker range="azure-devops"

## Manage users or resend invitations 

**Project Collection Administrators** can update user assignments and resend invitations. For more information, see [Add account users for Azure DevOps](../accounts/add-organization-users.md).

:::image type="content" source="media/add-users/users-page-manage-options.png" alt-text="Screenshot of the options for managing users on the More actions menu.":::

## List team members or team details  

From the Azure DevOps CLI command, you can see details about a team or list the individual members:

- Review the list of all teams in your organization with the `az devops team list` command, as described in the [command reference](/cli/azure/devops/team#az-devops-team-list).

- Check the members of a specific team with the `az devops team list-member` command, as described in the [List team members](#list-team-members) section.

- Examine the details for a team with the `az devops team show` command, as described in the [Show team details](#show-team-details) section.

> [!NOTE]   
> Use the `az devops user` command to add users to an organization. There's no comparable command for adding users to a team or project. For more information, see [Add users to your organization](../accounts/add-organization-users.md#add-users-to-your-organization).

### List team members

You can list the individual members of a team in your organization with the [az devops team list-member](/cli/azure/devops/team#az-devops-team-list-member) command. For more information, see [Get started with Azure DevOps CLI](../../cli/index.md). 

```azurecli
az devops team list-member --team
                           [--detect {false, true}]
                           [--org --organization]
                           [--project]
                           [--skip]
                           [--top]
```

#### Parameters

- **team**: Required. Name or ID of the team to show.
Automatically detect organization.
- **detect**: Optional. True or False, automatically detect the organization.
- **org**: Azure DevOps organization URL. You can configure the default organization using `az devops configure -d organization=ORG_URL`. Required if not configured by default or picked up by using the `git config` command. Example: `--org https://dev.azure.com/<My_Organization>/`.
- **project**: Name or ID of the project. Configure the default project by using the `az devops configure -d project=NAME_OR_ID` command. Required if not configured by default or picked up by using the `git config` command.
- **skip**: Optional. Number of members to skip.
- **top**: Optional. Maximum number of members to return.

#### Example

The following command lists the first five members of the team named **Fabrikam Team** and returns the details in table format.  

```azurecli 
az devops team list-member --team "Fabrikam Team" --top 5 --output table

ID                                    Name               Email
------------------------------------  -----------------  --------------------------
3b5f0c34-4aec-4bf4-8708-1d36f0dbc468  Christie Church    fabrikamfiber1@fabrikam.com
19d9411e-9a34-45bb-b985-d24d9d87c0c9  Johnnie McLeod     fabrikamfiber2@fabrikam.com
8c8c7d32-6b1b-47f4-b2e9-30b477b5ab3d  Chuck Reinhart     fabrikamfiber3@fabrikam.com
d291b0c4-a05c-4ea6-8df1-4b41d5f39eff  Jamal Hartnett     fabrikamfiber4@fabrikam.com
bd30c189-db0f-4dd6-9418-5d8b41dc1754  Raisa Pokrovskaya  fabrikamfiber5@fabrikam.com
``` 

### Show team details

You can view details about a team in your organization by using the [az devops team show](/cli/azure/devops/team#az-devops-team-show) command. To get started, see [Get started with Azure DevOps CLI](../../cli/index.md).

```azurecli
az devops team show --team
                    [--detect {false, true}]
                    [--org --organization]
                    [--project]
```

#### Parameters

- **team**: Required. Name or ID of the team to show.
- **detect**: Optional. True or False, automatically detect the organization.
- **org**: Azure DevOps organization URL. Configure the default organization by using the `az devops configure -d organization=ORG_URL` command. Required if not configured by default or picked up by using the `git config` command. Example: `--org https://dev.azure.com/<My_Organization>/`.
- **project**: Name or ID of the project. Configure the default project by using the `az devops configure -d project=NAME_OR_ID` command. Required if not configured by default or picked up by using the `git config` command.

#### Example

The following command shows information about the team in your organization named **Fabrikam Team** and returns the details in table format.  

```azurecli
az devops team show --team "Fabrikam Team" --output table

ID                                    Name          Description
------------------------------------  ------------  -------------------------------------------------
a48cb46f-7366-4f4b-baf5-b3632398ed1e  Fabrikam Team  The default project team. Was Fabrikam Fiber Team
``` 

:::moniker-end
::: moniker range="< azure-devops"

## Add users or groups to an access level

For on-premises deployments, you might need to set the access level for a user or group, particularly if the groups don't belong to the default access level. For more information, see [Change access levels](change-access-levels.md).

## Add users or groups to SQL Server Reports

If your on-premises deployment is integrated with SQL Server Reports, you must manage membership for those products separately from their websites. For more information, see [Grant permissions to view or create SQL Server reports in Azure DevOps Server](/previous-versions/azure/devops/report/admin/grant-permissions-to-reports).

:::moniker-end

## Related content

- [Get started managing your project](../../user-guide/project-admin-tutorial.md)

:::moniker range="azure-devops"

- [Add users and manage access](../accounts/add-organization-users.md)

- [Manage permissions with command line tool](manage-tokens-namespaces.md)

- [Change project visibility to public or private](../../organizations/projects/make-project-public.md)

:::moniker-end
