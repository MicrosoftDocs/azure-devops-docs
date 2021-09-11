---
author: gloridelmorales
ms.author: glmorale
ms.technology: devops-release-notes
ms.date: 08/19/2021
ms.topic: include
---
### Support for environment variables in Linux scale set agents

[Scale set agents](https://docs.microsoft.com/azure/devops/pipelines/agents/scale-set-agents?view=azure-devops) are a convenient solution to auto-scale your agent infrastructure. Since they are based on self-hosted agents, many of the customizations that exist with self-hosted agents are also available with scale set agents. These customizations rely on the use of [environment variables](https://docs.microsoft.com/azure/devops/pipelines/agents/scale-set-agents?view=azure-devops#customizing-pipeline-agent-configuration) that are contained in the agent image.

Until now, these variables worked well with Windows scale set agents but not with Linux scale set agents because of an issue with the Azure Pipelines auto-scaling script. This issue has been addressed now. As a result, you can, for example, change the working directory of a Linux agent to use a faster drive than the OS drive. Or you can set a proxy to be used by the agent.