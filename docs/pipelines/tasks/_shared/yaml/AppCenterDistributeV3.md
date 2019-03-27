```YAML
# App Center Distribute
# Distribute app builds to testers and users via App Center
- task: AppCenterDistribute@3
  inputs:
    serverEndpoint: 
    appSlug: 
    appFile: 
    #symbolsOption: 'Apple' # Optional. Options: apple
    #symbolsPath: # Optional
    #symbolsPdbFiles: '**/*.pdb' # Optional
    #symbolsDsymFiles: # Optional
    #symbolsMappingTxtFile: # Optional
    #symbolsIncludeParentDirectory: # Optional
    #releaseNotesOption: 'input' # Options: input, file
    #releaseNotesInput: # Required when releaseNotesOption == Input
    #releaseNotesFile: # Required when releaseNotesOption == File
    #isMandatory: false # Optional
    #destinationType: 'groups' # Options: groups, store
    #distributionGroupId: # Optional
    #destinationStoreId: # Required when destinationType == Store
    #isSilent: # Optional
```
