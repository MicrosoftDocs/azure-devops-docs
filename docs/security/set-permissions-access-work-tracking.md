---
title: Set permissions and access for tracking  | VSTS & TFS
description: How to guide for setting permissions and access levels to support work tracking tasks (VSTS and Team Foundation Server)
ms.technology: vs-devops-wit
ms.prod: vs-devops-alm
ms.assetid: 5AD0BF62-C91E-46DD-8C1A-C8D1F8F8D05F
ms.manager: douge
ms.author: kaelli
ms.date: 08/02/2017
---

# Set permissions and access for work tracking   

[!INCLUDE [temp](../_shared/version-vsts-tfs-all-versions.md)]

You can grant or restrict access to various work tracking features. You do this by granting users or groups specific permissions for an object, team project, or collection. Or, when you assign a user as a team administrator, they have permissions to manage all assets for the specific team. Add users to the Contributors group to provide access to most features as listed in [Permissions and access for work tracking](permissions-access-work-tracking.md). 

> [!div class="mx-tdBreakAll"]  
> | Role or permission level | Functional areas set  |
> |-----------------------|-----------------------------------|
> |**Team administrator role** | - Configure team settings<br/>- Define and edit work item templates<br/>- Add team members and team administrators|
> |**Object-level permissions** |- Modify work items under an area path<br/>- Define or modify queries or query folders<br/>- Create and edit nodes under an area path or iteration path | 
> |**Project-level permissions** |- Add work item tags<br/>- Delete and restore work items<br/>- Move work items out of a team project<br/>- Permanently delete work items or test artifacts<br/>- Edit shared work item queries<br/>- Add teams and team administrators<br/>- Create and manage area and iteration paths<br/>- Edit project-level permissions<br/>- Customize a team project (On-premises XML  or Hosted process models) | 
> |**Project collection-level permissions** | - Create, delete, or edit a process (Inheritance process model, VSTS only)<br/>- Edit collection level permissions | 


<a id="set-permissions-area-path" >  </a> 

## Edit or modify work items    

Permissions you set on an area path allow you to permit or restrict access to edit or modify work items, test cases, or test plans assigned to those areas. You can restrict access to users or groups. You can also set permissions for who can add or modify areas or iterations for the team project.  

1. From the web portal admin context, open the **Work>Areas** page, and then click the context menu for the node you want to manage.  
	
	<img src="_img/set-permissions-area-node-open.png" alt="Open the security dialog" style="border: 2px solid #C3C3C3;" /> 
<!---
	<img src="../work/customize/_img/ALM_CW_OpenSecurityDialog.png" alt="Open the security dialog" style="border: 2px solid #C3C3C3;" /> -->

2. Select the group or team member, and then change the permission settings. If you don't see the group you want, try adding it first. 

	For example, here we've added the Disallow Access Group, and disallowed members of this group the ability to view, modify, or edit work items in the Customer Service area path.

	<img src="_img/set-permissions-area-node-dialog.png" alt="Permissions for an area node" style="border: 2px solid #C3C3C3;" />

<!--- <img src=".../work/customize/_img/ALM_CW_PermisionsForArea.png" alt="Permissions for an area node" style="border: 2px solid #C3C3C3;" />--> 
	
You can specify two explicit authorization states for permissions: **Deny** and **Allow**. In addition, permissions can exist in one of three additional states.  To learn more, see [About permissions and groups](about-permissions.md). 


## Work item queries

You can specify who can add or edit query folders or queries at the object-level. See [Set permissions on a shared query or query folder](../security/set-permissions-access-work-tracking.md) to restrict who can modify the query or queries within a folder.

<a id="move-delete-permissions"></a>
## Move or permanently delete work items 

By default, Project Administrators and Contributors can change the work item type and delete work items by moving them to the Recycle bin. Only Project Administrators can permanently delete work items and test artifacts. Project admins can grant permissions to other team members as needed. 

For example, as a project admin you can grant a user, team group, or other group you've created to have these permissions. Open the Security page for the team project and choose the user or group you want to grant permissions. (To learn how to access the Project level Security page, see [Set permissions at the project-level or project collection-level](set-project-collection-level-permissions.md).)

In this example, we grant members assigned to the team administrator role, who belong to the Team Admin groups, permissions to move work items to another team project and to permanently delete work items.     

