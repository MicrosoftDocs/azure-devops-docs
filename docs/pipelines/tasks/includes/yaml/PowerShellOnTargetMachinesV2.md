```YAML
# PowerShell on Target Machines
# Execute PowerShell scripts on remote machine(s)
- task: PowerShellOnTargetMachines@2
  inputs:
    environmentName: 
    #adminUserName: # Optional
    #adminPassword: # Optional
    #protocol: # Optional. Options: http, https
    #testCertificate: true # Optional
    scriptPath: 
    #scriptArguments: # Optional
    #initializationScriptPath: # Optional
    #sessionVariables: # Optional
    #runPowershellInParallel: true # Optional
    #resourceFilteringMethod: 'machineNames' # Optional. Options: machineNames, tags
    #machineNames: # Optional
```
