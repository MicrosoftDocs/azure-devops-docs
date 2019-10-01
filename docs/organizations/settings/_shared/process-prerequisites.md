---
ms.topic: include
---

## Prerequisites

::: moniker range="azure-devops"

- You must have an organization created in Azure DevOps Services. If you haven't created one yet, [do that now](/azure/devops/user-guide/sign-up-invite-teammates).  
- Users granted Basic or Stakeholder access are automatically granted permission to create, edit, and delete processes, change the process of a project, and administer process permissions. To change these defaults, you can restrict access by setting permissions at the organization level and set permissions explicitly. 
- To create, delete or edit a process, you must be a member of the [Project Collection Administrators group](/azure/devops/organizations/security/set-project-collection-level-permissions), or have the corresponding permissions <strong>Create process</strong>, <strong>Delete process</strong>, <strong>Edit process</strong>, or <strong>Delete a field from organization</strong> set to <strong>Allow</strong>. See [Set permissions and access for work tracking, Customize an inherited process](/azure/devops/organizations/security/set-permissions-access-work-tracking#customize-an-inherited-process).
	
::: moniker-end

::: moniker range="azure-devops-2019"

- You must have selected the Inheritance process model for the project collection where the project is created.  
- To create, edit, and manage processes, you must be a member of the [Project Collection Administrators group](/azure/devops/organizations/security/set-project-collection-level-permissions) or have these permissions explicitly granted to you.
- To create a project, you must be a member of the [Project Collection Administrators group](/azure/devops/organizations/security/set-project-collection-level-permissions), or have the corresponding permissions <strong>Create process</strong>, <strong>Delete process</strong>, <strong>Edit process</strong>, or <strong>Delete a field from organizaiton</strong> set to <strong>Allow</strong>. See [Set permissions and access for work tracking, Customize an inherited process](/azure/devops/organizations/security/set-permissions-access-work-tracking#customize-an-inherited-process).

::: moniker-end