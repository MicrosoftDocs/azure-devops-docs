```YAML
# Download artifacts from file share
# Download artifacts from a file share, like \\share\drop
- task: DownloadFileshareArtifacts@1
  inputs:
    filesharePath: 
    artifactName: 
    #itemPattern: '**' # Optional
    #downloadPath: '$(System.ArtifactsDirectory)' 
    #parallelizationLimit: '8' # Optional
```
