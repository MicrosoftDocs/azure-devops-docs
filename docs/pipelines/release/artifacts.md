---
title: Release artifacts and artifact sources
description: DevOps CI CD - Understand build artifacts in Azure Pipelines and Team Foundation Server (TFS). This article lists and explains the different artifacts sources and how to consume them. It also explains the artifacts variables and download.
ms.assetid: 6820FA1F-4B20-4845-89E0-E6AB4BD5888D
ms.topic: conceptual
ms.author: shashban
author: shashban
ms.date: 12/08/2021
ms.custom: "contperf-fy20q4, seodec18"
monikerRange: '<= azure-devops'
---

# Release pipelines and Artifact sources

[!INCLUDE [version-lt-eq-azure-devops](../../includes/version-lt-eq-azure-devops.md)]

With Azure Pipelines, you can deploy your artifacts from a wide range of artifact sources and integrate your workflow with different types of artifact repositories. Releases can be linked to multiple artifact sources, where  one is designated as the primary source.

## Artifact sources

Azure Pipelines supports a wide range of repositories, source control tools, and continuous integration systems. 

When creating a release, you can specify the version of your artifact source. By default, releases use the latest version of the source artifact. You can also choose to use the latest build from a specific branch by specifying the tags, a specific version, or allow the user to specify the version at the time of release creation.

:::image type="content" source="media/artifacts-02.png" alt-text="Screenshot showing how to add an artifact to a classic release pipeline.":::

If you link more than one artifact, you can specify which one is the primary source (default).

:::image type="content" source="media/artifacts-02a.png" alt-text="Screenshot showing how to set a primary source artifact.":::

> [!NOTE]
> The `Default version` dropdown items depend on the source type of the linked build definition.

- The following options are supported by all the repository types: `Specify at the time of release creation`, `Specific version`, and `Latest`.

- `Latest from a specific branch with tags` and `Latest from the build pipeline default branch with tags` options are supported by the following repository types: `TfsGit`, `GitHub`, `Bitbucket`, and `GitHubEnterprise`.

- `Latest from the build pipeline default branch with tags` is not supported by `XAML` build definitions.

The following sections describe how to work with the different types of artifact sources.

