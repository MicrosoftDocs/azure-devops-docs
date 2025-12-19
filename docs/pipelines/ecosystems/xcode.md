---
title: Build, test, and deploy Xcode apps
description: Automatically build Xcode projects with Azure Pipelines, Azure DevOps, & Team Foundation Server
ms.topic: how-to
ai-usage: ai-assisted
ms.assetid: e9dd0efb-8932-4a77-93be-28e209d486ca
ms.date: 12/04/2025
monikerRange: '<= azure-devops'
#customer intent: As a developer, I want to automate building, testing, and deploying Xcode projects so that I can release iOS apps reliably using Azure Pipelines.
---

# Build, test, and deploy Xcode apps

[!INCLUDE [version-lt-eq-azure-devops](../../includes/version-lt-eq-azure-devops.md)]

This article shows you how to build and deploy Xcode projects with YAML pipelines in Azure Pipelines.

## Prerequisites

- An Azure DevOps organization and project where you have permission to create pipelines and deploy apps.
- An Xcode 9+ project and app in a GitHub repository. For more information, see [Creating an Xcode Project for an App](https://developer.apple.com/documentation/xcode/creating-an-xcode-project-for-an-app).

## Create the pipeline

> [!IMPORTANT]
> During GitHub procedures, you might be prompted to create a [GitHub service connection](../library/service-endpoints.md#github-service-connection) or be redirected to GitHub to sign in, install Azure Pipelines, or authorize Azure Pipelines. Follow the onscreen instructions to complete the process. For more information, see [Access to GitHub repositories](../repos/github.md#access-to-github-repositories).

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

The [Xcode](/azure/devops/pipelines/tasks/reference/xcode-v5) task builds, tests, or archives an Xcode workspace on macOS, and it can optionally package an app. The Xcode step in the starter *azure-pipelines.yml* file builds the iOS project by using its default scheme, for the Simulator, and without packaging. You can change values and add parameters to match your project configuration.

**Development build:**

```yaml
steps:
- task: Xcode@5
  inputs:
    actions: 'build'
    scheme: ''
    sdk: 'iphonesimulator'
    configuration: 'Debug'
    xcWorkspacePath: '**/*.xcodeproj/project.xcworkspace'
    xcodeVersion: 'default' # Options: 10, 11, 12, 13, 14, default, specifyPath
```

**Production build for App Store:**

For production releases, specify an explicit Xcode version, your app's scheme, and the Release configuration:

```yaml
steps:
- task: Xcode@5
  inputs:
    actions: 'build'
    scheme: 'YourAppScheme'
    sdk: 'iphoneos'
    configuration: 'Release'
    xcWorkspacePath: '**/*.xcodeproj/project.xcworkspace'
    xcodeVersion: '14'
    packageApp: true
    exportPath: '$(build.artifactStagingDirectory)'
    exportOptions: 'automatic'
```

Key differences for production:
- **xcodeVersion**: Specify a fixed version (e.g., `'14'`) instead of `'default'` for consistent, reproducible builds.
- **scheme**: Replace the empty string with your app's actual scheme name.
- **sdk**: Use `'iphoneos'` for device builds; use `'iphonesimulator'` for simulator builds.
- **configuration**: Use `'Release'` for production; use `'Debug'` for development.
- **packageApp**: Set to `true` to generate an `.ipa` file for distribution.
- **exportPath**: Directs the package output to the build staging directory for artifact publishing.

## Save and run the pipeline

When you finish reviewing the code in *azure-pipelines.yml*, select **Save and run**.

   :::image type="content" source="media/save-and-run-button-new-yaml-pipeline.png" alt-text="Screenshot of the Save and run button in a new YAML pipeline.":::

Optionally, edit the **Commit message** and provide a description. Then select **Save and run** again to commit the *azure-pipelines.yml* file to your repository and start a build.

The build run page shows build details and progress. If you want to watch your pipeline in action, select **Job** on the lower part of the page.

You now have a working YAML pipeline, *azure-pipelines.yml*, in your repository that's ready to customize.

## Customize your pipeline

To make changes to your pipeline, select **Edit** on the pipeline page. The following sections describe some common ways to customize your Xcode pipeline based on your specific needs:

- **Signing and provisioning:** Required to deploy to physical devices or the App Store.
- **Dependency management:** Configure authentication for private repositories.
- **Artifact management:** Store build outputs for testing and deployment.
- **Distribution:** Automate release to TestFlight or the App Store.

### Add signing and provisioning tasks

To run your Xcode app on a physical device or publish it to the App Store, you need to sign and provision the app. This process involves using a P12 signing certificate (a security credential that verifies your app's identity) and provisioning profiles (which authorize your app for specific devices or distribution). For more information, see [Sign your mobile app](../apps/mobile/app-signing.md).

To make the certificate and profile available to Xcode during a build, add the [Install Apple Certificate](/azure/devops/pipelines/tasks/reference/install-apple-certificate-v2) and [Install Apple Provisioning Profile](/azure/devops/pipelines/tasks/reference/install-apple-provisioning-profile-v1) tasks to your pipeline.

### Manage dependencies

Your Xcode project might use dependency managers to handle third-party libraries and frameworks. The following sections describe how to configure authentication for private repositories with different dependency managers.

#### Swift Package Manager

Swift Package Manager (SPM) is Apple's native dependency manager and is integrated directly into Xcode. For projects that use SPM with private packages, you need to configure Git authentication.

If your private Swift packages are hosted on GitHub, set up authentication by using an environment variable named `GITHUB_ACCESS_TOKEN` with a value of a personal access token that has access to the repository.

Don't add the secret token directly to your pipeline YAML, as this action exposes it in your source code. For more information, see [Set secret variables](../process/variables.md#secret-variables).

The following pipeline code uses a secret variable named `myGitHubAccessToken` for authentication when resolving Swift Package dependencies:

```yaml
- task: Xcode@5
  inputs:
    actions: 'build'
    scheme: ''
    sdk: 'iphoneos'
    configuration: 'Release'
    xcWorkspacePath: '**/*.xcodeproj/project.xcworkspace'
  env:
    GITHUB_ACCESS_TOKEN: $(myGitHubAccessToken)
```

For private packages hosted on Azure Repos or other Git providers, configure the appropriate Git credentials before the build step.

#### CocoaPods

If your project uses CocoaPods, use the [CocoaPods](/azure/devops/pipelines/tasks/reference/cocoa-pods-v0) task to install dependencies. 

```yaml
- task: CocoaPods@0
  inputs:
    workingDirectory: '$(System.DefaultWorkingDirectory)'
    forceRepo: false
```

#### Carthage

If your project uses Carthage (a dependency manager for iOS/macOS projects) with a private Carthage repository, set up authentication by using an environment variable named `GITHUB_ACCESS_TOKEN` with a value of a token that has access to the repository. Carthage automatically detects and uses this environment variable.

Don't add the secret token directly to your pipeline YAML, as this action exposes it in your source code. For more information, see [Set secret variables](../process/variables.md#secret-variables).

The following pipeline code uses a secret variable named `myGitHubAccessToken` for the value of the `GITHUB_ACCESS_TOKEN` environment variable.

```yaml
- script: carthage update --platform iOS
  displayName: 'Update Carthage dependencies'
  env:
    GITHUB_ACCESS_TOKEN: $(myGitHubAccessToken)
```

### Test on Azure-hosted devices

Visual Studio App Center was retired on March 31, 2025. Learn about [recommended alternatives](/appcenter/retirement).

### Keep artifacts with the build record

To store your iOS AppStore Package (IPA) file with the build record or test and deploy it in subsequent pipelines, add the [Copy Files](/azure/devops/pipelines/tasks/reference/copy-files-v2) and [Publish Pipeline Artifacts](/azure/devops/pipelines/tasks/reference/publish-pipeline-artifact-v1) tasks to your pipeline. 

```yaml
- task: CopyFiles@2
  inputs:
    contents: '**/*.ipa'
    targetFolder: '$(build.artifactStagingDirectory)'
- task: PublishPipelineArtifact@1
  inputs:
    targetPath: '$(build.artifactStagingDirectory)'
    artifact: 'drop'
```

### Deploy to Apple App Store or TestFlight

To distribute an app to testers or beta users, use Apple's TestFlight or deploy directly to the App Store. See the section below for Apple App Store deployment.

For beta testing and user feedback, consider using:
- [Apple TestFlight](https://developer.apple.com/testflight/)
- Third-party beta testing platforms such as [Firebase App Distribution](https://firebase.google.com/products/app-distribution)

### Install the Apple App Store extension and deploy to Apple App Store

To automate interaction with the Apple App Store, install the [Apple App Store extension](https://marketplace.visualstudio.com/items?itemName=ms-vsclient.app-store), and then use the following tasks in your pipeline. By default, these tasks authenticate to Apple by using a [service connection](..//library/service-endpoints.md) that you must configure.

To automate the release of updates to existing iOS TestFlight beta apps or production apps in the App Store, add the [App Store Release](https://marketplace.visualstudio.com/items?itemName=ms-vsclient.app-store#:~:text=the%20App%20Store.-,App%20Store%20Release) task.

There are limitations when using this task with [Apple two-factor authentication](https://marketplace.visualstudio.com/items?itemName=ms-vsclient.app-store#:~:text=or%20release%20pipeline.-,Two%2DFactor%20Authentication). Apple authentication is region-specific, and fastlane session tokens (temporary credentials used to authenticate with Apple) expire quickly and must be recreated and reconfigured periodically.

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
