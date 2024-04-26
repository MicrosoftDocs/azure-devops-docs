---
author: ckanyika
ms.author: ckanyika
ms.date: 5/1/2024
ms.topic: include
---

### macOS-14 Sonoma is available in preview, macOS-11 will be retired June 2024

The `macOS-14` image is now available in preview for Azure Pipelines hosted agents. To use this image, update your YAML file to include `vmImage:'macos-14'`:  

```yaml
- job: macOS14
  pool:
    vmImage: 'macOS-14'
  steps:
  - bash: |
      echo Hello from macOS Sonoma Preview
      sw_vers
```

For macOS-14 installed software, see [image configuration](https://github.com/actions/runner-images/blob/main/images/macos/macos-14-Readme.md).

The `macOS-12` image will still be used when specifying `macOS-latest`. Once `macOS-14` is generally available, `macOS-latest` will migrate directly to `macOS-14`. The `macOS-latest` label will skip macOS-13.

The `macOS-11` image is deprecated and will be retired June 2024.


### Node 10 removed from pipelines-* Agent packages

Agent tasks can be implemented in PowerShell or Node. The agent ships with multiple versions of Node that tasks can target.

As new Node versions are released, [tasks](https://github.com/microsoft/azure-pipelines-tasks) are updated to use new Node versions. The runtimes are included with the agent.

As Node versions exit out of the upstream maintenance window, some Pipelines tasks still depend on it. Azure DevOps updates supported tasks to a supported Node version. Third party tasks may still need older Node versions to run.

To accommodate this, we have 2 flavors of packages:

| Packages             | Node versions | Description                |
|----------------------|---------------|----------------------------|
| `vsts-agent-*`       | 6, 10, 16, 20 | Includes all Node versions that can be used as task execution handler |
| `pipelines-agents-*` | 16, 20        | Includes only recent Node versions. The goal for these packages is to not include any end-of-life version of Node. |

If you want to run a task that requires the Node 10 execution handler on an agent that does not have Node 10 bundled, you can install the execution handler by inserting the [NodeTaskRunnerInstaller@0](https://learn.microsoft.com/azure/devops/pipelines/tasks/reference/node-task-runner-installer-v0?view=azure-pipelines) task in your pipeline:

```yaml
  steps:
  - task: NodeTaskRunnerInstaller@0
    inputs:
      runnerVersion: 10
```