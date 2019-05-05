```YAML
# Azure Network Load Balancer
# Connect/Disconnect an Azure virtual machine's network interface to a Load Balancer's backend address pool
- task: AzureNLBManagement@1
  inputs:
    azureSubscription: 
    resourceGroupName: 
    loadBalancer: 
    action: # Options: disconnect, connect
```
