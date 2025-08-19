---
title: YAML pipeline container jobs
description: Learn about configuring and running Azure Pipelines YAML pipeline jobs inside containers.
ms.assetid: 8d35f78a-f386-4699-9280-7bd933de9e7b
ms.topic: conceptual
ms.date: 08/18/2025
monikerRange: "<=azure-devops"
#customer intent: As an Azure Pipelines builder and tester, I want to learn about running pipeline jobs in containers so I can build and test pipelines in various agent configurations.
---

# Container jobs in YAML pipelines

[!INCLUDE [version-gt-eq-2019](../../includes/version-gt-eq-2019.md)]

This article explains container jobs in Azure Pipelines. By default, Azure Pipelines [jobs](phases.md) run directly on host machines with [agents](../agents/agents.md) installed. Hosted agent jobs are convenient, require little initial setup or infrastructure maintenance, and are well-suited for basic projects.

Containers are lightweight abstractions that provide isolation from host operating systems. If you want more control over task context, you can define and run pipeline jobs in containers that have the exact versions of operating systems, tools, and dependencies you want.

For a container job, the agent first fetches and starts the container. Then each step of the job runs inside the container. If you need fine-grained control of individual build steps, [step targets](tasks.md#step-target) let you choose a container or host for each step.

## Requirements for container jobs

- A YAML pipeline. Classic pipelines don't support container jobs.
- A Windows or Ubuntu hosted agent. MacOS agents don't support running containers.
- Docker installed on the agent, with permission to access the Docker daemon.

>[!NOTE]
>Containers aren't supported when the agent is already running inside a container. You can't have nested containers.

### [Linux](#tab/linux)

Linux-based containers also have the following requirements:

- Bash installed.
- GNU C Library (glibc)-based. For alternatives, see [Nonglibc-based containers](#nonglibc-based-containers).
- No `ENTRYPOINT`. Containers with an `ENTRYPOINT` might not work because `docker create` and `docker exec` expect the container to always be running.
- `USER` provided with access to `groupadd` and other privileged commands without using `sudo`
- Ability to run Node.js, which the agent provides.
  >[!NOTE]
  >Node.js must be preinstalled for Linux containers on Windows hosts.

  >[!NOTE]
  >Some stripped-down containers available on Docker Hub, especially containers based on Alpine Linux, don't satisfy these requirements.

### [Windows](#tab/windows)

[Windows containers](/virtualization/windowscontainers/about/) also have the following requirements:

- Windows Server version 1803 or higher.
- Matching host and container kernel versions.
- Ability to run Node.js, which the agent provides.
  >[!NOTE]
  >A base Windows Nano Server container doesn't have the required dependencies to run Node.js.

---

## Single job

The following example defines a Windows or Linux single-job container.

### [Linux](#tab/linux)

This example tells the system to fetch the `ubuntu` image tagged `18.04` from [Docker Hub](https://hub.docker.com) and then start the container. The `printenv` command runs inside the `ubuntu:18.04` container.

```yaml
pool:
  vmImage: 'ubuntu-latest'

container: ubuntu:18.04

steps:
- script: printenv
```

### [Windows](#tab/windows)

For Windows, the kernel version of the host and container must match. Since the following example uses a Windows 2019 host image, it uses the `2019` tag for the container.

```yaml
pool:
  vmImage: 'windows-2019'

container: mcr.microsoft.com/windows/servercore:ltsc2019

steps:
- script: set
```

---

## Multiple jobs

You can use containers to run the same step in multiple jobs. The following example runs the same step in multiple versions of Ubuntu Linux. You don't have to use the `jobs` keyword because only a single job is defined.

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

A container job uses the underlying host agent's Docker configuration file for image registry authorization. This file signs out at the end of the Docker registry container initialization.

Registry image pulls for other container jobs in the pipeline might be denied for `unauthorized authentication`, because another job running in parallel already signed out the Docker configuration file. The solution is to set a Docker environment variable called `DOCKER_CONFIG` that's specific to each agent pool running on the hosted agent.

Export the `DOCKER_CONFIG` in each agent pool's *runsvc.sh* script as follows:

```bash
export DOCKER_CONFIG=./.docker
```

<a name="options"></a>
## Startup options

You can use the `options` property to specify options for container startup.

```yaml
container:
  image: ubuntu:18.04
  options: --hostname container-test --ip 192.168.0.1

steps:
- script: echo hello
```

Run `docker create --help` to get the list of options you can pass to Docker invocation. Not all these options are guaranteed to work with Azure Pipelines. Check first to see if you can use a `container` property for the same purpose.

For more information, see the [docker create](https://docs.docker.com/engine/reference/commandline/create) command reference and the [resources.containers.container](/azure/devops/pipelines/yaml-schema/resources-containers-container) definition in the [YAML schema reference for Azure Pipelines](https://github.com/MicrosoftDocs/azure-devops-yaml-schema-pr/blob/live/content/index.md).

## Reusable container definition

The following example defines the containers in the `resources` section, and then references them by their assigned aliases. The `jobs` keyword is used for clarity.

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

You can host containers on registries other than public Docker Hub. To host an image on [Azure Container Registry](/azure/container-registry/) or another private container registry, including a private Docker Hub registry, add a [service connection](../library/service-endpoints.md) to access the registry. Then you can reference the endpoint in the container definition.

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
>Azure Pipelines can't set up a service connection for Amazon Elastic Container Registry (ECR), because Amazon ECR requires other client tools to convert Amazon Web Services (AWS) credentials into something Docker can use to authenticate.

## Nonglibc-based containers

The Azure Pipelines agent supplies Node.js, which is required to run tasks and scripts. The Node.js version compiles against the C runtime used in the hosted cloud, typically glibc. Some Linux variants use other C runtimes. For instance, Alpine Linux uses musl. For more information, see [Microsoft-hosted agents](../agents/hosted.md#software).

If you want to use a nonglibc-based container in a pipeline, you must:

- Supply your own copy of Node.js.
- Add a label to your image pointing to the location of the Node.js binary.
- Provide the `bash`, `sudo`, `which`, and `groupadd` Azure Pipelines dependencies.

### Supply your own Node.js

If you use a nonglibc-based container, you must add a Node binary to your container. Node.js 18 is a safe choice. Start from the `node:18-alpine` image.

### Tell the agent about Node.js

The agent reads the container label `"com.azure.dev.pipelines.handler.node.path"`. If this label exists, it must be the path to the Node.js binary.

For example, in an image based on `node:18-alpine`, add the following line to your Dockerfile:

```dockerfile
LABEL "com.azure.dev.pipelines.agent.handler.node.path"="/usr/local/bin/node"
```

### Add required packages

Azure Pipelines requires a Bash-based system to have common administrative packages installed. Alpine Linux doesn't have several of the needed packages. Install `bash`, `sudo`, and `shadow` to cover basic needs.

```dockerfile
RUN apk add bash sudo shadow
```

If you depend on any built-in or Marketplace tasks, also supply the binaries they require.

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
