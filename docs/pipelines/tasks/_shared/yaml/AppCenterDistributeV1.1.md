## YAML snippet

```YAML
# App Center Distribute
# Distribute app builds to testers and users via App Center
- task: AppCenterDistribute@1
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
    #distributionGroupId: # Optional
```
