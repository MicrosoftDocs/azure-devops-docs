```YAML
# Download pipeline artifacts
# Download build and pipeline artifacts
- task: DownloadPipelineArtifact@2
  inputs:
    #source: 'current' # Options: current, specific
    #project: # Required when buildType == Specific
    #pipeline: # Required when buildType == Specific
    #preferTriggeringPipeline: false # Optional
    #runVersion: 'latest' # Required when buildType == Specific# Options: latest, latestFromBranch, specific
    #runBranch: 'refs/heads/master' # Required when buildType == Specific && RunVersion == LatestFromBranch
    #runId: # Required when buildType == Specific && RunVersion == Specific
    #tags: # Optional
    #artifact: # Optional
    #patterns: '**' # Optional
    #path: '$(Pipeline.Workspace)' 
```
