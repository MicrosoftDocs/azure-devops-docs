---
author: gloridelmorales
ms.author: glmorale
ms.date: 9/10/2026
ms.topic: include
---

### Upcoming breaking change: Docker socket no longer mapped by default for Linux container jobs

To improve security by following the principle of least privilege, the pipeline agent will change the default value of `mapDockerSocket` to `false` for [container jobs](/azure/devops/pipelines/process/container-phases) running on Linux agents. After this change, the host Docker socket (`/var/run/docker.sock`) is no longer mounted into the job container by default.

This is a breaking change for container jobs that rely on Docker-in-container behavior (running Docker commands against the host daemon). To continue using the host Docker socket, explicitly opt in by setting `mapDockerSocket: true` on the container resource.

```yaml
resources:
  containers:
  - container: my_container
    image: ubuntu:22.04
    mapDockerSocket: true
```

Container jobs that don't use Docker-in-container behavior require no action. For more information, see [Docker socket mapping](/azure/devops/pipelines/process/container-phases#docker-socket-mapping).
