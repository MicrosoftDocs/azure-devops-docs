---
ms.topic: include
ms.service: azure-devops-pipelines
ms.manager: mijacobs
ms.author: sdanie
author: steved0x
ms.date: 02/12/2020
---

If your pipelines are in Azure Pipelines, you can conveniently run your jobs by using a *Microsoft-hosted agent*. With Microsoft-hosted agents, maintenance and upgrades happen automatically.

You always have the latest version of the VM image you specify in your pipeline. Each time you run a pipeline, you get a fresh virtual machine for each job in the pipeline. The virtual machine is discarded after one job, which means any change that a job makes to the virtual machine file system, such as checking out code, is unavailable on the next job.

Microsoft-hosted agents can run jobs [directly on the VM](../../process/phases.md) or [in a container](../../process/container-phases.md).

Azure Pipelines provides a predefined agent pool named **Azure Pipelines** with Microsoft-hosted agents.

For many teams, this process is the simplest way to run your jobs. You can try it first to see if it works for your build or deployment. If not, you can use [Scale Set agents](../scale-set-agents.md) or a self-hosted agent.

> [!TIP]
>
> You can try a Microsoft-hosted agent for no charge.
