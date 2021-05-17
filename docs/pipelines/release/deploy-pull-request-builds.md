---
title: Deploy pull request Artifacts
description: Deploy pull request Artifacts from Azure Repos or GitHub repository
ms.topic: tutorial
ms.author: moala
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

1. A GitHub/Azure repos repository to create the pipeline. If you don't have one, use the [pipelines-dotnet-core](https://github.com/MicrosoftDocs/pipelines-dotnet-core) sample app.
1. A working build for your repository.
1. A classic release pipeline. [Set up a release pipeline](https://docs.microsoft.com/en-us/azure/devops/pipelines/release/deploy-multiple-branches?view=azure-devops#set-up-a-release-pipeline) for your project if you don't already have one.

## Create a pull request trigger

Pull request trigger creates a release every time a new version of your selected Artifact is available. You can set up PR triggers for both Azure Repos or GitHub repositories.

1. Under **Artifacts** select the **Continuous deployment trigger** icon.

   > [!div class="mx-imgBorder"]
   > ![Continuous deployment trigger](media/deploy-pull-request-builds/artifact-pr-trigger.png)

2. Select the pull request trigger toggle and set it to **Enabled**.

   > [!div class="mx-imgBorder"]  
   > ![Pull Request trigger toggle](media/deploy-pull-request-builds/pull-request-trigger-enabled.png)

3. Set up one or more target branches. Target branches are the branches for which the pull request is raised. When a pull request is created for one of these branches, it triggers a build, and when the build succeeds, it triggers the PR release. You can optionally specify build tags as well.

   > [!div class="mx-imgBorder"]
   > ![Target branch filters](media/deploy-pull-request-builds/pull-request-trigger-target-branch.png)

4. To deploy to a specific stage you need to explicitly opt-in that stage. The **Stages** section shows the stages that are enabled for pull request deployments.

   > [!div class="mx-imgBorder"]
   > ![Stages enabled for pull request deployments](media/deploy-pull-request-builds/pull-request-trigger-stage.png)

   To opt-in a stage for PR deployment, select the **Pre-deployment conditions** icon for that specific stage and under the **Triggers** section, select **Pull request deployment** to set it to **Enabled**. 

   > [!div class="mx-imgBorder"]
   > ![Pull request deployment toggle button](media/deploy-pull-request-builds/deploy-to-dev-stage.png)

> [!IMPORTANT]
> For critical stages like production, **Pull request deployment** should not be turned on.

## Set up branch policy for Azure Repos

You can use branch policies to implement a list of criteria that must be met for a PR to be merged.

1. Under **Repos** select **Branches** to access the list of branches for your repository.

   > [!div class="mx-imgBorder"]
   > ![Branches in Azure repos](../../repos/git/media/branches/branches_nav-new-nav.png)

2. Select the the context menu `...` for your appropriate branch and select **Branch policies**.

   > [!div class="mx-imgBorder"]
   > ![Branch policies for main branch](media/deploy-pull-request-builds/branch-policies-menu.png)

3. Select **Add status policy** and select a status policy from the **status to check** dropdown menu. The dropdown contains a list of recent statuses. The release definition should have run at least once with the PR trigger switched on in order to get the status. Select the status corresponding to your release definition and save the policy.

   > [!div class="mx-imgBorder"]
   > ![Add status policy](media/deploy-pull-request-builds/add-status-policy.png)

   You can further customize the policy for this status, like making the policy required or optional. For more information, see [Configure a branch policy for an external service](../../repos/git/pr-status-policy.md).

4. You should now be able to see your new status policy in the list. Users won't be able to merge any changes to the target branch until "succeeded" status is posted to the pull request.
   > [!div class="mx-imgBorder"]
   > ![Status policy list](media/deploy-pull-request-builds/status-policies.png)

5. You can view the status of your policies in the pull request Overview page. Depending on your policy settings, you can view the posted release status under the **Required**, **Optional**, or **Status** sections. The release status gets updated every time the pipeline is triggered.
   
   > [!div class="mx-imgBorder"]
   > ![Pull request policies status](media/deploy-pull-request-builds/pull-request-policy-status.png)

## Set up status checks for GitHub repositories

Enabling status checks for a GitHub repository allow an administrator to choose which status checks must pass before a pull request is merged into the target branch. Follow the [GitHub how-to guide](https://docs.github.com/free-pro-team@latest/github/administering-a-repository/enabling-required-status-checks) to enable status checks for your GitHub repository. The status checks will appear in your PRs only after your release pipeline is run at least once with the **Pull request deployment** condition set to **Enabled**.

   > [!div class="mx-imgBorder"]
   > ![Status checks GitHub](media/deploy-pull-request-builds/github-branch-protection-rule.png)

You can view your status checks in your pull request under the **Conversation** tab.
   
   > [!div class="mx-imgBorder"]
   > ![Pull request status checks](media/deploy-pull-request-builds/github-pr-status-check.png)

## Related articles

- [Release triggers](triggers.md)
- [Supported build source repositories](../repos/index.md)

## Additional resources 
- [Azure Repos](../../repos/git/index.yml)
- [Branch policies](../../repos/git/branch-policies-overview.md)
- [Configure branch policy for an external service](../../repos/git/pr-status-policy.md)
