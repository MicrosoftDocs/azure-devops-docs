---
author: gloridelmorales
ms.author: glmorale
ms.date: 9/10/2026
ms.topic: include
---

### Test pipeline tasks without unsupported Node.js runners

Node.js 6, 10, and 16 reached end of support and are scheduled for removal from the Azure Pipelines agent on November 24, 2026. You can now identify pipelines that depend on these runners before they're removed.

In **Organization settings** > **Pipelines** > **Settings**, under **Task restrictions**, enable **Restrict out of support Node.js versions in pipeline tasks**. When enabled, tasks that target Node.js 6, 10, or 16 run on a newer available Node.js runner. The pipeline log warns you about affected tasks so you can test and update them.

> [!IMPORTANT]
> A task written for an unsupported Node.js runner might fail or behave unexpectedly on a newer runner. Update custom tasks to use a supported Node.js version before the unsupported runners are removed.

For more information, see [Restrict out of support Node.js versions in pipeline tasks](/azure/devops/pipelines/agents/nodejs-runners#test-tasks-before-end-of-life-nodejs-runners-are-removed).

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
