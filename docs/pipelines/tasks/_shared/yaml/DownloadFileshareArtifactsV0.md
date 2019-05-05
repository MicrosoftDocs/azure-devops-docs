```YAML
# Download Artifacts - Fileshare
# Download artifacts from a file share e.g \\share\drop
- task: DownloadFileshareArtifacts@1
  inputs:
    filesharePath: 
    artifactName: 
    #itemPattern: '**' # Optional
    #downloadPath: '$(System.ArtifactsDirectory)' 
    #parallelizationLimit: '8' # Optional
```
