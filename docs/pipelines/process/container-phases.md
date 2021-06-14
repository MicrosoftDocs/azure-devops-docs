---
title: Container Jobs in Azure Pipelines and TFS
ms.custom: seodec18
description: Run pipeline jobs inside of a container
ms.assetid: 8d35f78a-f386-4699-9280-7bd933de9e7b
ms.topic: conceptual
ms.date: 06/02/2021
monikerRange: '>= azure-devops-2019'
---

# Define container jobs (YAML)

[!INCLUDE [version-server-2019-rtm](../includes/version-server-2019-rtm.md)]

By default, [jobs](phases.md) run on the host machine where the [agent](../agents/agents.md)
is installed.
This is convenient and typically well-suited for projects that are just beginning to adopt Azure Pipelines.
Over time, you may find that you want more control over the context where your tasks run.
YAML pipelines offer container jobs for this level of control.

[!INCLUDE [container-vs-host](./includes/container-vs-host.md)]

Containers offer a lightweight abstraction over the host operating system.
You can select the exact versions of operating systems, tools, and dependencies that your build requires.
When you specify a container in your pipeline, the agent will first
fetch and start the container.
Then, each step of the job will run inside the container.
You cannot have nested containers. Containers are not supported when an agent is already running inside a container. 

::: moniker range="> azure-devops-2019"
If you need fine-grained control at the individual step level, [step targets](tasks.md#step-target) allow you to choose container or host for each step.
::: moniker-end

## Requirements

### Linux-based containers

The Azure Pipelines system requires a few things in Linux-based containers:
- Bash
- glibc-based
- Can run Node.js (which the agent provides)
- Does not define an `ENTRYPOINT`
- `USER` has access to `groupadd` and other privileges commands without `sudo`

And on your agent host:
- Ensure Docker is installed
- The agent must have permission to access the Docker daemon

Be sure your container has each of these tools available. Some of the extremely stripped-down
containers available on Docker Hub, especially those based on Alpine Linux, don't satisfy these
minimum requirements. Containers with a `ENTRYPOINT` might not work, since Azure Pipelines
will `docker create` an awaiting container and `docker exec` a series of commands which expect
the container is always up and running.


> [!NOTE]
> For Windows-based Linux containers, Node.js must be pre-installed.

### Windows Containers

Azure Pipelines can also run [Windows Containers](/virtualization/windowscontainers/about/).
[Windows Server version 1803](/windows-server/get-started/get-started-with-1803) or higher is required.
Docker must be installed. Be sure your pipelines agent has permission to access the Docker daemon.

The Windows container must support running Node.js.
A base Windows Nano Server container is missing dependencies required to run Node.


### Hosted agents

Only `windows-2019` and `ubuntu-*` images support running containers.
The macOS image does not support running containers.

## Single job

A simple example:

```yaml
pool:
  vmImage: 'ubuntu-18.04'

container: ubuntu:18.04

steps:
- script: printenv
```

This tells the system to fetch the `ubuntu` image tagged `18.04` from
[Docker Hub](https://hub.docker.com) and then start the container. When the
`printenv` command runs, it will happen inside the `ubuntu:18.04` container.

A Windows example:

```yaml
pool:
  vmImage: 'windows-2019'

container: mcr.microsoft.com/windows/servercore:ltsc2019

steps:
- script: set
```

> [!Note]
> Windows requires that the kernel version of the host and container match.
> Since this example uses the Windows 2019 image, we will use the `2019` tag for the container.

## Multiple jobs

Containers are also useful for running the same steps in multiple [jobs](phases.md).
In the following example, the same steps run in multiple versions of Ubuntu Linux.
(And we don't have to mention the `jobs` keyword, since there's only a single job defined.)

```yaml
pool:
  vmImage: 'ubuntu-18.04'

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

## Endpoints

Containers can be hosted on registries other than Docker Hub. To host
an image on [Azure Container Registry](/azure/container-registry/) or
another private container registry,
add a [service connection](../library/service-endpoints.md) to the
private registry. Then you can reference it in a container spec:

```yaml
container:
  image: registry:ubuntu1604
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

Other container registries may also work.
Amazon ECR doesn't currently work, as there are additional client tools required to convert AWS credentials into something Docker can use to authenticate.


> [!NOTE]
> The Red Hat Enterprise Linux 6 build of the agent won't run container job. Choose another Linux flavor, such as Red Hat Enterprise Linux 7 or above.

## Options

If you need to control container startup, you can specify `options`.

```yaml
container:
  image: ubuntu:18.04
  options: --hostname container-test --ip 192.168.0.1

steps:
- script: echo hello
```

Running `docker create --help` will give you the list of supported options. You can use any option available with the [`docker create` command](https://docs.docker.com/engine/reference/commandline/create/).

## Reusable container definition

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
    vmImage: 'ubuntu-18.04'

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

## Non glibc-based containers

The Azure Pipelines agent supplies a copy of Node.js, which is required to run tasks and scripts.
The version of Node.js is compiled against the C runtime we use in our hosted cloud, typically glibc.
Some variants of Linux use other C runtimes.
For instance, Alpine Linux uses musl.

If you want to use a non-glibc-based container as a job container, you will need to arrange a few things on your own.
First, you must supply your own copy of Node.js.
Second, you must add a label to your image telling the agent where to find the Node.js binary.
Finally, stock Alpine doesn't come with other dependencies that Azure Pipelines depends on:
bash, sudo, which, and groupadd.

### Bring your own Node.js
You are responsible for adding a Node binary to your container.
Node 14 is a safe choice.
You can start from the `node:14-alpine` image.

### Tell the agent about Node.js
The agent will read a container label "com.azure.dev.pipelines.handler.node.path".
If this label exists, it must be the path to the Node.js binary.
For example, in an image based on `node:10-alpine`, add this line to your Dockerfile:
```
LABEL "com.azure.dev.pipelines.agent.handler.node.path"="/usr/local/bin/node"
```

### Add requirements
Azure Pipelines assumes a Bash-based system with common administration packages installed.
Alpine Linux in particular doesn't come with several of the packages needed.
Installing `bash`, `sudo`, and `shadow` will cover the basic needs.
```
RUN apk add bash sudo shadow
```

If you depend on any in-box or Marketplace tasks, you'll also need to supply the binaries they require.

### Full example of a Dockerfile

```
FROM node:10-alpine

RUN apk add --no-cache --virtual .pipeline-deps readline linux-pam \
  && apk add bash sudo shadow \
  && apk del .pipeline-deps

LABEL "com.azure.dev.pipelines.agent.handler.node.path"="/usr/local/bin/node"

CMD [ "node" ]
```

### Multiple jobs with agent pools on a single hosted agent

The container job uses the underlying host agent Docker config.json for image registry authorization, which logs out at the end of the Docker registry container initialization. Subsequent registry image pulls authorization might be denied for “unauthorized authentication” because the Docker config.json file registered in the system for authentication has already been logged out by one of the other container jobs that are running in parallel. 

The solution is to set the Docker environment variable `DOCKER_CONFIG` that is specific to each agent pool service running on the hosted agent. Export the `DOCKER_CONFIG` in each agent pool’s runsvc.sh script:

```
#insert anything to set up env when running as a service
export DOCKER_CONFIG=./.docker
```
