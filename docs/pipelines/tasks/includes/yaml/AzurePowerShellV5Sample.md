---
ms.topic: include
author: RoopeshNair
ms.author: ronai
ms.date: 12/07/2018
ms.prod: devops
ms.technology: devops-cicd-tasks
---

```YAML
- task: AzurePowerShell@5
  inputs:
    azureSubscription: my-arm-service-connection
    scriptType: filePath
    scriptPath: $(Build.SourcesDirectory)\myscript.ps1
    scriptArguments:
      -Arg1 val1 `
      -Arg2 val2 `
      -Arg3 val3
    azurePowerShellVersion: latestVersion
    pwsh: true
```
