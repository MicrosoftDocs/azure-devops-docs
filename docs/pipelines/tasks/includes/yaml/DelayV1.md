---
ms.topic: include
author: RoopeshNair
ms.author: ronai
ms.date: 02/12/2020
ms.subservice: azure-devops-pipelines-tasks
---

```YAML
# Delay
# Delay further execution of a workflow by a fixed time
jobs:
- job: RunsOnServer
  pool: Server
  steps:
  - task: Delay@1
    inputs:
      #delayForMinutes: '0' 
```
