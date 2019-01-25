---
title: View file changes using annotate
titleSuffix: Azure Repos
description: View file changes using annotate
ms.assetid: 34e29de4-0972-4e32-9d3d-26dc09f00713
ms.prod: devops
ms.technology: devops-code-tfvc
ms.manager: jillfra
ms.author: sdanie
author: steved0x
ms.topic: conceptual
ms.date: 08/10/2016
monikerRange: '>= tfs-2015'
---


# View file changes using annotate

#### Azure Repos | TFS 2018 | TFS 2017 | TFS 2015 | VS 2017 | VS 2015 | VS 2013

You can annotate a file to learn who made changes and what changes they made in all earlier versions of the file.

**Required Permissions**

To perform these procedures, you must have the **Read** permission set to **Allow**. For more information, see [Permissions and groups reference](../../organizations/security/permissions.md).

### To annotate a file

1.  On the menu bar, choose **View**, **Other Windows**, **Source Control Explorer**.

2.  In **Source Control Explorer**, go to the version of the file you want to annotate, open its shortcut menu, and then choose **Annotate**.

    The **Annotated** window displays the annotated file.

    Each annotation appears to the left of the text that was changed and displays:

    -   Changeset number, or **Local** if you have pending changes in your local workspace. To get more information about the changeset, choose the changeset number.

    -   The name of the person who made the change.

    -   Date.

    When you move the pointer over an annotation, the following information appears:

    -   **Path**: The path of the changeset.

    -   **Changeset**: The changeset number.

    -   **Owner**: The name of the person who made the change.

    -   **Change**: The type of change.

    -   **Date**: The date of the changeset.

    -   **Lines**: The line numbers where the changes were made.

    -   **Comment**: The changeset check-in comment.

3.  You can open the shortcut menu for an annotation, and then choose:

    -   **Changeset Details** to display, in **Team Explorer** the **Changeset Details** page.

    -   **View History** to open the **History** window.

    -   **Compare With Previous Version** to compare, in the [Diff window](compare-files.md), the version you are examining with the previous version.

        If you have pending changes in your local workspace you can open the shortcut menu for the **Local** annotation information and choose **Compare With Workspace Version (\<server name\>)** to compare, in the [Diff window](compare-files.md), the version you are examining with the version you checked out from the server.

    -   **Annotate This Version** to open a new **Annotate** window that displays annotation information for the selected version and all earlier versions of the file.

    -   **Track Changeset**: to see to which branches the changeset has been merged. For more information, see [View where and when changesets have been merged](view-where-when-changesets-have-been-merged.md).

    -   **Get This Version** to download the selected version of the file to your local workspace.

## See Also

#### Other Resources

 [Compare files](compare-files.md) 

 [Resolve Team Foundation Version Control conflicts](resolve-team-foundation-version-control-conflicts.md) 
