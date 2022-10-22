---
title: Use Azure CLI to share Git code
titleSuffix: Azure Repos
description: Use Azure CLI to share code in Git repository.  
ms.assetid: 4b299dbf-3ca9-47af-bd6d-8c40bafac447
ms.service: azure-devops-repos
ms.topic: quickstart
ms.custom: devx-track-azurecli
monikerRange: '>= azure-devops-2020'
ms.date: 03/31/2022
ms.subservice: azure-devops-repos-git
---

# Get started with Git from the command line

[!INCLUDE [version-gt-eq-2020](../../includes/version-gt-eq-2020.md)] 

This guide shows you how to share your code in a Git repo in Azure Repos using the command line.

The instructions below use the default bash shell used on Linux and macOS, but the Git commands will work in any shell, including Git Bash from Git for Windows.

## Prerequisites

* An organization in Azure DevOps. If you don't have an organization, you can [sign up](../../organizations/accounts/create-organization.md) for one for free. Each organization includes free, unlimited private Git repositories.

## Download and install Azure CLI and add Azure DevOps extension

1. [Install the Azure CLI](/cli/azure/install-azure-cli). You must have at least `v2.0.49`, which you can verify with `az --version` command.

2. Add the Azure DevOps Extension `az extension add --name azure-devops`

3. Run the `az login` command.

    If the CLI can open your default browser, it will do so and load a sign-in page. Otherwise, you need to open a
    browser page and follow the instructions on the command line to enter an authorization code after navigating to
    [https://aka.ms/devicelogin](https://aka.ms/devicelogin) in your browser. For more information, see the
    [Azure CLI login page](/cli/azure/authenticate-azure-cli?preserve-view=true&view=azure-cli-latest).
  
4. For seamless commanding, set the organization and project as defaults in configuration.
 
    `az devops configure --defaults organization=https://dev.azure.com/contoso project=contoso`
    
## Download and install Git

* [Windows](#windows)
* [macOS](#macos)
* [Linux and Unix](#linux-and-unix)

### Windows

Download and install [Git for Windows](https://git-scm.com/download/win) , which includes the [Git Credential Manager](set-up-credential-managers.md) to 
easily connect to Azure Repos. 

### macOS

Use [Homebrew](https://brew.sh/) to install and set up Git.

```console
brew install git
```

### Linux and Unix

Use your distribution's package management system to download and install Git. For example, on Ubuntu:

```bash
sudo apt-get install git
```

Refer to the [list of install commands](https://git-scm.com/download/linux) for the most up to date instructions for your Linux distribution.

## Create your local repo

Create a local Git repo for your code. If your code is already in a local Git repo, you can skip this step.

1. Navigate to the folder where your code is on the command line:

    ```bash
    cd /home/fabrikam/fiber
    ```

2. Create a Git repo on your machine to store your code. You will connect this repo to Azure Repos in the next section.

    ```bash
    git init .
    ```

3. Commit your code into the local Git repo.

    ```bash
    git add --all
    git commit -m "first commit of my code"
    ```

## Create your Git repo in Azure Repos

1. Create a new Git repo in Azure Repos for your code. 

   ```azurecli
   az repos create --name FabrikamApp
   ```
   
2. Copy the clone URL from the remote URL attribute in the JSON output.
    
   ```azurecli
   $ az repos create --name FabrikamApp
   
   [
    {          
        "defaultBranch": null,
        "id": "fa3ee42f-519d-4633-8e31-4a84de343ca3",
        "isFork": null,
        "name": "FabrikamApp",
        "parentRepository": null,
        "project": {
          "abbreviation": null,
          "description": "This is the pipeline project for github repo",
          "id": "fa3ee42f-519d-4633-8e31-4a84de343ca4",
          "lastUpdateTime": "2019-04-09T08:32:15.977Z",
          "name": "Fabrikam",
          "revision": 255,
          "state": "wellFormed",
          "url": "https://dev.azure.com/fabrikops2/_apis/projects/fa3ee42f-519d-4633-8e31-4a84de343ca4",
          "visibility": "public"
        },
        "remoteUrl": "https://dev.azure.com/fabrikops2/Fabrikam/_git/FabrikamApp",
        "size": 0,
        "sshUrl": "fabrikops2@vs-ssh.visualstudio.com:v3/fabrikops2/Fabrikam/FabrikamApp",
        "url": "https://dev.azure.com/fabrikops2/fa3ee42f-519d-4633-8e31-4a84de343ca4/_apis/git/repositories/fa3ee42f-519d-4633-8e31-4a84de343ca3",
        "validRemoteUrls": null
      }
    ]
   ```

3. Connect your local repo to the Git repo in Azure Repos using the copied clone URL in the `git remote` command:

    ```bash
    git remote add origin https://dev.azure.com/fabrikops2/Fabrikam/_git/FabrikamApp
    ```


## Push your code 

Before pushing your code, set up authentication with [credential managers](set-up-credential-managers.md) or [SSH](use-ssh-keys-to-authenticate.md) before continuing.

```bash
git push origin main
```

## Next steps

> [!div class="nextstepaction"]
> [New to Git repos? Learn more](/devops/develop/git/set-up-a-git-repository)

> [!div class="nextstepaction"]
> [Learn more about using Git in the Git tutorial](gitworkflow.md)
