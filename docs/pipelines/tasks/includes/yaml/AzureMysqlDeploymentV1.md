---
ms.topic: include
author: RoopeshNair
ms.author: ronai
ms.date: 12/07/2018
ms.prod: devops
ms.technology: devops-cicd-tasks
---

```YAML
# Azure Database for MySQL deployment
# Run your scripts and make changes to your Azure Database for MySQL
- task: AzureMysqlDeployment@1
  inputs:
    ConnectedServiceName: # Or alias azureSubscription
    ServerName:
    #DatabaseName: # Optional
    SqlUsername:
    SqlPassword:
    #TaskNameSelector: 'SqlTaskFile' # Optional. Options: SqlTaskFile, InlineSqlTask
    #SqlFile: # Required when taskNameSelector == SqlTaskFile
    #SqlInline: # Required when taskNameSelector == InlineSqlTask
    #SqlAdditionalArguments: # Optional
    #IpDetectionMethod: 'AutoDetect' # Options: AutoDetect, IPAddressRange
    #StartIpAddress: # Required when ipDetectionMethod == IPAddressRange
    #EndIpAddress: # Required when ipDetectionMethod == IPAddressRange
    #DeleteFirewallRule: true # Optional
```
