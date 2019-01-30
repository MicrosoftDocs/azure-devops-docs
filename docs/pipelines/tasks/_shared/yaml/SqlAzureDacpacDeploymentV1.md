```YAML
# Azure SQL Database Deployment
# Deploy Azure SQL DB using DACPAC or run scripts using SQLCMD
- task: SqlAzureDacpacDeployment@1
  inputs:
    #azureConnectionType: 'ConnectedServiceNameARM' # Optional. Options: connectedServiceName, connectedServiceNameARM
    #azureClassicSubscription: # Required when azureConnectionType == ConnectedServiceName
    #azureSubscription: # Required when azureConnectionType == ConnectedServiceNameARM
    #authenticationType: 'server' # Options: server, aadAuthenticationPassword, aadAuthenticationIntegrated, connectionString
    #serverName: # Required when authenticationType == Server || AuthenticationType == AadAuthenticationPassword || AuthenticationType == AadAuthenticationIntegrated
    #databaseName: # Required when authenticationType == Server || AuthenticationType == AadAuthenticationPassword || AuthenticationType == AadAuthenticationIntegrated
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
