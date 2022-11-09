---
title: Understand release gates, checks, and approvals
ms.custom: seodec18
description: Understand deployment gates and approvals in Azure Pipelines
ms.assetid: D5989F1C-04D8-43EF-9212-AE70151C461C
ms.topic: conceptual
ms.author: shashban
author: azooinmyluggage
ms.date: 02/18/2021
monikerRange: '<= azure-devops'
---

# Release gates and approvals overview

[!INCLUDE [version-lt-eq-azure-devops](../../../includes/version-lt-eq-azure-devops.md)]

::: moniker range="tfs-2018"
[!INCLUDE [temp](../../includes/concept-rename-note.md)]
::: moniker-end

Release pipelines enable teams to continuously deploy their application across different stages with lower risk and with faster pace. Deployments to each stage can be fully automated by using jobs and tasks.

Teams can also take advantage of the Approvals and Gates feature to control the workflow of the deployment pipeline. Each stage in a release pipeline can be configured with pre-deployment and post-deployment conditions that can include waiting for users to manually approve or reject deployments, and checking with other automated systems that specific conditions are met. In addition, teams can configure manual validations to pause the deployment pipeline and prompt users to carry out manual tasks then resume or reject the deployment.

The following diagram illustrates the release pipeline workflow.

:::image type="content" source="media/release-pipeline-workflow.svg" alt-text="The release pipeline workflow":::

By using gates, approvals, and manual intervention you can take full control of your releases to meet a wide range of deployment requirements. Typical scenarios where approvals, gates, and manual intervention are useful include the following.

<a name="scenarios"></a>

| Scenario | Feature(s) to use |
| --- | --- |
| A user must manually validate the change request and approve the deployment to a certain stage. | [Pre-deployment approvals](approvals.md) |
| A user must manually sign out after deployment before the release is triggered to other stages. | [Post-deployment approvals](approvals.md) |
| A team wants to ensure there are no active issues in the work item or problem management system before deploying a build to a stage.  | [Pre-deployment gates](gates.md) |
| A team wants to ensure there are no reported incidents after deployment, before triggering a release. | [Post-deployment gates](gates.md) |
| After deployment, a team wants to wait for a specified time before prompting users to sign out. | [Post-deployment gates](gates.md) and [post-deployment approvals](approvals.md) |
| During deployment, a user must manually follow specific instructions and then resume the deployment. | [Manual Intervention](../deploy-using-approvals.md#set-up-manual-intervention) or [Manual Validation](../deploy-using-approvals.md#set-up-manual-validation)| 
| During deployment, a team wants to prompt users to enter a value for a parameter used by the deployment tasks, or allow users to edit the release. | [Manual Intervention](../deploy-using-approvals.md#set-up-manual-intervention) or [Manual Validation](../deploy-using-approvals.md#set-up-manual-validation) | 
| During deployment, a team wants to wait for monitoring or information portals to detect any active incidents, before continuing with other deployment jobs.  | Planned | 

You can combine all three techniques within a release pipeline to fully achieve your own deployment requirements.

In addition, you can install an extension that integrates with *ServiceNow* to help you control and manage your deployments through Service Management methodologies such as ITIL. For more information, see [Integrate with ServiceNow change management](servicenow.md).

> [!NOTE]
> The time delay before pre-deployment gates are executed is capped at 48 hours. If you need to delay the overall launch of your gates instead, it is recommended to use a [delay task](/azure/devops/pipelines/tasks/reference/delay-v1) in your release pipeline.

# [YAML](#tab/yaml)

```YAML
# Delay further execution of a workflow by a fixed time
pool: server
steps:
- task: Delay@1
  displayName: 'Delay by 5 minutes'
  inputs:
    delayForMinutes: 5
```

# [Classic](#tab/classic)

1. From your pipeline definition, select the ellipsis button (...), and then select **Add an agentless job**.

1. In your new agentless job, select the `+` sign to add a new task.

1. Search for the **Delay** task. Select **Add** to add it to your agentless job.

1. Enter the **Delay Time**  in minutes.

1. Select **Save & queue** when you are done.

:::image type="content" source="media/delay-task-classic.png" alt-text="A screenshot showing how to add a delay task to an agentless job.":::

---

> [!NOTE]
> The [delay task](../../tasks/utility/delay.md) can only be used in an [agentless job](../../process/phases.md#server-jobs).
 
## Related articles

- [Release deployment control using approvals](approvals.md)
- [Release deployment control using gates](gates.md)
- [Configure a manual intervention](../deploy-using-approvals.md#set-up-manual-intervention)
- [Add stages, dependencies, & conditions](../../process/stages.md)
- [Release triggers](../triggers.md)
- [Releases in Azure Pipelines](../releases.md)

## Next steps

> [!div class="nextstepaction"]
> [Define approvals and checks](../../process/approvals.md)
> [Use approvals and gates to control your deployment](../deploy-using-approvals.md)
