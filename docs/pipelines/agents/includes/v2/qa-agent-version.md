---
ms.topic: include
ms.service: azure-devops-pipelines
ms.author: sdanie
ms.manager: mijacobs
author: steved0x
ms.date: 02/12/2020
---

### How do I make sure I have the latest agent version?

1. Go to the **Agent pools** tab:

   [!INCLUDE [agent-pools-tab](../../includes/agent-pools-tab.md)]

1. Select the pool that contains the agent.

1. Make sure the agent is enabled.

1. Go to the capabilities tab:

   [!INCLUDE [agent-capabilities](../../includes/agent-capabilities-tab.md)]

1. Look for the `Agent.Version` capability. You can compare this value against the latest published agent version on the [Azure Pipelines Agent](https://github.com/Microsoft/azure-pipelines-agent/releases) page.

1. Each agent automatically updates itself when it runs a task that requires a newer version of the agent. If you want to manually update some agents, right click the pool, and then select **Update all agents**.

::: moniker range="< azure-devops"

### Can I update my agents that are part of an Azure DevOps Server pool?

Yes. Beginning with Azure DevOps Server 2019, you can configure your server to look for agent package files on a local disk. This configuration overrides the default version that came with the server at the time of its release. This scenario also applies when the server doesn't have access to the internet.

1. From a computer with internet access, download the latest version of the agent package files (in .zip or .tar.gz form) from the [Azure Pipelines Agent GitHub Releases page](https://github.com/Microsoft/azure-pipelines-agent/releases).

2. Transfer the downloaded package files to each Azure DevOps Server Application Tier by using a method of your choice (for example, USB drive, network transfer, and so on). Place the agent files under the `%ProgramData%\Microsoft\Azure DevOps\Agents` folder. If there's no folder labeled **Agents**, create one.

3. You're all set! Your Azure DevOps Server now uses the local files whenever the agents are updated. Each agent automatically updates itself when it runs a task that requires a newer version of the agent. But if you want to manually update some agents, right click the pool, and then choose **Update all agents**.

::: moniker-end
