---
title: Clone and update Azure DevOps wiki content offline 
titleSuffix: Azure DevOps 
description: Add and update pages offline for your built-in team project wiki in Azure DevOps 
ms.technology: devops-collab
ms.custom: wiki
ms.prod: devops
ms.topic: conceptual
ms.assetid:
ms.manager: douge
ms.author: chcomley
author: chcomley
ms.reviewer: sancha
monikerRange: '>= tfs-2018'
ms.date: 11/15/2018  
---

::: moniker range="tfs-2018"
> [!NOTE]  
> GIT workflows like branch policies are applicable only for publish code as wiki workflows.
::: moniker-end

# Clone and update wiki content offline

[!INCLUDE [temp](../../_shared/version-vsts-tfs-2018.md)]

The wiki created for a team project employs a Git repository to store pages, images, attachments, and the sequence of pages and sub-pages. To update your wiki pages offline, you must first clone your wiki repository and add or edit pages much the same way you develop code in a Git repo. You can then push your changes to your working branch and merge them with the master branch of the wiki repository.

Here we show the web portal **Files** page for the **Fabrikam Fiber.wiki** repo.

> [!div class="mx-imgBorder"]  
> ![Wiki Master files](_img/wiki/wikimaster-files.png)

You can use any client you want or git command line tools to update your wiki offline. For details on working with Git repositories and supported tools, see [Git Repositories](../../repos/git/index.md).

The basic steps to update wiki content offline are as follows:

1. Clone your wiki Git repo to your local IDE or workspace
2. Add files or folders to your local git branch
3. Update the .order file(s) to reflect the pages and sub-pages that you've added
4. Commit and push the updates you made to your local git branch.

::: moniker range=">= azdevserver-2019"
You can perform these steps to migrate markdown pages from another wiki to your team project wiki or to content that you publish as code to a wiki. In order to perform these steps, you'll want to understand the underlying structure of your wiki Git repo. For details, see [Wiki Git repository files and file structure](wiki-file-structure.md).  To understand how to manage the different wiki types, see [Differences between provisioned wiki and publish code as wiki](provisioned-vs-published-wiki.md).
::: moniker-end

::: moniker range="tfs-2018"
You can perform these steps to migrate markdown pages from another wiki to your team project wiki. In order to perform these steps, you'll want to understand the underlying structure of your wiki Git repo. For details, see [Wiki Git repository files and file structure](wiki-file-structure.md).  
::: moniker-end

<a id="edit-wiki-offline"></a>

## Clone your wiki

1. To clone a wiki Git repository, open the **More** context menu and choose **Clone wiki**.

	<img src="_img/wiki/clone-wiki.png" alt="Clone wiki Git repository" style="border: 1px solid #C3C3C3;" />

2. From the **Clone repo** dialog, click the ![ ](../../_img/icons/copy-clone-icon.png) copy-clone icon.  

	<img src="_img/wiki/clone-wiki-dialog.png" alt="Copy the wiki url" style="border: 1px solid #C3C3C3;" />

	You can enter it in your browser to view the files defined under the wikiMaster branch.
 
	> [!div class="mx-imgBorder"]  
	> ![Wiki Master files](_img/wiki/work-offline-wikiMaster-files.png)

