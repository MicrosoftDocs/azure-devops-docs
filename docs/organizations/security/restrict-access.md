---
title: Manage access to specific features
titleSuffix: Azure DevOps 
description: How to set permissions to grant or restrict access to specific build, version control, or work tracking functions.  
ms.assetid: ee4c4a8f-0478-4ade-8b12-4e5ffd0054c7
ms.topic: overview
ms.subservice: azure-devops-security
ms.author: chcomley
author: chcomley
monikerRange: '<= azure-devops'
ms.date: 07/15/2024 
--- 

# Manage access to specific features

[!INCLUDE [version-lt-eq-azure-devops](../../includes/version-lt-eq-azure-devops.md)]

Managing access to specific features in Azure DevOps can be crucial for maintaining the right balance of openness and security. Whether you're looking to grant or restrict access to certain functionalities for a group of users, understanding the flexibility beyond the standard permissions provided by built-in security groups is key.

If you're new to the permissions and groups landscape, see [Get started with permissions, access, and security groups](about-permissions.md), which covers the essentials of permission states and how they're inherited.

> [!TIP]    
> The structure of your project in Azure DevOps plays a pivotal role in determining the granularity of permissions at an object level, such as repositories and area paths. This structure is the foundation that allows you to fine-tune access controls, enabling you to specifically delineate which areas are accessible or restricted. For more information, see [About projects and scaling your organization](../projects/about-projects.md).

## Prerequisites

[!INCLUDE [prerequisites-pca-only](../../includes/prerequisites-pca-only.md)]

## Use security groups

For optimal maintenance, we suggest using either the default security groups or establish [custom security groups to manage permissions](add-remove-manage-user-group-security-group.md). The permission settings for the Project Administrators and Project Collection Administrators groups are fixed by design and can't be altered. But, you have the flexibility to modify permissions for all other groups.

Managing permissions for a small number of users individually might seem feasible, but custom security groups offer a more organized approach to overseeing roles and the permissions associated with those roles, ensuring clarity and ease of management. 

## Delegate tasks to specific roles

As an administrator or organization owner, delegating administrative tasks to team members who oversee specific areas is a strategic approach. The primary built-in roles equipped with predefined permissions and role assignments include:

- **Readers:** Have read-only access to the project.
- **Contributors:** Can contribute to the project by adding or modifying content.
- **Team Administrator:** Manage team-related settings and permissions.
- **Project Administrators:** Have administrative rights over the project.
- **Project Collection Administrators:** Oversee the entire project collection and have the highest level of permissions.

These roles facilitate the distribution of responsibilities and streamline the management of project areas.

For for more information, see [Default permissions and access](permissions-access.md) and [Change project collection-level permissions](change-organization-collection-level-permissions.md). 

To delegate tasks to other members within your organization, consider creating a custom security group and then granting permissions as indicated in the following table.  

:::row:::
   :::column span="1":::
   **Role**
   :::column-end:::
   :::column span="1":::
   **Tasks to perform**
   :::column-end:::
   :::column span="2":::
   **Permissions to set to Allow**
   :::column-end:::
:::row-end:::
:::row:::
   :::column span="1":::
   Development lead (Git)
   :::column-end:::
   :::column span="1":::
    Manage branch policies
   :::column-end:::
   :::column span="2":::
   Edit policies, Force push, and Manage permissions  
   See [Set branch permissions](../../repos/git/branch-permissions.md).
   :::column-end:::
:::row-end:::
:::row:::
   :::column span="1":::
   Development lead (TFVC)
   :::column-end:::
   :::column span="1":::
   Manage repository and branches
   :::column-end:::
   :::column span="2":::
   Administer labels, Manage branch, and Manage permissions  
   See [Set TFVC repository permissions](../../repos/tfvc/set-tfvc-repository-permissions.md).
   :::column-end:::
:::row-end:::
:::row:::
   :::column span="1":::
   Software architect (Git)
   :::column-end:::
   :::column span="1":::
   Manage repositories
   :::column-end:::
   :::column span="2":::
   Create repositories, Force push, and Manage permissions  
   See [Set Git repository permissions](../../repos/git/set-git-repository-permissions.md)
   :::column-end:::
