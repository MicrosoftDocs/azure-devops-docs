---
title: Permissions and access quick reference for VSTS & TFS 
description: Simplified views of required permissions and access levels for common user tasks when working in Visual Studio Team Services (VSTS) or Team Foundation Server (TFS) 
ms.prod: vs-devops-alm
ms.technology: vs-devops-admin
ms.assetid: B656A277-BA3D-472D-824D-CDD4E067053E
toc: show
ms.manager: douge
ms.author: kaelli
ms.topic: get-started-article
ms.date: 10/09/2017
---


# Permissions and access for VSTS and TFS 

[!INCLUDE [temp](../_shared/version-vsts-tfs-all-versions.md)]

To connect and use the functions and features that VSTS and TFS provides, users must be added to a group with the appropriate permissions. The most common built-in groups include Readers, Contributors, and Project Administrators. These groups are assigned the default permissions as listed below. 

In addition to permissions, access to select features are controlled by the access level assigned to a user. Contributors and administrators should be added to Basic (paid) access. Stakeholder access is available to support free access to a limited set of features by an unlimited set of stakeholders. 

For a complete reference of all built-in groups and permissions, see [Permissions and groups](permissions.md). For information about assigning access levels and supporting stakeholder access, see [Manage users and access](../accounts/add-account-users-assign-access-levels.md) for VSTS, and [Change access levels](change-access-levels.md) for TFS. 


## Code  

You can connect to your code from the Code hub or the web portal, and using Xcode, Eclipse, IntelliJ, Android Studio, Visual Studio, Visual Studio Code. For an overview of code features and functions, see [Git](../git/overview.md) and [Use Team Foundation Version Control](../tfvc/overview.md). Stakeholders have no access to the Code hub or its features.

From the team project admin content for Version Control, you can set permissions on a repository. From the **Code>Branches** page, you can set permissions for a specific branch and set branch policies. 


<table>


<tr valign="bottom">
<th width="310px">Task</th>
<th>Readers</th>
<th>Contributors</th>
<th width="16%">Build Admins</th>
<th width="16%">Account Owner/<br/>Project Admins</th>
</tr>

<tbody valign="top" align="center">
<tr>
<td align="left">(Git) Clone, fetch, pull, and explore the contents of a  repository
</td>
<td>![checkmark](_img/checkmark.png)</td>
<td>![checkmark](_img/checkmark.png)</td>
<td>![checkmark](_img/checkmark.png)</td>
<td>![checkmark](_img/checkmark.png)</td>
</tr>

<tr>
<td align="left">(Git) Unlimited private Git repositories
</td>
<td>  </td>
<td>![checkmark](_img/checkmark.png)</td>
<td>![checkmark](_img/checkmark.png)</td>
<td>![checkmark](_img/checkmark.png)</td>
</tr>

<tr>
<td align="left">(Git) Create branches and tags, manage notes
</td>
<td>  </td>
<td>![checkmark](_img/checkmark.png)</td>
<td>![checkmark](_img/checkmark.png)</td>
<td>![checkmark](_img/checkmark.png)</td>
</tr>


<tr>
<td align="left">(Git) Create, delete, and rename repositories 
</td>
<td>  </td>
<td>  </td>
<td>  </td>
<td>![checkmark](_img/checkmark.png)</td>
</tr>

<tr>
<td align="left">(Git) Manage permissions, manage branches and branch policies 
</td>
<td>  </td>
<td>  </td>
<td>  </td>
<td>![checkmark](_img/checkmark.png)</td>
</tr>


<tr>
<td align="left">(TFVC) Contribute to a centralized version control, including Code Review (Check in, label, lock, merge, pend a change)

</td>
<td>Read only</td>
<td>![checkmark](_img/checkmark.png)</td>
<td>![checkmark](_img/checkmark.png)</td>
<td>![checkmark](_img/checkmark.png)</td>
</tr>


