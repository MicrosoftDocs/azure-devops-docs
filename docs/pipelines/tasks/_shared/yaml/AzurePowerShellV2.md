```YAML
# Azure PowerShell
# Run a PowerShell script within an Azure environment
- task: AzurePowerShell@2
  inputs:
    #azureConnectionType: 'ConnectedServiceNameARM' # Optional. Options: connectedServiceName, connectedServiceNameARM
    #azureClassicSubscription: # Required when azureConnectionType == ConnectedServiceName
    #azureSubscription: # Required when azureConnectionType == ConnectedServiceNameARM
    #scriptType: 'FilePath' # Options: filePath, inlineScript
    #scriptPath: # Optional
    #inline: '# You can write your azure powershell scripts inline here. # You can also pass predefined and custom variables to this script using arguments' # Optional
    #scriptArguments: # Optional
    #azurePowerShellVersion: 'OtherVersion' # Optional. Options: latestVersion, otherVersion
    #preferredAzurePowerShellVersion: # Required when azurePowerShellVersion == OtherVersion
```
