---
title: Publish and consume artifacts in pipelines
titleSuffix: Azure Pipelines and TFS
ms.custom: seodec18
description: Understand pipeline artifacts in Azure Pipelines and Azure DevOps Server
ms.assetid: 028dcda8-a8fa-48cb-bb35-cdda8ac52e2c
ms.topic: reference
ms.prod: devops
ms.technology: devops-cicd
ms.manager: jillfra
ms.author: phwilson
author: chasewilson
ms.date: 6/18/2019
monikerRange: 'azure-devops'
---

# Pipeline artifacts in Azure Pipelines

**Azure Pipelines**

Pipeline artifacts provide a way to share files between stages in a pipeline or between different pipelines. They are typically the output of a build process that need to be consumed by another job or be deployed. Artifacts are associated with the run they were produced in and remain available after the run has completed.

> [!NOTE]
> Both `PublishPipelineArtifact@1` and `DownloadPipelineArtifact@2` require a minimum agent version of 2.153.1

## Publishing artifacts

To publish (upload) an artifact for the current run of a CI/CD or classic pipeline:

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
    path: $(System.DefaultWorkingDirectory)/bin/WebApp
    artifact: WebApp
```

# [Classic](#tab/classic)

![icon](../tasks/utility/_img/publish-pipeline-artifact.png) **Publish Pipeline Artifact**

* Artifact name:

   ```
   WebApp
   ```

* File or directory path:

   ```
   $(System.DefaultWorkingDirectory)/bin/WebApp
   ```

---

Keep in mind:

* Although artifact name is optional, it is a good practice to specify a name that accurately reflects the contents of the artifact.

* The path of the file or folder to publish is required. It can be absolute or relative to `$(System.DefaultWorkingDirectory)`.

* If you plan to consume the artifact from a job running on a different operating system or file system, you must ensure all file paths in the artifact are valid for the target environment. For example, a file name containing a `\` or `*` character will typically fail to download on Windows.

### Limiting which files are included

`.artifactignore` files use the identical file-globbing syntax of `.gitignore` to provide a version-controlled way to specify which files should _not_ be added to a pipeline artifact.

Using an `.artifactignore` file, it is possible to omit the path from the task configuration, if you want to create a Pipeline Artifact containing everything in and under the working directory, minus all of the ignored files and folders. For example, to incude only files in the artifact with a `.exe` extension:

```
**/*
!*.exe
```

To learn more, see [Use the .artifactignore file](../../artifacts/reference/artifactignore.md) or the [.gitignore documentation](https://git-scm.com/docs/gitignore).

## Downloading artifacts

To download a specific artifact in CI/CD or classic pipelines:

# [YAML](#tab/yaml)

```yaml
steps:
- download: current
  artifact: WebApp
```

> [!NOTE]
> The `download` keyword is a shortcut to the **Download Pipeline Artifact** task.

In this context, `current` means the current run of this pipeline (i.e. artifacts published earlier in the run). For release and deployment jobs this also include any source artifacts.

For additional configuration options, see the [download keyword](../yaml-schema.md#download) in the YAML schema.

# [YAML (task)](#tab/yaml-task)

```yaml
steps:
- task: DownloadPipelineArtifact@2
  inputs:
    artifact: WebApp
```

# [Classic](#tab/classic)

![icon](../tasks/utility/_img/download-pipeline-artifact.png) **Download Pipeline Artifact**

* Artifact name:

   ```
   WebApp
   ```

---

Keep in mind:

* The **Download Pipeline Artifact** task can download both build artifacts (published with the Publish Build Artifacts task) and pipeline artifacts.

* By default, files are downloaded to `$(Pipeline.Workspace)/{artifact}`, where `artifact` is the name of the artifact. The folder structure of the artifact is always preserved.

* File matching patterns can be used to limit which files from the artifact(s) are downloaded. See [artifact selection](#artifact-selection) for more details on how pattern matching works.

For advanced scenarios, including downloading artifacts from other pipelines, see the [Download Pipeline Artifact](../tasks/utility/download-pipeline-artifact.md) task.

### Artifact selection

A single download step can download one or more artifacts. To download multiple artifacts, do not specify an artifact name and optionally use file matching patterns to limit which artifacts and files are downloaded. The default file matching pattern is `**`, meaning all files in all artifacts.

#### Single artifact

When an artifact name is specified:

1. Only files for this artifact are downloaded. If this artifact does not exist, the task will fail.

2. Unless the specified download path is absolute, a folder with the same name as the artifact is created under the download path, and the artifact's files are placed in it.

3. File matching patterns are evaluated relative to the root of the artifact. For example, the pattern `*.jar` matches all files with a `.jar` extension at the root of the artifact.

For example, to download all `*.js` from the artifact `WebApp`:

# [YAML](#tab/yaml)

```yaml
steps:
- download: current
  artifact: WebApp
  patterns: '**/*.js'
