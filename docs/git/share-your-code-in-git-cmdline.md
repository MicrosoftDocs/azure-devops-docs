---
title: Share your code with Git from the command line | VSTS & TFS
description: Share code in Git using the command line
ms.assetid: 4b299dbf-3ca9-47af-bd6d-8c40bafac447
ms.prod: devops
ms.technology: devops-code-git 
ms.manager: douge
ms.author: sdanie
author: steved0x
ms.topic: quickstart
ms.date: 03/08/2018
monikerRange: '>= tfs-2015'
---


# Get started with Git from the command line

#### VSTS | TFS 2018 | TFS 2017 | TFS 2015

This guide show you how to share your code in a VSTS Git repo using the command line.

The instructions below use the default bash shell used on Linux and macOS, but the Git commands will work in any shell, including Git Bash from Git for Windows.

> [!NOTE]
> You can also create and get repos from the command line or scripts using the [VSTS CLI](https://docs.microsoft.com/en-us/cli/vsts/overview?view=vsts-cli-latest).

## Prerequisites

* A VSTS account. If you don't have one, you can [sign up](../accounts/create-account-msa-or-work-student.md) for one for free. Each account includes free, unlimited private Git repositories.

## Download and install Git

* [Windows](#windows)
* [macOS](#macos)
* [Linux and Unix](#linux-and-unix)

### Windows

Download and install [Git for Windows](https://git-scm.com/download/win) , which includes the [Git Credential Manager](set-up-credential-managers.md) to 
easily connect to VSTS. 

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

0. Navigate to the folder where your code is on the command line:

    ```
    cd /home/fabrikam/fiber
    ```

0. Create a Git repo on your machine to store your code. You will connect this repo to VSTS in the next step.

    ```
    git init .
    ```

0. Commit your code into the local Git repo.

    ```
    git add --all
    git commit -m "first commit of my code"
    ```

## Create your VSTS repo

0. [Create a new VSTS Git repo](create-new-repo.md) for your code. Copy the clone URL once you are done creating your repo.

   ![Get the clone URL after creating the VSTS repo](_img/share-your-code-in-git-cmdline/clone_url.png)

0. Connect your local repo to the VSTS repo using the copied clone URL in the `git remote` command:

    ```
    git remote add origin https://fabrikops2.visualstudio.com/DefaultCollection/Fabrikam/_git/FabrikamApp
    ```


## Push your code 

Before pushing your code, set up authentication with [credential managers](set-up-credential-managers.md) or [SSH](use-ssh-keys-to-authenticate.md) before continuing.

```
git push origin master
```

## Next steps

> [!div class="nextstepaction"]
> [New to Git repos? Learn more](/azure/devops/git/set-up-a-git-repository)

> [!div class="nextstepaction"]
> [Learn more about using Git in the Git tutorial](tutorial/gitworkflow.md)
