---
ms.prod: vs-devops-alm
ms.technology: vs-devops-extensions-api
title: Custom build task reference | Extensions for Visual Studio Team Services
description: Reference for creating a custom build task with an extension in Visual Studio Team Services.
ms.assetid: 00806e48-3839-40eb-880f-12ec53bfdf73
ms.manager: douge
ms.author: elbatk
ms.date: 11/14/2016
---

# Reference for creating custom build tasks within extensions

## Custom build task JSON schema
When creating a custom build task with an extension, your extension will include a `task.json` file for each build task.
This file describes the build task and is what the build system uses to render configuration options to the user and to know which scripts to execute at build time.

Below is the JSON schema for the `task.json` file.

### task.json schema

[!code-javascript[JSON]](./_shared/build-task-schema.json)]

## Bundle multiple versions of build tasks within one extension
You can now include multiple versions of a build task in your extension. This can be helpful if you want to roll out
future versions of your extension without interrupting service of users running older versions. The table below shows the layout for having
multiple versions in one extension.

<table style="margin-left:auto;margin-right:auto;width=100%">
<thead>
<tr>
    <th class="col-md-6">Traditional Extension Layout</th>
    <th class="col-md-6">Multiple Version Layout</th>
</tr></thead>
<tbody>
<tr>
    <td><ul>
        <li>extensionManifest.json</li>
        <li>extensionIcon.png</li>
        <li>Task1</li>
            <ul>
                <li>task.json</li>
                <li>taskIcon.png</li>
                <li>taskScript.ps1</li>
            </ul>
    </ul></td>
    <td><ul>
        <li>extensionManifest.json</li>
        <li>extensionIcon.png</li>
        <li>Task1</li>
            <ul>
                <li>Task1V1</li>
                    <ul>
                        <li>task.json</li>
                        <li>taskIcon.png</li>
                        <li>taskScript.ps1</li>
                    </ul>
            </ul>
            <ul>
                <li>Task1V2</li>
                    <ul>
                        <li>task.json</li>
                        <li>taskIcon.png</li>
                        <li>taskScript.ps1</li>
                    </ul>
            </ul>
        <li>Task2</li>
            <ul>
                <li>Task2V1</li>
                    <ul>
                        <li>task.json</li>
                        <li>taskIcon.png</li>
                        <li>taskScript.ps1</li>
                    </ul>
            </ul>
            <ul>
                <li>Task2V2</li>
                    <ul>
                        <li>task.json</li>
                        <li>taskIcon.png</li>
                        <li>taskScript.ps1</li>
                    </ul>
            </ul>
    </ul></td>
</tr>
</tbody>
</table>

>[!NOTE]
>The code will look for the `task.json` file inside the task folder. If one is not found, it will look just *one* level deeper.
>An error will be thrown if one is not found in either level.


