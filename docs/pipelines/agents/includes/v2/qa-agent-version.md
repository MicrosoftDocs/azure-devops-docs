---
ms.topic: include
ms.technology: devops-cicd
ms.author: sdanie
ms.manager: mijacobs
author: steved0x
ms.date: 02/12/2020
---

### How do I make sure I have the latest v2 agent version?

1. Navigate to the **Agent pools** tab:

   [!INCLUDE [agent-pools-tab](../../includes/agent-pools-tab.md)]

1. Click the pool that contains the agent.

1. Make sure the agent is enabled.

1. Navigate to the capabilities tab:
 
   [!INCLUDE [agent-capabilities](../../includes/agent-capabilities-tab.md)]

1. Look for the `Agent.Version` capability. You can check this value against the latest published agent version. See [Azure Pipelines Agent](https://github.com/Microsoft/azure-pipelines-agent/releases) and check the page for the highest version number listed.

1. Each agent automatically updates itself when it runs a task that requires a newer version of the agent. If you want to manually update some agents, right-click the pool, and select **Update all agents**.

::: moniker range="< azure-devops"

### Can I update my v2 agents that are part of an Azure DevOps Server pool?

Yes.
Beginning with Azure DevOps Server 2019, you can configure your server to look for the agent package files on a local disk.
This configuration will override the default version that came with the server at the time of its release.
This scenario also applies when the server doesn't have access to the internet.

1. From a computer with Internet access, download the latest version of the agent package files (in .zip or .tar.gz form) from the [Azure Pipelines Agent GitHub Releases page](https://github.com/Microsoft/azure-pipelines-agent/releases).

2. Transfer the downloaded package files to each Azure DevOps Server Application Tier by using a method of your choice (such as USB drive, Network transfer, and so on). Place the agent files under the `%ProgramData%\Microsoft\Azure DevOps\Agents` folder.

3. You're all set! Your Azure DevOps Server will now use the local files whenever the agents are updated. Each agent automatically updates itself when it runs a task that requires a newer version of the agent. But if you want to manually update some agents, right-click the pool, and then choose **Update all agents**.

::: moniker-end
