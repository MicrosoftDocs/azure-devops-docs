```YAML
# Azure App Service manage
# Start, stop, restart, slot swap, slot delete, install site extensions or enable continuous monitoring for an Azure App Service
- task: AzureAppServiceManage@0
  inputs:
    azureSubscription: 
    #action: 'Swap Slots' # Optional. Options: swap Slots, start Azure App Service, stop Azure App Service, restart Azure App Service, delete Slot, install Extensions, enable Continuous Monitoring, start All Continuous Webjobs, stop All Continuous Webjobs
    webAppName: 
    #specifySlotOrASE: false # Optional
    #resourceGroupName: # Required when action == Swap Slots || Action == Delete Slot || SpecifySlot == True
    #sourceSlot: # Required when action == Swap Slots
    #swapWithProduction: true # Optional
    #targetSlot: # Required when action == Swap Slots && SwapWithProduction == False
    #preserveVnet: false # Optional
    #slot: 'production' # Required when action == Delete Slot || SpecifySlot == True
    #extensionsList: # Required when action == Install Extensions
    #outputVariable: # Optional
    #appInsightsResourceGroupName: # Required when action == Enable Continuous Monitoring
    #applicationInsightsResourceName: # Required when action == Enable Continuous Monitoring
    #applicationInsightsWebTestName: # Optional
```
