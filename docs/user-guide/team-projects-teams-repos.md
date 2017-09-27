---
title: Team projects, teams, and repositories | VSTS & TFS
description: Understand the key concepts that support the hosted cloud offering of Visual Studio Team Services (VSTS) and Team Foundation Server (TFS)  
ms.technology: vs-devops-overview 
ms.prod: vs-devops-alm
ms.assetid: 29B4E51E-F2C6-4159-89EC-61FFCB9A478F
ms.manager: douge
ms.author: kaelli
ms.date: 07/14/2017
---

# Team projects, teams, and repositories 
<b>VSTS | TFS 2017 | TFS 2015 | TFS 2013</b> 

NEW - BEING WRITTEN 

## What is a team project? 

## What are teams and how are they used? 


## What is a repository? 


<a id="collection-project-team-structure">  </a>
### Collection-project-team structure
When you connect to VSTS or an on-premises TFS, you connect to an account or team project collection. Within that collection, one or more team projects may be defined. At a minimum, at least one team project must be created in order to use the system.

When you create your team project, a team of the same name is automatically created. For small teams, this is sufficient.  

However, for enterprise-level organizations, it may be necessary to scale up, to create additional teams and/or team projects. These can be created within the single account or collection.

<table width="100%">
<tbody valign="top">
<tr>
<td width="40%">
**Single team project, team defined within an account/collection**  
![Single collection-project-team conceptual image](_img/web-portal-account-project-team-concept.png)  
</td>

<td width="60%">
**Multiple team projects and teams defined within an account/collection**   
![Scaled collection-project-team conceptual image](_img/web-portal-account-project-team-scale-concept.png)  

</td>
</tr>
</tbody>
</table>

The collection-project-team structure provides teams a high-level of autonomy to configure their tools in ways that work for them. It also supports administrative tasks to occur at the appropriate level.

To learn more about adding teams and the features that support team autonomy, see [Multiple teams](../work/scale/multiple-teams.md) and [Manage team assets](../work/scale/manage-team-assets.md).
