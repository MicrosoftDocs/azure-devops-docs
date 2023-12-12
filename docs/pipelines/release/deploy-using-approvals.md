---
title: Control deployments with gates and approvals
description: Use deployment approvals, gates, and manual intervention to control your deployment
ms.assetid: 3D22D4B3-DE1F-482C-BBD4-475C829452C1
ms.topic: tutorial
ms.custom: seodec18, engagement-fy23
ms.author: sandrica
author: silviuandrica
ms.date: 10/12/2022
monikerRange: '<= azure-devops'
---

# Use gates and approvals to control your deployment

[!INCLUDE [version-lt-eq-azure-devops](../../includes/version-lt-eq-azure-devops.md)]

By using a combination of manual deployment approvals, gates, and manual intervention in your release pipeline, you can quickly and easily configure your deployment to meet all the specific pre-deployment requirements for your workflow.

In this tutorial, you will learn about:

> [!div class="checklist"]
> * Pre-deployment gates
> * Manual intervention
> * Manual validation
> * Deployment logs

## Prerequisites

- Complete the [Define your multi-stage release pipeline](define-multistage-release-process.md) tutorial.

- A work item query. [Create a work item query in Azure Boards](../../boards/queries/using-queries.md) if you don't have one already.

## Set up gates

You can use gates to ensure that the release pipeline meets specific criteria before deployment without requiring user intervention.

1. Select **Pipelines** > **Releases**, and then select your release pipeline. Select **Edit** to open the pipeline editor.

    :::image type="content" source="media/deploy-using-approvals/open-pipeline.png" alt-text="A screenshot showing the edit button for release pipelines.":::

1. Select the pre-deployment icon for your stage, and then select the toggle button to enable **Gates**.   

    :::image type="content" source="media/deploy-using-approvals/enable-gates.png" alt-text="A screenshot showing how to enable gates.":::

1. Specify the delay time before the added gates are evaluated. This time is to allow gate functions to initialize and stabilize before returning results.

    :::image type="content" source="media/deploy-using-approvals/set-delay-time-gates.png" alt-text="A screenshot showing how to set the delay time for pre-deployment gates.":::

1. Select **Add**, and then select **Query Work Items**.

    :::image type="content" source="media/deploy-using-approvals/query-work-items-gate.png" alt-text="A screenshot showing how to add a Query work items task.":::

1. Select an existing work item query from the dropdown menu. Depending on how many work items you expect the query to return, set your maximum and minimum thresholds.

    :::image type="content" source="media/deploy-using-approvals/configure-gate.png" alt-text="A screenshot showing how to configure the Query Work Items task.":::

1. Select the **Evaluation options** section, and then specify the timeout and sampling interval. The minimum values you can specify are 6-minutes timeout and 5-minutes sampling interval.

    :::image type="content" source="media/deploy-using-approvals/set-evaluation-options-gates.png" alt-text="A screenshot showing how to configure the evaluation options for the query work items task.":::

1. Select **Save** when you're done.

    :::image type="content" source="media/deploy-using-approvals/save-release.png" alt-text="A screenshot showing how to save a release pipeline.":::
   
## Set up manual intervention 

Depending on the scenario, sometimes you may need to add manual intervention to your release pipeline. You can do this by adding the **Manual Intervention** task to your pipeline.

1. Select **Pipelines** > **Releases**. Select your release pipeline, and then select **Tasks** and choose your stage.

    :::image type="content" source="media/deploy-using-approvals/open-qa-tasks.png" alt-text="A screenshot showing how to navigate to stage tasks in a release pipeline.":::

1. Select the ellipses (...), and then select **Add an agentless job**.

    :::image type="content" source="media/deploy-using-approvals/add-agentless-phase.png" alt-text="A screenshot showing how to add an agentless job.":::

1. Drag and drop the agentless job to the top of your deployment process. Select the (+) sign, and then select **Add** the Manual Intervention task.

    :::image type="content" source="media/deploy-using-approvals/add-manual-intervention-task.png" alt-text="A screenshot showing how to add the manual intervention task.":::

1. Enter a **Display name** and the instructions that will be displayed when the task is triggered. You can also specify a list of users to be notified and a timeout action (reject or resume) if no intervention occurred within the timeout period.

    :::image type="content" source="media/deploy-using-approvals/manual-intervention-task.png" alt-text="A screenshot showing how to configure the Manual Intervention task.":::

1. Select **Save** when you're done.

> [!NOTE]
> The [Manual Intervention](/azure/devops/pipelines/tasks/reference/manual-intervention-v8) task can only be used in an [agentless job](../process/phases.md#server-jobs).

## Set up manual validation 

You can use the [Manual Validation](/azure/devops/pipelines/tasks/reference/manual-validation-v0) task in your YAML pipeline to pause and wait for manual approval. Manual validation is especially useful in scenarios where you want to validate configuration settings or build packages before starting a computation-intensive job.

The `waitForValidation` job pauses the run and triggers a UI prompt to review and validate the task. The email addresses listed in `notifyUsers` receive a notification to approve or deny the pipeline run. 

:::image type="content" source="media/needs-validation-prompt.png" alt-text="A screenshot showing the manual validation prompt.":::
    

```YAML
pool: 
   vmImage: ubuntu-latest

jobs:
- job: waitForValidation
  displayName: Wait for external validation  
  pool: server    
  timeoutInMinutes: 4320 # job times out in 3 days
  steps:   
   - task: ManualValidation@0
     timeoutInMinutes: 1440 # task times out in 1 day
     inputs:
         notifyUsers: |
            someone@example.com
         instructions: 'Please validate the build configuration and resume'
         onTimeout: 'resume'
```

## View deployment logs

Deployment logs are useful to debug deployment issues but you can also use them to audit your pipeline runs and verify approvals and how they were granted and by whom. 

1. Select **Pipelines** > **Releases**, and then select your release pipeline.

    :::image type="content" source="media/deploy-using-approvals/open-summary.png" alt-text="A screenshot showing a list of release definitions.":::

1. This view will show you a live status of each stage in your pipeline. The QA stage in this example is pending intervention. Select **Resume**. 

    :::image type="content" source="media/deploy-using-approvals/view-log-03.png" alt-text="A screenshot showing the QA stage pending intervention.":::

1. Enter your comment, and then select **Resume**.

    :::image type="content" source="media/deploy-using-approvals/view-log-01.png" alt-text="A screenshot showing how to respond to a pending manual intervention request.":::

1. The **QA** stage deployment succeeded and the pre-deployment approvals are triggered for the **Production** stage.

    :::image type="content" source="media/deploy-using-approvals/view-log-05.png" alt-text="A screenshot showing pre-deployment approval triggered for the next stage.":::

1. Select **Approve**, enter your comment and then select **Approve** to continue deployment.

    :::image type="content" source="media/deploy-using-approvals/view-log-06.png" alt-text="A screenshot showing how to respond to a pending approval request.":::

1. The live status indicates that the gates are being processed for the **Production** stage before the release continues.  

    :::image type="content" source="media/deploy-using-approvals/view-log-04.png" alt-text="A screenshot showing production processing gates.":::

1. Return to your release pipeline, hover over your stage and then select **Logs** to view the deployment logs. 

    :::image type="content" source="media/deploy-using-approvals/view-logs.png" alt-text="A screenshot showing how access deployment logs.":::

## Related articles

- [Release triggers](triggers.md)
- [Deploy pull request Artifacts](deploy-pull-request-builds.md)
- [Add stages, dependencies, & conditions](../process/stages.md)
