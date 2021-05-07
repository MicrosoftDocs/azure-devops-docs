---
ms.topic: include
author: shashban
ms.author: shashban
ms.date: 12/07/2018
ms.prod: devops
ms.technology: devops-cicd-tasks
---

```YAML
# Publish code coverage results
# Publish Cobertura or JaCoCo code coverage results from a build
- task: PublishCodeCoverageResults@1
  inputs:
    summaryFileLocation: 
    #pathToSources: # Optional
    #failIfCoverageEmpty: false # Optional
```
