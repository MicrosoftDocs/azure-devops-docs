---
ms.topic: include
author: RoopeshNair
ms.author: ronai
ms.date: 12/07/2018
ms.subservice: azure-devops-pipelines-tasks
---

```YAML
# Azure file copy
# Copy files to Azure Blob Storage or virtual machines
- task: AzureFileCopy@4
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
    #enableCopyPrerequisites: false # Optional | Required to be true when destination == AzureVMs
    #copyFilesInParallel: true # Optional
    #cleanTargetBeforeCopy: false # Optional
    #skipCACheck: true # Optional
    #sasTokenTimeOutInMinutes: # Optional
```
