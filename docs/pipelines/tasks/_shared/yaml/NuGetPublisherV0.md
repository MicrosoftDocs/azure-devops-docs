```YAML
# NuGet Publisher
# Deprecated: use the “NuGet” task instead. It works with the new Tool Installer framework so you can easily use new versions of NuGet without waiting for a task update, provides better support for authenticated feeds outside this organization/collection, and uses NuGet 4 by default.
- task: NuGetPublisher@0
  inputs:
    #searchPattern: '**/*.nupkg;-:**/packages/**/*.nupkg;-:**/*.symbols.nupkg' 
    #nuGetFeedType: 'external' # Options: external, internal
    #connectedServiceName: # Required when nuGetFeedType == External
    #feedName: # Required when nuGetFeedType == Internal
    #nuGetAdditionalArgs: # Optional
    #verbosity: '-' # Options: -, quiet, normal, detailed
    #nuGetVersion: '3.3.0' # Options: 3.3.0, 3.5.0.1829, 4.0.0.2283, custom
    #nuGetPath: # Optional
    #continueOnEmptyNupkgMatch: # Optional
```
