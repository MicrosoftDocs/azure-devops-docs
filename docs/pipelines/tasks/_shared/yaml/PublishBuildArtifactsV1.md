```YAML
# Publish build artifacts
# Publish build artifacts to Azure Pipelines or a Windows file share
- task: PublishBuildArtifacts@1
  inputs:
    #pathtoPublish: '$(Build.ArtifactStagingDirectory)' 
    #artifactName: 'drop' 
    #publishLocation: 'Container' # Options: container, filePath
    #targetPath: # Required when publishLocation == FilePath
    #parallel: false # Optional
    #parallelCount: # Optional
```
