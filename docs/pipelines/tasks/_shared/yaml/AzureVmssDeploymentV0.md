```YAML
# Azure VM scale set deployment
# Deploy a virtual machine scale set image
- task: AzureVmssDeployment@0
  inputs:
    azureSubscription: 
    #action: 'Update image' # Options: update Image, configure Application Startup
    vmssName: 
    vmssOsType: # Options: windows, linux
    imageUrl: 
    #customScriptsDirectory: # Optional
    #customScript: # Optional
    #customScriptArguments: # Optional
    #customScriptsStorageAccount: # Optional
    #skipArchivingCustomScripts: # Optional
```
