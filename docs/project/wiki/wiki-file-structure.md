---
title: Wiki files, structure, and conventions
titleSuffix: Azure DevOps 
description: Understand the file conventions of the Git repository and project wikis in Azure DevOps.
ms.subservice: azure-devops-wiki
ms.custom: wiki, devdivchpfy22
ms.topic: conceptual 
ms.author: chcomley
ms.reviewer: gopinach
author: chcomley
monikerRange: '>= tfs-2018'
ms.date: 06/13/2022  
---

# Wiki files and file structure

[!INCLUDE [version-lt-eq-azure-devops](../../includes/version-lt-eq-azure-devops.md)] 

Learn about the files and file structure for project wikis and code wikis. The following guidance might specify code wikis, however it applies to both types of wiki.

When you create a team project, a wiki isn't created by default. For more information about creating wikis, see [Create a wiki for your project](wiki-create-repo.md).

Each code wiki is powered by a Git repository in the back-end. This repository stores the Markdown pages, images, attachments, and the sequence of pages and subpages. You create your wiki via the Azure DevOps user interface, and then you can edit the wiki via your [Git repository URL path](wiki-create-repo.md#how-can-i-go-to-the-git-repository). For more information about publishing code wikis, see [Publish a Git repository to a wiki](publish-repo-to-wiki.md).

## Wiki file and folder structure

The team project wiki Git repositories are assigned the following labels.

- Wiki repo for a team project: *ProjectName.wiki*
- Main branch: *wikiMain*

> [!NOTE]  
> You can manage your wiki repo in the same way you manage any other Git repo, by defining branch policies on the wikiMain branch. However, you can make changes to your local wikiMain branch and push them directly to the remote branch without defining any policies.

The wiki repository has the following files and folders:

- File for each Markdown page entered at the root level
- File labeled *.order* at the root and under each folder  
- Folder for each page that has subpages  
- *.attachments* folder, storing all the attachments of the wiki  

## File naming conventions

Each file requires using hyphens instead of spaces in the page title. For example, the "How to contribute" page title corresponds to the **How-to-contribute.md** file name. The page name gets added to the URL, ensuring that links you share remain intact as the wiki changes over time.

[!INCLUDE [temp](./includes/wiki-naming-conventions.md)]

## *.order* file

The *.order* file defines the sequence of pages within the wiki. The following visual shows an example of a wiki TOC and it's corresponding *.order* file.

| **Wiki TOC**     | ***.order* file**                                                                  |
|-------------------------------------------------------------------------------------------------------------|---------------------------------------------------------------------------------------------------------------------------------|
| :::image type="content" source="media/wiki/wiki-toc-example.png" alt-text="Screenshot of wiki TOC example."::: | :::image type="content" source="media/wiki/wiki-repo-order-file-example.png" alt-text="Screenshot of Wiki example .order file."::: |

The default hierarchy is in alphabetical sequence, however you can change this hierarchy in the *.order* file. For more information about how to reorder wiki pages, see [Add and edit wiki pages, Reorder a wiki page](add-edit-wiki.md#reorder-a-wiki-page).

### Delete the *.order* file to revert to alphabetical sorting

When there's no *.order* file the pages get sorted alphabetically. To revert to alphabetical sorting, do the following steps:

1. Copy the clone URL for the wiki and open it in a browser.
   Doing so opens the Git repository (files hub), which backs the wiki.
2. Go to the *.order* file and delete it.
   The *.order* file gets automatically (re)created after deletion, for example, in a drag and drop action on an article.

## Related articles

- [Set up wiki vs. publish code as wiki](provisioned-vs-published-wiki.md)
- [Create a wiki for your team project](wiki-create-repo.md)
- [Publish a Git repository to a wiki](publish-repo-to-wiki.md)
- [Update wiki pages offline](wiki-update-offline.md)
- [Manage README and wiki permissions](manage-readme-wiki-permissions.md)
