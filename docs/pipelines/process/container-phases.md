---
title: Container Phases in Azure Pipelines and TFS
description: Run pipeline phases inside of a container
ms.assetid: 8d35f78a-f386-4699-9280-7bd933de9e7b
ms.prod: devops
ms.technology: devops-cicd
ms.topic: conceptual
ms.manager: douge
ms.author: macoope
ms.date: 08/02/2018
monikerRange: 'vsts'
---

# Container phases

> [!Note]
> Container phases are rolling out during the month of August 2018.
> They may not yet be available to your organization.

By default, phases run on the host machine where the [agent](../agents/agents.md)
is installed.
This is convenient and typically well-suited for projects that are just beginning to adopt continuous integration (CI).
Over time, you may find that you want more control over the environment where your tasks run.

Containers offer a lightweight abstraction over the host operating system.
You can select the exact versions of operating systems, tools, and dependencies that your build requires.
When you specify a container in your pipeline, the agent will first
fetch and start the container.
Then, each step of the phase will run inside the container.

# [YAML](#tab/yaml)

## Single phase

A simple example:

```yaml
resources:
  containers:
  - container: my_container
    image: ubuntu:16.04

queue:
  container: my_container
  name: 'Hosted Ubuntu 1604'
steps:
- script: printenv
```

This tells the system to fetch the `ubuntu` image tagged `16.04` from
[Docker Hub](https://hub.docker.com) and then start the container. When the
`printenv` command runs, it will happen inside the `ubuntu:16.04` container.

> [!Note]
> Due to a bug, you must currently specify "Hosted Ubuntu 1604" as the
> queue name in order to run containers. Other queues will not work.
> In late August, we expect to remove the need to specify a queue.

## Multiple phases

Containers are also useful for running the same steps in [multiple phases](multiple-phases.md).
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

queue:
  name: 'Hosted Ubuntu 1604'
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
an image on [Azure Container Registry](/services/container-registry/),
add a [service connection](../library/service-endpoints.md) to the
private registry. Then you can reference it in a container spec:

```yaml
resources:
  - container: my_private_container
    image: private:ubuntu14
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

### Local image

If you need to build the image locally rather than pulling a cached copy from
a registry, set this to `true`. It defaults to `false`.

```yaml
resources:
  - container: my_container
    image: ubuntu:16.04
    localImage: true
```

# [Designer](#tab/designer)

Container phases are not yet supported in the designer.

---
