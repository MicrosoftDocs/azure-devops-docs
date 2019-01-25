---
ms.prod: devops
ms.technology: devops-ecosystem
title: Custom build/release task reference | Extensions for Azure DevOps Services
description: Reference for creating a custom build or release task with an extension in Azure DevOps Services.
ms.assetid: 00806e48-3839-40eb-880f-12ec53bfdf73
ms.topic: conceptual
ms.manager: jillfra
monikerRange: '>= tfs-2017'
ms.author: elbatk
author: elbatk
ms.date: 11/29/2018
---

# Reference for integrating custom build tasks into extensions

## Custom tasks
[Tasks](../../pipelines/process/tasks.md) are the building blocks for defining automation in a build or release pipeline. We offer many [built-in tasks](../../pipelines/tasks/index.md)
to enable fundamental build and deployment scenarios that we recommend you examine before building your own. If the existing tasks don't satisfy your needs, you can build a [custom task](add-build-task.md).

## Custom build task JSON

When creating a custom build or release task with an extension, your extension will include a `task.json` file for each build or release task.
This file describes the build or release task and is what the build system uses to render configuration options to the user and to know which scripts to execute at build time.

The build/release task SDK documentation is [on GitHub](https://github.com/Microsoft/azure-pipelines-task-lib).
Specifically, you may be interested in the [task.json schema](https://github.com/Microsoft/azure-pipelines-task-lib/blob/master/tasks.schema.json).

## Bundle multiple versions of build/release tasks within one extension
You can now include multiple versions of a build or release task in your extension. This can be helpful if you want to roll out
future versions of your extension without interrupting service of users running older versions. The table below shows the layout for having
multiple versions in one extension.

### Traditional extension layout

* extensionManifest.json
* extensionIcon.png
* Task1
    * task.json
    * icon.png
    * taskScript.ps1

### Multiple version layout

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
                    

>[!NOTE]
>The code will look for the `task.json` file inside the task folder. If one is not found, it will look just *one* level deeper.
>An error will be thrown if one is not found in either level.


