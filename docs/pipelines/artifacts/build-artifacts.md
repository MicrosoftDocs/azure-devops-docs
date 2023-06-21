---
title: Publish and download build artifacts
description: How to use Artifacts in Azure Pipelines
ms.custom: seodec18
ms.assetid: 34874DFA-2364-4C1D-A092-B8F67C499AB0
ms.topic: reference
ms.date: 04/21/2022
monikerRange: '<= azure-devops'
---

# Artifacts in Azure Pipelines

[!INCLUDE [version-lt-eq-azure-devops](../../includes/version-lt-eq-azure-devops.md)]

::: moniker range="azure-devops"

> [!NOTE]
> We recommend using [Download Pipeline Artifacts](pipeline-artifacts.md#download-artifacts) and [Publish Pipeline Artifacts](pipeline-artifacts.md#publish-artifacts) for faster performance.

::: moniker-end

Azure Artifacts enables teams to use feeds and upstream sources to manage their dependencies. You can use Azure Pipelines to publish and download different types of artifacts as part of your CI/CD workflow.

## Publish artifacts

Artifacts can be published at any stage of your pipeline. You can use YAML or the classic Azure DevOps editor to publish your packages.

#### [YAML](#tab/yaml/)
::: moniker range=">= azure-devops-2019"
```yaml
- powershell: gci env:* | sort-object name | Format-Table -AutoSize | Out-File $env:BUILD_ARTIFACTSTAGINGDIRECTORY/environment-variables.txt

- task: PublishBuildArtifacts@1
  inputs:
    pathToPublish: '$(Build.ArtifactStagingDirectory)'
    artifactName: drop
```

* **pathToPublish**: the path of your artifact. This can be an absolute or a relative path. Wildcards are not supported.
* **artifactName**: the name of your artifact.

> [!NOTE]
> Make sure you are not using one of the reserved folder names when publishing your artifact. See [Application Folders](/previous-versions/ex526337(v=vs.140)#application-folders) for more details.

::: moniker-end

::: moniker range="tfs-2018"
YAML is not supported in TFS.
::: moniker-end

#### [Classic](#tab/classic/)

Add the **Publish Build Artifacts** task to your pipeline and fill out the required fields. Make sure your file is at the root of your repository.

:::image type="icon" source="media/publish-task.png" border="false":::

* * *

### Example: Use multiple tasks

#### [YAML](#tab/yaml/)
::: moniker range=">= azure-devops-2019"
```yaml
- powershell: gci env:* | sort-object name | Format-Table -AutoSize | Out-File $env:BUILD_ARTIFACTSTAGINGDIRECTORY/environment-variables.txt

- task: PublishBuildArtifacts@1
  inputs:
    pathToPublish: '$(Build.ArtifactStagingDirectory)'
    artifactName: drop1
- task: PublishBuildArtifacts@1
  inputs:
    pathToPublish: '$(Build.ArtifactStagingDirectory)'
    artifactName: drop2
```

* **pathToPublish**: the path of your artifact. This can be an absolute or a relative path. Wildcards are not supported.
* **artifactName**: the name of your artifact.

::: moniker-end

::: moniker range="tfs-2018"
YAML is not supported in TFS.
::: moniker-end

#### [Classic](#tab/classic/)

You can add multiple **Publish Build Artifacts** tasks to your pipelines. Make sure your file is at the root of your repository.

:::image type="icon" source="media/multiple-publish-tasks.png" border="false":::

* * *

### Example: Copy and publish binaries

#### [YAML](#tab/yaml/)
::: moniker range=">= azure-devops-2019"
```yaml
- powershell: gci env:* | sort-object name | Format-Table -AutoSize | Out-File $env:BUILD_ARTIFACTSTAGINGDIRECTORY/environment-variables.txt

- task: CopyFiles@2
  inputs:
    sourceFolder: '$(Build.SourcesDirectory)'
    contents: '**/$(BuildConfiguration)/**/?(*.exe|*.dll|*.pdb)'
    targetFolder: '$(Build.ArtifactStagingDirectory)'
- task: PublishBuildArtifacts@1
  inputs:
    pathToPublish: '$(Build.ArtifactStagingDirectory)'
    artifactName: drop
```
* **sourceFolder**: the folder that contains the files you want to copy. If you leave this empty, copying will be done from **$(Build.SourcesDirectory)**.
* **contents**: File paths to include as part of the copy.
* **targetFolder**: destination folder.
* **pathToPublish**: the folder or file path to publish. It can be an absolute or a relative path. Wildcards are not supported.
* **artifactName**: the name of the artifact that you want to create.

> [!NOTE]
> Make sure not to use reserved name for *artifactName* such as *Bin* or *App_Data*. See [ASP.NET Web Project Folder Structure](/previous-versions/ex526337(v=vs.140)#application-folders) for more details.

::: moniker-end

::: moniker range="tfs-2018"
YAML is not supported in TFS.
::: moniker-end

#### [Classic](#tab/classic/)

:::image type="icon" source="../tasks/utility/media/copy-files.png" border="false"::: **Utility: Copy Files**

- Source folder: $(Build.SourcesDirectory)

- Contents: /$(BuildConfiguration)//?(*.exe|*.dll|*.pdb)

- Target folder: $(Build.ArtifactStagingDirectory)

:::image type="icon" source="../tasks/utility/media/publish-build-artifacts.png" border="false"::: **Utility: Publish Build Artifacts**

- Path to publish: $(Build.ArtifactStagingDirectory)

- Artifact name: drop

* * *

## Download artifacts

#### [YAML](#tab/yaml/)
::: moniker range=">= azure-devops-2019"
```yaml
- powershell: gci env:* | sort-object name | Format-Table -AutoSize | Out-File $env:BUILD_ARTIFACTSTAGINGDIRECTORY/environment-variables.txt

- task: DownloadBuildArtifacts@0
  inputs:
    buildType: 'current'
    downloadType: 'single'
    artifactName: 'drop'
    downloadPath: '$(System.ArtifactsDirectory)'
```
* **buildType**: specify which build artifacts will be downloaded: `current` (the default value) or from a specific build.
* **downloadType**: choose whether to download a single artifact or all artifacts of a specific build.
* **artifactName**: the name of the artifact that will be downloaded.
* **downloadPath**: path on the agent machine where the artifacts will be downloaded.

::: moniker-end

::: moniker range="tfs-2018"
YAML is not supported in TFS.
::: moniker-end

#### [Classic](#tab/classic/)

:::image type="icon" source="../tasks/utility/media/downloadbuildartifacts.png" border="false"::: **Utility: Download Build Artifacts**

- Download artifacts produced by: Current build

- Download type: Specific artifact

- Artifact name: drop

- Destination directory: $(System.ArtifactsDirectory)

* * *

> [!NOTE]
> If you are using a deployment task, you can reference your build artifacts using **$(Agent.BuildDirectory)**. See [Agent variables](../build/variables.md#agent-variables) for more details.

::: moniker range=">= azure-devops-2019"

When your pipeline run is completed, navigate to **Summary** to explore or download your artifact.

> [!div class="mx-imgBorder"]
> ![Published build artifact](media/published-build-artifact.png)

::: moniker-end

::: moniker range="tfs-2018"

When your pipeline run is completed, select **Artifacts** to download your artifact.

> [!div class="mx-imgBorder"]
> ![Published build artifact TFS](media/build-artifact-tab.png)

::: moniker-end

::: moniker range="tfs-2018"

## Publish from TFS to a UNC file share

If you're using a private Windows agent, you can set the **artifact publish location** option (**TFS 2018 RTM and older**: artifact type) to publish your files to a UNC **file share**.

> [!NOTE]
> Use a Windows build agent. This option doesn't work for macOS and Linux agents.

Choose **file share** to copy the artifact to a file share. Common reasons to do this:

* The size of your drop is large and consumes too much time and bandwidth to copy.

* You need to run some custom scripts or other tools against the artifact.

If you use a file share, specify the UNC file path to the folder. You can control how the folder is created for each build by using [variables](../build/variables.md). For example: ```\\my\share\$(Build.DefinitionName)\$(Build.BuildNumber)```.

::: moniker-end

## Tips

- Disable IIS Basic Authentication if you are using Azure DevOps Server to allow authentication with your Personal Access Token. See [IIS Basic Authentication and PATs](../../integrate/get-started/authentication/iis-basic-auth.md) for more details.

- Use forward slashes in file path arguments. Backslashes don't work in macOS/Linux agents.

- Build artifacts are stored on a Windows filesystem, which causes all UNIX permissions to be lost, including the execution bit. You might need to restore the correct UNIX permissions after downloading your artifacts from Azure Pipelines or TFS.

- `Build.ArtifactStagingDirectory` and `Build.StagingDirectory` are interchangeable.

- `Build.ArtifactStagingDirectory` path is cleaned up after each build.

- Deleting a build associated with packages published to a file share will result in the deletion of all Artifacts in that UNC path.  

- If you are publishing your packages to a file share, make sure you provide access to the build agent.

- Make sure you allow [Azure Artifacts Domain URLs and IP addresses](../../organizations/security/allow-list-ip-url.md#azure-artifacts) if your organization is using a firewall.

## Related articles

- [Publish and download artifacts in Azure Pipelines](./pipeline-artifacts.md)
- [Define your multi-stage classic pipeline](../release/define-multistage-release-process.md)
- [How to mitigate risk when using private package feeds](https://azure.microsoft.com/resources/3-ways-to-mitigate-risk-using-private-package-feeds/)
