## YAML snippet

```YAML
# Jenkins Queue Job
# Queue a job on a Jenkins server
- task: JenkinsQueueJob@2
  inputs:
    serverEndpoint: 
    jobName: 
    #isMultibranchJob: # Optional
    #multibranchPipelineBranch: # Required when isMultibranchJob == True
    captureConsole: 
    #capturePipeline: # Required when captureConsole == True
    isParameterizedJob: 
    #jobParameters: # Optional
```
