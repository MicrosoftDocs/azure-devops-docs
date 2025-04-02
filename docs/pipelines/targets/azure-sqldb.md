---
title: Deploy to Azure SQL Database
description: Learn how to deploy an Azure SQL database with Azure Pipelines.
ms.assetid: B4255EC0-1A25-48FB-B57D-EC7FDB7124D9
ms.topic: how-to
ms.date: 04/02/2025
monikerRange: '<= azure-devops'
---

# Azure SQL database deployment

[!INCLUDE [version-lt-eq-azure-devops](../../includes/version-lt-eq-azure-devops.md)]

You can automatically deploy your database updates to Azure SQL database after every successful build.

## Prerequisites

| **Product**        |    **Requirements**            |
|--------------------|--------------------------------|
| **Azure DevOps**   | - An [Azure DevOps project](../../organizations/projects/create-project.md).<br> - **Permissions:**<br>    &nbsp;&nbsp;&nbsp;&nbsp;- To create service connections, you must have the *Administrator* or *Creator* role for [service connections](../library/add-resource-protection.md). |

## DACPAC

The simplest way to deploy a database is by using a [data-tier package or DACPAC](/sql/relational-databases/data-tier-applications/data-tier-applications). DACPACs allow you to package and deploy schema changes and data. You can create a DACPAC using the **SQL Database Project** in Visual Studio.

The [Azure SQL Database deployment](/azure/devops/pipelines/tasks/reference/sql-azure-dacpac-deployment-v1) task is the primary mechanism to deploy a database to Azure. This task, as with other built-in Azure tasks, requires an Azure service connection as an input. The Azure service connection stores the credentials to connect from Azure Pipelines to Azure.

::: moniker range="azure-devops"

The easiest way to get started with this task is to be signed in as a user that owns both the Azure DevOps organization and the Azure subscription.
In this case, you won't have to manually create the service connection. Otherwise, to learn how to create an Azure service connection, see [Create an Azure service connection](../library/connect-to-azure.md).

::: moniker-end

::: moniker range="< azure-devops"

To learn how to create an Azure service connection, see [Create an Azure service connection](../library/connect-to-azure.md).

::: moniker-end

#### [YAML](#tab/yaml/)
::: moniker range="<=azure-devops"

To deploy a DACPAC to an Azure SQL database, use the [Azure SQL Database deployment task](/azure/devops/pipelines/tasks/reference/sql-azure-dacpac-deployment-v1). Add the following snippet to your YAML file:

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

#### [Classic](#tab/classic/)

When setting up a build pipeline, use the **.NET desktop** template. This template automatically adds the tasks to build the project and publish artifacts, including the DACPAC.

:::image type="content" source="media/classic-pipeline-templates.png" alt-text="A screenshot displaying Classic pipeline templates.":::

For Classic release pipelines, select **Start with an empty pipeline**, link the artifacts from your build pipeline, and then add the [Azure SQL Database Deployment](/azure/devops/pipelines/tasks/reference/sql-azure-dacpac-deployment-v1) task.

:::image type="content" source="media/release-pipeline-sql-database-task.png" alt-text="A screenshot displaying how to set up a Classic release pipeline for database deployment.":::

* * *

## SQL scripts

Alternatively, you can use SQL scripts instead of DACPAC to deploy your database. Below is a simple SQL script that creates an empty database:

```sql
  USE [main]
  GO
  IF NOT EXISTS (SELECT name FROM main.sys.databases WHERE name = N'DatabaseExample')
  CREATE DATABASE [DatabaseExample]
  GO
```

To run SQL scripts from your pipeline, you'll need to add and remove firewall rules in Azure. Without these rules, the Azure Pipelines agent cannot communicate with Azure SQL Database.

#### Set Azure firewall rules

The following PowerShell script creates firewall rules. Save it as `SetAzureFirewallRule.ps1` and add it to your repository:

#### [ARM](#tab/arm/)

