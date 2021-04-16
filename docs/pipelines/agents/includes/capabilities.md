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
> 
> Capabilities includes all environment variables and their values that are set when the agent runs. If any of these values change whilst the agent is running the agent needs to be restarted to pick uo the new values. This is why after you install new software on an agent, you must restart the agent for the new capability to show up in the pool so that the build can run.
> 
> if you want environment variables not to be included as capabilities you can have them ignored by setting an enirvonment vairable `VSO_AGENT_IGNORE` with a comma delimited list of variables to ignore. 
