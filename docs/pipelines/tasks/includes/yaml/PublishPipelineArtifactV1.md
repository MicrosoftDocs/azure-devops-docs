---
ms.topic: include
author: vijayma
ms.author: vijayma
ms.date: 10/07/2019
ms.prod: devops
ms.technology: devops-cicd-tasks
---

```YAML
# Publish pipeline artifacts
# Publish (upload) a file or directory as a named artifact for the current run
- task: PublishPipelineArtifact@1
  inputs:
    #targetPath: '$(Pipeline.Workspace)' 
    #artifactName: # 'drop'
```
