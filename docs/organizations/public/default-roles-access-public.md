---
title: Default roles & access 
titleSuffix: Azure DevOps Services Public Project
description: Overview of public project user roles and access
ms.technology: devops-public-projects
ms.prod: devops
ms.assetid: 
ms.manager: mijacobs
ms.author: chcomley
author: chcomley
ms.topic: conceptual
ms.date: 07/02/2018
monikerRange: 'azure-devops'
---


# Default roles & access for public projects

[!INCLUDE [temp](_shared/version-public-projects.md)]  

Public projects enable anyone to view its contents. Access is limited when the user is not signed in. These users are also referred to as anonymous users or public users. In addition, there are users, ones who are signed in to Azure DevOps, but aren't a member of a project. Both of these types of users are granted limited, read-only access as indicated in the following table.  

To contribute to a public project, you must be added as a member of that project and assigned either Stakeholder, Basic, or Basic + Test Plans access. The access level determines the user interfaces you can access. The security group you're assigned to determines the features you can exercise. For details, see [About access levels](../security/access-levels.md).

You [add project members](../accounts/add-organization-users.md) in the same way you do for private projects. Be sure you understand what it means to [invite an external user](../accounts/add-external-user.md) to have access to your project. If you created the project, you're automatically assigned to the Project Administrators group. 


<table>
<tr valign="bottom">
<th width="14%">Hub or Settings</th>
<th width="15%">Non-member access</th>
<th width="15%">Stakeholder access</th>
<th width="14%">Basic access</th>
<th width="14%">Readers</th>
<th width="16%">Contributors</th>
<th width="18%">Project Admins</th>
</tr>
<tbody valign="top" align="center">

<tr>
<td align="left"><strong>Dashboards</strong></td>
<td>Read access<sup>1</sup></td>
<td>Partial access</td>
<td>Full access</td>
<td>Read access</td>
<td>Read-Write</td>
<td>Read-Write-Administer</td>
</tr>

<tr>
<td align="left"><strong>Wiki</strong></td>
<td>Read access</td>
<td>Full access</td>
<td>Full access</td>
<td>Read access</td>
<td>Read-Write</td>
<td>Read-Write-Administer</td>
</tr>

<tr>
<td align="left"><strong>Boards (Work)</strong></td>
<td>Read access</td>
<td>Partial access<sup>3</sup></td>
<td>Full access</td>
<td>Read access</td>
<td>Read-Write</td>
<td>Read-Write-Administer</td>
</tr>
<tr>
<td align="left"><strong>Repos (Code)</strong></td>
<td>Read access</td>
<td>Full access<sup>2</sup></td>
<td>Full access</td>
<td>Read access</td>
<td>Read-Write</td>
<td>Read-Write-Administer</td>
</tr>


<tr>
<td align="left"><strong>Pipelines (Build and Release)</strong></td>
<td>Read access</td>
<td>Full access</td>
<td>Full access</td>
<td>Read access</td>
<td>Read-Write</td>
<td>Read-Write-Administer</td>
</tr>

<tr>
<td align="left"><strong>Test Plans</strong></td>
<td>No access</td>
<td>No access</td>
<td>Partial access<sup>4</sup></td>
<td>Read access</td>
<td>Read-Write</td>
<td>Read-Write-Administer</td>
</tr>



<tr>
<td align="left"><strong>Notifications</strong></td>
<td>No access</td>
<td>Full access</td>
<td>Full access</td>
<td>Read access</td>
<td>Read-Write</td>
<td>Read-Write-Administer</td>
</tr>


<tr>
<td align="left"><strong>Semantic search</strong></td>
<td>Full access</td>
<td>Full access</td>
<td>Full access</td>
<td>Full access</td>
<td>Full access</td>
<td>Full access</td>
</tr>

<tr>
<td align="left"><strong>Settings</strong></td>
<td>No access</td>
<td>Full access</td>
<td>Full access</td>
<td>Read access</td>
<td>Read access</td>
<td>Read-Write-Administer</td>
</tr>

</tbody>
</table>

**Notes:**
1. Several widgets aren't available to non-members.
2. Stakeholders have full access to **Repos** or **Code** features in public projects, but they have no access in private projects.
3. Stakeholders have full access to **Boards** or **Work** in public projects, but they have partial access in private projects. For more information, see [About access levels, Stakeholder access](../security/access-levels.md#stakeholder-access). 
4. Basic + Test Plans users can view and run tests from **Test Plans** or **Test**. Basic users need to upgrade their access level to Basic + Test Plans to get full access, which includes capability to create test plans and add test cases.


## Pipelines/Build and Release

From the web portal, you can set permissions for all or individual build pipelines, release pipelines, task groups, or variable groups. See [Set build and release permissions](../../pipelines/policies/set-permissions.md). 

> [!NOTE]   
>  When the **Free access to Pipelines for Stakeholders** preview feature is enabled for the organization, Stakeholders get access to all **Build and Release** features. This is indicated by the ![](/vsts/_img/icons/preview.png) preview icon shown in the following table. Without this feature enabled, Stakeholders can only view and approve releases. To learn more, see [Provide Stakeholders access to edit build and release pipelines](../security/provide-stakeholder-pipeline-access.md).

[!INCLUDE [temp](../security/_shared/pipelines.md)]

## Related articles 

- [Private-to-public migration checklist](migration-checklist.md)
- [About permissions and groups](../security/about-permissions.md)  
- [About security roles](../security/about-security-roles.md)  
- [About access levels](../security/access-levels.md)

 