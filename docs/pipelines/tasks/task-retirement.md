---
title: Azure Pipelines task retirement announcement
description: Learn which Azure Pipelines tasks retire on October 15, 2026, when they're removed, and which supported replacements to use.
ms.topic: reference
ms.date: 09/29/2026
monikerRange: 'azure-devops'
---

# Azure Pipelines task retirement announcement

Azure Pipelines includes built-in tasks that help you build, test, package, and deploy applications. As technologies and services evolve, older task versions are replaced by newer, more secure, and better-supported alternatives.

On **October 15, 2026**, the Azure Pipelines tasks listed in this article are retired. These tasks are already deprecated, have low usage, or are legacy built-in tasks that are no longer maintained in the main Azure Pipelines Tasks repository.

> [!IMPORTANT]
> This schedule applies to Azure DevOps Services. Any retirement or removal schedule for Azure DevOps Server will be communicated separately.

## Important dates

| Milestone | Date | What it means |
|---|---|---|
| Task retirement | **October 15, 2026** | The task is no longer supported and doesn't receive updates, including security updates. Pipelines can continue to run temporarily, but a retirement error is shown. The error doesn't fail the task or pipeline. |
| Task removal | **March 15, 2027** | The task is removed from Azure Pipelines. Pipelines that still reference the task fail with a blocking error. |

Retirement isn't the same as removal. The period between the two dates gives pipeline owners time to move to a supported replacement.

## What happens when a task is retired?

Before the retirement date, pipelines that use an affected task show a warning that recommends a replacement.

Beginning **October 15, 2026**:

- The task is no longer supported.
- The task doesn't receive feature, reliability, or security updates.
- Pipelines that use the task show a retirement error that doesn't fail the task or pipeline.
- The task can continue to run until its removal date, but you should migrate as soon as possible.

Beginning **March 15, 2027**:

- The task is removed from Azure Pipelines.
- Azure Pipelines can no longer resolve the task.
- Jobs and pipelines that reference the removed task fail with a blocking error.

## Tasks being retired

Update your pipeline definitions to use the recommended replacements before **March 15, 2027**. We recommend migrating before the retirement date so you remain on a supported task.

The recommended task version is the latest supported major version available as of **September 25, 2026**. The deprecation date is the date on which the public repository change added `"deprecated": true` to the task's `task.json`. Where the original change isn't available but the task metadata states an explicit deprecation date, that date is used.

Xamarin support ended on **May 1, 2024**, so all remaining Xamarin-specific tasks are included. Migrate to .NET for Android, .NET for iOS, or .NET MAUI. App Center distribution and testing are also retired, so the App Center tasks point to currently supported store distribution and device-testing services instead of another App Center task version.

### Tasks in the public Azure Pipelines Tasks repository

