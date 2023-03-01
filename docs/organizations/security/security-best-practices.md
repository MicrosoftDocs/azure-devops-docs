---
title: Security best practices
titleSuffix: Azure DevOps
description: Best practices for managing security and keeping your data secure in Azure DevOps.
ms.subservice: azure-devops-security
ms.topic: best-practice
ms.author: chcomley
author: chcomley
monikerRange: '<= azure-devops' 
ms.date: 02/24/2023  
---

# Security best practices

[!INCLUDE [version-lt-eq-azure-devops](../../includes/version-lt-eq-azure-devops.md)]

When you're working with information and data, particularly in a cloud-based solution like Azure DevOps Services, prioritizing security should always be your primary concern. While Microsoft maintains the security of the underlying cloud infrastructure, it's your responsibility to configure security in Azure DevOps.

Although it's not mandatory, incorporating best practices while using Azure DevOps can enhance your experience and make it more secure. We've compiled the following best practices that aim to keep your Azure DevOps environment secure:

- Securing your [Azure DevOps environment](#securing-azure-devops-environment)
- Restrict access through [scoped permissions](#scoped-permissions) at the organization/collection, project, or object level
- Maintain tight control of administrators and [security groups](#manage-security-groups)
- Scope [service accounts](#scope-service-accounts) and [service connections](#scope-service-connections)
- Learn best practices for [authenticating when integrating with Azure DevOps](#choose-the-right-authentication-method)
- Secure specific product areas and associated services, like [Azure Artifacts](#secure-azure-artifacts), [Azure Boards](#secure-azure-boards), [Azure Pipelines](#secure-azure-pipelines), [Azure Repos](#secure-azure-repos), [Azure Test Plans](#secure-azure-test-plans), and [Github integrations](#secure-github-integrations).

## Securing Azure DevOps environment

### Removing users

- If your organization uses MSA accounts, then remove inactive users directly from the organization, as you have no other way to prevent access. When you do so, you can't create a query for work items assigned to the removed user account. For more information, see [Delete users from Azure DevOps](../accounts/delete-organization-users.md).
- If your organization is backed by Azure AD, then you can disable or delete the Azure AD user account while leaving their Azure DevOps account active. In this way, you can continue to query their work item history using their account name.
- [Revoke user PATs](../accounts/admin-revoke-user-pats.md).
- Revoke any special permissions that may have been granted to individual user accounts.
- Reassign work from users you’re removing to current team members.

### Use Azure AD

Integrate Azure DevOps with Azure AD to have a single plane for identity. Consistency and a single authoritative source increases clarity and reduces security risks from human errors and configuration complexity. The key to end to end governance is to have multiple role assignments (with different role definitions and different resource scopes to the same Azure AD groups). Without Azure AD, you're solely responsible for controlling organization access. 

Using Azure AD also allows you to access additional security features, like multi-factor authentication or other conditional access policies.

For more information, see the following articles:
- [About accessing your organization with Azure AD](../accounts/access-with-azure-ad.md)
- [Add AD/Azure AD users or groups to a built-in security groups](add-ad-aad-built-in-security-groups.md)
- [Limit access by location or IP addresses](/azure/active-directory/conditional-access/howto-conditional-access-policy-location)
- [Manage conditional access](../accounts/change-application-access-policies.md)
- [Require all users to use multi-factor authentication (MFA)](/azure/active-directory/authentication/concept-mfa-howitworks)

### Review auditing events

Once you have an Azure AD backed organization, you can turn on Auditing in your Security policies. Periodically [review audit events](../audit/azure-devops-auditing.md#review-audit-log) to monitor and react to unexpected usage patterns by administrators and other users. 

### Secure your network

A few ways to do so might include:
- Set up an [allowlist](allow-list-ip-url.md) to restrict specific IPs.
- Always use encryption.
- Validate certificates.
- Implement Web application firewalls (WAFs), so they can filter, monitor, and block any malicious web-based traffic to and from Azure DevOps.
- For more information, see this guidance on [application management best practices](/azure/active-directory/manage-apps/application-management-fundamentals)

-----

## Scoped permissions

The system manages permissions at different levels - individual, collection, project, and object - and assigns them to one or more built-in groups by default.

- Only give users and services the minimum amount of access needed to perform their business functions.
- Disable inheritance where possible. Due to the allow-by-default nature of inheritance, unexpected users can get access or permissions. For more information, read about [inheritance](about-permissions.md#permission-inheritance-and-security-groups). 
- Learn more about permissions here:
  - [Permissions and role lookup guide](permissions-lookup-guide.md)
  - [Permissions, security groups, and service accounts reference](permissions.md)
  - [Set individual permissions](/azure/devops/organizations/security/request-changes-permissions).

### Project-level permissions

- Limit access to projects and repos to reduce the risk of leaking sensitive information and deploying insecure code to production.
- Use either the built-in security groups or custom security groups to manage permissions. For more information, see [Grant or restrict permissions to select tasks](restrict-access.md) and [project-scoped user groups](about-permissions.md#project-scoped-user-group).
- Enable the *Limit user visibility for projects* preview feature for the organization, which restricts access to only those projects that you add users to.
- Add users to the *Project-scoped users* group, so they can only see and select users and groups in the project that they're connected to from a people picker.
- Disable *"Allow public projects"* in your organization's policy settings to prevent every organization user from creating a public project. Azure DevOps Services allows you to change the visibility of your projects from public to private, and vice-versa. If users haven't signed into your organization, they have read-only access to your public projects. If users have signed in, they can be granted access to private projects and make any permitted changes to them.
- Don’t allow users to create new projects. Use EasyStart “Governed Projects,” which require approval once they're submitted.

### External guest access 

- Block external guest access entirely by disabling the ["Allow invitations to be sent to any domain" policy](/azure/active-directory/external-identities/allow-deny-list). It's a good idea to do so if there's no business need for it.
- Use a different email or user principal name (UPN) for your personal and business accounts, even though it's allowed. This action eliminates the challenge of disambiguating between your business and personal accounts when the email/UPN is the same.  
- Put all the external guest users in a single Azure AD group and manage the permissions of that group appropriately. You can easily manage and audit this way.
  - Remove direct assignments so the group rules apply to those users. For more information, see [Add a group rule to assign access levels](../accounts/assign-access-levels-by-group-membership.md).
  - Reevaluate rules regularly on the Group rules tab of the Users page. Clarify whether any group membership changes in Azure AD might affect your organization. Azure AD can take up to 24 hours to update dynamic group membership. Every 24 hours and anytime a group rule changes, rules get automatically reevaluated in the system.
- For more information, see [B2B guests in the Azure AD](/azure/active-directory/external-identities/delegate-invitations). 


-----

## Manage security groups

### Security and user groups 

See the following recommendations for assigning permissions to security groups and users groups.

|**Do** :::image type="icon" source="../../media/icons/checkmark.png" border="false":::|**Don't** :::image type="icon" source="../../media/icons/delete-icon.png" border="false"::: |
|---------|---------|
|Use Azure Active Directory, Active Directory, or Windows security groups when you're managing lots of users.    | Don’t change the default permissions for the *Project Valid Users* group. This group can access and view project information.        |
|When you're adding teams, consider what permissions you want to assign to team leads, scrum masters, and other team members who need to create and modify area paths, iteration paths, and queries.   | Don't add users to multiple security groups that contain different permission levels. In certain cases, a *Deny* permission level may override an *Allow* permission level.        |
|When you're adding many teams, consider creating a *Team Administrators* custom group where you allocate a subset of the permissions available to *Project Administrators*.     | Don't change the default assignments made to the *Project Valid Users* groups. If you remove or set the *View instance-level information* permission to *Deny* for one of the *Project Valid Users* groups, no users in the group can access the project, collection, or deployment, depending on the group you set.        |
|Consider granting the work item query folders *Contribute* permission to users or groups who require the ability to create and share work item queries for the project.    | Don't assign permissions that are noted as *Assign only to service accounts* to user accounts.        |
|Keep groups as small as possible. Access should be restricted, and the groups should be frequently audited.    |         |
|Take advantage of built-in roles and default to Contributor for developers. Admins get assigned to the Project Administrator security group for elevated permissions, allowing them to configure security permissions.|     |

For more information, see [Valid user groups](about-permissions.md#valid-user-groups)  

-----

## Scope service accounts

- Ensure [service accounts](permissions.md#service-accounts) have zero interactive sign-in rights.  
- Restrict service account privileges to the bare minimum necessary.
- Use a different identity for the report reader account, if you use domain accounts for your service accounts. For more information, see [Service accounts and dependencies](/azure/devops/server/admin/service-accounts-dependencies?view=azure-devops&preserve-view=true).
- Use local accounts for user accounts, if you're installing a component in a workgroup. For more information, see [Service account requirements](/azure/devops/server/account-requirements?view=azure-devops-2020&viewFallbackFrom=azure-devops&preserve-view=true).
- Use [service connections](#scope-service-connections) when possible. Service connections provide a secure mechanism to connect to assorted services without the need to pass in secret variables to the build directly.   - Restrict these connections to the specific place they should be used and nothing more.
- Monitor service account activity and create [audit streaming](../audit/auditing-streaming.md). Auditing allows you to detect and react to suspicious sign-ins and activity. 
- For more information, see [Common service connection types](../../pipelines/library/service-endpoints.md#use-a-service-connection).

## Scope service connections

- Scope [Azure Resource Manager](/azure/azure-resource-manager/management/overview), and [other service connections](../../pipelines/library/service-endpoints.md), only to the resources and groups to which they need access. Service connections shouldn't have broad contributor rights on the entire Azure subscription.  
- Don’t give users generic or broad contributor rights on the Azure subscription. 
- Don’t use Azure Classic service connections, as there’s no way to scope the permissions. 
- Make sure the resource group only contains Virtual Machines (VMs) or resources that the build needs access to.
- Use a purpose-specific team service account to authenticate a service connection. 
- For more information, see [Common service connection types](../../pipelines/library/service-endpoints.md).

-----


## Choose the right authentication method

Select your [authentication methods](../../integrate/get-started/authentication/authentication-guidance.md) from the following sources:
- [Consider service principals and managed identities](#consider-service-principals)
- [Use personal access tokens (PATs) seldomly](#use-pats-sparingly)

### Consider service principals


Explore alternatives like [service principals and managed identities](../../integrate/get-started/authentication/service-principal-managed-identity.md) that enable you to use Azure AD tokens to access Azure DevOps resources. Such tokens carry less risk when leaked compared to PATs and contain benefits like easy credential management.

### Use PATs sparingly

If possible, we recommended to always use identity services for authentication instead of cryptographic keys since managing keys securely with application code is challenging and can lead to mistakes like accidentally publishing sensitive access keys to public code repositories like GitHub. However, if you must use personal access tokens (PATs), consider the following guidelines:

- PATs should always be scoped to specific roles.
- PATs shouldn't provide global access to multiple organizations.
- PATs shouldn't grant write or manage permissions on builds or releases.
- PATs should have an expiration date and be kept secret since they're as critical as passwords.
- PATs should never be hardcoded in the application code, even if it's tempting to do so to simplify the code.
- Administrators should regularly audit all PATs using the [REST APIs](/rest/api/azure/devops/tokenadmin/personal-access-tokens/list) and revoke any that don't meet the above criteria.

- Keep your PATs secret. Your tokens are as critical as passwords.
- Store your tokens in a safe place.
- Don’t hard code tokens in applications. It can be tempting to simplify code to obtain a token for a long period of time and store it in your application, but don’t do that.
- Give tokens an expiration date.
- For more information, check out the following articles:
  - [Manage PATs with policies - for administrators](../accounts/manage-pats-with-policies-for-administrators.md)
  - [Use PATs](../accounts/use-personal-access-tokens-to-authenticate.md) 

-----


## Secure Azure Artifacts 

- Make sure you understand the difference between feeds, project, and project collection administrators. For more information, see [Configure Azure Artifacts settings](../../artifacts/feeds/feed-permissions.md#configure-azure-artifacts-settings).
- For more information, see [Set feed permissions](../../artifacts/feeds/feed-permissions.md).

## Secure Azure Boards 

- Review [Configure and customize Azure Boards](../../boards/configure-customize.md) before you customize a process.
- See the following articles:
  - [Set work tracking and plan permissions](set-permissions-access-work-tracking.md)
  - [Default permissions and access to Azure Boards](../../boards/get-started/permissions-access-boards.md)
  - [Set query permissions](../../boards/queries/set-query-permissions.md)

## Secure Azure Pipelines

- [Use extends templates](../../pipelines/security/templates.md#use-extends-templates).
- For more information about how to set permission levels for pipelines, see [Set pipeline permissions](../../pipelines/policies/set-permissions.md). 

### Policies

- Require at least one reviewer outside of the original requester. The approver shares co-ownership of the changes and should be held equally accountable for any potential impact.
- Require CI build to pass, which is useful for establishing baseline code quality, such as code linting, unit tests, and even security checks like virus and credential scans.
- Ensure that the original pull requester can’t approve the change.  
- Disallow completion of a PR (Pull Request), even if some reviewers vote to wait or reject.
- Reset code reviewer votes when recent changes get pushed. 
- Lock down release pipelines by running them only on specific production branches. 
- Enable “Enforce settable at queue time for variables” in your organization’s pipeline settings. 
- Don’t allow “Let users override this value when running this pipeline,” for variables set in the editor. 

### Agents 

- Grant permissions to the smallest possible number of accounts. 
- Have the most restrictive firewall that leaves your agents usable. 
- Update pools regularly to ensure the build fleet isn’t running vulnerable code that can be exploited by a malicious actor. 
- Use a separate agent pool for build artifacts that get shipped or deployed to production. 
- Segment “sensitive” pool from non-sensitive pools, and only allow the use of credentials in build definitions that are locked to that pool. 

### Definitions 

- Manage pipeline definitions with YAML (Yet Another Markup Language). YAML is the preferred method for managing pipeline definitions, as it provides traceability for changes and can follow approval guidelines. 
- Secure the pipeline definition *Edit* access to the minimum number of accounts. 

### Input 

- Include sanity checks for variables in build scripts. A sanity check can mitigate a command injection attack through the settable variables. 
- Set as few build variables as possible to “Settable at release time.” 

### Tasks 

- Avoid remotely fetched resources, but, if necessary, use versioning and hash checking. 
- Don’t log secrets. 
- Don’t store secrets in pipeline variables, use Azure KeyVault. Regularly scan your build pipelines to ensure secrets aren’t being stored in build pipeline variables. 
- Don’t let users run builds against arbitrary branches or tags on security-critical pipelines. 
- Disable inheritance on the pipeline, as inherited permissions are broad and don’t accurately reflect your needs for permissions. 
- Limit job authorization scopes in all cases. 

### Repositories and branches

- Set the “Require a minimum number of reviewers,” policy to *on*, so that every pull request gets reviewed by at least two approvers.  
- Configure security policies specific to each repository or branch, instead of project wide. Security policies reduce risk, enforce change management standards, and improve your team’s quality of code.  
- Store production secrets in a separate KeyVault and ensure that access is only granted on a need-to-know basis to keep non-production builds separate.  
- Don’t mix test environments with production, including use of credentials.  
- Disable forking. The more forks there are, the harder it is to keep track of each fork’s security. Also, a user can easily fork a copy of a repository to their own private account.
- [Don't provide secrets to fork builds](../../pipelines/security/repos.md#dont-provide-secrets-to-fork-builds).
- [Consider manually triggering fork builds](../../pipelines/security/repos.md#consider-manually-triggering-fork-builds).
- [Use Microsoft-hosted agents for fork builds](../../pipelines/security/repos.md#use-microsoft-hosted-agents-for-fork-builds).
- For Git, check your production build definitions in the project’s git repository, so they can be scanned for credentials.
- Configure a branch control check so that only pipelines running in the context of the `production` branch may use the `prod-connection`.
- For more information, see [Other security considerations](../../pipelines/security/misc.md).

## Secure Azure Repos

- [Improve code quality with branch policies](../../repos/git/branch-policies.md). For more information about branch permissions and policies, see [Set branch permissions](../../repos/git/branch-permissions.md).

## Secure Azure Test Plans

- [Set permissions and access for testing](set-permissions-access-test.md)
- [Supported scenarios and access requirements](../../test/overview.md#supported-scenarios-and-access-requirements)

## Secure GitHub Integrations

- Disable Personal Access Token (PAT)-based authentication, so the OAuth flow gets used with the GitHub service connection. 
- Never authenticate GitHub service connections as an identity that's an administrator or owner of any repositories. [Check your policies](../../repos/git/configure-repos-work-tracking.md). 
- Never use a full-scope GitHub PAT (Personal Access Token) to authenticate GitHub service connections. 
- Don't use a personal GitHub account as a service connection with Azure DevOps. 
