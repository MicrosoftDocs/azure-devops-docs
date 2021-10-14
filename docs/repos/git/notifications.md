---
title: Pull request update notifications
titleSuffix: Azure Repos
description: Learn how to view, edit, and subscribe to pull request update notifications.
ms.assetid: 4C9DFD24-E894-454A-A080-DA511C90CA74
ms.technology: devops-code-git 
ms.topic: conceptual
ms.author: vijayma
author: vijayma
ms.date: 10/07/2021
monikerRange: '<= azure-devops'
---
# Pull request update notifications

**Azure Repos | Azure DevOps Server 2020 | Azure DevOps Server 2019 | TFS 2018 | TFS 2017 | TFS 2015 | VS 2017 | VS 2015**

You can subscribe to email alerts to be notified of changes in pull requests (PRs). By default, you're subscribed to several common PR notifications. For a complete list of default subscription notifications, see [Out-of-the-box (OOB) or default subscriptions](../../notifications/oob-built-in-notifications.md#out-of-the-box-oob-or-default-subscriptions).

To view or set your personal notifications, see [Manage your personal notifications](../../notifications/manage-your-personal-notifications.md).

::: moniker range=">= azure-devops-2019"

- To view project notification settings, [go to the project](../../project/navigation/go-to-project-repo.md) and select **Project settings** > **Notifications**.

  ![Settings for PR emails](./media/pull-requests/pr-notifications-new-nav.png)

- To subscribe to more notifications, select **New subscription**.

  ![Subscribe to emails](./media/pull-requests/new-subscription-new-nav.png)

- To edit a notification, select **...** next to the notification and select **View**, then edit the subscription.

  ![Change subscription](./media/pull-requests/view-pr-notifications.png)

- To opt out of a notification, set the **State** to **Off**.

  ![Opt out of emails](./media/pull-requests/opt-out-notifications.png)

::: moniker-end

::: moniker range="<= tfs-2018"

Select the settings button while you have your project open to bring up the project administration page.

![Open up the administrative area of the web portal for your project](media/pull-requests/gear_icon_settings.png) 

- Select the **Notifications** tab to view your notification settings, and choose **New subscription** to subscribe to more notifications.

  ![Subscribe to emails](./media/pull-requests/pr-notifications.png)

- To edit a notification, select **...** for the notification and choose **View** to edit the subscription. 

  ![Change subscription](./media/pull-requests/view-pr-notifications.png)

- To opt-out of a notification, set the **State** to **Off**.

   ![Opt out of emails](./media/pull-requests/opt-out-notifications.png)

::: moniker-end

