```YAML
# GitHub Release
# Create, edit, or delete a GitHub release.
- task: GitHubRelease@0
  inputs:
    gitHubConnection: 
    #repositoryName: '$(Build.Repository.Name)' 
    #action: 'create' # Options: create, edit, delete
    #target: '$(Build.SourceVersion)' # Required when action == Create || Action == Edit
    #tagSource: 'auto' # Required when action == Create# Options: auto, manual
    #tag: # Required when action == Edit || Action == Delete || TagSource == Manual
    #title: # Optional
    #releaseNotesSource: 'file' # Optional. Options: file, input
    #releaseNotesFile: # Optional
    #releaseNotes: # Optional
    #assets: '$(Build.ArtifactStagingDirectory)/*' # Optional
    #assetUploadMode: 'delete' # Optional. Options: delete, replace
    #isDraft: false # Optional
    #isPreRelease: false # Optional
    #addChangeLog: true # Optional
```
