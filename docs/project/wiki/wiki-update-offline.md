---
title: Clone and Update Wiki Content Offline 
titleSuffix: Azure DevOps 
description: Add and update pages offline for your built-in team project wiki in Azure DevOps.
ms.subservice: azure-devops-wiki
ms.custom: wiki, devdivchpfy22
ms.topic: concept-article
ms.assetid:
ms.author: chcomley
author: chcomley
ms.reviewer: gopinach
monikerRange: "<=azure-devops"
ms.date: 06/05/2025
#customer intent: As an Azure DevOps developer, I want to author pages offline for my team project wiki, so I can work in my local branch before pushing changes to the main repo.
---

# Clone and update wiki content offline

[!INCLUDE [version-lt-eq-azure-devops](../../includes/version-lt-eq-azure-devops.md)] 

The process for updating wiki offline is the same as developing code in a Git repository. You can use your preferred client and git command-line tools to update your wiki pages offline. For details on working with Git repositories and supported tools, see the [Azure Repos Git Documentation](../../repos/git/index.yml).

The basic steps to update wiki content offline include:

1. [Clone your wiki Git repo to your local interactive development environment (IDE) or workspace](#clone-your-wiki).

1. [Add files or folders to your local Git repo branch](#add-pages).

1. Update the _.order_ files to reflect the sequence changes for pages and subpages.

1. [Commit and push the updates to your local Git branch](#push-your-changes).

## Prerequisites

| Category | Requirements |
|----------|--------------|
| **Project access** | Member of the project where the wikis located. You can request access from your Project Administrator, as needed. |
| **Permissions**    | - Member of the **Contributors** group. <br> - To publish code as wiki, **Create Repository** permission. By default, this permission is set for members of the [Project Administrators group](../../repos/git/set-git-repository-permissions.md).  |
| **Access levels**  | At least **Basic** access. |
| **Tasks**          | - [Understand the underlying structure of your wiki Git repo](wiki-file-structure.md). <br> - Understand the [differences between a provisioned wiki and a published code as wiki](provisioned-vs-published-wiki.md). |

## Clone your wiki

Your wiki repository stores pages, images, attachments, and the sequence of pages and subpages. Clone your wiki to begin.

1. Sign in to your project (`https://dev.azure.com/<Organization>/<Project>`).

1. Select your wiki, then select **More actions** (*...*) > **Clone wiki**:

   :::image type="content" source="media/wiki/more-clone-wiki.png" alt-text="Screenshot that shows how to select the More options Clone wiki Git action for the selected wiki.":::

1. In the **Clone repository** dialog, select the **Copy clone URL to clipboard** :::image type="icon" source="../../media/icons/copy-clone-icon.png"::: icon: 

   :::image type="content" source="media/wiki/copy-clone-url-to-clipboard.png" alt-text="Screenshot that shows the wiki repository to clone in the Clone repository dialog.":::

   Paste the URL into your browser. The Git repository page opens where you can view the files defined under the wikiMain branch. The following example shows the files in the Git repo for the CanaryBuilds project:

   :::image type="content" source="media/wiki/work-offline-wikiMain-files.png" alt-text="Screenshot that shows the Git repository page with the files defined under the wikiMain branch.":::

   > [!IMPORTANT]
   > The **Generate Git Credentials** feature is planned for removal. Review the Git Authentication documentation for all authentication methods available to you for git clone operations.

1. Use the URL that you copied to clone the repo in your preferred IDE. For more information, see the following articles:

   - [Clone an existing Git repo](../../repos/git/clone.md)
   - [Use Version Control in Visual Studio Code](https://code.visualstudio.com/docs/editor/versioncontrol)
   - [Get started with Git and Azure DevOps](../../repos/git/gitquickstart.md?tabs=visual-studio)

## Add pages to your local Git repository

Git repo pages are formatted as [Markdown](./markdown-guidance.md) (_.md_) files. For each page you want to add to your wiki, you create a Markdown file in your local branch. After you add pages, you update the _.order_ file to adjust the page sequence to include the new pages.

### Add pages

You can add pages at the top of the wiki structure in the root (`\`) folder and also in other folders.

1. Create the Markdown (_.md_) file with the content for the new page. In most cases, the file name matches the page title. In the file name, replace any spaces in the title with hyphens (`-`). For more information about creating page content, see [Add a wiki page](add-edit-wiki.md#add-a-wiki-page).

1. Place the file in the desired folder within the wiki structure in your local branch, such as the root folder. The CanaryBuilds project example root folder is `C:\Users\UserName\Source\Repos\CanaryBuilds.wiki`:

    :::image type="content" source="media/wiki/add-pages.png" alt-text="Screenshot that shows the local branch of the wiki Git repo for the CanaryBuilds project.":::

1. Update the _.order_ file in the same folder where you placed the new page file. The entry text for the page is the file name without the Markdown extension (_.md_). The CanaryBuilds project example adds the new page "How to contribute," which corresponds to the entry text _How-to-contribute_:

   For example:  

   ```
   Welcome
   Roadmap  
   How-to-contribute  
   Home  
   Reference  
   ```

   For more information about the _.order_ file, see [Page sequence and the .order file](wiki-file-structure.md#page-sequence-and-the-order-file).

### Add subpages

You can also create subpages for a page in your wiki:

1. Create a folder to serve as the parent page. For more information, see [Repository files and folder structure](wiki-file-structure.md#repository-files-and-folder-structure).

1. Create the Markdown file for each subpage and place the file in the parent page folder. The CanaryBuilds project example adds the _How-to-contribute_ folder as the parent page: 

   :::image type="content" source="media/wiki/add-sub-pages.png" alt-text="Screenshot that shows the How-to-contribute folder in the CanaryBuilds project with new subpages.":::

1. Create a _.order_ file in the parent page folder to define the sequence for the subpages as they should display in the wiki.
	 
   For example, the file has the following subpages:

   ```
   Request-extensions  
   Licensing  
   Smoke-test  
   Coding-guidelines  
   ```

## Push your changes

When your local updates are ready, [push the files to the Git repository](../../repos/git/pushing.md).

The added pages and subpages appear immediately in your wiki. The following example shows the updates for the CanaryBuilds project:

:::image type="content" source="media/wiki/wiki-tree-updated-offline.png" alt-text="Screenshot that shows the updated wiki structure for the CanaryBuilds project.":::

If there are any errors in the process, the pages appear in your wiki with a warning symbol:

:::image type="content" source="media/wiki/wiki-offline-order-warning.png" alt-text="Screenshot that shows a page with an error indicated by the Warning symbol.":::

## Related content

- [Wiki Git repository files and file structure](wiki-file-structure.md)
- [Clone an existing Git repo](../../repos/git/clone.md)
- [Syntax guidance for Markdown files, widgets, wikis, and pull request comments](./markdown-guidance.md)