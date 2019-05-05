```YAML
# Visual Studio Test Agent Deployment
# Deprecated: This task and it’s companion task (Run Functional Tests) are deprecated. Use the 'Visual Studio Test' task instead. The VSTest task can run unit as well as functional tests. Run tests on one or more agents using the multi-agent job setting. Use the 'Visual Studio Test Platform' task to run tests without needing Visual Studio on the agent. VSTest task also brings new capabilities such as automatically rerunning failed tests.
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
