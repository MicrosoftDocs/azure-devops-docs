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

    :::image type="content" source="media/rename-stage-classic-release.png" alt-text="A screenshot displaying how to rename a stage in a Classic release pipeline.":::

1. Under **Artifacts**, select **Add**.

1. Configure the artifact source:

    - Select your **Source type**.
    - Complete the required fields for that source type, such as project, pipeline, and default version.
    - Select **Add**.

    :::image type="content" source="media/add-artifact-to-classic-release.png" alt-text="A screenshot that shows how to add an artifact to a Classic release pipeline.":::

1. Select the **Continuous deployment trigger** icon on the artifact, and then turn on **Continuous deployment trigger** to create a release whenever a new artifact is available.

    :::image type="content" source="media/enable-continuous-deployment-trigger.png" alt-text="A screenshot displaying how to enable the continuous deployment trigger in a Classic release pipeline.":::

1. In the **Dev** stage, select the **Pre-deployment conditions** icon.

1. Set **Deployment trigger** to **After release** so the stage starts automatically whenever a new release is created.

1. Still in **Pre-deployment conditions**, configure branch-based filtering:

    - Turn on **Artifact filters**.
    - Select **Add**.
    - Select the artifact you added earlier.
    - Set **Build branch** to *Dev*.

    With this filter in place, the **Dev** stage deploys only when the release is created from a build of the *Dev* branch.

    :::image type="content" source="media/configure-deployment-conditions-development-stage.png" alt-text="A screenshot displaying how to set up the pre-deployment conditions in a Classic release pipeline.":::


## Add a new stage

In this section, you add a second stage (**Prod**) to the same release pipeline and configure it to deploy only when artifacts are built from the *main* branch. This lets you keep branch-to-stage routing consistent across environments.

1. Sign in to your Azure DevOps organization, and then navigate to your project.

1. Select **Pipelines** > **Releases**, open the release pipeline you created earlier, and then select **Edit**.

1. Under **Stages**, select **Add** > **New stage**.
 
1. In the template picker, select **Start with an empty job**.

1. Select the new stage and rename it to **Prod**. In the next steps, you configure this stage so it deploys only when the artifact comes from the *main* branch.

1. In the **Prod** stage, select the **Pre-deployment conditions** icon.

1. Set **Deployment trigger** to **After release** so this stage can start automatically when a new release is created.

1. Still in **Pre-deployment conditions**, configure branch-based filtering for production:

    - Turn on **Artifact filters**.
    - Select **Add**.
    - Select the same artifact source you configured earlier.
    - Set **Build branch** to *main*.

    With this filter in place, the **Prod** stage deploys only when the release is created from a build of the *main* branch.

    :::image type="content" source="media/configure-deployment-conditions-production-stage.png" alt-text="A screenshot displaying how to configure pre-deployment conditions for the production stage in a Classic release pipeline.":::  

## Deploy to a specific stage

At this point, your release pipeline is configured to route deployments by branch: artifacts from the *Dev* branch deploy to the **Dev** stage, and artifacts from the *main* branch deploy to the **Prod** stage. Use the following checks to validate that the branch filters are working as expected.

1. Trigger a build from the *Dev* branch so a new artifact version is published.

1. Open **Pipelines** > **Releases**, and then open the newly created release.

1. Verify that the **Dev** stage starts (or is queued), and that the **Prod** stage is skipped because the artifact branch doesn't match its filter.

1. Trigger a second build from the *main* branch.

1. Open the new release and verify the opposite behavior: the **Prod** stage starts, and the **Dev** stage is skipped.

1. If a stage doesn't behave as expected, open that stage's **Pre-deployment conditions** and confirm the **Artifact filters** branch value and selected artifact source.

By validating both branch paths, you can confirm that each environment deploys only from the branch intended for that stage.

## Related content

- [Create a multi-stage release pipeline](define-multistage-release-process.md)

- [Use variables in Classic release pipelines](variables.md)

- [Deploy pull request Artifacts](deploy-pull-request-builds.md)
