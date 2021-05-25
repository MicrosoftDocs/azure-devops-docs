---
title: npm task
ms.custom: seodec18
description: How to use npm packages when building code in Azure Pipelines
ms.topic: reference
ms.assetid: BE298C30-3B6D-4E06-B747-62A8AF6E10A6
ms.author: vijayma
author: vijayma
ms.date: 04/21/2020
monikerRange: '>= tfs-2015'
---

# npm task

[!INCLUDE [temp](../../includes/version-tfs-2015-rtm.md)]

Use this task to install and publish npm packages.

> [!NOTE]
> The [npm Authenticate](npm-authenticate.md) task is the recommended way to authenticate with Azure Artifacts. This task no longer takes new features and only critical bugs are addressed.

::: moniker range="<= tfs-2018"

[!INCLUDE [temp](../../includes/concept-rename-note.md)]

::: moniker-end

::: moniker range="> tfs-2018"

## YAML snippet

[!INCLUDE [temp](../includes/yaml/NpmV1.md)]

::: moniker-end

## Install npm packages

### Demands
[npm](https://nodejs.org/en/download/)

### Arguments

|Argument|Description|
|--- |--- |
|`command`<br/>Command| (Required) npm command to run. Select `install` here|
|`workingDir`<br/>Working folder that contains `package.json` | Path to the folder containing the target package.json and .npmrc files. Select the folder, not the file e.g. "/packages/mypackage".|
|`advanced` <br/>Verbose logging| Select to print more information to the console on run|
|`customRegistries`<br/>Registries to use|You can either commit a `.npmrc` file to your source code repository and set its path or select a registry from Azure Artifacts.<br/>**useNpmrc**<br/><li>Select this option to use feeds specified in a .npmrc file you've checked into source control. If no `.npmrc` file is present, the task will default to using packages directly from npmjs. <br/><li>Credentials for registries outside this organization/collection can be used to inject credentials you've provided as an npm service connection into your .npmrc as the build runs.<br/>**useFeed**<br/><li>Select this option to use one Azure Artifacts feed in the same organization/collection as the build.|

## Publish npm packages

### Demands

[npm](https://nodejs.org/en/download/)

### Arguments

|Argument|Description|
|--- |--- |
|`command`<br/>Command| (Required) npm command to run. Select publish here.|
|`workingDir`<br/>Working folder that contains `package.json`| Path to the folder containing the target package.json and .npmrc files. Select the folder, not the file e.g. "/packages/mypackage".|
|`advanced` <br/>Verbose logging| Select to print more information to the console on run|
|`customRegistries`<br/>Registries to use|You can either commit a `.npmrc` file to your source code repository and set its path or select a registry from Azure Artifacts.<br/>**useNpmrc**<br/><li>Select this option to use feeds specified in a .npmrc file you've checked into source control. If no `.npmrc` file is present, the task will default to using packages directly from npmjs. <br/><li>Credentials for registries outside this organization/collection can be used to inject credentials you've provided as an npm service connection into your .npmrc as the build runs.<br/>**useFeed**<br/><li>Select this option to use one Azure Artifacts feed in the same organization/collection as the build.|

## Custom npm command

### Demands

[npm](https://nodejs.org/en/download/)

### Arguments

|Argument|Description|
|--- |--- |
|`command`<br/>Command| (Required) npm command to run. Select custom here.|
|`workingDir`<br/>Working folder that contains `package.json`| Path to the folder containing the target package.json and .npmrc files. Select the folder, not the file e.g. "/packages/mypackage".|
|`customCommand`<br/>Command and arguments| (Required) Custom command to run, e.g. \"dist-tag ls mypackage\". <br/> If your arguments contain double quotes ("), escape them with a slash (\\), and surround the escaped string with double quotes ("). <br/>**Example:** to run `npm run myTask -- --users='{"foo":"bar"}'`, provide this input: `run myTask -- --users="{&quot;foo&quot;:&quot;bar&quot;}"`.| 
|`customRegistries`<br/>Registries to use|You can either commit a `.npmrc` file to your source code repository and set its path or select a registry from Azure Artifacts.<br/>**useNpmrc**<br/><li>Select this option to use feeds specified in a .npmrc file you've checked into source control. If no `.npmrc` file is present, the task will default to using packages directly from npmjs. <br/><li>Credentials for registries outside this organization/collection can be used to inject credentials you've provided as an npm service connection into your .npmrc as the build runs.<br/>**useFeed**<br/><li>Select this option to use one Azure Artifacts feed in the same organization/collection as the build.|

## Examples

[Build: gulp](../build/gulp.md)

[Build your Node.js app with gulp](../../ecosystems/javascript.md)

## Open source

This task is open source [on GitHub](https://github.com/Microsoft/azure-pipelines-tasks). Feedback and contributions are welcome.

## FAQ

### Where can I learn npm commands and arguments?

[npm docs](https://docs.npmjs.com/)

<!-- BEGINSECTION class="md-qanda" -->

[!INCLUDE [temp](../../includes/qa-agents.md)]

::: moniker range="< azure-devops"

[!INCLUDE [temp](../../includes/qa-versions.md)]

::: moniker-end

### My Pipeline needs to access a feed in a different project

If the pipeline is running in a different project than the project hosting the feed, you must set up the other project to grant read/write access to the build service. See [Package permissions in Azure Pipelines](../../../artifacts/feeds/feed-permissions.md#package-permissions-in-azure-pipelines) for more details.

<!-- ENDSECTION -->
