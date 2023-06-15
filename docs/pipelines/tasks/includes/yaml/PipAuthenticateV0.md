---
ms.topic: include
author: davidstaheli
ms.author: dastahel
ms.date: 10/31/2018
ms.subservice: azure-devops-pipelines-tasks
---

```YAML
# Python pip authenticate
# Authentication task for the pip client used for installing Python distributions
- task: PipAuthenticate@0
  inputs:
    artifactFeeds: 
    #externalFeeds: # Optional
```
