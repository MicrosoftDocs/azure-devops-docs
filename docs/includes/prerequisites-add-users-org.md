---
ms.topic: include
---


::: moniker range="azure-devops"  

You can add users to a project or team, add projects to organizations, and add teams to projects.

* You must have an organization and project. If you don't have a project yet, [create one](/azure/devops/organizations/projects/create-project). 
* To add users to an organization, you must be a member of the [Project Collection Administrators group](/azure/devops/organizations/security/set-project-collection-level-permissions). Organization owners are automatically members of this group.
* To add users to a project, you must be a member of the [Project Administrators or Project Collection Administrators groups](/azure/devops/organizations/security/set-project-collection-level-permissions). Any new users added to a project are automatically added to the organization. 
* To add users to a team, you must be a [Team Administrator](/azure/devops/organizations/settings/add-team-administrator), or you must be a member of one of the administrative groups. Any new users added to a team are automatically added to the organization.
* The ability of Team Administrators to add new users (who are not already in the organization) to their team is managed by the user policy: **Allow team and project administrators to invite new users**. Project Collection Administrators can add users whether this policy is on or off. For more information, see [Restrict invitations from Project and Team Administrators](/azure/devops/organizations/security/restrict-invitations).
For an overview of the methods supported for adding users to an organization, see [About organization management, Add and manage user access](/azure/devops/organizations/accounts/organization-management#add-users). 

::: moniker-end  
