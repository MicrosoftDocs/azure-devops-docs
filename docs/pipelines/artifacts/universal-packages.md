---
title: Publish & download Universal Packages
ms.custom: seodec18, contperf-fy21q4
description: Publish and download Universal Packages with Azure Pipelines YAML/Classic
services: vsts
ms.assetid: 6c980df0-9e90-4625-88c9-955b11d54f10
ms.topic: conceptual
ms.date: 05/05/2023
monikerRange: 'azure-devops'
---

# Publish and download Universal Packages with Azure Pipelines

[!INCLUDE [version-eq-azure-devops](../../includes/version-eq-azure-devops.md)]

Universal Packages allow you to package any number of files of any type and share them with your team. Using the Universal Package task in Azure Pipelines, you can pack, publish, and download packages of various sizes, up to 4 TB. Each package is uniquely identified with a name and a version number. You can use Azure CLI or Azure Pipelines to publish and consume packages from your Artifacts feeds.

> [!NOTE]
> Universal Packages are only available in Azure DevOps Services.

## Copy files

The Universal Packages task in Azure Pipelines is set to use `$(Build.ArtifactStagingDirectory)` as the default publish directory. To ready your Universal Package for publishing, move the files you wish to publish to that directory. You can also use the [Copy Files](/azure/devops/pipelines/tasks/reference/copy-files-v2) utility task to copy those files to the publish directory.

## Publish a Universal Package

# [YAML](#tab/yaml)

To publish a Universal Package to your Azure Artifacts feed, add the following task to your pipeline's YAML file.

```yaml
- task: UniversalPackages@0
  displayName: Publish a Universal Package
  inputs:
    command: publish
    publishDirectory: '$(Build.ArtifactStagingDirectory)'
    vstsFeedPublish: '<projectName>/<feedName>'
    vstsFeedPackagePublish: '<Package name>'
    packagePublishDescription: '<Package description>'
```

| Argument                    | Description                                                                                                               |
|-----------------------------|---------------------------------------------------------------------------------------------------------------------------|
| publishDirectory            | Location of the files you wish to publish.                                                                                |
| vstsFeedPublish             | The project and feed name to publish to. If you're working with an organization-scoped feed, specify only the feed name.  |
| vstsFeedPackagePublish      | The package name. Must be lower case. Use only letters, numbers, and dashes.                                              |
| packagePublishDescription   | Description of the package content.                                                                                       |

To publish packages to an Azure Artifacts feed from your pipeline, you must add the **Project Collection Build Service** identity as a **Contributor** from your feed's settings. See [Adding users/groups permissions to a feed](../../artifacts/feeds/feed-permissions.md) for more details.

To publish to an external feed, you must first create a service connection to authenticate with your feed. see [Manage service connection](../library/service-endpoints.md) for more details. 

# [Classic](#tab/classic)

To publish your Universal Package, add the **Universal Package** task to your pipeline and fill out the required fields as follows

- **Command:** Publish
- **Path to file(s) to publish:** The path to the list of files to be published. Default: `$(Build.ArtifactStagingDirectory)`.
- **Feed location:** Publish to an Azure Artifacts feed in your current organization or in another organization.
- **Destination feed:** Select the feed that you want to publish to.
- **Package name:** Select an existing package (to publish a new version of that package), or enter a new package name (to publish the first version of a new package).

    :::image type="content" source="media/universal-packages/publish.png" alt-text="A screenshot showing how to publish a universal package using a classic pipeline.":::

[!INCLUDE [package management permissions](includes/package-management-permissions-for-web-build.md)]

To publish to an external feed, you must first create a service connection to point to that feed. see [Manage service connection](../library/service-endpoints.md) for details. 

---

## Package versioning

Universal Packages follow the semantic versioning specification and can be identified by their names and version numbers. Semantic version numbers are composed of three numeric components, Major, Minor, and Patch, in the format: `Major.Minor.Patch`.

The minor version number is incremented when new features are added that are backward compatible with previous versions, in this case, you increment the minor version and reset the patch version to 0 (`1.4.17` to `1.5.0`). The major version number is incremented when there are significant changes that could break compatibility with previous versions. In this case, you increment the major version and reset the minor and patch versions to 0 (`2.6.5` to `3.0.0`). The patch version number should be incremented when only bug fixes or other small changes are made that do not affect compatibility with previous versions (`1.0.0` to `1.0.1`). 

