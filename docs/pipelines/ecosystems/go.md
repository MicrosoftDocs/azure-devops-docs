---
title: Build and test Go projects 
description: Build and test Go projects with Azure Pipelines & Azure DevOps
ms.topic: quickstart
ms.assetid: a72557df-6df4-4fb6-b437-be0730624e3c
ms.reviewer: azooinmyluggage
ms.custom: seodec18
ms.date: 01/28/2020
monikerRange: 'azure-devops'
---

# Build and test Go projects

**Azure Pipelines**

Use a pipeline to automatically build and test your Go projects.

## Create your first pipeline

> Are you new to Azure Pipelines? If so, then we recommend you try this section before moving on to other sections.

Import this repo into your Git repo:

```
https://github.com/MicrosoftDocs/pipelines-go
```

## Sign in to Azure Pipelines

[!INCLUDE [include](includes/sign-in-azure-pipelines.md)]

[!INCLUDE [include](includes/create-project.md)]

## Create the pipeline

[!INCLUDE [include](includes/create-pipeline-before-template-selected.md)]

> When the **Configure** tab appears, select **Go**. 

7. When your new pipeline appears, take a look at the YAML to see what it does. When you're ready, select **Save and run**.

   > [!div class="mx-imgBorder"] 
   > ![Save and run button in a new YAML pipeline](media/save-and-run-button-new-yaml-pipeline.png)

8. You're prompted to commit a new _azure-pipelines.yml_ file to your repository. After you're happy with the message, select **Save and run** again.

   If you want to watch your pipeline in action, select the build job.

   > You just created and ran a pipeline that we automatically created for you, because your code appeared to be a good match for the [Go](https://github.com/microsoft/azure-pipelines-yaml/blob/master/templates/go.yml) template.

   You now have a working YAML pipeline (`azure-pipelines.yml`) in your repository that's ready for you to customize!

9. When you're ready to make changes to your pipeline, select it in the **Pipelines** page, and then **Edit** the `azure-pipelines.yml` file.

See the sections below to learn some of the more common ways to customize your pipeline.


> [!Tip]
> To make changes to the YAML file as described in this topic, select the pipeline in **Pipelines** page, and then select **Edit** to open an editor for the `azure-pipelines.yml` file.

## Build environment

You can use Azure Pipelines to build your Go projects without needing to set up any infrastructure of your own. You can use Linux, macOS, or Windows agents to run your builds.

Update the following snippet in your `azure-pipelines.yml` file to select the appropriate image.

```yaml
pool:
  vmImage: 'ubuntu-latest'
```

Modern versions of Go are pre-installed on [Microsoft-hosted agents](../agents/hosted.md) in Azure Pipelines. For the exact versions of Go that are pre-installed, refer to [Microsoft-hosted agents](../agents/hosted.md#software).

## Set up Go


#### [Go 1.11+](#tab/go-current)

Starting with Go 1.11, you no longer need to define a `$GOPATH` environment, set up a workspace layout, or use the `dep` module. Dependency management is now built-in. 

This YAML implements the `go get` command to download Go packages and their dependencies. It then uses `go build` to generate the content that is published with `PublishBuildArtifacts@1` task. 

```yaml
trigger: 
 - master

pool:
   vmImage: 'ubuntu-latest'

steps: 
- task: GoTool@0
  inputs:
    version: '1.13.5'
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

#### [Go < 1.11](#tab/go-older)

As the Go documentation [describes](https://golang.org/doc/code.html#Workspaces), a Go workspace consists of a root directory to which the `$GOPATH` environment variable points. Within that directory are standard subdirectories:

* `bin` to contain executable commands
* `pkg` to contain compiled packages (`.a` files)
* `src` to contain Go source files (`.go`, `.c`, `.g`, `.s`)

When an Azure Pipelines build fetches code from a remote repository, it places the code in the default working directory of the build. This doesn't match the expected structure of a Go workspace. To address this, add the following snippet to your `azure-pipelines.yml` file. Note: this script runs in bash on Linux and macOS agents, but must be modified for Windows.

```yaml
variables:
  GOBIN:  '$(GOPATH)/bin' # Go binaries path
  GOROOT: '/usr/local/go1.13' # Go installation path
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
    echo '##vso[task.prependpath]$(GOROOT)/bin'
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

If your code is not in GitHub, change the `modulePath` variable's use of `github.com` to an appropriate value for your module.

This snippet does the following:

1. Sets `$GOROOT` to the version of Go that should be used.
2. Sets other well-known Go environment variables to their proper values.
3. Creates a Go workspace in a subdirectory named `gopath` with child directories `bin`, `pkg`, and `src`.
4. Moves code that was fetched from the remote repository into the workspace's `src` directory
5. Adds the version of Go and the workspace's `bin` directory to the path.

### Install dependencies

#### go get

Use `go get` to download the source code for a Go project or to install a tool into the Go workspace. Add the following snippet to your `azure-pipelines.yml` file:

```yaml
- script: go get -v -t -d ./...
  workingDirectory: '$(modulePath)'
  displayName: 'go get dependencies'
```

#### dep ensure

Use `dep ensure` if your project uses dep to download dependencies imported in your code. Running `dep ensure` clones imported repositories into your project's vendor directory. Its `Gopkg.lock` and `Gopkg.toml` files guarantee that everyone working on the project uses the same version of dependencies as your build. Add the following snippet to your `azure-pipelines.yml` file. 

> [!NOTE]
> This script runs on Linux and macOS agents and can be used for older versions of Go that require a specific folder structure. The script is written for Unix shells, and as a result cannot work with Windows agents. 

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

Use `go test` to test your go module and its subdirectories (`./...`). Add the following snippet to your `azure-pipelines.yml` file:

```yaml
- task: Go@0
  inputs:
    command: 'test'
    arguments: '-v'
    workingDirectory: '$(modulePath)'
```

## Build an image and push to container registry

For your Go app, you can also [build an image](containers/build-image.md) and [push it to a container registry](containers/push-image.md).

## Related extensions

[Go extension for Visual Studio Code](https://marketplace.visualstudio.com/items?itemName=ms-vscode.Go) (Microsoft)  
