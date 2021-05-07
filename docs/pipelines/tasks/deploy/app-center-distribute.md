---
title: App Center Distribute task
description: Distribute app builds to testers and users through App Center
ms.topic: reference
ms.assetid: B832BEC5-8C27-4FEF-9FB8-6BEC8524AD8A
ms.manager: dastahel
ms.custom: seodec18
ms.author: vijayma
author: vijayma
ms.date: 04/22/2020
monikerRange: '>= tfs-2017'
---

# App Center Distribute task

[!INCLUDE [version-tfs-2017-rtm](../../includes/version-tfs-2017-rtm.md)]

Use this task to distribute app builds to testers and users through App Center.
- [Sign up with App Center](https://appcenter.ms/signup?utm_source=DevOps&utm_medium=Azure&utm_campaign=docs) first.
- For details about using this task, see the App Center documentation article [Deploy Azure DevOps Builds with App Center](/appcenter/distribution/vsts-deploy).


::: moniker range="<= tfs-2018"

[!INCLUDE [temp](../../includes/concept-rename-note.md)]

::: moniker-end

::: moniker range="> tfs-2018"

## YAML snippet

[!INCLUDE [temp](../includes/yaml/AppCenterDistributeV3.md)]

::: moniker-end

## Arguments

|Argument|Description|
|--- |--- |
|`serverEndpoint`<br/>App Center service connection|(Required) Select the service connection for App Center. Create a new App Center service connection in Azure DevOps project settings.|
|`appSlug`<br/>App slug|(Required) The app slug is in the format of `{username}/{app_identifier}`. To locate `{username}` and `{app_identifier}` for an app, click on its name from https://appcenter.ms/apps, and the resulting URL is in the format of https://appcenter.ms/users/{username}/apps/{app_identifier}. If you are using orgs, the app slug is of the format {orgname}/{app_identifier}.|
|`app`<br/>Binary file path|(Required) Relative path from the repo root to the APK or IPA file you want to publish <br/>Argument alias: `appFile`|
|`buildVersion` <br/>Build version| (Optional) The build version of the uploading binary which needs to be specified for `.zip` and `.msi`. This value will be ignored unless the platform is WPF or WinForms.|
|`symbolsType`<br/>Symbols type|(Optional) Include symbol files to receive symbolicated stack traces in App Center Diagnostics. Options: `Android, Apple, UWP`. <br/>Argument alias: `symbolsOption`|
|`symbolsPath`<br/>Symbols path|(Optional) Relative path from the repo root to the symbols folder.|
|`appxsymPath`<br/>Symbols path (*.appxsym)|(Optional) Relative path from the repo root to PDB symbols files. Path may contain wildcards.|
|`dsymPath`<br/>dSYM path|(Optional) Relative path from the repo root to dSYM folder. Path may contain wildcards. <br/>Argument alias: `symbolsDsymFiles`|
|`mappingTxtPath` <br/>Mapping file| (Optional) Relative path from the repo root to Android's mapping.txt file <br/>Argument alias: `symbolsMappingTxtFile`|
|`nativeLibrariesPath` <br/>Native Library File Path| (Optional) Relative path from the repo root to the additional native libraries you want to publish (e.g. .so files)|
|`packParentFolder`<br/>Include all items in parent folder|(Optional) Upload the selected symbols file or folder and all other items inside the same parent folder. This is required for React Native apps. <br/>Argument alias: `symbolsIncludeParentDirectory`|
|`releaseNotesSelection`<br/>Create release notes|(Required) Release notes will be attached to the release and shown to testers on the installation page. Options: `input, file`. <br/>Default value: `input` <br/>Argument alias: `releaseNotesOption`|
|`releaseNotesInput`<br/>Release notes|(Required) Release notes for this version.|
|`releaseNotesFile`<br/>Release notes file|(Required) Select a UTF-8 encoded text file which contains the Release Notes for this version.|
|`isMandatory`<br/>Require users to update to this release|(Optional) App Center Distribute SDK required to mandate update. Testers will automatically be prompted to update. <br/>Default value: `false`|
|`destinationType`<br/>Release destination|(Required) Each release will be distributed to either groups or a store. Options: `groups, store`.|
|`destinationGroupIds`<br/>Destination IDs|(Optional) IDs of the distribution groups to release to. Leave it empty to use the default group and use commas or semicolons to separate multiple IDs. <br/>Argument alias: `distributionGroupId`|
|`destinationStoreId`<br/>Destination ID|(Required) ID of the distribution store to deploy to.|
|`isSilent`<br/>Do not notify testers. Release will still be available to install.|(Optional) Testers will not receive an email for new releases.|

## Example

This example pipeline builds an Android app, runs tests, and publishes the app using App Center Distribute.

```yaml
# Android
# Build your Android project with Gradle.
# Add steps that test, sign, and distribute the APK, save build artifacts, and more:
# https://docs.microsoft.com/azure/devops/pipelines/ecosystems/android

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
    appSlug: '$(APP_CENTER_SLUG)'
    appFile: '$(APP_FILE)' # Relative path from the repo root to the APK or IPA file you want to publish
    symbolsOption: 'Android'
    releaseNotesOption: 'input'
    releaseNotesInput: 'Here are the release notes for this version.'
    destinationType: 'groups'
```

## Open source

This task is open source [on GitHub](https://github.com/Microsoft/azure-pipelines-tasks). Feedback and contributions are welcome.
