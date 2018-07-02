---
title: Change a project from a Hosted XML process to an inherited process
titleSuffix: VSTS     
description: Upgrade a project that uses a Hosted XML process model to an inherited process in Visual Studio Team Services
ms.technology: devops-agile
ms.prod: devops
ms.manager: douge
ms.author: kaelliauthor: KathrynEE
ms.topic: conceptual
monikerRange: 'vsts'
robots: NOINDEX, NOFOLLOW
ms.date: 05/30/2018
---

# Change a project from Hosted XML to an inherited process 

[!INCLUDE [temp](../../../_shared/version-vsts-only.md)]

> [!NOTE]  
> This feature is currently in private preview. If you are interested in changing your processes from Hosted XML to Inherited, please email us at [vstsprivatepreview@microsoft.com](mailto:vstsprivatepreview@microsoft.com) to get the feature turned on in your account(s).

Once you've [upgraded your Hosted XML process to an inherited process](upgrade-hosted-to-inherited.md), you can change the project(s) from the Hosted XML process to the inherited process. You change a project from a Hosted XML process to its derived inherited process to start customizing the process through the user interface.  

> [!CAUTION] 
> Choosing to upgrade a team project from a Hosted XML process model to an inherited process is an irreversible operation. Before you change the process of an existing project from Hosted XML to the upgraded inherited process, review [Supported upgrade operations when moving from Hosted XML process to inherited process](upgrade-support-hosted-to-inherited.md) to understand which customizations are preserved and which are not before you change the process of a project from Hosted XML to an inherited process. Also, [create a test project](upgrade-hosted-to-inherited.md#verify) to verify the customizations preserved or reapplied to a process.

## Prerequisites 
- You must be a member of the Project Administrators group for the project you want to change, or a member of the Project Collection Administrators group.

<a id="open-process-wit">  </a>
## Open Settings>Process hub

You create, manage, and make customizations to processes from the **Settings>Process** hub. 

0. To open the admin context from the user context, choose the ![](/vsts/_img/icons/gear_icon.png) settings icon and choose **Account settings**. 
	
	> [!div class="mx-imgBorder"]  
	> ![VSTS web portal, open Account Settings](_img/process/open-account-settings.png)   

0. Choose **Process**. 
   
	> [!div class="mx-imgBorder"]  
	> ![Account Settings context, Process page](_img/process/open-process-page.png) 


<a id="change-inherited-process"></a>
## Change the project process to an inherited process 

After you've verified your customizations, you can now apply the  inherited process to your existing project. 

0. From the Process hub, choose the inherited process you created, and then choose the **Projects** page. 

	> [!div class="mx-imgBorder"]  
	> ![Open inherited process, Projects page](_img/migration/open-processes-projects-page.png)

0. Open the &hellip; context menu for the project and choose the **Change process**&hellip; option. 

	Here we open the menu for the Fabrikam Test project. 

	> [!div class="mx-imgBorder"]  
	> ![Fabrikam Test project context menu, Choose Change process](_img/migration/change-project-process-to-inherited.png)
	
0. Choose the inherited process that you created. The system lists only those processes that are valid for the selected project.	
  
	> [!div class="mx-imgBorder"]  
	> ![Change process to an inherited process dialog](_img/migration/change-process-dialog.png) 

0. Choose **Ok**. 


## Related articles
- [Supported upgrade operations when moving from Hosted XML process to an inherited process](upgrade-support-hosted-to-inherited.md)
- [Upgrade a Hosted XML process to an Inheritance process](upgrade-hosted-to-inherited.md) 

