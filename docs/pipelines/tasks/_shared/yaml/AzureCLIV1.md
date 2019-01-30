```YAML
# Azure CLI
# Run Azure CLI commands against an Azure subscription in a Shell script when runnning on Linux agent or Batch script when running on Windows agent.
- task: AzureCLI@1
  inputs:
    azureSubscription: 
    #scriptLocation: 'scriptPath' # Options: inlineScript, scriptPath
    #scriptPath: # Required when scriptLocation == ScriptPath
    #inlineScript: # Required when scriptLocation == InlineScript
    #arguments: # Optional
    #addSpnToEnvironment: false # Optional
    #useGlobalConfig: false # Optional
    #workingDirectory: # Optional
    #failOnStandardError: false # Optional
```
