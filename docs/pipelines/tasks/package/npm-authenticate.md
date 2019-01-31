---
title: npm Authenticate task (for task runners)
ms.custom: seodec18
description: Don't use this task if you're also using the npm task. Provides npm credentials to an .npmrc file in your repository for the scope of the build. This enables npm task runners like gulp and Grunt to authenticate with private registries.
ms.topic: reference
ms.prod: devops
ms.technology: devops-cicd
ms.assetid: ad884ca2-732e-4b85-b2d3-ed71bcbd2788
ms.manager: dastahel
ms.author: dastahel
ms.date: 05/04/2018
monikerRange: 'azure-devops'
---

# Package: npm Authenticate task (for task runners)

**Azure Pipelines**

Use this task in a build or release pipeline to provide npm credentials to an .npmrc file in your repository for the scope of the build. This enables npm task runners like gulp and Grunt to authenticate with private registries.

>[!NOTE]
> If you are using the npm task, you do not need to use the npm authenticate task. Instead use the feed configuration parameters that are available in the npm task.

::: moniker range="> tfs-2018"
## YAML snippet
[!INCLUDE [temp](../_shared/yaml/NpmAuthenticateV0.md)]
::: moniker-end

## Arguments

<table><thead><tr><th>Argument</th><th>Description</th></tr></thead>
<tr><td>.npmrc file to authenticate</td><td>(Optional) Path to the .npmrc file that specifies the registries you want to work with. Select the file, not the folder e.g. "/packages/mypackage.npmrc".</td></tr>
<tr><td>Credentials for registries outside this account/collection</td><td>(Optional) Credentials to use for external registries located in the project's .npmrc. For registries in this account/collection, leave this blank; the build’s credentials are used automatically.</td></tr>
[!INCLUDE [temp](../_shared/control-options-arguments.md)]
</table>

## Open source

This task is open source [on GitHub](https://github.com/Microsoft/azure-pipelines-tasks). Feedback and contributions are welcome.

## Q & A

<!-- BEGINSECTION class="md-qanda" -->

<!-- ENDSECTION -->
