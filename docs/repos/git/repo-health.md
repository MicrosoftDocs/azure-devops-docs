---
title: Repository health
titleSuffix: Azure Repos
description: How to keep git repositories healthy
ms.assetid: 
ms.service: azure-devops-repos
ms.topic: reference
ms.date: 07/15/2024
monikerRange: 'azure-devops'
ms.subservice: azure-devops-repos-git
---

# Repository health

At Azure DevOps, our goal is to provide an excellent quality of service for all our customers. Maintaining optimal repository health is crucial in ensuring performance and reliability.

To promote this goal, we actively monitor various factors that contribute to the health of a repository. These factors include size, commit frequency, contents, structure, and more. If your repository excessively impacts our infrastructure, you might receive an email from our support team asking you to take corrective action. By effectively managing your repository’s size and overall health, you can prevent it from negatively impacting our infrastructure and performance.

To keep optimal repository health you can use "Repository health and usage" panel.

From your web browser, navigate to the Azure Repos Git repo. Select Repo > Files and then choose "Health and usage" from the ellipsis menu to open the "Repository health and usage" panel.

 :::image type="content" source="media/repo-health/azure-devops-repo-health.png" border="true"  alt-text="Screenshot of the Health and usage menu item in the More actions menu on the Repo Files page in Azure Repos." lightbox="media/repo-health/azure-devops-repo-health-lrg.png":::

The "Repository health and usage" panel shows you factors that contribute to the health of a repository

 :::image type="content" source="media/repo-health/repo-health-panel.png" border="true"  alt-text="Screenshot of the Repository health and usage." lightbox="media/repo-health/repo-health-panel-lrg.png":::

Factors that are considered unhealthy will be highlighted in red, while factors that are close to being unhealthy will be highlighted in amber.

On this page are descriptions and advice for some of the common metrics.

## Overall reachable repository size

This parameter shows how much space the repository consumes on the disk.

We recommend keeping your repository size under 100 GB for optimal performance. Smaller repositories are quicker to clone and easier to manage and maintain. If your repository exceeds this size, consider using [Git-LFS](https://git-lfs.com/), [Scalar](https://git-scm.com/docs/scalar), or [Azure Artifacts](https://azure.microsoft.com/products/devops/artifacts) to refactor your development artifacts.

## Number of reachable objects

This parameter indicates the number of objects in the repository, which are accessible from any reference or tag. Objects include not only files (blobs), but also directories, commits, and tags. More details [Git-Internals-Git-Objects](https://git-scm.com/book/en/v2/Git-Internals-Git-Objects). 

The greater the number of objects, the longer Git takes to traverse the repository’s history affecting time to display the history of commits, and other objects. Additionally ADO's implementation has a hard limit object limit.  Azure Repos can't contain more than 100 million objects in a single repository.

## Number of refs

"Number of refs" displays the total number of references in the repository.

If your Git repository contains more than 10,000 refs, you should consider enabling [Limited Refs](/previous-versions/azure/devops/all/git/limited-refs). As the number of refs increases, so does the data that needs to be negotiated between the client and server. The more data that has to be negotiated the heavier the load on the server and the more data that potentially is transferred to the client causing a degraded user experience.

## Number of reachable blobs

"Number of reachable blobs" displays the total number of reachable [blob](https://git-scm.com/book/en/v2/Git-Internals-Git-Objects) files in the repository.

We recommend maintaining a reasonable number of blob files, as mentioned in the `Number of reachable objects`. It’s also important to reserve some space for objects of other types.

## Number of reachable trees

"Number of reachable trees" shows the total number of reachable [tree](https://git-scm.com/book/en/v2/Git-Internals-Git-Objects#_tree_objects) objects in the repository.

A large number of tree files can make traversing through history expensive and may slow down several git features, such as `git blame`.

Tree objects grow as the number of directories and files increases. Git needs to create a copy of every tree that leads to a file whenever the file is changed. Therefore, changing only one file multiple times can result in a large number of tree files.

>[!NOTE]
>Distributing files across multiple directories and subdirectories is preferable to having a single directory with numerous direct entries.

We recommend maintaining a reasonable number of tree objects, as suggested in the section on `Number of reachable objects`. It’s also crucial to allocate some space for objects of other types.

## Number of reachable commits

"Number of reachable commits" parameter represents the total number of reachable [commit](https://git-scm.com/book/en/v2/Git-Internals-Git-Objects#_git_commit_objects) objects in the repository.

We recommend keeping a reasonable number of commit objects, as advised in the `Number of reachable objects` section. It’s also essential to reserve some space for objects of other types.

## Number of reachable tags

"Number of reachable tags" displays the total number of reachable  [tag](https://git-scm.com/book/en/v2/Git-Internals-Git-References#_tags) objects in the repository.

Tags need to be transferred to the client for every fetch, even if your clone is up-to-date. Therefore, it’s advisable to limit them to a few tens of thousands at most.

We recommend keeping a reasonable number of tag objects, as advised in the `Number of reachable objects` section. It’s also essential to reserve some space for objects of other types.

## Number of non-diffable files

Display the count of binary files or media assets for which we were unable to calculate a diff. 

Storing such files in Git isn't advised. Different versions of such files don’t delta well against each other, meaning Git can’t store them efficiently. Consider using  [Git-LFS](https://git-lfs.com/), [Scalar](https://git-scm.com/docs/scalar), or [Azure Artifacts](https://azure.microsoft.com/products/devops/artifacts), which allow you to store such files and keep your repository healthy and maintainable.  For more information, see [Manage and store large files in Git](manage-large-files.md).

>[!NOTE]
>If you use the [REST Pushes](/rest/api/azure/devops/git/pushes/create) API, your files are not diffed and this is very inefficient for pushing objects that are normally diffable.

## Size of reachable blobs

"Size of reachable blobs" parameter displays the total size of blobs on a disk in gigabytes.

As per the "Overall reachable repository size" section, it’s advisable to keep it less than 100 GB and leave some space for objects of other types.

## Size of reachable trees

"Size of reachable trees" parameter shows total size of tree objects on a disk in gigabytes.

As per the "Overall reachable repository size" section, it’s advisable to keep it less than 100 GB and leave some space for objects of other types.

## Size of reachable commits

"Size of reachable commits" parameter shows total size of commit objects on a disk in megabytes.

As per the "Overall reachable repository size" section, it’s advisable to keep it less than 100 GB and leave some space for objects of other types.

## Size of reachable tags

"Size of reachable tags" parameter shows total size of tag objects on a disk in megabytes.

As per the "Overall reachable repository size" section, it’s advisable to keep it less than 100 GB and leave some space for objects of other types.
