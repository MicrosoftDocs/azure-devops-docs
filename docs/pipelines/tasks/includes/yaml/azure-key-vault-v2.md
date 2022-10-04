---
ms.topic: include
ms.date: 09/30/2021
ms.subservice: azure-devops-pipelines-tasks
---

```YAML
# Azure Key Vault
# Download Azure Key Vault secrets
- task: AzureKeyVault@2
  inputs:
    connectedServiceName: # Azure subscription
    keyVaultName: # Name of existing key vault
    secretsFilter: '*' # Downloads all secrets for the key vault
    runAsPreJob: true # Runs before the job starts
```