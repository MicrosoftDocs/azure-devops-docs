---
title: Turn a service on or off
titleSuffix: Azure DevOps
description: Control which services are available for a project from the web portal for Azure DevOps.
ms.subservice: azure-devops-settings
ms.author: chcomley
author: chcomley
ms.topic: how-to
monikerRange: "<=azure-devops"
ms.date: 11/12/2024
---

# Turn a service on or off

[!INCLUDE [version-gt-eq-2019](../../includes/version-gt-eq-2019.md)]

Manage the availability of Azure DevOps services through the web portal by enabling or disabling them as needed. Disabling a service hides it from all project members, helping to streamline the user interface and focus on the tools that are currently in use. This customization allows you to tailor the portal to your team's specific needs and workflows. If you choose to re-enable a service later, all existing data associated with that service remain intact and accessible.

## Prerequisites

[!INCLUDE [prerequisites-project-administrator-only](../../includes/prerequisites-project-administrator-only.md)]

## Change the visibility for a service

Enable and disable services within your project overview settings.

1. Sign in to your organization (```https://dev.azure.com/{Your_Organization}```) and select a project.
2. Select **Project settings**.

	> [!div class="mx-imgBorder"]  
	> ![Screenshot shows Project settings button.](../../media/settings/open-project-settings-vert-brn.png)  

3. Select **Overview**, and then choose the slider for the service that you want to enable or disable.

	> [!div class="mx-imgBorder"]  
	> ![Screenshot shows Project Settings > Overview to services.](media/services/set-service-visibility.png)  

4. Confirm your action. In our example, we remove the Test Plans service.

	> [!div class="mx-imgBorder"]  
	> ![Screenshot shows Disable a service confirmation dialog.](media/services/remove-test-service.png)

5. To view the updates, refresh your web browser.

The service you disabled is no longer present in the side bar of Azure DevOps.

## Related articles

::: moniker range="azure-devops"
- [Learn about projects and scaling the organization](../projects/about-projects.md)  
- [Learn about user, team, project, and organization-level settings](about-settings.md)
- [Change the project visibility, public or private](../projects/make-project-public.md)
::: moniker-end

::: moniker range=" < azure-devops"
- [Learn about projects and scaling the organization](../projects/about-projects.md)  
- [Learn about user, team, project, and collection-level settings](about-settings.md)
::: moniker-end
