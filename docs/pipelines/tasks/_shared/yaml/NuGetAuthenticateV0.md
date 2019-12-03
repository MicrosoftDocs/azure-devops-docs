```YAML
# Authenticate nuget.exe, dotnet, and MSBuild with Azure Artifacts and optionally other repositories
- task: NuGetAuthenticate@0
  #inputs:
    #nuGetServiceConnections: MyOtherOrganizationFeed, MyExternalPackageRepository # Optional
    #forceReinstallCredentialProvider: false # Optional
```
