---
ms.topic: include
ms.technology: devops-cicd
ms.manager: mijacobs
ms.author: sdanie
author: steved0x
ms.date: 02/12/2020
---

## Capabilities

Your agent's capabilities are cataloged and advertised in the pool so that only the builds and releases it can handle are assigned to it. See [Build and release agent capabilities](../agents.md#capabilities). 

In many cases, after you deploy an agent, you'll need to install software or utilities. Generally you should install on your agents whatever software and tools you use on your development machine.

For example, if your build includes the [npm task](../../tasks/package/npm.md), then the build won't run unless there's a build agent in the pool that has npm installed.

> [!IMPORTANT]
> Capabilities include all environment variables and the values that are set when the agent runs. If any of these values change while the agent is running, the agent must be restarted to pick up the new values. After you install new software on an agent, you must restart the agent for the new capability to show up in the pool, so that the build can run.
> 
> If you want to exclude environment variables as capabilities, you can designate them by setting an environment variable `VSO_AGENT_IGNORE` with a comma-delimited list of variables to ignore. 
