---
title: Share information with a project, repo, README, or wiki
titleSuffix: Azure DevOps
description: Share information using a project, repo, README, or wiki in Azure DevOps. 
ms.subservice: azure-devops-wiki
ms.custom: wiki, devdivchpfy22
ms.assetid:  
ms.author: chcomley
author: chcomley
ms.reviewer: gopinach
ms.topic: overview
ms.date: 07/06/2022  
monikerRange: '<= azure-devops'
---

# About wikis, READMEs, and Markdown

[!INCLUDE [version-lt-eq-azure-devops](../../includes/version-lt-eq-azure-devops.md)]

To support your team or contributors to your project, use [Markdown](https://en.wikipedia.org/wiki/Markdown) to add rich formatting, tables, and images to your team project. You can use Markdown format within a team project wiki, content you add to a dashboard, your team project README file, or other repository README file.  

## Wiki

Use your team project wiki to share information with other team members. When you provision a wiki from scratch, a new Git repository stores your Markdown files, images, attachments, and sequence of pages. This wiki supports collaborative editing of its content and structure.



::: moniker range=">= azure-devops-2019"

The following features are supported for the team project wiki.

### Provision or create a wiki

- [Create a wiki for your team project](wiki-create-repo.md)
- [Publish code as wiki](publish-repo-to-wiki.md)

### Work with wiki content

- [Add and edit wiki pages](add-edit-wiki.md)  
- [View wiki page history and revert](wiki-view-history.md)
- [Clone and update wiki content offline](wiki-update-offline.md)
- [Use wiki keyboard shortcuts](../navigation/keyboard-shortcuts.md#wiki-keyboard-shortcuts)
- [Filter or print wiki content](filter-print-wiki.md) <sup>1</sup>  

> [!NOTE]
> The print feature might not be available from the Firefox web browser.

### Format wiki content

- [Markdown format](markdown-guidance.md)  
- [HTML tags](markdown-guidance.md#html)  
- [Insert and resize images](markdown-guidance.md#images)
- [Link to work items using #](markdown-guidance.md#link-work-items)
- [Attach files](markdown-guidance.md#attach)  
- [Mathematical notation and characters](markdown-guidance.md#math-notation)  
- [Table of contents (TOC) for wiki pages](markdown-guidance.md#toc-wiki)  

::: moniker-end



::: moniker range=">= azure-devops-2019"

## Publish existing Git repositories to a wiki  

Many teams document their code using Markdown and check in these files along with the code. While Git supports the maintenance and review of such documentation along with standard pull requests, such files present a few challenges to consumers of the content.

- Readers must often sift through many files and folders to find the content of interest.
- Content lacks organization and structure. There's no inherent page hierarchy to support readers.
- Content versioning isn't supported.
- Searching through content relies on searching the codes rather than a search experience optimized for searching content.

With the publish code as a wiki feature, you can publish one or more Git repositories defined in your team project to a wiki. This feature provides a way to maintain your content alongside your code base, and lets you selectively publish and update your content to a wiki.  

There are significant differences between how you manage the content for a wiki that you provision for a team project versus wiki pages that you publish from a Git repository. For details, see [Publish a Git repo to a wiki](publish-repo-to-wiki.md).

::: moniker-end

## Markdown

Markdown makes it easy to format text and include images. You can also link to documents within your project pages, README files, dashboards, and pull requests. You can provide guidance to your team in the following places using Markdown:

::: moniker range=">= azure-devops-2019"
- [Team project wiki](add-edit-wiki.md)
- [Publish code as wiki](publish-repo-to-wiki.md)
- [Add Markdown to a dashboard](../../report/dashboards/add-markdown-to-dashboard.md)  
- [Project page or Welcome pages](../../organizations/projects/project-vision-status.md)
- [Repository README files](../../repos/git/create-a-readme.md)
- [Pull requests](../../repos/git/pull-requests.md)

::: moniker-end



For supported syntax, see [Use Markdown in Azure DevOps](markdown-guidance.md).

## READMEs

You can define a README file or multiple files for each repo or team project. Write your README in Markdown instead of plain text.

Use README pages to orient contributors to work within your project. Consider adding the following guidance:

- Project focus
- Prerequisites
- Setting up the environment
- Tips for getting things done within the project
- Purpose or use of specific files
- Project-specific terms and acronyms
- Workflow guidance about committing or uploading changes and adding branches
- Project sponsors or contacts  

Here are some great READMEs that use this format and speak to all audiences for reference and inspiration:

- [ASP.NET Core](https://github.com/aspnet/Home)
- [Visual Studio Code](https://github.com/Microsoft/vscode)
- [Chakra Core](https://github.com/Microsoft/ChakraCore)
