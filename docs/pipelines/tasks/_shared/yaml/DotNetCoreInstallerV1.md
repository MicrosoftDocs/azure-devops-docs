```YAML
# .NET Core SDK/Runtime Installer
# Acquires a version of the .NET Core SDK/Runtime from the internet or the local cache and adds it to the PATH. Use this task to change the version of .NET Core used in subsequent tasks.
- task: DotNetCoreInstaller@1
  inputs:
    #packageType: 'sdk' # Options: runtime, sdk
    #version: '2.2.x' 
    #includePreviewVersions: false # Optional
    #installationPath: '$(Agent.ToolsDirectory)/dotnet' # Optional
    #restrictMultiLevelLookup: true # Optional
```
