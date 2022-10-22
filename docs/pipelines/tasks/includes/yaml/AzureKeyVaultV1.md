---
ms.topic: include
author: RoopeshNair
ms.author: ronai
ms.date: 12/07/2018
ms.subservice: azure-devops-pipelines-tasks
---

```YAML
# Azure Key Vault
# Download Azure Key Vault secrets
- task: AzureKeyVault@1
  inputs:
    azureSubscription: 
    keyVaultName: 
    secretsFilter: '*'
    runAsPreJob: false # Azure DevOps Services only
```
