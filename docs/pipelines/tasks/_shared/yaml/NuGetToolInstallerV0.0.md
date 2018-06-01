## YAML snippet

```YAML
# NuGet Tool Installer
# Acquires a specific version of NuGet from the internet or the tools cache and adds it to the PATH. Use this step to change the version of NuGet used in the NuGet steps.
- task: NuGetToolInstaller@0
  inputs:
    #versionSpec: '4.3.0' 
    #checkLatest: false # Optional
```
