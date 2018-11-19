```YAML
# Azure Policy Check Gate
# Security and compliance assessment with Azure policies on resources that belong to the resource group and Azure subscription.
- task: AzurePolicyCheckGate@0
  inputs:
    azureSubscription: 
    resourceGroupName: 
    #resources: # Optional
```
