---
title: Set working days off
titleSuffix: VSTS & TFS 
description: Choose the days your team works for capacity planning purposes and when using sprint/scrum methods in Visual Studio Team Services & Team Foundation Server   
ms.technology: devops-agile
ms.prod: devops
ms.assetid: 02771DE7-1AF7-46B1-AE4A-219351C570DC
ms.manager: douge
ms.author: kaelliauthor: KathrynEE
ms.topic: conceptual
ms.date: 03/20/2018
---

# Set working days  

[!INCLUDE [temp](../_shared/version-vsts-tfs-all-versions.md)]

Your sprint planning and tracking tools automatically consider days off when calculating capacity and sprint burndown. Leave those days of the week that your team doesn't work unchecked in your team's Settings, Working days page. 

If you're not a team administrator, [get added as one](../scale/add-team-administrator.md). Only team and project admins can change team settings. 

::: moniker range="vsts || >= tfs-2017 <= tfs-2018" 
<a id="team-services-work-days" />

Open the Settings dialog from the Capacity page to set Working days.

<img src="../scale/_img/capacity-planning-open-team-settings-tfs-15.png" alt="VSTS, Capacity page, Settings, Working days" style="border: 2px solid #C3C3C3;" />

::: moniker-end

::: moniker range="tfs-2015" 

<a  id="tfs-2015-work-days" />

Open your team settings from the Overview tab of your team's admin context.  

<img src="../scale/_img/ALM_DS_WorkingDaysOff.png" alt="Team settings page for default working days" style="border: 1px solid #C3C3C3;" />

::: moniker-end 


::: moniker range="tfs-2013" 

To set non-working days, modify the **ProcessConfiguration** file. For details, see [Process configuration XML element reference, Set non-working days](reference/process-configuration-xml-element.md#weekend_days). 

::: moniker-end 
