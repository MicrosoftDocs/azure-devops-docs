---
title: Classic release pipelines
ms.custom: seodec18
description: What are classic release pipelines in Azure Pipelines
ms.assetid: 126C3E1C-9DB3-4E46-918D-FF5600BF8FC9
ms.topic: conceptual
ms.author: ronai
author: RoopeshNair
ms.date: 08/11/2021
monikerRange: '<= azure-devops'
---

# Classic release pipelines

[!INCLUDE [version-lt-eq-azure-devops](../../includes/version-lt-eq-azure-devops.md)]

With classic release pipelines, developers can easily and safely deploy their applications to multiple environments. Developers can fully automate testing and deployment to multiple stages or set up semi-automated processes with approvals and on-demand deployments.

## How do release pipelines work

Azure Pipelines runs the following steps as part of every deployment:

1. **Pre-deployment approval**:
   When a new deployment request is triggered, Azure Pipelines checks whether a pre-deployment approval is required before deploying a release to a stage. If it's required, it sends out email notifications to the appropriate approvers.

1. **Queue deployment job**:
   Azure Pipelines schedules the deployment job on an available [Agent](../agents/agents.md).

1. **Agent selection**:
   An agent picks up the job. A release pipeline can be configured to select an appropriate agent at runtime.

1. **Download artifacts**:
   The agent downloads all the artifacts specified in that release. The agent currently supports two types of artifacts: Azure Pipelines artifacts and Jenkins artifacts.

1. **Run the deployment tasks**:
   The agent runs all the tasks in the deployment job.

1. **Generate progress logs**:
   The agent creates detailed logs for each step of deployment and pushes these logs back to Azure Pipelines.

1. **Post-deployment approval**:
   When deployment to a stage is complete, Azure Pipelines checks if there's a post-deployment approval required for that stage. If no approval is required, or upon completion of a required approval, it proceeds to trigger deployment to the next stage.

:::image type="content" source="media/what-is-release-management/understand-rm-05.png" alt-text="A screenshot showing how release pipelines work.":::

## Deployment model

Azure release pipelines supports a wide range of [artifact sources](artifacts.md#sources) such as pipelines build, Jenkins, and Team City. The following example illustrates a deployment model using Azure release pipelines:

:::image type="content" source="media/definition-01.png" alt-text="A screenshot showing the deployment model.":::

In this example, the pipeline is composed of two build artifacts from two different build pipelines. The application is first deployed to the *Dev* stage and then forked to two QA stages. If deployment succeeds in both QA stages, the application will be deployed to Production ring 1 and then to Production ring 2. Each production ring represents multiple instances of the same website deployed to various locations around the world.

## FAQ 

#### Q: How can I edit variables at release time?

A: In the **Variables** tab of your release pipeline, check the **Settable at release time** option for the variables that you want to edit when a release gets queued.

:::image type="content" source="media/what-is-release-management/define-release-edit-variables.png" alt-text="A screenshot showing how to enable settable at release time variables.":::

Then, when you create a new release, you can edit the values of those variables.

:::image type="content" source="media/what-is-release-management/populate-release-edit-variables.png" alt-text="A screenshot showing how to edit variables at release time.":::

#### Q: When should I edit a release instead of the pipeline that defines it?

A: You can edit the approvals, tasks, and variables of a release instance. However, these edits will only apply to that instance. If you want your changes to apply to all future releases, edit the release pipeline instead.

#### Q: When and why would I abandon a release?

After you create a release, you can redeploy your artifacts to any stages defined in your release. This is useful if you want to do regular manual releases or set up [stage triggers](triggers.md#env-triggers) that redeploys your artifacts to a specific stage.

If you don't plan to reuse the release, or want to prevent it from being used, you can abandon the release as follows **Pipelines** > (...) > **Abandon**. You can't abandon a release when a deployment is in progress, you must cancel the deployment first.

:::image type="content" source="media/what-is-release-management/abandon-release.png" alt-text="A screenshot showing how to abandon a release.":::

## How do I manage the names for new releases?

The names of releases for a release pipeline are, by default, sequentially numbered. The first release is named **Release-1**, the next release is **Release-2**, and so on. You can change this naming scheme by editing the release name format mask. In the **Options** tab of a release pipeline, edit the **Release name format** property in the **General** page.

When specifying the format mask, you can use the following predefined variables.

| Variable | Description |
|----------|-------------|
| **Rev: rr** | An auto-incremented number with at least the specified number of digits. |
| **Date / Date: MMddyy** | The current date, with the default format **MMddyy**. Any combinations of M/MM/MMM/MMMM, d/dd/ddd/dddd, y/yy/yyyy/yyyy, h/hh/H/HH, m/mm, s/ss are supported. |
| **System.TeamProject** | The name of the project to which this build belongs. |
| **Release.ReleaseId** | The ID of the release, which is unique across all releases in the project. |
| **Release.DefinitionName** | The name of the release pipeline to which the current release belongs. |
| **Build.BuildNumber** | The number of the build contained in the release. If a release has multiple builds, it's the number of the [primary build](artifacts.md#primary-source). |
| **Build.DefinitionName** | The pipeline name of the build contained in the release. If a release has multiple builds, it's the pipeline name of the [primary build](artifacts.md#primary-source). |
| **Artifact.ArtifactType** | The type of the artifact source linked with the release. For example, this can be **Azure Pipelines** or **Jenkins**. |
| **Build.SourceBranch** | The branch of the [primary artifact source](artifacts.md#primary-source). For Git, this is of the form **main** if the branch is **refs/heads/main**. For Team Foundation Version Control, this is of the form **branch** if the root server path for the workspace is **$/teamproject/branch**. This variable is not set for Jenkins or other artifact sources. |
| **Custom variable** | The value of a global configuration property defined in the release pipeline. You can update the release name with custom variables using the [Release logging commands](https://github.com/microsoft/azure-pipelines-tasks/blob/master/docs/authoring/commands.md#release-logging-commands) |

For example, the release name format `Release $(Rev:rrr) for build $(Build.BuildNumber) $(Build.DefinitionName)` creates releases with names such as **Release 002 for build 20170213.2 MySampleAppBuild**.

## How do I specify the retention period for releases?

You can customize how long releases of this pipeline must be retained. For more information, see [release retention](../policies/retention.md).

## How do I use and manage release history?

Every time you save a release pipeline, Azure Pipelines keeps a copy of the changes. This copy allows you to compare the changes at a later point, especially when you're debugging a deployment failure.

<a name="getstartednow"></a>

## Get started now!

Complete the following steps:

1. **[Set up a multi-stage managed release pipeline](define-multistage-release-process.md)**
    
1. **[Manage deployments by using approvals and gates](deploy-using-approvals.md)**

## Related articles

- [Link work items to deployments](../../boards/work-items/work-item-deployments-control.md)
- [Deploy pull request Artifacts](./deploy-pull-request-builds.md)
- [Stage templates](./env-templates.md)
- [Deploy from multiple branches](./deploy-multiple-branches.md)
