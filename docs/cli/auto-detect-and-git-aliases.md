---
title: Auto detect configuration and git aliases
titleSuffix: Azure DevOps 
description: Auto detect configuration and git aliases when using Azure DevOps extension command line interface 
ms.topic: conceptual
ms.manager: jillfra
ms.prod: devops 
ms.technology: devops-ref
ms.manager: jillfra 
ms.author: geverghe
author: KathrynEE
ms.date: 06/18/2019
---

# Auto detect configuration and git aliases

The Azure DevOps Extension has been optimized for Azure Repos to work well with git workflows.

The Azure DevOps Extension evaluates if your current working directory is an Azure Repos git repository to auto detect configuration setting - organization, project and repository. This is achieved using the `detect` flag which is ON by default.

If you are working in a local check out of a repository, you can simply run `az repos pr list` from the local directory to view all PRs.

You can also configure the Azure DevOps Extension to add git aliases for common git-based Azure Repos commands like creating or adding reviewers to pull requests. This can be enabled by running the following command:

> [!div class="tabbedCodeSnippets"]
```bash
az devops configure --use-git-alias yes
```

This will alias all `az repos` commands to `git repo` and all `az repos pr` commands to `git pr`.
So `az repos list` becomes `git repo list` and `az repo pr list` becomes `git pr list`

For example, a pull request can now be created using the following command:

> [!div class="tabbedCodeSnippets"]
```bash
git pr create --target-branch {branch\_name}
```

