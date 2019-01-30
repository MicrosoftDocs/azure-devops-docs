```YAML
# Universal Packages
# Download or publish Universal Packages.
- task: UniversalPackages@0
  inputs:
    #command: 'download' # Options: download, publish
    #downloadDirectory: '$(System.DefaultWorkingDirectory)' # Required when command == Download
    #feedsToUse: 'internal' # Options: internal, external
    #externalFeedCredentials: # Optional
    #vstsFeed: # Required when feedsToUse == Internal
    #vstsFeedPackage: # Required when feedsToUse == Internal
    #vstsPackageVersion: # Required when feedsToUse == Internal
    #feedDownloadExternal: # Required when feedsToUse == External
    #packageDownloadExternal: # Required when feedsToUse == External
    #versionDownloadExternal: # Required when feedsToUse == External
    #publishDirectory: '$(Build.ArtifactStagingDirectory)' # Required when command == Publish
    #feedsToUsePublish: 'internal' # Options: internal, external
    #publishFeedCredentials: # Required when feedsToUsePublish == External
    #vstsFeedPublish: # Required when feedsToUsePublish == Internal
    #publishPackageMetadata: true # Optional
    #vstsFeedPackagePublish: # Required when feedsToUsePublish == Internal
    #feedPublishExternal: # Required when feedsToUsePublish == External
    #packagePublishExternal: # Required when feedsToUsePublish == External
    #versionOption: 'patch' # Options: major, minor, patch, custom
    #versionPublish: # Required when versionOption == Custom
    packagePublishDescription: 
    #verbosity: 'None' # Options: none, trace, debug, information, warning, error, critical
    #publishedPackageVar: # Optional
```
