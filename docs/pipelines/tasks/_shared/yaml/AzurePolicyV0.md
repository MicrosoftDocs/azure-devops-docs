```YAML
# Check Azure Policy compliance
# Security and compliance assessment for Azure Policy
- task: AzurePolicyCheckGate@0
  inputs:
    azureSubscription: 
    #resourceGroupName: # Optional
    #resources: # Optional
```
