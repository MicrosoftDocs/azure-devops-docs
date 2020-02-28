```YAML
# Delay
# Delay further execution of a workflow by a fixed time
jobs:
- job: RunsOnServer
  pool: Server
  steps:
    - task: Delay@1
      inputs:
        #delayForMinutes: '0' 
```