```powershell
[CmdletBinding(DefaultParameterSetName = 'None')]
param
(
  [String] [Parameter(Mandatory = $true)] $ServerName,
  [String] [Parameter(Mandatory = $true)] $ResourceGroupName,
  [String] $FirewallRuleName = "AzureWebAppFirewall"
)
$agentIP = (New-Object net.webclient).downloadstring("https://api.ipify.org")
New-AzSqlServerFirewallRule -ResourceGroupName $ResourceGroupName -ServerName $ServerName -FirewallRuleName $FirewallRuleName -StartIPAddress $agentIP -EndIPAddress $agentIP
```

#### [ASM (Classic)](#tab/asm/)

```powershell
[CmdletBinding(DefaultParameterSetName = 'None')]
param
(
  [String] [Parameter(Mandatory = $true)] $ServerName,
  [String] [Parameter(Mandatory = $true)] $ResourceGroupName,
  [String] $FirewallRuleName = "AzureWebAppFirewall"
)

$ErrorActionPreference = 'Stop'

function New-AzureSQLServerFirewallRule {
  $agentIP = (New-Object net.webclient).downloadstring("https://api.ipify.org")
  New-AzureSqlDatabaseServerFirewallRule -StartIPAddress $agentIP -EndIPAddress $agentIP -RuleName $FirewallRuleName -ServerName $ServerName
}

function Update-AzureSQLServerFirewallRule{
  $agentIP= (New-Object net.webclient).downloadstring("https://api.ipify.org")
  Set-AzureSqlDatabaseServerFirewallRule -StartIPAddress $agentIP -EndIPAddress $agentIP -RuleName $FirewallRuleName -ServerName $ServerName
}

if ((Get-AzureSqlDatabaseServerFirewallRule -ServerName $ServerName -RuleName $FirewallRuleName -ErrorAction SilentlyContinue) -eq $null)
{
  New-AzureSQLServerFirewallRule
}
else
{
  Update-AzureSQLServerFirewallRule
}
```
* * *

#### Remove Azure firewall rules

The following PowerShell script removes firewall rules. Save it as `RemoveAzureFirewallRule.ps1` and add it to your repository:

#### [ARM](#tab/arm/)

```powershell
[CmdletBinding(DefaultParameterSetName = 'None')]
param
(
  [String] [Parameter(Mandatory = $true)] $ServerName,
  [String] [Parameter(Mandatory = $true)] $ResourceGroupName,
  [String] $FirewallRuleName = "AzureWebAppFirewall"
)
Remove-AzSqlServerFirewallRule -ServerName $ServerName -FirewallRuleName $FirewallRuleName -ResourceGroupName $ResourceGroupName
```

#### [ASM (Classic)](#tab/asm/)

```powershell
[CmdletBinding(DefaultParameterSetName = 'None')]
param
(
  [String] [Parameter(Mandatory = $true)] $ServerName,
  [String] [Parameter(Mandatory = $true)] $ResourceGroupName,
  [String] $FirewallRuleName = "AzureWebAppFirewall"
)

$ErrorActionPreference = 'Stop'

if ((Get-AzureSqlDatabaseServerFirewallRule -ServerName $ServerName -RuleName $FirewallRuleName -ErrorAction SilentlyContinue))
{
  Remove-AzureSqlDatabaseServerFirewallRule -RuleName $FirewallRuleName -ServerName $ServerName
}
```
* * *

#### Deploy database with SQL scripts

The following example outlines the steps to add firewall rules, deploy your database using SQL scripts, and then remove the firewall rules:

#### [YAML](#tab/yaml/)

::: moniker range="<=azure-devops"

