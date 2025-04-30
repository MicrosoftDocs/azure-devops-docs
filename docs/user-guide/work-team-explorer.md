---
title: Navigate in Visual Studio Team Explorer 
titleSuffix: Azure DevOps 
description: Work with Team Explorer in Visual Studio. Build and manage pipelines from the Web Portal and Task Board, maintain project files in Git or TFVC, and download Azure DevOps clients.
keywords: Download Azure DevOps clients 
ms.subservice: azure-devops-new-user
ms.assetid: fd7a5cf7-7916-4fa0-b5e6-5a83cf377a02
ms.author: chcomley
author: chcomley
ms.topic: concept-article
monikerRange: 'azure-devops-2020 || azure-devops-2022'
ms.date: 05/01/2025
#customer intent: As a developer, I want to work with Team Explorer in Visual Studio, so I can build and manage pipelines from the Web Portal and Task Board, and use Git or Team Foundation version control (TFVC).
---

# Navigate in Visual Studio Team Explorer

[!INCLUDE [version-lt-eq-azure-devops](../includes/version-lt-eq-azure-devops.md)]

[!INCLUDE [version-vs-gt-eq-2019](../includes/version-vs-gt-eq-2019.md)]

You use Team Explorer to coordinate your code efforts with other team members to develop a software project. Team Explorer is a plug-in that installs with Visual Studio. You can manage any work assigned to you, your team, or your projects. Developers can effectively collaborate with Team Explorer connected to projects hosted on Azure DevOps Services or an on-premises Azure DevOps Server.

## Prerequisites 

Prepare one of the following configurations to start working with Team Explorer:

