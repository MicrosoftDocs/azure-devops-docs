---
ms.topic: include
author: vijayma
ms.author: vijayma
ms.date: 02/12/2020
ms.prod: devops
ms.technology: devops-cicd-tasks
---

```YAML
# cURL upload files
# Use cURL's supported protocols to upload files
- task: cURLUploader@2
  inputs:
    files: 
    #authType: 'ServiceEndpoint' # Optional. Options: serviceEndpoint, userAndPass
    #serviceEndpoint: # Required when authType == ServiceEndpoint
    #username: # Optional
    #password: # Optional
    #url: # Required when authType == UserAndPass
    #remotePath: 'upload/$(Build.BuildId)/' # Optional
    #options: # Optional
    #redirectStderr: true # Optional
```
