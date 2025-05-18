---
title: Share Information with Project, Repo, README, Wiki
titleSuffix: Azure DevOps
description: Use a README file or wiki to share information about your project or repository with your team or contributors in Azure DevOps. 
ms.subservice: azure-devops-wiki
ms.custom: wiki, devdivchpfy22
ms.assetid:  
ms.author: chcomley
author: chcomley
ms.reviewer: gopinach
ms.topic: concept-article
ms.date: 05/19/2025
#customer intent: As an Azure DevOps developer, I want to explore options for sharing information about my project and Git repositories, so I can best support my project users and contributors.
---

# About wikis, READMEs, and Markdown

[!INCLUDE [version-lt-eq-azure-devops](../../includes/version-lt-eq-azure-devops.md)]

You can support your team and project contributors by using [Markdown](https://en.wikipedia.org/wiki/Markdown) to add rich formatting, tables, and images to your team project. The Markdown format enhances team project wiki pages, content you add to a dashboard, your team project README file, or other repository README files.  

## Set up a project wiki

A team project wiki lets you share information about your project with other team members. When you set up a wiki from scratch, a new Git repository stores your Markdown (_.md_) files, images, attachments, and sequence of pages. The wiki supports collaborative editing of its content and structure.

The following links describe the supported features for a team project wiki.

:::row:::

   :::column span="":::
   **Create new wiki**

   - [Create new project wiki](wiki-create-repo.md)
   - [Publish code as wiki](publish-repo-to-wiki.md)
   :::column-end:::

   :::column span="":::
   **Work with wiki content**

   - [Add and edit pages](add-edit-wiki.md)
   - [View page history or revert](wiki-view-history.md)
   - [Clone and update offline](wiki-update-offline.md)
   - [Use keyboard shortcuts](../navigation/keyboard-shortcuts.md#wiki-keyboard-shortcuts)
   - [Filter or print content](filter-print-wiki.md) <br> (_Print feature might not be available in Firefox browser_)
   :::column-end:::

   :::column span="":::
   **Format wiki content**

   - [Use Markdown format](markdown-guidance.md)
   - [Define HTML tags](markdown-guidance.md#html)
   - [Insert and resize images](markdown-guidance.md#images)
   - [Link with hash tag (#)](markdown-guidance.md#link-work-items)
   - [Attach files](markdown-guidance.md#attach)
   - [Use mathematical notation](markdown-guidance.md#math-notation)
   - [Add Table of contents (TOC)](markdown-guidance.md#toc-wiki)
   :::column-end:::

:::row-end:::

## Publish Git repositories to a wiki  

Many teams document their code by using Markdown files, which they check in to the repository along with their code. While Git supports the maintenance and review of code documentation files by using the standard pull request process, these files can present challenges to consumers of the content.

- User must often sift through many files and folders to find the content of interest.
- Content lacks organization and structure. There's no inherent page hierarchy to support readers.
- Content versioning isn't supported.
- Searching through content relies on searching the code rather than a search experience optimized for searching content.

With the **Publish code as wiki** feature, you can publish one or more Git repositories defined in your team project to a wiki. This feature provides a way to maintain your code documentation synchronously with your code base, and lets you selectively publish and update your documentation to a wiki.  

There are significant differences between how you manage the content in a wiki for a team project versus wiki pages that you publish from a Git repository. For details, see [Publish a Git repo to a wiki](publish-repo-to-wiki.md).

## Enhance project content with Markdown

The Markdown format makes it easy to format text and include images. You can also link to documents within your project pages, README files, dashboards, and pull requests.

You can use Markdown to provide guidance to your team in the following ways:

- [Team project wiki](add-edit-wiki.md)
- [Code published as wiki](publish-repo-to-wiki.md)
- [Dashboard content](../../report/dashboards/add-markdown-to-dashboard.md)  
- [Project page or Welcome pages](../../organizations/projects/project-vision-status.md)
- [Repository README files](../../repos/git/create-a-readme.md)
- [Pull requests](../../repos/git/pull-requests.md)

For supported syntax, see [Use Markdown in Azure DevOps](markdown-guidance.md).

## Add project README files

You can define a README file or multiple files for each repo or team project. Write your README in Markdown instead of plain text. Use README pages to orient contributors to specific information or locations within your project.

Consider adding the following guidance:

- Project focus
- Prerequisites
- Set up the environment
- Tips for getting things done within the project
- Purpose or use of specific files
- Project-specific terms and acronyms
- Workflow guidance about committing or uploading changes and adding branches
- Project sponsors or contacts  

### README examples

Here are some examples of project READMEs in GitHub that support all audiences for reference and inspiration:

- [ASP.NET Core](https://github.com/aspnet/Home)
- [Visual Studio Code](https://github.com/Microsoft/vscode)
- [Chakra Core](https://github.com/Microsoft/ChakraCore)