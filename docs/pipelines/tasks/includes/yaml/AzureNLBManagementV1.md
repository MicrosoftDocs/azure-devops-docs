---
ms.topic: include
author: RoopeshNair
ms.author: ronai
ms.date: 02/11/2020
ms.prod: devops
ms.technology: devops-cicd-tasks
---

```YAML
# Azure Network Load Balancer
# Connect or disconnect an Azure virtual machine's network interface to a Load Balancer's back end address pool
- task: AzureNLBManagement@1
  inputs:
    azureSubscription: 
    resourceGroupName: 
    loadBalancer: 
    action: # Options: disconnect, connect
```
