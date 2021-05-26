---
ms.topic: include
author: RoopeshNair
ms.author: ronai
ms.date: 12/07/2018
ms.prod: devops
ms.technology: devops-cicd-tasks
---

```YAML
# Azure App Service manage
# Start, stop, restart, slot swap, slot delete, install site extensions or enable continuous monitoring for an Azure App Service
- task: AzureAppServiceManage@0
  inputs:
    azureSubscription: 
    #action: 'Swap Slots' # Optional. Options: Swap Slots, Start Swap With Preview, Complete Swap, Cancel Swap, Start Azure App Service, Stop Azure App Service, Restart Azure App Service, Delete Slot, Install Extensions, Enable Continuous Monitoring, Start all continuous webjobs, Stop all continuous webjobs
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
