---
ms.topic: include
author: RoopeshNair
ms.author: ronai
ms.date: 12/07/2018
ms.prod: devops
ms.technology: devops-cicd 
---

```YAML
# Copy files over SSH
# Copy files or build artifacts to a remote machine over SSH
- task: CopyFilesOverSSH@0
  inputs:
    sshEndpoint: 
    #sourceFolder: # Optional
    #contents: '**' 
    #targetFolder: # Optional
    #cleanTargetFolder: false # Optional
    #overwrite: true # Optional
    #failOnEmptySource: false # Optional
    #flattenFolders: false # Optional
```
