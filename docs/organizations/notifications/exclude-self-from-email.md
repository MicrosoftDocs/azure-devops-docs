---
title: Prevent notification emails to yourself from events
titleSuffix: Azure DevOps 
description: Learn how to exclude the initiator of an event in Azure DevOps Services from receiving notification emails
ms.subservice: azure-devops-notifications
ai-usage: ai-assisted
ms.reviewer: wismythe
ms.author: chcomley
author: chcomley
ms.topic: conceptual
ms.date: 09/19/2025  
monikerRange: '<= azure-devops'
---

# Exclude yourself from notification emails of events you started

[!INCLUDE [version-lt-eq-azure-devops](../../includes/version-lt-eq-azure-devops.md)]

This article shows how to prevent the initiator of an event from receiving notification emails when that event triggers a team or role-based subscription. The feature is useful when people don't want emails for actions they themselves perform (for example, creating a pull request).

What you'll learn:
- Where to find the Skip initiator option.
- When Skip initiator is availab
- Troubleshooting steps if you don't see the option.

Quick steps:
1. Sign in to your project: `https://dev.azure.com/{Your_Organization}/{Your_Project}`
2. Select **Project settings** > **Notifications**.
3. Create a new subscription or edit an existing team/role subscription.
4. Check the **Skip initiator** box to exclude the event initiator from the notification.

## Prerequisites

[!INCLUDE [prerequisites-project-member-only](../../includes/prerequisites-project-member-only.md)]

## Skip initiator

When you create a team role-based notification subscription, select the **Skip initiator** option to prevent the user who triggered the event from receiving the notification.

For example, if your team has a subscription for a *pull request created* event and the Skip initiator option is checked, the user who creates the pull request doesn't receive that notification; other members of the team still receive it.

To opt out of receiving notifications that you trigger:

1. Sign in to your project (`https://dev.azure.com/{Your_Organization}/{Your_Project}`).
2. Select **Project settings** > **Notifications**.
3. Create a new subscription or edit an existing one.
4. Select the notification event and check the **Skip initiator** box.
5. Save the subscription.

> [!div class="mx-imgBorder"] 
> ![Screenshot showing the New subscription dialog with Skip initiator option.](media/new-sub-skip-initiator.png)

[!INCLUDE [note-smtp-server](includes/note-smtp-server.md)]

You don't receive notifications for events you trigger when Skip initiator is enabled for that subscription.

## Troubleshoot: I don't see the Skip initiator option

If the **Skip initiator** checkbox isn't visible, try these checks:

- Are you editing a team/role subscription or a personal subscription?  
  Skip initiator is a property of team/role (project or group) subscriptions. If you're editing a personal subscription under "Manage personal notifications" you don't have that option. Create or edit a team subscription under **Project settings** > **Notifications**.

- Are you editing a built-in or non-editable subscription?  
  Some built-in system subscriptions are read-only. If a built-in subscription doesn't allow editing, create a new custom subscription (you can copy/clone the built-in settings) and enable Skip initiator on the new subscription.

- Do you have the required permissions to create or edit project-level subscriptions?  
  Typically project administrators or users with notification-management rights can create and edit team subscriptions. If you lack permissions, ask a project administrator to create/enable the subscription or grant you the right to manage project notifications.

If these steps don't resolve the issue:
- Create a new custom team subscription that matches the desired event and enable Skip initiator.
- If you still can't enable the option and you believe it should be present, ask your project collection administrator to review permissions and server version, or open a support case.

## Related content

- [Manage personal notification settings](manage-your-personal-notifications.md)
- [Follow a specific work item](../../boards/work-items/follow-work-items.md)  
- [Manage notifications for a team](./manage-team-group-global-organization-notifications.md)  
- [Change your preferred email address](change-email-address.md)
