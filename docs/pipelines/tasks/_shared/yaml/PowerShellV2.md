```YAML
# PowerShell
# Run a PowerShell script on Windows, macOS, or Linux.
- task: PowerShell@2
  inputs:
    #targetType: # 'filePath' or 'inline'; defaults to filePath
    #filePath: # required when targetType == FilePath
    #arguments: # optional arguments passed to PowerShell
    #script: # required when targetType == Inline; actual contents of the script
    #errorActionPreference: # options: stop, continue, silentlyContinue; defaults to 'stop'
    #failOnStderr: # optional, defaults to false
    #ignoreLASTEXITCODE: # optional, defaults to false
    #pwsh: # optional, always use PowerShell Core (even on Windows); defaults to false
    #workingDirectory: # optional, initial working directory
```
