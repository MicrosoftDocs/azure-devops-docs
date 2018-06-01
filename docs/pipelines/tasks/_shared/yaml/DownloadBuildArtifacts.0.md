## YAML snippet

```YAML
# Download Build Artifacts
# Download Build Artifacts
- task: DownloadBuildArtifacts@0
  inputs:
    #buildType: 'current' # Options: current, specific
    #project: # Required when buildType == Specific
    #definition: # Required when buildType == Specific
    #specificBuildWithTriggering: false # Optional
    #buildVersionToDownload: 'latest' # Required when buildType == Specific# Options: latest, latestFromBranch, specific
    #branchName: 'refs/heads/master' # Required when buildType == Specific && BuildVersionToDownload == LatestFromBranch
    #buildId: # Required when buildType == Specific && BuildVersionToDownload == Specific
    #downloadType: 'single' # Options: single, specific
    #artifactName: # Required when downloadType == Single
    #itemPattern: '**' # Optional
    #downloadPath: '$(System.ArtifactsDirectory)' 
    #parallelizationLimit: '8' # Optional
```
