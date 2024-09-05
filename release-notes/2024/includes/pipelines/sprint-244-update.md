---
author: ckanyika
ms.author: ckanyika
ms.date: 9/4/2024
ms.topic: include
---

### Announcing deprecation of Pipeline Tasks

Azure Pipelines has around 200 tasks [included in the product](https://learn.microsoft.com/azure/devops/pipelines/tasks/reference/?view=azure-pipelines). Many of those are versions of the same task e.g. AzurePowerShell@2 and AzurePowerShell@5. Our AzureFileCopy task even has 6 versions. Whenever we change the behavior of a task or the task is wrapping a new major version of a tool, we introduce a new task version. Recent examples are the [PublishToAzureServiceBus@2](https://learn.microsoft.com/azure/devops/release-notes/2024/pipelines/sprint-240-update#publishtoazureservicebus2-task), [AzureFileCopy@6](https://learn.microsoft.com/azure/devops/release-notes/2024/pipelines/sprint-236-update#new-azurefilecopy6-task-supports-secret-less-configurations) and [PublishCodeCoverageResults@1](https://devblogs.microsoft.com/devops/new-pccr-task) tasks.

To inform users they are using an older version of a task and may not be taking advantage of the latest functionality, we are deprecating some of the older tasks. Deprecated tasks will emit a warning and guidance on alternatives, their behavior is unchanged.
Deprecated tasks will ultimately get removed. However, we have no planned date for retirement for the tasks in the below list. Retirement of tasks will be communicated separately at a later time.

Here is the list of tasks deprecated and guidance on alternatives:

| Task                             | Guidance           |
|----------------------------------|--------------------|
| AndroidSigning@2                 | Use the AndroidSigning@3 task |
| AzureCloudPowerShellDeployment@1 | Azure Cloud Services is being [retired](https://aka.ms/cloudservicesretirement), this task will stop working once the service is retired |
| AzureCloudPowerShellDeployment@2 | Azure Cloud Services is being [retired](https://aka.ms/cloudservicesretirement), this task will stop working once the service is retired |
| AzureFileCopy@1                  | This task is deprecated as this version of the AzureFileCopy task uses a retired version of AzCopy. Use AzCopy V10 with AzureFileCopy@4 or newer, see [migration guidance](https://github.com/Azure/azure-storage-azcopy/blob/main/MigrationGuideV8toV10.md) |
| AzureFileCopy@2                  | This task is deprecated as this version of the AzureFileCopy task uses a retired version of AzCopy. Use AzCopy V10 with AzureFileCopy@4 or newer, see [migration guidance](https://github.com/Azure/azure-storage-azcopy/blob/main/MigrationGuideV8toV10.md) |                                                  |
| AzureFileCopy@3                  | This task is deprecated as this version of the AzureFileCopy task uses a retired version of AzCopy. Use AzCopy V10 with AzureFileCopy@4 or newer, see [migration guidance](https://github.com/Azure/azure-storage-azcopy/blob/main/MigrationGuideV8toV10.md) |                                                 |
| AzureFunctionOnKubernetes@0      | Use the AzureFunctionOnKubernetes@1 task to take advantage of latest features e.g. [Workload identity federation](https://aka.ms/azdo-rm-workload-identity-tasks)
| AzureKeyVault@1                  | Use the AzureKeyVault@2 task |
| AzureNLBManagement@1             | Use the AzureCLI@2 task and the `az network lb` Azure CLI command |
| AzurePowerShell@2                | Use the AzurePowerShell@5 task |
| AzurePowerShell@3                | Use the AzurePowerShell@5 task |
| AzureRmWebAppDeployment@3        | Use the AzureRmWebAppDeployment@4 task to take advantage of latest features e.g. [Workload identity federation](https://aka.ms/azdo-rm-workload-identity-tasks) |
| CacheBeta@0                      | Use the CacheBeta@1 or Cache@2 task |
| Docker@0                         | Use the Docker@2 task | 
| DotNetCoreInstaller@0            | Use the UseDotNet@2 task |
| DownloadPipelineArtifact@0       | Use the DownloadPipelineArtifact@1 or DownloadPipelineArtifact@2 task |
| DuffleInstaller@0                | This task is deprecated as the [Duffle project](https://github.com/cnabio/duffle) has been archived and is no longer maintained |
| FileTransform@1                  | Use the FileTransform@2 task |
| FtpUpload@1                      | Use the FtpUpload@2 task |
| GitHubRelease@0                  | Use the GitHubRelease@1 task |
| Gradle@2                         | Use the Gradle@3 task |
| HelmInstaller@0                  | Use the HelmInstaller@1 task |
| IISWebAppDeployment@1            | Use the [IIS Web App Deployment extension](https://marketplace.visualstudio.com/items?itemName=ms-vscs-rm.iiswebapp) |
| Kubernetes@0                     | Use the Kubernetes@1 task to take advantage of latest features e.g. [Workload identity federation](https://aka.ms/azdo-rm-workload-identity-tasks) |
| KubernetesManifest@0             | Use the KubernetesManifest@1 task to take advantage of latest features e.g. [Workload identity federation](https://aka.ms/azdo-rm-workload-identity-tasks) |
| Maven@2                          | Use the Maven@4 task |
| Maven@3                          | Use the Maven@4 task |
| MysqlDeploymentOnMachineGroup@1  | Consider Azure Database for MySQL and the AzureMysqlDeployment@1 task |
| PackerBuild@0                    | Use the PackerBuild@0 task to take advantage of latest features e.g. [Workload identity federation](shttps://aka.ms/azdo-rm-workload-identity-tasks) |
| PowerShellOnTargetMachines@1     | Use the PowerShellOnTargetMachines@3 task |
| PowerShellOnTargetMachines@2     | Use the PowerShellOnTargetMachines@3 task |
| PublishCodeCoverageResults@1     | Use the PublishCodeCoverageResults@1 task, see [blog post](https://devblogs.microsoft.com/devops/new-pccr-task)             |
| ServiceFabricComposeDeploy@0     | The ServiceFabricComposeDeploy@0 task is deprecated |
| SqlServerDacpacDeployment@1      | Use the [IIS Web App Deployment extension](https://marketplace.visualstudio.com/items?itemName=ms-vscs-rm.iiswebapp) which includes an updated version of this task |
| VSTest@1                         | Use the VSTest@2 task |
| XamarinAndroid@1                 | [Xamarin support ended on May 1, 2024](https://dotnet.microsoft.com/en-us/platform/support/policy/xamarin) |
| XamarinTestCloud@1               | [Xamarin support ended on May 1, 2024](https://dotnet.microsoft.com/en-us/platform/support/policy/xamarin) |
| XamariniOS@2                     | [Xamarin support ended on May 1, 2024](https://dotnet.microsoft.com/en-us/platform/support/policy/xamarin) |

### The Pipelines agent will show warnings for agents running Operating Systems not supported by .NET 8

We will upgrade the Pipelines agent to be built with .NET 8 instead of .NET 6. To prepare customers who may be using older Operating Systems, we are showing pipeline warnings for agents running on an Operating System that is not compatible with .NET 8. 