---
title: Azure Cloud Service Deployment task
description: Deploy an Azure Cloud Service
ms.topic: reference
ms.assetid: 2CA8FE15-42EA-4B26-80F1-E0738EC17E89
ms.custom: seodec18
ms.author: ronai
author: RoopeshNair
ms.date: 04/22/2020
monikerRange: 'azure-devops'
---

# Azure Cloud Service Deployment task

**Azure Pipelines**

Use this task to deploy an Azure Cloud Service.

::: moniker range="> tfs-2018"

## YAML snippet

[!INCLUDE [temp](../includes/yaml/AzureCloudPowerShellDeploymentV1.md)]

::: moniker-end

## Arguments

|Argument|Description|
|--- |--- |
|`ConnectedServiceName`<br/>Azure subscription (Classic)|(Required) Azure Classic subscription to target for deployment. <br/>Argument alias: `azureClassicSubscription`|
|`EnableAdvancedStorageOptions` <br/>Enable Azure Resource Manager storage support| (Required) Select to enable Azure Resource Manager storage support for this task|
|`StorageAccount`<br/>Storage account (Classic)|(Required) Storage account must exist prior to deployment.|
|`ARMConnectedServiceName` <br/>Azure subscription (Azure Resource Manager)| (Required) Azure Resource Manager subscription|
|`ARMStorageAccount` <br/>Storage account (Azure Resource Manager)| (Required) Choose a pre-existing Azure Resource Manager storage account|
|`ServiceName`<br/>Service name|(Required) Select or enter an existing cloud service name.|
|`ServiceLocation`<br/>Service location|(Required) Select a region for new service deployment.Possible options are East US, East US 2, Central US, South Central US, West US, North Europe, West Europe and others.|
|`CsPkg`<br/>CsPkg|(Required) Path of CsPkg under the default artifact directory.|
|`CsCfg`<br/>CsCfg|(Required) Path of CsCfg under the default artifact directory.|
|`Slot`<br/>Environment (Slot)|(Required) Production or Staging <br/>Default value: `Production` <br/>Argument alias: `slotName`|
|`DeploymentLabel`<br/>Deployment label|(Optional) Specifies the label name for the new deployment. If not specified, a Globally Unique Identifier (GUID) is used. <br/>Default value: `$(Build.BuildNumber)`|
|`AppendDateTimeToLabel`<br/>Append current date and time|(Optional) Appends current date and time to deployment label <br/>Default value: `false`|
|`AllowUpgrade`<br/>Allow upgrade|(Required) When selected allows an upgrade to the Microsoft Azure deployment <br/>Default value: `true`|
|`SimultaneousUpgrade`<br/>Simultaneous upgrade|(Optional) Updates all instances at once. Your cloud service will be unavailable during update. <br/>Default value: `false`|
|`ForceUpgrade`<br/>Force upgrade|(Optional) When selected sets the upgrade to a forced upgrade, which could potentially cause loss of local data. <br/>Default value: `false`|
|`VerifyRoleInstanceStatus` <br/>Verify role instance status| When selected then the task will wait until role instances are in ready state|
|`DiagnosticStorageAccountKeys`<br/>Diagnostic storage account keys|(Optional) Provide storage keys for diagnostics storage account in `Role:Storagekey` format. The diagnostics storage account name for each role will be obtained from diagnostics config file `(.wadcfgx)`. If the `.wadcfgx` file for a role is not found, diagnostics extensions won’t be set for the role. If the storage account name is missing in the `.wadcfgx` file, the default storage account will be used for storing diagnostics results and the storage key parameters from deployment task will be ignored. It’s recommended to save <storage_account_key> as a secret variable unless there is no sensitive information in the diagnostics result for your stage. <br/>For example, WebRole: <WebRole_storage_account_key> <br/>WorkerRole: <WorkerRole_storage_account_key>|
|`NewServiceCustomCertificates`<br/>Custom certificates to import|(Optional) Provide custom certificates in CertificatePfxBase64:CertificatePassword format. It’s recommended to save <certificate_password> as a secret variable. <br/>For example, Certificate1: <Certificate1_password> <br/>Certificate2: <Certificate2_password>|
|`NewServiceAdditionalArguments`<br/>Additional arguments|(Optional) Pass in additional arguments while creating a brand new service. These will be passed on to New-AzureService cmdlet. Eg: -Label 'MyTestService'|
|`NewServiceAffinityGroup`<br/>Affinity group|(Optional) While creating new service, this affinity group will be considered instead of using service location.|

## Open source

This task is open source [on GitHub](https://github.com/Microsoft/azure-pipelines-tasks). Feedback and contributions are welcome.
