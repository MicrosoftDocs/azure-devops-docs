---
ms.topic: include
ms.date: 02/11/2020
ms.prod: devops
ms.technology: devops-cicd-tasks
---

```YAML
# Copy files
# Copy files from a source folder to a target folder using patterns matching file paths (not folder paths)
- task: CopyFiles@2
  inputs:
    #sourceFolder: # Optional
    #contents: '**' 
    targetFolder: 
    #cleanTargetFolder: false # Optional
    #overWrite: false # Optional
    #flattenFolders: false # Optional
    #preserveTimestamp: false # Optional
    #retryCount: 0 # Optional
    #ignoreMakeDirErrors: false # Optional
```
