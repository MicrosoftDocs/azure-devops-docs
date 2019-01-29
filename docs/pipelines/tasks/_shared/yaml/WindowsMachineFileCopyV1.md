```YAML
# Windows Machine File Copy
# Copy files to remote machine(s)
- task: WindowsMachineFileCopy@1
  inputs:
    sourcePath: 
    #environmentName: # Optional
    #adminUserName: # Optional
    #adminPassword: # Optional
    targetPath: 
    #cleanTargetBeforeCopy: false # Optional
    #copyFilesInParallel: true # Optional
    #additionalArguments: # Optional
    #resourceFilteringMethod: 'machineNames' # Optional. Options: machineNames, tags
    #machineNames: # Optional
```
