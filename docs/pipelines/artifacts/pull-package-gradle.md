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

- An Azure DevOps organization. [Create one for free](../../organizations/accounts/create-organization.md).

- An Azure DevOps project. Create a new [project](../../organizations/projects/create-project.md#create-a-project) if you don't have one already.

- An Azure Artifacts feed. [Create one for free](../../artifacts/get-started-maven.md#create-a-feed).

## Build and publish pipeline artifacts

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

## Related articles

- [Publish and download pipeline Artifacts](./pipeline-artifacts.md)
- [Restore NuGet packages in Azure Pipelines](../packages/nuget-restore.md)
- [Artifacts in Azure Pipelines](./build-artifacts.md)
