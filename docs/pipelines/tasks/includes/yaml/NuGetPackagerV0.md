---
ms.topic: include
ms.date: 08/10/2016
author: steved0x
ms.author: sdanie
ms.prod: devops
ms.technology: vs-devops-package
---

```YAML
# NuGet packager
# Deprecated: use the “NuGet” task instead. It works with the new Tool Installer framework so you can easily use new versions of NuGet without waiting for a task update, provides better support for authenticated feeds outside this organization/collection, and uses NuGet 4 by default.
- task: NuGetPackager@0
  inputs:
    #searchPattern: '**\*.csproj' 
    #outputdir: # Optional
    #includeReferencedProjects: false # Optional
    #versionByBuild: 'false' # Options: false, byPrereleaseNumber, byEnvVar, true
    #versionEnvVar: # Required when versionByBuild == ByEnvVar
    #requestedMajorVersion: '1' # Required when versionByBuild == ByPrereleaseNumber
    #requestedMinorVersion: '0' # Required when versionByBuild == ByPrereleaseNumber
    #requestedPatchVersion: '0' # Required when versionByBuild == ByPrereleaseNumber
    #configurationToPack: '$(BuildConfiguration)' # Optional
    #buildProperties: # Optional
    #nuGetAdditionalArgs: # Optional
    #nuGetPath: # Optional
```
