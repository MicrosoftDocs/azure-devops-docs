---
title: Rename a team project in VSTS or TFS
description: You can rename your team project in VSTS or TFS, and then there are some things you need to do to work with the renamed team project.
ms.prod: devops
ms.technology: devops-accounts
ms.assetid: 23729f9a-9947-4fc1-89b0-07e3b52298ac
toc: show
ms.topic: conceptual
ms.manager: douge
ms.author: chcomley
author: chcomley
ms.date: 10/05/2017
monikerRange: '>= tfs-2015'
---
# Rename a team project

**VSTS | TFS 2018 | TFS 2017 | TFS 2015**

A team project rename updates all of your version control paths, work items, queries, and other team project artifacts to reflect the new name. 
Team projects can be renamed multiple times and older names can be reused as well. 
Post rename, there might be some [actions](#more-work) required from team members. We recommend performing this action during off-hours to minimize any impact.

## Perform a team project rename

### From the team project administration page

You can change the name of a team project from its administration overview page.

1. Open the administration overview page by choosing the ![Settings Icon (TFS Web Portal)](_img/rename-team-project/gearicon.png) gear icon in the top right.

2. Edit the name. 

	![Enter a new project name](_img/rename-team-project/projectrename1.png)
	
	If you don't see the textbox appear, then you're not a member of the Project Administrators group for that particular project. Learn how to [get added](../security/set-project-collection-level-permissions.md) to the Project Administrators group.

### From the project collection administration page

You can also change the name of a team project from the project collection administration page.

1. From your account's home page, use the ![Settings Icon (TFS Web Portal)](_img/rename-team-project/gearicon.png) gear icon to open the control panel and then go to the project collection administration page.

2. Rename the team project from its context menu.

	![Rename menu item in the team project context menu on the project collection administration page](_img/rename-team-project/collection-rename.png)

	If the rename action is disabled, then you're not a member of the Project Administrators group for that particular project. Learn how to [get added](../security/set-project-collection-level-permissions.md) to the Project Administrators group.


<a id="more-work"></a>
## Let your team know what they have to do

Now that you've renamed your team project,
your team must restart their clients and perform additional actions based on the features they use. 

<a id="restarting-clients"></a>
### Restart your clients
Opened clients keep a cache of all team project names in memory and this cache isn't automatically cleared after a team project is renamed. 
To clear the cache, all that is necessary is to restart the client so it populates the new team project name.
If you don't restart the client, then operations that use the cached team project name will
fail with a project not found exception.

For the following clients, save your work in each and restart:

- Visual Studio/Team Explorer

- Eclipse, if your team uses the Team Foundation Server plugin (Team Explorer Everywhere)

- Microsoft Excel, PowerPoint, or Project, if your team uses the Team Foundation Server Extension for these Office products
 
- Any additional clients which use the .NET Team Foundation Server Client Object Model

<a id="git"></a>
### Update your Git remotes
If your team project uses Git, then your remote references for each repository from the renamed team project need to be updated. This is due to the fact that the remote repository URL contains the team project and the repository name. Git uses remote references to fetch and push changes between your local copy of a repository and the remote version stored on the server. Each member of your team must update their local Git repos to continue connecting from their dev machines to the repo in the team project. 

<a name="copy_remote_repo_url"></a>
#### Get the new URL for the repo

Copy the repository URL to your clipboard.

![Git code explorer tab](_img/rename-team-project/team-project-git-tabs.png)

![Remote URL for the repository](_img/rename-team-project/cloneurl.png)

#### Update your remote in Visual Studio 2015

1. Connect to the repo.

 ![Connect to the repository](_img/rename-team-project/repoconnect.png)
 
2. Open the project settings.
 
 ![Project settings](_img/rename-team-project/projectsettings.png)

3. Open the repo settings.

 ![Repository settings](_img/rename-team-project/reposettings.png)

4. Edit the fetch and push remote references and paste the URL that you [copied from the remote repo](#copy_remote_repo_url).

 ![Edit remote](_img/rename-team-project/editreposettings.png)

#### Update your remote in older versions of Visual Studio from the command prompt

If you use an older version of Visual Studio or work with Git from the command prompt:

1. Open the Git command prompt.

2. Go to the local repository and update the remote to the URL you [copied from the remote repo](#copy_remote_repo_url).

    ```
	git remote set-url origin {URL_you_copied_from_the_remote_repo}
	```

#### Refresh Team Explorer

1. Refresh Team Explorer.

 ![Refresh Team Explorer](_img/rename-team-project/refreshteamexplorer.png)

2. Team Explorer now shows the updated repo name. 

 ![Team Explorer Updated](_img/rename-team-project/result.png)


<a id="tfvc-server"></a>
### Update your TFVC server workspaces
If your team project uses TFVC with [server workspaces](../tfvc/decide-between-using-local-server-workspace.md), these workspaces will need to be updated with the new project name. 
For the following clients, execute a get or check-in and the workspace mapping will be corrected to use the new team project name:

- Visual Studio 2015 (RC or newer)

- Visual Studio 2013

- Visual Studio 2012

- Visual Studio 2010 (Only supports server workspaces)

- Team Explorer Everywhere (2012 or newer)

![Source control explorer, get latest version](_img/rename-team-project/tfvc-get.png)

<a id="tfvc-local"></a>
### Update your TFVC local workspaces
If your team uses TFVC with [local workspaces](../tfvc/decide-between-using-local-server-workspace.md), these workspaces will need to be updated with the new project name.
For the following clients, execute a get or check-in and the workspace mapping will be corrected to use the new team project name:

- Visual Studio 2015 (RC or newer)

- Visual Studio 2012 with [Update 5](http://go.microsoft.com/fwlink/?LinkId=615776) (RC or newer)

- Team Foundation Server plugin [Team Explorer Everywhere 2015](http://go.microsoft.com/fwlink/?LinkID=617042)

We recommend that you update your clients to the latest update or release, if possible. For all other supported Visual Studio versions, 
except for Visual Studio 2010 which only supports server workspaces, 
and Team Foundation Server plugin for Eclipse, 
you must create a new local workspace mapped to the new team project name.

1.  [Shelve your changes](https://msdn.microsoft.com/library/ms181404).

2.  [Create a new workspace](https://msdn.microsoft.com/library/ms181383.aspx) mapped to the new team project name.

3.  Unshelve your changes.

Since local workspaces are managed locally and not on the server, older clients without the updated rename logic are unable to update local workspaces to the new team project name on the next get or check-in. 
 
<a id="tfs-onprem"></a>
### Update your Team Foundation Server SharePoint and Reporting Integrations (on-premises)
Both SharePoint and Reporting Services integrations continue to work, but some reports will not work as expected until the new team project name is populated.
The old project name is still present until caches are updated with the new name. 
The reporting and SharePoint server administrator can manually run these jobs to immediately populate the new name. 

- If your team uses reports, they will reflect the new names after the next incremental analysis job runs for the data warehouse.
By default it runs every two hours.
To expedite the process,
[manually run the warehouse jobs and incremental analysis job](../report/admin/manually-process-data-warehouse-and-cube.md)
so the new name gets synced to warehouse and reports start using the new name.
Reports will not work as expected until the jobs have run.

- If your team uses SharePoint Integration and has custom queries or web parts which directly reference the team project name,
 update the name in each to the new team project name. All default queries and web parts do not need to be updated and will continue to work. 
 Uses of *@project* will also continue to work after a team project rename and also don't need to be updated. 

- Excel reports and Excel web parts on MOSS will not show the right data until you execute the following.
	1. Warehouse job - [Run the warehouse jobs](../report/admin/manually-process-data-warehouse-and-cube.md)
	so that Excel reports contain the correct data.
	If the new project name is not synced to the warehouse,
	Excel reports will not show the correct data.
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

