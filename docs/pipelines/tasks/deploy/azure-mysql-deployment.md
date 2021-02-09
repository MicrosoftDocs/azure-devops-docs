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
|`azureSubscription`<br/>Azure Subscription|(Required) This is needed to connect to your Azure account. To configure new service connection, select the Azure subscription from the list and click 'Authorize'. If your subscription is not listed or if you want to use an existing Service Principal, you can setup an Azure service connection using 'Add' or 'Manage' button. <br/>Argument alias: `connectedServiceName`|
|`serverName`<br/>Host Name|(Required) The name of your Azure Database for MySQL server.<br/><br>Example: `fabrikam.mysql.database.azure.com`.<br><br>The Server name is provided in the Azure portal on the 'Overview' blade of your Azure Database for MySQL server resource.<br><br>When you connect using Mysql Workbench, this is the same value that is used for 'Hostname' in 'Parameters'|
|`databaseName`<br/>Database Name|(Optional) The name of the database. If specified, the task will attempt to create the database if it does not exist.<br><br>If not specified, ensure the database is referenced in the supplied SQL file or inline SQL, where needed.<br><br>**Note:** MySQL database names are case-sensitive.|
|`sqlUsername`<br/>Server Admin Login|(Required) Azure Database for MySQL server supports native MySQL authentication. You can connect and authenticate to a server with the server's admin login. <br/>Example:  bbo1. When you connect using Mysql Workbench, this is the same value that is used for 'Username' in 'Parameters'.|
|`sqlPassword`<br/>Password|(Required) Administrator password for Azure DB for Mysql. In case you don't recall the password you can change the password from Azure portal. It can be variable defined in the pipeline. <br/>Example : $(password).Also, you may mark the variable type as 'secret' to secure it.|
|`taskNameSelector`<br/>Type|(Optional) Accepted values:<br><br>- `SqlTaskFile` (default) for use with the `sqlFile` argument<br>- `InlineSqlTask` for use with the `sqlInline` argument.<br><br>**Note:** These values are case-sensitive.|
|`sqlFile`<br/>MySQL Script|(Required) Full path of the script file on the automation agent or on a UNC path accessible to the automation agent like, `\BudgetIT\DeployBuilds\script.sql`. Also, predefined system variables like, `$(agent.releaseDirectory)` can also be used here. A file containing SQL statements can be used here|
|`sqlInline`<br/>Inline MySQL Script|(Required) Enter the MySQL script to execute on the Database selected above.|
|`sqlAdditionalArguments`<br/>Additional Mysql Arguments|(Optional) Additional options supported by mysql simple SQL shell. These options will be applied when executing the given file on the Azure DB for Mysql. <br/>Example: You can change to default tab separated output format to HTML or even XML format. Or if you have problems due to insufficient memory for large result sets, use the `--quick` option|
|`ipDetectionMethod`<br/>Specify Firewall Rules Using|(Required) For successful execution of the task, we need to enable administrators to access the Azure Database for MySQL Server from the IP Address of the automation agent. By selecting auto-detect you can automatically add firewall exception for range of possible IP Address of automation agent or else you can specify the range explicitly.<br><br>Accepted values:<br><br>- `AutoDetect` to auto-detect the automation agent's public IP address<br>- `IPAddressRange` to explicitly specify the IP address range to configure. Set the IP address range using the `startIpAddress` and `endIpAddress` parameters.<br><br>**Note:** These values are case-sensitive|
|`startIpAddress`<br/>Start IP Address|(Required) The starting IP Address of the automation agent machine pool like 196.21.30.50 .|
|`endIpAddress`<br/>End IP Address|(Required) The ending IP Address of the automation agent machine pool like 196.21.30.65 .|
|`deleteFirewallRule`<br/>Delete Rule After Task Ends|(Optional) If selected, the added exception for IP addresses of the automation agent will be removed for corresponding Azure Database for MySQL|

## Open source

This task is open source [on GitHub](https://github.com/Microsoft/azure-pipelines-tasks). Feedback and contributions are welcome.
