```YAML
# NuGet
# Restore, pack, or push NuGet packages, or run a NuGet command. Supports NuGet.org and authenticated feeds like Package Management and MyGet. Uses NuGet.exe and works with .NET Framework apps. For .NET Core and .NET Standard apps, use the .NET Core task.
- task: NuGetCommand@2
  inputs:
    #command: 'restore' # Options: restore, pack, push, custom
    #restoreSolution: '**/*.sln' # Required when command == Restore
    #feedsToUse: 'select' # Options: select, config
    #vstsFeed: # Required when feedsToUse == Select
    #includeNuGetOrg: true # Required when feedsToUse == Select
    #nugetConfigPath: # Required when feedsToUse == Config
    #externalFeedCredentials: # Optional
    #noCache: false 
    #disableParallelProcessing: false 
    restoreDirectory: 
    #verbosityRestore: 'Detailed' # Options: quiet, normal, detailed
    #packagesToPush: '$(Build.ArtifactStagingDirectory)/**/*.nupkg;!$(Build.ArtifactStagingDirectory)/**/*.symbols.nupkg' # Required when command == Push
    #nuGetFeedType: 'internal' # Required when command == Push# Options: internal, external
    #publishVstsFeed: # Required when command == Push && NuGetFeedType == Internal
    #publishPackageMetadata: true # Optional
    #allowPackageConflicts: # Optional
    #publishFeedCredentials: # Required when command == Push && NuGetFeedType == External
    #verbosityPush: 'Detailed' # Options: quiet, normal, detailed
    #packagesToPack: '**/*.csproj' # Required when command == Pack
    #configuration: '$(BuildConfiguration)' # Optional
    #packDestination: '$(Build.ArtifactStagingDirectory)' # Optional
    #versioningScheme: 'off' # Options: off, byPrereleaseNumber, byEnvVar, byBuildNumber
    #includeReferencedProjects: false # Optional
    #versionEnvVar: # Required when versioningScheme == ByEnvVar
    #majorVersion: '1' # Required when versioningScheme == ByPrereleaseNumber
    #minorVersion: '0' # Required when versioningScheme == ByPrereleaseNumber
    #patchVersion: '0' # Required when versioningScheme == ByPrereleaseNumber
    #packTimezone: 'utc' # Required when versioningScheme == ByPrereleaseNumber# Options: utc, local
    #includeSymbols: false # Optional
    #toolPackage: # Optional
    #buildProperties: # Optional
    #basePath: # Optional
    #verbosityPack: 'Detailed' # Options: quiet, normal, detailed
    #arguments: # Required when command == Custom
```
