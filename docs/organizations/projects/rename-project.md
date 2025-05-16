---
title: Rename a project - Azure DevOps
titleSuffix: Azure DevOps
ms.custom: content-perf-fy23q2, engagement-fy23
description: Learn how to rename your project, including tasks you need to complete to work with the renamed project.
ms.subservice: azure-devops-projects
ms.assetid: 23729f9a-9947-4fc1-89b0-07e3b52298ac
toc: show
ms.topic: how-to
ms.author: chcomley
author: chcomley
monikerRange: "<=azure-devops"
ms.date: 11/11/2024
---

# Rename a project in Azure DevOps

[!INCLUDE [version-gt-eq-2019](../../includes/version-gt-eq-2019.md)] 

Renaming a project in Azure DevOps updates the project name in version control paths, work items, queries, and other project artifacts. You can rename a single project multiple times, and use old names. Some [actions might be required from team members](#required-user-actions-for-working-with-the-renamed-project) after you rename the project.

> [!WARNING]
>- Upon renaming a project, Azure DevOps notifies all project members via email if the user count is less than 1,000. For projects with more than 1,000 users, only Project Collection Administrators receive these notifications.
>
>- Renaming a project breaks workload identity federation subjects in Azure Resource Manager service connections. 

## Prerequisites

| Category | Requirements |
|--------------|-------------|
|**Permissions**| Member of the **Project Administrators** group or project-level **Rename team project** permission set to **Allow**. For more information, see [Change project-level permissions](../security/change-project-level-permissions.md).|

## Rename a project

1. Sign in to your project (```https://dev.azure.com/{Your_Organization}/{Your_Project}```).

2. Select **Project settings** > **Overview**, and then enter a new name and select **Save**. 

   ![Screenshot showing new name entry and highlighted save button.](media/rename-project/rename-project-azure-devops.png)

3. To confirm the rename, enter the new project name, check the box next to, "I understand the consequences of renaming this project," and then select **Save**.

   ![Screenshot showing new name confirmation screen with save button.](media/rename-project/rename-project-confirm.png)

### Results of the rename

The following results occur after the rename operation.

* Azure DevOps renames the project.
* All project members receive an email notification of the name change, if less than 1,000 members.
* The URL continues to work for both the new team name and the old team name. This functionality is intended to avoid breaking links.
* If the project in the URL is a valid project in the organization, we show the work item ID provided. The following example shows an organization with projects named "Example1" and "Example2."
   
   `https://dev.azure.com/MyOrg/Example1/_workitems/edit/40/` - Displays work item 40
   `https://dev.azure.com/MyOrg/Example2/_workitems/edit/40/` - Displays work item 40
   `https://dev.azure.com/MyOrg/Potato/_workitems/edit/40/` - Displays a 404 error

* Work item IDs are unique in the organization and therefore the links don't expire.
* The old project name can be used again.

## Required user actions for working with the renamed project

Each user within your team must [restart their clients](#restart-clients) and do some of the following actions, based on the features they use:
- [Update Git remotes](#update-git-remotes)
- [Update Team Foundation Version Control (TFVC) server workspaces](#update-tfvc-server-workspaces)
- [Update TFVC local workspaces](#update-tfvc-local-workspaces)
- [Update OData feeds](#update-odata-feeds)
- [Update Analytics views](#update-analytics-views)

### Restart clients

Opened clients keep a cache of all project names in memory, but this cache doesn't automatically get cleared after a project is renamed. To clear the cache, restart your client so it populates the new project name. If you don't restart the client, then operations that use the cached project name fail with a *project not found* exception.

For the following clients, save your work in each and then restart:

- Visual Studio Team Explorer
- Microsoft Excel, if your team uses the [Azure DevOps Office Integration 2019](https://visualstudio.microsoft.com/downloads/#other-family) 

### Update Git remotes

If your project uses Git, then your remote references for each repository from the renamed project must be updated. These updates are necessary because the remote repository URL contains the project and the repository name. Git uses remote references to fetch and push changes between your local repository and the remote version stored on the server. Each member of your team must update their local Git repositories to continue connecting from their dev machines. 

For more information, see [Update the Git remotes on your dev machines](../../repos/git/repo-rename.md#update-the-git-remotes-on-your-dev-machines).

### Update TFVC server workspaces

If your project uses TFVC with [server workspaces](../../repos/tfvc/decide-between-using-local-server-workspace.md), these workspaces must be updated with the new project name.
For Visual Studio clients, execute a get or check in and then the workspace mapping gets corrected to use the new project name.

![Screenshot of source control explorer, showing get latest version selection.](media/rename-project/tfvc-get.png)

For more information, see [Rename command (TFVC)](../../repos/tfvc/rename-command-team-foundation-version-control.md).

### Update TFVC local workspaces

If your team uses TFVC with [local workspaces](../../repos/tfvc/decide-between-using-local-server-workspace.md), these workspaces need to be updated with the new project name.
For Visual Studio, execute a get or check-in and the workspace mapping is corrected to use the new project name. 
 
We recommend you update your clients to the latest update or release, if possible. For all other supported Visual Studio versions, you must create a new local workspace mapped to the new project name.  

Local workspaces get managed locally and not on the server. Older clients without the updated rename logic can't update local workspaces to the new project name. 

### Update OData feeds

If you use OData feeds in Power BI, update the feed URL to use the new project name. Updating the feed URL is essential to maintain data connections and avoid errors in reporting. For more information, see [Overview of sample reports using OData queries](../../report/powerbi/sample-odata-overview.md).

### Update Analytics views

If you created custom Analytics views using the old project name, you need to update the views with the new name. For more information, see [Analytics views](../../report/powerbi/analytics-views-manage.md#edit-an-existing-view).

## Related articles

- [Delete a project](delete-project.md)
- [Git and Azure Repos](../../repos/git/index.yml)

## Frequently asked questions (FAQs)

### Q: Why did my attempt to reuse a project name fail due to existing work spaces?
A: You can't reuse a project name if there are still workspace mappings addressing it. This function helps avoid the ambiguity case where a workspace could be mapped to two projects. Contact the users who have these mappings, and either delete them or [update them](#update-tfvc-server-workspaces)) to use the new name.

If the user's machine containing the workspace is no longer available, then you can delete the workspace by running the following command from Visual Studio's developer command prompt:
```tf workspace /delete [/collection:TeamProjectCollectionUrl] workspacename[;workspaceowner]```

### Q: How does renaming a project affect my browser navigation experience?

A: After you rename a project, any browsers with the project opened might encounter some errors. These errors are due to caches held by the browser, which include the old project name. 
Refresh to make these errors go away since the cache gets repopulated with the new project name.
          
### Q: Do other artifacts in the project get renamed?

A: Yes, all artifacts that share the same name get renamed along with the project. The only exceptions are for the default team and repo. The rename of these artifacts is performed as a best effort. 
For example, if a project *Foo* was renamed to *Bar*, the default team *Foo* wouldn't be renamed if a team named *Bar* already existed in the project.
          
### Q: Why can't I open queries saved to a disk after a rename?

A: If you use Visual Studio 2010 and you have queries save to disk, you can't open them after you rename a project. You can use Visual Studio 2012 or newer to open them.
