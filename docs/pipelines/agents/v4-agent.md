---
title: Agent software version 4
description: Learn how to run pipelines using the version 4 agent software.
monikerRange: 'azure-devops'
ms.topic: conceptual
ms.date: 11/27/2024
---

# Agent software version 4


The pipelines team is upgrading the agent software from version 3.x to version 4.x (using .NET 8).

## Upgrade to 4.x agent on supported operating systems

If you're running your self-hosted agents on newer operating systems [supported by .NET 8](https://github.com/dotnet/core/blob/main/release-notes/8.0/supported-os.md#net-8---supported-os-versions), the upgrade to the new agent version is automatic.

The following operating systems are supported by the 4.x agent.

> [!NOTE]
> See [.NET 8 - Supported OS versions](https://github.com/dotnet/core/blob/main/release-notes/8.0/supported-os.md#net-8---supported-os-versions) for the full list of operating systems.

* **Linux**
  * x64
    * Debian 12
    * Fedora 39 & 40
    * openSUSE 15.5 & 15.6
    * Red Hat Enterprise Linux 8 & 9
    * SUSE Enterprise Linux 15.5
    * Ubuntu 24.04, 22.04, 20.04
    * Azure Linux 2.0
    * Oracle Linux 8 & 9
  * ARM64
    * Debian 11 & 12
    * Ubuntu 24.04, 22.04, 20.04
  * Alpine x64
    * [Alpine Linux](https://alpinelinux.org/) 3.17 to 3/20
* **macOS**
  * x64
    * macOS 12.0 "Monterey"
    * macOS 13.0 "Ventura"
    * macOS 14.0 "Sonoma"
    * macOS 15.0 "Sequoia"
  * ARM64
    * macOS 12.0 "Monterey"
    * macOS 13.0 "Ventura"
    * macOS 14.0 "Sonoma"
    * macOS 15.0 "Sequoia"
* **Windows**
    * Windows 10
      * 21H2, 1809, 1607
    * Windows 11
      * 23H2, 22H2, 21H2
  * Server OS
    * Windows Server 2012 or higher

## Upgrade to 4.x agent on unsupported operating systems

If you're running your self-hosted agents on an operating system that isn't supported by .NET 8, you must update your machines to use a newer supported operating system [supported by .NET 8](https://github.com/dotnet/core/blob/main/release-notes/8.0/supported-os.md#net-8---supported-os-versions).

The following list of operating systems were supported for self-hosted 3.x agents, but aren't supported by .NET 8 and can't be used to run version 4.x agents.

> [!NOTE]
> See [.NET 8 - Out of support OS versions](https://github.com/dotnet/core/blob/main/release-notes/8.0/supported-os.md#out-of-support-os-versions) for the full list of operating systems that are out of support for .NET 8.

* **Linux**
  * x64
    * Debian 10 & 11
    * Fedora 36
    * openSUSE 15
    * Red Hat Enterprise Linux 7
    * SUSE Enterprise Linux 12 SP2
    * Ubuntu 18.04, 16.04
    * Oracle Linux 7
  * ARM64
    * Debian 10 & 11
    * Ubuntu 18.04
  * Alpine x64
    * [Alpine Linux](https://alpinelinux.org/) 3.13
* **macOS**
  * x64
    * macOS 10.15 "Catalina"
    * macOS 11.0 "Big Sur"
  * ARM64
    * macOS 11.0 "Big Sur"
* **Windows**
  * Client OS
    * Windows 7 SP1 [ESU](/troubleshoot/windows-client/windows-7-eos-faq/windows-7-extended-security-updates-faq)
    * Windows 8.1
    * Windows 10
      * [21H2 (E)](/lifecycle/products/windows-10-enterprise-and-education)
    * Windows 11
      * [21H2 (E) & 22H2 (E)](/windows/release-health/windows11-release-information)

## FAQ

### What is the difference between the 3.x and 4.x agents?

The 3.x agents use .NET 6 and the 4.x agents use .NET 8.

### How can I check my agents to see if they can upgrade to 4.x?

Compare the operating system of your agent with the supported list from the previous [Upgrade to 4.x agent on supported operating systems](#upgrade-to-4x-agent-on-supported-operating-systems) section.

You can also use a [script](https://github.com/microsoft/azure-pipelines-agent/tree/master/tools/FindAgentsNotCompatibleWithAgent) to predict whether the agents in your self-hosted pools will be able to upgrade to 4.x.

### How will security issues in the agent be patched going forward?

There will be no patches done, in general, for the previous versions of the agent software. The patches will be done only for the 4.x agents. However, we also have Azure DevOps Server customers that will still be relying on 3.x agents. So, we'll review the security issues on a case by case basis to decide.

### What do I need to do when I’m on an unsupported OS?

You should migrate to a newer operating system that is supported by .NET 8 now. Otherwise, your agent may attempt to upgrade, and it will fail as .NET 8 can't be installed on your OS. We'll publish some guidance in a follow-up blog post that will prevent auto-upgrades of the agent. However, that is only meant to be a temporary solution to give you some more time to upgrade your agent machines.

### Can I stay on 2.x or 3.x agents if I'm not working on any changes in my project anymore?

No. The pipelines team is regularly adding new features to Azure Pipelines and some of them may require an update to the agent even though your pipeline doesn't explicitly depend on that feature. When you prevent auto-upgrades of the agent using the guidance in a follow-up blog, that agent can't be used to schedule the pipeline. If no agent with the required capabilities can be found, the pipeline execution will fail.

### Do I have to install .NET 8 before installing the 4.x agent software?

You don't have to install .NET 8 on your agent machine before installing and configuring the 4.x agent software. All .NET dependencies the 4.x agent requires are part of the agent itself.

### Do I have to build my code using .NET 8 if I'm using the 4.x agent?

The version of .NET used to run the 4.x agent is self-contained in the agent installation, and isn't used to build your code. The version of .NET that is used to build your code depends on the pipeline and the version or versions of .NET you have installed onto your agent machine. 

### I use Azure DevOps Server and not Azure DevOps Services. Does this change impact me?

At this time, the current versions of Azure DevOps Server still use the 3.x agent software, so there is no immediate impact.

The pipelines team recommends that you update your agent machines to newer operating systems that are supported by .NET 8 starting now, if you plan to keep up with the Azure DevOps Server releases in the future.

### Does Azure DevOps Server support the 4.x agent

Azure DevOps Server versions support the version of the agent that is deployed with that version. Currently, the latest Azure DevOps Server versions support the 3.x agent software versions. For more information, see [Does Azure DevOps Server support the 3.x agent](./v3-agent.md#does-azure-devops-server-support-the-3x-agent).

> [!NOTE]
> Azure DevOps Server 2020 and higher will support the 4.x agent software through updates. When those updates are released, this article will be updated with the corresponding agent version.

Azure DevOps Server is serviced through security or servicing patches that provide targeted cumulative bug fixes for existing features in the product. For the best and most secure product experience, we strongly encourage and recommend that all customers use the latest, most secure release of Azure DevOps Server. You can download the latest version of the product, from the [Azure DevOps Server download page](/azure/devops/server/download/azuredevopsserver).

After installing an Azure DevOps Server update or new version, [update your agents](/azure/devops/pipelines/agents/agents#to-update-self-hosted-agents).

### What is the timeline for agent version 4 deployment?

Agent version 4.x was released October 2024.

### What will happen when a task requires an agent to be updated to agent version 4?

Normally, when a task requires a newer version of the agent, it will automatically update itself. For now, while agent version 3 continues to be updated, we have disabled auto update from agent version 3 to agent version 4. Once we enable it, for Operating Systems that aren't compatible with agent version 4, agent version 3.248 and newer won't attempt to update itself to the v4 agent. Instead, a warning will be shown informing users they need to upgrade the Operating System first: `The operating system the agent is running on is <OS>, which will not be supported by the .NET 8 based v4 agent. Please upgrade the operating system of this host to ensure compatibility with the v4 agent. See https://aka.ms/azdo-pipeline-agent-version`
