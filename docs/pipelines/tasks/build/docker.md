---
title: Docker task
description: Build and push Docker images to any container registry using Docker registry service connection
ms.topic: reference
ms.assetid: E28912F1-0114-4464-802A-A3A35437FD16
ms.manager: atulmal
ms.author: atulmal
author: azooinmyluggage
ms.date: 08/26/2020
ms.custom: fasttrack-edit
monikerRange: '>= tfs-2018'
---

# Docker task

Use this task to build and push Docker images to any container registry using Docker registry service connection.

## Overview

Following are the key benefits of using Docker task as compared to directly using docker client binary in script - 

- **Integration with Docker registry service connection** - The task makes it easy to use a Docker registry service connection for connecting to any container registry. Once logged in, the user can author follow up tasks to execute any tasks/scripts by leveraging the login already done by the Docker task. For example, you can use the Docker task to sign in to any Azure Container Registry and then use a subsequent task/script to build and push an image to this registry. 

- **Metadata added as labels** - The task adds traceability-related metadata to the image in the form of the following labels -  
  - com.azure.dev.image.build.buildnumber
  - com.azure.dev.image.build.builduri
  - com.azure.dev.image.build.definitionname
  - com.azure.dev.image.build.repository.name
  - com.azure.dev.image.build.repository.uri
  - com.azure.dev.image.build.sourcebranchname
  - com.azure.dev.image.build.sourceversion
  - com.azure.dev.image.release.definitionname
  - com.azure.dev.image.release.releaseid
  - com.azure.dev.image.release.releaseweburl
  - com.azure.dev.image.system.teamfoundationcollectionuri
  - com.azure.dev.image.system.teamproject

## Task Inputs

| Parameters | Description |
|------------|-------------|
| `command`<br/>Command | (Required) Possible values: `buildAndPush`, `build`, `push`, `login`, `logout`<br/>Added in version 2.173.0: `start`, `stop`<br/>Default value: `buildAndPush` |
| `containerRegistry`<br/>Container registry | (Optional) Name of the [Docker registry service connection](../../library/service-endpoints.md#sep-docreg) |
| `repository`<br/>Repository | (Optional) Name of repository within the container registry corresponding to the Docker registry service connection specified as input for `containerRegistry` |
| `container`<br/>Container | (Required for commands `start` and `stop`) The container resource to start or stop |
| `tags`<br/>Tags | (Optional) Multiline input where each line contains a tag to be used in `build`, `push` or `buildAndPush` commands<br/>Default value: `$(Build.BuildId)` |
| `Dockerfile`<br/>Dockerfile | (Optional) Path to the Dockerfile. The task will use the **first** dockerfile it finds to build the image.<br/>Default value: `**/Dockerfile` |
| `buildContext`<br/>Build context | (Optional) Path to the build context<br/>Default value: `**` |
| `arguments`<br/>Arguments | (Optional) Additional arguments to be passed onto the docker client<br />Be aware that if you use value `buildAndPush` for the `command` parameter, then the `arguments` property will be ignored.
| `addPipelineData` <br/>Add Pipeline Data | (Optional) Adds the above mentioned metadata as labels to the image <br/>Possible values: `true`, `false`<br/>Default value: `true` |

## Login
Following YAML snippet showcases container registry login using a Docker registry service connection - 

```YAML
- task: Docker@2
  displayName: Login to ACR
  inputs:
    command: login
    containerRegistry: dockerRegistryServiceConnection1
```

## Build and Push
A convenience command called buildAndPush allows for build and push of images to container registry in a single command. The following YAML snippet is an example of building and pushing multiple tags of an image to multiple registries - 

```YAML
steps:
- task: Docker@2
  displayName: Login to ACR
  inputs:
    command: login
    containerRegistry: dockerRegistryServiceConnection1
- task: Docker@2
  displayName: Login to Docker Hub
  inputs:
    command: login
    containerRegistry: dockerRegistryServiceConnection2
- task: Docker@2
  displayName: Build and Push
  inputs:
    command: buildAndPush
    repository: contosoRepository
    tags: |
      tag1
      tag2
```

In the above snippet, the images ```contosoRepository:tag1``` and ```contosoRepository:tag2``` are built and pushed to the container registries corresponding to ```dockerRegistryServiceConnection1``` and ```dockerRegistryServiceConnection2```. 

If one wants to build and push to a specific authenticated container registry instead of building and pushing to all authenticated container registries at once, the ```containerRegistry``` input can be explicitly specified along with ```command: buildAndPush``` as shown below - 

```YAML
steps:
- task: Docker@2
  displayName: Build and Push
  inputs:
    command: buildAndPush
    containerRegistry: dockerRegistryServiceConnection1
    repository: contosoRepository
    tags: |
      tag1
      tag2
```


## Logout
Following YAML snippet showcases container registry logout using a Docker registry service connection - 

```YAML
- task: Docker@2
  displayName: Logout of ACR
  inputs:
    command: logout
    containerRegistry: dockerRegistryServiceConnection1
```

## Start/stop
This task can also be used to control job and service containers.
This usage is uncommon, but occasionally used for unique circumstances.
```yaml
resources:
  containers:
  - container: builder
    image: ubuntu:18.04
steps:
- script: echo "I can run inside the container (it starts by default)"
  target:
    container: builder
- task: Docker@2
  inputs:
    command: stop
    container: builder
# any task beyond this point would not be able to target the builder container
# because it's been stopped
```

## Other commands and arguments
The command and argument inputs can be used to pass additional arguments for build or push commands using docker client binary as shown below - 

```YAML
steps:
- task: Docker@2
  displayName: Login to ACR
  inputs:
    command: login
    containerRegistry: dockerRegistryServiceConnection1
- task: Docker@2
  displayName: Build
  inputs:
    command: build
    repository: contosoRepository
    tags: tag1
    arguments: --secret id=mysecret,src=mysecret.txt
```

> [!NOTE]
> The arguments input is evaluated for all commands except `buildAndPush`. As `buildAndPush` is a convenience command (`build` followed by `push`), `arguments` input is ignored for this command.

## Troubleshooting

### Why does Docker task ignore arguments passed to buildAndPush command?

Docker task configured with buildAndPush command ignores the arguments passed since they become ambiguous to the build and push commands that are run internally. You can split your command into separate build and push steps and pass the suitable arguments. See this [stackoverflow post](https://stackoverflow.com/questions/60287354/i-am-using-azure-devops-to-build-and-push-my-docker-image-how-can-i-pass-argume) for example.

### DockerV2 only supports Docker registry service connection and not support ARM service connection. How can I use an existing Azure service principal (SPN) for authentication in Docker task?

You can create a Docker registry service connection using your Azure SPN credentials. Choose the Others from Registry type and provide the details as follows:

```
Docker Registry:    Your container registry URL (eg. https://myacr.azurecr.io)
Docker ID:          Service principal client ID
Password:           Service principal key
```

## Open source

This task is open source [on GitHub](https://github.com/Microsoft/azure-pipelines-tasks/tree/master/Tasks/DockerV2). Feedback and contributions are welcome.

