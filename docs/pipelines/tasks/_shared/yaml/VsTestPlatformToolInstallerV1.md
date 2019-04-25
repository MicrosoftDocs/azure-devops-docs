```YAML
# Visual Studio Test Platform Installer
# Acquires the test platform from nuget.org or the tools cache. Satisfies the ‘vstest’ demand and can be used for running tests and collecting diagnostic data using the Visual Studio Test task.
- task: VisualStudioTestPlatformInstaller@1
  inputs:
    #packageFeedSelector: 'nugetOrg' # Options: nugetOrg, customFeed, netShare
    #versionSelector: 'latestPreRelease' # Required when packageFeedSelector == NugetOrg || PackageFeedSelector == CustomFeed# Options: latestPreRelease, latestStable, specificVersion
    #testPlatformVersion: # Required when versionSelector == SpecificVersion
    #customFeed: # Required when packageFeedSelector == CustomFeed
    #username: # Optional
    #password: # Optional
    #netShare: # Required when packageFeedSelector == NetShare
```
