---
title: Security overview Azure DevOps
titleSuffix: Azure DevOps 
description: ...  
ms.topic: overview
ms.subservice: azure-devops-security
ms.author: chcomley
author: chcomley
monikerRange: '<= azure-devops'
ms.date: 02/03/2025
--- 

# Azure DevOps security overview

[!INCLUDE [version-lt-eq-azure-devops](../../includes/version-lt-eq-azure-devops.md)]

This article provides an overview of necessary security-related configurations to protect your Azure DevOps environment against threats and vulnerabilities. Safeguard your projects, code, and data while maintaining a secure and efficient workflow.

> [!IMPORTANT]
> Follow our [Security Best Practices](security-best-practices.md), in addition to the security-related actions provided in this article.

## Access control

Manage user [permissions](about-permissions.md) and [access levels](access-levels.md) to ensure that only authorized individuals can access sensitive information and perform critical actions. Regularly review and update these settings to adapt to changes in your organization and to comply with [security best practices](security-best-practices.md).

|Security action |Description  |
|---------|---------|
|[Scope permissions](security-best-practices.md#scope-permissions)  | Assign permissions at various levels to ensure users have the appropriate level of access. For more information, see the following articles and the [Security for services section](#security-for-services):<br>- [Set organization-level permissions](change-organization-collection-level-permissions.md)<br>- [Set project-level permissions](change-project-level-permissions.md)<br>- [Set object-level permissions](set-object-level-permissions.md)<br>- [Set dashboard permissions](../../report/dashboards/dashboard-permissions.md)<br>- [Set wiki permissions](../../project/wiki/manage-readme-wiki-permissions.md)<br>- [Set permissions to manage extensions](../../marketplace/grant-permissions.md)- [Permissions lookup guide](permissions-lookup-guide.md)  |
|[Manage security groups](security-best-practices.md#manage-security-groups)  |Use security groups to manage permissions for multiple users efficiently. This approach simplifies the process of granting and revoking access.  |
|[Choose the right authentication method](security-best-practices.md)| [Set up secure authentication methods](about-security-identity.md) and manage authorization policies.|
|[Integrate with Microsoft Entra ID](../accounts/connect-organization-to-azure-ad.md)  |Azure DevOps integrates with Microsoft Entra ID to provide a unified identity system. This integration allows you to manage user access and permissions effectively, ensuring that only authorized users can access your resources.   |
|[Enable Multifactor Authentication (MFA)](/entra/identity/authentication/tutorial-enable-azure-mfa)   | Enabling MFA adds an extra layer of security by requiring users to verify their identity using multiple factors, such as a password and a phone verification.   |
|[Change application connection and security policies](../accounts/change-application-access-policies.md)| Manage your organization's security policies, including conditional access policies, to ensure secure access to your resources. |

## Monitoring and auditing

|Security action |Description  |
|---------|---------|
|[Monitor and audit activities](../audit/azure-devops-auditing.md)|MOnitor and audit activities  to detect and respond to security incidents.   |
|[Review audit logs](../audit/auditing-events.md) |Regularly review audit logs to monitor user activities and detect any suspicious behavior. This action helps identify potential security breaches and takes corrective actions.   |
|Configure security alerts|Configure alerts to notify you of any security incidents or policy violations. This action ensures timely response to potential threats.   |

## Security features and tools

The following table lists security features and tools that can help you monitor, manage, and enhance the security of your projects.

|Security action |Description  |
|---------|---------|
|[Use OAuth instead of personal access tokens (PATs)](security-best-practices.md#secure-github-integrations)    | Use OAuth flow instead of PATs and don't use personal GitHub accounts as service connections.   |
|Use code scanning and analysis    | Utilize tools like [Microsoft Defender](https://apps.microsoft.com/detail/9p6pmztm93lr?hl=en-US&gl=US) to scan your code for vulnerabilities, secrets, and misconfigurations. This action helps identify and remediate security issues early in the development process.     |
|[Use Git Credential Manager](../../repos/git/set-up-credential-managers.md) | Support [two-factor authentication with GitHub repositories](https://docs.github.com/en/authentication/securing-your-account-with-two-factor-authentication-2fa/about-two-factor-authentication) and authenticate to Azure Repos.|
|[Use Azure DevOps Credential Scanner for GitHub](https://secdevtools.azurewebsites.net/helpcredscan.html)    | When using a managed identity isn't an option, ensure that credentials get stored in secure locations such as Azure Key Vault, instead of embedding them into the code and configuration files. Implement Azure DevOps Credential Scanner to identify credentials within the code.      |
|[Use native secret scanning for GitHub](https://docs.github.com/en/code-security/secret-scanning/introduction/about-secret-scanning) |When using a managed identity isn't an option, ensure that secrets get stored in secure locations such as Azure Key Vault, instead of embedding them into the code and configuration files. Use the native secret scanning feature to identify secrets within the code.|

### Security for services

|Security action |Description  |
|---------|---------|
|[Secure Azure Boards](set-permissions-access-work-tracking.md)|For more information, see the following articles:<br>- [Set permissions for queries and query folders](../../boards/queries/set-query-permissions.md)<br>- [Manage team administrators](../settings/add-team-administrator.md)<br>- [Default permissions and access levels for Azure Boards](../../boards/get-started/permissions-access-boards.md). |
|[Secure Azure Repos]| For more information, see the following articles:<br>- [Default Git settings and policies](default-git-permissions.md)<br>- [Set permissions for a specific branch](../../repos/git/branch-permissions.md)<br>- [Set branch policies](../../repos/git/branch-policies.md).    |
|[Secure Azure Pipelines](/../../pipelines/security/overview.md) |For more information, see the following articles:<br>- [Add users to Azure Pipelines](../../pipelines/policies/set-permissions.md)<br>- [Use templates for security](../../pipelines/process/templates.md)<br>-  [Secure agents, projects, and containers](../../pipelines/security/misc.md)  | 
|[Secure Azure Test Plans](set-permissions-access-test.md)|Ensure that your team has the appropriate access to efficiently manage and execute test plans.   |  
|[Secure Azure Artifacts](/../../artifacts/feeds/feed-permissions.md)| Manage access to your packages and control who can interact with them.   |

## Data protection

|Security action |Description  |
|---------|---------|
|[Protect your data](data-protection.md)| Protect data, including encryption, backup, and recovery strategies.|
|[Add IPs and URLs to allowlist](allow-list-ip-url.md) | If your organization is secured with a firewall or proxy server, add IPs and URLs to the allowlist.|

## Compliance and governance

Ensure that your Azure DevOps environment complies with industry standards and regulations, using policies and Component Governance.

|Security action |Description  |
|---------|---------|
|Ensure compliance with industry standards     | Azure DevOps complies with various industry standards and regulations, such as ISO/IEC 27001, SOC 1/2/3, and GDPR. Ensure your environment adheres to these standards.        |
|Enforce policies    | Implement policies to enforce security best practices across your organization. This action includes requiring code reviews, enforcing branch policies, and setting up automated security checks.        |
|Onboard to Component Governance for CI/CD| Key reasons to do so:<br>- **Security vulnerability detection:** Identifies and alerts you to known vulnerabilities in the open-source components your project depends on, so you can address security issue proactively.<br>- **License compliance:** Ensures that the components you use comply with your organization's licensing policies, which help avoid legal issues related to the use of open-source software.<br>- **Policy enforcement:** Ensures that only approved versions are used in your projects.<br>- **Visibility with tracking:** Provides visibility into the components being used across your repositories, making it easier to track and manage them.|

## Related articles

- [Data locations for Azure DevOps](data-location.md)
- [Microsoft Security Development Lifecycle](https://www.microsoft.com/sdl/)
- [Azure Trust Center](https://azure.microsoft.com/support/trust-center/)
