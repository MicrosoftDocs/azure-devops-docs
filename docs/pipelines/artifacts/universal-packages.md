---
title: Publish & download Universal Packages
titleSuffix: Azure Pipelines and TFS
ms.custom: seodec18
description: Publishing Universal Packages to Azure Artifacts feeds
services: vsts
ms.assetid: 6c980df0-9e90-4625-88c9-955b11d54f10
ms.topic: conceptual
ms.date: 06/25/2020
monikerRange: 'azure-devops'
---

# Publish and download Universal Packages in Azure Pipelines

**Azure Pipelines**

When you want to publish a set of related files from a pipeline as a single package, you can use [Universal Packages](../../artifacts/quickstarts/universal-packages.md) hosted in Azure Artifacts feeds.

## Prepare your Universal Package

[Universal Packages](../../artifacts/quickstarts/universal-packages.md) are created from a directory of files. By default, the Universal Packages task will publish all files in `$(Build.ArtifactStagingDirectory)`.

To prepare your Universal Package for publishing, either configure preceding tasks to place output files in that directory, or use the [Copy Files utility task](../tasks/utility/copy-files.md) to assemble the files that you want to publish.

<a name="publish-packages"></a>

## Publish your packages

# [YAML](#tab/yaml)

To publish a Universal Package to your feed, add the following snippet to your azure-pipelines.yml file.

```yaml
- task: UniversalPackages@0
  displayName: Universal Publish
  inputs:
    command: publish
    publishDirectory: '$(Build.ArtifactStagingDirectory)'
    vstsFeedPublish: '<projectName>/<feedName>'
    vstsFeedPackagePublish: '<Package name>'
    packagePublishDescription: '<Package description>'

```

| Argument                                                          | Description                                                                       |
|-------------------------------------------------------------------|-----------------------------------------------------------------------------------|
| publishDirectory                                                  | Location of the files to be published.                                            |
| vstsFeedPublish                                                   | The project and feed name to publish to.                                          |
| vstsFeedPackagePublish                                            | The package name.                                                                 |
| packagePublishDescription                                         | Description of the content of the package.                                        |

