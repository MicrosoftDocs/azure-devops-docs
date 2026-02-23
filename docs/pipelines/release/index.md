---
title: Classic release pipelines
description: Overview of Classic release pipelines
ms.assetid: 126C3E1C-9DB3-4E46-918D-FF5600BF8FC9
ms.topic: concept-article
ms.custom: engagement-fy23
ms.author: ronai
author: RoopeshNair
ms.date: 02/23/2026
monikerRange: '<= azure-devops'
---

# Classic release pipelines

[!INCLUDE [version-lt-eq-azure-devops](../../includes/version-lt-eq-azure-devops.md)]

Classic release pipelines help you deploy applications to multiple environments in a secure and reliable way. Using classic release pipelines, you can automate testing and deployments, define flexible deployment strategies, add approval gates, and manage deployments across stages.

## Prerequisites

| **Product**        | **Requirements**  |
|--------------------|-------------------|
| **Azure DevOps**   | - An [Azure DevOps organization](../../organizations/accounts/create-organization.md).<br> - An [Azure DevOps project](../../organizations/projects/create-project.md). |

## How do release pipelines work

For each deployment, Azure Pipelines runs the following sequence of steps:

1. **Pre-deployment approval**:
   
    When a deployment is triggered, Azure Pipelines checks whether a pre-deployment approval is required for the stage. If approval is required, it sends notifications to the configured approvers and waits for approval before continuing.

1. **Queue deployment job**:
   
    Azure Pipelines queues the deployment job and schedules it on an available [Agent](../agents/agents.md).

1. **Select an agent**:
   
    An available agent picks up the deployment job. Release pipelines can be configured to dynamically select an appropriate agent at runtime.

1. **Download artifacts**:
   
    The agent downloads all artifacts associated with the release.

1. **Run deployment tasks**:
   
    The agent executes the tasks defined in the deployment job for the stage.

1. **Generate deployment logs**:
   
    The agent generates detailed logs for each deployment step and sends them back to Azure Pipelines.

1. **Post-deployment approval**:
   
    After deployment to the stage completes, Azure Pipelines checks whether a post-deployment approval is required. Once approval is granted, or if no approval is required, the pipeline proceeds to the next stage.

    :::image type="content" source="media/what-is-release-management/understand-rm-05.png" alt-text="A screenshot showing the deployment steps in Azure Pipelines.":::

## Deployment model

Azure release pipelines support a wide range of [artifact sources](artifacts.md#artifact-sources) including Jenkins, Azure Artifacts, and Team City. This flexibility allows you to design deployment models that span multiple build systems and environments. The following example illustrates a deployment model using Azure release pipelines.

In this model, the release pipeline consumes two build artifacts produced by separate build pipelines. The application is first deployed to the Dev stage, followed by deployment to two parallel QA stages. After the application is successfully validated in both QA stages, it is deployed to *Prod ring 1* and then to *Prod ring 2*.

Each production ring represents multiple instances of the same web application deployed to different geographic locations. This ring‑based approach enables gradual rollouts, controlled validation, and reduced risk during production deployments.

:::image type="content" source="media/definition-01.png" alt-text="A screenshot showing a release pipeline deployment steps.":::

## Releases vs deployments 

A release is a construct that holds a versioned set of artifacts specified in a CI/CD pipeline. It includes a snapshot of all the information required to carry out all the tasks and actions in the release pipeline, such as stages, tasks, policies, and deployment options. 

A single release pipeline can produce multiple releases. Azure Pipelines stores information about each release and displays it for the specified [retention period](../policies/retention.md#release).  

A deployment is the execution of the tasks defined for a single stage in a release. A deployment can include actions such as running automated tests, deploying build artifacts, and performing any other tasks configured for that stage.
When you create a release, Azure Pipelines initiates deployments based on the policies and settings defined in the release pipeline. A release can be deployed multiple times to the same stage. If a deployment fails for a stage, you can redeploy the same release to that stage by selecting Deploy from the release.

The following diagram shows the relationship between release pipelines, releases, and deployments.

:::image type="content" source="media/release-deploy.png" alt-text="A diagram illustrating the difference between releases and deployments.":::

## Related content

- [Create Classic release pipelines](releases.md)

- [Deploy pull request Artifacts](deploy-pull-request-builds.md)

- [Create a multi-stage release pipeline](define-multistage-release-process.md)
