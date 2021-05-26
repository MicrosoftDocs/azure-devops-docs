---
ms.topic: include
author: vijayma
ms.author: vijayma
ms.date: 12/23/2019
ms.prod: devops
ms.technology: devops-cicd-tasks
---

```YAML
# Xcode
# Build, test, or archive an Xcode workspace on macOS. Optionally package an app.
- task: Xcode@5
  inputs:
    #actions: 'build' 
    #configuration: '$(Configuration)' # Optional
    #sdk: '$(SDK)' # Optional
    #xcWorkspacePath: '**/*.xcodeproj/project.xcworkspace' # Optional
    #scheme: # Optional
    #xcodeVersion: 'default' # Optional. Options: 8, 9, 10, default, specifyPath
    #xcodeDeveloperDir: # Optional
    packageApp: 
    #archivePath: # Optional
    #exportPath: 'output/$(SDK)/$(Configuration)' # Optional
    #exportOptions: 'auto' # Optional. Options: auto, plist, specify
    #exportMethod: 'development' # Required when exportOptions == Specify
    #exportTeamId: # Optional
    #exportOptionsPlist: # Required when exportOptions == Plist
    #exportArgs: # Optional
    #signingOption: 'nosign' # Optional. Options: nosign, default, manual, auto
    #signingIdentity: # Optional
    #provisioningProfileUuid: # Optional
    #provisioningProfileName: # Optional
    #teamId: # Optional
    #destinationPlatformOption: 'default' # Optional. Options: default, iOS, tvOS, macOS, custom
    #destinationPlatform: # Optional
    #destinationTypeOption: 'simulators' # Optional. Options: simulators, devices
    #destinationSimulators: 'iPhone 8' # Optional. Default value: iPhone8 for Xcode 11 and iPhone 7 for other iOS projects; Apple TV for tvOS projects.
    #destinationDevices: # Optional
    #args: # Optional
    #workingDirectory: # Optional
    #useXcpretty: true # Optional
    #publishJUnitResults: # Optional
```
