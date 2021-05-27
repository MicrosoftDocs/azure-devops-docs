---
title: Configure branch policies for Azure DevOps CLI 
titleSuffix: Azure DevOps 
description: Configure branch policies using Azure DevOps CLI  
ms.topic: reference 
ms.prod: devops 
ms.technology: devops-reference
ms.manager: mijacobs 
ms.author: kaelli  
author: KathrynEE
monikerRange: '>= azure-devops-2020'
ms.date: 04/30/2021
---

# Configure Git repository policies using a configuration file

[!INCLUDE [temp](../includes/version-cloud-plus-2020.md)] 

Branch policies help teams protect their important branches of development. Policies enforce your team's code quality and change management standards. For an overview of policy settings you can configure, see [Git repository settings and policies](../repos/git/repository-settings.md).

You can configure branch policies for your repository using the various `az repos policy` commands. However, the policy commands accept a single scope, i.e., single combination of repository, branch and match type. If you want to apply the same policy across various scopes, you can do that using a policy configuration file.

Say you want to create a manual queue build policy across all branch folders that start with "release" and also on the main branch. To achieve this, execute the following steps:

## Create a policy configuration file 

Create a policy configuration file for build policy, including the multiple application scopes.

> [!div class="tabbedCodeSnippets"]
> ```json
> {
> "isBlocking": true,
> "isDeleted": false,
> "isEnabled": true,
> "revision": 1,
> "settings": {
>   "buildDefinitionId": 22,
>   "displayName": "Manual Queue Policy",
>   "manualQueueOnly": true,
>   "queueOnSourceUpdateOnly": false,
>   "scope": [
>   {
>     "matchKind": "Prefix",
>     "refName": "refs/heads/release",
>     "repositoryId": "e646f204-53c9-4153-9ab9-fd41a11e3564"
>   },
>   {
>     "matchKind": "Exact",
>     "refName": "refs/heads/main",
>     "repositoryId": "e646f204-53c9-4153-9ab9-fd41a11e1234"
>   }
>   ],
>   "validDuration": 0
> },
> "type": {
>   "displayName": "Build",
>   "id": "0609b952-1397-4640-95ec-e00a01b2f659"
> }
> }
> ```

To learn more about the structure for various policy types, refer to [Policy create](/rest/api/azure/devops/policy/configurations/create#examples).

## Save the file and run the create policy command

`az repos policy create C:\policyConfiguration.txt`

Note that the path is provided using '\\' backslash.

## Related articles 

- [Git repository settings and policies](../repos/git/repository-settings.md)

