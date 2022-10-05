---
ms.topic: include
author: ashokirla
ms.author: ashkir
ms.date: 10/27/2021
ms.subservice: azure-devops-pipelines-tasks
---

```YAML
# GitHub Release
# Create, edit, or delete a GitHub release
- task: GitHubRelease@0
  inputs:
    gitHubConnection: 
    #repositoryName: '$(Build.Repository.Name)' 
    #action: 'create' # Options: create, edit, delete
    #target: '$(Build.SourceVersion)' # Required when action == Create || Action == Edit
    #tagSource: 'auto' # Required when action == Create# Options: auto, manual
    #tagPattern: # Optional
    #tag: # Required when action == Edit || Action == Delete || TagSource == Manual
    #title: # Optional
    #releaseNotesSource: 'file' # Optional. Options: file, inline
    #releaseNotesInline: Use this option to manually enter release notes. Use with releaseNotesSource = inline
    #releaseNotesFilePath: # Optional. Use the contents of a file as release notes. 
    #releaseNotes: # Optional
    #assets: '$(Build.ArtifactStagingDirectory)/*' # Optional
    #assetUploadMode: 'delete' # Optional. Options: delete, replace
    #isDraft: false # Optional
    #isPreRelease: false # Optional
    #addChangeLog: true # Optional
    #compareWith: 'lastFullRelease' # Required when addChangeLog == True. Options: lastFullRelease, lastRelease, lastReleaseByTag
    #releaseTag: # Required when compareWith == LastReleaseByTag
```
