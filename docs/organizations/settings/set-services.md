---
title: Turn a service on or off
titleSuffix: Azure DevOps
ms.custom: seodec18
description: Control which services are available for a project from the web portal  
ms.technology: devops-settings
ms.prod: devops
ms.topic: overview
ms.assetid: 
ms.manager: jillfra
ms.author: chcomley
author: chcomley
ms.topic: conceptual
monikerRange: '>= azure-devops-2019'  
ms.date: 01/19/2019
---

# Turn a service on or off

[!INCLUDE [temp](../../_shared/version-azure-devops.md)]

You can control which services are available through the web portal by turning a service on or off. Turning a service off removes the service from the user interface for all project users. However, data defined for the service is preserved and available if you later decide to turn the service on.  

## Prerequisites

::: moniker range="azure-devops"

- You must have an organization in Azure DevOps. If you don't have one, [do that now](../../user-guide/sign-up-invite-teammates.md).
- As an organization owner or member of the Project Administrators group, you can change policies and change project information. If you're not [a member get added as one](../security/set-project-collection-level-permissions.md#project-level).
::: moniker-end

::: moniker range="azure-devops-2019"
- You must have a project defined. If you don't have one, [add one now](../projects/create-project.md).
- As a member of the Project Administrators group, you can change policies and change project information. If you're not [a member get added as one](../security/set-project-collection-level-permissions.md#project-level).
- 
::: moniker-end

## Change the visibility for a service  

1. 1. Sign in to your organization (```https://dev.azure.com/{yourorganization}```) and select a project.
2. Choose **Project settings** in the sidebar.

	> [!div class="mx-imgBorder"]  
	> ![Open project settings](../../_shared/_img/settings/open-project-settings-vert-brn.png)  

3. Select **Overview**, and then choose the slider for the service that you want to enable or disable.

	> [!div class="mx-imgBorder"]  
	> ![Project Settings>General>Services](_img/services/set-service-visibility.png)  

4. Confirm that you want to disable the service.

	> [!div class="mx-imgBorder"]  
	> ![Disable a service confirmation dialog](_img/services/remove-test-service.png)

5. Refresh your web browser to view the updates.


## Disabled objects and features

If you disable a service, dashboard widgets specific to that service are disabled. For example, if **Boards** is disabled, all work item tracking widgets and all Analytics widgets are disabled and won't appear in the [widget catalog](../../report/dashboards/widget-catalog.md).

If you disable **Boards**, you also disable [**Analytics views**](../../report/powerbi/what-are-analytics-views.md).

## Related articles

::: moniker range="azure-devops"
- [About projects and scaling the organization](../projects/about-projects.md)  
- [Change the project visibility, public or private](../public/make-project-public.md)
- [About user, team, project, and organization-level settings](about-settings.md)
::: moniker-end

::: moniker range="azure-devops-2019"
- [About projects and scaling the organization](../projects/about-projects.md)  
- [About user, team, project, and collection-level settings](about-settings.md)
::: moniker-end