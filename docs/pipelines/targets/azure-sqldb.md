---
title: Deploy to Azure SQL Database
description: Deploy to an Azure SQL database from Azure Pipelines or TFS
ms.assetid: B4255EC0-1A25-48FB-B57D-EC7FDB7124D9
ms.prod: devops
ms.technology: devops-cicd
ms.topic: conceptual
ms.manager: jillfra
ms.custom: seodec18
ms.author: ahomer
author: alexhomer1
ms.date: 12/07/2018
monikerRange: '>= tfs-2017'
---

# Azure SQL database deployment

[!INCLUDE [version-tfs-2017-rtm](../_shared/version-tfs-2017-rtm.md)]

[!INCLUDE [temp](../_shared/concept-rename-note.md)]

You can automatically deploy your database updates to Azure SQL database after every successful build.

## DACPAC

The simplest way to deploy a database is to create [data-tier package or DACPAC](/sql/relational-databases/data-tier-applications/data-tier-applications). DACPACs can be used to package and deploy schema changes as well as data. You can create a DACPAC using the **SQL database project** in Visual Studio.

# [YAML](#tab/yaml)

::: moniker range=">= azure-devops-2019"

To deploy a DACPAC to an Azure SQL database, add the following snippet to your azure-pipelines.yml file.

```yaml
- task: SqlAzureDacpacDeployment@1
  displayName: Execute Azure SQL : DacpacTask
  inputs:
    azureSubscription: '<Azure service connection>'
    ServerName: '<Database server name>'
    DatabaseName: '<Database name>'
    SqlUsername: '<SQL user name>'
    SqlPassword: '<SQL user password>'
    DacpacFile: '<Location of Dacpac file in $(Build.SourcesDirectory) after compilation>'
```

::: moniker-end

::: moniker range="< azure-devops-2019"

YAML pipelines aren't available in TFS.

::: moniker-end

# [Designer](#tab/designer)

When setting up a build pipeline for your Visual Studio database project, use the **.NET desktop** template. This template automatically adds the tasks to build the project and publish artifacts, including the DACPAC.

When setting up a release pipeline, choose **Start with an empty pipeline**, link the artifacts from build, and then add an [Azure SQL Database Deployment](../tasks/deploy/sql-azure-dacpac-deployment.md) task.

---

