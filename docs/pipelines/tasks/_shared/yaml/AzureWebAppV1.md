```YAML
# Azure Web App
# Update Azure App Services on Windows, Web App on Linux with built-in images, ASP.NET, .NET Core, PHP, Python or Node.js based Web applications, Mobile Apps, API applications
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
