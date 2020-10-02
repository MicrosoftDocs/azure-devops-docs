---
ms.topic: include
author: RoopeshNair
ms.author: ronai
ms.date: 12/07/2018
ms.prod: devops
ms.technology: devops-cicd-tasks
---

```YAML
# Windows machine file copy
# Copy files to remote Windows machines
- task: WindowsMachineFileCopy@2
  inputs:
    sourcePath: 
    #machineNames: # Optional
    #adminUserName: # Optional
    #adminPassword: # Optional
    targetPath: 
    #cleanTargetBeforeCopy: false # Optional
    #copyFilesInParallel: true # Optional
    #additionalArguments: # Optional
```
