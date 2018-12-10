---
title: Understand release pipelines and release names
ms.custom: seodec18
description: DevOps CI CD - Understand release pipelines in Azure Pipelines and Team Foundation Server (TFS)
ms.assetid: 604AFC89-57CD-44F9-B440-5F07F88F0BD4
ms.prod: devops
ms.technology: devops-cicd
ms.topic: conceptual
ms.manager: douge
ms.author: ahomer
author: alexhomer1
ms.date: 08/24/2018
monikerRange: '>= tfs-2015'
---

# Release pipelines and release names

[!INCLUDE [version-rm-dev14](../_shared/version-rm-dev14.md)]

::: moniker range="<= tfs-2018"
[!INCLUDE [temp](../_shared/concept-rename-note.md)]
::: moniker-end

A **release pipeline** is one of the fundamental concepts in Azure Pipelines for your DevOps CI/CD processes.
It defines the end-to-end release pipeline for an application to be deployed across various stages.

You start using Azure Pipelines releases by authoring a release pipeline for your application. To author a release pipeline, you must specify the [artifacts](artifacts.md) that make up the application and the **release pipeline**.

An **artifact** is a deployable component of your application. It is typically produced through a Continuous Integration or a build pipeline. Azure Pipelines releases can deploy artifacts that are produced by a [wide range of artifact sources](artifacts.md#sources) such as Azure Pipelines build, Jenkins, or Team City.

You define the **release pipeline** using [stages](environments.md), and restrict deployments into or out of an stage using [approvals](approvals/index.md). You define the automation in each stage using [jobs](../process/phases.md) and [tasks](../process/tasks.md). You use [variables](variables.md) to generalize your automation and [triggers](triggers.md) to control when the deployments should be kicked off automatically.

An example of a release pipeline that can be modeled through a release pipeline in shown below:

![Artifacts in a pipeline and release](_img/definition-01.png)

[What's the difference between a release pipeline and a release?](releases.md)

In this example, a release of a website is created by collecting specific versions of two builds (artifacts), each from a different build pipeline. The release is first deployed to a Dev stage
and then forked to two QA stages in parallel. If the deployment succeeds in both the QA stages, the release is deployed to Prod ring 1 and then to Prod ring 2. Each production ring represents multiple instances of the same website deployed at various locations around the globe.

::: moniker range=">= tfs-2017"

An example of how deployment automation can be modeled within an stage is shown below:

![Artifacts in a pipeline and release](_img/definition-02.png)

In this example, a [job](../process/phases.md) is used to deploy the app to websites across the globe in parallel within production ring 1.
After all those deployments are successful, a second job is used to switch traffic from the previous version to the newer version.

::: moniker-end

::: moniker range="<= tfs-2015"

> **TFS 2015**: Jobs, and fork and join deployments, are not available in TFS 2015.

::: moniker-end

Besides the release pipeline, release pipelines have a few options that can be customized: 
[release names](#numbering) and [retention policies](../policies/retention.md).

<h2 id="numbering">Release names</h2>

The names of releases for a release pipeline are, by default, sequentially numbered.
The first release is named **Release-1**, the next release is
**Release-2**, and so on. You can change this naming scheme by editing the
release name format mask. In the **Options** tab of a release pipeline,
edit the **Release name format** property.

When specifying the format mask, you can use the following pre-defined variables.

| Variable | Description |
|----------|-------------|
| **Rev:rr** | An auto-incremented number with at least the specified number of digits. |
| **Date / Date:MMddyy** | The current date, with the default format **MMddyy**. Any combinations of M/MM/MMM/MMMM, d/dd/ddd/dddd, y/yy/yyyy/yyyy, h/hh/H/HH, m/mm, s/ss are supported. |
| **System.TeamProject** | The name of the project to which this build belongs. |
| **Release.ReleaseId** | The ID of the release, which is unique across all releases in the project. |
| **Release.DefinitionName** | The name of the release pipeline to which the current release belongs. |
| **Build.BuildNumber** | The number of the build contained in the release. If a release has multiple builds, this is the number of the [primary build](artifacts.md#primary-source). |
| **Build.DefinitionName** | The pipeline name of the build contained in the release. If a release has multiple builds, this is the pipeline name of the [primary build](artifacts.md#primary-source). |
| **Artifact.ArtifactType** | The type of the artifact source linked with the release. For example, this can be **Azure Pipelines** or **Jenkins**. |
| **Build.SourceBranch** | The branch of the [primary artifact source](artifacts.md#primary-source). For Git, this is of the form **master** if the branch is **refs/heads/master**. For Team Foundation Version Control, this is of the form **branch** if the root server path for the workspace is **$/teamproject/branch**. This variable is not set for Jenkins or other artifact sources. |
| *Custom variable* | The value of a global configuration property defined in the release pipeline. |

For example, the release name format `Release $(Rev:rrr) for build $(Build.BuildNumber) $(Build.DefinitionName)` will create releases with names such as **Release 002 for build 20170213.2 MySampleAppBuild**.

## Release retention

You can customize how long releases of this pipeline must be retained. For more information, see [release retention](../policies/retention.md).

## Release history

Every time you save a release pipeline, Azure Pipelines keeps a copy of the changes. This allows you to compare the changes at a later point, especially when you are debugging a deployment failure.

## Related topics

* [Artifacts](artifacts.md)
* [Stages](environments.md)
* [Triggers](triggers.md)
* [Variables](variables.md)
* [Release retention](../policies/retention.md)
* [Release security](../policies/permissions.md#release-permissions)

[!INCLUDE [rm-help-support-shared](../_shared/rm-help-support-shared.md)]
