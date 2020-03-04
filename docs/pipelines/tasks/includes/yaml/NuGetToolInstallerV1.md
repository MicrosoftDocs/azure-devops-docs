---
ms.topic: include
ms.date: 12/10/2019
author: steved0x
ms.author: sdanie
ms.prod: devops
ms.technology: devops-cicd-tasks
---

```YAML
# NuGet tool installer
# Acquires a specific version of NuGet from the internet or the tools cache and adds it to the PATH. Use this task to change the version of NuGet used in the NuGet tasks.
- task: NuGetToolInstaller@1
  inputs:
    #versionSpec: # Optional
    #checkLatest: false # Optional
```
