---
title: Deploy pull request Artifacts
description: Deploy pull request Artifacts from Azure Repos or GitHub repository
ms.topic: tutorial
ms.author: moala
ms.custom: contperf-fy21q4
author: raiyanalam
ms.date: 10/16/2020
monikerRange: '>= azure-devops-2019'
---

# Deploy pull request Artifacts with classic release pipelines

**Azure DevOps Services | Azure DevOps Server 2020 | Azure DevOps Server 2019**

Pull requests provide an effective way to review code changes before it is merged into the codebase. However, these changes can introduce issues that can be tricky to find without building and deploying your application to a specific environment. Pull request triggers enable you to set up a set of criteria that must be met before deploying your code. You can use pull request triggers with code hosted on Azure Repos or GitHub.

Setting up pull request deployments is a two step process:

1. Set up a pull request trigger.
2. Set up branch policies (in Azure Repos) or status checks (in GitHub) for your release pipeline.

With pull request triggers, anytime you raise a new pull request for the designated branch, a release is triggered automatically to start the deployment to the designated environments. The deployment status will then be displayed on the pull request page. Pull request triggers can help you maintain better code quality, release with higher confidence, and discover any issues early on in the development cycle.

## Prerequisites

- A GitHub/Azure repos repository to create the pipeline. If you don't have one, use the [pipelines-dotnet-core](https://github.com/MicrosoftDocs/pipelines-dotnet-core) sample app.
- A working build for your repository.
- A classic release pipeline. [Set up a release pipeline](/azure/devops/pipelines/release/deploy-multiple-branches#set-up-a-release-pipeline) for your project if you don't already have one.

## Create a pull request trigger

A pull request trigger creates a release every time a new build Artifact is available. You can set up pull request triggers for both Azure Repos or GitHub repositories.

1. From within your project, Select **Pipelines** > **Releases**, and then select your release pipeline.

1. Select the **Continuous deployment trigger** icon in the **Artifacts** section

    :::image type="content" source="media/deploy-pull-request-builds/artifact-pr-trigger.png" alt-text="Continuous deployment trigger":::

2. Under the **Pull request trigger** section, select the toggle button to enable it.

    :::image type="content" source="media/deploy-pull-request-builds/pull-request-trigger-enabled.png" alt-text="Pull Request trigger toggle":::

3. From the **Target Branch Filters**, select your **Target Branch** from the dropdown menu.

    :::image type="content" source="media/deploy-pull-request-builds/pull-request-trigger-target-branch.png" alt-text="Target branch filters":::

4. To deploy your application to a specific stage you need to explicitly opt-in that stage. The **Stages** section shows the stages that are enabled for pull request deployments.

    :::image type="content" source="media/deploy-pull-request-builds/pull-request-trigger-stage.png" alt-text="Stages enabled for pull request deployments":::

   To opt-in a stage for pull request deployment, select the **Pre-deployment conditions** icon for your specific stage, and then select **Triggers** > **After release**. Finally select the **Pull request deployment** toggle button to enable it. 

    :::image type="content" source="media/deploy-pull-request-builds/deploy-to-dev-stage.png" alt-text="After release - Pull request deployment":::

> [!IMPORTANT]
> Enabling automatic pull request deployments for production stages is not recommended.

## Set up branch policy for Azure Repos

You can use branch policies to implement a list of criteria that must be met for a pull request to be merged.

1. From within your project, select **Repos** > **Branches** to access the list of branches for your repository.

    :::image type="content" source="../../repos/git/media/branches/branches_nav-new-nav.png" alt-text="Branches in Azure repos":::

2. Select the the context menu for your appropriate branch `...`, then select **Branch policies**.

    :::image type="content" source="media/deploy-pull-request-builds/branch-policies-menu.png" alt-text="Branch policies for main branch":::

3. Select **Add status policy**, then select a **status to check** from the dropdown menu. The release definition should have run at least once with the pull request trigger switched on in order to get the status. Select the status corresponding to your release definition and then select **Save**.

    :::image type="content" source="media/deploy-pull-request-builds/add-status-policy.png" alt-text="Add status policy":::

   For more information on customizing your status policy, see [Configure a branch policy for an external service](../../repos/git/pr-status-policy.md).

4. With the new status policy added, users won't be able to merge any changes to the target branch without a "succeeded" status is posted to the pull request.

    :::image type="content" source="media/deploy-pull-request-builds/status-policies.png" alt-text="Status policy list":::

5. You can view the status of your policies from the pull request Overview page. Depending on your policy settings, you can view the posted release status under the **Required**, **Optional**, or **Status** sections. The release status gets updated every time the pipeline is triggered.
   
    :::image type="content" source="media/deploy-pull-request-builds/pull-request-policy-status.png" alt-text="Pull request policies status":::

## Set up status checks for GitHub repositories

Enabling status checks for a GitHub repository allow an administrator to choose which criteria must be met before a pull request is merged into the target branch. Check out the [Branch protection rule](https://docs.github.com/free-pro-team@latest/github/administering-a-repository/enabling-required-status-checks) GitHub article to learn how to enable status checks for your GitHub repository. The status checks will be posted on your pull request only after your release pipeline has run at least once with the pull request deployment condition Enabled.

:::image type="content" source="media/deploy-pull-request-builds/github-branch-protection-rule.png" alt-text="Status checks GitHub":::

You can view your status checks in your pull request under the **Conversation** tab.
   
:::image type="content" source="media/deploy-pull-request-builds/github-pr-status-check.png" alt-text="Pull request status checks":::

## Related articles

- [Release triggers](triggers.md)
- [Supported build source repositories](../repos/index.md)
- [Git branch policies](../../repos/git/branch-policies-overview.md)
- [Configure a branch policy for an external service](../../repos/git/pr-status-policy.md)
