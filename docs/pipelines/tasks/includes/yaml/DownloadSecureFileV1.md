---
ms.topic: include
author: vijayma
ms.author: vijayma
ms.date: 12/07/2018
ms.subservice: azure-devops-pipelines-tasks
---

```YAML
# Download secure file
# Download a secure file to the agent machine
- task: DownloadSecureFile@1
  name: mySecureFile # The name with which to reference the secure file's path on the agent, like $(mySecureFile.secureFilePath)
  inputs:
    secureFile: # The file name or GUID of the secure file
    #retryCount: 5 # Optional
```
