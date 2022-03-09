---
ms.topic: include
ms.date: 02/18/2020
ms.prod: devops
ms.technology: devops-cicd-tasks
---

```YAML
# PowerShell
# Run a PowerShell script on Linux, macOS, or Windows
- task: PowerShell@2
  inputs:
    #targetType: 'filePath' # Optional. Options: filePath, inline
    #filePath: # Required when targetType == FilePath
    #arguments: # Optional
    #script: '# Write your PowerShell commands here.Write-Host Hello World' # Required when targetType == Inline
    #errorActionPreference: 'stop' # Optional. Options: default, stop, continue, silentlyContinue
    #warningPreference: 'default' # Optional. Options: default, stop, continue, silentlyContinue
    #informationPreference: 'default' # Optional. Options: default, stop, continue, silentlyContinue
    #verbosePreference: 'default' # Optional. Options: default, stop, continue, silentlyContinue
    #debugPreference: 'default' # Optional. Options: default, stop, continue, silentlyContinue
    #failOnStderr: false # Optional
    #ignoreLASTEXITCODE: false # Optional
    #pwsh: false # Optional
    #workingDirectory: # Optional
```
