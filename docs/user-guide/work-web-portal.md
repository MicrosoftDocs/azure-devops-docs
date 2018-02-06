---
title: Navigate in the VSTS or TFS web portal 
description: Guide to navigating within the web portal for Visual Studio Team Services (VSTS) and Team Foundation Server (TFS) 
ms.technology: vs-devops-wit
ms.prod: vs-devops-alm
ms.assetid: 493362ae-5318-4719-9e0f-48c74ff8f0ba
ms.manager: douge
ms.author: kaelli
ms.date: 08/11/2017
---

# Navigating in the web portal

[!INCLUDE [temp](../_shared/version-vsts-tfs-all-versions.md)]

The web portal provides support for teams to collaborate through the planning, development, and release cycles. You use the web portal to perform both software development and administrative tasks.  

You can manage source code, plan and track work, define builds, run tests, and manage releases. The web portal connects you to the team project defined for an account in Visual Studio Team Services (VSTS) or within an on-premises Team Foundation Server (TFS). 

If you don't have a team project yet, create one in [VSTS](../accounts/create-account-msa-or-work-student.md?toc=/vsts/accounts/toc.json&bc=/vsts/accounts/breadcrumb/toc.json) or set one up in an [on-premises TFS](../accounts/create-team-project.md). If you don't have access to the team project, [get invited to the team](../work/scale/multiple-teams.md#add-team-members).

>[!NOTE]  
>The images you see from your web portal may differ from the images you see in this topic. These differences result from updates made to VSTS or your on-premises TFS and [options that you or your admin have enabled](../collaborate/preview-features.md?toc=/vsts/user-guide/toc.json&bc=/vsts/user-guide/breadcrumb/toc.json). However, the basic functionality available to you remains the same unless explicitly mentioned.  

<img src="_img/web-portal-intro.png" alt="Code, Pull Request, Active example" style="border: 1px solid #CCCCCC;" />


>[!NOTE]  
>**Feature availability**: The features available to you depend on the platform (VSTS or on-premises TFS), TFS version, features enabled for your team project or collection, and your access level. New features are deployed regularly to VSTS. Many of these features are then made available to [on-premises TFS through regular updates](/vsts/release-notes/index).  

To get started, from a [supported web browser](../tfs-server/requirements.md#browsers) enter the following URL:

**VSTS:**
	<pre><code>https://<i>AccountName</i>.visualstudio.com/DefaultCollection/<i>ProjectName</i> </code></pre>

**TFS (on-premises):**   
	<pre><code>http://<i>ServerName</i>:8080/tfs/DefaultCollection/<i>ProjectName</i></code></pre>


>[!NOTE]  
>For TFS, the TFS administrator can configure the following elements: protocol (*https* vs *http*), port (*8080*), virtual directory (*tfs*), and collection name (*DefaultCollection*) (See [Web site settings and security](../security/websitesettings.md).) For example, a deployment configured on port 443 with no vdir, an FQDN, and a custom collection name might look like: *https://tfs.contoso.com/CustomCollection/ProjectName*. If the above pattern doesn't work for you, check with your TFS administrator.    
 
The web portal is one of several clients that can connect to a team project. Different clients support different features and functions. For a list of all clients that connect to VSTS or TFS, see [Tools and clients that connect to VSTS and TFS](tools.md?toc=/vsts/user-guide/toc.json&bc=/vsts/user-guide/breadcrumb/toc.json). 

<a id="nav-concepts">  </a>
## Navigational concepts  

There are three main navigational concepts to understand. The first is the collection-project-team structure, the second is the user/administrative context, and the third corresponds to user-focused and team-scoped features that provide quick access to tasks targeted for the logged-in user or for the selected team.

<a id="collection-project-team-structure">  </a>
### Collection-project-team structure
When you connect to VSTS or an on-premises TFS, you connect to an account or team project collection. Within that collection, one or more team projects may be defined. At a minimum, at least one team project must be created in order to use the system.

When you create your team project, a team of the same name is automatically created. For small teams, this is sufficient.  

However, for enterprise-level organizations, it may be necessary to scale up, to create additional teams and/or team projects. These can be created within the single account or collection.

<table width="100%">
<tbody valign="top">
<tr>
<td width="40%">
**Single team project, team defined within an account/collection**  
![Single collection-project-team conceptual image](_img/web-portal-account-project-team-concept.png)  
</td>

<td width="60%">
**Multiple team projects and teams defined within an account/collection**   
![Scaled collection-project-team conceptual image](_img/web-portal-account-project-team-scale-concept.png)  

</td>
</tr>
</tbody>
</table>

The collection-project-team structure provides teams a high-level of autonomy to configure their tools in ways that work for them. It also supports administrative tasks to occur at the appropriate level.

To learn more about adding teams and the features that support team autonomy, see [Multiple teams](../work/scale/multiple-teams.md) and [Manage team assets](../work/scale/manage-team-assets.md).

<!--- configure get started for a team -->

<a id="user-admin-context">  </a>
### User/administrative context
The user context is used to get work done&mdash;manage code, plan and track work,  define and manage builds, create and run tests, and so on. Administrators use the admin context to configure shared resources and permissions. Tasks performed in this context can impact the team project and team functions.  

**User context**   
You and other team members use the user context to collaborate, plan, and build working software.  
 
<a id="user-context-id" />

<a id="team-services-user-context" /> 
**VSTS, TFS 2017.2**  
Click any hub to open that hub. Hover your mouse over a hub to access a drop-down menu of pages and other options for that hub. To access administrative options, click the ![gear icon](_img/work-tfs-web-portal/IC623347.png) gear Settings icon or choose the admin level you want from the drop-down menu.  

<img src="_img/wwp-user-context-team-services.png" alt="VSTS, User context hubs" style="border: 1px solid #CCCCCC;" /> 
 
**TFS 2017, TFS 2017.1**  
<a id="tfs-2017-user-context" /> 

Click any hub to open that hub. Hover your mouse over a hub to access a drop-down menu of pages and other options for that hub. To access administrative options, click the ![gear icon](_img/work-tfs-web-portal/IC623347.png) gear Settings icon or choose the admin level you want from the drop-down menu.  

<img src="_img/web-portal-user-context-tfs-2017.png" alt="TFS 2017, User context hubs" style="border: 1px solid #CCCCCC;" /> 


<!---
<a id="ts-account-off-user-context" /> 

**VSTS, TFS 2017.1** 
 
Click any hub to open that hub. Hover your mouse over a hub to access a drop-down menu of pages and other options for that hub. To access administrative options, click the ![gear icon](_img/work-tfs-web-portal/IC623347.png) gear Settings icon or choose the admin level you want from the drop-down menu.  

<img src="_img/wwp-user-context-tfs-2017-1.png" alt="VSTS-Account Landing Off, User context hubs" style="border: 1px solid #CCCCCC;" /> 

-->
<a id="tfs-2015-user-context" />
**TFS 2015, TFS 2013**  

Click any hub to open that hub. Then, click a page within the hub to open that page. 

<img src="_img/web-portal-user-context.png" alt="TFS 2015 or TFS 2013, User context hubs" style="border: 1px solid #CCCCCC;" /> 

 

<a id="admin-context">  </a>
**Administrative context**  
You use the administrative context to set team, team project, and account or collection settings. The hubs and pages available change based on what level of administrative context you're in. 

To learn more about each administrative context level, see the [Administrative context and team, team project, and account/collection settings](#administrative-context) later in this topic.
 


<a id="user-focused-features">  </a>
### User-focused features

Several features display information based on the logged-in user account or the selected team context. First off, users can [set their preferences](../accounts/account-preferences.md?toc=/vsts/user-guide/toc.json&bc=/vsts/user-guide/breadcrumb/toc.json) through their profile or account menu:

<img src="../accounts/_img/account-prefs/open-profile-team-services.png" alt="VSTS, My Profile link on Account menu" style="border: 1px solid #CCCCCC;" />   

In addition, they have access to special queries&mdash;Assigned to me query, Followed work items, and more&mdash; dashboard widget such as the Assigned to me widget, and the ability to save favorites under a **My favorites** folder. Here's an example of the Assigned to me widget that you can add to a dashboard. 

<img src="_img/web-portal-assigned-to-me-widget.png" alt="VSTS, web portal, user profile/account menu" style="border: 1px solid #CCCCCC;" /> 


>[!NOTE]  
>If you work in VSTS, you can also use your account hub to view and quickly navigate to teams, team projects, branches, work items, pull requests and other objects that are relevant to you. For details, see [Work effectively from your account hub](account-home-pages.md?toc=/vsts/user-guide/toc.json&bc=/vsts/user-guide/breadcrumb/toc.json).     


<a id="team-scoped-features">  </a>
### Team-scoped features

Teams access their set of team-scoped features by choosing their team context. Each team gets access to a suite of Agile tools and team assets. These tools provide teams the ability to work autonomously and collaborate with other teams across the enterprise.

![Agile tool team assets](../work/scale/_img/agile-tools-team-assets.png)  

Also, teams can set their query and build favorites within **Team favorites** folders. For more information, see [Manage team assets](../work/scale/manage-team-assets.md).  


<a id="user-context">  </a>
## User context: hubs and tabs  

You perform the bulk of your tasks by accessing a page within one of the these hubs&mdash;**Home**, **Code**, **Work**,  **Build** and **Test** &mdash;and their corresponding  tabs&mdash;such as **Overview**, **Backlogs**, **Queries**. For an overview of each hub, see [Essential services](services.md?toc=/vsts/user-guide/toc.json&bc=/vsts/user-guide/breadcrumb/toc.json).


The next sections liste what you can do, based on the hub and page you select.

<!--- Put a note here about the access level you have, and the options configured for your deployment. -->

### Welcome page, dashboards, and plan and track work

The **Home** hub supports a configurable Welcome page and dashboards. From the **Work** hub, you gain access to a highly configurable suite of Agile tools to plan and track your work.   


> [!div class="mx-tdBreakAll"]  
> |[Home](../report/dashboards/overview.md) |[Work](../work/work-items/index.md)|
> |-------------|----------|
> |- [Account hub](account-home-pages.md?toc=/vsts/user-guide/toc.json&bc=/vsts/user-guide/breadcrumb/toc.json)<br/>- [Project vision and status page](../collaborate/project-vision-status.md)<br/>- [Project welcome page](../collaborate/markdown-guidance.md?toc=/vsts/user-guide/toc.json&bc=/vsts/user-guide/breadcrumb/toc.json)<br/>- [Overview (view/edit default dashboard)](../report/dashboards/dashboards.md)<br/>- >[Add/modify dashboards](../report/dashboards/dashboards.md) |- Backlogs: [Create your backlog](../work/backlogs/create-your-backlog.md)  &#124; [Organize backlogs](../work/backlogs/organize-backlog.md) &#124; [Plan sprints](../work/scrum/sprint-planning.md)<br/>- Boards: [Kanban board](../work/kanban/kanban-basics.md) &#124; [Features and epics](../work/kanban/kanban-epics-features-stories.md) &#124;  [Cumulative flow chart](../report/dashboards/cumulative-flow.md)<br/>- Boards: [Add task checklists](../work/kanban/add-task-checklists.md) &#124; [Task board](../work/scrum/task-board.md)<br/>- Queries: [Run/define queries](../report/dashboards/cumulative-flow.md) &#124; [Add work items](../work/backlogs/add-work-items.md)  &#124; [Manage bugs](../work/backlogs/manage-bugs.md?toc=/vsts/work/work-items/toc.json&bc=/vsts/work/work-items/breadcrumb/toc.json) |


### Source code control: Git and TFVC repositories

The **Code** hub supports management of your source control repositories. You can choose between two types of repos: Git (distributed) or Team Foundation version control (centralized). For a comparison of the two repos, see [Choosing the right version control for your project](../tfvc/comparison-git-tfvc.md).


> [!div class="mx-tdBreakAll"]  
> |[Code: Git](../git/index.md) |[Code: TFVC](../tfvc/index.md)|
> |-------------|----------|
> |- [Add/manage repositories](../git/create-new-repo.md) &#124; [Rename a repo](../git/repo-rename.md) &#124; [Delete a repo](../git/delete-existing-repo.md)<br/>- Explorer<br/>- [History: review](../git/manage-your-branches.md#review-updates)<br/>- [Branches: Manage branches](../git/manage-your-branches.md)<br/>- [Pull Requests: View and create pull requests](../git/pull-requests.md) |- [Add/manage repositories](../git/create-new-repo.md) &#124; [Rename a repo](../git/repo-rename.md) &#124; [Delete a repo](../git/delete-existing-repo.md)<br/>- [Explorer: View, download, and compare version-controlled files](../tfvc/download-get-files-from-server.md)<br/>- [Changesets: find/view](../tfvc/find-view-changesets.md)<br/>- [Shelvesets](../tfvc/suspend-your-work-manage-your-shelvesets.md) |

###Build, test, and release  

The **Build & Release** hub supports defining and managing builds and releases to deploy your software to different staging and production environments. From the **Test** hub, you can create test plans, test cases, and run tests. 

> [!div class="mx-tdBreakAll"]  
> |[Build](../build-release/index.md)|[Release](../build-release/concepts/definitions/release/index.md)| [Test](../manual-test/index.md) |
> |-------------|----------|----------|
> |- [Definitions: Define a build](../build-release/tasks/index.md)<br/>- [Options: Define multiple configurations](../build-release/concepts/definitions/build/options.md)<br/>- [Repository: Specify repository for build](../build-release/concepts/definitions/build/repository.md)<br/>- [Variables: Use build variables](../build-release/concepts/definitions/build/variables.md)<br/>- [Triggers: Set build triggers](../build-release/concepts/definitions/build/triggers.md)<br/>- [Retention: Set  retention policies](../build-release/concepts/policies/retention.md)<br/>- [History: View change history](../build-release/concepts/definitions/build/history.md) |- [Release definition](../build-release/concepts/definitions/release/index.md)<br/>- [Triggers: continuous integration](../build-release/concepts/definitions/release/triggers.md#release-triggers)<br/>- [Deploy release](../build-release/actions/create-deploy-releases.md#deploy-command)<br/>- [Approve a release](../build-release/concepts/definitions/release/approvals/index.md)<br/>- [Tests: view test results ](../build-release/actions/view-manage-releases.md#test-results)<br/>- [Logs: view release logs](../build-release/actions/define-multistage-release-process.md#monitor-and-track-deployments)<br/>- [Run unit tests with a build](../build-release/test/getting-started-with-continuous-testing.md) |- [Test plans](../manual-test/getting-started/create-a-test-plan.md)<br/>- [Parameters](../manual-test/repeat-test-with-different-data.md)<br/>- [Configurations](../manual-test/test-different-configurations.md)<br/>- [Runs](../manual-test/getting-started/run-manual-tests.md)<br/>- [Machines](../build-release/test/set-up-continuous-test-environments-builds.md)<br/>- [Load test](../load-test/getting-started-with-performance-testing.md) |

<a id="administrative-context">  </a>
## Administrative context and team, team project, and account/collection settings

From a user context, open the admin context by clicking the ![gear icon](_img/work-tfs-web-portal/IC623347.png) gear Settings icon. The tabs and pages available differ depending on which admin context you access.

Below we show the admin context for the team project level. 

<a id="admin-intro" />

<a id="admin-intro-team-services" />  
**VSTS, TFS 2017.2** 

Open any admin page by clicking it's name. Click or hover over the gear icon to access other administrative options. Note that you can click any of the user-context hubs of **Home**, **Code**, **Work**, and so on to return to the user context. 

<img src="_img/work-web-portal_admin-context-project-level-team-services.png" alt="VSTS, Admin context, team project level" style="border: 1px solid #CCCCCC;" />  



<a id="admin-intro-tfs-2017-1" />
**TFS 2017.1**  

Open any admin page by clicking it's name. Hover your mouse over a hub to access a drop-down menu of pages and other options for that hub. Click or hover over the gear icon to access other administrative options. Note that you can click any of the user-context hubs of **Home**, **Code**, **Work**, and so on to return to the user context.   

<img src="_img/work-web-portal_admin-context-project-level-tfs-2017-1.png" alt="TFS 2017.1, Web portal, Admin context, team project level" style="border: 1px solid #CCCCCC;" />  
 

<a id="admin-intro-tfs-2017" /> 
**TFS 2017**  

Open any admin page by clicking it's corresponding hub. Hover your mouse over a hub to access a drop-down menu of pages and other options for that hub. Click or hover over the gear icon to access other administrative options. Note that you can click any of the user-context hubs of **Home**, **Code**, **Work**, and so on to return to the user context. 

<img src="_img/web-portal-admin-project-settings-new-nav.png" alt="TFS 2017, Web portal, admin context" style="border: 1px solid #CCCCCC;" />  



<a id="admin-intro-tfs-2015" />

**TFS 2015, TFS 2013**  
Open any admin page by clicking it's corresponding hub.  
 
<img src="_img/web-portal-project-admin-tfs.png" alt="TFS 2015, Web portal, admin context" style="border: 1px solid #CCCCCC;" />   

From within the admin context,  click one of the breadcrumb links to access the settings available at the account/collection, team project, or team level.

![Web portal admin settings links](_img/web-portal-admin-team-tfs.png)  
   

You must be a member of the listed administrator group or role to perform the tasks listed.  


> [!div class="mx-tdBreakAll"]  
> |Team settings|Team project settings|  
> |-------------|----------| 
> |Required membership: [Team administrator role](../work/scale/add-team-administrator.md)<br/><br/>- [Overview: Add team members](../work/scale/multiple-teams.md)  &#124; [Add team admins](../work/scale/add-team-administrator.md)<br/>- [Select backlog levels](../work/customize/select-backlog-navigation-levels.md) &#124; [Set working days](../work/scale/capacity-planning.md)  &#124; [Working with bugs](../work/customize/show-bugs-on-backlog.md)<br/>- [Work/Iterations & Areas (team defaults)](../work/scale/set-team-defaults.md)<br/>- [Work/Templates](../work/backlogs/work-item-template.md)<br/>- [Security (manage team-level permissions)](../work/scale/team-administrator-permissions.md)<br/>- [Notifications](../collaborate/manage-team-notifications.md)<br/><br/>For a complete overview of all team assets that you<br/>can configure, see  [Manage team assets](../work/scale/manage-team-assets.md) |Required membership:  [Project Administrators](../accounts/add-administrator-team-project.md)<br/><br/>-  [Overview: Add teams](../work/scale/multiple-teams.md)<br/>- [Work/Iterations & Areas (project-wide)](../work/customize/set-area-paths.md)<br/>- [Security (manage project-level permissions)](../security/permissions.md#team-project-level-permissions)<br/>- [Notifications](../collaborate/manage-team-notifications.md)<br/>- [Version Control (manage repository permissions)](../security/permissions.md#git-repository)<br/>- [Agent queues](../build-release/concepts/agents/pools-queues.md)<br/>- [Service hooks](../service-hooks/services/webhooks.md)<br/>- [Services](../build-release/concepts/library/service-endpoints.md)<br/>- [Test (manage test retention policies](../manual-test/getting-started/how-long-to-keep-test-results.md) 

> [!div class="mx-tdBreakAll"]  
> |Account settings (VSTS)|Collection settings (TFS)|  
> |-------------|----------| 
> |Required membership: [Project Collection Administrators](../security/set-project-collection-level-permissions.md?toc=/vsts/security/toc.json&bc=/vsts/security/breadcrumb/toc.json)<br/><br/>- [Overview: Create team projects](../accounts/create-team-project.md?toc=/vsts/accounts/toc.json&bc=/vsts/accounts/breadcrumb/toc.json)  &#124; [Rename team project](../accounts/rename-team-project.md?toc=/vsts/accounts/toc.json&bc=/vsts/accounts/breadcrumb/toc.json)<br/>[Delete team project](../accounts/delete-team-project.md?toc=/vsts/accounts/toc.json&bc=/vsts/accounts/breadcrumb/toc.json) &#124; [Change process](../work/customize/process/manage-process.md?toc=/vsts/work/customize/toc.json&bc=/vsts/work/customize/breadcrumb/toc.json)<br/>- [Settings: Set account preferences](../accounts/account-preferences.md?toc=/vsts/user-guide/toc.json&bc=/vsts/user-guide/breadcrumb/toc.json) &#124; [Change application access policies](../accounts/change-application-access-policies-vs.md?toc=/vsts/accounts/toc.json&bc=/vsts/accounts/breadcrumb/toc.json)<br/>[Change account owner](../accounts/change-account-ownership-vs.md?toc=/vsts/accounts/toc.json&bc=/vsts/accounts/breadcrumb/toc.json) &#124; [Delete your account](../accounts/delete-your-vsts-account.md?toc=/vsts/accounts/toc.json&bc=/vsts/accounts/breadcrumb/toc.json) &#124; [Recover your account](../accounts/recover-your-vsts-account.md?toc=/vsts/accounts/toc.json&bc=/vsts/accounts/breadcrumb/toc.json)<br/>- [Security (manage collection-level permissions)](../security/set-project-collection-level-permissions.md?toc=/vsts/security/toc.json&bc=/vsts/security/breadcrumb/toc.json)<br/>- [Process (customize work tracking)](../work/customize/process/manage-process.md?toc=/vsts/work/customize/toc.json&bc=/vsts/work/customize/breadcrumb/toc.json)<br/>- [Build (manage build policies)](../build-release/concepts/policies/retention.md)<br/>- [Agent pools (manage build agents)](../build-release/concepts/agents/pools-queues.md) (VSTS)<br/>- [Extensions (install/manage extensions)](../marketplace/install-vsts-extension.md) | Required membership: [Project Collection Administrators](../security/set-project-collection-level-permissions.md)<br/><br/>- [Overview: Create team projects](../accounts/create-team-project.md?toc=/vsts/accounts/toc.json&bc=/vsts/accounts/breadcrumb/toc.json)  &#124; [Rename team project](../accounts/rename-team-project.md?toc=/vsts/accounts/toc.json&bc=/vsts/accounts/breadcrumb/toc.json) &#124; [Delete team project](../accounts/delete-team-project.md?toc=/vsts/accounts/toc.json&bc=/vsts/accounts/breadcrumb/toc.json)<br/>- [Security (manage collection-level permissions)](..//security/set-project-collection-level-permissions.md?toc=/vsts/security/toc.json&bc=/vsts/security/breadcrumb/toc.json)<br/>- [Build (manage build policies)](../build-release/concepts/policies/retention.md)<br/>- >[Agent queues](../build-release/concepts/agents/pools-queues.md)<br/>- [Extensions (install/manage extensions)](../marketplace/install-vsts-extension.md?toc=/vsts/marketplace/toc.json&bc=/vsts/marketplace/breadcrumb/toc.json) |

**Server-level settings (TFS only)**

Required membership: [Team Foundation Administrators](../tfs-server/add-administrator-tfs.md#server) 

- [Overview: Choose team project/team](../work/scale/multiple-teams.md)  
- [Access levels (Stakeholder, Basic, Advanced)](../security/change-access-levels.md)  
- [Extensions (manage)](../marketplace/install-vsts-extension.md)   
- [Agent pools (manage build agents)](../build-release/concepts/agents/pools-queues.md)   

 
 
<!--- End of Admin context -->


## Related notes  

Now that you have an understanding of how the user interface is structure, it's time to get started using it.  As you can see, there are a lot of features and functionality.  

If all you need is a code repository and bug tracking solution, then start with the [Git get started guide](../git/gitquickstart.md) and [Manage bugs](../work/backlogs/manage-bugs.md?toc=/vsts/work/work-items/toc.json&bc=/vsts/work/work-items/breadcrumb/toc.json).  

To start planning and tracking work, see [Get started with Agile tools to plan and track work](../work/backlogs/overview.md?toc=/vsts/work/work-items/toc.json&bc=/vsts/work/work-items/breadcrumb/toc.json).

Additional resources you may find of interest:

- [Work effectively from your account home page](account-home-pages.md?toc=/vsts/user-guide/toc.json&bc=/vsts/user-guide/breadcrumb/toc.json)
- [Connect to team projects](connect-team-projects.md?toc=/vsts/user-guide/toc.json&bc=/vsts/user-guide/breadcrumb/toc.json)  
- [Work in Team Explorer](work-team-explorer.md?toc=/vsts/user-guide/toc.json&bc=/vsts/user-guide/breadcrumb/toc.json)  
- [Troubleshoot connection](troubleshoot-connection.md?toc=/vsts/user-guide/toc.json&bc=/vsts/user-guide/breadcrumb/toc.json)  


<!---
### Navigating within the admin context (VSTS and TFS 2017)  

From a team context, open team settings by clicking the ![](_img/work-tfs-web-portal/IC623347.png) gear Settings icon. Optionally, choose the hub you want to view from the menu options that appear. 

<img src="_img/web-portal-open-team-settings-new-nav.png" alt="Web portal, new nav, open team settings" style="border: 1px solid #CCCCCC;" />   

The admin team settings hubs appear. Note that you can click any of the user-context hubs of **Home**, **Code**, **Work**, and so on to return to the user context.   

<img src="_img/web-portal-admin-team-settings-new-nav.png" alt="Web portal, new nav, team admin setting" style="border: 1px solid #CCCCCC;" />     

#### Admin team project settings 
To open the admin context for the team project, open project settings by clicking the ![](_img/work-tfs-web-portal/IC623347.png) gear Settings icon from the team project context. Optionally, choose the hub you want to view from the menu options that appear. 

<img src="_img/web-portal-open-project-settings-new-nav.png" alt="Web portal, new nav, open project settings" style="border: 1px solid #CCCCCC;" />  

The admin project setting hubs appear. While the hub names are similar to those of the team admin context, the details differ in select cases, such as for the **Overview**, **Work**, and **Security** hubs. Also, just like from the team admin context, you can click any of the user-context hubs of **Home**, **Code**, **Work**, and so on to return to the user context.   

<img src="_img/web-portal-admin-project-settings-new-nav.png" alt="Web portal, new nav, project admin setting" style="border: 1px solid #CCCCCC;" />    

#### Admin account settings 
To open the admin account settings, choose the Account settings option from the project/team menu.

![Web portal, new nav, open account settings](_img/web-portal-open-account-settings-new-nav.png)    

The admin account setting hubs appear.

<img src="_img/web-portal-admin-account-settings-new-nav.png" alt="Web portal, new nav, account admin settings" style="border: 1px solid #CCCCCC;" />  

To return to a team or project user context, select the team or project from the project/team menu.
-->

### User accounts and licensing  

To connect to the web portal, you need your user account added to the team project. This is typically done by the [account owner (VSTS)](../accounts/add-account-users-assign-access-levels.md?toc=/vsts/accounts/toc.json&bc=/vsts/accounts/breadcrumb/toc.json)) or a [project administrator (TFS)](../security/add-users-team-project.md?toc=/vsts/tfs-server/toc.json&bc=/vsts/tfs-server/breadcrumb/toc.json)).

For VSTS, five account users are free as are Visual Studio subscribers and stakeholders. After that, you need to [pay for more users (VSTS)](../billing/buy-basic-access-add-users.md).

For TFS, limited access is available to an unlimited number of stakeholders for free; most regular contributors must have a TFS client access license (CAL). For details, see [Work as a Stakeholder](../security/get-started-stakeholder.md?toc=/vsts/user-guide/toc.json&bc=/vsts/user-guide/breadcrumb/toc.json).

All Visual Studio subscriptions and paid VSTS users include a TFS CAL. Find out more about licensing from the following pricing pages: 
- [VSTS pricing](https://www.visualstudio.com/team-services/pricing/)
- [TFS pricing](https://www.visualstudio.com/team-services/tfs-pricing).



<a id="refresh-web-portal">  </a>
### Refresh the web portal

If data doesn't appear as expected, the first thing to try is to refresh your web browser. Refreshing your client updates the local cache with changes that were made in another client or in TFS. To refresh the page or object you're currently viewing, refresh the page or choose the ![Refresh icon](../work/_img/icons/icon-refresh-wi.png) **Refresh** icon if available.  

[!INCLUDE [temp](_shared/when-to-refresh-client.md)]

<a id="clients">  </a>
### Clients that connect to VSTS or TFS

In addition to connecting through a web browser, you can connect to a team project from these clients:

- [Visual Studio (Professional, Enterprise, Test Professional)](https://www.visualstudio.com/products/compare-visual-studio-2015-products-vs)
- [Visual Studio Code](https://code.visualstudio.com/Docs)
- [Visual Studio Community](https://www.visualstudio.com/products/visual-studio-community-vs.aspx)
- [Eclipse: Team Explorer Everywhere](http://java.visualstudio.com/Docs/tools/eclipse)
- [Office Excel](../work/backlogs/office/bulk-add-modify-work-items-excel.md)
- [Office Project](../work/backlogs/office/create-your-backlog-tasks-using-project.md)
- [PowerPoint Storyboarding](../work/backlogs/office/storyboard-your-ideas-using-powerpoint.md)
- [Microsoft Test Manager](https://msdn.microsoft.com/library/jj635157.aspx)
- [Microsoft Feedback Client](../feedback/give-feedback.md)

### Differences between the web portal and Visual Studio  

Although you can access source code, work items, and builds from both clients, some task-specific tools are only supported in the web browser or an IDE, but not in both.

<table width="100%">
<thead>
<tr>
<th width="50%"><p>Web portal</p></th>
<th width="50%"><p>Visual Studio</p></th>
</tr>
</thead>
<tbody valign="top">
<tr>
<td><ul>
<li><p>[Product backlog](../work/backlogs/create-your-backlog.md), [Portfolio backlogs](../work/kanban/kanban-epics-features-stories.md), [Sprint backlogs](../work/scrum/sprint-planning.md), [Task boards](../work/scrum/task-board.md), [Capacity planning](../work/scale/capacity-planning.md) </p></li>
<li><p>[Kanban board](../work/kanban/kanban-basics.md)</p></li>
<li><p>[Dashboards](../report/dashboards/dashboards.md), [Widgets](../report/dashboards/widget-catalog.md), and [Charts](../report/dashboards/charts.md)</p></li>
<li><p>[Team rooms](../collaborate/collaborate-in-a-team-room.md)</p></li>
<li><p>[Request feedback](../feedback/get-feedback.md)</p></li>
<li><p>Web-based Test Management</p></li>
<li><p>Administration pages to administer accounts, team projects, and teams</p></li>
</ul></td>
<td><ul>
<li><p>Task specific interfaces that integrate with Git and TFVC, such as:
</p>
<ul>
<li><p><b>Git: </b> [Changes](../git/tutorial/commits.md#stage-your-changes-and-commit) |  [Branches](../git/tutorial/branches.md) | [Pull Requests](../git/tutorial/pullrequest.md) | [Sync](../git/tutorial/pulling.md) | [Work Items](../work/backlogs/add-work-items.md) | [Builds](https://msdn.microsoft.com/library/ms181721.aspx) </p></li>
<li><p><b>TFVC: </b> [My Work](../tfvc/develop-code-manage-pending-changes.md#use-the-my-work-page-to-manage-your-work) | [Pending Changes](../tfvc/develop-code-manage-pending-changes.md#use-the-pending-changes-page-to-manage-your-work) | [Source Control Explorer](../tfvc/develop-code-manage-pending-changes.md#use-solution-explorer-or-source-control-explorer-to-view-what-you-changed)  | [Work Items](../work/backlogs/add-work-items.md) | [Builds](https://msdn.microsoft.com/library/ms181721.aspx) </p></li>
</ul>
</li>
<li><p>Greater integration with work items and Office-integration clients. You can open a work item or query result in an office supported client.</p></li>
<li><p>Additional text formatting options for rich-text fields in work item forms.</p></li>
</ul></td>
</tr>
</tbody>
</table>

### Can I open a query in Excel or Project from the web portal?  

To open Excel from the web portal, install the [VSTS Open in Excel](https://marketplace.visualstudio.com/items?itemName=blueprint.vsts-open-work-items-in-excel) Marketplace extension. Otherwise, you can open [Excel](../work/backlogs/office/bulk-add-modify-work-items-excel.md) or [Project](../work/backlogs/office/create-your-backlog-tasks-using-project.md) and then open a query that you've created in the web portal. 


[!INCLUDE [temp](../_shared/help-support-shared.md)] 

<!---
Overview
Work
Security
Alerts
Version Control
Agent Queues
Service Hooks
Services
Test

##To Be Covered:
- Client/server - When to use a client--Visual Studio/Eclipse/Visual Studio Code/IntelliJ -- and when to use the web portal
- IMG: Collection > Team Projects > Teams > Personal

- Understand teams
- Web portal tasks, differ from those available through specific clients.
- Inheritance
- Profile - manage your alerts  
- Test runner, Exploratory testing
- search box  
- Favorites

-->
<!---

Team favorites
Team members
Team dashboards

-->
