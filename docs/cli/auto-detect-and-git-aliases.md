---
title: Auto detect configuration and git aliases
titleSuffix: Azure DevOps 
description: Auto detect configuration and git aliases when using Azure DevOps extension command-line interface 
ms.topic: conceptual
ms.prod: devops 
ms.technology: devops-reference
ms.manager: mijacobs 
ms.author: kaelli  
author: KathrynEE
monikerRange: '>= azure-devops-2020'
ms.date: 08/17/2020
---

# Auto detect configuration and git aliases

[!INCLUDE [temp](../includes/version-cloud-plus-2020.md)] 

The Azure DevOps CLI has been optimized to allow developers to use Azure Repos and work well with their git workflows.

## Auto detect configuration

The Azure DevOps Extension evaluates if your current working directory is an Azure Repos git repository to auto detect configuration setting - organization, project, and repository. Auto detection is controlled by the `--detect` flag, which is `true` by default.

With this capability, you can run `az repos pr list` in your local git checkout to view all PRs in the repository.

## Git alias

You can also configure the Azure DevOps Extension to add git aliases for common git-based Azure Repos commands like creating or adding reviewers to pull requests. Run the following command to enable git aliases.


```bash
az devops configure --use-git-aliases true
```

All `az repos` commands will now be aliased to `git repo` and all `az repos pr` commands to `git pr`.

For example, a pull request can now be created using the following command:


```bash
git pr create --target-branch {branch\_name}
```

## Parameter hierarchy

There are three main ways by which parameters can be provided to a command. They have been listed in order of priority:
1. Command parameters   
For example: 
`az repos list --organization https://dev.azure.com/contoso --project webApplication`
2. Auto detection from git context if `--detect` is `true`. Detect is `true` by default. 
3. Default configuration
For example: 
`az devops configure --defaults organization=https://dev.azure.com/contoso project=webApplication`

Say a customer runs the following commands
```bash
~/$ az devops configure --defaults organization=https://dev.azure.com/contoso project=webApp
~/$ az repos list --organization=https://dev.azure.com/contosoTest --project=testApplication
````

The organization and project parameter provided via command will be used since command parameters take top priority.

Let's have a look at another example. Say a user has pre-configured the default organization to `contoso` and project to `webApp`. However, the user is working out of a local checkout of a git repo, which is in the `contosoTest` organization and `testApplication` project. Further, `--detect` is `true` by default. 

```bash
~/contosoTest/portal$ az devops configure --defaults organization=https://dev.azure.com/contoso project=webApp
~/contosoTest/portal$ az repos list
```

In this case, `contosoTest` and `testApplication` will be auto detected as the target organization and project from git context and will override the defaults that have been set.
