---
title: Security best practices
titleSuffix: Azure DevOps
description: Best practices for managing security and keeping your data secure in Azure DevOps.
ms.subservice: azure-devops-security
ms.topic: best-practice
ms.author: chcomley
author: chcomley
monikerRange: '<= azure-devops' 
ms.date: 07/15/2024
---

# Security best practices

[!INCLUDE [version-lt-eq-azure-devops](../../includes/version-lt-eq-azure-devops.md)]

When you're handling information and data, especially in a cloud-based solution like Azure DevOps Services, security should be your top priority. While Microsoft ensures the security of the underlying cloud infrastructure, configuring security within Azure DevOps is your responsibility.

While not mandatory, incorporating best practices can significantly enhance your experience and bolster security. The following recommendations are designed to help you maintain a secure Azure DevOps environment.

## Secure your Azure DevOps environment

Employ the following best practices for [removing users](#remove-users), [reviewing audit events](#review-auditing-events), and [integrating with Microsoft Entra ID](#use-microsoft-entra-id).

### Remove users

- **Remove inactive users from MSA accounts:**
  - If your organization uses MSA accounts, [directly remove inactive users from the organization](../accounts/delete-organization-users.md).
  - Unfortunately, there's no other way to prevent access for these users. 
  - Keep in mind that you can't create queries for work items assigned to removed MSA accounts.
- **Disable or delete Microsoft Entra user accounts:**
  - If your organization is connected to Microsoft Entra ID, you can disable or delete the Microsoft Entra user account while keeping the Azure DevOps user account active. 
  - This approach allows you to continue querying work item history using your Azure DevOps user ID.
- **[Revoke user PATs](../accounts/admin-revoke-user-pats.md):**
  - Regularly review and revoke any existing user PATs.
  - PATs are critical authentication tokens, and managing them securely is essential.
- **Revoke special permissions granted to individual users:**
  - Audit and revoke any special permissions that were granted to individual user accounts.
  - Ensure that permissions align with the principle of least privilege.
- **Reassign work from removed users:**
  - Before removing users, reassign any work items they were handling.
  - Distribute the workload among current team members.

<a name='use-azure-ad'></a>

### Use Microsoft Entra ID

- **Single plane for identity:**
  - By connecting Azure DevOps to Microsoft Entra ID, you establish a unified identity system.
  - Consistency across services reduces confusion and minimizes security risks arising from manual configuration errors.
- **End-to-end governance:**
  - Leveraging Microsoft Entra ID allows you to implement fine-grained governance.
  - Assign different roles and permissions to specific Microsoft Entra groups across various resource scopes.
  - This approach ensures controlled access and aligns with security best practices.
- **Security features:**
  - Microsoft Entra ID enables additional security features, such as:
    - **Multifactor Authentication (MFA):** Enhance user authentication by requiring multiple factors (e.g., password and phone verification).
    - **Conditional access policies:** Define access rules based on conditions (e.g., location, device, or risk level).

For more information, see the following articles:
- [About accessing your organization with Microsoft Entra ID](../accounts/access-with-azure-ad.md)
- [Add Active Directory / Microsoft Entra users or groups to a built-in security groups](add-ad-aad-built-in-security-groups.md)
- [Limit access by location or IP addresses](/azure/active-directory/conditional-access/howto-conditional-access-policy-location)
- [Manage conditional access](../accounts/change-application-access-policies.md)
- [Require all users to use multifactor authentication (MFA)](/azure/active-directory/authentication/concept-mfa-howitworks)

### Review auditing events

Once your organization is backed by Microsoft Entra, do the following tasks to enhance security and monitor usage patterns:
- **Enable auditing:**
  - Within your Security policies, enable auditing.
  - Auditing helps track and log events related to user actions, permissions, and changes.
- **[Regularly review audit events](../audit/azure-devops-auditing.md#review-audit-log):**
  - Review the audit log periodically.
  - Look for unexpected usage patterns, especially by administrators and other users.

### Secure your network

The following functions are effective ways to enhance the security of your network when you're working with Azure DevOps.

- **IP allowlisting:**
  - Set up an [allowlist](allow-list-ip-url.md) to restrict access to specific IP addresses.
  - Only allow traffic from trusted sources, reducing the attack surface.
- **Encryption:**
  - Always use encryption for data in transit and at rest.
  - Secure communication channels using protocols like HTTPS.
- **Certificate validation:**
  - Validate certificates when establishing connections.
  - Ensure that certificates are valid and issued by trusted authorities.
- **Web application firewalls (WAFs):**
  - Implement WAFs to filter, monitor, and block malicious web-based traffic.
  - WAFs provide an additional layer of protection against common attacks.

For more information, see [Application management best practices](/azure/active-directory/manage-apps/application-management-fundamentals).

-----

## Scoped permissions

The system handles permissions at various levels—individual, collection, project, and object—and assigns them to one or more built-in groups by default. To enhance security, do the following actions:

- **Provide least privilege access:** Give users and services the minimum necessary access to perform their business functions.
- **Disable inheritance:** 
  - Whenever possible, disable inheritance. 
  - Inheritance can inadvertently grant access or permissions to unexpected users due to its allow-by-default nature. 
  - For more information, refer to the [section on permission inheritance](about-permissions.md#permission-inheritance)

For more information about permissions, see the following articles: 
- [Permissions and role lookup guide](permissions-lookup-guide.md)
- [Permissions, security groups, and service accounts reference](permissions.md)
- [Set individual permissions](/azure/devops/organizations/security/request-changes-permissions).

### Project-level permissions

- **Limit access to projects and repos:**
  - To reduce the risk of leaking sensitive information and deploying insecure code to production, limit access to projects and repositories.
  - Use either the built-in security groups or custom security groups to manage permissions. For more information, see [Grant or restrict permissions to specific tasks](restrict-access.md).
- **Disable *“Allow public projects”*:**
  - In your organization’s policy settings, disable the option to create public projects.
  - Azure DevOps Services allows you to switch project visibility from public to private (and vice versa).
  - Users who haven’t signed into your organization have read-only access to public projects.
  - Signed-in users can be granted access to private projects and make permitted changes.
- **Restrict project creation:**
  - Prevent users from creating new projects to maintain control over your environment.

### External guest access 

- **Block external guest access:** 
  - Disable the ["Allow invitations to be sent to any domain" policy](/azure/active-directory/external-identities/allow-deny-list) to prevent external guest access.
  - Consider this step if there's no business need for external guests.
- **Use a different email or UPN for your personal and business accounts:**
  - Even though it’s allowed, use distinct email addresses or user principal names (UPNs) for personal and business accounts.
  - This practice eliminates ambiguity when disambiguating between your personal and work-related accounts.
- **Group external guest users:**
  - Place all external guest users in a single Microsoft Entra group.
  - Manage permissions for this group appropriately.
  - Remove direct assignments to ensure group rules apply to these users. For more information, see [Add a group rule to assign access levels](../accounts/assign-access-levels-by-group-membership.md).
  - Regularly reevaluate rules on the Group rules tab of the Users page. Consider any group membership changes in Microsoft Entra ID that might impact your organization. Microsoft Entra ID can take up to 24 hours to update dynamic group membership. Rules are automatically reevaluated every 24 hours and whenever a group rule changes.

For more information, see [B2B guests in the Microsoft Entra ID](/azure/active-directory/external-identities/delegate-invitations).

-----

## Manage security groups

### Security and user groups 

The following table shows recommendations for assigning permissions to security groups and users groups.

|**Do** :::image type="icon" source="../../media/icons/checkmark.png" border="false":::|**Don't** :::image type="icon" source="../../media/icons/delete-icon.png" border="false"::: |
|---------|---------|
|Use Microsoft Entra ID, Active Directory, or Windows security groups when you're managing lots of users.    | Don’t change the default permissions for the *Project Valid Users* group. This group can access and view project information.        |
|When you're adding teams, consider what permissions you want to assign to team members who need to create and modify area paths, iteration paths, and queries.   | Don't add users to multiple security groups that contain different permission levels. In certain cases, a *Deny* permission level may override an *Allow* permission level.        |
|When you're adding many teams, consider creating a *Team Administrators* custom group where you allocate a subset of the permissions available to *Project Administrators*.     | Don't change the default assignments made to the *Project Valid Users* groups. If you remove or set *View instance-level information* to *Deny* for one of the *Project Valid Users* groups, no users in the group can access whatever project, collection, or deployment you set the permission on.        |
|Consider granting the work item query folders *Contribute* permission to users or groups who require the ability to create and share work item queries for the project.    | Don't assign permissions that are noted as *Assign only to service accounts* to user accounts.        |
|Keep groups as small as possible. Access should be restricted, and the groups should be frequently audited.    |         |
|Take advantage of built-in roles and default to Contributor for developers. Admins get assigned to the Project Administrator security group for elevated permissions, allowing them to configure security permissions.|     |

For more information, see [Valid user groups](about-permissions.md#valid-user-groups).

### Just-in-time access for admin groups 

If you have [Project Collection Administrator](../../user-guide/manage-organization-collection.md) and [Project Administrator](../../user-guide/project-admin-tutorial.md) access, you can modify the configuration of your organization or project. To enhance security for these built-in administrator groups, consider implementing just-in-time access using a Microsoft Entra [Privileged Identity Management (PIM) group](/azure/active-directory/privileged-identity-management/concept-pim-for-groups). This approach allows you to grant elevated permissions only when needed, reducing the risk associated with permanent access.

#### Configure access 

1. [Create a role-assignable group in Microsoft Entra ID](/azure/active-directory/roles/groups-create-eligible?tabs=ms-powershell&branch=main).
2. [Add your Microsoft Entra group to the Azure DevOps group](/azure/devops/organizations/security/add-ad-aad-built-in-security-groups?view=azure-devops&branch=main&tabs=preview-page&preserve-view=true). 

> [!NOTE]
>  When you configure just-in-time access using a Microsoft Entra Privileged Identity Management (PIM) group, ensure that any user with elevated access also retains standard access to the organization. This way, they can view the necessary pages and refresh their permissions as needed.

#### Use access 

1. [Activate your access](/azure/active-directory/privileged-identity-management/groups-activate-roles). 
2. [Refresh your permissions](request-changes-permissions.md#refresh-or-re-evaluate-your-permissions) in Azure DevOps. 
3. Take the action requiring administrator access. 

> [!NOTE]
> Users have elevated access in Azure DevOps for up to 1 hour after their PIM group access gets deactivated.

## Scope service accounts

- **Understand [service accounts](permissions.md#service-accounts)**
- **Create single-purpose service accounts:**
  - Each service should have its dedicated account to minimize risk.
  - Avoid using regular user accounts as service accounts.
- **Follow naming and documentation conventions:**
  - Use clear, descriptive names for service accounts.
  - Document their purpose and associated services.
- **Identify and disable unused service accounts:**
  - Regularly review and identify accounts no longer in use.
  - Disable unused accounts before considering deletion.
- **Restrict privileges:** 
  - Limit service account privileges to the minimum necessary.
  - Avoid interactive sign-in rights for service accounts.
- **Use separate identities for report readers:**
  - If you're using domain accounts for service accounts, use a different identity for report readers.
  - Isolate permissions to prevent unnecessary access. For more information, see [Service accounts and dependencies](/azure/devops/server/admin/service-accounts-dependencies?view=azure-devops&preserve-view=true).
- **Use local accounts for workgroup installations:** 
  - When installing components in a workgroup, use local accounts for user accounts.
  - Avoid domain accounts in this scenario. For more information, see [Service account requirements](/azure/devops/server/account-requirements?view=azure-devops-2020&viewFallbackFrom=azure-devops&preserve-view=true).
- **Leverage [service connections](#scope-service-connections):**
  -  Use service connections whenever possible. 
  -  They provide a secure way to connect to services without passing secret variables directly to builds.
  -  Restrict connections to specific use cases.
- **Monitor service account activity:**
  - Implement auditing and create [audit streams](../audit/auditing-streaming.md).

For more information, see [Common service connection types](../../pipelines/library/service-endpoints.md#use-a-service-connection).

## Scope service connections

- **Scope [Azure Resource Manager](/azure/azure-resource-manager/management/overview) service connections:**
  - To limit access, scope your service connections to specific resources and groups. Avoid granting broad contributor rights across the entire Azure subscription.
  - Use workload identity federation for authentication. This allows secret-free service connections in Azure Pipelines.
- **[Use workload identity federation](../../pipelines/library/connect-to-azure.md#create-an-azure-resource-manager-service-connection-that-uses-workload-identity-federation):**
  - Workload identity federation uses OpenID Connect (OIDC) to authenticate with Azure resources without using secrets.
  - You can create workload identity federation automatically or manually. Consider this approach if:
    - You have the Owner role for your Azure subscription.
    - You’re not connecting to Azure Stack or Azure US Government environments.
    - Any Marketplace extensions tasks you use support workload identity federation1.
- **Resource group scoping:**
  - Ensure that the resource group contains only the Virtual Machines (VMs) or resources needed for the build process.
- **Avoid Azure classic service connections:**
  - Classic service connections lack scoping options. Opt for modern Azure Resource Manager service connections instead.
- **Use purpose-specific team service accounts:**
  - Authenticate service connections using purpose-specific team service accounts to maintain security and control.

For more information, see [Common service connection types](../../pipelines/library/service-endpoints.md).

-----

## Choose the right authentication method

Select your [authentication methods](../../integrate/get-started/authentication/authentication-guidance.md) from the following sources:
- [Consider service principals and managed identities](#consider-service-principals)
- [Use personal access tokens (PATs) sparingly](#use-pats-sparingly)

### Consider service principals

Explore alternatives like [service principals and managed identities](../../integrate/get-started/authentication/service-principal-managed-identity.md):
 
- **Service principals:**
  - Represent security objects within a Microsoft Entra application.
  - Define what an application can do in a given tenant.
  - Set up during application registration in the Azure portal.
  - Configured to access Azure resources, including Azure DevOps.
  - Useful for apps needing specific access and control.
- **Managed identities:**
  - Similar to an application’s service principal.
  - Provide identities for Azure resources.
  - Allow services supporting Microsoft Entra authentication to share credentials.
  - Azure handles credential management and rotation automatically.
  - Ideal when you want seamless login details management.

### Use PATs sparingly

- **Scope PATs to specific roles:**
  - Assign PATs only the necessary permissions required for specific tasks. Avoid granting global access to multiple organizations or repositories.
  - Scoping PATs ensures that they have the minimum privileges needed, reducing the risk of accidental misuse.
- **Avoid *write* or *manage* permissions on builds and releases:**
  - PATs should not have write or manage permissions on builds, releases, or other critical resources.
  - Restricting these permissions helps prevent unintended actions that could impact your pipelines or deployments.
- **Set expiration dates and keep PATs secret:**
  - Always set an expiration date for PATs. Regularly review and renew them as needed.
  - Treat PATs as critical as passwords. Keep them confidential and avoid sharing them publicly or hardcoding them in your application code.
- **Avoid hardcoding PATs in application code:**
  - While it may seem convenient, avoid embedding PATs directly in your code.
  - Instead, use secure configuration files or environment variables to store and retrieve PATs dynamically.
- **Regularly audit and revoke unused PATs:**
  - Administrators should periodically review all PATs using the [REST APIs](/rest/api/azure/devops/tokenadmin/personal-access-tokens/list).
  - Revoke any PATs that are no longer needed or don’t meet the recommended criteria.

For more information, check out the following articles:
- [Manage PATs with policies - for administrators](../accounts/manage-pats-with-policies-for-administrators.md)
- [Use PATs](../accounts/use-personal-access-tokens-to-authenticate.md) 

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
- [Secure Azure Pipelines overview](../../pipelines/security/overview.md).

### Policies

- **Require reviewers outside the original requester:**
  - Having at least one reviewer outside the original requester ensures a more thorough review process.
  - The approver shares co-ownership of the changes and should be held equally accountable for any potential impact.
- **Require CI build to pass:**
  - Requiring the Continuous Integration (CI) build to pass before merging a PR establishes a baseline for code quality.
  - CI checks include code linting, unit tests, and security scans (for example, virus and credential checks).
- **Disallow self-approval by the original requester:**
  - Prevent the original PR requester from approving their own changes.
  - This action ensures an unbiased review process and avoids potential conflicts of interest.
- **Disallow PR completion even with “wait” or “reject” votes:**
  - Even if some reviewers vote to wait or reject, prevent PR completion.
  - This action encourages addressing all feedback before merging.
- **Reset code reviewer votes on pushed changes:**
  - When recent changes are pushed to the PR, reset reviewer votes.
  - This action ensures that reviewers re-evaluate the updated code.
- **Lock down release pipelines to specific production branches:**
  - Limit release pipelines to specific branches (usually production or main).
  - Avoid accidental deployments from other branches.
- **Enforce settable variables at queue time:**
  - Enable the “Enforce settable at queue time” option for pipeline variables.
  - This action prevents users from overriding variable values during pipeline execution.
- **Disallow variable overrides in the editor:**
  - For variables set in the pipeline editor, disallow user overrides. 
  - This action maintains consistency and prevents unintended changes.

### Agents 

- **Grant permissions sparingly:** 
  - Limit permissions to the smallest necessary set of accounts.
  - Avoid overly permissive access, reducing the attack surface.
- **Restrictive firewalls for usable agents:**
  - Configure firewalls to be as restrictive as possible while still allowing agents to function.
  - Strike a balance between security and usability.
- **Regularly update agent pools:**
  - Keep your agent fleet up-to-date by regularly updating agents.
  - This action ensures that vulnerable code isn’t running, reducing the risk of exploitation.
- **Separate agent pool for production artifacts:**
  - Use a distinct agent pool for build artifacts destined for production.
  - Isolating production artifacts helps prevent accidental deployments from non-production branches.
- **Segment sensitive pools:**
  - Create separate pools for sensitive and nonsensitive workloads.
  - Only allow credentials in build definitions associated with the appropriate pool.

### Definitions 

- **Use YAML for pipeline definitions:**
  - YAML (Yet Another Markup Language) is the recommended approach for defining pipelines.
  - It offers traceability for changes, making it easier to track modifications over time.
  - Additionally, YAML pipelines can adhere to approval guidelines and version control practices.
- **Restrict *edit* access to pipeline definitions:**
  - Limit access to editing pipeline definitions to the minimum necessary accounts.
  - By doing so, you reduce the risk of accidental or unauthorized changes.

### Input 

- **Include sanity checks for variables in build scripts:** 
  - Implement sanity checks within your build scripts to mitigate potential command injection attacks through settable variables.
  - These checks can validate input values and prevent unintended or malicious commands.
- **Limit the number of “settable at release time” build variables:**
  - Set as few build variables as possible to be “settable at release time.”
  - Minimizing the number of such variables reduces the attack surface and simplifies configuration management.

### Tasks 

- **Avoid remotely fetched resources:**
  - Whenever possible, avoid fetching resources from external URLs during your build process.
  - If remote resources are necessary, use versioning and hash checking to ensure integrity.
- **Avoid logging secrets:**
  - Never log sensitive information, such as secrets or credentials, in your build logs.
  - Logging secrets can expose them unintentionally and compromise security.
- **Use Azure Key Vault for secrets:**
  - Instead of storing secrets directly in pipeline variables, use Azure Key Vault.
  - Key Vault provides a secure way to manage and retrieve secrets centrally.
- **Restrict running builds against arbitrary branches or tags:**
  - For security-critical pipelines, limit users from running builds against any branch or tag.
  - Define specific authorized branches or tags to prevent accidental or unauthorized executions.
- **Disable inheritance for pipeline permissions:**
  - Inherited permissions can be overly broad and may not accurately reflect your needs.
  - Disable inheritance and set permissions explicitly to align with your security requirements.
- **Limit job authorization scopes:**
  - Always restrict job authorization scopes to the minimum necessary.
  - Fine-tune permissions based on the specific tasks performed by each job.

### Repositories and branches

- **Require a minimum number of reviewers:**
  - Enable the “Require a minimum number of reviewers” policy to ensure that every pull request receives reviews from at least two approvers.
  - This promotes thorough code review and accountability.
- **Configure repository-specific security policies:**
  - Instead of project-wide policies, tailor security policies to each repository or branch.
  - Customized policies reduce risk, enforce change management standards, and enhance code quality.
- **Isolate production secrets in a separate key vault:**
  - Store production secrets separately in an Azure Key Vault.
  - Limit access to a need-to-know basis to maintain separation from non-production builds.
- **Segregate test environments from production:**
  - Avoid mixing test environments with production.
  - Ensure that credentials and secrets are not used in non-production contexts.
- **Disable forking:**
  - Disabling forking helps manage security.
  - Forks can proliferate, making it challenging to track security across all copies.
- **[Avoid providing secrets to fork builds](../../pipelines/security/misc.md#dont-provide-secrets-to-fork-builds):**
  - Refrain from sharing secrets with forked builds.
  - Secrets should remain confidential and not be exposed to forks.
- **[Consider manually triggering fork builds](../../pipelines/security/misc.md#consider-manually-triggering-fork-builds):**
  - Manually trigger builds for forks rather than allowing automatic triggers.
  - This provides better control over security checks.
- **[Use Microsoft-hosted agents for fork builds](../../pipelines/security/misc.md#use-microsoft-hosted-agents-for-fork-builds):**
  - Leverage Microsoft-hosted agents for forked builds.
  - These agents are maintained and secure.
- **Scan production build definitions in Git repositories:**
  - Regularly check production build definitions stored in your project’s Git repository.
  - Scan for any credentials or sensitive information.
- **Configure branch control checks for production context:**
  - Set up branch control checks to restrict the use of sensitive connections (e.g., prod-connection) to pipelines running in the context of the production branch.
  - This ensures proper authorization and prevents accidental misuse.

For more information, see [Other security considerations](../../pipelines/security/misc.md).

## Secure Azure Repos

- [Improve code quality with branch policies](../../repos/git/branch-policies.md)
- [Set branch permissions](../../repos/git/branch-permissions.md)

## Secure Azure Test Plans

- [Set permissions and access for testing](set-permissions-access-test.md)
- [Supported scenarios and access requirements](../../test/overview.md#supported-scenarios-and-access-requirements)

## Secure GitHub Integrations

- **Use OAuth flow instead of PATs:**
  - Disable PAT-based authentication for GitHub service connections.
  - Opt for OAuth flow, which provides better security and integration.
- **Avoid admin or owner identities:**
  - Never authenticate GitHub service connections using an identity that's an administrator or owner of any repositories.
  - Limit permissions to the necessary level.
- **Avoid full-scope GitHub PATs:**
  - Refrain from using a full-scope GitHub PAT to authenticate service connections.
  - Use tokens with the minimum required permissions.
- **Avoid personal GitHub accounts as service connections:**
  - Don’t use personal GitHub accounts as service connections in Azure DevOps.
  - Instead, create dedicated service accounts or use organization-level accounts.
