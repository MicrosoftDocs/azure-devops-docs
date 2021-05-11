---
ms.topic: include
ms.date: 04/07/2020
ms.prod: devops
ms.technology: devops-cicd-tasks
---

```YAML
# Command line
# Run a command line script using Bash on Linux and macOS and cmd.exe on Windows
- task: CmdLine@2
  inputs:
    script: 'echo Write your commands here.' 
    #workingDirectory: # Optional
    #failOnStderr: false # Optional
```
