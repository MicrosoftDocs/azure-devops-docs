---
title: What settings are supported? 
titleSuffix: Azure DevOps
description: Configure team, project, collection, and organizational-level settings in Azure DevOps
ms.technology: devops-settings
ms.prod: devops
ms.topic: overview
ms.assetid: 
ms.manager: jillfra
ms.author: kaelli
author: KathrynEE
monikerRange: '>= tfs-2013'
ms.date: 06/05/2019
---



# About settings at the user, team, project, or organization-level 

[!INCLUDE [temp](../../_shared/version-vsts-tfs-all-versions.md)]

::: moniker range="azure-devops"

You configure resources either for yourself, your team, a project, or your organization from an administrative **Settings** page. The settings you can configure depend on the security group or administrative role you belong to. 

If you're just getting started as a Project Administrator, see [Get started as an administrator](../../user-guide/project-admin-tutorial.md).

> [!NOTE]  
> You can delegate several tasks to a user with Stakeholder or Basic access by adding them to the [Project Collection Administrators group](../security/set-project-collection-level-permissions.md). To learn more about Stakeholder access, see [About access levels, Stakeholder access](../security/access-levels.md#stakeholder-access). 

::: moniker-end  

::: moniker range="<= azure-devops-2019"

You configure resources either for yourself, your team, a project, or your project collection from a **Settings** page. The settings you can configure depend on the security group or administrative role you belong to.

::: moniker-end  

## User settings

Individual contributors can set their user preferences, enable features that are in preview, and manage their favorites and notifications.


<table>
<tbody valign="top">
<tr>
<th width="15%">Area</th>
<th width="40%">Supported tasks</th>
<th width="45%">Notes</th>
</tr>
<tr>
<td><strong>General</strong></td>
<td><ul>
<li><a href="set-your-preferences.md" data-raw-source="[Set your preferences](set-your-preferences.md)">Set your preferences</a></li> 
<li><a href="../../project/navigation/preview-features.md" data-raw-source="[Enable preview features](../../project/navigation/preview-features.md)">Enable preview features</a></li>
</ul></td>
<td>For an overview of default permission assignments by role, see <a href="../security/permissions-access.md" data-raw-source="[Default permissions and access](../security/permissions-access.md)">Default permissions and access</a>.</td>
</tr>
<tr>
<td><strong>Security</strong></td>
<td><ul>
<li><a href="../security/view-permissions.md" data-raw-source="[View permissions](../security/view-permissions.md)">View permissions</a></li>
<li><a href="/visualstudio/subscriptions/vs-alternate-identity" data-raw-source="[Add an alternate account to your Visual Studio subscription](/visualstudio/subscriptions/vs-alternate-identity)">Add an alternate account to your Visual Studio subscription</a></li>
</ul></td>
<td>For an overview of default permission assignments by role, see <a href="../security/permissions-access.md" data-raw-source="[Default permissions and access](../security/permissions-access.md)">Default permissions and access</a>.</td>
</tr>
<tr>
<td><strong>Authentication</strong></td>
<td><ul>
<li><a href="../accounts/use-personal-access-tokens-to-authenticate.md" data-raw-source="[Authenticate access with personal access tokens](../accounts/use-personal-access-tokens-to-authenticate.md)">Authenticate access with personal access tokens</a></li>
<li><a href="../../integrate/get-started/authentication/oauth.md" data-raw-source="[Authorize access to REST APIs with OAuth 2.0](../../integrate/get-started/authentication/oauth.md)">Authorize access to REST APIs with OAuth 2.0</a></li>
<li><a href="../../repos/git/use-ssh-keys-to-authenticate.md" data-raw-source="[Use SSH key authentication](../../repos/git/use-ssh-keys-to-authenticate.md)">Use SSH key authentication</a></li>
</ul></td>
<td>For an overview of supported authentication methods, see <a href="../../repos/git/auth-overview.md#alternate-credentials" data-raw-source="[Authentication overview](../../repos/git/auth-overview.md#alternate-credentials)">Authentication overview</a>.</td>
</tr>
<tr>
<td><strong>Favorites</strong></td>
<td><ul>
<li><a href="../../project/navigation/set-favorites.md" data-raw-source="[Set personal or team favorites](../../project/navigation/set-favorites.md)">Set personal or team favorites</a></li>
</ul></td>
<td>Favorites provide a quick way to navigate to backlogs, boards, dashboards, and more artifacts. Any member of the Contributors group or team member can set their own favorites. Team members can set team favorites. </td>
</tr>
<tr>
<td><strong>Notifications</strong></td>
<td><ul>
<li><a href="../../notifications/unsubscribe-default-notification.md" data-raw-source="[View your subscriptions, opt-out as needed](../../notifications/unsubscribe-default-notification.md)">View your subscriptions, opt-out as needed</a></li>
<li><a href="../../notifications/change-email-address.md" data-raw-source="[Change your preferred email address](../../notifications/change-email-address.md)">Change your preferred email address</a></li>
<li><a href="../../notifications/howto-manage-personal-notifications.md" data-raw-source="[Manage personal notifications](../../notifications/howto-manage-personal-notifications.md)">Manage personal notifications</a></li>
</ul></td>
<td>Notifications alert you through email messages when changes occur to work items, code reviews, pull requests, source control files, builds, and more. When a project is created, a number of notifications are defined. If you want to opt out of these, you can.  </li>
</ul></td>
</tr>
</tbody>
</table>


<a id="team" />

## Team Administrator role and managing teams

Team administrators are tasked with configuring team resources which mostly correspond to Agile tools and dashboards. To configure team resources, you must be added as a [team administrator for the specific team](../../organizations/settings/add-team-administrator.md), or be a member of the Project Administrators or Project Collection Administrators groups.  

For a complete overview of all Agile tools that you can configure, see [Manage teams and configure team tools](manage-teams.md).  


<table>
<tbody valign="top">
<tr>
<th width="15%">Area</th>
<th width="40%">Supported tasks</th>
<th width="45%">Notes</th>
</tr>
<tr>
<td><strong>Team profile</strong></td>
<td><ul>
<li><a href="../security/add-users-team-project.md" data-raw-source="[Add users to a project or specific team](../security/add-users-team-project.md)">Add users to a project or specific team</a></li>
<li><a href="../../organizations/settings/add-team-administrator.md" data-raw-source="[Add team admins](../../organizations/settings/add-team-administrator.md)">Add team admins</a></li>
</ul></td>
<td>Members of a team are included within the team group which can be used in queries and <strong><xref href="mentions" data-throw-if-not-resolved="False" data-raw-source="@mentions"></xref></strong> in pull requests and work item discussions.</td>
</tr>
<tr>
<td><strong>Boards, Team configuration</strong></td>
<td><ul>
<li><a href="select-backlog-navigation-levels.md?toc=/azure/devops/organizations/settings/toc.json&amp;bc=/azure/devops/organizations/settings/breadcrumb/toc.json" data-raw-source="[Backlog levels](select-backlog-navigation-levels.md?toc=/azure/devops/organizations/settings/toc.json&amp;bc=/azure/devops/organizations/settings/breadcrumb/toc.json)">Backlog levels</a></li>
<li><a href="show-bugs-on-backlog.md?toc=/azure/devops/organizations/settings/toc.json&amp;bc=/azure/devops/organizations/settings/breadcrumb/toc.json" data-raw-source="[Show bugs on backlogs &amp; boards](show-bugs-on-backlog.md?toc=/azure/devops/organizations/settings/toc.json&amp;bc=/azure/devops/organizations/settings/breadcrumb/toc.json)">Show bugs on backlogs &amp; boards</a></li>
<li><a href="set-working-days.md?toc=/azure/devops/organizations/settings/toc.json&amp;bc=/azure/devops/organizations/settings/breadcrumb/toc.json" data-raw-source="[Set working days](set-working-days.md?toc=/azure/devops/organizations/settings/toc.json&amp;bc=/azure/devops/organizations/settings/breadcrumb/toc.json)">Set working days</a></li>
<li><a href="set-area-paths.md" data-raw-source="[Configure area paths](set-area-paths.md)">Configure area paths</a></li>
<li><a href="set-iteration-paths-sprints.md" data-raw-source="[Select active iteration paths (sprints)](set-iteration-paths-sprints.md)">Select active iteration paths (sprints)</a></li>
<li><a href="../../boards/backlogs/work-item-template.md" data-raw-source="[Define work item templates](../../boards/backlogs/work-item-template.md)">Define work item templates</a></li>
</ul></td>
<td>For an overview of team resources, see <a href="about-teams-and-settings.md" data-raw-source="[About teams and Agile tools](about-teams-and-settings.md)">About teams and Agile tools</a>. You configure Kanban boards from the board view: <a href="../../boards/boards/add-columns.md" data-raw-source="[Columns](../../boards/boards/add-columns.md)">Columns</a>, <a href="../../boards/boards/expedite-work.md" data-raw-source="[Swimlanes](../../boards/boards/expedite-work.md)">Swimlanes</a>, <a href="../../boards/boards/customize-cards.md" data-raw-source="[Cards](../../boards/boards/customize-cards.md)">Cards</a>, <a href="../../boards/boards/wip-limits.md" data-raw-source="[WIP limits](../../boards/boards/wip-limits.md)">WIP limits</a>. </td>
</tr>
<tr>
<td><strong>Dashboards</strong> </td>
<td><ul>
<li><a href="../../report/dashboards/dashboards.md" data-raw-source="[Create team dashboards](../../report/dashboards/dashboards.md)">Create team dashboards</a></li>
<li><a href="../../report/dashboards/dashboard-permissions.md" data-raw-source="[Set default team dashboard permissions, manage dashboard permissions](../../report/dashboards/dashboard-permissions.md)">Set default team dashboard permissions, manage dashboard permissions</a></li>
</ul></td>
<td>New dashboards added to a project are associated with a team. The default permissions allow team members to create and edit dashboards for their team.</td>
</tr>
<tr>
<td> <strong>Notifications</strong> </td>
<td><ul>
<li><a href="../../notifications/howto-manage-team-notifications.md" data-raw-source="[Manage team notifications](../../notifications/howto-manage-team-notifications.md)">Manage team notifications</a></li>
</ul></td>
<td>A number of team notifications are automatically defined when a team is added. To learn more about how notifications are managed, see <a href="../../notifications/about-notifications.md" data-raw-source="[About notifications](../../notifications/about-notifications.md)">About notifications</a>.   </td>
</tr>
</tbody>
</table>

<a id="project" />

## Project Administrator role and managing projects

Members of the [Project Administrators group](../security/set-project-collection-level-permissions.md) are tasked with configuring resources for a project and managing permissions at the project-level. Note that members of the [Project Collection Administrators group](../security/set-project-collection-level-permissions.md) can configure team settings as well.

See also [Get started as an administrator](../../user-guide/project-admin-tutorial.md).

::: moniker range=">= azure-devops-2019"
**Project settings**  
From the administrative **Project settings** pages, you can configure settings available from the tabs shown in the following image. 

> [!div class="mx-imgBorder"]  
> ![Project settings, new nav](_img/about/project-settings-new-nav.png) 

::: moniker-end


::: moniker range="<= tfs-2018"

**Project-level settings**  
From the administrative **Project settings** pages, you can configure settings available from the tabs shown in the following image.

![Project settings, conceptual](_img/about/project-settings-prev-nav.png)  
::: moniker-end

::: moniker range=">= tfs-2013 <= tfs-2018"

> [!NOTE]  
> Project settings differ depending on your on-premises TFS version. Some settings aren't available for earlier versions of TFS. 

::: moniker-end


<table>
<tbody valign="top">
<tr>
<th width="15%">Area</th>
<th width="40%">Supported tasks</th>
<th width="45%">Notes</th>
</tr>
<tr>
<td><strong>General</strong></td>
<td><ul>
<li>Set project description</li>
<li><a href="../public/make-project-public.md" data-raw-source="[Change the project visibility, public or private](../public/make-project-public.md)">Change the project visibility, public or private</a> (Azure DevOps Services only) </li>
</ul></td>
<td>Update the project description or change it&#39;s visibility.</p></td>
</tr>
<tr>
<td><strong>Services</strong> </td>
<td><ul>
<li><a href="set-services.md" data-raw-source="[Turn a service on or off ](set-services.md)">Turn a service on or off </a> </li>
</ul></td>
<td>Services that aren&#39;t use by project members can be disabled so that they don&#39;t appear in the web portal. Turning a service off removes the service from the user interface for all project users. However, data defined for the service is preserved and available if you later decide to turn the service on. </p></td>
</tr>
<tr>
<td><strong>Teams</strong></td>
<td><ul>
<li><a href="add-teams.md" data-raw-source="[Add another team and team members](add-teams.md)">Add another team and team members</a></li>
<li><a href="add-team-administrator.md" data-raw-source="[Add a team administrator](add-team-administrator.md)">Add a team administrator</a></li>
</ul></td>
<td>A default team is created when you create a project. You add a team when you want to provide a group of users in your organization a set of Agile tools which they have full ownership to configure and manage. Teams have access to a product backlog, portfolio backlogs, sprint backlogs, dashboards, team-scoped widgets, and more.<p>For an overview of all tools that support a team, see <a href="about-teams-and-settings.md" data-raw-source="[About teams and Agile tools](about-teams-and-settings.md)">About teams and Agile tools</a>.</p></td>
</tr>
<tr>
<td><strong>Security</strong></td>
<td><ul>
<li><a href="../security/add-users-team-project.md" data-raw-source="[Add users to a project](../security/add-users-team-project.md)">Add users to a project</a></li>
<li><a href="../security/change-individual-permissions.md" data-raw-source="[Change individual permissions, grant select access to specific functions](../security/change-individual-permissions.md)">Change individual permissions, grant select access to specific functions</a></li>
<li><a href="../security/restrict-access.md" data-raw-source="[Grant or restrict access to select features](../security/restrict-access.md)">Grant or restrict access to select features</a></li>
<li><a href="../security/set-project-collection-level-permissions.md" data-raw-source="[Add administrators](../security/set-project-collection-level-permissions.md)">Add administrators</a></li>
<li><a href="../security/permissions.md#project-level" data-raw-source="[Manage project-level permissions](../security/permissions.md#project-level)">Manage project-level permissions</a></li>
<li><a href="../../pipelines/policies/set-permissions.md" data-raw-source="[Set build and release permissions](../../pipelines/policies/set-permissions.md)">Set build and release permissions</a></li>
</ul></td>
<td>Project Administrators can add users to a project or a team. When you add a user to a team, you automatically add them to the project. Users added to a project can only view and contribute to that specific project. <p>For an overview of security concepts, see <a href="../security/about-permissions.md" data-raw-source="[About permissions and groups](../security/about-permissions.md)">About permissions and groups</a> and <a href="../security/access-levels.md" data-raw-source="[About access levels](../security/access-levels.md)">About access levels</a>. For a list of project-level permissions, see <a href="../security/permissions.md#project-level" data-raw-source="[Permissions and groups reference, Project-level permissions](../security/permissions.md#project-level)">Permissions and groups reference, Project-level permissions</a>.</p> </td>
</tr>
<tr>
<td> <strong>Notifications</strong> </td>
<td><ul>
<li>Manage project-level notifications</li>
</ul></td>
<td>A number of project-level notifications are automatically defined when a project is added. Notifications at the project-level are managed in much the same way as they are at the <a href="../../notifications/howto-manage-team-notifications.md" data-raw-source="[team level](../../notifications/howto-manage-team-notifications.md)">team level</a>.</td>
</tr>
<tr>
<td><strong>Service Hooks</strong></td>
<td><ul>
<li><a href="../../service-hooks/index.md" data-raw-source="[Configure service hooks](../../service-hooks/index.md)">Configure service hooks</a></li>
</ul></td>
<td>With service hooks, you can automate a task on other services, such as <a href="../../service-hooks/services/campfire.md" data-raw-source="[Campfire](../../service-hooks/services/campfire.md)">Campfire</a>, <a href="../../service-hooks/services/flowdock.md" data-raw-source="[Flowdock](../../service-hooks/services/flowdock.md)">Flowdock</a>, <a href="../../service-hooks/services/hipchat.md" data-raw-source="[HipChat](../../service-hooks/services/hipchat.md)">HipChat</a>, and more. You can use service hooks in custom apps and services to drive activities as events happen. </td>
</tr>
<tr>
<td><strong>Dashboards</strong> </td>
<td><ul>
<li><a href="../../report/dashboards/dashboard-permissions.md" data-raw-source="[Set default dashboard permissions](../../report/dashboards/dashboard-permissions.md)">Set default dashboard permissions</a></li>
</ul></td>
<td>New dashboards added to a project inherit the default dashboard permissions. The default permissions allow team members to create and edit dashboards for their team.</td>
</tr>
<tr>
<td><a id="work" /><strong>Boards, Project configuration</strong></td>
<td><ul>
<li><a href="set-area-paths.md" data-raw-source="[Define area paths](set-area-paths.md)">Define area paths</a></li>
<li><a href="set-iteration-paths-sprints.md" data-raw-source="[Define iteration paths or sprints](set-iteration-paths-sprints.md)">Define iteration paths or sprints</a></li>
</ul></td>
<td>Area and iteration paths set at the project level are then used to set team defaults. To configure additional product backlogs, Kanban boards, and dashboards, you first <a href="../../organizations/settings/add-teams.md" data-raw-source="[add a team](../../organizations/settings/add-teams.md)">add a team</a>.<br/></td>
</tr>
<tr>
<td><a id="pipelines" /><strong>Build and release (Agent Pools, Release)</strong> </td>
<td><ul>
<li><a href="../../pipelines/agents/pools-queues.md" data-raw-source="[Manage Agent queues and agent pools](../../pipelines/agents/pools-queues.md)">Manage Agent queues and agent pools</a></li>
<li><a href="../../pipelines/library/service-endpoints.md" data-raw-source="[Manage service connections](../../pipelines/library/service-endpoints.md)">Manage service connections</a></li>
<li><a href="../../pipelines/release/deployment-groups/index.md" data-raw-source="[Manage deployment pools and groups](../../pipelines/release/deployment-groups/index.md)">Manage deployment pools and groups</a></li>
<li><a href="../../pipelines/policies/retention.md" data-raw-source="[Set retention policies](../../pipelines/policies/retention.md)">Set retention policies</a></li>
</ul></td>
<td>To build your code or deploy your software you need at least one agent. Agent and deployment pools are build and release resources that you manage across projects. </td>
</tr>
<tr>
<td><a id="repos" /><strong>Repos, Code, version control</strong> </td>
<td><ul>
<li><a href="../../repos/git/creatingrepo.md" data-raw-source="[Create additional Git repos](../../repos/git/creatingrepo.md)">Create additional Git repos</a></li>
<li><a href="../security/set-git-tfvc-repository-permissions.md" data-raw-source="[Manage repository permissions](../security/set-git-tfvc-repository-permissions.md)">Manage repository permissions</a></li>
<li><a href="../../repos/git/branch-policies.md" data-raw-source="[Manage branch policies](../../repos/git/branch-policies.md)">Manage branch policies</a></li>
<li><a href="../../repos/tfvc/add-check-policies.md" data-raw-source="[Add TFVC Check-In Policies](../../repos/tfvc/add-check-policies.md)">Add TFVC Check-In Policies</a></li>
</ul></td>
<td>You can manage code using <a href="../../repos/git/overview.md" data-raw-source="[Git repositories](../../repos/git/overview.md)">Git repositories</a> or one <a href="../../repos/tfvc/overview.md" data-raw-source="[Team Foundation Version Control (TFVC) repository](../../repos/tfvc/overview.md)">Team Foundation Version Control (TFVC) repository</a>. </td>
</tr>
<tr>
<td><a id="test-center" /><strong>Test</strong> </td>
<td><ul>
<li><a href="../../test/how-long-to-keep-test-results.md" data-raw-source="[Set test retention policies](../../test/how-long-to-keep-test-results.md)">Set test retention policies</a></li>
<li><a href="../security/set-project-collection-level-permissions.md" data-raw-source="[Manage test-related permissions at project level](../security/set-project-collection-level-permissions.md)">Manage test-related permissions at project level</a></li>
<li><a href="../security/set-permissions-access-work-tracking.md#create-child-nodes-modify-work-items-under-an-area-path" data-raw-source="[Set area path-level test permissions](../security/set-permissions-access-work-tracking.md#create-child-nodes-modify-work-items-under-an-area-path)">Set area path-level test permissions</a></li>
</ul></td>
<td>Manual testing relies on work item types to create and manage test plans, test suites, test cases, shared steps, and shared parameters. Of these, you can customize the test plans, test suites, and test cases using an inherited process. See <a href="work/customize-process.md" data-raw-source="[Customize a process](work/customize-process.md)">Customize a process</a>.<br/></td>
</tr>
<tr>
<td><strong>Wiki</strong></td>
<td><ul>
<li><a href="../../project/wiki/wiki-create-repo.md" data-raw-source="[Create a wiki for your project](../../project/wiki/wiki-create-repo.md)">Create a wiki for your project</a></li>
<li><a href="../../project/wiki/publish-repo-to-wiki.md" data-raw-source="[Publish a Git repository to a wiki](../../project/wiki/publish-repo-to-wiki.md)">Publish a Git repository to a wiki</a> </li>
<li><a href="../../project/wiki/manage-readme-wiki-permissions.md" data-raw-source="[Manage README and Wiki permissions](../../project/wiki/manage-readme-wiki-permissions.md)">Manage README and Wiki permissions</a></li>
</ul></td>
<td>To share information with your team, you can use Markdown format within a project Wiki, within your project README file, or other repository README file. To learn more, see <a href="../../project/wiki/about-readme-wiki.md" data-raw-source="[About READMes and Wikis](../../project/wiki/about-readme-wiki.md)">About READMes and Wikis</a>.</td>
</tr>
<tr>
<td><strong>Extensions</strong></td>
<td><ul>
<li><a href="../../marketplace/request-extensions.md" data-raw-source="[Request a Marketplace extension](../../marketplace/request-extensions.md)">Request a Marketplace extension</a></li>
</ul></td>
<td>Individual contributors and project administrators can request a Marketplace extension be installed. Only members of the Project Collection Administrators group can respond to these requests and actually install extensions. </td>
</tr>
</tbody>
</table>

<a id="admin" />

## Project Collection Administrator (PCA) role and managing collections of projects 

Members of the [Project Collection Administrators group](../security/set-project-collection-level-permissions.md) are tasked with configuring resources for all projects defined for an organization or collection. They also can perform all tasks to add projects, manage projects, and manage permissions for the collection, a project, or an object.   


::: moniker range=">= azure-devops-2019"
  
**Organization settings**  
From the administrative **Organization settings** pages, you can configure settings available from the tabs shown in the following image.

> [!div class="mx-imgBorder"]  
> ![Organization settings, new nav](_img/about/collection-settings-new-nav.png) 

::: moniker-end


::: moniker range="<= tfs-2018"

**Project collection-level settings**  
From the administrative pages for a collection, you can configure the settings shown in the following image. 

> [!NOTE]  
> Project collection settings differ depending on your on-premises TFS version. Some settings aren't available for earlier versions of TFS. 

![Collection settings, TFS, conceptual](_img/about/collection-settings-tfs-nav.png) 

::: moniker-end


::: moniker range="azure-devops"

For an overview of managing your organization, see [About organization management](../accounts/organization-management.md).

<table>
<tbody valign="top">
<tr>
<th width="15%">Area</th>
<th width="40%">Supported tasks</th>
<th width="45%">Notes</th>
</tr>
<tr>
<td><strong>Preview features</strong></td>
<td><ul>
<li><a href="../../project/navigation/preview-features.md" data-raw-source="[Enable preview features](../../project/navigation/preview-features.md)">Enable preview features</a></li>
</ul></td>
<td>Organization administrators can enable or disable account-level features that are in preview.</td>
</tr>
<tr>
<td><strong>Overview (Settings)</strong></td>
<td><ul>
<li>Add and manage organization information: <a href="../accounts/change-organization-ownership.md" data-raw-source="[change organization owner](../accounts/change-organization-ownership.md)">change organization owner</a>, <a href="../accounts/rename-organization.md" data-raw-source="[Rename](../accounts/rename-organization.md)">Rename</a>, <a href="../accounts/delete-your-organization.md" data-raw-source="[Delete](../accounts/delete-your-organization.md)">Delete</a>, <a href="../accounts/recover-your-organization.md" data-raw-source="[Recover](../accounts/recover-your-organization.md)">Recover</a></li>
<li><a href="../accounts/change-organization-location.md" data-raw-source="[Find or change your organization location](../accounts/change-organization-location.md)">Find or change your organization location</a></li>
<li><a href="../billing/set-up-billing-for-your-organization-vs.md" data-raw-source="[Set up billing](../billing/set-up-billing-for-your-organization-vs.md)">Set up billing</a></li>
</ul></td>
<td>From the <strong>Settings</strong> page, you can manage the time zone, owner, region, and other settings that apply to all projects defined under your account.</td>
</tr>
<tr>
<td><strong>Billing</strong></td>
<td><ul>
<li><a href="../billing/set-up-billing-for-your-organization-vs.md" data-raw-source="[Set up billing](../billing/set-up-billing-for-your-organization-vs.md)">Set up billing</a></li>
<li><a href="../billing/try-additional-features-vs.md" data-raw-source="[Buy access to Azure DevOps Server or Azure Test Plans](../billing/try-additional-features-vs.md)">Try Azure Test Plans for free</a></li>
<li><a href="../billing/buy-basic-access-add-users.md" data-raw-source="[Pay for users (Basic)](../billing/buy-basic-access-add-users.md)">Pay for users (Basic)</a></li>
<li><a href="../billing/buy-more-build-vs.md" data-raw-source="[Buy CI/CD](../billing/buy-more-build-vs.md)">Buy CI/CD</a></li>
<li><a href="../billing/add-backup-billing-managers.md" data-raw-source="[Add a user to make purchases](../billing/add-backup-billing-managers.md)">Add a user to make purchases</a></li>
</ul></td>
<td>All billing is managed through Azure. To learn more, see <a href="../billing/overview.md" data-raw-source="[Billing overview](../billing/overview.md)">Billing overview</a>. </td>
</tr>
<tr>
<td><strong>Projects</strong></td>
<td><ul>
<li>Add and manage projects: <a href="../projects/create-project.md" data-raw-source="[Create](../projects/create-project.md)">Create</a>, <a href="../projects/rename-project.md" data-raw-source="[Rename](../projects/rename-project.md)">Rename</a>, <a href="../projects/delete-project.md" data-raw-source="[Delete](../projects/delete-project.md)">Delete</a></li>
<li><a href="../security/add-users-team-project.md" data-raw-source="[Add users to projects](../security/add-users-team-project.md)">Add users to projects</a></li>
<li><a href="../accounts/save-team-project-data.md" data-raw-source="[Save project data](../accounts/save-team-project-data.md)">Save project data</a></li>
</ul></td>
<td>A project provides the fundamental resource for storing your code, managing your CI/CD operations, and planning and tracking work for your project. In general, you&#39;ll want to minimize the number of projects you create, to keep things simple. Learn more <a href="../projects/about-projects.md" data-raw-source="[About projects and scaling your organization](../projects/about-projects.md)">About projects and scaling your organization</a>. </td>
</tr>
<tr>
<td><strong>Policy</strong></td>
<td><ul>
<li><a href="../accounts/change-application-access-policies.md" data-raw-source="[Change application access policies](../accounts/change-application-access-policies.md)">Change application access policies</a> </li>
</ul></td>
<td>Set policies to allow or disallow access by other applications or services to the organization. </td>
</tr>
<tr>
<td><strong>Users</strong></td>
<td><ul>
<li><a href="../accounts/add-organization-users.md" data-raw-source="[Add users](../accounts/add-organization-users.md)">Add users</a></li>
<li><a href="../accounts/add-external-user.md" data-raw-source="[Add external users](../accounts/add-external-user.md)">Add external users</a></li>
<li><a href="../accounts/manage-users-table-view.md" data-raw-source="[Manage user access levels](../accounts/manage-users-table-view.md)">Manage user access levels</a></li>
<li><a href="../accounts/delete-organization-users.md" data-raw-source="[Remove users](../accounts/delete-organization-users.md)">Remove users</a></li>
</ul></td>
<td>For large organizations with a sizable number of users, we recommend that you <a href="../accounts/access-with-azure-ad.md" data-raw-source="[manage user access through Azure Active Directory](../accounts/access-with-azure-ad.md)">manage user access through Azure Active Directory</a>. For a small number of users, you can manage user access by adding their Microsoft Service Account (MSA) email. From the account-level <strong>Users</strong> page, you can also <a href="../security/export-users-audit-log.md" data-raw-source="[export the set of users and their access levels](../security/export-users-audit-log.md)">export the set of users and their access levels</a>.  </td>
</tr>
<tr>
<td><strong>Security</strong></td>
<td><ul>
<li><a href="../security/change-individual-permissions.md" data-raw-source="[Change individual permissions](../security/change-individual-permissions.md)">Change individual permissions</a></li>
<li><a href="../security/restrict-access.md" data-raw-source="[Grant or restrict access to select features ](../security/restrict-access.md)">Grant or restrict access to select features </a></li>
<li><a href="../security/set-project-collection-level-permissions.md" data-raw-source="[Add administrators](../security/set-project-collection-level-permissions.md)">Add administrators</a></li>
<li><a href="../accounts/manage-azure-active-directory-groups.md" data-raw-source="[Add Azure Active Directory groups](../accounts/manage-azure-active-directory-groups.md)">Add Azure Active Directory groups</a></li>
<li><a href="../accounts/connect-organization-to-azure-ad.md" data-raw-source="[Connect to Azure Active Directory](../accounts/connect-organization-to-azure-ad.md)">Connect to Azure Active Directory</a></li>
<li><a href="../accounts/manage-conditional-access.md" data-raw-source="[Manage conditional access](../accounts/manage-conditional-access.md)">Manage conditional access</a></li>
</ul></td>
<td>For an overview of security concepts, see <a href="../security/about-permissions.md" data-raw-source="[About permissions and groups](../security/about-permissions.md)">About permissions and groups</a> and <a href="../security/access-levels.md" data-raw-source="[About access levels](../security/access-levels.md)">About access levels</a>. For a list of collection-level permissions, see <a href="../security/permissions.md#collection-level" data-raw-source="[Permissions and groups reference, Collection-level permissions](../security/permissions.md#collection-level)">Permissions and groups reference, Collection-level permissions</a>.</p></td>
</tr>
<tr>
<td><strong>Notifications</strong></td>
<td><ul>
<li><a href="../../notifications/howto-manage-organization-notifications.md" data-raw-source="[Manage collection-level notifications](../../notifications/howto-manage-organization-notifications.md)">Manage collection-level notifications</a> </li>
</ul></td>
<td>A number of notifications are automatically defined when an organization is added. Notifications at the organization-level are managed in much the same way as they are at the <a href="../../notifications/howto-manage-team-notifications.md" data-raw-source="[team level](../../notifications/howto-manage-team-notifications.md)">team level</a>. </td>
</tr>
<tr>
<td><strong>Extensions</strong></td>
<td><ul>
<li><a href="../../marketplace/install-extension.md" data-raw-source="[Install and manage Marketplace extensions](../../marketplace/install-extension.md)">Install and manage Marketplace extensions</a></li>
<li><a href="../../marketplace/approve-extensions.md" data-raw-source="[Approve extensions](../../marketplace/approve-extensions.md)">Approve extensions</a></li>
<li><a href="../../marketplace/how-to/grant-permissions.md" data-raw-source="[Grant permissions to manage extensions](../../marketplace/how-to/grant-permissions.md)">Grant permissions to manage extensions</a></li>
<li><a href="../../marketplace/uninstall-disable-extensions.md" data-raw-source="[Uninstall or disable extensions](../../marketplace/uninstall-disable-extensions.md)">Uninstall or disable extensions</a></li>
</ul></td>
<td>An extension is an installable unit that contributes new capabilities to your projects. You can find extensions from within the <a href="https://marketplace.visualstudio.com/azuredevops" data-raw-source="[Visual Studio Marketplace](https://marketplace.visualstudio.com/azuredevops)">Visual Studio Marketplace</a> in the Azure DevOps tab to support planning and tracking of work items, sprints, scrums, etc.; build and release flows; code testing and tracking; and collaboration among team members.
</td>
</tr>
<tr>
<td><strong>Usage</strong></td>
<td><ul>
<li><a href="../../integrate/concepts/rate-limits.md" data-raw-source="[Monitor usage](../../integrate/concepts/rate-limits.md)">Monitor usage</a></li>
</ul></td>
<td>Certain rate limits are in place to ensure performance across the cloud service platform.  </td>
</tr>
<tr>
<td><strong>Boards, Process</strong> </td>
<td><ul>
<li><a href="./work/customize-process.md" data-raw-source="[Customize a project](./work/customize-process.md)">Customize a project</a></li>
<li><a href="./work/manage-process.md" data-raw-source="[Add and manage processes](./work/manage-process.md)">Add and manage processes</a></li>
</ul></td>
<td>Process customization applies to Azure Boards only. To customize the Agile tools and work tracking artifacts, you create and customize an inherited process and then update the project to use that process. To learn more, see <a href="./work/inheritance-process-model.md" data-raw-source="[About process customization and inherited processes](./work/inheritance-process-model.md)">About process customization and inherited processes</a>. </td>
</tr>
<tr>
<td><strong>Build and release</strong></td>
<td><ul>
<li><a href="../../pipelines/policies/retention.md" data-raw-source="[Set retention policies](../../pipelines/policies/retention.md)">Set retention policies</a></li>
<li><a href="../../pipelines/licensing/concurrent-pipelines-ts.md" data-raw-source="[Set resource limits for pipelines](../../pipelines/licensing/concurrent-pipelines-ts.md)">Set resource limits for pipelines</a></li>
<li><a href="../../pipelines/agents/pools-queues.md" data-raw-source="[Add and manage agent pools](../../pipelines/agents/pools-queues.md)">Add and manage agent pools</a></li>
<li><a href="../../pipelines/release/deployment-groups/index.md" data-raw-source="[Add and manage deployment pools](../../pipelines/release/deployment-groups/index.md)">Add and manage deployment pools</a></li>
</ul></td>
<td>You manage resources that support CI/CD operations for all projects through the <strong>Agent pools</strong>, <strong>Deployment pools</strong>, and <strong>Retention and limits</strong> pages.</td>
</tr>
</tbody>
</table>

::: moniker-end

::: moniker range="azure-devops-2019"

For an overview of managing collections, see [Configure and manage Azure DevOps Server resources](/azure/devops/server/admin/config-tfs-resources).


<table>
<tbody valign="top">
<tr>
<th width="15%">Area</th>
<th width="40%">Supported tasks</th>
<th width="45%">Notes</th>
</tr>
<tr>
<td><strong>Settings</strong></td>
<td><ul>
<li><a href="../security/change-access-levels.md" data-raw-source="[Change access levels](../security/change-access-levels.md)">Change access levels</a></li>
</ul></td>
<td>From the <strong>Settings</strong> page, you can manage the time zone, owner, region, and other settings that apply to all projects defined under your account.</td>
</tr>
<tr>
<td><strong>Projects</strong></td>
<td><ul>
<li>Add and manage projects: <a href="../projects/create-project.md" data-raw-source="[Create](../projects/create-project.md)">Create</a>, <a href="../projects/rename-project.md" data-raw-source="[Rename](../projects/rename-project.md)">Rename</a>, <a href="../projects/delete-project.md" data-raw-source="[Delete](../projects/delete-project.md)">Delete</a></li>
<li><a href="../security/add-users-team-project.md" data-raw-source="[Add users to projects](../security/add-users-team-project.md)">Add users to projects</a></li>
<li><a href="../accounts/save-team-project-data.md" data-raw-source="[Save project data](../accounts/save-team-project-data.md)">Save project data</a></li>
</ul></td>
<td>A project provides the fundamental resource for storing your code, managing your CI/CD operations, and planning and tracking work for your project. In general, you&#39;ll want to minimize the number of projects you create, to keep things simple. Learn more <a href="../projects/about-projects.md" data-raw-source="[About projects and scaling your organization](../projects/about-projects.md)">About projects and scaling your organization</a>. </td>
</tr>
<tr>
<td><strong>Security</strong></td>
<td><ul>
<li><a href="../security/change-individual-permissions.md" data-raw-source="[Change individual permissions](../security/change-individual-permissions.md)">Change individual permissions</a></li>
<li><a href="../security/restrict-access.md" data-raw-source="[Grant or restrict access to select features ](../security/restrict-access.md)">Grant or restrict access to select features </a></li>
<li><a href="../security/set-project-collection-level-permissions.md" data-raw-source="[Add collection-level administrators](../security/set-project-collection-level-permissions.md)">Add collection-level administrators</a></li>
<li><a href="/azure/devops/server/admin/setup-ad-groups" data-raw-source="[Set up groups for use in Azure DevOps Server deployments](/azure/devops/server/admin/setup-ad-groups)">Set up groups for use in Azure DevOps Server deployments</a></li>
<li><a href="/azure/devops/server/admin/add-administrator-tfs" data-raw-source="[Add administrators to Azure DevOps Server](/azure/devops/server/admin/add-administrator-tfs)">Add administrators to Azure DevOps Server</a></li>
</ul></td>
<td>For an overview of security concepts, see <a href="../security/about-permissions.md" data-raw-source="[About permissions and groups](../security/about-permissions.md)">About permissions and groups</a> and <a href="../security/access-levels.md" data-raw-source="[About access levels](../security/access-levels.md)">About access levels</a>. For a list of collection-level permissions, see <a href="../security/permissions.md#collection-level" data-raw-source="[Permissions and groups reference, Collection-level permissions](../security/permissions.md#collection-level)">Permissions and groups reference, Collection-level permissions</a>.</p></td>
</tr>
<tr>
<td><strong>Notifications</strong></td>
<td><ul>
<li>Manage collection-level notifications </li>
</ul></td>
<td>A number of notifications are automatically defined when a project collection is added. Notifications at the collection-level are managed in much the same way as they are at the <a href="../../notifications/howto-manage-team-notifications.md" data-raw-source="[team level](../../notifications/howto-manage-team-notifications.md)">team level</a>. </td>
</tr>
<tr>
<td><strong>Boards, Process</strong> </td>
<td><ul>
<li><a href="./work/customize-process.md" data-raw-source="[Customize a project](./work/customize-process.md)">Customize a project</a></li>
<li><a href="./work/manage-process.md" data-raw-source="[Add and manage processes](./work/manage-process.md)">Add and manage processes</a></li>
</ul></td>
<td>Process customization applies to Azure Boards only. To customize the Agile tools and work tracking artifacts, you create and customize an inherited process and then update the project to use that process. To learn more, see <a href="./work/inheritance-process-model.md" data-raw-source="[About process customization and inherited processes](./work/inheritance-process-model.md)">About process customization and inherited processes</a>. </td>
</tr>
<tr>
<td><strong>Build and release, Agent pools, Deployment pools</strong></td>
<td><ul>
<li><a href="../../pipelines/policies/retention.md" data-raw-source="[Set retention policies](../../pipelines/policies/retention.md)">Set retention policies</a></li>
<li><a href="../../pipelines/licensing/concurrent-pipelines-ts.md" data-raw-source="[Set resource limits for pipelines](../../pipelines/licensing/concurrent-pipelines-ts.md)">Set resource limits for pipelines</a></li>
<li><a href="../../pipelines/agents/pools-queues.md" data-raw-source="[Add and manage agent pools](../../pipelines/agents/pools-queues.md)">Add and manage agent pools</a></li>
<li><a href="../../pipelines/release/deployment-groups/index.md" data-raw-source="[Add and manage deployment pools](../../pipelines/release/deployment-groups/index.md)">Add and manage deployment pools</a></li>
</ul></td>
<td>You manage resources that support CI/CD operations for all projects through the <strong>Agent pools</strong>, <strong>Deployment pools</strong>, and <strong>Retention and limits</strong> pages.</td>
</tr>
<tr>
<td><strong>Extensions</strong></td>
<td><ul>
<li><a href="../../marketplace/install-extension.md" data-raw-source="[Install and manage Marketplace extensions](../../marketplace/install-extension.md)">Install and manage Marketplace extensions</a></li>
<li><a href="../../marketplace/approve-extensions.md" data-raw-source="[Approve extensions](../../marketplace/approve-extensions.md)">Approve extensions</a></li>
<li><a href="../../marketplace/assign-paid-extensions.md" data-raw-source="[Assign paid extension access to users](../../marketplace/assign-paid-extensions.md)">Assign paid extension access to users</a></li>
<li><a href="../billing/buy-basic-access-add-users.md" data-raw-source="[Change the number of paid users](../billing/buy-basic-access-add-users.md)">Change the number of paid users</a> </li>
<li><a href="../../marketplace/how-to/grant-permissions.md" data-raw-source="[Grant permissions to manage extensions](../../marketplace/how-to/grant-permissions.md)">Grant permissions to manage extensions</a></li>
<li><a href="../../marketplace/uninstall-disable-extensions.md" data-raw-source="[Uninstall or disable extensions](../../marketplace/uninstall-disable-extensions.md)">Uninstall or disable extensions</a></li>
</ul></td>
<td>An extension is an installable unit that contributes new capabilities to your projects. You can find extensions from within the <a href="https://marketplace.visualstudio.com/azuredevops" data-raw-source="[Visual Studio Marketplace](https://marketplace.visualstudio.com/azuredevops)">Visual Studio Marketplace</a> in the Azure DevOps tab to support planning and tracking of work items, sprints, scrums, etc.; build and release flows; code testing and tracking; and collaboration among team members.
</td>
</tr>

</tbody>
</table>

::: moniker-end

::: moniker range="<= tfs-2018"

For an overview of managing collections, see [Configure and manage TFS resources](/azure/devops/server/admin/config-tfs-resources).


<table>
<tbody valign="top">
<tr>
<th width="15%">Area</th>
<th width="40%">Supported tasks</th>
<th width="45%">Notes</th>
</tr>
<tr>
<td><strong>Settings</strong></td>
<td><ul>
<li><a href="../security/change-access-levels.md" data-raw-source="[Change access levels](../security/change-access-levels.md)">Change access levels</a></li>
</ul></td>
<td>From the <strong>Settings</strong> page, you can manage the time zone, owner, region, and other settings that apply to all projects defined under your account.</td>
</tr>
<tr>
<td><strong>Projects</strong></td>
<td><ul>
<li>Add and manage projects: <a href="../projects/create-project.md" data-raw-source="[Create](../projects/create-project.md)">Create</a>, <a href="../projects/rename-project.md" data-raw-source="[Rename](../projects/rename-project.md)">Rename</a>, <a href="../projects/delete-project.md" data-raw-source="[Delete](../projects/delete-project.md)">Delete</a></li>
<li><a href="../security/add-users-team-project.md" data-raw-source="[Add users to projects](../security/add-users-team-project.md)">Add users to projects</a></li>
<li><a href="../accounts/save-team-project-data.md" data-raw-source="[Save project data](../accounts/save-team-project-data.md)">Save project data</a></li>
</ul></td>
<td>A project provides the fundamental resource for storing your code, managing your CI/CD operations, and planning and tracking work for your project. In general, you&#39;ll want to minimize the number of projects you create, to keep things simple. Learn more <a href="../projects/about-projects.md" data-raw-source="[About projects and scaling your organization](../projects/about-projects.md)">About projects and scaling your organization</a>. </td>
</tr>
<tr>
<td><strong>Security</strong></td>
<td><ul>
<li><a href="../security/change-individual-permissions.md" data-raw-source="[Change individual permissions](../security/change-individual-permissions.md)">Change individual permissions</a></li>
<li><a href="../security/restrict-access.md" data-raw-source="[Grant or restrict access to select features ](../security/restrict-access.md)">Grant or restrict access to select features </a></li>
<li><a href="../security/set-project-collection-level-permissions.md" data-raw-source="[Add collection-level administrators](../security/set-project-collection-level-permissions.md)">Add collection-level administrators</a></li>
<li><a href="/azure/devops/server/admin/setup-ad-groups" data-raw-source="[Set up groups for use in TFS deployments](/azure/devops/server/admin/setup-ad-groups)">Set up groups for use in TFS deployments</a></li>
<li><a href="/azure/devops/server/admin/add-administrator-tfs" data-raw-source="[Add administrators to TFS](/azure/devops/server/admin/add-administrator-tfs)">Add administrators to TFS</a></li>
</ul></td>
<td>For an overview of security concepts, see <a href="../security/about-permissions.md" data-raw-source="[About permissions and groups](../security/about-permissions.md)">About permissions and groups</a> and <a href="../security/access-levels.md" data-raw-source="[About access levels](../security/access-levels.md)">About access levels</a>. For a list of collection-level permissions, see <a href="../security/permissions.md#collection-level" data-raw-source="[Permissions and groups reference, Collection-level permissions](../security/permissions.md#collection-level)">Permissions and groups reference, Collection-level permissions</a>.</p></td>
</tr>
<tr>
<td><strong>Notifications</strong></td>
<td><ul>
<li>Manage collection-level notifications </li>
</ul></td>
<td>A number of notifications are automatically defined when a project collection is added. Notifications at the collection-level are managed in much the same way as they are at the <a href="../../notifications/howto-manage-team-notifications.md" data-raw-source="[team level](../../notifications/howto-manage-team-notifications.md)">team level</a>. </td>
</tr>
<tr>
<td><strong>Build and release, Agent pools, Deployment pools</strong></td>
<td><ul>
<li><a href="../../pipelines/policies/retention.md" data-raw-source="[Set retention policies](../../pipelines/policies/retention.md)">Set retention policies</a></li>
<li><a href="../../pipelines/licensing/concurrent-pipelines-ts.md" data-raw-source="[Set resource limits for pipelines](../../pipelines/licensing/concurrent-pipelines-ts.md)">Set resource limits for pipelines</a></li>
<li><a href="../../pipelines/agents/pools-queues.md" data-raw-source="[Add and manage agent pools](../../pipelines/agents/pools-queues.md)">Add and manage agent pools</a></li>
<li><a href="../../pipelines/release/deployment-groups/index.md" data-raw-source="[Add and manage deployment pools](../../pipelines/release/deployment-groups/index.md)">Add and manage deployment pools</a></li>
</ul></td>
<td>You manage resources that support CI/CD operations for all projects through the <strong>Agent pools</strong>, <strong>Deployment pools</strong>, and <strong>Retention and limits</strong> pages.</td>
</tr>
<tr>
<td><strong>Extensions</strong></td>
<td><ul>
<li><a href="../../marketplace/install-vsts-extension.md" data-raw-source="[Install and manage Marketplace extensions](../../marketplace/install-vsts-extension.md)">Install and manage Marketplace extensions</a></li>
<li><a href="../../marketplace/approve-extensions.md" data-raw-source="[Approve extensions](../../marketplace/approve-extensions.md)">Approve extensions</a></li>
<li><a href="../../marketplace/assign-paid-extensions.md" data-raw-source="[Assign paid extension access to users](../../marketplace/assign-paid-extensions.md)">Assign paid extension access to users</a></li>
<li><a href="../billing/buy-basic-access-add-users.md" data-raw-source="[Change the number of paid users](../billing/buy-basic-access-add-users.md)">Change the number of paid users</a> </li>
<li><a href="../../marketplace/how-to/grant-permissions.md" data-raw-source="[Grant permissions to manage extensions](../../marketplace/how-to/grant-permissions.md)">Grant permissions to manage extensions</a></li>
<li><a href="../../marketplace/uninstall-disable-extensions.md" data-raw-source="[Uninstall or disable extensions](../../marketplace/uninstall-disable-extensions.md)">Uninstall or disable extensions</a></li>
</ul></td>
<td>An extension is an installable unit that contributes new capabilities to your projects. You can find extensions from within the <a href="https://marketplace.visualstudio.com/azuredevops" data-raw-source="[Visual Studio Marketplace](https://marketplace.visualstudio.com/azuredevops)">Visual Studio Marketplace</a> in the Azure DevOps tab to support planning and tracking of work items, sprints, scrums, etc.; build and release flows; code testing and tracking; and collaboration among team members.
</td>
</tr>

</tbody>
</table>

::: moniker-end


::: moniker range="<= azure-devops-2019"

<a id="admin" />

## Server Administrator role 

Members of the [Team Foundation Server Administrators group](/azure/devops/server/admin/add-administrator-tfs) are tasked with configuring resources for all project collections. They also can perform all tasks to administer projects, collections, and server instances.     

The main task they perform from the web portal is to set access levels for a user or security group. See [Change access levels](../security/change-access-levels.md). 

For additional information, see [Team Foundation Server Administration Documentation](/tfs/index).

::: moniker-end

## Related articles

- [Resources granted to project members](../accounts/resources-granted-to-project-members.md) 
- [Permissions and groups reference](../security/permissions.md) 
- [Rate limits](../../integrate/concepts/rate-limits.md)
