---
title: Troubleshoot Managed DevOps Pools issues
description: Learn how to troubleshoot common issues with Managed DevOps Pools.
ms.topic: how-to
ms.date: 10/30/2024
---

# Troubleshoot Managed DevOps Pools issues

This article provides solutions to common Managed DevOps Pools issues.

## Pool creation errors

| Error code | Description |
|-------|------------------|
| `PoolProvisioningFailed` | [Pool creation failure due to Azure DevOps organization permissions](#pool-creation-failure-due-to-azure-devops-organization-permissions) |
| `UnauthorizedAccessToVirtualNetwork` | [Pool creation failure due to VNet permissions](#pool-creation-failure-due-to-vnet-permissions) |

### Pool creation failure due to Azure DevOps organization permissions

Pool creation fails with a `PoolProvisioningFailed` error similar to the following error: `Validation failure "PoolProvisioningFailed": "Failed to provision agent pool. Exception: The logged in user, <your user>, was not found in the Azure DevOps organization provided, <your Azure DevOps organization>.`.

To resolve this issue:
* Your Azure DevOps organization must be connected to Microsoft Entra ID and your logged in Azure user must be a member of this tenant. See [Managed DevOps Pools prerequisites - Connect your Azure DevOps organization to Microsoft Entra ID and verify membership](./prerequisites.md#connect-your-azure-devops-organization-to-microsoft-entra-id-and-verify-membership).
* Your logged in Azure user must have the proper Azure DevOps permissions to create a pool. See [Azure DevOps prerequisites - Verify Azure DevOps permissions](./prerequisites.md#verify-azure-devops-permissions).


### Pool creation failure due to VNet permissions

Pool creation fails with a `UnauthorizedAccessToVirtualNetwork` error similar to the following error: `Validation failure "UnauthorizedAccessToVirtualNetwork": "DevOpsInfrastructure service principal does not have Read access to virtual network <your VNet> in resource group <your resource group>. Give Reader and Network Contributor access to DevOpsInfrastructure service principal and try again.`.

To resolve this issue:
* Managed DevOps Pools requires access to your virtual network. See [Grant Reader and Network Contributor access to DevOpsInfrastructure service principal](./configure-networking.md#grant-reader-and-network-contributor-access-to-devopsinfrastructure-service-principal).
* The virtual network subnet needs to be delegated to `Microsoft.DevOpsInfrastructure/pools`. See [Delegate the subnet to Microsoft.DevOpsInfrastructure/pools](./configure-networking.md#delegate-the-subnet-to-microsoftdevopsinfrastructurepools).

## See also

* [Managed DevOps Pools prerequisites](./prerequisites.md)
* [Configure Managed DevOps Pools networking](./configure-networking.md)