```yaml
variables:
  AzureSubscription: '<SERVICE_CONNECTION_NAME>'
  ResourceGroupName: '<RESOURCE_GROUP_NAME>'
  ServerName: '<DATABASE_SERVER_NAME>'
  ServerFqdn: '<DATABASE_FQDN>'
  DatabaseName: '<DATABASE_NAME>'
  AdminUser: '<DATABASE_USERNAME>'
  AdminPassword: '<DATABASE_PASSWORD>'
  SQLFile: '<LOCATION_OF_SQL_FILE_IN_$(Build.SourcesDirectory)>'

steps:
- task: AzurePowerShell@5
  displayName: 'Set Azure firewall rules'
  inputs:
    azureSubscription: '$(AzureSubscription)'
    ScriptType: filePath
    ScriptPath: '$(Build.SourcesDirectory)\scripts\SetAzureFirewallRule.ps1'
    ScriptArguments: '-ServerName $(ServerName) -ResourceGroupName $(ResourceGroupName)'
    azurePowerShellVersion: LatestVersion

- task: PowerShell@2
  inputs:
  displayName: 'Install SqlServer module if not present'
    targetType: 'inline'
    script: |
      if (-not (Get-Module -ListAvailable -Name SqlServer)) {
          Install-Module -Name SqlServer -Force -AllowClobber
      }

- task: PowerShell@2
  displayName: 'Deploy database'
  inputs:
    targetType: 'inline'
    script: |
      Invoke-Sqlcmd -InputFile $(SQLFile) -ServerInstance $(ServerFqdn) -Database $(DatabaseName) -Username $(AdminUser) -Password $(AdminPassword)

- task: AzurePowerShell@5
  displayName: 'Remove Azure firewall rules'
  inputs:
    azureSubscription: '$(AzureSubscription)'
    ScriptType: filePath
    ScriptPath: '$(Build.SourcesDirectory)\scripts\RemoveAzureFirewallRule.ps1'
    ScriptArguments: '-ServerName $(ServerName) -ResourceGroupName $(ResourceGroupName)'
    azurePowerShellVersion: LatestVersion
```

::: moniker-end

#### [Classic](#tab/classic/)

For Classic pipelines, ensure that both the SQL script for deploying the database and the Azure PowerShell scripts for configuring firewall rules are included as part of the build artifact.

For Classic release pipelines, select **Start with an empty pipeline**, link the artifacts from your build pipeline, and then add the following tasks:

1. Use the [Azure PowerShell](/azure/devops/pipelines/tasks/reference/azure-powershell-v5) task to add a firewall rule in Azure, allowing the Azure Pipelines agent to connect to the Azure SQL Database. The script requires one argument - the name of the SQL server you created.

1. Use the [PowerShell](/azure/devops/pipelines/tasks/reference/powershell-v2) task to invoke SQLCMD and execute your scripts. Use the following inline script:

    ```PowerShell
    if (-not (Get-Module -ListAvailable -Name SqlServer)) {
      Install-Module -Name SqlServer -Force -AllowClobber
    }

    Invoke-Sqlcmd -InputFile $(SQLFile) -ServerInstance $(ServerFqdn) -Database $(DatabaseName) -Username $(AdminUser) -Password $(AdminPassword)
    ```

1. Use another [Azure PowerShell](/azure/devops/pipelines/tasks/reference/azure-powershell-v5) task to remove the firewall rule in Azure.

    :::image type="content" source="media/sql-add-firewall-rules.png" alt-text="A screenshot displaying a classic pipeline to add firewall rules and run SQL scripts.":::

* * *

## Deploy database conditionally

You can choose to deploy only specific builds to your Azure database, giving you more control over which changes are applied based on criteria like the source branch or build status.

#### [YAML](#tab/yaml/)
::: moniker range="<=azure-devops"

To do this in YAML, you can use one of these techniques:

* Isolate the deployment steps into a separate job and apply a condition to that job.

* Add a condition directly to the step.

The example below shows how to deploy only builds from the main branch using [conditions](../process/conditions.md):

```yaml
- task: SqlAzureDacpacDeployment@1
  condition: and(succeeded(), eq(variables['Build.SourceBranch'], 'refs/heads/main'))
  inputs:
    azureSubscription: '<Azure service connection>'
    ServerName: '<Database server name>'
    DatabaseName: '<Database name>'
    SqlUsername: '<SQL user name>'
    SqlPassword: '<SQL user password>'
    DacpacFile: '<Location of Dacpac file in $(Build.SourcesDirectory) after compilation>'
```

