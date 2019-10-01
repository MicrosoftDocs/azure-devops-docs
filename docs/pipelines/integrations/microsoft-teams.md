---
ms.prod: devops
ms.technology: devops-collab
ms.topic: conceptual
title: Azure Pipelines with Microsoft Teams
description: Connect Azure Pipelines to Microsoft Teams and monitor your pipelines in your channel by subscribing to notifications 
ms.manager: bijuv
ms.author: atinb
author: atinb
ms.date: 09/19/2019
monikerRange: 'azure-devops'
---
 
# Azure Pipelines with Microsoft Teams

If [Microsoft Teams](https://products.office.com/microsoft-teams/group-chat-software) is your choice for collaboration, you can use the [Azure Pipelines app built for Microsoft Teams](https://appsource.microsoft.com/en-us/product/office/WA200000055?src=wnblogmar2018)
 to easily monitor the events for your pipelines. Set up and manage subscriptions for builds, releases, YAML pipelines, pending approvals and more from the app and get notifications for these events in your Teams channels.

> [!div class="mx-imgBorder"]
> ![Notifications image](_img/integrations-teams/notifications-teams.png)

## Add Azure Pipelines app to your team

Visit the App store in Microsoft Teams and search for the Azure Pipelines app. Upon installing, a welcome message from the app displays as shown in the following example. Use the `@azure pipelines` handle to start interacting with the app.

> [!div class="mx-imgBorder"]
> ![Welcome message image](_img/integrations-teams/welcome-message-teams.png)

## Connect the Azure Pipelines app to your pipelines

Once the app is installed in your team, you can connect the app to the pipelines you want to monitor. The app asks you to sign in & authenticate to Azure Pipelines before running any commands.

> [!div class="mx-imgBorder"]
> ![Sign in prompt image ](_img/integrations-teams/sign-in-teams.png)

> [!div class="mx-imgBorder"]
> ![Sign in prompt image2 ](_img/integrations-teams/sign-in2-teams.png)


To start monitoring a pipeline, use the following slash command inside a channel:

```
@azure pipelines subscribe [pipeline url]
```

The pipeline URL can be to any page within your pipeline that has a `definitionId` or `buildId/releaseId` present in the URL. 

For example:

```
@azure pipelines subscribe https://dev.azure.com/myorg/myproject/_build?definitionId=123
```

or:

```
@azure pipelines subscribe https://dev.azure.com/myorg/myproject/_release?definitionId=123&view=mine&_a=releases
```

For Build pipelines, the channel is subscribed to the *Build completed* notification. For Release pipelines, the channel is subscribed to the *Release deployment started*, *Release deployment completed*, and *Release deployment approval pending* notifications. For YAML pipelines, subscriptions are created for the *Run stage state changed* and *Run stage waiting for approval* notifications.

> [!div class="mx-imgBorder"]
> ![Subscriptions added image](_img/integrations-teams/subscriptions-added-confirmation-teams.png)

## Add or remove subscriptions

To manage the subscriptions for a channel, use the following command:

`@azure pipelines subscriptions`

This command lists all of the current subscriptions for the channel and allows you to add/remove subscriptions.

> [!div class="mx-imgBorder"]
> ![Subscriptions list image](_img/integrations-teams/subscriptions-list-teams.png)


## Using filters effectively to customize subscriptions

When a user subscribes to any pipeline, a few subscriptions are created by default without any filters being applied. Often, users have the need to customize these subscriptions. 
For example, users may want to get notified only when builds fail or when deployments are pushed to a production environment. The Azure Pipelines app supports filters to customize what you see in your channel.

1. Run the `@Azure Pipelines subscriptions` command
2. Select **View all subscriptions**. In the list of subscriptions, if there is a subscription that is unwanted or should be modified (Example: creating noise in the channel), select **Remove**
3. Scroll down and select the **Add subscription** button
4. Select the required pipeline and the event
5. Select the appropriate filters and save 

### Example: Get notifications only for failed builds

> [!div class="mx-imgBorder"]
> ![Build Filters](_img/integrations-teams/teams-build-filters.png)

### Example: Get notifications only if the deployments are pushed to prod environment

> [!div class="mx-imgBorder"]
> ![Release Filters](_img/integrations-teams/teams-release-filters.png)

## Approve deployments from your channel

You can approve deployments from within your channel without navigating to the Azure Pipelines portal by subscribing to the *Release deployment approval pending* notification for classic Releases or the *Run stage waiting for approval* notification for YAML pipelines. Both of these subscriptions are created by default when you subscribe to the pipeline.

> [!div class="mx-imgBorder"]
> ![Ready for approval](_img/integrations-teams/approve-teams.png)

Whenever the running of a stage is pending for approval, a notification card with options to approve or reject the request is posted in the channel. Approvers can review the details of
 the request in the notification and take appropriate action. In the following example, the deployment was approved and the approval status is displayed on the card.

> [!div class="mx-imgBorder"]
> ![Approved](_img/integrations-teams/approved-teams.png)

The app supports all of the checks and approval scenarios present in the Azure Pipelines portal, like single approver, multiple approvers (any one user, any order, in sequence), and teams as approvers. You can approve requests as an individual or on behalf of a team.

## Commands reference

Here are all the commands supported by the Azure Pipelines app:

| Slash command        | Functionality  |
| -------------------- |----------------|
| @azure pipelines subscribe [pipeline url]      | Subscribe to a pipeline to receive notifications | 
| @azure pipelines subscriptions      | Add or remove subscriptions for this channel | 
| @azure pipelines feedback | Report a problem or suggest a feature |
| @azure pipelines help     | Get help on the slash commands |
| @azure pipelines signin  | Sign in to your Azure Pipelines account |
| @azure pipelines signout  | Sign out from your Azure Pipelines account |


>[!NOTE]
> * You can use the Azure Pipelines app for Microsoft Teams only with a project hosted on Azure DevOps Services at this time.  
> * The user must be an admin of the project containing the pipeline to set up the subscriptions
> * Notifications are currently not supported inside chat/direct messages
> * Deployment approvals which have applied the **Revalidate identity of approver before completing the approval** policy are not supported
> * 'Third party application access via OAuth' must be enabled to receive notifications for the organization in Azure DevOps (Organization Settings -> Security -> Policies)

## Troubleshooting

If you are experiencing the following errors when using the
[Azure Pipelines app for Microsoft Teams](https://appsource.microsoft.com/en-us/product/office/WA200000055?src=wnblogmar2018), follow the procedures in this section. 

[!INCLUDE [troubleshooting](_shared/troubleshoot-authentication.md)]

In the **same browser**, start a new tab and sign in to `https://teams.microsoft.com/`. Run the `@Azure Pipelines signout` command and then run the `@Azure Pipelines signin` command in the channel where the Azure Pipelines app for Microsoft Teams is installed.

Select the `Sign in` button and you'll be redirected to a consent page like the one in the following example. Ensure that the directory shown beside the email is same as what was chosen in the previous step. Accept and complete the sign-in process.

> [!div class="mx-imgBorder"]
> ![Consent to the requested app permissions](_img/troubleshooting/consent-page-teams.png)

If these steps don't resolve your authentication issue, please reach out to us at `AzureDevOpsTeamsApps@microsoft.com`.

