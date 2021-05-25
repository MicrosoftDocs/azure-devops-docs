---
title: Deploy from multiple branches
description: DevOps CI CD - Use release pipelines to deploy from multiple branches to multiple stages.
ms.topic: tutorial
ms.author: ninallam
author: ninallam
ms.date: 03/22/2021
monikerRange: '>= azure-devops-2019'
"recommendations": "true"
---

# Deploy from multiple branches using Azure Pipelines

**Azure Pipelines | Azure DevOps Server 2019**

Artifact filters can be used with release triggers to deploy from multiple branches. Applying the artifact filter to a specific branch enables deployment to a specific stage when all the conditions are met.

## Prerequisites

- A Git repository to create the pipeline. If you don't have one, use the [pipelines-dotnet-core](https://github.com/MicrosoftDocs/pipelines-dotnet-core) sample app.

- A working build for your repository.

## Set up a release pipeline

1. Select **Releases** under **Pipelines**. If this is your first release pipeline, select **New Pipeline**, otherwise select **Create a release**.

1. Select **Start with an empty job** when prompted to select a template.

1. Select **Add an artifact** and specify the project, the build pipeline, and the default version. Select **Add** when you are done.

    :::image type="content" source="media/add-artifact.png" alt-text="Add build artifact to release pipeline":::

1. Select the **Continuous deployment trigger** icon and enable the **Continuous deployment trigger** to create a release every time a new build is available.

    :::image type="content" source="media/deploy-multiple-branches/ci-trigger.png" alt-text="Enable continuous deployment trigger":::

1. Under **Stages**, select the stage and rename it to **Dev**. This stage will be triggered when a build artifact is published from the dev branch.

    :::image type="content" source="media/dev-stage.png" alt-text="Configure Dev stage":::

1. Select the **Pre-deployment conditions** icon in the _Dev_ stage and set the deployment trigger to **After release** to trigger a deployment to this stage every time a new release is created.

    :::image type="content" source="media/predeployment-trigger.png" alt-text="Set pre-deployment trigger to after release":::

1. Enable the **Artifact filters**. Select Add and specify your artifact and build branch.

    :::image type="content" source="media/deploy-multiple-branches/artifact-filter1.png" alt-text="Enable Artifact filters":::  

1. Under **Stage**, select **Add** then **New stage** to add a new stage. Select **Start with an empty job** when prompted to select a template, and rename the stage to **Prod**. This stage will be triggered when a build artifact is published from the main branch. Repeat the steps 6-8 and replace the **Build branch** for this stage to main.

    :::image type="content" source="media/deploy-multiple-branches/artifact-filter2.png" alt-text="Set up Prod with the main branch":::  

1. Add to each stage all the relevant deployment tasks to your environment.

Now the next time you have a successful build, the pipeline will detect which branch triggered that build and trigger deployment to the appropriate stage only.

:::image type="content" source="media/deploy-multiple-branches/after-release.png" alt-text="Deployment status":::  

## Related articles

- [Release triggers](triggers.md)
- [Build Artifacts](../artifacts/build-artifacts.md)
- [Release artifacts and artifact sources](../release/artifacts.md)
- [Publish and download artifacts](../artifacts/pipeline-artifacts.md)
