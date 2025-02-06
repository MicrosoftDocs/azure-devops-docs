---
title: Prevent notification emails to yourself from events
titleSuffix: Azure DevOps 
description: Learn how to exclude the initiator of an event in Azure DevOps Services from receiving notification emails
ms.subservice: azure-devops-notifications
ms.reviewer: wismythe
ms.author: chcomley
author: chcomley
ms.topic: conceptual
ms.date: 01/30/2025  
monikerRange: '<= azure-devops'
---

# Exclude yourself from notification emails of events you started

[!INCLUDE [version-lt-eq-azure-devops](../../includes/version-lt-eq-azure-devops.md)]

When you create a team role-based notification subscription, you can choose the option, _Skip initiator_. The initiator of the event that triggers the email doesn't receive the notification.

For example, if your team has a subscription for a _pull request created_ event, the user who creates the pull request in the project doesn't receive this notification email. Other members of the team receive the notification email.

This option is good for users who don't want notifications of events that they trigger. However, some users might prefer to receive the same notifications as their teammates. Let your team decide which option is best.

## Prerequisites

[!INCLUDE [prerequisites-project-member-only](../../boards/includes/prerequisites-project-member-only.md)]

## Skip initiator

Do the following steps to opt out of receiving notifications that you create:

1. Sign in to your project (`https://dev.azure.com/{Your_Organization/Your_Project}`).
2. Select **Project settings** > **Notifications**.
3. Create a new subscription or edit an existing one.
4. Select the notification.
5. Check the **Skip initiator** box.

> [!div class="mx-imgBorder"] 
> ![Screenshot shows new subscription skip initiator.](media/new-sub-skip-initiator.png)

[!INCLUDE [note-smtp-server](includes/note-smtp-server.md)]

You don't receive notifications for events you trigger yourself.

#### Related articles

- [Manage personal notification settings](manage-your-personal-notifications.md)
- [Follow a specific work item](../../boards/work-items/follow-work-items.md)  
- [Manage notifications for a team](./manage-team-group-global-organization-notifications.md)  
- [Change your preferred email address](change-email-address.md)
