```YAML
# Azure File Copy
# Copy files to Azure blob or VM(s)
- task: AzureFileCopy@3
  inputs:
    sourcePath: 
    azureSubscription: 
    destination: # Options: azureBlob, azureVMs
    storage: 
    #containerName: # Required when destination == AzureBlob
    #blobPrefix: # Optional
    #resourceGroup: # Required when destination == AzureVMs
    #resourceFilteringMethod: 'machineNames' # Optional. Options: machineNames, tags
    #machineNames: # Optional
    #vmsAdminUserName: # Required when destination == AzureVMs
    #vmsAdminPassword: # Required when destination == AzureVMs
    #targetPath: # Required when destination == AzureVMs
    #additionalArgumentsForBlobCopy: # Optional
    #additionalArgumentsForVMCopy: # Optional
    #enableCopyPrerequisites: false # Optional
    #copyFilesInParallel: true # Optional
    #cleanTargetBeforeCopy: false # Optional
    #skipCACheck: true # Optional
    #outputStorageUri: # Optional
    #outputStorageContainerSasToken: # Optional
    #sasTokenTimeOutInMinutes: # Optional
```
