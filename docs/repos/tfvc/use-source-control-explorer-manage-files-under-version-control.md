---
title: Use Source Control Explorer to manage files
titleSuffix: Azure Repos
description: Use Source Control Explorer in Visual Studio to manage files in Team Foundation Version Control. See frequently asked questions about Source Control Explorer.
ms.assetid: 2781688e-ac66-4ea5-acd3-f045ba757f13
ms.service: azure-devops-repos
ms.topic: conceptual
ms.date: 11/29/2022
monikerRange: '<= azure-devops'
ms.subservice: azure-devops-repos-tfvc
---


# Use Source Control Explorer to manage files in TFVC 

[!INCLUDE [version-lt-eq-azure-devops](../../includes/version-lt-eq-azure-devops.md)]
[!INCLUDE [version-vs-gt-eq-2019](../../includes/version-vs-gt-eq-2019.md)]

Use Source Control Explorer to browse file versions and work with your codebase under Team Foundation Version Control (TFVC). 

> [!NOTE]
> If you're using Git for version control, manage your Visual Studio project files by using Git Changes. For more details, see [Get started with Git in Azure Repos](../git/gitquickstart.md). You can also learn more about using Git with Visual Studio in the [Azure Repos Git tutorial](../../repos/git/gitworkflow.md). 

If you need to work with your Visual Studio solution files outside of version control, use [Solution Explorer](/visualstudio/ide/solutions-and-projects-in-visual-studio#solution-explorer). Source Control Explorer is for managing changes that you make in your project when you use TFVC.

## Open Source Control Explorer

Source Control Explorer is available in Visual Studio, but it isn't opened by default when you work with a project that's managed in TFVC. You can open the Source Control Explorer window:

- From the Team Explorer home page. On the keyboard, select **Ctrl**+**0**+**H** to open Team Explorer. Then select **Source Control Explorer**.
- From the Visual Studio menu bar. Select **View** > **Other Windows** > **Source Control Explorer**.

:::image type="content" source="media/use-source-control-explorer-manage-files-under-version-control/IC612245.png" alt-text="Screenshot of Source Control Explorer in Visual Studio. A local path and several folders and branches are visible.":::

## Use the command prompt

You can also use the command prompt to manage your files in TFVC. For more information, see [Use Team Foundation version control commands](use-team-foundation-version-control-commands.md).

## FAQ

The following sections provide answers to commonly asked questions.

### Why do I see the Not mapped link?

If the **Not mapped** link appears next to **Local Path** in a folder that contains files that you need to work with, you can select the link to map the folder. For more information, see [Create and work with workspaces](create-work-workspaces.md).

### How do I change the local path?

:::image type="content" source="media/use-source-control-explorer-manage-files-under-version-control/IC698934.png" alt-text="Screenshot of Source Control Explorer in Visual Studio. In the Workspace list, a workspace is visible and Workspaces is highlighted.":::
     
See [Create and work with workspaces](create-work-workspaces.md).

### How do I hide or display the Folders pane?

- To display the Folders pane, on the Source Control Explorer toolbar, select the **Folders** icon.
- To hide the folders pane, use one of these options:
  - On the upper-right corner of the Folders title bar, select **Close**.
  - On the Source Control Explorer toolbar, select the **Folders** icon.

### I don't see the latest data in the window. How can I fix this?

If Source Control Explorer doesn't display the latest data that's on the server, you can refresh the data. On the Source Control Explorer toolbar, select the **Refresh** icon.

### How can the Pending Change column help me?

The **Pending Change** column displays your [pending changes](develop-code-manage-pending-changes.md) to an item. Source Control Explorer also displays the pending changes of other team members who are using [server workspaces](decide-between-using-local-server-workspace.md). It lists their names in the **User** column. If an ellipsis (**...**) appears, you can view a list of the users and their pending changes:

1. In the **Name** column, right-click the item, and then select **Properties**.

2. In the **Properties** dialog box, select the **Status** tab. A list of users appears in the **User** column. Their associated pending changes appear in the **Change Type** column.

### Why do I see this error message: "Team Foundation Server is not your current Source Control plug-in. Click here to set the current Source Control plug-in"?

You might have connected to a Git repository in your project. Use [Team Explorer](../../user-guide/work-team-explorer.md) and [Solution Explorer](/visualstudio/ide/solutions-and-projects-in-visual-studio#solution-explorer) to manage your files in Git repos.
