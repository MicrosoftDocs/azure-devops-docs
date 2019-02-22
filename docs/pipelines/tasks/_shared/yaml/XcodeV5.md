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
    #destinationSimulators: 'iPhone 7' # Optional
    #destinationDevices: # Optional
    #args: # Optional
    #workingDirectory: # Optional
    #useXcpretty: true # Optional
    #publishJUnitResults: # Optional
```
