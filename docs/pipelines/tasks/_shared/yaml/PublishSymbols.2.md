## YAML snippet

```YAML
# Index Sources & Publish Symbols
# Index your source code and publish symbols to a file share or Visual Studio Team Services Symbol Server
- task: PublishSymbols@2
  inputs:
    #symbolsFolder: '$(Build.SourcesDirectory)' # Optional
    #searchPattern: '**/bin/**/*.pdb' 
    #indexSources: true # Optional
    #publishSymbols: true # Optional
    #symbolServerType: ' ' # Required when publishSymbols == True# Options:  , teamServices, fileShare
    #symbolsPath: # Optional
    #detailedLog: true # Optional
    #treatNotIndexedAsWarning: false # Optional
    #symbolsMaximumWaitTime: # Optional
    #symbolsProduct: # Optional
    #symbolsVersion: # Optional
    #symbolsArtifactName: 'Symbols_$(BuildConfiguration)' # Optional
```
