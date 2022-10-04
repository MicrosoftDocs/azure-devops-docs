---
ms.topic: include
author: RoopeshNair
ms.author: ronai
ms.date: 12/07/2018
ms.subservice: azure-devops-pipelines-tasks
---

```YAML
# Chef
# Deploy to Chef environments by editing environment attributes
- task: Chef@1
  inputs:
    connectedServiceName: 
    environment: 
    attributes: 
    #chefWaitTime: '30' 
```
