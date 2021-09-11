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

1. By using the [REST API](/rest/api/azure/devops/release) to create a release definition.

## Q&A

Q: Why my deployment did not get triggered?

A: Creating a release pipeline does not necessarily mean that it will automatically/immediately start a deployment. Below are few reasons why this might happen:

- Defined [deployment triggers](triggers.md) forcing the deployment to pause.This can happen with scheduled triggers or when a delay is imposed until deployment to another stage is complete.   

- Defined [queuing policies](../process/stages.md#queuing-policies) dictating the order of execution and when releases are queued for deployment.

- [Pre-deployment approvals or gates](approvals/index.md) for a specific stage preventing deployment until all the defined conditions are met.

## Related articles

- [Release deployment control using approvals](approvals/approvals.md).
- [Release deployment control using gates](approvals/gates.md).
- [Release triggers](triggers.md).
- [Release artifacts and artifact sources](artifacts.md).
- [Add stages, dependencies, & conditions](../process/stages.md).
