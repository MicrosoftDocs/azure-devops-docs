```YAML
# Visual Studio Test Platform Installer
# Acquires the test platform from nuget.org or the tools cache. Satisfies the ‘vstest’ demand and can be used for running tests and collecting diagnostic data using the Visual Studio Test task.
- task: VisualStudioTestPlatformInstaller@1
  inputs:
    #versionSelector: 'latestPreRelease' # Options: latestPreRelease, specificVersion
    #testPlatformVersion: # Required when versionSelector == SpecificVersion
```
