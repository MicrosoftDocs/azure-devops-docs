---
title: Scope your search with Code Search to find code in Visual Studio Team Services and Team Foundation Server
description: Quickly and easily scope your search with Code Search to find code across all of your Visual Studio Team Services (VSTS) and Team Foundation Server (TFS) projects, from anywhere and any computer or mobile device, using your web browser. Find code, trace occurrences across files, discover related items, and explore your project contents.
ms.assetid: D9DAF9F6-E849-4A04-AA11-49E971DE0524
ms.prod: vs-devops-alm
ms.technology: vs-devops-search
ms.manager: douge
ms.author: douge
ms.date: 08/04/2016
---

# Choose your search scope in Code Search

When you search your code, you can:

* [Choose projects and repositories](#choose-projects)
* [Filter projects, repositories,and paths](#filter-options)

[!INCLUDE [shared-back-to-overview](../_shared/shared-back-to-overview.md)]

<a name="choose-projects"></a>
## Choose projects and repositories

When you search from inside a project, the default is to search only within that 
project. 

In a TFVC project, you see a list of folder paths in that project for 
which you have read access - you won't see any projects and folders 
for which you don't have read permission. Select paths in the folder tree 
to narrow your search if required.

![Choose TFVC projects and paths](_img/repos-and-projects/choose-tfvc-projects-paths.png)
  
In a Git project, you see a list of the repositories it contains (Code Search indexes 
files in only the default branch of your Git repositories; usually this is the **master** branch). 
Use the project and repository checkboxes to widen your search to more or all projects, or to 
narrow your search to fewer projects and repositories. If there is more than a few 
projects or repositories, use the **Show more** link to see them all.

![Choose Git projects and repositories](_img/repos-and-projects/choose-git-projects-repositories.png)

Code Search remembers your last settings, such as the project and repository or path you
searched in. Clear all the checkboxes to search across all projects. Do this quickly and 
easily with the **Clear all** links when you want to search in a different scope.

![Clear all the selections for projects and repositories](_img/repos-and-projects/choose-git-clear-all-link.png)

<a name="filter-options"></a>
## Filter the lists of projects, repositories, and paths

You can filter the lists of projects, repositories, or paths to make it 
easier to see and select the ones you are interested in. Filter the list of projects using the Filter 
Projects textbox. 

![Filter for projects](_img/repos-and-projects/filter-projects.png)

Filter and select paths for a TFVC project using the Paths textbox. 

![Filter for paths in a TFVC project](_img/repos-and-projects/filter-paths.png)

Filter the list of repositories for a Git project using the Filter Repositories textbox. 

![Filter for repositories in a Git project](_img/repos-and-projects/filter-repositories.png)

Filter and select paths in a Git repository using its Paths textbox. 

![Filter for paths in a Git project](_img/repos-and-projects/filter-repository-paths.png)

You can also limit the search to specific projects, repositories, 
TFVC folder paths, file paths, and files using 
**[functions in the search string](advanced-search.md)**.

## Next steps

See more details of how you can use the 
**[advanced search options](advanced-search.md)**
and the **[rich search results page](search-results.md)**. 

## See also

* [Get started with Code Search](get-started.md)
* [Advanced Code Search options](advanced-search.md)
* [Rich Code Search results](search-results.md)
* [Set up and administration](administration.md)

[!INCLUDE [shared-back-to-overview](../_shared/shared-back-to-overview.md)]

[!INCLUDE [shared-got-feedback](../_shared/shared-got-feedback.md)]
