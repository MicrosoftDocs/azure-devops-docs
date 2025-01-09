---
title: View file changes using annotate in Visual Studio
titleSuffix: Azure Repos
description: Use annotate to a see changes in earlier versions of a file in Team Foundation Version Control using Visual Studio.
ms.assetid: 34e29de4-0972-4e32-9d3d-26dc09f00713
ms.service: azure-devops-repos
ms.topic: conceptual
ms.date: 05/30/2024
monikerRange: '<= azure-devops'
ms.subservice: azure-devops-repos-tfvc
---


# View file changes using annotate in Visual Studio

[!INCLUDE [version-lt-eq-azure-devops](../../includes/version-lt-eq-azure-devops.md)]
[!INCLUDE [version-vs-gt-eq-2019.md](../../includes/version-vs-gt-eq-2019.md)]

In Team Foundation Version Control (TFVC), you can use annotate in Visual Studio to view the changes in earlier versions of file. You can see information about the change, view the changeset details, compare with previous versions, and more.

## Prerequisites

- Install [Visual Studio](https://visualstudio.microsoft.com/downloads).

- An Azure DevOps project with a TFVC repository. If you don't have a project, create one. For more information, see [Create a project](../../organizations/projects/create-project.md).

- Have the **Read** permission set to **Allow** for the repository. For more information, see [Default TFVC permissions](../../organizations/security/default-tfvc-permissions.md).

- Connect to the team project. For more information, see [Connect to a your project](./share-your-code-in-tfvc-vs.md#connect-to-your-project).

### To annotate a file

1. On the Visual Studio menu bar, select **View** > **Solution Explorer**.

1. In **Solution Explorer**, right-click the version of the file that you want to annotate, select **Source Control**, and select **Annotate**.

   The **Annotated** window displays the annotated file.

   Each annotation appears to the left of the text that was changed and displays:

   - The changeset number, or **Local** if you have pending changes in your local workspace. To see more information about the changeset, select the changeset number.

   - The name of the person who made the change.

   - The date.

   When you hover over an annotation, the following information appears:

   - **Path**: The path of the changeset

   - **Changeset**: The changeset number

   - **Owner**: The name of the person who made the change

   - **Change**: The type of change that was made

   - **Date**: The date of the changeset

   - **Lines**: The line numbers where the changes were made

   - **Comment**: The changeset check-in comment

1. If you right-click an annotation, you can select:

   - **Changeset Details** to display the **Changeset Details** page in **Team Explorer**.

   - **View History** to open the **History** window.

   - **Compare With Previous Version** to compare the version you're examining with the previous version. The comparison appears in the [Diff window](compare-files.md).

     If you have pending changes in your local workspace, you can compare the version you're examining with the version you checked out from the server. Right-click the **Local** annotation information, and then select **Compare With Workspace Version (\<server name\>)**. The comparison appears in the [Diff window](compare-files.md).

   - **Annotate This Version** to view annotation information for the selected version and all earlier versions of the file. This information appears in an **Annotate** window.

   - **Track Changeset** to see to which branches the changeset was merged into. For more information, see [View where and when changesets have been merged](view-where-when-changesets-have-been-merged.md).

   - **Get This Version** to download the selected version of the file to your local workspace.

## Related articles

- [Compare files](compare-files.md) 
- [Resolve Team Foundation Version Control conflicts](resolve-team-foundation-version-control-conflicts.md) 
