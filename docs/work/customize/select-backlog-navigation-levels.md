---
title: Select backlog navigation levels
titleSuffix: VSTS & TFS 
description: Choose which backlog and portfolio backlogs are active for your team in Visual Studio Team Services & Team Foundation Server 
ms.technology: devops-agile
ms.prod: devops
ms.assetid: BB1E56B6-988A-4D0A-AA56-560F2DF681DD  
ms.manager: douge
ms.author: kaelliauthor: KathrynEE
ms.topic: conceptual
monikerRange: '>= tfs-2015'
ms.date: 03/20/2018
---

# Select backlog navigation levels for your team

**VSTS | TFS 2018 | TFS 2017 | TFS 2015**

Each team can determine the backlog levels that they use. For example, feature teams may want to only focus on their product backlog, while a management team may choose to only show feature and epics (the two default portfolio backlogs). You configure which backlog levels appear from your team settings dialog. 

::: moniker range="vsts" 
If you want additional portfolio backlogs, see the following topics based on the process model you use: 
- **Inheritance**: [Customize your backlogs or boards for a process](../../organizations/settings/work/customize-process-backlogs-boards.md)  
- **Hosted XML**: [Add portfolio backlogs](add-portfolio-backlogs.md).  

For an overview of process models, see [Customize your work tracking experience](customize-work.md).

::: moniker-end

::: moniker range="tfs-2015 <= tfs-2018" 
If you want additional portfolio backlogs, see [Add portfolio backlogs](add-portfolio-backlogs.md).  
::: moniker-end

> [!NOTE]    
> **Feature availability**: The team setting for choosing which backlog levels are available is available from TFS 2015 and later versions. For TFS 2013, the Feature portfolio backlog level is enabled for all teams.  


<a id="activate-backlogs"></a>

## Set your team's preferences for backlog levels

Because this setting affects all team members' view of the team backlogs and boards, you must be a team administrator to change the setting. Changing the setting is disabled if you're not a team administrator. Go [here to get added as a team administrator](../scale/add-team-administrator.md).
 	

::: moniker range="vsts || >= tfs-2018" 
1. From your team's backlog page, click the ![gear icon](../_img/icons/team-settings-gear-icon.png) (gear icon) to open the common configuration team settings.

	![Backlog board, open team settings](../backlogs/_img/organize-backlog-open-ccdialog.png) 

2. Click the **Backlogs** tab and check the boxes of those backlog levels you want your team to manage. 

	<img src="_img/select-nav-backlog-levels-config-ts.png" alt="VSTS, web portal, team settings dialog, Backlogs tab" style="border: 2px solid #C3C3C3;" />

3. To see the changes, open or refresh your team's backlog web page. 

::: moniker-end
::: moniker range="tfs-2017" 

1. From your team's backlog page, click the ![gear icon](../_img/icons/team-settings-gear-icon.png) (gear icon) to open the common configuration team settings. 

	![Backlog board, open team settings](../backlogs/_img/organize-backlog-open-ccdialog.png)  

2. Click the **Backlogs** tab and check the boxes of those backlog levels you want your team to manage. 

	<img src="_img/select-nav-backlog-levels-config-tfs-2017.png" alt="TFS 2017, web portal, team settings dialog, Working with bugs tab" style="border: 2px solid #C3C3C3;" />

3. To see the changes, open or refresh your team's backlog web page. 
::: moniker-end
::: moniker range="tfs-2015" 

Requires TFS 2015.1 or later version. 

1. From your web portal, click the ![gear icon](../_img/icons/team-settings-gear-icon.png), (gear icon) to open the administration page. 

	![Gear icon provides access to admin pages](../_img/icons/ALM_OpenAdminContext.png)  

2. From the Overview tab, choose the team whose settings you want to configure, and then click **Settings**. 

	![Backlog board, open team settings](../backlogs/_img/organize-backlog-open-ccdialog.png)  

3. Click the **Backlogs** tab and check the boxes of those backlog levels you want your team to manage. 

	<img src="../backlogs/_img/ALM_OB_BacklogSettings.png" alt="TFS 2015.1 or later, web portal, team settings dialog, Backlogs tab" style="border: 1px solid #C3C3C3;" /> 

4. To see the changes, open or refresh your team's backlog web page. 
 ::: moniker-end

## Related articles

- [Get started with Agile tools to plan and track work](../backlogs/overview.md)
- [Backlogs, boards, and plans](../backlogs/backlogs-boards-plans.md)
- [Create your backlog](../backlogs/create-your-backlog.md)  
- [Define features and epics](../backlogs/define-features-epics.md)
- [Organize your backlog](../backlogs/organize-backlog.md)   
- [Portfolio management, setup a team hierarchy](../scale/portfolio-management.md)  
- [Work with multi-team ownership of backlog items](../backlogs/work-multi-team-ownership-backlogs.md)
- [Visibility across teams](../scale/visibility-across-teams.md)  

