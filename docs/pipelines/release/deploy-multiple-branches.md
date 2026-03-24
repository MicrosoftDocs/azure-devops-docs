---
title: Deploy multiple branches to different stages
description: Learn how to use Classic release pipelines to deploy from multiple branches to different stages.
ms.topic: tutorial
ms.date: 03/23/2026
monikerRange: "<=azure-devops"
"recommendations": "true"
---

# Deploy multiple branches to different stages with Classic release pipelines

[!INCLUDE [version-lt-eq-azure-devops](../../includes/version-lt-eq-azure-devops.md)]

Classic release pipelines provide a graphical way to set up continuous delivery for your application. You can configure a release to trigger automatically when a new artifact is available, and then use artifact filters to map specific branches to specific stages. This approach lets you deploy each branch to the stage you intend. This article walks you through how to configure a Classic release pipeline that deploys to different stages based on the source branch.

## Prerequisites

| **Product**        | **Requirements**  |
|--------------------|-------------------|
| **Azure DevOps**   | - An [Azure DevOps organization](../../organizations/accounts/create-organization.md).<br> - An [Azure DevOps project](../../organizations/projects/create-project.md).<br> - A working pipeline set up for your repository to build your project and generate a pipeline artifact. [Create a Classic pipeline](create-classic-pipelines.md) if you don't have one already. |

## Create a Classic release pipeline

In this section, you create the base Classic release pipeline and configure the first stage (**Dev**). You add an artifact source, enable automatic release creation, and apply an artifact filter so this stage runs only when the build comes from the *Dev* branch.

1. Sign in to your Azure DevOps organization, and then navigate to your project.

1. Select **Pipelines** > **Releases**.

1. Create a new Classic release pipeline:

    - If this is your first release pipeline, select **New Pipeline**.
    - If you already have release pipelines, select **New** > **New release pipeline**.

1. In the template picker, select **Start with an empty job**.

1. Under **Stages**, select the default stage and rename it to **Dev**. In the next steps, you configure this stage to deploy only when an artifact is produced from the *Dev* branch.

1. Under **Artifacts**, select **Add**.

1. Configure the artifact source:

    - Select your **Source type**.
    - Complete the required fields for that source type, such as project, pipeline, and default version.
    - Select **Add**.

1. Select the **Continuous deployment trigger** icon on the artifact, and then turn on **Continuous deployment trigger** to create a release whenever a new artifact is available.

1. In the **Dev** stage, select the **Pre-deployment conditions** icon.

1. Set **Deployment trigger** to **After release** so the stage starts automatically whenever a new release is created.

1. Still in **Pre-deployment conditions**, configure branch-based filtering:

    - Turn on **Artifact filters**.
    - Select **Add**.
    - Select the artifact you added earlier.
    - Set **Build branch** to *Dev*.

    With this filter in place, the **Dev** stage deploys only when the release is created from a build of the *Dev* branch.

## Add a new stage

1. Sign in to your Azure DevOps organization, and then navigate to your project.

1. Select **Pipelines** > **Releases**, select your release pipeline, and then select **Edit**.

1. Under **Stages**, select **Add** > **New stage** to add a new stage.
 
1. Select **Start with an empty job** when prompted to select a template. 

1. Select your new stage and rename it to **Prod**. The following steps show how to configure this stage to trigger when an artifact is published from the *main* branch.

1. Select your *Prod* stage, select the **Pre-deployment conditions** icon, and set the deployment trigger to **After release**. This ensures deployment to this stage whenever a new release is created.

1. Select the toggle button to enable **Artifact filters**. Select **Add**, and then specify the artifact you selected earlier and set the **Build branch** to *main*.

    :::image type="content" source="media/predeployment-conditions-prod.png" alt-text="A screenshot displaying how to configure predeployment conditions for the Prod stage.":::  

## Deploy to a specific stage

Now that you've set up your stages, every time a new artifact is available, the release pipeline will detect which branch triggered the build and deploy only to the appropriate stage.

:::image type="content" source="media/deploy-to-specific-stage.png" alt-text="A screenshot displaying deployment to a specific stage.":::  

## Related articles

- [Artifact sources](artifacts.md)
- [Release triggers](triggers.md)
- [Deploy pull request Artifacts](deploy-pull-request-builds.md)
