---
ms.topic: how-to
title: Authenticating to Azure DevOps with Microsoft Entra ID access tokens
description: Use Microsoft Entra authentication to access Azure DevOps Services.
ms.assetid: 19285121-1805-4421-B7C4-63784C9A7CFA
ms.subservice: azure-devops-security
monikerRange: 'azure-devops'
ms.author: chcomley
author: chcomley
ms.date: 11/11/2024
---

# Authenticate with Azure DevOps with Microsoft Entra

## Microsoft Entra ID
Microsoft Entra ID is a separate Microsoft product with its own platform. As a leading identity and access management (IAM) provider, [Microsoft Entra ID](/entra/fundamentals/whatis) is focused on the needs of companies that need to manage team members and safeguard company resources. We offer the ability to [connect your Azure DevOps organization to a Microsoft Entra ID tenant](../../../organizations/accounts/connect-organization-to-azure-ad.md), and there may be [many benefits to your company](../../../organizations/accounts/access-with-azure-ad.md) in doing so.

Once connected, the Microsoft Identity application platform on top of Microsoft Entra ID offers a few advantages that makes it appealing to app developers and org admins. On Microsoft Entra, you can register an application to access Azure tenants and define permissions needed from Azure resources, of which Azure DevOps is considered one. Azure DevOps exists outside of the construct of Azure tenants.

Microsoft Entra apps and Azure DevOps apps are separate entities with no knowledge of each other. The means to authenticate your application differs from Microsoft Entra OAuth to Azure DevOps OAuth. For one thing, [Microsoft Entra ID OAuth apps](/entra/identity-platform/v2-protocols) are issued Microsoft Entra tokens, not Azure DevOps access tokens. These tokens have a standard one-hour duration before expiration. 

## Developing Azure DevOps apps on Microsoft Entra

We recommend reading the Microsoft Entra documentation thoroughly to understand the new functionality available via Microsoft Entra and the [different expectations](/entra/identity-platform/application-model) of you during setup. 

We've provided guidance to support your app development for:
* [Microsoft Entra OAuth apps (on-behalf-of user apps)](entra-oauth.md) for apps that perform actions on behalf of consenting users
* [Microsoft Entra service principals and managed identities (on-behalf-of itself apps)](service-principal-managed-identity.md) for apps that perform automated tooling within a team

## Replacing PATs with Microsoft Entra tokens
[Personal access tokens (PATs)](../../../organizations/accounts/use-personal-access-tokens-to-authenticate.md) remain one of the most popular forms of authentication for Azure DevOps users for their ease of creation and use. However, poor PAT management and storage can result in unauthorized access to your Azure DevOps organizations. Letting PATs live for a long lifespan or over-scoping them can also increase the risk of damage that a leaked PAT can do.

Microsoft Entra tokens provide an appealing alternative since they only last for one hour before they must be refreshed. The authentication protocols to generate Entra tokens are more robust and secure. Security measures like [conditional access policies](../../../organizations/accounts/change-application-access-policies.md#cap-support-on-azure-devops) protect against token theft and replay attacks than PATs. We're hoping to engage more users to explore using Microsoft Entra tokens wherever PATs may be commonly used today. Below are some of the most popular PAT use cases and ways you might be able to replace the PAT with an Entra token in this workflow.

### Ad-hoc requests to Azure DevOps REST APIs

You can also use the [**Azure CLI**](/cli/azure/install-azure-cli) to get Microsoft Entra ID access tokens for users to call [Azure DevOps REST APIs](/rest/api/azure/devops/). Since Entra access tokens only live for one hour, they are ideal for quick one-off operations, like API calls that don't need a persistent token. 

#### Acquire user tokens in Azure CLI
Credit to these instructions go to the [Databricks docs](/azure/databricks/dev-tools/user-aad-token).

  1. Sign in to the Azure CLI using the `az login` command. Follow the on-screen instructions to sign in.
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

#### Acquire service principal tokens in Azure CLI
Service principals can also use ad-hoc Microsoft Entra ID access tokens for ad-hoc operations.
Instructions on how to do so are provided in this section in the guide to [service principals and managed identities](service-principal-managed-identity.md#b-acquire-a-microsoft-entra-id-token-with-the-azure-cli).

### Git operations with Git Credential Manager
Microsoft Entra tokens can also be used to perform Git operations. For those regularly pushing to git repositories, [using the Git Credential Manager](../../../repos/git/set-up-credential-managers.md) offers a simple way to request and manage one's Microsoft Entra OAuth token credentials, so long as `oauth` is set as the default `credential.azReposCredentialType`.
