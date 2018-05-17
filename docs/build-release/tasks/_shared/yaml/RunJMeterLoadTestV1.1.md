## YAML snippet

```YAML
# Cloud-based Apache JMeter Load Test
# Runs the Apache JMeter load test in cloud
- task: ApacheJMeterLoadTest@1
  inputs:
    #connectedServiceName: # Optional
    testDrop: 
    #loadTest: 'jmeter.jmx' 
    #agentCount: '1' # Options: 1, 2, 3, 4, 5
    #runDuration: '60' # Options: 60, 120, 180, 240, 300
    #machineType: '0' # Optional. Options: 0, 2
```
