---
ms.topic: include
---


::: moniker range="azure-devops"  

You can add users to a project or team, add projects to organizations, and add teams to projects.

* You must have an organization and project. If you don't have a project yet, [create one](../organizations/projects/create-project.md). 
* To add users to an organization, you must be a member of the [Project Collection Administrators group](../organizations/security/set-project-collection-level-permissions.md). Organization owners are automatically members of this group.
* To add users to a project, you must be a member of the [Project Administrators or Project Collection Administrators groups](../organizations/security/set-project-collection-level-permissions.md). Any new users added to a project are automatically added to the organization. 
* To add users to a team, you must be a [Team Administrator](../organizations/settings/add-team-administrator.md), or you must be a member of one of the administrative groups. Any new users added to a team are automatically added to the organization.

> [!NOTE]   
> When the organization policy, **Allow team and project administrators to invite new users**, is disabled, Team and Project Administrators can't add users who are not already in the organization to a team or project. Project Collection Administrators can add users whether this policy is on or off. For more information, see [Restrict invitations from Project and Team Administrators](../organizations/security/restrict-invitations.md). For an overview of the methods supported for adding users to an organization, see [About organization management, Add and manage user access](../organizations/accounts/organization-management.md#add-users). 

::: moniker-end