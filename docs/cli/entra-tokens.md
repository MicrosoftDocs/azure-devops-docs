---
ms.topic: how-to
title: Issue Entra tokens with Azure CLI
description: Use Microsoft Entra authentication on top of Azure CLI
ms.assetid: 19285121-1805-4421-B7C4-63784C9A7CFA
ms.subservice: azure-devops-security
monikerRange: 'azure-devops'
ms.author: chcomley
author: chcomley
ms.date: 05/12/2025
---

# Issue Entra tokens with Azure CLI

Use the [**Azure CLI**](/cli/azure/install-azure-cli) to issue a [Microsoft Entra token](../integrate/get-started/authentication/entra.md) and call [Azure DevOps REST APIs](/rest/api/azure/devops/). Since Entra access tokens only last for one hour, they're ideal for quick one-off operations. You can use Azure CLI to acquire a user token for yourself or on behalf of a [service principal](../integrate/get-started/authentication/service-principal-managed-identity.md).

## Prerequisites

| Category | Requirements |
|------------|------------|
| Entra tenant and subscription    | Make sure the subscription is associated with the tenant connected to the Azure DevOps organization you're trying to access. If you don't know your tenant or subscription ID, you can find it in the [Azure portal](/azure/azure-portal/get-subscription-tenant-id).     |
| Azure CLI     | Download and install the [Azure CLI](/cli/azure/install-azure-cli). |
| Entra app | (If authenticating for a service principal) Create the Entra application and have the app client ID and client secret ready. |

## Acquiring an Entra token for yourself

# [Azure CLI](#tab/azure-cli)

1. Sign in to the Azure CLI using the `az login` command and follow the on-screen instructions.
1. Set the correct subscription for the signed-in user with these bash commands. Make sure the Azure subscription ID is associated with the tenant connected to the Azure DevOps organization you're trying to access. If you don't know your subscription ID, you can find it in the [Azure portal](/azure/azure-portal/get-subscription-tenant-id).
  
   ```bash
   az account set -s <subscription-id>
   ```

1. Generate a Microsoft Entra ID access token with the `az account get-access-token` command using the Azure DevOps resource ID: `499b84ac-1321-427f-aa17-267ca6975798`.

   ```bash
   az account get-access-token \
   --resource 499b84ac-1321-427f-aa17-267ca6975798 \
   --query "accessToken" \
   -o tsv
   ```

# [Azure PowerShell](#tab/azure-powershell)

1. Sign in to Azure PowerShell using the `Connect-AzAccount` command and follow the on-screen instructions.
1. Set the correct subscription for the signed-in user with these PowerShell commands. Make sure the Azure subscription ID is associated with the tenant connected to the Azure DevOps organization you're trying to access. If you don't know your subscription ID, you can find it in the [Azure portal](/azure/azure-portal/get-subscription-tenant-id).
  
   ```azurepowershell-interactive
   Set-AzContext -Subscription <subscriptionID>
   ```

1. Generate a Microsoft Entra ID access token with the `Get-AzAccessToken` command using the Azure DevOps resource ID: `499b84ac-1321-427f-aa17-267ca6975798`.

   ```azurepowershell-interactive
   Get-AzAccessToken -ResourceUrl '499b84ac-1321-427f-aa17-267ca6975798'
   ```

## Acquiring a token for a service principal

1. Sign in to the Azure CLI as the service principal using the `az devops login` command.
2. Follow the on-screen instructions and finish signing in.
  ``` powershell
  # To authenticate a service principal with a password or cert:
  az login --service-principal -u <app-id> -p <password-or-cert> --tenant <tenant>

  # To authenticate a managed identity:
  az login --identity
  ```

3. Set the right correct subscription for the signed-in service principal by entering the command:
  ``` powershell
  az account set -s <subscription-id>
  ```

4. Generate a Microsoft Entra ID access token with the `az account get-access-token` the Azure DevOps resource ID: `499b84ac-1321-427f-aa17-267ca6975798`.
  ``` powershell
  $accessToken = az account get-access-token --resource 499b84ac-1321-427f-aa17-267ca6975798 --query "accessToken" --output tsv
  ```
  
> [!NOTE]
> Use the Azure DevOps application ID, not our resource URI, for generating tokens.

5. Now, you can use `az cli` commands per usual. Let's try to call an Azure DevOps API by passing it in the headers as a `Bearer` token:
  ```powershell
  $apiVersion = "7.1-preview.1"
  $uri = "https://dev.azure.com/${yourOrgname}/_apis/projects?api-version=${apiVersion}"
  $headers = @{
      Accept = "application/json"
      Authorization = "Bearer $accessToken"
  }
  Invoke-RestMethod -Uri $uri -Headers $headers -Method Get | Select-Object -ExpandProperty value ` | Select-Object id, name
  ```
