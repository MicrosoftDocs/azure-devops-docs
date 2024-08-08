---
title: Deploy to different stages from multiple branches
description: Learn how to use Classic release pipelines to deploy to different stages from multiple branches.
ms.topic: tutorial
ms.date: 08/06/2024
monikerRange: '>= azure-devops-2019'
"recommendations": "true"
---

# Deploy to different stages from multiple branches using Classic release pipelines

[!INCLUDE [version-gt-eq-2019](../../includes/version-gt-eq-2019.md)]

Classic release pipelines provide a convenient graphical user interface for setting up a continuous delivery solution for your application. Classic releases can be configured to trigger deployments automatically whenever a new artifact is available. Artifact filters can be used with release triggers to deploy from multiple branches. By applying artifact filters to specific branches, you can control deployment to particular stages based on your needs.

In this article, you'll learn how to: 

> [!div class="checklist"]  
> * Enable continuous deployment triggers.
> * Release from multiple branches.
> * Deploy to multiple stages.

## Prerequisites

- An Azure DevOps organization and a project. Create an [organization](../../organizations/accounts/create-organization.md) or a [project](../../organizations/projects/create-project.md#create-a-project) if you haven't already.

- A working pipeline set up for your repository to build your project and generate a pipeline artifact. [Create your first pipeline](../create-first-pipeline.md) if you don't have one already.

## Create a release pipeline

1. Sign in to your Azure DevOps organization, and then navigate to your project.

1. Select **Pipelines** > **Releases**. If this is your first release pipeline, select **New Pipeline**, otherwise select **New** > **New release pipeline**.

1. When prompted to select a template, select **Start with an empty job**.

1. Under **Stages**, select the stage and rename it to **Dev**. The following steps walks through configuring this stage to be triggered when an artifact is published from the *Dev* branch.

    :::image type="content" source="media/dev-stage.png" alt-text="A screenshot displaying how to rename a stage in a Classic release pipeline.":::

1. Under **Artifacts**, select **Add** to add an artifact. Specify your **Source type** and fill out the required fields (these vary based on the selected source type). Select **Add** when you're done.

    :::image type="content" source="media/add-artifact.png" alt-text="A screenshot that shows how to add an artifact to a Classic release pipeline.":::

1. Select the **Continuous deployment trigger** icon, and then enable the **Continuous deployment trigger** to create a release whenever a new artifact is available.

    :::image type="content" source="media/enable-continuous-deployment-trigger.png" alt-text="A screenshot displaying how to enable the continuous deployment trigger.":::

1. In the Dev stage, select the **Pre-deployment conditions** icon and set the deployment trigger to **After release**. This will trigger a deployment to this stage whenever a new release is created.

    :::image type="content" source="media/predeployment-trigger.png" alt-text="A screenshot that shows how to configure the pre-deployment conditions.":::

1. while still in **Pre-deployment conditions**, enable **Artifact filters**, select **Add**, and then specify the artifact you selected earlier and the **Build branch**.

    :::image type="content" source="media/predeployment-conditions-artifact-filters.png" alt-text="A screenshot displaying how to set up the Artifact filters in Pre-deployment conditions.":::




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