> [!NOTE]
> See [Task control options](../process/tasks.md#task-control-options) to learn about the available control options for your task.

[!INCLUDE [package management permissions](includes/package-management-permissions-for-yaml-build.md)]

To publish to an external Universal Packages feed, you must first create a [service connection](../library/service-endpoints.md) to point to that feed. You can do this by going to **Project settings**, selecting **Service connections**, and then creating a **New Service Connection**. Select the **Team Foundation Server/Team Services** option for the service connection. Fill in the feed URL and a [personal access token](../..//organizations/accounts/use-personal-access-tokens-to-authenticate.md) to connect to the feed.

# [Classic](#tab/classic)

To publish the files that you assembled previously as a Universal Package, add the **Universal Package** task and configure these options:

- **Command:** Publish
- **Path to file(s) to publish:** Leave this set to `$(Build.ArtifactStagingDirectory)` unless you selected a different output directory in the last step.
- **Feed location:** Publish to an Azure Artifacts feed in this organization or in another organization.
- **Destination feed:** Select the feed that you want to publish to.
- **Package name:** Select an existing package (to publish a new version of that package), or enter a new package name (to publish the first version of a new package).

> [!div class="mx-imgBorder"]
> ![Example Publish Universal Packages build step screenshot](media/universal-packages/publish.png)

[!INCLUDE [package management permissions](includes/package-management-permissions-for-web-build.md)]

To publish to an external Universal Packages feed, you must first create a [service connection](../library/service-endpoints.md) to point to that feed. You can do this by going to **Project settings**, selecting **Service connections**, and then creating a **New Service Connection**. Select the **Azure Repos/Team Foundation Server** option for the service connection. Fill in the feed URL and a [personal access token](../../organizations/accounts/use-personal-access-tokens-to-authenticate.md) to connect to the feed.

---

<a name="package-versioning"></a>

## Package versioning

In Universal Packages, a particular package is identified by its name and version number. Currently, Universal Packages require [Semantic Versioning](https://semver.org). Semantic version numbers have three numeric components, `Major.Minor.Patch`. When you fix a bug, you increment the patch (`1.0.0` to `1.0.1`). When you release a new backward-compatible feature, you increment the minor version and reset the patch version to 0 (`1.4.17` to `1.5.0`). When you make a backward-incompatible change, you increment the major version and reset the minor and patch versions to 0 (`2.6.5` to `3.0.0`).

The Universal Packages task automatically selects the next major, minor, or patch version for you when you publish a new package. Just set the appropriate option. 

# [YAML](#tab/yaml)

In the **Universal Packages** snippet that you added previously, add a `versionOption`. The options for publishing a new package version are: `major`, `minor`, `patch`, or `custom`.

Selecting `custom` allows you to specify any SemVer2 compliant version number for your package. The other options will get the latest version of the package from your feed and increment the chosen version segment by 1. So if you have a _testPackage v1.0.0_, and you publish a new version of _testPackage_ and select the _major_ option, your package version number will be 2.0.0. If you select the _minor_ option, your package version will be 1.1.0, and if you select the _patch_ option, your package version will be 1.0.1.

One thing to keep in mind is that if you select the `custom` option, you must also provide a `versionPublish`.

```yaml
- task: UniversalPackages@0
  displayName: Universal Publish
  inputs:
    command: publish
    publishDirectory: '$(Build.ArtifactStagingDirectory)'
    vstsFeedPublish: '<projectName>/<feedName>'
    vstsFeedPackagePublish: '<Package name>'
    versionOption: custom
    versionPublish: '<Package version>'
    packagePublishDescription: '<Package description>'
```

| Argument                                                          | Description                                                                       |
|-------------------------------------------------------------------|-----------------------------------------------------------------------------------|
| publishDirectory                                                  | Location of the files to be published.                                            |
| vstsFeedPublish                                                   | The project and feed name to publish to.                                          |
| vstsFeedPackagePublish                                            | The package name.                                                                 |
| versionOption                                                     | Select a version increment strategy. Options: `major`, `minor`, `patch`, `custom` |
| versionPublish                                                    | The custom package version                                                        |
| packagePublishDescription                                         | Description of the content of the package.                                        |

> [!NOTE]
> See [Task control options](../process/tasks.md#task-control-options) to learn about the available control options for your task.

# [Classic](#tab/classic)

In the **Universal Packages** task that you configured previously, choose the appropriate **Version** increment option.

---

## Download a Universal Package

You can also download a Universal Package from your pipeline.

#### [YAML](#tab/yaml/)

To download a Universal Package from a feed in your organization to a specified destination, use the following snippet: 

```yaml
steps:
- task: UniversalPackages@0
  displayName: 'Universal download'
  inputs:
    command: download
    vstsFeed: '<projectName>/<feedName>'
    vstsFeedPackage: '<packageName>'
    vstsPackageVersion: 1.0.0
    downloadDirectory: '$(Build.SourcesDirectory)\someFolder'
```

| Argument                       | Description                                                         |
| ------------------------------ | ------------------------------------------------------------------- |
| vstsFeed                       | The project and feed name that the package will be downloaded from.     |
| vstsFeedPackage                | Name of the package to be downloaded.    |
| vstsPackageVersion             | Version of the package to be downloaded. |
| downloadDirectory              | Package destination directory. Default is $(System.DefaultWorkingDirectory). |

> [!NOTE]
> See [Task control options](../process/tasks.md#task-control-options) to learn about the available control options for your task.

To download a Universal Package from an external source, use the following snippet:

```yaml
steps:
- task: UniversalPackages@0
  displayName: 'Universal download'
  inputs:
    command: download
    feedsToUse: external
    externalFeedCredentials: MSENG2
    feedDownloadExternal: 'fabrikamFeedExternal'
    packageDownloadExternal: 'fabrikam-package'
    versionDownloadExternal: 1.0.0
```

| Argument                       | Description                                                         |
| ------------------------------ | ------------------------------------------------------------------- |
| feedsToUse                     | Value should be `external` when you're downloading from an external source.|
| externalFeedCredentials        | Name of a service connection to another Azure DevOps organization or server. See [service connections](../library/service-endpoints.md#sep-tfsts).                    |
| feedDownloadExternal           | Feed that the package will be downloaded from.        |
| packageDownloadExternal        | Name of the package to be downloaded.                             |
| versionDownloadExternal        | Version of the package to be downloaded.        |

> [!NOTE]
> See [Task control options](../process/tasks.md#task-control-options) to learn about the available control options for your task.

#### [Classic](#tab/classic/)

To download a Universal Package, add the **Universal Package** task and configure these options:

- **Command:** Download
- **Destination directory**: Directory to download the package. The default is `$(System.DefaultWorkingDirectory)`.
- **Feed location:** Download a Universal Package from an Azure Artifacts feed in this organization or in another organization.
- **Feed:** Select the feed that you want to download from.
- **Package name:** Select the package that you want to download.
- **Version:** Select the version of the package that you want to download.

> [!div class="mx-imgBorder"]
> ![Example Download Universal Packages build step screenshot](media/universal-packages/download.png)

---

### Downloading the latest version

You can use a wildcard expression as the version to get the latest (highest) version of a package. For more information, see [Downloading the latest version](../../artifacts/quickstarts/universal-packages.md#downloading-the-latest-version) in the quickstart guide.

## FAQ

### Where can I learn more about Azure Artifacts and the TFS Package Management service?

[Package Management in Azure Artifacts and TFS](../../artifacts/index.yml)

### In what versions of Azure DevOps/TFS are Universal Packages available? 

Universal Packages are only available for Azure DevOps Services.