---
title: Work with large files in your Git repo
titleSuffix: Azure Repos
description: Get recommendations on how to manage large binary files in Git, Visual Studio, and Azure DevOps Server.
ms.assetid: 57ad13a3-9178-4f31-b776-79f32b1afa58
ms.service: azure-devops-repos
ms.topic: conceptual
ms.date: 03/14/2018
monikerRange: '<= azure-devops'
ms.subservice: azure-devops-repos-git
---


# Manage and store large files in Git

[!INCLUDE [version-lt-eq-azure-devops](../../includes/version-lt-eq-azure-devops.md)]

Git helps keep the footprint of your source code small because the differences between versions are easily picked out and code is easily compressed.
Large files that don't compress well and that change entirely between versions (such as binaries) present problems when they're stored in your Git repos.
Git's fast performance comes from its ability to address and switch to all versions of a file from its local storage.

If you have large, undiffable files in your repo (such as binaries), you keep a full copy of those files in your repo every time you commit a change to them.
If many versions of these files exist in your repo, they dramatically increase the time to check out, branch, fetch, and clone your code.  

## What kinds of files should you store in Git?

### Commit source code, not dependencies

As your team works with editors and tools to create and update files, you should put these files into Git so your team can enjoy the benefits of Git's workflow.
Don't commit other types of files into your repo: for example, DLLs, library files, and other dependencies that your team doesn't create but your code depends on. Deliver these files
through [package management](../../artifacts/start-using-azure-artifacts.md) to your systems.

Package management bundles your dependencies and installs the files on your system when you deploy the package.
Packages are versioned to ensure that code tested in one environment runs the same in another environment, as long as the environments have the same installed packages.

### Don't commit outputs

Don't commit the binaries, logs, tracing output, or diagnostic data from your builds and tests. These are outputs from your code, not the source code itself. Share logs and trace information
with your team through [work item tracking](../../boards/backlogs/add-work-items.md) tools or through team file sharing.

### Store small, infrequently updated binary sources in Git

Binary source files that are infrequently updated have relatively few versions committed. They don't take up much space if their file size is small.
Images for the web, icons, and other smaller art assets can fall into this category. It's better to store these files in Git with the rest of your source so your team can use a
consistent workflow.

> [!IMPORTANT]
> Even small binaries can cause problems if they're updated often. For example, 100 changes to a 100-KB binary file use as much storage as 10 changes to a 1-MB binary. Due to the frequency of updates, the smaller binary will slow down branching performance more often than the large binary.

### Don't commit large, frequently updated binary assets

Git manages one main version of a file and then stores only the differences from that version, in a process known as *deltification*.
Deltification and file compression allow Git to store your entire code history in your local repo.
Large binaries usually change entirely between versions and are often already compressed. These files are difficult for Git to manage because the differences between versions are large.

Git must store the entire contents of each version of the file and has difficulty saving space through deltification and compression.
Storing the full versions of these files causes the repo size to increase over time. The increased repo size reduces branching performance, increases the clone times, and expands storage requirements.

## Strategies for working with large binary source files

- Don't commit compressed archives of data. It's better to uncompress the files and commit the diffable sources. Let Git handle compressing the data in your repo.
- Avoid committing compiled code and other binary dependencies. Commit the source and build the dependencies, or use a package management solution to version and supply these files
to your system.
- Store configuration and other structured data in diffable plain-text formats, such as JSON.

## What is Git LFS?

When you have source files with large differences between versions and frequent updates, you can use [Git Large File Storage (LFS)](https://git-lfs.github.com/) to manage these file types.
Git LFS is an extension to Git that provides data that describes the large files in a commit to your repo. It stores the binary file contents into separate remote storage.

When you clone and switch branches in your repo, Git LFS downloads the correct version from that remote storage.
Your local development tools transparently work with the files as if they were committed directly to your repo.

### Benefits

A benefit of Git LFS is that your team can use the familiar end-to-end Git workflow no matter what files your team creates.
LFS handles large files to prevent them from adversely affecting the overall repository.
Additionally, as of version 2.0, Git LFS supports [file locking](https://github.com/git-lfs/git-lfs/wiki/File-Locking) to help your team work on large, undiffable assets like videos, sounds, and game maps.

Git LFS is [is fully supported and free in Azure DevOps Services](https://devblogs.microsoft.com/devops/announcing-git-lfs-on-all-vso-git-repos/).
To use LFS with Visual Studio, you need [Visual Studio 2015 Update 2](/visualstudio/releasenotes/vs2017-relnotes) or later.
Just follow the [instructions to install the client](https://git-lfs.github.com/), set up LFS tracking for files on your local repo, and then push your changes to Azure Repos.

### Limitations

Git LFS has some drawbacks that you should consider before adopting it:

- Every Git client that your team uses must install the Git LFS client and understand its [tracking configuration](https://github.com/github/git-lfs/tree/main/docs).
- If the Git LFS client is not installed and configured correctly, you won't see the binary files committed through Git LFS when you clone your repo.
   Git will download the data that describes the large file (which is what Git LFS commits to the repo) and not the binary file.
   Committing large binaries without the Git LFS client installed will push the binary to your repo.
- Git can't merge the changes from two different versions of a binary file, even if both versions have a common parent.
   If two people are working on the same file at the same time, they must work together to reconcile their changes to avoid overwriting the other's work.
   Git LFS provides [file locking](https://github.com/git-lfs/git-lfs/wiki/File-Locking) to help.
   Users must still take care to always pull the latest copy of a binary asset before beginning work.
- Azure Repos currently doesn't support using Secure Shell (SSH) in repos with Git LFS tracked files.
- If a user drags a binary file via the web interface into a repo that's configured for Git LFS, the binary is committed to the repo--not the pointers that would be committed via the Git LFS client.
- Although there isn't a strict file-size restriction, the server's available free space and current workload could constrain the performance and functionality.
- The time limit for one file upload is one hour.

### File format

The file written into your repo for a Git LFS tracked file has a few lines with a key/value pair on each line:

```
version https://git-lfs.github.com/spec/v1
oid a747cfbbef63fc0a3f5ffca332ae486ee7bf77c1d1b9b2de02e261ef97d085fe
size 4923023
```

> [!NOTE]
> The GitHub URL included for the version value only defines the LFS pointer file type. It's not a link to your binary file.

### Known issues

If you use a version of LFS earlier than 2.4.0 with Azure DevOps Server, an extra setup step is required to [authenticate via NTLM instead of Kerberos](lfs-kerberos.md).
This step is no longer necessary as of LFS 2.4.0, and we highly recommend that you upgrade.
