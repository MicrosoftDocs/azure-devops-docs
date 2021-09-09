---
title: Publish and download artifacts in your pipeline
ms.custom: seodec18
description: How to publish and consume pipeline artifacts
ms.assetid: 028dcda8-a8fa-48cb-bb35-cdda8ac52e2c
ms.topic: reference
ms.date: 08/30/2021
monikerRange: 'azure-devops'
"recommendations": "true"
---

# Publish and download pipeline Artifacts

**Azure Pipelines**

Using Azure Pipelines, you can download artifacts from earlier stages in your pipeline or from another pipeline. You can also publish your artifact to a file share or make it available as a pipeline artifact.

## Publish artifacts

You can publish your artifacts using YAML, the classic editor, or Azure CLI:

> [!NOTE]
> Publishing pipeline artifacts is not supported in release pipelines.

# [YAML](#tab/yaml)

```yaml
steps:
- publish: $(System.DefaultWorkingDirectory)/bin/WebApp
  artifact: WebApp
```

> [!NOTE]
> The `publish` keyword is a shortcut for the [Publish Pipeline Artifact task](../tasks/utility/publish-pipeline-artifact.md) .

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

# [Classic](#tab/classic)

- Add the :::image type="icon" source="../tasks/utility/media/publish-pipeline-artifact.png" border="false"::: **Publish Pipeline Artifact** task.

- Fill out the following fields:
    - **Display name**: artifact display name
    - **File or directory path**: the path of the file or directory to publish
    - **Artifact name**: name of the artifact to publish
    - **Artifact publish location**: choose whether to store the artifact in Azure Pipelines, or to copy it to a file share that must be accessible from the pipeline agent.

# [Azure CLI](#tab/azure-cli)

- Run the following command to publish your Artifact:

  ```Command
    az pipelines runs artifact upload --artifact-name 'WebApp' --path $(System.DefaultWorkingDirectory)/bin/WebApp --run-id '<run id here>'
  ```

---

Although the artifact's name is optional, it is a good practice to specify a name that accurately reflects the contents of your artifact. If you plan to consume the artifact from a job running on a different OS, you must ensure all the file paths are valid for the target environment. For example, a file name containing the character `\` or `*` will fail to download on Windows.

The path of the file/folder to you want to publish is required. This can be an absolute or a relative path to `$(System.DefaultWorkingDirectory)`.

Packages in Azure Artifacts are immutable. Once you publish a package, its version will be permanently reserved. rerunning failed jobs will fail if the package has been published. A good way to approach this if you want to be able to rerun failed jobs without facing an error *package already exists*, is to use [Conditions](../process/conditions.md) to only run if the previous job succeeded.

```yml
  jobs:
  - job: Job1
    steps:
      - script: echo Hello Job1!

  - job: Job2
    steps:
      - script: echo Hello Job2!
    dependsOn: Job1
``` 

> [!NOTE]
> You will not be billed for storing Pipeline Artifacts. Pipeline Caching is also exempt from storage billing. See [Which artifacts count toward my total billed storage](../../artifacts/start-using-azure-artifacts.md#q-which-artifacts-count-toward-my-total-billed-storage).

> [!CAUTION]
> Deleting a pipeline run will result in the deletion of all Artifacts associated with that run.

### Use .artifactignore

`.artifactignore` uses the identical file-globbing syntax of `.gitignore` (with few limitations) to provide a version-controlled way to specify which files should not be included when publishing artifacts. See [Use the .artifactignore file](../../artifacts/reference/artifactignore.md) for more details.

Example: ignore all files except **.exe** files:

```
**/*
!*.exe
```

> [!NOTE]
> `.artifactignore` follows the same syntax as [.gitignore](https://git-scm.com/docs/gitignore) with some minor limitations. The plus sign character `+` is not supported in URL paths as well as some of the builds semantic versioning metadata (`+` suffix) in some packages types such as Maven.

## Download artifacts

You can download artifacts using YAML, the classic editor, or Azure CLI.

# [YAML](#tab/yaml)

```yaml
steps:
- download: current
  artifact: WebApp
```

- **current**: download artifacts produced by the current pipeline run. Options: current, specific.

> [!TIP]
> You can use [Pipeline resources](../process/resources.md#define-a-pipelines-resource) to define your source in one place and use it anywhere in your pipeline.

> [!NOTE]
> The `download` keyword is a shortcut for the [Download Pipeline Artifact](../tasks/utility/download-pipeline-artifact.md) task.

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

By default, files are downloaded to **$(Pipeline.Workspace)**. If an artifact name was not specified, a subdirectory will be created for each downloaded artifact. You can use matching patterns to limit which files get downloaded.

```yml
steps:
- download: current
  artifact: WebApp
  patterns: |
    **/*.js
    **/*.zip
```

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

Not available.

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

Not available.

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

Pipeline artifacts are the next generation of build artifacts and are the recommended way to work with artifacts. Artifacts published using the [Publish Build Artifacts task](../tasks/utility/publish-build-artifacts.md) can still be downloaded using [Download Build Artifacts](../tasks/utility/download-build-artifacts.md), but we recommend using the latest [Download Pipeline Artifact](../tasks/utility/download-pipeline-artifact.md) task instead.

When migrating from build artifacts to pipeline artifacts:

1. For build artifacts, it's common to copy files to `$(Build.ArtifactStagingDirectory)` and then use the **Publish Build Artifacts** task to publish this folder. With the **Publish Pipeline Artifact** task, you can just publish directly from the path containing the files.

2. By default, the **Download Pipeline Artifact** task downloads files to `$(Pipeline.Workspace)`. This is the default and recommended path for all types of artifacts.

3. File matching patterns for the **Download Build Artifacts** task are expected to start with (or match) the artifact name, regardless if a specific artifact was specified or not. In the **Download Pipeline Artifact** task, patterns should not include the artifact name when an artifact name has already been specified. For more information, see [single artifact selection](#single-artifact).

## FAQ

#### Q: What are build artifacts?

A: Build artifacts are the files generated by your build. See [Build Artifacts](build-artifacts.md) to learn more about how to publish and consume your build artifacts.

#### Q: Can this task publish artifacts to a shared folder?

A: Not currently, but this feature is planned.

## Related articles

- [Build artifacts](build-artifacts.md)
- [Releases in Azure Pipelines](../release/releases.md)
- [Release artifacts and artifact sources](../release/artifacts.md)
- [How to mitigate risk when using private package feeds](https://azure.microsoft.com/resources/3-ways-to-mitigate-risk-using-private-package-feeds/)
