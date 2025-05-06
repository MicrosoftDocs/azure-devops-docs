---
title: Navigate the Notifications UI
titleSuffix: Azure DevOps 
description: Explore the notifications pages in Azure DevOps, including personal status, team and project-level status, and global settings.
ms.subservice: azure-devops-notifications
ms.custom: quarterly-update
ms.reviewer: wismythe
ms.author: chcomley
author: chcomley
ms.topic: concept-article
ms.date: 05/06/2025
#customer intent: As a developer, I want to view notifications in Azure DevOps, so I can check the status of notifications for myself, my team or project, and also global settings.
---

# Access notification settings

[!INCLUDE [version-lt-eq-azure-devops](../../includes/version-lt-eq-azure-devops.md)]

This article describes how to navigate the **Notifications** user interface in Azure DevOps. You can set notifications at the following levels:

* Personal
* Team
* Project
* Organization or collection (organization for the cloud and project collection for on-premises)

## Prerequisites

[!INCLUDE [prerequisites-project-member-only](../../includes/prerequisites-project-member-only.md)]

<a id="open-person-level"></a>

## Open your personal notifications 

To open your personal notifications, select the **User settings** icon :::image type="icon" source="../../media/icons/user-settings-gear.png"::: in Azure DevOps, and then select **Notifications** or **Notification settings**:

:::image type="content" source="media/personal/open-user-notifications.png" alt-text="Screenshot that shows how to open your personal notifications page in Azure DevOps.":::

The **User settings > Notifications** page opens:

:::image type="content" source="media/personal/user-notifications-page.png" alt-text="Screenshot of the User settings, Notifications page in Azure DevOps.":::

For more information, see [Manage your notifications](manage-your-personal-notifications.md)

<a id="project"></a>

## Open notifications for a team or project

To open a team or project-level notifications page, enter the following URL in the browser address field. Replace the `<organization>` and `<project>` portions with your organization and project name. 

```URL
https://dev.azure.com/<organization>/<project>/_settings/notifications
```

The **Project settings > Notifications** page opens:

:::image type="content" source="media/nav-team-notifications-hub-newnav.png" alt-text="Screenshot of the Project Settings, Team Notifications page in Azure DevOps.":::

For more information, see [Manage notifications for a team or group](manage-team-group-global-organization-notifications.md).

<a id="open-org-level"></a>

## Open Global notifications

To open the settings for **Global notifications**, select :::image type="icon" source="../../media/icons/project-icon.png"::: **Azure DevOps**, and then select **Organization settings**: 

:::image type="content" source="../../media/settings/open-organization-settings-2025.png" alt-text="Screenshot that shows how to open the Organization settings page in Azure DevOps by first selecting the product icon.":::

You can also enter the following URL to reach the organization-level notifications page. Replace the `<organization>` portion with your organization name.

```URL
https://dev.azure.com/<organization>/_settings/notifications
```

On the **Organization Settings** page, select **Global notifications**:

:::image type="content" source="../../media/nav-ui/organization-notifications-2025.png" alt-text="Screenshot that shows how to open the Global notifications page in Azure DevOps by using a URL for your organization.":::

For more information, see [Manage team and Global notifications](manage-team-group-global-organization-notifications.md)

## Related content

- [Follow a specific work item](../../boards/work-items/follow-work-items.md)
- [Change your preferred email address](change-email-address.md)