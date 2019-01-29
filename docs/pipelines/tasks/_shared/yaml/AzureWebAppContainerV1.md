```YAML
# Azure Web App for Container
# Update Azure App Services on Docker containers
- task: AzureWebAppContainer@1
  inputs:
    azureSubscription: 
    appName: 
    #deployToSlotOrASE: false # Optional
    #resourceGroupName: # Required when deployToSlotOrASEFlag == True
    #slotName: 'production' # Required when deployToSlotOrASEFlag == True
    imageName: 
    #containerCommand: # Optional
    #appSettings: # Optional
    #configurationStrings: # Optional
```
