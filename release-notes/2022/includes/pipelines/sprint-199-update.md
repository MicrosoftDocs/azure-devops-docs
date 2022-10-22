---
author: gloridelmorales
ms.author: glmorale
ms.date: 2/11/2022
ms.topic: include
---

## Pipelines Agent runtime upgrade planning

### What is the Pipeline Agent?
The Azure DevOps Pipeline Agent is the software product that runs on a pipeline host to execute pipeline jobs. It runs on Microsoft hosted agents, Scale Set agents and Self-hosted agents. In the latter case you install it yourself. The Pipeline Agent consists of a Listener and Worker (implemented in .NET), the Worker runs tasks which are implemented either in Node or PowerShell and therefore hosts those runtimes for them.

### Upcoming upgrade to .NET 6 & Red Hat 6 deprecation
With the release of [.NET 6](https://devblogs.microsoft.com/dotnet/announcing-net-6/) we are able to take advantage of its new cross-platform capabilities. Specifically, we will be able to provide native compatibility for Apple Silicon and Windows Arm64. Hence we plan to move to .NET 6 for Pipeline Agent (Listener and Worker) in the coming months.

Due to a number of constraints that this imposes, we are dropping Red Hat Enterprise Linux 6 support from our agent April 30th 2022. 