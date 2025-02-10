---
title: Build and publish pipeline artifacts with Gradle
description: Learn how to build and publish your pipeline artifact with Gradle and Azure Pipelines.
ms.reviewer: dastahel
ms.topic: how-to
ms.date: 02/10/2025
monikerRange: '<= azure-devops'
"recommendations": "true"
---

# Build and publish pipeline artifacts with Gradle and Azure Pipelines

[!INCLUDE [version-lt-eq-azure-devops](../../includes/version-lt-eq-azure-devops.md)]

Gradle is a popular build tool for Java applications and the primary build tool for Android. Using Azure Pipelines, you can build and publish your pipeline artifacts using both YAML and Classic pipelines.

## Prerequisites

- An [Azure DevOps organization](../../organizations/accounts/create-organization.md).

- An [Azure DevOps project](../../organizations/projects/create-project.md#create-a-project).

## Build and publish pipeline artifacts

#### [YAML](#tab/yaml/)

1. Sign in to your Azure DevOps organization, and then navigate to your project.

1. Select **Pipelines**, and then select your pipeline definition.

1. Select **Edit**, and then add the following snippet to your YAML pipeline.

    ```yaml
    steps:
    - task: Gradle@4
      displayName: 'gradlew build'
    
    - task: CopyFiles@2
      displayName: 'Copy Files to: $(Pipeline.Workspace)'
      inputs:
        TargetFolder: '$(Pipeline.Workspace)'
    
    - task: PublishPipelineArtifact@1
      displayName: 'Publish Pipeline Artifact'
    ```

### [Classic](#tab/classic/)

::: moniker range="azure-devops"

1. Sign in to your Azure DevOps organization, and then navigate to your project.

::: moniker-end

::: moniker range="< azure-devops"

1. Sign in to your Azure DevOps collection, and then navigate to your project.

::: moniker-end

::: moniker range="> azure-devops-2019"

2. Select **Pipelines**, and then select your pipeline definition. 

::: moniker-end

::: moniker range="azure-devops-2019"

2. Select **Pipelines** > **Builds**, and then select your build definition. 

::: moniker-end

3. Select **Edit**, and then select the `+` sign to add a new task. Add the *Gradle*, *Copy Files*, and *Publish Pipeline Artifact* tasks to your pipeline definition and configure them as follows:

    1. **Gradle**: leave the default settings.
    
    1. **Copy Files**: set the *Target Foler* to $(Pipeline.Workspace).

    1. **Publish Pipeline Artifact**: make sure the *File or directory path* is set to $(Pipeline.Workspace) and the *Artifact publish location* is Azure Pipelines.

4. Select **Save & queue** when you're done.

5. You can view your published artifact in your pipeline **Summary** once the run is complete.

    :::image type="content" source="media\published-artifact.png" alt-text="Screenshot showing the published artifact in the pipeline summary.":::

---

> [!TIP]
> To keep the Gradle daemon running, consider adding `org.gradle.daemon=true` to your *gradle.properties* file.

## Related content

- [Publish and download pipeline Artifacts](./pipeline-artifacts.md)
- [Artifact sources in Classic release pipelines](../release/artifacts.md)
- [Use the .artifactignore file](../../artifacts/reference/artifactignore.md)