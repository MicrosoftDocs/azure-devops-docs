---
ms.topic: include
author: vtbassmatt
ms.author: macoope
ms.date: 5/7/2018
---

```YAML
# PyPI publisher
# Create and upload an sdist or wheel to a PyPI-compatible index using Twine
- task: PyPIPublisher@0
  inputs:
    pypiConnection: 
    packageDirectory: 
    #alsoPublishWheel: false # Optional
```
