```YAML
# Download pipeline artifact
# Download a named artifact from a pipeline to a local path
- task: DownloadPipelineArtifact@1
  inputs:
    #buildType: 'current' # Options: current, specific
    #project: # The name of the project. Required when buildType == Specific
    #pipeline: # The definitionId of the pipeline. Required when buildType == Specific.
    #specificBuildWithTriggering: false # Optional
    #buildVersionToDownload: 'latest' # Required when buildType == Specific# Options: latest, latestFromBranch, specific
    #branchName: 'refs/heads/master' # Required when buildType == Specific && BuildVersionToDownload == LatestFromBranch
    #pipelineId: # Required when buildType == Specific && BuildVersionToDownload == Specific
    #tags: # Optional
    #artifactName: # Optional
    #itemPattern: '**' # Optional
    #targetPath: '$(System.ArtifactsDirectory)' 
```
