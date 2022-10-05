---
ms.topic: include
author: RoopeshNair
ms.author: ronai
ms.date: 12/14/2021
ms.subservice: azure-devops-pipelines-tasks
---

```YAML
# Invoke Azure Function
# Invoke an Azure Function
- task: AzureFunction@1
  inputs:
    function:             # Required. Azure function URL. Example: "https://azurefunctionapp.azurewebsites.net/api/HttpTriggerJS1"
    key:                  # Required. Function key
    #method:              # Required. 'POST' # Options: OPTIONS, GET, HEAD, POST, PUT, DELETE, TRACE, PATCH
    #headers:             # Optional. Default value: '{Content-Type:application/json, PlanUrl: $(system.CollectionUri), ProjectId: $(system.TeamProjectId), HubName: $(system.HostType), PlanId: $(system.PlanId), JobId: $(system.JobId), TimelineId: $(system.TimelineId), TaskInstanceId: $(system.TaskInstanceId), AuthToken: $(system.AccessToken)}' 
    #queryParameters:     # Optional
    #body:                # Required when method != GET && Method != HEAD
    #waitForCompletion:   # Required Default value:'ApiResponse' # Options: Callback, ApiResponse
    #successCriteria:     # Optional
```
