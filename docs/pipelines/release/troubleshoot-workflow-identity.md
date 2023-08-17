---
title: Troubleshoot Azure Resource Manager workflow identity service connections
ms.custom: seodec18, devx-track-arm-template
description: How to troubleshoot workflow identity service connections in Azure Pipelines
ms.topic: troubleshooting-general
ms.author: jukullam
author: juliakm
ms.date: 08/17/2023
monikerRange: '>= azure-devops'
"recommendations": "true"
---


# Troubleshoot Azure Resource Manager workflow identity service connections

> [!IMPORTANT]
> Workload Identity federation for Azure Resource Manager is currently in public preview.
> See the [Supplemental Terms of Use for Microsoft Azure Previews](https://azure.microsoft.com/support/legal/preview-supplemental-terms/) for legal terms that apply to Azure features that are in beta, preview, or otherwise not yet released into general availability.

Get help debugging common issues with workflow identity service connections and learn how to manually create a service connection if necessary. 


## Troubleshooting check list

### Review pipeline tasks

Not all pipelines tasks support workflow identity. During the preview, no Azure Marketplace tasks support workflow identity service connections. Check the [list of supported tasks](https://github.com/microsoft/azure-pipelines-tasks/blob/users/geekzter/oidc-preview-docs/docs/service-connections/azure-oidc/troubleshooting.md#task-coverage). Packer and Service Fabric don't currently support workflow identity. 

### Verify workflow identity federation is active

If you see the error message `AADSTS700223`, workflow identity federation was disabled in the Azure portal for your Microsoft Entra tenant. 

Sign in to the Azure portal and verify that there are no policies in place that block federated credentials. 

### Check the issuer URL for accuracy

If you see a message that there is `no matching federated identity record found`, either the issuer URL or federation subject does not match. The correct issuer URL show start with `https://vstoken.dev.azure.com`. 

You can fix the issuer URL by editing and saving the service connection to update the issuer URL. For identities that not been created by Azure DevOps, the issuer needs to be updated manually. For Azure identities, the issuer URL automatically updates.  



## Cause 1: I don't have permission to create a service principal in the Azure Entra ID tenant

You can't use the the service connection configuration tool when you don't have the correct permissions. Your permission level is inadequate if you don't have permission to create service principals or you are using a different Azure Entra ID tenant than your Azure DevOps user. 

### Solution 1: Manually configure workflow identity 

See `https://github.com/microsoft/azure-pipelines-tasks/blob/users/geekzter/oidc-preview-docs/docs/service-connections/azure-oidc/manual-configuration.md`

1. Step 1.
2. Step 2.


## Cause 2: I can't enable features for my organization
TODO: Add a description of the cause.


### Solution 2: Verify organization admins and enable features

1. Find your organization owners on the organization settings page `https://dev.azure.com/<org>/_settings/organizationOverview`. 
1. Make sure the preview feature Workload Identity federation for ARM service connections is enabled for your organization, see [manage or enable features](../../project/navigation/preview-features.md). 
