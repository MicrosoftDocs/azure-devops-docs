---
title: Share your code with Git from the command line
titleSuffix: Azure Repos
description: Share code in Git using the command line
ms.assetid: 4b299dbf-3ca9-47af-bd6d-8c40bafac447
ms.prod: devops
ms.technology: devops-code-git 
ms.manager: jillfra
ms.author: sdanie
author: steved0x
ms.topic: quickstart
ms.date: 09/10/2018
monikerRange: '>= tfs-2015'
---

# Get started with Git from the command line

#### Azure Repos | TFS 2018 | TFS 2017 | TFS 2015

This guide shows you how to share your code in a Git repo in Azure Repos using the command line.

The instructions below use the default bash shell used on Linux and macOS, but the Git commands will work in any shell, including Git Bash from Git for Windows.

> [!NOTE]
> You can also create and get repos from the command line or scripts using the [Azure DevOps Services CLI](/cli/vsts/overview?view=vsts-cli-latest).

## Prerequisites

* An organization in Azure DevOps. If you don't have an organization, you can [sign up](../../organizations/accounts/create-organization.md) for one for free. Each organization includes free, unlimited private Git repositories.

## Download and install Git

* [Windows](#windows)
* [macOS](#macos)
* [Linux and Unix](#linux-and-unix)

### Windows

Download and install [Git for Windows](https://git-scm.com/download/win) , which includes the [Git Credential Manager](set-up-credential-managers.md) to 
easily connect to Azure Repos. 

### macOS

Use [Homebrew](http://brew.sh/) to install and set up Git.

```
brew install git
```

### Linux and Unix

Use your distribution's package management system to download and install Git. For example, on Ubuntu:

```
sudo apt-get install git
```

Refer to the [list of install commands](https://git-scm.com/download/linux) for the most up to date instructions for your Linux distribution.

## Create your local repo

Create a local Git repo for your code. If your code is already in a local Git repo, you can skip this step.

1. Navigate to the folder where your code is on the command line:

    ```
    cd /home/fabrikam/fiber
    ```

2. Create a Git repo on your machine to store your code. You will connect this repo to Azure Repos in the next section.

    ```
    git init .
    ```

3. Commit your code into the local Git repo.

    ```
    git add --all
    git commit -m "first commit of my code"
    ```

## Create your Git repo in Azure Repos

0. [Create a new Git repo in Azure Repos](create-new-repo.md) for your code. Copy the clone URL once you are done creating your repo.

   ![Get the clone URL after creating the Git repo in Azure Repos](_img/share-your-code-in-git-cmdline/clone_url.png)

0. Connect your local repo to the Git repo in Azure Repos using the copied clone URL in the `git remote` command:

    ```
    git remote add origin https://dev.azure.com/fabrikops2/Fabrikam/_git/FabrikamApp
    ```


## Push your code 

Before pushing your code, set up authentication with [credential managers](set-up-credential-managers.md) or [SSH](use-ssh-keys-to-authenticate.md) before continuing.

```
git push origin master
```

## Next steps

> [!div class="nextstepaction"]
> [New to Git repos? Learn more](/azure/devops/learn/git/set-up-a-git-repository)

> [!div class="nextstepaction"]
> [Learn more about using Git in the Git tutorial](gitworkflow.md)
