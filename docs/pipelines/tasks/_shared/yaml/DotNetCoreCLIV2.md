```YAML
# .NET Core
# Build, test, package, or publish a dotnet application, or run a custom dotnet command. For package commands, supports NuGet.org and authenticated feeds like Package Management and MyGet.
- task: DotNetCoreCLI@2
  inputs:
    #command: 'build' # Options: build, push, pack, publish, restore, run, test, custom
    #selectOrConfig: 'select' # Options: select, config
    #versioningScheme: 'off' # Options: off, byPrereleaseNumber, byEnvVar, byBuildNumber
    #arguments: # Optional
    #projects: # Optional
    #noCache: false # Optional
    #packagesDirectory: # Optional
    #buildProperties: # Optional
    #verbosityPack: 'detailed' #Optional # Options: -, quiet, minimal, normal, detailed, diagnostic
    #verbosityRestore: 'detailed' # Optional# Options: -, quiet, minimal, normal, detailed, diagnostic
    #workingDirectory: # Optional
    #searchPatternPush: '$(Build.ArtifactStagingDirectory)/*.nupkg' # Required when command == push
    #nuGetFeedType: 'internal' # Required when command == push # Options: internal, external
    #feedPublish: # Required when command == push && nuGetFeedType == internal
    #publishPackageMetadata: true # Optional # Available when command == push && nuGetFeedType == internal
    #externalEndpoint: # Required when command == push && nuGetFeedType == external
    #searchPatternPack: '**/*.csproj' # Required when command == pack
    #configurationToPack: '$(BuildConfiguration)' # Optional # Available when command == pack
    #outputDir: '$(Build.ArtifactStagingDirectory)' # Optional # Available when command == pack
    #nobuild: false # Optional # Available when command == pack
    #includesymbols: false # Optional # Available when command == pack
    #includesource: false # Optional # Available when command == pack
    #publishWebProjects: true # Required when command == publish
    #zipAfterPublish: true # Optional # Available when command == publish
    #modifyOutputPath: true # Optional # Available when command == publish
    #publishTestResults: true # Optional # Available when command == test
    #testRunTitle: # Optional # Available when command == test
    #custom: # Required when command == custom
    #feedRestore: # Optional # Available when selectOrConfig == select
    #includeNuGetOrg: true # Optional when selectOrConfig == select
    #nugetConfigPath: # Required when selectOrConfig == config
    #externalEndpoints: # Optional # Available when selectOrConfig == config
    #versionEnvVar: # Required when versioningScheme == byEnvVar
    #requestedMajorVersion: '1' # Required when versioningScheme == byPrereleaseNumber
    #requestedMinorVersion: '0' # Required when versioningScheme == byPrereleaseNumber
    #requestedPatchVersion: '0' # Required when versioningScheme == byPrereleaseNumber
```
