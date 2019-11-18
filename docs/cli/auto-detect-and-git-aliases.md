---
title: Auto detect configuration and git aliases
titleSuffix: Azure DevOps 
description: Auto detect configuration and git aliases when using Azure DevOps extension command-line interface 
ms.topic: conceptual
ms.manager: mijacobs
ms.prod: devops 
ms.technology: devops-ref
ms.manager: mijacobs 
ms.author: geverghe
author: KathrynEE
monikerRange: 'azure-devops'
ms.date: 06/18/2019
---

# Auto detect configuration and git aliases

[!INCLUDE [temp](../_shared/version-vsts-only.md)] 

The Azure DevOps Extension has been optimized for Azure Repos to work well with git workflows.

The Azure DevOps Extension evaluates if your current working directory is an Azure Repos git repository to auto detect configuration setting - organization, project, and repository. The auto detection is controlled by the `detect` flag, which is ON by default.

If you are working in a local check out of a repository, you can run `az repos pr list` from the local directory to view all PRs.

You can also configure the Azure DevOps Extension to add git aliases for common git-based Azure Repos commands like creating or adding reviewers to pull requests. Run the following command to enable git aliases.


```bash
az devops configure --use-git-aliases true
```

All `az repos` commands will now be aliased to `git repo` and all `az repos pr` commands to `git pr`.

For example, a pull request can now be created using the following command:


```bash
git pr create --target-branch {branch\_name}
```

## Parameter detection hierarchy

There are three main ways by which parameters can be provided to a command and they have been listed in order of priority:
1. Command parameters
For example: 
`az repos list --organization https://dev.azure.com/contoso --project webApplication`
2. Auto detection from git context if --detect is TRUE. Detect is TRUE by default. 
3. Default configuration
For example: 
`az devops configure --defaults organization=https://dev.azure.com/contoso project=webApplication`

Say a customer runs the following commands
```bash
~/$ az devops configure --defaults organization=https://dev.azure.com/contoso project=webApp
~/$ az repos list --organization=https://dev.azure.com/contosoTest --project=testApplication
````

In this case, the organization and project parameters are provided via defaults and via command parameters. As per the hierarchy, the command parameters are given top priority and will be used for the command run.

Let's have a look at another example. Say a user has pre-configured the default organization to `contoso` and project to `webApp`. However, the user is working out of a local checkout of a git repo, which is in the `contosoTest` organization and `testApplication` project. Further, `--detect` is `ON` by default. 

```bash
~/contosoTest/portal$ az devops configure --defaults organization=https://dev.azure.com/contoso project=webApp
~/contosoTest/portal$ az repos list
```

In this case, `contosoTest` and `testApplication` will be auto detected as the target organization and project from git context and will override the defaults that have been set.
