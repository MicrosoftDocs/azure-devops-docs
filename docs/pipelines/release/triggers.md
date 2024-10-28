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

- **Select trigger**:
  Set the trigger that will start the deployment to your stage automatically. Use the **Stages** dropdown to trigger a release after a successful deployment to the selected stage. Select **Manual only** to only allow manual trigger.

    :::image type="content" source="media/trigger-02a.png" alt-text="A screenshot showing predeployment triggers.":::

- **Artifacts filter**:
  Enable the toggle button to trigger a new deployment based on specific artifacts. In this example, a release will be deployed when a new artifact is available from the specified branch.

    :::image type="content" source="media/trigger-02b.png" alt-text="A screenshot showing predeployment artifact filters.":::

- **Schedule**:
  Trigger a new deployment to your specified stage at a specific time.

    :::image type="content" source="media/trigger-02.png" alt-text="A screenshot showing predeployment schedule settings.":::    

- **Pull-request deployment**:
  Enable the toggle button to trigger a new release every time a new pull request is created. It's recommended to disable this feature for production environment.

    :::image type="content" source="media/trigger-02c.png" alt-text="A screenshot showing pull request deployment trigger.":::    

- **Pre-deployment approvals**:
Select the users who can approve or reject deployments to your selected stage. By default, when this feature is enabled, all project users must approve the deployment. If a group is added to the approvers list, at least one user in the group must approve the deployment. You can also specify the *Approval policies* and *Timeout* (the maximum time for an approval to remain in pending state before it is automatically rejected).

    :::image type="content" source="media/pre-deployment-approval.png" alt-text="A screenshot showing predeployment approvals."::: 

- **Gates**:
Enable the toggle button to set up specific gates to evaluate before trigger deployment.

    :::image type="content" source="media/gates.png" alt-text="A screenshot showing predeployment gates."::: 

- **Deployment queue settings**:

Configure specific actions when multiple releases are queued for deployment.

:::image type="content" source="media/deploy-queue.png" alt-text="A screenshot displaying the deployment queue settings.":::

- **Number of parallel deployments**: options: *Specific* or *Unlimited*. Specify how many deployments can occur simultaneously within the same stage. If you set the number to '1', deployments will occur one after another in sequence.
  
- **Subsequent releases**: options: *Deploy all in sequence* or *Deploy latest and cancel the others* This option is activated if you select *Specific* under the *Number of parallel deployments*.
  
  - **Deploy all in sequence**: select this option if you need releases to deploy one after the other. This approach ensures that predeployment approval requests are processed in the correct order.
      
  - **Deploy latest and cancel the others**: select this option if you're producing builds faster than releases, and you only want to deploy the latest build. See [Specify queuing policies](../process/stages.md?tabs=classic#specify-queuing-policies) for more details.
