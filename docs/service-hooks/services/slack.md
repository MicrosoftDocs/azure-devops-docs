---
ms.subservice: azure-devops-service-hooks
ms.topic: how-to
title: Create a service hook with Slack
description: Use Slack with your Azure DevOps organization to create a service hook.
ms.assetid: ea948249-1053-4971-99b9-ffa820c03803
monikerRange: '<= azure-devops'
ms.date: 11/21/2023
ms.custom: sfi-image-nochange
---

# Create a service hook for Azure DevOps with Slack

[!INCLUDE [version-lt-eq-azure-devops](../../includes/version-lt-eq-azure-devops.md)]

In this article, learn how to post messages to [Slack](https://slack.com/) in response to events in your Azure DevOps organization, such as completed builds, code changes, pull requests, releases, work items changes, and more.

::: moniker range="azure-devops"
> [!NOTE]
> For Azure DevOps Services, we recommend you use the following suite of apps which offer features to integrate with Slack.

### Azure Boards app for Slack

[Azure Boards app for Slack](../../boards/integrations/boards-slack.md) helps to easily create and monitor work items from your Slack channels. 
You can create work items using a slash command, or use message actions to convert conversations in the channel into work items. 
You can also set up and manage subscriptions to get notifications in their channel whenever work items are created or updated. 

### Azure Pipelines app for Slack

The [Azure Pipelines app for Slack](../../pipelines/integrations/slack.md) helps to easily monitor the events in your pipelines. You can set up and manage 
subscriptions for completed builds, releases, pending approvals and more from the app and get notifications for these events in their channels. You can also approve release deployments from your channels. 

### Azure Repos app for Slack

The [Azure Repos app for Slack](../../repos/integrations/repos-slack.md) helps to easily monitor the events in your repositories. You can set up and manage subscriptions for code commits, PR creation and updates, and more, and get notifications for these events in their channels.

::: moniker-end

::: moniker range="<= azure-devops"

## Prerequisites

Refer to the [Slack documentation, Sending messages using Incoming Webhooks](https://api.slack.com/messaging/webhooks) to understand the process of using Web Hooks to push information to a Slack channel.

## Create a custom app in Slack

1. Create a new [Slack app](https://api.slack.com/apps/new)
	![Create slack app](./media/slack/create-slack-app.png)

2. Activate incoming Web Hook and add a new Web Hook to the desired workspace
	![Screenshot of incoming Web Hook.](./media/slack/incoming-webhook.png)

	![Screenshot of Toggle Web Hook.](./media/slack/toggle-webhook.png)

3. Select the channel for which Web Hook must be created.

	![Screenshot of Create Web Hook.](./media/slack/create-webhook.png)

4. Copy the Web Hook URL and go to Azure DevOps.

::: moniker-end

::: moniker range="<= azure-devops"

## Create a service hook subscription in your organization
::: moniker-end

::: moniker range="<=azure-devops"

1. Go to your project **Service Hooks** page. 

	`https://{orgName}/{project_name}/_settings/serviceHooks`

	![Screenshot of the Project administration page.](./media/add-devops-service-hook.png)

	Select **Create Subscription**.

2. Choose the types of events you want to appear in your Slack channel.
   
   You can filter each of the triggers in specific ways.
   For example, filter the *pull request created* trigger on the repository in which the pull request occurs, the target branch it applies to, and the team members required or invited to review the request.

3. Paste the Web Hook URL from the Slack integration that you created and select **Finish**.

   :::image type="content" source="./media/slack/action.png" alt-text="Screenshot of the Action dialog box with the Web Hook URL.":::

   When the event occurs in your project, a notification appears in your team's Slack channel.

::: moniker-end

## FAQs

<!-- BEGINSECTION class="m-qanda" -->

### Q: Why don't I have the pull request events as an option when I configure my trigger?

A: Pull requests are only available with projects that use Git.
If your project uses TFVC, pull event triggers aren't available,
and your code event is called "Code checked in" instead of "Code pushed."

### Q: How can I get multiple events to show up in my Slack channel?

A: Create a new subscription for each type of event you want.
For example, if you want to see build failures and new work items in your Slack channel,
create two more subscriptions.
