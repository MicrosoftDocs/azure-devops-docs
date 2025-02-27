---
title: Publish & download Universal Packages
description: Learn how to publish and download Universal Packages with Azure Pipelines YAML/Classic
ms.assetid: 6c980df0-9e90-4625-88c9-955b11d54f10
ms.topic: how-to
ms.date: 02/27/2025
monikerRange: 'azure-devops'
---

# Publish and download Universal Packages with Azure Pipelines

[!INCLUDE [version-eq-azure-devops](../../includes/version-eq-azure-devops.md)]

Universal Packages lets you package and share any number of files, regardless of type, with your team or target audience. Using the Universal Package task in Azure Pipelines, you can pack, publish, and download packages as large as 4 TiB. Each package is identified by a unique name and version number. You can use Azure CLI or Azure Pipelines to publish and download packages from your Artifacts feeds.

> [!NOTE]
> Universal Packages are only available in Azure DevOps Services.

## Prerequisites

| **Product**       | **Requirements**                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
|--------------------|-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| **Azure DevOps**   | - An [Azure DevOps project](../../organizations/projects/create-project.md).<br> - **Permissions:**<br>   &nbsp;&nbsp;&nbsp;&nbsp;- To grant access to all pipelines in the project, you must be a member of the [Project Administrators group](../../organizations/security/change-project-level-permissions.md).<br>   &nbsp;&nbsp;&nbsp;&nbsp;- To create service connections, you must have the *Administrator* or *Creator* role for [service connections](../library/add-resource-protection.md). |

## Copy files

The Universal Packages task in Azure Pipelines uses `$(Build.ArtifactStagingDirectory)` as the default location for the files you wish to publish. To prepare your Universal Package for publishing, move the files you want to publish to this directory. You can also use the [Copy Files](/azure/devops/pipelines/tasks/reference/copy-files-v2) utility task to copy the files to the publish directory.

## Publish a Universal Package

### [YAML](#tab/yaml)

1. Sign in to your Azure DevOps organization, and then navigate to your project.

1. Select **Pipelines**, and then select your pipeline definition.

1. Select **Edit**, and then add the following snippet to your YAML pipeline.

    ```yaml
    - task: UniversalPackages@0
      displayName: Publish
      inputs:
        command: publish
        publishDirectory: '$(Build.ArtifactStagingDirectory)'        ## Location of the files you wish to publish
        vstsFeedPublish: '<PROJECT_NAME>/<FEED_NAME>'                ## The project and feed name to publish to. If you're working with an organization-scoped feed, specify only the feed name
        vstsFeedPackagePublish: '<PACKAGE_NAME>'                     ## The package name. Must be lower case. Use only letters, numbers, and dashes
        packagePublishDescription: '<PACKAGE_DESCRIPTION>'           ## Description of the package content
    ```

### [Classic](#tab/classic)

1. Sign in to your Azure DevOps organization, and then navigate to your project.

1. Select **Pipelines**, and then select your pipeline definition. 

1. Select **Edit**, and then select the `+` sign to add a new task. Add the **Universal Packages** task and configure it as follows:

    :::image type="content" source="media/universal-packages/publish.png" alt-text="A screenshot displaying how to publish a Universal Packages using Classic pipelines.":::

- **Command:** Publish
- **Path to file(s) to publish:** Specify the path to the files you want to publish. Default: `$(Build.ArtifactStagingDirectory)`.
- **Feed location:** Publish to an Azure Artifacts feed in your current organization or in a different organization.
- **Destination feed:** Select the feed where you want to publish the package.
- **Package name:** Select an existing package to publish a new version, or enter a new package name to publish the first version of a new package.

---

> [!NOTE]
> To publish packages to a feed from your Pipelines, make sure that both the **Project Collection Build Service** and your project's **Build Service** identities have been granted the **Feed Publisher (Contributor)** role in the feed settings. See [Manage permissions](../../artifacts/feeds/feed-permissions.md) for more details.

## Package versioning

Universal Packages adhere to semantic versioning, which is based on three numeric components: Major, Minor, and Patch. The versioning format is `Major.Minor.Patch`.

- The minor version is increased when new features are added that are backward-compatible with previous versions. In this case, the minor version is incremented, and the patch version is reset to 0 (e.g., 1.4.17 to 1.5.0).
- The major version is incremented when there are significant changes that could break compatibility with previous versions, resetting both the minor and patch versions to 0 (e.g., 2.6.5 to 3.0.0).
- The patch version is incremented when bug fixes or other small changes that do not affect compatibility are applied (e.g., 1.0.0 to 1.0.1).

When publishing a new package, the Universal Packages task will automatically select the next major, minor, or patch version for you.

### [YAML](#tab/yaml)

To enable versioning for your package, add a `versionOption` input to your UniversagePackage task. The available options for publishing a new version are: `major`, `minor`, `patch`, or `custom`.

