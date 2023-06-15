---
title: Deploy pull request Artifacts
description: Deploy pull request Artifacts from Azure Repos or GitHub repositories
ms.topic: tutorial
ms.author: moala
ms.custom: contperf-fy21q4, engagement-fy23
author: raiyanalam
ms.date: 02/14/2023
monikerRange: '>= azure-devops-2019'
---

# Deploy pull request Artifacts with classic release pipelines

[!INCLUDE [version-gt-eq-2019](../../includes/version-gt-eq-2019.md)]

Pull requests provide an effective way to review code changes before it is merged into the codebase. However, these changes can introduce issues that can be tricky to find without building and deploying your application to a specific environment. Pull request triggers enable you to set up a set of criteria that must be met before deploying your code. In this article, you will learn how to set up pull request triggers with Azure Repos and GitHub to deploy your build artifact.

## Prerequisites

- Source code hosted on Azure Repos or GitHub. Use the [pipelines-dotnet-core](https://github.com/MicrosoftDocs/pipelines-dotnet-core) sample app and create your repository if you don't have one already.
- A working [build pipeline](../create-first-pipeline.md) for your repository.
- A classic release pipeline. [Set up a release pipeline](./deploy-multiple-branches.md#set-up-a-release-pipeline) if you don't have one already.

## Pull request deployment

With pull request triggers, anytime you raise a new pull request for the designated branch, a release is triggered automatically to start the deployment to the designated environments. The deployment status will then be displayed on the pull request page. Pull request triggers can help you maintain better code quality, release with higher confidence, and discover any issues early on in the development cycle.

Setting up pull request deployments is a two step process, first we must set up a pull request trigger and then set up branch policies (Azure Repos) or status checks (GitHub) for our release pipelines.

### Create a pull request trigger

A pull request trigger creates a release every time a new build Artifact is available.

1. Navigate to your Azure DevOps project, select **Pipelines** > **Releases** and then select your release pipeline.

1. Select the **Continuous deployment trigger** icon in the **Artifacts** section.

    :::image type="content" source="media/deploy-pull-request-builds/artifact-pr-trigger.png" alt-text="A screenshot showing how to access the continuous deployment trigger settings.":::

1. Select the toggle button to enable the **Pull request trigger**.

    :::image type="content" source="media/deploy-pull-request-builds/pull-request-trigger-enabled.png" alt-text="A screenshot showing how to enable pull request triggers.":::

1. Select your **Target Branch** from the dropdown menu.

    :::image type="content" source="media/deploy-pull-request-builds/pull-request-trigger-target-branch.png" alt-text="A screenshot showing how to select the target branch.":::

1. To deploy your application to a specific stage you need to explicitly opt in that stage. The **Stages** section shows the stages that are enabled for pull request deployments.

    :::image type="content" source="media/deploy-pull-request-builds/pull-request-trigger-stage.png" alt-text="A screenshot showing the list of stages that are enabled for pull request deployments.":::

   To opt-in a stage for pull request deployment, select the **Pre-deployment conditions** icon for your specific stage, and then select **Triggers** > **After release**. Finally select the **Pull request deployment** toggle button to enable it. 

    :::image type="content" source="media/deploy-pull-request-builds/deploy-to-dev-stage.png" alt-text="A screenshot showing how to enable pull request deployment for a specific stage.":::

> [!IMPORTANT]
> Enabling automatic pull request deployments for production stages is not recommended.

### Set up branch policies for Azure Repos

You can use branch policies to implement a list of criteria that must be met for a pull request to be merged.

1. Navigate to your project, and then select **Repos** > **Branches** to access the list of branches for your repository.

    :::image type="content" source="../../repos/git/media/branches/branches_nav-new-nav.png" alt-text="A screenshot showing how to navigate to branches in Azure Repos.":::

1. Select the context menu for your appropriate branch `...`, then select **Branch policies**.

    :::image type="content" source="media/deploy-pull-request-builds/branch-policies-menu.png" alt-text="A screenshot showing how to access branch policies for a specific branch.":::

1. Select **Add status policy**, then select a **Status to check** from the dropdown menu. Select the status corresponding to your release definition and then select **Save**.

    :::image type="content" source="media/deploy-pull-request-builds/add-status-policy.png" alt-text="A screenshot showing how to add a status policy.":::

   > [!NOTE]
   > The release definition should have run at least once with the pull request trigger enabled in order to get the list of statuses. See [Configure a branch policy for an external service](../../repos/git/pr-status-policy.md) for more details.

1. With the new status policy added, users won't be able to merge any changes to the target branch without a "succeeded" status is posted to the pull request.

    :::image type="content" source="media/deploy-pull-request-builds/status-policies.png" alt-text="A screenshot showing a list of status policies and the pull request deployment policy enabled.":::

1. You can view the status of your policies from the pull request Overview page. Depending on your policy settings, you can view the posted release status under the **Required**, **Optional**, or **Status** sections. The release status gets updated every time the pipeline is triggered.
   
    :::image type="content" source="media/deploy-pull-request-builds/pull-request-policy-status.png" alt-text="A screenshot showing the pull request policies status.":::

### Set up status checks for GitHub repositories

Enabling status checks for a GitHub repository allow an administrator to choose which criteria must be met before a pull request is merged into the target branch. 

> [!NOTE]
> The status checks will be posted on your pull request only after your release pipeline has run at least once with the pull request deployment condition Enabled. See [Branch protection rules](https://docs.github.com/free-pro-team@latest/github/administering-a-repository/enabling-required-status-checks) for more details.

:::image type="content" source="media/deploy-pull-request-builds/github-branch-protection-rule.png" alt-text="A screenshot showing how to enable status checks.":::

You can view your status checks in your pull request under the **Conversation** tab.
   
:::image type="content" source="media/deploy-pull-request-builds/github-pr-status-check.png" alt-text="A screenshot showing the pull request status checks.":::

## Related articles

- [Release triggers](triggers.md)
- [Deploy from multiple branches](deploy-multiple-branches.md)
- [Supported source repositories](../repos/index.md)