- Connect to a project in Azure DevOps without running Visual Studio by installing the free [Visual Studio Community](https://visualstudio.microsoft.com/vs/community/).

- Install the latest version of Visual Studio clients from the [Visual Studio downloads](https://visualstudio.microsoft.com/downloads/?utm_medium=microsoft&utm_source=learn.microsoft.com&utm_campaign=button+cta&utm_content=download+vs2017) page.

As needed, explore the following options for connecting to Azure DevOps Services:

- [Azure DevOps Plugin for Android Studio](/previous-versions/azure/devops/all/java/download-android-studio-plug-in)
- [Azure DevOps Plugin for IntelliJ](/previous-versions/azure/devops/all/java/download-intellij-plug-in)
- [Visual Studio Code](https://code.visualstudio.com/docs)

For more information about compatibility across client and server versions, see [Requirements and compatibility](/azure/devops/server/requirements).

### Permissions for Team Explorer

To work with projects in Team Explorer, you need the following access permissions:

[!INCLUDE [prerequisites-project-member-only](../includes/prerequisites-project-member-only.md)]

## Connect to a project or repository

Team Explorer connects Visual Studio to projects in Azure DevOps. You can manage source code, work items, and builds. The operations available to you depend on the source control option you select to manage your source code when you create the project. The options are Git or Team Foundation version control (TFVC). 

> [!TIP]  
> If you open Visual Studio and don't see the Team Explorer pane, select **View** > **Team Explorer**.

From the Team Explorer **Connect** page, you can select the projects you want to connect to and quickly switch connection to a different project or repository. For details, see [Connect to a project](../organizations/projects/connect-to-projects.md).

::: moniker range="azure-devops-2022"

:::image type="content" source="media/vs-2022-te/manage-connections.png" border="false" alt-text="Screenshot of the Team Explorer pane in Visual Studio 2022 showing the Manage Connections option highlighted.":::

::: moniker-end
::: moniker range="azure-devops-2020"

:::image type="content" source="media/vs-2019-te/manage-connections.png" border="false" alt-text="Screenshot of the Team Explorer pane in Visual Studio 2019 showing the Manage Connections option highlighted.":::

::: moniker-end

The Git and TFVC repos support different pages and functions. For a comparison of the two version control systems, see [Choosing the right version control for your project](../repos/tfvc/comparison-git-tfvc.md). 

## Support projects with the Web Portal and Task Board

Team Explorer provides the **Web Portal** and **Task Board** features to support team member collaboration for your projects. These features are available under the **Project** group in Team Explorer.

::: moniker range="azure-devops-2022"

:::image type="content" source="media/vs-2022-te/web-portal-task-board.png" border="false" alt-text="Screenshot of Team Explorer Home page for Visual Studio 2022 showing Web Portal and Task Board features highlighted.":::

::: moniker-end
::: moniker range="azure-devops-2020"

:::image type="content" source="media/vs-2019-te/web-portal-task-board.png" border="false" alt-text="Screenshot of Team Explorer Home page for Visual Studio 2019 showing Web Portal and Task Board features highlighted.":::

::: moniker-end

- **Web Portal**: Project users can connect to the Azure DevOps web portal by using a supported web browser. For more information, see [Navigate the Azure DevOps web portal](../project/navigation/index.md).

- **Task Board**: Project members can manage work items and tasks by using the project Taskboard. The board is hosted on Azure DevOps Services or an on-premises Azure DevOps Server. For more information, see [Update and monitor your Taskboard](../boards/sprints/task-board.md).

## Access Work Items and Builds for projects

Project users can access specific content in the **Work Items** and **Builds** sections. These features are available under the **Project** group in Team Explorer.

::: moniker range="azure-devops-2022"

:::image type="content" source="media/vs-2022-te/work-items-builds.png" border="false" alt-text="Screenshot of Team Explorer Home page for Visual Studio 2022 showing the Work Items and Builds features highlighted.":::

::: moniker-end
::: moniker range="azure-devops-2020"

:::image type="content" source="media/vs-2019-te/work-items-builds.png" border="false" alt-text="Screenshot of Team Explorer Home page for Visual Studio 2019 showing the Work Items and Builds features highlighted.":::

::: moniker-end

- **Builds**: Project members can work with builds for your project based on their access-level permissions. For more information, see the following resources:

   - [Create build pipelines](../pipelines/tasks/reference/index.md#build-tasks)
   - [View and manage builds](../pipelines/get-started/what-is-azure-pipelines.md)
   - [Manage the build queue](../pipelines/agents/pools-queues.md#manage-pools-and-queues)

- **Work Items**: Project members can track features, requirements, known issues or bugs, and more by using work items. In Visual Studio 2019 and later, you can switch between the **Default** and **Legacy** views of the Team Explorer **Work Items** page. The default view aligns with the web portal **Boards** > **Work Items** page. The legacy view retains the familiar layout from earlier versions of Visual Studio. For more information, see the following resources:

   ::: moniker range="azure-devops-2022"

   **Visual Studio 2019 and later (Default)**:
   
   - [View and add work items](../boards/work-items/view-add-work-items.md)
   - [Set the Work Items experience in Visual Studio](../boards/work-items/set-work-item-experience-vs.md).

   ::: moniker-end
   ::: moniker range=">= azure-devops-2020"

   **All Visual Studio versions (Legacy)**: 
   
   - [Add and manage work items](../boards/backlogs/manage-work-items.md)
   - [Define a work item query](../boards/queries/using-queries.md)
   - [Manage and organize queries](../boards/queries/organize-queries.md)
   - [Set query permissions](../boards/queries/set-query-permissions.md)
   - [Open queries in Microsoft Excel](../boards/backlogs/office/bulk-add-modify-work-items-excel.md)
   - [Send email with a work item or print](../boards/work-items/email-work-items.md)
   - [Create reports from a query in Excel](/previous-versions/azure/devops/report/admin/create-status-and-trend-excel-reports)

   ::: moniker-end

## Use Git version control and Git repositories

::: moniker range="azure-devops-2022"

In Visual Studio 2022, the Git features are located on separate panes from Team Explorer. You can open the **Git Changes** and **Git Repository** panes from Team Explorer:

:::image type="content" source="media/vs-2022-te/git-changes-repository.png" border="false" alt-text="Screenshot of Visual Studio 2022 showing the Team explorer pane, the Git Changes pane, and the Git Repository pane." lightbox="media/vs-2022-te/git-changes-repository.png":::

You can also open the panes from the **View** menu or by using the keyboard shortcuts: **Git Changes** (**Ctrl**+**O**, **Ctrl**+**G**) and **Git Repository** (**Ctrl**+**O**, **Ctrl**+**R**).

::: moniker-end
::: moniker range="azure-devops-2020"

In Visual Studio 2019 and earlier, the Git features are available on the Team Explorer **Home** pane:

:::image type="content" source="media/vs-2019-te/git-features.png" border="false" alt-text="Screenshot of Team Explorer Home page for Visual Studio 2019 showing the Git features highlighted.":::

::: moniker-end

[!INCLUDE [temp](../repos/git/includes/note-new-git-tool.md)] 

Visual Studio supports the following Git actions for use with Team Explorer:

- **Git Changes**: [Save work with commits](../repos/git/commits.md)

- **Git Branches**: [Create work in branches](../repos/git/create-branch.md)

- **Pull Requests**: [Review code with pull requests](../repos/git/pull-requests.md)

- **Sync**: [Update code with fetch and pull](../repos/git/pulling.md)

- **Tags**: [Work with Git tags](../repos/git/git-tags.md)

To learn more about working with Git for version control, see the following articles:

- [Create a new repo](../repos/git/creatingrepo.md)
- [Copy (clone) an existing repo](../repos/git/clone.md)
- [Review the Git command reference](../repos/git/command-prompt.md)

## Use TFVC features for your project 

If you prefer to use TFVC for centralized control of your project, you can access the TFVC features on the Team Explorer **Home** pane:

:::image type="content" source="media/vs-2019-te/team-foundation-version-control.png" border="false" alt-text="Screenshot of Team Explorer Home page for Visual Studio 2019 showing the Team Foundation Version Control features highlighted.":::

Visual Studio supports the following features when you connect to a TFVC repository:

- **My Work**: [Configure your workspace](../repos/tfvc/share-your-code-in-tfvc-vs.md#configure-your-workspace), [Suspend, or resume work](../repos/tfvc/suspend-your-work-manage-your-shelvesets.md), [Conduct a code review](../repos/tfvc/day-life-alm-developer-suspend-work-fix-bug-conduct-code-review.md)  

- **Pending Changes**: [Manage pending changes](../repos/tfvc/develop-code-manage-pending-changes.md), [Find shelvesets](../repos/tfvc/suspend-your-work-manage-your-shelvesets.md), [Resolve conflicts](../repos/tfvc/resolve-team-foundation-version-control-conflicts.md) 

- **Source Control Explorer**: [Add/View files and folders](../repos/tfvc/add-files-server.md), [Add check-in policies](../repos/tfvc/add-check-policies.md), 

To learn more about working with TFVC for version control, see the following articles:

- [What is Team Foundation Version Control?](../repos/tfvc/what-is-tfvc.md)
- [Use Team Foundation version control commands](../repos/tfvc/use-team-foundation-version-control-commands.md) 

## Manage Settings for Team Explorer

You can configure administrative features for a project or project collection by selecting **Settings** on the Team Explorer **Home** pane:

::: moniker range="azure-devops-2022"

:::image type="content" source="media/vs-2022-te/settings.png" alt-text="Screenshot of Team Explorer Home page for Visual Studio 2022 showing the Settings option highlighted.":::

::: moniker-end
::: moniker range="azure-devops-2020"

:::image type="content" source="media/vs-2019-te/settings.png" alt-text="Screenshot of Team Explorer Home page for Visual Studio 2019 showing the Settings option highlighted.":::

::: moniker-end

The following sections provide links to resources for configuring settings for your project or project collection. 

> [!NOTE]
> Not all settings are available from the Team Explorer plug-in for Eclipse. 

For more information, see [About team, project, and organizational-level settings](../organizations/settings/about-settings.md).

### Project settings

For more information about managing settings for your project, see the following articles:

- [Security, Group membership](../organizations/security/change-project-level-permissions.md)
- [Security, Source Control (TFVC)](../repos/tfvc/set-tfvc-repository-permissions.md)
- [Work Item areas](../organizations/settings/set-area-paths.md)
- [Work Item iterations](../organizations/settings/set-iteration-paths-sprints.md)
- [Portal settings](../project/wiki/about-readme-wiki.md)
- [Project alerts](../organizations/notifications/manage-team-group-global-organization-notifications.md)

### Project collection settings

For information about managing settings for a collection of projects, see the following articles:

- [Security, Group membership](../organizations/security/change-organization-collection-level-permissions.md)
- [Source Control (TFVC)](../repos/tfvc/decide-between-using-local-server-workspace.md)
- [Process Template Manager](../boards/work-items/guidance/manage-process-templates.md)

### Git settings

If you use Git source control for your project, the following settings are available:

- [Git global settings](../repos/git/git-config.md)
- [Git repository settings](../repos/git/git-config.md)

## Refresh Team Explorer

Sometimes you need to refresh Team Explorer to ensure that the visible data for the current project is up-to-date across all clients and Azure DevOps.

### Refresh the current project view

If data doesn't appear as expected in Team Explorer, refresh your client, which updates the local cache with any changes made in other clients or in Azure DevOps.

To refresh Team Explorer, try the following actions:

- To refresh the current page, select :::image type="icon" source="../boards/media/icons/te-refresh-query-icon.png"::: **Refresh** (or use the keyboard shortcut **F5**).

- To refresh the selected project, select :::image type="icon" source="media/work-team-explorer/IC547418.png"::: **Home**, and then select :::image type="icon" source="../boards/media/icons/te-refresh-query-icon.png"::: **Refresh** or **F5**.

- To refresh the set of teams defined for the selected project, select **Connect**, and then select :::image type="icon" source="../boards/media/icons/te-refresh-query-icon.png"::: **Refresh** or **F5**.

[!INCLUDE [temp](../includes/when-to-refresh-client.md)]

[!INCLUDE [temp](../includes/images-not-appearing-vs.md)] 

## Related content

- [Troubleshoot connection](troubleshoot-connection.md)  
- [Create a project](../organizations/projects/create-project.md)
 