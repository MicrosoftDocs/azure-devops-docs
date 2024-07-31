---
title: Container jobs in YAML
description: Learn about configuring and running pipeline jobs inside containers.
ms.assetid: 8d35f78a-f386-4699-9280-7bd933de9e7b
ms.topic: conceptual
ms.date: 07/08/2024
monikerRange: '>= azure-devops-2019'
---

# Container jobs in YAML pipelines

[!INCLUDE [version-gt-eq-2019](../../includes/version-gt-eq-2019.md)]

This article explains container jobs in Azure Pipelines.

By default, Azure Pipelines [jobs](phases.md) run directly on the host machines where the agent is installed. Hosted agent jobs are convenient, require little initial setup and infrastructure to maintain, and are well-suited for basic projects.

If you want more control over task context, you can define and run jobs in containers. Containers are a lightweight abstraction over the host operating system that provides isolation from the host. When you run jobs in containers, you can select the exact versions of operating systems, tools, and dependencies that your build requires.

Linux and Windows [agents](../agents/agents.md) can run pipeline jobs directly on the host or in containers. Container jobs aren't available on macOS.

For a container job, the agent first fetches and starts the container. Then each step of the job runs inside the container.

::: moniker range="> azure-devops-2019"
If you need fine-grained control at the individual build step level, [step targets](tasks.md#step-target) let you choose a container or host for each step.
::: moniker-end

## Prerequisites

- Use a YAML pipeline. Classic pipelines do not support container jobs. 
- Use a hosted Windows or Ubuntu agent. Only `windows-*` and `ubuntu-*` agents support running containers. The `macos-*` agents don't support running containers.
- Your agent is set up for container jobs.  
    - Windows and Linux agents must have Docker installed, and need permission to access the Docker daemon. 
    - Containers aren't supported when the agent is already running inside a container. You can't have nested containers.

### Additional container requirements

### [Linux](#tab/linux)

Linux-based containers have the following requirements. For workarounds, see [Nonglibc-based containers](#nonglibc-based-containers).

- Bash installed
- GNU C Library (glibc)-based
- No `ENTRYPOINT`
- Provide `USER` with access to `groupadd` and other privileged commands without using `sudo`
- Can run Node.js, which the agent provides
  > [!NOTE]
  > Node.js must be pre-installed for Linux containers on Windows hosts.

Some stripped-down containers available on Docker Hub, especially containers based on Alpine Linux, don't satisfy these requirements. Containers with an `ENTRYPOINT` might not work because Azure Pipelines `docker create` and `docker exec` expect that the container is always up and running.

### [Windows](#tab/windows)

[Windows containers](/virtualization/windowscontainers/about/) must meet the following requirements:

- Windows Server version 1803 or higher
- Matching host and container kernel versions
- Can run Node.js
  > [!NOTE]
  > A base Windows Nano Server container doesn't have the required dependencies to run Node.js.

---

## Single job examples

The following examples define a Windows or Linux container for a single job.

### [Linux](#tab/linux)

The following simple example defines a Linux container:

```yaml
pool:
  vmImage: 'ubuntu-latest'

container: ubuntu:18.04

steps:
- script: printenv
```

The preceding example tells the system to fetch the `ubuntu` image tagged `18.04` from [Docker Hub](https://hub.docker.com) and then start the container. The `printenv` command runs inside the `ubuntu:18.04` container.

### [Windows](#tab/windows)

The following example defines a Windows container:

```yaml
pool:
  vmImage: 'windows-2019'

container: mcr.microsoft.com/windows/servercore:ltsc2019

steps:
- script: set
```

For Windows, the kernel version of the host and container must match. Since the preceding example uses a Windows 2019 host image, it uses the `2019` tag for the container.

---

## Multiple jobs

You can use containers to run the same step in multiple jobs. The following example runs the same step in multiple versions of Ubuntu Linux. You don't have to mention the `jobs` keyword because only a single job is defined.

```yaml
pool:
  vmImage: 'ubuntu-latest'

strategy:
  matrix:
    ubuntu16:
      containerImage: ubuntu:16.04
    ubuntu18:
      containerImage: ubuntu:18.04
    ubuntu20:
      containerImage: ubuntu:20.04

container: $[ variables['containerImage'] ]

steps:
- script: printenv
```

### Multiple jobs with agent pools on a single agent host

A container job uses the underlying host agent's Docker configuration file for image registry authorization. This file signs out at the end of the Docker registry container initialization. Registry image pulls for subsequent container jobs might be denied for `unauthorized authentication` because another job running in parallel already signed out the Docker configuration file.

The solution is to set a Docker environment variable `DOCKER_CONFIG` that's specific to each agent pool running on the hosted agent. Export the `DOCKER_CONFIG` in each agent pool's *runsvc.sh* script as follows:

```bash
export DOCKER_CONFIG=./.docker
```

<a name="options"></a>
## Startup options

You can specify `options` to control container startup, as in the following example:

```yaml
container:
  image: ubuntu:18.04
  options: --hostname container-test --ip 192.168.0.1

steps:
- script: echo hello
```

Running `docker create --help` gives you the list of options that you can pass to Docker invocation. Not all of these options are guaranteed to work with Azure DevOps. Check first to see if you can use a `container` property to accomplish the same goal.

For more information, see the [docker create](https://docs.docker.com/engine/reference/commandline/create) command reference and the [resources.containers.container definition](/azure/devops/pipelines/yaml-schema/resources-containers-container) in the Azure DevOps YAML schema reference.

## Reusable container definition

The following example defines the containers in the `resources` section, and then references them by their assigned aliases. The `jobs` keyword is explicitly listed for clarity.

```yaml
resources:
  containers:
  - container: u16
    image: ubuntu:16.04

  - container: u18
    image: ubuntu:18.04

  - container: u20
    image: ubuntu:20.04

jobs:
- job: RunInContainer
  pool:
    vmImage: 'ubuntu-latest'

  strategy:
    matrix:
      ubuntu16:
        containerResource: u16
      ubuntu18:
        containerResource: u18
      ubuntu20:
        containerResource: u20

  container: $[ variables['containerResource'] ]

  steps:
  - script: printenv
```

## Service endpoints

You can host containers on other registries than public Docker Hub. To host an image on [Azure Container Registry](/azure/container-registry/) or another private container registry, including a private Docker Hub registry, add a [service connection](../library/service-endpoints.md) to access the registry. Then you can reference the endpoint in the container definition.

Private Docker Hub connection:

```yaml
container:
  image: registry:ubuntu1804
  endpoint: private_dockerhub_connection
```

Azure Container Registry connection:

```yaml
container:
  image: myprivate.azurecr.io/windowsservercore:1803
  endpoint: my_acr_connection
```

>[!NOTE]
>Azure Pipelines can't set up a service connection for Amazon Elastic Container Registry (ECR), because Amazon ECR requires other client tools to convert AWS credentials into something Docker can use to authenticate.

## Nonglibc-based containers

The Azure Pipelines agent supplies a copy of Node.js, which is required to run tasks and scripts. To find out the version of Node.js for a hosted agent, see [Microsoft-hosted agents](../agents/hosted.md#software).

The version of Node.js compiles against the C runtime used in the hosted cloud, typically glibc. Some Linux variants use other C runtimes. For instance, Alpine Linux uses musl.

If you want to use a nonglibc-based container, you need to:

- Supply your own copy of Node.js.
- Add a label to your image telling the agent where to find the Node.js binary.
- Provide other dependencies that Azure Pipelines depends on: `bash`, `sudo`, `which`, and `groupadd`.

### Supply your own Node.js

If you use a nonglibc-based container, you're responsible for adding a Node binary to your container. Node.js 18 is a safe choice. Start from the `node:18-alpine` image.

### Tell the agent about Node.js

The agent reads the container label `"com.azure.dev.pipelines.handler.node.path"`. If this label exists, it must be the path to the Node.js binary.

For example, in an image based on `node:18-alpine`, add the following line to your Dockerfile:

```dockerfile
LABEL "com.azure.dev.pipelines.agent.handler.node.path"="/usr/local/bin/node"
```

### Add required packages

Azure Pipelines assumes a Bash-based system with common administrative packages installed. Alpine Linux in particular doesn't come with several of the packages needed. Install `bash`, `sudo`, and `shadow` to cover the basic needs.

```dockerfile
RUN apk add bash sudo shadow
```

If you depend on any in-box or Marketplace tasks, also supply the binaries they require.

### Full Dockerfile example

```dockerfile
FROM node:18-alpine

RUN apk add --no-cache --virtual .pipeline-deps readline linux-pam \
  && apk add bash sudo shadow \
  && apk del .pipeline-deps

LABEL "com.azure.dev.pipelines.agent.handler.node.path"="/usr/local/bin/node"

CMD [ "node" ]
```

## Related content

- [Azure Pipelines jobs](phases.md)
- [Azure Pipelines agents](../agents/agents.md)
- [YAML schema resources.containers.container definition](/azure/devops/pipelines/yaml-schema/resources-containers-container)
