```YAML
# Publish pipeline artifact
# Publish (upload) a file or directory as a named artifact for the current run
- task: PublishPipelineArtifact@1
  inputs:
    #targetPath: '$(Pipeline.Workspace)' 
    #artifact: # Optional
```
