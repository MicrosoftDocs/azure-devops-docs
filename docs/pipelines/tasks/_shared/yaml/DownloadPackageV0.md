```YAML
# Download Package
# Download a package from a Package Management feed in VSTS or TFS.  Requires the Package Management extension.
- task: DownloadPackage@0
  inputs:
    feed: 
    pipeline: 
    version: 
    #downloadPath: '$(System.ArtifactsDirectory)' 
```
