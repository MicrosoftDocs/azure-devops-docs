---
ms.topic: include
---

### How do I make sure I have the latest v2 agent version?

0. Go to the _Agent pools_ control panel tab:
[!INCLUDE [agent-pools-tab](../../_shared/agent-pools-tab.md)]

0. Click the pool that contains the agent.

0. Make sure the agent is enabled.

0. Click **Agents**.

0. Click **Capabilities**.

0. Look for the `Agent.Version` capability.
 > You can check this value against the latest published agent version. See [Azure Pipelines Agent](https://github.com/Microsoft/azure-pipelines-agent/releases) and check the page for the highest version number listed.

1. Each agent automatically updates itself when it runs a task that requires a newer version of the agent. But if you want to manually update some agents, right-click the pool, and then click **Update all agents**.
