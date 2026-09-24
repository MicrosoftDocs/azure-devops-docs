---
title: Create a multi-stage Classic release pipeline
description: Learn how to create a multi-stage Classic release pipeline for your ASP.NET Core app using Azure Pipelines.
ms.topic: tutorial
ms.date: 07/02/2026
monikerRange: '<= azure-devops'
---

# Create a multi-stage Classic release pipeline

[!INCLUDE [version-lt-eq-azure-devops](../../includes/version-lt-eq-azure-devops.md)]

Azure Pipelines enables developers to deploy their applications across multiple environments by using either YAML or Classic pipelines. This tutorial walks you through creating a multi-stage Classic release pipeline for your ASP.NET Core web app, including how to set up continuous deployment triggers, add stages, configure pre-deployment approvals, and create and monitor releases.

## Prerequisites

| **Product**        | **Requirements**  |
|--------------------|-------------------|
| **Azure DevOps**   | - An [Azure DevOps organization](../../organizations/accounts/create-organization.md).<br> - An [Azure DevOps project](../../organizations/projects/create-project.md).<br> - A Classic release pipeline that contains at least one stage. If you don't already have one, [Create a Classic release](releases.md).<br> - **Permissions:**<br>   &nbsp;&nbsp;&nbsp;&nbsp;- To grant access to all pipelines in the project, you must be a member of the [Project Administrators group](../../organizations/security/change-project-level-permissions.md). |

## Set up continuous deployment triggers

When you enable the continuous deployment trigger, it automatically creates a new release whenever a new pipeline artifact becomes available.

1. Sign in to Azure DevOps, and then go to your project.

1. Select **Azure Pipelines** > **Releases**, select your release pipeline, and then select **Edit**.

1. In the **Artifacts** section, select the **Continuous deployment trigger** icon to open the trigger panel, and then turn it on.

1. Under the first stage, select the **Pre-deployment conditions** icon, and then verify that the deployment trigger is set to **After release**. This setting automatically triggers deployment to the stage whenever a new release is created.

## Add stages

Add stages to model each environment in your release process and control when deployments move from one stage to the next.

1. Sign in to Azure DevOps, and then go to your project.

1. Select **Azure Pipelines** > **Releases**, select your release pipeline, and then select **Edit**.

1. Select **+ Add** > **New stage** to create a new stage.

1. In the new stage, select the **Pre-deployment conditions** icon. Set the trigger to **After stage**, and then select your original stage from the drop-down menu so this stage runs after the previous one completes.
 
    :::image type="content" source="media/define-multistage-release-process/change-trigger-prod.png" alt-text="A screenshot displaying how to set up pre-deployment conditions in a Classic release pipeline.":::
    
1. Open the **Tasks** drop-down menu, and then select the stage that you want to configure. Update the task settings for that stage so they deploy to the correct target environment. In this example, the **Deploy Azure App Service** task is configured to deploy to an Azure App Service, as shown in the following image.

    :::image type="content" source="media/define-multistage-release-process/change-target-environment.png" alt-text="A screenshot displaying how to set up stage tasks in a Classic release pipeline.":::

## Add Pre-deployment approvals

Use pre-deployment approvals to require a designated reviewer to approve a stage before the release can continue. This process helps you control promotion between environments and confirm that the stage is ready for deployment.

1. Sign in to Azure DevOps, and then go to your project.

1. Select **Azure Pipelines** > **Releases**, select your release pipeline, and then select **Edit**.

1. In **Stages**, select the **Pre-deployment conditions** icon for the stage where you want to require approval, and then turn on **Pre-deployment approvals**.

1. In the **Approvers** box, enter the users who should approve the deployment. If you want to allow the person who requested the release or deployment to approve it, clear **The user requesting a release or deployment should not approve it**.

1. Select **Save** to apply the approval settings.

    :::image type="content" source="media/define-multistage-release-process/select-approvers.png" alt-text="A screenshot displaying how to add pre-deployment approvers in a Classic release pipeline.":::

## Create a release

After you configure your stages and approvals, create a release to start the deployment flow. Although releases are often created automatically when a new build artifact becomes available, this example shows how to create one manually so you can review the configuration and monitor each stage as it runs.

1. Sign in to Azure DevOps, and then go to your project.

1. Select **Azure Pipelines** > **Releases**, select your release pipeline, and then select **Edit**.

1. Select the **Release** dropdown menu, and then select **Create release**.

1. Enter a description for the release, verify that the correct artifact versions are selected for the deployment, and then select **Create**.

1. When the release is created, a banner appears with a link to the new release. Select the link to open the release summary, where you can track the deployment status for each stage.

1. If you configured pre-deployment approvals, the assigned approvers receive an approval request before the deployment can continue to the next stage. To approve the deployment, they can add a brief comment and then select **Approve**.

    :::image type="content" source="media/define-multistage-release-process/approve-dialog.png" alt-text="A screenshot displaying how to approve deployment requests in a Classic release pipeline.":::

> [!NOTE]
> Release administrators can view and override approval decisions when needed, such as when an approver is unavailable or a deployment must proceed without delay.

## Monitor and track deployments

After the release starts, use the deployment logs to follow progress across stages, inspect individual tasks, and troubleshoot failures or unexpected behavior. The release summary gives you a stage-level view, and the logs provide the detailed task output that you need for validation and debugging.

1. In the release summary, hover over a stage, and then select **Logs**. You can also open the logs while the deployment is still running to watch the live output for each task.
   
1. Select a task to view its detailed logs. If you need to review the output offline or share it with others, you can download the log for an individual task or download a .zip file that contains all logs for the release.

1. If the standard logs don't provide enough detail, [run the release in debug mode](../../pipelines/release/variables.md#run-a-release-in-debug-mode) to capture additional diagnostic information.

    :::image type="content" source="media/define-multistage-release-process/download-logs.png" alt-text="A screenshot displaying deployment logs in a Classic release pipeline.":::
    
## Related content

- [Deploy pull request Artifacts with Classic release pipelines](deploy-pull-request-builds.md)

- [Deploy multiple branches to different stages](deploy-multiple-branches.md)

- [Control deployments with gates and approvals](deploy-using-approvals.md)