| Retiring task | Deprecation date | Recommended replacement |
|---|---|---|
| `AndroidSigning@2` | August 2, 2024 | `AndroidSigning@3` |
| `AppCenterDistribute@1` | November 14, 2022 | Use the App Store/TestFlight or Google Play Azure Pipelines extensions. App Center distribution is retired. |
| `AppCenterDistribute@2` | November 14, 2022 | Use the App Store/TestFlight or Google Play Azure Pipelines extensions. App Center distribution is retired. |
| `AutomatedAnalysis@0` | August 6, 2024 | Replace the task with a supported analysis or monitoring workflow appropriate for your application. |
| `AzureCloudPowerShellDeployment@1` | August 5, 2024 | `AzurePowerShell@5` |
| `AzureCloudPowerShellDeployment@2` | August 5, 2024 | `AzurePowerShell@5` |
| `AzureMonitor@0` | July 8, 2020 | `AzureMonitor@1` |
| `AzureNLBManagement@1` | August 5, 2024 | `AzurePowerShell@5` or `AzureCLI@3` |
| `CacheBeta@0` | August 6, 2024 | `Cache@2` |
| `Chef@1` | August 5, 2024 | A supported Chef extension or a script that uses the current Chef CLI |
| `ChefKnife@1` | August 5, 2024 | A supported Chef extension or a script that uses the current Chef CLI |
| `CondaEnvironment@1` | August 5, 2024 | Use a script step to create and manage the Conda environment. |
| `DotNetCoreInstaller@0` | August 5, 2024 | `UseDotNet@2` |
| `DotNetCoreInstaller@1` | August 5, 2024 | `UseDotNet@2` |
| `DownloadPackage@0` | August 5, 2024 | `DownloadPackage@1` |
| `DownloadPipelineArtifact@0` | August 2, 2024 | `DownloadPipelineArtifact@2` |
| `DuffleInstaller@0` | August 6, 2024 | A script step that installs the required supported CNAB tooling |
| `FtpUpload@1` | August 5, 2024 | `FtpUpload@2` |
| `GitHubRelease@0` | August 2, 2024 | `GitHubRelease@1` |
| `Maven@2` | August 2, 2024 | `Maven@4` |
| `MysqlDeploymentOnMachineGroup@1` | August 5, 2024 | A script-based MySQL deployment or migration using supported MySQL tooling |
| `NuGet@0` | August 5, 2024 | `NuGetCommand@2` |
| `NuGetInstaller@0` | August 5, 2024 | `NuGetToolInstaller@1` and `NuGetCommand@2` |
| `NuGetPackager@0` | August 5, 2024 | `NuGetCommand@2` with the pack command |
| `NuGetPublisher@0` | August 5, 2024 | `NuGetCommand@2` with the push command |
| `NuGetRestore@1` | August 5, 2024 | `NuGetCommand@2` with the restore command |
| `PackerBuild@0` | August 6, 2024 | `PackerBuild@1` |
| `PowerShellOnTargetMachines@1` | August 6, 2024 | `PowerShellOnTargetMachines@3` |
| `PyPIPublisher@0` | January 7, 2026 | `TwineAuthenticate@1`, followed by `twine upload` in a script step |
| `QuickPerfTest@1` | June 4, 2019 | `AzureLoadTest@1` |
| `ServiceFabricComposeDeploy@0` | August 6, 2024 | `ServiceFabricDeploy@1` or a currently supported container deployment workflow |
| `XamarinAndroid@1` | August 2, 2024 | Migrate to an SDK-style .NET for Android or .NET MAUI project and build with `DotNetCoreCLI@2`. |
| `XamariniOS@2` | August 2, 2024 | Migrate to an SDK-style .NET for iOS or .NET MAUI project and build with `DotNetCoreCLI@2`. |
| `XamarinTestCloud@1` | January 11, 2018 | BrowserStack App Automate or another supported device-testing service |

### Legacy built-in tasks

These tasks are distributed as legacy packages outside the public Azure Pipelines Tasks repository. Their original `task.json` deprecation changes and dates aren't available in the public Git history.

| Retiring task | Recommended replacement |
|---|---|
| `AndroidBuild@1` | `Gradle@4` |
| `AndroidSigning@1` | `AndroidSigning@3` |
| `AppCenterDistribute@0` | Use the App Store/TestFlight or Google Play Azure Pipelines extensions. App Center distribution is retired. |
| `ArchiveFiles@1` | `ArchiveFiles@2` |
| `AzureCLI@0` | `AzureCLI@3` |
| `AzureFunction@0` | `AzureFunction@2` |
| `AzurePowerShell@1` | `AzurePowerShell@5` |
| `AzureResourceGroupDeployment@1` | `AzureResourceGroupDeployment@2` |
| `AzureRmWebAppDeployment@2` | `AzureRmWebAppDeployment@5` |
| `AzureWebPowerShellDeployment@1` | `AzureRmWebAppDeployment@5` |
| `CmdLine@1` | `CmdLine@2` |
| `CopyFiles@1` | `CopyFiles@2` |
| `CopyPublishBuildArtifacts@1` | `CopyFiles@2` and `PublishBuildArtifacts@1` |
| `cURLUploader@1` | `cURLUploader@2` |
| `DeployVisualStudioTestAgent@1` | `VSTest@3` |
| `DotNetCoreCLI@0` | `DotNetCoreCLI@2` |
| `DotNetCoreCLI@1` | `DotNetCoreCLI@2` |
| `Gradle@1` | `Gradle@4` |
| `InstallAppleCertificate@0` | `InstallAppleCertificate@2` |
| `InstallAppleCertificate@1` | `InstallAppleCertificate@2` |
| `InstallAppleProvisioningProfile@0` | `InstallAppleProvisioningProfile@1` |
| `InvokeRESTAPI@0` | `InvokeRESTAPI@1` |
| `JenkinsQueueJob@1` | `JenkinsQueueJob@2` |
| `Maven@1` | `Maven@4` |
| `PowerShell@1` | `PowerShell@2` |
| `PublishSymbols@1` | `PublishSymbols@2` |
| `PublishToAzureServiceBus@0` | `PublishToAzureServiceBus@2` |
| `RunVisualStudioTestsusingTestAgent@1` | `VSTest@3` |
| `ServiceFabricUpdateAppVersions@1` | `ServiceFabricUpdateManifests@2` |
| `SonarQubePostTest@1` | The supported SonarQube extension from Visual Studio Marketplace |
| `SonarQubePreBuild@1` | The supported SonarQube extension from Visual Studio Marketplace |
| `VSMobileCenterTest@0` | BrowserStack App Automate or another supported device-testing service |
| `XamarinComponentRestore@0` | Migrate to an SDK-style .NET or .NET MAUI project and restore with `DotNetCoreCLI@2`. |
| `XamariniOS@1` | Migrate to an SDK-style .NET for iOS or .NET MAUI project and build with `DotNetCoreCLI@2`. |
| `XamarinLicense@1` | No replacement task is required. Migrate the application from Xamarin to .NET or .NET MAUI. |
| `Xcode@2` | `Xcode@5` |
| `Xcode@3` | `Xcode@5` |
| `Xcode@4` | `Xcode@5` |
| `XcodePackageiOS@0` | `Xcode@5` |

