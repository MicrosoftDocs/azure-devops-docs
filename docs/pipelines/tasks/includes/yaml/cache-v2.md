---
ms.topic: include
author: damccorm
ms.date: 12/13/2019
ms.subservice: azure-devops-pipelines-tasks
---

```YAML
# Cache
# Cache files between runs
- task: Cache@2
  inputs:
    key: 
    path: 
    #cacheHitVar: # Optional
    #restoreKeys: # Optional
```
