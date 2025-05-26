---
title: Use Azure Boards in Microsoft Teams
titleSuffix: Azure Boards
description: Learn how to create work items and monitor work item activity in an Azure Boards project from a Microsoft Teams channel.
ms.service: azure-devops
ms.subservice: azure-devops-integration
ms.custom: cross-service
ms.topic: how-to
ms.reviewer: karrg
ms.author: karrg
author: chcomley
monikerRange: 'azure-devops'
ms.date: 08/13/2024
---
 
# Use Azure Boards in Microsoft Teams

[!INCLUDE [version-eq-azure-devops](../../includes/version-eq-azure-devops.md)] 

This article describes how to use the Azure Boards and Azure DevOps apps for Microsoft Teams to create and monitor Azure Boards work items from your Teams channels.

[!INCLUDE [temp](../../includes/feature-support-cloud-only.md)]

By using the Azure Boards app for Microsoft Teams, you can:

- Set up subscriptions to create and manage work items and work item events in your Teams channels.
- Create work items directly from channel conversations.
- Search for and share work items across channels using the messaging extension.
- View previews of work items from URLs.

> [!NOTE]
> - Azure Boards notifications aren't supported inside Teams chat or direct messages.
> - The Azure Boards app for Microsoft Teams isn't supported for O365 Government Community Cloud (GCC) customers that use an Azure Commercial subscription in conjunction with a GCC tenant.

## Prerequisites

| Category | Requirements |
|--------------|-------------|
| **Access levels** | - **Contributor** for the project.<br> - Access to a team and channel in Microsoft Teams where you can install an app. |
| **Permissions** | To create subscriptions in a Slack channel for work item events: Member of the [Project Administrators](../../organizations/security/change-project-level-permissions.md) or [Team Administrators](../../organizations/settings/add-team-administrator.md) group. |
| **Policies** | To receive notifications: [**Third party application access via OAuth** policy enabled for the organization](../../organizations/accounts/change-application-access-policies.md). |

## Add the Azure Boards app to Teams

To add the Azure Boards app to your Teams channels, do the following steps.

1. In Microsoft Teams, select **Apps**, search for *Azure Boards*, and then select **Azure Boards**.

   :::image type="content" source="media/integrations-teams/notifications.png" alt-text="Screenshot of selecting Apps, then Azure Boards.":::

1. Select the dropdown arrow next to **Open**, and select **Add to a team**.

   :::image type="content" source="media/integrations-teams/signin1.png" alt-text="Screenshot of selecting Open and then Add to a team.":::

1. Select or enter your team name, and then select **Set up a bot**.

   :::image type="content" source="media/integrations-teams/signin2.png" alt-text="Screenshot of selecting Set up a bot.":::

After the app installs, you see a welcome message in the Teams conversation pane.

:::image type="content" source="media/integrations-teams/welcome-message.png" alt-text="Screenshot of the Welcome message in the conversation pane.":::

### Azure Boards app commands

You can use the following `@azure boards` commands to interact with the Azure Boards app in your Teams channel.

| Command        | Functionality  |
| -------------------- |----------------|
|@azure boards sign in | Sign in to your Azure Boards organization.|
|@azure boards sign out | Sign out from your Azure Boards organization.|
|@azure boards link \<project url> |Link a project to this channel to create work items and receive notifications.|
|@azure boards unlink| Unlink a project from this channel.|
|@azure boards subscriptions | Add or remove subscriptions for this channel.|
|@azure boards addAreapath \<area path>| Add an area path from your project to this channel. |
|@azure boards feedback	| Report a problem or suggest a feature. |
|@azure boards help | Get help on the commands. |

## Link your Azure Boards project to the app

To use the app, sign in to Azure Boards and link your Azure Boards project to your Teams channel.

