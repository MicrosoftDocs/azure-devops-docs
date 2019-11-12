---
title: Azure Database for Mysql Deployment task
description: Run your scripts and make changes to your Azure DB for Mysql. 
ms.topic: reference
ms.prod: devops
ms.technology: devops-cicd
ms.assetid: BD1BED02-F04E-11E7-8C3F-9A214CF093AE
ms.manager: mijacobs
ms.custom: seodec18
ms.author: ronai
author: RoopeshNair
ms.date: 12/07/2018
monikerRange: 'azure-devops'
---

# Azure Database for Mysql Deployment task

**Azure Pipelines**

Use this task in a build or release pipeline to run your scripts and make changes to your Azure DB for Mysql. Note that this is an early preview version.

::: moniker range="> tfs-2018"

## YAML snippet

[!INCLUDE [temp](../_shared/yaml/AzureMysqlDeploymentV1.md)]

::: moniker-end

## Arguments

<table><thead><tr><th>Argument</th><th>Description</th></tr></thead>
<tr><td>Azure Subscription</td><td>(Required) This is needed to connect to your Azure account.<br>To configure new service connection, select the Azure subscription from the list and click &#39;Authorize&#39;.<br>If your subscription is not listed or if you want to use an existing Service Principal, you can setup an Azure service connection using &#39;Add&#39; or &#39;Manage&#39; button.</td></tr>
<tr><td>Host Name</td><td>(Required) Server name of &#39;Azure DB for Mysql&#39;.Example: fabrikam.mysql.database.azure.com. When you connect using Mysql Workbench, this is the same value that is used for &#39;Hostname&#39; in &#39;Parameters&#39;</td></tr>
<tr><td>Database Name</td><td>(Optional) The name of database, if you already have one, on which the below script is needed to be run, else the script itself can be used to create the database.</td></tr>
<tr><td>Server Admin Login</td><td>(Required) Azure Database for MySQL server supports native MySQL authentication. You can connect and authenticate to a server with the server&#39;s admin login. Example:  bbo1<xref href="fabrikam" data-throw-if-not-resolved="False" data-raw-source="@fabrikam"></xref>. When you connect using Mysql Workbench, this is the same value that is used for &#39;Username&#39; in &#39;Parameters&#39;.</td></tr>
<tr><td>Password</td><td>(Required) Administrator password for Azure DB for Mysql. In case you don&#39;t recall the password you can change the password from <a href="/azure/mysql/howto-create-manage-server-portal" data-raw-source="[Azure portal](/azure/mysql/howto-create-manage-server-portal)">Azure portal</a>.<br>It can be variable defined in the pipeline. Example : $(password).<br>Also, you may mark the variable type as &#39;secret&#39; to secure it.</td></tr>
<tr><td>Type</td><td>(Optional) Select one of the options between Script File &amp; Inline Script.</td></tr>
<tr><td>MySQL Script</td><td>(Required) Full path of the script file on the automation agent or on a UNC path accessible to the automation agent like,  \BudgetIT\DeployBuilds\script.sql. Also, predefined system variables like, $(agent.releaseDirectory) can also be used here. A file containing SQL statements can be used here.?</td></tr>
<tr><td>Inline MySQL Script</td><td>(Required) Enter the MySQL script to execute on the Database selected above.</td></tr>
<tr><td>Additional Mysql Arguments</td><td>(Optional) Additional options supported by mysql simple SQL shell.  These options will be applied when executing the given file on the Azure DB for Mysql.?<br>Example: You can change to default tab separated output format to HTML or even XML format. Or if you have problems due to insufficient memory for large result sets, use the --quick option.?</td></tr>
<tr><td>Specify Firewall Rules Using</td><td>(Required) For successful execution of the task, we need to enable administrators to access the Azure Database for MySQL Server from the IP Address of the automation agent.<br>By selecting auto-detect you can automatically add firewall exception for range of possible IP Address of automation agent ?or else you can specify the range explicitly.</td></tr>
<tr><td>Start IP Address</td><td>(Required) The starting IP Address of the automation agent machine pool like 196.21.30.50 .</td></tr>
<tr><td>End IP Address</td><td>(Required) The ending IP Address of the automation agent machine pool like 196.21.30.65 .</td></tr>
<tr><td>Delete Rule After Task Ends</td><td>(Optional) If selected, the added exception for IP addresses of the automation agent will be removed for corresponding Azure Database for MySQL.</td></tr>


<tr>
<th style="text-align: center" colspan="2"><a href="~/pipelines/process/tasks.md#controloptions" data-raw-source="[Control options](../../process/tasks.md#controloptions)">Control options</a></th>
</tr>

</table>

## Open source

This task is open source [on GitHub](https://github.com/Microsoft/azure-pipelines-tasks). Feedback and contributions are welcome.
