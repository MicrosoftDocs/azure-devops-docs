```YAML
# Visual Studio test agent deployment
# Deprecated: Instead, use the 'Visual Studio Test' task to run unit and functional tests
- task: DeployVisualStudioTestAgent@2
  inputs:
    testMachines: 
    adminUserName: 
    adminPassword: 
    #winRmProtocol: 'Http' # Options: http, https
    #testCertificate: true # Optional
    machineUserName: 
    machinePassword: 
    #runAsProcess: false # Optional
    #isDataCollectionOnly: false # Optional
    #testPlatform: '14.0' # Optional. Options: 15.0, 14.0
    #agentLocation: # Optional
    #updateTestAgent: false # Optional
```
