---
title: Understand releases and deployments in Azure Pipelines
ms.custom: seodec18
description: DevOps CI/CD - Understand releases pipelines
ms.assetid: 2FF35C3B-FBF9-407F-8467-2D336973E63C
ms.topic: conceptual
ms.author: ronai
author: RoopeshNair
ms.date: 03/01/2021
monikerRange: '>= tfs-2015'
---

# Releases in Azure Pipelines

::: moniker range="<= tfs-2018"
[!INCLUDE [temp](../includes/concept-rename-note.md)]
::: moniker-end

[!INCLUDE [version-tfs-2015-rtm](../includes/version-tfs-2015-rtm.md)]

::: moniker range="azure-devops"

> [!NOTE] 
> This topic covers classic release pipelines. If you want to create your pipelines using YAML, see [Customize your pipeline](../customize-pipeline.md).

::: moniker-end

A **release** is a construct that holds a versioned set of artifacts specified in a CI/CD pipeline. It includes a snapshot of all the information required to carry out all the tasks and actions in the release pipeline, such as stages, tasks, policies such as triggers and approvers, and deployment options. There can be multiple releases from one release pipeline, and information about each one is stored and displayed in Azure Pipelines for the specified [retention period](../policies/retention.md#release).  

A **deployment** is the action of running the tasks for one stage, which can include running automated tests, deploying build artifacts, and whatever other actions are specified for that stage. 
Initiating a release starts each deployment based on the settings and policies defined in the original release pipeline. There can be multiple deployments of each release even for one stage. When a deployment of a release fails for a stage, you can redeploy the same release to that stage. To redeploy a release, simply navigate to the release you want to deploy and select deploy.

The following diagram shows the relationship between release, release pipelines, and deployments.

:::image type="content" source="media/release-deploy.png" alt-text="Relationship between releases, release pipelines, and deployments":::

## Create release pipelines

Releases can be created in several ways:

1. By using a [deployment trigger](triggers.md) to create a release every time a new build artifact is available.

    :::image type="content" source="media/trigger-01.png" alt-text="Continuous deployment triggers":::

1. By using the **Create release** button from within your **Pipelines** > **Releases** to manually create a release pipeline.

    :::image type="content" source="media/create-release-ui.png" alt-text="Create a release pipeline from the UI":::

1. By sending a command over the network to the [REST interface](../../integrate/index.md).

**However**, the action of creating a release **_does not_** mean it will automatically or immediately start a deployment. For example:

* There may be [deployment triggers](triggers.md) defined for a stage, which force the deployment to wait; this could be for a manual deployment, until a scheduled day and time, or for successful deployment to another stage.

* A deployment started manually from the **[Deploy]** command in the UI, or from a network command sent to the [REST interface](../../integrate/index.md), may specify a final target stage other than the last stage in a release pipeline. For example, it may specify that the release is deployed only as far as the QA stage and not to the production stage.   

* There may be [queuing policies](../process/stages.md#queuing-policies) defined for a stage, which specify which of multiple deployments will occur, or the order in which releases are deployed.

* There may be [pre-deployment approvers or gates](approvals/index.md) defined for a stage, and the deployment will not occur until all necessary approvals have been granted.

* Approvers may defer the release to a stage until a specified date and time.

[!INCLUDE [rm-help-support-shared](../includes/rm-help-support-shared.md)]
