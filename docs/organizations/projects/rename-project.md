---
title: Rename a project - Azure DevOps
titleSuffix: Azure DevOps
ms.custom: seodec18, contperf-fy21q3
description: Learn how to rename your project, including tasks you need to complete to work with the renamed project.
ms.technology: devops-accounts
ms.assetid: 23729f9a-9947-4fc1-89b0-07e3b52298ac
toc: show
ms.topic: conceptual
ms.author: chcomley
author: chcomley
monikerRange: '>= tfs-2015'
ms.date: 03/03/2021
---

# Rename a project in Azure DevOps

[!INCLUDE [temp](../../includes/version-ts-tfs-2015-2016.md)]

Learn how to rename a project. When you rename a project, it updates the project name in the following areas:
- version control paths
- work items
- queries
- other project artifacts 

Projects can be renamed multiple times and older names can be reused. 
Post rename, there may be some [required team member actions](#required-user-actions-for-working-with-the-renamed-project).

> [!WARNING]
> Renaming a project sends email notifications to everyone in the project, if there are less than 1,000 users. If there are greater than 1,000 users in your project, only project collection administrators receive email notifications.

## Prerequisites

::: moniker range="azure-devops" 

You must be a member of the Project Collection Administrators group. When you're the Organization Owner, you're automatically added to the Project Collection Administrators group. If you aren't a member, get added now. For more information, see [Set permissions at the project- or collection-level](../security/set-project-collection-level-permissions.md).

::: moniker-end

::: moniker range=">= tfs-2018 < azure-devops"  

You must be a member of the Project Collection Administrators group. If you aren't a member, get added now. For more information, see [Set permissions at the project- or collection-level](../security/set-project-collection-level-permissions.md).

::: moniker-end  

::: moniker range="> tfs-2015 <= tfs-2017"

You must be a member of the Project Collection Administrators group. If you aren't a member, get added now. For more information, see [Set permissions at the project- or collection-level](../security/set-project-collection-level-permissions.md).

::: moniker-end

::: moniker range=" tfs-2015"  

 You must have the **Edit project-level information** permission on a project to rename it.

::: moniker-end

## Rename a project

::: moniker range=">= azure-devops-2019"

1. Sign in to your organization (```https://dev.azure.com/{yourorganization}```), and then open the project that you want to rename.

2. Select **Project settings** > **Overview**, and then enter a new name and select **Save**. 

   ![Enter a new name, and then select Save to rename your project](media/rename-project/rename-project-azure-devops.png)

3. To confirm the rename, enter the new project name, check the box next to, "I understand the consequences of renaming this project," and then select **Save**.

   ![Enter new project name, check the box, and then save](media/rename-project/rename-project-confirm.png)

	Your project is renamed.

::: moniker-end  

::: moniker range=">= tfs-2017 <= tfs-2018"

1. Sign in to your organization.
2. From the Projects page, choose :::image type="icon" source="../../media/icons/actions-icon.png" border="false"::: **actions** for the project that you want to rename, and then choose **Rename**.

	> [!div class="mx-imgBorder"]  
	> ![Choose Rename.](media/rename-project/choose-rename-menu-option.png)

3. Edit the name. 

	> [!div class="mx-imgBorder"]  
	> ![Enter a new project name](media/rename-project/rename-project-dialog.png)
	
	If the Rename Project dialog doesn't appear, then you're not a member of the Project Administrators group for that particular project. Learn how to [get added](../security/set-project-collection-level-permissions.md) to the Project Administrators group.

::: moniker-end  

::: moniker range="tfs-2015"

1. Sign in to your organization.
2. From the **Overview** tab, open :::image type="icon" source="../../media/icons/context-menu.png" border="false"::: **menu** for the project that you want to rename, and then choose **Rename**.

	![Choose Rename.](media/rename-project/collection-rename.png)

3. Edit the name. 

	> [!div class="mx-imgBorder"]  
	> ![Enter a new project name](media/rename-project/rename-project-dialog.png)
	
	If the Rename Project dialog doesn't appear, then you're not a member of the Project Administrators group for that particular project. Learn how to [get added](../security/set-project-collection-level-permissions.md) to the Project Administrators group.

::: moniker-end


<a id="more-work"></a>

## Required user actions for working with the renamed project

Each user within your team must restart their clients and do other actions based on the features they use. 

<a id="restarting-clients"></a>

### Restart your clients

Opened clients keep a cache of all project names in memory, but this cache isn't automatically cleared after a project is renamed. To clear the cache, restart your client so it populates the new project name. If you don't restart the client, then operations that use the cached project name fail with a project not found exception.

For the following clients, save your work in each and then restart:

- Visual Studio/Team Explorer

- Eclipse, if your team uses the Team Explorer Everywhere plugin

- Microsoft Excel, PowerPoint, or Project, if your team uses the Team Foundation Server Extension for these Office products
 
- Any more clients that use the .NET Team Foundation Server Client Object Model

<a id="git"></a>

### Update your Git remotes

If your project uses Git, then your remote references for each repository from the renamed project must be updated. These updates are necessary because the remote repository URL contains the project and the repository name. Git uses remote references to fetch and push changes between your local repository and the remote version that's stored on the server. Each member of your team must update their local Git repositories to continue connecting from their dev machines. 

For more information about updating your Git remotes, see [Update the Git remotes on your dev machines](../../repos/git/repo-rename.md#update-the-git-remotes-on-your-dev-machines).

<a id="tfvc-server"></a>

### Update your TFVC server workspaces

If your project uses TFVC with [server workspaces](../../repos/tfvc/decide-between-using-local-server-workspace.md), these workspaces must be updated with the new project name.
For the following clients, execute a get or check-in and then the workspace mapping gets corrected to use the new project name:

- Visual Studio 2015 (RC or newer)  
- Visual Studio 2013  
- Visual Studio 2012  
- Visual Studio 2010 (Only supports server workspaces)  
- Team Explorer Everywhere (2012 or later versions)  

![Source control explorer, get latest version](media/rename-project/tfvc-get.png)

<a id="tfvc-local"></a>

### Update your TFVC local workspaces

If your team uses TFVC with [local workspaces](../../repos/tfvc/decide-between-using-local-server-workspace.md), these workspaces need to be updated with the new project name.
For the following clients, execute a get or check-in and the workspace mapping is corrected to use the new project name:

- Visual Studio 2015 (RC or later versions)  
- Visual Studio 2012 with [Update 5](https://go.microsoft.com/fwlink/?LinkId=615776) (RC or later versions)  
- Team Foundation Server plugin [Team Explorer Everywhere 2015](https://go.microsoft.com/fwlink/?LinkID=617042)

We recommend you update your clients to the latest update or release, if possible. For all other supported Visual Studio versions, you must create a new local workspace mapped to the new project name. Two exceptions include Visual Studio 2010, which only supports server workspaces, and Team Foundation Server plugin for Eclipse. 

1.  [Shelve your changes](../../repos/tfvc/suspend-your-work-manage-your-shelvesets.md).

2.  [Create a new workspace](../../repos/tfvc/create-work-workspaces.md) mapped to the new project name.

3.  Unshelve your changes.

Local workspaces get managed locally and not on the server. Older clients without the updated rename logic can't update local workspaces to the new project name. 
 
::: moniker range=">= tfs-2015 <= tfs-2018"

<a id="tfs-onprem"></a>

## Update your Team Foundation Server SharePoint and Reporting Integrations (on-premises)

Both SharePoint and Reporting Services integrations continue to work, but some reports don't work as expected until the new project name gets populated.
The old project name is still present until caches are updated with the new name. 
The reporting and SharePoint server administrator can manually run these jobs to immediately populate the new name.

- If your team uses reports, they reflect the new names after the next incremental analysis job runs for the data warehouse. By default the job runs every two hours. But, you can [manually run the warehouse jobs and incremental analysis job](../../report/admin/manually-process-data-warehouse-and-cube.md). Then, the new name gets synced to warehouse and reports start using the new name. Reports don't work as expected until the jobs have run.

- If your team uses SharePoint Integration and has custom queries or web parts that directly reference the project name,
  update the name in each to the new project name. You don't need to update default queries and web parts, as they continue to work.
  Use of <em>@project</em> also continues to work after a project rename and also don't need updating.

- Excel reports and Excel web parts on MOSS don't show the right data until you execute the following.

  1. Warehouse job - [Run the warehouse jobs](../../report/admin/manually-process-data-warehouse-and-cube.md)
     so that Excel reports contain the correct data.
     If the new project name isn't synced to the warehouse,
     Excel reports don't show the correct data.
     To avoid this outcome, manually run warehouse jobs.
  2. SharePoint timer job - Run the "Team Foundation Server Dashboard Update" job
     from the SharePoint central admin to update Excel web parts on the dashboard.
     By default, it runs every 30 minutes.
     Until this job runs, the Excel web parts on the dashboard
     and the reports coming directly from the reporting folder
     won't work. Those web parts use either the wrong project name or the wrong reporting folder.
  3. SharePoint cache - Manually clear the SharePoint cache to avoid stale data,
     such as report folder locations, appearing in the dashboards.
     By default, this cache clears about every hour.
     You can also clear some TFS-specific cache using the TFS redirect url
     and providing a "clearcache" parameter. For example:

     ```
     http://<SharePointServer>/sites/<TeamProjectCollectionName>/<TeamProjectName>/_layouts/TfsRedirect.aspx?tf:type=Report&tf:clearcache=1
     ```

::: moniker-end

## Results of the rename operation

* Work item IDs are unique in the organization. The URL continues to work for both the new team name and the old team name. This functionality is intended, to avoid breaking links.
* As long as the project in the URL is a valid project in the organization, we show the work item ID provided. The following example shows an organization with projects named "Example1" and "Example2". 
   
   `https://dev.azure.com/MyOrg/Example1/_workitems/edit/40/` - Displays work item 40
   `https://dev.azure.com/MyOrg/Example2/_workitems/edit/40/` - Displays work item 40
   `https://dev.azure.com/MyOrg/Potato/_workitems/edit/40/` - Displays a 404 error

* Work item links don't expire.
* The old project name can be used again.

## Related articles

- [FAQs for renaming a project](faq-rename-project.yml)
- [Git and Azure Repos](../../repos/git/index.yml)
- [Team Foundation version control](../../repos/tfvc/index.yml)
- [Go to Visual Studio Team Explorer](../../user-guide/work-team-explorer.md)
- [Git experience in Visual Studio](/visualstudio/ide/git-with-visual-studio)
