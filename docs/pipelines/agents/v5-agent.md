---
title: Agent software version 5
description: Learn how to run pipelines using the version 5 agent software.
monikerRange: 'azure-devops'
ms.topic: concept-article
ms.date: 06/02/2026
---

# Agent software version 5

The pipelines team is upgrading the agent software from version 4.x to version 5.x (using .NET 10). We highly recommend upgrading your agents to version 5.x.

> [!NOTE]
> The Windows ARM64 agent is now available in **public preview** for Windows 11. For more information, see the [supported operating systems](#upgrade-to-5x-agent-on-supported-operating-systems) section.

## Upgrade to 5.x agent on supported operating systems

If you're running self-hosted agents on newer operating systems [supported by .NET 10](https://github.com/dotnet/core/blob/main/release-notes/10.0/supported-os.md), the upgrade to the new agent version is automatic if any feature or tasks require a newer version of the agent software.

To manually initiate the update, see [Update self-hosted agents](./agents.md#to-update-self-hosted-agents).

The following operating systems are supported by the 5.x agent.

> [!NOTE]
> See [.NET 10 - Supported OS versions](https://github.com/dotnet/core/blob/main/release-notes/10.0/supported-os.md) for the full list of operating systems.

* **Linux**
  [!INCLUDE [v5-linux-os](./includes/v5-linux-os.md)] 
* **macOS**
  [!INCLUDE [v5-macos-os](./includes/v5-macos-os.md)]
* **Windows**
  [!INCLUDE [v5-windows-os](./includes/v5-windows-os.md)]

## Upgrade to 5.x agent on unsupported operating systems

If you're running your self-hosted agents on an operating system that doesn't support .NET 10, you must update your machines to use a newer supported operating system [supported by .NET 10](https://github.com/dotnet/core/blob/main/release-notes/10.0/supported-os.md). After updating, see [Update self-hosted agents](./agents.md#to-update-self-hosted-agents) for instructions on how to update your agents to the 5.x version.

The following operating systems support self-hosted 4.x agents, but aren't supported by .NET 10 and can't be used to run version 5.x agents.

* **Linux**
  * x64
    * Fedora 39 and 40
    * openSUSE 15.5 and 15.6
    * SUSE Enterprise Linux 15.5
  * Alpine x64
    * [Alpine Linux](https://alpinelinux.org/) 3.17 to 3.20
* **macOS**
  * x64
    * macOS 13.0 "Ventura"
  * ARM64
    * macOS 13.0 "Ventura"
* **Windows**
  * Client OS
    * Windows 10
      * 1607
    * Windows 11
      * 23H2, 22H2, 21H2

> [!NOTE]
> The previous list is a partial list of commonly used operating systems that don't support .NET 10 and the 5.x agent. See [.NET 10 - Out of support OS versions](https://github.com/dotnet/core/blob/main/release-notes/10.0/supported-os.md#out-of-support-os-versions) for the full list of operating systems that are out of support for .NET 10.

## FAQ

### What's the difference between the 4.x and 5.x agents?

The 4.x agents use .NET 8, and the 5.x agents use .NET 10.

### How can I check if my agents can upgrade to 5.x?

Compare the operating system of your agent with the supported list from the previous [Upgrade to 5.x agent on supported operating systems](#upgrade-to-5x-agent-on-supported-operating-systems) section.

You can also use a [script](https://github.com/microsoft/azure-pipelines-agent/tree/master/tools/FindAgentsNotCompatibleWithAgent) to predict whether the agents in your self-hosted pools can upgrade to 5.x.

### How will security issues in the agent be patched going forward?

In general, previous versions of the agent software don't receive patches. Only the 5.x agents get patches. However, some Azure DevOps Server customers still rely on 4.x agents. So, the product team reviews security issues on a case-by-case basis to decide.

### What do I need to do when I'm on an unsupported OS?

Migrate to a newer operating system that .NET 10 supports. Otherwise, your agent might attempt to upgrade, and it fails as .NET 10 can't be installed on your OS. The product team will publish some guidance in a follow-up blog post that prevents auto-upgrades of the agent. However, that guidance is only meant to be a temporary solution to give you more time to upgrade your agent machines.

### Can I stay on 3.x or 4.x agents if I'm not working on any changes in my project anymore?

No. The pipelines team regularly adds new features to Azure Pipelines, and some of those features might require an update to the agent even though your pipeline doesn't explicitly depend on that feature. When you prevent auto-upgrades of the agent by using the guidance in a follow-up blog, that agent can't be used to schedule the pipeline. If no agent with the required capabilities can be found, the pipeline execution fails.

### Do I have to install .NET 10 before installing the 5.x agent software?

You don't have to install .NET 10 on your agent machine before installing and configuring the 5.x agent software. All .NET dependencies the 5.x agent requires are part of the agent itself.

### Do I have to build my code using .NET 10 if I'm using the 5.x agent?

The version of .NET used to run the 5.x agent is self-contained in the agent installation and isn't used to build your code. The version of .NET that is used to build your code depends on the pipeline and the version or versions of .NET you have installed onto your agent machine.

### I use Azure DevOps Server and not Azure DevOps Services. Does this change impact me?

The latest version of [Azure DevOps Server](/azure/devops/server/release-notes/azuredevopsserver) uses the 4.x agent software.

The pipelines team recommends that you update your agent machines to newer operating systems that .NET 10 supports starting now, if you plan to keep up with the Azure DevOps Server releases in the future.

### Does Azure DevOps Server support the 5.x agent?

Azure DevOps Server versions support the version of the agent that is deployed with that version. The latest version of [Azure DevOps Server](/azure/devops/server/release-notes/azuredevopsserver) uses the 4.x agent software.

[!INCLUDE [ado-server-agent-versions](./includes/ado-server-agent-versions.md)]

> [!NOTE]
> Azure DevOps Server 2020 and higher support the 5.x agent software through updates. When those updates are released, this article is updated with the corresponding agent version.

Azure DevOps Server is serviced through security or servicing patches that provide targeted cumulative bug fixes for existing features in the product. For the best and most secure product experience, use the latest, most secure release of Azure DevOps Server. You can download the latest version of the product from the [Azure DevOps Server download page](/azure/devops/server/download/azuredevopsserver).

After installing an Azure DevOps Server update or new version, [update your agents](/azure/devops/pipelines/agents/agents#to-update-self-hosted-agents).

### What is the timeline for agent version 5 deployment?

Agent version 5.x is releasing in 2026.

### What happens when a task requires an agent to be updated to agent version 5?

Normally, when a task requires a newer version of the agent, the agent automatically updates itself. For now, while agent version 4 continues to be updated, auto update from agent version 4 to agent version 5 is disabled. Once it's enabled, for operating systems that aren't compatible with agent version 5, agent version 4.x doesn't attempt to update itself to the v5 agent. Instead, a warning is shown informing users they need to upgrade the operating system first: `The operating system the agent is running on is <OS>, which will not be supported by the .NET 10 based v5 agent. Please upgrade the operating system of this host to ensure compatibility with the v5 agent. See https://aka.ms/azdo-pipeline-agent-version`
