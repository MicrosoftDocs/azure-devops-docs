---
ms.topic: include
author: shashban
ms.author: shashban
ms.date: 06/27/2019
ms.prod: devops
ms.technology: devops-cicd-tasks
---

```YAML
# Publish Test Results
# Publish test results to Azure Pipelines
- task: PublishTestResults@2
  inputs:
    #testResultsFormat: 'JUnit' # Options: JUnit, NUnit, VSTest, xUnit, cTest
    #testResultsFiles: '**/TEST-*.xml' 
    #searchFolder: '$(System.DefaultWorkingDirectory)' # Optional
    #mergeTestResults: false # Optional
    #failTaskOnFailedTests: false # Optional
    #testRunTitle: # Optional
    #buildPlatform: # Optional
    #buildConfiguration: # Optional
    #publishRunAttachments: true # Optional
```