- [Azure Pipelines](#artifact-sources---azure-pipelines)
- [Version control](#artifact-sources---version-control)
- [Jenkins](#artifact-sources---jenkins)
- [Azure Container Registry, Docker, and Kubernetes](#artifact-sources---containers)
- [Azure Artifacts](#artifact-sources---azure-artifacts)
- [TFS server](#artifact-sources---tfs-server)
- [TeamCity](#artifact-sources---teamcity)
- [Other sources](#artifact-sources---other-sources)

## Artifact sources - Azure Pipelines

You can link a release pipeline to any Azure Pipelines build. You can also link multiple build pipelines and specify their default values and set up deployment triggers on multiple build sources. When any of the builds completes, it will trigger the creation of a release.

The following features are available when using Azure Pipelines as an artifact source:

| Feature | Description                      |
|---------|----------------------------------|
| Auto-trigger releases | New releases can be created automatically when a new build artifact is available (including XAML builds). See [Release triggers](triggers.md) for more details.|
| Artifact variables | A number of [artifact variables](variables.md#artifact-variables) are supported fo Azure Pipelines sources. |
| Work items and commits | You can link Azure Pipelines work items are it will be displayed in the releases details. Commits are displayed when you use Git or TFVC source controls.|
| Artifact download | By default, build artifacts are downloaded to the agent running the pipeline. You can also configure a step in your stage to [skip downloading](../process/phases.md#agent-phase) your artifact. |
| Deployment stages | The build summary list all the deployment stages where the artifact was deployed to. |

> [!NOTE]
> You must include a **Publish Artifacts** task in your build pipeline. For YAML build pipelines, an artifact with the name **drop** is published implicitly.

::: moniker range="> azure-devops-2022"

By default, releases run with a collection level job authorization scope. This means that releases can access resources in all projects in the organization (or collection for Azure DevOps Server). This is useful when linking build artifacts from other projects. You can enable **Limit job authorization scope to current project for release pipelines** in project settings to restrict access to a project's artifact.

**To set job authorization scope for the organization**:

- Navigate to your **Organization settings**.
- Select **Settings** under Pipelines.
- Turn on the toggle **Limit job authorization scope to current project for release pipelines** to limit the scope to current project. This is the recommended setting for a good security measures.

**To set job authorization scope for a specific project**:

- Navigate to your **Project settings**.
- Select **Settings** under Pipelines.
- Turn on the toggle **Limit job authorization scope to current project for release pipelines** to limit the scope to the current project. This is the recommended setting, as it enhances security for your pipelines.

> [!NOTE] 
> If the scope is set to project at the organization level, you cannot change the scope in each project.

::: moniker-end

::: moniker range="< azure-devops"

All jobs in a release run with the job authorization scope set to collection. In other words, these jobs have access to resources in all projects in your project collection. 

::: moniker-end

## Artifact sources - version control

There are some scenarios in which you may want to consume artifacts from different source controls directly without passing them through a build pipeline. For example:

- You are developing a PHP or a JavaScript application that does not require an explicit build pipeline.

- You manage configurations for various stages in different version control repositories, and you want to consume these configuration files directly from version control as part of the deployment pipeline.

- You manage your infrastructure and configuration as code and you want to manage these files in a version control repository.

Because you can configure multiple artifact sources in a single release pipeline, you can link both a build pipeline that produces the binaries of your application as well as a version control repository that stores the configuration files into the same pipeline, and use the two sets of artifacts together while deploying.

Azure Pipelines supports Team Foundation Version Control (TFVC) repositories, Git repositories, and GitHub repositories.

You can link a release pipeline to any of the Git or TFVC repositories in any project in your collection (you will need read access to these repositories). No additional setup is required when deploying version control artifacts within the same collection.

When you link a GitHub repository and select a branch, you can edit the default properties of the artifact types after the artifact has been saved. This is particularly useful in scenarios where the branch for the stable version of the artifact changes, and continuous delivery releases should use this branch to obtain newer versions of the artifact. You can also specify details of the checkout, such as whether checkout submodules and LFS-tracked files, and the shallow fetch depth.

When you link a TFVC branch, you can specify the changeset to be deployed when creating a release.

The following features are available when using TFVC, Git, and GitHub as an artifact source:

| Feature | Description                      |
|---------|----------------------------------|
| Auto-trigger releases | New releases can be created automatically when a new build artifact is available (including XAML builds). See [Release triggers](triggers.md) for more details.|
| Artifact variables | A number of [artifact variables](variables.md#artifact-variables) are supported fo Azure Pipelines sources. |
| Work items and commits | You can link Azure Pipelines work items are it will be displayed in the releases details. Commits are displayed when you use Git or TFVC source controls.|
| Artifact download | By default, build artifacts are downloaded to the agent running the pipeline. You can also configure a step in your stage to [skip downloading](../process/phases.md#agent-phase) your artifact. |

::: moniker range="> azure-devops-2022"

By default, releases run with a collection level job authorization scope. This means that releases can access resources in all projects in the organization (or collection for Azure DevOps Server). This is useful when linking build artifacts from other projects. You can enable **Limit job authorization scope to current project for release pipelines** in project settings to restrict access to a project's artifact.

::: moniker-end

## Artifact sources - Jenkins

To consume Jenkins artifacts, you must create a service connection to authenticate with your Jenkins server. See [manage service connections](../library/service-endpoints.md) and [Jenkins service connection](../library/service-endpoints.md#jenkins-service-connection) for more information. The Jenkins project must be configured with a post build action to publish your artifacts.

The following features are available when using Jenkins as an artifact source:

| Feature | Description                      |
|---------|----------------------------------|
| Auto-trigger releases | New releases can be created automatically when a new build artifact is available (including XAML builds). See [Release triggers](triggers.md) for more details.|
| Artifact variables | A number of [artifact variables](variables.md#artifact-variables) are supported fo Azure Pipelines sources. |
| Work items and commits | You can link Azure Pipelines work items are it will be displayed in the releases details. Commits are displayed when you use Git or TFVC source controls.|
| Artifact download | By default, build artifacts are downloaded to the agent running the pipeline. You can also configure a step in your stage to [skip downloading](../process/phases.md#agent-phase) your artifact. |

Artifacts generated by Jenkins builds are typically propagated to storage repositories for archiving and sharing. Azure blob storage is one of the supported repositories, allowing you to consume Jenkins projects that publish to Azure storage as artifact sources in a release pipeline. Azure Pipelines download the artifacts automatically from Azure to the agent running the pipeline. In this scenario, connectivity between the agent and the Jenkins server is not required. Microsoft-hosted agents can be used without exposing the server to internet.

> [!NOTE]
> Azure Pipelines may not be able to contact your Jenkins server if, for example, it is within your enterprise network. If this is the case, you can integrate Azure Pipelines with Jenkins by setting up an on-premises agent that can access the Jenkins server. You will not be able to see the name of your Jenkins projects when linking to a build, but you can enter the name in the URL text field.

## Artifact sources - containers

When deploying containerized apps, the container image is first pushed to a container registry. You can then deploy your container image to Azure Web App for Containers or a Docker/Kubernetes cluster. You must create a service connection to authenticate with with Azure. See [manage service connections](../library/service-endpoints.md) for more details.

The following features are available when using Azure Container as an artifact source:

| Feature | Description                      |
|---------|----------------------------------|
| Auto-trigger releases | New releases can be created automatically when a new build artifact is available (including XAML builds). See [Release triggers](triggers.md) for more details.|
| Artifact variables | A number of [artifact variables](variables.md#artifact-variables) are supported fo Azure Pipelines sources. |
| Work items and commits | You can link Azure Pipelines work items are it will be displayed in the releases details. Commits are displayed when you use Git or TFVC source controls.|
| Artifact download | By default, build artifacts are downloaded to the agent running the pipeline. You can also configure a step in your stage to [skip downloading](../process/phases.md#agent-phase) your artifact. |

> [!NOTE]
> When using multiple artifact sources, mapping an artifact source to trigger a particular stage is not supported. A release will be created anytime there is a push to any of the artifact sources. If you wish to do so, Azure Pipelines recommend splitting your release pipeline into multiple releases.

## Artifact sources - Azure Artifacts

Below are some of the scenarios where you can use Azure Artifacts as an artifact source:

1.  Your application binary is published to Azure Artifacts and you want to consume the package in a release pipeline.
1.  You need additional packages stored in Azure Artifacts as part of your deployment workflow.

Using Azure Artifacts in your release pipeline, you must select the *Feed*, *Package*, and the *Default version* for your package. You can choose to pick up the *latest version of the package*, use a *specific version*, or *select the version at the time of release creation*. During deployment, the package gets downloaded/extracted to the agent running your pipeline.

The following features are available when using Azure Artifacts as an artifact source:

| Feature | Description                      |
|---------|----------------------------------|
| Auto-trigger releases | New releases can be created automatically when a new build artifact is available (including XAML builds). See [Release triggers](triggers.md) for more details.|
| Artifact variables | A number of [artifact variables](variables.md#artifact-variables) are supported fo Azure Pipelines sources. |
| Work items and commits | You can link Azure Pipelines work items are it will be displayed in the releases details. Commits are displayed when you use Git or TFVC source controls.|
| Artifact download | By default, build artifacts are downloaded to the agent running the pipeline. You can also configure a step in your stage to [skip downloading](../process/phases.md#agent-phase) your artifact. |

#### Handling Maven snapshots

When using Maven snapshots, multiple versions can be downloaded at once (example `myApplication-2.1.0.BUILD-20190920.220048-3.jar`, `myApplication-2.1.0.BUILD-20190820.221046-2.jar`, `myApplication-2.1.0.BUILD-20190820.220331-1.jar`). You might need to remove the old version and only keep the latest Artifact before deployment. Run the following PowerShell command in an elevated command prompt to remove all copies except the one with the highest lexicographical value:

    ```PowerShell
    Get-Item "myApplication*.jar" | Sort-Object -Descending Name | Select-Object -SkipIndex 0 | Remove-Item
    ```

> [!NOTE]
> You can store up to 30 Maven snapshots in your feed. Once you reach the maximum limit, Azure Artifacts will automatically delete snapshots down to 25. This process will be triggered automatically every time 30+ snapshots are published to your feed.

## Artifact sources - TFS server

You can use Azure Pipelines to deploy artifacts published by an on-premises TFS server. You don't need to make the TFS server visible on the Internet; you just set up an on-premises automation agent. Builds from an on-premises TFS server are downloaded directly into the on-premises agent, and then deployed to the specified target servers. They will not leave your enterprise network. This allows you to leverage all of your investments in your on-premises TFS server, and take advantage of the release capabilities in Azure Pipelines.

> [!TIP]
> Using this mechanism, you can also deploy artifacts published in one Azure Pipelines subscription in another Azure Pipelines, or deploy artifacts published in one Team Foundation Server from another Team Foundation Server.

To enable these scenarios, you must install the [TFS artifacts for Azure Pipelines](https://marketplace.visualstudio.com/items?itemName=ms-vscs-rm.vss-services-externaltfs) extension from Visual Studio Marketplace. Then create a service connection with credentials to connect to your TFS server (see [service connections](../library/service-endpoints.md) for details).

You can then link a TFS build pipeline to your release pipeline. Choose **External TFS Build** in the **Type** list.

The following features are available when using external TFS sources:


|        Feature         |                                                                                                                                           Behavior with external TFS sources                                                                                                                                           |
|------------------------|------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| Auto-trigger releases  | You cannot configure a continuous deployment trigger for external TFS sources in a release pipeline. To automatically create a new release when a build is complete, you would need to add a script to your build pipeline in the external TFS server to invoke Azure Pipelines REST APIs and to create a new release. |
|   Artifact variables   |                                                                                                                 A number of [artifact variables](variables.md) are supported for external TFS sources.                                                                                                                 |
| Work items and commits |                                                                                                                      Azure Pipelines cannot show work items or commits for external TFS sources.                                                                                                                       |
|   Artifact download    |                                                                    By default, External TFS artifacts are downloaded to the agent. You can configure an option in the stage to [skip the download](../process/phases.md#agent-phase) of artifacts.                                                                     |

> [!NOTE]
> Azure Pipelines may not be able to contact an on-premises TFS server in case it's within your enterprise network. In that case you can integrate Azure Pipelines with TFS by setting up an on-premises agent that can access the TFS server. You will not be able to see the name of your TFS projects or build pipelines when linking to a build, but you can include those variables in the link dialog fields. In addition, when you create a release, Azure Pipelines may not be able to query the TFS server for the build numbers. Instead, enter the **Build ID** (not the build number) of the desired build in the appropriate field, or select the **Latest** build.

## Artifact sources - TeamCity

To integrate with TeamCity, you must first install the [TeamCity artifacts for Azure Pipelines](https://marketplace.visualstudio.com/items?itemName=ms-devlabs.vss-services-teamcity) extension from Marketplace.

To consume TeamCity artifacts, start by creating a service connection with credentials to connect to your TeamCity server (see [service connections](../library/service-endpoints.md) for details).

You can then link a TeamCity build configuration to a release pipeline. The TeamCity build configuration must be configured with an action to publish the artifacts.

The following features are available when using TeamCity sources:


|        Feature         |                                                                                                                       Behavior with TeamCity sources                                                                                                                       |
|------------------------|----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| Auto-trigger releases  | You cannot configure a continuous deployment trigger for TeamCity sources in a release pipeline. To create a new release automatically when a build is complete, add a script to your TeamCity project that invokes the Azure Pipelines REST APIs to create a new release. |
|   Artifact variables   |                                                                                           A number of [artifact variables](variables.md) are supported for builds from TeamCity.                                                                                           |
| Work items and commits |                                                                                                   Azure Pipelines cannot show work items or commits for TeamCity builds.                                                                                                   |
|   Artifact download    |                                                  By default, TeamCity builds are downloaded to the agent. You can configure an option in the stage to [skip the download](../process/phases.md#agent-phase) of artifacts.                                                  |

> [!NOTE]
> Azure Pipelines may not be able to contact your TeamCity server if, for example, it is within your enterprise network. In this case you can integrate Azure Pipelines with TeamCity by setting up an on-premises agent that can access the TeamCity server. You will not be able to see the name of your TeamCity projects when linking to a build, but you can type this into the link dialog field.

## Artifact sources - Custom artifacts

In addition to built-in artifact sources, Azure Artifacts supports integrating any custom artifact source with the artifact extensibility model. You can plug in any custom artifact source, and Azure DevOps will provide a first-class user experience and seamless integration.

For more information, see [Azure DevOps artifact extensibility model](https://aka.ms/artifactextensibility).

## Artifact sources - Other sources

Your artifacts may be created and exposed by other types of sources such as a NuGet repository. While we continue to expand the types of artifact sources supported in Azure Pipelines, you can start using it without waiting for support for a specific source type. Simply skip the linking of artifact sources in a release pipeline, and add custom tasks to your stages that download the artifacts directly from your source.

## Artifact source alias

To ensure the uniqueness of every artifact download, each artifact source linked to a release pipeline is automatically provided with a specific download location known as the _source alias_. This location can be accessed through the variable:

`$(System.DefaultWorkingDirectory)\[source alias]`

This uniqueness also ensures that, if you later rename a linked artifact source in its original location (for example, rename a build pipeline in Azure Pipelines or a project
in Jenkins), you don't need to edit the task properties because the download location defined in the agent does not change.

The source alias is, by default, the name of the source selected when you linked the artifact source, prefixed with an underscore; depending on the type of the artifact source this will be the name of the build pipeline, job, project, or repository. You can edit the source alias from the artifacts tab of a release pipeline; for example, when you change the name of the build pipeline and you want to use a source alias that reflects the name of the build pipeline.

## Primary source

When you link multiple artifact sources to a release pipeline, one of them is designated as the primary artifact source. The primary artifact source is used to set a number of predefined [variables](variables.md#artifact-variables). It can also be used in [naming releases](index.md#numbering).

## Artifact download

When you deploy a release to a stage, the versioned artifacts from each of the sources are, by default, downloaded to the automation agent so that tasks running within that stage can deploy these artifacts. The artifacts downloaded to the agent are not deleted when a release is completed. However, when you initiate the next release, the downloaded artifacts are deleted and replaced with the new set of artifacts.

A new unique folder in the agent is created for every release pipeline when you initiate a release, and the artifacts are downloaded into that folder. The `$(System.DefaultWorkingDirectory)` variable maps to this folder.

Azure Pipelines currently does not perform any optimization to avoid downloading the unchanged artifacts if the same release is deployed again. In addition, because the previously downloaded contents are always deleted when you initiate a new release, Azure Pipelines cannot perform incremental downloads to the agent.

::: moniker range="< azure-devops"

You can, however, instruct Azure Pipelines to [skip the automatic download](../process/phases.md#artifact-download) of artifacts to the agent for a specific job and stage of the deployment if you wish. Typically, you will do this when the tasks in that job do not require any artifacts, or if you implement custom code in a task to download the artifacts you require.

::: moniker-end

::: moniker range="azure-devops"

In Azure Pipelines, you can, however, [select which artifacts you want to download](../process/phases.md#artifact-download) to the agent for a specific job and stage of the deployment. Typically, you will do this to improve the efficiency of the deployment pipeline when the tasks in that job do not require all or any of the artifacts, or if you implement custom code in a task to download the artifacts you require.

:::image type="content" source="media/select-artifacts.png" alt-text="Selecting the artifacts to download":::

::: moniker-end

## Artifact variables

Azure Pipelines exposes a set of predefined variables that you can access and use in tasks and scripts; for example, when executing PowerShell scripts in deployment jobs. When there are multiple artifact sources linked to a release pipeline, you can access information about each of these. For a list of all predefined artifact variables, see [variables](variables.md#artifact-variables).

## Related articles

* [Release pipelines](index.md)
* [Stages](../process/stages.md)

[!INCLUDE [rm-help-support-shared](../includes/rm-help-support-shared.md)]
