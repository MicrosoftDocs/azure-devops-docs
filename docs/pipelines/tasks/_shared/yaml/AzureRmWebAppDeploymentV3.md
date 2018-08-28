```YAML
# Azure App Service Deploy
# Update Azure App Services on Windows, Web App on Linux with built-in images or Docker containers, ASP.NET, .NET Core, PHP, Python or Node.js based Web applications, Function Apps, Mobile Apps, API applications, Web Jobs using Web Deploy / Kudu REST APIs
- task: AzureRmWebAppDeployment@3
  inputs:
    azureSubscription: 
    #appType: 'app' # Options: app, applinux, functionapp, api, mobileapp
    webAppName: 
    #deployToSlotFlag: false # Optional
    #resourceGroupName: # Required when deployToSlotFlag == True
    #slotName: # Required when deployToSlotFlag == True
    #imageSource: 'Registry' # Optional. Options: registry, builtin
    #azureContainerRegistry: # Required when imageSource == AzureContainerRegistry
    #azureContainerRegistryLoginServer: # Optional
    #azureContainerRegistryImage: # Required when imageSource == AzureContainerRegistry
    #azureContainerRegistryTag: # Optional
    #dockerRepositoryAccess: 'public' # Required when imageSource == InvalidImage# Options: private, public
    #dockerRegistryConnection: # Required when dockerRepositoryAccess == Private || ImageSource == PrivateRegistry
    #privateRegistryImage: # Required when imageSource == PrivateRegistry
    #privateRegistryTag: # Optional
    #dockerNamespace: # Required when appType != App && WebAppKind != Functionapp && WebAppKind != Api && WebAppKind != Mobileapp && ImageSource  == Registry
    #dockerRepository: # Required when appType != App && WebAppKind != Functionapp && WebAppKind != Api && WebAppKind != Mobileapp && ImageSource  == Registry
    #dockerImageTag: # Optional
    #virtualApplication: # Optional
    #package: '$(System.DefaultWorkingDirectory)/**/*.zip' # Required when appType != Linux && WebAppKind != Applinux &&  WebAppKind != ""
    #packageForLinux: '$(System.DefaultWorkingDirectory)/**/*.zip' # Required when appType != App && WebAppKind != Functionapp && WebAppKind != Api && WebAppKind != Mobileapp && ImageSource == Builtin
    #runtimeStack: # Required when appType != App && WebAppKind != Functionapp && WebAppKind != Api && WebAppKind != Mobileapp && ImageSource == Builtin# Options: node|4.4, node|4.5, node|6.2, node|6.6, node|6.9, node|6.10, node|6.11, node|8.0, node|8.1, php|5.6, php|7.0, dotnetcore|1.0, dotnetcore|1.1, dotnetcore|2.0, ruby|2.3
    #startupCommand: # Optional
    #webAppUri: # Optional
    #scriptType: # Optional. Options: , inline Script, file Path
    #inlineScript: ':: You can provide your deployment commands here. One command per line.' # Required when scriptType == Inline Script
    #scriptPath: # Required when scriptType == File Path
    #generateWebConfig: false # Optional
    #webConfigParameters: # Required when generateWebConfig == True
    #appSettings: # Optional
    #configurationSettings: # Optional
    #takeAppOfflineFlag: false # Optional
    #useWebDeploy: false # Optional
    #setParametersFile: # Optional
    #removeAdditionalFilesFlag: false # Optional
    #excludeFilesFromAppDataFlag: false # Optional
    #additionalArguments: # Optional
    #renameFilesFlag: false # Optional
    #enableXmlTransform: # Optional
    #enableXmlVariableSubstitution: # Optional
    #jSONFiles: # Optional
```
