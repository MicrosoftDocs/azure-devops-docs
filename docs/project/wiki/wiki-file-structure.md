---
title: Wiki Files, Folder Structure, Git Repo Conventions
titleSuffix: Azure DevOps 
description: Explore the file and folder structure for provisioned wikis or wikis published as code in Azure DevOps, including naming and location conventions for the Git repository.
ms.subservice: azure-devops-wiki
ms.custom: wiki, devdivchpfy22
ms.topic: concept-article
ms.author: chcomley
ms.reviewer: gopinach
author: chcomley
ms.date: 05/29/2025
#customer intent: As an Azure DevOps developer, I want to understand the wiki file and folder structure in the Git repository, so I can follow the naming and location conventions.
---

# Wiki file and folder structure in Git

[!INCLUDE [version-lt-eq-azure-devops](../../includes/version-lt-eq-azure-devops.md)] 

This article describes the files and folder structure for provisioned wikis and wikis published as code. For both types of wiki, the files are stored in a Git repository. Files can include Markdown pages, code, images, attachments, or other artifacts. To establish the presentation sequence of the files, Git adds a special file (_.order_) in each repo folder. 

When you create a project, a wiki isn't created by default. You can [provision a wiki](wiki-create-repo.md), [create a README](../../repos/git/create-a-readme.md), or [publish project code as a wiki](../../project/wiki/publish-repo-to-wiki.md).

You create your wiki by using the Azure DevOps user interface. Then you can edit the wiki from your [Git repository URL path](wiki-create-repo.md#access-your-wiki-repo).

## Repository files and folder structure

The Git repository for a wiki has two naming conventions:

- The wiki repo name is `<ProjectName>.wiki` where `<ProjectName>` is the name of your project.
- The name of the root branch for the wiki repo is `wikiMain`.

You manage a wiki repo in the same way you manage other Git repos by defining branch policies on the `wikiMain` branch. You can also make changes to your local `wikiMain` branch and push them directly to the remote branch without defining any policies.

A wiki repo consists of the following files and folders:

- A file for each Markdown page located at the root level
- A file named _.order_ located at the root level and also within each subfolder
- A subfolder for each wiki page that has subpages
- A folder named _.attachments_ to store all attachments used in the wiki

## File naming conventions

The file name for each wiki page corresponds to the wiki page title. In the file name, a hyphen (`-`) represents a space in the page title. For example, the page title "How to contribute" corresponds to the file name _How-to-contribute.md_. The URL path to the wiki page includes the file name. For example, `https://github.com/ExampleWiki/How-To/How-to-contribute.md`. This approach helps ensure bookmark links to the page remain intact as the wiki changes over time.

[!INCLUDE [temp](./includes/wiki-naming-conventions.md)]

## Page sequence and the .order file

The _.order_ file defines the wiki page sequence. Git looks for this file in each folder to identify the sequence to present files at that location. The default page sequence is alphabetical order (A to Z) by file name.

### Define custom page sequence

When a folder doesn't have an _.order_ file, Git uses the default alphabetical sequence.

You can define a custom sequence for any folder by updating the _.order_ file in the folder, including at the root level.

The following visual shows an example of a wiki table of contents (TOC) and the corresponding _.order_ file that creates the TOC.

:::row:::
:::column span="":::

**Wiki TOC displays in the web browser**

:::image type="content" source="media/wiki/wiki-toc-example.png" border="false" alt-text="Screenshot of the TOC for a wiki with several folders expanded to show subfolders.":::

:::column-end:::
:::column span="":::

**.order file defines the TOC page sequence**

:::image type="content" source="media/wiki/wiki-repo-order-file-example.png" border="false" alt-text="Screenshot of a wiki folder and file list in a Git repository. The .order file is open and shows the definition for the TOC page sequence."::: 

:::column-end:::
:::row-end:::

The _.order_ file changes the sequence from alphabetical to "Marketing" followed by "Fabrikam Fiber."

For more information about how to reorder wiki pages, see [Add, edit, and reorder wiki pages](add-edit-wiki.md#reorder-or-move-wiki-pages).

### Restore alphabetical sequence

If a folder has a custom sequence, you can revert the sort method to alphabetical by following these steps:

1. Copy the clone URL for the wiki and open it in a browser. The Git repository for the wiki opens.

1. Go to the _.order_ file that you want to revert and delete the file. After the file is deleted, Git automatically creates a new _.order_ file for that location. The new file uses the default sequence.

## Related content

- [Set up wiki vs. publish code as wiki](provisioned-vs-published-wiki.md)
- [Create a wiki for your team project](wiki-create-repo.md)
- [Publish a Git repository to a wiki](publish-repo-to-wiki.md)