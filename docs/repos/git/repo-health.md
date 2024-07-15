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

To guarantee this, we actively monitor various factors that contribute to the overall health of a repository. These factors include size, commit frequency, contents, structure, and more. If your repository excessively impacts our infrastructure, you may receive an email from our support team asking you to take corrective action. By effectively managing your repository’s size and overall health, you can prevent it from negatively impacting our infrastructure or underperforming.

On this page, you will find descriptions and advice for all our metrics.

## Overall reachable repository size

This parameter shows how much space the repository consumes on the disk.

We recommend keeping your repository size under 10 GB for optimal performance. Smaller repositories are quicker to clone and easier to manage and maintain. If your repository exceeds this size, consider using Git-LFS, Scalar, or Azure Artifacts to refactor your development artifacts.

## Number of reachable objects

This parameter indicates the number of objects in the repository, which are accessible from any reference or tag. Please note that this includes not only files (blobs), but also directories, commits, and tags. More details [here](https://git-scm.com/book/en/v2/Git-Internals-Git-Objects). 

The greater the number of objects, the longer Git takes to traverse the repository’s history. This could impact pages displaying the history of commits, among other things. Meanwhile, our implementation has a hard limit - Azure Repos cannot contain more than 10 million objects in a single repository.

## Number of refs

This displays the total number of references in the repository.

If your Git repository contains more than 10,000 refs, you should consider enabling [Limited Refs](https://learn.microsoft.com/en-us/previous-versions/azure/devops/all/git/limited-refs). As the number of refs increases, so does the data that needs to be negotiated between the client and server. The more data that has to be negotiated, the heavier the load on the server and the more data that potentially is transferred to the client, all of which can lead to a degraded user experience.


## Number of reachable blobs

This displays the total number of reachable [blob](https://git-scm.com/book/en/v2/Git-Internals-Git-Objects) files in the repository.

We recommend maintaining a reasonable number of blob files, as mentioned in the `Number of reachable objects`. It’s also important to reserve some space for objects of other types.

## Number of reachable trees

This shows the total number of reachable [tree](https://git-scm.com/book/en/v2/Git-Internals-Git-Objects#_tree_objects) objects in the repository.

We recommend maintaining a reasonable number of tree objects, as suggested in the section on `Number of reachable objects`. It’s also crucial to allocate some space for objects of other types.

## Number of reachable commits

This parameter represents the total number of reachable [commit](https://git-scm.com/book/en/v2/Git-Internals-Git-Objects#_git_commit_objects) objects in the repository.

We recommend keeping a reasonable number of commit objects, as advised in the `Number of reachable objects` section. It’s also essential to reserve some space for objects of other types.

## Number of reachable tags

This displays the total number of reachable  [tag](https://git-scm.com/book/en/v2/Git-Internals-Git-References#_tags) objects in the repository.

Please note that tags need to be transferred to the client for every fetch, even if your clone is up-to-date. Therefore, it’s advisable to limit them to a few tens of thousands at most.

We recommend keeping a reasonable number of tag objects, as advised in the `Number of reachable objects` section. It’s also essential to reserve some space for objects of other types.


## Number of non-diffable files

Display the count of binary files or media assets for which we were unable to calculate a diff. 

Storing such files in Git is not advised. Different versions of such files don’t delta well against each other, meaning Git can’t store them efficiently. Consider using Git-LFS, Scalar, or Azure Artifacts, which allow you to store such files and keep you repository healthy and maintainable. 

## Size of reachable blobs

This parameter displays the total size of blobs on a disk in gigabytes.

As per the ‘Overall reachable repository size’ section, it’s advisable to keep it less than 10 GB and leave some space for objects of other types.


## Size of reachable trees


This parameter shows total size of tree objects on a disk in gigabytes.

As per the ‘Overall reachable repository size’ section, it’s advisable to keep it less than 10 GB and leave some space for objects of other types.

## Size of reachable commits

This parameter shows total size of commit objects on a disk in megabytes.

As per the ‘Overall reachable repository size’ section, it’s advisable to keep it less than 10 GB and leave some space for objects of other types.

## Size of reachable tags

This parameter shows total size of tag objects on a disk in megabytes.

As per the ‘Overall reachable repository size’ section, it’s advisable to keep it less than 10 GB and leave some space for objects of other types.
