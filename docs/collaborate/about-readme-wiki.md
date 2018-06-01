---
title: Search Wiki content defined in your team project
titleSuffix: VSTS & TFS
description: Share information using a project or repo README or Wiki in Visual Studio Team Services & Team Foundation Server 
ms.technology: devops-collab
ms.custom: wiki
ms.prod: devops
ms.assetid:  
ms.manager: douge
ms.author: kaelliauthor: KathrynEE
ms.reviewer: sancha
ms.topic: overview
ms.date: 10/18/2017
monikerRange: '>= tfs-2015'
---

::: moniker range="vsts || >= tfs-2018"
# About READMes and Wikis

**VSTS | TFS 2018 | TFS 2017 | TFS 2015**

To support your team or contributors to your project, use [Markdown](https://en.wikipedia.org/wiki/Markdown) to add rich formatting, tables, and images to your team project. You can use Markdown format within a team project Wiki, content you add to a dashboard, within your team project README file, or other repository README file.  

::: moniker-end


::: moniker range=">= tfs-2015 <= tfs-2017"
# About READMes and markdown

**VSTS | TFS 2018 | TFS 2017 | TFS 2015**

To support your team or contributors to your project, use [Markdown](https://en.wikipedia.org/wiki/Markdown) to add rich formatting, tables, and images to your team project. You can use Markdown format within content you add to a dashboard, within your team project README file, or other repository README file.  

::: moniker-end

::: moniker range=">= tfs-2015"

## Markdown 

Markdown makes it easy to format text, include images, and link as needed to additional documentation within your project pages, readme files, dashboards, and pull request comments.   

You can provide guidance to your team in these places using Markdown:

::: moniker-end

::: moniker range="vsts"   
  
- [Team project wiki (provisioned wiki)](add-edit-wiki.md)
- [Pulbish code as wiki](publish-repo-to-wiki.md)
- [Add Markdown to a dashboard](../report/dashboards/add-markdown-to-dashboard.md)  
- [Project vision page or Welcome pages](project-vision-status.md)    
- [Repository Readme files](../git/create-a-readme.md) 
- [Pull request comments](../git/pull-requests.md) 
 
::: moniker-end


::: moniker range="tfs-2018"   
  
- [Add and edit wiki pages](add-edit-wiki.md)    
- [Add Markdown to a dashboard](../report/dashboards/add-markdown-to-dashboard.md)  
- [Project vision page or Welcome pages](project-vision-status.md)  
- [Repository Readme files](../git/create-a-readme.md) 
- [Pull request comments](../git/pull-requests.md) 
 
::: moniker-end

::: moniker range=">= tfs-2015 <= tfs-2017"   
      
- [Add Markdown to a dashboard](../report/dashboards/add-markdown-to-dashboard.md)  
- [Project vision page or Welcome pages](project-vision-status.md)  
- [Repository Readme files](../git/create-a-readme.md) 
- [Pull request comments](../git/pull-requests.md) 
 
::: moniker-end

For supported syntax, see [Syntax guidance for Markdown files, widgets, wikis, and pull request comments](markdown-guidance.md).


::: moniker range=">= tfs-2015"   

## READMEs

You can define a README file, or multiple files, for each repo or team project. Write your readme in Markdown instead of plain text. 

Use README pages to orient contributors to working within your project. Consider adding guidance about:
- The project focus 
- Prerequisites
- Setting up the environment
- Tips for getting things done within the project
- Purpose or use of specific files
- Project-specific terms and acronyms
- Workflow guidance about committing or uploading changes and adding branches
- Project sponsors or contacts  

Here are some great readmes that use this format and speak to all three audiences, for reference and inspiration:

- [ASP.NET Core](https://github.com/aspnet/Home)
- [Visual Studio Code](https://github.com/Microsoft/vscode)
- [Chakra Core](https://github.com/Microsoft/ChakraCore)

::: moniker-end

::: moniker range=">= tfs-2018"

## Wiki

Use your team project wiki to share information with other team members. When you provision a wiki from scratch, a Git repository is created to store your markdown files, images, attachments, and the sequence of pages. This wiki supports collaborative editing of its content and structure.   

::: moniker-end

::: moniker range="tfs-2018"
> [!NOTE]  
> The built-in wiki is available with TFS 2018 and later versions. To download TFS 2018, see  [Visual Studio Downloads](https://www.visualstudio.com/downloads/). 
::: moniker-end

::: moniker range="vsts"

The following features are supported for the team project wiki. 

**Provision or create a wiki**
- [Create a wiki for your team project](wiki-create-repo.md)
- [Publish code as wiki](publish-repo-to-wiki.md) 

**Work with wiki content**

- [Add and edit wiki pages](add-edit-wiki.md)  
- [View wiki page history and revert](wiki-view-history.md)
- [Search Wiki content](search-wiki.md)  
- [Version, select, or unpublish a published wiki](wiki-select-unpublish-versions.md)
- [Clone and update wiki content offline](wiki-update-offline.md)   
- [Filter or print Wiki content](filter-print-wiki.md) <sup>1</sup> 
- [Use Wiki keyboard shortcuts](wiki-keyboard-shortcuts.md)   

	*Note:*
	1. The print feature may not be available from the Firefox web browser. 

**Format wiki content**
- [Markdown format](markdown-guidance.md)  
- [HTML tags](markdown-guidance.md#html)  
- [Insert and resize images](markdown-guidance.md#images) 
- [Link to work items using #](markdown-guidance.md#link-work-items)     
- [Attach files](markdown-guidance.md#attach)  
- [Mathematical notation and characters](markdown-guidance.md#mathematical-notation)  

::: moniker-end

::: moniker range="tfs-2018"

The following features are supported for the team project wiki you create in the indicated TFS version or later versions. To learn more, see [Create a wiki for your team project](wiki-create-repo.md) and [Add and edit wiki pages](add-edit-wiki.md). 

> [!div class="mx-tdBreakAll"]  
> |Feature | TFS version |  
> |--------|--------------|  
> |[Markdown format](markdown-guidance.md) | TFS 2018 | 
> |[HTML tags](markdown-guidance.md#html) | TFS 2018 | 
> |[Insert and resize images](markdown-guidance.md#images) | TFS 2018 | 
> |[Link to work items using #](markdown-guidance.md#link-work-items) | TFS 2018 |  
> |[Attach files](markdown-guidance.md#attach) | TFS 2018 |  
> |[Filter Wiki TOC](filter-print-wiki.md) | TFS 2018 |  
> |[Mathematical notation and characters](markdown-guidance.md#mathematical-notation) |TFS 2018.2 | 
> |[Preview a Wiki page while editing](add-edit-wiki.md) | TFS 2018.2 | 
> |[Print a Wiki page](filter-print-wiki.md) <sup>1</sup> | TFS 2018.2 | 
> |[Wiki keyboard shortcuts](wiki-keyboard-shortcuts.md) | TFS 2018.2 | 
> |[Wiki search](search-wiki.md) | TFS 2018.2 |  

**Notes:**
1. This feature may not be available from the Firefox web browser.  

::: moniker-end

::: moniker range="vsts"
## Publish existing Git repositories to a wiki  

Many teams document their code using markdown and check in these files along with the code. While Git supports the maintenance and review of such documentation along with standard pull requests, such files present a few challenges to consumers of the content. 

- Readers must often sift through multiple files and folders to find the content of interest. 
- Content lacks organization and structure. There is no inherent page hierarchy to support readers.
- Content versioning is not supported. 
- Searching through content relies on searching the code, rather than a search experience optimized for searching content. 

With the publish code as wiki feature, you can publish one or more Git repositories defined in your team project to a wiki. This feature addresses the challenges by providing a way to maintain your content alongside your code base, but selectively publish and update your content to a wiki.  

There are several significant differences between how you manage the content for a wiki that you provision for a team project versus wiki pages that you publish from a Git repository. For details, see 
   
::: moniker-end