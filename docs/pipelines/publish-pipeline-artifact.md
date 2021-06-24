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

# [YAML](#tab/yaml)

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

# [Classic](#tab/classic)

- From your pipeline definition, select + to add a new task.

- Search for the **Publish Pipeline Artifacts** task :::image type="icon" source="../tasks/utility/media/publish-pipeline-artifact.png" border="false"::: and then select **Add** to add it to your pipeline.

- Fill out the following fields:
    - **Display name**: the task display name.
    - **File or directory path**: the path of the file or directory to publish.
    - **Artifact name**: name of the Artifact to publish.
    - **Artifact publish location**: choose whether to store the Artifact in Azure Pipelines, or to copy it to a file share.

:::image type="content"  source="./media/publish-pipeline-artifacts.png" alt-text="Publish Pipeline Artifacts task":::    

---

## Publish Artifacts from the command line

If you want to manually publish your Artifact, run the following command in an elevated command prompt:


```Command
az pipelines runs artifact upload --artifact-name your_artifact_name --path your_path_to_publish --run-id '<artifact_run_id>'
```