---
ms.topic: include
author: RoopeshNair
ms.author: ronai
ms.date: 08/20/2019
ms.prod: devops
ms.technology: devops-cicd-tasks
---

```YAML
# Update Service Fabric manifests
# Automatically update portions of application and service manifests in a packaged Azure Service Fabric application
- task: ServiceFabricUpdateManifests@2
  inputs:
    #updateType: 'Manifest versions' # Options: manifest Versions, docker Image Settings
    applicationPackagePath: 
    #versionSuffix: '.$(Build.BuildNumber)' # Required when updateType == Manifest Versions
    #versionBehavior: 'Append' # Optional. Options: append, replace
    #updateOnlyChanged: false # Required when updateType == Manifest Versions
    #pkgArtifactName: # Required when updateType == Manifest versions && updateOnlyChanged == true
    #logAllChanges: true # Optional
    #compareType: 'LastSuccessful' # Optional. Options: lastSuccessful, specific
    #buildNumber: # Optional
    #overwriteExistingPkgArtifact: true # Optional
    #imageNamesPath: # Optional
    #imageDigestsPath: # Required when updateType == Docker Image Settings
```
