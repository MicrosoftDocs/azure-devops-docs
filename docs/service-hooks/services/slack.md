---
ms.technology: devops-collab
ms.topic: conceptual
title: Create a service hook with Slack
description: Use Slack with your Azure DevOps Services organization
ms.assetid: ea948249-1053-4971-99b9-ffa820c03803
monikerRange: '>= tfs-2017'
ms.date: 03/15/2019
---

# Create a service hook for Azure DevOps Server (TFS) with Slack

>[!NOTE]
>If you use Azure DevOps Services, we recommend you use the following suite of apps which offer rich features, to integrate with Slack.
>### Azure Boards app for Slack
>[Azure Boards app for Slack](https://aka.ms/AzureBoardsSlackIntegration) helps to easily create and monitor work items from your Slack channels.
Users can create work items using a slash command, or use message actions to convert conversations in the channel into work items. 
Users can also set up and manage subscriptions to get notifications in their channel whenever work items are created or updated. 
>### Azure Pipelines app for Slack
>[Azure Pipelines app for Slack](https://aka.ms/AzurePipelinesSlackIntegration) helps to easily monitor the events in your pipelines. Users can set up and manage 
subscriptions for completed builds, releases, pending approvals and more from the app and get notifications for these events in their channels. Users can also approve release deployments from their channels. 
>### Azure Repos app for Slack
>[Azure Repos app for Slack](https://aka.ms/AzureReposSlackIntegration) helps to easily monitor the events in your repositories. Users can set up and manage subscriptions for code commits, PR creation and PR updates and more from the app and get notifications for these events in their channels.

Post messages to [Slack](https://slack.com/) in response to events in your Azure DevOps organization,
like completed builds, code changes, pull requests, releases, work items changes, and more.

## Create a custom app in Slack

1. Refer to the [documentation](https://api.slack.com/messaging/webhooks) in Slack to understand the process of using webhooks to push information to a Slack channel.

2. Create a new [Slack app](https://api.slack.com/apps/new)
	![Create slack app](./media/slack/create-slack-app.png)

3. Activate incoming webhook and add a new webhook to the desired workspace
	![incoming webhook](./media/slack/incoming-webhook.png)

	![toggle webhook](./media/slack/toggle-webhook.png)

4. Select the channel for which webhook must be created

	![create-webhook](./media/slack/create-webhook.png)

5. Copy the webhook URL and navigate to Azure DevOps portal

	![copy webhook](./media/slack/copy-webhook.png)


## Create a service hook subscription in your organization

::: moniker range=">= azure-devops-2019"

1. Go to your project Service Hooks page: 

	`https://{orgName}/{project_name}/_settings/serviceHooks`

	![Project administration page](./media/add-devops-service-hook.png)

	Select **Create Subscription**.

2. Choose the types of events you want to appear in your Slack channel.
   > You can filter each of the triggers in specific ways.
   > For example, the *pull request created* trigger can be filtered on the repository in which the pull request occurs,
   > the target branch it applies to, and the team members that are required or invited to review the request.

3. Paste the web hook URL from the Slack integration that you created and select **Finish**.

   <img alt="Action dialog box with the web hook URL" src="./media/slack/action.png" style="border: 1px solid #CCCCCC; width:60%; height:auto; display:block;margin-right:auto;margin-left:auto;margin-top:10px" />

4. Now, when the event you configured occurs in your project, a notification will appear in your team's Slack channel.

	![notifications](./media/slack/notifications.png)

::: moniker-end

::: moniker range=">= tfs-2017 < azure-devops-2019"

1. Go to your project Service Hooks page: 

    `https://dev.azure.com/{orgName}/{project_name}/_apps/hub/ms.vss-servicehooks-web.manageServiceHooks-project`

	![Project administration page](./media/add-service-hook.png)

	Select **Create Subscription**.

2. Choose the types of events you want to appear in your Slack channel.
   > You can filter each of the triggers in specific ways.
   > For example, the *pull request created* trigger can be filtered on the repository in which the pull request occurs,
   > the target branch it applies to, and the team members that are required or invited to review the request.

3. Paste the web hook URL from the Slack integration that you created and select **Finish**.

   <img alt="Action dialog box with the web hook URL" src="./media/slack/action.png" style="border: 1px solid #CCCCCC; width:60%; height:auto; display:block;margin-right:auto;margin-left:auto;margin-top:10px" />

4. Now, when the event you configured occurs in your project, a notification will appear in your team's Slack channel.

	![notifications](./media/slack/notifications.png)

::: moniker-end

## Q & A

<!-- BEGINSECTION class="m-qanda" -->

#### Q: Why don't I have the pull request events as an option when I configure my trigger?

A: Pull requests are only available with projects that use Git.
If your project uses TFVC, pull event triggers aren't available,
and your code event is called "Code checked in" instead of "Code pushed".

#### Q: How can I get multiple events to show up in my Slack channel?

A: Create a new subscription for each type of event you want.
For example, if you want to see build failures and new work items in your Slack channel,
create two additional subscriptions.



<!-- ENDSECTION -->
