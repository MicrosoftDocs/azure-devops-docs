---
ms.topic: include
author: RoopeshNair
ms.author: ronai
ms.date: 06/01/2022
ms.subservice: azure-devops-pipelines-tasks
ms.custom: devx-track-azurepowershell
---

```YAML
# Azure PowerShell
# Run a PowerShell script within an Azure environment
- task: AzurePowerShell@5
  inputs:
    #ConnectedServiceNameARM: Required. Name of Azure Resource Manager service connection. You can also use azureSubscription.
    #scriptType: 'FilePath' # Optional. Options: filePath, inlineScript
    #scriptPath: # Optional
    #inline: # Optional. You can write your Azure PowerShell scripts inline here. You can also pass predefined and custom variables to this script using arguments 
    #scriptArguments: # Optional
    #errorActionPreference: 'stop' # Optional. Options: stop, continue, silentlyContinue
    #failOnStandardError: false # Optional
    #TargetAzurePs: 'OtherVersion' # Required. Options: latestVersion, otherVersion. You can also use azurePowerShellVersion.
    #CustomTargetAzurePs: # Required when azurePowerShellVersion == OtherVersion. You can also use preferredAzurePowerShellVersion.
    #pwsh: true # Optional. If this is true, PowerShell Core pwsh.exe will be used in Windows environments.
    #workingDirectory: '' # Optional. The working directory where the script is run.
```
