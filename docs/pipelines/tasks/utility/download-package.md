---
title: Download Package task
description: Download a package from a Package Management feed in Azure Artifacts or TFS.
ms.topic: reference
ms.prod: devops
ms.technology: devops-cicd
ms.assetid: 8d6e8f7e-267d-442d-8c92-1f586864c62f
ms.manager: jillfra
ms.custom: seodec18
ms.author: phwilson
author: chasewilson
ms.date: 12/07/2018
monikerRange: 'azure-devops'
---

# Download Package task

**Azure Pipelines**

Use this task in a build or release pipeline to download a package from a package management feed in Azure Artifacts or TFS.
Requires the Package Management extension.

::: moniker range="> tfs-2018"

## YAML snippet

[!INCLUDE [temp](../_shared/yaml/DownloadPackageV1.md)]

::: moniker-end

## Arguments

<table><thead><tr><th>Argument</th><th>Description</th></tr></thead>
<tr><td>Package type</td><td>(Required) Select the type of package to download</td></tr>
<tr><td>Feed</td><td>(Required) ID of the feed that contains the package. For project-scoped feeds, the format is projectID/feedID. See our <a href="#qa">Q&As</a> below for information on how to get a feed or project ID, or information on using project and feed name instead."</td></tr>
<tr><td>View</td><td>(Optional) Select a view to see package versions only promoted to that view.</td></tr>
<tr><td>Package</td><td>(Required) Select the package to download</td></tr>
<tr><td>Version</td><td>(Required) Version of the package</td></tr>
<tr><td>Destination directory</td><td>(Required) Path on the agent machine where the package will be downloaded</td></tr>
<tr><td>Extract</td><td>(Optional) Specify whether to extract the package contents at the destination directory</td></tr>
<tr><td>Files</td><td>(Optional) Specify files to be downloaded as multiline minimatch patterns. <a href="https://aka.ms/minimatchexamples" data-raw-source="[More Information](https://aka.ms/minimatchexamples)">More Information</a>.<p>The default pattern (<code>**</code>) will download all files within the artifact.</p></td></tr>


<tr>
<th style="text-align: center" colspan="2"><a href="~/pipelines/process/tasks.md#controloptions" data-raw-source="[Control options](../../process/tasks.md#controloptions)">Control options</a></th>
</tr>

</table>

## Examples

### Download a nuget package from an organization-scoped feed and extract to destination directory

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

## Q&A

### How do I find the id of the feed (or project) I want to download my artifact from

The get feed api can be used to retrieve the feed and project id for your feed. The api is documented [here](https://go.microsoft.com/fwlink/?linkid=2099537).

### Can I use the project or feed name instead of ids

Yes, you can use the project or feed name in your definition, however if your project or feed is renamed in the future, your task will also have to be updated or it might fail.

## Open source

This task is open source [on GitHub](https://github.com/Microsoft/azure-pipelines-tasks). Feedback and contributions are welcome.
