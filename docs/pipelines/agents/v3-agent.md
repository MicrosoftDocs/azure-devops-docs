---
title: Agent software version 3
description: Learn how to run pipelines using the version 3 agent software.
monikerRange: '>= azure-devops-2022'
ms.topic: conceptual
ms.date: 06/30/2025
---

# Agent software version 3

> [!IMPORTANT]
> Agent software version 3 (using .NET 6) is unsupported for Azure DevOps Services, and the Azure Pipelines team recommends you upgrade to [Agent software version 4](./v4-agent.md) (using .NET 8). If you're running your self-hosted agents on an operating system that isn't supported by .NET 8, you must update your machines to use a newer supported operating system [supported by .NET 8](https://github.com/dotnet/core/blob/main/release-notes/8.0/supported-os.md#net-8---supported-os-versions).
>
> To update your self-hosted agents to version 4, see [Upgrade to agent software version 4](./v4-agent.md#upgrade-to-4x-agent-on-supported-operating-systems).

The pipelines team is upgrading the agent software from version 2.x (using .NET Core 3.1) to version 3.x (using .NET 6). The new agent version supports new Apple silicon hardware and newer operating systems like Ubuntu 22.04, or Windows on ARM64.

:::moniker range="=azure-devops-2022"

[!INCLUDE [feature-added-2022-1](../../includes/feature-added-2022-1.md)]

:::moniker-end

## Upgrade to 3.x agent on supported operating systems

If you're running your self-hosted agents on newer operating systems [supported by .NET 6](https://github.com/dotnet/core/blob/main/release-notes/6.0/supported-os.md), the upgrade to the new agent version is automatic.

The following operating systems are supported by the 3.x agent.

* **Linux**
  * x64
    * Debian 10+
    * Fedora 36+
    * openSUSE 15+
    * Red Hat Enterprise Linux 7+
      * No longer requires separate package
    * SUSE Enterprise Linux 12 SP2 or later
    * Ubuntu 22.04, 20.04, 18.04, 16.04
    * Azure Linux 2.0
    * Oracle Linux 7 and higher
  * ARM64
    * Debian 10+
    * Ubuntu 22.04, 20.04, 18.04
  * Alpine x64
    * [Alpine Linux](https://alpinelinux.org/) 3.13 and higher ([requires agent 3.227 or higher](/azure/devops/release-notes/2023/sprint-228-update#azure-pipelines-agent-now-supports-alpine-linux))
* **macOS**
  * x64
    * macOS 10.15 "Catalina"
    * macOS 11.0 "Big Sur"
    * macOS 12.0 "Monterey"
    * macOS 13.0 "Ventura"
    * macOS 14.0 "Sonoma"
  * ARM64
    * macOS 11.0 "Big Sur"
    * macOS 12.0 "Monterey"
    * macOS 13.0 "Ventura"
    * macOS 14.0 "Sonoma"
* **Windows**
  * Client OS
    * Windows 7 SP1 [ESU](/troubleshoot/windows-client/windows-7-eos-faq/windows-7-extended-security-updates-faq)
    * Windows 8.1
    * Windows 10
    * Windows 11
  * Server OS
    * Windows Server 2012 or higher

## Upgrade to 3.x agent on unsupported operating systems

If you're running your self-hosted agents on an operating system that isn't supported by .NET 6, you must update your machines to use a newer supported operating system [supported by .NET 6](https://github.com/dotnet/core/blob/main/release-notes/6.0/supported-os.md).

The following list of operating systems are commonly used for self-hosted 2.x agents. These operating systems aren't supported by .NET 6 and can't be used to run the new .NET 6 based version 3.x agent.

| System/Distribution | Version not supported by .NET 6 |
|---------------------|---------------------------------|
| Debian | <= 4.9 |
| Fedora | <= 32 |
| RedHat Enterprise Linux | <= 6 |
| Ubuntu | < 18.04 LTS |
| macOS | < 10.15 |

You can use a [script](https://github.com/microsoft/azure-pipelines-agent/tree/master/tools/FindAgentsNotCompatibleWithAgent) to predict whether the agents in your self-hosted pools are able to upgrade from 2.x to 3.x.

When attempting to run pipelines on agent version 2.218 (or [2.214 on RHEL 6](https://aka.ms/azdo-pipeline-agent-rhel6)), pipelines running on one of the unsupported operating systems listed here will fail with following error message: `This operating system will stop receiving updates of the Pipelines Agent in the future. To be able to continue to run pipelines please upgrade the operating system or set an environment variable or agent knob "AGENT_ACKNOWLEDGE_NO_UPDATES" to "true". See https://aka.ms/azdo-pipeline-agent-v2-eos for more information.`

To resolve this error you can:

1. Upgrade or move your agent machines to one of the supported operating systems listed previously in this article. This is the preferred solution and allows you to get future agent updates,
1. Set an `AGENT_ACKNOWLEDGE_NO_UPDATES` variable on the agent, either by setting an environment variable or a pipeline variable.
  * You can set `AGENT_ACKNOWLEDGE_NO_UPDATES` by configuring an environment variable on the agent, for example in **/etc/environment** or **etc/profile.d**: `AGENT_ACKNOWLEDGE_NO_UPDATES=true`.
  * You can set a pipeline variable.

    ```yml
    jobs:
    - job: 'agentWithVariables'
      displayName: 'Agent with variables'
    
      variables:
        AGENT_ACKNOWLEDGE_NO_UPDATES: 'true' # Required to not fail job on operating system that is not supported by .NET 6
    ```

## FAQ

### What is the difference between the 2.x and 3.x agents?

The 2.x agents (for example 2.212) are .NET Core 3.1 and the 3.x agents (for example 3.212) are .NET 6. During Phase I and II, both versions are available, with the 3.x versions being in prerelease.

### How can I check my agents to see if they can upgrade to 3.x?

You can use a [script](https://github.com/microsoft/azure-pipelines-agent/tree/master/tools/FindAgentsNotCompatibleWithAgent) to predict whether the agents in your self-hosted pools will be able to upgrade from 2.x to 3.x.

### How will security issues in the agent be patched going forward?

When the .NET 6 agent becomes generally available for self-hosted pools in Q1 2023, there will be no patches done, in general, for the 2.x agents. The patches will be done only for the 3.x agents. However, we also have Azure DevOps Server customers that will still be relying on 2.x agents. So, we'll review the security issues on a case by case basis to decide.

### What do I need to do when I’m on an unsupported OS?

You should migrate to a newer operating system that is supported by .NET 6 now. Otherwise, your agent may attempt to upgrade, and it will fail as .NET 6 can't be installed on your OS. We'll publish some guidance in a follow-up blog post that will prevent auto-upgrades of the agent. However, that is only meant to be a temporary solution to give you some more time to upgrade your agent machines.

### Can I stay on 2.x agents if I'm not working on any changes in my project anymore?

No. The pipelines team is regularly adding new features to Azure Pipelines and some of them may require an update to the agent even though your pipeline doesn't explicitly depend on that feature. When you prevent auto-upgrades of the agent using the guidance in a follow-up blog, that agent can't be used to schedule the pipeline. If no agent with the required capabilities can be found, the pipeline execution will fail.

### Do I have to install .NET 6 before installing the 3.x agent software?

You don't have to install .NET 6 on your agent machine before installing and configuring the 3.x agent software. All .NET dependencies the 3.x agent requires are part of the agent itself.

### Do I have to build my code using .NET 6 if I'm using the 3.x agent?

The version of .NET used to run the 3.x agent is self-contained in the agent installation, and isn't used to build your code. The version of .NET that is used to build your code depends on the pipeline and the version or versions of .NET you have installed onto your agent machine. 

### I use Azure DevOps Server and not Azure DevOps Services. Does this change impact me?

Yes, if you are using any of the versions of Azure DevOps Server listed in the following section.

The pipelines team recommends that you update your agent machines to newer operating systems that are supported by .NET 6 starting now, if you plan to keep up with the Azure DevOps Server releases in the future.

### Does Azure DevOps Server support the 3.x agent

Azure DevOps Server versions support the version of the agent that is deployed with that version. The following table lists each [supported Azure DevOps Server version](/azure/devops/server/install/servicing#supported-versions) and its supported agent version.

| Azure DevOps Server version | Agent version |
|-----------------------------|---------------|
| [Azure DevOps Server 2022.2](/azure/devops/server/release-notes/azuredevops2022u2) | 3.238.0 |
| [Azure DevOps Server 2020.1.2](/azure/devops/server/release-notes/azuredevops2020u1) | 3.225.0 |
| [Azure DevOps Server 2019.1.2](/azure/devops/server/release-notes/azuredevops2019u1) | 3.225.0 |

Azure DevOps Server is serviced through security or servicing patches that provide targeted cumulative bug fixes for existing features in the product. For the best and most secure product experience, we strongly encourage and recommend that all customers use the latest, most secure release of Azure DevOps Server. You can download the latest version of the product, from the [Azure DevOps Server download page](/azure/devops/server/download/azuredevopsserver).

After installing an Azure DevOps Server update or new version, [update your agents](/azure/devops/pipelines/agents/agents#to-update-self-hosted-agents).

The following table lists the versions of Azure DevOps Server that first included a version of the 3.x agent.

* [Azure DevOps Server 2022 Update 2](/azure/devops/server/release-notes/azuredevops2022u2)
* [Azure DevOps Server 2022 Update 1](/azure/devops/server/release-notes/azuredevops2022u1)
* [Azure DevOps Server 2022 Update 0.1 Patch 4 and later](/azure/devops/server/release-notes/azuredevops2022#azure-devops-server-2022-update-01-patch-4-release-date-october-10-2023)
* [Azure DevOps Server 2020 Update 1.2 Patch 9 and later](/azure/devops/server/release-notes/azuredevops2020u1#azure-devops-server-2020-update-12-patch-9-release-date-october-10-2023)
* [Azure DevOps Server 2020 Update 0.2 Patch 4 and later](/azure/devops/server/release-notes/azuredevops2020#azure-devops-server-2020-update-02-patch-4-release-date-september-12-2023)
* [Azure DevOps Server 2019 Update 1.2 Patch 5 and later](/azure/devops/server/release-notes/azuredevops2019u1#azure-devops-server-2019-update-12-patch-5-release-date-september-12-2023)
* [Azure DevOps Server 2019 - patch 15 and later](/azure/devops/server/release-notes/azuredevops2019#azure-devops-server-201901-patch-15-release-date-september-12-2023)

### What is the timeline for agent version 3 deployment?

Agent version 3 was released March 2023.

### What will happen when a task requires an agent to be updated to agent version 3?

Normally, when a task requires a newer version of the agent, it will automatically update itself. For now, while agent version 2 continues to be updated, we have disabled auto update from agent version 2 to agent version 3. Once we enable it, for Operating Systems that aren't compatible with agent version 3, agent version 2.217 and newer won't attempt to update itself to the v3 agent. Instead, a warning will be shown informing users they need to upgrade the Operating System first: `The operating system the agent is running on is <OS>, which will not be supported by the .NET 6 based v3 agent. Please upgrade the operating system of this host to ensure compatibility with the v3 agent. See https://aka.ms/azdo-pipeline-agent-version`
