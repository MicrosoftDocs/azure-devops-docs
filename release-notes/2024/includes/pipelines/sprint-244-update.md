---
author: ckanyika
ms.author: ckanyika
ms.date: 9/4/2024
ms.topic: include
---

### Deprecate new batch of tasks

Update Pending

| Task                             | DeprecationMessage | DeprecationReason                                                        |
|----------------------------------|--------------------|--------------------------------------------------------------------------|
| AndroidSigning@2                 | The AndroidSigning@2 task is deprecated, please use the latest version of the AndroidSigning task |  low usage                                                               |
| AutomatedAnalysis@0              | The AutomatedAnalysis@0 task is deprecated |  zero usage                                                              |
| AzureCloudPowerShellDeployment@1 | The AzureCloudPowerShellDeployment task is deprecated as Azure Cloud Services is being retired, see https://aka.ms/cloudservicesretirement | Service targeted is deprecated                                           |
| AzureCloudPowerShellDeployment@2 | The AzureCloudPowerShellDeployment task is deprecated as Azure Cloud Services is being retired, see https://aka.ms/cloudservicesretirement |  low usage                                                               |
| AzureContainerApps@0             | The AzureContainerApps@0 task is deprecated, please use the latest version of the AzureContainerApps task | Not the latest task version                                              |
| AzureFileCopy@1                  | This task is deprecated as this version of the AzureFileCopy task uses a retired version of AzCopy. Use the latest version of the AzureFileCopy task. See https://github.com/Azure/azure-storage-azcopy/blob/main/MigrationGuideV8toV10.md | AzCopy V7 is deprecated                                                  |
| AzureFileCopy@2                  | This task is deprecated as this version of the AzureFileCopy task uses a retired version of AzCopy. Use the latest version of the AzureFileCopy task. See https://github.com/Azure/azure-storage-azcopy/blob/main/MigrationGuideV8toV10.md | AzCopy V7 is deprecated                                                  |
| AzureFileCopy@3                  | This task is deprecated as this version of the AzureFileCopy task uses a retired version of AzCopy. Use the latest version of the AzureFileCopy task. See https://github.com/Azure/azure-storage-azcopy/blob/main/MigrationGuideV8toV10.md | AzCopy V7 is deprecated                                                  |
| AzureFunctionOnKubernetes@0      | The AzureFunctionOnKubernetes@0 task is deprecated, please use a newer version of the AzureFunctionOnKubernetes task to take advantage of latest features e.g. Workload identity federation (see https://aka.ms/azdo-rm-workload-identity-tasks) | Will not get ACR service connection Workload identity federation support |
| AzureKeyVault@1                  | The AzureKeyVault@1 task is deprecated, please use the latest version of the AzureKeyVault task | Not the latest task version                                              |
| AzureNLBManagement@1             | The AzureNLBManagement@01 task is deprecated |  low usage                                                               |
| AzurePowerShell@2                | The AzurePowerShell@2 task is deprecated, please use the latest version of the AzurePowerShell task |  low usage relative to other task versions                               |
| AzurePowerShell@3                | The AzurePowerShell@3 task is deprecated, please use the latest version of the AzurePowerShell task |  low usage relative to other task versions                               |
| AzureRmWebAppDeployment@3        | The AzureRmWebAppDeployment@3 task is deprecated, please use a newer version of the AzureRmWebAppDeployment task to take advantage of latest features e.g. Workload identity federation (see https://aka.ms/azdo-rm-workload-identity-tasks) | Will not get ACR service connection Workload identity federation support |
| CacheBeta@0                      | The CacheBeta@0 task is deprecated, please use the latest version of the CacheBeta task |  low usage relative to other task versions                               |
| Docker@0                         | The Docker@0 task is deprecated, please use a newer version of the Docker task |  obsolete                                                                |
| DotNetCoreInstaller@0            | The DotNetCoreInstaller@0 task is deprecated, please use the UseDotNet task |  low usage relative to other task versions                               |
| DownloadPipelineArtifact@0       | The DownloadPipelineArtifact@0 task is deprecated, please use the latest version of the DownloadPipelineArtifact task |  low usage relative to other task versions                               |
| DuffleInstaller@0                | This task is deprecated as the Duffle project has been archived and is no longer maintained, see https://github.com/cnabio/duffle |  zero usage                                                              |
| FileTransform@1                  | The FileTransform@1 task is deprecated, please use a newer version of the FileTransform task | Not the latest task version                                              |
| FtpUpload@1                      | The FtpUpload@1 task is deprecated, please use a newer version of the FtpUpload task  |  low usage                                                               |
| GitHubRelease@0                  | The GitHubRelease@0 task is deprecated, please use a newer version of the GitHubRelease task |  low usage                                                               |
| Gradle@2                         | The Gradle@2 task is deprecated, please use a newer version of the Gradle task | Not the latest task version                                              |
| HelmInstaller@0                  | The HelmInstaller@0 task is deprecated, please use a newer version of the HelmInstaller task| Not the latest task version                                              |
| IISWebAppDeployment@1            | The IIS Web Application Deployment task has been deprecated. The task has been shipped as an extension, and is available in the marketplace - https://marketplace.visualstudio.com/items?itemName=ms-vscs-rm.iiswebapp | Task deprecated notice issues in markdown June 24 2019                   |
| Kubernetes@0                     | The Kubernetes@0 task is deprecated, please use a newer version of the Kubernetes task to take advantage of latest features e.g. Workload identity federation (see https://aka.ms/azdo-rm-workload-identity-tasks) | Will not get ACR service connection Workload identity federation support |
| KubernetesManifest@0             | The KubernetesManifest@0 task is deprecated, please use a newer version of the KubernetesManifest task to take advantage of latest features e.g. Workload identity federation (see https://aka.ms/azdo-rm-workload-identity-tasks) | Will not get ACR service connection Workload identity federation support |
| Maven@2                          | The Maven@2 task is deprecated, please use a newer version of the Maven task |  low usage relative to other task versions                               |
| Maven@3                          | The Maven@3 task is deprecated, please use a newer version of the Maven task | Not the latest task version                                              |
| MysqlDeploymentOnMachineGroup@1  | The MysqlDeploymentOnMachineGroup@1 task is deprecated |  low usage                                                               |
| PackerBuild@0                    | The PackerBuild@0 task is deprecated, please use a newer version of the PackerBuild task to take advantage of latest features e.g. Workload identity federation (see https://aka.ms/azdo-rm-workload-identity-tasks) |  low usage                                                               |
| PowerShellOnTargetMachines@1     | The PowerShellOnTargetMachines@1 task is deprecated, please use a newer version of the PowerShellOnTargetMachines task |  low usage relative to other task versions                               |
| PowerShellOnTargetMachines@2     | The PowerShellOnTargetMachines@2 task is deprecated, please use a newer version of the PowerShellOnTargetMachines task | Not the latest task version                                              |
| PublishCodeCoverageResults@1     | The PublishCodeCoverageResults@1 is deprecated. Users are recommended to switch to task version 2. For more details, see https://devblogs.microsoft.com/devops/new-pccr-task | Deprecation warning added to task.json March 5 2024                      |                                                         |
| ServiceFabricComposeDeploy@0     | The ServiceFabricComposeDeploy@0 task is deprecated |  low usage                                                               |
| SqlServerDacpacDeployment@1      | The SQL Server Database Deployment task has been deprecated. The task has been shipped as an extension, and is available in the marketplace - https://marketplace.visualstudio.com/items?itemName=ms-vscs-rm.iiswebapp. | Task deprecated notice issues in markdown June 24 2019                   |
| VSTest@1                         | The VSTest@1 task is deprecated, please use the latest version of the VSTest task |  low usage relative to other task versions                               |
| XamarinAndroid@1                 | Xamarin has reached end of life, see https://dotnet.microsoft.com/en-us/platform/support/policy/xamarin | Xamarin is deprecated                                                    |
| XamarinTestCloud@1               | Xamarin has reached end of life, see https://dotnet.microsoft.com/en-us/platform/support/policy/xamarin | Xamarin is deprecated                                                    |
| XamariniOS@2                     | Xamarin has reached end of life, see https://dotnet.microsoft.com/en-us/platform/support/policy/xamarin | Xamarin is deprecated                                                    |


### Create unique and human readable names for Service Principals created for a Service Connection

Update Pending