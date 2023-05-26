---
title: Release pipelines and artifact sources
description: Understand release pipelines and the different artifact sources.
ms.assetid: 6820FA1F-4B20-4845-89E0-E6AB4BD5888D
ms.topic: conceptual
ms.author: shashban
author: shashban
ms.date: 01/12/2023
ms.custom: contperf-fy20q4, seodec18, engagement-fy23, devx-track-jenkins
monikerRange: '<= azure-devops'
---

# Release pipelines and Artifact sources

[!INCLUDE [version-lt-eq-azure-devops](../../includes/version-lt-eq-azure-devops.md)]

With Azure Pipelines, you can deploy your artifacts from a wide range of artifact sources and integrate your workflow with different types of artifact repositories. Releases can be linked to multiple artifact sources, where  one is designated as the primary source.

## Artifact sources

Azure Pipelines supports a wide range of repositories, source control tools, and continuous integration systems. 

When creating a release, you can specify the version of your artifact source. By default, releases use the latest version of the source artifact. You can also choose to use the latest build from a specific branch by specifying the tags, a specific version, or allow the user to specify the version at the time of release creation.

:::image type="content" source="media/artifacts-02.png" alt-text="Screenshot showing how to add an artifact to a classic release pipeline.":::

If you link more than one artifact, you can specify which one is the primary source (default). The primary artifact source is used to set a number of predefined [variables](variables.md#artifact-variables). It can also be used in [naming releases](index.md#numbering).


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

## Artifact sources - Azure Pipelines

You can link a release pipeline to any Azure Pipelines build. You can also link multiple build pipelines and specify their default values and set up deployment triggers on multiple build sources. When any of the builds completes, it will trigger the creation of a release.

The following features are available when using Azure Pipelines as an artifact source:

| Feature | Description                      |
|---------|----------------------------------|
| Auto-trigger releases | New releases can be created automatically when a new build artifact is available (including XAML builds). See [Release triggers](triggers.md) for more details.|
| Artifact variables | A number of [artifact variables](variables.md#artifact-variables) are supported fo Azure Pipelines sources. |
| Work items and commits | You can link Azure Pipelines work items and it will be displayed in the releases details. Commits are displayed when you use Git or TFVC source controls.|
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

- Developing a PHP or a JavaScript application that doesn't require an explicit build pipeline.

- You manage configurations for various stages in different version control repositories, and you want to consume these configuration files directly from version control as part of the deployment pipeline.

- You manage your infrastructure and configuration as code and you want to manage these files in a version control repository.

Because you can configure multiple artifact sources in a single release pipeline, you can link both a build pipeline that produces the binaries of your application as well as a version control repository that stores the configuration files into the same pipeline, and use the two sets of artifacts together while deploying.

Azure Pipelines supports Team Foundation Version Control (TFVC) repositories, Git repositories, and GitHub repositories.

You can link a release pipeline to any of the Git or TFVC repositories in any project in your collection (you'll need read access to these repositories). No additional setup is required when deploying version control artifacts within the same collection.

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
| Work items and commits | You can link Azure Pipelines work items and it will be displayed in the releases details. Commits are displayed when you use Git or TFVC source controls.|
| Artifact download | By default, build artifacts are downloaded to the agent running the pipeline. You can also configure a step in your stage to [skip downloading](../process/phases.md#agent-phase) your artifact. |

Artifacts generated by Jenkins builds are typically propagated to storage repositories for archiving and sharing. Azure blob storage is one of the supported repositories, allowing you to consume Jenkins projects that publish to Azure storage as artifact sources in a release pipeline. Azure Pipelines download the artifacts automatically from Azure to the agent running the pipeline. In this scenario, connectivity between the agent and the Jenkins server is not required. Microsoft-hosted agents can be used without exposing the server to internet.

> [!NOTE]
> Azure Pipelines may not be able to contact your Jenkins server if, for example, it is within your enterprise network. If this is the case, you can integrate Azure Pipelines with Jenkins by setting up an on-premises agent that can access the Jenkins server. You will not be able to see the name of your Jenkins projects when linking to a build, but you can enter the name in the URL text field.

## Artifact sources - containers

When deploying containerized apps, the container image is first pushed to a container registry. You can then deploy your container image to Azure Web App for Containers or a Docker/Kubernetes cluster. You must create a service connection to authenticate with Azure. See [manage service connections](../library/service-endpoints.md) for more details.

The following features are available when using Azure Container as an artifact source:

| Feature | Description                      |
|---------|----------------------------------|
| Auto-trigger releases | New releases can be created automatically when a new build artifact is available (including XAML builds). See [Release triggers](triggers.md) for more details.|
| Artifact variables | A number of [artifact variables](variables.md#artifact-variables) are supported fo Azure Pipelines sources. |
| Work items and commits | You can link Azure Pipelines work items and it will be displayed in the releases details. Commits are displayed when you use Git or TFVC source controls.|
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
| Work items and commits | You can link Azure Pipelines work items and it will be displayed in the releases details. Commits are displayed when you use Git or TFVC source controls.|
| Artifact download | By default, build artifacts are downloaded to the agent running the pipeline. You can also configure a step in your stage to [skip downloading](../process/phases.md#agent-phase) your artifact. |

#### Handling Maven snapshots

When using Maven snapshots, multiple versions can be downloaded at once (example `myApplication-2.1.0.BUILD-20190920.220048-3.jar`, `myApplication-2.1.0.BUILD-20190820.221046-2.jar`, `myApplication-2.1.0.BUILD-20190820.220331-1.jar`). You might need to remove the old version and only keep the latest Artifact before deployment. Run the following PowerShell command in an elevated command prompt to remove all copies except the one with the highest lexicographical value:

```PowerShell
Get-Item "myApplication*.jar" | Sort-Object -Descending Name | Select-Object -SkipIndex 0 | Remove-Item
```

> [!NOTE]
> You can store up to 30 Maven snapshots in your feed. Once you reach the maximum limit, Azure Artifacts will automatically delete snapshots down to 25. This process will be triggered automatically every time 30+ snapshots are published to your feed.

## Artifact sources - TFS server

You can use Azure Pipelines to deploy artifacts from TFS servers without having to make your server discoverable on the Internet by setting up an on-premises automation agent. Artifacts are downloaded to the on-premises agent and then deployed to the specified target servers without leaving your enterprise network. This is ideal for customers  to leverage their investments of their on-premises infrastructure while taking advantage of Azure Pipelines releases.

To use TFS servers as an artifact source, you must install the [TFS artifacts for Azure Pipelines](https://marketplace.visualstudio.com/items?itemName=ms-vscs-rm.vss-services-externaltfs) extension from the Visual Studio Marketplace, and then create a [service connection](../library/service-endpoints.md) to authenticate with Azure Pipelines. Once authenticated, you can then link a TFS build pipeline to your release pipeline and choose **External TFS Build** from the *Type* dropdown menu.

The following features are available when using TFS servers as an artifact source:

| Feature | Description                      |
|---------|----------------------------------|
| Auto-trigger releases | New releases can be created automatically when a new build artifact is available (including XAML builds). See [Release triggers](triggers.md) for more details.|
| Artifact variables | A number of [artifact variables](variables.md#artifact-variables) are supported fo Azure Pipelines sources. |
| Work items and commits | You can link Azure Pipelines work items and it will be displayed in the releases details. Commits are displayed when you use Git or TFVC source controls.|
| Artifact download | By default, build artifacts are downloaded to the agent running the pipeline. You can also configure a step in your stage to [skip downloading](../process/phases.md#agent-phase) your artifact. |

Azure Pipelines may not be able to contact an on-premises TFS server in case it's within your enterprise network. In that case you can integrate Azure Pipelines with TFS by setting up an on-premises agent that can access the TFS server. You will not be able to see the name of your TFS projects or build pipelines when linking to a build, but you can include those variables in the URL text fields. In addition, when you create a release, Azure Pipelines may not be able to query the TFS server for the build numbers. Instead, enter the *Build ID* (not the build number) of the desired build in the appropriate field, or select the *Latest* build.

## Artifact sources - TeamCity

To use TeamCity as an Artifact source, you must first install the [TeamCity artifacts for Azure Pipelines](https://marketplace.visualstudio.com/items?itemName=ms-devlabs.vss-services-teamcity) extension from Visual Studio Marketplace.

Once completed, create a [service connection](../library/service-endpoints.md) to authenticate with your TeamCity server. You can then link your build artifact to a release pipeline. The TeamCity build configuration must be set up with an action to publish artifacts.

The following features are available when using TeamCity as an artifact source:

| Feature | Description                      |
|---------|----------------------------------|
| Auto-trigger releases | New releases can be created automatically when a new build artifact is available (including XAML builds). See [Release triggers](triggers.md) for more details.|
| Artifact variables | A number of [artifact variables](variables.md#artifact-variables) are supported fo Azure Pipelines sources. |
| Work items and commits | You can link Azure Pipelines work items and it will be displayed in the releases details. Commits are displayed when you use Git or TFVC source controls.|
| Artifact download | By default, build artifacts are downloaded to the agent running the pipeline. You can also configure a step in your stage to [skip downloading](../process/phases.md#agent-phase) your artifact. |

Azure Pipelines may not be able to contact your TeamCity server if, for example, it is within your enterprise network. In this case you can integrate Azure Pipelines with TeamCity by setting up an on-premises agent that can access the TeamCity server. You will not be able to see the name of your TeamCity projects when linking to a build, but you can type this into the URL text field.

## Artifact source alias

To ensure the uniqueness of every artifact download, each artifact source linked to a release pipeline is automatically provided with a specific download location known as the *source alias*. This location can be accessed by using the variable: `$(System.DefaultWorkingDirectory)\[source alias]`

Using a source aliases ensures that renaming a linked artifact source doesn't require editing the task properties because the download location defined in the agent does not change.

By default, the source alias is the name of the artifact source prefixed with an underscore. Depending on the type of the artifact source, this will be the name of the build pipeline, job name, project name, or the repository name. You can edit the source alias from the artifacts tab of your release pipeline.

## Artifact download

When a deployment is completed to a stage, the versioned artifacts from each of the sources are downloaded to the pipeline agent so that tasks running within that stage can access those artifacts. The downloaded artifacts do not get deleted when a release is completed. However, when you initiate the next release, the downloaded artifacts are deleted and replaced with the new set of artifacts.

A new unique folder in the agent is created for every release pipeline when a release is initiated, and the artifacts are downloaded to the following folder:`$(System.DefaultWorkingDirectory)`.

Azure Pipelines does not perform any optimization to avoid downloading the unchanged artifacts if the same release is deployed again. In addition, because the previously downloaded contents are always deleted when you initiate a new release, Azure Pipelines cannot perform incremental downloads to the agent.

::: moniker range="< azure-devops"

You can however, set up your pipeline to [skip automatic download](../process/phases.md#artifact-download) for a specific job or stage if you wish to do so. 

::: moniker-end

## Related articles

- [Classic release and artifacts variables](variables.md#artifact-variables)
- [Classic release pipelines](index.md)
- [Publish and download pipeline Artifacts](../artifacts/pipeline-artifacts.md)
- [Add stages, dependencies, & conditions](../process/stages.md)
