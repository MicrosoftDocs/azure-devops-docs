```YAML
# Azure Key Vault
# Download Azure Key Vault Secrets
- task: AzureKeyVault@1
  inputs:
    azureSubscription: 
    keyVaultName: 
    #secretsFilter: '*' # Options: editableOptions
```
