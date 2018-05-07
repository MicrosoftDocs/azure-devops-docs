---
title: Go
description: Get, build, test a go application, or run a custom go command.
ms.topic: reference
ms.prod: devops
ms.technology: devops-cicd
ms.assetid: 34B37FDD-BBF7-4EF1-B37C-9652CA7BB355
ms.manager: dastahel
ms.author: dastahel
ms.date: 05/04/2018
monikerRange: 'VSTS'
---

# Build: Go

![](_img/go.png) Get, build, test a go application, or run a custom go command.

## Arguments

<table><thead><tr><th>Argument</th><th>Description</th></tr></thead>
<tr><td>Command</td><td>(Required) Select a Go command to run. Select 'Custom' to use a command not listed here.</td></tr>
<tr><td>Custom command</td><td>(Required) Custom Go command for execution. For example: to execute go version, enter version.</td></tr>
<tr><td>Arguments</td><td>(Optional) Arguments to the selected command. For example, build time arguments for go build command.</td></tr>
<tr><td>Working Directory</td><td>(Required) Current working directory where the script is run. Empty is the root of the repo (build) or artifacts (release), which is $(System.DefaultWorkingDirectory)</td></tr>
[!INCLUDE [temp](../_shared/control-options-arguments.md)]
</table>

::: moniker range="vsts"

## YAML snippet

```YAML
# Go
# Get, build, test a go application, or run a custom go command.
- task: Go@0
  inputs:
    #command: 'get' # Options: get, build, test, custom
    #customCommand: # Required when command == Custom
    #arguments: # Optional
    workingDirectory: 
```

::: moniker-end

## Q&A

<!-- BEGINSECTION class="md-qanda" -->

<!-- ENDSECTION -->
