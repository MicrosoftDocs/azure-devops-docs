```YAML
# Azure SQL Database Deployment
# Deploy Azure SQL DB using DACPAC or run scripts using SQLCMD
- task: SqlAzureDacpacDeployment@1
  inputs:
    #azureConnectionType: 'ConnectedServiceNameARM' # Optional. Options: connectedServiceName, connectedServiceNameARM
    #azureClassicSubscription: # Required when azureConnectionType == ConnectedServiceName
    #azureSubscription: # Required when azureConnectionType == ConnectedServiceNameARM
    serverName: 
    databaseName: 
    sqlUsername: 
    sqlPassword: 
    #deploymentAction: 'Publish' # Options: publish, extract, export, import, script, driftReport, deployReport
    #taskNameSelector: 'DacpacTask' # Optional. Options: dacpacTask, sqlTask, inlineSqlTask
    #dacpacFile: # Required when taskNameSelector == DacpacTask || DeploymentAction == Script || DeploymentAction == DeployReport
    #bacpacFile: # Required when deploymentAction == Import
    #sqlFile: # Required when taskNameSelector == SqlTask
    #sqlInline: # Required when taskNameSelector == InlineSqlTask
    #publishProfile: # Optional
    #additionalArguments: # Optional
    #sqlAdditionalArguments: # Optional
    #inlineAdditionalArguments: # Optional
    #ipDetectionMethod: 'AutoDetect' # Options: autoDetect, iPAddressRange
    #startIpAddress: # Required when ipDetectionMethod == IPAddressRange
    #endIpAddress: # Required when ipDetectionMethod == IPAddressRange
    #deleteFirewallRule: true # Optional
```
