---
title: WinRM SQL Server DB Deployment task
description: Deploy to SQL Server Database using DACPAC or SQL scripts
ms.topic: reference
ms.prod: devops
ms.technology: devops-cicd
ms.assetid: 4B506F7F-720F-47BB-BF21-029BAC6A690D
ms.manager: dastahel
ms.custom: seodec18
ms.author: dastahel
ms.date: 12/07/2018
monikerRange: 'azure-devops'
---

# WinRM SQL Server DB Deployment task

**Azure Pipelines**

Use this task in a build or release pipeline to deploy to SQL Server Database using a DACPAC or SQL script.

::: moniker range="> tfs-2018"
## YAML snippet
[!INCLUDE [temp](../_shared/yaml/SqlDacpacDeploymentOnMachineGroupV0.md)]
::: moniker-end

## Arguments

<table><thead><tr><th>Argument</th><th>Description</th></tr></thead>
<tr><td>Deploy SQL Using</td><td>(Required) Specify the way in which you want to deploy DB, either by using Dacpac or by using Sql Script.</td></tr>
<tr><td>DACPAC File</td><td>(Required) Location of the DACPAC file on the target machines or on a UNC path like, \\\\BudgetIT\Web\Deploy\FabrikamDB.dacpac. The UNC path should be accessible to the machine's administrator account. Environment variables are also supported, such as $env:windir, $env:systemroot, $env:windir\FabrikamFibre\DB. Wildcards can be used. For example, `**/*.dacpac` for DACPAC file present in all sub folders.</td></tr>
<tr><td>Sql File</td><td>(Required) Location of the SQL file on the target. Provide semi-colon separated list of SQL script files to execute multiple files. The SQL scripts will be executed in the order given. Location can also be a UNC path like, \\\\BudgetIT\Web\Deploy\FabrikamDB.sql. The UNC path should be accessible to the machine's administrator account. Environment variables are also supported, such as $env:windir, $env:systemroot, $env:windir\FabrikamFibre\DB. Wildcards can be used. For example, `**/*.sql` for sql file present in all sub folders.</td></tr>
<tr><td>Execute within a transaction</td><td>(Optional) Executes SQL script(s) within a transaction</td></tr>
<tr><td>Acquire an exclusive app lock while executing script(s)</td><td>(Optional) Acquires an exclusive app lock while executing script(s)</td></tr>
<tr><td>App lock name</td><td>(Required) App lock name</td></tr>
<tr><td>Inline Sql</td><td>(Required) Sql Queries inline</td></tr>
<tr><td>Specify SQL Using</td><td>(Required) Specify the option to connect to the target SQL Server Database. The options are either to provide the SQL Server Database details, or the SQL Server connection string, or the Publish profile XML file.</td></tr>
<tr><td>Server Name</td><td>(Required) Provide the SQL Server name like, machinename\FabrikamSQL,1433 or localhost or .\SQL2012R2. Specifying localhost will connect to the Default SQL Server instance on the machine.</td></tr>
<tr><td>Database Name</td><td>(Required) Provide the name of the SQL Server database.</td></tr>
<tr><td>Authentication</td><td>(Required) Select the authentication mode for connecting to the SQL Server. In Windows authentication mode, the administrator's account, as specified in the Machines section, is used to connect to the SQL Server. In SQL Server Authentication mode, the SQL login and Password have to be provided in the parameters below.</td></tr>
<tr><td>SQL User name</td><td>(Required) Provide the SQL login to connect to the SQL Server. The option is only available if SQL Server Authentication mode has been selected.</td></tr>
<tr><td>SQL Password</td><td>(Required) Provide the Password of the SQL login. The option is only available if SQL Server Authentication mode has been selected.</td></tr>
<tr><td>Connection String</td><td>(Required) Specify the SQL Server connection string like "Server=localhost;Database=Fabrikam;User ID=sqluser;Password=password;".</td></tr>
<tr><td>Publish Profile</td><td>(Optional) Publish profile provide fine-grained control over SQL Server database deployments. Specify the path to the Publish profile XML file on the target machine or on a UNC share that is accessible by the machine administrator's credentials.</td></tr>
<tr><td>Additional Arguments</td><td>(Optional) Additional SqlPackage.exe arguments that will be applied when deploying the SQL Server database like, /p:IgnoreAnsiNulls=True /p:IgnoreComments=True. These arguments will override the settings in the Publish profile XML file (if provided).</td></tr>
<tr><td>Additional Arguments</td><td>(Optional) Additional Invoke-Sqlcmd arguments that will be applied when deploying the SQL Server database.</td></tr>
[!INCLUDE [temp](../_shared/control-options-arguments.md)]
</table>

## Open source

This task is open source [on GitHub](https://github.com/Microsoft/azure-pipelines-tasks). Feedback and contributions are welcome.
