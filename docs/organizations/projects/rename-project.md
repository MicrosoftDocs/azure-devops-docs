---
title: Rename a project - Azure DevOps
titleSuffix: Azure DevOps
ms.custom: seodec18
description: Learn how to rename your project, including tasks you need to complete to work with the renamed project.
ms.prod: devops
ms.technology: devops-accounts
ms.assetid: 23729f9a-9947-4fc1-89b0-07e3b52298ac
toc: show
ms.topic: conceptual
ms.manager: jillfra
ms.author: chcomley
author: chcomley
monikerRange: '>= tfs-2015'
ms.date: 12/19/2018
---

# Rename a project in Azure DevOps

[!INCLUDE [temp](../../_shared/version-ts-tfs-2015-2016.md)]

A project rename updates all of your version control paths, work items, queries, and other project artifacts to reflect the new name. 
Projects can be renamed multiple times and older names can be reused as well. 
Post rename, there might be some [actions](#more-work) required from team members. We recommend performing this action during off-hours to minimize any impact.

[!INCLUDE [temp](../../_shared/open-admin-organization-settings.md)] 

## Choose to rename a project

::: moniker range=">= tfs-2017"

1. From the Projects page, open the ![](../../_img/icons/actions-icon.png) actions icon menu for the project that you want to rename and choose **Rename**.

	> [!div class="mx-imgBorder"]  
	> ![Enter a new project name](_img/rename-project/choose-rename-menu-option.png)

0. Edit the name. 

	> [!div class="mx-imgBorder"]  
	> ![Enter a new project name](_img/rename-project/rename-project-dialog.png)
	
	If the Rename Project dialog doesn't appear, then you're not a member of the Project Administrators group for that particular project. Learn how to [get added](../security/set-project-collection-level-permissions.md) to the Project Administrators group.

::: moniker-end  

::: moniker range="tfs-2015"

0. From the **Overview** tab, open the ![](../../_img/icons/context-menu.png) context icon menu for the project that you want to rename and choose **Rename**.

	![Enter a new project name](_img/rename-project/collection-rename.png)

2. Edit the name. 

	> [!div class="mx-imgBorder"]  
	> ![Enter a new project name](_img/rename-project/rename-project-dialog.png)
	
	If the Rename Project dialog doesn't appear, then you're not a member of the Project Administrators group for that particular project. Learn how to [get added](../security/set-project-collection-level-permissions.md) to the Project Administrators group.

::: moniker-end


<a id="more-work"></a>

## Let your team know what they have to do

Now that you've renamed your project,
your team must restart their clients and perform additional actions based on the features they use. 

<a id="restarting-clients"></a>

### Restart your clients

Opened clients keep a cache of all project names in memory and this cache isn't automatically cleared after a project is renamed.
To clear the cache, all that is necessary is to restart the client so it populates the new project name.
If you don't restart the client, then operations that use the cached project name fails with a project not found exception.

For the following clients, save your work in each and restart:

- Visual Studio/Team Explorer

- Eclipse, if your team uses the Team Foundation Server plugin (Team Explorer Everywhere)

- Microsoft Excel, PowerPoint, or Project, if your team uses the Team Foundation Server Extension for these Office products
 
- Any additional clients which use the .NET Team Foundation Server Client Object Model

<a id="git"></a>

### Update your Git remotes

If your project uses Git, then your remote references for each repository from the renamed project need to be updated. This is due to the fact that the remote repository URL contains the project and the repository name. Git uses remote references to fetch and push changes between your local copy of a repository and the remote version stored on the server. Each member of your team must update their local Git repos to continue connecting from their dev machines to the repo in the project.

<a name="copy_remote_repo_url"></a>

#### Get the new URL for the repo

Copy the repository URL to your clipboard.

![Git code explorer tab](_img/rename-project/team-project-git-tabs.png)

![Remote URL for the repository](_img/rename-project/cloneurl.png)

#### Update your remote in Visual Studio 2015

1. Connect to the repo.
	
	 ![Connect to the repository](_img/rename-project/repoconnect.png)
 
2. Open the project settings.
	 
	 ![Project settings](_img/rename-project/projectsettings.png)

3. Open the repo settings.
	
	 ![Repository settings](_img/rename-project/reposettings.png)

4. Edit the fetch and push remote references and paste the URL that you [copied from the remote repo](#copy_remote_repo_url).

	![Edit remote](_img/rename-project/editreposettings.png)

#### Update your remote in older versions of Visual Studio from the command prompt

If you use an older version of Visual Studio or work with Git from the command prompt:

1. Open the Git command prompt.

2. Go to the local repository and update the remote to the URL you [copied from the remote repo](#copy_remote_repo_url).

    ```
	git remote set-url origin {URL_you_copied_from_the_remote_repo}
	```

#### Refresh Team Explorer

1. Refresh Team Explorer.

 ![Refresh Team Explorer](_img/rename-project/refreshteamexplorer.png)

2. Team Explorer now shows the updated repo name.

 ![Team Explorer Updated](_img/rename-project/result.png)


<a id="tfvc-server"></a>

### Update your TFVC server workspaces

If your project uses TFVC with [server workspaces](../../repos/tfvc/decide-between-using-local-server-workspace.md), these workspaces need to be updated with the new project name.
For the following clients, execute a get or check-in and the workspace mapping is corrected to use the new project name:

- Visual Studio 2015 (RC or newer)  
- Visual Studio 2013  
- Visual Studio 2012  
- Visual Studio 2010 (Only supports server workspaces)  
- Team Explorer Everywhere (2012 or later versions)  

![Source control explorer, get latest version](_img/rename-project/tfvc-get.png)

<a id="tfvc-local"></a>

### Update your TFVC local workspaces

If your team uses TFVC with [local workspaces](../../repos/tfvc/decide-between-using-local-server-workspace.md), these workspaces need to be updated with the new project name.
For the following clients, execute a get or check-in and the workspace mapping is corrected to use the new project name:

- Visual Studio 2015 (RC or later versions)  
- Visual Studio 2012 with [Update 5](http://go.microsoft.com/fwlink/?LinkId=615776) (RC or later versions)  
- Team Foundation Server plugin [Team Explorer Everywhere 2015](http://go.microsoft.com/fwlink/?LinkID=617042)

We recommend that you update your clients to the latest update or release, if possible. For all other supported Visual Studio versions, 
except for Visual Studio 2010 which only supports server workspaces,
and Team Foundation Server plugin for Eclipse, 
you must create a new local workspace mapped to the new project name.

1.  [Shelve your changes](../../repos/tfvc/suspend-your-work-manage-your-shelvesets.md).

2.  [Create a new workspace](../../repos/tfvc/create-work-workspaces.md) mapped to the new project name.

3.  Unshelve your changes.

Since local workspaces are managed locally and not on the server, older clients without the updated rename logic are unable to update local workspaces to the new project name on the next get or check-in. 
 
::: moniker range=">= tfs-2015 <= tfs-2018"

<a id="tfs-onprem"></a>

## Update your Team Foundation Server SharePoint and Reporting Integrations (on-premises)

Both SharePoint and Reporting Services integrations continue to work, but some reports don't work as expected until the new project name is populated.
The old project name is still present until caches are updated with the new name. 
The reporting and SharePoint server administrator can manually run these jobs to immediately populate the new name.

- If your team uses reports, they reflect the new names after the next incremental analysis job runs for the data warehouse. By default it runs every two hours. To expedite the process,[manually run the warehouse jobs and incremental analysis job](../../report/admin/manually-process-data-warehouse-and-cube.md), so the new name is synced to warehouse and reports start using the new name. Reports don't work as expected until the jobs have run.

- If your team uses SharePoint Integration and has custom queries or web parts which directly reference the project name,
 update the name in each to the new project name. All default queries and web parts don't need to be updated and continue to work.
 Use of *@project* also continues to work after a project rename and also don't need to be updated.

- Excel reports and Excel web parts on MOSS don't show the right data until you execute the following.
	1. Warehouse job - [Run the warehouse jobs](../../report/admin/manually-process-data-warehouse-and-cube.md)
	so that Excel reports contain the correct data.
	If the new project name is not synced to the warehouse,
	Excel reports don't show the correct data.
	To avoid this, manually run warehouse jobs.
	2. SharePoint timer job - Run the "Team Foundation Server Dashboard Update" job
	from the SharePoint central admin to update Excel web parts on the dashboard.
	By default, it runs every 30 minutes.
	Until this job runs, the Excel web parts on the dashboard
	and the web parts that show reports directly from the reporting folder
	won't work because they'll use either the wrong project name or the wrong reporting folder.
	3. SharePoint cache - Manually clear the SharePoint cache to avoid stale data,
	such as report folder locations, appearing in the dashboards.
	By default, this cache clears about every hour.
	You can also clear some TFS specific cache using the tfs redirect url
	and providing a "clearcache" parameter. For example:

	```
	http://<SharePointServer>/sites/<TeamProjectCollectionName>/<TeamProjectName>/_layouts/TfsRedirect.aspx?tf:type=Report&tf:clearcache=1
	```

::: moniker-end