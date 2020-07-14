---
ms.topic: include
author: vijayma
ms.author: vijayma
ms.date: 12/07/2018
ms.prod: devops
ms.technology: devops-cicd-tasks
---

```YAML
# Publish build artifacts
# Publish build artifacts to Azure Pipelines or a Windows file share
- task: PublishBuildArtifacts@1
  inputs:
    #pathToPublish: '$(Build.ArtifactStagingDirectory)' 
    #artifactName: 'drop' 
    #publishLocation: 'Container' # Options: container, filePath
    #targetPath: # Required when publishLocation == FilePath
    #parallel: false # Optional
    #parallelCount: # Optional
    #fileCopyOptions: #Optional
```
