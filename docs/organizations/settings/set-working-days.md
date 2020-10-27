---
title: Set working days off
titleSuffix: Azure DevOps
description: Learn how to choose your team's working days for capacity planning purposes in Azure Boards.  
ms.technology: devops-agile
ms.assetid: 02771DE7-1AF7-46B1-AE4A-219351C570DC
ms.author: kaelli
author: KathrynEE
ms.topic: conceptual
monikerRange: '>= tfs-2013'
ms.date: 10/27/2020
---

# Configure working days  

[!INCLUDE [temp](../../boards/includes/version-all.md)]

Configure the days that your team works. Your team's working days aid in capacity planning purposes and when you're using sprint and scrum methods in Azure Boards. Each team's sprint planning and tracking tools automatically consider days off when calculating capacity and sprint burndown. Leave those days of the week that your team doesn't work unchecked.

> [!NOTE]   
> The **Working days** setting specifies the days that teams regularly take off each week. To specify additional non-working days off, such as holidays or a team day off, set these through the **Capacity** page as described in [Set sprint capacity, Set capacity for the team and team members](../../boards/sprints/set-capacity.md#set-team-capacity).

[!INCLUDE [temp](includes/prerequisites-team-settings.md)]

<a id="team-services-work-days" />  

## Configure working days  

::: moniker range="azure-devops"

1. In Azure Boards, select **Capacity** > :::image type="icon" source="../../media/icons/team-settings-gear-icon.png" border="false"::: gear icon > **Working days**.

   ![Capacity page, Settings, Working days](media/capacity-planning-open-team-settings-new-nav.png)

2. Select the checkbox next to the appropriate working days, and then select **Save and close**.

Working days are updated.

::: moniker-end

::: moniker range=">= tfs-2017 < azure-devops" 

1. From Azure Boards, select **Capacity** > :::image type="icon" source="../../media/icons/team-settings-gear-icon.png" border="false"::: gear icon > **Working days**.

   ![Capacity page, Settings, Working days](../../boards/plans/media/capacity-planning-open-team-settings-tfs-15.png)  

2. Select the checkbox next to the appropriate working days, and then select **Save and close**.

Working days are updated.

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
