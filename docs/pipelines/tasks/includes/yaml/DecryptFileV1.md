---
ms.topic: include
author: vijayma
ms.author: vijayma
ms.date: 02/12/2020
ms.prod: devops
ms.technology: devops-cicd-tasks
---

```YAML
# Decrypt file (OpenSSL)
# Decrypt a file using OpenSSL
- task: DecryptFile@1
  inputs:
    #cipher: 'des3' 
    inFile: 
    passphrase: 
    #outFile: # Optional
    #workingDirectory: # Optional
```
