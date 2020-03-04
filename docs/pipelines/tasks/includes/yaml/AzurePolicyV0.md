---
ms.topic: include
author: RoopeshNair
ms.author: ronai
ms.date: 03/12/2019
---

```YAML
# Check Azure Policy compliance
# Security and compliance assessment for Azure Policy
- task: AzurePolicyCheckGate@0
  inputs:
    azureSubscription: 
    #resourceGroupName: # Optional
    #resources: # Optional
```
