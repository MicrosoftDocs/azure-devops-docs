```YAML
# Download Package
# Download a package from a Package Management feed in Azure Artifacts or TFS.  Requires the Package Management extension.
- task: DownloadPackage@1
  inputs:
    #packageType: 'NuGet' # Options: maven, npm, nuget, pypi
    feed: 
    #view: ' ' # Optional
    definition: 
    version: 
    #files: '*' # Optional
    #extract: true # Optional
    #downloadPath: '$(System.ArtifactsDirectory)' 
```
