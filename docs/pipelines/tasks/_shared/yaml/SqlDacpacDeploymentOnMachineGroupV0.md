```YAML
# SQL Server Database Deploy
# Deploy to SQL Server Database using DACPAC or SQL scripts
- task: SqlDacpacDeploymentOnMachineGroup@0
  inputs:
    #taskType: 'dacpac' # Options: dacpac, sqlQuery, sqlInline
    #dacpacFile: # Required when taskType == Dacpac
    #sqlFile: # Required when taskType == SqlQuery
    #executeInTransaction: false # Optional
    #exclusiveLock: false # Optional
    #appLockName: # Required when exclusiveLock == True
    #inlineSql: # Required when taskType == SqlInline
    #targetMethod: 'server' # Required when taskType == Dacpac# Options: server, connectionString, publishProfile
    #serverName: 'localhost' # Required when targetMethod == Server || TaskType == SqlQuery || TaskType == SqlInline
    #databaseName: # Required when targetMethod == Server || TaskType == SqlQuery || TaskType == SqlInline
    #authScheme: 'windowsAuthentication' # Required when targetMethod == Server || TaskType == SqlQuery || TaskType == SqlInline# Options: windowsAuthentication, sqlServerAuthentication
    #sqlUsername: # Required when authScheme == SqlServerAuthentication
    #sqlPassword: # Required when authScheme == SqlServerAuthentication
    #connectionString: # Required when targetMethod == ConnectionString
    #publishProfile: # Optional
    #additionalArguments: # Optional
    #additionalArgumentsSql: # Optional
```
