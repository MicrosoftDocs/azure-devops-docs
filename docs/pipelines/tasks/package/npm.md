---
title: npm task
ms.custom: seodec18
description: How to use npm packages when building code in Azure Pipelines
ms.topic: reference
ms.prod: devops
ms.technology: devops-cicd
ms.assetid: BE298C30-3B6D-4E06-B747-62A8AF6E10A6
ms.manager: jillfra
ms.author: alewis
author: andyjlewis
ms.date: 07/05/2017
monikerRange: '>= tfs-2015'
---

# npm task

[!INCLUDE [temp](../../_shared/version-tfs-2015-rtm.md)]

Use this task in a build or release pipeline to install and publish npm packages.

::: moniker range="<= tfs-2018"
[!INCLUDE [temp](../../_shared/concept-rename-note.md)]
::: moniker-end

::: moniker range="> tfs-2018"
## YAML snippet
[!INCLUDE [temp](../_shared/yaml/NpmV1.md)]
::: moniker-end

## Install npm packages

### Demands
[npm](https://nodejs.org/en/download/)

### Arguments
<table>
    <thead>
        <tr>
            <th>Argument</th>
            <th>Description</th>
        </tr>
    </thead>
    <tr>
        <td>Command</td>
        <td>
            npm command to run. Select `install` here.
        </td>
    </tr>
    <tr>
        <td>Working folder with package.json</td>
        <td>
            Path to the folder containing the target package.json and .npmrc files. Select the folder, not the file e.g. "/packages/mypackage".
        </td>
    </tr>
    <tr>
        <th style="text-align: center" colspan="2">Custom registries and authentication</th>
    </tr>
    <tr>
        <td>Registries to use</td>
        <td>
            **Registries in my .npmrc:**
            <ul>
                <li>Select this option to use feeds specified in a [.npmrc](https://docs.npmjs.com/files/npmrc) file you've checked into source control. If no .npmrc file is present, the task will default to using packages directly from npmjs.</li>
                <ul><li>Credentials for registries outside this organization/collection can be used to inject credentials you've provided as an [npm service connection](../../library/service-endpoints.md#sep-npm) into your .npmrc as the build runs.</li></ul>
            </ul>
            **Use packages from this Azure Artifacts/TFS registry:**
            <ul>
                <li>Select this option to use one Azure Artifacts feed in the same organization/collection as the build.</li>
            </ul>
        </td>
    </tr>
    <tr>
        <th style="text-align: center" colspan="2">Advanced</th>
    </tr>
    <tr>
        <td>Verbose logging</td>
        <td>
            Enables verbose logging.
        </td>
    </tr>
    [!INCLUDE [temp](../_shared/control-options-arguments.md)]
</table>

## Publish npm packages

### Demands
[npm](https://nodejs.org/en/download/)

### Arguments
<table>
    <thead>
        <tr>
            <th>Argument</th>
            <th>Description</th>
        </tr>
    </thead>
    <tr>
        <td>Command</td>
        <td>
            npm command to run. Select `publish` here.
        </td>
    </tr>
    <tr>
        <td>Working folder with package.json</td>
        <td>
            Path to the folder containing the target package.json and .npmrc files. Select the folder, not the file e.g. "/packages/mypackage".
        </td>
    </tr>
    <tr>
        <th style="text-align: center" colspan="2">Destination registry and authentication</th>
    </tr>
    <tr>
        <td>Registry location</td>
        <td>
            <ul>
                <li>**Registry I select here** publishes to an Azure Artifacts registry in the same organization/collection as the build. After you select this option, select the target registry from the dropdown.
                </li>
                <li>**External npm registry (including other organizations/collections)** publishes to an external server such as [npm](https://www.npmjs.com/), [MyGet](http://www.myget.org/), or an Azure Artifacts feed in another Azure DevOps organization or TFS collection. After you select this option, create and select an [npm service connection](../../library/service-endpoints.md#sep-npm).
                </li>
            </ul>
        </td>
    </tr>
    <tr>
        <th style="text-align: center" colspan="2">Advanced</th>
    </tr>
    <tr>
        <td>Verbose logging</td>
        <td>
            Enables verbose logging.
        </td>
    </tr>
    [!INCLUDE [temp](../_shared/control-options-arguments.md)]
</table>

## Custom npm command

### Demands

[npm](https://nodejs.org/en/download/)

### Arguments
<table>
    <thead>
        <tr>
            <th>Argument</th>
            <th>Description</th>
        </tr>
    </thead>
    <tr>
        <td>Command</td>
        <td>
            npm command to run. Select `custom` here.
        </td>
    </tr>
    <tr>
        <td>Working folder with package.json</td>
        <td>
            Path to the folder containing the target package.json and .npmrc files. Select the folder, not the file e.g. "/packages/mypackage".
        </td>
    </tr>
    <tr>
        <td>Command and arguments</td>
        <td>
            The custom command and arguments you wish to be executed.
            <br />
            If your arguments contain double quotes (\"), escape them with a slash (\\), and surround the escaped string with double quotes (\").
            <br />
            Example: to run `npm run myTask -- --users='{"foo":"bar"}'`, provide this input: `run myTask -- --users="{\"foo\":\"bar\"}"`.
        </td>
    </tr>
    <tr>
        <th style="text-align: center" colspan="2">Custom registries and authentication</th>
    </tr>
    <tr>
        <td>Registries to use</td>
        <td>
            *Leave this section blank to use packages from npmjs directly.* Otherwise, select one of these options:
            <br />
            **Registries in my .npmrc:**
            <ul>
                <li>Select this option to use feeds specified in a [.npmrc](https://docs.npmjs.com/files/npmrc) file you've checked into source control.</li>
                <li>Credentials for registries outside this organization/collection can be used to inject credentials you've provided as an [npm service connection](../../library/service-endpoints.md#sep-npm) into your .npmrc as the build runs.</li>
            </ul>
            **Use packages from this Azure Artifacts/TFS registry:**
            <ul>
                <li>Select this option to use one Azure Artifacts feed in the same organization/collection as the build.</li>
            </ul>
        </td>
    </tr>
    [!INCLUDE [temp](../_shared/control-options-arguments.md)]
</table>

## Examples

[Build: gulp](../build/gulp.md)

[Build your Node.js app with gulp](../../languages/javascript.md)

## Open source

This task is open source [on GitHub](https://github.com/Microsoft/azure-pipelines-tasks). Feedback and contributions are welcome.

## Q & A

### Where can I learn npm commands and arguments?

[npm docs](https://docs.npmjs.com/)

<!-- BEGINSECTION class="md-qanda" -->

[!INCLUDE [temp](../../_shared/qa-agents.md)]

::: moniker range="< azure-devops"
[!INCLUDE [temp](../../_shared/qa-versions.md)]
::: moniker-end

<!-- ENDSECTION -->
