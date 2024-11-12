---
ms.service: azure-devops
ms.subservice: azure-devops-integration
ms.topic: how-to
ms.custom: freshness-fy22q2, cross-service
title: Integrate Microsoft Teams
description: Connect Azure Pipelines to Microsoft Teams, monitor your pipelines in your channel, and subscribe to notifications.
ms.manager: mijacobs
ms.author: jukullam
author: juliakm
ms.date: 07/12/2024
monikerRange: 'azure-devops'
---
 
# Integrate Azure Pipelines with Microsoft Teams

> [!NOTE]
> Microsoft Teams integration support for service hooks is retiring as of December 31, 2024 for new integrations and January 31, 2025 for existing integrations. We recommend using Power Automate workflows to provide maximum security for your data. For more information, see [Retirement of Office 365 connectors within Microsoft Teams](https://devblogs.microsoft.com/microsoft365dev/retirement-of-office-365-connectors-within-microsoft-teams/).


[!INCLUDE [version-eq-azure-devops](../../includes/version-eq-azure-devops.md)]

[!INCLUDE [temp](../../includes/feature-support-cloud-only.md)]

This article shows you how to use the Azure Pipelines app for Microsoft Teams to monitor pipeline events. You can set up and get notifications in your Teams channel for pipeline builds, releases, and approvals. Approvers can also approve releases from within the Teams channel.

> [!NOTE]
> Azure Pipelines notifications aren't supported inside Teams chat or direct messages.

## Prerequisites

- Access to a Team in Microsoft Teams where you can add an app.
- Project Administrator or Build Administrator [permissions](../policies/permissions.md) in an Azure DevOps project. For more information, see [Create a project](../../organizations/projects/create-project.md) and [Pipeline security resources](../security/resources.md).
- **Third party application access via OAuth** enabled in Azure DevOps organizational settings.

## Set up the Azure Pipelines app

1. In Microsoft Teams, select **Apps**, search for *Azure Pipelines*, and then select **Azure Pipelines**.
   
   :::image type="content" source="media/integrations-teams/select-azure-pipelines.png" alt-text="Screenshot of selecting the Apps button, then Azure Pipelines button.":::

1. Select the dropdown arrow next to **Add**, and select **Add to a team**.
 
   :::image type="content" source="media/integrations-teams/open-and-add-to-a-team.png" alt-text="Screenshot of selecting Open button and then Add to a team button.":::

1. Select or enter your team name, and then select **Set up a bot**.
   
   :::image type="content" source="media/integrations-teams/set-up-a-bot.png" alt-text="Screenshot of selecting the Set up a bot button.":::

## Use Azure Pipelines app commands

The Azure Pipelines Teams app supports the following commands:

| Slash command        | Functionality  |
| -------------------- |----------------|
| @azure pipelines signin  | Sign in to your Azure Pipelines account. |
| @azure pipelines signout  | Sign out from your Azure Pipelines account. |
| @azure pipelines subscribe \<pipeline url \| project url>      | Subscribe to a pipeline or all pipelines in a project to receive notifications.| 
| @azure pipelines subscriptions      | View, add, or remove subscriptions for this channel. | 
| @azure pipelines unsubscribe all \<project url> | Remove all pipelines belonging to a project and their associated subscriptions from a channel. |
| @azure pipelines help     | Get help on the commands. |
| @azure pipelines feedback | Report a problem or suggest a feature. |

### Sign in to Azure Pipelines

1. In the Teams conversation pane, enter `@azurePipelines signin`.
1. Select **Sign in** and complete authentication to Azure Pipelines.

### Subscribe to pipelines

Use the following commands to subscribe to and monitor all pipelines in a project or only specific pipelines.

- **All pipelines in a project:** The URL can be to your project or any page within your project, except to a pipeline. For example:

  ```
  @azure pipelines subscribe https://dev.azure.com/myorg/myproject/
  ```

- **A specific pipeline:** The pipeline URL can be to any page within a pipeline that has a `definitionId` or `buildId/releaseId` in the URL. For example:

  ```
  @azure pipelines subscribe https://dev.azure.com/myorg/myproject/_build?definitionId=123
  ```

#### Expand linked notifications

All replies for a particular post are linked together.

:::image type="content" source="media/integrations-teams/threads-pipelines-compact-view.png" alt-text="Screenshot showing the compact thread view.":::

To expand the thread, select the compacted thread link.

:::image type="content" source="media/integrations-teams/threads-pipelines-expanded-view.png" alt-text="Screenshot showing the expanded thread view.":::

### Manage subscriptions

When you subscribe to a pipeline, a few subscriptions get created by default without any filters applied. These subscriptions include **Run state changed** and **Run stage waiting for approval** for YAML pipelines, and **Release deployment approval pending** for Classic releases. You can remove these subscriptions or add more subscriptions.

The Azure Pipelines app also supports filters to customize what you see in your channel. For example, you might want to get notified only when builds fail or when deployments get pushed to a production environment.

To manage your subscriptions, complete the following steps.

1. To list all pipelines subscriptions, run the `@azure pipelines subscriptions` command.

   :::image type="content" source="media/integrations-teams/subscriptions-list-teams.png" alt-text="Screenshot showing view of list of subscriptions.":::

1. To remove a subscription, select **View all subscriptions**. Select **Remove** under any subscription you don't want, and then select **OK**.

1. To add a subscription, select **Add subscription**.

1. Select the event and the pipeline you want to subscribe to, and select **Next**.

1. Choose any **Stage** and **Environment** filters you want, select **Submit**, and then select **OK**.

   For example, the following subscription provides notifications for the **\_default** stage only when the **Completed** state is **Failed**.

   :::image type="content" source="media/integrations-teams/build-failure-notification.png" alt-text="Screenshot showing filters for notifications.":::

> [!NOTE]
> Team Administrators can't remove or modify subscriptions that are created by Project Administrators.

### See approval notifications

To see approval notifications, make sure you subscribe to the **Run stage waiting for approval** notification for YAML pipelines or the **Release deployment approval pending** notification for Classic releases. These subscriptions are created by default when you subscribe to the pipeline.

If you subscribe to the **Run stage approval completed** notification, you can also see when the stage is approved.

:::image type="content" source="media/integrations-teams/approved-teams.png" alt-text="Card showing approved deployment.":::

> [!NOTE]
> You can't subscribe to deployment approvals that have the **Revalidate identity of approver before completing the approval** policy applied.

### Approve from your channel

If you're an approver, you can approve deployments from within your Teams channel. The Azure Pipelines app supports all Azure Pipelines checks and approval scenarios. You can approve requests as an individual or for a team.

Whenever the running of a stage is pending your approval, the app posts a notification card with options to **Approve** or **Reject** the request in the channel. You can review the details of the request in the notification and take appropriate action.

:::image type="content" source="media/integrations-teams/approve-teams.png" alt-text="Screenshot showing ready for approval notification.":::

The response is sent to the app.

:::image type="content" source="media/integrations-teams/approve-teams-pending.png" alt-text="Screenshot showing approval pending notification.":::

If you subscribed to **Run stage approval completed** notifications, you can also see when the stage is approved.

### Unsubscribe from a channel

Run the `unsubscribe` command to delete all the subscriptions related to any pipeline in the project and remove the pipelines from the channel. For example:

```
@azure pipelines unsubscribe all https://dev.azure.com/myorg/myproject
```

:::image type="content" source="media/integrations-teams/unsubscribe-project.png" alt-text="Screenshot showing unsubscribe pending message.":::

To delete the project and all subscriptions from the channel, select **Proceed**.

> [!IMPORTANT] 
> Only Project Administrators can run this command.

## Use the compose extension

To help you search and share information about pipelines, the Azure Pipelines app for Teams supports a compose extension in messages. You can use the extension to search for pipelines in a project by pipeline ID or pipeline name.

To use the extension, you must be signed in to the Azure Pipelines project in the Teams channel. Select the **+** symbol in the message field, select **Azure Pipelines**, and then search for your pipeline or release. 

:::image type="content" source="media/integrations-teams/compose-extension.png" alt-text="Screenshot showing the compose extension.":::

### Preview of pipeline URLs

When you use the compose extension to add a pipeline URL to a Teams message, you see a preview similar to the following images. The preview helps to keep pipeline-related conversations relevant and up to date.

:::image type="content" source="media/integrations-teams/build-url-unfurling-teams.png" alt-text="Screenshot showing Build URL unfurling.":::

The following example shows a Release URL preview:

:::image type="content" source="media/integrations-teams/release-url-unfurling-teams.png" alt-text="Screenshot showing Release URL unfurling.":::

## Connect multiple tenants

If you use different emails or tenants for Microsoft Teams and Azure DevOps, follow these steps to sign in and connect based on your settings.

|Microsoft Teams |Azure DevOps  |Sign in action |
|---------|---------|---------|
|email1@abc.com (tenant1)        |  email1@abc.com (tenant1)     | Select **Sign in**        |
|email1@abc.com (tenant1)      | email2@pqr.com (tenant2)       | 1. Sign in to Azure DevOps. <br> 2. In the same browser, start a new tab and go to https://teams.microsoft.com/.<br> 3. Run the `sign in` command and select **Sign in**.        |
|email1@abc.com (tenant1)         |  email2@pqr.com (tenant2)       | 1. Select **Sign in with different email address**.<br> 2. In the email ID picker, use the email2 to sign in.       |
| email1@abc.com (tenant1)        | email2@pqr.com (nondefault tenant3)        | Not supported.       |

## Troubleshoot authentication issues

In the **same browser**, start a new tab and sign in to `https://teams.microsoft.com/`. Run the `@Azure Pipelines signout` command and then run the `@Azure Pipelines signin` command in the channel where the Azure Pipelines app for Microsoft Teams is installed.

Select the **Sign in** button, and complete the sign-in process. Ensure that the directory shown is the same as what you chose in the previous step. 

If these steps don't resolve your authentication issue, reach out to the [Developer Community](https://developercommunity.visualstudio.com/spaces/21/index.html).

## Related articles

- [Use Azure Boards with Microsoft Teams](../../boards/integrations/boards-teams.md)
- [Use Azure Repos with Microsoft Teams](../../repos/integrations/repos-teams.md)
