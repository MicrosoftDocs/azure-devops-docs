---
title: Quick reference index to Azure DevOps security 
titleSuffix: Azure DevOps
description: Index to concepts and tasks for configuring security.
ms.custom: quick-reference-index
ms.subservice: azure-devops-security
ms.topic: overview
ms.author: chcomley
author: chcomley
monikerRange: '<= azure-devops'
ms.date: 01/13/2022
---

# Security quick reference index

[!INCLUDE [version-lt-eq-azure-devops](../../includes/version-lt-eq-azure-devops.md)]

Use this index to quickly access concepts and tasks related to securing Azure DevOps. If you're new to Azure DevOps, see [What is Azure DevOps?](../../user-guide/what-is-azure-devops.md)   

<a id="concepts" />

## Get started  

As individual contributors to Azure DevOps, learn about how permissions and access to features are managed, default permission assignments, how to view your permissions, and how to increase or trace your permissions.   
 
- [About permissions, access, & security groups](about-permissions.md)   
- [Default permissions & access](permissions-access.md)   
- [View permissions](view-permissions.md)   
- [Troubleshoot permissions](troubleshoot-permissions.md)   
- [Request an increase in permission levels](request-changes-permissions.md)   
- [Add an alternate account to your Visual Studio subscription](/visualstudio/subscriptions/vs-alternate-identity?toc=/azure/devops/organizations/toc.json)

::: moniker range="azure-devops"

For organization owners or project administrators, learn about authentication and authorization, how to add and manage users and their access, and set organization policies.  

- [About security, authentication, & authorization](about-security-identity.md)  
- [About access levels](access-levels.md )  
- [Add users & manage access (cloud)](../accounts/add-organization-users.md)  
- [Add users to a project or team](add-users-team-project.md)   

::: moniker-end

::: moniker range="< azure-devops"

For project collection and project administrators, learn more about security and how to add and manage user access, and secure projects and deployment. 

- [About security, authentication, & authorization](about-security-identity.md)  
- [About access levels](access-levels.md )  
- [Change access levels (on-premises)](change-access-levels.md)  
- [Add users to a project or team](add-users-team-project.md)   

::: moniker-end

## Concepts 