<img src="_img/set-permissions-project-level-dialog.png" alt="Set Team Admin permissions" style="border: 2px solid #C3C3C3;" />



<a id="delete-test-permissions"></a>
## Delete test artifacts
  
In addition to the project-level permissions set in the previous section, team members need permissions to manage test artifacts which are set for an area path. 

Open the Security page for the area path and choose the user or group you want to grant permissions.

<img src="../work/backlogs/_img/delete-test-artifacts-open-area-permissions.png" alt="Open Area path permissions for the team project" style="border: 2px solid #C3C3C3;" />

Set the permissions for **Manage test plans** and **Manage test suites** to **Allow**.  

<img src="../work/backlogs/_img/delete-test-artifacts-area-path-permissions.png" alt="Set Area path permissions for the team project" style="border: 2px solid #C3C3C3;" />

To have full access to the Test feature set, your [access level must be set to Advanced](change-access-levels.md). Users with Basic access and with permissions to permanently delete work items and manage test artifacts can only delete orphaned test cases. 


## Work item queries

You can specify who can add or edit query folders or queries at the object-level. See [Set permissions on a shared query or query folder](../security/set-permissions-access-work-tracking.md) to restrict who can modify the query or queries within a folder.


<a id="configure-plan-permissions">  </a>
<a id="plan-permissions">  </a>
## Manage or edit Delivery Plans 

The creator of a plan as well as all members of the Project Collection Administrators and Project Administrators groups have permissions to edit, manage, and delete plans.  

Plans are an object within a team project. You manage plan permissions for each plan similar to the way you [manage permissions for shared queries or query folders](../work/track/set-query-permissions.md). 
 
0. To grant permissions to a group or user to manage or edit a specific plan, click the  ![actions icon](../_img/icons/actions-icon.png) actions icon to open the Security dialog for the plan.  

	<img src="_img/review-tp-open-security-dialog.png" alt="Open the Permissions dialog for a plan" style="border: 2px solid #C3C3C3;" />    

0. Add a user or group who you want to grant permissions to or restrict access. By default, non-administrators can't delete or edit a plan that you create. 

0. With the user or group selected, set the permission you want them to have to Allow. 

	For example, here we grant permission to Raisa to edit the plan.

	<img src="_img/review-tp-security-dialog.png" alt="Permissions dialog for a query" style="border: 2px solid #C3C3C3;" />   


## Additional options for restricting access to work items   

> [!NOTE]   
> You can use one or more of the following options with the Hosted XML or On-premises XML process models. To learn more about process models, see [Customize work tracking experience](../work/customize/customize-work.md).  

You can restrict access to work tracking objects in one of two ways:

-   By [adding WITs to the Hidden Categories group](../work/customize/reference/use-categories-to-group-work-item-types.md), you can prevent the majority of project contributors from creating them. You [can create a hyperlink to a template](../work/backlogs/work-item-template.md) that opens the work item form and share that link with those team members who you do want to create them. 
-   [Set a condition field rule](../work/customize/reference/apply-rule-work-item-field.md), [a condition-based field rule](../work/customize/reference/assign-conditional-based-values-and-rules.md) or a combination of the two that applies to a group. You can restrict changes from being made to a field by specifying a qualifying rule and making it apply for a specific group. Conditional rules can include **CANNOTLOSEVALUE**, **EMPTY**, **FROZEN**, **NOTSAMEAS**, **READONLY**, and **REQUIRED** elements. 
-   By adding [a field rule to the workflow](../work/customize/reference/apply-rule-work-item-field.md) for the System.CreatedBy field, you can effectively restrict a group of users from creating a work item of a specific type. As the following example shows, the user who creates the work item must belong to the `Allowed Group` in order to save the work item.

        <TRANSITION from=" " to="New">
           <FIELDS>
             <FIELD refname="System.CreatedBy">
                <VALIDUSER for="Allowed Group" not="Disallowed Group" />
             </FIELD>
           </FIELDS>
        </TRANSITION> 

For more information about how to customize WITs, 
see [Modify or add a custom work item type (WIT)](../work/customize/add-modify-wit.md).



## Related notes 

*	[Set permissions on queries and query folders](../work/track/set-query-permissions.md)  
*	[Permissions and access for work tracking](permissions-access-work-tracking.md) 
*	[Permissions and groups reference](permissions.md) 
