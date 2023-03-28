---
author: ckanyika
ms.author: ckanyika
ms.date: 3/28/2023
ms.topic: include
---

### Pipeline Agent end of support for Debian 9, Fedora 32, macOS 10.14 and others

With the [rollout of agent v3](https://learn.microsoft.com/azure/devops/release-notes/2023/pipelines/sprint-217-update#pipeline-agent-v3-net-6-rolling-out) nearing completion, agent v2 nears the end of its lifecycle.

Starting with version 2.218 of the agent, pipelines running on an operating system that is no longer supported by agent v3 will fail with the following error message:

> _This operating system will stop receiving updates of the Pipelines Agent in the future. To be able to continue to run pipelines please upgrade the operating system or set an environment
variable or agent knob “AGENT_ACKNOWLEDGE_NO_UPDATES” to “true”. See <a href="https://aka.ms/azdo-pipeline-agent-v2-eos" rel="noopener" target="_blank">https://aka.ms/azdo-pipeline-agent-v2-eos</a> for more information._

You have two options to address the above error in your pipelines:

1. (Preferred) Move your agents to machines with newer operating systems. This is the best option as it will allow you to get future updates to the agent.
2. Set the AGENT_ACKNOWLEDGE_NO_UPDATES variable on the agent.

### Different methods to set AGENT_ACKNOWLEDGE_NO_UPDATES
To acknowledge the agent will no longer receive updates, you can configure an environment variable on the agent (e.g. /etc/environment, /etc/profile.d, Windows System Settings):
```bash
AGENT_ACKNOWLEDGE_NO_UPDATES=true
```
You can also set a pipeline variable from a YAML pipeline:
```yaml
jobs:
- job: 'agentWithVariables'
  displayName: 'Agent with variables'

  variables:
    AGENT_ACKNOWLEDGE_NO_UPDATES: 'true' # Required to not fail job on operating system that is not supported by .NET 6
```
And here is an example of setting a pipeline variable in a classic pipeline:
![Screenshot showing how to set the AGENT_ACKNOWLEDGE_NO_UPDATES variable to true in classic pipeline](https://devblogs.microsoft.com/devops/wp-content/uploads/sites/6/2023/02/classic-pipeline-knob.png)

Any of the above methods to set `AGENT_ACKNOWLEDGE_NO_UPDATES=true` will let the 2.218 or later 2.x agent continue to operate on the operating system that is not supported by agent v3.

### Resources

- [Additional information](https://aka.ms/azdo-pipeline-agent-v2-eos)
- [Agent v3](https://aka.ms/azdo-pipeline-agent-version)
- [Red Hat Enterprise Linux 6 end-of-support](https://learn.microsoft.com/azure/devops/release-notes/2023/pipelines/sprint-216-update#red-hat-6-will-no-longer-receive-pipeline-agent-updates)