<tr>
<td align="left">(TFVC) Check in, revise, undo, unlock  other users' changes
</td>
<td>  </td>
<td>  </td>
<td>  </td>
<td>![checkmark](_img/checkmark.png)</td>
</tr>

<tr>
<td align="left">(TFVC) Manage branches, manage permissions 
</td>
<td>  </td>
<td>  </td>
<td>  </td>
<td>![checkmark](_img/checkmark.png)</td>
</tr>


<tr>
<td align="left">(Git and TFVC) Powerful semantic code search
</td>
<td>  </td>
<td>![checkmark](_img/checkmark.png)</td>
<td>![checkmark](_img/checkmark.png)</td>
<td>![checkmark](_img/checkmark.png)</td>
</tr>

</tbody>
</table>

## Work tracking

You can connect to work items from the Work hub of the web portal and using Eclipse, Visual Studio, Excel, Project, and other clients. For an overview of work tracking features and functions, see [About Agile tools](../work/backlogs/overview.md). Stakeholders have limited access to select work tracking functions as described in [Work as a stakeholder](../security/get-started-stakeholder.md).  

In addition to the permissions set at the project level via the built-in groups, you can set permissions for the following objects: [area and iteration paths](../security/set-permissions-access-work-tracking.md), [queries and query folders](../work/track/set-query-permissions.md), and [delivery plans](set-permissions-access-work-tracking.md#plan-permissions).  

The team administrator role supports configuration of team settings. To be added as a team administrator, see [Configure team settings and add team administrators](../work/scale/add-team-administrator.md). 

>[!NOTE]  
>There are no UI permissions associated with [managing tags](../work/track/add-tags-to-work-items.md). Instead, you can manage them using the [TFSSecurity command line tool](../tfs-server/command-line/tfssecurity-cmd.md#collection-level-permissions).   

<table>
<tr valign="bottom">
<th width="310px">Task</th>
<th>Stakeholders</th>
<th>Readers</th>
<th>Contributors</th>
<th>Team Admins</th>
<th width="16%">Account Owner/<br/>Project Admins</th>
</tr>
<tbody valign="top" align="center">
<tr>
<td align="left">View work items, including bugs, requirements, and tasks</td>
<td>![checkmark](_img/checkmark.png)</td>
<td>![checkmark](_img/checkmark.png)</td>
<td>![checkmark](_img/checkmark.png)</td>
<td>![checkmark](_img/checkmark.png)</td>
<td>![checkmark](_img/checkmark.png)</td>
</tr>


<tr>
<td align="left">Create and edit work items, follow a work item</td>
<td>![checkmark](_img/checkmark.png)</td>
<td>  </td>
<td>![checkmark](_img/checkmark.png)</td>
<td>![checkmark](_img/checkmark.png)</td>
<td>![checkmark](_img/checkmark.png)</td>
</tr>

<tr>
<td align="left">Change work item type </td>
<td>![checkmark](_img/checkmark.png)</td>
<td>  </td>
<td>![checkmark](_img/checkmark.png)</td>
<td>![checkmark](_img/checkmark.png)</td>
<td>![checkmark](_img/checkmark.png)</td>
</tr>

<tr>
<td align="left">Move or delete work items </td>
<td> </td>
<td>  </td>
<td>![checkmark](_img/checkmark.png)</td>
<td>![checkmark](_img/checkmark.png)</td>
<td>![checkmark](_img/checkmark.png)</td>
</tr>

<tr>
<td align="left">Search and query work items, save work item queries
</td>
<td>![checkmark](_img/checkmark.png)</td>
<td>Can't save queries</td>
<td>![checkmark](_img/checkmark.png)</td>
<td>![checkmark](_img/checkmark.png)</td>
<td>![checkmark](_img/checkmark.png)</td>
</tr>

<tr>
<td align="left">View backlogs, boards, and plans
</td>
<td>![checkmark](_img/checkmark.png)</td>
<td>![checkmark](_img/checkmark.png)</td>
<td>![checkmark](_img/checkmark.png)</td>
<td>![checkmark](_img/checkmark.png)</td>
<td>![checkmark](_img/checkmark.png)</td>
</tr>

<tr>
<td align="left">Provide feedback
</td>
<td>![checkmark](_img/checkmark.png)</td>
<td>![checkmark](_img/checkmark.png)</td>
<td>![checkmark](_img/checkmark.png)</td>
<td>![checkmark](_img/checkmark.png)</td>
<td>![checkmark](_img/checkmark.png)</td>
</tr>

<tr>
<td align="left">Request feedback
</td>
<td> </td>
<td> </td>
<td>![checkmark](_img/checkmark.png)</td>
<td>![checkmark](_img/checkmark.png)</td>
<td>![checkmark](_img/checkmark.png)</td>
</tr>

<tr>
<td align="left">Agile tools (Kanban boards, backlogs, sprint planning, portfolio management)
</td>
<td> limited interactions </td>
<td> view only</td>
<td>![checkmark](_img/checkmark.png)</td>
<td>![checkmark](_img/checkmark.png)</td>
<td>![checkmark](_img/checkmark.png)</td>
</tr>

<tr>
<td align="left">Configure Agile tools, set team defaults 
</td>
<td> </td>
<td> </td>
<td> </td>
<td>![checkmark](_img/checkmark.png)</td>
<td>![checkmark](_img/checkmark.png)</td>
</tr>

<tr>
<td align="left">Create new work item tags</td>
<td>Can assign existing tags</td>
<td> </td>
<td>![check mark](_img/checkmark.png)</td>
<td>![check mark](_img/checkmark.png)</td>
<td>![check mark](_img/checkmark.png)</td>

</tr>


<tr>
<td align="left">View, add, and configure Delivery Plans</td>
<td> </td>
<td>view only</td>
<td>![check mark](_img/checkmark.png)</td>
<td>![check mark](_img/checkmark.png)</td>
<td>![check mark](_img/checkmark.png)</td>

</tr>



<tr>
<td align="left">Customize project information (area paths, iteration paths, and work tracking processes) 
</td>
<td>  </td>
<td> </td>
<td>  </td>
<td>  </td>
<td>![checkmark](_img/checkmark.png)</td>
</tr>

</tbody>
</table>



## Notifications, alerts, and team collaboration tools 

To manage notifications, see [Manage personal notifications](../notifications/manage-personal-notifications.md) and [Manage team notifications](../collaborate/manage-team-notifications.md).

>[!NOTE]  
>There are no UI permissions associated with managing notifications. Instead, you can manage them using the [TFSSecurity command line tool](../tfs-server/command-line/tfssecurity-cmd.md#collection-level-permissions).

<table>
<tr valign="bottom">
<th width="310px">Task</th>
<th>Stakeholders</th>
<th>Readers</th>
<th>Contributors</th>
<th>Team Admins</th>
<th width="16%">Account Owner/<br/>Project Admins</th>
</tr>
<tbody valign="top" align="center">
<tr>
<td align="left">Set personal notifications or alerts 
</td>
<td>![checkmark](_img/checkmark.png)</td>
<td>  </td>
<td>![checkmark](_img/checkmark.png)</td>
<td>![checkmark](_img/checkmark.png)</td>
<td>![checkmark](_img/checkmark.png)</td>
</tr>

<tr>
<td align="left">Set team notifications or alerts 
</td>
<td>  </td>
<td>  </td>
<td>  </td>
<td>![checkmark](_img/checkmark.png)</td>
<td>![checkmark](_img/checkmark.png)</td>
</tr>

<tr>
<td align="left">Participate in Team (chat) rooms</td>
<td> </td>
<td> </td>
<td>![check mark](_img/checkmark.png)</td>
<td>![check mark](_img/checkmark.png)</td>
<td>![check mark](_img/checkmark.png)</td>
</tr>

<tr>
<td align="left">READMEs</td>
<td>Can view team project READMEs, but not READMEs defined for a repository.</td>
<td>![check mark](_img/checkmark.png)</td>
<td>![check mark](_img/checkmark.png)</td>
<td>![check mark](_img/checkmark.png)</td>
<td>![check mark](_img/checkmark.png)</td>
</tr>

<tr>
<td align="left">READMEs & Wikis</td>
<td>![check mark](_img/checkmark.png)</td>
<td>![check mark](_img/checkmark.png)</td>
<td>![check mark](_img/checkmark.png)</td>
<td>![check mark](_img/checkmark.png)</td>
<td>![check mark](_img/checkmark.png)</td>
</tr>

<tr>
<td align="left">Request feedback</td>
<td> </td>
<td>![check mark](_img/checkmark.png)</td>
<td>![check mark](_img/checkmark.png)</td>
<td>![check mark](_img/checkmark.png)</td>
<td>![check mark](_img/checkmark.png)</td>
</tr>

<tr>
<td align="left">Provide feedback</td>
<td>![check mark](_img/checkmark.png)</td>
<td>![check mark](_img/checkmark.png)</td>
<td>![check mark](_img/checkmark.png)</td>
<td>![check mark](_img/checkmark.png)</td>
<td>![check mark](_img/checkmark.png)</td>
</tr>

</tbody>
</table>

>[!NOTE]  
>Team (chat) rooms have been deprecated for VSTS and TFS 2018 and later versions.  


## Build and release


You can define and manage your builds and releases from the web portal, Build & Release hub. For an overview of build and release management features and functions, see [Continuous integration on any platform](../build-release/overview.md).

From the **Build & Release>Builds** and **Releases** pages, you can set permissions for all or each build definition or release definition, respectively. 


<table>
<tr valign="bottom">
<th width="310px">Task</th>
<th>Stakeholders</th>
<th>Readers</th>
<th>Contributors</th>
<th>Build<br/>Admins</th>
<th width="16%">Account Owner/<br/>Project Admins</th>
<th>Release Admins</th>
</tr>
<tbody valign="top" align="center">
<tr>
<td align="left">View build and release definitions 
</td>
<td>  </td>
<td>![checkmark](_img/checkmark.png)</td>
<td>![checkmark](_img/checkmark.png)</td>
<td>![checkmark](_img/checkmark.png)</td>
<td>![checkmark](_img/checkmark.png)</td>
<td>![checkmark](_img/checkmark.png)</td>
</tr>

<tr>
<td align="left">Define builds with continuous integration
</td>
<td>  </td>
<td>  </td>
<td>![checkmark](_img/checkmark.png)</td>
<td>![checkmark](_img/checkmark.png)</td>
<td>![checkmark](_img/checkmark.png)</td>
<td>  </td>
</tr>

<tr>
<td align="left">Define releases, manage deployments, manage releases with Release Management
</td>
<td>  </td>
<td>  </td>
<td>![checkmark](_img/checkmark.png)</td>
<td> </td>
<td>![checkmark](_img/checkmark.png)</td>
<td>![checkmark](_img/checkmark.png)</td>
</tr>

<tr>
<td align="left">Approve releases
</td>
<td>![checkmark](_img/checkmark.png)</td>
<td>  </td>
<td>![checkmark](_img/checkmark.png)</td>
<td>  </td>
<td>![checkmark](_img/checkmark.png)</td>
<td>![checkmark](_img/checkmark.png)</td>
</tr>

<tr>
<td align="left">Package Management (5 users free)
</td>
<td>  </td>
<td>  </td>
<td>![checkmark](_img/checkmark.png)</td>
<td>  </td>
<td>![checkmark](_img/checkmark.png)</td>
<td>![checkmark](_img/checkmark.png)</td>
</tr>



<tr>
<td align="left">Queue builds, edit build quality
</td>
<td>  </td>
<td> </td>
<td>![checkmark](_img/checkmark.png)</td>
<td>![checkmark](_img/checkmark.png)</td>
<td>![checkmark](_img/checkmark.png)</td>
<td>  </td>
</tr>

<tr>
<td align="left">Manage build queues and build qualities
</td>
<td>  </td>
<td>  </td>
<td>  </td>
<td>![checkmark](_img/checkmark.png)</td>
<td>![checkmark](_img/checkmark.png)</td>
<td>  </td>
</tr>

<tr>
<td align="left">Manage build retention policies, delete and destroy builds
</td>
<td>  </td>
<td>  </td>
<td>![checkmark](_img/checkmark.png)</td>
<td>![checkmark](_img/checkmark.png)</td>
<td>![checkmark](_img/checkmark.png)</td>
<td>  </td>
</tr>


<tr>
<td align="left">Administer build permissions
</td>
<td>  </td>
<td>  </td>
<td>  </td>
<td>![checkmark](_img/checkmark.png)</td>
<td>![checkmark](_img/checkmark.png)</td>
<td>  </td>
</tr>

<tr>
<td align="left">Manage release permissions
</td>
<td>  </td>
<td>  </td>
<td>  </td>
<td>  </td>
<td>![checkmark](_img/checkmark.png)</td>
<td>![checkmark](_img/checkmark.png)</td>
</tr>

</tbody>
</table>



## Test

You can define and manage your builds and releases from the web portal, Test hub.  For an overview of test features and functions, see [Testing overview](../manual-test/index.md).  

You set test permissions at the team project level from the admin context Security page.  

<table>
<tr valign="bottom">
<th width="310px">Task</th>
<th>Stakeholders</th>
<th>Readers</th>
<th>Contributors</th>
<th width="20%">Account Owner/<br/>Project Admins</th>
</tr>
<tbody valign="top" align="center">
<tr>
<td align="left">Exploratory testing, view test runs 
</td>
<td>  </td>
<td>![checkmark](_img/checkmark.png)</td>
<td>![checkmark](_img/checkmark.png)</td>
<td>![checkmark](_img/checkmark.png)</td>
</tr>

<tr>
<td align="left">Exploratory testing, create and delete test runs 
</td>
<td>  </td>
<td>  </td>
<td>![checkmark](_img/checkmark.png)</td>
<td>![checkmark](_img/checkmark.png)</td>
</tr>


<tr>
<td align="left">Provide feedback using the Test & Feedback extension
</td>
<td>![checkmark](_img/checkmark.png)</td>
<td>![checkmark](_img/checkmark.png)</td>
<td>![checkmark](_img/checkmark.png)</td>
<td>![checkmark](_img/checkmark.png)</td>
</tr>

<tr>
<td align="left">Request feedback using the Test & Feedback extension
</td>
<td> </td>
<td> </td>
<td>![checkmark](_img/checkmark.png)</td>
<td>![checkmark](_img/checkmark.png)</td>
</tr>


<tr>
<td align="left">Manage test configurations and test environments 
</td>
<td>  </td>
<td>  </td>
<td>![checkmark](_img/checkmark.png)</td>
<td>![checkmark](_img/checkmark.png)</td>
</tr>

<tr>
<td align="left">Manage test plans and test suites 
</td>
<td>  </td>
<td>  </td>
<td>![checkmark](_img/checkmark.png)</td>
<td>![checkmark](_img/checkmark.png)</td>
</tr>

<tr>
<td align="left">Test Manager (purchased separately)
</td>
<td>  </td>
<td>  </td>
<td>![checkmark](_img/checkmark.png)</td>
<td>![checkmark](_img/checkmark.png)</td>
</tr>

</tbody>
</table>


## Charts, dashboards, and other web portal features 

You can define and manage dashboards from the web portal, Dashboard hub. For an overview of dashboard and chart features, see [Dashboards](../report/overview.md). 

You set [dashboard permissions at the team level](../report/dashboard-permissions.md) from the team dashboard page. 

<table>
<tr valign="bottom">
<th width="310px">Task</th>
<th>Stakeholders</th>
<th>Readers</th>
<th>Contributors</th>
<th>Team admins</th>
<th width="20%">Account Owner/<br/>Project Admins</th>
</tr>
<tbody valign="top" align="center">
<tr>
<td align="left">View charts and dashboards
</td>
<td>![checkmark](_img/checkmark.png)</td>
<td>![checkmark](_img/checkmark.png)</td>
<td>![checkmark](_img/checkmark.png)</td>
<td>![checkmark](_img/checkmark.png)</td>
<td>![checkmark](_img/checkmark.png)</td>
</tr>

<tr>
<td align="left">Create work item and test tracking charts 
</td>
<td>  </td>
<td>  </td>
<td>![checkmark](_img/checkmark.png)</td>
<td>![checkmark](_img/checkmark.png)</td>
<td>![checkmark](_img/checkmark.png)</td>
</tr>

<tr>
<td align="left">View the project page
</td>
<td>![checkmark](_img/checkmark.png)</td>
<td>![checkmark](_img/checkmark.png)</td>
<td>![checkmark](_img/checkmark.png)</td>
<td>![checkmark](_img/checkmark.png)</td>
<td>![checkmark](_img/checkmark.png)</td>
</tr>

<tr>
<td align="left">Edit the project page
</td>
<td> </td>
<td> </td>
<td> </td>
<td> </td>
<td>![checkmark](_img/checkmark.png)</td>
</tr>

<tr>
<td align="left">Navigate using the Account hub pages
</td>
<td>![checkmark](_img/checkmark.png)</td>
<td>![checkmark](_img/checkmark.png)</td>
<td>![checkmark](_img/checkmark.png)</td>
<td>![checkmark](_img/checkmark.png)</td>
<td>![checkmark](_img/checkmark.png)</td>
</tr>


<tr>
<td align="left">Add and configure dashboards  
</td>
<td>  </td>
<td>  </td>
<td>With permissions set</td>
<td>![checkmark](_img/checkmark.png)</td>
<td>![checkmark](_img/checkmark.png)</td>
</tr>


</tbody>
</table>


## Related notes

- [Add users to a team project](../security/add-users-team-project.md)  
- [Permissions and groups reference](permissions.md)  
- [Manage users and access](../accounts/add-account-users-assign-access-levels.md) (VSTS) 
- [Change access levels](change-access-levels.md) 
- [Account management (VSTS) guide](../accounts/index.md)  



<!---
##Git repository  

<table>
<tbody valign="top">

<tr>
<th>Task</th>
<th>Readers</th>
<th>Contributors</th>
<th>Project Admins</th>
<th>Build Admins</th>
<th>Account Owner/Collection Admins</th>
</tr>

<tr>
<td>**Administer**: Rename and delete a repository. At top-level Git repository, can add repositories. At the branch level, can lock, unlock, and set permissions for the branch.</td>
<td>  </td>
<td>  </td>
<td>![checkmark](_img/checkmark.png)</td>
<td>   </td>
<td>![checkmark](_img/checkmark.png)</td>
</tr>



<tr>
<td>**Branch creation**: Create and publish branches in a repo. Users are automatically granted Administer, Contribute, and Force permissions for any branch they create.  </td>
<td> </td>
<td>![check mark](_img/checkmark.png)</td>
<td>![check mark](_img/checkmark.png)</td>
<td> </td>
<td>![check mark](_img/checkmark.png)</td>
</tr>

<tr>
<td>**Contribute**: Repo level: can push their changes to branches in the repository. Branch level: can push their changes to the branch and lock the branch.</td>
<td> </td>
<td> </td>
<td>![check mark](_img/checkmark.png)</td>
<td> </td>
<td>![check mark](_img/checkmark.png)</td>
</tr>

<tr>
<td>**Note management**: Can push and edit Git notes to a repository. Can remove notes from items if they have the Force permission.</td>
<td> </td>
<td>![check mark](_img/checkmark.png)</td>
<td>![check mark](_img/checkmark.png)</td>
<td> </td>
<td>![check mark](_img/checkmark.png)</td>
</tr>

<tr>
<td>**Read**: Can clone, fetch, pull, and explore the contents of a repository.</td>
<td>![check mark](_img/checkmark.png)</td>
<td>![check mark](_img/checkmark.png)</td>
<td>![check mark](_img/checkmark.png)</td>
<td>![check mark](_img/checkmark.png)</td>
<td>![check mark](_img/checkmark.png)</td>
</tr>

<tr>
<td>**Rewrite and destroy history (force push)**: Can force an update to a branch, delete a branch, and modify the commit history of a branch. A force update can overwrite commits added from any user.   </td>
<td> </td>
<td> </td>
<td> </td>
<td> </td>
<td> </td>
</tr>

<tr>
<td>**Tag creation**: Can push tags to a repository. Can edit or remove tags if they have the Force permission.</td>
<td> </td>
<td>![check mark](_img/checkmark.png)</td>
<td>![check mark](_img/checkmark.png)</td>
<td> </td>
<td>![check mark](_img/checkmark.png)</td>

</tr>


</tbody>
</table>

##Work tracking    



<table>
<tbody valign="top">

<tr>
<th>Task</th>
<th>Readers</th>
<th>Contributors</th>
<th>Project Admins</th>
<th>Build Admins</th>
<th>Account Owner/Collection Admins</th>
</tr>

<tr>
<td>**Create tag definition**: Can add tags through a work item form.</td>
<td>  </td>
<td>![checkmark](_img/checkmark.png)</td>
<td>![checkmark](_img/checkmark.png)</td>
<td>   </td>
<td>![checkmark](_img/checkmark.png)</td>
</tr>



<tr>
<td>**Delete work items in this project**: Can mark work items in this project as deleted. </td>
<td> </td>
<td>  </td>
<td>![check mark](_img/checkmark.png)</td>
<td>![check mark](_img/checkmark.png)</td>
<td>![check mark](_img/checkmark.png)</td>
</tr>

<tr>
<td>**Edit work items under a node**: Can edit work items under a specific area node.</td>
<td> </td>
<td>![check mark](_img/checkmark.png)</td>
<td>![check mark](_img/checkmark.png)</td>
<td> </td>
<td>![check mark](_img/checkmark.png)</td>
</tr>

<tr>
<td>**Create and modify areas and iterations**: Define the area and iteration paths available for all teams within a project.</td>
<td> </td>
<td> </td>
<td>![check mark](_img/checkmark.png)</td>
<td> </td>
<td>![check mark](_img/checkmark.png)</td>
</tr>

<tr>
<td>**Move work items out of this project**: Can move a work item from one team project to another team project within the collection.</td>
<td> </td>
<td>![check mark](_img/checkmark.png)</td>
<td>![check mark](_img/checkmark.png)</td>
<td> </td>
<td>![check mark](_img/checkmark.png)</td>
</tr>

<tr>
<td>**Permanently delete work items in this project**: Can permanently delete work items and test artifacts from the team project.</td>
<td>![check mark](_img/checkmark.png)</td>
<td>![check mark](_img/checkmark.png)</td>
<td>![check mark](_img/checkmark.png)</td>
<td>![check mark](_img/checkmark.png)</td>
<td>![check mark](_img/checkmark.png)</td>
</tr>


<tr>
<td>**View work items in this node**: Can view, but not change, work items in this area node.</td>
<td> </td>
<td>![check mark](_img/checkmark.png)</td>
<td>![check mark](_img/checkmark.png)</td>
<td> </td>
<td>![check mark](_img/checkmark.png)</td>
</tr>



</tbody>
</table>

-->
