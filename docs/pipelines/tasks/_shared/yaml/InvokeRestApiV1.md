```YAML
# Invoke REST API
# Invoke a REST API as a part of your pipeline.
- task: InvokeRESTAPI@1
  inputs:
    #connectionType: 'connectedServiceName' # Options: connectedServiceName, connectedServiceNameARM
    #serviceConnection: # Required when connectionType == ConnectedServiceName
    #azureServiceConnection: # Required when connectionType == ConnectedServiceNameARM
    #method: 'POST' # Options: OPTIONS, GET, HEAD, POST, PUT, DELETE, TRACE, PATCH
    #headers: '{"Content-Type": "application/json", "PlanUrl": "$(system.CollectionUri)", "ProjectId": "$(system.TeamProjectId)", "HubName": "$(system.HostType)", "PlanId": "$(system.PlanId)", "JobId": "$(system.JobId)", "TimelineId": "$(system.TimelineId)", "TaskInstanceId": "$(system.TaskInstanceId)", "AuthToken": "$(system.AccessToken)"}' 
    #body: # Required when method != GET && Method != HEAD
    #urlSuffix: # Optional
    #waitForCompletion: 'false' # Options: true, false
    #successCriteria: # Optional
```
