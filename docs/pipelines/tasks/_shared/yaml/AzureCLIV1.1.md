## YAML snippet

```YAML
# Azure CLI
# Run a Shell or Batch script with Azure CLI commands against an azure subscription
- task: AzureCLI@1
  inputs:
    azureSubscription: 
    #scriptLocation: 'scriptPath' # Options: inlineScript, scriptPath
    #scriptPath: # Required when scriptLocation == ScriptPath
    #inlineScript: # Required when scriptLocation == InlineScript
    #arguments: # Optional
    #workingDirectory: # Optional
    #failOnStandardError: false # Optional
```
