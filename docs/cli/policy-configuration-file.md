---
title: Configure Branch Policies for Azure DevOps CLI 
titleSuffix: Azure DevOps 
description: Learn how to configure branch policies using Azure DevOps CLI to help your team protect their development branches.  
ms.topic: how-to
ms.subservice: azure-devops-reference
ms.manager: mijacobs 
ms.author: chcomley  
author: chcomley
monikerRange: 'azure-devops'
ms.date: 06/03/2025
#customer intent: As a team lead, I want to use branch policies to protected different development branches by using Azure DevOps CLI.
---

# Configure Git repository policies using a configuration file

[!INCLUDE [version-eq-azure-devops](../includes/version-eq-azure-devops.md)]

Branch policies help teams protect their important branches of development. Policies enforce your team's code quality and change management standards. For an overview of policy settings you can configure, see [Git repository settings and policies](../repos/git/repository-settings.md).

You can configure branch policies for your repository using the various `az repos policy` commands. The policy commands accept a single scope. They work on a single combination of repository, branch, and match type. If you want to apply the same policy across various scopes, use a policy configuration file.

Say you want to create a manual queue build policy. It covers all branch folders that start with "release" and also on the main branch.

First, create a policy configuration file for build policy, including the multiple application scopes.

> [!div class="tabbedCodeSnippets"]

> ```json
> {
>   "isBlocking": true,
>   "isDeleted": false,
>   "isEnabled": true,
>   "revision": 1,
>   "settings": {
>     "buildDefinitionId": 22,
>     "displayName": "Manual Queue Policy",
>     "manualQueueOnly": true,
>     "queueOnSourceUpdateOnly": false,
>     "scope": [
>       {
>         "matchKind": "Prefix",
>         "refName": "refs/heads/release",
>         "repositoryId": "aaaaaaaa-0000-1111-2222-bbbbbbbbbbbb"
>       },
>       {
>         "matchKind": "Exact",
>         "refName": "refs/heads/main",
>         "repositoryId": "aaaaaaaa-0000-1111-2222-bbbbbbbbbbbb"
>       }
>     ],
>     "validDuration": 0
>   },
>   "type": {
>     "displayName": "Build",
>     "id": "bbbbbbbb-1111-2222-3333-cccccccccccc"
>   }
> }
> ```

To learn more about the structure for various policy types, see [Policy create](/rest/api/azure/devops/policy/configurations/create#examples).

Then, save the file and run the create policy command:

```azurecli
az repos policy create --policy-configuration C:\policyConfiguration.txt
```

> [!NOTE]
> The path is provided using '\\' backslash.

## Related articles

- [Git repository settings and policies](../repos/git/repository-settings.md)