See also [authentication information when using the Azure SQL Database Deployment task](../tasks/deploy/sql-azure-dacpac-deployment.md#arguments).

## SQL scripts

Instead of using a DACPAC, you can also use SQL scripts to deploy your database. Here is a simple example of a SQL script that creates an empty database.

```sql
  USE [master]
  GO
  IF NOT EXISTS (SELECT name FROM master.sys.databases WHERE name = N'DatabaseExample')
  CREATE DATABASE [DatabaseExample]
  GO
```

To run SQL scripts as part of a pipeline, you will need Azure Powershell scripts to create and remove firewall rules in Azure. Without the firewall rules, the Azure Pipelines agent cannot communicate with Azure SQL Database.

The following Powershell script creates firewall rules. You can check-in this script as `SetAzureFirewallRule.ps1` into your repository.

```powershell
[CmdletBinding(DefaultParameterSetName = 'None')]
param
(
  [String] [Parameter(Mandatory = $true)] $ServerName,
  [String] $AzureFirewallName = "AzureWebAppFirewall"
)

$ErrorActionPreference = 'Stop'

function New-AzureSQLServerFirewallRule {
  $agentIP = (New-Object net.webclient).downloadstring("http://checkip.dyndns.com") -replace "[^\d\.]"
  New-AzureSqlDatabaseServerFirewallRule -StartIPAddress $agentIp -EndIPAddress $agentIp -RuleName $AzureFirewallName -ServerName $ServerName
}
function Update-AzureSQLServerFirewallRule{
  $agentIP= (New-Object net.webclient).downloadstring("http://checkip.dyndns.com") -replace "[^\d\.]"
  Set-AzureSqlDatabaseServerFirewallRule -StartIPAddress $agentIp -EndIPAddress $agentIp -RuleName $AzureFirewallName -ServerName $ServerName
}

If ((Get-AzureSqlDatabaseServerFirewallRule -ServerName $ServerName -RuleName $AzureFirewallName -ErrorAction SilentlyContinue) -eq $null)
{
  New-AzureSQLServerFirewallRule
}
else
{
  Update-AzureSQLServerFirewallRule
}
```

The following Powershell script removes firewall rules. You can check-in this script as `RemoveAzureFirewall.ps1` into your repository.

```powershell
[CmdletBinding(DefaultParameterSetName = 'None')]
param
(
  [String] [Parameter(Mandatory = $true)] $ServerName,
  [String] $AzureFirewallName = "AzureWebAppFirewall"
)

$ErrorActionPreference = 'Stop'

If ((Get-AzureSqlDatabaseServerFirewallRule -ServerName $ServerName -RuleName $AzureFirewallName -ErrorAction SilentlyContinue))
{
  Remove-AzureSqlDatabaseServerFirewallRule -RuleName $AzureFirewallName -ServerName $ServerName
}
```

# [YAML](#tab/yaml)

::: moniker range=">= azure-devops-2019"

Add the following to your azure-pipelines.yml file to run a SQL script.

```yaml
variables:
  AzureSubscription: '<Azure service connection>'
  ServerName: '<Database server name>'
  DatabaseName: '<Database name>'
  AdminUser: '<SQL user name>'
  AdminPassword: '<SQL user password>'
  SQLFile: '<Location of SQL file in $(Build.SourcesDirectory)>'

steps:
- task: AzurePowerShell@2
  displayName: Azure PowerShell script: FilePath
  inputs:
    azureSubscription: '$(AzureSubscription)'
    ScriptPath: '$(Build.SourcesDirectory)\scripts\SetAzureFirewallRule.ps1'
    ScriptArguments: '$(ServerName)'
    azurePowerShellVersion: LatestVersion

- task: CmdLine@1
  displayName: Run Sqlcmd
  inputs:
    filename: Sqlcmd
    arguments: '-S $(ServerName) -U $(AdminUser) -P $(AdminPassword) -d $(DatabaseName) -i $(SQLFile)'

- task: AzurePowerShell@2
  displayName: Azure PowerShell script: FilePath
  inputs:
    azureSubscription: '$(AzureSubscription)'
    ScriptPath: '$(Build.SourcesDirectory)\scripts\RemoveAzureFirewallRule.ps1'
    ScriptArguments: '$(ServerName)'
    azurePowerShellVersion: LatestVersion
```

::: moniker-end

::: moniker range="< azure-devops-2019"

YAML pipelines aren't available in TFS.

::: moniker-end

# [Designer](#tab/designer)

When you set up a build pipeline, make sure that the SQL script to deploy the database and the Azure powershell scripts to configure firewall rules are part of the build artifact.

When you set up a release pipeline, choose **Start with an Empty process**, link the artifacts from build, and then use the following tasks:

- First, use an [Azure Powershell](../tasks/deploy/azure-powershell.md) task to add a firewall rule in Azure to allow the Azure Pipelines agent to connect to Azure SQL Database. The script requires one argument - the name of the SQL server you created.
- Second, use a [Command line](../tasks/utility/command-line.md) task to run the SQL script using the **SQLCMD** tool. The arguments to this tool are `-S {database-server-name}.database.windows.net -U {username}@{database-server-name} -P {password} -d {database-name} -i {SQL file}` For example, when the SQL script is coming from an artifact source, **{SQL file}** will be of the form: `$(System.DefaultWorkingDirectory)/contoso-repo/DatabaseExample.sql`.
- Third, use another [Azure Powershell](../tasks/deploy/azure-powershell.md) task to remove the firewall rule in Azure.

---

## Azure service connection

The **Azure SQL Database Deployment** task is the primary mechanism to deploy a database to Azure. This task, as with other built-in Azure tasks, requires an Azure service connection as an input. The Azure service connection stores the credentials to connect from Azure Pipelines or TFS to Azure.

::: moniker range="azure-devops"

The easiest way to get started with this task is to be signed in as a user that owns both the Azure DevOps organization and the Azure subscription.
In this case, you won't have to manually create the service connection.
Otherwise, to learn how to create an Azure service connection, see [Create an Azure service connection](../library/connect-to-azure.md).

::: moniker-end

::: moniker range="< azure-devops"

To learn how to create an Azure service connection, see [Create an Azure service connection](../library/connect-to-azure.md).

::: moniker-end

## Deploying conditionally

You may choose to deploy only certain builds to your Azure database.

# [YAML](#tab/yaml)

::: moniker range=">= azure-devops-2019"

To do this in YAML, you can use one of these techniques:

* Isolate the deployment steps into a separate job, and add a condition to that job.
* Add a condition to the step.

The following example shows how to use step conditions to deploy only those builds that originate from master branch.

```yaml
- task: SqlAzureDacpacDeployment@1
  condition: and(succeeded(), eq(variables['Build.SourceBranch'], 'refs/heads/master'))
  inputs:
    azureSubscription: '<Azure service connection>'
    ServerName: '<Database server name>'
    DatabaseName: '<Database name>'
    SqlUsername: '<SQL user name>'
    SqlPassword: '<SQL user password>'
    DacpacFile: '<Location of Dacpac file in $(Build.SourcesDirectory) after compilation>'
```

To learn more about conditions, see [Specify conditions](../process/conditions.md).

::: moniker-end

::: moniker range="< azure-devops-2019"

YAML pipelines aren't available in TFS.

::: moniker-end

# [Designer](#tab/designer)

In your release pipeline you can implement various checks and conditions to control the deployment.

* Set **branch filters** to configure the **continuous deployment trigger** on the artifact of the release pipeline.
* Set **pre-deployment approvals** as a pre-condition for deployment to a stage.
* Configure **gates** as a pre-condition for deployment to a stage.
* Specify conditions for a task to run.

To learn more, see [Release, branch, and stage triggers](../release/triggers.md), [Release deployment control using approvals](../release/approvals/approvals.md), [Release deployment control using gates](../release/approvals/gates.md), and [Specify conditions for running a task](../process/conditions.md).

---

## Additional SQL actions

**SQL Azure Dacpac Deployment** may not support all SQL server actions
that you want to perform. In these cases, you can simply use Powershell or command line scripts to run the commands you need.
This section shows some of the common use cases for invoking the [SqlPackage.exe tool](https://docs.microsoft.com/sql/tools/sqlpackage-download).
As a prerequisite to running this tool, you must use a self-hosted agent and have the tool installed on your agent.

> [!NOTE]
> If you execute **SQLPackage** from the folder where it is installed, you must prefix the path with `&` and wrap it in double-quotes.

### Basic Syntax 

`<Path of SQLPackage.exe> <Arguments to SQLPackage.exe>`

You can use any of the following SQL scripts depending on the action that you want to perform

### Extract

Creates a database snapshot (.dacpac) file from a live SQL server or Microsoft Azure SQL Database.

**Command Syntax:**

```command
SqlPackage.exe /TargetFile:"<Target location of dacpac file>" /Action:Extract
/SourceServerName:"<ServerName>.database.windows.net"
/SourceDatabaseName:"<DatabaseName>" /SourceUser:"<Username>" /SourcePassword:"<Password>"
```

or

```command
SqlPackage.exe /action:Extract /tf:"<Target location of dacpac file>"
/SourceConnectionString:"Data Source=ServerName;Initial Catalog=DatabaseName;Integrated Security=SSPI;Persist Security Info=False;"
```

**Example:**

```command
SqlPackage.exe /TargetFile:"C:\temp\test.dacpac" /Action:Extract /SourceServerName:"DemoSqlServer.database.windows.net"
 /SourceDatabaseName:"Testdb" /SourceUser:"ajay" /SourcePassword:"SQLPassword"
```

**Help:**

```command
sqlpackage.exe /Action:Extract /?
```

### Publish

Incrementally updates a database schema to match the schema of a source .dacpac file. If the database does not exist on the server, the publish operation will create it. Otherwise, an existing database will be updated.

**Command Syntax:**

```command
SqlPackage.exe /SourceFile:"<Dacpac file location>" /Action:Publish /TargetServerName:"<ServerName>.database.windows.net"
/TargetDatabaseName:"<DatabaseName>" /TargetUser:"<Username>" /TargetPassword:"<Password> "
```

**Example:**

```command
SqlPackage.exe /SourceFile:"E:\dacpac\ajyadb.dacpac" /Action:Publish /TargetServerName:"DemoSqlServer.database.windows.net"
/TargetDatabaseName:"Testdb4" /TargetUser:"ajay" /TargetPassword:"SQLPassword"
```

**Help:**

```command
sqlpackage.exe /Action:Publish /?
```

### Export

Exports a live database, including database schema and user data, from SQL Server or Microsoft Azure SQL Database to a BACPAC package (.bacpac file).

**Command Syntax:**

```command
SqlPackage.exe /TargetFile:"<Target location for bacpac file>" /Action:Export /SourceServerName:"<ServerName>.database.windows.net"
/SourceDatabaseName:"<DatabaseName>" /SourceUser:"<Username>" /SourcePassword:"<Password>"
```

**Example:**

```command
SqlPackage.exe /TargetFile:"C:\temp\test.bacpac" /Action:Export /SourceServerName:"DemoSqlServer.database.windows.net"
/SourceDatabaseName:"Testdb" /SourceUser:"ajay" /SourcePassword:"SQLPassword"
```

**Help:**

```command
sqlpackage.exe /Action:Export /?
```

### Import

Imports the schema and table data from a BACPAC package into a new user database in an instance of SQL Server or Microsoft Azure SQL Database.

**Command Syntax:** 

```command
SqlPackage.exe /SourceFile:"<Bacpac file location>" /Action:Import /TargetServerName:"<ServerName>.database.windows.net"
/TargetDatabaseName:"<DatabaseName>" /TargetUser:"<Username>" /TargetPassword:"<Password>"
```

**Example:**

```command
SqlPackage.exe /SourceFile:"C:\temp\test.bacpac" /Action:Import /TargetServerName:"DemoSqlServer.database.windows.net"
/TargetDatabaseName:"Testdb" /TargetUser:"ajay" /TargetPassword:"SQLPassword"
```

**Help:**

```command
sqlpackage.exe /Action:Import /?
```

### DeployReport

Creates an XML report of the changes that would be made by a publish action.

**Command Syntax:** 

```command
SqlPackage.exe /SourceFile:"<Dacpac file location>" /Action:DeployReport /TargetServerName:"<ServerName>.database.windows.net"
/TargetDatabaseName:"<DatabaseName>" /TargetUser:"<Username>" /TargetPassword:"<Password>" /OutputPath:"<Output XML file path for deploy report>"
```

**Example:**

```command
SqlPackage.exe /SourceFile:"E: \dacpac\ajyadb.dacpac" /Action:DeployReport /TargetServerName:"DemoSqlServer.database.windows.net"
/TargetDatabaseName:"Testdb" /TargetUser:"ajay" /TargetPassword:"SQLPassword" /OutputPath:"C:\temp\deployReport.xml" 
```

**Help:**

```command
sqlpackage.exe /Action:DeployReport /?
```

### DriftReport

Creates an XML report of the changes that have been made to a registered database since it was last registered.

**Command Syntax:** 

```command
SqlPackage.exe /Action:DriftReport /TargetServerName:"<ServerName>.database.windows.net" /TargetDatabaseName:"<DatabaseName>"
/TargetUser:"<Username>" /TargetPassword:"<Password>" /OutputPath:"<Output XML file path for drift report>"
```

**Example:**

```command
SqlPackage.exe /Action:DriftReport /TargetServerName:"DemoSqlServer.database.windows.net" /TargetDatabaseName:"Testdb"
/TargetUser:"ajay" /TargetPassword:"SQLPassword" /OutputPath:"C:\temp\driftReport.xml"
```

**Help:**

```command
sqlpackage.exe /Action:DriftReport /?
```

### Script

Creates a Transact-SQL incremental update script that updates the schema of a target to match the schema of a source.

**Command Syntax:**

```command
SqlPackage.exe /SourceFile:"<Dacpac file location>" /Action:Script /TargetServerName:"<ServerName>.database.windows.net"
/TargetDatabaseName:"<DatabaseName>" /TargetUser:"<Username>" /TargetPassword:"<Password>" /OutputPath:"<Output SQL script file path>"
```

**Example:**

```command
SqlPackage.exe /Action:Script /SourceFile:"E:\dacpac\ajyadb.dacpac" /TargetServerName:"DemoSqlServer.database.windows.net"
/TargetDatabaseName:"Testdb" /TargetUser:"ajay" /TargetPassword:"SQLPassword" /OutputPath:"C:\temp\test.sql"
/Variables:StagingDatabase="Staging DB Variable value"
```

**Help:**

```command
sqlpackage.exe /Action:Script /?
```