## What do I need to do?

Search your YAML and classic pipelines for the task names listed in this article and update them to the recommended alternatives.

When moving to a newer major version, review the task inputs because major versions can include breaking changes. Test the updated pipeline before using it in production.

We also plan to provide a script that organization or project administrators can use to identify pipelines that reference deprecated or retired tasks.

## Frequently asked questions

### What is the difference between deprecation, retirement, and removal?

- **Deprecated:** The task is still supported and continues to work, but it isn't recommended for new pipelines. A warning encourages migration.
- **Retired:** The task is unsupported and receives no updates, including security updates. Until removal, it can continue to run with a retirement error that doesn't fail the task or pipeline.
- **Removed:** The task is no longer available. Pipelines that reference it fail.

### Will my pipeline fail on October 15, 2026?

Not solely because a task reached its retirement date. The retired task shows an error that doesn't fail the task or pipeline, and the task can continue to run temporarily. However, the task is unsupported, so you should migrate immediately.

### When will pipelines start failing?

Beginning **March 15, 2027**, pipelines that still reference a removed task fail with a blocking error.

### Will retired tasks receive security updates?

No. Beginning on the retirement date, retired tasks don't receive any updates, including security updates.

### Can I continue using a retired task until the removal date?

The task might continue to run during the transition period, but this use is unsupported and carries security and reliability risks. Move to the recommended replacement as soon as possible.

### What if the replacement uses different inputs?

Major task versions can introduce breaking changes. Review the replacement task documentation, update the inputs in your YAML or classic pipeline, and test the pipeline before production use.

### What if no direct replacement is listed?

Use the supported command-line tooling, Marketplace extension, or Azure service identified in the table. Validate the new workflow in a nonproduction pipeline before removing the old task.

### Does this announcement include tasks that are only being deprecated?

No. This article lists tasks scheduled for retirement on **October 15, 2026**. Tasks that are only candidates for deprecation aren't included.

### Does this schedule apply to Azure DevOps Server?

No. This schedule applies to Azure DevOps Services. Any retirement or removal schedule for Azure DevOps Server will be communicated separately.

## See also

- [Azure Pipelines deprecated tasks retirement schedule](https://devblogs.microsoft.com/devops/azure-pipelines-deprecated-tasks-retirement-schedule/)
- [Azure Pipelines Tasks deprecation history](https://github.com/microsoft/azure-pipelines-tasks/blob/master/DEPRECATION.md)
- [Azure Pipelines task reference](/azure/devops/pipelines/tasks/reference/)
- [Upgrade from Xamarin to .NET and .NET MAUI](/dotnet/maui/migration/)
- [Visual Studio App Center retirement](/appcenter/retirement)
