## YAML snippet

```YAML
# Azure App Service Deploy
# Update Azure WebApp Services On Windows, Web App On Linux with built-in images or docker containers, ASP.NET, .NET Core, PHP, Python or Node based Web applications, Function Apps, Mobile Apps, Api applications, Web Jobs using Web Deploy / Kudu REST APIs
- task: AzureRmWebAppDeployment@4
  inputs:
    #connectionType: 'AzureRM' # Options: azureRM, publishProfile
    #azureSubscription: # Required when connectionType == AzureRM
    #publishProfilePath: '$(System.DefaultWorkingDirectory)/**/*.pubxml' # Required when connectionType == PublishProfile
    #publishProfilePassword: # Required when connectionType == PublishProfile
    #appType: 'webApp' # Required when connectionType == AzureRM# Options: webApp, webAppLinux, webAppContainer, functionApp, apiApp, mobileApp
    #webAppName: # Required when connectionType == AzureRM
    #deployToSlotOrASE: false # Optional
    #resourceGroupName: # Required when deployToSlotOrASE == True
    #slotName: 'production' # Required when deployToSlotOrASE == True
    #dockerNamespace: # Required when appType == WebAppContainer
    #dockerRepository: # Required when appType == WebAppContainer
    #dockerImageTag: # Optional
    #virtualApplication: # Optional
    #packageForLinux: '$(System.DefaultWorkingDirectory)/**/*.zip' # Required when connectionType == PublishProfile || WebAppKind == WebApp || WebAppKind == ApiApp || WebAppKind == FunctionApp || WebAppKind == MobileApp || WebAppKind == WebAppLinux
    #runtimeStack: # Required when appType == WebAppLinux
    #startupCommand: # Optional
    #scriptType: # Optional. Options: , inline Script, file Path
    #inlineScript: ':: You can provide your deployment commands here. One command per line.' # Required when scriptType == Inline Script
    #scriptPath: # Required when scriptType == File Path
    #webConfigParameters: # Optional
    #appSettings: # Optional
    #configurationSettings: # Optional
    #takeAppOfflineFlag: true # Optional
    #useWebDeploy: false # Optional
    #setParametersFile: # Optional
    #removeAdditionalFilesFlag: false # Optional
    #excludeFilesFromAppDataFlag: true # Optional
    #additionalArguments: '-retryAttempts:6 -retryInterval:10000' # Optional
    #renameFilesFlag: true # Optional
    #enableXmlTransform: # Optional
    #enableXmlVariableSubstitution: # Optional
    #jSONFiles: # Optional
```
