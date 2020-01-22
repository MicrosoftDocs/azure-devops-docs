```YAML
# Use dotnet
# Acquires a specific version of the .NET Core SDK from the internet or the local cache and adds it to the PATH. Use this task to change the version of .NET Core used in subsequent tasks. Additionally provides proxy support.
- task: UseDotNet@2
  inputs:
    #packageType: 'sdk' # Optional. Options: runtime, sdk
    #version: # Optional
    #includePreviewVersions: false # Optional
    #installationPath: '$(Agent.ToolsDirectory)/dotnet' # Optional
    #performMultiLevelLookup: # Optional
```
