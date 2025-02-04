---
title: Security best practices
titleSuffix: Azure DevOps
description: Best practices for managing security and keeping your data secure in Azure DevOps.
ms.subservice: azure-devops-security
ms.topic: best-practice
ms.author: chcomley
author: chcomley
monikerRange: '<= azure-devops'
ai-usage: ai-assisted 
ms.date: 01/20/2025
---

# Security best practices

[!INCLUDE [version-lt-eq-azure-devops](../../includes/version-lt-eq-azure-devops.md)]

When you're handling information and data, especially in a cloud-based solution like Azure DevOps Services, security should be your top priority. While Microsoft ensures the security of the underlying cloud infrastructure, configuring security within Azure DevOps is your responsibility.

While not mandatory, incorporating best practices can significantly enhance your experience and bolster security. The following recommendations are designed to help you maintain a secure Azure DevOps environment.

## Secure your Azure DevOps environment

Employ the following best practices for [removing users](#remove-users), [reviewing audit events](#review-auditing-events), and [integrating with Microsoft Entra ID](#use-microsoft-entra-id).

### Remove users

- **Remove inactive users from Microsoft accounts (MSAs):** [Directly remove inactive users from your organization](../accounts/delete-organization-users.md) if using MSAs. You can't create queries for work items assigned to removed MSA accounts.
- **Disable or delete Microsoft Entra user accounts:** If connected to Microsoft Entra ID, disable or delete the Microsoft Entra user account while keeping the Azure DevOps user account active. This action allows you to continue querying work item history using your Azure DevOps user ID.
- **[Revoke user PATs](../accounts/admin-revoke-user-pats.md):** Regularly review and revoke any existing user PATs to ensure secure management of these critical authentication tokens.
- **Revoke special permissions granted to individual users:** Audit and revoke any special permissions granted to individual users to ensure alignment with the principle of least privilege.
- **Reassign work from removed users:** Before removing users, reassign their work items to current team members to distribute the load effectively.

<a name='use-azure-ad'></a>

### Use Microsoft Entra ID

- **Establish a unified identity system:**  Connect Azure DevOps to Microsoft Entra ID to create a single plane for identity. This consistency reduces confusion and minimizes security risks from manual configuration errors.
- **Implement fine-grained governance:** Use Microsoft Entra ID to assign different roles and permissions to specific groups across various resource scopes. This action ensures controlled access and aligns with security best practices.
- **Enhance security features:** Enable other security features with Microsoft Entra ID, such as:
  - **Multifactor Authentication (MFA):** Require multiple factors like password and phone verification for user authentication.
**Conditional access policies:** Define access rules based on conditions like location, device, or risk level.

For more information, see the following articles:
- [About accessing your organization with Microsoft Entra ID](../accounts/access-with-azure-ad.md)
- [Add Active Directory / Microsoft Entra users or groups to a built-in security groups](add-ad-aad-built-in-security-groups.md)
- [Limit access by location or IP addresses](/azure/active-directory/conditional-access/howto-conditional-access-policy-location)
- [Manage conditional access](../accounts/change-application-access-policies.md)
- [Require all users to use multifactor authentication (MFA)](/azure/active-directory/authentication/concept-mfa-howitworks)

### Review auditing events

With your organization connected to Microsoft Entra, do the following tasks to enhance security and monitor usage patterns:
- **[Enable auditing](../audit/azure-devops-auditing.md#enable-and-disable-auditing):** Track and view events related to user actions, permissions, and changes.
- **[Review audit events regularly](../audit/azure-devops-auditing.md#review-audit-log):** Look for unexpected usage patterns, especially by administrators and other users.

### Secure your network

The following functions are effective ways to enhance the security of your network when you're working with Azure DevOps.

- **[Set up IP allowlisting](allow-list-ip-url.md):** Restrict access to specific IP addresses to allow traffic only from trusted sources, reducing the attack surface.
- **Use encryption:** Always encrypt data in transit and at rest. Secure communication channels using protocols like HTTPS.
- **Validate certificates:** Ensure certificates are valid and issued by trusted authorities when establishing connections.
- **Implement web application firewalls (WAFs):** Filter, monitor, and block malicious web-based traffic with WAFs for an extra layer of protection against common attacks.

For more information, see [Application management best practices](/azure/active-directory/manage-apps/application-management-fundamentals).

### DevSecOps

**Embrace DevSecOps:** Implement [Zero Trust](/security/zero-trust/develop/secure-devops-environments-zero-trust) principles to fortify your [DevOps platform](/security/zero-trust/develop/secure-devops-platform-environment-zero-trust), safeguard your [development environment](/security/zero-trust/develop/secure-dev-environment-zero-trust), and integrate Zero Trust seamlessly into your [developer workflows](/security/zero-trust/develop/embed-zero-trust-dev-workflow).

-----

## Scope permissions

The system handles permissions at various levels—individual, collection, project, and object—and assigns them to one or more built-in groups by default. To enhance security, do the following actions:

- **Provide least privilege access:** Ideally, users and services should have the minimum necessary access to perform their business functions.

> [!NOTE]
> In the context of CI/CD, implementing [least privilege access](https://wikipedia.org/wiki/Principle_of_least_privilege) can be counterproductive due to the dynamic nature of architecture. Each time a new service gets introduced, permissions must be updated beforehand. Additionally, rollbacks might require extra permissions that need to be considered. This challenge is magnified in environments with multiple pipelines.
> While least privilege permissions aim to minimize the impact of security breaches, it's crucial to balance security with productivity. You can achieve this balance by adopting more permissive access and mitigating the associated risks with compensating controls and security practices outlined on this page.

- **Disable inheritance:** Whenever possible, disable inheritance. Inheritance can inadvertently grant access or permissions to unexpected users due to its allow-by-default nature. For more information, see the [section on permission inheritance](about-permissions.md#permission-inheritance)
- **Environment segmentation:** Allocate separate Azure accounts for Development, Testing, Production, and other environments. This approach enhances security by minimizing the [blast radius](https://wikipedia.org/wiki/Blast_radius) and prevents resource conflicts and data contamination. Additionally, it enables multiple ephemeral, feature-specific resources within the development account. For large organizations, consider allocating at least one account per team per environment. Separate accounts for business-critical workloads may also be warranted. Consider adopting [Azure Landing Zone](/azure/cloud-adoption-framework/ready/landing-zone/) for streamlined provisioning and management.
- **Access control and compliance:** Leverage [Azure Policy](/azure/governance/policy/overview) in Management Groups to restrict access to unused Azure regions and services, ensuring compliance with organizational standards.
- **Attribute-Based Access Control (ABAC):** Implement [ABAC](/azure/role-based-access-control/conditions-overview) with properly tagged resources to limit rogue actor access and prevent unauthorized resource creation.

For more information about permissions, see the following articles: 
- [Permissions and role lookup guide](permissions-lookup-guide.md)
- [Permissions, security groups, and service accounts reference](permissions.md)
- [Set individual permissions](/azure/devops/organizations/security/request-changes-permissions).

### Project-level permissions

- **Limit access to projects and repos:** Reduce the risk of leaking sensitive information and deploying insecure code by [limiting access to projects and repositories](restrict-access.md). Use built-in or custom security groups manage permissions.
- **Disable *“Allow public projects”*:** In your organization’s policy settings, disable the option to create public projects. Switch project visibility from public to private as needed. Users who haven’t signed in have read-only access to public projects, while signed-in users can be granted access to private projects and make permitted changes.
- **Restrict project creation:** Prevent users from creating new projects to maintain control over your environment.

### External guest access 

- **Block external guest access:** Disable the ["Allow invitations to be sent to any domain" policy](/azure/active-directory/external-identities/allow-deny-list) to prevent external guest access if there's no business need for it.
- **Use distinct emails or UPNs:** Use different email addresses or user principal names (UPNs) for personal and business accounts to eliminate ambiguity between personal and work-related accounts.
- **Group external guest users:** Place all external guest users in a single Microsoft Entra group and [manage permissions for this group appropriately](../accounts/assign-access-levels-by-group-membership.md). Remove direct assignments to ensure group rules apply to these users.
- **Reevaluate rules regularly:** Regularly review rules on the Group rules tab of the Users page. Consider any group membership changes in Microsoft Entra ID that might affect your organization. Microsoft Entra ID can take up to 24 hours to update dynamic group membership, and rules are automatically reevaluated every 24 hours and whenever a group rule changes.

For more information, see [B2B guests in the Microsoft Entra ID](/azure/active-directory/external-identities/delegate-invitations).

-----

## Manage security groups

### Security and user groups 

The following table shows recommendations for assigning permissions to security groups and users groups.

|**Do** :::image type="icon" source="../../media/icons/checkmark.png" border="false":::|**Don't** :::image type="icon" source="../../media/icons/delete-icon.png" border="false"::: |
|---------|---------|
|Use Microsoft Entra ID, Active Directory, or Windows security groups when you're managing lots of users.    | **Don’t change the default permissions for the *Project Valid Users* group.** This group can access and view project information. For more information, see [Valid user groups](about-permissions.md#valid-user-groups).        |
|When you're adding teams, consider what permissions you want to assign to team members who need to create and modify area paths, iteration paths, and queries.   | **Don't add users to multiple security groups that contain different permission levels.** In certain cases, a *Deny* permission level might override an *Allow* permission level. For example, imagine you have two security groups in your Azure DevOps project: **Developers** and **Testers**. The **Developers** group has the permission to edit work items set to **Allow**. But, ensure that certain sensitive work items aren't edited by anyone except a few key individuals. To do so, create a new security group called **Sensitive Items Editors** and set the permission to **edit work items** to **Deny** for this group. If a user is a member of both the **Developers** group and the **Sensitive Items Editors** group, the **Deny** permission from the **Sensitive Items Editors** group takes precedence over the **Allow** permission from the **Developers** group. As a result, this user can't edit the sensitive work items, even though they have the **Allow** permission in the **Developers** group. This behavior ensures that **Deny** permissions are enforced strictly, providing a higher level of security and control over sensitive actions within your Azure DevOps environment.        |
|When you're adding many teams, consider creating a *Team Administrators* custom group where you allocate a subset of the permissions available to *Project Administrators*.     | **Don't change the default assignments made to the *Project Valid Users* groups.** If you remove or set *View instance-level information* to *Deny* for one of the *Project Valid Users* groups, no users in the group can access whatever project, collection, or deployment you set the permission on.        |
|Consider granting the work item query folders *Contribute* permission to users or groups who require the ability to create and share work item queries for the project.    | **Don't assign permissions that are noted as *Assign only to service accounts* to user accounts.**        |
|Keep groups as small as possible. Access should be restricted, and the groups should be frequently audited.    |         |
|Take advantage of built-in roles and default to Contributor for developers. Admins get assigned to the Project Administrator security group for elevated permissions, allowing them to configure security permissions.|     |

### Just-in-time access for admin groups 

If you have [Project Collection Administrator](../../user-guide/manage-organization-collection.md) and [Project Administrator](../../user-guide/project-admin-tutorial.md) access, you can modify the configuration of your organization or project. To enhance security for these built-in administrator groups, consider implementing just-in-time access using a Microsoft Entra [Privileged Identity Management (PIM) group](/azure/active-directory/privileged-identity-management/concept-pim-for-groups). This approach allows you to grant elevated permissions only when needed, reducing the risk associated with permanent access.

#### Configure access 

1. [Create a role-assignable group in Microsoft Entra ID](/azure/active-directory/roles/groups-create-eligible?tabs=ms-powershell&branch=main).
2. [Add your Microsoft Entra group to the Azure DevOps group](/azure/devops/organizations/security/add-ad-aad-built-in-security-groups?view=azure-devops&branch=main&tabs=preview-page&preserve-view=true). 

> [!NOTE]
>  When you configure just-in-time access using a Microsoft Entra Privileged Identity Management (PIM) group, ensure that any user with elevated access also retains standard access to the organization. This way, they can view the necessary pages and refresh their permissions as needed.

#### Use access 

1. [Activate your access](/azure/active-directory/privileged-identity-management/groups-activate-roles). 
2. [Refresh your permissions](request-changes-permissions.md#refresh-or-reevaluate-your-permissions) in Azure DevOps. 
3. Take the action requiring administrator access. 

> [!NOTE]
> Users have elevated access in Azure DevOps for up to 1 hour after their PIM group access gets deactivated.

## Scope service accounts

- **Create single-purpose service accounts:** Each service should have its dedicated account to minimize risk. Avoid using regular user accounts as [service accounts](permissions.md#service-accounts).
- **Follow naming and documentation conventions:** Use clear, descriptive names for service accounts and document their purpose and associated services.
- **Identify and disable unused service accounts:** Regularly review and identify accounts no longer in use. Disable unused accounts before considering deletion.
- **Restrict privileges:** Limit service account privileges to the minimum necessary. Avoid interactive sign-in rights for service accounts.
- **Use separate identities for report readers:** If using domain accounts for service accounts, use a different identity for report readers to [isolate permissions and prevent unnecessary access](/azure/devops/server/admin/service-accounts-dependencies?view=azure-devops&preserve-view=true).
- **Use local accounts for workgroup installations:** When installing components in a workgroup, use local accounts for user accounts. Avoid domain accounts in this scenario.
- **[Leverage service connections](#scope-service-connections):** Use service connections whenever possible to securely connect to services without passing secret variables directly to builds. Restrict connections to specific use cases.
- **Monitor service account activity:** Implement auditing and create [audit streams](../audit/auditing-streaming.md) to monitor service account activity.

For more information, see [Common service connection types](../../pipelines/library/service-endpoints.md#use-a-service-connection).

## Scope service connections

- **Scope  service connections:** Limit access by scoping your [Azure Resource Manager](/azure/azure-resource-manager/management/overview) service connections to specific resources and groups. Avoid granting broad contributor rights across the entire Azure subscription.
- **[Use workload identity federation](../../pipelines/library/connect-to-azure.md#create-an-azure-resource-manager-service-connection-that-uses-workload-identity-federation):** Authenticate with Azure resources using OpenID Connect (OIDC) without secrets. Create workload identity federation automatically or manually if you have the Owner role for your Azure subscription, aren't connecting to Azure Stack or Azure US Government environments, and any Marketplace extensions tasks you use support it.
- **Scope resource groups:** Ensure resource groups contain only the Virtual Machines (VMs) or resources needed for the build process.
- **Avoid classic service connections:** Opt for modern Azure Resource Manager service connections instead of classic one, which lack scoping options.
- **Use purpose-specific team service accounts:** Authenticate service connections using purpose-specific team service accounts to maintain security and control.

For more information, see [Common service connection types](../../pipelines/library/service-endpoints.md).

-----

## Choose the right authentication method

Select your [authentication methods](../../integrate/get-started/authentication/authentication-guidance.md) from the following sources:
- [Consider service principals and managed identities](#consider-service-principals)
- [Use personal access tokens (PATs) sparingly](#use-pats-sparingly)

### Consider service principals

Explore alternatives like [service principals and managed identities](../../integrate/get-started/authentication/service-principal-managed-identity.md):
 
- **Use service principals:** Represent security objects within a Microsoft Entra application. Define what an application can do in a given tenant. Set up during application registration in the Azure portal. Configure to access Azure resources, including Azure DevOps. Useful for apps needing specific access and control.
- **Use managed identities:** Similar to an application’s service principal. Provide identities for Azure resources. Allow services supporting Microsoft Entra authentication to share credentials. Azure handles credential management and rotation automatically. Ideal for seamless sign-in details management.

### Use PATs sparingly

- **Scope PATs to specific roles:** Assign PATs only the necessary permissions for specific tasks. Avoid granting global access to multiple organizations or repositories to minimize the risk of accidental misuse.
- **Avoid *write* or *manage* permissions on builds and releases:** PATs shouldn't have write or manage permissions on builds, releases, or other critical resources. Restricting these permissions helps prevent unintended actions that could affect your pipelines or deployments.
- **Set expiration dates and keep PATs secret:** Always set an expiration date for PATs. Regularly review and renew them as needed. Treat PATs as critical as passwords, keeping them confidential and avoiding public sharing or hardcoding in application code.
- **Avoid hardcoding PATs in application code:** Instead of embedding PATs directly in your code, use secure configuration files or environment variables to store and retrieve PATs dynamically. dynamically.
- **Audit and revoke unused PATs regularly:** Administrators should periodically review all PATs using the [REST APIs](/rest/api/azure/devops/tokenadmin/personal-access-tokens/list). Revoke any PATs that are no longer needed or don’t meet the recommended criteria.

For more information, see [Manage PATs with policies - for administrators](../accounts/manage-pats-with-policies-for-administrators.md) and [Use PATs](../accounts/use-personal-access-tokens-to-authenticate.md). 

-----

## Secure Azure Artifacts 

- Ensure that you understand the difference between feeds, project, and project collection administrators. For more information, see [Configure Azure Artifacts settings](../../artifacts/feeds/feed-permissions.md).
- [Set feed permissions](../../artifacts/feeds/feed-permissions.md).

## Secure Azure Boards 

- [Configure and customize Azure Boards](../../boards/configure-customize.md) before you customize a process.
- [Set work tracking and plan permissions](set-permissions-access-work-tracking.md)
- [Learn default permissions and access to Azure Boards](../../boards/get-started/permissions-access-boards.md)
- [Set query permissions](../../boards/queries/set-query-permissions.md)

## Secure Azure Pipelines

- [Use extends templates](../../pipelines/security/templates.md#use-extends-templates).
- [Set pipeline permissions](../../pipelines/policies/permissions.md)
- **Adopt and Secure Infrastructure as Code (IaC):** Use IaC tools like Azure Resource Manager (ARM) templates or Bicep to define and provision infrastructure directly from your pipeline. Leverage version control to track changes, implement linting and static analysis to identify vulnerabilities, and use Azure Policy to enforce compliance and security standards during pipeline execution. For more information, see [Secure Azure Pipelines overview](../../pipelines/security/overview.md).

### Policies

- **Require external reviewers:** Ensure at least one reviewer outside the original requester for a thorough review process. The approver shares co-ownership of the changes and accountability for any potential effects.
- **Require CI build to pass:** Establish a baseline for code quality by requiring the Continuous Integration (CI) build to pass before merging a PR. CI checks include code linting, unit tests, and security scans.
- **Disallow self-approval:** Prevent the original PR requester from approving their own changes to ensure an unbiased review process and avoid conflicts of interest.
- **Disallow PR completion with “wait” or “reject” votes:** Prevent PR completion even if some reviewers vote to wait or reject, encouraging addressing all feedback before merging.
- **Reset reviewer votes on changes:** Reset reviewer votes when recent changes are pushed to the PR to ensure reviewers reevaluate the updated code.
- **Lock down release pipelines:** Limit release pipelines to specific branches (usually production or main) to avoid accidental deployments from other branches.
- **Enforce settable variables at queue time:** Enable the "Enforce settable at queue time" option for pipeline variables to prevent users from overriding variable values during pipeline execution.
- **Disallow variable overrides in the editor:** For variables set in the pipeline editor, disallow user overrides to maintain consistency and prevent unintended changes.

### Agents 

- **Grant permissions sparingly:** Limit permissions to the smallest necessary set of accounts to reduce the attack surface.
- **Configure restrictive firewalls for agents:** Set up firewalls to be as restrictive as possible while still allowing agents to function, balancing security and usability.
- **Regularly update agent pools:** Keep your agent fleet up-to-date by regularly updating agents to ensure vulnerable code isn’t running, reducing the risk of exploitation.
- **Use a separate agent pool for production artifacts:** Isolate production artifacts by using a distinct agent pool, preventing accidental deployments from nonproduction branches.
- **Segment sensitive pools:** Create separate pools for sensitive and nonsensitive workloads. Only allow credentials in build definitions associated with the appropriate pool.

### Definitions 

- **Use YAML for pipeline definitions:** Define pipelines using YAML (Yet Another Markup Language) for better traceability and adherence to approval guidelines and version control practices.
- **Restrict edit access to pipeline definitions:** Limit access to editing pipeline definitions to the minimum necessary accounts to reduce the risk of accidental or unauthorized changes.

### Input 

- **Include checks for variables in build scripts:** Implement checks within your build scripts to mitigate potential command injection attacks through settable variables. Validate input values and prevent unintended or malicious commands.
- **Limit “settable at release time” build variables:** Minimize the number of build variables settable at release time to reduce the attack surface and simplify configuration management.

### Tasks 

- **Avoid remotely fetched resources**: Whenever possible, avoid fetching resources from external URLs during your build process. If remote resources are necessary, use versioning and hash checking to ensure integrity.
- **Avoid logging secrets**: Never log sensitive information, such as secrets or credentials, in your build logs to prevent unintentional exposure and compromise of security.
- **Use Azure Key Vault for secrets**: Instead of storing secrets directly in pipeline variables, use Azure Key Vault to manage and retrieve secrets securely.
- **Restrict running builds against arbitrary branches or tags**: For security-critical pipelines, limit users from running builds against any branch or tag. Define specific authorized branches or tags to prevent accidental or unauthorized executions.
- **Disable inheritance for pipeline permissions**: Inherited permissions can be overly broad and might not accurately reflect your needs. Disable inheritance and set permissions explicitly to align with your security requirements.
- **Limit job authorization scopes**: Always restrict job authorization scopes to the minimum necessary. Fine-tune permissions based on the specific tasks performed by each job.

### Repositories and branches

- **Require a minimum number of reviewers**: Enable the policy to ensure every pull request receives reviews from at least two approvers, promoting thorough code review and accountability.
- **Configure repository-specific security policies**: Tailor security policies to each repository or branch instead of project-wide policies to reduce risk, enforce change management standards, and enhance code quality.
- **Isolate production secrets in a separate key vault**: Store production secrets separately in an Azure Key Vault and limit access to a need-to-know basis to maintain separation from nonproduction builds.
- **Segregate test environments from production**: Avoid mixing test environments with production to ensure credentials and secrets aren't used in nonproduction contexts.
- **Disable forking**: Disabling forking helps manage security by preventing the proliferation of forks, making it easier to track security across all copies.
- **[Avoid providing secrets to fork builds](../../pipelines/security/misc.md#dont-provide-secrets-to-fork-builds)**: Refrain from sharing secrets with forked builds to keep them confidential and not exposed to forks.
- **[Consider manually triggering fork builds](../../pipelines/security/misc.md#consider-manually-triggering-fork-builds)**: Manually trigger builds for forks rather than allowing automatic triggers to provide better control over security checks.
- **[Use Microsoft-hosted agents for fork builds](../../pipelines/security/misc.md#use-microsoft-hosted-agents-for-fork-builds)**: Use Microsoft-hosted agents for forked builds as they're maintained and secure.
- **Scan production build definitions in Git repositories**: Regularly check production build definitions stored in your project’s Git repository for any credentials or sensitive information.
- **Configure branch control checks for production context**: Set up branch control checks to restrict the use of sensitive connections (for example, prod-connection) to pipelines running in the context of the production branch, ensuring proper authorization and preventing accidental misuse.

For more information, see [Other security considerations](../../pipelines/security/misc.md).

### Containers

- **Use trusted images**: Utilize official and verified images from reputable sources such as Azure Container Registry or Docker Hub. Always specify a specific version or tag to maintain consistency and reliability, rather than relying on the `latest` tag. Regularly update base images to include the latest security patches and bug fixes.
- **Scan containers for vulnerabilities and enforce runtime threat protection**: Use tools such as [Microsoft Defender for Cloud](/azure/defender-for-cloud/defender-for-containers-introduction) to monitor and detect security risks. Additionally, Azure Container Registry offers integrated [vulnerability scanning](/azure/container-registry/scan-images-defender) to help ensure container images are secure before deployment. You can also integrate third-party scanning tools through Azure DevOps extensions for added security checks.
- **Implement security policies to prevent privilege escalation and ensure containers run with the least amount of privileges necessary**: For example, Azure [Kubernetes Service (AKS)](/azure/aks/operator-best-practices-cluster-security), [role-based access control](/azure/aks/manage-azure-rbac), and [Pod Security Admission](/azure/aks/use-psa) allow you to enforce policies that restrict container privileges, ensure non-root execution, and limit access to critical resources. Define Pod Security Admission policies (for Kubernetes 1.22 and later) to apply restrictions, such as preventing the use of privileged containers or ensuring containers do not access the host network.
- **Utilize Network Policies**: [Network Policies](/azure/virtual-network/kubernetes-network-policies) can be used to restrict communication between containers, ensuring that only authorized containers can access sensitive resources within your network. In addition, [Azure Policy for AKS](/azure/governance/policy/concepts/policy-for-kubernetes) can be leveraged to enforce container security best practices, such as ensuring only trusted container images are deployed.
- **Set container-specific resource limits**: For example, set limits on CPU and memory to prevent containers from consuming excessive resources, which could lead to denial of service or security vulnerabilities.


## Secure Azure Repos

- [Improve code quality with branch policies](../../repos/git/branch-policies.md)
- [Set branch permissions](../../repos/git/branch-permissions.md)

## Secure Azure Test Plans

- [Set permissions and access for testing](set-permissions-access-test.md)
- [Supported scenarios and access requirements](../../test/overview.md#supported-scenarios-and-access-requirements)

## Secure GitHub Integrations

- **Use OAuth flow instead of PATs**: Disable PAT-based authentication for GitHub service connections and opt for OAuth flow for better security and integration.
- **Avoid admin or owner identities**: Never authenticate GitHub service connections using an identity that's an administrator or owner of any repositories. Limit permissions to the necessary level.
- **Avoid full-scope GitHub PATs**: Refrain from using a full-scope GitHub PAT to authenticate service connections. Use tokens with the minimum required permissions.
- **Avoid personal GitHub accounts as service connections**: Don’t use personal GitHub accounts as service connections in Azure DevOps. Instead, create dedicated service accounts or use organization-level accounts.
