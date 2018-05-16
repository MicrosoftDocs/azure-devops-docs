## YAML snippet

```YAML
# PowerShell
# This is an early preview. Run a PowerShell script on Windows, macOS, or Linux.
- task: PowerShell@2
  inputs:
    #targetType: 'filePath' # Optional. Options: filePath, inline
    #filePath: # Required when targetType == FilePath
    #arguments: # Optional
    #script: '# Write your powershell commands here.Write-Host Hello World# Use the environment variables input below to pass secret variables to this script.' # Required when targetType == Inline
    #errorActionPreference: 'stop' # Optional. Options: stop, continue, silentlyContinue
    #failOnStderr: false # Optional
    #ignoreLASTEXITCODE: false # Optional
    #workingDirectory: # Optional
```
