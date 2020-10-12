---
ms.topic: include
author: shashban
ms.author: shashban
ms.date: 12/07/2018
ms.prod: devops
ms.technology: devops-cicd-tasks
---

```YAML
# Cloud-based load test
# Run a load test in the cloud with Azure Pipelines
- task: CloudLoadTest@1
  inputs:
    #connectedServiceName: # Optional
    #testDrop: '$(System.DefaultWorkingDirectory)' 
    loadTest: 
    #activeRunSettings: 'useFile' # Optional. Options: useFile, changeActive
    #runSettingName: # Required when activeRunSettings == ChangeActive
    #testContextParameters: # Optional
    #testSettings: # Optional
    #thresholdLimit: # Optional
    #machineType: '0' # Options: 0, 2
    #resourceGroupName: 'default' # Optional
    #numOfSelfProvisionedAgents: # Optional
```
