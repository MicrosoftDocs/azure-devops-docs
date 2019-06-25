```YAML
# Download Pipeline Artifact
- task: DownloadPipelineArtifact@2
  inputs:
    #source: 'current' # Options: current, specific
    #preferTriggeringPipeline: false # Optional
    #tags: # Optional
    #artifact: # Optional
    #patterns: '**' # Optional
    #path: '$(System.ArtifactsDirectory)'
    #project: # Required when source == Specific
    #pipeline: # Required when source == Specific
    #runVersion: 'latest' # Required when source == Specific. Options: latest, latestFromBranch, specific
    #runBranch: 'refs/heads/master' # Required when source == Specific && runVersion == LatestFromBranch
    #runId: # Required when source == Specific && runVersion == Specific
```
