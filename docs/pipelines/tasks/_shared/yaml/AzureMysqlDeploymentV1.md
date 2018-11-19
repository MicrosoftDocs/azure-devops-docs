```YAML
# Azure Database for MySQL Deployment
# Run your scripts and make changes to your Azure Database for MySQL.
- task: AzureMysqlDeployment@1
  inputs:
    azureSubscription: 
    serverName: 
    #databaseName: # Optional
    sqlUsername: 
    sqlPassword: 
    #taskNameSelector: 'SqlTaskFile' # Optional. Options: sqlTaskFile, inlineSqlTask
    #sqlFile: # Required when taskNameSelector == SqlTaskFile
    #sqlInline: # Required when taskNameSelector == InlineSqlTask
    #sqlAdditionalArguments: # Optional
    #ipDetectionMethod: 'AutoDetect' # Options: autoDetect, iPAddressRange
    #startIpAddress: # Required when ipDetectionMethod == IPAddressRange
    #endIpAddress: # Required when ipDetectionMethod == IPAddressRange
    #deleteFirewallRule: true # Optional
```