3. Use the URL that you copied to clone the repo in the IDE that you use. To learn more, see one of these articles:
	- [Clone an existing Git repo](../../repos/git/clone.md)
	- [Using Version Control in VS Code](https://code.visualstudio.com/docs/editor/versioncontrol)
	- [Get Started with Git and Azure DevOps](../../repos/git/gitquickstart.md?view=vsts&tabs=visual-studio)

## Add pages to your local Git repository

You author pages using [markdown format](../../reference/markdown-guidance.md). Add a markdown file for each page and sub-page that you want to add to your wiki to your local branch.

### Add pages

To add pages at the root of the wiki tree, add a markdown file at the root of the Git repository.

0. For each page you want to add, create a markdown file with the page contents and add it under the root folder for your repo.
 
	For the Fabrikam Fiber team project, this will be under the following folder:  

	`C:\Users\UserName\Source\Repos\Fabrikam Fiber.wiki`

0.  To add pages at the root of the wiki tree, add a markdown file for each page at the root of the Git repository.

	> [!div class="mx-imgBorder"]  
	> ![Local branch wiki Git repo](_img/wiki/add-pages.png)

2. After you've added all the pages you want to add at the root, update the **.order** file at the root. This file should contain one entry for each markdown file that is defined at the root. Each entry should match the file title with spaces replaced with a dash.

	For example:  

	```
	Welcome 
	Roadmap  
	How-to-contribute  
	Home  
	Reference  
	```

### Add sub-pages

0. To add sub-pages, create a folder for the parent page, and then add markdown files for each sub-page in the folder.

	For example, here we show four files added to the How-to-contribute folder. These sub-pages will appear under the How to contribute page in the wiki.

	> [!div class="mx-imgBorder"]  
	> ![Local branch wiki Git repo](_img/wiki/add-sub-pages.png)

0. Next, add a **.order** file in the folder with the order of the sub-pages as they should appear in the wiki. To understand the use of the **.order** file to sequence pages, see [Wiki Git repository files and file structure](wiki-file-structure.md).
	 
	Keeping with our example, the contents of this file will contain:

	```
	Request-extensions  
	Licensing  
	Smoke-test  
	Coding-guidelines  
	```

### Push your changes

- When done with all your updates, [push the files to the Git repository](../../repos/git/pushing.md).

	The pages and sub-pages you added will appear immediately in your wiki.

	> [!div class="mx-imgBorder"]  
	> ![Wiki tree updated](_img/wiki/wiki-tree-updated-offline.png)

	If there are any errors in the process, the pages will appear in your wiki with a warning sign.

	<img src="_img/wiki/wiki-offline-order-warning.png" alt="Warning when .order file is not updated properly" style="border: 1px solid #C3C3C3;" />

## Related articles

- [Create a wiki for your team project](wiki-create-repo.md)
- [Wiki Git repository files and file structure](wiki-file-structure.md)
- [Clone an existing Git repo](../../repos/git/clone.md)
- [Share code with push](../../repos/git/pushing.md)
- [Manage README and Wiki permissions](manage-readme-wiki-permissions.md)
- [Syntax guidance for Markdown files, widgets, wikis, and pull request comments](../../reference/markdown-guidance.md).

<!---

<img src="_img/wiki/wiki-repo-struct.png" alt="Wiki Git repository structure" style="border: 1px solid #C3C3C3;" />
 
<img src="_img/wiki/wiki-offline-add-page.png" alt="Add page to wiki Git repo" style="border: 1px solid #C3C3C3;" />

	<img src="_img/wiki/wiki-offline-update-order-subpages.png" alt="Update .ORDER file with the order of the sub-pages in the Git repo" style="border: 1px solid #C3C3C3;" />

	<img src="_img/wiki/wiki-offline-updated.png" alt="Wiki pages appear after updating the pages offline" style="border: 1px solid #C3C3C3;" />

In the web portal, you can view the repo files based on the following URL: 
::: moniker range=">= azdevserver-2019"
	`https://*AccountName*.visualstudio.com/DefaultCollection/*ProjectName*/_git/*ProjectName*.wiki`
::: moniker-end
::: moniker range=">= tfs-2018"
	`https://*ServerName*/DefaultCollection/*ProjectName*/_git/*ProjectName*.wiki`
::: moniker-end

1. Clone your wiki Git repo to your local IDE or workspace 
2. Create a local git branch based on your wikiMaster branch 
3. Add files or folders to your local git branch 
4. Update the .ORDER file(s) to reflect the pages and subpages you've added 
5. Commit and push the updates you made to your local git branch
6. Create a pull request to merge your changes to the wikiMaster branch 
7. Approve the changes to complete the pull request.  

While that's a lot of steps, the main steps that are specific to updating a wiki is step 3. The rest follow the standard steps for updating a Git repo.

-->  