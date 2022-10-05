---
ms.topic: include
author: vijayma
ms.author: vijayma
ms.date: 02/02/2019
ms.subservice: azure-devops-pipelines-tasks
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
    #addEntryToConfig: # Optional
    #configHostAlias: # Optional
    #configHostname: # Optional
    #configUser: # Optional
    #configPort: # Optional
```
