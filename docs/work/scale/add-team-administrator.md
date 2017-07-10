---
title: Add a team administrator | Team Services & TFS 
description: Add a user account to the team administrator role-Visual Studio Team Services and Team Foundation Server   
ms.technology: vs-devops-agile-wit
ms.prod: vs-devops-alm
ms.assetid: 843D5E56-D24E-4DEA-9915-19B1F76E9A56
ms.manager: douge
ms.author: kaelli
ms.date: 06/22/2017
---

# Add a team administrator 

<b>Team Services | TFS 2017 | TFS 2015 | TFS 2013 </b>  

<a id="add-team-admin">  </a>  

It's always a good idea to have more than one person with administration permissions for an area. 

1. If you're not a team administrator, get added as one using this procedure. Ask an administrator for your team project or project collection to add you as an administrator.  

2. Add an administrator from the web portal team admin context.  

	![Open team administration context](_img/add-account-as-team-admin.png)  

	To access this page, choose the ![gear icon](../_img/icons/gear_icon.png) gear icon from your team home page.  

3. Add the account identity.  

	![Add account as a team administrator](_img/add-team-admin-dialog.png) 



## Related notes

<a id="team-room-permissions"> </a>
### Administer team room permissions

You can grant permissions to users to administer a team room.  

1. From the context menu, open permissions for the team room.  

	![Open team room permissions](_img/open-security-team-room.png)  

2. Add an account, set the permissions for Administer to **Allow**, and save the changes.   

	![Add menu on Permissions page for a team room](_img/add-team-admin-dialog.png) 


<a id="team-room-event-permissions">  </a>
### Permissions to open team room events
               
Permissions on team room events are managed by their associated operational area. It is possible for a team member to have permissions to collaborate within a team room, yet not be allowed to view work items, build definitions, or source code that have alerts enabled in the team room. 