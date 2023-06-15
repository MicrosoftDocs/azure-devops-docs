---
ms.topic: include
author: Additi
ms.date: 10/01/2019
ms.subservice: azure-devops-pipelines-tasks
---

```YAML
steps:
- task: ContainerStructureTest@0
  displayName: 'Container Structure Test '
  inputs:
    dockerRegistryServiceConnection: 'Container_dockerHub'
    repository: adma/hellodocker
    tag: v1
    configFile: /home/user/cstfiles/fileexisttest.yaml  
```
