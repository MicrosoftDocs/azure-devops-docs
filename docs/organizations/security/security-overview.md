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

In this overview, learn about the following security-related configurations:

- **[Access control, authentication, and authorization](#access-control)**
- **[Monitoring and auditing](#monitoring-and-auditing)**: [Monitor and audit activities](../audit/azure-devops-auditing.md) to detect and respond to security incidents.
- **[Security features and tools](#security-features-and-tools)**: Built-in security features and tools that help you monitor, manage, and enhance the security of your projects.
- **[Data protection](#data-protection)**
- **[Compliance and governance](#compliance-and-governance)**

## Access control

Manage user [permissions](about-permissions.md) and [access levels](access-levels.md) to ensure that only authorized individuals can access sensitive information and perform critical actions. Regularly review and update these settings to adapt to changes in your organization and to comply with [security best practices](security-best-practices.md).

|Security action |Description  |
|---------|---------|
|Integrate with Microsoft Entra ID   |Azure DevOps integrates with Microsoft Entra ID to provide a unified identity system. This integration allows you to manage user access and permissions effectively, ensuring that only authorized users can access your resources.   |
|Enable Multifactor Authentication (MFA)    | Enabling MFA adds an extra layer of security by requiring users to verify their identity using multiple factors, such as a password and a phone verification.   |
|Use a Conditional Access Policy|[Define access rules based on conditions](../../../release-notes/roadmap/conditional-access-policy.md) like user location, device, or risk level. |
|Change application connection and security policies| [Change application connection & security policies for your organization](../accounts/change-application-access-policies.md).  |
|Scope permissions  | [Assign permissions](security-best-practices.md#scope-permissions) at various levels, such as organization, project, or repository, to ensure users have the appropriate level of access.  |
|Manage security groups  |Use [security groups](security-best-practices.md#manage-security-groups) to manage permissions for multiple users efficiently. This approach simplifies the process of granting and revoking access.  |
|Set up secure authentication methods| Set up [secure authentication methods](about-security-identity.md) and manage authorization policies. [Choose the right authentication method](security-best-practices.md).|

## Monitoring and auditing

|Security action |Description  |
|---------|---------|
|Review audit logs |Regularly [review audit logs](../audit/auditing-streaming.md) to monitor user activities and detect any suspicious behavior. This helps in identifying potential security breaches and taking corrective actions.   |
|Configure security alerts|Configure alerts to notify you of any security incidents or policy violations. This action ensures timely response to potential threats.   |

## Security features and tools

|Security action |Description  |
|---------|---------|
|Use OAuth instead of personal access tokens (PATs)    | [Use OAuth flow instead of PATs](security-best-practices.md#secure-github-integrations) and don't use personal GitHub accounts as service connections.     |
|Use code scanning and analysis    | Utilize tools like [Microsoft Defender](https://apps.microsoft.com/detail/9p6pmztm93lr?hl=en-US&gl=US) to scan your code for vulnerabilities, secrets, and misconfigurations. This action helps identify and remediate security issues early in the development process.     |
|Use Git Credential Manager | Support [two-factor authentication with GitHub repositories](https://docs.github.com/en/authentication/securing-your-account-with-two-factor-authentication-2fa/about-two-factor-authentication) and [authenticate to Azure Repos](../../repos/git/set-up-credential-managers.md).|
|Use Azure DevOps Credential Scanner for GitHub    | When using a managed identity isn't an option, ensure that credentials get stored in secure locations such as Azure Key Vault, instead of embedding them into the code and configuration files. Implement [Azure DevOps Credential Scanner](https://secdevtools.azurewebsites.net/helpcredscan.html) to identify credentials within the code.      |
|Use native secret scanning for GitHub |When using a managed identity isn't an option, ensure that secrets get stored in secure locations such as Azure Key Vault, instead of embedding them into the code and configuration files.For GitHub, use the [native secret scanning feature](https://docs.github.com/en/code-security/secret-scanning/introduction/about-secret-scanning) to identify secrets within the code.|

### Security for services

Secure Azure Boards
Secure Azure Repos
Secure Azure Pipelines 
Secure Azure Test Plans
Secure Azure Artifacts

## Data protection

[Protect your data](data-protection.md), including encryption, backup, and recovery strategies.

## Compliance and governance

Ensure that your Azure DevOps environment complies with industry standards and regulations, and use policies and Component Governance for security.

|Security action |Description  |
|---------|---------|
|Ensure compliance with industry standards     | Azure DevOps complies with various industry standards and regulations, such as ISO/IEC 27001, SOC 1/2/3, and GDPR. Ensure your environment adheres to these standards.        |
|Enforce policies    | Implement policies to enforce security best practices across your organization. This action includes requiring code reviews, enforcing branch policies, and setting up automated security checks.        |
|Onboard to Component Governance for CI/CD| Key reasons to do so:<br>- **Security vulnerability detection:** Identifies and alerts you to known vulnerabilities in the open-source components your project depends on, so you can address security issue proactively.<br>- **License compliance:** Ensures that the components you use comply with your organization's licensing policies, which help avoid legal issues related to the use of open-source software.<br>- **Policy enforcement:** Ensures that only approved versions are used in your projects.<br>- **Visibility with tracking:** Provides visibility into the components being used across your repositories, making it easier to track and manage them.|

## Related articles

- [Permissions](about-permissions.md)
- [Access levels](access-levels.md)
- [Microsoft Security Development Lifecycle](https://www.microsoft.com/sdl/)
- [Azure Trust Center](https://azure.microsoft.com/support/trust-center/)
