---
ms.topic: include
ms.date: 09/30/2021
ms.prod: devops
ms.technology: devops-cicd-tasks
---

```YAML
# Azure Key Vault
# Download Azure Key Vault secrets
- task: AzureKeyVault@2
  inputs:
    ConnectedServiceName: # Azure subscription
    keyVaultName: # Name of existing key vault
    secretsFilter: '*' # Downloads all secrets for the key vault
    RunAsPreJob: true # Runs before the job starts
```