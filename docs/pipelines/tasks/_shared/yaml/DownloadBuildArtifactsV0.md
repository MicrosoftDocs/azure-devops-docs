```YAML
# Download build artifacts
# Download files that were saved as artifacts of a completed build
- task: DownloadBuildArtifacts@0
  inputs:
    #buildType: 'current' # Options: current, specific
    #project: # Required when buildType == Specific
    #pipeline: # Required when buildType == Specific
    #specificBuildWithTriggering: false # Optional
    #buildVersionToDownload: 'latest' # Required when buildType == Specific. Options: latest, latestFromBranch, specific
    #allowPartiallySucceededBuilds: false # Optional
    #branchName: 'refs/heads/master' # Required when buildType == Specific && BuildVersionToDownload == LatestFromBranch
    #buildId: # Required when buildType == Specific && BuildVersionToDownload == Specific
    #tags: # Optional
    #downloadType: 'single' # Choose whether to download a single artifact or all artifacts of a specific build. Options: single, specific
    #artifactName: # Required when downloadType == Single
    #itemPattern: '**' # Optional
    #downloadPath: '$(System.ArtifactsDirectory)' 
    #parallelizationLimit: '8' # Optional
```
