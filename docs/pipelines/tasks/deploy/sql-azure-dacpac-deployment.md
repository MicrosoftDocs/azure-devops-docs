---
title: Azure SQL Database Deployment
description: Deploy Azure SQL DB using DACPAC or run scripts using SQLCMD
ms.topic: reference
ms.prod: devops
ms.technology: devops-cicd
ms.assetid: CE85A08B-A538-4D2B-8589-1D37A9AB970F
ms.manager: dastahel
ms.author: dastahel
ms.date: 05/04/2018
monikerRange: 'vsts'
---

# Deploy: Azure SQL Database Deployment

![](_img/sqlazuredacpacdeployment.png) Deploy Azure SQL DB using DACPAC or run scripts using SQLCMD

::: moniker range="vsts"

[!INCLUDE [temp](../_shared/yaml/SqlAzureDacpacDeployment.1.md)]

::: moniker-end

## Arguments

<table><thead><tr><th>Argument</th><th>Description</th></tr></thead>
<tr><td>Azure Connection Type</td><td>(Optional) </td></tr>
<tr><td>Azure Classic Subscription</td><td>(Required) Target Azure Classic subscription for deploying SQL files</td></tr>
<tr><td>Azure Subscription</td><td>(Required) Target Azure Resource Manager subscription for deploying SQL files</td></tr>
<tr><td>Azure SQL Server Name</td><td>(Required) Azure SQL Server name, like Fabrikam.database.windows.net,1433 or Fabrikam.database.windows.net.</td></tr>
<tr><td>Database Name</td><td>(Required) Name of the Azure SQL Database, where the files will be deployed.</td></tr>
<tr><td>Server Admin Login</td><td>(Optional) Specify the Azure SQL Server administrator login.</td></tr>
<tr><td>Password</td><td>(Optional) Password for the Azure SQL Server administrator.<br>It can accept variable defined in Build/Release Definitions as '$(passwordVariable)'.<br>You may mark the variable type as 'secret' to secure it.</td></tr>
<tr><td>Type</td><td>(Optional) </td></tr>
<tr><td>DACPAC File</td><td>(Required) Location of the DACPAC file on the automation agent or on a UNC path accessible to the automation agent like, \\\\BudgetIT\Web\Deploy\FabrikamDB.dacpac. Predefined system variables like, $(agent.releaseDirectory) can also be used here.</td></tr>
<tr><td>SQL Script</td><td>(Required) Location of the SQL script file on the automation agent or on a UNC path accessible to the automation agent like, \\\\BudgetIT\Web\Deploy\FabrikamDB.sql. Predefined system variables like, $(agent.releaseDirectory) can also be used here.</td></tr>
<tr><td>Inline SQL Script</td><td>(Required) Enter the SQL script to execute on the Database selected above.</td></tr>
<tr><td>Publish Profile</td><td>(Optional) Publish profile provides fine-grained control over Azure SQL Database creation or upgrades. Specify the path to the Publish profile XML file on the automation agent or on a UNC share. Predefined system variables like, $(agent.buildDirectory) or $(agent.releaseDirectory) can also be used here.</td></tr>
<tr><td>Additional SqlPackage.exe Arguments</td><td>(Optional) Additional SqlPackage.exe arguments that will be applied when deploying the Azure SQL Database, in case DACPAC option is selected like, /p:IgnoreAnsiNulls=True /p:IgnoreComments=True. These arguments will override the settings in the Publish profile XML file (if provided).</td></tr>
<tr><td>Additional Invoke-Sqlcmd Arguments</td><td>(Optional) Additional Invoke-Sqlcmd arguments that will be applied when executing the given SQL query on the Azure SQL Database like, -ConnectionTimeout 100 -OutputSqlErrors.</td></tr>
<tr><td>Additional Invoke-Sqlcmd Arguments</td><td>(Optional) Additional Invoke-Sqlcmd arguments that will be applied when executing the given SQL query on the Azure SQL Database like, -ConnectionTimeout 100 -OutputSqlErrors</td></tr>
<tr><td>Specify Firewall Rules Using</td><td>(Required) For the task to run, the IP Address of the automation agent has to be added to the 'Allowed IP Addresses' in the Azure SQL Server's Firewall. Select auto-detect to automatically add firewall exception for range of possible IP Address of automation agent or specify the range explicitly.</td></tr>
<tr><td>Start IP Address</td><td>(Required) The starting IP Address of the automation agent machine pool like 196.21.30.50.</td></tr>
<tr><td>End IP Address</td><td>(Required) The ending IP Address of the automation agent machine pool like 196.21.30.65.</td></tr>
<tr><td>Delete Rule After Task Ends</td><td>(Optional) If selected, then after the task ends, the IP Addresses specified here are deleted from the 'Allowed IP Addresses' list of the Azure SQL Server's Firewall.</td></tr>
[!INCLUDE [temp](../_shared/control-options-arguments.md)]
</table>

## Q&A

<!-- BEGINSECTION class="md-qanda" -->

<!-- ENDSECTION -->
