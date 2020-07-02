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
|`ConnectedServiceName`<br/>Azure Subscription|(Required) This is needed to connect to your Azure account. To configure new service connection, select the Azure subscription from the list and click 'Authorize'. If your subscription is not listed or if you want to use an existing Service Principal, you can setup an Azure service connection using 'Add' or 'Manage' button. <br/>Argument alias: `azureSubscription`|
|`ServerName`<br/>Host Name|(Required) Server name of 'Azure DB for Mysql'.<br/>Example: fabrikam.mysql.database.azure.com. When you connect using Mysql Workbench, this is the same value that is used for 'Hostname' in 'Parameters'|
|`DatabaseName`<br/>Database Name|(Optional) The name of database, if you already have one, on which the below script is needed to be run, else the script itself can be used to create the database.|
|`SqlUsername`<br/>Server Admin Login|(Required) Azure Database for MySQL server supports native MySQL authentication. You can connect and authenticate to a server with the server's admin login. <br/>Example:  bbo1. When you connect using Mysql Workbench, this is the same value that is used for 'Username' in 'Parameters'.|
|`SqlPassword`<br/>Password|(Required) Administrator password for Azure DB for Mysql. In case you don't recall the password you can change the password from Azure portal. It can be variable defined in the pipeline. <br/>Example : $(password).Also, you may mark the variable type as 'secret' to secure it.|
|`TaskNameSelector`<br/>Type|(Optional) Select one of the options between Script File & Inline Script.|
|`SqlFile`<br/>MySQL Script|(Required) Full path of the script file on the automation agent or on a UNC path accessible to the automation agent like, `\BudgetIT\DeployBuilds\script.sql`. Also, predefined system variables like, `$(agent.releaseDirectory)` can also be used here. A file containing SQL statements can be used here|
|`SqlInline`<br/>Inline MySQL Script|(Required) Enter the MySQL script to execute on the Database selected above.|
|`SqlAdditionalArguments`<br/>Additional Mysql Arguments|(Optional) Additional options supported by mysql simple SQL shell. These options will be applied when executing the given file on the Azure DB for Mysql. <br/>Example: You can change to default tab separated output format to HTML or even XML format. Or if you have problems due to insufficient memory for large result sets, use the `--quick` option|
|`IpDetectionMethod`<br/>Specify Firewall Rules Using|(Required) For successful execution of the task, we need to enable administrators to access the Azure Database for MySQL Server from the IP Address of the automation agent. By selecting auto-detect you can automatically add firewall exception for range of possible IP Address of automation agent or else you can specify the range explicitly.|
|`StartIpAddress`<br/>Start IP Address|(Required) The starting IP Address of the automation agent machine pool like 196.21.30.50 .|
|`EndIpAddress`<br/>End IP Address|(Required) The ending IP Address of the automation agent machine pool like 196.21.30.65 .|
|`DeleteFirewallRule`<br/>Delete Rule After Task Ends|(Optional) If selected, the added exception for IP addresses of the automation agent will be removed for corresponding Azure Database for MySQL|

## Open source

This task is open source [on GitHub](https://github.com/Microsoft/azure-pipelines-tasks). Feedback and contributions are welcome.
