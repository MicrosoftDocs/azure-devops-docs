---
title: Azure App Service Settings task
description:  Azure App Service Settings Task supports configuring App settings, connection strings and other general settings in bulk using JSON syntax on your web app or any of its deployment slots. 
ms.prod: devops
ms.technology: devops-cicd
ms.topic: reference
ms.assetid: 57D04B69-1068-4A06-80B8-4C0FE7BEEC55
ms.manager: jillfra
ms.author: ushan
author: n-usha
ms.date: 9/5/2019
monikerRange: 'azure-devops'
---

# Azure Web App task

[!INCLUDE [include](../../_shared/version-team-services.md)]

Use this task to configure App settings, connection strings and other general settings in bulk using JSON syntax on your web app or any of its deployment slots. 
The task works on cross platform Azure Pipelines agents running Windows, Linux or Mac.
The task works for ASP.NET, ASP.NET Core, PHP, Java, Python, Go and Node.js based web applications.

## Arguments

<table><thead><tr><th>Parameters</th><th>Description</th></tr></thead>
<tr><td><code>azureSubscription</code><br/>Azure subscription</td><td>(Required) Name of the <a href="../../library/connect-to-azure.md" data-raw-source="[Azure Resource Manager service connection](../../library/connect-to-azure.md)">Azure Resource Manager service connection</a></td></tr>
<tr><td><code>appName</code><br/>App name</td><td>(Required) Name of an existing App Service</td>
<tr><td><code>resourceGroupName</code><br/>Resource group</td><td>(Required if deployToSlotOrASE is true) Name of the resource group</td>
<tr><td><code>slotName</code><br/>Slot</td><td>(Required if settings were to e be applied to Slot) Name of the slot<br/>Default value: production</td>
<tr><td><code>appSettings</code><br/>App settings</td><td>(Optional) Application settings to be entered using JSON syntax. Values containing spaces should be enclosed in double quotes. <br/></td>
<tr><td><code>generalSettings</code><br/>General settings</td><td>(Optional) General settings to be entered using JSON syntax. Values containing spaces should be enclosed in double quotes. <br/></td>
<tr><td><code>connectionStrings</code><br/>Connection settings</td><td>(Optional) Connection strings to be entered using JSON syntax. Values containing spaces should be enclosed in double quotes.<br/></td>
</table>

Following is an example YAML snippet to deploy web application to the Azure Web App service running on windows.

## Example

```YAML

variables:
  azureSubscription: Contoso
  WebApp_Name: sampleWebApp
  # To ignore SSL error uncomment the below variable
  # VSTS_ARM_REST_IGNORE_SSL_ERRORS: true

steps:

- task: AzureWebApp@1
  displayName: Azure Web App Deploy
  inputs:
    azureSubscription: $(azureSubscription)
    appName: $(WebApp_Name)
    package: $(System.DefaultWorkingDirectory)/**/*.zip

- task: AzureAppServiceSettings@0
  displayName: Azure App Service Settings
  inputs:
    azureSubscription: $(azureSubscription)
    appName: $(WebApp_Name)
   # To deploy the settings on a slot, provide slot name as below. By default, the settings would be applied to the actual Web App (Production slot)
   # slotName: staging
    appSettings: |
      [
        {
          "name": "APPINSIGHTS_INSTRUMENTATIONKEY",
          "value": $(Key),
          "slotSetting": false
        },
        {
          "name": "MYSQL_DATABASE_NAME",
          "value": $(DB_Name), 
          "slotSetting": false
        }
      ]
    generalSettings: |
      [
        {
          "name": "WEBAPP_NAME",
          "value": $(WebApp_Name),
          "slotSetting": false
        },
        {
          "name": "WEBAPP_PLAN_NAME",
          "value": $(WebApp_PlanName),
          "slotSetting": false
        }
      ]
  connectionStrings: |
      [
        {
          "name": "MysqlCredentials",
          "value": $(MySQl_ConnectionString),
          "type": "MySql",
          "slotSetting": false
        }
      ]

```
## Open Source

This task is open source [on GitHub](https://github.com/Microsoft/vsts-tasks). Feedback and contributions are welcome.
