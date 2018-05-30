## YAML snippet

```YAML
# Invoke REST API
# Invoke REST API as a part of your process.
- task: InvokeRESTAPI@1
  inputs:
    serviceConnection: 
    #method: 'POST' # Options: oPTIONS, gET, hEAD, pOST, pUT, dELETE, tRACE, pATCH
    #headers: '{Content-Type:application/json, PlanUrl: $(system.CollectionUri), ProjectId: $(system.TeamProjectId), HubName: $(system.HostType), PlanId: $(system.PlanId), JobId: $(system.JobId), TimelineId: $(system.TimelineId), TaskInstanceId: $(system.TaskInstanceId), AuthToken: $(system.AccessToken)}' 
    #body: # Required when method != GET && Method != HEAD
    #urlSuffix: # Optional
    #waitForCompletion: 'false' # Options: true, false
    #successCriteria: # Optional
```
