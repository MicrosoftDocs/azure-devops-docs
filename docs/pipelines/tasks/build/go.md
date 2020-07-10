---
title: Go task
ms.custom: seodec18
description: Get, build, test a go application, or run a custom go command.
ms.topic: reference
ms.assetid: 34B37FDD-BBF7-4EF1-B37C-9652CA7BB355
ms.author: shasb
author: shashankbarsin
ms.date: 12/17/2019
monikerRange: 'azure-devops'
---

# Go task

**Azure Pipelines**

Use this task to get, build, or test a go application, or run a custom go command.

::: moniker range="> tfs-2018"

## YAML snippet

[!INCLUDE [temp](../includes/yaml/GoV0.md)]

::: moniker-end

## Arguments

<table>
   <thead>
      <tr>
         <th>Argument</th>
         <th>Description</th>
      </tr>
   </thead>
   <tr>
      <td><code>command</code><br/>Command</td>
      <td>(Required) Select a Go command to run. Select &#39;Custom&#39; to use a command not listed here.<br/>Default value: get</td>
   </tr>
   <tr>
      <td><code>customCommand</code><br/>Custom command</td>
      <td>(Required) Custom Go command for execution. For example: to execute go version, enter version.</td>
   </tr>
   <tr>
      <td><code>arguments</code><br/>Arguments</td>
      <td>(Optional) Arguments to the selected command. For example, build time arguments for go build command.</td>
   </tr>
   <tr>
      <td><code>workingDirectory</code><br/>Working Directory</td>
      <td>(Required) Current working directory where the script is run. Empty is the root of the repo (build) or artifacts (release), which is $(System.DefaultWorkingDirectory)</td>
   </tr>
</table>

## Example

```yml
variables:
  GOBIN:  '$(GOPATH)/bin' # Go binaries path
  GOROOT: '/usr/local/go1.11' # Go installation path
  GOPATH: '$(system.defaultWorkingDirectory)/gopath' # Go workspace path
  modulePath: '$(GOPATH)/src/github.com/$(build.repository.name)' # Path to the module's code

steps:
- task: GoTool@0
  displayName: 'Use Go 1.10'

- task: Go@0
  displayName: 'go get'
  inputs:
    arguments: '-d'

- task: Go@0
  displayName: 'go build'
  inputs:
    command: build
    arguments: '-o "$(System.TeamProject).exe"'

- task: ArchiveFiles@2
  displayName: 'Archive files'
  inputs:
    rootFolderOrFile: '$(Build.Repository.LocalPath)'
    includeRootFolder: False

- task: PublishBuildArtifacts@1
  displayName: 'Publish artifact'
  condition: succeededOrFailed()
```

## Open source

This task is open source [on GitHub](https://github.com/Microsoft/azure-pipelines-tasks). Feedback and contributions are welcome.

## FAQ

<!-- BEGINSECTION class="md-qanda" -->

<!-- ENDSECTION -->