1. In the Teams conversation pane, enter `@azure boards signin`.
1. Select **Sign in** and complete authentication to Azure Boards. Select **Sign in with different email** if your Microsoft Teams and Azure Boards are in [different tenants](#connect-different-tenants).
1. Use the `@azure boards link` command to link to your Azure DevOps project URL. For example:

   ```
   @azure boards link https://dev.azure.com/myorg/myproject/
   ```

1. Select the **Add subscription** button in the linked project notification to start monitoring your project.

   :::image type="content" source="media/integrations-teams/add-subscription.png" alt-text="Screenshot of the linked project notification with the Add subscription button.":::

### Set up subscriptions

After your project is linked, begin monitoring project work items by selecting the **Add subscription** button. You can add more subscriptions anytime by using the `@azure boards subscriptions` command.

1. Under **Choose event**, select the event you want to subscribe to and select **Next**.

   :::image type="content" source="media/integrations-teams/add-event.png" alt-text="Screenshot of selecting the event to monitor.":::

1. Under **Choose filters**, select the **Area path**, **Work item type**, and optionally specify **Tags** or a specific string to filter on, and then select **Submit**.

   :::image type="content" source="media/integrations-teams/add-subscriptions.png" alt-text="Screenshot of setting up the subscription.":::

### Add area paths

Area paths that have subscriptions in the channel, recently accessed area paths, and area paths that you add by using the `@azure boards addAreapath` command appear in the **Area path** dropdown menu when you create a subscription. If the area path that your team works on doesn't appear in the dropdown menu, you can add it so that it's always available for creating work items and subscriptions. This feature is especially useful for teams with more than 100 area paths in their project.

Use the `@azure boards addAreapath` command to add area paths from your project to the Teams channel. For example:

```
@azure boards addAreapath 'VMdemo\Area4'
```

You get a success message.

:::image type="content" source="media/integrations-teams/add-areapath.png" alt-text="Screenshot of adding an area path and the success message.":::

If you choose the project name as your area path, you get notifications for all the area paths in the project.

## Create work items

You can use the Azure Boards app to create work items from your channel by using a message action.

1. In any message in the channel, select the **More actions** ellipse in the actions panel, and then select **Create work item**.

   :::image type="content" source="media/integrations-teams/create-work-item-command.png" alt-text="Screenshot of selecting create work item in the more actions menu.":::

1. Select the type of work item you want to create, and select **Next**.

1. Enter a **Title** and select an **Area path** for the work item.

1. The text of the message becomes the work item **Description** or **Repro Steps**, depending on work item type, or you can edit this text. Select **Create**.

   :::image type="content" source="media/integrations-teams/message-action-1.png" alt-text="Screenshot of configuring the work item.":::

The new work item appears in Azure Boards and contains a link back to the Teams item that generated the work item.

:::image type="content" source="media/integrations-teams/message-action-2.png" alt-text="Screenshot of the new work item in Azure Boards.":::

## Manage Azure Boards subscriptions

To view, add, and remove subscriptions for a channel, use the `@azure boards subscriptions` command. This command lists all the current subscriptions for the channel. You can add new subscriptions and remove existing ones. When you add a subscription, you can customize notifications by using filters.

:::image type="content" source="media/integrations-teams/view-subscriptions.png" alt-text="Screenshot of the subscriptions list.":::

> [!NOTE]
> Team Administrators can't remove or modify subscriptions that Project Administrators created.

## Use the compose extension

To help you search for and share work items, the Azure Boards app for Microsoft Teams supports the compose extension. You can search for work items by work item ID, title, or supported functional command. For a list of supported commands, see [Functional work item search](../../project/search/functional-work-item-search.md).

To use the compose extension, be signed in to the Azure Boards project in the Teams channel. Select the **+** symbol in the message field, select **Azure Boards**, and then search for a work item. You can also select **Create work item** to create a new work item.

:::image type="content" source="media/integrations-teams/teams-boards-compose-extension.png" alt-text="Screenshot showing the compose extension.":::

## Preview work items

To support collaboration around work items you discuss in a channel, the Azure Boards app displays a preview of work items you reference. When you paste in a work item URL or select a work item from the compose extension, the app shows a preview similar to the following image. This URL unfurling feature works for all channels in the team.

:::image type="content" source="media/integrations-teams/url-unfurling.png" alt-text="Screenshot showing work item URL unfurling.":::

## Unlink a project from a channel

A Teams channel can link to only one Azure Boards project at a time. To link to a different project, you must first unlink the current project by using `@azure boards unlink`.

Unlinking a project deletes all the project subscriptions and added area paths from the channel. If the channel has no subscriptions, any user can unlink a project. If the channel has subscriptions, only Project Administrators can unlink the project.

## Expand and collapse threads

A Teams channel collapses posts in threads to logically link and reduce related posts in the channel. All replies to a particular post are linked together.

To expand the thread, select the compacted thread link.

:::image type="content" source="media/integrations-teams/threads-boards-compact-view.png" alt-text="Screenshot showing the compact thread view.":::

To return to the channel and collapse the thread, select **Go to channel**.

:::image type="content" source="media/integrations-teams/threads-boards-expanded-view.png" alt-text="Screenshot showing the expanded thread view.":::

<a name="configure-azure-devops-services-tabs-in-microsoft-teams"></a>
## Configure Azure DevOps tabs

To bring your project dashboard or Kanban board into Teams, you can install the Azure DevOps app in a tab in your Teams channel. The Azure DevOps app lets you insert content from the app in messages, and get notifications from the app in your channels.

1. In Teams, select the **+** symbol on the top navigation of your channel or select **Apps** from the left menu.

1. Search for if necessary, and then select **Azure DevOps**.

   :::image type="content" source="media/teams-as-website.png" alt-text="Screenshot to add a new tab to Teams channel.":::

1. Select and sign in to your Azure DevOps organization.

1. On the **Azure DevOps** screen, select a **Project**, and whether to add a **Dashboard** or a **Kanban board** to the tab. Select other configurations depending on your choice, and select whether you want to post to the channel about adding the tab.

   :::image type="content" source="media/integrations-teams/dialog-add-dashboard-kanban-board.png" alt-text="Screenshot that shows adding a Dashboard for Azure DevOps in Teams.":::

1. Select **Save**. The new tab and board appear in your channel.

## Connect different tenants

If you use different emails or tenants for Microsoft Teams and Azure DevOps, follow these steps to sign in and connect based on your settings.

|Microsoft Teams |Azure DevOps  |Sign in action |
|---------|---------|---------|
|email1@abc.com (tenant1)        |  email1@abc.com (tenant1)     | Select **Sign in**        |
|email1@abc.com (tenant1)      | email2@abc.com (tenant2)       | 1. Sign in to Azure DevOps. <br> 2. In the same browser, start a new tab and go to https://teams.microsoft.com/.<br> 3. Run the `sign in` command and select **Sign in**.        |
|email1@abc.com (tenant1)         |  email2@pqr.com (tenant2)       | 1. Select **Sign in with different email address**.<br> 2. In the email ID picker, use the email2 to sign in.|
| email1@abc.com (tenant1)        | email2@pqr.com (nondefault tenant3)        | Not supported.       |

## Troubleshoot authentication issues

If you receive the error **Configuration failed. Please make sure that the organization '{organization name}' exists and that you have sufficient permissions**, try the following steps to resolve the error.

1. In the same browser, start a new tab and sign in to `https://teams.microsoft.com/`.

1. In this tab, go to the channel where the Azure Boards app for Microsoft Teams is installed and run the `@azure boards signout` command and then the `@azure boards signin` command.

1. Select the **Sign in** button, and complete the sign-in process. Ensure that the directory shown is the same one you chose in the previous step.

If these steps don't resolve your authentication issue, reach out to the [Developer Community](https://developercommunity.visualstudio.com/spaces/21/index.html).

## Related articles

- [Define area paths and assign to a team](../../organizations/settings/set-area-paths.md)

- [Use Azure Repos with Microsoft Teams](../../repos/integrations/repos-teams.md)
