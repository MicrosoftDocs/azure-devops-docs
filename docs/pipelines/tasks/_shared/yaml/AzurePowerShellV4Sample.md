```YAML
- task: AzurePowerShell@4
  inputs:
    azureSubscription: my-arm-service-connection
    scriptType: filePath
    scriptPath: $(Build.SourcesDirectory)\myscript.ps1
    scriptArguments:
      -Arg1 val1 `
      -Arg2 val2 `
      -Arg3 val3
    azurePowerShellVersion: latestVersion
```
