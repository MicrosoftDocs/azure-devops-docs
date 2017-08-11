---
title: Set up Team Services, Team Foundation Server, Visual Studio Team Services, or TFS
description: Get Git or Team Foundation version control, tools for Agile and Java teams, and DevOps for continuos integration and continuous delivery to build, test, and release in the cloud or on-premises
ms.prod: vs-devops-alm
ms.technology: vs-devops-tfs
ms.assetid: fa1dbe39-08b1-4eba-886a-33c1aa1e6a83
ms.topic: Get started
toc: show
ms.manager: douge
ms.author: elbatk
ms.date: 04/04/2017
---


#Administrative guide to working in Team Services and TFS  
**Team Services | TFS 2017 | TFS 2015 | TFS 2013**

Work on apps anytime, anywhere. Use 
integrated, powerful, cross-platform, 
enterprise-level Agile tools for DevOps 
so your team can share code, build often, 
test early, and ship faster.

Use this index to setup and manage your account or servers as well as configure key settings to support your teams. 

- **Want to work in the cloud?** Set up a Team Services account. 
    Connect your dev tools, 
    share code, invite team members, 
    and start working. 

- **Need to keep everything on site?** Install on-premises TFS on your own servers. 
    Or upgrade TFS, if you have an earlier version. 

<a id="account-setup">  </a>
<a id="team-services">  </a>
## Account setup (Team Services)  
The account owner and other members of the Project Collection Administrator group are responsible for account or collection-level settings in Team Services.  

<div style="float:left;width:230px;margin:3px;font-size:90%">
<p style="font-weight:bold;padding-bottom:0px;text-align:center;">Set up Team Services</p>
<ul style="padding-left:30px">
 <li style="margin-bottom:2px">[Create your account](team-services/sign-up-for-visual-studio-team-services.md)</li>
 <li style="margin-bottom:2px">[Connect to your account](team-services/connect-to-visual-studio-team-services.md)</li>
 <li style="margin-bottom:2px">[Change account owner](team-services/change-account-ownership-vs.md)</li>
 <li style="margin-bottom:2px">[Rename account](team-services/rename-visual-studio-team-services-account.md)</li>
 <li style="margin-bottom:2px">[Delete or recover account](team-services/delete-or-recover-your-account-vs.md)</li>
 <li style="margin-bottom:2px">[Authenticate app access](team-services/use-personal-access-tokens-to-authenticate.md)</li>
 <li style="margin-bottom:2px">[Change app access policies](team-services/change-application-access-policies-vs.md)</li>
</ul>
</div>

<div style="float:left;width:230px;margin:3px;font-size:90%">
<p style="font-weight:bold;padding-bottom:0px;text-align:center;">Azure Active Directory</p>
<ul style="padding-left:20px">
 <li style="margin-bottom:2px">[Access with Azure AD](team-services/manage-organization-access-for-your-account-vs.md)</li>
 <li style="margin-bottom:2px">[Access with Azure AD groups](team-services/manage-azure-active-directory-groups-visual-studio-team-services.md)</li>
 <li style="margin-bottom:2px">[Change Azure AD](team-services/change-azure-active-directory-team-services-account.md)</li>
</ul>
</div>

<div style="float:left;width:230px;margin:3px;font-size:90%">
<p style="font-weight:bold;padding-bottom:0px;text-align:center;">Billing and purchases</p>
<ul style="padding-left:20px">
 <li style="margin-bottom:2px">[Set up billing](team-services/set-up-billing-for-your-account-vs.md)</li> 
 <li style="margin-bottom:2px">[Try extensions for free](team-services/try-additional-features-vs.md)</li>
 <li style="margin-bottom:2px">[Pay for more users](team-services/buy-basic-access-add-team-services-users.md)</li>
 <li style="margin-bottom:2px">[Buy more pipeline capacity for builds](team-services/buy-more-build-vs.md)</li>
 <li style="margin-bottom:2px">[Buy more cloud-based testing services](team-services/buy-load-testing-vs.md)</li>
</ul>
</div>


<div style="clear:left;font-size:100%">
</div>


## Manage user access and permissions  

For a simplified view of the default permissions granted to built-in groups and stakeholders, see   [Permissions and access](permissions-access.md). 

