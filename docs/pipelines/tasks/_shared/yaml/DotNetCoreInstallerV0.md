```YAML
# .NET Core SDK/Runtime Installer
# Acquires a specific version of the .NET Core SDK from the internet or the local cache and adds it to the PATH. Use this task to change the version of .NET Core used in subsequent tasks.
- task: DotNetCoreInstaller@0
  inputs:
    #packageType: 'sdk' # Options: runtime, sdk
    #version: '1.0.4' 
```
