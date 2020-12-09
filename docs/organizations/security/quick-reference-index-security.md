---
title: Quick reference index to Azure DevOps security 
titleSuffix: Azure DevOps
description: Index to concepts and tasks for configuring security.
ms.custom: quick-reference-index
ms.technology: devops-security
ms.assetid:
ms.topic: overview
ms.author: kaelli
author: KathrynEE
monikerRange: '<= azure-devops'
ms.date: 12/07/2020
---

# Security quick reference index

[!INCLUDE [version-all](../../includes/version-all.md)]

Use this index to quickly access concepts and tasks related to securing Azure DevOps. If you're new to Azure DevOps, see [What is Azure DevOps?](../../user-guide/what-is-azure-devops.md).  

<a id="concepts" />

## Get started  

As individual contributors to Azure DevOps, learn about how permissions and access to features are managed, default permission assignments, and how to view your permissions, and how to increase or trace your permissions through the following articles:  
 
- [About permissions, access, & security groups](about-permissions.md)   
- [Default permissions & access](permissions-access.md)   
- [View permissions](view-permissions.md)   
- [Trace permissions](faq-trace-permissions.md)   
- [Increase permission levels](lookup-organization-owner-admin.md)   


::: moniker range="azure-devops"
For organization owners or project administrators, learn more about security and how to add and manage user access, and secure projects and organizations.  

- [About security, authentication, & authorization](about-security-identity.md)  
- [About access levels](access-levels.md )  
- [Add users & manage access (cloud)](../accounts/add-organization-users.md)  
- [Add users to a project or team](add-users-team-project.md)   
::: moniker-end

::: moniker range="< azure-devops"