When publishing a new package, the Universal Packages task will automatically select the next major, minor, or patch version for you.

# [YAML](#tab/yaml)

To enable versioning for your package, add a `versionOption` input to your YAML file. The options for publishing a new package version are: `major`, `minor`, `patch`, or `custom`.

Selecting `custom` enables you to manually specify your package version. The other options will get the latest package version from your feed and increment the chosen version segment by 1. So if you have a *testPackage 1.0.0*, and select the *major* option, your new package will be *testPackage 2.0.0*. If you select the *minor* option, your package version will be *1.1.0*, and if you select the *patch* option, your package version will be *1.0.1*.

Note that if you choose the `custom` option, you must also specify a `versionPublish` value as follows:

```yaml
- task: UniversalPackages@0
  displayName: Publish a Universal Package
  inputs:
    command: publish
    publishDirectory: '$(Build.ArtifactStagingDirectory)'
    vstsFeedPublish: '<projectName>/<feedName>'
    vstsFeedPackagePublish: '<Package name>'
    versionOption: custom
    versionPublish: '<Package version>'
    packagePublishDescription: '<Package description>'
```

| Argument                     | Description                                                                                                               |
|------------------------------|---------------------------------------------------------------------------------------------------------------------------|
| publishDirectory             | Location of the files you wish to publish.                                                                                |
| vstsFeedPublish              | The project and feed name to publish to. If you're working with an organization-scoped feed, specify only the feed name.  |
| vstsFeedPackagePublish       | The package name. Must be lower case. Use only letters, numbers, and dashes.                                              |
| versionOption                | Select a versioning strategy. Options: `major`, `minor`, `patch`, `custom`.                                               |
| versionPublish               | The custom package version.                                                                                               |
| packagePublishDescription    | Description of the package content.                                                                                       |

# [Classic](#tab/classic)

From the Universal Packages task form, select a versioning strategy, or select **Custom** to enter your package version manually.

:::image type="content" source="media/universal-packages/publish-versioning.png" alt-text="A screenshot showing how to use a versioning strategy in classic pipeline.":::

---

## Download a Universal Package

#### [YAML](#tab/yaml/)

To download a Universal Package from a feed in your organization, use the Universal Package task with the `download` command as follows: 

```yaml
steps:
- task: UniversalPackages@0
  displayName: Download a Universal Package
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
  displayName: Download a Universal Package
  inputs:
    command: download
    feedsToUse: external
    externalFeedCredentials: 'MSENG2'
    feedDownloadExternal: 'fabrikamFeedExternal'
    packageDownloadExternal: 'fabrikam-package'
    versionDownloadExternal: 1.0.0
```

| Argument                       | Description                                                                                                                              |
| ------------------------------ | ---------------------------------------------------------------------------------------------------------------------------------------- |
| feedsToUse                     | Set the value to `external` when downloading from an external source.                                                                    |
| externalFeedCredentials        | Name of the service connection to the external feed. See [manage service connections](../library/service-endpoints.md) for more details. |
| feedDownloadExternal           | Name of the external feed.                                                                                                               |
| packageDownloadExternal        | The package name you wish to download.                                                                                                   |
| versionDownloadExternal        | The version of the package you wish to download.                                                                                         |

#### [Classic](#tab/classic/)

To download a Universal Package, add the **Universal Package** task to your pipeline and fill out the required fields as follows:

- **Command:** Download
- **Destination directory**: Folder path where the packages will be downloaded. Default value: `$(System.DefaultWorkingDirectory)`.
- **Feed location:** Download a Universal Package from a feed in your organization or in another organization.
- **Feed:** The feed that you want to download from.
- **Package name:** Name of the package to be downloaded.
- **Version:** The version of the package that you want to download.

:::image type="content" source="media/universal-packages/download.png" alt-text="A screenshot showing how to download a Universal Package with classic pipeline.":::

---

> [!TIP]
> You can use wildcards to download the latest version of a Universal Package. See [Download the latest version](../../artifacts/quickstarts/universal-packages.md#download-the-latest-version) for more details.

## Related articles

- [Universal Packages upstream sources](../../artifacts/universal-packages/universal-packages-upstream.md)
- [Search for packages in upstream sources](../../artifacts/how-to/search-upstream.md)
- [Feed permissions](../../artifacts/feeds/feed-permissions.md)