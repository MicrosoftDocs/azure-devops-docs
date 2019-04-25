```YAML
# Azure Monitor Alerts
# Configure alerts on available metrics for an Azure resource
- task: AzureMonitorAlerts@0
  inputs:
    azureSubscription: 
    resourceGroupName: 
    #resourceType: 'Microsoft.Insights/components' # Options: microsoft.Insights/Components, microsoft.Web/Sites, microsoft.Storage/StorageAccounts, microsoft.Compute/VirtualMachines
    resourceName: 
    alertRules: 
    #notifyServiceOwners: # Optional
    #notifyEmails: # Optional
```
