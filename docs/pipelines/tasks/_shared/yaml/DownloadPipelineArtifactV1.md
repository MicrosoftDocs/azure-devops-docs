```YAML
# Download Pipeline Artifact
# Download Pipeline Artifact
- task: DownloadPipelineArtifact@1
  inputs:
    #buildType: 'current' # Options: current, specific
    #project: # Required when buildType == Specific
    #pipeline: # Required when buildType == Specific
    #specificBuildWithTriggering: false # Optional
    #buildVersionToDownload: 'latest' # Required when buildType == Specific. Options: latest, latestFromBranch, specific
    #branchName: 'refs/heads/master' # Required when buildType == Specific && BuildVersionToDownload == LatestFromBranch
    #buildId: # Required when buildType == Specific && BuildVersionToDownload == Specific
    #tags: # Optional
    #artifactName: # Optional
    #itemPattern: '**' # Optional
    #downloadPath: '$(System.ArtifactsDirectory)' 
```
