```YAML
# IIS Web App Deploy
# Deploy a website or web application using Web Deploy
- task: IISWebAppDeploymentOnMachineGroup@0
  inputs:
    webSiteName: 
    #virtualApplication: # Optional
    #package: '$(System.DefaultWorkingDirectory)\**\*.zip' 
    #setParametersFile: # Optional
    #removeAdditionalFilesFlag: false # Optional
    #excludeFilesFromAppDataFlag: false # Optional
    #takeAppOfflineFlag: false # Optional
    #additionalArguments: # Optional
    #xmlTransformation: # Optional
    #xmlVariableSubstitution: # Optional
    #jSONFiles: # Optional
```
