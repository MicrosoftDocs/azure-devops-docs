```YAML
# Publish pipeline artifacts
# Publish (upload) a file or directory as a named artifact for the current run
- task: PublishPipelineArtifact@1
  inputs:
    #targetPath: '$(Pipeline.Workspace)' 
    #artifactName: # 'drop'
```
