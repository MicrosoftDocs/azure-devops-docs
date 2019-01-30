```YAML
# Azure Function for Container
# Update Function Apps with Docker Containers
- task: AzureFunctionAppContainer@1
  inputs:
    azureSubscription: 
    appName: 
    #deployToSlotOrASE: false # Optional
    #resourceGroupName: # Required when deployToSlotOrASE == True
    #slotName: 'production' # Required when deployToSlotOrASE == True
    imageName: 
    #containerCommand: # Optional
    #appSettings: # Optional
    #configurationStrings: # Optional
```
