---
title: Security overview Azure DevOps
titleSuffix: Azure DevOps 
description: An overview of actions to ensure the security of your Azure DevOps environment, data, and users.
ms.topic: overview
ms.subservice: azure-devops-security
ms.author: chcomley
author: chcomley
monikerRange: '<= azure-devops'
ms.date: 02/07/2025
--- 

# Azure DevOps security overview

[!INCLUDE [version-lt-eq-azure-devops](../../includes/version-lt-eq-azure-devops.md)]

<!--- Ensure to differentiate between [github security doc](https://learn.microsoft.com/azure/devops/repos/security/github-advanced-security-security-overview?view=azure-devops)-->

When you're handling information and data, especially in a cloud-based solution like Azure DevOps Services, security should be your top priority. While Microsoft ensures the security of the underlying cloud infrastructure, configuring security within Azure DevOps is your responsibility. This article provides an overview of necessary security-related configurations to protect your Azure DevOps environment against threats and vulnerabilities. 

## Secure your network
NEW & EXISTING

To secure your network when you're working with Azure DevOps, do the following actions.

| Security action |Description  |
|---------|---------|
|[Set up IP allowlisting](allow-list-ip-url.md) | Restrict access to specific IP addresses to allow traffic only from trusted sources, reducing the attack surface. |
|Use encryption | Always encrypt data in transit and at rest. Secure communication channels using protocols like HTTPS. |
|Validate certificates | Ensure certificates are valid and issued by trusted authorities when establishing connections. |
|Implement web application firewalls (WAFs) | Filter, monitor, and block malicious web-based traffic with WAFs for an extra layer of protection against common attacks. |
|Enable network security groups (NSGs) | Use NSGs to control inbound and outbound traffic to Azure resources, ensuring only authorized traffic is allowed. |
|Use Azure Firewall | Deploy Azure Firewall to provide a centralized network security policy across multiple Azure subscriptions and virtual networks. |
|Monitor network traffic | Use Azure Network Watcher to monitor and diagnose network issues, ensuring the security and performance of your network. |
|Implement DDoS protection | Enable Azure DDoS Protection to safeguard your applications from distributed denial-of-service (DDoS) attacks. |

For more information, see [Application management best practices](/azure/active-directory/manage-apps/application-management-fundamentals).

## Control access

Provide the minimum necessary [permissions](about-permissions.md) and [access levels](access-levels.md) to ensure that only authorized individuals and services can access sensitive information and perform critical actions. This practice helps to minimize the risk of unauthorized access and potential data breaches. 

Regularly review and update these settings to adapt to changes in your organization, such as role changes, new hires, or departures. Implementing a periodic [audit](#enable-and-review-auditing-events) of permissions and access levels can help identify and rectify any discrepancies, ensuring that your security posture remains robust and aligned with best practices.

### Scope permissions
NEW & EXISTING

To ensure secure and efficient management of permissions, do the following actions:

| Security action |Description  |
|---------|---------|
|Disable inheritance | Avoid inheritance, preventing unintended access. Inheritance can inadvertently grant permissions to users who shouldn't have them, due to its allow-by-default nature. Carefully manage and explicitly set permissions to ensure that only the intended users have access. For more information, see [permission inheritance](about-permissions.md#permission-inheritance). |
|Segment environments | Use separate Azure accounts for different environments, such as Development, Testing, and Production, to enhance security and prevent conflicts. This approach minimizes the risk of resource conflicts and data contamination between environments. It also allows for better management and isolation of resources. For more information, see [Azure Landing Zone](/azure/cloud-adoption-framework/ready/landing-zone/). |
|Control access and ensure compliance | Use [Azure Policy](/azure/governance/policy/overview) to restrict access to unused Azure regions and services, ensuring compliance with organizational standards. This action helps enforce best practices and maintain a secure environment by preventing unauthorized access and usage. |
|Implement Azure role-based control (ABAC) | Use [Attribute-Based Access Control (ABAC)](/azure/role-based-access-control/conditions-overview) with properly tagged resources, limiting unauthorized access. This action ensures that access permissions get granted based on specific attributes, enhancing security by preventing unauthorized resource creation and access. |
|Use security groups | Use security groups to efficiently manage permissions for multiple users. This method simplifies granting and revoking access compared to assigning permissions individually and ensures consistency and easier management across your organization.<br>- Use Microsoft Entra ID, Active Directory, or Windows security groups when you're managing lots of users.<br>- Take advantage of built-in roles and default to Contributor for developers. Admins get assigned to the Project Administrator security group for elevated permissions, allowing them to configure security permissions.<br>- Keep groups as small as possible, restricting access. |
|Choose the right authentication method | Set up secure authentication methods and manage authorization policies. See [authentication methods](about-security-identity.md). |
|Integrate with Microsoft Entra ID | Use Microsoft Entra ID for unified identity management. See [integrate with Microsoft Entra ID](../accounts/connect-organization-to-azure-ad.md). |
|Enable MFA | Add an extra layer of security with [MFA](/entra/identity/authentication/tutorial-enable-azure-mfa). |
|Change security policies | Manage security policies, including conditional access. See [change security policies](../accounts/change-application-access-policies.md). |

For more information about permissions, see the following articles: 
- [Permissions and role lookup guide](permissions-lookup-guide.md)
- [Set individual permissions](/azure/devops/organizations/security/request-changes-permissions).

<a id="choose-the-right-authentication-method">  </a>

#### Choose the right authentication method

When you're choosing the appropriate authentication method, consider alternatives like [service principals and managed identities](../../integrate/get-started/authentication/service-principal-managed-identity.md) to enhance security and streamline access management.

| Security action |Description  |
|---------|---------|
|Use service principals | Represent security objects within a Microsoft Entra application. Define what an application can do in a given tenant. Set up during application registration in the Azure portal. Configure to access Azure resources, including Azure DevOps. Useful for apps needing specific access and control. |
|Use managed identities | Similar to an application’s service principal. Provide identities for Azure resources. Allow services supporting Microsoft Entra authentication to share credentials. Azure handles credential management and rotation automatically. Ideal for seamless sign-in details management. |

<a name='use-azure-ad'></a>

### Use Microsoft Entra ID
NEW & EXISTING

To enhance security and streamline identity management, do the following actions using Microsoft Entra ID:

| Security action |Description  |
|---------|---------|
|Establish a unified identity system | Create a single plane for identity by connecting Azure DevOps to Microsoft Entra ID. This consistency reduces confusion and minimizes security risks from manual configuration errors. |
|Implement fine-grained governance | Use Microsoft Entra ID to assign different roles and permissions to specific groups across various resource scopes. This action ensures controlled access and aligns with security best practices. |
|Enhance security features | Enable other security features with Microsoft Entra ID, such as: |
|Enable Multifactor Authentication (MFA) | Require multiple factors like password and phone verification for user authentication. |
|Conditional access policies | Define access rules based on conditions like location, device, or risk level. |

For more information, see the following articles:
- [About accessing your organization with Microsoft Entra ID](../accounts/access-with-azure-ad.md)
- [Add Active Directory / Microsoft Entra users or groups to a built-in security groups](add-ad-aad-built-in-security-groups.md)
- [Limit access by location or IP addresses](/azure/active-directory/conditional-access/howto-conditional-access-policy-location)
- [Manage conditional access](../accounts/change-application-access-policies.md)
- [Require all users to use multifactor authentication (MFA)](/azure/active-directory/authentication/concept-mfa-howitworks)

### Scope service accounts

To ensure secure and efficient use of service accounts, do the following actions:

| Security action |Description  |
|---------|---------|
|Create single-purpose service accounts | Each service should have its dedicated account to minimize risk. Avoid using regular user accounts as [service accounts](permissions.md#service-accounts). |
|Follow naming and documentation conventions | Use clear, descriptive names for service accounts and document their purpose and associated services. |
|Identify and disable unused service accounts | Regularly review and identify accounts no longer in use. Disable unused accounts before considering deletion. |
|Restrict privileges | Limit service account privileges to the minimum necessary. Avoid interactive sign-in rights for service accounts. |
|Use separate identities for report readers | If using domain accounts for service accounts, use a different identity for report readers to [isolate permissions and prevent unnecessary access](/azure/devops/server/admin/service-accounts-dependencies?view=azure-devops&preserve-view=true). |
|Use local accounts for workgroup installations | When installing components in a workgroup, use local accounts for user accounts. Avoid domain accounts in this scenario. |
|[Use service connections](#scope-service-connections) | Use service connections whenever possible to securely connect to services without passing secret variables directly to builds. Restrict connections to specific use cases. |
|Monitor service account activity | Implement auditing and create [audit streams](../audit/auditing-streaming.md) to monitor service account activity. |

For more information, see [Common service connection types](../../pipelines/library/service-endpoints.md#use-a-service-connection) and [Permissions, security groups, and service accounts reference](permissions.md). 

### Scope service connections

To ensure secure and efficient access to Azure resources, do the following actions for scoping service connections. 

| Security action |Description  |
|---------|---------|
|Limit access | Limit access by scoping your [Azure Resource Manager](/azure/azure-resource-manager/management/overview) service connections to specific resources and groups. Don't grant broad contributor rights across the entire Azure subscription. |
|[Use Azure Resource Manager](../../pipelines/library/connect-to-azure.md#create-an-azure-resource-manager-service-connection-that-uses-workload-identity-federation) | Authenticate with Azure resources using OpenID Connect (OIDC) without secrets. |
|Scope resource groups | Ensure resource groups contain only the Virtual Machines (VMs) or resources needed for the build process. |
|Avoid classic service connections | Opt for modern Azure Resource Manager service connections instead of classic ones, which lack scoping options. |
|Use purpose-specific team service accounts | Authenticate service connections using purpose-specific team service accounts to maintain security and control. |

For more information, see [Common service connection types](../../pipelines/library/service-endpoints.md).

### Manage external guest access

To ensure the security and proper management of external guest access, do the following actions:

| Security action |Description  |
|---------|---------|
|Block external guest access | Disable the ["Allow invitations to be sent to any domain" policy](/azure/active-directory/external-identities/allow-deny-list) to prevent external guest access if there's no business need for it. |
|Use distinct emails or UPNs | Use different email addresses or user principal names (UPNs) for personal and business accounts to eliminate ambiguity between personal and work-related accounts. |
|Group external guest users | Place all external guest users in a single Microsoft Entra group and [manage permissions for this group appropriately](../accounts/assign-access-levels-by-group-membership.md). Remove direct assignments to ensure group rules apply to these users. |
|Reevaluate rules regularly | Regularly review rules on the Group rules tab of the Users page. Consider any group membership changes in Microsoft Entra ID that might affect your organization. Microsoft Entra ID can take up to 24 hours to update dynamic group membership, and rules are automatically reevaluated every 24 hours and whenever a group rule changes. |

For more information, see [B2B guests in the Microsoft Entra ID](/azure/active-directory/external-identities/delegate-invitations).

### Remove users
EXISTING

To maintain a secure environment, it's essential to manage user accounts effectively. To ensure that only active and authorized users have access to existing environment, do the following actions.

| Security action |Description  |
|---------|---------|
|Remove inactive users from Microsoft accounts (MSAs) | [Directly remove inactive users from your organization](../accounts/delete-organization-users.md) if using MSAs. You can't create queries for work items assigned to removed MSA accounts. |
|Disable or delete Microsoft Entra user accounts | If connected to Microsoft Entra ID, disable or delete the Microsoft Entra user account while keeping the Azure DevOps user account active. This action allows you to continue querying work item history using your Azure DevOps user ID. |
|[Revoke user PATs](../accounts/admin-revoke-user-pats.md) | Ensure secure management of these critical authentication tokens by regularly reviewing and revoking any existing user PATs. |
|Revoke special permissions granted to individual users | Audit and revoke any special permissions granted to individual users to ensure alignment with the principle of least privilege. |
|Reassign work from removed users | Before removing users, reassign their work items to current team members to distribute the load effectively. |

## Enable and review auditing events
NEW & EXISTING

To enhance security and monitor usage patterns with your organization connected to Microsoft Entra, do the following actions.

| Security action |Description  |
|---------|---------|
|[Enable auditing](../audit/azure-devops-auditing.md#enable-and-disable-auditing) | Track and view events related to user actions, permissions, changes, and security incidents. |
|[Review audit events regularly](../audit/azure-devops-auditing.md#review-audit-log) | Look for unexpected usage patterns, especially by administrators and other users. |
|[Review audit logs](../audit/auditing-events.md) | Regularly review audit logs to monitor user activities and detect any suspicious behavior. This action helps identify potential security breaches and takes corrective actions. |
|Configure security alerts | Configure alerts to notify you of any security incidents or policy violations. This action ensures timely response to potential threats. |

## Protect your data

To ensure the security and integrity of your data, do the following actions:

|Security action |Description  |
|---------|---------|
|[Protect your data](data-protection.md) | Protect data, including encryption, backup, and recovery strategies. |
|[Add IPs and URLs to allowlist](allow-list-ip-url.md) | If your organization is secured with a firewall or proxy server, add IPs and URLs to the allowlist. |

## Secure your Azure DevOps environment

To ensure that your Azure DevOps environment complies with industry standards and regulations, do the following actions.

|Security action |Description  |
|---------|---------|
|Ensure compliance with industry standards     | Azure DevOps complies with various industry standards and regulations, such as ISO/IEC 27001, SOC 1/2/3, and GDPR. Ensure your environment adheres to these standards.        |
|Enforce policies    | Implement policies to enforce security best practices across your organization. This action includes requiring code reviews, enforcing branch policies, and setting up automated security checks.        |
|Onboard to Component Governance for CI/CD| Key reasons:<br>- **Security vulnerability detection:** Alerts you to known vulnerabilities in open-source components.<br>- **License compliance:** Ensures components comply with your organization's licensing policies.<br>- **Policy enforcement:** Ensures only approved versions are used.<br>- **Visibility with tracking:** Provides visibility into components across repositories for easier management. |

## Employ security features and tools

The following table lists security features and tools that can help you monitor, manage, and enhance the security of your projects.

|Security action |Description  |
|---------|---------|
|Use OAuth instead of personal access tokens (PATs)   | [Use OAuth flow](../../integrate/get-started/authentication/oauth.md) instead of PATs and don't use personal GitHub accounts as service connections.   |
|Use code scanning and analysis    | Utilize tools like [Microsoft Defender](https://apps.microsoft.com/detail/9p6pmztm93lr?hl=en-US&gl=US) to scan your code for vulnerabilities, secrets, and misconfigurations. This action helps identify and remediate security issues early in the development process.     |
|[Use Git Credential Manager](../../repos/git/set-up-credential-managers.md) | Support [two-factor authentication with GitHub repositories](https://docs.github.com/en/authentication/securing-your-account-with-two-factor-authentication-2fa/about-two-factor-authentication) and authenticate to Azure Repos.|
|[Use Azure DevOps Credential Scanner for GitHub](https://secdevtools.azurewebsites.net/helpcredscan.html)    | When using a managed identity isn't an option, ensure that credentials get stored in secure locations such as Azure Key Vault, instead of embedding them into the code and configuration files. Implement Azure DevOps Credential Scanner to identify credentials within the code.      |
|[Use native secret scanning for GitHub](https://docs.github.com/en/code-security/secret-scanning/introduction/about-secret-scanning) |When using a managed identity isn't an option, ensure that secrets get stored in secure locations such as Azure Key Vault, instead of embedding them into the code and configuration files. Use the native secret scanning feature to identify secrets within the code.|

### Secure your services

To ensure the security and integrity of your Azure DevOps services, do the following actions:

|Security action |Description  |
|---------|---------|
|[Secure Azure Boards](set-permissions-access-work-tracking.md) | For more information, see the following articles:<br>- [Set permissions for queries and query folders](../../boards/queries/set-query-permissions.md)<br>- [Manage team administrators](../settings/add-team-administrator.md)<br>- [Default permissions and access levels for Azure Boards](../../boards/get-started/permissions-access-boards.md). |
|[Secure Azure Repos] | For more information, see the following articles:<br>- [Default Git settings and policies](default-git-permissions.md)<br>- [Set permissions for a specific branch](../../repos/git/branch-permissions.md)<br>- [Set branch policies](../../repos/git/branch-policies.md). |
|[Secure Azure Pipelines](../../pipelines/security/overview.md) | For more information, see the following articles:<br>- [Add users to Azure Pipelines](../../pipelines/policies/set-permissions.md)<br>- [Use templates for security](../../pipelines/process/templates.md)<br>- [Secure agents, projects, and containers](../../pipelines/security/misc.md) |
|[Secure Azure Test Plans](set-permissions-access-test.md) | Ensure that your team has the appropriate access to efficiently manage and execute test plans. |
|[Secure Azure Artifacts](../../artifacts/feeds/feed-permissions.md) | Manage access to your packages and control who can interact with them. |

### Implement Zero Trust

To enhance security, adopt Zero Trust principles across your DevOps processes. This approach ensures that every access request is thoroughly verified, regardless of its origin.

|Action |Description  |
|---------|---------|
|Embrace DevSecOps | Implement [Zero Trust](/security/zero-trust/develop/secure-devops-environments-zero-trust) principles to fortify your [DevOps platform](/security/zero-trust/develop/secure-devops-platform-environment-zero-trust), safeguard your [development environment](/security/zero-trust/develop/secure-dev-environment-zero-trust), and integrate Zero Trust seamlessly into your [developer workflows](/security/zero-trust/develop/embed-zero-trust-dev-workflow). |

## Related articles

- [Data locations for Azure DevOps](data-location.md)
- [Microsoft Security Development Lifecycle](https://www.microsoft.com/sdl/)
- [Azure Trust Center](https://azure.microsoft.com/support/trust-center/)
