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

A **release** is a construct that holds a versioned set of artifacts specified in a CI/CD pipeline. It includes a snapshot of all the information required to carry out all the tasks and actions in the release pipeline, such as stages, tasks, policies such as triggers and approvers, and deployment options. There can be multiple releases from one release pipeline, and information about each one is stored and displayed in Azure Pipelines for the specified [retention period](../policies/retention.md#release).  

A **deployment** is the action of running the tasks for one stage, which can include running automated tests, deploying build artifacts, and whatever other actions are specified for that stage. 
Initiating a release starts each deployment based on the settings and policies defined in the original release pipeline. There can be multiple deployments of each release even for one stage. When a deployment of a release fails for a stage, you can redeploy the same release to that stage. To redeploy a release, simply navigate to the release you want to deploy and select deploy.

The following diagram shows the relationship between release, release pipelines, and deployments.

:::image type="content" source="media/release-deploy.png" alt-text="A diagram illustrating the difference between releases and deployments.":::

## FAQ 

#### Q: Why wasn't my deployment triggered?

A: Creating a release pipeline doesn't automatically start a deployment. Here are a few reasons why this might happen:

- [Deployment Triggers](triggers.md): defined deployment triggers may cause the deployment to pause. This can occur with scheduled triggers or when there's a delay until deployment to another stage is complete.

- [Queuing Policies](../process/stages.md#queuing-policies): these policies dictate the order of execution and when releases are queued for deployment.

- [Pre-Deployment Approvals or Gates](approvals/index.md): specific stages may require pre-deployment approvals or gates, preventing deployment until all defined conditions are met.

#### Q: How can I edit variables at release time?

A: In the **Variables** tab of your release pipeline, Select the **Settable at release time** checkbox for the variables that you wish to modify when a release is queued.

:::image type="content" source="media/what-is-release-management/define-release-edit-variables.png" alt-text="A screenshot showing how to enable the settable at release time feature.":::

Subsequently, when generating a new release, you have the ability to modify the values of those variables.

:::image type="content" source="media/what-is-release-management/populate-release-edit-variables.png" alt-text="A screenshot showing how to edit variables at release time.":::

#### Q: When would it be more appropriate to modify a release instead of the pipeline that defines it?

A: You can edit the approvals, tasks, and variables of a release instance. However, these edits will only apply to that instance. If you want your changes to apply to all future releases, edit the release pipeline instead.

#### Q: What are the scenarios where the "abandon a release" feature is useful?

A: If you don't plan to reuse the release, or want to prevent it from being used, you can abandon the release as follows **Pipelines** > (...) > **Abandon**. You can't abandon a release when a deployment is in progress, you must cancel the deployment first.

:::image type="content" source="media/what-is-release-management/abandon-release.png" alt-text="A screenshot showing how to abandon a release.":::

#### Q: How do I manage the naming of new releases?

A: The default naming convention for release pipelines is sequential numbering, where the releases are named **Release-1**, **Release-2**, and so on. However, you have the flexibility to customize the naming scheme by modifying the release name format mask. In the **Options** tab of your release pipeline, navigate to the **General** page and adjust the **Release name format** property to suit your preferences.

When specifying the format mask, you can use the following predefined variables. Example: The following release name format: *Release $(Rev:rrr) for build $(Build.BuildNumber) $(Build.DefinitionName)* will create the following release: *Release 002 for build 20170213.2 MySampleAppBuild*.

| Variable | Description |
|----------|-------------|
| **Rev: rr** | An autoincremented number with at least the specified number of digits. |
| **Date / Date: MMddyy** | The current date, with the default format **MMddyy**. Any combinations of M/MM/MMM/MMMM, d/dd/ddd/dddd, y/yy/yyyy/yyyy, h/hh/H/HH, m/mm, s/ss are supported. |
| **System.TeamProject** | The name of the project to which this build belongs. |
| **Release.ReleaseId** | The ID of the release, which is unique across all releases in the project. |
| **Release.DefinitionName** | The name of the release pipeline to which the current release belongs. |
| **Build.BuildNumber** | The number of the build contained in the release. If a release has multiple builds, it's the number of the [primary build](artifacts.md). |
| **Build.DefinitionName** | The pipeline name of the build contained in the release. If a release has multiple builds, it's the pipeline name of the [primary build](artifacts.md). |
| **Artifact.ArtifactType** | The type of the artifact source linked with the release. For example, this can be **Azure Pipelines** or **Jenkins**. |
| **Build.SourceBranch** | The branch of the [primary artifact source](artifacts.md). For Git, this is of the form **main** if the branch is **refs/heads/main**. For Team Foundation Version Control, this is of the form **branch** if the root server path for the workspace is **$/teamproject/branch**. This variable is not set for Jenkins or other artifact sources. |
| **Custom variable** | The value of a global configuration property defined in the release pipeline. You can update the release name with custom variables using the [Release logging commands](https://github.com/microsoft/azure-pipelines-tasks/blob/master/docs/authoring/commands.md#release-logging-commands) |

#### Q: How can I define the retention period for my releases?

A: See [retention policies](../policies/retention.md) to learn how to set up retention policies for your release pipelines.

## Related articles

- [Deploy pull request Artifacts](deploy-pull-request-builds.md)
- [Deploy from multiple branches](deploy-multiple-branches.md)
- [Set up a multi-stage release pipeline](define-multistage-release-process.md)
