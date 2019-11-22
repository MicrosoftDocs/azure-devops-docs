```YAML
# Xcode Package iOS
# Generate an .ipa file from Xcode build output using xcrun (Xcode 7 or below)
- task: XcodePackageiOS@0
  inputs:
    #appName: 'name.app' 
    #ipaName: 'name.ipa' 
    provisioningProfile: 
    #sdk: 'iphoneos' 
    #appPath: '$(SDK)/$(Configuration)/build.sym/$(Configuration)-$(SDK)' 
    #ipaPath: '$(SDK)/$(Configuration)/build.sym/$(Configuration)-$(SDK)/output' 
```
