---
title: Set working days off
titleSuffix: Azure DevOps
description: Learn how to choose your team's working days for capacity planning purposes in Azure Boards.  
ms.service: azure-devops-boards
ms.custom: teams
ms.assetid: 02771DE7-1AF7-46B1-AE4A-219351C570DC
ms.author: chcomley
author: chcomley
ms.topic: how-to
monikerRange: '<= azure-devops'
ms.date: 04/24/2023
---

# Configure working days  

[!INCLUDE [version-lt-eq-azure-devops](../../includes/version-lt-eq-azure-devops.md)]

Learn how to align your team's work hours with your organization's requirements, optimize productivity, and manage workloads effectively by configuring working days in Azure DevOps.

> [!NOTE]   
> The **Working days** setting specifies the days that teams regularly take off each week. To specify additional non-working days off, such as holidays or a team day off, set these through the **Capacity** page as described in [Set sprint capacity, Set capacity for the team and team members](../../boards/sprints/set-capacity.md#set-team-capacity).

[!INCLUDE [temp](includes/prerequisites-team-settings.md)]

<a id="team-services-work-days" />  

## Set working days  

::: moniker range="azure-devops"

1. Sign in to your organization (```https://dev.azure.com/{yourorganization}```).

2. Choose **Boards** > **Sprints**.

   :::image type="content" source="media/configure-team/azure-boards-sprints-tab-selection.png" alt-text="Screenshot of selection of Azure Boards, and then the Sprints tab, with red boxes.":::

3. Select **Capacity** > **Settings** :::image type="icon" source="../../media/icons/team-settings-gear-icon.png" border="false"::: > **Working days**.

   ![Screenshot showing selected buttons highlighted with red boxes by sequence for Capacity page, Settings, Working days.](media/capacity-planning-open-team-settings-new-nav.png)

4. Select the checkbox next to the appropriate working days, and then select **Save and close**.

   Your team's working days are updated.

::: moniker-end

::: moniker range="< azure-devops" 

1. From Azure Boards, select **Capacity** > :::image type="icon" source="../../media/icons/team-settings-gear-icon.png" border="false"::: > **Working days**.

   ![Capacity page, Settings, Working days](../../boards/plans/media/capacity-planning-open-team-settings-tfs-15.png)  

2. Select the checkbox next to the appropriate working days, and then select **Save and close**.

   Your team's working days are updated.

::: moniker-end

## Related articles

- [About Sprints, Scrum and project management](../../boards/sprints/scrum-overview.md) 
- [Scrum and sprint planning tools](../../boards/sprints/scrum-key-concepts.md)
- [Manage teams and configure team tools](manage-teams.md)
