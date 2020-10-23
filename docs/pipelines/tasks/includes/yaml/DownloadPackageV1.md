---
ms.topic: include
ms.date: 07/23/2020
author: steved0x
ms.author: sdanie
ms.prod: devops
ms.technology: devops-cicd-tasks
---

```YAML
# Download package
# Download a package from a package management feed in Azure Artifacts
- task: DownloadPackage@1
  inputs:
    packageType: # 'nuget' Options: maven, npm, nuget, pypi, upack
    feed: # <feedId> for organization-scoped feeds, <projectId>/<feedId> for project-scoped feeds.
    #view: ' ' # Optional
    definition: # '$(packageName)'
    version: # '1.0.0'
    #files: '**' # Optional
    #extract: true # Optional
    downloadPath: # '$(System.ArtifactsDirectory)' 
```
