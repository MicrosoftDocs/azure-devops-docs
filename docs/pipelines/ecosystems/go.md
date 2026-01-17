---
title: Build and test Go projects
description: Build and test Go projects with Azure Pipelines & Azure DevOps
ms.topic: how-to
ms.assetid: a72557df-6df4-4fb6-b437-be0730624e3c
ms.custom: freshness-fy22q2, devdivchpfy22
ms.date: 01/16/2026
monikerRange: 'azure-devops'
---

# Build and test Go projects

[!INCLUDE [version-eq-azure-devops](../../includes/version-eq-azure-devops.md)]

Use Azure Pipelines to automatically build, test, and deploy your Go projects. This article shows you how to create a pipeline that builds and tests your Go code every time you push changes to your repository.

## Prerequisites

- An Azure DevOps organization and project. [Create one for free](../../organizations/projects/create-project.md).
- A Go project in a GitHub or Azure Repos repository. If you don't have a project, you can use the sample repository provided in this article.

## Create your first pipeline

New to Azure Pipelines? Try this section before moving on to other sections.

[!INCLUDE [include](includes/get-code-before-sample-repo.md)]

```
https://github.com/MicrosoftDocs/pipelines-go
```

## Sign in to Azure Pipelines

[!INCLUDE [include](includes/sign-in-azure-pipelines.md)]


