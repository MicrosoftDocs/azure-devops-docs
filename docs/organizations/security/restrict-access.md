---
title: Grant or restrict access to select features
titleSuffix: Azure DevOps 
description: How to set permissions to grant or restrict access to select build, version control, or work tracking functions  
ms.assetid: ee4c4a8f-0478-4ade-8b12-4e5ffd0054c7
ms.topic: conceptual
ms.technology: devops-security
ms.author: kaelli
author: KathrynEE
monikerRange: '<= azure-devops'
ms.date: 02/17/2021 
--- 


# Grant or restrict access using permissions

[!INCLUDE [version-all](../../includes/version-all.md)]

You can grant or restrict access to resources that you manage in Azure DevOps. You may want to open up or close down access to a select set of features and for a select set of users. While the built-in security groups provide a standard set of permission assignments, you may need additional security requirements not met by these assignments.

If you're new to administrating permissions and groups, review [Get started with permissions, access, and security groups](about-permissions.md)to learn about permission states and inheritance.

In this article you learn how to do the following tasks: 



::: moniker range="azure-devops"

> [!div class="checklist"]
> * Recommended method for granting and restricting permissions
> * Delegate tasks by assigning select permissions to specific roles 
> * Limit visibility to organization information
> * Limit people picker to project users and groups 
> * Restrict access to view or modify objects
> * Restrict modification of work items based on a user or group
::: moniker-end

   


::: moniker range="< azure-devops"

> [!div class="checklist"]
> * Recommended method for granting and restricting permissions
> * Delegate tasks by assigning select permissions to specific roles
> * Restrict access to view or modify objects
> * Restrict modification of work items based on a user or group
::: moniker-end


> [!TIP]    
> Because you set many permissions at an object-level, such as repositories and area paths, how you structure your project determines the areas you can open up or close down.


## Recommended method for granting and restricting permissions 

For maintenance purposes, we recommend you use either the built-in security groups or [custom security groups to manage permissions](change-individual-permissions.md). 

You can't change the permission settings for the Project Administrators group or the Project Collection Administrators group, which is by design. However, for all other groups, you can change the permissions. 

If you manage a small number of users, then you may find changing individual permissions a valid option. However, custom security groups allow you to better track roles and permissions assigned to those roles.  


## Delegate tasks to specific roles

As an administrator or account owner, it's a good idea to delegate administrative tasks to those team members who lead or manage an area. Several of the main built-in roles that come with default permissions and role assignments are:
- Readers 
- Contributors 
- Team Administrator (role) 
- Project Administrators
- Project Collection Administrators  

For a summary of permissions for the above roles, see [Default permissions and access](permissions-access.md), or for the Project Collection Administrators, see [Add administrators](set-project-collection-level-permissions.md) 

To delegate tasks to other members within your organization, consider creating a custom security group and then granting permissions as indicated in the following table.  

:::row:::
   :::column span="1":::
   <strong>Role</strong>

   :::column-end:::
   :::column span="1":::
   <strong>Tasks to perform</strong>

   :::column-end:::
   :::column span="1":::
   <strong>Permissions to set to Allow</strong>

   :::column-end:::
:::row-end:::
:::row:::
   :::column span="1":::
   Development lead (Git)
   :::column-end:::
   :::column span="1":::
    Manage branch policies
   :::column-end:::
   :::column span="1":::
   Edit policies, Force push, and Manage permissions<br/>See [Set branch permissions](../../repos/git/branch-permissions.md).
   :::column-end:::
:::row-end:::
:::row:::
   :::column span="1":::
   Development lead (TFVC)
   :::column-end:::
   :::column span="1":::
   Manage repository and branches
   :::column-end:::
   :::column span="1":::
   Administer labels, Manage branch, and Manage permissions<br/>See [Set TFVC repository permissions](../../repos/tfvc/set-tfvc-repository-permissions.md).
   :::column-end:::
:::row-end:::
:::row:::
   :::column span="1":::
   Software architect (Git)
   :::column-end:::
   :::column span="1":::
   Manage repositories
   :::column-end:::
   :::column span="1":::
   Create repositories, Force push, and Manage permissions<br/>See [Set Git repository permissions ](../../repos/git/set-git-repository-permissions.md)
   :::column-end:::
