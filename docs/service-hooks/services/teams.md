---
ms.subservice: azure-devops-service-hooks
ms.topic: conceptual
title: Azure DevOps integration with Microsoft Teams
description: See how to set up Azure DevOps notifications and approvals in your Microsoft Teams channels.
monikerRange: '<= azure-devops'
ms.date: 08/08/2024
---

# Azure DevOps integration with Microsoft Teams

[!INCLUDE [version-lt-eq-azure-devops](../../includes/version-lt-eq-azure-devops.md)]

This article describes how you can integrate your Azure DevOps project activities directly into your Microsoft Teams channels. For example, you can see the following Azure DevOps events in your Teams channels:

- Work item updates
- Pull requests
- Code commits
- Builds
- Release deployments and approvals

## Requirements and limitations

- To create Azure DevOps subscriptions in Teams, you must have **Project Administrator** permissions in your Azure DevOps project.

- To receive Azure DevOps notifications in Teams, you must have **Third party application access via OAuth** enabled in your Azure DevOps organization settings.

- Only Azure DevOps organizations in the same Microsoft Entra tenant as your Microsoft Teams account can be connected. Even if your email addresses are the same for Azure DevOps and Microsoft Teams, they can't be linked if they're backed by different tenants. For more information, see [Access via Microsoft Entra FAQs](../../organizations/accounts/faq-azure-access.yml#AlreadyConnected).

- Office 365 Connectors within Teams are being retired, and you might be unable to create new connectors. For more information, see [Retirement of Office 365 connectors within Microsoft Teams](https://devblogs.microsoft.com/microsoft365dev/retirement-of-office-365-connectors-within-microsoft-teams/). Features that provide similar functionality to Office 365 Connectors with better scalability and security include [Workflows](/power-automate/teams/install-teams-app) or the Azure DevOps Services apps for Teams.

## Azure DevOps Services apps for Teams

[!INCLUDE [temp](../../includes/feature-support-cloud-only.md)]

::: moniker range="azure-devops"

You can use the following apps that offer rich features to integrate with Microsoft Teams.

### Azure Boards app for Teams

The Azure Boards app for Teams helps you easily create and monitor work items from your Teams channels. You can create work items by using a command, or use message actions to convert conversations in the channel into work items. You can also set up and manage subscriptions to get notifications in your channel whenever work items are created or updated. For more information, see [Use the Azure Boards app in Microsoft Teams](../../boards/integrations/boards-teams.md).

### Azure Pipelines app for Teams

The Azure Pipelines app for Teams helps you easily monitor events in your pipelines from your Teams channels. You can set up and manage subscriptions for completed builds, releases, and pending approvals, and get notifications for these events in your channels. You can also approve builds and release deployments from your channels. For more information, see [Integrate Azure Pipelines with Microsoft Teams](../../pipelines/integrations/microsoft-teams.md).

### Azure Repos app for Teams

The Azure Repos app for Teams helps you easily monitor events in your repositories from your Teams channels. You can set up and manage subscriptions for code commits, pull request (PR) creation, and PR updates, and get notifications for these events in your channels. For more information, see [Use Azure Repos with Microsoft Teams](../../repos/integrations/repos-teams.md).

## Add and configure the Azure DevOps tab in Teams

To bring your project dashboard or Kanban board into Teams, you can install the Azure DevOps app in a tab in your Teams channel. The Azure DevOps app lets you insert content from the app in messages, and get notifications from the app in your channels.

1. In Teams, select **Apps** from the left menu and then search for *Azure DevOps*.

   :::image type="content" source="media/teams/search-azure-devops.png" alt-text="Screenshot that shows searching for Azure DevOps in Teams.":::

1. Select **Azure DevOps**, and then select **Add to a team**.

1. Select the Teams channel to add to the app to, and then select **Set up**.

   :::image type="content" source="media/teams/set-up.png" alt-text="Screenshot that shows selecting Set up for Azure DevOps in Teams.":::

1. Select **Select organization**, select your organization, and then select **Continue**.

   :::image type="content" source="media/teams/choose-devops-organization.png" alt-text="Screenshot that shows choosing the DevOps organization for Teams integration.":::

1. On the **Azure DevOps** screen, select a **Project**, and whether to add a **Dashboard** or a **Kanban board** to the tab. Select other configurations depending on your choice, and select whether you want to post to the channel about adding the tab.

   :::image type="content" source="media/teams/add-dashboard.png" alt-text="Screenshot that shows adding a Dashboard for Azure DevOps in Teams.":::

1. Select **Save**. The new tab and board appear in your channel.

   :::image type="content" source="media/teams/team-dashboard.png" alt-text="Screenshot that shows a Dashboard for an Azure DevOps project in Teams.":::

::: moniker-end

::: moniker range="< azure-devops" 

## Add the Azure DevOps Server app to a team

The Azure DevOps Server connector sends notifications about activities in your projects.

>[!NOTE]
>Office 365 Connectors within Teams are being retired, and new Office 365 Connector creation might be blocked. For more information, see [Retirement of Office 365 connectors within Microsoft Teams](https://devblogs.microsoft.com/microsoft365dev/retirement-of-office-365-connectors-within-microsoft-teams/). If you can't access the **Connectors** page from within the Teams desktop client, try using the Teams web client. The [Workflows](/power-automate/teams/install-teams-app) app in Teams provides similar functionality with better scalability and security.

1. In Teams, select **Apps** from the left menu and then search for *Azure DevOps Server*.

   :::image type="content" source="media/teams/search-azure-devops-server.png" alt-text="Screenshot that shows searching for Azure DevOps Server in Teams.":::

1. Select **Azure DevOps Server**, and then select **Add to a team**.

1. Select the channel to add to the app to, and then select **Set up a connector**.

   :::image type="content" source="media/teams/set-up-connector-server.png" alt-text="Screenshot that shows selecting Set up a connector for Azure DevOps Server in Teams.":::

1. On the **Azure DevOps Server** page, enter a name for the new Azure DevOps Server connection, and then select **Create**.

   :::image type="content" source="media/teams/create-server.png" alt-text="Screenshot that shows creating the Azure DevOps Server connection in Teams.":::

::: moniker-end

To manage your Teams apps and tabs, select **Apps** in the Teams menu and then select **Manage your apps** at the bottom of the **Apps** panel.

## Related content

::: moniker range="azure-devops"
- [Use the Azure Boards app in Microsoft Teams](../../boards/integrations/boards-teams.md)
- [Integrate Azure Pipelines with Microsoft Teams](../../pipelines/integrations/microsoft-teams.md)
- [Use Azure Repos with Microsoft Teams](../../repos/integrations/repos-teams.md)
- [Install the Workflows app in Microsoft Teams](/power-automate/teams/install-teams-app)

::: moniker-end

::: moniker range="< azure-devops"
- [Retirement of Office 365 connectors within Microsoft Teams](https://devblogs.microsoft.com/microsoft365dev/retirement-of-office-365-connectors-within-microsoft-teams/)
- [Install the Workflows app in Microsoft Teams](/power-automate/teams/install-teams-app)

::: moniker-end
