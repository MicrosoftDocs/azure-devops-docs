---
ms.topic: include
author: vijayma
ms.author: vijayma
ms.date: 02/02/2019
ms.prod: devops
ms.technology: devops-cicd-tasks
---

```YAML
# Install SSH key
# Install an SSH key prior to a build or deployment
- task: InstallSSHKey@0
  inputs:
    knownHostsEntry: 
    sshPublicKey: 
    #sshPassphrase: # Optional
    sshKeySecureFile: 
```
