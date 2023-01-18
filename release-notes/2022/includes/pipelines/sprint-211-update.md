---
author: gloridelmorales
ms.author: glmorale
ms.date: 10/11/2022
ms.topic: include
---

### Pipeline Agent supports Group Managed Service Accounts as service account

The Azure Pipelines agent now supports Group Managed Service Accounts on [Self-hosted agents on Windows](/azure/devops/pipelines/agents/v2-windows?view=azure-devops&preserve-view=true).

[Group Managed Service Accounts](https://aka.ms/gmsa) provide centralized password management for domain accounts that act as service accounts. The Azure Pipelines Agent can recognize this type of account so a password is not required during configuration:

```PowerShell
.\config.cmd --url https://dev.azure.com/<Organization> `
             --auth pat --token <PAT> `
             --pool <AgentPool> `
             --agent <AgentName> --replace `
             --runAsService `
             --windowsLogonAccount <DOMAIN>\<gMSA>
```
