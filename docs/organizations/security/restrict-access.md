---
title: Grant or restrict access to select features
titleSuffix: Azure DevOps
description: How to set permissions to grant or restrict access to select build, version control, or work tracking functions  
ms.assetid: ee4c4a8f-0478-4ade-8b12-4e5ffd0054c7
ms.prod: devops
ms.topic: Conceptual
ms.technology: devops-security
ms.manager: jillfra
ms.author: kaelli
author: KathrynEE
monikerRange: '>= tfs-2013'
ms.date: 02/19/2019
---

# Tutorial: Grant or restrict access to select features and functions

[!INCLUDE [temp](../../_shared/version-vsts-tfs-all-versions.md)]

You can grant or restrict access to resources that you manage in Azure DevOps. Depending on your project needs, you may want to open up or close down access to a select set of features and for a select set of users. While the built-in security groups provide a standard set of permission assignments, you may need additional security requirements not met by these assignments.

If you are new to administrating permissions and groups, review [About permissions and groups](about-permissions.md) to learn about permission states and inheritance.

Use this topic you learn how to do the following: 

> [!div class="checklist"]
> * Recommended method for granting and restricting permissions
> * Delegate tasks by assigning select permissions to specific roles
> * Restrict access to view or modify objects
> * Restrict modification of work items based on a user or group



> [!TIP]    
> Because you set many permissions at an object-level, such as repositories and area paths, how you structure your project determines the areas you can open up or close down.


## Recommended method for granting and restricting permissions 

For maintenance purposes, we recommend you use either the built-in security groups or [custom security groups to manage permissions](change-individual-permissions.md). 

You can't change the permission settings for the Project Administrators group or the Project Collection Administrators group. This is by design. However, for all other groups, you can change the permissions. 

If you manage a small number of users, then you may find changing individual permissions a valid option. However, custom security groups allows you to better track roles and permissions assigned to those roles.  


## Delegate tasks to specific roles

As an administrator or account owner, it's a good idea to delegate administrative tasks to those team members who lead or manage an area. Several of the main built-in roles which come with default permissions and role assignments are:
- Readers 
- Contributors 
- Team Administrator (role) 
- Project Administrators
- Project Collection Administrators  

For a summary of permissions provided to the above roles, see [Default permissions and access](permissions-access.md), or for the Project Collection Administrators, see [Add administrators](set-project-collection-level-permissions.md) 

To delegate tasks to other members within your organization, consider creating a custom security group and then granting permissions as indicated in the following table.  

<table>
<tr>
<td width="25%">**Role**
</td>
<td width="30%">**Tasks to perform**
</td>
<td width="45%">**Permissions to set to Allow**
</td>
</tr>

<tr>
<td>Development lead (Git)</td>
<td> Manage branch policies</td>
<td>Edit policies, Force push, and Manage permissions<br/>See [Set branch permissions](../../repos/git/branch-permissions.md).</td>
</tr>

<tr>
<td>Development lead (TFVC)</td>
<td>Manage repository and branches</td>
<td>Administer labels, Manage branch, and Manage permissions<br/>See [Set repository permissions for Git or TFVC](set-git-tfvc-repository-permissions.md).</td>
</tr>

<tr>
<td>Software architect (Git)</td>
<td>Manage repositories</td>
<td>Create repositories, Force push, and Manage permissions<br/>See [Set repository permissions for Git or TFVC](set-git-tfvc-repository-permissions.md).</td>
</tr>

