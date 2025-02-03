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

# Azure DevOps Security overview

[!INCLUDE [version-lt-eq-azure-devops](../../includes/version-lt-eq-azure-devops.md)]

This article provides an overview of necessary security-related configurations to protect your Azure DevOps environment against threats and vulnerabilities. Safeguard your projects, code, and data while maintaining a secure and efficient workflow.

In this overview, learn about the following security-related configurations:

- **Access control**: Manage user [permissions](about-permissions.md) and [access levels](access-levels.md) to ensure that only authorized individuals can access sensitive information and perform critical actions.
- **Authentication and authorization**: Set up [secure authentication methods](about-security-identity.md) and manage authorization policies.
- **Data protection**: [Protect your data](data-protection.md), including encryption, backup, and recovery strategies.
- **Compliance and governance**: Ensure that your Azure DevOps environment complies with industry standards and regulations.
- **Monitoring and auditing**: [Monitor and audit activities](../audit/azure-devops-auditing.md) to detect and respond to security incidents.
- **Security features and tools**: Built-in security features and tools that help you monitor, manage, and enhance the security of your projects.

<!---Where to mention Best Practices?--->

## Access control

- **Microsoft Entra ID integration:** Azure DevOps integrates with Microsoft Entra ID (formerly Azure Active Directory) to provide a unified identity system. This integration allows you to manage user access and permissions effectively, ensuring that only authorized users can access your resources.
- **Multifactor Authentication (MFA):** Enabling MFA adds an extra layer of security by requiring users to verify their identity using multiple factors, such as a password and a phone verification.
- **Conditional Access Policies:** Define access rules based on conditions like user location, device, or risk level to enhance security.

### Permissions and security groups

Ideally, users and services should have the minimum necessary access to perform their business functions.

- **[Scope permissions](security-best-practices.md#scope-permissions):** Assign permissions at various levels, such as organization, project, or repository, to ensure users have the appropriate level of access.
- **[Manage security groups](security-best-practices.md#manage-security-groups):** Use security groups to manage permissions for multiple users efficiently. This approach simplifies the process of granting and revoking access.

## Authentication and authorization

[Choose the right authentication method](security-best-practices.md).

## Compliance and governance

- **Compliance standards:** Azure DevOps complies with various industry standards and regulations, such as ISO/IEC 27001, SOC 1/2/3, and GDPR. Ensure your environment adheres to these standards to maintain compliance.
- **Policy enforcement:** Implement policies to enforce security best practices across your organization. This includes requiring code reviews, enforcing branch policies, and setting up automated security checks.

## Monitoring and auditing

- **Audit logs:** Regularly review audit logs to monitor user activities and detect any suspicious behavior. This helps in identifying potential security breaches and taking corrective actions.
- **Security alerts:** Configure alerts to notify you of any security incidents or policy violations. This ensures timely response to potential threats.

## Security features and tools

- **[GitHub integrations](security-best-practices.md#secure-github-integrations):** Use OAuth flow instead of PATs and don't use personal GitHub accounts as service connections.
- **Code scanning and analysis:** Utilize tools like Microsoft Defender for Cloud to scan your code for vulnerabilities, secrets, and misconfigurations. This helps identify and remediate security issues early in the development process.
- **Infrastructure as Code (IaC) security:** Secure your IaC templates and container images to prevent misconfigurations from reaching production environments.

Where to put this? Other services...
[Azure Pipelines security overview](../../pipelines/security/overview.md)

