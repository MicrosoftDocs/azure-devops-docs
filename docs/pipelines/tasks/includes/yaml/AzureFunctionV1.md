---
ms.topic: include
author: RoopeshNair
ms.author: ronai
ms.date: 12/07/2018
ms.prod: devops
ms.technology: devops-cicd-tasks
---

```YAML
# Invoke Azure Function
# Invoke an Azure Function
- task: AzureFunction@1
  inputs:
    function: 
    key: 
    #method: 'POST' # Options: OPTIONS, GET, HEAD, POST, PUT, DELETE, TRACE, PATCH
    #headers: '{Content-Type:application/json, PlanUrl: $(system.CollectionUri), ProjectId: $(system.TeamProjectId), HubName: $(system.HostType), PlanId: $(system.PlanId), JobId: $(system.JobId), TimelineId: $(system.TimelineId), TaskInstanceId: $(system.TaskInstanceId), AuthToken: $(system.AccessToken)}' 
    #queryParameters: # Optional
    #body: # Required when method != GET && Method != HEAD
    #waitForCompletion: 'false' # Options: true, false
    #successCriteria: # Optional
```
