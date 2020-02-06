```YAML
# Azure Web App
# Deploy an Azure Web App for Linux or Windows
- task: AzureWebApp@1
  inputs:
    azureSubscription: 
    appType: # Options: webApp, webAppLinux
    appName: 
    #deployToSlotOrASE: false # Optional
    #resourceGroupName: # Required when deployToSlotOrASE == True
    #slotName: 'production' # Required when deployToSlotOrASE == True
    #package: '$(System.DefaultWorkingDirectory)/**/*.zip' 
    #runtimeStack: # Optional
    #startUpCommand: # Optional
    #customWebConfig: # Optional
    #appSettings: # Optional
    #configurationStrings: # Optional
    #deploymentMethod: 'auto' # Options: auto, zipDeploy, runFromPackage
```