<div style="float:left;width:230px;margin:3px">
<p style="font-weight:bold;padding-bottom:0px;text-align:center;">Team Services</p>
<ul style="padding-left:30px;font-size:90%">
 <li style="margin-bottom:2px">[Manage users and access](team-services/add-account-users-assign-access-levels-team-services.md) </li>
 <li style="margin-bottom:2px">[Add users to team projects](team-services/add-team-members-vs.md) </li>
<li style="margin-bottom:2px">[Make a user a team admin](../work/scale/manage-team-assets.md )</li>
<li style="margin-bottom:2px">[Add users to an administrator role](add-administrator-tfs.md)</li>
</ul>
<p style="font-weight:bold;padding-bottom:0px;text-align:center;">TFS</p>
<ul style="padding-left:30px;font-size:90%">
<li style="margin-bottom:2px">[Add users to a team project](add-users.md) </li>
<li style="margin-bottom:2px">[Manage access levels](../work/connect/change-access-levels.md) </li>
<li style="margin-bottom:2px">[Add Stakeholder users](../work/connect/change-access-levels.md)</li>
<li style="margin-bottom:2px">[Make a user a team admin](../work/scale/manage-team-assets.md )</li>
<li style="margin-bottom:2px">[Add users to an administrator role](add-administrator-tfs.md)</li>
</ul>
</div>

