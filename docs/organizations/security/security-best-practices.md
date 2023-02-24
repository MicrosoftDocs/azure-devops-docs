---
title: Security best practices
titleSuffix: Azure DevOps
description: Best practices for managing security, keeping your information and data secure in Azure DevOps.
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

- Properly scope [service accounts](#scope-service-accounts), [service connections](#scope-service-connections), and [permissions](#scope-permissions)
- Maintain tight control of administrators and service account groups
- Manage security with security groups, policies, and settings at the organization/collection, project, or object level
- Secure services, like [Azure Artifacts](#secure-azure-artifacts), [Azure Boards](#secure-azure-boards), [Azure Pipelines](#secure-azure-pipelines), [Azure Repos](#secure-azure-repos), [Azure Test Plans](#secure-azure-test-plans), and [Azure DevOps in general](#secure-azure-devops---general).

## Scope service accounts

- Ensure [service accounts](permissions.md#service-accounts) have zero interactive sign-in rights.  
- Restrict service account privileges to the bare minimum necessary.
- Use a different identity for the report reader account, if you use domain accounts for your service accounts. For more information, see [Service accounts and dependencies](/azure/devops/server/admin/service-accounts-dependencies?view=azure-devops&preserve-view=true).
- Use local accounts for user accounts, if you're installing a component in a workgroup. For more information, see [Service account requirements](/azure/devops/server/account-requirements?view=azure-devops-2020&viewFallbackFrom=azure-devops&preserve-view=true).
- Use [service connections](#scope-service-connections) when possible. Service connections provide a secure mechanism to connect to assorted services without the need to pass in secret variables to the build directly.   - Restrict these connections to the specific place they should be used and nothing more.
- Monitor service account activity and create [audit streaming](../audit/auditing-streaming.md). Auditing allows you to detect and react to suspicious sign-ins and activity. 

For more information, see [Common service connection types](../../pipelines/library/service-endpoints.md#use-a-service-connection).

## Scope service connections

- Scope [Azure Resource Manager](/azure/azure-resource-manager/management/overview), and [other service connections](../../pipelines/library/service-endpoints.md), only to the resources and groups to which they need access. Service connections shouldn't have broad contributor rights on the entire Azure subscription.  
- Don’t give users generic or broad contributor rights on the Azure subscription. 
- Don’t use Azure Classic service connections, as there’s no way to scope the permissions. 
- Make sure the resource group only contains Virtual Machines (VMs) or resources that the build needs access to.
- Use a purpose-specific team service account to authenticate a service connection. 

For more information, see [Common service connection types](../../pipelines/library/service-endpoints.md).

### GitHub 

- Disable Personal Access Token (PAT)-based authentication, so the OAuth flow gets used with the GitHub service connection. 
- Never authenticate GitHub service connections as an identity that's an administrator or owner of any repositories. [Check your policies](../../repos/git/configure-repos-work-tracking.md). 
- Never use a full-scope GitHub PAT (Personal Access Token) to authenticate GitHub service connections. 
- Don't use a personal GitHub account as a service connection with Azure DevOps. 

## Scope permissions

The system manages permissions at different levels - individual, external, server, collection, project, object, and  - and assigns them to one or more built-in groups by default.

### Individual permissions

For more information, see [Set individual permissions](/azure/devops/organizations/security/request-changes-permissions).

### External guest access 

- Block external guest access entirely by disabling the ["Allow invitations to be sent to any domain" policy](/azure/active-directory/external-identities/allow-deny-list). It's a good idea to do so if there's no business need for it.
- Use a different email or user principal name (UPN) for your personal and business accounts, even though it's allowed. This action eliminates the challenge of disambiguating between your business and personal accounts when the email/UPN is the same.  
- Put all the external guest users in a single Azure AD group and manage the permissions of that group appropriately. You can easily manage and audit this way.
- Remove direct assignments so the group rules apply to those users. For more information, see [Add a group rule to assign access levels](../accounts/assign-access-levels-by-group-membership.md).

[!INCLUDE [note-group-rules](includes/note-group-rules.md)]

For more information, see [B2B guests in the Azure AD](/azure/active-directory/external-identities/delegate-invitations). 
::: moniker range="< azure-devops"

## Manage security groups, policies, and settings

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

### Server-level groups

See the following table of built-in security groups, which users to add, and best practice tips.

---
:::row:::
   :::column span="1":::
      **Built-in security group** 
   :::column-end:::
   :::column span="1":::
      **Add these users**
   :::column-end:::
   :::column span="1":::
     **Best practice tips**
   :::column-end:::
:::row-end:::
---
:::row:::
   :::column span="1":::
      Team Foundation Administrators
   :::column-end:::
   :::column span="1":::
      People who need to perform all server-level operations.
   :::column-end:::
   :::column span="1":::
      This group should be restricted to the smallest possible number of users who need total administrative control over server-level operations. If your deployment uses SharePoint or Reporting, consider adding the members of this group to the Farm Administrators and Site Collection Administrators groups in SharePoint and the Team Foundation. 
   :::column-end:::
:::row-end:::
---
:::row:::
   :::column span="1":::
      Team Foundation Valid users
   :::column-end:::
   :::column span="1":::
      People who need to view server instance-level information.
   :::column-end:::
   :::column span="1":::
      This group contains all users known to exist in the server instance. You can't modify the membership of this group.
   :::column-end:::
:::row-end:::
---
::: moniker-end

### Project-level permissions

- Limit access to projects and repos to reduce the risk of leaking sensitive information and deploying insecure code to production.
- Use either the built-in security groups or custom security groups to manage permissions. For more information, see [Grant or restrict permissions to select tasks](restrict-access.md).

:::row:::
   :::column span="1":::
      **Built-in security group** 
   :::column-end:::
   :::column span="1":::
      **Add these users**
   :::column-end:::
   :::column span="1":::
     **Best practices**
   :::column-end:::
:::row-end:::
---
:::row:::
   :::column span="1":::
      Project Collection Administrators
   :::column-end:::
   :::column span="1":::
      People who need total administrative control over the collection. 
   :::column-end:::
   :::column span="1":::
      This group should be restricted to the smallest possible number of users who need total administrative control over the collection. For Azure DevOps, assign to administrators who customize work tracking.
      ::: moniker range="< azure-devops"
      If your deployment uses Reporting Services, consider adding the members of this group to the Team Foundation Content Managers groups in Reporting Services
      ::: moniker-end
   :::column-end:::
:::row-end:::
   ---
:::row:::
   :::column span="1":::
      Project Collection Build Administrators
   :::column-end:::
   :::column span="1":::
      People who need to administer build resources and permissions for the collection.
   :::column-end:::
   :::column span="1":::
      Limit this group to the smallest possible number of users who need total administrative control over build servers and services for this collection.
   :::column-end:::
:::row-end:::
   ---
:::row:::
   :::column span="1":::
      Project-scoped users
   :::column-end:::
   :::column span="1":::
      People who need limited access to view organization settings and projects other than those projects they’re added to.
   :::column-end:::
   :::column span="1":::
      Add users to this group when you want to limit their visibility and access to those projects that you explicitly add them to. Don't add users to this group if they're also added to the Project Collection Administrators group.
   :::column-end:::
:::row-end:::
   ---

#### Removing users

- If your organization uses MSA accounts, then remove inactive users directly from the organization, as you have no other way to prevent access. When you do so, you can't create a query for work items assigned to the removed user account. For more information, see [Delete users from Azure DevOps](../accounts/delete-organization-users.md).
- If your organization's connected to Azure AD, then you can disable or delete the Azure AD user account while leaving your Azure DevOps organization active. In this way, you can continue to query their work item history using their account name.
- [Revoke user PATs](../accounts/admin-revoke-user-pats.md).
- Revoke any special permissions that may have been granted to individual user accounts.
- Reassign work from users you’re removing to current team members.

## Choose the right authentication method

Select your [authentication methods](../../integrate/get-started/authentication/authentication-guidance.md) from the following sources:
- [Multi-factor authentication](#require-multi-factor-authentication)
- [Azure Active Directory (Azure AD)](#use-azure-ad)
- [Personal access tokens (PATs)](#use-pats-sparingly)

### Require multi-factor authentication

Require all users to use multi-factor authentication (MFA), as a basic security feature. Multi-factor authentication requires use of more than on verification method, which adds a second layer of security to all Azure DevOps transactions.

### Use Azure AD

Integrate Azure DevOps with Azure AD to have a single plane for identity. Consistency and a single authoritative source increases clarity and reduces security risks from human errors and configuration complexity. The key for end to end governance is to have multiple role assignments (with different role definitions and different resource scopes to the same Azure AD groups). Without Azure AD, you're solely responsible for controlling organization access. 

For more information, see the following articles:
- [About accessing your organization with Azure AD](../accounts/access-with-azure-ad.md)
- [Add AD/Azure AD users or groups to a built-in security groups](add-ad-aad-built-in-security-groups.md)

### Use PATs sparingly

If possible, we recommended to always use identity services for authentication instead of cryptographic keys since managing keys securely with application code is challenging and can lead to mistakes like accidentally publishing sensitive access keys to public code repositories like GitHub. However, if you must use personal access tokens (PATs), consider the following guidelines:

- PATs should always be scoped to specific roles.
- PATs shouldn't provide global access to multiple organizations.
- PATs shouldn't grant write or manage permissions on builds or releases.
- PATs should have an expiration date and be kept secret since they're as critical as passwords.
- PATs should never be hardcoded in the application code, even if it's tempting to do so to simplify the code.
- Administrators should regularly audit all PATs using the [REST APIs](/rest/api/azure/devops/tokenadmin/personal-access-tokens/list) and revoke any that don't meet the above criteria.

In addition to these guidelines, it's crucial to store your PATs in a secure location and never hardcode them into applications. Finally, set an expiration date for your PATs to ensure they're only valid for a limited time.

For more information, check out the following articles:

- [Manage PATs with policies - for administrators](../accounts/manage-pats-with-policies-for-administrators.md)
- [Use PATs](../accounts/use-personal-access-tokens-to-authenticate.md) 

### Limit access by location 

By using Azure AD Conditional Access Policy Validation, you can restrict access to specific IP address ranges. For instance, you can set up a policy that exempts internal IP addresses from requiring MFA.

For more information, see [Using the location condition in a Conditional access policy](/azure/active-directory/conditional-access/howto-conditional-access-policy-location).

### Secure your network

Set up an [allowlist](allow-list-ip-url.md).

### Use Web application firewalls

Implement Web application firewalls (WAFs), so they can filter, monitor, and block any malicious web-based traffic to and from Azure DevOps.

- Always use encryption.
- Validate certificates.
- Firewalls shouldn’t be the only planned safety mechanism to reduce the volume and severity of security bugs in your applications.

For more information, see [Application management best practices](/azure/active-directory/manage-apps/application-management-fundamentals)

## Secure projects

- Enable the *Limit user visibility for projects* preview feature for the organization, which restricts access to only those projects that you add users to.
- Add users to the *Project-scoped users* group, so they can only see and select users and groups in the project that they're connected to from a people picker.
::: moniker range="azure-devops"
- Disable "Allow public projects" in your organization's policy settings to prevent every organization user from creating a public project. Azure DevOps Services allows you to change the visibility of your projects from public to private, and vice-versa. If users haven't signed into your organization, they have read-only access to your public projects. If users have signed in, they can be granted access to private projects and make any permitted changes to them.
::: moniker-end
- Don’t allow users to create new projects. Use EasyStart “Governed Projects,” which require approval once they're submitted.
- Check out the following articles for more in-depth information about setting subproject permissions. 
    - [Set wiki permissions](../../project/wiki/manage-readme-wiki-permissions.md)
    - [Set feedback permissions](/previous-versions/azure/devops/project/feedback/give-permissions-feedback)
    - [Set dashboard permissions](../../report/dashboards/dashboard-permissions.md)
    - [Set Analytics permissions](../../report/powerbi/analytics-security.md)

## Secure Azure Artifacts 

Make sure you understand the difference between feeds, project, and project collection administrators. For more information, see [Configure Azure Artifacts settings](../../artifacts/feeds/feed-permissions.md#configure-azure-artifacts-settings).
For more information, see [Set feed permissions](../../artifacts/feeds/feed-permissions.md).

## Secure Azure Boards 

- Review [Configure and customize Azure Boards](../../boards/configure-customize.md) before you customize a process.
- See the following articles:
  - [Set work tracking and plan permissions](set-permissions-access-work-tracking.md)
  - [Default permissions and access to Azure Boards](../../boards/get-started/permissions-access-boards.md)
  - [Set query permissions](../../boards/queries/set-query-permissions.md)

## Secure Azure Pipelines

[Use extends templates](../../pipelines/security/templates.md#use-extends-templates).
For more information about how to set permission levels for pipelines, see [Set pipeline permissions](../../pipelines/policies/set-permissions.md). 

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

For more information, see [Other security considerations](../../pipelines/security/misc.md).

For more information about granular permission controls that can be configured according to the project’s needs, see [Security groups, service accounts, and permissions in Azure DevOps](permissions.md).

## Secure Azure Repos

[Improve code quality with branch policies](../../repos/git/branch-policies.md). For more information about branch permissions and policies, see [Set branch permissions](../../repos/git/branch-permissions.md).

## Secure Azure Test Plans

Check out the following articles:
- [Set permissions and access for testing](set-permissions-access-test.md)
- [Supported scenarios and access requirements](../../test/overview.md#supported-scenarios-and-access-requirements)

## Secure Azure DevOps - general

- Disable inheritance where possible. Due to the allow-by-default nature of inheritance, unexpected users can get access or permissions. For more information, read about [inheritance](about-permissions.md#permission-inheritance-and-security-groups). 
- Only give users and services the minimum amount of access to perform their business functions.
- Periodically [review audit events](../audit/azure-devops-auditing.md#review-audit-log) to monitor and react to unexpected usage patterns by administrators and other users. 
- Check out the following articles:
  - [Permissions and role lookup guide](permissions-lookup-guide.md)
  - [Permissions, security groups, and service accounts reference](permissions.md)

## Related articles 

- [Valid user groups](about-permissions.md#valid-user-groups)  
- [Project-scoped user groups](about-permissions.md#project-scoped-user-group)
- [Manage conditional access](../accounts/change-application-access-policies.md)
- [Unit testing best practices with .NET Core and .NET Standard](/dotnet/core/testing/unit-testing-best-practices)
