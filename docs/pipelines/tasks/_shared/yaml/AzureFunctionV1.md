```YAML
# Invoke Azure Function
# Invoke Azure function as a part of your process.
- task: AzureFunction@1
  inputs:
    function: 
    key: 
    #method: 'POST' # Options: oPTIONS, gET, hEAD, pOST, pUT, dELETE, tRACE, pATCH
    #headers: '{Content-Type:application/json, PlanUrl: $(system.CollectionUri), ProjectId: $(system.TeamProjectId), HubName: $(system.HostType), PlanId: $(system.PlanId), JobId: $(system.JobId), TimelineId: $(system.TimelineId), TaskInstanceId: $(system.TaskInstanceId), AuthToken: $(system.AccessToken)}' 
    #queryParameters: # Optional
    #body: # Required when method != GET && Method != HEAD
    #waitForCompletion: 'false' # Options: true, false
    #successCriteria: # Optional
```
