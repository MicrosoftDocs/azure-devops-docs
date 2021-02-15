---
title: Azure Database for Mysql Deployment task
description: Run your scripts and make changes to your Azure DB for Mysql. 
ms.topic: reference
ms.assetid: BD1BED02-F04E-11E7-8C3F-9A214CF093AE
ms.custom: seodec18
ms.author: ronai
author: RoopeshNair
ms.date: 04/28/2020
monikerRange: 'azure-devops'
---

# Azure Database for Mysql Deployment task

**Azure Pipelines**

Use this task to run your scripts and make changes to your Azure DB for Mysql. Note that this is an early preview version.

::: moniker range="> tfs-2018"

## YAML snippet

[!INCLUDE [temp](../includes/yaml/AzureMysqlDeploymentV1.md)]

::: moniker-end

## Arguments

|Argument|Description|
|--- |--- |
|`ConnectedServiceName`<br/>Azure Subscription|(Required) This is needed to connect to your Azure account.<br><br>To configure new service connection, select the Azure subscription from the list and click 'Authorize'.<br><br>If your subscription is not listed or if you want to use an existing Service Principal, you can setup an Azure service connection using 'Add' or 'Manage' button. <br/><br>Argument alias: `azureSubscription`|
|`ServerName`<br/>Host Name|(Required) The name of your Azure Database for MySQL server.<br/><br>Example: `fabrikam.mysql.database.azure.com`.<br><br>The Server name is provided in the Azure portal on the 'Overview' blade of your Azure Database for MySQL server resource.<br><br>When you connect using Mysql Workbench, this is the same value that is used for 'Hostname' in 'Parameters'|
|`DatabaseName`<br/>Database Name|(Optional) The name of the database. If specified, the task will attempt to create the database if it does not exist.<br><br>If not specified, ensure the database is referenced in the supplied SQL file or inline SQL, where needed.<br><br>**Note:** MySQL database names are case-sensitive.|
|`SqlUsername`<br/>Server Admin Login|(Required) Azure Database for MySQL server supports native MySQL authentication.<br><br>You can connect and authenticate to a server with the server's admin login.<br><br/>Example:  `Mysqladmin`.<br><br>When you connect using Mysql Workbench, this is the same value that is used for 'Username' in 'Parameters'.|
|`SqlPassword`<br/>Password|(Required) The password for the username supplied to the `SqlUsername` argument. In case you don't recall the password you can change the password from Azure portal. It can be a variable defined in the pipeline. <br/><br>Example : `$(password)`.<br><br>Also, you may mark the variable type as 'secret' to secure it.|
|`TaskNameSelector`<br/>Type|(Optional) Accepted values:<br><br>- `SqlTaskFile` (default) for use with the `SqlFile` argument<br>- `InlineSqlTask` for use with the `SqlInline` argument.<br><br>**Note:** These values are case-sensitive.|
|`SqlFile`<br/>MySQL Script|(Required) Full path of the script file on the automation agent or on a UNC path accessible to the automation agent.<br><br>Example: `\BudgetIT\DeployBuilds\script.sql`.<br><br>You may also use predefined system variables, for example `$(agent.releaseDirectory)`.<br><br>The given path is expected to reference a SQL file containing SQL statements.<br><br>**Note:** The MySQL Client prefers unix style paths so, from version 1.183.0, the task will convert Windows style paths to Unix style paths e.g. from `c:\foo\bar\myscript.sql` to `c:/foo/bar/myscript.sql`. Where the task is used on Linux platforms, paths will remain unchanged. There is no need to escape special characters in paths.|
|`SqlInline`<br/>Inline MySQL Script|(Required) Enter the MySQL script to execute on the Database selected above.<br><br>Example: `UPDATE my_table SET my_col = 'foo';`|
|`SqlAdditionalArguments`<br/>Additional Mysql Client options|(Optional) Additional options supported by the MySQL client.<br><br>These options will be applied when executing the given file on the Azure DB for Mysql.<br><br>Examples include:<br>- `--comments` to strip comments sent from the client to the server.<br>- `--quick` to prevent result caching.<br> - `--xml` to output results as XML.<br><br>All available options can be found in the MySQL client documentation.|
|`IpDetectionMethod`<br/>Specify Firewall Rules Using|(Required) For successful execution of the task, we need to enable administrators to access the Azure Database for MySQL Server from the IP Address of the automation agent. By selecting auto-detect you can automatically add firewall exception for range of possible IP Address of automation agent or else you can specify the range explicitly.<br><br>Accepted values:<br><br>- `AutoDetect` to auto-detect the automation agent's public IP address<br>- `IPAddressRange` to explicitly specify the IP address range to configure. Set the IP address range using the `StartIpAddress` and `EndIpAddress` parameters.<br><br>**Note:** These values are case-sensitive|
|`StartIpAddress`<br/>Start IP Address|(Required) The starting IP Address of the automation agent machine pool.<br><br>Example: `198.51.100.1`.|
|`EndIpAddress`<br/>End IP Address|(Required) The ending IP Address of the automation agent machine pool.<br><br>Example: `198.51.100.65`.|
|`DeleteFirewallRule`<br/>Delete Rule After Task Ends|(Optional) If selected, the added exception for IP addresses of the automation agent will be removed for corresponding Azure Database for MySQL.|

## Open source

This task is open source [on GitHub](https://github.com/Microsoft/azure-pipelines-tasks). Feedback and contributions are welcome.
