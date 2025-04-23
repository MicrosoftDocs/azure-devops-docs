---
title: Make your Azure DevOps secure
titleSuffix: Azure DevOps 
description: An overview of actions to ensure the security of your Azure DevOps environment, data, and users.
ms.topic: overview
ms.subservice: azure-devops-security
ms.author: chcomley
author: chcomley
monikerRange: '<= azure-devops'
ms.date: 04/23/2025
--- 

# Make your Azure DevOps secure

[!INCLUDE [version-lt-eq-azure-devops](../../includes/version-lt-eq-azure-devops.md)]

When you're handling information and data, especially in a cloud-based solution like Azure DevOps Services, security should be your top priority. While Microsoft ensures the security of the underlying cloud infrastructure, it's your responsibility to configure security within Azure DevOps. This article provides an overview of necessary security-related configurations to protect your Azure DevOps environment against threats and vulnerabilities. 

## Secure your network

Securing your network is crucial when you're working with Azure DevOps to protect your data and resources from unauthorized access and potential threats. Implement network security measures to help ensure that only trusted sources can access your Azure DevOps environment. To secure your network when you're working with Azure DevOps, do the following actions:

- **Set up IP allowlisting:** Restrict access to specific IP addresses to allow traffic only from trusted sources, reducing the attack surface. For instructions, see [Set up IP allowlisting](allow-list-ip-url.md). 
- **Use data encryption:** Always encrypt data in transit and at rest. Secure communication channels using protocols like HTTPS. For more information, see [Use data encryption](/azure/security/fundamentals/encryption-overview).
- **Validate certificates:** Ensure certificates are valid and issued by trusted authorities when establishing connections. For more information, see [Validate certificates](/azure/security/fundamentals/azure-ca-details?tabs=root-and-subordinate-cas-list).
- **Implement Web Application Firewalls (WAFs):** Filter, monitor, and block malicious web-based traffic with WAFs for an extra layer of protection against common attacks. For more information, see [Implement Web Application Firewalls (WAFs)](/azure/web-application-firewall/).
- **Enable network security groups (NSGs):** Use NSGs to control inbound and outbound traffic to Azure resources, ensuring only authorized traffic is allowed. For more information, see the [Network security groups (NSGs) overview](/azure/virtual-network/network-security-groups-overview).
- **Use Azure Firewall:** Deploy Azure Firewall to provide a centralized network security policy across multiple Azure subscriptions and virtual networks. For more information, see the [Azure Firewall overview](/azure/firewall/overview).
- **Monitor network traffic:** Use Azure Network Watcher to monitor and diagnose network issues, ensuring the security and performance of your network. For more information, see the [Azure Network Watcher overview](/azure/network-watcher/network-watcher-monitoring-overview).
- **Implement DDoS protection:** Enable Azure DDoS Protection to safeguard your applications from distributed denial-of-service (DDoS) attacks. For more information, see [Azure DDoS Protection](/azure/ddos-protection/ddos-protection-overview).

For more information, see [Application management best practices](/azure/active-directory/manage-apps/application-management-fundamentals).

## Secure your Azure DevOps environment

To ensure that your Azure DevOps environment complies with industry standards and regulations, implement security measures and policies. Compliance with standards such as ISO/IEC 27001, SOC 1/2/3, and General Data Protection Regulation (GDPR) helps protect your environment and maintain trust with your users.

- **Ensure compliance with industry standards:** Azure DevOps complies with various industry standards and regulations, such as ISO/IEC 27001, SOC 1/2/3, and GDPR. Ensure your environment adheres to these standards.
- **Enforce policies:** Implement policies to enforce security best practices across your organization. This action includes requiring code reviews and enforcing [branch policies](../../repos/git/branch-policies.md), [compliance policies for pipelines](/azure/governance/policy/tutorials/policy-devops-pipelines), and [security policies](../accounts/change-application-access-policies.md).
- **Onboard to Component Governance for CI/CD for the following reasons:**
  - Security vulnerability detection: Alerts you to known vulnerabilities in open-source components.
  - License compliance: Ensures components comply with your organization's licensing policies.
  - Policy enforcement: Ensures only approved versions are used.
  - Visibility with tracking: Provides visibility into components across repositories for easier management. 

