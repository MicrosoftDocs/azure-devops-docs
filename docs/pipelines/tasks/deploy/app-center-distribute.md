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
author: davidstaheli
ms.date: 12/07/2018
monikerRange: '>= tfs-2017'
---

# App Center Distribute task

[!INCLUDE [version-tfs-2017-rtm](../../_shared/version-tfs-2017-rtm.md)]

Use this task in a build or release pipeline to distribute app builds to testers and users through App Center.
For details about using this task, see the App Center documentation topic [Deploy Azure DevOps Builds with App Center](https://docs.microsoft.com/appcenter/distribution/vsts-deploy).

::: moniker range="<= tfs-2018"

[!INCLUDE [temp](../../_shared/concept-rename-note.md)]

::: moniker-end

::: moniker range="> tfs-2018"

## YAML snippet

[!INCLUDE [temp](../_shared/yaml/AppCenterDistributeV3.md)]

::: moniker-end

## Arguments

<table><thead><tr><th>Argument</th><th>Description</th></tr></thead>
<tr><td>App Center service connection</td><td>(Required) Select the service connection for App Center. Create a new App Center service connection in Azure DevOps project settings.</td></tr>
<tr><td>App slug</td><td>(Required) The app slug is in the format of <strong>{username}/{app_identifier}</strong>.  To locate <strong>{username}</strong> and <strong>{app_identifier}</strong> for an app, click on its name from <a href="https://appcenter.ms/apps" data-raw-source="https://appcenter.ms/apps">https://appcenter.ms/apps</a>, and the resulting URL is in the format of <a href="https://appcenter.ms/users/{username}/apps/{app_identifier}" data-raw-source="[https://appcenter.ms/users/&lt;b&gt;{username}&lt;/b&gt;/apps/&lt;b&gt;{app_identifier}&lt;/b&gt;](https://appcenter.ms/users/{username}/apps/{app_identifier})">https://appcenter.ms/users/<b>{username}</b>/apps/<b>{app_identifier}</b></a>. If you are using orgs, the app slug is of the format <strong>{orgname}/{app_identifier}</strong>.</td></tr>
<tr><td>Binary file path</td><td>(Required) Relative path from the repo root to the APK or IPA file you want to publish</td></tr>
<tr><td>Symbols type</td><td>(Optional) Include symbol files to receive symbolicated stack traces in App Center Diagnostics. Options: <code>Android</code>, <code>Apple</code>.</td></tr>
<tr><td>Symbols path</td><td>(Optional) Relative path from the repo root to the symbols folder.</td></tr>
<tr><td>Symbols path (*.pdb)</td><td>(Optional) Relative path from the repo root to PDB symbols files. Path may contain wildcards.</td></tr>
<tr><td>dSYM path</td><td>(Optional) Relative path from the repo root to dSYM folder. Path may contain wildcards.</td></tr>
<tr><td>Mapping file</td><td>(Optional) Relative path from the repo root to Android&#39;s mapping.txt file.</td></tr>
<tr><td>Include all items in parent folder</td><td>(Optional) Upload the selected symbols file or folder and all other items inside the same parent folder. This is required for React Native apps.</td></tr>
<tr><td>Create release notes</td><td>(Required) Release notes will be attached to the release and shown to testers on the installation page. Options: <code>input</code>, <code>file</code>.</td></tr>
<tr><td>Release notes</td><td>(Required) Release notes for this version.</td></tr>
<tr><td>Release notes file</td><td>(Required) Select a UTF-8 encoded text file which contains the Release Notes for this version.</td></tr>
<tr><td>Require users to update to this release</td><td>(Optional) App Center Distribute SDK required to mandate update. Testers will automatically be prompted to update.</td></tr>
<tr><td>Release destination</td><td>(Required) Each release will be distributed to either groups or a store. Options: <code>groups</code>, <code>store</code>.</td></tr>
<tr><td>Destination IDs</td><td>(Optional) IDs of the distribution groups to release to. Leave it empty to use the default group and use commas or semicolons to separate multiple IDs.</td></tr>
<tr><td>Destination ID</td><td>(Required) ID of the distribution store to deploy to.</td></tr>
<tr><td>Do not notify testers. Release will still be available to install.</td><td>(Optional) Testers will not receive an email for new releases.</td></tr>


<tr>
<th style="text-align: center" colspan="2"><a href="~/pipelines/process/tasks.md#controloptions" data-raw-source="[Control options](../../process/tasks.md#controloptions)">Control options</a></th>
</tr>

</table>

## Example

This example pipeline builds an Android app, runs tests, and publishes the app using App Center Distribute.

```yaml
# Android
# Build your Android project with Gradle.
# Add steps that test, sign, and distribute the APK, save build artifacts, and more:
# https://docs.microsoft.com/azure/devops/pipelines/languages/android

pool:
  vmImage: 'macOS-latest'
steps:

  - script: sudo npm install -g appcenter-cli
  - script: appcenter login --token {YOUR_TOKEN}

  - task: Gradle@2
    inputs:
      workingDirectory: ''
      gradleWrapperFile: 'gradlew'
      gradleOptions: '-Xmx3072m'
      publishJUnitResults: false
      testResultsFiles: '**/TEST-*.xml'
      tasks: build

  - task: CopyFiles@2
    inputs:
      contents: '**/*.apk'
      targetFolder: '$(build.artifactStagingDirectory)'

  - task: PublishBuildArtifacts@1
    inputs:
      pathToPublish: '$(build.artifactStagingDirectory)'
      artifactName: 'outputs'
      artifactType: 'container'

  # Run tests using the App Center CLI
  - script: appcenter test run espresso --app "{APP_CENTER_SLUG}" --devices "{DEVICE}" --app-path {APP_FILE} --test-series "master" --locale "en_US" --build-dir {PAT_ESPRESSO} --debug

  # Distribute the app
  - task: AppCenterDistribute@3
    inputs:
      serverEndpoint: 'AppCenter'
      appSlug: '{APP_CENTER_SLUG}'
      appFile: '{APP_FILE}' # Relative path from the repo root to the APK or IPA file you want to publish
      symbolsOption: 'Android'
      releaseNotesOption: 'input'
      releaseNotesInput: 'Here are the release notes for this version.'
      destinationType: 'groups'
```

## Open source

This task is open source [on GitHub](https://github.com/Microsoft/azure-pipelines-tasks). Feedback and contributions are welcome.
