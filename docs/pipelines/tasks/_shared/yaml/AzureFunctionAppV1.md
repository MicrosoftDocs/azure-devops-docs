```YAML
# Azure Function
# Update Azure Function on Windows, Function on Linux with built-in images, ASP.NET, .NET Core, PHP, Python or Node.js based Web applications
- task: AzureFunctionApp@1
  inputs:
    azureSubscription: 
    appType: # Options: functionApp, functionAppLinux
    appName: 
    #deployToSlotOrASE: false # Optional
    #resourceGroupName: # Required when deployToSlotOrASE == True
    #slotName: 'production' # Required when deployToSlotOrASE == True
    #package: '$(System.DefaultWorkingDirectory)/**/*.zip' 
    #runtimeStack: # Optional. Options: dOCKER|Microsoft/Azure-Functions-Dotnet-Core2.0:2.0, dOCKER|Microsoft/Azure-Functions-Node8:2.0
    #startUpCommand: # Optional
    #customWebConfig: # Optional
    #appSettings: # Optional
    #configurationStrings: # Optional
    #deploymentMethod: 'auto' # Options: auto, zipDeploy, runFromPackage
```
