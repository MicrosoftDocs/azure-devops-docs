---
title: Publish and consume artifacts in pipelines
titleSuffix: Azure Pipelines and TFS
ms.custom: seodec18
description: Understand pipeline artifacts in Azure Pipelines and Azure DevOps Server
ms.assetid: 028dcda8-a8fa-48cb-bb35-cdda8ac52e2c
ms.topic: reference
ms.date: 07/13/2020
monikerRange: 'azure-devops'
"recommendations": "true"
---

# Publish and download artifacts in Azure Pipelines

**Azure Pipelines**

Pipeline artifacts provide a way to share files between stages in a pipeline or between different pipelines. They are typically the output of a build process that needs to be consumed by another job or be deployed. Artifacts are associated with the run they were produced in and remain available after the run has completed.

> [!NOTE]
> Both `PublishPipelineArtifact@1` and `DownloadPipelineArtifact@2` require a minimum agent version of 2.153.1

## Publish artifacts

You can publish your artifacts using YAML, the classic web UI, or Azure CLI

# [YAML](#tab/yaml)

```yaml
steps:
- publish: $(System.DefaultWorkingDirectory)/bin/WebApp
  artifact: WebApp
```

> [!NOTE]
> The `publish` keyword is a shortcut for the **Publish Pipeline Artifact** task.

# [YAML (task)](#tab/yaml-task)

```yaml
steps:
- task: PublishPipelineArtifact@1
  inputs:
    targetPath: $(System.DefaultWorkingDirectory)/bin/WebApp
    artifactName: WebApp
```

- **targetPath**: the path to the folder or file you want to publish.
- **artifactName**: the name of the artifact that you want to create.

> [!TIP]
> For more information on `PublishPipelineArtifact@1`, see [Publish Pipeline Artifacts task](../tasks/utility/publish-pipeline-artifact.md).

# [Classic](#tab/classic)

- Add the :::image type="icon" source="../tasks/utility/media/publish-pipeline-artifact.png" border="false"::: **Publish Pipeline Artifact** task.

- Fill out the following fields:
    - **Display name**: artifact display name
    - **File or directory path**: the path of the file or directory to publish
    - **Artifact name**: name of the artifact to publish
    - **Artifact publish location**: choose whether to store the artifact in Azure Pipelines, or to copy it to a file share that must be accessible from the pipeline agent.

# [Azure CLI](#tab/azure-cli)

- Run the following command to publish your Artifact

  ```Command
    az pipelines runs artifact upload --artifact-name 'WebApp' --path $(System.DefaultWorkingDirectory)/bin/WebApp --run-id '<run id here>'
  ```

---

Things to keep in mind:

* Although artifact name is optional, it is a good practice to specify a name that accurately reflects the contents of the artifact.

* The path of the file or folder to publish is required. It can be an absolute or a relative path to `$(System.DefaultWorkingDirectory)`.

