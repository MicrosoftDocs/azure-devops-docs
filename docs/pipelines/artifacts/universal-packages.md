---
title: Publish & download Universal Packages
ms.custom: seodec18, contperf-fy21q4
description: Publish Universal Packages to Azure Artifacts feeds with Azure Pipelines
services: vsts
ms.assetid: 6c980df0-9e90-4625-88c9-955b11d54f10
ms.topic: conceptual
ms.date: 05/03/2021
monikerRange: 'azure-devops'
---

# Publish and download Universal Packages in Azure Pipelines

**Azure Pipelines**

Using Universal Packages you can pack any number of files of any type and share it with your team. Using the Universal Package task, you can pack, publish, and download packages of various sizes up to 4 TB. Each package will be uniquely identified with a name and a version number. Packages can be published and consumed to and from Artifacts feeds by using the Azure CLI or Azure Pipelines.

> [!NOTE]
> Universal Packages are only available for Azure DevOps Services.

## Prepare a Universal Package

By default, the Universal Packages task uses the `$(Build.ArtifactStagingDirectory)` as the publish directory. To prepare your Universal Package for publishing, place the files you want to publish in that directory. You can also use the [Copy Files](../tasks/utility/copy-files.md) utility task to copy those files to the publish directory.

<a name="publish-packages"></a>

## Publish a Universal Package

# [YAML](#tab/yaml)

To publish a Universal Package to your Artifacts feed, add the following task to your pipeline's yaml file.

```yaml
# Publish a Universal Package
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
| vstsFeedPackagePublish                                            | The package name. Must be lower case. Use only letters, numbers, and dashes.                                                                |
| packagePublishDescription                                         | Description of the content of the package.                                        |

To publish packages to an Azure Artifacts feed from your pipeline, you must add the **Project Collection Build Service** identity as a **Contributor** from the feed's settings. See [Adding users/groups permissions to a feed](../../artifacts/feeds/feed-permissions.md) for details.

To publish to an external feed, you must first create a service connection to point to that feed. see [Manage service connection](../library/service-endpoints.md) for details. 

# [Classic](#tab/classic)

To publish your Universal Package, add the **Universal Package** task to your pipeline and fill out the required fields as follows

- **Command:** Publish
- **Path to file(s) to publish:** The path to the list of files to be published. Default: `$(Build.ArtifactStagingDirectory)`.
- **Feed location:** Publish to an Azure Artifacts feed in your current organization or in another organization.
- **Destination feed:** Select the feed that you want to publish to.
- **Package name:** Select an existing package (to publish a new version of that package), or enter a new package name (to publish the first version of a new package).

    :::image type="content" source="media/universal-packages/publish.png" alt-text="Universal Package publish task":::

[!INCLUDE [package management permissions](includes/package-management-permissions-for-web-build.md)]

To publish to an external feed, you must first create a service connection to point to that feed. see [Manage service connection](../library/service-endpoints.md) for details. 

---

<a name="package-versioning"></a>

## Package versioning

Universal Packages follow the semantic versioning spec and are identified by their names and version numbers. Semantic version numbers have three numeric components, Major, Minor, and Patch: `Major.Minor.Patch`.

When you release a new backward-compatible feature, you increment the minor version and reset the patch version to 0 (`1.4.17` to `1.5.0`), and when you make a backward-incompatible change, you increment the major version and reset the minor and patch versions to 0 (`2.6.5` to `3.0.0`). The patch version number should be incremented in the case of fixing a bug (`1.0.0` to `1.0.1`). 

The Universal Packages task automatically selects the next major, minor, or patch version for you when you publish a new package.

# [YAML](#tab/yaml)

To enable versioning for your package, add a `versionOption` input to your YAML file. The options for publishing a new package version are: `major`, `minor`, `patch`, or `custom`.

Selecting `custom` enables you to manually specify your package version. The other options will get the latest package version from your feed and increment the chosen version segment by 1. So if you have a _testPackage 1.0.0_, and select the _major_ option, your new package will be _testPackage 2.0.0_. If you select the _minor_ option, your package version will be 1.1.0, and if you select the _patch_ option, your package version will be 1.0.1.

One thing to keep in mind is that if you select the `custom` option, you must also provide a `versionPublish` as follows.

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

# [Classic](#tab/classic)

From the Universal Packages task form, select a version increment strategy, or select **Custom** to input your package version manually.

:::image type="content" source="media/universal-packages/publish-versioning.png" alt-text="Package versioning":::

---

## Download a Universal Package

#### [YAML](#tab/yaml/)

To download a Universal Package from a feed in your organization, use the Universal package task with the `download` command input as follows: 

```yaml
steps:
- task: UniversalPackages@0
  displayName: 'Universal download'
  inputs:
    command: download
    vstsFeed: '<projectName>/<feedName>'
    vstsFeedPackage: '<packageName>'
    vstsPackageVersion: '<packageVersion>'
    downloadDirectory: '$(Build.SourcesDirectory)\someFolder'
```

| Argument                       | Description                                                                       |
| ------------------------------ | -------------------------------------------------------------------               |
| vstsFeed                       | The Artifacts feed hosting the package to be downloaded.                          |
| vstsFeedPackage                | Name of the package to be downloaded.                                             |
| vstsPackageVersion             | Version of the package to be downloaded.                                          |
| downloadDirectory              | The package destination folder. Default value: $(System.DefaultWorkingDirectory). |

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

| Argument                       | Description                                                                                                                                              |
| ------------------------------ | ---------------------------------------------------------------------------------------------------------------------------------------------------------|
| feedsToUse                     | Set the value to `external` when downloading from an external source.                                                                                    |
| externalFeedCredentials        | Name of the service connection pointing to the external feed. See [service connections](../library/service-endpoints.md) for details.                    |
| feedDownloadExternal           | Name of the external feed.                                                                                                                               |
| packageDownloadExternal        | The package name to be downloaded.                                                                                                                       |
| versionDownloadExternal        | The version of the package to be downloaded.                                                                                                             |

#### [Classic](#tab/classic/)

To download a Universal Package, add the **Universal Package** task to your pipeline and fill out the required fields as follows:

- **Command:** Download
- **Destination directory**: Folder path where the packages will be downloaded. Default value: `$(System.DefaultWorkingDirectory)`.
- **Feed location:** Download a Universal Package from an Azure Artifacts feed in your organization or in another organization.
- **Feed:** The feed that you want to download from.
- **Package name:** The package that you want to download.
- **Version:** The version of the package that you want to download.

:::image type="content" source="media/universal-packages/download.png" alt-text="Download Universal Packages task configuration":::

---

> [!NOTE]
> You can use wildcards in the string you pass to the download command to download the latest version of a Universal Package. See [Universal Packages quickstart](../../artifacts/quickstarts/universal-packages.md#downloading-the-latest-version) for more details.

## Next Steps

- [Publish and download artifacts in Azure Pipelines](pipeline-artifacts.md)
- [Release artifacts and artifact sources](../release/artifacts.md)