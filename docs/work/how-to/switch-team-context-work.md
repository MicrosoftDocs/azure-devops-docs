---
title: Switch team project or team context | VSTS & TFS
description: Change the focus of your view to another team project or team Visual Studio Team Services (VSTS) and Team Foundation Server (TFS)  
ms.technology: vs-devops-agile-wit
ms.prod: vs-devops-alm
ms.assetid: 2C0977AB-91A4-477C-870E-FA5540E76F4B
ms.manager: douge
ms.author: kaelli
ms.topic: get-started-article     
ms.date: 06/01/2017
---
<a id="switch-team-context">  </a>

# Switch team project or team focus   

<b>VSTS | TFS 2017 | TFS 2015 | TFS 2013</b> 

Several features depend on the team project or team that you have selected. For example, dashboards, backlogs, and board views will change depending on the context selected. 

For example, when you add a work item, the system references the default area and iteration paths defined for the team context. Work items you add from the team dashboard (new work item widget) and queries page are assigned the team default iteration. Work items you add from a team backlog or board, are assigned the team default backlog iteration. To change team defaults, see [Set team defaults](../scale/set-team-defaults.md).  

You navigate to your team context from the top navigation bar. The method changes slightly depending on the platform/version you work from.     

## View teams   

To view a list of teams defined for a team project, open the admin context for the team project, and choose **Overview**.  

>[!NOTE]  
>**Feature availability**: The **Change process** link is only supported for team projects that use the [Inheritance process model](../customize/inheritance-process-model.md).  

<img src="../scale/_img/multiple-teams-view-teams.png" alt="Web portal, admin context, team project, Overview page" style="border: 2px solid #C3C3C3;" /> 

## Switch to a different team 

>[!NOTE]  
>**Feature availability**: The Account Landing Page feature is in preview mode for VSTS and enabled for all users from web portal for TFS 2017.1 and later versions. To learn more about this feature, see [Work effectively from your account hub](/vsts/connect/account-home-pages). To enable or disable the feature, see [Enable preview features](/vsts/collaborate/preview-features).   

 


### Team Services
<a id="switch-context-team-services" />
 
You can switch your team focus to a team project or team you've recently viewed from the team project/team drop-down menu. If you don't see the team or team project you want, click **Browse&hellip;** to [browse all team projects and teams](/vsts/connect/account-home-pages). To access your [account hub](/vsts/connect/account-home-pages), click the ![VSTS icon](../../_shared/_img/switch-team-focus-account-project-page-icon.png) VSTS icon. If you haven't yet enabled the Account Landing Page, you'll be taken to the account home page. 

To go directly to the [project vision and status page](/vsts/collaborate/project-vision-status), choose the project home icon from the drop-down menu, for example, ![project home icon](../../_shared/_img/work-web-portal-home-page-icon.png).

<img src="../../_shared/_img/work-web-portal-ts-switch-team-focus.png" alt="Choose another team from the team project menu" style="border: 2px solid #C3C3C3;" /> 

### TFS 2017.1 
<a id="switch-context-tfs-2017-1" /> 

To switch your team focus to a team project or team you've recently viewed, hover over the ![VSTS icon](_img/switch-team-focus-account-project-page-icon.png) VSTS icon and choose from the drop-down menu of options. If you don't see the team or team project you want, choose **Browse&hellip;** to [browse all team projects and teams](/vsts/connect/account-home-pages). Your selection will open the [project vision and status page](/vsts/collaborate/project-vision-status) for the team project.

To access your [account hub](/vsts/connect/account-home-pages), click the ![VSTS icon](_img/switch-team-focus-account-project-page-icon.png) VSTS icon. If you haven't yet enabled the Account Landing Page, you'll be taken to the account home page.  

To go directly to the [project vision and status page](/vsts/collaborate/project-vision-status), choose the project home icon from the drop-down menu, for example, ![project home icon](../../_shared/_img/work-web-portal-home-page-icon.png).

<img src="../../_shared/_img/work-web-portal-tfs-2017-1-switch-team-focus.png" alt="Choose another team from the team project menu" style="border: 2px solid #C3C3C3;" /> 


### TFS 2017
<a id="tfs-2017-switch-context" /> 

Open the team project/team drop-down menu and select the team project/team that you've recently visited. If you don't see the team or team project you want, choose **Browse all** to browse all team projects and teams. 

<img src="../_shared/_img/switch-context-tfs-2017.png" alt="Choose another team from the team project menu" style="border: 2px solid #C3C3C3;" /> 


### TFS 2015
<a id="tfs-2015-switch-context" />

Open the team project/team drop-down menu and select the team project/team that you've recently visited. If you don't see the team or team project you want, choose **Browse all** to browse all team projects and teams. 

<img src="../_shared/_img/switch-team-project-2.png" alt="Choose another team from the team project menu" style="border: 2px solid #C3C3C3;" /> 


## Switch to a team project or team from the account hub 
If you work in VSTS and TFS 2017.1, you can use your account hub to view and quickly navigate to teams, team projects, branches, work items, pull requests and other objects that are relevant to you. For details, see [Work effectively from your account hub](../../connect/account-home-pages.md).  



## Related notes
- [Work effectively from your account hub](../../connect/account-home-pages.md)
- [Add teams and team members](../scale/multiple-teams.md)