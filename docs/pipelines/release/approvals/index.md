---
title: Understand approvals and gates
ms.custom: seodec18
description: Understand deployment approvals and gates in Azure Pipelines and Team Foundation Server (TFS)
ms.assetid: D5989F1C-04D8-43EF-9212-AE70151C461C
ms.prod: devops
ms.technology: devops-cicd
ms.topic: conceptual
ms.manager: jillfra
ms.author: ahomer
author: alexhomer1
ms.date: 08/24/2018
monikerRange: '>= tfs-2015'
---

# Release approvals and gates overview

[!INCLUDE [version-tfs-2015-rtm](../../_shared/version-tfs-2015-rtm.md)]

::: moniker range="<= tfs-2018"
[!INCLUDE [temp](../../_shared/concept-rename-note.md)]
::: moniker-end

A release pipeline specifies the end-to-end release pipeline for an app to be deployed across a range of stages.
Deployments to each stage are fully automated by using 
[jobs](../../process/phases.md) and [tasks](../../process/tasks.md).

**Approvals** and **gates** give you additional control over the start and completion of the deployment pipeline.
Each stage in a release pipeline can be configured with pre-deployment and post-deployment conditions
that can include waiting for users to manually approve or reject deployments, and checking with other automated
systems until specific conditions are verified. In addition, you can configure a manual intervention to pause the
deployment pipeline and prompt users to carry out manual tasks, then resume or reject the deployment.

> At present, gates are available only in Azure Pipelines.

The following diagram shows how these features are combined in a stage of a release pipeline.

![Schematic view of approvals and gates in a stage](_img/approvals-gates.png)

By using approvals, gates, and manual intervention you can take full control of your releases
to meet a wide range of deployment requirements. Typical scenarios where approvals, gates, and manual intervention
are useful include the following.

<a name="scenarios"></a>

| Scenario | Feature(s) to use |
| --- | --- |
| Some users must manually validate the change request and approve the deployment to a stage. | [Pre-deployment approvals](approvals.md) |
| Some users must manually sign off the app after deployment before the release is promoted to other stages. | [Post-deployment approvals](approvals.md) |
| You want to ensure there are no active issues in the work item or problem management system before deploying a build to a stage.  | [Pre-deployment gates](gates.md) |
| You want to ensure there are no incidents from the monitoring or incident management system for the app after it's been deployed, before promoting the release. | [Post-deployment gates](gates.md) |
| After deployment you want to wait for a specified time before prompting some users for a manual sign-off.  | [Post-deployment gates](gates.md) and [post-deployment approvals](approvals.md) |
| During the deployment pipeline a user must manually follow specific instructions and then resume the deployment. | [Manual Intervention](../deploy-using-approvals.md#configure-maninter) | 
| During the deployment pipeline you want to prompt the user to enter a value for a parameter used by the deployment tasks, or allow the user to edit the details of this release. | [Manual Intervention](../deploy-using-approvals.md#configure-maninter) | 
| During the deployment pipeline you want to wait for monitoring or information portals to detect any active incidents, before continuing with other deployment jobs.  | Planned | 

You can, of course, combine all three techniques within a release pipeline to fully achieve your own deployment requirements.

In addition, you can install an extension that integrates with **ServiceNow** to help you control and manage your deployments
though service management methodologies such as ITIL. For more details, see [Release deployment control using ServiceNow](servicenow.md).

## Related topics

* [Approvals](approvals.md)
* [Gates](gates.md)
* [Manual intervention](../deploy-using-approvals.md#configure-maninter)
* [ServiceNow release and deployment control](servicenow.md)
* [Stages](../environments.md)
* [Triggers](../triggers.md)
* [Release pipelines and releases](index.md)

## See also

* [Video: Deploy quicker and safer with gates in Azure Pipelines](https://channel9.msdn.com/Events/Connect/2017/T181)
* [Configure your release pipelines for safe deployments](https://blogs.msdn.microsoft.com/visualstudioalm/2017/04/24/configuring-your-release-pipelines-for-safe-deployments/)

[!INCLUDE [rm-help-support-shared](../../_shared/rm-help-support-shared.md)]
