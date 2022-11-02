---
ms.topic: include
author: vijayma
ms.author: vijayma
ms.date: 08/12/2022
ms.subservice: azure-devops-pipelines-tasks
---

```YAML
# Publish pipeline artifacts
# Publish (upload) a file or directory as a named artifact for the current run
- task: PublishPipelineArtifact@1
  inputs:
    #path: '$(Pipeline.Workspace)' # Required. Default value: $(Pipeline.Workspace). Aliases: targetPath.
    #artifactName: 'drop' # Optional. Aliases: artifact.
    #artifactType: 'pipeline' # Required. Options: pipeline, filepath. Default value: pipeline. Aliases: publishLocation.
    #fileSharePath: '\server\folderName' # Required when artifactType = filepath.
    #parallel: false # Optional. Default value: false.
    #parallelCount: 1 # Optional. Value must be at least 1 and not greater than 128. Default value: 8
    #properties: # Optional. Custom properties to associate with the published artifact. Must be a valid json string.
```
