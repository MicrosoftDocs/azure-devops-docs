---
title: Manage issues or impediments 
titleSuffix: VSTS & TFS 
ms.global_help.title: Manage issues or impediments 
ms.global_help.keywords: ms.vss-work-web.work-items-hub, 6
description: Add work items to track problems, risks, or other issues that may impeded your plans or schedule - Visual Studio Team Services (VSTS) and Team Foundation 
ms.technology: devops-agile
ms.prod: devops
ms.assetid: 5B126205-599D-40EB-BC95-23CF1444EF2A
ms.manager: douge
ms.author: kaelli
author: KathrynEE
ms.topic: get-started-article
ms.date: 03/20/2018
---

# Manage issues or impediments 

[!INCLUDE [temp](../_shared/version-vsts-tfs-all-versions.md)]

<a name="manage-impediments"></a>

If you have known issues you want to track, you can do so by defining an impediment (Scrum) or issue (Agile or CMMI). Impediments and issues represent unplanned activities. Resolving them requires more work beyond what's tracked for actual requirements. Using the impediment work item type helps you track and manage these issues until you can resolve and close them. 

Don't confuse impediments with bugs. You track impediments that may cause problems with delivering one or more requirements. For example, you may have to address feature ambiguity, personnel or resource issues, problems with environments, or other risks that impact scope, quality, or schedule. Other issues that deserve tracking are decisions that require several stakeholders or product teams to weigh in on.

In this topic you'll learn: 

>[!div class="checklist"]      
> * How to capture issues or impediments as a work item   
 
[!INCLUDE [temp](../_shared/prerequisites-work-items.md)]   

## Add an issue or impediment 

[!INCLUDE [temp](../_shared/image-differences-with-wits.md)]   

::: moniker range=">= tfs-2017"
<!---#### VSTS, TFS 2018, TFS 2017 (new form enabled) --> 
From **Work**, choose Impediment from the New Work Item list of options. Click the ![pin icon](../_img/icons/pin-icon.png) pin icon to have it show up within **Work** drop down menu. 

<img src="_img/cyb-new-work-item-impediment.png" alt="VSTS, TFS 2017 - Add an impediment" style="border: 1px solid #C3C3C3;" />  
  
<!--- Or, from the Queries page, you can add a new work item.  

<img src="_img/cyb-new-work-item-impediment-form.png" alt="Create a new impediment" style="border: 1px solid #C3C3C3;" />  
-->

::: moniker-end

::: moniker range=">= tfs-2013 <= tfs-2015"
<!---#### TFS 2015 | TFS 2013 (old web form) --> 

From the Queries page, choose Impediment from the **New** drop down menu.

<img src="_img/ALM_CB_CreateImpediments.png" alt="TFS 2015, TFS 2013 - Add an impediment" style="border: 1px solid #C3C3C3;" />  

::: moniker-end


<a id="customize"> </a>
## Customize issues tracking

[!INCLUDE [temp](../_shared/customize-work-tracking.md)] 
::: moniker range="vsts"
Impediments and issues don't appear on your backlog. Instead, you track them using [queries](../track/using-queries.md). If you want them to appear on your backlog, or you want to track other work item types on your backlog, see [Customize your backlogs or boards](../../organizations/settings/work/customize-process-backlogs-boards.md).
::: moniker-end
::: moniker range=">= tfs-2013 <= tfs-2018"
Impediments and issues don't appear on your backlog. Instead, you track them using [queries](../track/using-queries.md). If you want them to appear on your backlog, or you want to track other work item types on your backlog, see [Add a work item type to a backlog and board](../customize/add-wits-to-backlogs-and-boards.md).
::: moniker-end

## Related articles 
- [Add work items](add-work-items.md)
- [Work item form controls](../work-items/work-item-form-controls.md)
- [Manage bugs or code defects](manage-bugs.md)
- [Create your backlog](create-your-backlog.md) 


