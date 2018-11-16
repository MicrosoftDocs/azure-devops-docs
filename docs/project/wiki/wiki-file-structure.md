---
title: Wiki repository files, structure, and conventions in Azure DevOps
titleSuffix: Azure DevOps & TFS 
description: Understand the file conventions of the Git repository wiki in Azure DevOps
ms.technology: devops-collab
ms.custom: wiki
ms.prod: devops
ms.topic: conceptual
ms.assetid:
ms.manager: douge
ms.author: chcomley
ms.reviewer: sancha
author: chcomley
monikerRange: '>= tfs-2018'
ms.date: 11/15/2018  
---

# Wiki Git repository files and file structure

[!INCLUDE [temp](../../_shared/version-vsts-tfs-2018.md)]

Each wiki is powered by a Git repository in the back-end. That repository stores the markdown pages, images, attachments, and the sequence of pages and sub-pages. When you create a team project, a Wiki Git repo is not created by default. To start using a wiki, you must first [provision it](wiki-create-repo.md).  

## Wiki file and folder structure

The labels assigned to the team project wiki Git repository are as follows:

- The wiki repo provisioned for a team project corresponds to *ProjectName.wiki*
- The master branch corresponds to *wikiMaster*.

> [!NOTE]  
> You can manage your wiki repo in the same way you manage any other Git repo by defining branch policies on the wikiMaster branch. However, without any policies defined, you can make changes to your local wikiMaster branch and push them directly to the remote branch.

The wiki repository contains the following files and folders:

- A file for each markdown page entered at the root level
- A folder for each page that contains sub-pages  
- A folder labeled *.attachments* that stores all the attachments of the wiki  
- A file labeled *.order* at the root and under each folder  

<a id="file-naming" />
<a id="page-title-names"></a>

## File naming conventions

Each file follows the convention of inserting dashes for a space in the page title. For example, the "How to contribute" page title corresponds to **How-to-contribute.md** file name.  

[!INCLUDE [temp](./_shared/wiki-naming-conventions.md)]

<a id="order-file" />

## The .order file defines sequence of pages and sub-pages

Each **.order** file defines the sequence of pages contained within the folder.

- A root .order file specifies the sequence of pages defined at the root level
- A .order file within each folder defines the sequence of sub-pages added to a parent page.

## Related articles

- [Differences between provisioned wiki and publish code as wiki](provisioned-vs-published-wiki.md)
- [Create a wiki for your team project](wiki-create-repo.md)
- [Publish a Git repository to a wiki](publish-repo-to-wiki.md)
- [Update wiki pages offline](wiki-update-offline.md)
- [Manage README and Wiki permissions](manage-readme-wiki-permissions.md)