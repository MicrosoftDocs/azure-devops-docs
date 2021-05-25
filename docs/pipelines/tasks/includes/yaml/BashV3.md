---
ms.topic: include
ms.date: 02/11/2020
ms.prod: devops
ms.technology: devops-cicd-tasks
---

```YAML
# Bash
# Run a Bash script on macOS, Linux, or Windows
- task: Bash@3
  inputs:
    #targetType: 'filePath' # Optional. Options: filePath, inline
    #filePath: # Required when targetType == FilePath
    #arguments: # Optional
    #script: '# echo Hello world' # Required when targetType == inline
    #workingDirectory: # Optional
    #failOnStderr: false # Optional
    #noProfile: true # Optional
    #noRc: true # Optional
```
