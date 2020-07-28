---
ms.technology: devops-collab
ms.topic: conceptual
title: Create a service hook Microsoft Teams
titleSuffix: Azure DevOps Server
description: Use Microsoft Teams with your Azure DevOps organization
monikerRange: '>= tfs-2017'
ms.date: 07/27/2020 
---

# Create a service hook for Azure DevOps with Microsoft Teams 

[!INCLUDE [version](../../includes/version-tfs-2017-through-vsts.md)]

See activity about your Team Foundation Server (2017.2 and later) projects directly in your Microsoft Teams channel, for example:
* Work item updates
* Pull requests
* Code commits
* Builds
* Release deployments and approvals


::: moniker range=">= azure-devops-2020"
> [!NOTE]
> For Azure DevOps Services and Azure DevOps 2020 and later versions, we recommend you use the following suite of apps which offer rich features, to integrate with Microsoft Teams.

### Azure Boards app for Teams

[Azure Boards app for Microsoft Teams](../../boards/integrations/boards-teams.md) helps to easily create and monitor work items from your Teams channels.Users can create work items using a command, or use message actions to convert conversations in the channel into work items. Users can also set up and manage subscriptions to get notifications in their channel whenever work items are created or updated. 

### Azure Pipelines app for Teams

[Azure Pipelines app for Microsoft Teams](../../pipelines/integrations/microsoft-teams.md) helps to easily monitor the events in your pipelines. Users can set up and manage subscriptions for completed builds, releases, pending approvals and more from the app and get notifications for these events in their channels. Users can also approve release deployments from their channels. 

### Azure Repos app for Teams

[Azure Repos app for Microsoft Teams](../../repos/integrations/repos-teams.md) helps to easily monitor the events in your repositories. Users can set up and manage subscriptions for code commits, PR creation and PR updates and more from the app and get notifications for these events in their channels. 

::: moniker-end

::: moniker range=">= tfs-2017 <= azure-devops-2019"

## Configure a new connector for Azure DevOps Server

Configuring integration between Azure DevOps Server and Teams is a two-step process. First set up a connector in Teams, then set up one or more service hook subscriptions in your Azure DevOps Server project.

> [!NOTE]  
> Project administrator permissions are required to create service hook subscriptions. 
> Events for YAML pipelines are not supported. 


### From Teams 

1. To bring events from Azure DevOps into Microsoft Teams, click the ellipsis or '...' at the top nav of your team channel, and select **Connectors**. 

   ![Open the Teams actions menu](./media/teams/open-teams-menu-s172.png) 

1. Select **Azure DevOps** from the list.

  :::image type="content" source="./media/teams/connectors-list-s172.png" alt-text="Connectors list":::

1. Choose the **Add** button.

2. Configure the connector. 

1. Copy the generated web hook URL. Provide this URL when you're setting up service hook subscriptions in your Azure DevOps project.

### From Azure DevOps Server

1. From your project page (```https://mycompany/tfs/[collection]/[project]```), navigate to **Service Hooks** in the settings:

   ![Azure DevOps Services, Service Hook Settings](media/slack/vsts-service-hooks.png)  

1. Click **Create subscription** and select the **Teams** service.

1. Choose the type of activity you want to appear in your Teams channel.	You can filter each of the triggers in specific ways.

	For example, the *pull request created* trigger can be filtered on the repository in which the pull request occurs, 
    the target branch it applies to, and the team members that are required or invited to review the request.

1. Paste the web hook URL from the Teams connector configuration step and click Finish.

Activity from your project begins appearing in your Teams channel.


## Configure Azure DevOps tabs in Microsoft Teams

1. To bring your Kanban board or dashboard into Microsoft Teams, click the '+' ('add new tab') button on the top nav of your team channel. Find the Website icon and add the link to your Azure DevOps board or dashboard. 

   ![Add a new tab to Teams channel](./media/teams/teams-as-website.png)

2. Once you've authenticated, your Kanban board or dashboard appears.
   

## Frequently asked questions (FAQs)

<!-- BEGINSECTION class="m-qanda" -->

### Q: How can I get multiple events from my TFS project to show up in my Teams channel?

A: Create a new subscription for each type of event you want.
For example, if you want to see build failures and new work items in your Teams channel,
create two additional subscriptions.

### Q: Why don't I see my organization when trying to connect Microsoft Teams?

A: Only organizations in the same Azure Active Directory tenant as your Microsoft Teams account can be connected. Even if your email address is the same for Azure DevOps Services and Microsoft Teams, they may be backed by different tenants, so they can't be linked.

Create a new Team in the same Azure Active Directory (Azure AD) as Azure DevOps Services, or move your Azure DevOps Services to the same Azure AD as Teams, see [Q: Why is my organization already connected to a directory? Can I change that directory?](../../organizations/accounts/faq-azure-access.md#q-why-is-my-organization-already-connected-to-a-directory-can-i-change-that-directory).

<!-- ENDSECTION -->

::: moniker-end