```YAML
# Download pipeline artifact
# Download build and pipeline artifacts
- task: DownloadPipelineArtifact@2
  inputs:
    #buildType: 'current' # Options: current, specific
    #project: # Required when buildType == Specific
    #definition: # Required when buildType == Specific
    #specificBuildWithTriggering: false # Optional
    #buildVersionToDownload: 'latest' # Required when buildType == Specific# Options: latest, latestFromBranch, specific
    #branchName: 'refs/heads/master' # Required when buildType == Specific && RunVersion == LatestFromBranch
    #pipelineId: # Required when buildType == Specific && RunVersion == Specific
    #tags: # Optional
    #artifactName: # Optional
    #itemPattern: '**' # Optional
    #targetPath: '$(Pipeline.Workspace)' 
```
