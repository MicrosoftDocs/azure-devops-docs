---
ms.topic: include
author: vijayma
ms.author: vijayma
ms.date: 12/07/2018
ms.prod: devops
ms.technology: devops-cicd-tasks
---

```YAML
# Install Apple certificate
# Install an Apple certificate required to build on a macOS agent machine
- task: InstallAppleCertificate@2
  inputs:
    certSecureFile: 
    #certPwd: # Optional
    #keychain: 'temp' # Options: default, temp, custom
    #keychainPassword: # Required when keychain == Custom || Keychain == Default
    #customKeychainPath: # Required when keychain == Custom
    #deleteCert: # Optional
    #deleteCustomKeychain: # Optional
    #signingIdentity: # Optional
```
