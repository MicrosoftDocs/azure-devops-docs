## YAML snippet

```YAML
# Cloud-based Web Performance Test
# Runs a quick web performance test in the cloud with Visual Studio Team Services
- task: QuickPerfTest@1
  inputs:
    #connectedServiceName: # Optional
    websiteUrl: 
    testName: 
    #vuLoad: '25' # Options: 25, 50, 100, 250
    #runDuration: '60' # Options: 60, 120, 180, 240, 300
    #geoLocation: 'Default' # Optional. Options: default, east US, east US 2, central US, west US, north Central US, south Central US, north Europe, west Europe, southeast Asia, east Asia, japan East, japan West, brazil South, australia East, australia Southeast
    #machineType: '0' # Options: 0, 2
    #resourceGroupName: # Optional
    #numOfSelfProvisionedAgents: # Optional
    #avgResponseTimeThreshold: '0' # Optional
```
