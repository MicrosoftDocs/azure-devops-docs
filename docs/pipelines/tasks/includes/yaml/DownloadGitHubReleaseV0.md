---
ms.topic: include
author: ashokirla
ms.author: ashkir
ms.date: 02/03/2020
ms.prod: devops
ms.technology: devops-cicd-tasks
---

```YAML
# Download GitHub Release
# Downloads a GitHub Release from a repository
- task: DownloadGitHubRelease@0
  inputs:
    connection: 
    userRepository: 
    #defaultVersionType: 'latest' # Options: latest, specificVersion, specificTag
    #version: # Required when defaultVersionType != Latest
    #itemPattern: '**' # Optional
    #downloadPath: '$(System.ArtifactsDirectory)' 
```
