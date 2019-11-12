```YAML
# Azure Network Load Balancer
# Connect or disconnect an Azure virtual machine's network interface to a Load Balancer's back end address pool
- task: AzureNLBManagement@1
  inputs:
    azureSubscription: 
    resourceGroupName: 
    loadBalancer: 
    action: # Options: disconnect, connect
```
