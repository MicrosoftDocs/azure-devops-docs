---
ms.topic: include
ms.date: 12/07/2018
ms.subservice: azure-devops-pipelines-tasks
---

```YAML
# Extract files
# Extract a variety of archive and compression files such as .7z, .rar, .tar.gz, and .zip
- task: ExtractFiles@1
  inputs:
    #archiveFilePatterns: '**/*.zip' 
    destinationFolder: 
    #cleanDestinationFolder: true 
    #overwriteExistingFiles: false
    #pathToSevenZipTool: 
```
