---
ms.topic: how-to
title: Authenticate to Azure DevOps with Microsoft Entra ID access tokens
description: Use Microsoft Entra authentication to access Azure DevOps Services.
ms.assetid: 19285121-1805-4421-B7C4-63784C9A7CFA
ms.subservice: azure-devops-security
monikerRange: 'azure-devops'
ms.author: chcomley
author: chcomley
ms.date: 01/08/2025
---

# Authenticate to Azure DevOps with Microsoft Entra

Microsoft Entra ID is a separate Microsoft product with its own platform. As a leading identity and access management (IAM) provider, [Microsoft Entra ID](/entra/fundamentals/whatis) focuses on managing team members and safeguarding company resources. You can [connect your Azure DevOps organization to a Microsoft Entra ID tenant](../../../organizations/accounts/connect-organization-to-azure-ad.md), which offers [many benefits to your company](../../../organizations/accounts/access-with-azure-ad.md).

Once connected, the Microsoft Identity application platform on top of Microsoft Entra ID provides several advantages for app developers and org admins. You can register an application to access Azure tenants and define permissions needed from Azure resources, including Azure DevOps, which exists outside of the Azure tenant construct.

Microsoft Entra apps and Azure DevOps apps are separate entities with no knowledge of each other. The authentication methods differ: Microsoft Entra uses OAuth, while Azure DevOps uses its own OAuth. [Microsoft Entra ID OAuth apps](/entra/identity-platform/v2-protocols) issue Microsoft Entra tokens, not Azure DevOps access tokens. These tokens have a standard one-hour duration before expiration.

## Develop Azure DevOps apps on Microsoft Entra

Read the Microsoft Entra documentation thoroughly to understand the new functionality and [different expectations](/entra/identity-platform/application-model) during setup.

We support your app development with guidance for:
* [Microsoft Entra OAuth apps (on-behalf-of user apps)](entra-oauth.md) for apps that perform actions on behalf of consenting users.
* [Microsoft Entra service principals and managed identities (on-behalf-of itself apps)](service-principal-managed-identity.md) for apps that perform automated tooling within a team.

## Replace PATs with Microsoft Entra tokens

[Personal access tokens (PATs)](../../../organizations/accounts/use-personal-access-tokens-to-authenticate.md) are popular for Azure DevOps authentication due to their ease of creation and use. However, poor PAT management and storage can lead to unauthorized access to your Azure DevOps organizations. Long-lived or over-scoped PATs increase the risk of damage from a leaked PAT.

Microsoft Entra tokens offer a secure alternative, lasting only one hour before requiring a refresh. The authentication protocols for generating Entra tokens are more robust and secure. Security measures like [conditional access policies](../../../organizations/accounts/change-application-access-policies.md#cap-support-on-azure-devops) protect against token theft and replay attacks. We encourage users to explore using Microsoft Entra tokens instead of PATs. We share popular PAT use cases and ways to replace PATs with Entra tokens in this workflow.

### Ad-hoc requests to Azure DevOps REST APIs

You can also use the [**Azure CLI**](/cli/azure/install-azure-cli) to get Microsoft Entra ID access tokens for users to call [Azure DevOps REST APIs](/rest/api/azure/devops/). Since Entra access tokens only last for one hour, they're ideal for quick one-off operations, like API calls that don't need a persistent token.

#### Acquire user tokens in Azure CLI

1. Sign in to the Azure CLI using the `az login` command and follow the on-screen instructions.
2. Set the right correct subscription for the signed-in user with these bash commands. Make sure the Azure subscription ID is associated with the tenant connected to the  Azure DevOps organization you're trying to access. If you don't know your subscription ID, you can find it in the [Azure portal](/azure/azure-portal/get-subscription-tenant-id).
  
``` bash
  az account set -s <subscription-id>
  ```

3. Generate a Microsoft Entra ID access token with the `az account get-access-token` the Azure DevOps resource ID: `499b84ac-1321-427f-aa17-267ca6975798`.
  ``` bash
  az account get-access-token \
  --resource 499b84ac-1321-427f-aa17-267ca6975798 \
  --query "accessToken" \
  -o tsv
  ```

For more information, see the [Databricks docs](/azure/databricks/dev-tools/user-aad-token).

#### Acquire service principal tokens in Azure CLI

Service principals can also use ad-hoc Microsoft Entra ID access tokens for ad-hoc operations. For more information, see [Service principals and managed identities/Get a Microsoft Entra ID token with the Azure CLI](service-principal-managed-identity.md#b-acquire-a-microsoft-entra-id-token-with-the-azure-cli).

### Git operations with Git Credential Manager

You can also use Microsoft Entra tokens to perform Git operations. If you regularly push to git repositories, [use the Git Credential Manager](../../../repos/git/set-up-credential-managers.md) to easily request and manage your Microsoft Entra OAuth token credentials, as long as `oauth` is set as the default `credential.azReposCredentialType`.

## Related articles

- [Build Azure DevOps integration with Microsoft Entra OAuth apps](entra-oauth.md)
- [Use service principals & managed identities in Azure DevOps](service-principal-managed-identity.md)
