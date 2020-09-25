---
title: Release triggers for stages, branches, and pipelines
description: DevOps CI CD - Understand triggers in Azure Pipelines
ms.assetid: FDB5DA41-1ADA-485E-86BD-8BF147788568
ms.topic: conceptual
ms.author: ronai
author: RoopeshNair
ms.custom: seodec18, contentperfq1
ms.date: 07/14/2020
monikerRange: '>= tfs-2015'
---

# Release triggers

[!INCLUDE [version-tfs-2015-rtm](../includes/version-tfs-2015-rtm.md)]

::: moniker range="<= tfs-2018"
[!INCLUDE [temp](../includes/concept-rename-note.md)]
::: moniker-end

::: moniker range="azure-devops"
> [!NOTE] 
> This topic covers classic release pipelines. To understand triggers in YAML pipelines, see [pipeline triggers](../build/triggers.md).
::: moniker-end

Release triggers are an automation tool to deploy your application. When the trigger conditions are met, the pipeline will deploy your artifacts to the environment/stages you already specified. 

<a id="release-triggers"></a>

## Continuous deployment triggers

Continuous deployment triggers allow you to create a release every time a new build artifact is available. This feature is currently available only to build from Azure DevOps, TFS and Git-based repositories.

> [!div class="mx-imgBorder"]
> ![Selecting a trigger for a release](media/trigger-01.png)

Build branch filters allow you to trigger a release only for a build that is from one of the branches selected here.

You also have the option to specify branch tags. If you do so, a release will be triggered only if a new build tagged with the keywords specified here, is available.

If you chose to enable pull-request triggers, a release will be created every time a selected artifact is available as part of a pull request workflow.

> [!NOTE]
> Automatically creating a release does not mean it will be automatically deployed to a stage. You must set up stages triggers to deploy your app to the various stages.

<a id="scheduled-triggers"></a>

## Scheduled release triggers

If you want to create and start a release at specific times, define one or more scheduled release triggers. Choose the schedule icon in the **Artifacts** section of your pipeline and enable scheduled release triggers. You can configure multiple schedules.

> [!div class="mx-imgBorder"]
> ![Defining a scheduled release trigger](media/trigger-04.png)

> [!NOTE]
> Automated release triggers for GitHub release is not supported currently.

