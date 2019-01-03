```YAML
# GitHub Release
# Create, edit, or discard a GitHub release.
- task: GithubRelease@0
  inputs:
    gitHubConnection: 
    repositoryName: 
    #action: 'create' # Options: create, edit, discard
    #target: '$(build.sourceVersion)' # Required when action == create || action == edit
    #tagSource: 'auto' # Required when action == create. Options: auto, manual
    #tag: # Required when action == edit || action == discard || tagSource == manual
    #title: # Optional
    #releaseNotesSource: 'file' # Optional. Options: file, input
    #releaseNotesFile: # Optional
    #releaseNotes: # Optional
    #assets: '$(build.artifactStagingDirectory)/*' # Optional
    #assetUploadMode: 'delete' # Optional. Options: delete, replace
    #isDraft: false # Optional
    #isPreRelease: false # Optional
    #addChangeLog: true # Optional
```
