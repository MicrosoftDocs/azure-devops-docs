---
ms.topic: include
author: RoopeshNair
ms.author: ronai
ms.date: 12/17/2019
ms.prod: devops
ms.technology: devops-cicd-tasks
---

```YAML
# Jenkins queue job
# Queue a job on a Jenkins server
- task: JenkinsQueueJob@2
  inputs:
    serverEndpoint: 
    jobName: 
    #isMultibranchJob: # Optional
    #multibranchPipelineBranch: # Required when isMultibranchJob == True
    #captureConsole: true 
    #capturePipeline: true # Required when captureConsole == True
    isParameterizedJob: 
    #jobParameters: # Optional
    #retryCount: #Optional
    #delayBetweenRetries: #Optional
```
