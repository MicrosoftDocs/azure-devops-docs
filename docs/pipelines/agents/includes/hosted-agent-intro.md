---
ms.topic: include
ms.technology: devops-cicd
ms.manager: mijacobs
ms.author: sdanie
author: steved0x
ms.date: 02/12/2020
---

If your pipelines are in Azure Pipelines, then you've got a convenient option to run your jobs using a **Microsoft-hosted agent**. With Microsoft-hosted agents, maintenance and upgrades are taken care of for you. Each time you run a pipeline, you get a fresh virtual machine for each job in the pipeline. The virtual machine is discarded after one job. Microsoft-hosted agents can run jobs [directly on the VM](../../process/phases.md) or [in a container](../../process/container-phases.md).

Azure Pipelines provides a pre-defined agent pool named **Azure Pipelines** with Microsoft-hosted agents.

For many teams this is the simplest way to run your jobs. You can try it first and see if it works for your build or deployment. If not, you can use a self-hosted agent.

> [!TIP]
>
> You can try a Microsoft-hosted agent for no charge.
