```YAML
# Azure Web App for Container
# Update Azure App Services on Docker containers
- task: AzureWebAppContainer@1
  inputs:
    azureSubscription: 
    #osType: 'Linux' # Options: linux, windows
    appName: 
    #deployToSlotOrASE: false # Optional
    #resourceGroupName: # Required when deployToSlotOrASE == True
    #slotName: 'production' # Required when deployToSlotOrASE == True
    imageName: 
    #containerCommand: # Optional
    #appSettings: # Optional
    #configurationStrings: # Optional
```
