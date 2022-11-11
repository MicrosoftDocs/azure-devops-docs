---
title: Pull request update notifications
titleSuffix: Azure Repos
description: Learn how to view, edit, and subscribe to pull request update notifications.
ms.assetid: 4C9DFD24-E894-454A-A080-DA511C90CA74
ms.service: azure-devops-repos
ms.topic: conceptual
ms.author: vijayma
author: vijayma
ms.date: 10/07/2021
monikerRange: '<= azure-devops'
ms.subservice: azure-devops-repos-git
---
# Pull request update notifications

[!INCLUDE [version-lt-eq-azure-devops](../../includes/version-lt-eq-azure-devops.md)]

You can subscribe to email alerts to be notified of changes in pull requests (PRs). By default, you're subscribed to several common PR notifications. For a complete list of default subscription notifications, see [Out-of-the-box (OOB) or default subscriptions](../../organizations/notifications/oob-built-in-notifications.md#out-of-the-box-oob-or-default-subscriptions).

To view or set your personal notifications, see [Manage your personal notifications](../../organizations/notifications/manage-your-personal-notifications.md).

::: moniker range=">= azure-devops-2019"

- To view project notification settings, [go to the project](../../project/navigation/go-to-project-repo.md) and select **Project settings** > **Notifications**.

  ![Screenshot that shows Settings for PR emails.](media/pull-request-notifications/pr-notifications-new-nav.png)

- To subscribe to more notifications, select **New subscription**.

  ![Screenshot that shows Subscribe to emails.](media/pull-request-notifications/new-subscription-new-nav.png)

- To edit a notification, select **...** next to the notification and select **View**, then edit the subscription.

  ![Screenshot that shows Change subscription.](media/pull-request-notifications/view-pr-notifications.png)

- To opt out of a notification, set the **State** to **Off**.

  ![Screenshot that shows Opt out of emails.](media/pull-request-notifications/opt-out-notifications.png)

::: moniker-end

::: moniker range="tfs-2018"

Select the settings button while you have your project open to bring up the project administration page.

![Screenshot that shows Open up the administrative area of the web portal for your project.](media/pull-requests/gear_icon_settings.png) 

- Select the **Notifications** tab to view your notification settings, and choose **New subscription** to subscribe to more notifications.

  ![Screenshot that shows Subscribe to emails.](media/pull-request-notifications/pr-notifications.png)

- To edit a notification, select **...** for the notification and choose **View** to edit the subscription. 

  ![Screenshot that shows Change subscription.](media/pull-request-notifications/view-pr-notifications.png)

- To opt-out of a notification, set the **State** to **Off**.

   ![Screenshot that shows Opt out of emails.](media/pull-request-notifications/opt-out-notifications.png)

::: moniker-end

