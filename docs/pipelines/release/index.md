---
title: Classic release pipelines
description: Overview of classic release pipelines
ms.assetid: 126C3E1C-9DB3-4E46-918D-FF5600BF8FC9
ms.topic: conceptual
ms.custom: engagement-fy23
ms.author: ronai
author: RoopeshNair
ms.date: 06/02/2023
monikerRange: '<= azure-devops'
---

# Classic release pipelines

[!INCLUDE [version-lt-eq-azure-devops](../../includes/version-lt-eq-azure-devops.md)]

Classic release pipelines provide developers with a framework for deploying applications to multiple environments efficiently and securely. Using classic release pipelines, you can automate testing and deployment processes, set up flexible deployment strategies, incorporate approval workflows, and ensure smooth application transitions across various stages.

## How do release pipelines work

As part of every deployment, Azure Pipelines executes the following steps:

1. **Pre-deployment approval**:
   
    When a new deployment request is triggered, Azure Pipelines verifies if a predeployment approval is necessary before deploying a release to a stage. If approval is required, it sends email notifications to the relevant approvers.

1. **Queue deployment job**:
   
    Azure Pipelines schedules the deployment job on an available [Agent](../agents/agents.md).

1. **Agent selection**:
   
    An available agent picks up the deployment job. A release pipeline can be configured to dynamically select a suitable agent during runtime.

1. **Download artifacts**:
   
    The agent retrieves and downloads all the artifacts specified in the release.

1. **Run the deployment tasks**:
   
    The agent executes all the tasks in the deployment job.

1. **Generate progress logs**:
   
    The agent generates comprehensive logs for each deployment step and sends them back to Azure Pipelines.

1. **Post-deployment approval**:
   
    After the deployment to a stage is finished, Azure Pipelines verifies if a post-deployment approval is necessary for that particular stage. If no approval is needed, or once a required approval is obtained, it proceeds to initiate the deployment to the next stage.

:::image type="content" source="media/what-is-release-management/understand-rm-05.png" alt-text="A screenshot showing the deployment steps in Azure Pipelines.":::

## Deployment model

Azure release pipelines support a wide range of [artifact sources](artifacts.md#artifact-sources) including Jenkins, Azure Artifacts, and Team City. The following example illustrates a deployment model using Azure release pipelines:

In the following example, the pipeline consists of two build artifacts originating from separate build pipelines. The application is initially deployed to the *Dev* stage and then to two separate *QA* stages. If the deployment is successful in both QA stages, the application will be deployed to *Prod ring 1* and then to *Prod ring 2*. Each production ring represents multiple instances of the same web app, deployed to different locations across the world.

:::image type="content" source="media/definition-01.png" alt-text="A screenshot showing a release pipeline deployment steps.":::

## Releases vs deployments 

A **release** is a construct that holds a versioned set of artifacts specified in a CI/CD pipeline. It includes a snapshot of all the information required to carry out all the tasks and actions in the release pipeline, such as stages, tasks, policies such as triggers and approvers, and deployment options. There can be multiple releases from one release pipeline, and information about each one is stored and displayed in Azure Pipelines for the specified [retention period](../policies/retention.md#release).  

A **deployment** is the action of running the tasks for one stage, which can include running automated tests, deploying build artifacts, and whatever other actions are specified for that stage. 
Initiating a release starts each deployment based on the settings and policies defined in the original release pipeline. There can be multiple deployments of each release even for one stage. When a deployment of a release fails for a stage, you can redeploy the same release to that stage. To redeploy a release, simply navigate to the release you want to deploy and select deploy.

The following diagram shows the relationship between release, release pipelines, and deployments.

:::image type="content" source="media/release-deploy.png" alt-text="Relationship between releases, release pipelines, and deployments":::

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
