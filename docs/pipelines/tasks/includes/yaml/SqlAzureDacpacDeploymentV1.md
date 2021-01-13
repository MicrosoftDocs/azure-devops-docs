---
ms.topic: include
author: RoopeshNair
ms.author: ronai
ms.date: 07/05/2019
ms.prod: devops
ms.technology: devops-cicd-tasks
---

```YAML
# Azure SQL Database deployment
# Deploy an Azure SQL Database using DACPAC or run scripts using SQLCMD
- task: SqlAzureDacpacDeployment@1
  inputs:
    #azureConnectionType: 'ConnectedServiceNameARM' # Optional. Options: connectedServiceName, connectedServiceNameARM
    #azureClassicSubscription: # Required when azureConnectionType == ConnectedServiceName
    #azureSubscription: # Required when azureConnectionType == ConnectedServiceNameARM
    #authenticationType: 'server' # Options: server, aadAuthenticationPassword, aadAuthenticationIntegrated, connectionString, servicePrincipal
    #serverName: # Required when authenticationType == Server || AuthenticationType == AadAuthenticationPassword || AuthenticationType == AadAuthenticationIntegrated || AuthenticationType == servicePrincipal
    #databaseName: # Required when authenticationType == Server || AuthenticationType == AadAuthenticationPassword || AuthenticationType == AadAuthenticationIntegrated || AuthenticationType == servicePrincipal
    #sqlUsername: # Required when authenticationType == Server
    #sqlPassword: # Required when authenticationType == Server
    #aadSqlUsername: # Required when authenticationType == AadAuthenticationPassword
    #aadSqlPassword: # Required when authenticationType == AadAuthenticationPassword
    #connectionString: # Required when authenticationType == ConnectionString
    #deployType: 'DacpacTask' # Options: dacpacTask, sqlTask, inlineSqlTask
    #deploymentAction: 'Publish' # Required when deployType == DacpacTask. Options: publish, extract, export, import, script, driftReport, deployReport
    #dacpacFile: # Required when deploymentAction == Publish || DeploymentAction == Script || DeploymentAction == DeployReport
    #bacpacFile: # Required when deploymentAction == Import
    #sqlFile: # Required when deployType == SqlTask
    #sqlInline: # Required when deployType == InlineSqlTask
    #publishProfile: # Optional
    #additionalArguments: # Optional
    #sqlAdditionalArguments: # Optional
    #inlineAdditionalArguments: # Optional
    #ipDetectionMethod: 'AutoDetect' # Options: autoDetect, iPAddressRange
    #startIpAddress: # Required when ipDetectionMethod == IPAddressRange
    #endIpAddress: # Required when ipDetectionMethod == IPAddressRange
    #deleteFirewallRule: true # Optional
```
