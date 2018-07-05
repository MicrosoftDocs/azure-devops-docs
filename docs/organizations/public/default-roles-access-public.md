---
title: Default roles & access for public projects
titleSuffix: VSTS Public Project
description: Overview of public project user roles and access
ms.technology: devops-public-projects
ms.prod: devops-alm
ms.assetid: 
ms.manager: douge
ms.author: kaelli
author: KathrynEE
ms.topic: conceptual
ms.date: 07/02/2018
monikerRange: 'vsts'
---


# Default roles & access for public projects

[!INCLUDE [temp](_shared/version-public-projects.md)]  

Public projects enable anyone to view its contents. Access is limited when the user is not signed in. These users are also referred to as anonymous users or public users. In addition, there are users, ones who are signed in to VSTS, but aren't a member of a project. Both of these types of users are granted limited, read-only access as indicated in the following table.  

To contribute to a public project, you must be added as a member of that project and assigned either Stakeholder or Basic access. The access level determines the user interfaces you can access. The security group you're assigned to determines the features you can exercise. For details, see [About access levels](../security/access-levels.md).

You [add project members](../../accounts/add-account-users-from-user-hub.md) in the same way you do for private projects. Be sure you understand what it means to [invite an external user](../../accounts/add-external-user.md) to have access to your project. If you created the project, you're automatically assigned to the Project Administrators group. 


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
<td align="left">**Dashboards**</td>
<td>Read access<sup>1</sup></td>
<td>Partial access</td>
<td>Full access</td>
<td>Read access</td>
<td>Read-Write</td>
<td>Read-Write-Administer</td>
</tr>

<tr>
<td align="left">**Code**</td>
<td>Read access</td>
<td>Full access<sup>2</sup></td>
<td>Full access</td>
<td>Read access</td>
<td>Read-Write</td>
<td>Read-Write-Administer</td>
</tr>
<tr>
<td align="left">**Work**</td>
<td>Read access</td>
<td>Partial access<sup>3</sup></td>
<td>Full access</td>
<td>Read access</td>
<td>Read-Write</td>
<td>Read-Write-Administer</td>
</tr>

<tr>
<td align="left">**Build and Release**</td>
<td>Read access</td>
<td>Full access</td>
<td>Full access</td>
<td>Read access</td>
<td>Read-Write</td>
<td>Read-Write-Administer</td>
</tr>

<tr>
<td align="left">**Test**</td>
<td>No access</td>
<td>No access</td>
<td>Partial access<sup>4</sup></td>
<td>Read access</td>
<td>Read-Write</td>
<td>Read-Write-Administer</td>
</tr>


<tr>
<td align="left">**Wiki**</td>
<td>Read access</td>
<td>Full access</td>
<td>Full access</td>
<td>Read access</td>
<td>Read-Write</td>
<td>Read-Write-Administer</td>
</tr>


<tr>
<td align="left">**Notifications**</td>
<td>No access</td>
<td>Full access</td>
<td>Full access</td>
<td>Read access</td>
<td>Read-Write</td>
<td>Read-Write-Administer</td>
</tr>


<tr>
<td align="left">**Semantic search**</td>
<td>Full access</td>
<td>Full access</td>
<td>Full access</td>
<td>Full access</td>
<td>Full access</td>
<td>Full access</td>
</tr>

<tr>
<td align="left">**Settings**</td>
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
2. Stakeholders have Full access to **Code** features in public projects, but they have no access in private projects.
3. Stakeholders have the partial same access to **Work** in public projects as in private projects. For more information, see [Default permissions and accesss](../security/permissions-access.md#agile-tools-and-work-tracking). 
4. Basic users can view and run tests in the **Test** hub. Basic users need the Test Manager extension to get full access, which includes capability to create test plans and add test cases.


## Related articles 

- [Private-to-public migration checklist](migration-checklist.md)
- [About permissions and groups](../security/about-permissions.md)  
- [About security roles](../security/about-security-roles.md)  
- [About access levels](../security/access-levels.md)


<!--- 

 

<table>
<tr valign="bottom">
<th width="24%">Hub or Settings</th>
<th width="18%">Anonymous user</th>
<th width="18%">Access level: Stakeholder<br/>Security group: Readers</th>
<th width="20%">Access level: Basic<br/>Security group: Contributors</th>
<th width="20%">Owner and <br/>Project Admins</th>
</tr>
<tbody valign="top" align="center">

<tr>
<td align="left">**Dashboards**</td>
<td>Read-only, Limited set of widgets</td>
<td>Supported</td>
<td>Supported</td>
<td>Supported</td>
</tr>

<tr>
<td align="left">**Code**</td>
<td>Read-only</td>
<td>Read-only <sup>1</sup></td>
<td>Full access</td>
<td>Full access</td>
</tr>
<tr>
<td align="left">**Work**</td>
<td>Read-only</td>
<td>Read, Create, Limited edit <sup>2</sup></td>
<td>Full access</td>
<td>Full access</td>
</tr>

<tr>
<td align="left">**Build and Release**</td>
<td>Read-only</td>
<td>Full access</td>
<td>Full access</td>
<td>Full access</td>
</tr>

<tr>
<td align="left">**Test**</td>
<td>Read-only</td>
<td>No access</td>
<td>Full access</td>
<td>Full access</td>
</tr>


<tr>
<td align="left">**Wiki**</td>
<td>Read-only</td>
<td>Read-only</td>
<td>Full access</td>
<td>Full access</td>
</tr>


<tr>
<td align="left">**Notifications**</td>
<td>Not supported</td>
<td>Supported</td>
<td>Supported</td>
<td>Supported</td>
</tr>


<tr>
<td align="left">**Semantic search**</td>
<td>Full access</td>
<td>Full access</td>
<td>Full access</td>
<td>Full access</td>
</tr>

<tr>
<td align="left">**Settings**
</td>
<td>No access</td>
<td>Full access, Read-only <sup>3</sup></td>
<td>Full access, Read-only <sup>3</sup></td>
<td>Full access, Read-write</td>
</tr>

</tbody>
</table>

**Notes:**
1. Stakeholders have full read-only access to **Code** features in public projects, while they have no access in private projects.
2. Stakeholders have the same access in public projects as in private projects. For more information, see [Default permissions and accesss](../security/permissions-access.md#agile-tools-and-work-tracking). 
3. Stakeholder and Basic access levels provide access to the Settings context and pages. Readers and Contributors security groups allow read-only permissions. 



-->