---
title: Understand realease gates, checks, and approvals
ms.custom: seodec18
description: Understand deployment gates and approvals in Azure Pipelines
ms.assetid: D5989F1C-04D8-43EF-9212-AE70151C461C
ms.topic: conceptual
ms.author: shashban
author: azooinmyluggage
ms.date: 02/18/2021
monikerRange: '>= tfs-2015'
---

# Release gates and approvals overview

[!INCLUDE [version-tfs-2015-rtm](../../includes/version-tfs-2015-rtm.md)]

::: moniker range="<= tfs-2018"
[!INCLUDE [temp](../../includes/concept-rename-note.md)]
::: moniker-end

Release pipelines enable teams to continuously deploy their application across different stages with lower risk and with faster pace. Deployments to each stage can be fully automated by using jobs and tasks.

Teams can also take advantage of the Approvals and Gates feature to control the workflow of the deployment pipeline. Each stage in a release pipeline can be configured with pre-deployment and post-deployment conditions that can include waiting for users to manually approve or reject deployments, and checking with other automated systems that specific conditions are met. In addition, teams can configure manual validations to pause the deployment pipeline and prompt users to carry out manual tasks then resume or reject the deployment.

The following diagram illustrates the release pipeline workflow.

:::image type="content" source="media/approvals-gates.png" alt-text="The release pipeline workflow":::

By using gates, approvals, and manual intervention you can take full control of your releases to meet a wide range of deployment requirements. Typical scenarios where approvals, gates, and manual intervention are useful include the following.

<a name="scenarios"></a>

| Scenario | Feature(s) to use |
| --- | --- |
| A user must manually validate the change request and approve the deployment to a certain stage. | [Pre-deployment approvals](approvals.md) |
| A user must manually sign out after deployment before the release is triggered to other stages. | [Post-deployment approvals](approvals.md) |
| A team wants to ensure there are no active issues in the work item or problem management system before deploying a build to a stage.  | [Pre-deployment gates](gates.md) |
| A team wants to ensure there are no reported incidents after deployment, before triggering a release. | [Post-deployment gates](gates.md) |
| After deployment, a team wants to wait for a specified time before prompting users to sign out. | [Post-deployment gates](gates.md) and [post-deployment approvals](approvals.md) |
| During deployment, a user must manually follow specific instructions and then resume the deployment. | [Manual Intervention](../deploy-using-approvals.md#configure-maninter) or [Manual Validation](../deploy-using-approvals.md#configure-manual-validation)| 
| During deployment, a team wants to prompt users to enter a value for a parameter used by the deployment tasks, or allow users to edit the release. | [Manual Intervention](../deploy-using-approvals.md#configure-a-manual-intervention) or [Manual Validation](../deploy-using-approvals.md#configure-manual-validation) | 
| During deployment, a team wants to wait for monitoring or information portals to detect any active incidents, before continuing with other deployment jobs.  | Planned | 

You can combine all three techniques within a release pipeline to fully achieve your own deployment requirements.

In addition, you can install an extension that integrates with **ServiceNow** to help you control and manage your deployments
though Service Management methodologies such as ITIL. For more information, see [Release deployment control using ServiceNow](servicenow.md).

> [!NOTE]
> The time delay before the pre-deployment gates are executed is capped at 48 hours. If you need to delay the overall launch of your gates instead, it is recommended to use a [delay task](../../tasks/utility/delay.md) in your release pipeline.

```YAML
# Delay
# Delay further execution of a workflow by a fixed time
jobs:
- job: RunsOnServer
  pool: Server
  steps:
  - task: Delay@1
    inputs:
      delayForMinutes: '0'
```

## Related articles

* [Approvals](approvals.md)
* [Gates](gates.md)
* [Manual intervention](../deploy-using-approvals.md#configure-maninter)
* [ServiceNow release and deployment control](servicenow.md)
* [Stages](../../process/stages.md)
* [Triggers](../triggers.md)
* [Release pipelines and releases](../releases.md)

## Additional resources

* [Video: Deploy quicker and safer with gates in Azure Pipelines](https://channel9.msdn.com/Events/Connect/2017/T181)
* [Configure your release pipelines for safe deployments](https://devblogs.microsoft.com/devops/configuring-your-release-pipelines-for-safe-deployments/)

[!INCLUDE [rm-help-support-shared](../../includes/rm-help-support-shared.md)]
