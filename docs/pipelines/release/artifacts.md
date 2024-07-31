---
title: Artifact sources in Classic release pipelines
description: Learn about the list of artifact sources that can be used in a Classic release pipeline.
ms.assetid: 6820FA1F-4B20-4845-89E0-E6AB4BD5888D
ms.topic: conceptual
ms.author: sandrica
author: silviuandrica
ms.date: 07/31/2024
ms.custom: engagement-fy23, devx-track-jenkins
monikerRange: '<= azure-devops'
---

# Artifact sources in Classic release pipelines

[!INCLUDE [version-lt-eq-azure-devops](../../includes/version-lt-eq-azure-devops.md)]

With Classic release pipelines, you can deploy your artifacts from a wide range of sources. Using the graphical interface, you can set up your pipeline to integrate and consume artifacts from various services. Additionally, you can link multiple artifacts from different sources and designate one as the primary source based on your needs.

## Artifact sources

Azure Pipelines supports a wide range of repositories, services, and CI/CD platforms. When creating a release, you can specify the version of your artifact source. By default, releases use the latest version of the source artifact. You can also choose to use the latest build from a specific branch by specifying the tags, a specific version, or allow the user to specify the version at the time of release creation.

:::image type="content" source="media/classic-release-pipeline-add-artifact-souce.png" alt-text="A screenshot that shows how to add an artifact to a classic release pipeline.":::

