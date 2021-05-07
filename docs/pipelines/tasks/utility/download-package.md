---
title: Download Package task
description: Download a package from a Package Management feed in Azure Artifacts or TFS.
ms.topic: reference
ms.assetid: 8d6e8f7e-267d-442d-8c92-1f586864c62f
ms.custom: seodec18
ms.date: 07/23/2020
monikerRange: 'azure-devops'
---

# Download Package task

**Azure Pipelines**

Use this task to download a package from a package management feed in Azure Artifacts or TFS.
Requires the Package Management extension.

::: moniker range="> tfs-2018"

## YAML snippet

[!INCLUDE [temp](../includes/yaml/DownloadPackageV1.md)]

::: moniker-end

## Arguments

|Argument|Description|
|--- |--- |
|PackageType|(Required) Select the type of package to download.|
|Feed|(Required) ID of the feed that contains the package. For project-scoped feeds, the format is projectID/feedID. See our [FAQ](#faq) below for information on how to get a feed or project ID, or information on using project and feed name instead.|
|View|(Optional) Select a view to see package versions only promoted to that view.|
|Definition|(Required) Select the package to download. This can be the artifact ID or the package name.|
|Version|(Required) Version of the package.|
|Files|(Optional) Specify files to be downloaded as multiline minimatch patterns. [More Information](../file-matching-patterns.md). The default pattern (**) will download all files within the artifact.|
|Extract|(Optional) Specify whether to extract the package contents at the destination directory.|
|DownloadPath|(Required) Path on the agent machine where the package will be downloaded.|

## Examples

### Download a NuGet package from an organization-scoped feed and extract to destination directory

```YAML
# Download an artifact with id 'cfe01b64-ded4-47b7-a569-2ac17cbcedbd' to $(System.ArtifactsDirectory)
- task: DownloadPackage@1
  inputs:
    packageType: 'nuget'
    feed: '6a60ef3b-e29f-41b6-9885-7874278baac7'
    definition: 'cfe01b64-ded4-47b7-a569-2ac17cbcedbd' # Can also be package name
    version: '1.0.0'
    extract: true
    downloadPath: '$(System.ArtifactsDirectory)'
```

### Download a maven package from a project-scoped feed and download only pom files.

```YAML
# Download an artifact with name 'com.test:testpackage' to $(System.ArtifactsDirectory)
- task: DownloadPackage@1
  inputs:
    packageType: 'maven'
    feed: '132f5c2c-2aa0-475a-8b47-02c79617954b/c85e5de9-7b12-4cfd-9293-1b33cdff540e' # <projectId>/<feedId>
    definition: 'com.test:testpackage' 
    version: '1.0.0-snapshot' # Should be normalized version
    files: '*.pom'
    downloadPath: '$(System.ArtifactsDirectory)'
```

## FAQ

### How do I find the ID of the feed (or project) I want to download my artifact from

The get feed api can be used to retrieve the feed and project ID for your feed. The api is documented [here](/rest/api/azure/devops/artifacts/feed%20%20management/get%20feed).

### Can I use the project or feed name instead of IDs

Yes, you can use the project or feed name in your definition, however if your project or feed is renamed in the future, your task will also have to be updated or it might fail.

## Open-source

This task is open source [on GitHub](https://github.com/Microsoft/azure-pipelines-tasks). Feedback and contributions are welcome.