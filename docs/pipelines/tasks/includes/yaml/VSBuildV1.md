---
ms.topic: include
author: vijayma
ms.author: vijayma
ms.date: 12/23/2019
ms.prod: devops
ms.technology: devops-cicd-tasks
---

```YAML
# Visual Studio build
# Build with MSBuild and set the Visual Studio version property
- task: VSBuild@1
  inputs:
    #solution: '**\*.sln' 
    #vsVersion: 'latest' # Optional. Options: latest, 16.0, 15.0, 14.0, 12.0, 11.0
    #msbuildArgs: # Optional
    #platform: # Optional
    #configuration: # Optional
    #clean: false # Optional
    #maximumCpuCount: false # Optional
    #restoreNugetPackages: false # Optional
    #msbuildArchitecture: 'x86' # Optional. Options: x86, x64
    #logProjectEvents: true # Optional
    #createLogFile: false # Optional
    #logFileVerbosity: 'normal' # Optional. Options: quiet, minimal, normal, detailed, diagnostic
```
