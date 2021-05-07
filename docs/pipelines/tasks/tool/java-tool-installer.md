---
title: Java Tool Installer task
description: Change the version of Java in Azure Pipelines and Team Foundation Server (TFS)
ms.topic: reference
ms.assetid: C0E0B74F-0931-47C7-AC27-7C5A19456A36
ms.custom: seodec18
ms.author: vijayma
author: vijayma
ms.date: 04/21/2020
monikerRange: azure-devops
---

# Java Tool Installer task

**Azure Pipelines**

Use this task to acquire a specific version of Java from a user supplied Azure blob,
from a location in the source or on the agent, or from the tools cache. The task also sets the JAVA_HOME environment variable.
Use this task to change the version of Java used in Java tasks.

## Demands

None

::: moniker range="> tfs-2018"

## YAML snippet

[!INCLUDE [temp](../includes/yaml/JavaToolInstallerV0.md)]

::: moniker-end

## Arguments

| Argument | Description |
|----------|-------------|
| `versionSpec`<br/>JDK Version | (Required) Specify which JDK version to download and use. <br/>Default value: `8` |
|`jdkArchitectureOption`<br/> JDK Architecture | (Required) Specify the bit version of the JDK. <br/>Options: `x64, x86`|
| `jdkSourceOption`<br/>JDK source | (Required) Specify the source for the compressed JDK, either Azure blob storage or a local directory on the agent or source repository or use the pre-installed version of Java (available for Microsoft-hosted agents). Please see example below about how to use pre-installed version of Java |
| `jdkFile` <br/>JDK file | (Required) Applicable when `jdkSourceOption == LocalDirectory`. Specify the path to the jdk archive file that contains the compressed JDK. The path could be in your source repository or a local path on the agent. The file should be an archive (.zip, .tar.gz, .7z), containing bin folder either on the root level or inside a single directory. For macOS - there's support of .pkg and .dmg files containing only one .pkg file inside.|
|`azureResourceManagerEndpoint`<br/> Azure Subscription | (Required) Applicable when `jdkSourceOption == AzureStorage`. Specify the Azure Resource Manager subscription for the JDK.|
|`azureStorageAccountName`<br/> Storage Account Name | (Required) Applicable when `jdkSourceOption == AzureStorage`. Specify the Storage account name in which the JDK is located. Azure Classic and Resource Manager storage accounts are listed. |
|`azureContainerName`<br/>Container Name | (Required) Applicable when `jdkSourceOption == AzureStorage`. Specify the name of the container in the storage account in which the JDK is located.|
|`azureCommonVirtualFile`<br/> Common Virtual Path | (Required) Applicable when `jdkSourceOption == AzureStorage`. Specify the path to the JDK inside the Azure storage container. |
|`jdkDestinationDirectory`<br/> Destination directory | (Required) Specify the destination directory into which the JDK should be installed (only for Windows and Linux). On macOS, this directory is used as a temporary folder for extracting of .dmg's since macOS doesn't support installing of JDK to specific directory. |
|`cleanDestinationDirectory`<br/> Clean destination directory | (Required) Select this option to clean the destination directory before the JDK is extracted into it. <br/>Default value: `true`|

> [!NOTE]
>
> To run **Java Tool Installer** task on macOS it is required for user under which agent is running to have permission to execute **sudo** command without a password. 
> You can follow the next steps to enable this permission:
> 1) Run *sudo visudo* command, it will open sudoers file for editing.
> 2) Go to the bottom of the file and add the following line: *user ALL=NOPASSWD: /usr/sbin/installer* (Replace 'user' by the actual user alias)
> 3) Save and close the file.
>

## Examples

Here's an example of getting the archive file from a local directory on Linux.
The file should be an archive (.zip, .gz) of the `JAVA_HOME` directory so that it includes the `bin`, `lib`, `include`, `jre`, etc. directories.

```yaml
  - task: JavaToolInstaller@0
    inputs:
      versionSpec: "11"
      jdkArchitectureOption: x64
      jdkSourceOption: LocalDirectory
      jdkFile: "/builds/openjdk-11.0.2_linux-x64_bin.tar.gz"
      jdkDestinationDirectory: "/builds/binaries/externals"
      cleanDestinationDirectory: true
```

Here's an example of downloading the archive file from Azure Storage.
The file should be an archive (.zip, .gz) of the `JAVA_HOME` directory so that it includes the `bin`, `lib`, `include`, `jre`, etc. directories.

```yaml
- task: JavaToolInstaller@0
  inputs:
    versionSpec: '6'
    jdkArchitectureOption: 'x64'
    jdkSourceOption: AzureStorage
    azureResourceManagerEndpoint: myARMServiceConnection
    azureStorageAccountName: myAzureStorageAccountName
    azureContainerName: myAzureStorageContainerName
    azureCommonVirtualFile: 'jdk1.6.0_45.zip'
    jdkDestinationDirectory: '$(agent.toolsDirectory)/jdk6'
    cleanDestinationDirectory: false
```

Here's an example of using "pre-installed" feature. This feature allows you to use Java versions that are pre-installed on the Microsoft-hosted agent. You can find available pre-installed versions of Java in [Software section](../../agents/hosted.md#software).

```yaml
- task: JavaToolInstaller@0
  inputs:
    versionSpec: '8'
    jdkArchitectureOption: 'x86'
    jdkSourceOption: 'PreInstalled'
```

## Open source

This task is open source [on GitHub](https://github.com/Microsoft/azure-pipelines-tasks). Feedback and contributions are welcome.

## FAQ
<!-- BEGINSECTION class="md-qanda" -->

### Where can I learn more about tool installers?

For an explanation of tool installers and examples, see [Tool installers](../../process/tasks.md#tool-installers).

[!INCLUDE [temp](../../includes/qa-agents.md)]

<!-- ENDSECTION -->