* If you plan to consume the artifact from a job running on a different operating system or file system, you must ensure all file paths are valid for the target environment. For example, a file name containing a `\` or `*` character will typically fail to download on Windows.

> [!NOTE]
> You will not be billed for storage of Pipeline Artifacts, Build Artifacts, and Pipeline Caching. For more information, see [Which artifacts count toward my total billed storage](../../artifacts/start-using-azure-artifacts.md#q-which-artifacts-count-toward-my-total-billed-storage).

> [!CAUTION]
> Deleting a build that published Artifacts to a file share will result in the deletion of all Artifacts in that UNC path.

### Use .artifactignore

`.artifactignore` uses the identical file-globbing syntax of `.gitignore` (with very few limitations) to provide a version-controlled way to specify which files should not be included when publishing artifacts. For more information, see [.artifactIgnore usage].

Example: ignore all files except **.exe** files:

```
**/*
!*.exe
```

> [!NOTE]
> `.artifactignore` follows the same syntax as [.gitignore](https://git-scm.com/docs/gitignore) with some minor limitations. The plus sign character `+` is not supported in URL paths as well as some of the builds semantic versioning metadata (`+` suffix) in some packages types such as Maven.

## Download artifacts

You can download artifacts using YAML, the classic web UI, or Azure CLI.

# [YAML](#tab/yaml)

```yaml
steps:
- download: current
  artifact: WebApp
```

- **current**: download artifacts produced by the current pipeline run. Options: current, specific.

> [!NOTE]
> The `download` keyword is a shortcut to the **Download Pipeline Artifact** task.

# [YAML (task)](#tab/yaml-task)

```yaml
steps:
- task: DownloadPipelineArtifact@2
  inputs:
    artifact: WebApp
```

- **artifact**: The name of the artifact to download. If left empty, all artifacts associated with the pipeline run will be downloaded.

# [Classic](#tab/classic)

- Add the :::image type="icon" source="../tasks/utility/media/download-pipeline-artifact.png" border="false"::: **Download Pipeline Artifact** task.

- Fill out the following fields:
    - **Display name**: artifact display name
    - **Download artifacts produced by**: download artifacts produced by the current pipeline run, or from a specific pipeline run
    - **Artifact name**: name of the artifact to publish
    - **Matching patterns**: file matching patterns to control which files get downloaded
    - **Destination directory**: directory to download the artifact files to

# [Azure CLI](#tab/azure-cli)

- Run the following command to download your Artifact

  ```Command
    az pipelines runs artifact download --artifact-name 'WebApp' --path $(System.DefaultWorkingDirectory)/bin/WebApp --run-id '<run id here>'
  ```

---

Things to keep in mind:

- By default, files are downloaded to **$(Pipeline.Workspace)**. If an artifact name was not specified, a subdirectory will be created for each downloaded artifact.

- File matching patterns can be used to limit which files are downloaded.

- To download artifacts from a different pipeline or from earlier stages in your pipeline see, [Download Pipeline Artifacts](../tasks/utility/download-pipeline-artifact.md) task.

### Artifacts selection

A single download step can download one or more artifacts. To download multiple artifacts, leave the _artifact name_ field empty and use file matching patterns to limit which files will be downloaded. `**` is the default file matching pattern (all files in all artifacts).

#### Single artifact

When an artifact name is specified:

1. Only files for that specific artifact are downloaded. If the artifact does not exist, the task will fail.

1. File matching patterns are evaluated relative to the root of the artifact. For example, the pattern `*.jar` matches all files with a `.jar` extension at the root of the artifact.

The following example illustrates how to download all `*.js` from an artifact `WebApp`:

# [YAML](#tab/yaml)

```yaml
steps:
- download: current
  artifact: WebApp
  patterns: '**/*.js'
```

# [YAML (task)](#tab/yaml-task)

```yaml
steps:
- task: DownloadPipelineArtifact@2
  inputs:
    artifact: WebApp
    patterns: '**/*.js'
    path: $(Build.SourcesDirectory)/bin
```

* **artifact**: The name of the artifact to download. If left empty, all artifacts associated to the pipeline run will be downloaded.
* **patterns**: One or more file matching patterns that limit which files get downloaded.
* **path**: The destination directory. Can be relative or absolute path.

# [Classic](#tab/classic)

- Add the :::image type="icon" source="../tasks/utility/media/download-pipeline-artifact.png" border="false"::: **Download Pipeline Artifact** task.

- Fill out the following fields:
    - **Display name**: artifact display name
    - **Download artifacts produced by**: download artifacts produced by the current pipeline run, or from a specific pipeline run
    - **Artifact name**: name of the artifact to publish
    - **Matching patterns**: file matching patterns to control which files get downloaded
    - **Destination directory**: directory to download the artifact files to

# [Azure CLI](#tab/azure-cli)

Not available for this action.

---

#### Multiple artifacts

When no artifact name is specified:

1. Multiple artifacts can be downloaded and the task does not fail if no files are found.

1. A subdirectory is created for each artifact.

1. File matching patterns should assume the first segment of the pattern is (or matches) an artifact name. For example, `WebApp/**` matches all files from the `WebApp` artifact. The pattern `*/*.dll` matches all files with a `.dll` extension at the root of each artifact.

The following example illustrates how to download all `.zip` files from all artifacts:

# [YAML](#tab/yaml)

```yaml
steps:
- download: current
  patterns: '**/*.zip'
```

# [YAML (task)](#tab/yaml-task)

```yaml
steps:
- task: DownloadPipelineArtifact@2
  inputs:
    patterns: '**/*.zip'
