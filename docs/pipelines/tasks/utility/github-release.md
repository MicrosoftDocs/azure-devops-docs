---
title: GitHub Release task
description: Create, edit, or discard a GitHub release.
ms.topic: reference
ms.prod: devops
ms.technology: devops-cicd
ms.assetid: 7B5A6198-ADF8-4B16-9939-7ADDF85708B2
ms.manager: alewis
ms.custom: seodec18
ms.author: dastahel
ms.reviewer: dastahel
ms.date: 12/07/2018
monikerRange: 'azure-devops'
---

# GitHub Release task

**Azure Pipelines**

Use this task in your pipeline to create, edit, or discard a [GitHub release](https://help.github.com/categories/releases/).

## Prerequisites

### GitHub service connection
This task requires a [GitHub service connection](../../library/service-endpoints.md#sep-github) with **Write** permission to the GitHub repository. You can create a GitHub service connection in your Azure Pipelines project. Once created, use the name of the service connection in this task's settings.

::: moniker range="> tfs-2018"
## YAML snippet
[!INCLUDE [temp](../_shared/yaml/GitHubReleaseV0.md)]
::: moniker-end

## Arguments

<table><thead><tr><th>Argument</th><th>Description</th></tr></thead>
<tr><td>GitHub Connection</td><td>(Required) Enter the service connection name for your GitHub connection. Learn more about service connections [here.](https://aka.ms/AA3am5s)</td></tr>
<tr><td>Repository</td><td>(Required) Select the name of GitHub repository in which GitHub releases will be created.</td></tr>
<tr><td>Action</td><td>(Required) Select the type of release operation you want perform. This task can create, edit, or discard a GitHub release.</td></tr>
<tr><td>Target</td><td>(Required) This is the commit SHA for which the GitHub release will be created. E.g. `48b11d8d6e92a22e3e9563a3f643699c16fd6e27`. You can also use variables here.</td></tr>
<tr><td>Tag source</td><td>(Required) Configure the tag to be used for release creation. The 'Git tag' option automatically takes the tag which is associated with this commit. Use the 'User specified tag' option in case you want to manually provide a tag.</td></tr>
<tr><td>Tag</td><td>(Required) Specify the tag for which you want to create, edit, or discard a release. You can also use variables here. E.g. `$(tagName)`.</td></tr>
<tr><td>Release title</td><td>(Optional) Specify the title of the GitHub release. If left empty, the tag will be used as the release title.</td></tr>
<tr><td>Release notes source</td><td>(Optional) Specify the description of the GitHub release. Use the 'Release notes file' option to use the contents of a file as release notes. Use the 'Inline release notes' option to manually enter the release notes.</td></tr>
<tr><td>Release notes file path</td><td>(Optional) Select the file which contains the release notes.</td></tr>
<tr><td>Release notes</td><td>(Optional) Type your release notes here. Markdown is supported.</td></tr>
<tr><td>Assets</td><td>(Optional) Specify the files to be uploaded as assets for the release. You can use wildcard characters to specify a set of files. E.g. `$(Build.ArtifactStagingDirectory)/*.zip`. You can also specify multiple patterns - one per line. By default, all files in the `$(Build.ArtifactStagingDirectory)` directory will be uploaded.</td></tr>
<tr><td>Asset upload mode</td><td>(Optional) Use the 'Delete existing assets' option to first delete any existing assets in the release and then upload all assets. Use the 'Replace existing assets' option to replace any assets that have the same name.</td></tr>
<tr><td>Draft release</td><td>(Optional) Indicate whether the release should be saved as a draft (unpublished). If `false`, the release will be published.</td></tr>
<tr><td>Pre-release</td><td>(Optional) Indicate whether the release should be marked as a pre-release.</td></tr>
<tr><td>Add changelog</td><td>(Optional) If set to `true`, a list of changes (commits and issues) between this and the last published release will be generated and appended to release notes.</td></tr>
[!INCLUDE [temp](../_shared/control-options-arguments.md)]
</table>

## Examples

### Create a GitHub release

The following YAML creates a GitHub release every time the task runs. The build number is used as the tag version for the release. All .exe files and README.txt files in the $(Build.ArtifactStagingDirectory) folder are uploaded as assets. By default, the task also generates a change log (a list of commits and issues that are part of this release) and publishes it as release notes.

```YAML
- task: GithubRelease@0 
  displayName: 'Create GitHub Release'      
  inputs:
    githubConnection: zenithworks
    repositoryName: zenithworks/javaAppWithMaven
    tagSource: manual
    tag: $(Build.BuildNumber)      
    assets: |
         $(Build.ArtifactStagingDirectory)/*.exe
         $(Build.ArtifactStagingDirectory)/README.txt
```

You can also control the creation of the release based on repository tags. The following YAML creates a GitHub release only when the commit that triggers the pipeline has a Git tag associated with it. The GitHub release is created with the same tag version as the associated Git tag.

```YAML
- task: GithubRelease@0 
  displayName: 'Create GitHub Release'      
  inputs:
    githubConnection: zenithworks
    repositoryName: zenithworks/javaAppWithMaven           
    assets: $(Build.ArtifactStagingDirectory)/*.exe
```

You may also want to use the task in conjunction with task conditions to get even finer control over when the task runs, thereby restricting the creation of releases. For example, in the following YAML the task runs only when the pipeline is triggered by a Git tag matching the pattern 'refs/tags/release-v*'.

```YAML
- task: GithubRelease@0 
  displayName: 'Create GitHub Release'   
  condition: startsWith(variables['Build.SourceBranch'], 'refs/tags/release-v')   
  inputs:
    githubConnection: zenithworks
    repositoryName: zenithworks/javaAppWithMaven           
    assets: $(Build.ArtifactStagingDirectory)/*.exe
```

### Edit a GitHub release

The following YAML updates the status of a GitHub release from 'draft' to 'published'. The release to be edited is determined by the specified tag.

```YAML
- task: GithubRelease@0
  displayName: 'Edit GitHub Release'
  inputs:
    githubConnection: zenithworks
    repositoryName: zenithworks/javaAppWithMaven
    action: edit
    tag: $(myDraftReleaseVersion)
    isDraft: false
```

### Delete a GitHub release

The following YAML deletes a GitHub release. The release to be deleted is determined by the specified tag.

```YAML
- task: GithubRelease@0
  displayName: 'Delete GitHub Release'
  inputs:
    githubConnection: zenithworks
    repositoryName: zenithworks/javaAppWithMaven
    action: delete
    tag: $(myDraftReleaseVersion)
```

## Open source

This task is open source [on GitHub](https://github.com/Microsoft/azure-pipelines-tasks). Feedback and contributions are welcome.
