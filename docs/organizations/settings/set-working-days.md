---
title: Set working days off
titleSuffix: Azure DevOps
description: Choose the days your team works for capacity planning purposes and when using sprint/scrum methods in  Azure Boards & Team Foundation Server   
ms.technology: devops-agile
ms.prod: devops
ms.assetid: 02771DE7-1AF7-46B1-AE4A-219351C570DC
ms.manager: jillfra
ms.author: kaelli
author: KathrynEE
ms.topic: conceptual
monikerRange: '>= tfs-2013'
ms.date: 01/23/2019
---

# Set working days  

[!INCLUDE [temp](../../boards/_shared/version-vsts-tfs-all-versions.md)]

Each team's sprint planning and tracking tools automatically consider days off when calculating capacity and sprint burndown. Leave those days of the week that your team doesn't work unchecked in your team's Settings, Working days page.  


[!INCLUDE [temp](_shared/prerequisites-team-settings.md)]

::: moniker range=">= tfs-2017"   
<a id="team-services-work-days" />  

## Configure working days 

[Open the Capacity page](../../boards/sprints/set-capacity.md), and then choose the ![ ](../../_img/icons/team-settings-gear-icon.png) gear icon to open the settings dialog. 

![Capacity page, Settings, Working days](../../boards/plans/_img/capacity-planning-open-team-settings-tfs-15.png)  

::: moniker-end  

::: moniker range="tfs-2015"   

<a  id="tfs-2015-work-days" />  

Open your team settings from the **Overview** tab of your team's admin context. Check or uncheck one or more days. Your changes are automatically saved. 

![Team settings page for default working days](../../boards/plans/_img/ALM_DS_WorkingDaysOff.png)  

::: moniker-end 


::: moniker range="tfs-2013" 

To set non-working days, modify the **ProcessConfiguration** file. For details, see [Process configuration XML element reference, Set non-working days](../../reference/xml/process-configuration-xml-element.md#weekend_days).  

::: moniker-end 

## Related articles
- [About Sprints, Scrum and project management](../../boards/sprints/scrum-overview.md) 
- [Scrum and sprint planning tools](../../boards/sprints/scrum-sprint-planning-tools.md)
- [Manage teams and configure team tools](manage-teams.md) 