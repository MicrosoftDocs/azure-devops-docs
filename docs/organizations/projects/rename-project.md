---
title: Rename a project - Azure DevOps
titleSuffix: Azure DevOps
ms.custom: seodec18, contperf-fy21q3, content-perf-fy23q2, engagement-fy23
description: Learn how to rename your project, including tasks you need to complete to work with the renamed project.
ms.subservice: azure-devops-projects
ms.assetid: 23729f9a-9947-4fc1-89b0-07e3b52298ac
toc: show
ms.topic: conceptual
ms.author: chcomley
author: chcomley
monikerRange: '<= azure-devops'
ms.date: 12/16/2022
---

# Rename a project in Azure DevOps

[!INCLUDE [version-lt-eq-azure-devops](../../includes/version-lt-eq-azure-devops.md)]

When you rename a project, Azure DevOps updates the project name in the following areas:
- Version control paths
- Work items
- Queries
- Other project artifacts 

You can rename a single project multiple times and reuse older names. After you rename a project, there may be some [required team member actions](#required-user-actions-for-working-with-the-renamed-project).

> [!WARNING]
> When you rename a project, Azure DevOps sends email notifications to everyone in the project if there are less than 1,000 users. If there are greater than 1,000 users in your project, only Project Collection Administrators receive email notifications.

## Prerequisites

::: moniker range="azure-devops" 

- You must be a member of the **Project Administrators** group or have the project-level **Rename team project** permission set to **Allow**. For more information, see [Change project-level permissions](../security/change-project-level-permissions.md).

::: moniker-end

::: moniker range="< azure-devops"  

- You must be a member of the **Project Administrators** group or have the project-level **Rename team project** permission set to **Allow**. For more information, see [Change project-level permissions](../security/change-project-level-permissions.md).

::: moniker-end  

## Rename a project

::: moniker range=">= azure-devops-2019"

1. Sign in to your organization (```https://dev.azure.com/{Your_Organization}```), and then open the project that you want to rename.

2. Select **Project settings** > **Overview**, and then enter a new name and select **Save**. 

   ![Screenshot showing new name entry and highlighted save button.](media/rename-project/rename-project-azure-devops.png)

3. To confirm the rename, enter the new project name, check the box next to, "I understand the consequences of renaming this project," and then select **Save**.

   ![Screenshot showing new name confirmation screen with save button.](media/rename-project/rename-project-confirm.png)

::: moniker-end  

::: moniker range="tfs-2018"

1. Sign in to your organization.
2. From the Projects page, choose :::image type="icon" source="../../media/icons/actions-icon.png" border="false"::: **actions** for the project that you want to rename, and then choose **Rename**.

	> [!div class="mx-imgBorder"]  
	> ![Screenshot showing highlighted Rename selection.](media/rename-project/choose-rename-menu-option.png)

3. Edit the name. 

	> [!div class="mx-imgBorder"]  
	> ![Screenshot showing new project name entry and OK button.](media/rename-project/rename-project-dialog.png)
	
	If you can't find the **Rename project** option, then you're not a member of the **Project Administrators** group for that project. 

::: moniker-end  

### Results of the rename

The following results occur following the rename operation.

* Azure DevOps renames the project.
* All project members receive an email notification of the name change, if less than 1,000 members.
* The URL continues to work for both the new team name and the old team name. This functionality is intended to avoid breaking links.
* If the project in the URL is a valid project in the organization, we show the work item ID provided. The following example shows an organization with projects named "Example1" and "Example2". 
   
   `https://dev.azure.com/MyOrg/Example1/_workitems/edit/40/` - Displays work item 40
   `https://dev.azure.com/MyOrg/Example2/_workitems/edit/40/` - Displays work item 40
   `https://dev.azure.com/MyOrg/Potato/_workitems/edit/40/` - Displays a 404 error

* Work item IDs are unique in the organization and therefore the links don't expire.
* The old project name can be used again.

<a id="more-work"></a>

## Required user actions for working with the renamed project

Each user within your team must [restart their clients](#restart-clients) and do some of the following actions, based on the features they use:
- [Update Git remotes](#update-git-remotes)
- [Update Team Foundation Version Control (TFVC) server workspaces](#update-tfvc-server-workspaces)
- [Update TFVC local workspaces](#update-tfvc-local-workspaces)
::: moniker range="tfs-2018"
- [Update your Team Foundation Server (TFS) SharePoint and reporting integrations](#update-your-tfs-sharepoint-and-reporting-integrations)
::: moniker-end

<a id="restarting-clients"></a>

### Restart clients

Opened clients keep a cache of all project names in memory, but this cache doesn't automatically get cleared after a project is renamed. To clear the cache, restart your client so it populates the new project name. If you don't restart the client, then operations that use the cached project name fail with a *project not found* exception.

For the following clients, save your work in each and then restart:

- Visual Studio Team Explorer
- Microsoft Excel, if your team uses the [Azure DevOps Office Integration 2019](https://visualstudio.microsoft.com/downloads/#other-family) 

<a id="git"></a>

### Update Git remotes

If your project uses Git, then your remote references for each repository from the renamed project must be updated. These updates are necessary because the remote repository URL contains the project and the repository name. Git uses remote references to fetch and push changes between your local repository and the remote version that's stored on the server. Each member of your team must update their local Git repositories to continue connecting from their dev machines. 

For more information, see [Update the Git remotes on your dev machines](../../repos/git/repo-rename.md#update-the-git-remotes-on-your-dev-machines).

<a id="tfvc-server"></a>

### Update TFVC server workspaces

If your project uses TFVC with [server workspaces](../../repos/tfvc/decide-between-using-local-server-workspace.md), these workspaces must be updated with the new project name.
For Visual Studio clients, execute a get or check-in and then the workspace mapping gets corrected to use the new project name.

![Screenshot of source control explorer, showing get latest version selection.](media/rename-project/tfvc-get.png)

<a id="tfvc-local"></a>

### Update TFVC local workspaces

If your team uses TFVC with [local workspaces](../../repos/tfvc/decide-between-using-local-server-workspace.md), these workspaces need to be updated with the new project name.
For Visual Studio, execute a get or check-in and the workspace mapping is corrected to use the new project name. 
 
We recommend you update your clients to the latest update or release, if possible. For all other supported Visual Studio versions, you must create a new local workspace mapped to the new project name.  

Local workspaces get managed locally and not on the server. Older clients without the updated rename logic can't update local workspaces to the new project name. 
 
::: moniker range="tfs-2018"

<a id="tfs-onprem"></a>

### Update your TFS SharePoint and reporting integrations

Both SharePoint and Reporting Services integrations continue to work, but some reports don't work as expected until the new project name gets populated.
The old project name is still present until caches are updated with the new name. 
The reporting and SharePoint server administrator can manually run these jobs to immediately populate the new name.

- If your team uses reports, they reflect the new names after the next incremental analysis job runs for the data warehouse. By default, the job runs every two hours. But you can [manually run the warehouse jobs and incremental analysis job](/previous-versions/azure/devops/report/admin/manually-process-data-warehouse-and-cube). Then, the new name gets synced to warehouse and reports start using the new name. Reports don't work as expected until the jobs have run.
- If your team uses SharePoint Integration and has custom queries or web parts that directly reference the project name,
  update the name in each to the new project name. You don't need to update default queries and web parts, as they continue to work.
  Use of <em>@project</em> also continues to work after a project rename and also doesn't need updating.
- Excel reports and Excel web parts on MOSS don't show the right data until you execute the following.

  1. Warehouse job - [Run the warehouse jobs](/previous-versions/azure/devops/report/admin/manually-process-data-warehouse-and-cube)
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
     You can also clear some TFS-specific cache using the TFS redirect URL
     and providing a "clear_cache" parameter. For example:

     ```
     http://<SharePointServer>/sites/<TeamProjectCollectionName>/<TeamProjectName>/_layouts/TfsRedirect.aspx?tf:type=Report&tf:clearcache=1
     ```
::: moniker-end

## Related articles

- [Delete a project](delete-project.md)
- [Restore a project](restore-project.md)
- [Git and Azure Repos](../../repos/git/index.yml)
- [Team Foundation version control](../../repos/tfvc/index.yml)
- [Go to Visual Studio Team Explorer](../../user-guide/work-team-explorer.md)
- [Git experience in Visual Studio](/visualstudio/ide/git-with-visual-studio)

## Frequently asked questions (FAQs)

### Q: Why did my attempt to reuse a project name fail due to existing work spaces?
A: You can't reuse a project name if there are still workspace mappings addressing it. This function helps avoid the ambiguity case where a workspace could be mapped to two projects. Contact the users who have these mappings, and either delete them or [update them](rename-project.md#tfvc-server) to use the new name.

If the user's machine containing the workspace is no longer available, then you can delete the workspace by running the following command from Visual Studio's developer command prompt:
```tf workspace /delete [/collection:TeamProjectCollectionUrl] workspacename[;workspaceowner]```

### Q: How does renaming a project impact my browser navigation experience?

A: After you rename a project, any browsers with the project opened may encounter some errors. These errors are due to caches held by the browser, which include the old project name. 
Refresh to make these errors go away since the cache gets repopulated with the new project name.
          
### Q: Do other artifacts in the project get renamed when it's renamed?

A: Yes, all artifacts that share the same name get renamed along with the project. The only exceptions are for the default team and repo. The rename of these artifacts is performed as a best effort. 
For example, if a project *Foo* was renamed to *Bar*, the default team *Foo* wouldn't be renamed if a team named *Bar* already existed in the project.
          
### Q: Why can't I open queries saved to a disk after a rename?

A: If you use Visual Studio 2010 and you have queries save to disk, you can't open them after you rename a project. You can use Visual Studio 2012 or newer to open them.