### Manage project and organization-level permissions

- **Limit access to projects and repos:** Reduce the risk of leaking sensitive information and deploying insecure code by limiting access to projects and repositories. Use built-in or custom security groups manage permissions. For more information, see [Limit access to projects and repositories](restrict-access.md).
- **Disable *“Allow public projects”*:** In your organization’s policy settings, disable the option to create public projects. Switch project visibility from public to private as needed. Users who never signed in have read-only access to public projects, while signed-in users can be granted access to private projects and make permitted changes. For more information, see [Change application connection and security policies for your organization](../accounts/change-application-access-policies.md).
- **Restrict organization creation:** Prevent users from creating new projects to maintain control over your environment. For more information, see [Restrict organization creation via Microsoft Entra tenant policy](../accounts/azure-ad-tenant-policy-restrict-org-creation.md).

## Use security features and tools

The following security features and tools can help you monitor, manage, and enhance the security of your projects:

- **Use OAuth instead of personal access tokens (PATs):** Use OAuth flow instead of PATs and don't use personal GitHub accounts as service connections. For more information, see the [OAuth overview](../../integrate/get-started/authentication/oauth.md).
- **Use code scanning and analysis:** Utilize tools like [Microsoft Defender](https://apps.microsoft.com/detail/9p6pmztm93lr?hl=en-US&gl=US) to scan your code for vulnerabilities, secrets, and misconfigurations. This action helps identify and remediate security issues early in the development process.
- **Use Git Credential Manager:** Support [two-factor authentication with GitHub repositories](https://docs.github.com/en/authentication/securing-your-account-with-two-factor-authentication-2fa/about-two-factor-authentication) and authenticate to Azure Repos. For more information, see [Set up Git Credential Manager](../../repos/git/set-up-credential-managers.md).
- **Use Azure DevOps Credential Scanner (CredScan) for GitHub:** When using a managed identity isn't an option, ensure that credentials get stored in secure locations such as Azure Key Vault, instead of embedding them into the code and configuration files. Implement Azure DevOps Credential Scanner to identify credentials within the code. For more information, see [Getting started with CredScan](https://secdevtools.azurewebsites.net/helpcredscan.html).
- **Use native secret scanning for GitHub:** When using a managed identity isn't an option, ensure that secrets get stored in secure locations such as Azure Key Vault, instead of embedding them into the code and configuration files. Use the native secret scanning feature to identify secrets within the code. For more information, see [About secret scanning](https://docs.github.com/en/code-security/secret-scanning/introduction/about-secret-scanning).

For more information, see the [GitHub advanced security overview](../../repos/security/github-advanced-security-security-overview.md).

## Secure your services

To ensure the security and integrity of your services in Azure DevOps, implement security measures for each service. These measures include setting permissions, managing access, and using security features specific to each service.

- **Secure Azure Boards:** Protect your work tracking data by setting appropriate permissions and managing access levels.
  - [Set work tracking permissions](set-permissions-access-work-tracking.md)
  - [Set permissions for queries and query folders](../../boards/queries/set-query-permissions.md)
  - [Manage team administrators](../settings/add-team-administrator.md)
  - [Learn about default permissions and access levels for Azure Boards](../../boards/get-started/permissions-access-boards.md)
- **Secure Azure Repos:** Ensure the security of your code repositories by configuring Git settings, branch permissions, and policies.
  - [Learn about default Git settings and policies](default-git-permissions.md)
  - [Set permissions for a specific branch](../../repos/git/branch-permissions.md)
  - [Set branch policies](../../repos/git/branch-policies.md)
  - [Configure GitHub Advanced Security for Azure DevOps](../../repos/security/configure-github-advanced-security-features.md)
  - [Learn about GitHub Advanced Security](../../repos/security/github-advanced-security-security-overview.md)
- **Secure Azure Pipelines:** Safeguard your CI/CD processes by setting permissions, using security templates, and securing agents and containers.
  - [Learn about Azure Pipelines security](../../pipelines/security/overview.md)
  - [Add users to Azure Pipelines](../../pipelines/policies/set-permissions.md)
  - [Use templates for security](../../pipelines/process/templates.md)
  - [Secure agents, projects, and containers](../../pipelines/security/misc.md)
  - [Secure access to Azure Repos from pipelines](../../pipelines/security/secure-access-to-repos.md)
  - [Secure pipelines resources](../../pipelines/security/resources.md)
  - [Determine your approach for securing YAML pipelines](../../pipelines/security/approach.md)
  - [Protect secrets in Azure Pipelines](../../pipelines/security/secrets.md)
- **Secure Azure Test Plans:** Ensure that your team has the appropriate access to efficiently manage and execute test plans.
  - [Learn default manual test and access permissions](../../test/manual-test-permissions.md)
  - [Set permissions and access for testing](set-permissions-access-test.md)  
- **Secure Azure Artifacts:** Manage access to your packages and control who can interact with them.
  - [Manage Azure Artifacts permissions](../../artifacts/feeds/feed-permissions.md)
  - [Set feed scopes](../../artifacts/feeds/project-scoped-feeds.md)

## Control access

Provide the minimum necessary [permissions](about-permissions.md) and [access levels](access-levels.md) to ensure that only authorized individuals and services can access sensitive information and perform critical actions. This practice helps to minimize the risk of unauthorized access and potential data breaches. 

Regularly review and update these settings to adapt to changes in your organization, such as role changes, new hires, or departures. Implementing a periodic [audit](#enable-and-review-auditing-events) of permissions and access levels can help identify and rectify any discrepancies, ensuring that your security posture remains robust and aligned with best practices.

### Scope permissions

To ensure secure and efficient management of permissions, properly scope permissions within your Azure DevOps environment. Scoping permissions involves defining and assigning the appropriate level of access to users and groups based on their roles and responsibilities. This practice helps to minimize the risk of unauthorized access and potential data breaches by ensuring that only authorized individuals have access to sensitive information and critical actions.

To scope permissions effectively, do the following actions:

- **Disable inheritance:** Avoid inheritance, preventing unintended access. Inheritance can inadvertently grant permissions to users who shouldn't have them, due to its allow-by-default nature. Carefully manage and explicitly set permissions to ensure that only the intended users have access. For more information, see [Permissions inheritance](about-permissions.md#permission-inheritance).
- **Segment environments:** Use separate Azure accounts for different environments, such as Development, Testing, and Production, to enhance security and prevent conflicts. This approach minimizes the risk of resource conflicts and data contamination between environments and allows for better management and isolation of resources. For more information, see [Azure Landing Zone](/azure/cloud-adoption-framework/ready/landing-zone/).
- **Control access and ensure compliance:** Use Azure Policy to restrict access to unused Azure regions and services, ensuring compliance with organizational standards. This action helps enforce best practices and maintain a secure environment by preventing unauthorized access and usage. For more information, see the [Azure Policy overview](/azure/governance/policy/overview).
- **Implement Azure role-based control (ABAC):** Use ABAC with properly tagged resources, limiting unauthorized access. This action ensures that access permissions get granted based on specific attributes, enhancing security by preventing unauthorized resource creation and access. For more information, see [Implement Azure role-based control (ABAC)](/azure/role-based-access-control/conditions-overview).
- **Use security groups:** Use security groups to efficiently manage permissions for multiple users. This method simplifies granting and revoking access compared to assigning permissions individually and ensures consistency and easier management across your organization.
  - Use Microsoft Entra ID, Active Directory, or Windows security groups when you're managing lots of users.
  - Take advantage of built-in roles and default to Contributor for developers. Admins get assigned to the Project Administrator security group for elevated permissions, allowing them to configure security permissions.
  - Keep groups as small as possible, restricting access.
  - For more information, see [Manage security groups](add-manage-security-groups.md).
- **Choose the right authentication method:** Set up secure authentication methods and manage authorization policies. For more information, see the [Choose the right authentication method](#choose-the-right-authentication-method) section in this article and [Authentication methods](about-security-identity.md).
- **Integrate with Microsoft Entra ID:** Use Microsoft Entra ID for unified identity management. For more information, see [Connect your organization to Microsoft Entra ID](../accounts/connect-organization-to-azure-ad.md).
  - To enhance security for built-in administrator groups, consider implementing just-in-time access using a Microsoft Entra [Privileged Identity Management (PIM) group](/azure/active-directory/privileged-identity-management/concept-pim-for-groups). This approach allows you to grant elevated permissions only when needed, reducing the risk associated with permanent access. For more information, see [Configure just-in-time-access for admin groups](../accounts/manage-azure-active-directory-groups.md#configure-just-in-time-access-for-admin-groups).
- **Enable Microsoft Entra multifactor authentication (MFA):** Add an extra layer of security with MFA. For more information, see [Enable Microsoft Entra multifactor authentication](/entra/identity/authentication/tutorial-enable-azure-mfa).
- **Change security policies:** Manage security policies, including conditional access. for more information, see [Change application connection & security policies for your organization](../accounts/change-application-access-policies.md).

For more information about permissions, see the following articles:
- [Permissions and role lookup guide](permissions-lookup-guide.md)
- [Set individual permissions](/azure/devops/organizations/security/request-changes-permissions)
- [Permissions, security groups, and service accounts reference](permissions.md)

<a id="choose-the-right-authentication-method">  </a>
<a name='use-azure-ad'></a>

### Choose the right authentication method

When you're choosing the appropriate authentication method for your Azure DevOps environment, consider the security and management benefits of different options. Using secure authentication methods helps protect your resources and ensures that only authorized users and services can access your Azure DevOps environment. Consider using service principals, managed identities, and Microsoft Entra to enhance security and streamline access management.

- **Use service principals:** Represent security objects within a Microsoft Entra application. Define what an application can do in a given tenant. Set up during application registration in the Azure portal. Configure to access Azure resources, including Azure DevOps. Useful for apps needing specific access and control.
- **Use managed identities:** Similar to an application’s service principal. Provide identities for Azure resources. Allow services supporting Microsoft Entra authentication to share credentials. Azure handles credential management and rotation automatically. Ideal for seamless sign-in details management.
- **Use Microsoft Entra ID:**
  - Create a single plane for identity by connecting Azure DevOps to Microsoft Entra ID. This consistency reduces confusion and minimizes security risks from manual configuration errors.
  - [Access your organization with Microsoft Entra ID](../accounts/access-with-azure-ad.md) and assign different roles and permissions to specific groups across various resource scopes. This action implements fine-grained governance, ensures controlled access, and aligns with security best practices.
  - Use [Conditional Access Policies](../accounts/change-application-access-policies.md), which define access rules based on conditions like [location, device, or risk level](/azure/active-directory/conditional-access/howto-conditional-access-policy-location).

### Manage external guest access

To ensure the security and proper management of external guest access, implement specific measures that control and monitor how external users interact with your Azure DevOps environment. External guest access can introduce potential security risks if not managed properly. By following these actions, you can minimize these risks and ensure that external guests have the appropriate level of access without compromising the security of your environment.

- **Block external guest access:** Disable the ["Allow invitations to be sent to any domain" policy](/azure/active-directory/external-identities/allow-deny-list) to prevent external guest access if there's no business need for it.
- **Use distinct emails or UPNs:** Use different email addresses or user principal names (UPNs) for personal and business accounts to eliminate ambiguity between personal and work-related accounts.
- **Group external guest users:** Place all external guest users in a single Microsoft Entra group and [manage permissions for this group appropriately](../accounts/assign-access-levels-by-group-membership.md). Remove direct assignments to ensure group rules apply to these users.
- **Reevaluate rules regularly:** Regularly review rules on the Group rules tab of the Users page. Consider any group membership changes in Microsoft Entra ID that might affect your organization. Microsoft Entra ID can take up to 24 hours to update dynamic group membership, and rules are automatically reevaluated every 24 hours and whenever a group rule changes.

For more information, see [B2B guests in the Microsoft Entra ID](/azure/active-directory/external-identities/delegate-invitations).

### Implement Zero Trust

To enhance security, adopt Zero Trust principles across your DevOps processes. This approach ensures that every access request is thoroughly verified, regardless of its origin. Zero Trust operates on the principle of "never trust, always verify," meaning that no entity, whether inside or outside the network, is trusted by default. By implementing Zero Trust, you can significantly reduce the risk of security breaches and ensure that only authorized users and devices can access your resources.

- **Embrace the Zero Trust approach:** Implement [Zero Trust](/azure/security/fundamentals/zero-trust) principles to fortify your [DevOps platform](/security/zero-trust/develop/secure-devops-platform-environment-zero-trust), safeguard your [development environment](/security/zero-trust/develop/secure-dev-environment-zero-trust), and integrate Zero Trust seamlessly into your [developer workflows](/security/zero-trust/develop/embed-zero-trust-dev-workflow). Zero Trust helps to protect against lateral movement within the network, ensuring that even if there's a compromised part of the network, the threat is contained and can't spread.

For more information, see the [Zero Trust Assessment guide](https://microsoft.github.io/zerotrustassessment/guide).

### Remove users

To ensure that only active and authorized users have access to your Azure DevOps environment, regularly review and manage user access. Removing inactive or unauthorized users helps maintain a secure environment and reduces the risk of potential security breaches. By following these actions, you can ensure that your Azure DevOps environment remains secure and that only the necessary individuals have access.

- **Remove inactive users from Microsoft accounts (MSAs):** Directly remove inactive users from your organization if they're using MSAs. You can't create queries for work items assigned to removed MSA accounts. For more information, see [Remove users from your organization](../accounts/delete-organization-users.md).
- **Disable or delete Microsoft Entra user accounts:** If connected to Microsoft Entra ID, disable or delete the Microsoft Entra user account while keeping the Azure DevOps user account active. This action allows you to continue querying work item history using your Azure DevOps user ID.
- **Revoke user PATs:** Ensure secure management of these critical authentication tokens by regularly reviewing and revoking any existing user PATs. For more information, see [Revoke user PATs for administrators](../accounts/admin-revoke-user-pats.md).
- **Revoke special permissions granted to individual users:** Audit and revoke any special permissions granted to individual users to ensure alignment with the principle of least privilege.
- **Reassign work from removed users:** Before removing users, reassign their work items to current team members to distribute the load effectively.

## Scope service accounts

Service accounts are used to run automated processes and services, and they often have elevated permissions. By properly scoping and managing service accounts, you can minimize security risks and ensure that these accounts are used appropriately.

- **Create single-purpose service accounts:** Each service should have its dedicated account to minimize risk. Avoid using regular user accounts as [service accounts](permissions.md#service-accounts).
- **Use Azure Resource Manager:** Authenticate with Azure resources using workload identity federation with either an app registration or managed identity instead of using an app registration with a secret. For more information, see [Use Azure Resource Manager](../../pipelines/library/connect-to-azure.md#create-an-azure-resource-manager-service-connection-that-uses-workload-identity-federation).
- **Identify and disable unused service accounts:** Regularly review and identify accounts no longer in use. Disable unused accounts before considering deletion.
- **Restrict privileges:** Limit service account privileges to the minimum necessary. Avoid interactive sign-in rights for service accounts.
- **Use separate identities for report readers:** If using domain accounts for service accounts, use a different identity for report readers to [isolate permissions and prevent unnecessary access](/azure/devops/server/admin/service-accounts-dependencies?view=azure-devops&preserve-view=true).
- **Use local accounts for workgroup installations:** When installing components in a workgroup, use local accounts for user accounts. Avoid domain accounts in this scenario.
- **Use service connections:** Use service connections whenever possible to securely connect to services without passing secret variables directly to builds. Restrict connections to specific use cases. for more information, see the [Scope service connections](#scope-service-connections) section in this article.
- **Monitor service account activity:** Implement auditing and create [audit streams](../audit/auditing-streaming.md) to monitor service account activity.

## Scope service connections

To ensure secure and efficient access to Azure resources, properly scope service connections. Service connections allow Azure DevOps to connect to external services and resources, and by scoping these connections, you can limit access to only the necessary resources and reduce the risk of unauthorized access.

- **Limit access:** Limit access by scoping your [Azure Resource Manager](/azure/azure-resource-manager/management/overview) service connections to specific resources and groups. Don't grant broad contributor rights across the entire Azure subscription.
- **Use Azure Resource Manager:** Authenticate with Azure resources using workload identity federation with either an app registration or managed identity instead of using an app registration with a secret. For more information, see [Create an Azure Resource Manager service connection that uses workload identity federation](../../pipelines/library/connect-to-azure.md#create-an-azure-resource-manager-service-connection-that-uses-workload-identity-federation).
- **Scope resource groups:** Ensure resource groups contain only the Virtual Machines (VMs) or resources needed for the build process.
- **Avoid classic service connections:** Opt for modern Azure Resource Manager service connections instead of classic ones, which lack scoping options.
- **Use purpose-specific team service accounts:** Authenticate service connections using purpose-specific team service accounts to maintain security and control.

For more information, see [Common service connection types](../../pipelines/library/service-endpoints.md).

## Enable and review auditing events
 
To enhance security and monitor usage patterns within your organization, enable and regularly review auditing events. Auditing helps track user actions, permissions changes, and security incidents, allowing you to identify and address potential security issues promptly.

- **Enable auditing:** Track and view events related to user actions, permissions, changes, and security incidents. For more information, see [Enable or disable auditing](../audit/azure-devops-auditing.md#enable-and-disable-auditing).
- **Review audit events regularly:** Regularly review audit logs to monitor user activities and detect any suspicious behavior. Look for unexpected usage patterns, especially by administrators and other users. This action helps identify potential security breaches and takes corrective actions. For more information, see [Review audit log](../audit/azure-devops-auditing.md#review-audit-log) and [Auditing events](../audit/auditing-events.md).
- **Configure security alerts:** Configure alerts to notify you of any security incidents or policy violations. This action ensures timely response to potential threats.

## Protect your data

To ensure the security and integrity of your data, implement data protection measures. Protecting your data involves encryption, backup, and recovery strategies to safeguard against data loss and unauthorized access.

- **Protect your data:** Protect your data by using encryption, backup, and recovery strategies. For more information, see [Data protection](data-protection.md).
- **Add IPs and URLs to allowlist:** If your organization is secured with a firewall or proxy server, add IPs and URLs to the allowlist. For more information, see [Allowed IP addresses and domain URLs](allow-list-ip-url.md).

## Related articles

- [Data locations for Azure DevOps](data-location.md)
- [Microsoft Security Development Lifecycle](https://www.microsoft.com/sdl/)
- [Azure Trust Center](https://azure.microsoft.com/support/trust-center/)
