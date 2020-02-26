```YAML
# Azure Key Vault
# Download Azure Key Vault secrets
- task: AzureKeyVault@1
  inputs:
    azureSubscription: 
    keyVaultName: 
    secretsFilter: '*'
```
