---
ms.topic: how-to
title: Authenticate to Azure DevOps with Microsoft Entra ID access tokens
description: Use Microsoft Entra authentication to access Azure DevOps Services.
ms.assetid: 19285121-1805-4421-B7C4-63784C9A7CFA
ms.subservice: azure-devops-security
monikerRange: 'azure-devops'
ms.author: chcomley
author: chcomley
ms.date: 01/31/2025
---

# Authenticate to Azure DevOps with Microsoft Entra

[Microsoft Entra ID](/entra/fundamentals/whatis) is an identity and access management (IAM) platform that allows companies to manage organization membership and safeguard company resources. Many Azure DevOps enterprise customers choose to [connect their Azure DevOps organization to a Microsoft Entra ID tenant](../../../organizations/accounts/connect-organization-to-azure-ad.md) to support managing the large volume of users in their company, as well as take advantage of other [security features that Microsoft Entra offers](../../../organizations/accounts/access-with-azure-ad.md).

> [!NOTE]
> Microsoft Entra was once called [Azure Active Directory (Azure AD)](/entra/fundamentals/new-name), so you may still see references to Azure AD across Microsoft products. This differs from Active Directory, the on-prem equivalent of Microsoft Entra.

Once connected, the [Microsoft Identity application platform](/entra/identity-platform/) that sits on top of Microsoft Entra ID can be used to register an application to access Azure tenant(s) and define the permissions needed from Azure resources, including Azure DevOps.

We support app development for:
* [Microsoft Entra OAuth apps (on-behalf-of users)](entra-oauth.md)
* [Microsoft Entra service principals and managed identities (on-behalf-of itself apps)](service-principal-managed-identity.md)

## Azure DevOps-based auth vs. Entra-based auth

Many native Azure DevOps-based authentication (e.g. [personal access tokens (PATs)](../../../organizations/accounts/use-personal-access-tokens-to-authenticate.md) or Azure DevOps OAuth apps) were created prior to Microsoft Entra. These tokens sit outside Microsoft Entra and don't have native support for Microsoft Entra concepts, like tenants or Conditional Access.

Microsoft Entra tokens offer a secure alternative, lasting only one hour before requiring a refresh. The authentication protocols for generating Entra tokens are more robust and secure. Security measures like [conditional access policies](../../../organizations/accounts/change-application-access-policies.md#cap-support-on-azure-devops) protect against token theft and replay attacks. 

Tokens issued by each platform are also distinct. Microsoft Entra OAuth apps issue Microsoft Entra tokens, not Azure DevOps access tokens. These tokens can't be used interchangbly on each platform. If you are exploring migrating from Azure DevOps OAuth to Microsoft Entra OAuth, users must re-authorize for the new app.

## Replace PATs with Microsoft Entra tokens

Personal access tokens (PATs) have been a popular form of Azure DevOps authentication due to their ease of creation and use. However, poor PAT management and storage can result in leaks and unauthorized access to your Azure DevOps organizations. Long-lived or over-scoped PATs increase the risk of damage from a leaked PAT. We encourage users to explore using Microsoft Entra tokens instead of PATs whenever possible.

### Common PAT alternatives

Due to their increasing risk, admins are increasingly requesting additional [security policies that restrict PAT creation](/organizations/accounts/manage-pats-with-policies-for-administrators.md). As a result, PATs are becoming a less viable alternative for accessing Azure DevOps programmatically. Outside of migrating any existing app development to the Microsoft Identity platform, we share some common use cases across Azure DevOps that have historically relied on PATs and their recommended Microsoft Entra alternative.

| PAT scenario | Entra alternative |
|------------|------------|
| Authenticate with Git Credential Manager (GCM) | GCM defaults to authenticating with PATs. Set the default credential type to `oauth`. Learn more on our [Git Credential Manager (GCM) page](../../../repos/git/set-up-credential-managers.md) . |
| Authenticate in a build or release pipeline | Use a [service connection with Workload Identity Federation](../../../pipelines/library/connect-to-azure.md#create-an-azure-resource-manager-service-connection-that-uses-workload-identity-federation). |
| Ad-hoc requests to Azure DevOps REST APIs | Issue a one-off Microsoft Entra token using Azure CLI (see below).  |

> [!TIP]
> **Have an Azure DevOps PAT scenario with no clear Microsoft Entra alternative?** We can dig in deeper if you share your scenario in the [Developer Community](https://developercommunity.visualstudio.com/AzureDevOps). 