:::row-end:::
:::row:::
   :::column span="1":::
   Team administrators
   :::column-end:::
   :::column span="1":::
   Add area paths for their team<br/>Add shared queries for their team
   :::column-end:::
   :::column span="1":::
   Create child nodes, Delete this node, Edit this node<br/>See [Create child nodes, modify work items under an area path](set-permissions-access-work-tracking.md#set-permissions-area-path)<br/>
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
   :::column span="1":::
   Contribute, Delete (for a query folder), See [Set query permissions](../../boards/queries/set-query-permissions.md)<br/>
   View, Edit, and Manage dashboards, See [Set dashboard permissions](../../report/dashboards/dashboard-permissions.md).

   :::column-end:::
:::row-end:::
:::row:::
   :::column span="1":::
   Project or product manager
   :::column-end:::
   :::column span="1":::
   Add area paths, iteration paths, and shared queries<br/>
   Delete and restore work items, Move work items out of this project, Permanently delete work items
   :::column-end:::
   :::column span="1":::
   Edit project-level information, See [Add administrators, set permissions at the project-level or project collection-level](set-project-collection-level-permissions.md).
   :::column-end:::
:::row-end:::
:::row:::
   :::column span="1":::
   Process template manager ([Inheritance process model](../settings/work/inheritance-process-model.md))
   :::column-end:::
   :::column span="1":::
   Work tracking customization 
   :::column-end:::
   :::column span="1":::
   Administer process permissions, Create new projects, Create process, Delete field from account, Delete process, Delete project, Edit process<br/>See [Add administrators, set permissions at the project-level or project collection-level](set-project-collection-level-permissions.md).
   :::column-end:::
:::row-end:::
:::row:::
   :::column span="1":::
   Process template manager ([Hosted XML process model](../settings/work/hosted-xml-process-model.md))
   :::column-end:::
   :::column span="1":::
   Work tracking customization 
   :::column-end:::
   :::column span="1":::
   Edit collection-level information, See [Add administrators, set permissions at the project-level or project collection-level](set-project-collection-level-permissions.md).
   :::column-end:::
:::row-end:::
:::row:::
   :::column span="1":::
   Project management ([On-premises XML process model](../../reference/on-premises-xml-process-model.md))
   :::column-end:::
   :::column span="1":::
   Work tracking customization 
   :::column-end:::
   :::column span="1":::
   Edit project-level information, See [Add administrators, set permissions at the project-level or project collection-level](set-project-collection-level-permissions.md).
   :::column-end:::
:::row-end:::
:::row:::
   :::column span="1":::
   Permissions manager
   :::column-end:::
   :::column span="1":::
   Manage permissions for a project, account, or collection 
   :::column-end:::
   :::column span="1":::
   For a project, Edit project-level information<br/> 
   For an account or collection, Edit instance-level (or collection-level) information<br/> To understand the scope of these permissions, see [Permission lookup guide](permissions-lookup-guide.md). To grant permissions, See [Add administrators, set permissions at the project-level or project collection-level](set-project-collection-level-permissions.md).<br/><br/>You can also grant permissions to manage permissions for the following objects:
   
   - [Set Git repository permissions ](../../repos/git/set-git-repository-permissions.md)
   - [Manage Git branch permissions](../../repos/git/branch-permissions.md)
   - [Set TFVC repository permissions ](../../repos/tfvc/set-tfvc-repository-permissions.md)
   - [Administer build and release permissions](../../pipelines/policies/set-permissions.md)
   - [Manage Wiki permissions](../../project/wiki/manage-readme-wiki-permissions.md).

   :::column-end:::
:::row-end:::




<a id="restrict-access-project-scoped-user-group" />


::: moniker range="azure-devops" 

## Limit visibility to organization and project information

By default, users added to an organization can view all organization and project information and settings. To restrict access to only those projects that you add users to, you can enable the **Limit user visibility for projects** preview feature for the organization. To enable this feature, see [Manage or enable features](../../project/navigation/preview-features.md#account-level). 

With this feature enabled, users added to the **Project-Scoped Users** group can't view most **Organization settings** and can only connect to those projects to which they've been added. 

::: moniker-end


::: moniker range="azure-devops" 

## Limit people picker to project users and groups

For organizations that manage their users and groups using Azure Active Directory (Azure AD), people pickers provide support for searching all users and groups added to Azure AD, not just those added to a project. people pickers support the following Azure DevOps functions: 
- Selection of a user identity from a work tracking identity field such as **Assigned To**  
- Selection of a user or group using **@mention** in a work item discussion or rich-text field, a pull request discussion, commit comments, or changeset or shelveset comments
- Selection of a user or group using **@mention** from a wiki page 

As shown in the following image, you simply start typing into a people picker box until you find a match to a user name or security group.
 
> [!div class="mx-imgBorder"]  
> ![Screenshot of people picker](../../notifications/media/at-mention/identity-selector.png)  

Users and groups who are added to the **Project-Scoped Users** group can only see and select users and groups in the project they are connected to from a people picker. To scope people pickers for all project members, see [Manage your project, Limit identity search and selection](../../user-guide/project-admin-tutorial.md#limit-identity-selection).


::: moniker-end
 
## Restrict access to view or modify objects  

Azure DevOps is designed to enable all valid users to view all objects defined in the system. You can restrict access to resources by setting the permission state to **Deny**. You can set permissions for members that belong to a custom security group or for an individual user. To learn more about how to set these types of permissions, see [Change individual permissions, grant select access to specific functions](change-individual-permissions.md). 


:::row:::
   :::column span="1":::
   <strong>Area to restrict</strong><br/>
   :::column-end:::
   :::column span="1":::
   <strong>Permissions to set to Deny</strong>

   :::column-end:::
:::row-end:::
:::row:::
   :::column span="1":::
   View or contribute to a repository
   :::column-end:::
   :::column span="1":::
   View, Contribute<br/>See [Set Git repository permissions](../../repos/git/set-git-repository-permissions.md) or [Set TFVC repository permissions](../../repos/tfvc/set-tfvc-repository-permissions.md).
   :::column-end:::
:::row-end:::
:::row:::
   :::column span="1":::
   View, create, or modify work items within an area path
   :::column-end:::
   :::column span="1":::
   Edit work items in this node, View work items in this node<br/>See [Set permissions and access for work tracking, Modify work items under an area path](set-permissions-access-work-tracking.md).
   :::column-end:::
:::row-end:::
:::row:::
   :::column span="1":::
   View or update select build and release pipelines
   :::column-end:::
   :::column span="1":::
   Edit build pipeline, View build pipeline<br/>
   Edit release pipeline, View release pipeline<br/>
   You set these permissions at the object level. See [Set build and release permissions](../../pipelines/policies/set-permissions.md).
   :::column-end:::
:::row-end:::
:::row:::
   :::column span="1":::
   Edit a dashboard
   :::column-end:::
   :::column span="1":::
   View dashboards<br/>
   See [Set dashboard permissions](../../report/dashboards/dashboard-permissions.md).
   :::column-end:::
:::row-end:::


<a id="restrict-modifications-wits" /> 

## Restrict modification of work items or select fields 

For examples that illustrate how to restrict modification of work items or select fields, see [Sample rule scenarios](../settings/work/rule-samples.md).   
 


## Next steps

> [!div class="nextstepaction"]
> [Remove user accounts](remove-users-prohibit-access.md)

## Related articles

- [Troubleshoot permissions](troubleshoot-permissions.md)
- [Rules and rule evaluation](../settings/work/rule-reference.md)  
- [Default permissions and access](permissions-access.md) 
- [Permission lookup guide](permissions-lookup-guide.md) 
- [Get started with permissions, access, and security groups](about-permissions.md)
- [Permissions and groups reference](permissions.md)
- [Set permissions at the project-level or project collection-level](set-project-collection-level-permissions.md)


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

Should we have a Concepts topic about restricting -- address things that we support/don't support. 

User Voice requests: 
* Hide Work Item Types (WITs) based on permission/security group

If you have requirements where you want to restrict user views or select users ability to contribute within an area, you may want to create a separate project where you restrict access. 

What you can do on TFS differs from what is available  from Azure DevOps 
-->
