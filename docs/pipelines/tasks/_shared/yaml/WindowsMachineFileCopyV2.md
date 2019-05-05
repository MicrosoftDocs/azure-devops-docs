```YAML
# Windows Machine File Copy
# Copy files to remote machine(s)
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
