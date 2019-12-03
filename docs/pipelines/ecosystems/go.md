---
title: Build and test Go projects 
description: Build and test Go projects with Azure Pipelines & Azure DevOps
ms.prod: devops
ms.technology: devops-cicd
ms.topic: quickstart
ms.assetid: a72557df-6df4-4fb6-b437-be0730624e3c
ms.manager: mijacobs
ms.author: jukullam
author: juliakm
ms.reviewer: dastahel
ms.custom: seodec18
ms.date: 04/24/2019
monikerRange: 'azure-devops'
---

# Build and test Go projects

**Azure Pipelines**

This guidance explains how to automatically build and test Go projects.

## Example

The following code is a simple Go project. To get started, fork this repo in GitHub, or import it into Azure Repos.

```
https://github.com/MicrosoftDocs/pipelines-go
```

Follow all the instructions in [Create your first pipeline](../create-first-pipeline.md) to create a pipeline for the sample app. When you're done with that topic, you'll have a working YAML file (`azure-pipelines.yml`) in your repository that you can continue to modify by following the instructions in this topic. To learn more about YAML, see [YAML schema reference](../yaml-schema.md).

> [!Tip]
> To make changes to the YAML file as described in this topic, select the pipeline in **Pipelines** page, and then select **Edit** to open an editor for the `azure-pipelines.yml` file.

## Build environment

You can use Azure Pipelines to build your Go projects without needing to set up any infrastructure of your own. You can use Linux, macOS, or Windows agents to run your builds.

Update the following snippet in your `azure-pipelines.yml` file to select the appropriate image.

```yaml
pool:
  vmImage: 'ubuntu-16.04' # examples of other options: 'macOS-10.13', 'vs2017-win2016'
```

Modern versions of Go are pre-installed on [Microsoft-hosted agents](../agents/hosted.md) in Azure Pipelines. For the exact versions of Go that are pre-installed, refer to [Microsoft-hosted agents](../agents/hosted.md#software).

## Set up a Go workspace

As the Go documentation [describes](https://golang.org/doc/code.html#Workspaces), a Go workspace consists of a root directory to which the `$GOPATH` environment variable points. Within that directory are standard subdirectories:

* `bin` to contain executable commands
* `pkg` to contain compiled packages (`.a` files)
* `src` to contain Go source files (`.go`, `.c`, `.g`, `.s`)

When an Azure Pipelines build fetches code from a remote repository, it places the code in the default working directory of the build. This doesn't match the expected structure of a Go workspace. To address this, add the following snippet to your `azure-pipelines.yml` file. Note: this script runs in bash on Linux and macOS agents, but must be modified for Windows.

```yaml
variables:
  GOBIN:  '$(GOPATH)/bin' # Go binaries path
  GOROOT: '/usr/local/go1.11' # Go installation path
  GOPATH: '$(system.defaultWorkingDirectory)/gopath' # Go workspace path
  modulePath: '$(GOPATH)/src/github.com/$(build.repository.name)' # Path to the module's code

steps:
- script: |
    mkdir -p '$(GOBIN)'
    mkdir -p '$(GOPATH)/pkg'
    mkdir -p '$(modulePath)'
    shopt -s extglob
    mv !(gopath) '$(modulePath)'
    echo '##vso[task.prependpath]$(GOBIN)'
    echo '##vso[task.prependpath]$(GOROOT)/bin'
  displayName: 'Set up the Go workspace'
```

If your code is not in GitHub, change the `modulePath` variable's use of `github.com` to an appropriate value for your module.

This snippet does the following:

1. Sets `$GOROOT` to the version of Go that should be used.
2. Sets other well-known Go environment variables to their proper values.
3. Creates a Go workspace in a subdirectory named `gopath` with child directories `bin`, `pkg`, and `src`.
4. Moves code that was fetched from the remote repository into the workspace's `src` directory
5. Adds the version of Go and the workspace's `bin` directory to the path.

## Install dependencies

### go get

Use `go get` to download the source code for a Go project or to install a tool into the Go workspace. Add the following snippet to your `azure-pipelines.yml` file:

```yaml
- script: go get -v -t -d ./...
  workingDirectory: '$(modulePath)'
  displayName: 'go get dependencies'
```

### dep ensure

Use `dep ensure` if your project uses dep to download dependencies imported in your code. Running `dep ensure` clones imported repositories into your project's vendor directory. Its `Gopkg.lock` and `Gopkg.toml` files guarantee that everyone working on the project uses the same version of dependencies as your build. Add the following snippet to your `azure-pipelines.yml` file. Note: this script runs in bash on Linux and macOS agents, but must be modified for Windows.

```yaml
- script: |
    if [ -f Gopkg.toml ]; then
        curl https://raw.githubusercontent.com/golang/dep/master/install.sh | sh
        dep ensure
    fi
  workingDirectory: '$(modulePath)'
  displayName: 'Download dep and run `dep ensure`'
```

## Build

Use `go build` to build your Go project. Add the following snippet to your `azure-pipelines.yml` file:

```yaml
- script: go build -v .
  workingDirectory: '$(modulePath)'
  displayName: 'Build'
```

## Test

Use `go test` to test your go module and its subdirectories (`./...`). Add the following snippet to your `azure-pipelines.yml` file:

```yaml
- script: go test -v ./...
  workingDirectory: '$(modulePath)'
  displayName: 'Run tests'
```

## Build an image and push to container registry

For your Go app, you can also [build an image](containers/build-image.md) and [[push it to a container registry](containers/push-image.md).

## Related extensions

[Go extension for Visual Studio Code](https://marketplace.visualstudio.com/items?itemName=ms-vscode.Go) (Microsoft)  
