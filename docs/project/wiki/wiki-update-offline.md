---
title: Clone and update wiki content offline 
titleSuffix: Azure DevOps 
description: Add and update pages offline for your built-in team project wiki in Azure DevOps 
ms.subservice: azure-devops-wiki
ms.custom: wiki, devdivchpfy22
ms.topic: conceptual
ms.assetid:
ms.author: chcomley
author: chcomley
ms.reviewer: gopinach
monikerRange: "<=azure-devops"
ms.date: 01/05/2024  
---

# Clone and update wiki content offline

[!INCLUDE [version-lt-eq-azure-devops](../../includes/version-lt-eq-azure-devops.md)] 

You can update your wiki pages offline the same way you develop code in a Git repo.

You can use any client you want or git command-line tools to update your wiki offline. For details on working with Git repositories and supported tools, see [Git Repositories](../../repos/git/index.yml).

The basic steps to update wiki content offline are as follows:

1. [Clone your wiki Git repo to your local IDE or workspace.](#clone-your-wiki)
2. [Add files or folders to your local git branch.](#add-pages)
3. Update the *.order* files to reflect your pages and subpages.
4. [Commit and push the updates you made to your local git branch.](#push-your-changes)

## Prerequisites

::: moniker range=">= azure-devops-2019"

Do the following steps to migrate Markdown pages from another wiki to your team project wiki or to content that you publish as code to a wiki.

- [Understand the underlying structure of your wiki Git repo](wiki-file-structure.md)
- Understand the [differences between provisioned wiki and publish code as wiki](provisioned-vs-published-wiki.md)

::: moniker-end



<a id="edit-wiki-offline"></a>

## Clone your wiki

Your wiki repository stores pages, images, attachments, and the sequence of pages and subpages. Clone your wiki to begin.

1. Sign in to your project (`https://dev.azure.com/{Your_Organization/Your_Project}`) and then select your wiki.

2. Open the **More actions** context menu and select **Clone wiki**.

	:::image type="content" source="media/wiki/more-clone-wiki.png" alt-text="Clone wiki Git repository":::

3. From the **Clone repo** dialog, select :::image type="icon" source="../../media/icons/copy-clone-icon.png" border="false"::: **Copy clone URL to clipboard**.  

	:::image type="content" source="media/wiki/copy-clone-url-to-clipboard.png" alt-text="Copy the wiki url":::

	Enter it in your browser to view the files defined under the wikiMaster branch.

   :::image type="content" source="media/wiki/work-offline-wikiMaster-files.png" alt-text="Wiki main files":::

	> [!IMPORTANT]
	> The "Generate Git Credentials" button will be removed in January 2025, to reduce creation of unnecessary and underutilized personal access tokens. Review the Git Authentication docs for all authentication methods available to you for git clone operations.

4. Use the URL that you copied to clone the repo in the IDE that you use. For more information, see one of the following articles:
	- [Clone an existing Git repo](../../repos/git/clone.md)
	- [Using Version Control in VS Code](https://code.visualstudio.com/docs/editor/versioncontrol)
	- [Get Started with Git and Azure DevOps](../../repos/git/gitquickstart.md?tabs=visual-studio)

## Add pages to your local Git repository

We author pages using [Markdown format](./markdown-guidance.md). Add a Markdown file to your local branch for each page and subpage that you want to add to your wiki.

### Add pages

To add pages at the root of the wiki tree, add a Markdown file at the root of the Git repository.

1. For each page you want to add, create a Markdown file with the page contents, and then add it under the root folder for your repo.

	For the CanaryBuilds team project, it's in the following folder:  

	`C:\Users\UserName\Source\Repos\CanaryBuilds.wiki`

2.  To add pages at the root of the wiki tree, add a Markdown file for each page at the root of the Git repository.

    :::image type="content" source="media/wiki/add-pages.png" alt-text="Local branch wiki Git repo":::

3. After you added all the pages you want to add at the root, update the **.order** file at the root. It should have one entry for each Markdown file that is defined at the root. Each entry should match the file title with spaces replaced with a dash.

	For example:  

    ```
	Welcome
	Roadmap  
	How-to-contribute  
	Home  
	Reference  
    ```

### Add subpages

1. Create a folder for the parent page, and then add Markdown files for each subpage in the folder.

   For example, we added the following files to the How-to-contribute folder. These subpages appear under the How to contribute page in the wiki.

   :::image type="content" source="media/wiki/add-sub-pages.png" alt-text="Screenshot of the subpages.":::

2. Add a **.order** file in the folder with the order of the subpages as they should appear in the wiki. To understand the use of the **.order** file to sequence pages, see [Wiki Git repository files and file structure](wiki-file-structure.md).
	 
	For example, the file has the following subpages:

    ```
	Request-extensions  
	Licensing  
	Smoke-test  
	Coding-guidelines  
    ```

## Push your changes

When you're done with all your updates, [push the files to the Git repository](../../repos/git/pushing.md).

The added pages and subpages appear immediately in your wiki.

:::image type="content" source="media/wiki/wiki-tree-updated-offline.png" alt-text="Wiki tree updated":::

If there are any errors in the process, the pages appear in your wiki with a warning sign.

:::image type="content" source="media/wiki/wiki-offline-order-warning.png" alt-text="Warning when .order file isn't updated properly.":::

## Related articles

- [Create a wiki for your team project](wiki-create-repo.md)
- [Wiki Git repository files and file structure](wiki-file-structure.md)
- [Clone an existing Git repo](../../repos/git/clone.md)
- [Share code with push](../../repos/git/pushing.md)
- [Manage README and Wiki permissions](manage-readme-wiki-permissions.md)
- [Syntax guidance for Markdown files, widgets, wikis, and pull request comments](./markdown-guidance.md).