<tr>
<td>Team administrators</td>
<td>Add area paths for their team<br/>Add shared queries for their team</td>
<td>Create child nodes, Delete this node, Edit this node<br/>See [Create child nodes, modify work items under an area path](set-permissions-access-work-tracking.md#set-permissions-area-path)<br/>
Contribute, Delete, Manage permissions (for a query folder), See [Set query permissions](../../boards/queries/set-query-permissions.md).</td>
</tr>

<tr>
<td>Contributors</td>
<td>Add shared queries under a query folder, Contribute to dashboards</td>
<td>Contribute, Delete (for a query folder), See [Set query permissions](../../boards/queries/set-query-permissions.md)<br/>
View, Edit, and Manage dashboards, See [Set dashboard permissions](../../report/dashboards/dashboard-permissions.md).
</td>
</tr>

<tr>
<td>Project or product manager</td>
<td>Add area paths, iteration paths, and shared queries<br/>
Delete and restore work items, Move work items out of this project, Permanently delete work items</td>
<td>Edit project-level information, See [Add administrators, set permissions at the project-level or project collection-level](set-project-collection-level-permissions.md).</td>
</tr>


<tr>
<td>Process template manager ([Inheritance process model](../settings/work/inheritance-process-model.md))</td>
<td>Work tracking customization </td>
<td>Administer process permissions, Create new projects, Create process, Delete field from account, Delete process, Delete project, Edit process<br/>See [Add administrators, set permissions at the project-level or project collection-level](set-project-collection-level-permissions.md).</td>
</tr>

<tr>
<td>Process template manager ([Hosted XML process model](../settings/work/hosted-xml-process-model.md))</td>
<td>Work tracking customization </td>
<td>Edit collection-level information, See [Add administrators, set permissions at the project-level or project collection-level](set-project-collection-level-permissions.md).</td>
</tr>

<tr>
<td>Project management ([On-premises XML process model](../../reference/on-premises-xml-process-model.md))</td>
<td>Work tracking customization </td>
<td>Edit project-level information, See [Add administrators, set permissions at the project-level or project collection-level](set-project-collection-level-permissions.md).</td>
</tr>

<tr>
<td>Permissions manager</td>
<td>Manage permissions for a project, account, or collection </td>
<td>For a project, Edit project-level information<br/> 
For an account or collection, Edit instance-level (or collection-level) information<br/> To understand the scope of these permissions, see [Permission lookup guide](permissions-lookup-guide.md). To grant permissions, See [Add administrators, set permissions at the project-level or project collection-level](set-project-collection-level-permissions.md).<br/><br/>You can also grant permissions to manage permissions for the following objects:
<ul>
<li>[Manage Git or TFVC repository permissions](set-git-tfvc-repository-permissions.md)</li>
<li>[Manage Git branch permissions](set-git-tfvc-repository-permissions.md)</li>
<li>[Administer build and release permissions](../../pipelines/policies/set-permissions.md)</li>
<li>[Manage Wiki permissions](../../project/wiki/manage-readme-wiki-permissions.md).</li>
</td>
</tr>

</table>

## Restrict access to view or modify objects  

Azure DevOps is designed to enable all valid users to be able to view all objects defined in the system. You can restrict access to resources by setting the permission state to **Deny**. You can set permissions for members that belong to a custom security group or for an individual user. To learn more about how to set these types of permissions, see [Change individual permissions, grant select access to specific functions](change-individual-permissions.md). 


<table>
<tr>
<td width="25%">**Area to restrict**  
</td>
<td width="75%">**Permissions to set to Deny**
</td>
</tr>

<tr>
<td>View or contribute to a repository</td>
<td>View, Contribute<br/>See [Set repository permissions for Git or TFVC](set-git-tfvc-repository-permissions.md).</td>
</tr>

<tr>
<td>View, create, or modify work items within an area path</td>
<td>Edit work items in this node, View work items in this node<br/>See [Set permissions and access for work tracking, Modify work items under an area path](set-permissions-access-work-tracking.md).</td>
</tr>

<tr>
<td>View or update select build and release pipelines</td>
<td>Edit build pipeline, View build pipeline<br/>
Edit release pipeline, View release pipeline<br/>
You set these permissions at the object level. See [Set build and release permissions](../../pipelines/policies/set-permissions.md).</td>
</tr>

<tr>
<td>Edit a dashboard</td>
<td>View dashboards<br/>
See [Set dashboard permissions](../../report/dashboards/dashboard-permissions.md).</td>
</tr>

</table>


## Restrict modification of work items based on a user or group  

For [On-premises XML process model](../../reference/on-premises-xml-process-model.md), you can customize work item types to support these restriction requests: 
- Restrict who can create or modify a work item 
- Restrict who can create specific work item types, such as Epics or Features 

You achieve this by adding a rule to the work item type, usually within the **WORKFLOW** section. To learn more, see [Add a rule to a work item type, Apply or ignore rules based on user or group](../../reference/xml/apply-rule-work-item-field.md#apply-ignore). 

> [!NOTE]   
> These restriction types aren't available for organizations in Azure DevOps and the [Inheritance process model](../settings/work/inheritance-process-model.md). 


 
## Try this next
> [!div class="nextstepaction"]
> [Remove user accounts](remove-users-prohibit-access.md)

## Related articles

- [Default permissions and access](permissions-access.md) 
- [Permission lookup guide](permissions-lookup-guide.md) 
- [About permissions and groups](about-permissions.md)
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