```YAML
# Service Fabric PowerShell
# Run a PowerShell script within the context of an Azure Service Fabric cluster connection.
- task: ServiceFabricPowerShell@1
  inputs:
    clusterConnection: 
    #scriptType: 'FilePath' # Options: filePath, inlineScript
    #scriptPath: # Optional
    #inline: '# You can write your PowerShell scripts inline here. # You can also pass predefined and custom variables to this script using arguments' # Optional
    #scriptArguments: # Optional
```
