---
title: App Center Distribute task
description: Distribute app builds to testers and users through App Center
ms.topic: reference
ms.prod: devops
ms.technology: devops-cicd
ms.assetid: B832BEC5-8C27-4FEF-9FB8-6BEC8524AD8A
ms.manager: dastahel
ms.custom: seodec18
ms.author: dastahel
ms.date: 12/07/2018
monikerRange: '>= tfs-2017'
---

# App Center Distribute task

[!INCLUDE [version-tfs-2017-rtm](../../_shared/version-tfs-2017-rtm.md)]

Use this task in a build or release pipeline to distribute app builds to testers and users through App Center.

::: moniker range="<= tfs-2018"
[!INCLUDE [temp](../../_shared/concept-rename-note.md)]
::: moniker-end

::: moniker range="> tfs-2018"
## YAML snippet
[!INCLUDE [temp](../_shared/yaml/AppCenterDistributeV1.md)]
::: moniker-end

## Arguments

<table><thead><tr><th>Argument</th><th>Description</th></tr></thead>
<tr><td>App Center connection</td><td>(Required) Select the service connection for your Visual Studio App Center connection. To create one, click the Manage link and create a new service connection.</td></tr>
<tr><td>App slug</td><td>(Required) The app slug is in the format of **{username}/{app_identifier}**.  To locate **{username}** and **{app_identifier}** for an app, click on its name from https://appcenter.ms/apps, and the resulting URL is in the format of [https://appcenter.ms/users/<b>{username}</b>/apps/<b>{app_identifier}</b>](https://appcenter.ms/users/{username}/apps/{app_identifier}). If you are using orgs, the app slug is of the format **{orgname}/{app_identifier}**.</td></tr>
<tr><td>Binary file path</td><td>(Required) Relative path from the repo root to the APK or IPA file you want to publish</td></tr>
<tr><td>Symbols type</td><td>(Optional) undefined</td></tr>
<tr><td>Symbols path</td><td>(Optional) Relative path from the repo root to the symbols folder.</td></tr>
<tr><td>Symbols path (*.pdb)</td><td>(Optional) Relative path from the repo root to PDB symbols files. Path may contain wildcards.</td></tr>
<tr><td>dSYM path</td><td>(Optional) Relative path from the repo root to dSYM folder. Path may contain wildcards.</td></tr>
<tr><td>Mapping file</td><td>(Optional) Relative path from the repo root to Android's mapping.txt file.</td></tr>
<tr><td>Include all items in parent folder</td><td>(Optional) Upload the selected symbols file or folder and all other items inside the same parent folder. This is required for React Native apps.</td></tr>
<tr><td>Create release notes</td><td>(Required) undefined</td></tr>
<tr><td>Release notes</td><td>(Required) Release notes for this version.</td></tr>
<tr><td>Release notes file</td><td>(Required) Select a UTF-8 encoded text file which contains the Release Notes for this version.</td></tr>
<tr><td>Destination ID</td><td>(Optional) ID of the distribution group or store the app will deploy to. Leave it empty to use the default group.</td></tr>
[!INCLUDE [temp](../_shared/control-options-arguments.md)]
</table>

## Open source

This task is open source [on GitHub](https://github.com/Microsoft/azure-pipelines-tasks). Feedback and contributions are welcome.
