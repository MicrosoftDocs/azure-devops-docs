---
title: Container Jobs in Azure Pipelines and TFS
ms.custom: seodec18
description: Run pipeline jobs inside of a container
ms.assetid: 8d35f78a-f386-4699-9280-7bd933de9e7b
ms.prod: devops
ms.technology: devops-cicd
ms.topic: conceptual
ms.manager: jillfra
ms.author: macoope
ms.date: 03/19/2019
monikerRange: '>= azure-devops-2019'
---

# Container jobs

**Azure Pipelines**

By default, jobs run on the host machine where the [agent](../agents/agents.md)
is installed.
This is convenient and typically well-suited for projects that are just beginning to adopt continuous integration (CI).
Over time, you may find that you want more control over the stage where your tasks run.

<!-- this appears to be identical to the topic monikerRange, but there are build warnings without it -->
::: moniker range=">= azure-devops-2019"
[!INCLUDE [container-vs-host](./_shared/container-vs-host.md)]
::: moniker-end

Containers offer a lightweight abstraction over the host operating system.
You can select the exact versions of operating systems, tools, and dependencies that your build requires.
When you specify a container in your pipeline, the agent will first
fetch and start the container.
Then, each step of the job will run inside the container.

## Requirements

### Linux-based containers

The Azure Pipelines system requires a few things in Linux-based containers:
- Bash (for the `bash` step / task, which most container pipelines will use)
- glibc-based
- Can run Node.js (which the agent provides)
- Does not define an `ENTRYPOINT`

And on your agent host:
- Ensure Docker is installed
- The agent must have permission to access the Docker daemon

Be sure your container has each of these tools available. Some of the extremely stripped-down
containers available on Docker Hub, especially those based on Alpine Linux, don't satisfy these
minimum requirements. Containers with a `ENTRYPOINT` might not work, since Azure Pipelines
will `docker create` an awaiting container and `docker exec` a series of commands which expect
the container is always up and running.

Also note: the Red Hat Enterprise Linux 6 build of the agent won't run container job.
Choose another Linux flavor, such as Red Hat Enterprise Linux 7 or above.

### Windows Containers

Azure Pipelines can also run [Windows Containers](/virtualization/windowscontainers/about/).
[Windows Server version 1803](/windows-server/get-started/get-started-with-1803) or higher is required.
Docker must be installed. Be sure your pipelines agent has permission to access the Docker daemon.

### Hosted agents

The `win1803` and `ubuntu-16.04` pools support running containers.
The Hosted macOS pool does not support running containers.

# [YAML](#tab/yaml)

## Single job

A simple example:

```yaml
pool:
  vmImage: 'ubuntu-16.04'

container: ubuntu:16.04

steps:
- script: printenv
```

This tells the system to fetch the `ubuntu` image tagged `16.04` from
[Docker Hub](https://hub.docker.com) and then start the container. When the
`printenv` command runs, it will happen inside the `ubuntu:16.04` container.

> [!Note]
> You must specify "Hosted Ubuntu 1604" as the
> pool name in order to run Linux containers. Other pools won't work.

A Windows example:

```yaml
pool:
  vmImage: 'win1803'

container: mcr.microsoft.com/windows/servercore:1803

steps:
- script: set
```

> [!Note]
> Windows requires that the kernel version of the host and container match.
> Since this example uses the hosted Windows Container pool, which is running an 1803
> build, we also use the `1803` tag for the container.

## Multiple jobs

Containers are also useful for running the same steps in [multiple jobs](multiple-phases.md).
In the following example, the same steps run in multiple versions of Ubuntu Linux.
(And we don't have to mention the `jobs` keyword, since there's only a single job defined.)

```yaml
pool:
  vmImage: 'ubuntu-16.04'

strategy:
  matrix:
    ubuntu14:
      containerImage: ubuntu:14.04
    ubuntu16:
      containerImage: ubuntu:16.04
    ubuntu18:
      containerImage: ubuntu:18.04

container: $[ variables['containerImage'] ]

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
container:
  image: myprivate/registry:ubuntu1604
  endpoint: private_dockerhub_connection

steps:
- script: echo hello
```

or

```yaml
container:
  image: myprivate.azurecr.io/windowsservercore:1803
  endpoint: my_acr_connection

steps:
- script: echo hello
```

### Options

If you need to control container startup, you can specify `options`.

```yaml
container:
  image: ubuntu:16.04
  options: --hostname container-test --ip 192.168.0.1

steps:
- script: echo hello
```

### Reusable container definition

In the following example, the containers are defined in the resources section.
Each container is then referenced later, by referring to its assigned alias.
(Here, we explicitly list the `jobs` keyword for clarity.)

```yaml
resources:
  containers:
  - container: u14
    image: ubuntu:14.04

  - container: u16
    image: ubuntu:16.04

  - container: u18
    image: ubuntu:18.04

jobs:
- job: RunInContainer
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

# [Designer](#tab/designer)

Container jobs are not yet supported in the designer.

---