```

Files (with the directory structure of the artifact preserved) are downloaded under `$(Pipeline.Workspace)/WebApp`.

# [YAML (task)](#tab/yaml-task)

```yaml
steps:
- task: DownloadPipelineArtifact@2
  inputs:
    artifact: WebApp
    patterns: '**/*.js'
    path: $(Build.SourcesDirectory)/bin
```

In this example, all `*.js` files in the `WebApp` artifact are downloaded to `$(Build.SourcesDirectory)/bin`.

# [Classic](#tab/classic)

![icon](../tasks/utility/_img/download-pipeline-artifact.png) **Download Pipeline Artifact**

* Artifact name:

   ```
   artifactName
   ```

* Destination directory:

   ```
   $(Build.SourcesDirectory)/bin
   ```

* Matching patterns:

   ```
   '**/*.js'
   ```

---

#### Multiple artifacts

When no artifact name is specified:

1. Files from multiple artifacts can be downloaded, and the task does not fail if no files are downloaded.

2. A folder is always created under the download path for each artifact with files being downloaded.

3. File matching patterns should assume the first segment of the pattern is (or matches) an artifact name. For example, `WebApp/**` matches all files from the `WebApp` artifact. The pattern `*/*.dll` matches all files with a `.dll` extension at the root of each artifact.

For example, to download all `.zip` files from all source artifacts:

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

# [Classic](#tab/classic)

![icon](../tasks/utility/_img/download-pipeline-artifact.png) **Download Pipeline Artifact**

* Matching patterns:

   ```
   '**/*.zip'
   ```

---

## Artifacts in release and deployment jobs

If you're using pipeline artifacts to deliver artifacts into a classic release pipeline or deployment job, you do not need to add a download step --- a step is injected automatically. If you need to control over the location where files are downloaded, you can add a **Download Pipeline Artifact** task or use the ```download``` YAML keyword.

> [!NOTE]
> Artifacts are only downloaded automatically in deployment jobs. In a regular build job, you need to explicitly use the `download` step keyword or  **Download Pipeline Artifact** task.

To stop artifacts from being downloaded automatically, add a `download` step and set its value to none:

```yaml
steps:
- download: none
```

## Migrating from build artifacts

Pipeline artifacts are the next generation of build artifacts and are the recommended way to work with artifacts. Artifacts published using the **Publish Build Artifacts** task can continue to be downloaded using **Download Build Artifacts**, but can also be downloaded using the latest **Download Pipeline Artifact** task.

When migrating from from build artifacts to pipeline artifacts:

1. For build artifacts, it's common to copy files to `$(Build.ArtifactStagingDirectory)` and then use the **Publish Build Artifacts** task to publish this folder. With the **Publish Pipeline Artifact** task, just publish directly from the path containing the files.

2. By default, the **Download Pipeline Artifact** task downloads files to `$(Pipeline.Workspace)`. This is the default and recommended path for all types of artifacts.

3. File matching patterns for the **Download Build Artifacts** task are expected to start with (or match) the artifact name, regardless if a specific artifact was specified or not. In the **Download Pipeline Artifact** task, patterns should not include the artifact name when an artifact name has already been specified. See [single artifact selection](#single-artifact) for more details.

## Q&A

### Can this task publish artifacts to a shared folder or network path?

Not currently, but this feature is planned.