Selecting `custom` enables you to manually specify your package version. The other options get the latest package version from your feed and increment the selected version segment by 1. For example, if you have a package *testPackage 1.0.0*:

- Selecting `major` will update the version to testPackage 2.0.0.
- Selecting `minor` will update the version to 1.1.0.
- Selecting `patch` will update the version to 1.0.1.

If you choose the `custom` option, you must also specify a `versionPublish` value as follows:

```yaml
- task: UniversalPackages@0
  displayName: Publish
  inputs:
    command: publish
    publishDirectory: '$(Build.ArtifactStagingDirectory)'             ## Location of the files you wish to publish
    vstsFeedPublish: '<PROJECT_NAME>/<FEED_NAME>'                     ## The project and feed name to publish to. If you're working with an organization-scoped feed, specify only the feed name
    vstsFeedPackagePublish: '<PACKAGE_NAME>'                          ## The package name. Must be lower case. Use only letters, numbers, and dashes
    versionOption: custom                                             ## Select a versioning strategy. Options: `major`, `minor`, `patch`, `custom`
    versionPublish: '<PACKAGE_VERSION>'                               ## The custom package version
    packagePublishDescription: '<PACKAGE_DESCRIPTION>'                ## Description of the package content
```

### [Classic](#tab/classic)

1. Sign in to your Azure DevOps organization, and then navigate to your project.

1. Select **Pipelines**, and then select your pipeline definition. 

1. Select **Edit**, and then select the `+` sign to add a new task. Add the **Universal Packages** task and configure it as follows:

    :::image type="content" source="media/universal-packages/publish-versioning.png" alt-text="A screenshot displaying how to use a versioning strategy in a Classic pipeline.":::

- **Command:** Publish
- **Path to file(s) to publish:** Specify the path to the files you want to publish. Default: `$(Build.ArtifactStagingDirectory)`.
- **Feed location:** Publish to an Azure Artifacts feed in your current organization or in a different organization.
- **Destination feed:** Select the feed where you want to publish the package.
- **Package name:** Select an existing package to publish a new version, or enter a new package name to publish the first version of a new package.
- **Version** Select a versioning strategy, or select **Custom** and enter your package version manually.

---

## Download a Universal Package

### [YAML](#tab/yaml/)

1. Sign in to your Azure DevOps organization, and then navigate to your project.

1. Select **Pipelines**, and then select your pipeline definition.

1. Select **Edit**, and then add the following snippet to your YAML pipeline.

    ```yaml
    steps:
    - task: UniversalPackages@0
      displayName: Download
      inputs:
        command: download
        vstsFeed: '<PROJECT_NAME>/<FEED_NAME>'                        ## The Artifacts feed hosting the package to be downloaded
        vstsFeedPackage: '<PACKAGE_NAME>'                             ## Name of the package to be downloaded
        vstsPackageVersion: '<PACKAGE_VERSION>'                       ## Version of the package to be downloaded
        downloadDirectory: '$(Build.SourcesDirectory)\someFolder'     ## The download folder. Default value: $(System.DefaultWorkingDirectory).
    ```

To download a Universal Package from an external source, you can use the following example:

```yaml
steps:
- task: UniversalPackages@0
  displayName: Download a Universal Package
  inputs:
    command: download
    feedsToUse: external                                        ## Set the value to `external` when downloading from an external source 
    externalFeedCredentials: 'MSENG2'                           ## Name of the service connection to the external feed
    feedDownloadExternal: 'fabrikamFeedExternal'                ## Name of the external feed
    packageDownloadExternal: 'fabrikam-package'                 ## The package name you wish to download
    versionDownloadExternal: 1.0.0                              ## The version of the package you wish to download
```

### [Classic](#tab/classic/)

1. Sign in to your Azure DevOps organization, and then navigate to your project.

1. Select **Pipelines**, and then select your pipeline definition. 

1. Select **Edit**, and then select the `+` sign to add a new task. Add the **Universal Packages** task and configure it as follows:

    :::image type="content" source="media/universal-packages/download.png" alt-text="A screenshot displaying how to download a Universal Package with a Classic pipeline.":::

- **Command:** Download
- **Destination directory**: Folder path where the packages will be downloaded. Default value: `$(System.DefaultWorkingDirectory)`.
- **Feed location:** Download a Universal Package from a feed in your organization or in another organization.
- **Feed:** The feed that you want to download from.
- **Package name:** Name of the package to be downloaded.
- **Version:** The version of the package that you want to download.

---

> [!TIP]
> Wildcards can be used to download the latest version of a Universal Package. See [Download the latest version](../../artifacts/quickstarts/download-universal-packages.md#download-the-latest-version) for more details.

## Related content

- [Universal Packages upstream sources](../../artifacts/universal-packages/universal-packages-upstream.md)

- [Feed permissions](../../artifacts/feeds/feed-permissions.md)

- [Use the .artifactignore file](../../artifacts/reference/artifactignore.md)

