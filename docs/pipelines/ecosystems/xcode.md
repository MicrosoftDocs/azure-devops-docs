---
title: Build, test, and deploy Xcode apps
description: Automatically build Xcode projects with Azure Pipelines, Azure DevOps, & Team Foundation Server
ms.topic: quickstart
ms.assetid: e9dd0efb-8932-4a77-93be-28e209d486ca
ms.author: vijayma
author: vijayma
ms.date: 08/12/2024
monikerRange: '<= azure-devops'
---

# Build, test, and deploy Xcode apps

[!INCLUDE [version-lt-eq-azure-devops](../../includes/version-lt-eq-azure-devops.md)]

This quickstart shows you how to build and deploy Xcode projects with YAML pipelines in Azure Pipelines.

## Prerequisites

- An Azure DevOps organization and project where you have permission to create pipelines and deploy apps.
- An Xcode 9+ project and app in a GitHub repository. For more information, see [Creating an Xcode Project for an App](https://developer.apple.com/documentation/xcode/creating-an-xcode-project-for-an-app).

## Create the pipeline

>[!IMPORTANT]
>During GitHub procedures, you might be prompted to create a [GitHub service connection](../library/service-endpoints.md#github-service-connection) or be redirected to GitHub to sign in, install Azure Pipelines, or authorize Azure Pipelines. Follow the onscreen instructions to complete the process. For more information, see [Access to GitHub repositories](../repos/github.md#access-to-github-repositories).

1. In your Azure DevOps project, select **Pipelines** > **New pipeline**, or **Create pipeline** if this pipeline is the first in the project.
1. Select **GitHub** as the location of your source code.
1. On the **Select a repository** screen, select the repository for your Xcode project.
1. On the **Configure your pipeline** screen, select **Xcode**.

Azure Pipelines provides a starter pipeline based on the [Xcode](https://github.com/microsoft/azure-pipelines-yaml/blob/master/templates/xcode.yml) template. Review the code in *azure-pipelines.yml*.

### Build environment

Xcode is preinstalled on the [Microsoft-hosted macOS agents](../agents/hosted.md) in Azure Pipelines, so you don't have to set up any infrastructure. For the exact versions of Xcode that are preinstalled, see [Microsoft-hosted agents software](../agents/hosted.md#software).

The `pool` node at the top of your *azure-pipelines.yml* file selects the appropriate agent pool.

```yaml
pool:
  vmImage: 'macOS-latest'
```

### Xcode build task

The [Xcode](/azure/devops/pipelines/tasks/reference/xcode-v5) task builds, tests, or archives an Xcode workspace on macOS, and optionally can package an app. The Xcode step in the starter *azure-pipelines.yml* file builds the iOS project using its default scheme, for the Simulator, and without packaging. You can change values and add parameters to match your project configuration.

```yaml
steps:
- task: Xcode@5
  inputs:
    actions: 'build'
    scheme: ''
    sdk: 'iphoneos'
    configuration: 'Release'
    xcWorkspacePath: '**/*.xcodeproj/project.xcworkspace'
    xcodeVersion: 'default' # Options: 10, 11, 12, 13, 14, default, specifyPath
```

## Save and run the pipeline

When you finish reviewing the code in *azure-pipelines.yml*, select **Save and run**.

   :::image type="content" source="media/save-and-run-button-new-yaml-pipeline.png" alt-text="Screenshot of the Save and run button in a new YAML pipeline.":::

Optionally, edit the **Commit message** and provide a description, then select **Save and run** again to commit the *azure-pipelines.yml* file to your repository and start a build.

The build run page shows build details and progress. If you want to watch your pipeline in action, select **Job** on the lower part of the page.

You now have a working YAML pipeline, *azure-pipelines.yml*, in your repository that's ready to customize.

## Customize your pipeline

To make changes to your pipeline, select **Edit** on the pipeline page. The following sections describe some common ways to customize your Xcode pipeline.

### Add signing and provisioning tasks

An Xcode app must be signed and provisioned to be able to run on a device or publish to the App Store. The signing and provisioning process must access your P12 signing certificate and one or more provisioning profiles. For more information, see [Sign your mobile app](../apps/mobile/app-signing.md).

To make the certificate and profile available to Xcode during a build, add the [Install Apple Certificate](/azure/devops/pipelines/tasks/reference/install-apple-certificate-v2) and [Install Apple Provisioning Profile](/azure/devops/pipelines/tasks/reference/install-apple-provisioning-profile-v1) tasks to your pipeline.

### Use a Carthage environment variable

If your project uses Carthage with a private Carthage repository, you can set up authentication by using an environment variable named `GITHUB_ACCESS_TOKEN` with a value of a token that has access to the repository. Carthage automatically detects and uses this environment variable.

Don't add the secret token directly to your pipeline YAML. Instead, select **Variables** on the pipeline page to open the **Variables** pane and create a variable for this token. Be sure to enable the lock icon to encrypt the value of the variable. For more information, see [Set secret variables](../process/variables.md#secret-variables).

The following pipeline code uses a secret variable named `myGitHubAccessToken` for the value of the `GITHUB_ACCESS_TOKEN` environment variable.

```yaml
- script: carthage update --platform iOS
  env:
    GITHUB_ACCESS_TOKEN: $(myGitHubAccessToken)
```

### Test on Azure-hosted devices

To test your app in a hosted lab of iOS devices in the Visual Studio App Center, add the [App Center Test](/azure/devops/pipelines/tasks/reference/app-center-test-v1) task to your pipeline.

This task requires an [App Center](https://appcenter.ms) free trial account, which must be converted to paid after 30 days to continue to use the test lab. [Sign up for an App Center account](https://appcenter.ms/signup?utm_source=DevOps&utm_medium=Azure&utm_campaign=docs) before you use this task.

The following example runs an App Center test suite. The task uses a [service connection](../library/service-endpoints.md#visual-studio-app-center-service-connection) that you must set up.

For the complete task syntax and reference, see [App Center Test task](/azure/devops/pipelines/tasks/reference/app-center-test-v1). For more information, see [Using Azure DevOps for UI Testing](/appcenter/test-cloud/vsts-plugin).

```yml
- task: AppCenterTest@1
  inputs:
    appFile: path/myapp.ipa
    artifactsDirectory: '$(Build.ArtifactStagingDirectory)/AppCenterTest'
    frameworkOption: 'appium'
    appiumBuildDirectory: test/upload
    serverEndpoint: 'My App Center service connection'
    appSlug: username/appIdentifier
    devices: 'devicelist'
```

### Keep artifacts with the build record

To store your iOS AppStore Package (IPA) file with the build record or test and deploy it in subsequent pipelines, add the [Copy Files](/azure/devops/pipelines/tasks/reference/copy-files-v2) and [Publish Build Artifacts](/azure/devops/pipelines/tasks/reference/publish-build-artifacts-v1) tasks to your pipeline. For more information, see [Publish and download pipeline artifacts](../artifacts/pipeline-artifacts.md).

```yaml
- task: CopyFiles@2
  inputs:
    contents: '**/*.ipa'
    targetFolder: '$(build.artifactStagingDirectory)'
- task: PublishBuildArtifacts@1
  inputs:
    PathtoPublish: '$(Build.ArtifactStagingDirectory)'
    ArtifactName: 'drop'
    publishLocation: 'Container'
```

### Deploy to App Center

To distribute an app to a group of testers or beta users, or promote the app to Intune or the Apple App Store, add the [App Center Distribute](/azure/devops/pipelines/tasks/reference/app-center-distribute-v3) task. The task requires a free [App Center](https://appcenter.ms) account that remains free of charge.

The following example distributes an app to users. For the complete task syntax and reference, see [App Center Distribute](/azure/devops/pipelines/tasks/reference/app-center-distribute-v3). For more information, see [Deploy Azure DevOps Builds with App Center](/appcenter/distribution/vsts-deploy).

```yml
- task: AppCenterDistribute@3
  inputs:
    serverEndpoint: 'AppCenter'
    appSlug: '$(APP_CENTER_SLUG)'
    appFile: '$(APP_FILE)' # Relative path from the repo root to the IPA file you want to publish
    symbolsOption: 'Apple'
    releaseNotesOption: 'input'
    releaseNotesInput: 'Here are the release notes for this version.'
    destinationType: 'groups'
```

### Install the Apple App Store extension and deploy to Apple App Store

To automate interaction with the Apple App Store, install the [Apple App Store extension](https://marketplace.visualstudio.com/items?itemName=ms-vsclient.app-store), and then use the following tasks in your pipeline. By default, these tasks authenticate to Apple by using a [service connection](..//library/service-endpoints.md) that you must configure.

To automate the release of updates to existing iOS TestFlight beta apps or production apps in the App Store, add the [App Store Release](https://marketplace.visualstudio.com/items?itemName=ms-vsclient.app-store#:~:text=the%20App%20Store.-,App%20Store%20Release) task.

There are limitations of using this task with [Apple two-factor authentication](https://marketplace.visualstudio.com/items?itemName=ms-vsclient.app-store#:~:text=or%20release%20pipeline.-,Two%2DFactor%20Authentication). Apple authentication is region-specific, and fastlane session tokens expire quickly and must be recreated and reconfigured.

```yaml
- task: AppStoreRelease@1
  displayName: 'Publish to the App Store TestFlight track'
  inputs:
    serviceEndpoint: 'My Apple App Store service connection' 
    appIdentifier: com.yourorganization.testapplication.etc
    ipaPath: '$(build.artifactstagingdirectory)/**/*.ipa'
    shouldSkipWaitingForProcessing: true
    shouldSkipSubmission: true
```

To automate the promotion of a previously submitted app from iTunes Connect to the App Store, add the [App Store Promote](https://marketplace.visualstudio.com/items?itemName=ms-vsclient.app-store#:~:text=true%0A%20%20%20%20appSpecificId%3A%20%271234567890%27-,App%20Store%20Promote) task.

```yaml
- task: AppStorePromote@1
  displayName: 'Submit to the App Store for review'
  inputs:
    serviceEndpoint: 'My Apple App Store service connection'
    appIdentifier: com.yourorganization.testapplication.etc
    shouldAutoRelease: false
```

## Related extensions

- [Apple App Store](https://marketplace.visualstudio.com/items?itemName=ms-vsclient.app-store) from Microsoft
- [Codified Security](https://marketplace.visualstudio.com/items?itemName=codifiedsecurity.CodifiedSecurity) from Codified Security
- [MacinCloud](https://marketplace.visualstudio.com/items?itemName=moboware.macincloud) from Moboware Inc.
- [Mobile App Tasks for iOS and Android](https://marketplace.visualstudio.com/items?itemName=vs-publisher-473885.motz-mobile-buildtasks) from James Montemagno
- [Mobile Testing Lab](https://marketplace.visualstudio.com/items?itemName=Perfecto.PerfectoCQ) from Perfecto Mobile
- [Raygun](https://marketplace.visualstudio.com/items?itemName=Raygun.vsts-extension) from Raygun
- [React Native](https://marketplace.visualstudio.com/items?itemName=ms-vsclient.react-native-extension) from Microsoft
- [Version Setter](https://marketplace.visualstudio.com/items?itemName=tomgilder.version-setter) from Tom Gilder
