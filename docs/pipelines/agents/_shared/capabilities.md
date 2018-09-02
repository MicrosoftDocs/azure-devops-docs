---
ms.topic: include
---

## Capabilities

Your agent's capabilities are cataloged and advertised in the pool so that only the builds and releases it can handle are assigned to it. See [Build and release agent capabilities](../agents.md#capabilities).

In many cases, after you deploy an agent, you'll need to install software or utilities. Generally you should install on your agents whatever software and tools you use on your development machine.

For example, if your build includes the [npm task](../../tasks/package/npm.md), then the build won't run unless there's a build agent in the pool that has npm installed.

> [!IMPORTANT]
> 
> After you install new software on an agent, you must restart the agent for the new capability to show up in the pool so that the build can run.
