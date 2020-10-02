---
ms.topic: include
author: RoopeshNair
ms.author: ronai
ms.date: 12/07/2018
ms.prod: devops
ms.technology: devops-cicd
---

```YAML
# Azure file copy
# Copy files to Azure Blob Storage or virtual machines
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

```YAML
# Example: Upload files from Pipeline staging directory to blob storage.
- task: AzureFileCopy@2
  displayName: 'Example Step Name
  inputs:
    sourcePath: '$(Build.ArtifactStagingDirectory)/BlobsToUpload'
    additionalArgumentsForBlobCopy: |
      '/Y' # Supresses all AZCopy Confirmations. Used here to allow overwrites
      '/Pattern:*' # Pattern of files to copy.
      '/S' # Recursive Copy
    azureSubscription: 'Subscription Name'
    destination: AzureBlob
    storage: storageaccountname
    containerName: storagecontainername
    blobPrefix: targetdirectoryincontainer
```
