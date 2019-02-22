```YAML
# MySQL Database Deploy
# This is an early preview. Run your scripts and make changes to your MySQL Database.
- task: MysqlDeploymentOnMachineGroup@1
  inputs:
    #taskNameSelector: 'SqlTaskFile' # Optional. Options: sqlTaskFile, inlineSqlTask
    #sqlFile: # Required when taskNameSelector == SqlTaskFile
    #sqlInline: # Required when taskNameSelector == InlineSqlTask
    #serverName: 'localhost' 
    #databaseName: # Optional
    sqlUsername: 
    sqlPassword: 
    #sqlAdditionalArguments: # Optional
```