::: moniker-end

#### [Classic](#tab/classic/)

With Classic release pipelines, you can implement various checks and conditions to control when and which deployments are triggered. Here are some strategies you can use:

* Use branch filters to set up your [continuous deployment triggers](../release/triggers.md#continuous-deployment-triggers) to trigger a release whenever a new build from a specific branch becomes available.

* Use [pre-deployment approvals](../release/approvals/approvals.md#predeployment-approvals) to designate approvers who can either approve or reject deployment to a specific stage.

* Define a set of [gates](../release/deploy-using-approvals.md#set-up-gates) to ensure that the release pipeline meets specific criteria before deployment without requiring user intervention.

> [!NOTE]
> In some scenarios, you might need to allowlist IP address ranges for a specific region. These ranges are updated weekly and can be downloaded as a [JSON file](https://www.microsoft.com/download/details.aspx?id=56519). See [networking Microsoft-hosted agents](../agents/hosted.md#networking) for more details.

* * *

## More SQL actions

The SQL Azure Dacpac Deployment task might not cover all the SQL server actions you need to perform. In such cases, you can use PowerShell or command-line scripts to execute the required commands.

This section covers common use cases for invoking the [SqlPackage.exe tool](/sql/tools/sqlpackage-download). Before running this tool, make sure you're using a self-hosted agent with the tool installed.

> [!NOTE]
> If you execute **SQLPackage** from the folder where it is installed, you must prefix the path with `&` and wrap it in double-quotes.

### Basic Syntax 

`<Path of SQLPackage.exe> <Arguments to SQLPackage.exe>`

You can use any of the following SQL scripts based on the action you wish to perform:

#### [Extract](#tab/extract/)

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
SqlPackage.exe /TargetFile:"C:\temp\test.dacpac" /Action:Extract /SourceServerName:"DemoSqlServer.database.windows.net.placeholder"
 /SourceDatabaseName:"Testdb" /SourceUser:"ajay" /SourcePassword:"SQLPassword"
```

**Help:**

```command
sqlpackage.exe /Action:Extract /?
```

#### [Publish](#tab/publish/)

Incrementally updates a database schema to match the schema of a source .dacpac file. If the database doesn’t exist on the server, the publish operation will create it. Otherwise, an existing database will be updated.

**Command Syntax:**

```command
SqlPackage.exe /SourceFile:"<Dacpac file location>" /Action:Publish /TargetServerName:"<ServerName>.database.windows.net"
/TargetDatabaseName:"<DatabaseName>" /TargetUser:"<Username>" /TargetPassword:"<Password> "
```

**Example:**

```command
SqlPackage.exe /SourceFile:"E:\dacpac\ajyadb.dacpac" /Action:Publish /TargetServerName:"DemoSqlServer.database.windows.net.placeholder"
/TargetDatabaseName:"Testdb4" /TargetUser:"ajay" /TargetPassword:"SQLPassword"
```

**Help:**

```command
sqlpackage.exe /Action:Publish /?
```

#### [Export](#tab/export/)

Exports a live database, including database schema and user data, from SQL Server or Microsoft Azure SQL Database to a BACPAC package (.bacpac file).

**Command Syntax:**

```command
SqlPackage.exe /TargetFile:"<Target location for bacpac file>" /Action:Export /SourceServerName:"<ServerName>.database.windows.net"
/SourceDatabaseName:"<DatabaseName>" /SourceUser:"<Username>" /SourcePassword:"<Password>"
```

**Example:**

```command
SqlPackage.exe /TargetFile:"C:\temp\test.bacpac" /Action:Export /SourceServerName:"DemoSqlServer.database.windows.net.placeholder"
/SourceDatabaseName:"Testdb" /SourceUser:"ajay" /SourcePassword:"SQLPassword"
```

**Help:**

```command
sqlpackage.exe /Action:Export /?
```

#### [Import](#tab/import/)

Imports the schema and table data from a BACPAC package into a new user database in an instance of SQL Server or Microsoft Azure SQL Database.

**Command Syntax:** 

```command
SqlPackage.exe /SourceFile:"<Bacpac file location>" /Action:Import /TargetServerName:"<ServerName>.database.windows.net"
/TargetDatabaseName:"<DatabaseName>" /TargetUser:"<Username>" /TargetPassword:"<Password>"
```

**Example:**

```command
SqlPackage.exe /SourceFile:"C:\temp\test.bacpac" /Action:Import /TargetServerName:"DemoSqlServer.database.windows.net.placeholder"
/TargetDatabaseName:"Testdb" /TargetUser:"ajay" /TargetPassword:"SQLPassword"
```

**Help:**

```command
sqlpackage.exe /Action:Import /?
```

#### [DeployReport](#tab/deployreport/)

Creates an XML report of the changes that would be made by a publish action.

**Command Syntax:** 

```command
SqlPackage.exe /SourceFile:"<Dacpac file location>" /Action:DeployReport /TargetServerName:"<ServerName>.database.windows.net"
/TargetDatabaseName:"<DatabaseName>" /TargetUser:"<Username>" /TargetPassword:"<Password>" /OutputPath:"<Output XML file path for deploy report>"
```

**Example:**

```command
SqlPackage.exe /SourceFile:"E: \dacpac\ajyadb.dacpac" /Action:DeployReport /TargetServerName:"DemoSqlServer.database.windows.net.placeholder"
/TargetDatabaseName:"Testdb" /TargetUser:"ajay" /TargetPassword:"SQLPassword" /OutputPath:"C:\temp\deployReport.xml" 
```

**Help:**

```command
sqlpackage.exe /Action:DeployReport /?
```

#### [DriftReport](#tab/driftreport/)

Creates an XML report of the changes that have been made to a registered database since it was last registered.

**Command Syntax:** 

```command
SqlPackage.exe /Action:DriftReport /TargetServerName:"<ServerName>.database.windows.net" /TargetDatabaseName:"<DatabaseName>"
/TargetUser:"<Username>" /TargetPassword:"<Password>" /OutputPath:"<Output XML file path for drift report>"
```

**Example:**

```command
SqlPackage.exe /Action:DriftReport /TargetServerName:"DemoSqlServer.database.windows.net.placeholder" /TargetDatabaseName:"Testdb"
/TargetUser:"ajay" /TargetPassword:"SQLPassword" /OutputPath:"C:\temp\driftReport.xml"
```

**Help:**

```command
sqlpackage.exe /Action:DriftReport /?
```

#### [Script](#tab/script/)

Creates a Transact-SQL incremental update script that updates the schema of a target to match the schema of a source.

**Command Syntax:**

```command
SqlPackage.exe /SourceFile:"<Dacpac file location>" /Action:Script /TargetServerName:"<ServerName>.database.windows.net"
/TargetDatabaseName:"<DatabaseName>" /TargetUser:"<Username>" /TargetPassword:"<Password>" /OutputPath:"<Output SQL script file path>"
```

**Example:**

```command
SqlPackage.exe /Action:Script /SourceFile:"E:\dacpac\ajyadb.dacpac" /TargetServerName:"DemoSqlServer.database.windows.net.placeholder"
/TargetDatabaseName:"Testdb" /TargetUser:"ajay" /TargetPassword:"SQLPassword" /OutputPath:"C:\temp\test.sql"
/Variables:StagingDatabase="Staging DB Variable value"
```

**Help:**

```command
sqlpackage.exe /Action:Script /?
```

***

## Related content

- [Azure Resource Manager service connections](../library/connect-to-azure.md)

- [Troubleshoot pipeline runs](../troubleshooting/troubleshooting.md)

- [Troubleshoot ARM service connections](../release/azure-rm-endpoint.md)