1. In a browser, go to [dev.azure.com](https://dev.azure.com) and sign in.
1. Select your organization.
1. Create a new project by selecting **New project** or **Create project** if you're creating the first project in the organization.
1. Enter a **Project name**.
1. Select the **Visibility** for your project.
1. Select **Create**.

## Create the pipeline

[!INCLUDE [include](includes/create-pipeline-before-template-selected.md)]

When the **Configure** tab appears, select **Go**. Your new pipeline appears, with the `azure-pipelines.yml` YAML file ready to be configured. See the following sections to learn some of the more common ways to customize your pipeline.

## Build environment

You can use Azure Pipelines to build your Go projects without setting up any infrastructure of your own. You can use Linux, macOS, or Windows agents to run your builds.

Update the following snippet in your `azure-pipelines.yml` file to select the appropriate image.

```yaml
pool:
  vmImage: 'ubuntu-latest'
```

Modern versions of Go are preinstalled on Microsoft-hosted agents. For the exact versions of preinstalled Go, refer to [Microsoft-hosted agents in Azure Pipelines](../agents/hosted.md#software).

## Set up Go

> [!IMPORTANT]
> **Go version support:** The Go project no longer maintains Go versions earlier than 1.11 and these versions don't receive security updates. Microsoft-hosted agents include only currently supported Go versions. If your project uses Go 1.10 or earlier, upgrade to Go 1.21 or later to benefit from built-in module support, security patches, and performance improvements. See the [Go release history](https://go.dev/doc/devel/release) for version support details.

### [Go 1.11+](#tab/go-current)

Starting with Go 1.11, you no longer need to define a `$GOPATH` environment variable, set up a workspace layout, or use the `dep` module. Dependency management is now built in with [Go modules](https://go.dev/blog/using-go-modules).

This YAML implements the `go get` command to download Go packages and their dependencies. It then uses `go build` to generate the content that is published by the `PublishBuildArtifacts@1` task.

```yaml
trigger: 
 - main

pool:
   vmImage: 'ubuntu-latest'

steps: 
- task: GoTool@0
  inputs:
    version: '1.22'  # Use a currently supported Go version
- task: Go@0
  inputs:
    command: 'get'
    arguments: '-d'
    workingDirectory: '$(System.DefaultWorkingDirectory)'
- task: Go@0
  inputs:
    command: 'build'
    workingDirectory: '$(System.DefaultWorkingDirectory)'
- task: CopyFiles@2
  inputs:
    TargetFolder: '$(Build.ArtifactStagingDirectory)'
- task: PublishBuildArtifacts@1
  inputs:
     artifactName: drop
```

### [Go < 1.11 (legacy)](#tab/go-older)

> [!WARNING]
> Go versions earlier than 1.11 reached end of life and no longer receive security updates. The `dep` dependency manager is also deprecated. This section is provided only for legacy projects that can't upgrade immediately. **Migrate to Go 1.21 or later with Go modules.**

As the Go documentation [describes](https://golang.org/doc/code.html#Workspaces), a Go workspace consists of a root directory to which the `$GOPATH` environment variable points. The `$GOPATH` is a Go-specific environment variable that tells the Go compiler where to find source code and dependencies. Within that directory, are the following standard subdirectories:

* `bin` to contain executable commands
* `pkg` to contain compiled packages (`.a` files)
* `src` to contain Go source files (`.go`, `.c`, `.g`, `.s`)

When an Azure Pipelines build fetches code from a remote repository, it places the code in the default working directory of the build. To match the expected structure of a Go workspace, add the following snippet to your `azure-pipelines.yml` file. This script runs in bash on Linux and macOS agents, but you must modify it for Windows.

```yaml
variables:
  GOBIN:  '$(GOPATH)/bin' # Go binaries path
  GOPATH: '$(system.defaultWorkingDirectory)/gopath' # Go workspace path
  modulePath: '$(GOPATH)/src/github.com/$(build.repository.name)' # Path to the module's code

steps:
- script: |
    mkdir -p '$(GOBIN)'
    mkdir -p '$(GOPATH)/pkg'
    mkdir -p '$(modulePath)'
    shopt -s extglob
    shopt -s dotglob
    mv !(gopath) '$(modulePath)'
    echo '##vso[task.prependpath]$(GOBIN)'
  displayName: 'Set up the Go workspace'

- script: |
    go version
    go get -v -t -d ./...
    if [ -f Gopkg.toml ]; then
        curl https://raw.githubusercontent.com/golang/dep/master/install.sh | sh
        dep ensure
    fi
    go build -v .
  workingDirectory: '$(modulePath)'
  displayName: 'Get dependencies, then build'
```

If your code isn't at GitHub, change the `modulePath` variable's use of `github.com` to an appropriate value for your module.

This snippet performs the following actions:

1. Sets `$GOROOT` to the version of Go that you want to use.
1. Sets other well-known Go environment variables to their proper values.
1. Creates a Go workspace in a subdirectory named `gopath` with child directories `bin`, `pkg`, and `src`.
1. Moves code that the build fetches from the remote repository into the workspace `src` directory.
1. Adds the version of Go and the workspace `bin` directory to the path.

### Install dependencies

#### Use go get

Use `go get` to download the source code for a Go project or to install a tool into the Go workspace. Add the following snippet to your `azure-pipelines.yml` file:

```yaml
- script: go get -v -t -d ./...
  workingDirectory: '$(modulePath)'
  displayName: 'go get dependencies'
```

#### Use dep ensure

> [!WARNING]
> The `dep` tool is deprecated and unmaintained. For all Go projects, migrate to [Go modules](https://go.dev/blog/using-go-modules), which is the official dependency management solution since Go 1.11.

Use `dep ensure` if your legacy project still uses dep to download dependencies imported in your code. The `dep ensure` command clones imported repositories into your project's vendor directory. Its `Gopkg.lock` and `Gopkg.toml` files guarantee that everyone working on the project uses the same version of dependencies as your build. Add the following snippet to your `azure-pipelines.yml` file.

> [!NOTE]
> The following script runs on Linux and macOS agents and can be used for older versions of Go that require a specific folder structure. The script is written for Unix shells, and as a result can't work with Windows agents.

```yaml
- script: |
    if [ -f Gopkg.toml ]; then
        curl https://raw.githubusercontent.com/golang/dep/master/install.sh | sh
        dep ensure
    fi
  workingDirectory: '$(modulePath)'
  displayName: 'Download dep and run `dep ensure`'
```

---

## Build

Use `go build` to build your Go project. Add the following snippet to your `azure-pipelines.yml` file:

```yaml
- task: Go@0
  inputs:
    command: 'build'
    workingDirectory: '$(System.DefaultWorkingDirectory)'
```

## Test

Use `go test` to test your Go module and its subdirectories (`./...`). Add the following snippet to your `azure-pipelines.yml` file:

```yaml
- task: Go@0
  inputs:
    command: 'test'
    arguments: '-v'
    workingDirectory: '$(System.DefaultWorkingDirectory)'
```

When you're ready, commit a new _azure-pipelines.yml_ file to your repository and update the commit message. Select **Save and run**.

   > [!div class="mx-imgBorder"]
   > ![Save and run button in a new YAML pipeline](media/save-and-run-button-new-yaml-pipeline.png)

   If you want to watch your pipeline in action, select the build in the **Jobs** option on your Azure Pipelines dashboard.
    :::image type="content" source="media/azure-pipe-run.png" alt-text="Pipeline build in action when the Azure Pipelines Jobs option is selected.":::

   Because your code appeared to be a good match for the [Go](https://github.com/microsoft/azure-pipelines-yaml/blob/master/templates/go.yml) template, Azure Pipelines automatically created your pipeline.

   You now have a working YAML pipeline (`azure-pipelines.yml`) in your repository that's ready for you to customize!

When you're ready to make changes to your pipeline, select it in the **Pipelines** page, and then **Edit** the `azure-pipelines.yml` file.

> [!TIP]
> To make changes to the YAML file as described in this article, select the pipeline in **Pipelines** page, and then select **Edit** to open an editor for the `azure-pipelines.yml` file.
:::image type="content" source="media/azure-pipe-edit.png" alt-text="Screenshot showing how to edit the Azure Pipeline from the dashboard with more option selected and Edit highlighted.":::  

## Build an image and push to Azure Container Registry

For your Go app, you can also [build an image](containers/build-image.md) and [push it to a container registry](containers/push-image.md).

## Related content

- [Go extension for Visual Studio Code](https://marketplace.visualstudio.com/items?itemName=ms-vscode.Go)
- [Microsoft-hosted agents](../agents/hosted.md)
- [YAML schema reference](/azure/devops/pipelines/yaml-schema)
- [Go modules documentation](https://go.dev/blog/using-go-modules)
