```YAML
# [Deprecated] SQL Server Database Deploy
# Deploy SQL Server Database using DACPAC
- task: SqlServerDacpacDeployment@1
  inputs:
    environmentName: 
    #adminUserName: # Optional
    #adminPassword: # Optional
    #protocol: # Optional. Options: http, https
    #testCertificate: true # Optional
    dacpacFile: 
    #targetMethod: 'server' # Options: server, connectionString, publishProfile
    #serverName: 'localhost' # Required when targetMethod == Server
    #databaseName: # Required when targetMethod == Server
    #sqlUsername: # Optional
    #sqlPassword: # Optional
    #connectionString: # Required when targetMethod == ConnectionString
    #publishProfile: # Optional
    #additionalArguments: # Optional
    #deployInParallel: true # Optional
    #resourceFilteringMethod: 'machineNames' # Optional. Options: machineNames, tags
    #machineFilter: # Optional
```
