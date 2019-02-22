```YAML
# Query Classic Azure Monitor Alerts
# Observe the configured classic Azure monitor rules for active alerts.
- task: AzureMonitor@0
  inputs:
    connectedServiceNameARM: 
    resourceGroupName: 
    #resourceType: 'Microsoft.Insights/components' # Options: microsoft.Insights/Components, microsoft.Web/Sites, microsoft.Storage/StorageAccounts, microsoft.Compute/VirtualMachines
    resourceName: 
    alertRules: 
```