<div style="float:left;width:230px;margin:3px">
<p style="font-weight:bold;padding-bottom:0px;text-align:center;">DevOps permissions</p>
<ul style="padding-left:20px;font-size:90%">
<li style="margin-bottom:2px">[Git branch](../git/branch-permissions.md)</li>
<li style="margin-bottom:2px">[TFVC](restrict-access-tfs.md)</li>
<li style="margin-bottom:2px">[Builds](../build-release/concepts/policies/permissions.md)</li>
<li style="margin-bottom:2px">[Release definition security](../build-release/concepts/policies/permissions.md#release-permissions)</li>
<li style="margin-bottom:2px">[Environment security](../build-release/concepts/policies/permissions.md#release-permissions)</li>
<li style="margin-bottom:2px">[Approvals and approvers](../build-release/concepts/definitions/release/environments.md#approvals)</li>

</ul>
</div>

<div style="float:left;width:230px;margin:3px">
<p style="font-weight:bold;padding-bottom:0px;text-align:center;">Work tracking permissions</p>
<ul style="padding-left:20px;font-size:90%">
<li style="margin-bottom:2px">[Area and iteration paths](../work/how-to/set-permissions-access-work-tracking.md)</li>
<li style="margin-bottom:2px">[Work item query and folder](../work/track/set-query-permissions.md)</li>
<li style="margin-bottom:2px">[Dashboard permissions](../report//dashboards.md#set-permissions) (Team Services)</li>
<li style="margin-bottom:2px">[Restrict access to resources](restrict-access-tfs.md)</li>
</ul>
</div>


<div style="clear:left;font-size:100%">
</div>

For details on built-in groups and permission management, see [Permissions and groups reference](permissions.md). 

## Configure team settings

Team administrators can manage settings for their team, including team alerts and team rooms. Members of the Project Administrators and Project Collection Administrators groups can manage settings for all teams as well as team alerts and create and administer team rooms that they've created.

<div style="float:left;width:220px;margin:3px;font-size:90%">
<p style="padding-bottom:0px;text-align:center;"><b>Backlogs and Scrum tools </sup> </b></p>
<ul style="padding-left:30px">
<li style="margin-bottom:0px">[Set team Area and Iteration paths](../work/scale/set-team-defaults.md)</li>
<li style="margin-bottom:0px">[Configure team backlogs](../work/customize/select-backlog-navigation-levels.md)</li>
<li style="margin-bottom:0px">[Show bugs on backlogs and boards](../work/customize/show-bugs-on-backlog.md) </li>
<li style="margin-bottom:0px">[Select team sprints](../work/scale/set-team-defaults.md) </li>
<li style="margin-bottom:0px">[Set working days off](../work/scale/capacity-planning.md)  </li>


</ul>
</div>

<div style="float:left;width:190px;margin:3px;font-size:90%">
<p style="padding-bottom:0px;text-align:center;"><b>Other team assets  </b></p>
<ul style="padding-left:20px">
<li style="margin-bottom:0px">[Manage team dashboard(s)](../report//dashboards.md) </li>
<li style="margin-bottom:0px">[Manage notifications for a team](../work/track/alerts-and-notifications.md) (Team Services) </li>
<li style="margin-bottom:0px">[Create and manage team alerts](../work/track/alerts-and-notifications.md) (TFS) </li>
<li style="margin-bottom:0px">[Create and manage team rooms](../collaborate/collaborate-in-a-team-room.md)  </li>
</ul>

</div>


<div style="clear:left;font-size:90%">
</div>

To better understand the features available with each backlog and board, see [Backlogs and board views](../work/backlogs-boards-plans.md). 

## Add teams and customize DevOps policies and work tracking elements 

Members of the Project Administrators and Project Collection Administrator groups can configure the following elements: 
 
<div style="float:left;width:220px;margin:3px;font-size:90%">
<p style="padding-bottom:0px;text-align:center;"><b>Teams</b></p>
<ul style="padding-left:30px">
<li style="margin-bottom:0px">[Add teams](../work/scale/multiple-teams.md)</li>
<li style="margin-bottom:0px">[Add team rooms](../collaborate/collaborate-in-a-team-room.md)</li>
</ul>
</div>

<div style="float:left;width:230px;margin:3px;font-size:90%">
<p style="padding-bottom:0px;text-align:center;"><b>DevOps</b></p>
<ul style="padding-left:20px">
<li style="margin-bottom:0px">[Manage Git branch policies](../git/branch-policies.md)</li>
<li style="margin-bottom:0px">[Build agents, pools, and service endpoints](../build-release/overview.md)</li> 
<li style="margin-bottom:0px">[Test retention policies](../manual-test/getting-started/how-long-to-keep-test-results.md)</li> 
<li style="margin-bottom:0px">[Build and release retention policies](../build-release/concepts/policies/retention.md) </li>
<li style="margin-bottom:0px">[Test permissions](permissions.md#project_test)</li>
<li style="margin-bottom:0px">[Build permissions](permissions.md#build)</li>
<li style="margin-bottom:0px">[Git repository security](permissions.md#git-repo)</li>
<li style="margin-bottom:0px">[TFVC security](permissions.md#tfvc)</li>
</ul>
</div>

<div style="float:left;width:230px;margin:3px;font-size:90%">
<p style="padding-bottom:0px;text-align:center;"><b>Work tracking </b></p>
<ul style="padding-left:20px">
<li style="margin-bottom:0px">[Area and iteration paths](../work/customize/set-area-paths.md) </li>
<li style="margin-bottom:2px">[Work item query and folder](../work/track/set-query-permissions.md)</li>
<li style="margin-bottom:0px">[Project-level permissions](permissions.md#project_test) </li>
<li style="margin-bottom:0px">[Customize work tracking objects (TFS only)](../work/customize/customize-work.md) </li> 
</ul>

</div>

<div style="clear:left;font-size:90%">
</div>


## Manage collection-level settings and work tracking customization  

Members of the Project Collection Administrator groups are responsible for account or collection-level settings. 

### Manage work tracking customization, DevOps policies, and extensions 

Your team project determines the objects available to tracking work and the configuration of Agile tools. Specifically, the team project determines the work item types (WITs)&mdash;user stories, tasks, bugs&mdash; and the data fields used to capture information. Customized objects are shared across teams added to a team project.   

The method used to customize a team project depends on the process model you use: Inheritance, Hosted XML, or On-premises XML. To learn more, see [Customize your work tracking experience](../work/customize/customize-work.md). 



<div style="float:left;width:330px;margin:3px;font-size:90%">
<p style="font-weight:bold;padding-bottom:0px;text-align:center;">DevOps resources and Extensions</p>
<ul style="padding-left:20px">
<li style="margin-bottom:2px">[Manage build agents](../build-release/concepts/agents/pools-queues.md) (Team Services) </li>
<li style="margin-bottom:2px">[Extensions (install/manage extensions)](../marketplace/get-vsts-extensions.md)</li>
<li style="margin-bottom:2px">[Security (manage collection-level permissions)](permissions.md#collection)</li>
</ul>
</div>
 
<div style="clear:left;font-size:100%">
</div>


### Manage team projects, project collections, reports, and project portals

>[!NOTE]  
>For Team Services, the account corresponds to a project collection, and tasks associated with managing the account are listed under [Account setup (Team Services)](#account-setup).  
>
>Tasks associated with managing project collections, reports, dashboards, and SharePoint web portals are valid for TFS only.   

<div style="float:left;width:230px;margin:3px;font-size:90%">
<p style="font-weight:bold;padding-bottom:0px;text-align:center;">Team projects</p>
<ul style="padding-left:30px">
 <li style="margin-bottom:2px">[Create team project](create-team-project.md)</li>
 <li style="margin-bottom:2px">[Rename team project](rename-team-project.md)</li>
 <li style="margin-bottom:2px">[Delete team project](delete-team-project.md)</li>
 <li style="margin-bottom:2px">[Clean up data](clean-up-data.md)</li>
</ul>
</div>


<div style="float:left;width:230px;margin:3px;font-size:90%">
<p style="font-weight:bold;padding-bottom:0px;text-align:center;">Project collections (TFS) </p>
<ul style="padding-left:20px">
 <li style="margin-bottom:2px">[Manage team project collections](tfs/admin/manage-team-project-collections.md)</li>
 <li style="margin-bottom:2px">[Move a team project collection](tfs/admin/move-project-collection.md)</li>
 <li style="margin-bottom:2px">[Split a team project collection](tfs/admin/split-team-project-collection.md)</li>
</ul>
</div>


<div style="float:left;width:230px;margin:3px;font-size:90%">
<p style="font-weight:bold;padding-bottom:0px;text-align:center;">Reports, documents, and dashboards (TFS) </p>
<ul style="padding-left:20px">
 <li style="margin-bottom:2px">[Add reports to a team project](../report//admin/add-reports-to-a-team-project.md)</li>
 <li style="margin-bottom:2px">[Manage the data warehouse and analysis services cube](../report//admin/manage-reports-data-warehouse-cube.md)</li>
 <li style="margin-bottom:2px">[Change the service account or password for SQL Server Reporting Services](tfs/admin/change-service-account-or-password-sql-reporting.md)</li> 
 <li style="margin-bottom:2px">[Add SharePoint products to your deployment](tfs/admin/add-sharepoint-to-tfs.md)</li>
 <li style="margin-bottom:2px">[Configure or add a project portal](https://msdn.microsoft.com/library/ms242865.aspx)</li>
 <li style="margin-bottom:2px">[Support rollup of work and other fields](https://msdn.microsoft.com/library/dn217871.aspx)</li>
</ul>
</div>

<div style="clear:left;font-size:100%">
</div>


##Related notes 

<div style="float:left;width:230px;margin:3px;font-size:90%">
<p style="font-weight:bold;padding-bottom:0px;text-align:center;">Get started concepts </p>
<ul style="padding-left:30px">
 <li style="margin-bottom:2px">[Key concepts](../concepts.md)</li>
 <li style="margin-bottom:2px">[Software development roles](../roles.md)</li>

 <li style="margin-bottom:2px">[Pricing](https://www.visualstudio.com/team-services/pricing/)</li>
</ul>
</div>

<div style="float:left;width:230px;margin:3px;font-size:90%">
<p style="font-weight:bold;padding-bottom:0px;text-align:center;">Command line tools</p>
<ul style="padding-left:20px">
 <li style="margin-bottom:2px">[TFSConfig](tfs/command-line/tfsconfig-cmd.md)</li>
 <li style="margin-bottom:2px">[TFSDeleteProject](tfs/command-line/tfsdeleteproject-cmd.md)</li>
 <li style="margin-bottom:2px">[TFSSecurity](tfs/command-line/tfssecurity-cmd.md)</li>
 <li style="margin-bottom:2px">[TFSServiceControl](tfs/command-line/tfsservicecontrol-cmd.md)</li>
 <li style="margin-bottom:2px">[witadmin](https://msdn.microsoft.com/library/dd236914.aspx)</li>
</ul>
</div>


<div style="float:left;width:230px;margin:3px;font-size:90%">
<p style="font-weight:bold;padding-bottom:0px;text-align:center;">Service hooks </p>
<ul style="padding-left:20px">
 <li style="margin-bottom:2px">[Integrate with service hooks](../service-hooks/index.md)</li>
 <li style="margin-bottom:2px">[Campfire](../collaborate/campfire.md) (Team Services)</li>
 <li style="margin-bottom:2px">[Flowdock](../collaborate/flowdock.md) (Team Services)</li>
 <li style="margin-bottom:2px">[HipChat](../collaborate/flowdock.md) (Team Services)</li>
 <li style="margin-bottom:2px">[Slack](../collaborate/slack.md) (Team Services)</li>
</ul>
</div>


<div style="clear:left;font-size:100%">
</div>

### Set up Team Services

#### Create your account
To get started in the cloud, 
[create your Team Services account](./team-services/sign-up-for-visual-studio-team-services.md). 
You'll choose Git or Team Foundation as your version control, 
so that Team Services can create your team project for code and other assets, 
like builds, tests, and work items. If you're starting with Visual Studio 
as your development environment, you can create your Team Services account when you 
[set up Visual Studio](./team-services/set-up-vs.md).

Your Team Services account includes 5 free users 
with Basic access plus unlimited Visual Studio 
subscribers and Stakeholders at no extra charge. 
Your account also includes free monthly amounts 
of additional services, like build and deployment, 
and cloud-based load testing.

#### Connect to your account
After Team Services creates your account, 
[connect to your account](./team-services/connect-to-visual-studio-team-services.md) 
with tools like Xcode, Eclipse, or Visual Studio, 
and add code to your team project.

Some clients, like Xcode, Git, and NuGet, require basic credentials 
(a username and password) for you to access Team Services. 
To connect these clients to Team Services, 
create personal access tokens to authenticate your identity. 
Use a credential manager to create, store, and secure your tokens, 
so you don't have to reenter them every time you push. 
Or if you don't want to use a credential manager, you can 
[create personal access tokens manually](./team-services/use-personal-access-tokens-to-authenticate.md).

#### Add users and assign access
To share work with others, 
[add users and assign access](./team-services/add-account-users-assign-access-levels-team-services.md). 
That way, you control the access that each user gets. 
Or [add users to your team project](./team-services/add-team-members-vs.md), 
and let Team Services assign the next available access to them.

#### Try extensions for free
Help your team do more with Team Services extensions. 
For example, Team Services account owners can 
try the Test Manager extension free for 90 days. 
During the trial, all users with Basic access can 
[try Test Manager for free](./team-services/try-additional-features-vs.md).

#### Set up billing
If you need more than free users and amounts 
of services included with your account, 
[set up billing for your account](./team-services/set-up-billing-for-your-account-vs.md).
You can then pay for more users with Basic access, 
pay for more services, and purchase extensions for your account.

#### Access with Azure AD
Team Services works with Azure Active Directory (Azure AD), 
so that you can control access the same way that you do 
with Microsoft services like Office 365 and Microsoft Azure. 
If your organization uses a directory (tenant) managed by Azure AD, 
your Team Services account can also 
[use your directory to authenticate access](./team-services/manage-organization-access-for-your-account-vs.md). 
Or [change your Azure AD](./team-services/change-azure-active-directory-team-services-account.md), 
if you're already connected to an existing directory.

### Install TFS

To install the best configuration for your team, 
[check the requirements](./requirements.md) and 
[overview](./tfs/install/get-started.md). 
Or choose based on your team size: 

- For smaller teams, 
[single server](tfs/install/single-server.md) is the simplest.
- For larger teams, consider a 
[dual server](tfs/install/dual-server.md) installation.
- For the largest organizations, you can set up TFS across 
[multiple servers with data and application tiers](tfs/install/multiple-server.md).
	
### Upgrade TFS

To understand factors that affect your upgrade's compexity, 
[check the requirements](./requirements.md) and 
[review the upgrade process](./tfs/upgrade/get-started.md), 
which supports upgrades from 2005 to the latest version. 

Learn if a dry run makes sense for you, and weigh the benefits 
and the costs to perform a [pre-production upgrade](tfs/upgrade/pre-production.md). 

When you're ready to upgrade, minimize downtime with the 
[TfsPreUpgrade tool](tfs/upgrade/pre-upgrade.md) - 
especially for very large TFS collection databases (> 1 TB). 
Follow these steps for [how to upgrade TFS](tfs/upgrade/walkthrough.md), 
and for [how to upgrade TFS Express](tfs/upgrade/express.md), if you have that.

