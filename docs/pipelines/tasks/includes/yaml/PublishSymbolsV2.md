---
ms.topic: include
author: shashban
ms.author: shashban
ms.date: 12/17/2019
ms.prod: devops
ms.technology: devops-cicd-tasks
---

```YAML
# Index sources and publish symbols
# Index your source code and publish symbols to a file share or Azure Artifacts symbol server
- task: PublishSymbols@2
  inputs:
    #symbolsFolder: '$(Build.SourcesDirectory)' # Optional
    #searchPattern: '**/bin/**/*.pdb' 
    #indexSources: true # Optional
    #publishSymbols: true # Optional
    #symbolServerType: ' ' # Required when publishSymbols == True# Options:  , teamServices, fileShare
    #symbolsPath: # Optional
    #compressSymbols: false # Required when symbolServerType == FileShare
    #detailedLog: true # Optional
    #treatNotIndexedAsWarning: false # Optional
    #symbolsMaximumWaitTime: # Optional
    #symbolsProduct: # Optional
    #symbolsVersion: # Optional
    #symbolsArtifactName: 'Symbols_$(BuildConfiguration)' # Optional
```
