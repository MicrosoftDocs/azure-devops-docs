```YAML
# Download GitHub Releases
# Downloads a GitHub Release from a repository.
- task: DownloadGitHubReleases@0
  inputs:
    connection: 
    userRepository: 
    #defaultVersionType: 'latest' # Options: latest, specificVersion, specificTag
    #version: # Required when defaultVersionType != Latest
    #itemPattern: '**' # Optional
    #downloadPath: '$(System.ArtifactsDirectory)' 
```
