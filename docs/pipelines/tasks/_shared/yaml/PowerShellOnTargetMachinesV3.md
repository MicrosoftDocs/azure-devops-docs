```YAML
# PowerShell on Target Machines
# Execute PowerShell scripts on remote machine(s). This version of the task uses PSSession and Invoke-Command for remoting.
- task: PowerShellOnTargetMachines@3
  inputs:
    machines: 
    #userName: # Optional
    #userPassword: # Optional
    #scriptType: 'Inline' # Optional. Options: filePath, inline
    #scriptPath: # Required when scriptType == FilePath
    #inlineScript: '# Write your powershell commands here.Write-Output Hello World' # Required when scriptType == Inline
    #scriptArguments: # Optional
    #initializationScript: # Optional
    #sessionVariables: # Optional
    #communicationProtocol: 'Https' # Optional. Options: http, https
    #authenticationMechanism: 'Default' # Optional. Options: default, credssp
    #newPsSessionOptionArguments: '-SkipCACheck -IdleTimeout 7200000 -OperationTimeout 0 -OutputBufferingMode Block' # Optional
    #errorActionPreference: 'stop' # Optional. Options: stop, continue, silentlyContinue
    #failOnStderr: false # Optional
    #ignoreLASTEXITCODE: false # Optional
    #workingDirectory: # Optional
    #runPowershellInParallel: true # Optional
```
