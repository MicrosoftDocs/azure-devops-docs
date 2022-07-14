---
title: Docker task
description: Build and push Docker images to any container registry by using a Docker registry service connection.
ms.topic: reference
ms.assetid: E28912F1-0114-4464-802A-A3A35437FD16
ms.manager: atulmal
ms.author: atulmal
author: azooinmyluggage
ms.date: 07/11/2022
ms.custom: fasttrack-edit
monikerRange: '<= azure-devops'
---

# Docker task

[!INCLUDE [version-lt-eq-azure-devops](../../../includes/version-lt-eq-azure-devops.md)]

Use this task to build and push Docker images to any container registry by using a Docker registry service connection.

## Overview

Here are the key benefits of using a Docker task as compared to directly using a Docker client binary in script: 

- **Integration with a Docker registry service connection**. The task makes it easy to use a Docker registry service connection for connecting to any container registry. After login, you can author follow-up tasks to run any tasks or scripts by using the login that the Docker task has already done. For example, you can use the Docker task to log in to any container registry and then use a subsequent task or script to build and push an image to this registry. 

- **Metadata added as labels**. The task adds traceability-related metadata to the image in the form of the following labels: 

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

## Task inputs

| Parameter | Required or optional | Description |
|------------|-------------|-------------|
| `command`<br/>Command | Required | Possible values: `buildAndPush`, `build`, `push`, `login`, `logout`<br/>Added in version 2.173.0: `start`, `stop`<br/>Default value: `buildAndPush` |
| `containerRegistry`<br/>Container registry | Optional | Name of the [Docker registry service connection](../../library/service-endpoints.md#docker-registry-service-connection). |
| `repository`<br/>Repository | Optional | Name of repository within the container registry that corresponds to the Docker registry service connection specified as input for `containerRegistry`. Prefix with `username/` for Docker Hub. |
| `container`<br/>Container | Required for commands `start` and `stop` | Container resource to start or stop. |
| `tags`<br/>Tags | Optional | Multiline input where each line contains a tag to be used in `build`, `push`, or `buildAndPush` commands.<br/>Default value: `$(Build.BuildId)` |
| `Dockerfile`<br/>Dockerfile | Optional | Path to the Dockerfile. The task will use the *first* Dockerfile that it finds to build the image.<br/>Default value: `**/Dockerfile` |
| `buildContext`<br/>Build context | Optional | Path to the build context.<br/>Default value: `**` |
| `arguments`<br/>Arguments | Optional | Additional arguments to be passed onto the Docker client.<br />Be aware that if you use the value `buildAndPush` for the `command` parameter, the `arguments` property will be ignored.
| `addPipelineData` <br/>Add pipeline metadata to an image | Optional | Pipeline data like source branch name and build ID is added by default, which helps with traceability. For example, you can inspect an image to find out which pipeline built the image. You can opt out of this default behavior. <br/>Possible values: `true`, `false`<br/>Default value: `true` |
| `addBaseImageData` <br/>Add base image metadata to an image | Optional | Base image data like base image name and digest is added by default, which helps with traceability. You can opt out of this default behavior. <br/>Possible values: `true`, `false`<br/>Default value: `true` |

## Login

The following YAML snippet showcases a container registry login that uses a Docker registry service connection. 

# [YAML](#tab/yaml)

```YAML
- task: Docker@2
  displayName: Login to ACR
  inputs:
    command: login
    containerRegistry: dockerRegistryServiceConnection1
```

# [Classic](#tab/classic)

Use a Docker registry connection with the Docker login command. Set **Container Repository** to your Docker registry service connection.

:::image type="content" source="media/docker-classic-container-login.png" alt-text="Screenshot of setting a registry service connection for the Docker login command. ":::

---

## Build and push
A convenience command called `buildAndPush` allows for build and push of images to a container registry in a single command. The following YAML snippet is an example of building and pushing multiple tags of an image to multiple registries. 

# [YAML](#tab/yaml)

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
    repository: contosoRepository # username/contosoRepository for  
    tags: |
      tag1
      tag2
```

In the preceding snippet, the images ```contosoRepository:tag1``` and ```contosoRepository:tag2``` are built and pushed to the container registries that correspond to ```dockerRegistryServiceConnection1``` and ```dockerRegistryServiceConnection2```. 

If you want to build and push to a specific authenticated container registry instead of building and pushing to all authenticated container registries at once, specify the ```containerRegistry``` input along with ```command: buildAndPush```: 

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

# [Classic](#tab/classic)

The command `buildAndPush` lets you build and push images to a container registry in a single command. Here's an example of building and pushing multiple tags of an image with authentication to Docker Hub.  

:::image type="content" source="media/docker-classic-build-push.png" alt-text="Screenshot of using build and push in a Docker classic task.":::

You can also build and push without authentication. In the `buildAndPush` tasks, the images for `tag1` and `tag2` are built and pushed to the container registries that correspond to service connections set up in the previous two login tasks. 

:::image type="content" source="media/docker-classic-build-push-two-containers.png" alt-text="Screenshot of a classic pipeline with build and push to two Docker container registries.":::

---

## Logout

# [YAML](#tab/yaml)

The following YAML snippet showcases a container registry logout that uses a Docker registry service connection. 

```YAML
- task: Docker@2
  displayName: Logout of ACR
  inputs:
    command: logout
    containerRegistry: dockerRegistryServiceConnection1
```
# [Classic](#tab/classic)

You can also log out from your Docker registry service connection with the Docker task. 

:::image type="content" source="media/docker-classic-logout.png" alt-text="Screenshot of Docker task logout.":::

---

## Start/stop
You can use a start/stop task to control job and service containers.
This usage is uncommon but works for unique circumstances.

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
# Any task beyond this point would not be able to target the builder container
# because it has been stopped
```

## Other commands and arguments
You can use the command and argument inputs to pass additional arguments for build or push commands by using a Docker client binary: 

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
    repository: contosoRepository # username/contosoRepository for Docker Hub
    tags: tag1
    arguments: --secret id=mysecret,src=mysecret.txt
```

> [!NOTE]
> The argument's input is evaluated for all commands except `buildAndPush`. Because `buildAndPush` is a convenience command (`build` followed by `push`), `arguments` input is ignored for this command.

## Troubleshooting

### Why does my Docker task ignore arguments passed to the buildAndPush command?

A Docker task that's configured with the `buildAndPush` command ignores the arguments passed, because they become ambiguous to the build and push commands that are run internally. You can split your command into separate build and push steps and pass the suitable arguments. For an example, see [this Stack Overflow post](https://stackoverflow.com/questions/60287354/i-am-using-azure-devops-to-build-and-push-my-docker-image-how-can-i-pass-argume).

### Docker V2 supports Docker registry service connections but not Azure Resource Manager service connections. How can I use an existing Azure service principal name for authentication in a Docker task?

You can create a Docker registry service connection by using your Azure service principal name (SPN) credentials. Choose the **Others from Registry** type and provide the details as follows:

```
Docker Registry:    Your container registry URL (for example, https://myacr.azurecr.io)
Docker ID:          Service principal client ID
Password:           Service principal key
```

## Open source

This task is open source [on GitHub](https://github.com/Microsoft/azure-pipelines-tasks/tree/master/Tasks/DockerV2). Feedback and contributions are welcome.

