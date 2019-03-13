---
title: Azure Function App for Container task
description: Deploy Azure Functions on Linux using custom images
ms.topic: reference
ms.prod: devops
ms.technology: devops-cicd
ms.assetid: F1EB01AB-EB5F-4D70-8023-87197D65B338
ms.manager: shasb
ms.custom: seodec18
ms.author: shasb
ms.date: 03/13/2019
monikerRange: 'azure-devops'
---

# Azure Function App for Container task

**Azure Pipelines**

Use this task to deploy an Azure Function on Linux using a [custom image](https://docs.microsoft.com/azure/azure-functions/functions-create-function-linux-custom-image).

## Task Inputs

<table><thead><tr><th>Parameters</th><th>Description</th></tr></thead>
<tr><td><code>azureSubscription</code><br/>Azure subscription</td><td>(Required) Name of an [Azure Resource Manager service connection](../../library/connect-to-azure.md).</td></tr>
<tr><td><code>appName</code><br/>App name</td><td>(Required) Name of the Function App for Containers.</td>
<tr><td><code>deployToSlotOrASE</code><br/>Deploy to Slot or App Service Environment</td><td>(Optional) Set to true to deploy to an existing deployment slot or Azure App Service Environment. For both the targets, the task needs a Resource Group name. For the deployment slot option, the default is to deploy to the <b>production</b> slot, or you can specify any other existing slot name. If the deployment target is an Azure App Service environment, leave the slot name as <b>production</b> and just specify the Resource Group name.<br/>Default value: false</td>
<tr><td><code>resourceGroupName</code><br/>Resource group</td><td>(Required if deployToSlotOrASE is true) Name of the Resource Group containing the Function App for Containers.</td>
<tr><td><code>slotName</code><br/>Slot</td><td>(Required) Enter or select an existing slot other than the <b>production</b> slot.<br/>Default value: production</td>
<tr><td><code>imageName</code><br/>Image name</td><td>(Required) Image to be used for deployment. <br/>Example: <b>myregistry.azurecr.io/nginx:latest</b></td>
<tr><td><code>containerCommand</code><br/>Startup command</td><td>(Optional) Startup command to be executed after deployment.</td>
<tr><td><code>appSettings</code><br/>App settings</td><td>(Optional) Application settings to be entered using the syntax '-key value'. Values containing spaces should be enclosed in double quotes. <br/>Example: <b>-Port 5000 -RequestTimeout 5000 -WEBSITE_TIME_ZONE "Eastern Standard Time"</b></td>
<tr><td><code>configurationStrings</code><br/>Configuration settings</td><td>(Optional) Configuration strings to be entered using the syntax '-key value'. Values containing spaces should be enclosed in double quotes. <br/>Example: <b>-phpVersion 5.6 -linuxFxVersion: node|6.11</b></td>
</table>

## Example

This example deploys Azure Functions on Linux using containers:

```YAML

variables:
  imageName: contoso.azurecr.io/azurefunctions-containers:$(build.buildId)
  azureSubscription: Contoso
  # To ignore SSL error uncomment the following variable
  # VSTS_ARM_REST_IGNORE_SSL_ERRORS: true

steps:
- task: AzureFunctionAppContainer@1
  displayName: Azure Function App on Container deploy
  inputs:
    azureSubscription: $(azureSubscription)
    appName: functionappcontainers
    imageName: $(imageName)
```

## Open Source

This task is open source [on GitHub](https://github.com/Microsoft/vsts-tasks). Feedback and contributions are welcome.
