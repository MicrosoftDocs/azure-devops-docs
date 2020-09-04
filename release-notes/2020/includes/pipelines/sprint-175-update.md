---
author: sid-ah
ms.author: simerzou
ms.technology: devops-release-notes
ms.date: 09/10/2020
ms.topic: include
---
### General availability of Scale-set agents

A few months ago, we announced the [preview of Scale-set agents](https://docs.microsoft.com/azure/devops/release-notes/2020/sprint-170-update#preview-of-scale-set-agents). We are now happy to announce the general availability of this feature. In the last two months, we improved the reliability in performing various scale-set operations. We updated the [guidance](https://docs.microsoft.com/azure/devops/pipelines/agents/scale-set-agents?view=azure-devops) on how you can improve the performance of provisioning new virtual machines. We moved the logic for installing an agent into a custom VM extension so that you can leverage the VM script extension slot for your own needs. Finally, we improved diagnosability by surfacing the errors when we perform scale-up or scale-down operations on Azure.

    
### Template expressions allowed in YAML `resources` block

Previously, <a href="https://docs.microsoft.com/azure/devops/pipelines/process/expressions">compile-time expressions</a> (`${{ }}`) were not allowed in the `resources` section of an Azure Pipelines YAML file. With this release, we have lifted this restriction for containers. This allows you to use <a href="https://docs.microsoft.com/azure/devops/pipelines/process/runtime-parameters">runtime parameter</a> contents inside your resources, for example to pick a container at queue time. We plan to extend this support to other resources over time.<br></div>

    