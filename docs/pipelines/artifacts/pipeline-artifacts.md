---
title: Publish and consume Pipeline artifacts in builds
titleSuffix: Azure Pipelines and TFS
ms.custom: seodec18
description: Understand pipeline artifacts in Azure Pipelines and Azure DevOps Server
ms.assetid: 028dcda8-a8fa-48cb-bb35-cdda8ac52e2c
ms.topic: reference
ms.prod: devops
ms.technology: devops-cicd
ms.manager: jillfra
ms.author: amullans
author: alexmullans
ms.date: 10/29/2018
monikerRange: 'azure-devops'
---

# Pipeline artifacts in Azure Pipelines

**Azure Pipelines**

> [!NOTE]
> Pipeline artifacts are the next generation of build artifacts in Azure Pipelines and are currently in preview.
> For the current artifacts, see [Build artifacts](build-artifacts.md).

Pipeline artifacts help you store build outputs and move intermediate files between stages in your pipelines. Artifacts are the files that you want your build to produce. They can be anything that your team needs to test or deploy your app.

You’ll see the most benefit from pipeline artifacts if you have a build that produces large build outputs. If you’re an existing Azure DevOps user, pipeline artifacts are automatically enabled for you.

## Publish a pipeline artifact

In build artifacts, it's common to first copy files to `$(Build.ArtifactStagingDirectory)` and then use the **Publish Build Artifacts** task to publish that directory. With pipeline artifacts, we recommend pointing the **Publish Pipeline Artifacts** tasks directly to the paths to be published. This saves your build the time of creating a copy of the files that you want to publish.

# [YAML](#tab/yaml)

```yaml
steps:
- task: PublishPipelineArtifact@0
  inputs:
    artifactName: 'artifactName'
    targetPath: 'src/MyWebApp/bin/Release/netcoreapp2.0/linux-x64/publish'
```

# [Designer](#tab/designer)

![icon](../tasks/utility/_img/publish-pipeline-artifact.png) **Utility: Publish Pipeline Artifact**

* Name of the artifact:

   ```
   artifactName
   ```

* Path to publish:

   ```
   src/MyWebApp/bin/Release/netcoreapp2.0/linux-x64/publish
   ```

---

## Download pipeline artifacts

> If you're using pipeline artifacts to deliver artifacts into a release pipeline, you don’t need to add the task. Release pipelines will automatically inject the task into your stages. If you want more control over how files are placed on disk, you can manually add the **Download Pipeline Artifact** task yourself. You can also use the task to download artifacts from a different pipeline.

# [YAML](#tab/yaml)

```yaml
steps:
- task: DownloadPipelineArtifact@0
  inputs:
    artifactName: 'artifactName'
    targetPath: $(System.DefaultWorkingDirectory)
```

# [Designer](#tab/designer)

![icon](../tasks/utility/_img/download-pipeline-artifact.png) **Utility: Download Pipeline Artifact**

* Display name:

   ```
   Download Pipeline Artifact.
   ```

* Name of the artifact to download:

   ```
   artifactName
   ```

* Path to download to:

   ```
   $(System.DefaultWorkingDirectory)
   ```

---

## Using .artifactignore files

`.artifactignore` files use the identical file-globbing syntax of `.gitignore` to provide a version-controlled way to specify which files should _not_ be added to a Pipeline Artifact from a particular folder.

Using an `.artifactignore` file, it is possible to omit the `targetPath` parameter entirely, if you want to create a Pipeline Artifact containing everything in and under the working directory, minus all of the ignored files and folders.

In other words, with an `.artifactignore` file like this:

```
**/*
!*.exe
```

This build task will archive up all of the `.exe` files and nothing else:

```yaml
steps:
- task: PublishPipelineArtifact@0
  inputs:
    artifactName: 'artifactName'
```

More details about how to use these files are available at [Use the .artifactignore file](../../artifacts/reference/artifactignore.md) or [.gitignore Documentation](https://git-scm.com/docs/gitignore).
