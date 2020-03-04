---
ms.topic: include
author: vtbassmatt
ms.author: macoope
ms.date: 12/07/2018
---

```YAML
# Extract files
# Extract a variety of archive and compression files such as .7z, .rar, .tar.gz, and .zip
- task: ExtractFiles@1
  inputs:
    #archiveFilePatterns: '*.zip' 
    destinationFolder: 
    #cleanDestinationFolder: true 
```
