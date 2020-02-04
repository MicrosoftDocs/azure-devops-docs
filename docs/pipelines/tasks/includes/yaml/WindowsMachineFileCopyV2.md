```YAML
# Windows machine file copy
# Copy files to remote Windows machines
- task: WindowsMachineFileCopy@2
  inputs:
    sourcePath: 
    #machineNames: # Optional
    #adminUserName: # Optional
    #adminPassword: # Optional
    targetPath: 
    #cleanTargetBeforeCopy: false # Optional
    #copyFilesInParallel: true # Optional
    #additionalArguments: # Optional
```
