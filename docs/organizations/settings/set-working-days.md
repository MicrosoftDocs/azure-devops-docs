---
title: Set working days off
titleSuffix: Azure DevOps
description: Choose the days your team works for capacity planning purposes and when using sprint/scrum methods in  Azure Boards & Team Foundation Server   
ms.technology: devops-agile
ms.prod: devops
ms.assetid: 02771DE7-1AF7-46B1-AE4A-219351C570DC
ms.manager: mijacobs
ms.author: kaelli
author: KathrynEE
ms.topic: conceptual
monikerRange: '>= tfs-2013'
ms.date: 11/04/2019
---

# Set working days  

[!INCLUDE [temp](../../boards/includes/version-vsts-tfs-all-versions.md)]

Each team's sprint planning and tracking tools automatically consider days off when calculating capacity and sprint burndown. Leave those days of the week that your team doesn't work unchecked in your team's Settings, Working days page.  


[!INCLUDE [temp](includes/prerequisites-team-settings.md)]

  
<a id="team-services-work-days" />  

## Configure working days

::: moniker range="azure-devops"

> [!NOTE]   
> To enable the new user interface for the Project Permissions Settings Page, see [Enable preview features](../../project/navigation/preview-features.md).

#### [Preview page](#tab/preview-page) 

[Open the Capacity page](../../boards/sprints/set-capacity.md), and then choose the ![ ](../../media/icons/team-settings-gear-icon.png) gear icon to open the settings dialog. 

![Capacity page, Settings, Working days](media/capacity-planning-open-team-settings-preview.png)  

#### [Current page](#tab/current-page) 

[Open the Capacity page](../../boards/sprints/set-capacity.md), and then choose the ![ ](../../media/icons/team-settings-gear-icon.png) gear icon to open the settings dialog. 

![Capacity page, Settings, Working days](media/capacity-planning-open-team-settings-new-nav.png)  

::: moniker-end

* * *

::: moniker range=">= tfs-2017 < azure-devops" 

[Open the Capacity page](../../boards/sprints/set-capacity.md), and then choose the ![ ](../../media/icons/team-settings-gear-icon.png) gear icon to open the settings dialog. 

![Capacity page, Settings, Working days](../../boards/plans/media/capacity-planning-open-team-settings-tfs-15.png)  

::: moniker-end

::: moniker range="tfs-2015"   

<a  id="tfs-2015-work-days" />  

Open your team settings from the **Overview** tab of your team's admin context. Check or uncheck one or more days. Your changes are automatically saved. 

![Team settings page for default working days](../../boards/plans/media/ALM_DS_WorkingDaysOff.png)  

::: moniker-end


::: moniker range="tfs-2013" 

To set non-working days, modify the **ProcessConfiguration** file. For details, see [Process configuration XML element reference, Set non-working days](../../reference/xml/process-configuration-xml-element.md#weekend_days).  

::: moniker-end

## Related articles
- [About Sprints, Scrum and project management](../../boards/sprints/scrum-overview.md) 
- [Scrum and sprint planning tools](../../boards/sprints/scrum-sprint-planning-tools.md)
- [Manage teams and configure team tools](manage-teams.md) 