See also [stage scheduled triggers](#stage-scheduled-triggers).

::: moniker range="> tfs-2018"

<a id="prsettrigger"></a>

## Pull request triggers

You can configure a pull request trigger that will create a new release when a pull request uploads a new version of the artifact. Enable the trigger and add the branches targeted by pull requests that you want to activate this trigger. 

> [!div class="mx-imgBorder"]
> ![Configure a pull request trigger.](media/trigger-01a.png)

However, to use a pull request trigger, you must also enable it for specific stages of the pipeline. Do this in the stage [triggers panel](#prtrigger) for the required stage(s). You may also want to set up a [branch policy](../../repos/git/pr-status-policy.md) for the branch. For more information, see [Deploy pull request builds](deploy-pull-request-builds.md).

> [!NOTE]
> Note that, even though a release is automatically created, it might not be deployed automatically to any stages. The [stage triggers](#env-triggers) govern when and if a release should be deployed to a stage.

::: moniker-end

<a id="env-triggers"></a>

## Stage triggers

You can choose to have the deployment to each stage triggered automatically when a release is created by a continuous deployment trigger, based on:

* **The result of deploying to a previous stage in the pipeline**.
  Use this setting if you want the release to be first deployed and validated in another stage(s) before it is deployed to this stage.
  Triggers are configured for each stage, but the combination of these allows you to orchestrate the overall deployment - such as the sequence in which automated deployments occur across all the stages in a release pipeline. For example, you can set up a linear pipeline where a release is deployed first to the **Test** and **QA** stages.
  Then, if these two deployments succeed, it will be deployed to a **Staging** stage. In addition, you can configure the trigger to fire for partially succeeded (but not failed) deployments.

  > [!div class="mx-imgBorder"]
  > ![The stage trigger conditions settings](media/trigger-02a.png)

* **Filters based on the artifacts**.
  You can add one or more filters for each artifact linked to the release pipeline, and specify if you want to include or exclude particular branches of the code.
  Deployment will be triggered to this stage only if all the artifact conditions are successfully met. Unlike [build branch filters](#release-triggers), variables _cannot_ be used in artifact filter conditions.

  > [!div class="mx-imgBorder"]
  > ![The artifact filter trigger conditions settings](media/trigger-02b.png)

  <a name="stage-scheduled-triggers"></a>

* **A predefined schedule**.
  When you select this option, you can select the days of the week and the time of day that Azure Pipelines will automatically start a new deployment. Unlike scheduled release triggers, you cannot configure multiple schedules for stage triggers.
  Note that, with scheduled triggers, a new deployment request is created that deploys the artifacts from the current release. All deployment requests are executed on the stage as per the configured [queueing policies](../process/stages.md?tabs=classic#queuing-policies) defined on the stage.
  For example, if the queueing policy is set to **Deploy latest and cancel the others**, any previously deployed artifacts on the stage will be overwritten by the _most recently requested_ deployment. It does not necessarily require a newer version of the artifacts to be available.

  > [!div class="mx-imgBorder"]
  > ![The scheduled trigger conditions settings](media/trigger-02.png)

<a name="prtrigger"></a>

* **A pull request that updates the artifacts**.
  If you have enabled pull request triggers for your pipeline, you must also enable pull request deployment for the specific stages where you want the release to be deployed. 
  You may also want to set up a [branch policy](../../repos/git/pr-status-policy.md) for the branch. For more information, see [Deploy pull request builds](deploy-pull-request-builds.md).

  > [!div class="mx-imgBorder"]
  > ![The pull request trigger conditions settings](media/trigger-02c.png)

* **Manually by a user**.
  Releases are not automatically deployed to the stage. To deploy a release to this stage, you must manually start a release and deployment from the release pipeline
  or from a build summary.

You can combine the automated settings to have deployments created automatically either when a new build is available or according to a schedule.

::: moniker range="tfs-2015"

> [!NOTE]
> **TFS 2015**: The following features are not available in TFS 2015 - continuous deployment triggers for multiple artifact sources, multiple scheduled triggers combining scheduled and continuous deployment triggers in the same pipeline, continuous deployment based on the branch or tag of a build.

::: moniker-end

::: moniker range=">= tfs-2017"

### Parallel forked and joined deployments

The **Triggering stage** list lets you select more than one stage. This allows you to configure parallel (_forked_ and _joined_) deployment pipelines where the deployment to a stage occurs only when deployment to **all** the selected stages succeeds.

For example, the following schematic shows a pipeline where deployment occurs in parallel to the **QA** and **Pre-prod** stages after deployment to the **Dev** stage succeeds. However, deployment to the **Production** stage occurs only after successful deployment to both the **QA** and **Pre-prod** stages.

> [!div class="mx-imgBorder"]
> ![Configuring a parallel (forked and joined) deployment pipeline](media/trigger-03.png)

In combination with the ability to define [pre- and post-deployment approvals](approvals/approvals.md), this capability enables the configuration of complex and fully managed deployment pipelines to suit almost any release scenario.  

::: moniker-end

Note that you can always deploy a release directly to any of the stages in your release pipeline by selecting the **Deploy** action when you create a new release. In this case, the stage triggers you configure, such as a trigger on successful deployment to another stage, do not apply. The deployment occurs irrespective of these settings.
This gives you the ability to override the release pipeline. Performing such direct deployments requires the **Manage deployments** permission, which should
only be given to selected and approved users.

::: moniker range="tfs-2015"

> [!NOTE]
> **TFS 2015**: Parallel fork and joined deployments are not available in TFS 2015

::: moniker-end

[!INCLUDE [rm-help-support-shared](../includes/rm-help-support-shared.md)]
