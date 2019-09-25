---
title: Search Wiki content defined in your team project
titleSuffix: Azure DevOps
description: Share information using a project, repo, README, or Wiki in Azure DevOps. 
ms.technology: devops-collab
ms.custom: wiki
ms.prod: devops
ms.assetid:  
ms.manager: jillfra
ms.author: chcomley
author: chcomley
ms.reviewer: sancha
ms.topic: overview
ms.date: 03/11/2019
monikerRange: '>= tfs-2015'
---

::: moniker range=">= azure-devops-2019"

# About Wikis, READMEs, and Markdown

[!INCLUDE [temp](../../_shared/version-ts-tfs-2015-2016.md)]

To support your team or contributors to your project, use [Markdown](https://en.wikipedia.org/wiki/Markdown) to add rich formatting, tables, and images to your team project. You can use Markdown format within a team project Wiki, content you add to a dashboard, your team project README file, or other repository README file.  

::: moniker-end

::: moniker range=">= tfs-2018"

## Wiki

Use your team project wiki to share information with other team members. When you provision a wiki from scratch, a new Git repository stores your Markdown files, images, attachments, and sequence of pages. This wiki supports collaborative editing of its content and structure.

::: moniker-end

::: moniker range="tfs-2018"
> [!NOTE]  
> The built-in wiki is available with TFS 2018 and later versions. To download TFS 2018, see  [Visual Studio Downloads](https://visualstudio.microsoft.com/downloads/).
::: moniker-end

::: moniker range=">= azure-devops-2019"

The following features are supported for the team project wiki.

### Provision or create a wiki

- [Create a wiki for your team project](wiki-create-repo.md)
- [Publish code as wiki](publish-repo-to-wiki.md)

### Work with wiki content

- [Add and edit wiki pages](add-edit-wiki.md)  
- [View wiki page history and revert](wiki-view-history.md)
- [Search Wiki content](search-wiki.md)  
- [Version, select, or unpublish a published wiki](wiki-select-unpublish-versions.md)
- [Clone and update wiki content offline](wiki-update-offline.md)
- [Use Wiki keyboard shortcuts](wiki-keyboard-shortcuts.md)
- [Filter or print Wiki content](filter-print-wiki.md) <sup>1</sup>  

> [!NOTE]
> The print feature may not be available from the Firefox web browser.

### Format wiki content

- [Markdown format](markdown-guidance.md)  
- [HTML tags](wiki-markdown-guidance.md#html)  
- [Insert and resize images](markdown-guidance.md#images)
- [Link to work items using #](wiki-markdown-guidance.md#link-work-items)
- [Attach files](markdown-guidance.md#attach)  
- [Mathematical notation and characters](markdown-guidance.md#math-notation)  
- [Table of contents (TOC) for Wiki pages](wiki-markdown-guidance.md#toc-wiki)  

::: moniker-end

::: moniker range="tfs-2018"

The following features are supported for the team project wiki you create in the indicated TFS version or later versions. To learn more, see [Create a wiki for your team project](wiki-create-repo.md) and [Add and edit wiki pages](add-edit-wiki.md).

> [!div class="mx-tdBreakAll"]
> |Feature | TFS version |  
> |--------|--------------|  
> |[Markdown format](markdown-guidance.md) | TFS 2018 |
> |[HTML tags](wiki-markdown-guidance.md#html) | TFS 2018 |
> |[Insert and resize images](markdown-guidance.md#images) | TFS 2018 |
> |[Link to work items using #](wiki-markdown-guidance.md#link-work-items) | TFS 2018 |  
> |[Attach files](markdown-guidance.md#attach) | TFS 2018 |  
> |[Filter Wiki TOC](filter-print-wiki.md) | TFS 2018 |  
> |[Mathematical notation and characters](markdown-guidance.md#math-notation) |TFS 2018.2 |
> |[Preview a Wiki page while editing](add-edit-wiki.md) | TFS 2018.2 |
> |[Print a Wiki page](filter-print-wiki.md) <sup>1</sup> | TFS 2018.2 |
> |[Wiki keyboard shortcuts](wiki-keyboard-shortcuts.md) | TFS 2018.2 |
> |[Wiki search](search-wiki.md) | TFS 2018.2 |  
> [!NOTE]
> This feature may not be available from the Firefox web browser.

::: moniker-end

::: moniker range=">= azure-devops-2019"

## Publish existing Git repositories to a wiki  

Many teams document their code using Markdown and check in these files along with the code. While Git supports the maintenance and review of such documentation along with standard pull requests, such files present a few challenges to consumers of the content.

- Readers must often sift through many files and folders to find the content of interest.
- Content lacks organization and structure. There's no inherent page hierarchy to support readers.
- Content versioning isn't supported.
- Searching through content relies on searching the code, rather than a search experience optimized for searching content.

With the publish code as wiki feature, you can publish one or more Git repositories defined in your team project to a wiki. This feature provides a way to maintain your content alongside your code base, but selectively publish and update your content to a wiki.  

There are significant differences between how you manage the content for a wiki that you provision for a team project versus wiki pages that you publish from a Git repository. For details, see [Publish a Git repo to a wiki](publish-repo-to-wiki.md).

::: moniker-end

::: moniker range=">= tfs-2015 <= tfs-2017"

# About READMEs and Markdown

[!INCLUDE [temp](../../_shared/version-ts-tfs-2015-2016.md)]

To support your team or contributors to your project, use [Markdown](https://en.wikipedia.org/wiki/Markdown) to add rich formatting, tables, and images to your team project. You can use Markdown format within content you add to a dashboard, your team project README file, or other repository README file.  

::: moniker-end

::: moniker range=">= tfs-2015"

## Markdown

Markdown makes it easy to format text and include images. You can also link to documents within your project pages, README files, dashboards, and pull request comments.

You can provide guidance to your team in the following places using Markdown:

::: moniker-end

::: moniker range=">= azure-devops-2019"
  
- [Team project wiki](add-edit-wiki.md)
- [Publish code as wiki](publish-repo-to-wiki.md)
- [Add Markdown to a dashboard](../../report/dashboards/add-markdown-to-dashboard.md)  
- [Project page or Welcome pages](../../organizations/projects/project-vision-status.md)
- [Repository README files](../../repos/git/create-a-readme.md)
- [Pull request comments](../../repos/git/pull-requests.md)

::: moniker-end

::: moniker range="tfs-2018"
  
- [Add and edit wiki pages](add-edit-wiki.md)
- [Add Markdown to a dashboard](../../report/dashboards/add-markdown-to-dashboard.md)  
- [Project page or Welcome pages](../../organizations/projects/project-vision-status.md) 
- [Repository README files](../../repos/git/create-a-readme.md)
- [Pull request comments](../../repos/git/pull-requests.md)

::: moniker-end

::: moniker range=">= tfs-2015 <= tfs-2017"

- [Add Markdown to a dashboard](../../report/dashboards/add-markdown-to-dashboard.md)  
- [Project page or Welcome pages](../../organizations/projects/project-vision-status.md) 
- [Repository README files](../../repos/git/create-a-readme.md)
- [Pull request comments](../../repos/git/pull-requests.md)

::: moniker-end

For supported syntax, see [Syntax guidance for Markdown files, widgets, wikis, and pull request comments](markdown-guidance.md).

## READMEs

You can define a README file or multiple files for each repo or team project. Write your README in Markdown instead of plain text.

Use README pages to orient contributors to working within your project. Consider adding the following guidance:

- Project focus
- Prerequisites
- Setting up the environment
- Tips for getting things done within the project
- Purpose or use of specific files
- Project-specific terms and acronyms
- Workflow guidance about committing or uploading changes and adding branches
- Project sponsors or contacts  

Here are some great READMEs that use this format and speak to all audiences, for reference and inspiration:

- [ASP.NET Core](https://github.com/aspnet/Home)
- [Visual Studio Code](https://github.com/Microsoft/vscode)
- [Chakra Core](https://github.com/Microsoft/ChakraCore)


