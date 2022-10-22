---
ms.topic: include
author: RoopeshNair
ms.author: ronai
ms.date: 12/07/2018
ms.subservice: azure-devops-pipelines-tasks
---

```YAML
# Download artifacts from file share
# Download artifacts from a file share, like \\share\drop
- task: DownloadFileshareArtifacts@1
  inputs:
    filesharePath: 
    artifactName: 
    #itemPattern: '**' # Optional
    #downloadPath: '$(System.ArtifactsDirectory)' 
    #parallelizationLimit: '8' # Optional
```
