---
ms.service: azure-devops
ms.subservice: azure-devops-integration
ms.topic: how-to
title: Integrate with Slack
description: Connect and monitor your pipelines with the Azure Pipelines app for Slack.
ms.author: jukullam
ms.date: 07/22/2024
monikerRange: 'azure-devops'
---
 
# Use Azure Pipelines with Slack

[!INCLUDE [version-eq-azure-devops](../../includes/version-eq-azure-devops.md)]

This article shows you how to use the [Azure Pipelines app for Slack](https://slack.com/apps/AFH4Y66N9-azure-pipelines) to monitor your pipeline events. You can establish and manage subscriptions for pipeline events like builds, releases, and pending approvals. Notifications for these events are delivered directly to your Slack channels.

[!INCLUDE [temp](../../includes/feature-support-cloud-only.md)] 

## Prerequisites

- A Slack account with permission to install an app to your Slack workspace.
- An Azure DevOps project with **Project Collection Administrators** or **Project Administrators** permissions.

## Install Azure Pipelines app

[Install the Azure Pipelines Slack app](https://azchatopprodcus1.azchatops.visualstudio.com/_slack/installslackapp) to your Slack workspace. Once the app installs, you see the following welcome message. Enter `/azpipelines` to start interacting with the app.

:::image type="content" source="media/integrations-slack/welcome-message.png" alt-text="A screenshot showing the Azure Pipelines app welcome message.":::

## Connect to your pipeline

Once the app is installed in your Slack workspace, you can connect the app to any pipeline you want to monitor. You must authenticate to Azure Pipelines before running any commands.

:::image type="content" source="media/integrations-slack/sign-in.png" alt-text="A screenshot showing the sign-in prompt message.":::

## Subscribe to pipelines

To start monitoring all pipelines in a project, enter `/azpipelines subscribe <project url>` in a channel, replacing `<project url>` with your Azure DevOps project URL. The project URL can link to any page within your project except to pipeline pages, for example `/azpipelines subscribe https://dev.azure.com/myorg/myproject/`.

You can monitor a specific pipeline by using `/azpipelines subscribe <pipeline url>`. The pipeline URL can link to any page within your pipeline that has a `definitionId` or a `buildId/releaseId` in the URL. For example:

- `/azpipelines subscribe https://dev.azure.com/myorg/myproject/_build?definitionId=123`
- `/azpipelines subscribe https://dev.azure.com/myorg/myproject/_release?definitionId=123&view=mine&_a=releases`

The `subscribe` command subscribes you to the following notifications by default:

- For build pipelines, *Builds completed*
- For release pipelines:
  - *Release deployment started*
  - *Release deployment completed*
  - *Release deployment approval pending*
- For YAML pipelines:
  - *Run stage state changed*
  - *Run stage waiting for approval*

:::image type="content" source="media/integrations-slack/events-subscription.png" alt-text="A screenshot showing notification example." lightbox="media/integrations-slack/events-subscription.png":::

## Manage subscriptions

To manage the subscriptions for a channel, enter `/azpipelines subscriptions`. This command lists all the current subscriptions for the channel and lets you add or remove subscriptions.

:::image type="content" source="media/integrations-slack/subscriptions-list.png" alt-text="A screenshot showing a list of subscriptions.":::

> [!NOTE]
> Team Administrators can't remove or modify subscriptions created by Project Administrators.

## Customize subscriptions

The default subscriptions don't have any filters applied, but you often want to customize these subscriptions according to your preferences. For instance, you might want receive notifications only for failed builds or deployments to production. You can apply filters to customize which messages you receive in your channel.

To customize a subscription:

1. Run the `/azpipelines subscriptions` command to list all your subscriptions.
1. Select **Add subscription**.
1. Select the event you want to subscribe to, and then select your desired configuration.
1. Select **Save**.

For example, to get notifications only for failed builds, select **Failed** under **Build status**.

:::image type="content" source="media/integrations-slack/custom-build-completed.png" alt-text="A screenshot showing how to customize a subscription.":::

## Approve deployments

You can approve deployments from within your Slack channel without going to Azure Pipelines by subscribing to the *Release deployment approval pending* notifications for Classic releases or the *Run stage waiting for approval* notifications for YAML pipelines. Both of these subscriptions are created by default when you subscribe to a pipeline.

:::image type="content" source="media/integrations-slack/approve.png" alt-text="A screenshot showing pipeline approval in Slack.":::

The Azure Pipelines app for Slack lets you handle all the checks and approval scenarios that are available in the Azure Pipelines portal. These scenarios include single approver, multiple approvers, and team-based approval. You can approve requests either individually or on behalf of a team.

:::image type="content" source="media/integrations-slack/approved.png" alt-text="A screenshot showing a predeployment pipeline approved in Slack.":::

## Remove all subscriptions

To declutter your channel, you can use the `/azpipelines unsubscribe all <project url>` command to unsubscribe from all pipelines in a project. For example, `/azpipelines unsubscribe all https://dev.azure.com/myorg/myproject`.
> [!IMPORTANT] 
> Only Project Administrators can run this command.

## Commands reference

The Azure Pipelines app for Slack supports the following commands:

| Command        | Description  |
| -------------------- |----------------|
| `/azpipelines subscribe <pipeline url or project url>`      | Subscribe to a pipeline or all pipelines in a project and receive notifications. | 
| `/azpipelines subscriptions`      | Add or remove subscriptions for this channel.      | 
| `/azpipelines feedback` | Report a problem or suggest a feature.      |
| `/azpipelines help`     | Get help on the commands. |
| `/azpipelines signin`  | Sign in to your Azure Pipelines account. |
| `/azpipelines signout`  | Sign out from your Azure Pipelines account. |
| `/azpipelines unsubscribe all <project url>` | Remove all project pipelines and their associated subscriptions from a channel. |

### Notifications in private channels

The Azure Pipelines app can also help you monitor pipelines activity in your private channels. You need to invite the bot to your private channel by using `/invite @azpipelines`. Once you add the bot, you can configure and control your notifications the same way as for a public channel.

## Conditions and limitations

- You can use the Azure Pipelines app for Slack only with Azure DevOps Services.
- To set up the subscriptions, you must be the an admin of the project containing the pipeline.
- Notifications aren't supported inside direct messages.
- Deployment approvals that have the **Revalidate identity of approver before completing the approval** policy applied aren't supported.
- **Third party application access via OAuth** must be enabled in Azure DevOps **Organization settings** > **Security** > **Policies**.

## Troubleshooting

[!INCLUDE [troubleshooting](includes/troubleshoot-authentication.md)]

## Related articles
- [Azure Boards with Slack](../../boards/integrations/boards-slack.md)
- [Azure Repos with Slack](../../repos/integrations/repos-slack.md)
- [Create a service hook for Azure DevOps with Slack](../../service-hooks/services/slack.md)