---
title: Azure App Service Settings task
description:  Azure App Service Settings Task supports configuring App settings, connection strings and other general settings in bulk using JSON syntax on your web app or any of its deployment slots. 
ms.topic: reference
ms.assetid: 57D04B69-1068-4A06-80B8-4C0FE7BEEC55
ms.author: ushan
author: n-usha
ms.date: 04/06/2020
monikerRange: 'azure-devops'
---

# Azure App Service Settings task

[!INCLUDE [include](../../includes/version-team-services.md)]

Use this task to configure App settings, connection strings and other general settings in bulk using JSON syntax on your web app or any of its deployment slots. 
The task works on cross platform Azure Pipelines agents running Windows, Linux or Mac.
The task works for ASP.NET, ASP.NET Core, PHP, Java, Python, Go and Node.js based web applications.

## Arguments

|Parameters|Description|
|--- |--- |
|`ConnectedServiceName`<br/>Azure subscription|(Required) Name of the Azure Resource Manager service connection <br/>Argument aliases: `ConnectedServiceName`|
|`appName`<br/>App name|(Required) Name of an existing App Service|
|`resourceGroupName`<br/>Resource group|(Optional) Name of the resource group|
|`slotName`<br/>Slot|(Optional) Name of the slot<br/>Default value: `production`|
|`appSettings`<br/>App settings|(Optional) Application settings to be entered using JSON syntax. Values containing spaces should be enclosed in double quotes.|
|`generalSettings`<br/>General settings|(Optional) General settings to be entered using JSON syntax. Values containing spaces should be enclosed in double quotes. See the [App Service SiteConfig object documentation](/azure/templates/microsoft.web/sites#siteconfig-object) for the available properties.|
|`connectionStrings`<br/>Connection settings|(Optional) Connection strings to be entered using JSON syntax. Values containing spaces should be enclosed in double quotes.|

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

- task: AzureAppServiceSettings@1
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
          "value": "$(Key)",
          "slotSetting": false
        },
        {
          "name": "MYSQL_DATABASE_NAME",
          "value": "$(DB_Name)", 
          "slotSetting": false
        }
      ]
    generalSettings: |
      [
        {
          "alwaysOn": true,
          "webSocketsEnabled": false
        }
      ]
    connectionStrings: |
      [
        {
          "name": "MysqlCredentials",
          "value": "$(MySQl_ConnectionString)",
          "type": "MySql",
          "slotSetting": false
        }
      ]

```

## Open Source

This task is open source [on GitHub](https://github.com/Microsoft/azure-pipelines-tasks). Feedback and contributions are welcome.
