---
title: Docker task
description: Build and push Docker images to any container registry using Docker registry service connection
ms.topic: reference
ms.prod: devops
ms.technology: devops-cicd
ms.assetid: E28912F1-0114-4464-802A-A3A35437FD16
ms.manager: shasb
ms.author: shasb
author: shashankbarsin
ms.date: 02/12/2019
monikerRange: '>= tfs-2018'
---

# Docker task

Use this task in a build or release pipeline to build and push Docker images to any container registry using Docker registry service connection.

## Overview

Following are the key benefits of using Docker task as compared to directly using docker client binary in script - 

- **Integration with Docker registry service connection** - The task makes it easy to use a Docker registry service connection for connecting to any container registry. Once logged in, the user can author follow-up tasks to execute any tasks/scripts by leveraging the login already done by the Docker task. For example, you can use the Docker task to sign in to any Azure Container Registry and then use a subsequent task/script to build and push an image to this registry. 

- **Metadata added as labels** - The task adds traceability related metadata to the image in the form of the following labels -  
  - com.azure.dev.image.build.repository.uri
  - com.azure.dev.image.build.repository.name
  - com.azure.dev.image.build.sourcebranchname
  - com.azure.dev.image.build.sourceversion
  - com.azure.dev.image.system.teamfoundationcollectionuri
  - com.azure.dev.image.system.teamproject
  - com.azure.dev.image.build.definitionname
  - com.azure.dev.image.build.buildnumber
  - com.azure.dev.image.build.requestedfor

## Task Inputs

<table>
  <thead>
    <tr>
      <th>Parameters</th>
      <th>Description</th>
    </tr>
  </thead>
  <tr>
    <td><code>command</code><br/>Command</td>
    <td>(Required) Acceptable values: buildAndPush/build/push/login/logout<br/>Default value: buildAndPush</td>
  </tr>
  <tr>
    <td><code>containerRegistry</code><br/>Container registry</td>
    <td>(Optional) Name of the <a href="../../library/service-endpoints.md#sep-docreg" data-raw-source="[Docker registry service connection](../../library/service-endpoints.md#sep-docreg)">Docker registry service connection</a></td>
  </tr>
  <tr>
    <td><code>repository</code><br/>Repository</td>
    <td>(Optional) Name of repository within the container registry corresponding to the Docker registry service connection specified as input for containerRegistry</td>
  </tr>
  <tr>
    <td><code>tags</code><br/>Tags</td>
    <td>(Optional) Multiline input where each line contains a tag to be used in build, push or buildAndPush commands<br/>Default value: $(Build.BuildId)</td>
  </tr>
  <tr>
    <td><code>Dockerfile</code><br/>Dockerfile</td>
    <td>(Optional) Path to the Dockerfile<br/>Default value: **/Dockerfile</td>
  </tr>
  <tr>
    <td><code>buildContext</code><br/>Build context</td>
    <td>(Optional) Path to the build context<br/>Default value: **</td>
  </tr>
  <tr>
    <td><code>arguments</code><br/>Arguments</td>
    <td>(Optional) Additional arguments to be passed onto the docker client</td>
  </tr>
</table>

## Login
Following YAML snippet showcases container registry log in using a Docker registry service connection - 

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
    repository: someUser/contoso
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
> The arguments input is evaluated for all commands except buildAndPush. As buildAndPush is a convenience command (build followed by push), arguments input is ignored for this command.

## Open source

This task is open source [on GitHub](https://github.com/Microsoft/azure-pipelines-tasks/tree/master/Tasks/DockerV2). Feedback and contributions are welcome.

