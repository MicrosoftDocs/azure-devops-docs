---
title: Container Jobs in Azure Pipelines and TFS
titleSuffix: Azure Pipelines & TFS
description: Run pipeline jobs inside of a container
ms.assetid: 8d35f78a-f386-4699-9280-7bd933de9e7b
ms.prod: devops
ms.technology: devops-cicd
ms.topic: conceptual
ms.manager: douge
ms.author: macoope
ms.date: 10/10/2018
monikerRange: 'vsts'
---

# Container jobs

**Azure Pipelines**

By default, jobs run on the host machine where the [agent](../agents/agents.md)
is installed.
This is convenient and typically well-suited for projects that are just beginning to adopt continuous integration (CI).
Over time, you may find that you want more control over the stage where your tasks run.

Containers offer a lightweight abstraction over the host operating system.
You can select the exact versions of operating systems, tools, and dependencies that your build requires.
When you specify a container in your pipeline, the agent will first
fetch and start the container.
Then, each step of the job will run inside the container.

## Requirements

The Azure Pipelines system requires a few things to exist in Linux-based containers:
- Bash
- `which`

Be sure your container has each of these tools available. Some of the extremely stripped-down
containers available on Docker Hub, especially those based on Alpine Linux, don't satisfy these
minimum requirements.

Azure Pipelines can also run [Windows Containers](/virtualization/windowscontainers/about/).
[Windows Server version 1803](/windows-server/get-started/get-started-with-1803) or higher is required.

# [YAML](#tab/yaml)

## Single job

A simple example:

```yaml
resources:
  containers:
  - container: my_container
    image: ubuntu:16.04

pool:
  vmImage: 'ubuntu-16.04'

container: my_container

steps:
- script: printenv
```

This tells the system to fetch the `ubuntu` image tagged `16.04` from
[Docker Hub](https://hub.docker.com) and then start the container. When the
`printenv` command runs, it will happen inside the `ubuntu:16.04` container.

> [!Note]
> You must specify "Hosted Ubuntu 1604" as the
> pool name in order to run containers. Other pools won't work.
> In the future, we intend to remove the need to specify a pool.

## Multiple jobs

Containers are also useful for running the same steps in [multiple jobs](multiple-phases.md).
In the following example, the same steps run in multiple versions of Ubuntu Linux.

```yaml
resources:
  containers:
  - container: u14
    image: ubuntu:14.04

  - container: u16
    image: ubuntu:16.04

  - container: u18
    image: ubuntu:18.04

pool:
  vmImage: 'ubuntu-16.04'

strategy:
  matrix:
    ubuntu14:
      containerResource: u14
    ubuntu16:
      containerResource: u16
    ubuntu18:
      containerResource: u18

container: $[ variables['containerResource'] ]

steps:
  - script: printenv
```

## Other settings

### Endpoints

Containers can be hosted on registries other than Docker Hub. To host
an image on [Azure Container Registry](/azure/container-registry/) or
another private container registry,
add a [service connection](../library/service-endpoints.md) to the
private registry. Then you can reference it in a container spec:

```yaml
resources:
  - container: private_ubuntu1604
    image: myprivate/registry:ubuntu1604
    endpoint: private_dockerhub_connection
  
  - container: acr_win1803
    image: myprivate.azurecr.io/windowsservercore:1803
    endpoint: my_acr_connection
```

### Options

If you need to control container startup, you can specify `options`.

```yaml
resources:
  - container: my_container
    image: ubuntu:16.04
    options: --hostname container-test --ip 192.168.0.1
```

# [Designer](#tab/designer)

Container jobs are not yet supported in the designer.

---
