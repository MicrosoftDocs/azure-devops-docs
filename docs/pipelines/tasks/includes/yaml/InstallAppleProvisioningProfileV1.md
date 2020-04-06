---
ms.topic: include
author: vijayma
ms.author: vijayma
ms.date: 12/07/2018
ms.prod: devops
ms.technology: devops-cicd-tasks
---

```YAML
# Install Apple provisioning profile
# Install an Apple provisioning profile required to build on a macOS agent machine
- task: InstallAppleProvisioningProfile@1
  inputs:
    #provisioningProfileLocation: 'secureFiles' # Options: secureFiles, sourceRepository
    #provProfileSecureFile: # Required when provisioningProfileLocation == SecureFiles
    #provProfileSourceRepository: # Required when provisioningProfileLocation == SourceRepository
    #removeProfile: true # Optional
```
