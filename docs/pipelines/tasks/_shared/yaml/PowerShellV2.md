```YAML
# PowerShell
# Run a PowerShell script on Windows, macOS, or Linux.
- task: PowerShell@2
  inputs:
    targetType: # 'filePath' or 'inline'; defaults to 'filePath'
    filePath: # path to script; only valid and required when targetType is filePath
    arguments: # arguments to pass to the script
    script: # inline script body; required when targetType is inline
    errorActionPreference: # stop, continue, or silentlyContinue. Defaults to stop.
    failOnStderr: # optional, defaults to false
    ignoreLASTEXITCODE:  # optional, defaults to false
    workingDirectory: # optional
```
