```YAML
# .NET Core sdk/runtime installer
# Acquire a specific version of the .NET Core SDK from the internet or local cache and add it to the PATH
- task: DotNetCoreInstaller@1
  inputs:
    #packageType: 'sdk' # Options: runtime, sdk
    #version: '2.2.x' 
    #includePreviewVersions: false # Optional
    #installationPath: '$(Agent.ToolsDirectory)/dotnet' # Optional
    #performMultiLevelLookup: # Optional
```
