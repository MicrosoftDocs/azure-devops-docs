---
title: Publish Pipeline Artifact
description: Publish Artifacts with Azure Pipelines
ms.topic: quickstart
ms.author: rabououn
author: ramiMSFT
ms.date: 06/23/2021
monikerRange: '>= azure-devops-2020'
---

# Publish Pipeline Artifacts

Azure Artifacts enable developers to store and manage their packages and control who they want to share it with. Pipeline Artifacts are generally generated after you build your application. The output can then deployed or consumed by another job in your pipeline.

## Publish Artifacts

> [!NOTE]
> Publish Artifacts is not supported in release pipelines.It is only supported in build pipelines, yaml pipelines, and multi-stage pipelines.

You can publish your Artifacts at any stage of your pipeline using YAML or the classic editor. If you want to publish your Artifacts manually, you can use the Azure CLI to run the `az pipelines runs artifact` command. You will not be billed for storing your Pipeline Artifacts or Pipeline caching.

# [YAML (task)](#tab/yaml-task)

```yaml
steps:
- task: PublishPipelineArtifact@1
  inputs:
    targetPath: '$(Pipeline.Workspace)'
    artifactType: 'pipeline'
    artifactName: 'drop'
```

- **targetPath**: Path to the folder or file you want to publish. (Required)
- **artifactType**: Artifacts publish location. (Required). Options: pipeline, filepath. Default value: pipeline.
- **artifactName**: Name of your Artifact. (Optional)
