---
title: Use the Azure Boards app with Slack
titleSuffix: Azure Boards
description: Learn how to create work items and monitor work item activity in an Azure Boards project from within Slack.
ms.service: azure-devops
ms.subservice: azure-devops-integration
ms.topic: how-to
ms.custom: cross-service
ms.reviewer: karrg
ms.author: chcomley
author: chcomley
monikerRange: 'azure-devops'
ms.date: 10/20/2021
---
 
# Use the Azure Boards app with Slack to manage work items

[!INCLUDE [version-eq-azure-devops](../../includes/version-eq-azure-devops.md)] 


If you use [Slack](https://slack.com), you can use the [Azure Boards app for Slack](https://azchatopprodcus1.azchatops.visualstudio.com/_slack/installboardsapp) to create work items and monitor work item activity in your Azure Boards project from your Slack channel. 

The Azure Boards app for Slack allows users to set up and manage subscriptions in their Slack channel. They can manage subscriptions for create, update, and other work item events. Users can also get notifications for these 
events in their Slack channel. Conversations in the Slack channel can be used to create work items. Previews for work item URLs help users to start discussions around work.

![Pic: Notification](./media/integrations-slack/notifications.png)

Read this article to learn how to: 

> [!div class="checklist"]  
> * Add the Azure Boards app to your Slack workspace
> * Link and unlink your Azure Boards project to the Azure Boards app
> * Set up subscriptions to work item related events in your Slack channel
> * Create work items from your Slack channel
> * Monitor work item activity in your Slack channel  
> * Get notifications in private Slack channels

> [!NOTE]
> * Azure Boards and Slack integration is only supported for Azure DevOps Services.  
> * Notifications are currently not supported inside direct messages.

## Prerequisites

- To create a work item, you must be a contributor to the Azure Boards project. If you don't have a project yet, you can sign up and create a project. For more information, see [Start using Azure Boards](../get-started/index.md). 
- To create subscriptions in a Slack channel for work item events, you must be a member of the Azure Boards Project Administrators group  or Team Administrators group. To get added, see [Change project-level permissions](../../organizations/security/change-project-level-permissions.md) or [Add Team Administrator](../../organizations/settings/add-team-administrator.md). 
- To receive notifications, the **Third party application access via OAuth** setting must be enabled for the organization. See [Change application access policies for your organization](../../organizations/accounts/change-application-access-policies.md)



## Add the Azure Boards app to your Slack workspace

1. To install the Azure Boards app to your Slack workspace, open a web browser, sign into Slack, and open the [Azure Boards app](https://azchatopprodcus1.azchatops.visualstudio.com/_slack/installboardsapp). 

1. Once added, you'll see a welcome message from the app as shown in the following image. 

	![Pic: Welcome message](./media/integrations-slack/welcome-message.png)

1. Use the `/azboards` Slack handle to interact with the app. A list of commands is provided later in this article, [Command reference](#command-reference).

## Link your Azure Boards project to the Azure Boards app

To use the app, you must first link your Azure Boards project to your Slack channel. 

1. Once the app has been installed in your Slack workspace, connect and authenticate yourself to Azure Boards. 

	![screenshot of sign-in](./media/integrations-slack/signin.png)

1. After signing in, use the following slash command inside a Slack channel to link to the Azure Boards project that you specify with the URL:

	```
	/azboards link [project url]
	```

	For example:

	```
	/azboards link https://dev.azure.com/myorg/myproject
	```

Once the project is linked, you can create work items using `/azboards create` command or use message actions. 

## Set up subscriptions to monitor work items

You can create subscriptions to monitor work items at any time using the `/azboards subscriptions` command. You have an option of setting up 
subscriptions just after linking a project. 

1. Select area path you want, the event that you're interested in, and use the associated 
filters to customize your Slack channel. To easily set up subscriptions, your recently accessed area paths are shown in the area path dropdown.

   ![Set up subscriptions.](./media/integrations-slack/add-subscriptions.png)

   In case your team's area path doesn't appear in the Area path dropdown menu, follow the instructions mentioned in the next section, [Add area paths](#add-area-paths). Area paths added using the `/azboards addAreapath` command and area paths for which subscriptions are created in the Slack channel always appear in the Area path dropdown along with recently accessed area paths.


## Add area paths

You can add areas that your team works on to the channel so that they're always available for creating work items and subscriptions. This is important mainly for the teams with more than 100 area paths.

- Use the following command to add area paths from your project to the Slack channel.

	```
	/azboards addAreapath [area path]
	```

	For example:

	```
	/azboards addAreapath myproject\fabrikam
	```

	![add areapath success message](./media/integrations-slack/add-areapath.png)

- If you choose project name as your area path, then you'll receive notifications for all the area paths in the project. It's logically equivalent to choosing 'Any' area path.


## Create a work item with a command

1. With the Azure Boards app, you can create work items from your channel. The app supports custom work items as well.

- To create a work item, use `/azboards create`. 

	![Create work item using command](./media/integrations-slack/create-work-item-command.png)
	
2. You can create work items directly from a command by passing work item type and title as parameters. Work items get created only if they don't have any fields to be mandatorily filled.

	```
	/azboards create [work item type] [work item title]
	```

	For example:

	```
	/azboards create 'user story' Push cloud monitoring alerts to mobile devices
	```
	

## Create a work item from message actions

Often, discussions in a channel call for creation of work items. You can use message actions to create a work item. The selected message is prefilled in the description section of the work item. A link back to the conversation in the channel is stored in the Discussion section of the newly created work item, giving users 
access to the discussion that led to the creation of the work item.

- To create work items using message actions

	> [!div class="mx-imgBorder"]  
	> ![Create work item using message action](./media/integrations-slack/message-action-collated.png)


## Manage Azure Boards subscriptions

1. To view, add and remove subscriptions for a channel, use the `/azboards subscriptions` command:

	```
	/azboards subscriptions
	```

	This command lists all the current subscriptions for the channel and allows you to add new subscriptions and remove existing ones. As part of adding subscriptions, you can also customize what you get notified on by using various filters.

[!NOTE]Team administrators aren't able to remove or modify subscriptions created by Project administrators.

![Pic: View subscriptions](./media/integrations-slack/view-subscriptions.png)

## Previews of work item URLs

To support collaboration around work items discussed within a channel, a preview of work items referenced in the channel is displayed. When a user pastes the work 
item URL, a preview is shown similar to the following image. This preview helps to keep work-item-related conversations relevant and correct. 

![Pic: URL unfurling](./media/integrations-slack/url-unfurling.png)

For this feature to work, users have to be signed-in. Once they're signed in, this feature works for all channels in a workspace.

## Unlink a project from a channel

A Slack channel can only link to one Azure Boards project at a time. To link to a different project, you must first unlink the current project using `/azboards unlink` command. 

Unlinking a project deletes all the subscriptions along with added area paths from the channel. If the channel has no subscriptions, any user can unlink a project. However if a channel has subscriptions, only project admins can unlink a project from a channel.


## Command reference

The following table lists all the `/azboards` commands you can use in your Slack channel. 

| Slash command        | Functionality  |
| -------------------- |----------------|
|/azboards link [project url]	|Link a project to this channel to create work items and receive notifications|
|/azboards subscriptions	| Add or remove subscriptions for this channel|
|/azboards create or /azboards create [work item type] [title]	| Create a work item|
|/azboards addAreapath	[area path]| Add an area path from your project to this channel |
|/azboards signin	| Sign in to your Azure Boards organization|
|/azboards signout	| Sign out from your Azure Boards organization|
|/azboards unlink	| Unlink a project from this channel|
|/azboards feedback	| Report a problem or suggest a feature |

### Manage work in private channels

The Azure Boards app for Slack can help you create work items and monitor the work item activity in your private channels as well. To invite the bot to your private channel, enter 
 `/invite @azboards`. After you post that, you can create work items and manage your notifications in the same way as you would for a public channel.


## Troubleshoot errors 

If you're experiencing the following errors when using the [Azure Boards App for Slack](https://azchatopprodcus1.azchatops.visualstudio.com/_slack/installboardsapp), follow the procedures in this section. 

[!INCLUDE [troubleshooting](includes/boards-troubleshoot-authentication.md)]

In the **same browser**, start a new tab, go to `https://slack.com`, and sign in to your work space (**use web client**). Run the `/azboards signout` command followed by the `/azboards signin` command. 

Select the `Sign in` button and you'll be redirected to a consent page like the one in the following example. Ensure that the directory shown beside the email is same as what was chosen in the previous step. Accept and complete the sign-in process.

> [!div class="mx-imgBorder"]
> ![Consent to the requested app permissions](media/troubleshooting/boards-consent-page-slack.png)

If these steps don't resolve your authentication issue, reach out to us at [Developer Community](https://developercommunity.visualstudio.com/spaces/21/index.html).


## Related articles

- [Define area paths and assign to a team](../../organizations/settings/set-area-paths.md)
- [Azure Pipelines with Slack](../../pipelines/integrations/slack.md)
- [Azure Repos with Slack](../../repos/integrations/repos-slack.md)
- [Create a service hook for Azure DevOps with Slack](../../service-hooks/services/slack.md)