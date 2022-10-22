---
ms.topic: include
author: vijayma
ms.author: vijayma
ms.date: 10/07/2019
ms.subservice: azure-devops-pipelines-tasks
---

```YAML
# App Center distribute
# Distribute app builds to testers and users via Visual Studio App Center
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
    #isMandatory: false # Optional
    #distributionGroupId: # Optional
```
