```YAML
# Azure App Service Manage
# Start, Stop, Restart, Slot swap, Install site extensions or Enable Continuous Monitoring for an Azure App Service
- task: AzureAppServiceManage@0
  inputs:
    azureSubscription: 
    #action: 'Swap Slots' # Optional. Options: swap Slots, start Azure App Service, stop Azure App Service, restart Azure App Service, install Extensions, enable Continuous Monitoring, start All Continuous Webjobs, stop All Continuous Webjobs
    webAppName: 
    #specifySlotOrASE: false # Optional
    #resourceGroupName: # Required when action == Swap Slots || SpecifySlot == True
    #sourceSlot: # Required when action == Swap Slots
    #swapWithProduction: true # Optional
    #targetSlot: # Required when action == Swap Slots && SwapWithProduction == False
    #preserveVnet: false # Optional
    #slot: 'production' # Required when action != Swap Slots && SpecifySlot == True
    #extensionsList: # Required when action == Install Extensions
    #outputVariable: # Optional
    #appInsightsResourceGroupName: # Required when action == Enable Continuous Monitoring
    #applicationInsightsResourceName: # Required when action == Enable Continuous Monitoring
    #applicationInsightsWebTestName: # Optional
```
