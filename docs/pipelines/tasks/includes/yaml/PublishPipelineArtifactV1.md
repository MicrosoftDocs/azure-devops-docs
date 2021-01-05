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
    #targetPath: '$(Pipeline.Workspace)' # Required 
    #artifactName: 'drop' # Optional
    #artifactType: 'pipeline' # Required. Options: pipeline, filepath. Default value: pipeline
    #fileSharePath: '\server\folderName' # Required when artifactType = filepath
    #parallel: false # Optional. Default value: false
    #parallelCount: 1 # Optional. Value must be at least 1 and not greater than 128. Default value: 8
```
