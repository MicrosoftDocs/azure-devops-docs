---
title: Build, test, and deploy Xcode apps
description: Automatically build Xcode projects with Azure Pipelines, Azure DevOps, & Team Foundation Server
ms.topic: quickstart
ms.assetid: e9dd0efb-8932-4a77-93be-28e209d486ca
ms.author: vijayma
author: vijayma
ms.date: 10/27/2021
monikerRange: '<= azure-devops'
---

# Build, test, and deploy Xcode apps

[!INCLUDE [version-lt-eq-azure-devops](../../includes/version-lt-eq-azure-devops.md)]

Learn how to build and deploy Xcode projects with Azure Pipelines. 

## Prerequisites

* An Xcode 9+ project in a GitHub repository. If you do not have a project, see [Creating an Xcode Project for an App](https://developer.apple.com/documentation/xcode/creating-an-xcode-project-for-an-app)

## Create the pipeline

[!INCLUDE [include](includes/create-pipeline-before-template-selected.md)]

> When the **Configure** tab appears, select **Xcode**. 

7. When your new pipeline appears, take a look at the YAML to see what it does. When you're ready, select **Save and run**.

   > [!div class="mx-imgBorder"] 
   > ![Save and run button in a new YAML pipeline](media/save-and-run-button-new-yaml-pipeline.png)

8. You're prompted to commit a new _azure-pipelines.yml_ file to your repository. After you're happy with the message, select **Save and run** again.

   If you want to watch your pipeline in action, select the build job.

   > You just created and ran a pipeline that we automatically created for you, because your code appeared to be a good match for the [Xcode](https://github.com/microsoft/azure-pipelines-yaml/blob/master/templates/xcode.yml) template.

   You now have a working YAML pipeline (`azure-pipelines.yml`) in your repository that's ready for you to customize!

9. When you're ready to make changes to your pipeline, select it in the **Pipelines** page, and then **Edit** the `azure-pipelines.yml` file.

See the sections below to learn some of the more common ways to customize your pipeline.


> [!Tip]
> To make changes to the YAML file as described in this topic, select the pipeline in **Pipelines** page, and then select **Edit** to open an editor for the `azure-pipelines.yml` file.


## Build environment

You can use Azure Pipelines to build your apps with Xcode without needing to set up any infrastructure of your own. Xcode is preinstalled on [Microsoft-hosted macOS agents](../agents/hosted.md) in Azure Pipelines. You can use the macOS agents to run your builds.

For the exact versions of Xcode that are preinstalled, refer to [Microsoft-hosted agents](../agents/hosted.md#software).

Create a file named **azure-pipelines.yml** in the root of your repository. Then, add the following snippet to your `azure-pipelines.yml` file to select the appropriate agent pool:

```yaml
# https://learn.microsoft.com/azure/devops/pipelines/ecosystems/xcode
pool:
  vmImage: 'macOS-latest'
```

## Build an app with Xcode

To build an app with Xcode, add the following snippet to your `azure-pipelines.yml` file. This is a minimal snippet for building an iOS project using its default scheme, for the Simulator, and without packaging. Change values to match your project configuration. See the [Xcode](/azure/devops/pipelines/tasks/reference/xcode-v5) task for more about these options.

```yaml
pool:
  vmImage: 'macos-latest'

steps:
- task: Xcode@5
  inputs:
    actions: 'build'
    scheme: ''
    sdk: 'iphoneos'
    configuration: 'Release'
    xcWorkspacePath: '**/*.xcodeproj/project.xcworkspace'
    xcodeVersion: 'default' # Options: 8, 9, 10, 11, 12, default, specifyPath
```

### Signing and provisioning

An Xcode app must be signed and provisioned to run on a device or be published to the App Store. The signing and provisioning process needs access to your P12 signing certificate and one or more provisioning profiles. The [Install Apple Certificate](/azure/devops/pipelines/tasks/reference/install-apple-certificate-v2) and [Install Apple Provisioning Profile](/azure/devops/pipelines/tasks/reference/install-apple-provisioning-profile-v1) tasks make these available to Xcode during a build. 

See [Sign your mobile app](../apps/mobile/app-signing.md) to learn more. 

### Carthage

If your project uses Carthage with a private Carthage repository,
you can set up authentication by setting an environment variable named
`GITHUB_ACCESS_TOKEN` with a value of a token that has access to the repository.
Carthage will automatically detect and use this environment variable.

Do not add the secret token directly to your pipeline YAML.
Instead, create a new pipeline variable with its lock enabled on the Variables pane to encrypt this value.
See [secret variables](../process/variables.md#secret-variables).

Here is an example that uses a secret variable named `myGitHubAccessToken` for the value of the `GITHUB_ACCESS_TOKEN` environment variable.

```yaml
- script: carthage update --platform iOS
  env:
    GITHUB_ACCESS_TOKEN: $(myGitHubAccessToken)
```

### Testing on Azure-hosted devices

Add the [App Center Test](/azure/devops/pipelines/tasks/reference/app-center-test-v1) task to test the app in a hosted lab of iOS and Android devices. An [App Center](https://appcenter.ms) free trial is required which must later be converted to paid. 

[Sign up with App Center](https://appcenter.ms/signup?utm_source=DevOps&utm_medium=Azure&utm_campaign=docs) first.

[!INCLUDE [temp](../tasks/includes/yaml/AppCenterTestV1.md)]

### Retain artifacts with the build record

Add the [Copy Files](/azure/devops/pipelines/tasks/reference/copy-files-v2) and [Publish Build Artifacts](/azure/devops/pipelines/tasks/reference/publish-build-artifacts-v1) tasks
to store your IPA with the build record or test and deploy it in subsequent pipelines. See [Artifacts](../artifacts/pipeline-artifacts.md).

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

## Deploy

### App Center

Add the [App Center Distribute](/azure/devops/pipelines/tasks/reference/app-center-distribute-v3) task to distribute an app to a group of testers or beta users,
or promote the app to Intune or the Apple App Store. A free [App Center](https://appcenter.ms) account is required (no payment is necessary).

[!INCLUDE [temp](../tasks/includes/yaml/AppCenterDistributeV1.md)]

### Apple App Store

Install the [Apple App Store extension](https://marketplace.visualstudio.com/items?itemName=ms-vsclient.app-store)
and use the following tasks to automate interaction with the App Store. By default, these tasks authenticate to Apple
using a [service connection](..//library/service-endpoints.md) that you configure.

#### Release

Add the [App Store Release](https://marketplace.visualstudio.com/items?itemName=ms-vsclient.app-store#user-content-app-store-release)
task to automate the release of updates to existing iOS TestFlight beta apps or production apps in the App Store.

See [limitations](https://marketplace.visualstudio.com/items?itemName=ms-vsclient.app-store)
of using this task with Apple two-factor authentication,
since Apple authentication is region-specific and
fastlane session tokens expire quickly and must be recreated and reconfigured.

```yaml
- task: AppStoreRelease@1
  displayName: 'Publish to the App Store TestFlight track'
  inputs:
    serviceEndpoint: 'My Apple App Store service connection' # This service connection must be added by you
    appIdentifier: com.yourorganization.testapplication.etc
    ipaPath: '$(build.artifactstagingdirectory)/**/*.ipa'
    shouldSkipWaitingForProcessing: true
    shouldSkipSubmission: true
```

#### Promote

Add the [App Store Promote](https://marketplace.visualstudio.com/items?itemName=ms-vsclient.app-store#user-content-app-store-promote)
task to automate the promotion of a previously submitted app from iTunes Connect to the App Store.

```yaml
- task: AppStorePromote@1
  displayName: 'Submit to the App Store for review'
  inputs:
    serviceEndpoint: 'My Apple App Store service connection' # This service connection must be added by you
    appIdentifier: com.yourorganization.testapplication.etc
    shouldAutoRelease: false
```

## Related extensions

- [Apple App Store](https://marketplace.visualstudio.com/items?itemName=ms-vsclient.app-store) (Microsoft)
- [Codified Security](https://marketplace.visualstudio.com/items?itemName=codifiedsecurity.CodifiedSecurity) (Codified Security)  
- [MacinCloud](https://marketplace.visualstudio.com/items?itemName=moboware.macincloud) (Moboware Inc.)
- [Mobile App Tasks for iOS and Android](https://marketplace.visualstudio.com/items?itemName=vs-publisher-473885.motz-mobile-buildtasks) (James Montemagno)  
- [Mobile Testing Lab](https://marketplace.visualstudio.com/items?itemName=Perfecto.PerfectoCQ) (Perfecto Mobile)
- [Raygun](https://marketplace.visualstudio.com/items?itemName=Raygun.vsts-extension) (Raygun)
- [React Native](https://marketplace.visualstudio.com/items?itemName=ms-vsclient.react-native-extension) (Microsoft)  
- [Version Setter](https://marketplace.visualstudio.com/items?itemName=tomgilder.version-setter) (Tom Gilder)