---
:::row:::
   :::column span="1":::
      - [Access control entries (ACE)](about-security-identity.md#namespaces)   
      - [Access control list (ACL)](about-security-identity.md#namespaces)  
      - [Access level](access-levels.md)  
      - [Accounts](about-security-identity.md#accounts)  
      - [Active Directory](about-permissions.md#aad)  
      - [Auditing](../audit/azure-devops-auditing.md)  
      - [Authentication](about-security-identity.md#authentication)    
      - [Authorization](about-security-identity.md#authorization)    
      - [Azure Active Directory](about-permissions.md#aad)  
      - [Basic access](access-levels.md) 
      - [Collections](../projects/about-projects.md)  
      - [Conditional access](../accounts/change-application-access-policies.md#conditional-access-policies)  
      - [Git credential manager](../../repos/git/set-up-credential-managers.md?toc=/azure/devops/organizations/toc.json) 
   :::column-end:::
   :::column span="1":::
      - [Inheritance](about-permissions.md#inheritance)   
      - [Namespaces](about-security-identity.md#namespaces)   
      - [OAuth](../../integrate/get-started/authentication/oauth.md)
      - [Organizations](../../user-guide/plan-your-azure-devops-org-structure.md)  
      - [Organization owner](look-up-organization-owner.md)  
      - [Permissions](about-permissions.md#permissions)  
      - [Permission states](about-permissions.md#permission-states) 
      - [Personal Access Tokens (PATs)](about-security-identity.md#authentication)   
      - [Preview features](../../project/navigation/preview-features.md?toc=/azure/devops/organizations/toc.json) 
      - [Project-scoped User Groups](../../user-guide/manage-organization-collection.md#project-scoped-user-group)  
      - [Projects](../projects/about-projects.md)  
      - [Resources granted to project members](../projects/resources-granted-to-project-members.md) 
   :::column-end:::
   :::column span="1":::
      - [Security best practices](security-best-practices.md)
      - [Security groups](about-permissions.md#security-group-membership)  
      - [Security policies](about-security-identity.md#application-connection-and-security-policies)  
      - [Security roles](about-security-roles.md)  
      - [Service accounts](about-security-identity.md#accounts)    
      - [Service principal](about-security-identity.md#accounts)  
      - [Secure Sockets Layer (SSL)](data-protection.md)
      - [SSH authentication](../../repos/git/use-ssh-keys-to-authenticate.md?toc=/azure/devops/organizations/toc.json)  
      - [Stakeholder access](access-levels.md)   
      - [Team group](../settings/about-teams-and-settings.md#team-groups)  
      - [Tenant](../accounts/change-organization-location.md) 
      - [Token](namespace-reference.md) 
      - [Valid users](about-permissions.md#validusers)     
   :::column-end:::
:::row-end:::
---

 
## Tasks  

The primary tasks for administrators to secure Azure DevOps are to assign access levels, set permissions, assign security roles, and set policies. Development leads and pipeline administrators should become familiar with setting permissions and policies on repositories, branches, and pipeline resources.


---
:::row:::
   :::column span="1":::
       **Access levels**  
       ::: moniker range="azure-devops"
       - [Change a user's access level](../accounts/add-organization-users.md)  
       - [Provide Stakeholders access to edit pipelines](provide-stakeholder-pipeline-access.md) 
       ::: moniker-end
       ::: moniker range="< azure-devops"
       - [Change access levels](change-access-levels.md)  
       ::: moniker-end
       
       
      **Set project-level permissions** 
       - [Request an increase in permission levels](request-changes-permissions.md)   
       - [Change project-level permissions](change-project-level-permissions.md)   
       - [Grant or restrict permissions to select tasks](restrict-access.md)   
       - [Dashboard permissions](../../report/dashboards/dashboard-permissions.md?toc=/azure/devops/organizations/toc.json)  
       - [Analytics permissions](../../report/powerbi/analytics-security.md?toc=/azure/devops/organizations/toc.json)  
       - [Wiki permissions](../../project/wiki/manage-readme-wiki-permissions.md?toc=/azure/devops/organizations/toc.json)   
       - [Feedback permissions]/previous-versions/azure/devops/project/feedback/give-permissions-feedback)   
   :::column-end:::
   :::column span="1"::: 
       **Authentication** 
       - [Choose authentication method](../../integrate/get-started/authentication/authentication-guidance.md?toc=/azure/devops/organizations/toc.json)  
       - [Authenticate access with PATs](../accounts/use-personal-access-tokens-to-authenticate.md?toc=/azure/devops/organizations/toc.json)  
       - [Manage personal access tokens using API](../accounts/manage-personal-access-tokens-via-api.md?toc=/azure/devops/organizations/toc.json)  
       - [Use SSH key authentication](../../repos/git/use-ssh-keys-to-authenticate.md?toc=/azure/devops/organizations/toc.json)
       - [Use OAuth 2.0 to authorize access to REST APIs](../../integrate/get-started/authentication/oauth.md?toc=/azure/devops/organizations/toc.json)  
       - [Authorize a service, manage authorizations](../settings/manage-authorizations.md)  
       - [Revoke users' PATs (for admins)](../accounts/admin-revoke-user-pats.md?toc=/azure/devops/organizations/toc.json)  
       - [Set up Git credential manager](../../repos/git/set-up-credential-managers.md?toc=/azure/devops/organizations/toc.json) 
       - [Git authentication](../../repos/git/auth-overview.md?toc=/azure/devops/organizations/toc.json) 
       - [Authenticate extensions](../../extend/develop/auth.md?toc=/azure/devops/organizations/toc.json) 
   :::column-end:::
:::row-end:::
---
::: moniker range="azure-devops"
:::row:::
   :::column span="1":::
       **Azure Active Directory**  
       - [Connect organization to Azure AD](../accounts/connect-organization-to-azure-ad.md)  
       - [Add users to Azure Active Directory](/azure/active-directory/fundamentals/add-users-azure-active-directory?bc=%252fazure%252fdevops%252forganizations%252fbreadcrumb%252ftoc.json&toc=%252fazure%252fdevops%252forganizations%252ftoc.json)  
       - [Add Azure AD security groups to Azure DevOps security groups](add-ad-aad-built-in-security-groups.md)  
       - [Manage Azure Active Directory groups](../accounts/manage-azure-active-directory-groups.md)  
       - [Manage group rules](../accounts/assign-access-levels-by-group-membership.md)  
       - [Change Azure AD connection](../accounts/change-azure-ad-connection.md)  
       - [Disconnect from Azure AD](../accounts/disconnect-organization-from-azure-ad.md)  
       - [List organizations connected to Azure AD](../accounts/get-list-of-organizations-connected-to-azure-active-directory.md)
       
       
      **Set organization or collection-level permissions**  
       - [Change organization-level permissions](change-organization-collection-level-permissions.md)   
       - [Change project collection-level permissions](change-organization-collection-level-permissions.md)   
       - [Change process permissions](set-permissions-access-work-tracking.md#process-permissions) 
       - [Set permissions to manage extensions](../../marketplace/grant-permissions.md?toc=/azure/devops/organizations/toc.json)  
       - [Enable Project-Scoped Users Group](../../user-guide/manage-organization-collection.md#project-scoped-user-group) 
      
      
      
      **Set object-level permissions**
       - [Set object-level permissions](set-object-level-permissions.md) 
   :::column-end:::
   :::column span="1":::
      **Set organization policies**  
       - [Manage security & app access policies](../accounts/change-application-access-policies.md)  
       - [Add external users](../accounts/add-external-user.md)   
       - [Disable Request Access policy](../accounts/disable-request-access-policy.md)  
       - [Restrict admins from inviting new users](../security/restrict-invitations.md)   
       - [Restrict users from creating new organizations with Azure Active Directory policy](../accounts/azure-ad-tenant-policy-restrict-org-creation.md)
       - [Enable Conditional Access or Multi-factor Authentication](/azure/active-directory/authentication/tutorial-enable-azure-mfa)
       
       
       **Secure data and networks**  
       - [Allowed address lists & network connections](allow-list-ip-url.md)  
       - [Install and use Visual Studio and Azure Services behind a firewall or proxy server](/visualstudio/install/install-and-use-visual-studio-behind-a-firewall-or-proxy-server)
       - [Save project data](../projects/save-project-data.md)  
       - [Data protection overview ](data-protection.md)  
       - [Data location](data-location.md)   
       - [Data Subject Requests for the GDPR & CCPA](/microsoft-365/compliance/gdpr-dsr-vsts?toc=/azure/devops/organizations/toc.json)   
       - [Credential storage ](credential-storage.md)
:::row-end:::
---
::: moniker-end
---
::: moniker range="< azure-devops"
:::row:::
   :::column span="1":::
       **Active Directory**  
       - [Manage Active Directory groups](/azure/devops/server/admin/setup-ad-groups?toc=/azure/devops/organizations/toc.json)
       - [Add Active Directory security groups to Azure DevOps security groups](add-ad-aad-built-in-security-groups.md)    
       
       **Set collection and server instance permissions**  
       - [Change project collection-level permissions](change-organization-collection-level-permissions.md)   
       - [Change process permissions](set-permissions-access-work-tracking.md#process-permissions) 
       - [Set permissions to manage extensions](../../marketplace/grant-permissions.md?toc=/azure/devops/organizations/toc.json)  
       - [Add server administrators](/azure/devops/server/admin/add-administrator)  
   :::column-end:::
   :::column span="1":::
      **Secure on-premises deployments**  
       - [Allowed address lists & network connections](allow-list-ip-url.md)  
       - [Install and use Visual Studio and Azure Services behind a firewall or proxy server](/visualstudio/install/install-and-use-visual-studio-behind-a-firewall-or-proxy-server)
       - [Ports required for Azure DevOps Server](/azure/devops/server/architecture/required-ports)
       - [Save project data](../projects/save-project-data.md)  
       - [Set up secure sockets layer](/azure/devops/server/admin/setup-secure-sockets-layer?toc=/azure/devops/organizations/toc.json)   
       - [Web site settings & security](/azure/devops/server/admin/websitesettings?toc=/azure/devops/organizations/toc.json)   
       - [TFSSecurity command](/azure/devops/server/command-line/tfssecurity-cmd?toc=/azure/devops/organizations/toc.json)   
       - [Set SQL Server report permissions](/previous-versions/azure/devops/report/admin/grant-permissions-to-reports)     
:::row-end:::
---
::: moniker-end
:::row:::
   :::column span="1":::
      **Set Boards/work tracking permissions** 
       - [Create tag definition](change-project-level-permissions.md)
       - [Delete and restore work items](set-permissions-access-work-tracking.md#move-delete-permissions)  
       - [Delete field from organization](change-organization-collection-level-permissions.md)
       - [Delivery plans](../../boards/plans/edit-delivery-plan-permissions.md)
       - [Move work items out of a project](set-permissions-access-work-tracking.md#move-delete-permissions)  
       - [Manage area and iteration paths](set-permissions-access-work-tracking.md#set-permissions-area-path)
       - [Modify work items under an area path](set-permissions-access-work-tracking.md#set-permissions-area-path) 
       - [Permanently delete work items](change-project-level-permissions.md)       
       - [Process permissions](set-permissions-access-work-tracking.md#process-permissions)
       - [Queries and query folders](../../boards/queries/set-query-permissions.md)       
       
       
      **Set test permissions**
       - [Create, delete, and view test runs](set-permissions-access-test.md#delete-test-artifacts)  
       - [Manage test configurations](change-project-level-permissions.md)  
       - [Manage test environments](change-project-level-permissions.md)  
       - [Manage test controllers](set-permissions-access-test.md#test-controllers)
       - [Manage test plans and test suites under an area path](set-permissions-access-test.md#manage-test-artifacts)
       - [Set access, license requirements](../../test/manual-test-permissions.md)
   :::column-end:::
   :::column span="1":::
      **Set repository and branch permissions**  
       - [Git repository permissions](../../repos/git/set-git-repository-permissions.md)  
       - [TFVC repository permissions](../../repos/tfvc/set-tfvc-repository-permissions.md)  
       - [Git branch permissions](../../repos/git/branch-permissions.md?toc=/azure/devops/organizations/toc.json)  
       - [Administer shelved changes (TFVC)](change-project-level-permissions.md)
       - [Administer workspaces (TFVC)](change-project-level-permissions.md)
       - [Create a workspace (TFVC)](change-project-level-permissions.md)
       
       
      **Set Git repository and branch policies**  
       - [Git repository settings and policies](../../repos/git/repository-settings.md)
       - [Git branch policies](../../repos/git/branch-policies.md)
       - [Git branch policy for an external service](../../repos/git/pr-status-policy.md)
       - [Use Azure Functions to create custom Git branch policies](../../repos/git/create-pr-status-server-with-azure-functions.md) 
       
       
      **Secure code**  
       - [Secure Development Documentation](/azure/security/develop/)
       - [About Microsoft Security Code Analysis](/azure/security/develop/security-code-analysis-overview)
       - [Microsoft Threat Modeling Tool](/azure/security/develop/threat-modeling-tool)
       - [Security in DevOps (DevSecOps)](/devops/operate/security-in-devops)
       - [Enable DevSecOps with Azure and GitHub](/devops/devsecops/enable-devsecops-azure-github)
   :::column-end:::
:::row-end:::
---
:::row:::
   :::column span="1":::
      **Set pipeline permissions and policies** 
       - [Assign pipeline security roles](../../pipelines/policies/permissions.md)
       - [Grant version control permissions to the build service](../../pipelines/scripts/git-commands.md)  
       - [Administer build resource permissions](change-project-level-permissions.md)
       - [Manage build resources](change-project-level-permissions.md)
       - [Manage pipeline policies](change-project-level-permissions.md)
       - [Use build resources](change-project-level-permissions.md)
       - [View build resources](change-project-level-permissions.md)  
       - [Set pipeline permissions](../../pipelines/policies/set-permissions.md?toc=/azure/devops/organizations/toc.json)    
   :::column-end:::
   :::column span="1":::
      &nbsp;&nbsp;&nbsp;  
       - [Pipelines security walkthrough](../../pipelines/security/overview.md?toc=/azure/devops/organizations/toc.json)  
       - [Approach to securing YAML pipelines](../../pipelines/security/approach.md?toc=/azure/devops/organizations/toc.json)  
       - [Repository protection](../../pipelines/security/repos.md?toc=/azure/devops/organizations/toc.json)  
       - [Pipeline resources](../../pipelines/security/resources.md?toc=/azure/devops/organizations/toc.json)  
       - [Project structure](../../pipelines/security/projects.md?toc=/azure/devops/organizations/toc.json)  
       - [Security through templates](../../pipelines/security/templates.md?toc=/azure/devops/organizations/toc.json)  
       - [Variables and parameters](../../pipelines/security/inputs.md?toc=/azure/devops/organizations/toc.json)  
       - [Shared infrastructure](../../pipelines/security/infrastructure.md?toc=/azure/devops/organizations/toc.json)  
       - [Other security considerations](../../pipelines/security/misc.md?toc=/azure/devops/organizations/toc.json)
   :::column-end:::
:::row-end:::
---
:::row:::
   :::column span="1":::
      **Set feed permissions** 
       - [Secure and share packages using feed permissions](../../artifacts/feeds/feed-permissions.md)
   :::column-end:::
:::row-end:::
---


## Reference 

- [Permissions lookup guide](permissions-lookup-guide.md) 
- [Permissions & groups](permissions.md)  
- [Security management tools](security-tools-reference.md)  
- [Security namespaces & permissions](namespace-reference.md)    
- [Manage security groups with CLI](add-manage-security-groups.md)   
- [Manage permissions with CLI](manage-tokens-namespaces.md)   


## Related articles 
- [About settings for users, teams, projects, or organizations](../settings/about-settings.md)
- [Visual Studio subscriptions](/visualstudio/subscriptions/)
- [Azure Boards settings quick reference index](../../reference/quick-reference-index-boards-settings.md)


 

