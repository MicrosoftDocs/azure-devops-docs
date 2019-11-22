```YAML
# Azure File Copy
# Copy files to Azure blob or VM(s)
- task: AzureFileCopy@1
  inputs:
    sourcePath: 
    #azureConnectionType: 'ConnectedServiceNameARM' # Optional. Options: connectedServiceName, connectedServiceNameARM
    #azureClassicSubscription: # Required when azureConnectionType == ConnectedServiceName
    #azureSubscription: # Required when azureConnectionType == ConnectedServiceNameARM
    destination: # Options: azureBlob, azureVMs
    #classicStorage: # Required when azureConnectionType == ConnectedServiceName
    #storage: # Required when azureConnectionType == ConnectedServiceNameARM
    #containerName: # Required when destination == AzureBlob
    #blobPrefix: # Optional
    #cloudService: # Required when azureConnectionType == ConnectedServiceName && Destination == AzureVMs
    #resourceGroup: # Required when azureConnectionType == ConnectedServiceNameARM && Destination == AzureVMs
    #resourceFilteringMethod: 'machineNames' # Optional. Options: machineNames, tags
    #machineNames: # Optional
    #vmsAdminUserName: # Required when destination == AzureVMs
    #vmsAdminPassword: # Required when destination == AzureVMs
    #targetPath: # Required when destination == AzureVMs
    #additionalArguments: # Optional
    #enableCopyPrerequisites: false # Optional
    #copyFilesInParallel: true # Optional
    #cleanTargetBeforeCopy: false # Optional
    #skipCACheck: true # Optional
    #outputStorageUri: # Optional
    #outputStorageContainerSasToken: # Optional
```
