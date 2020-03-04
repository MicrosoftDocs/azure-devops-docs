---
ms.topic: include
author: vtbassmatt
ms.author: macoope
ms.date: 02/18/2020
---

```YAML
# Batch script
# Run a Windows command or batch script and optionally allow it to change the environment
- task: BatchScript@1
  inputs:
    filename: 
    #arguments: # Optional
    #modifyEnvironment: False # Optional
    #workingFolder: # Optional
    #failOnStandardError: false # Optional
```
