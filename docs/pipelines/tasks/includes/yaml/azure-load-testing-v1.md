---
ms.topic: include
author: ntrogh
ms.author: nicktrog
ms.date: 01/21/2022
ms.subservice: azure-devops-pipelines-tasks
---

```YAML
# Invoke Azure Load Testing
# Run an Apache JMeter test script in Azure Load Testing
- task: AzureLoadTest@1
  inputs:
    azureSubscription:
    resourceGroup:          # Required. Name of resource group that contains an Azure Load Testing resource.
    loadTestResource:       # Required. Name of an existing Azure Load Testing resource.
    loadTestConfigFile:     # Required. Path to the load test YAML configuration file. Relative path from repo root where the load test files are available.
    #secrets:               # Optional. Array of JSON objects that consist of the name and value for each secret. The name should match the secret name used in the Apache JMeter test script.
    #env:                   # Optional. Array of JSON objects that consist of the name and value for each environment variable. The name should match the variable name used in the Apache JMeter test script.
```
