---
author: ckanyika
ms.author: ckanyika
ms.date: 9/25/2024
ms.topic: include
---

### Ubuntu 24.04 on Azure Pipelines Hosted agents

The Ubuntu 24.04 image is now available for Azure Pipelines hosted agents. To use this image, update your YAML file to include `vmImage:'ubuntu-24.04'`:  

```yaml
- job: ubuntu2404
  pool:
    vmImage: 'ubuntu-24.04'
  steps:
  - bash: |
      echo Hello from Ubuntu 24.04 Preview
      lsb_release -d
```

Please note, the ubuntu-latest image label will continue to point to ubuntu-22.04 until later this year. See the [Ubuntu 24.04 image readme](https://github.com/actions/runner-images/blob/main/images/ubuntu/Ubuntu2404-Readme.md) for installed software.


### Pipeline Agent v4 runs on .NET 8

The Azure Pipelines agent v3 uses .NET 6 to run. As end-of-life of .NET 6 is approaching, we are upgrading the agent to use .NET 8. This change will roll out over the coming weeks.

Customers using self-hosted agents on an operating system that is no longer supported by .NET 8 will not be upgraded to the v4 agent. Instead, pipelines running on an operating system that does not support .NET 8 will emit warnings in pipeline logs. The [QueryAgentPoolsForCompatibleOS.ps1 script](https://github.com/microsoft/azure-pipelines-agent/tree/master/tools/FindAgentsNotCompatibleWithAgent) can be used to proactively find pipeline agents that are using an outdated operating system.

The following operating system versions will not be supported by the updated v4 agent:

- Alpine Linux 3.13 - 3.16
- Debian 10
- Fedora 36 - 38
- macOS 10 & 11
- openSUSE 15.0 - 15.4
- Oracle Linux 7
- Red Hat Enterprise Linux 7
- SUSE Enterprise Linux 12
- Ubuntu, 16.04, 18.04
- Windows 7, 8 & 10 up to 21H2

### Preview mode for shell tasks arguments validation

Shell tasks such as [Bash@3](https://learn.microsoft.com/azure/devops/pipelines/tasks/reference/bash-v3?view=azure-pipelines), [BatchScript@1](https://learn.microsoft.com/azure/devops/pipelines/tasks/reference/batch-script-v1?view=azure-pipelines), [CmdLine@2](https://learn.microsoft.com/azure/devops/pipelines/tasks/reference/cmd-line-v2?view=azure-pipelines) and [PowerShell@2](https://learn.microsoft.com/azure/devops/pipelines/tasks/reference/powershell-v2?view=azure-pipelines) can be protected from command injection by enabling [shell tasks arguments validation](https://learn.microsoft.com/azure/devops/pipelines/security/inputs?view=azure-devops#enable-shell-tasks-arguments-parameter-validation) in organization or project settings.

Enabling shell tasks arguments validation can break existing scripts as input is rejected by input validation. For example, some characters are considered a command separator and rejected when this setting is enabled.

To make this transition smoother, we’ve added a preview mode. With preview mode enabled, you’ll receive warnings in your pipeline and audit logs, giving you visibility into potential issues without interrupting your tasks or workflows.

Go to Organization Settings > Settings > Task restrictions or Project Settings > General to enable auditing:

> [!div class="mx-imgBorder"]
> ![Screenshot of general to enable auditing.](../../media/245-pipelines-01.png "Screenshot of general to enable auditing")

### Newly created Azure Service Connections create App registrations with new naming convention

Currently, a Service Connection is named `<azure devops org>-<azure devops project>-<azure subscription id>`. This makes it difficult to correlate App registrations to service connections apart that target the same Azure subscription. To make it easy to distinguish App registrations, the name of the app registration will include the name of the service connection: `<azure devops org>-<azure devops project>-<service connection name>`.