```

* **patterns**: One or more file matching patterns that limit which files get downloaded.

# [Classic](#tab/classic)

- Add the :::image type="icon" source="../tasks/utility/media/download-pipeline-artifact.png" border="false"::: **Download Pipeline Artifact** task.

- Fill out the following fields:
    - **Display name**: artifact display name
    - **Download artifacts produced by**: download artifacts produced by the current pipeline run, or from a specific pipeline run
    - **Artifact name**: name of the artifact to publish
    - **Matching patterns**: file matching patterns to control which files get downloaded
    - **Destination directory**: directory to download the artifact files to

# [Azure CLI](#tab/azure-cli)

Not available for this action.

---

## Artifacts in release and deployment jobs

Artifacts are only downloaded automatically in deployment jobs. The download artifact task will be auto injected only when using the `deploy` lifecycle hook in your deployment. To stop artifacts from being downloaded automatically, add a `download` step and set its value to none.
In a regular build job, you need to explicitly use the `download` step keyword or the [Download Pipeline Artifact](../tasks/utility/download-pipeline-artifact.md) task. See [lifecycle hooks](../process/deployment-jobs.md#descriptions-of-lifecycle-hooks) to learn more about the other types of hooks.

```yaml
steps:
- download: none
```

> [!NOTE]
> Deleting or overwriting Pipeline Artifacts is not currently supported. The recommended workflow if you want to re-run a failed pipeline job is to include the job ID in the artifact name. `$(system.JobId)` is the appropriate variable for this purpose. See [System variables](../build/variables.md#system-variables) to learn more about predefined variables.

## Use Artifacts across stages

If you want to be able to access your artifact across different stages in your pipeline, you can use output variables to pass it to the next stage in your YAML. See [Dependency expressions](../process/expressions.md#dependencies) for more details.

```YAML
trigger: none
pool:
  vmImage: 'ubuntu-latest'
stages:
- stage: A
  jobs:
  - job: A1
    steps:
     - script: echo ##vso[task.setvariable variable=shouldrun;isOutput=true]true
       name: printvar
- stage: B
  dependsOn: A
  jobs:
  - job: B1
    condition: in(stageDependencies.A.A1.result, 'Succeeded', 'SucceededWithIssues', 'Skipped')
    steps:
    - script: echo hello from Job B1
  - job: B2
    condition: eq(stageDependencies.A.A1.outputs['printvar.shouldrun'], 'true')
    steps:
     - script: echo hello from Job B2
```

## Migrate from build artifacts

Pipeline artifacts are the next generation of build artifacts and are the recommended way to work with artifacts. Artifacts published using the **Publish Build Artifacts** task can continue to be downloaded using **Download Build Artifacts**, but we recommend using the latest **Download Pipeline Artifact** task instead.

When migrating from build artifacts to pipeline artifacts:

1. For build artifacts, it's common to copy files to `$(Build.ArtifactStagingDirectory)` and then use the **Publish Build Artifacts** task to publish this folder. With the **Publish Pipeline Artifact** task, you can just publish directly from the path containing the files.

2. By default, the **Download Pipeline Artifact** task downloads files to `$(Pipeline.Workspace)`. This is the default and recommended path for all types of artifacts.

3. File matching patterns for the **Download Build Artifacts** task are expected to start with (or match) the artifact name, regardless if a specific artifact was specified or not. In the **Download Pipeline Artifact** task, patterns should not include the artifact name when an artifact name has already been specified. For more information, see [single artifact selection](#single-artifact).
 
> [!TIP]
> For more information on billing and usage tiers, check out the [Azure DevOps pricing tool](https://azure.microsoft.com/pricing/details/devops/azure-devops-services/).

## FAQ

- **Can this task publish artifacts to a shared folder or a network path?**

Not currently, but this feature is planned.

- **What are build artifacts?**

Build artifacts are the files generated by your build. See [Build Artifacts](build-artifacts.md) to learn more about how to publish and consume your build artifacts.

## Related articles

- [Build artifacts](build-artifacts.md)
- [Releases in Azure Pipelines](../release/releases.md)
- [Release artifacts and artifact sources](../release/artifacts.md)
- [How to mitigate risk when using private package feeds](https://azure.microsoft.com/en-us/resources/3-ways-to-mitigate-risk-using-private-package-feeds/)