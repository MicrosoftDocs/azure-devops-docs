---
title: Clone and update wiki pages offline
titleSuffix: VSTS & TFS 
description: Add and update pages offline for your built-in team project wiki in Visual Studio Team Services & Team Foundation Server 
ms.technology: devops-collab
ms.custom: wiki
ms.prod: devops
ms.topic: conceptual
ms.assetid:
ms.manager: douge
ms.author: kaelliauthor: KathrynEE
monikerRange: 'vsts || >= tfs-2018'
ms.date: 04/05/2018  
---

# Clone and update wiki pages offline

[!INCLUDE [temp](../_shared/version-vsts-tfs-2018.md)]

The wiki created for a team project employs a git repository to store pages, images, attachments, and the sequence of pages and sub-pages. To update your wiki pages offline, you must first clone your wiki repository and add or edit pages much the same way you develop code in a git repo. You can then push your changes to your working branch and merge them with the master branch of the wiki repository.

Here we show the web portal **Files** page for the **Fabrikam Fiber.wiki** repo:  

> [!div class="mx-imgBorder"]  
> ![Wiki Master files](_img/wiki/wikimaster-files.png)

You can use any client you want or git command line tools to update your wiki offline. For details on working with Git repositories and supported tools, see [Git Repositories](../git/index.md). 

The basic steps to update wiki pages offline are:
1. Clone your wiki git repo to your local IDE or workspace 
2. Add files or folders to your local git branch 
3. Update the .order file(s) to reflect the pages and subpages you've added 
4. Commit and push the updates you made to your local git branch.

You can perform these steps to migrate markdown pages from another wiki to your team project wiki as well. In order to perform these steps, you'll want to understand the underlying structure of your wiki git repo. 

## Understand the underlying wiki git repository structure

The labels assigned to your wiki git repository are as follows:  
- The wiki repo corresponds to *ProjectName.wiki*
- The master branch corresponds to *WikiMaster*.

> [!NOTE]  
> You can manage your wiki repo in the same way you manage any other git repo by defining branch policies on the wikiMaster branch. However, without any policies defined, you can make changes to your local wikiMaster branch and push them directly to the remote branch. 

The wiki repository contains the following files and folders:
- A file for each markdown page entered at the root level    
- A folder for each page that contains subpages  
- A folder labeled *.attachments* that stores all the attachments of the wiki  
- A file labeled *.order* at the root and under each folder  

### File naming conventions 

Each file follows the convention of inserting dashes for a space in the page title. For example, the "How to contribute" page title corresponds to **How-to-contribute.md** file name.  

[!INCLUDE [temp](./_shared/wiki-naming-conventions.md)]

### The .order file defines sequence of pages and sub-pages 

Each .order file defines the sequence of pages contained within the folder.

- A root .order file specifies the sequence of pages defined at the root level
- A .order file within each folder defines the sequence of sub-pages added to a parent page.


<a id="edit-wiki-offline"></a>

## Clone your wiki

1. To clone a wiki git repository, open the **More** context menu and choose **Clone wiki**.

	<img src="_img/wiki/clone-wiki.png" alt="Clone wiki git repository" style="border: 1px solid #C3C3C3;" />

2. From the **Clone repo** dialog, click the ![](../_img/icons/copy-clone-icon.png) copy-clone icon.  

	<img src="_img/wiki/clone-wiki-dialog.png" alt="Copy the wiki url" style="border: 1px solid #C3C3C3;" />

	You can enter it in your browser to view the files defined under  the wikiMaster branch.
 
	> [!div class="mx-imgBorder"]  
	> ![Wiki Master files](_img/wiki/work-offline-wikiMaster-files.png)   

3. Use the URL that you copied to clone the repo in the IDE that you use. To learn more, see one of these articles: 
	- [Clone an existing Git repo](../git/tutorial/clone.md) 
	- [Using Version Control in VS Code](https://code.visualstudio.com/docs/editor/versioncontrol)
	- [Get Started with Git and VSTS](../git/gitquickstart.md?view=vsts&tabs=visual-studio)


## Add pages to your local git repository

You author pages using [markdown format](../reference/markdown-guidance.md). Add a markdown file for each page and sub-page that you want to add to your wiki to your local branch. 

### Add pages

To add pages at the root of the wiki tree, add a markdown file at the root of the git repository.

0. For each page you want to add, create a markdown file with the page contents and add it under the root folder for your repo. 
 
	For the Fabrikam Fiber team project, this will be under the following folder:  

	`C:\Users\UserName\Source\Repos\Fabrikam Fiber.wiki`

0.  To add pages at the root of the wiki tree, add a markdown file for each page at the root of the git repository.

	> [!div class="mx-imgBorder"]  
	> ![Local branch wiki git repo](_img/wiki/add-pages.png)

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
	> ![Local branch wiki git repo](_img/wiki/add-sub-pages.png)

0. Next, add a **.order** file in the folder with the order of the sub-pages as they should appear in the wiki.
	 
	Keeping with our example, the contents of this file will contain: 

	```
	Request-extensions  
	Licensing  
	Smoke-test  
	Coding-guidelines  
	```

### Push your changes to wikiMaster

- When done with all your updates, [push the files to the git repository](../git/tutorial/pushing.md). 

	The pages and sub-pages you added will appear immediately in your  wiki.

	> [!div class="mx-imgBorder"]  
	> ![Wiki tree updated](_img/wiki/wiki-tree-updated-offline.png)

	If there are any errors in the process, the pages will appear in your wiki with a warning sign.

	<img src="_img/wiki/wiki-offline-order-warning.png" alt="Warning when .order file is not updated properly" style="border: 1px solid #C3C3C3;" />

## Related articles

- [Create a wiki for your team project](wiki-create-repo.md)
- [Clone an existing Git repo](../git/tutorial/clone.md)
- [Share code with push](../git/tutorial/pushing.md)
- [Manage README and Wiki permissions](manage-readme-wiki-permissions.md)
- [Syntax guidance for Markdown files, widgets, wikis, and pull request comments](../reference/markdown-guidance.md).


<!---

<img src="_img/wiki/wiki-repo-struct.png" alt="Wiki git repository structure" style="border: 1px solid #C3C3C3;" />
 
<img src="_img/wiki/wiki-offline-add-page.png" alt="Add page to wiki git repo" style="border: 1px solid #C3C3C3;" />

	<img src="_img/wiki/wiki-offline-update-order-subpages.png" alt="Update .ORDER file with the order of the sub-pages in the git repo" style="border: 1px solid #C3C3C3;" />

	<img src="_img/wiki/wiki-offline-updated.png" alt="Wiki pages appear after updating the pages offline" style="border: 1px solid #C3C3C3;" />

In the web portal, you can view the repo files based on the following URL: 
::: moniker range="vsts"
	`https://*AccountName*.visualstudio.com/DefaultCollection/*ProjectName*/_git/*ProjectName*.wiki`
::: moniker-end
::: moniker range=">= tfs-2018"
	`https://*ServerName*/DefaultCollection/*ProjectName*/_git/*ProjectName*.wiki`
::: moniker-end

1. Clone your wiki git repo to your local IDE or workspace 
2. Create a local git branch based on your wikiMaster branch 
3. Add files or folders to your local git branch 
4. Update the .ORDER file(s) to reflect the pages and subpages you've added 
5. Commit and push the updates you made to your local git branch
6. Create a pull request to merge your changes to the wikiMaster branch 
7. Approve the changes to complete the pull request.  

While that's a lot of steps, the main steps that are specific to updating a wiki is step 3. The rest follow the standard steps for updating a git repo.

-->  