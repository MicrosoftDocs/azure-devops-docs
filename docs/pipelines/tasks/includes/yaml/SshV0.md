---
ms.topic: include
author: RoopeshNair
ms.author: ronai
ms.date: 12/07/2018
ms.prod: devops
ms.technology: devops-cicd 
---

```YAML
# SSH
# Run shell commands or a script on a remote machine using SSH
- task: SSH@0
  inputs:
    sshEndpoint: 
    #runOptions: 'commands' # Options: commands, script, inline
    #commands: # Required when runOptions == Commands
    #scriptPath: # Required when runOptions == Script
    #inline: # Required when runOptions == Inline
    #interpreterCommand: # Used when runOptions == Inline
    #args: # Optional
    #failOnStdErr: true # Optional
```
