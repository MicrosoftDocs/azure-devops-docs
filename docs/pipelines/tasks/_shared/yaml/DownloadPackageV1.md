```YAML
# Download package
# Download a package from a package management feed in Azure Artifacts
- task: DownloadPackage@1
  inputs:
    #packageType: 'nuget' # Options: maven, npm, nuget, pypi, upack
    feed: # <feedId> for regular feeds, <projectId>/<feedId> for public feeds.
    #view: ' ' # Optional
    definition: 
    version: 
    #files: '**' # Optional
    #extract: true # Optional
    #downloadPath: '$(System.ArtifactsDirectory)' 
```
