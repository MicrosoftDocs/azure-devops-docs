```YAML
# Cloud-based Web Performance Test
# Runs a quick web performance test in the cloud with Azure Pipelines.
- task: QuickPerfTest@1
  inputs:
    #connectedServiceName: # Optional
    websiteUrl: 
    testName: 
    #vuLoad: '25' # Options: 25, 50, 100, 250
    #runDuration: '60' # Options: 60, 120, 180, 240, 300
    #geoLocation: 'Default' # Optional. Options: default, australia East, australia Southeast, brazil South, central India, central US, east Asia, east US 2, east US, japan East, japan West, north Central US, north Europe, south Central US, south India, southeast Asia, west Europe, west US
    #machineType: '0' # Options: 0, 2
    #resourceGroupName: 'default' # Optional
    #numOfSelfProvisionedAgents: # Optional
    #avgResponseTimeThreshold: '0' # Optional
```
