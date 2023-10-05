---
title: Find a file in your Git repo
titleSuffix: Azure Repos
description: Search your Git repo in Azure DevOps Services or TFS for a specific file or folder
ms.assetid: 228495b9-f3cb-484a-a798-d026d650fa26
ms.service: azure-devops-repos
ms.topic: conceptual
ms.date: 11/02/2018
monikerRange: '<= azure-devops'
ms.subservice: azure-devops-repos-git
---

# Find a file or folder in your Git repository

[!INCLUDE [version-lt-eq-azure-devops](../../includes/version-lt-eq-azure-devops.md)]

Quickly find and navigate to a file or folder in your Git repository using the path control in the **Files** page.

![Path Control in Code page](media/find-a-file/find-file.png)

## Usage

While browsing your Git repository, start typing in the path control box to search for the file or folder you are looking for. The interface lists the results starting from your current folder followed by matching items from across the repo. 

![SearchResultsExperience](media/find-a-file/find-file-results.png)

### Hotkey navigation

::: moniker range=">= azure-devops-2019"

Launch the Find a File experience from the keyboard with the `t` shortcut from the **Files** or **Commits** pages in the **Repos** view. Use the up and down arrows to cycle through the results, and click or press Enter to open a result. Press `Esc` to close the Find a File experience.

::: moniker-end

::: moniker range="tfs-2018"

Launch the Find a File experience from the keyboard with the `t` shortcut from the **Files** or **History** tabs in the **Files** page. Use the up and down arrows to cycle through the results, and click or press Enter to open a result. Press `Esc` to close the Find a File experience.

::: moniker-end


