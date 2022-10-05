---
ms.topic: include
author: shashban
ms.author: shashban
ms.date: 06/17/2022
ms.subservice: azure-devops-pipelines-tasks
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
    #symbolServerType: ' ' # Required when publishSymbols == True # Options:  , teamServices, fileShare
    #symbolsPath: The file share that hosts your symbols. # Optional
    #compressSymbols: false # Required when symbolServerType == FileShare
    #SymbolExpirationInDays: The number of days that symbols should be retained. # Required when PublishSymbols = true && SymbolServerType = TeamServices. Default: 36530
    #IndexableFileFormats: Which debug formats to publish to the symbol server. # Options: Default, Pdb, SourceMap, All. # Required when PublishSymbols = true && SymbolServerType = TeamServices. Default: Default
    #detailedLog: true # Optional
    #treatNotIndexedAsWarning: false # Optional
    #useNetCoreClientTool: false # Optional
    #symbolsMaximumWaitTime: # Optional
    #symbolsProduct: # Optional
    #symbolsVersion: # Optional
    #symbolsArtifactName: 'Symbols_$(BuildConfiguration)' # Optional
```
