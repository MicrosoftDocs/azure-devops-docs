---
title: Set query permissions
titleSuffix: VSTS & TFS
description: How to set permissions on work item queries and folders when working in Visual Studio Team Services & Team Foundation Server  
ms.technology: devops-agile
ms.prod: devops
ms.assetid: 682f0eb0-462d-41e2-b6a2-41949d1b90fb  
ms.manager: douge
ms.author: kaelliauthor: KathrynEE
ms.topic: conceptual
ms.date: 11/07/2017
---


# Set permissions on queries and query folders

[!INCLUDE [temp](../_shared/version-vsts-tfs-all-versions.md)]


As with most team project objects, you can control who has access by setting permissions. With queries, you can configure users and groups to create, delete, view, and manage permissions of shared queries and shared query folders. 

All users can create and edit their own queries and save them under My Queries.

By creating folders under Shared Queries, you can grant permissions to users for each folder. For example, if you have several teams contributing to a team project, then you might want to create a folder under Shared Queries for each team to manage their own set of shared queries.  

You set permissions from the web portal. By default, only members of the Project Collection Administrators group or Project Administrators group can create or edit a shared query and manage permissions. 

[!INCLUDE [temp](../_shared/image-differences.md)]

## Set permissions on a new query folder

1. If you're not a member of the project administrators group, [get added](../../security/set-project-collection-level-permissions.md), or have your **Edit project-level information** permission set to **Allow**.

2. Create a folder.  

	<img src="_img/set-query-perm-new-folder.png" alt="New query folder link on queries context menu" style="border: 1px solid #C3C3C3;" />  

3.  Open permissions for the folder you just created.

	<img src="_img/set-permissions-query-folder-security.png" alt="Permissions dialog for a query" style="border: 1px solid #C3C3C3;" />  

4.  Change the permissions so that the team member or group can contribute and manage permissions for the folder.  

	Here we add the Web team and grant them permissions to create and manage permissions to all queries and folders under the Triage folder.  

	<img src="_img/set-permissions-triage-folder-dialog.png" alt="Permissions dialog for a query" style="border: 1px solid #C3C3C3;" />    

    Use the **Add** menu to add a user identity or group.

    **Contribute** allows team members to create and edit queries and folders under the folder where the permissions were granted. And, **Manage Permissions** allows team members to manage the permission settings on queries and subfolders.

5.  (Optional) Turn inheritance off. Default is On. By turning inheritance off for a folder, you disallow inheritance of permissions that exist up the chain of query folders. To learn more, see [Permissions, Inheritance](../../security/about-permissions.md#inheritance).  

## Set permissions on shared query 

To keep anyone else from modifying a shared query that you create, you may want to set permissions on a specific query. You can do this by opening the permissions dialog for the specific query.  

0.  Open permissions for the query.

	<img src="_img/set-query-perm-security-menu-option.png" alt="Permissions dialog for a query" style="border: 1px solid #C3C3C3;" />  

4.  Change the permissions so that the team member or group can't edit, delete, or change permissions for the query.  

	Here we deny permissions for project admins.  

	<img src="_img/set-permissions-deny-for-query.png" alt="Permissions dialog for a query, set to deny" style="border: 1px solid #C3C3C3;" />  

## Related articles  

With queries, you can not only list work items, you can create status and trend charts and add them to dashboards. You can learn more about permissions and working with queries from these resources: 

- [Run and edit queries](using-queries.md)  
- [Dashboards](../../report/dashboards/dashboards.md)  
- [Add a chart to a dashboard](../../report/add-charts-to-dashboard.md)   
- [Permissions and access](../../security/permissions-access.md)  

### Q & A   
<!-- BEGINSECTION class="md-qanda" -->

#### Q: Can I change the owner of a query or folder?

**A:** No. This feature was removed for TFS 2015. You can only enable permissions for users and groups from the permissions window for the query or folder.

#### Q: Can I add folders to team favorites?

**A:** No. You can only add folders under My Queries and under Shared Queries.

#### Q: Are the queries and folders I create from the web portal the same as in Team Explorer?

**A:** Yes. You might have to refresh your browser or client to see changes you make in another client.

#### Q: Can I move a query or a folder?  

**A:** Yes. In the web portal, choose **Rename** from the context menu. In Team Explorer for Visual Studio, simply drag the folder to the new location.  

In Team Explorer for Eclipse, choose **Move** from the context menu and select the folder to which you want to move the item.

<!-- ENDSECTION --> 

