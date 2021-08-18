---
ms.technology: devops-ecosystem
title: Custom build/release task reference | Extensions for Azure DevOps
description: Reference for creating and integrating custom build or release tasks with an extension in Azure DevOps.
ms.assetid: 00806e48-3839-40eb-880f-12ec53bfdf73
ms.topic: conceptual
monikerRange: '>= tfs-2017'
ms.author: chcomley
author: chcomley
ms.date: 09/23/2020
---

# Reference - integrate custom build tasks into extensions

[!INCLUDE [version-tfs-2017-through-vsts](../../includes/version-tfs-2017-through-vsts.md)]

Use this reference when you want to create and integrate custom build pipeline tasks with extensions in Azure DevOps.

[!INCLUDE [extension-docs-new-sdk](../../includes/extension-docs-new-sdk.md)]

## Custom tasks

[Tasks](../../pipelines/process/tasks.md) are the building blocks for defining automation in a build or release pipeline. We offer many [built-in tasks](../../pipelines/tasks/index.md)
to enable fundamental build and deployment scenarios. We recommend that you review these scenarios before building your own. If the existing tasks don't satisfy your needs, you can build a [custom task](add-build-task.md).

## Custom build task JSON

When you're creating a custom build or release task with an extension, your extension includes a `task.json` file for each build or release task.
The `task.json` file describes the build or release task. The build system uses it to render configuration options to the user and to know which scripts to execute at build time.

The build/release task SDK documentation is [on GitHub](https://github.com/Microsoft/azure-pipelines-task-lib).
Specifically, you may be interested in the [task.json schema](https://github.com/Microsoft/azure-pipelines-task-lib/blob/master/tasks.schema.json).

## Bundle multiple versions of build/release tasks within one extension

You can include multiple versions of a build or release task within your extension. Roll out future versions of your extension without interrupting service of users on older versions. The following information shows the layout for having multiple versions in one extension.

### Traditional extension layout

* extensionManifest.json
* extensionIcon.png
* Task1
  * task.json
  * icon.png
  * taskScript.ps1

> [!NOTE]
> When you're setting up a task icon, ensure the following is true.
>
> * The icon name is icon.png
> * The icon size is 32x32 pixels
> * The icon is in the same location as the `task.json` file

### Multiple versions layout

>[!NOTE]
>The code looks for the `task.json` file inside of the task folder and then one level deeper.
>If one isn't found in either level, you see an error message.

* extensionManifest.json
* extensionIcon.png
* Task1
  * Task1V1
    * task.json
    * icon.png
    * taskScript.ps1
  * Task1V2
    * task.json
    * icon.png
    * taskScript.ps1
* Task2
  * Task2V1
    * task.json
    * icon.png
    * taskScript.ps1
  * Task2V2
    * task.json
    * icon.png
    * taskScript.ps1

> [!TIP]
> To ensure the `_build/Tasks/ssrsfilesdeploy` folder contains the V1 and V2 contents, set `matchCopy(item, srcPath, destPath, { noRecurse:` to `false` in the `make-util.js` file.

## Related articles

* [Add a custom pipelines task extension](add-build-task.md)
* [Server Task GitHub Documentation](https://github.com/Microsoft/azure-pipelines-tasks/blob/master/docs/authoring/servertaskauthoring.md)
* [Build/Release Task Examples](https://github.com/Microsoft/vso-agent-tasks/tree/master/Tasks)
