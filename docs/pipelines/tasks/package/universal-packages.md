---
title: Universal Package, download and publish task
ms.custom: seodec18
description: Learn all about how you can make use of NuGet packages when you are building code in Azure Pipelines and Team Foundation Server (TFS)
ms.prod: devops
ms.technology: devops-cicd
ms.topic: conceptual
ms.assetid: 7e2793cd-7ce1-4268-9f51-ecb41842f13e
ms.manager: mijacobs
ms.author: phwilson
author: chasewilson
ms.date: 10/18/2019
monikerRange: '>= tfs-2018'
---

# Universal Package task

[!INCLUDE [version-tfs-2018](../../_shared/version-tfs-2018.md)]

Use this task in a build or release pipeline to download, or package and publish Universal packages.

::: moniker range="<= tfs-2018"

[!INCLUDE [temp](../../_shared/concept-rename-note.md)]

::: moniker-end

::: moniker range="> tfs-2018"

## YAML snippet

[!INCLUDE [temp](../_shared/yaml/UniversalPackagesV0.md)]

::: moniker-end

## Arguments

| Argument | Description |
| -------- | ----------- |
| `command`<br/>Command | The NuGet command to run.<br/>Options: `download`, `publish` |
| `downloadDirectory`<br/>Destination directory | Folder path where the package's contents will be downloaded. |
| `feedsToUse`<br/>Feed location | You can either select a feed from this collection or any other collection in Azure Artifacts.<br/>Options: `internal`, `external` |
| `externalFeedCredentials`<br/>Credentials for feeds outside this organization/collection | Credentials to use for external registries located in the selected NuGet.config. For feeds in this organization/collection, leave this blank; the build’s credentials are used automatically. |
| `vstsFeed`<br/>Use packages from this Azure Artifacts/TFS feed | Include the selected feed. You must have Azure Artifacts installed and licensed to select a feed here. |
| `vstsFeedPackage`<br/>Package name | Name of desired package to download. |
| `vstsPackageVersion`<br/>Package version | Select the package version or use a variable containing the version to download. This can also be a wildcard expression such as `*` to get the highest version, `1.*` to get the highest version with major version 1, or `1.2.*` to get the highest patch release with major version 1 and minor version 2. |
| `feedDownloadExternal`<br/>Feed | Specifies the name of an external feed to download from. |
| `packageDownloadExternal`<br/>Package name | Specifies the package name to download |
| `versionDownloadExternal`<br/>Package version | Select the package version or use a variable containing the version to download. This can also be a wildcard expression such as `*` to get the highest version, `1.*` to get the highest version with major version 1, or `1.2.*` to get the highest patch release with major version 1 and minor version 2. |
| `publishDirectory`<br/>Path to file(s) to publish | Specifies the path to list of files to be published. |
| `feedsToUsePublish`<br/>Feed location | You can either select a feed from this collection or any other collection in Azure Artifacts.<br/>Options: `internal`, `external` |
| `publishFeedCredentials`<br/>organization/collection connection | Credentials to use for external feeds. |
| `vstsFeedPublish`<br/>Destination Feed | Specifies the name of the feed to publish to. |
| `publishPackageMetadata`<br/>Publish pipeline metadata | Associate this build/release pipeline’s metadata (run #, source code information) with the package. |
| `vstsFeedPackagePublish`<br/>Package name | Select a package ID to publish or type a new package ID if you've never published a version of this package before. Package names must be lower case and can only use letters, numbers, and dashes(-). |
| `feedPublishExternal`<br/>Feed | External feed name to publish to. |
| `packagePublishExternal`<br/>Package name | Package name. |
| `versionOption`<br/>Version | Select a version increment strategy, or select Custom to input your package version manually. For new packages, the first version will be 1.0.0 if you select \"Next major\", 0.1.0 if you select \"Next minor\", or 0.0.1 if you select \"Next patch\". See the [Semantic Versioning spec](https://semver.org/) for more information.<br/>Options: `major`, `minor`, `patch`, `custom` |
| `versionPublish`<br/>Custom version | Select the custom package version. |
| `packagePublishDescription`<br/>Description | Description of the contents of this package and/or the changes made in this version of the package. |
| `verbosity`<br/>Verbosity | Specifies the amount of detail displayed in the output.<br/>Options: `None`, `Trace`, `Debug`, `Information`, `Warning`, `Error`, `Critical` |
| `publishedPackageVar`<br/>Package Output Variable | Provide a name for the variable that will contain the published package name and version. |
| [!INCLUDE [control-options-arguments-md](../_shared/control-options-arguments-md.md)] | |

## Examples

### Download

Download a Universal Package from an internal feed

```YAML
# Download Universal Package
- task: UniversalPackages@0
  inputs:
    command: download
    vstsFeed: 'fabrikamFeed'
    vstsFeedPackage: 'fabrikam-package'
    vstsPackageVersion: 1.0.0
    downloadDirectory: '$(Build.SourcesDirectory)\anotherfolder'
```

Download a Universal Package from an external feed

```YAML
# Download Universal Package
- task: UniversalPackages@0
  inputs:
    command: download
    feedsToUse: external
    externalFeedCredentials: MSENG2
    feedDownloadExternal: 'fabrikamFeedExternal'
    packageDownloadExternal: 'fabrikam-package'
    versionDownloadExternal: 1.0.0
```

### Publish

Publish the next major version of a Universal Package to an internal feed

```YAML
# Package a project
- task: UniversalPackages@0
  inputs:
    command: publish
    publishDirectory: '$(Build.ArtifactStagingDirectory)'
    vstsFeedPublish: 'fabrikamFeed'
    vstsFeedPackagePublish: 'fabrikam-package'
    versionPublish: 'major'
    packagePublishDescription: 'This is the next major version of my package.'
```

Publish a custom version Universal Package to an external feed.

```YAML
# Package a project
- task: UniversalPackages@0
  inputs:
    command: publish
    publishDirectory: '$(Build.ArtifactStagingDirectory)'
    feedsToUsePublish: 'external'
    externalFeedCredentials: MSENG2
    feedPublishExternal: 'fabrikamFeed-external'
    packagePublishExternal: 'fabrikam-package'
    versionPublish: 'custom'
    versionPublish: '1.2.3'
    packagePublishDescription: 'This is a custom version of my package.'
```

## Open source

These tasks are open source [on GitHub](https://github.com/Microsoft/azure-pipelines-tasks). Feedback and contributions are welcome.
