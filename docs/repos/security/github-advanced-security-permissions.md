---
title: Manage permissions for GitHub Advanced Security for Azure DevOps
titleSuffix: Azure Repos
description: Configure permissions and authentication for GitHub Advanced Security for Azure DevOps, including Microsoft Entra ID and personal access tokens.
ms.service: azure-devops
ms.subservice: azure-devops-integration
ms.topic: how-to 
ms.custom: cross-service
ms.author: laurajiang
author: laurajjiang
monikerRange: 'azure-devops'
ms.date: 07/02/2025
# customer-intent: As a project administrator, I want to configure permissions and authentication for GitHub Advanced Security so I can control access to security alerts and enable secure API access for my development team.
---

#  Manage Advanced Security permissions

GitHub Advanced Security for Azure DevOps provides comprehensive security scanning capabilities with granular permission controls. This article guides you through configuring permissions for security alerts, managing access levels, and setting up secure authentication for Advanced Security APIs.

[!INCLUDE [GitHub Advanced Security for Azure DevOps is different from GitHub Advanced Security.](includes/github-advanced-security.md)]

## Prerequisites

[!INCLUDE [github-advanced-security-prerequisites](includes/github-advanced-security-prerequisites.md)]

## Permission definitions

Advanced Security introduces three specialized permissions that control access to security features:

| Permission | Description | Use cases |
|------------|-------------|-----------|
| **Advanced Security: Read alerts** | View security alerts, vulnerabilities, and scan results | Security analysts, developers reviewing code |
| **Advanced Security: Manage and dismiss alerts** | Dismiss false positives, manage alert lifecycle | Security engineers, lead developers |
| **Advanced Security: Manage settings** | Enable/disable Advanced Security features (billable action) | Project administrators, security managers |

### Default permission assignments

| Azure DevOps group  | Default permissions |
| ----------- | ----------- |
| **Contributors** | Advanced Security: Read alerts |
| **Project administrator** | Advanced Security: Read alerts, manage, and dismiss alerts |
| **Project collection administrator** | Advanced Security: Read alerts, manage and dismiss alerts, manage settings |

> [!NOTE]
> Only users with "Manage settings" permission can enable Advanced Security features, which might incur billing charges. Use caution when granting this permission.

## Manage Advanced Security permissions

You can customize Advanced Security permissions for specific repositories to meet your security requirements. This action is useful when you need to grant different access levels to team members based on their roles and responsibilities.

### Common scenarios for permission customization:

- **Security team access**: Grant full permissions to security analysts
- **Developer access**: Provide read-only access for development teams
- **Compliance requirements**: Restrict settings management to authorized personnel

### Configure repository-specific permissions

If the permission dropdowns are disabled, contact your project administrator for the necessary permissions to manage security settings.
 
To adjust permissions for a specific repository:

1. Select **Project settings** > **Repositories**.
2. Select the specific repository you wish to adjust permissions for.
3. Select **Security**.
4. Select the security group you wish to adjust permissions for.
5. Change a permission. When successful, a checkmark displays next to the selected permission. 
 
   ![Screenshot of adjusting permissions for a specific repository.](media/permissions-select-repo.png)

## Authentication for Advanced Security APIs

### Use Microsoft Entra ID tokens (Recommended)

**Microsoft Entra ID tokens are the preferred authentication method** for accessing GitHub Advanced Security for Azure DevOps APIs. They provide enhanced security through OAuth 2.0 standards and seamless integration with enterprise identity systems.

**Benefits of Microsoft Entra ID authentication:**

- **Enhanced security**: OAuth 2.0 compliance with automatic token refresh
- **Enterprise integration**: Native support for conditional access policies and multifactor authentication
- **Audit and compliance**: Better tracking and logging for security operations
- **Least privilege access**: Fine-grained scope control aligned with your organization's security policies

For detailed implementation guidance, see [Microsoft Entra authentication for Azure DevOps](../../integrate/get-started/authentication/entra.md).

### Use personal access tokens

[!INCLUDE [use-microsoft-entra-reduce-pats](../../includes/use-microsoft-entra-reduce-pats.md)]

You can use a personal access token to use the Advanced Security APIs. For more information, see [Use personal access tokens](../../organizations/accounts/use-personal-access-tokens-to-authenticate.md).

Advanced Security offers three extra scopes for a PAT: `read`, `read and write`, and `read, write, and manage`.

## Related articles

- [Set up code scanning](github-advanced-security-code-scanning.md)
- [Set up dependency scanning](github-advanced-security-dependency-scanning.md)
- [Set up secret scanning](github-advanced-security-secret-scanning.md)
- [Learn about GitHub Advanced Security for Azure DevOps](github-advanced-security-security-overview.md)
