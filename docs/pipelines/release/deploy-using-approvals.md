---
title: Control deployments with gates and approvals
ms.custom: seodec18
description: Use deployment approvals, gates, and manual intervention to control your deployment
ms.assetid: 3D22D4B3-DE1F-482C-BBD4-475C829452C1
ms.topic: tutorial
ms.author: shashban
author: azooinmyluggage
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

    :::image type="content" source="media/deploy-using-approvals/open-pipeline.png" alt-text="Edit the release pipeline":::

1. Select the pre-deployment icon for your stage, and then select the toggle button to enable **Gates**.   

    :::image type="content" source="media/deploy-using-approvals/gates-01.png" alt-text="Enable gates":::

1. Specify the delay time before the added gates are evaluated. This time is to allow gate functions to initialize and stabilize before returning results.

    :::image type="content" source="media/deploy-using-approvals/gates-02.png" alt-text="Gates delay time":::

1. Select **Add**, and then select **Query Work Items**.

    :::image type="content" source="media/deploy-using-approvals/query-work-items-gate.png" alt-text="Adding Query work items task":::

1. Select an existing work item query from the dropdown menu. Depending on how many work items you expect the query to return, set your maximum and minimum thresholds.

    :::image type="content" source="media/deploy-using-approvals/configure-gate.png" alt-text="Configuring the Query Work Items task":::

1. Select the **Evaluation options** section, and then specify the timeout and sampling interval. The minimum values you can specify are 6-minutes timeout and 5-minutes sampling interval.

    :::image type="content" source="media/deploy-using-approvals/gates-05.png" alt-text="Evaluation options setup":::

1. Select **Save** when you are done.

    :::image type="content" source="media/deploy-using-approvals/gates-06.png" alt-text="Save a release pipeline":::
   
## Set up manual intervention 

Depending on the scenario, sometimes you may need to add manual intervention to your release pipeline. You can do this by adding the **Manual Intervention** task to your pipeline.

1. Select your release pipeline, and then select **Tasks** and choose your stage.

    :::image type="content" source="media/deploy-using-approvals/open-qa-tasks.png" alt-text="Stage tasks":::

1. Select the ellipses (**...**) from your stage definition, and then select **Add agentless job**.

    :::image type="content" source="media/deploy-using-approvals/add-agentless-phase.png" alt-text="Add agentless job":::

   > [!NOTE]
   > The **Manual Intervention** task can only be used in an [agentless job](../process/phases.md#server-jobs).

1. Drag and drop the agentless job to the start of the deployment process. Select the **+** sign, and then select **Add** the Manual Intervention task.

    :::image type="content" source="media/deploy-using-approvals/add-maninter-task.png" alt-text="Add a Manual Intervention task":::

1. Configure the task by entering the Instructions to be displayed when it the task is triggered.

    :::image type="content" source="media/deploy-using-approvals/manual-intervention-task.png" alt-text="Configure the Manual Intervention task":::

   You can specify a list of users to be notified when the deployment is pending manual approval. You can also specify a timeout and the action (approve or reject)
   that occur if no intervention within the timeout period. See the [Manual Intervention](../tasks/utility/manual-intervention.md) task for more details.

1. Select **Save** when you are done.

## Set up manual validation 

You can use the [manual validation](../tasks/utility/manual-validation.md) task in your YAML to pause the pipeline run and wait for manual approval. Manual validation is especially useful in scenarios where you want to pause a pipeline and validate configuration settings or build packages before starting a computation-intensive job.

The `waitForValidation` job pauses the run and triggers a prompt within the Pipeline UI to review and validate the task. The email addresses listed in `notifyUsers` receive a notification to approve or deny the pipeline run. 

:::image type="content" source="media/needs-validation-prompt.png" alt-text="Add validation for the pipeline to continue.":::
    

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

Deployment logs can be very useful when debugging deployment issues. You can also use the logs to audit the run and verify approvals and how they were granted and by whom. 

1. Select **Releases**, and then select your release pipeline.

    :::image type="content" source="media/deploy-using-approvals/open-summary.png" alt-text="Release summary":::

1. This view will show you a live status of each stage in your pipeline. The QA stage in this example is pending intervention. Select **Resume**. 

    :::image type="content" source="media/deploy-using-approvals/view-log-03.png" alt-text="Stage pending intervention":::

1. Enter your comment, and then select **Resume**

    :::image type="content" source="media/deploy-using-approvals/view-log-01.png" alt-text="Resume task":::

1. Return to your release pipeline. The **QA** stage deployment succeeded and the pre-deployment approvals are triggered for the **Production** stage.

    :::image type="content" source="media/deploy-using-approvals/view-log-05.png" alt-text="Pre-deployment approval triggered for next stage":::

1. Select **Approve** and enter your comment and then select **Approve** to continue deployment.

    :::image type="content" source="media/deploy-using-approvals/view-log-06.png" alt-text="Approve deployment":::

1. Return to your release pipeline. The live status indicates that the gates are being processed for the **Production** stage before the release continues.  

    :::image type="content" source="media/deploy-using-approvals/view-log-04.png" alt-text="status: processing gates":::

1. Return to your release pipeline, and hover over the stage you want to audit and then select **Logs** to view the logs. 

    :::image type="content" source="media/deploy-using-approvals/view-logs.png" alt-text="View logs":::

## Next step

> [!div class="nextstepaction"]
> [Integrate with ServiceNow](approvals/servicenow.md)
> [Integrate with Jenkins (Classic)](integrate-jenkins-pipelines-cicd.md)
