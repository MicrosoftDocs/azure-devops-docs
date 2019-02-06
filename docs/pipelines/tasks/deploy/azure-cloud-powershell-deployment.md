---
title: Azure Cloud Service Deployment task
description: Deploy an Azure Cloud Service
ms.topic: reference
ms.prod: devops
ms.technology: devops-cicd
ms.assetid: 2CA8FE15-42EA-4B26-80F1-E0738EC17E89
ms.manager: dastahel
ms.custom: seodec18
ms.author: dastahel
ms.date: 12/07/2018
monikerRange: 'azure-devops'
---

# Azure Cloud Service Deployment task

**Azure Pipelines**

Use this task in a build or release pipeline to deploy an Azure Cloud Service.

::: moniker range="> tfs-2018"
## YAML snippet
[!INCLUDE [temp](../_shared/yaml/AzureCloudPowerShellDeploymentV1.md)]
::: moniker-end

## Arguments

<table><thead><tr><th>Argument</th><th>Description</th></tr></thead>
<tr><td>Azure subscription (Classic)</td><td>(Required) Azure Classic subscription to target for deployment.</td></tr>
<tr><td>Storage account</td><td>(Required) Storage account must exist prior to deployment.</td></tr>
<tr><td>Service name</td><td>(Required) Select or enter an existing cloud service name.</td></tr>
<tr><td>Service location</td><td>(Required) Select a region for new service deployment.Possible options are **East US**, **East US 2**, **Central US**, **South Central US**, **West US**, **North Europe**, **West Europe** and others.</td></tr>
<tr><td>CsPkg</td><td>(Required) Path of CsPkg under the default artifact directory.</td></tr>
<tr><td>CsCfg</td><td>(Required) Path of CsCfg under the default artifact directory.</td></tr>
<tr><td>Environment (Slot)</td><td>(Required) **Production** or **Staging**</td></tr>
<tr><td>Deployment label</td><td>(Optional) Specifies the label name for the new deployment. If not specified, a Globally Unique Identifier (GUID) is used.</td></tr>
<tr><td>Append current date and time</td><td>(Optional) Appends current date and time to deployment label</td></tr>
<tr><td>Allow upgrade</td><td>(Required) When selected allows an upgrade to the Microsoft Azure deployment</td></tr>
<tr><td>Simultaneous upgrade</td><td>(Optional) Updates all instances at once. Your cloud service will be unavailable during update.</td></tr>
<tr><td>Force upgrade</td><td>(Optional) When selected sets the upgrade to a forced upgrade, which could potentially cause loss of local data.</td></tr>
<tr><td>Diagnostic storage account keys</td><td>(Optional) Provide storage keys for diagnostics storage account in Role:Storagekey format. The diagnostics storage account name for each role will be obtained from diagnostics config file (.wadcfgx). If the .wadcfgx file for a role is not found, diagnostics extensions won’t be set for the role. If the storage account name is missing in the .wadcfgx file, the default storage account will be used for storing diagnostics results and the storage key parameters from deployment task will be ignored. It’s recommended to save <storage_account_key> as a secret variable unless there is no sensitive information in the diagnostics result for your stage. <br/><br/>For example,<br/> WebRole: &lt;WebRole_storage_account_key&gt;<br/>WorkerRole: &lt;WorkerRole_storage_account_key&gt;</td></tr>
<tr><td>Custom certificates to import</td><td>(Optional) Provide custom certificates in CertificatePfxBase64:CertificatePassword format. It’s recommended to save <certificate_password> as a secret variable. <br/><br/>For example,<br/> Certificate1: &lt;Certificate1_password&gt;<br/>Certificate2: &lt;Certificate2_password&gt;</td></tr>
<tr><td>Additional arguments</td><td>(Optional) Pass in additional arguments while creating a brand new service. These will be passed on to `New-AzureService` cmdlet. Eg: `-Label 'MyTestService'`</td></tr>
<tr><td>Affinity group</td><td>(Optional) While creating new service, this affinity group will be considered instead of using service location.</td></tr>
[!INCLUDE [temp](../_shared/control-options-arguments.md)]
</table>

## Open source

This task is open source [on GitHub](https://github.com/Microsoft/azure-pipelines-tasks). Feedback and contributions are welcome.
