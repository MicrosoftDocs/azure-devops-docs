```YAML
# Azure Web App for Containers
# Deploy containers to Azure App Service
- task: AzureWebAppContainer@1
  inputs:
    azureSubscription: 
    appName: 
    #deployToSlotOrASE: false # Optional
    #resourceGroupName: # Required when deployToSlotOrASE == True
    #slotName: 'production' # Required when deployToSlotOrASE == True
    #containers: # Optional
    #multicontainerConfigFile: # Optional
    #containerCommand: # Optional
    #appSettings: # Optional
    #configurationStrings: # Optional
```
