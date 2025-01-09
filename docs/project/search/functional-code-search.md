---
title: Functional code search
titleSuffix: Azure Repos
description: Options for searching code across all your projects in Azure DevOps.
ms.subservice: azure-devops-search
ms.custom: cross-service, cross-project
ms.topic: how-to
ms.author: chcomley
author: chcomley
monikerRange: '<= azure-devops'
ms.date: 08/08/2024
---

# Functional code search  

[!INCLUDE [version-lt-eq-azure-devops](../../includes/version-lt-eq-azure-devops.md)]

Find the code you need faster with functional code search. This article explains how to refine your search across repositories using code types and other functions with the [Code Search](https://marketplace.visualstudio.com/items?itemName=ms.vss-code-search) Marketplace extension for Azure DevOps.

## Prerequisites

::: moniker range=" azure-devops"

- **Access levels:**
  - **Basic access:**
    - To use code search, have at least Basic access.
    - To access code in a private project, have at least Basic access.
  - **Stakeholder access:**
    - Users with Stakeholder access don’t have access to code, so they can’t search for code.
    - Users with Stakeholder access for a public project have full access to code, so they can search for code.
- **Search results:**
  - **Access-based results:** When you're searching across the organization or collection, only results for which a project member has access are listed.
::: moniker-end

::: moniker range="< azure-devops"

- **Access levels:**
  - **Basic access:**
    - To use code search, have at least Basic access.
    - To access code in a private project, have at least Basic access.
  - **Stakeholder access:**
    - Users with Stakeholder access don’t have access to code, so they can’t search for code.
- **Search results:**
  - **Access-based results:** When you're searching across the organization or collection, only results for which a project member has access are listed.
- **Tools:**
  - Install [Code Search](https://marketplace.visualstudio.com/items?itemName=ms.vss-code-search).
::: moniker-end

## Code search best practices

- **Start broad:** Begin with a broad search and then use filter operators to narrow it down by project, repository, path, file name, and more.
- **Use [wildcards](get-started-search.md#search-features-usage-and-examples) and [boolean operators](get-started-search.md#search-features-usage-and-examples):** If you don’t know the exact term, use wildcards to expand your search and boolean operators to refine it.
- **Hover for more info:** To get more information about a code item, hover over it and use the shortcut menu to search for that text in all your projects and files.
- **Trace code functionality:** Use the shortcut menu to search for related items like definitions and references in a file or in the search results to trace how your code works.
- **Use code type filters:** To find the implementation of an API or other code element, use code type filters to search for specific kinds of code such as:
  - Definitions
  - References
  - Functions
  - Comments
  - Strings
  - Namespaces, and more

> [!NOTE]
> Code search doesn't work for forked repositories.

## Functions to find specific types of code

To create your query faster, choose functions and keywords from the drop-down list as you enter text. Select **Show more** to see all the options. You can combine different functions as needed.

You can also use filters from the left column to narrow your search. **Show more** shows you all the functions and keywords.

Or, you can type the functions and parameters in the search box. The following table lists the functions for finding specific types or members in your C#, C, C++, Java, and Visual Basic.NET code.

| To find code where _findThis_ appears as a ... | ... search for argument **arg:**_findThis_ |
| --- | --- |
| Argument | **arg:**_findThis_ ```Deprecated in July 2019```| 
| Base type | **basetype:**_findThis_ | 
| Calling function | **caller:**_findThis_ ```Deprecated in July 2019```|
| Class definition or declaration | **class:**_findThis_ |
| Class declaration | **classdecl:**_findThis_ ```Merged with class:```|
| Class definition | **classdef:**_findThis_  ```Merged with class:```|
| Comment | **comment:**_findThis_ |
| Constructor | **ctor:**_findThis_ ```Merged with method:```|
| Declaration | **decl:**_findThis_ |
| Definition | **def:**_findThis_ |
| Destructor | **dtor:**_findThis_ ```Merged with method:```|
| Enumerator | **enum:**_findThis_ |
| Extern | **extern:**_findThis_ ```Deprecated in July 2019```|
| Field | **field:**_findThis_ |
| Friend function | **friend:**_findThis_ ```Deprecated in July 2019```|
| Function | **func:**_findThis_ ```Merged with method:```|
| Function declaration | **funcdecl:**_findThis_ ```Merged with method:```|
| Function definition | **funcdef:**_findThis_ ```Merged with method:```|
| Global | **global:**_findThis_ ```Deprecated in July 2019```|
| Header | **header:**_findThis_ ```Deprecated in July 2019```|
| Interface | **interface:**_findThis_ |
| Macro | **macro:**_findThis_ |
| Macro definition | **macrodef:**_findThis_ ```Merged with macro:```|
| Macro reference | **macroref:**_findThis_ ```Merged with macro:```|
| Method | **method:**_findThis_ |
| Method declaration | **methoddecl:**_findThis_ ```Merged with method:```|
| Method definition | **methoddef:**_findThis_ ```Merged with method:```|
| Namespace | **namespace:**_findThis_ |
| Property | **prop:**_findThis_ |
| Reference | **ref:**_findThis_ |
| String literal | **strlit:**_findThis_ |
| Struct | **struct:**_findThis_ ```Merged with type:```|
| Struct declaration | **structdecl:**_findThis_ ```Merged with type:```|
| Struct definition | **structdef:**_findThis_ ```Merged with type:```|
| Template argument | **tmplarg:**_findThis_ ```Deprecated in July 2019```|
| Template specification | **tmplspec:**_findThis_ ```Deprecated in July 2019```|
| Type | **type:**_findThis_ |
| Typedef | **typedef:**_findThis_ ```Merged with type:```|
| Union | **union:**_findThis_ ```Deprecated in July 2019```|

## Functions to select projects, repositories, paths, and files

Functions make it easy to narrow the search to specified locations, specific types of files within these locations, or specified filenames. Narrow the search to a specific location using the `proj`, `repo`, or `path` filters. Mix and match the following functions as required.

|**Usage**  |**Example**  |
|---------|---------|
|Find all occurrences of the word *QueueJobsNow* in the Fabrikam project.     | `QueueJobsNow proj:Fabrikam`        |
|Find all occurrences of the word *QueueJobsNow* in the Contoso repository.    |  `QueueJobsNow repo:Contoso`       |
|Find all occurrences of the word *QueueJobsNow* in the path *VisualStudio/Services/Framework* and its subpaths.  | `QueueJobsNow path:VisualStudio/Services/Framework`        |
|Find all occurrences of the word *QueueJobsNow* in the path *\*/Doc\*/Framework/\** and *\*/Doc\*/\*/\*/Framework/\** and its subpaths. Globbing Pattern (\*\*) matches zero or more characters across multiple segments. For example, path:\*\*/Doc\*\*/Framework also matches abc/*Doc*Test/gh/ijk/mnop/*Framework*/ | `QueueJobsNow path:**/Doc**/Framework`        |
|Find all occurrences of the word *QueueJobsNow* in the path *\*/Doc\*/Framework/\** and its subpaths and file name Test*.txt (Use Globbing Pattern \*\*). For example, path:\*\*/Doc\*\*/Framework/\*\*/Test\*.txt also matches abc/def/*Doc*A/gh/*Framework*/*Test*Misc.*txt*  | `QueueJobsNow path:**/Doc**/Framework/**/Test*.txt`        |
|Enclose the argument to the filter in double-quotes if it contains a space.   | `QueueJobsNow path:"VisualStudio/Windows Phones and Devices/Services"`        |
|Find all occurrences of the word *QueueJobsNow* in all files where the filename starts with *queueRegister*. | `QueueJobsNow file:queueRegister*`         |
|Find all files with the name *QueueRegister* without an extension. Use quotes to find files without extensions.   |  `file:"queueRegister"`       |
|Find all occurrences of the word *QueueJobsNow* in only C# source files. A plain text search string that doesn't include file type functions also finds files where the string matches part of the filename.  |  `QueueJobsNow ext:cs`       |

## Find related items or other terms

Code Search lets you interactively expand your search based on previous results. For example, you can widen your search to related files when you're tracing or debugging code.

Right-click on a term in the file and start a new search for other files with the same term. You can search for it as text, or as a definition or reference if it's an object name.

For more information, see [Get started with search](get-started-search.md#search-features-usage-and-examples).

## More code search operations

Here are some more code search functions. You can search for code types in C#, C, C++, Java, and Visual Basic.NET files. To open the search results in a new tab, select **Ctrl** + **Enter** from the main search box. To switch to the new tab in Google Chrome, select **Ctrl** + **Shift** + **Enter**.

|**Usage** |**Example** |
|---------|---------|
|Find all comments | History:Keyword    |
|Find all instances of "ToDo" comments in your code   |Select `comment:` and enter `todo`   |
|Search in specific locations, such as within a particular path   |Use a search string such as `Driver path:MyShuttle/Server`    |
|Search for files by name or just by file extension    | `Driver file:GreenCabs.cs`. The search string `error ext:resx` could be useful if you want to review all error strings in your code. Even if your plain text search string matches part of a filename, the file appears in the list of found files. This search works without matching specific file type functions.        |

## Search Git projects and repositories

A Git project has a list of repositories. To expand your search, check the project and repository boxes. You can search all or more projects, or fewer projects and repositories. If there are many projects or repositories, select **Show more** to see them all.

Code Search can index different branches in a Git repository. It only indexes files in the default branch of your Git repositories by default. The default branch is main. To index other branches, go to the **Options** tab in the **Repositories** section of the [project settings page](../navigation/go-to-service-page.md#open-project-settings).

> [!NOTE]
> By default, code search looks for the specified string in the main or default branch of a repository. But, you can narrow down the search by specifying a filter for a specific branch.

::: moniker range=">= azure-devops-2019"
![Screenshot showing Git branches for configuration.](media/advanced-work-item-search-syntax/configure-branches.png)
::: moniker-end

## Search TFVC projects

TFVC projects display only the folders that you can read. You can't see any other projects or folders. To filter your search, choose folders from the tree.

> [!TIP]
> Code Search saves your last settings, such as the project and repository or path that you searched in. When you want to search in a different scope, select **Clear all links** to clear the checkboxes and search across all projects. The first 100 hits or matches in the target files are highlighted by Code Search in the results pane. 

## Search code with REST API

You can use APIs to extend or supplement the capabilities listed in this article. For information about Code Search with REST API, see [Fetch Code Search Results](/rest/api/azure/devops/search/code-search-results/fetch-code-search-results).

## Next steps

> [!div class="nextstepaction"]
> [Search work items](functional-work-item-search.md)

## Related articles

* [Get started with Search](get-started-search.md)
* [Search artifacts and packages](functional-package-search.md)
* [Search work items](functional-work-item-search.md)
