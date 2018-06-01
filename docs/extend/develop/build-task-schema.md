---
ms.prod: devops
ms.technology: devops-ecosystem
title: Custom build/release task reference | Extensions for VSTS
description: Reference for creating a custom build or release task with an extension in VSTS.
ms.assetid: 00806e48-3839-40eb-880f-12ec53bfdf73
ms.topic: conceptual
ms.manager: douge
monikerRange: '>= tfs-2017'
ms.author: elbatk
author: elbatk
ms.date: 11/14/2016
---

# Reference for creating custom build/release tasks within extensions

## Custom build task JSON

When creating a custom build or release task with an extension, your extension will include a `task.json` file for each build or release task.
This file describes the build or release task and is what the build system uses to render configuration options to the user and to know which scripts to execute at build time.

The build/release task SDK documentation is [here](https://github.com/Microsoft/vsts-task-lib).

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


