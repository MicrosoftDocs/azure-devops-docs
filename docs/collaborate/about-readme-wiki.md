---
title: About READMEs and Wiki | VSTS & TFS 
description: Share information using a project or repo README or Wiki    
ms.technology: collaborate
ms.prod: vs-devops-alm
ms.assetid:  
ms.manager: douge
ms.author: kaelli
ms.topic: get-started-article
ms.date: 10/18/2017
---


# About READMEs and Wiki

**VSTS | TFS 2018 | TFS 2017**

To support your team or contributors to your project, use [Markdown](https://en.wikipedia.org/wiki/Markdown) to add rich formatting, tables, and images to your team project. You can use Markdown format within  a team project Wiki, content you add to a dashboard, or within your team project README file, or other repository README file.  


## Markdown 

Markdown makes it easy to format text, include images, and link as needed to additional documentation within your project pages, readme files, dashboards, and pull request comments.   

You can provide guidance to your team in these places using Markdown:   
  
- [Add Markdown to a dashboard](../report/dashboards/add-markdown-to-dashboard.md)  
- [Project vision page or Welcome pages](project-vision-status.md)  
- [Add and edit wiki pages](add-edit-wiki.md)    
- [Repository Readme files](../git/create-a-readme.md) 
- [Pull request comments](../git/pull-requests.md) 
 
For supported syntax, see [Syntax guidance for Markdown files, widgets, wikis, and pull request comments](../collaborate/markdown-guidance.md).


## Wiki

Use your team project wiki to share information with other team members. Each wiki corresponds to its own git repository and supports collaborative editing of its content and structure.    

The following features are supported within the built-in wiki for VSTS and the indicated TFS version. To learn more, see [Create a wiki for your team project](wiki-create-repo.md) and [Add and edit wiki pages](add-edit-wiki.md). 

> [!div class="mx-tdBreakAll"]  
> |Feature | TFS version  |
> |--------|--------------|
> |[Markdown format](markdown-guidance.md) | TFS 2018 | 
> |[HTML tags](markdown-guidance.md#html) | TFS 2018 | 
> |[Insert and resize images](markdown-guidance.md#images) | TFS 2018 | 
> |[Link to work items using #](markdown-guidance.md#link-work-items) | TFS 2018 |  
> |[Attach files](markdown-guidance.md#attach) | TFS 2018 |  
> |[Filter Wiki TOC](add-edit-wiki.md#filter-wiki-pages) | TFS 2018 |  
> |[Mathematical notation and characters](markdown-guidance.md#mathematical-notation) |Not supported| 
> |Print a Wiki page<sup>1</sup> | Not supported | 

<sup>1</sup>  This feature may not be available from the Firefox web browser. 



>[!NOTE]  
><b>Feature availability: </b>The built-in wiki is available with VSTS and TFS 2018 and later versions. To download TFS 2018, see the [TFS 2018 Release Notes](https://www.visualstudio.com/en-us/news/releasenotes/tfs2018-relnotes). If you were using the Wiki Marketplace extension, you can [migrate your existing pages to the new team project wiki](migrate-extension-wiki-pages.md).

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




