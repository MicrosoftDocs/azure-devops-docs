---
author: gloridelmorales
ms.author: glmorale
ms.date: 9/4/2026
ms.topic: include
---

### Docker socket no longer mapped by default for Linux container jobs

To improve security by following the principle of least privilege, starting with [Azure Pipelines agent version 5.279.0](https://github.com/microsoft/azure-pipelines-agent/releases#release-v5.279.0), the default value of `mapDockerSocket` is `false` for [container jobs](/azure/devops/pipelines/process/container-phases) running on Linux agents. After this change, the host Docker socket (`/var/run/docker.sock`) isn't mounted into the job container by default on Linux agents.

> [!NOTE]
> If your container job runs Docker commands against the host daemon (Docker-in-container), explicitly opt in by setting `mapDockerSocket` to `true` on the container resource, or your pipeline fails.

To use the host Docker socket, explicitly opt in by setting `mapDockerSocket: true` on the container resource.

```yaml
resources:
	containers:
	- container: my_container
		image: ubuntu:22.04
		mapDockerSocket: true
```

Container jobs that don't use Docker-in-container behavior require no action. For more information, see [Docker socket mapping](/azure/devops/pipelines/process/container-phases#docker-socket-mapping).
