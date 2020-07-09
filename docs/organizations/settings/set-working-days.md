---
title: Set working days off
titleSuffix: Azure DevOps
description: Choose the days your team works for capacity planning purposes and when using sprint/scrum methods in  Azure Boards & Team Foundation Server   
ms.technology: devops-agile
ms.assetid: 02771DE7-1AF7-46B1-AE4A-219351C570DC
ms.author: kaelli
author: KathrynEE
ms.topic: conceptual
monikerRange: '>= tfs-2013'
ms.date: 06/01/2020
---

# Set working days  

[!INCLUDE [temp](../../boards/includes/version-all.md)]

Each team's sprint planning and tracking tools automatically consider days off when calculating capacity and sprint burndown. Leave those days of the week that your team doesn't work unchecked in your team's Settings, Working days page.  

> [!NOTE]   
> The **Working days** setting specifies the days that teams regularly take off each week. To specify additional non-working days off, such as holidays or a team day off, set them through the **Capacity** page as described in [Set sprint capacity, Set capacity for the team and team members](../../boards/sprints/set-capacity.md#set-team-capacity).

[!INCLUDE [temp](includes/prerequisites-team-settings.md)]

  
<a id="team-services-work-days" />  

## Configure working days  

::: moniker range="azure-devops"

You can configure the Working days off from any team Settings dialog or from the Team configuration settings page. 

Here we show setting it through the Settings dialog. 

[Open the Capacity page](../../boards/sprints/set-capacity.md), and then choose the ![ ](../../media/icons/team-settings-gear-icon.png) gear icon to open the settings dialog. 

![Capacity page, Settings, Working days](media/capacity-planning-open-team-settings-new-nav.png)  

::: moniker-end

::: moniker range=">= tfs-2017 < azure-devops" 

You can configure the Working days off from any team Settings dialog or from the Team configuration settings page. 

Here we show setting it through the Settings dialog. 

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
- [Scrum and sprint planning tools](../../boards/sprints/scrum-key-concepts.md)
- [Manage teams and configure team tools](manage-teams.md) 