If you link multiple artifacts, you can specify which one is the primary source (default). The primary artifact source is used to set several predefined [variables](variables.md#artifact-variables) and can also be used for [naming releases](index.md#q-how-do-i-manage-the-naming-of-new-releases).

:::image type="content" source="media/classic-release-pipeline-set-primary-souce.png" alt-text="A screenshot that shows how to set a primary source artifact.":::

The **Default version** dropdown options depend on the source type of the linked build definition. The options `Specify at the time of release creation`, `Specific version`, and `Latest` are supported by all repository types. However, the `Latest from the build pipeline default branch with tags` is not supported by *XAML* build definitions.

The following sections describe how to work with the different types of artifact sources:

> [Azure Pipelines](#artifact-sources---azure-pipelines)
> [Azure Repos, GitHub, and TFVC](#artifact-sources---version-control)
> [Azure Artifacts](#artifact-sources---azure-artifacts)
> [Azure Container Repository and Docker Hub](#artifact-sources---containers)
> [Jenkins](#artifact-sources---jenkins)

## Azure Pipelines

You can link your Classic release pipeline to any pipeline artifact. Additionally, you can link multiple artifacts and set up deployment triggers on multiple build sources. This setup will create a release each time a new build becomes available. The following features are available when using Azure Pipelines as an artifact source:

| Feature | Description                      |
|---------|----------------------------------|
| Auto-trigger releases | New releases can be created automatically when a new artifact is available (including XAML builds). See [Classic release triggers](triggers.md) for more details.|
| Artifact variables | A number of [artifact variables](variables.md#artifact-variables) are supported for artifacts referenced in a Classic release. |
| Work items and commits | Link work items to see them displayed in the release details. Commits will be shown when using Git or TFVC.|
| Artifact download | By default, pipeline artifacts are downloaded to the agent running the pipeline. You can also configure a step in your stage to [skip downloading](../process/phases.md#agent-phase) the artifact if needed. |
| Deployment stages | The pipeline summary lists all the deployment stages where the artifact has been deployed. |

> [!NOTE]
> To publish your pipeline artifact in a Classic pipeline, you must add a [PublishPipelineArtifact](/azure/devops/pipelines/tasks/reference/publish-pipeline-artifact-v1) task to your pipeline.  In YAML pipelines, a **drop** artifact is published implicitly.

::: moniker range="azure-devops"

### Limit job authorization scope

By default, releases run with an organization-level job authorization scope, allowing them to access resources across all projects in the organization. This is useful when linking pipeline artifacts from other projects. To restrict access to a project's artifacts, you can enable **Limit job authorization scope to current project for release pipelines** in the project settings

**To set the job authorization scope for the organization**:

1. Sign in to your Azure DevOps organization.

1. Select **Organization settings** at the bottom left.

1. Select **Pipelines** > ***Settings**.

1. Turn on the toggle **Limit job authorization scope to current project for release pipelines** to restrict the scope to the current project. This is recommended to enhance security.

    :::image type="content" source="media/authorization-scope-organization-level.png" alt-text="A screenshot that shows how to set the job authorization scope for the organization.":::

**To set the job authorization scope for a specific project**:

1. Sign in to your Azure DevOps organization, and then navigate to your project.

1. Select **Project settings** at the bottom left.

1. Select **Pipelines** > ***Settings**.

1. Turn on the toggle **Limit job authorization scope to current project for release pipelines** to restrict the scope to the current project. This setting is recommended for enhancing the security of your pipelines.

    :::image type="content" source="media/authorization-scope-project-level.png" alt-text="A screenshot that shows how to set the job authorization scope for a project.":::

> [!NOTE] 
> If the scope is set at the organization level, it cannot be changed individually in each project.

::: moniker-end

::: moniker range="< azure-devops"

> [!NOTE]
> By default, releases run with a collection-level job authorization scope, allowing them to access resources across all projects in the collection.

::: moniker-end

## Azure Repos, GitHub, and TFVC

There are scenarios where you might want to consume artifacts directly from different source controls without passing them through a build pipeline. For example:

- Developing a PHP or JavaScript application that doesn't require an explicit build pipeline.

- Managing configurations for various stages in different version control repositories, and consuming these configuration files directly as part of the deployment pipeline.

- Managing infrastructure and configuration as code in a version control repository.

With Azure Pipelines, you can configure multiple artifact sources in a single release pipeline. This allows you to link a build pipeline that produces application binaries and a version control repository that stores configuration files, using both sets of artifacts together during deployment.

Azure Pipelines supports Azure Repos, Team Foundation Version Control (TFVC), and GitHub repositories. You can link a release pipeline to any Git or TFVC repository within your project collection, provided you have read access. No additional setup is required when deploying version control artifacts within the same collection.

When linking a GitHub repository and selecting a branch, you can edit the default properties of the artifact types after saving the artifact. This is useful if the stable version branch changes, ensuring continuous delivery releases use the correct branch for newer artifact versions. You can also specify checkout details, such as **submodules**, **Git-LFS tracked files** inclusion, and **shallow fetch depth**.

When linking a TFVC branch, you can specify the changeset to be deployed during release creation.

The following features are available when using Azure Repos, Git, and TFVC as an artifact source:

| Feature | Description                      |
|---------|----------------------------------|
| Auto-trigger releases | New releases can be created automatically when a new artifact is available (including XAML builds). See [Release triggers](triggers.md) for more details.|
| Artifact variables | A number of [artifact variables](variables.md#artifact-variables) are supported for artifacts referenced in a Classic release. |
| Work items and commits | Link work items to see them displayed in the release details. Commits will be shown when using Git or TFVC.|
| Artifact download | By default, pipeline artifacts are downloaded to the agent running the pipeline. You can also configure a step in your stage to [skip downloading](../process/phases.md#agent-phase) the artifact if needed. |

::: moniker range="azure-devops"

> [!NOTE]
> By default, releases run with organization-level job authorization scope, allowing them to access resources across all projects in the organization. This is useful when linking pipeline artifacts from other projects. To restrict access to a project's artifacts, enable **Limit job authorization scope to current project for release pipelines** in the project settings.

::: moniker-end

::: moniker range="< azure-devops"

> [!NOTE]
> By default, releases run with collection-level job authorization scope, allowing them to access resources across all projects in the collection. This is useful when linking pipeline artifacts from other projects. To restrict access to a project's artifacts, enable **Limit job authorization scope to current project for release pipelines** in the project settings.

::: moniker-end

## Azure Artifacts

Below are some of the scenarios where you can use Azure Artifacts as an artifact source:

- Your application binary is published to Azure Artifacts, and you want to consume the package in a release pipeline.

- You need additional packages stored in Azure Artifacts as part of your deployment workflow.

When using Azure Artifacts in your release pipeline, you must select the **Feed**, **Package**, and the **Default version** for your package. You can choose to pick up the **latest** version of the package, use a **specific version**, or **specify at the time of release creation**. During deployment, the package is downloaded to the agent running your pipeline.

The following features are available when using Azure Artifacts as an artifact source:

| Feature | Description                      |
|---------|----------------------------------|
| Auto-trigger releases | New releases can be created automatically when a new artifact is available (including XAML builds). See [Release triggers](triggers.md) for more details.|
| Artifact variables | A number of [artifact variables](variables.md#artifact-variables) are supported for artifacts referenced in a Classic release. |
| Work items and commits | Link work items to see them displayed in the release details. Commits will be shown when using Git or TFVC.|
| Artifact download | By default, pipeline artifacts are downloaded to the agent running the pipeline. You can also configure a step in your stage to [skip downloading](../process/phases.md#agent-phase) the artifact if needed. |

#### Handling Maven snapshots

When using Maven snapshots, multiple versions can be downloaded at once (example `myApplication-2.1.0.BUILD-20190920.220048-3.jar`, `myApplication-2.1.0.BUILD-20190820.221046-2.jar`, `myApplication-2.1.0.BUILD-20190820.220331-1.jar`). You might need to remove the old versions and only keep the latest artifact before deployment.

Run the following command in a PowerShell prompt to remove all copies except the one with the highest lexicographical value:

```PowerShell
Get-Item "myApplication*.jar" | Sort-Object -Descending Name | Select-Object -SkipIndex 0 | Remove-Item
```

> [!NOTE]
> You can store up to 30 Maven snapshots in your feed. Once this limit is reached, Azure Artifacts will automatically delete older snapshots to keep only the most recent 25.

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
