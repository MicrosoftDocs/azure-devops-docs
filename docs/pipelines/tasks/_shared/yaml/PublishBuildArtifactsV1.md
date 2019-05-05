```YAML
# Publish Build Artifacts
# Publish build artifacts to Azure Pipelines/TFS or a file share
- task: PublishBuildArtifacts@1
  inputs:
    #pathtoPublish: '$(Build.ArtifactStagingDirectory)' 
    #artifactName: 'drop' 
    #publishLocation: 'Container' # Options: container, filePath
    #targetPath: # Required when publishLocation == FilePath
    #parallel: false # Optional
    #parallelCount: # Optional
```
