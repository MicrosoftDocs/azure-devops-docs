---
title: Publish Pipeline Artifact
description: Publish Artifacts with Azure Pipelines
ms.topic: quickstart
ms.author: rabououn
author: ramiMSFT
ms.date: 08/29/2023
monikerRange: '>= azure-devops-2020'
---

# Publish Pipeline Artifacts

[!INCLUDE [version-gt-eq-2020](../includes/version-gt-eq-2020.md)]

Azure Artifacts enable developers to store and manage their packages and control who they want to share it with. Pipeline Artifacts are generated after you build your application. The output can then be deployed or consumed by another job in your pipeline.

## Publish Artifacts

> [!NOTE]
> Publish pipeline artifacts is not supported in release pipelines. It is only supported in build pipelines, multi-stage pipelines, and yaml pipelines.

You can publish your Artifacts at any stage of your pipeline using YAML or the classic editor. You won't be billed for storing your Pipeline Artifacts or using Pipeline caching.

# [YAML](#tab/yaml)

```yaml
- task: PublishPipelineArtifact@1
  inputs:
    targetPath: '$(Pipeline.Workspace)'
    publishLocation: 'pipeline'
    artifact: 'drop'
```

- **targetPath**: (Required) The path of the file or directory to publish. Can be absolute or relative to the default working directory. Can include [variables](/build/variables.md), but wildcards are not supported. Default value: $(Pipeline.Workspace).

- **publishLocation**: (Required). Artifacts publish location: choose whether to store the artifact in Azure Pipelines, or to copy it to a file share that must be accessible from the pipeline agent. Options: pipeline, filepath. Default value: pipeline.

- **artifact**: (Optional) Name of the artifact to publish. If not set, defaults to a unique ID scoped to the job.

# [Classic](#tab/classic)

1. From your pipeline definition, select + to add a new task.

1. Search for the **Publish Pipeline Artifacts** task :::image type="icon" source="tasks/utility/media/publish-pipeline-artifact.png" border="false"::: and then select **Add** to add it to your pipeline.

1. Fill out the following fields:
    - **Display name**: the task display name.
    - **File or directory path**: the path of the file or directory to publish.
    - **Artifact name**: name of the Artifact to publish.
    - **Artifact publish location**: choose whether to store the Artifact in Azure Pipelines, or to copy it to a file share.

    :::image type="content"  source="./media/publish-pipeline-artifacts.png" alt-text="Publish Pipeline Artifacts task":::    

---

::: moniker range=" azure-devops"

## Publish Artifacts from the command line

If you want to manually publish your Artifact, run the following command in an elevated command prompt:

```azurecli
az pipelines runs artifact upload --artifact-name your_artifact_name --path your_path_to_publish --run-id '<artifact_run_id>'
```

::: moniker-end

## View published Artifacts

When your pipeline run is completed, you can view or download your published Artifact as follows

1. Select your pipeline run, and then select the **Summary** tab.

1. Select the published Artifact in the related section.

    :::image type="content"  source="./media/published-artifact.png" alt-text="View published Artifact"::: 

1. Expand the drop folder and find your Artifact.

    :::image type="content"  source="./media/drop-artifacts.png" alt-text="View the drop content":::

1. Download your pipeline Artifact and explore its content.

## Related articles

- [Releases in Azure Pipelines](/rest/api/azure/devops/release/releases)
- [Multi-stage release pipeline](./release/define-multistage-release-process.md)
- [Deploy from multiple branches](./release/deploy-multiple-branches.md)
