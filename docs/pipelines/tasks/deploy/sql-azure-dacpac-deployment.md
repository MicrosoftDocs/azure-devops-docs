---
title: Azure SQL Database Deployment task
description: Deploy Azure SQL DB using DACPAC or run scripts using SQLCMD
ms.topic: reference
ms.assetid: CE85A08B-A538-4D2B-8589-1D37A9AB970F
ms.custom: seodec18
ms.author: ronai
author: RoopeshNair
ms.date: 04/28/2020
monikerRange: 'azure-devops'
---

# Azure SQL Database Deployment task

**Azure Pipelines**

Use this task to deploy to Azure SQL DB using a DACPAC or run scripts using SQLCMD.

> [!IMPORTANT]
> This task is supported only in a Windows environment. If you are trying to use Azure Active Directory (Azure AD) integrated authentication, you must create a private agent. Azure AD integrated authentication is not supported for hosted agents.

::: moniker range="> tfs-2018"

## YAML snippet

[!INCLUDE [temp](../includes/yaml/SqlAzureDacpacDeploymentV1.md)]

::: moniker-end

## Arguments

|Argument|Description|
|--- |--- |
|`ConnectedServiceNameSelector`<br/>Azure Connection Type|(Optional) Argument alias: `azureConnectionType` <br/>Default value: `ConnectedServiceNameARM`|
|`ConnectedServiceName`<br/>Azure Classic Subscription|(Required) Target Azure Classic subscription for deploying SQL files <br/>Argument alias: `azureClassicSubscription`|
|`ConnectedServiceNameARM`<br/>Azure Subscription|(Required) Target Azure Resource Manager subscription for deploying SQL files <br/>Argument alias: `azureSubscription`|
|`AuthenticationType`<br/>Authentication Type|(Required) Type of database authentication, can be SQL Server Authentication, Active Directory - Integrated, Active Directory - Password, Connection String, or Service Principal. Integrated authentication means that the agent will access the database using its current Active Directory account context. <br/>Default value: `server`|
|`ServerName`<br/>Azure SQL Server|(Required except when Authentication Type is Connection String) Azure SQL Server name, like `Fabrikam.database.windows.net,1433` or `Fabrikam.database.windows.net.`|
|`DatabaseName`<br/>Database|(Required) Name of the Azure SQL Database, where the files will be deployed.|
|`SqlUsername`<br/>Login|(Required when Authentication Type is SQL Server Authentication or Active Directory - Password) Specify the Azure SQL Server administrator login or Active Directory user name.|
|`SqlPassword`<br/>Password|(Required when Authentication Type is SQL Server Authentication or Active Directory - Password) Password for the Azure SQL Server administrator or Active Directory user. It can accept variables defined in build/release pipelines as '$(passwordVariable)'.You may mark the variable type as 'secret' to secure it.|
|`ConnectionString`<br/>Connection String|(Required when Authentication Type is Connection String) The connection string, including authentication information, for the Azure SQL Server.|
|`TaskNameSelector`<br/>Deploy Type|(Optional) Specify the type of artifact, SQL DACPAC file, SQL Script file, or Inline SQL Script. <br/>Argument alias: `deployType` <br/>Default value: `DacpacTask`|
|`DeploymentAction` <br/>Action| (Required) Choose one of the SQL Actions from the list. <br/><li> Publish, Extract, Export, Import, Script, Drift Report, Deploy Report. <br/>For more details refer [link​](/sql/tools/sqlpackage) <br/>Default value: `Publish`|
|`DacpacFile`<br/>DACPAC File|(Required when Deploy Type is SQL DACPAC file) Location of the DACPAC file on the automation agent or on a UNC path accessible to the automation agent like, `\BudgetIT\Web\Deploy\FabrikamDB.dacpac`. Predefined system variables like, `$(agent.releaseDirectory)` can also be used here.|
|`BacpacFile` <br/>BACPAC File| (Required) Location of the BACPAC file on the automation agent or on a UNC path accessible to the automation agent like `\BudgetIT\Web\Deploy\FabrikamDB.bacpac`. Predefined system variables like, `$(agent.releaseDirectory)` can also be used here
|`SqlFile`<br/>SQL Script|(Required when Deploy Type is SQL Script file) Location of the SQL script file on the automation agent or on a UNC path accessible to the automation agent like, `\BudgetIT\Web\Deploy\FabrikamDB.sql`. Predefined system variables like, `$(agent.releaseDirectory)` can also be used here.|
|`SqlInline`<br/>Inline SQL Script|(Required when Deploy Type is Inline SQL Script) Enter the SQL script to execute on the Database selected above.|
|`PublishProfile`<br/>Publish Profile|(Optional) Publish profile provides fine-grained control over Azure SQL Database creation or upgrades. Specify the path to the publish profile XML file on the agent machine or a UNC share. If the publish profile contains secrets like credentials, upload it to the [secure files](../../library/secure-files.md) library where it is securely stored with encryption. Then use the [Download secure file](../utility/download-secure-file.md) task at the start of your pipeline to download it to the agent machine when the pipeline runs and delete it when the pipeline is complete. Predefined system variables like `$(agent.buildDirectory)` or `$(agent.releaseDirectory)` can also be used in this field.|
|`AdditionalArguments`<br/>Additional SqlPackage.exe Arguments|(Optional) Additional SqlPackage.exe arguments that will be applied when deploying the Azure SQL Database, in case DACPAC option is selected like, `/p:IgnoreAnsiNulls=True /p:IgnoreComments=True`. These arguments will override the settings in the publish profile XML file (if provided).|
|`SqlAdditionalArguments`<br/>Additional Invoke-Sqlcmd Arguments|(Optional) Additional Invoke-Sqlcmd arguments that will be applied when executing the given SQL query on the Azure SQL Database like, `-ConnectionTimeout 100 -OutputSqlErrors`|
|`InlineAdditionalArguments` <br/>Additional Invoke-Sqlcmd Arguments| (Optional) Additional Invoke-Sqlcmd arguments that will be applied when executing the given SQL query on the Azure SQL Database like, `-ConnectionTimeout 100 -OutputSqlErrors`|
|`IpDetectionMethod`<br/>Specify Firewall Rules Using|(Required) For the task to run, the IP Address of the automation agent has to be added to the 'Allowed IP Addresses' in the Azure SQL Server's Firewall. Select auto-detect to automatically add firewall exception for range of possible IP Address of automation agent or specify the range explicitly. <br/>Default value: `AutoDetect`|
|`StartIpAddress`<br/>Start IP Address|(Required) The starting IP Address of the automation agent machine pool like 196.21.30.50.|
|`EndIpAddress`<br/>End IP Address|(Required) The ending IP Address of the automation agent machine pool like 196.21.30.65.|
|`DeleteFirewallRule`<br/>Delete Rule After Task Ends|(Optional) If selected, then after the task ends, the IP Addresses specified here are deleted from the 'Allowed IP Addresses' list of the Azure SQL Server's Firewall.|

## Open source

This task is open source [on GitHub](https://github.com/Microsoft/azure-pipelines-tasks). Feedback and contributions are welcome.