:::row-end:::
:::row:::
   :::column span="1":::
   Team administrators
   :::column-end:::
   :::column span="1":::
   Add area paths for their team  
   Add shared queries for their team
   :::column-end:::
   :::column span="2":::
   Create child nodes, Delete this node, Edit this node 
   See [Create child nodes, modify work items under an area path](set-permissions-access-work-tracking.md#set-permissions-area-path)  
   Contribute, Delete, Manage permissions (for a query folder), See [Set query permissions](../../boards/queries/set-query-permissions.md).
   :::column-end:::
:::row-end:::
:::row:::
   :::column span="1":::
   Contributors
   :::column-end:::
   :::column span="1":::
   Add shared queries under a query folder, Contribute to dashboards
   :::column-end:::
   :::column span="2":::
   Contribute, Delete (for a query folder), See [Set query permissions](../../boards/queries/set-query-permissions.md)  
   View, Edit, and Manage dashboards, See [Set dashboard permissions](../../report/dashboards/dashboard-permissions.md).
   :::column-end:::
:::row-end:::
:::row:::
   :::column span="1":::
   Project or product manager
   :::column-end:::
   :::column span="1":::
   Add area paths, iteration paths, and shared queries  
   Delete and restore work items, Move work items out of this project, Permanently delete work items
   :::column-end:::
   :::column span="2":::
   Edit project-level information, See [Change project-level permissions](change-project-level-permissions.md).
   :::column-end:::
:::row-end:::
:::row:::
   :::column span="1":::
   Process template manager ([Inheritance process model](../settings/work/inheritance-process-model.md))
   :::column-end:::
   :::column span="1":::
   Work tracking customization 
   :::column-end:::
   :::column span="2":::
   Administer process permissions, Create new projects, Create process, Delete field from account, Delete process, Delete project, Edit process  
   See [Change project collection-level permissions](change-organization-collection-level-permissions.md).
   :::column-end:::
:::row-end:::
:::row:::
   :::column span="1":::
   Process template manager ([Hosted XML process model](../settings/work/hosted-xml-process-model.md))
   :::column-end:::
   :::column span="1":::
   Work tracking customization 
   :::column-end:::
   :::column span="2":::
   Edit collection-level information, See [Change project collection-level permissions](change-organization-collection-level-permissions.md).
   :::column-end:::
:::row-end:::
:::row:::
   :::column span="1":::
   Project management ([On-premises XML process model](../../reference/on-premises-xml-process-model.md))
   :::column-end:::
   :::column span="1":::
   Work tracking customization 
   :::column-end:::
   :::column span="2":::
   Edit project-level information, See [Change project-level permissions](change-project-level-permissions.md).
   :::column-end:::
:::row-end:::
:::row:::
   :::column span="1":::
   Permissions manager
   :::column-end:::
   :::column span="1":::
   Manage permissions for a project, account, or collection 
   :::column-end:::
   :::column span="2":::
   For a project, Edit project-level information  
   For an account or collection, Edit instance-level (or collection-level) information  
   To understand the scope of these permissions, see [Permission lookup guide](permissions-lookup-guide.md). To request a change in permissions, See [Request an increase in permission levels](request-changes-permissions.md).  
   
In addition to assigning permissions to individuals, you can manage permissions for various objects within Azure DevOps. These objects include:
   
   - [Git repositories](../../repos/git/set-git-repository-permissions.md)
   - [Git branches](../../repos/git/branch-permissions.md)
   - [TFVC repositories](../../repos/tfvc/set-tfvc-repository-permissions.md)
   - [Build and release pipelines](../../pipelines/policies/permissions.md#pipeline-permissions)
   - [Wikis](../../project/wiki/manage-readme-wiki-permissions.md).

   :::column-end:::
:::row-end:::

These links provide detailed steps and guidelines for setting up and managing permissions effectively for the respective areas in Azure DevOps.

<a id="restrict-access-project-scoped-user-group"></a>

::: moniker range="azure-devops" 

## Limit user visibility to organization and project information

[!INCLUDE [project-scoped-users-important-note](../../includes/project-scoped-users-important-note.md)]

By default, when users are added to an organization, they gain visibility into all organizational and project information and settings. To tailor this access, the **Limit user visibility and collaboration to specific projects** preview feature can be enabled at the organizational level. For more information, see [Manage preview features](../../project/navigation/preview-features.md).

Once this feature is activated, users who are part of the **Project-Scoped Users** group have limited visibility, unable to see most **Organization settings**. Their access is confined to the projects they have been explicitly added to, ensuring a more controlled and secure environment.

[!INCLUDE [project-scoped-users-warning](../../includes/project-scoped-users-warning.md)]

::: moniker-end

::: moniker range="azure-devops" 

## Limit people picker to project users and groups

For organizations that integrate with Microsoft Entra ID, the people picker feature allows for a comprehensive search across all users and groups within Microsoft Entra ID, without being confined to a single project.

The people picker supports the following Azure DevOps functionalities:
- Selecting a user identity from work tracking identity fields like **Assigned To**.
- Using **@mention** to select a user or group in various discussions and comments, such as work item discussions, pull request discussions, commit comments, or comments on changesets and shelvesets.
- Utilizing **@mention** to select a user or group from a wiki page.

When using the people picker, as you enter info, it displays matching user names or security groups as illustrated in the following example.

> [!div class="mx-imgBorder"]  
> ![Screenshot of people picker](../../organizations/notifications/media/at-mention/identity-selector.png)  

For users and groups within the **Project-Scoped Users** group, visibility and selection are limited to users and groups within their connected project. To extend the scope of the people picker for all project members, see [Manage your organization, Limit  identity search and selection](../../user-guide/manage-organization-collection.md#limit-identity-selection).

::: moniker-end
 
## Restrict access to view or modify objects  

Azure DevOps is designed to allow all authorized users to view all defined objects within the system. However, you can tailor access to resources by setting the permission state to **Deny**. 
You can set permissions for members who belong to a custom security group or for individual users. For more information, see [Request an increase in permission levels](request-changes-permissions.md). 

:::row:::
   :::column span="1":::
   **Area to restrict**  
   :::column-end:::
   :::column span="1":::
   **Permissions to set to Deny**
   :::column-end:::
:::row-end:::
:::row:::
   :::column span="1":::
   View or contribute to a repository
   :::column-end:::
   :::column span="1":::
   View, Contribute  
   See [Set Git repository permissions](../../repos/git/set-git-repository-permissions.md) or [Set TFVC repository permissions](../../repos/tfvc/set-tfvc-repository-permissions.md).
   :::column-end:::
:::row-end:::
:::row:::
   :::column span="1":::
   View, create, or modify work items within an area path
   :::column-end:::
   :::column span="1":::
   Edit work items in this node, View work items in this node  
   See [Set permissions and access for work tracking, Modify work items under an area path](set-permissions-access-work-tracking.md).
   :::column-end:::
:::row-end:::
:::row:::
   :::column span="1":::
   View or update select build and release pipelines
   :::column-end:::
   :::column span="1":::
   Edit build pipeline, View build pipeline  
   Edit release pipeline, View release pipeline  
   You set these permissions at the object level. See [Set build and release permissions](../../pipelines/policies/permissions.md#pipeline-permissions).
   :::column-end:::
:::row-end:::
:::row:::
   :::column span="1":::
   Edit a dashboard
   :::column-end:::
   :::column span="1":::
   View dashboards  
   See [Set dashboard permissions](../../report/dashboards/dashboard-permissions.md).
   :::column-end:::
:::row-end:::

<a id="restrict-modifications-wits"></a> 

## Restrict modification of work items or select fields 

For examples that illustrate how to restrict modification of work items or select fields, see [Sample rule scenarios](../settings/work/rule-samples.md).   

## Next steps

> [!div class="nextstepaction"]
> [Remove user accounts](/azure/active-directory/add-users-azure-active-directory#delete-a-user?toc=/azure/devops/organizations/security/toc.json)

## Related articles

- [Default permissions and access](permissions-access.md) 
- [Permission lookup guide](permissions-lookup-guide.md) 
- [Get started with permissions, access, and security groups](about-permissions.md)
- [Permissions and groups reference](permissions.md)
- [Change project-level permissions](change-project-level-permissions.md)
- [Change project collection-level permissions](change-organization-collection-level-permissions.md)

<!--- 
This topic should provide useful steps to think about what they want to shut down, addressing the most common areas that admins have expressed that they want to shut down or open up. Also - consider how they might structure their project - repos, area paths, etc. and how that influences permissions 

Maybe consider this in a 2 or 3 step process: 
- what areas to open up/close down
- Role and delegation 
- Impact on project structure (what tends to get out of hand over time - sprawling set of teams, queries, iteration paths, area paths, etc.  

STEPS TO CONSIDER
What do you want to restrict access to? Look up the permission associated with that feature - you can use the Reverse Lookup to determine if it is at the object-level, project-level, or collection-level. 
Who do you want to restrict access?  Is it one or two folks, or a large number of users. 
Create a custom security group 
Add users to that group 
Set the permissions to restrict access to a feature. 

User Voice requests: 
* Hide Work Item Types (WITs) based on permission/security group

If you have requirements where you want to restrict user views or select users ability to contribute within an area, you may want to create a separate project where you restrict access. 
-->
