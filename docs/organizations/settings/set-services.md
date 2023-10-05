---
title: Turn a service on or off
titleSuffix: Azure DevOps
ms.custom: contperf-fy22q4
description: Control which services are available for a project from the web portal for Azure DevOps.  
ms.subservice: azure-devops-settings
ms.author: chcomley
author: chcomley
ms.topic: how-to
monikerRange: '>= azure-devops-2019'  
ms.date: 07/27/2022
---

# Turn a service on or off

[!INCLUDE [version-gt-eq-2019](../../includes/version-gt-eq-2019.md)]

Control which services are available through the web portal, by turning a service on or off. Turning off a service hides the service to all members of the project. However, if you choose to enable a service later, all your existing data is available.  

## Prerequisites

::: moniker range="azure-devops"

- You must have an organization in Azure DevOps. If you don't have one, [do that now](../../user-guide/sign-up-invite-teammates.md).
- As an organization owner or member of the Project Administrators group, you can change policies and change project information. If you're not a member, [get added as one](../security/change-project-level-permissions.md).
::: moniker-end

::: moniker range=">= azure-devops-2019 < azure-devops"

- You must have an Azure DevOps project. If you don't have one, [add one now](../projects/create-project.md).
- As a member of the Project Administrators group, you can change policies and change project information. If you're not a member, [get added as one](../security/change-project-level-permissions.md).
::: moniker-end

## Change the visibility for a service

Enable and disable services within your project overview settings.

1. Sign in to your organization (```https://dev.azure.com/{yourorganization}```) and select a project.
2. Choose **Project settings** in the sidebar.

	> [!div class="mx-imgBorder"]  
	> ![Open project settings](../../media/settings/open-project-settings-vert-brn.png)  

3. Select **Overview**, and then choose the slider for the service that you want to enable or disable.

	> [!div class="mx-imgBorder"]  
	> ![Project Settings > Overview to services](media/services/set-service-visibility.png)  

4. Confirm your action. In our example, we remove the Test Plans service.

	> [!div class="mx-imgBorder"]  
	> ![Disable a service confirmation dialog](media/services/remove-test-service.png)

5. Refresh your web browser to view the updates.

The service we disabled is no longer present in the side bar of Azure DevOps.

## Related articles

::: moniker range="azure-devops"
- [About projects and scaling the organization](../projects/about-projects.md)  
- [About user, team, project, and organization-level settings](about-settings.md)
- [Change the project visibility, public or private](../projects/make-project-public.md)
::: moniker-end

::: moniker range=">= azure-devops-2019 < azure-devops"
- [About projects and scaling the organization](../projects/about-projects.md)  
- [About user, team, project, and collection-level settings](about-settings.md)
::: moniker-end
