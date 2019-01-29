```YAML
# Query Azure Monitor Alerts
# Observe the configured Azure monitor rules for active alerts.
- task: AzureMonitor@1
  inputs:
    connectedServiceNameARM: 
    resourceGroupName: 
    #filterType: 'none' # Options: resource, alertrule, none
    #resource: # Required when filterType == Resource
    #alertRule: # Required when filterType == Alertrule
    #severity: 'Sev0,Sev1,Sev2,Sev3,Sev4' # Optional. Options: sev0, sev1, sev2, sev3, sev4
    #timeRange: '1h' # Optional. Options: 1h, 1d, 7d, 30d
    #alertState: 'Acknowledged,New' # Optional. Options: new, acknowledged, closed
    #monitorCondition: 'Fired' # Optional. Options: fired , resolved
```