For project collection and project administrators, learn more about security and how to add and manage user access, and secure projects and organizations. 

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
      - [Auditing](../audit/azure-devops-auditing.md)  
      - [Authentication](about-security-identity.md#authentication)    
      - [Authorization](about-security-identity.md#authorization)    
      - [Azure Active Directory](../accounts/access-with-azure-ad.md)  
      - [Basic access](access-levels.md) 
      - [Collections](../projects/about-projects.md)  
      - [Conditional access](../accounts/change-application-access-policies.md#conditional-access-policies)  
   :::column-end:::
   :::column span="1":::
      - [Git credential manager](../../repos/git/set-up-credential-managers.md) 
      - [Inheritance](about-permissions.md#inheritance)   
      - [Namespaces](about-security-identity.md#namespaces)   
      - [OAuth](../../integrate/get-started/authentication/oauth.md)
      - [Organizations](../../user-guide/plan-your-azure-devops-org-structure.md)  
      - [Organization owner](lookup-organization-owner-admin.md#find-owner)  
      - [Permissions](about-permissions.md#permissions)  
      - [Permission states](about-permissions.md#permission-states) 
      - [Personal Access Token (PAT)](about-security-identity.md#authentication)   
      - [Preview features](../../project/navigation/preview-features.md)   
      - [Projects](../projects/about-projects.md)    
   :::column-end:::
   :::column span="1":::
      - [Security groups](about-permissions.md#security-group-membership)  
      - [Security policies](../accounts/change-application-access-policies.md#security-policies)  
      - [Security roles](about-security-roles.md)  
      - [Service accounts](about-security-identity.md#accounts)    
      - [Service principal](about-security-identity.md#accounts)  
      - [Secure Sockets Layer (SSL)](./data-protection.md)
      - [SSH authentication](../../repos/git/use-ssh-keys-to-authenticate.md)  
      - [Stakeholder access](access-levels.md)   
      - [Team group](../settings/about-teams-and-settings.md#team-groups)  
      - [Tenant](../accounts/change-organization-location.md) 
      - [Token](namespace-reference.md) 
      - [Valid users](about-permissions.md#validusers)     
   :::column-end:::
:::row-end:::
---
 
- Azure Repos and Azure Pipelines security 
 
## Tasks
  

---
:::row:::
   :::column span="1":::
       #### Access levels  
       ::: moniker range="azure-devops"
       - [Change a user's access level](setup-ad-aad.md)  
       - [Provide Stakeholders access to edit pipelines](provide-stakeholder-pipeline-access.md) 
       ::: moniker-end
       ::: moniker range="< azure-devops"
       - [Change access levels](change-access-levels.md)  
       ::: moniker-end
       ::: moniker range="azure-devops"
       #### Azure Active Directory  
       - [Set up Active Directory or Azure Active Directory](setup-ad-aad.md)  
       - [Add or remove users from Azure Active Directory](/azure/active-directory/fundamentals/add-users-azure-active-directory?bc=%252fazure%252fdevops%252forganizations%252fbreadcrumb%252ftoc.json&toc=%252fazure%252fdevops%252forganizations%252ftoc.json)  
       - [Add AD/Azure AD security groups to Azure DevOps security groups](add-ad-aad-built-in-security-groups.md)  
       - [Manage Azure Active Directory groups](../accounts/manage-azure-active-directory-groups.md)  
       - [Manage group rules](../accounts/assign-access-levels-by-group-membership.md)  
       - [Connect organization to Azure AD](../accounts/connect-organization-to-azure-ad.md)  
       - [Change Azure AD connection](../accounts/change-azure-ad-connection.md)  
       - [Disconnect from Azure AD](../accounts/disconnect-organization-from-azure-ad.md)  
       - [List organizations connected to Azure AD](../accounts/get-list-of-organizations-connected-to-azure-active-directory.md)
       ::: moniker-end
   :::column-end:::
   :::column span="1":::
       #### Authentication 
       - [Authentication guidance](../../integrate/get-started/authentication/authentication-guidance.md?toc=/azure/devops/organizations/toc.json&bc=/azure/devops/organizations/breadcrumb/toc.json)  
       - [Authenticate access with personal access tokens](../accounts/use-personal-access-tokens-to-authenticate.md?toc=/azure/devops/organizations/toc.json&bc=/azure/devops/organizations/breadcrumb/toc.json)  
       - [Authorize access to REST APIs with OAuth 2.0](../../integrate/get-started/authentication/oauth.md?toc=/azure/devops/organizations/toc.json&bc=/azure/devops/organizations/breadcrumb/toc.json)  
       - [Revoke users' PATs (for admins)](../accounts/admin-revoke-user-pats.md?toc=/azure/devops/organizations/toc.json&bc=/azure/devops/organizations/breadcrumb/toc.json)   
      #### Permissions  
       - [Change individual permissions](change-individual-permissions.md)   
       - [Set project-level permissions](set-project-collection-level-permissions.md)   
       - [Grant or restrict permissions to select tasks](restrict-access.md)   
       - [Set Wiki permissions](../../project/wiki/manage-readme-wiki-permissions.md?toc=/azure/devops/organizations/toc.json&bc=/azure/devops/organizations/breadcrumb/toc.json)   
       - [Set feedback permissions](../../project/feedback/give-permissions-feedback.md?toc=/azure/devops/organizations/toc.json&bc=/azure/devops/organizations/breadcrumb/toc.json)   
       - [Set dashboard permissions](../../report/dashboards/dashboard-permissions.md?toc=/azure/devops/organizations/toc.json&bc=/azure/devops/organizations/breadcrumb/toc.json)   
      #### Secure projects, set permissions 
       - [Delete team project](set-project-collection-level-permissions.md#project-level)
       - [Edit project-level information](set-project-collection-level-permissions.md#project-level)
       - [Manage project properties](set-project-collection-level-permissions.md#project-level)
       - [Rename team project](set-project-collection-level-permissions.md#project-level)
       - [Suppress notifications for work item updates](set-project-collection-level-permissions.md#project-level)
       - [Update project visibility](set-project-collection-level-permissions.md#project-level)
       - [View project-level information](set-project-collection-level-permissions.md#project-level)


   :::column-end:::
:::row-end:::
:::row:::
   :::column span="1":::
      #### Secure Azure Boards, set permissions 
       - [Bypass rules on work item updates](set-project-collection-level-permissions.md#project-level)
       - [Create child nodes (area and iteration paths)](set-permissions-access-work-tracking.md#set-permissions-area-path)
       - [Create tag definition](set-project-collection-level-permissions.md#project-level)
       - [Delete and restore work items](set-permissions-access-work-tracking.md#move-delete-permissions)  
       - [Delivery plans](set-permissions-access-work-tracking.md#plan-permissions)
       - [Move work items out of a project](set-permissions-access-work-tracking.md#move-delete-permissions)  
       - [Permanently delete work items](set-project-collection-level-permissions.md#project-level)
       - [Modify work items under an area path](set-permissions-access-work-tracking.md#set-permissions-area-path) 
       - [Query and query folders](set-permissions-access-work-tracking.md#work-item-queries)
      **Process**
       - [Administer process permissions](set-project-collection-level-permissions.md#collection-level) 
       - [Change process of team project](set-project-collection-level-permissions.md#project-level) 
       - [Create, delete, and edit process](set-project-collection-level-permissions.md#collection-level)
       - [Customized inherited process](set-permissions-access-work-tracking.md#process-permissions)
       - [Delete field from organization](set-project-collection-level-permissions.md#collection-level)
      #### Secure Test Plans, Set test permissions 
       - [Create, delete, and view test runs](set-permissions-access-test.md#delete-test-artifacts)  
       - [Manage test configurations](set-project-collection-level-permissions.md#project-level)  
       - [Manage test environments](set-project-collection-level-permissions.md#project-level)  
       - [Manage test controllers](set-permissions-access-test.md#test-controllers)
       - [Manage test plans and test suites under an area path](set-permissions-access-test.md#manage-test-artifacts)
       - [Set access, license requirements](../../test/manual-test-permissions.md)
   :::column-end:::
   :::column span="1":::
      #### Secure code, repositories, and branches 
       - [Set Git or TFVC repository permissions](set-git-tfvc-repository-permissions.md)  
       - [Set Git branch permissions](../../repos/git/branch-permissions.md?toc=/azure/devops/organizations/toc.json&bc=/azure/devops/organizations/breadcrumb/toc.json)  
       - [Administer shelved changes (TFVC)](set-project-collection-level-permissions.md#project-level)
       - [Administer workspaces (TFVC)](set-project-collection-level-permissions.md#project-level)
       - [Create a workspace (TFVC)](set-project-collection-level-permissions.md#project-level)
      #### Secure pipelines 
       - [Assign pipeline security roles](../../pipelines/policies/permissions.md)
       - [Grant version control permissions to the build service](../../pipelines/scripts/git-commands.md)  
       - [Administer build resource permissions](set-project-collection-level-permissions.md#project-level)
       - [Manage build resources](set-project-collection-level-permissions.md#project-level)
       - [Manage pipeline policies](set-project-collection-level-permissions.md#project-level)
       - [Use build resources](set-project-collection-level-permissions.md#project-level)
       - [View build resources](set-project-collection-level-permissions.md#project-level)  
       - [Set pipeline permissions](../../pipelines/policies/set-permissions.md?toc=/azure/devops/organizations/toc.json&bc=/azure/devops/organizations/breadcrumb/toc.json)    
       - [Set pipeline permissions](../../pipelines/policies/set-permissions.md?toc=/azure/devops/organizations/toc.json&bc=/azure/devops/organizations/breadcrumb/toc.json)  
       - [Pipelines security walkthrough](../../pipelines/security/overview.md?toc=/azure/devops/organizations/toc.json&bc=/azure/devops/organizations/breadcrumb/toc.json)  
       - [Approach to securing YAML pipelines](../../pipelines/security/approach.md?toc=/azure/devops/organizations/toc.json&bc=/azure/devops/organizations/breadcrumb/toc.json)  
       - [Repository protection](../../pipelines/security/repos.md?toc=/azure/devops/organizations/toc.json&bc=/azure/devops/organizations/breadcrumb/toc.json)  
       - [Pipeline resources](../../pipelines/security/resources.md?toc=/azure/devops/organizations/toc.json&bc=/azure/devops/organizations/breadcrumb/toc.json)  
       - [Project structure](../../pipelines/security/projects.md?toc=/azure/devops/organizations/toc.json&bc=/azure/devops/organizations/breadcrumb/toc.json)  
       - [Security through templates](../../pipelines/security/templates.md?toc=/azure/devops/organizations/toc.json&bc=/azure/devops/organizations/breadcrumb/toc.json)  
       - [Variables and parameters](../../pipelines/security/inputs.md?toc=/azure/devops/organizations/toc.json&bc=/azure/devops/organizations/breadcrumb/toc.json)  
       - [Shared infrastructure](../../pipelines/security/infrastructure.md?toc=/azure/devops/organizations/toc.json&bc=/azure/devops/organizations/breadcrumb/toc.json)  
       - [Other security considerations](../../pipelines/security/misc.md?toc=/azure/devops/organizations/toc.json&bc=/azure/devops/organizations/breadcrumb/toc.json)  
       - [Add continuous security validation](../../migrate/security-validation-cicd-pipeline.md?toc=/azure/devops/organizations/toc.json&bc=/azure/devops/organizations/breadcrumb/toc.json)   
   :::column-end:::
:::row-end:::
:::row:::
   :::column span="1":::
      #### Secure organizations  
       - [Set organization/collection-level permissions](set-project-collection-level-permissions.md)  
       - [Set permissions to manage extensions](../../marketplace/how-to/grant-permissions.md?toc=/azure/devops/organizations/toc.json&bc=/azure/devops/organizations/breadcrumb/toc.json)  
       ::: moniker range="azure-devops"
       - [Manage security & app access policies](../accounts/change-application-access-policies.md)  
       - [Add external users](../accounts/add-external-user.md)   
       - [Disable Request Access policy](../accounts/disable-request-access-policy.md)  
       - [Restrict admins from inviting new users](../security/restrict-invitations.md)   
       ::: moniker-end
       
   :::column-end:::
   :::column span="1":::
       ::: moniker range=">= tfs-2018 < azure-devops"
      #### Secure on-premises deployments  
       - [Set up secure sockets layer](/azure/devops/server/admin/setup-secure-sockets-layer?toc=/azure/devops/organizations/toc.json&bc=/azure/devops/organizations/breadcrumb/toc.json)   
       - [Web site settings & security](/azure/devops/server/admin/websitesettings?toc=/azure/devops/organizations/toc.json&bc=/azure/devops/organizations/breadcrumb/toc.json)   
       - [TFSSecurity command](/azure/devops/server/command-line/tfssecurity-cmd?toc=/azure/devops/organizations/toc.json&bc=/azure/devops/organizations/breadcrumb/toc.json)   
       - [Set SQL Server report permissions](../../report/admin/grant-permissions-to-reports.md?toc=/azure/devops/organizations/toc.json&bc=/azure/devops/organizations/breadcrumb/toc.json)   
       ::: moniker-end
       ::: moniker range="< tfs-2018"
      #### Secure on-premises deployments  
       - [Allowed address lists & network connections](allow-list-ip-url.md)  
       - [Set up secure sockets layer](/azure/devops/server/admin/setup-secure-sockets-layer?toc=/azure/devops/organizations/toc.json&bc=/azure/devops/organizations/breadcrumb/toc.json)   
       - [Web site settings & security](/azure/devops/server/admin/websitesettings?toc=/azure/devops/organizations/toc.json&bc=/azure/devops/organizations/breadcrumb/toc.json)   
       - [TFSSecurity command](/azure/devops/server/command-line/tfssecurity-cmd?toc=/azure/devops/organizations/toc.json&bc=/azure/devops/organizations/breadcrumb/toc.json)   
       - [Set SQL Server report permissions](../../report/admin/grant-permissions-to-reports.md?toc=/azure/devops/organizations/toc.json&bc=/azure/devops/organizations/breadcrumb/toc.json)   
       - [Set SharePoint project portal permissions](set-sharepoint-permissions.md)   
       ::: moniker-end
       ::: moniker range="azure-devops"
      #### Secure data and networks  
       - [Allowed address lists & network connections](allow-list-ip-url.md)  
       - [Data protection overview ](data-protection.md)  
       - [Data location](data-location.md)   
       - [Data Subject Requests for the GDPR & CCPA](/microsoft-365/compliance/gdpr-dsr-vsts?toc=/azure/devops/organizations/toc.json&bc=/azure/devops/organizations/breadcrumb/toc.json)   
       - [Credential storage ](credential-storage.md)
       ::: moniker-end
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

- [Manage Active Directory groups](/azure/devops/server/admin/setup-ad-groups?toc=/azure/devops/organizations/toc.json&bc=/azure/devops/organizations/breadcrumb/toc.json)  

 

