---
title: Wiki files, structure, and conventions
titleSuffix: Azure DevOps 
description: Understand the file conventions of the Git repository and project wikis in Azure DevOps.
ms.technology: devops-collab
ms.custom: wiki
ms.topic: conceptual
ms.assetid:
ms.author: chcomley
ms.reviewer: gopinach
author: chcomley
monikerRange: '>= tfs-2018'
ms.date: 05/27/2021  
---

# Wiki files and file structure

[!INCLUDE [temp](../../includes/version-vsts-tfs-2018.md)]

Learn about the files and file structure for project wikis and code wikis. This guidance applies to both types of wiki. When you create a team project, a wiki isn't created by default.

For more information about creating project wikis and code wikis, see [Create a wiki for your project](wiki-create-repo.md).

Each code wiki is powered by a Git repository in the back-end. This repository stores the Markdown pages, images, attachments, and the sequence of pages and subpages. You create your wiki via the Azure DevOps user interface, and then you can edit the wiki via your [Git repository URL path](wiki-create-repo.md#how-can-i-go-to-the-git-repository). For more information about publishing code wikis, see [Publish a Git repository to a Wiki](publish-repo-to-wiki.md).

## Wiki file and folder structure

The team project Wiki Git repositories are assigned the following labels.

- Wiki repo for a team project: *ProjectName.wiki*
- Main branch: *wikiMain*

> [!NOTE]  
> You can manage your Wiki repo in the same way you manage any other Git repo, by defining branch policies on the wikiMain branch. However, you can make changes to your local wikiMain branch and push them directly to the remote branch without defining any policies.

The Wiki repository has the following files and folders:

- File for each Markdown page entered at the root level
- File labeled *.order* at the root and under each folder  
- Folder for each page that has subpages  
- *.attachments* folder, storing all the attachments of the Wiki  

<a id="file-naming" />
<a id="page-title-names"></a>

## File naming conventions

Each file requires using dashes instead of spaces in the page title. For example, the "How to contribute" page title corresponds to the **How-to-contribute.md** file name. The page name gets added to the URL, ensuring that links you share remain intact as the Wiki changes over time.

[!INCLUDE [temp](./includes/wiki-naming-conventions.md)]

<a id="order-file" ></a>

## *.order* file

The *.order* file defines the sequence of pages within the Wiki. With *.order* files, you can set your own sequence for the Wiki pages according to the information flow on that hierarchy.

The following screenshots show an example of what a wiki TOC and it's corresponding *.order* file look like.

|***.order* file**  |**Wiki TOC** |
|---------|---------|
| :::image type="content" source="media/wiki/wiki-repo-order-file-example.png" alt-text="Wiki example .order file screenshot.":::   |  :::image type="content" source="media/wiki/wiki-toc-example.png" alt-text="Wiki TOC example screenshot.":::       |


The default hierarchy is in alphabetical sequence, however you can change the hierarchy in the *.order* file.

When there's no *.order* file the pages get sorted alphabetically. To revert to alphabetical sorting, do the following steps:

1. Copy the clone URL for the Wiki and open it in a browser.
   Doing so opens the Git repository (files hub), which backs the Wiki.
2. Go to the *.order* file and delete it.
   The *.order* file gets automatically (re)created after deletion, for example, in a drag and drop action on an article.

## Related articles

- [Provisioned Wiki vs. publish code as wiki](provisioned-vs-published-wiki.md)
- [Create a Wiki for your team project](wiki-create-repo.md)
- [Publish a Git repository to a Wiki](publish-repo-to-wiki.md)
- [Update Wiki pages offline](wiki-update-offline.md)
- [Manage README and Wiki permissions](manage-readme-wiki-permissions.md)
