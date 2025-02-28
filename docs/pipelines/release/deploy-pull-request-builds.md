---
title: Deploy pull request Artifacts with Classic release pipelines
description: Learn how to deploy pull request Artifacts from Azure Repos or GitHub repositories using Classic release pipelines.
ms.topic: tutorial
ms.author: moala
ms.custom: engagement-fy23
author: raiyanalam
ms.date: 02/28/2025
monikerRange: '>= azure-devops-2019'
---

# Deploy pull request Artifacts with classic release pipelines

[!INCLUDE [version-gt-eq-2019](../../includes/version-gt-eq-2019.md)]

Pull requests provide an effective way to review code changes before merging them into the codebase. However, these changes can introduce issues that can be tricky to find without building and deploying the application to a specific environment. Pull request triggers enable you to define a set of criteria that must be met before deployment. This article explains how to set up pull request triggers with Azure Repos and GitHub repositories to deploy pipeline artifacts using Classic release pipelines.

## Prerequisites

| **Product**        | **Requirements**    |
|--------------------|---------------------|
| **Azure DevOps**   | - An [Azure DevOps project](../../organizations/projects/create-project.md).<br> - Source code hosted on Azure Repos or GitHub. If you don’t have a repository, you can use the [pipelines-dotnet-core](https://github.com/MicrosoftDocs/pipelines-dotnet-core) sample app to create one.<br> - A working [pipeline](../create-first-pipeline.md) for your repository.<br> - A Classic release pipeline. If you don't have one, [set up a Classic release pipeline](./deploy-multiple-branches.md#create-a-release-pipeline). |

## Pull request deployments

Pull request triggers can help you maintain better code quality, release with higher confidence, and discover any issues early on in the development cycle.

Setting up pull request deployments is a two step process, first we must set up a pull request trigger and then set up branch policies (Azure Repos) or status checks (GitHub) for our release pipelines.

## 1. Enable pull request triggers

When pull request triggers are enabled, a new release is created whenever a new artifact becomes available in a pull request workflow:

1. Sign in to your Azure DevOps organization, and then navigate to your project.

1. Select **Pipelines** > **Releases** and then select your release pipeline definition.

1. In the **Artifacts** section, select the **Continuous deployment trigger** icon.

    :::image type="content" source="media/deploy-pull-request-builds/artifact-pr-trigger.png" alt-text="A screenshot displaying how to access the continuous deployment trigger settings in Classic release pipelines.":::

1. Toggle the **Pull request trigger** setting to enable it.

    :::image type="content" source="media/deploy-pull-request-builds/pull-request-trigger-enabled.png" alt-text="A screenshot displaying how to enable pull request triggers in Classic release pipelines.":::

1. Select your **Target Branch** from the dropdown menu.

    :::image type="content" source="media/deploy-pull-request-builds/pull-request-trigger-target-branch.png" alt-text="A screenshot displaying how to select your target branch.":::

1. To deploy your application to a specific stage, explicitly opt in for that stage. The **Stages** section lists the stages enabled for pull request deployments.

    :::image type="content" source="media/deploy-pull-request-builds/pull-request-trigger-stage.png" alt-text="A screenshot displaying the list of stages that are enabled for pull request deployments.":::

   To enable pull request deployment for a stage:
   - Select the **Pre-deployment conditions** icon for the stage.
   - Navigate to **Triggers** > **After release**.
   - Toggle the **Pull request deployment** setting to enable it. 

    :::image type="content" source="media/deploy-pull-request-builds/deploy-to-dev-stage.png" alt-text="A screenshot displaying how to enable pull request deployment for a specific stage.":::

> [!IMPORTANT]
> Enabling automatic pull request deployments for production stages is not recommended.

## 2. Set up branch policies

### [Azure Repos](#tab/repos)

You can use branch policies to implement a list of criteria that must be met before a pull request can be merged.

1. Sign in to your Azure DevOps organization, and then navigate to your project.

1. Select **Repos** > **Branches** to access the list of branches for your repository.

    :::image type="content" source="../../repos/git/media/branches/branches_nav-new-nav.png" alt-text="A screenshot displaying how to navigate to branches in Azure Repos.":::

1. Select the context menu for your appropriate branch `...`, then select **Branch policies**.

    :::image type="content" source="media/deploy-pull-request-builds/branch-policies-menu.png" alt-text="A screenshot displaying how to access branch policies for a specific branch.":::

1. Select **Add status policy**, then select a **Status to check** from the dropdown menu. Select the status corresponding to your release definition and then select **Save**.

    :::image type="content" source="media/deploy-pull-request-builds/add-status-policy.png" alt-text="A screenshot displaying how to add a status policy.":::

   > [!Important]
   > The release definition must have run at least once with the pull request trigger enabled to see the list of statuses. See [Configure a branch policy for an external service](../../repos/git/pr-status-policy.md) for more details.

1. Once the status policy is added, users won't be able to merge changes to the target branch unless the pull request has a `succeeded` status.

    :::image type="content" source="media/deploy-pull-request-builds/status-policies.png" alt-text="A screenshot displaying a list of status policies and the pull request deployment policy enabled.":::

1. You can check the status of your policies on the pull request Overview page. Depending on your settings, the release status will be displayed under **Required**, **Optional**, or **Status** sections. The status updates each time the pipeline is triggered.
   
    :::image type="content" source="media/deploy-pull-request-builds/pull-request-policy-status.png" alt-text="A screenshot displaying the pull request policies status.":::

### [GitHub](#tab/github)

Enabling status checks for a GitHub repository allows administrators to specify the criteria that must be met before a pull request can be merged into the target branch. 

1. Navigate to the main page of your repository on GitHub.

1. Under your repository name, select **Settings**.

1. Select **Branches**, and then select **Add classic branch protection rule**.

1. Check the box for **Require status checks to pass before merging**, then select the status corresponding to your release definition.

    :::image type="content" source="media/deploy-pull-request-builds/github-branch-protection-rule.png" alt-text="A screenshot displaying how to enable status checks.":::

> [!IMPORTANT]
> Status checks will only appear on your pull request after the release pipeline has run at least once with the pull request deployment condition enabled. . See [Branch protection rules](https://docs.github.com/free-pro-team@latest/github/administering-a-repository/enabling-required-status-checks) for more details.

1. You can view your status checks on the pull request overview page under the **Conversation** tab.
   
    :::image type="content" source="media/deploy-pull-request-builds/github-pr-status-check.png" alt-text="A screenshot displaying the pull request status checks.":::

---

## Related content

- [Release triggers (Classic)](triggers.md)

- [Deploy from multiple branches](deploy-multiple-branches.md)

- [Create a multi-stage release pipeline (Classic)](define-multistage-release-process.md)
