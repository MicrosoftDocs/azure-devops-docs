---
ms.topic: include
author: RoopeshNair
ms.author: ronai
ms.date: 12/07/2018
ms.prod: devops
ms.technology: devops-cicd-tasks
---

```YAML
# Service Fabric PowerShell
# Run a PowerShell script in the context of an Azure Service Fabric cluster connection
- task: ServiceFabricPowerShell@1
  inputs:
    clusterConnection: 
    #scriptType: 'FilePath' # Options: filePath, inlineScript
    #scriptPath: # Optional
    #inline: '# You can write your PowerShell scripts inline here. # You can also pass predefined and custom variables to this script using arguments' # Optional
    #scriptArguments: # Optional
```
