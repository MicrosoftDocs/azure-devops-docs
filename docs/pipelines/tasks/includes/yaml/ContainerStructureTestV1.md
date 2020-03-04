---
ms.topic: include
author: Additi
ms.author: admahesh
ms.date: 10/01/2019
ms.prod: devops
ms.technology: devops-cicd-tasks
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
