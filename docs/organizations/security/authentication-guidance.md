---
title: Authentication guidance for Azure DevOps
titleSuffix: Azure DevOps
description: Compare Azure DevOps authentication options for users, applications, scripts, and pipelines, and choose the most secure and maintainable approach.
ms.subservice: azure-devops-security
ms.topic: overview
ms.custom: pat-reduction, copilot-scenario-highlight
ai-usage: ai-assisted
ms.author: chcomley
author: chcomley
monikerRange: '<= azure-devops'
ms.date: 07/21/2026
---

# Authentication guidance for Azure DevOps

[!INCLUDE [version-lt-eq-azure-devops](../../includes/version-lt-eq-azure-devops.md)]

Use this article to choose an authentication approach for Azure DevOps at the organization level. It covers security posture, governance, and maintainability for common methods, and then links to implementation-focused guidance.

For app-level implementation details, see [Authentication methods for Azure DevOps](../../integrate/get-started/authentication/authentication-guidance.md).

## Services and Server differences

Authentication options differ between Azure DevOps Services and Azure DevOps Server.

| Platform | Recommended default | Notes |
|---|---|---|
| Azure DevOps Services | Microsoft Entra-based authentication | Use Microsoft Entra sign-in for users and Microsoft Entra application identities for automation. |
| Azure DevOps Server | Windows authentication, .NET client libraries, or PATs where supported | Service principal and managed identity patterns for Azure DevOps authentication apply to Azure DevOps Services, not Azure DevOps Server. |

## Compare common authentication choices

Use the following table to compare common choices for users, apps, scripts, and pipelines.

| Method | Best for | Security posture | Credential management | Works with | Avoid when |
|---|---|---|---|---|---|
| Microsoft Entra user sign-in | Interactive user access to Azure DevOps organizations | Strong option with centralized identity governance, Conditional Access, and multifactor authentication | Managed by Microsoft Entra lifecycle and tenant policies | Azure DevOps Services | You're implementing unattended app-to-app automation |
| Managed identity | Azure-hosted automation, such as Azure Functions or App Service | Strongest option for Azure-hosted automation because tokens are short-lived and Azure manages identity lifecycle | No client secret to store or rotate | Azure DevOps Services | The workload doesn't run on Azure, or you need a portable identity across environments |
| Service principal | Automation outside Azure or across multiple environments and CI/CD systems | Strong option when you use least privilege and modern credential patterns | You manage app identity and credentials unless a federated flow removes secrets | Azure DevOps Services | A managed identity can meet the same requirement on Azure-hosted workloads |
| Azure DevOps service connection | Azure Pipelines access to Azure DevOps resources | Strong option for pipeline automation because it uses workload identity federation and avoids PAT sprawl in pipelines | Managed through Azure DevOps service connection settings | Azure DevOps Services pipelines | The scenario doesn't run through Azure Pipelines |
| Personal access token (PAT) | Short-lived personal scripts, one-off testing, or legacy compatibility scenarios | Highest risk because PATs are long-lived bearer secrets tied to user accounts | Manual creation, storage, rotation, and revocation | Azure DevOps Services and Azure DevOps Server | Production automation where service principal, managed identity, or service connection is available |

[!INCLUDE [use-microsoft-entra-reduce-pats](../../includes/use-microsoft-entra-reduce-pats.md)]

## Recommended defaults by scenario

- Use Microsoft Entra user sign-in for user access to Azure DevOps Services organizations.
- Use managed identity first for Azure-hosted automation.
- Use service principal for non-Azure or cross-environment automation.
- Use Azure DevOps service connection when Azure Pipelines needs Azure DevOps resource access.
- Use PATs only for temporary, personal, legacy, or Azure DevOps Server scenarios where more secure options don't apply.

## When to use PATs

Use PATs in limited scenarios, such as:

- Personal ad hoc scripts
- One-time API troubleshooting
- Legacy tools that can't use Microsoft Entra-based authentication
- Azure DevOps Server scenarios where modern cloud identity flows aren't available

When you use PATs:

- Scope them to the minimum required permissions.
- Use the shortest practical lifetime.
- Store and rotate them as secrets.
- Replace them with Microsoft Entra-based options when possible.

For PAT lifecycle guidance, see [Use personal access tokens](../accounts/use-personal-access-tokens-to-authenticate.md) and [Manage PAT policies](../accounts/manage-pats-with-policies-for-administrators.md).

## Policy and governance controls

Use organization and tenant controls to enforce authentication posture:

- [Manage security policies](../accounts/change-application-access-policies.md)
- [Set up Conditional Access policies](../accounts/conditional-access-policies.md)
- [Manage PAT policies](../accounts/manage-pats-with-policies-for-administrators.md)
- [Connect your organization to Microsoft Entra ID](../accounts/connect-organization-to-azure-ad.md)

## Decision checklist

Before you choose an authentication method, confirm:

- Is this user-interactive access or unattended automation?
- Is the workload hosted in Azure or outside Azure?
- Is the target platform Azure DevOps Services or Azure DevOps Server?
- Can this scenario avoid long-lived credentials?
- Are organization policy and audit requirements met?

## Implementation guides

- [Authentication methods for Azure DevOps integrations](../../integrate/get-started/authentication/authentication-guidance.md)
- [Use service principals and managed identities in Azure DevOps](../../integrate/get-started/authentication/service-principal-managed-identity.md)
- [Build Azure DevOps integrations with Microsoft Entra OAuth apps](../../integrate/get-started/authentication/entra-oauth.md)
- [Access Azure DevOps with Microsoft Entra workload identity](../../pipelines/library/add-devops-entra-service-connection.md)
- [Use personal access tokens](../accounts/use-personal-access-tokens-to-authenticate.md)