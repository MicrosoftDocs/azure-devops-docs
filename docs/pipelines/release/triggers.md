---
title: Classic release triggers
description: Learn the different types of release triggers and how to use them in your release pipelines.
ms.assetid: FDB5DA41-1ADA-485E-86BD-8BF147788568
ms.topic: tutorial
ms.author: ronai
author: RoopeshNair
ms.date: 10/28/2024
monikerRange: '<= azure-devops'
---

# Classic release triggers

[!INCLUDE [version-lt-eq-azure-devops](../../includes/version-lt-eq-azure-devops.md)]

Release triggers are an automation tool that can be used in your deployment workflow to initiate actions when specific conditions are met. after certain conditions are met. Classic release pipelines support several types of triggers, which we'll cover in this article:

- [Continuous deployment triggers](#continuous-deployment-triggers)

- [Scheduled release triggers](#scheduled-release-triggers)

- [Pull request release triggers](#pull-request-triggers)

- [Stage triggers](#stage-triggers)

## Continuous deployment triggers

Continuous deployment triggers enable you to automatically create a release whenever a new artifact becomes available. By Using the build branch filters you can trigger deployment for a specific target branch. A release is triggered only for pipeline artifacts originating from one of the selected branches. 

For example, selecting *main* will trigger a release every time a new artifact becomes available from the main branch. To trigger a release for any build under 'features/', enter 'features/*'. To trigger a release for all builds, use '*'. Note that all specified filters will be OR'ed meaning any artifact matching at least one filter condition will trigger a release.

1. Sign in to your Azure DevOps organization, and then navigate to your project.

1. Select **Pipelines** > **Releases**.

1. Select your release definition, and then select **Edit**.

1. Select the **Continuous deployment triggers** icon, and then select the toggle button to enable the **Continuous deployment trigger**, then add your **Build branch filters**.

    :::image type="content" source="media/trigger-01.png" alt-text="A screenshot displaying how to configure the continuous deployment trigger in a release pipeline.":::

## Scheduled release triggers

Scheduled release triggers allow you to create new releases at specific times.

1. Sign in to your Azure DevOps organization, and then navigate to your project.

1. Select **Pipelines** > **Releases**.

1. Select your release definition, and then select **Edit**.

1. Under the **Artifacts** section, select the **Schedule set** icon, select the toggle button to enable the **Scheduled release trigger**, and then specify your release schedule. You can set up multiple schedules to trigger releases.

    :::image type="content" source="media/trigger-04.png" alt-text="A screenshot displaying how to configure the Scheduled release triggers in a release pipeline.":::

## Pull request triggers

If you chose to enable the pull-request triggers, a release will be triggered whenever a new version of the selected artifact is created by the pull request pipeline workflow. To use a pull request trigger, you must also enable it for specific stages (covered in the next section). You may also want to set up a [branch policies](../../repos/git/pr-status-policy.md) for your branches.

1. Sign in to your Azure DevOps organization, and then navigate to your project.

1. Select **Pipelines** > **Releases**.

1. Select your release definition, and then select **Edit**.

1. Select the **Continuous deployment triggers** icon, and then select the toggle button to enable the **Pull request trigger**, then add your **Target Branch Filters**.

    :::image type="content" source="media/trigger-01a.png" alt-text="A screenshot displaying how to configure pull request triggers in a release pipeline.":::

You can also use **Build tags** to organize your workflow and tag specific runs. In the example below, a release is triggered every time a new artifact version is created as part of a pull request to the *main* branch with the tags *Migration* and *Deployment*.

:::image type="content" source="media/build-tags-example.png" alt-text="A screenshot showing how to set up a pull request trigger with build tags.":::

## Stage triggers

Stage triggers allow you set up specific conditions to trigger deployment to a specific stage.

1. Sign in to your Azure DevOps organization, and then navigate to your project.

1. Select **Pipelines** > **Releases**.

1. Select your release definition, and then select **Edit**.

1. Under the **Stages** section, select the **Pre-deployment conditions** icon, and set up your triggers.

    :::image type="content" source="media/release-triggers-to-stages.png" alt-text="A screenshot showing stage triggers in a release pipeline.":::

- **Select trigger**: choose the trigger to start deployment to this stage automatically. Select "After release" to deploy to this stage each time a new release is created. Select "After stage" to deploy after successful deployments to selected stages. Select "Manual only" to allow only manual deployments.

- **Artifacts filter**: specify artifact condition(s) that must be met to trigger a deployment. A release will be deployed to this stage only if all artifact conditions match.

- **Schedule**: set a specified time to trigger a deployment to this stage.

- **Pull-request deployment**: allow pull request-triggered releases to deploy to this stage. We recommend keeping this option disabled for critical or production stages.

## Related content

- [Deploy pull request Artifacts](deploy-pull-request-builds.md)

- [Deploy to different stages from multiple branches](deploy-multiple-branches.md)

- [Publish and download pipeline artifacts](../artifacts/pipeline-artifacts.md)





