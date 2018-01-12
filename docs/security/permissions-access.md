---
title: Default permissions and access quick reference for VSTS & TFS 
description: Simplified views of permissions and access levels for common user tasks for Visual Studio Team Services and Team Foundation Server 
ms.prod: vs-devops-alm
ms.technology: vs-devops-admin
ms.assetid: B656A277-BA3D-472D-824D-CDD4E067053E
toc: show
ms.manager: douge
ms.author: kaelli
ms.topic: get-started-article
ms.date: 01/11/2018
---


# Default permissions and access for VSTS and TFS 

[!INCLUDE [temp](../_shared/version-vsts-tfs-all-versions.md)]

To connect and use the functions and features that VSTS and TFS provides, users must be added to a group with the appropriate permissions. The most common built-in groups include Readers, Contributors, and Project Administrators. These groups are assigned the default permissions as listed below. 

In addition to permissions, access to select features are controlled by the access level assigned to a user. Contributors and administrators should be added to Basic (paid) access. Stakeholder access is available to support free access to a limited set of features by an unlimited set of stakeholders. 

For a complete reference of all built-in groups and permissions, see [Permissions and groups](permissions.md). For information about assigning access levels and supporting stakeholder access, see [Manage users and access](../accounts/add-account-users-assign-access-levels.md) for VSTS, and [Change access levels](change-access-levels.md) for TFS. 


## Code: Git and TFVC  

You can connect to your code from the Code hub or the web portal, and using Xcode, Eclipse, IntelliJ, Android Studio, Visual Studio, Visual Studio Code. For an overview of code features and functions, see [Git](../git/overview.md) and [Use Team Foundation Version Control (TFVC)](../tfvc/overview.md). Stakeholders have no access to the Code hub or its features.

From the team project admin content for Version Control, you can [set permissions on a repository](set-git-tfvc-repository-permissions.md). From the **Code>Branches** page, you can [set permissions for a specific branch and set branch policies](../git/branch-permissions.md). 

### Git
[!INCLUDE [temp](_shared/code-git.md)]

### TFVC 
[!INCLUDE [temp](_shared/code-tfvc.md)]



## Build and release


You can define and manage your builds and releases from the web portal, **Build and Release** hub. For an overview of build and release management features and functions, see [Continuous integration on any platform](../build-release/overview.md).

From the **Build and Release>Builds** and **Releases** pages, you can set permissions for all or each build definition or release definition, respectively. 


[!INCLUDE [temp](_shared/build-release.md)]


## Agile tools and work tracking

You can connect to work items from the **Work** hub of the web portal and using Eclipse, Visual Studio, Excel, Project, and other clients. For an overview of work tracking features and functions, see [About Agile tools](../work/backlogs/overview.md). Stakeholders have limited access to select work tracking functions as described in [Work as a stakeholder](../security/get-started-stakeholder.md).  

In addition to the permissions set at the [project level via the built-in groups](set-project-collection-level-permissions.md), you can set permissions for the following objects: [area and iteration paths](../security/set-permissions-access-work-tracking.md), [queries and query folders](../work/track/set-query-permissions.md), and [delivery plans](set-permissions-access-work-tracking.md#plan-permissions).  

The team administrator role supports configuration of team settings. To be added as a team administrator, see [Configure team settings and add team administrators](../work/scale/add-team-administrator.md). 

>[!NOTE]  
>There are no UI permissions associated with [managing tags](../work/track/add-tags-to-work-items.md). Instead, you can manage them using the [TFSSecurity command line tool](../tfs-server/command-line/tfssecurity-cmd.md#collection-level-permissions).   


[!INCLUDE [temp](_shared/work.md)]



## Test

You can define and manage manual tests from the web portal, **Test** hub. For an overview of manual test features and functions, see [Testing overview](../manual-test/index.md).  

You set [test permissions at the team project level](set-project-collection-level-permissions.md) from the admin context Security page.  

[!INCLUDE [temp](_shared/test.md)]

## Charts, dashboards, and other web portal features 

You can define and manage dashboards from the web portal, **Dashboard** hub. For an overview of dashboard and chart features, see [Dashboards](../report/overview.md). 

You set [dashboard permissions at the team level](../report/dashboard-permissions.md) from the team dashboard page. 


[!INCLUDE [temp](_shared/report.md)]

## Notifications, alerts, and team collaboration tools 

To manage notifications, see [Manage personal notifications](../notifications/manage-personal-notifications.md) and [Manage team notifications](../collaborate/manage-team-notifications.md).

>[!NOTE]  
>There are no UI permissions associated with managing notifications. Instead, you can manage them using the [TFSSecurity command line tool](../tfs-server/command-line/tfssecurity-cmd.md#collection-level-permissions).

[!INCLUDE [temp](_shared/collaborate.md)]

 




## Related notes

- [Add users to a team project](../security/add-users-team-project.md)  
- [Permissions and groups reference](permissions.md)  
- [Manage users and access](../accounts/add-account-users-assign-access-levels.md) (VSTS) 
- [About access levels](access-levels.md)
- [Work in the web portal](../user-guide/work-web-portal.md) 

 
<!---

## Git repository  

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
