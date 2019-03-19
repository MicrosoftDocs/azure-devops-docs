---
ms.topic: include
---

If your pipelines are in Azure Pipelines, then you've got a convenient option to build and deploy using a **Microsoft-hosted agent**. With Microsoft-hosted agents, maintenance and upgrades are taken care of for you. Each time you run a pipeline, you get a fresh virtual machine. The virtual machine is discarded after one use. Like self-hosted agents, Microsoft-hosted agents can run jobs [directly on the VM](../../process/phases.md) or [in a container](../../process/container-phases.md).

For many teams this is the simplest way to build and deploy. You can try it first and see if it works for your build or deployment. If not, you can use a self-hosted agent.

> [!TIP]
>
> You can try a Microsoft-hosted agent for no charge. If your build or release doesn't succeed, the issues will be reported in the logs.
