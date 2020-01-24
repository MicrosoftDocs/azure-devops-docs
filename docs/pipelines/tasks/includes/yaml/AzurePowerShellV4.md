```YAML
# Azure PowerShell
# Run a PowerShell script within an Azure environment
- task: AzurePowerShell@4
  inputs:
    #azureSubscription: Required. Name of Azure Resource Manager service connection
    #scriptType: 'FilePath' # Optional. Options: filePath, inlineScript
    #scriptPath: # Optional
    #inline: '# You can write your Azure PowerShell scripts inline here. # You can also pass predefined and custom variables to this script using arguments' # Optional
    #scriptArguments: # Optional
    #errorActionPreference: 'stop' # Optional. Options: stop, continue, silentlyContinue
    #failOnStandardError: false # Optional
    #azurePowerShellVersion: 'OtherVersion' # Required. Options: latestVersion, otherVersion
    #preferredAzurePowerShellVersion: # Required when azurePowerShellVersion == OtherVersion
```
