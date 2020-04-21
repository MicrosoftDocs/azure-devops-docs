---
title: Create a service hook Microsoft Teams
titleSuffix: Azure DevOps Services, TFS 2017
description: Use Microsoft Teams with your Azure DevOps Services or TFS organization
ms.technology: devops-collab
ms.topic: conceptual
monikerRange: '>= tfs-2017'
ms.date: 04/21/2020
---

# Create a service hook with Microsoft Teams

>[!NOTE]
> If you're only interested in integrating Microsoft Teams with Azure Pipelines, we recommend you use our 
[Azure Pipelines app for Microsoft Teams](https://aka.ms/AzurePipelinesTeamsIntegration).

[!INCLUDE [version-tfs-2017-through-vsts](../../includes/version-tfs-2017-through-vsts.md)]

In this article, learn how to configure a service hook to connect with Microsoft Teams. The functionality is the same across Azure DevOps Services and Team Foundation Server. But, the configuration process is different for creating a service hook with Microsoft Teams. You can see activity about your Azure DevOps Services or Team Foundation Server (2017.2 and later) projects directly in your Microsoft Teams channel, for example:

* Work item updates
* Pull requests
* Code commits
* Builds
* Release deployments and approvals

You can also bring your Azure DevOps Services Kanban board directly into Microsoft Teams as a tab.

> [!IMPORTANT]
> This article applies to Azure DevOps Services and to TFS **2017.2** and later versions.  

## Prerequisites

- You must be a member of the Project Administrators or [Project Collection Administrators group](../../organizations/security/lookup-organization-owner-admin.md) to configure the connector.
- Third-party application access via OAuth must be enabled for the organization. 

  To enable this setting, navigate to **Organization settings** > **Security** > **Policies**, and then set the **Third-party application access via OAuth for the organization** setting to **On**.

  :::image type="content" source="../../boards/integrations/media/troubleshooting/third-party-app-consent.png" alt-text="Enable the Third-party application access via OAuth for the organization setting"


## Configuring a new connector for Azure DevOps Services

1. To bring events from Azure DevOps Services into Microsoft Teams, click the ellipsis or '...' at the top nav of your team channel, and then select Connectors.

    <img alt="Adding a new Connector to Teams" src="./media/teams/Teams Connector config 1.png" style="border: 1px solid #CCCCCC; width:80%; display:block;margin-right:auto;margin-left:auto;margin-top:10px" />

2. Select **Azure DevOps Services** from the list.

    <img alt="Connectors list" src="./media/teams/Teams Connector config 2.png" style="border: 1px solid #CCCCCC; width:80%; display:block;margin-right:auto;margin-left:auto;margin-top:10px" />

3. Select your organization (you may be prompted to sign in first), the project, and your team.

    <img alt="Azure DevOps Services Connector event configuration" src="./media/teams/Teams Connector config 4.png" style="border: 1px solid #CCCCCC; width:80%; display:block;margin-right:auto;margin-left:auto;margin-top:10px" />

4. Choose the type of activity you want to be notified about. Depending on the event, you may be given further fields to filter down the notifications so you can filter out notifications your team doesn't care about. For example, for work item events, you can filter by area path, work item type, and even particular field changes.

    <img alt="Example work item event configuration" src="./media/teams/Teams Connector config 5.png" style="border: 1px solid #CCCCCC; width:80%; display:block;margin-right:auto;margin-left:auto;margin-top:10px" />

5. When you're happy with the configuration, save it.

Activity from your Azure DevOps Services project will start appearing in your Teams channel.

### Changing an existing connector

To make a change to an existing connector:

1. Navigate to the "Configured" tab on the Connector dialog, find the connector, and click Manage.
<img alt="Example work item event configuration" src="./media/teams/Teams Connector config 6.png" style="width:80%;" />

## Configuring a new connector for TFS

Configuring integration between Team Foundation Server and Teams is a two-step process. First set up a connector in Teams, then set up one or more service hook subscriptions in your Team Foundation Server project.

>[!NOTE]  
>Project administrator permissions are required to create service hook subscriptions. 

### From Teams

1. To bring events from TFS into Microsoft Teams, click the ellipsis or '...' at the top nav of your team channel, and select Connectors. 

   <img alt="Adding a new Connector to Teams" src="./media/teams/Teams Connector config 1.png" style="width:80%;" />

1. Select **Team Foundation Server** from the list.

   <img alt="Connectors list" src="./media/teams/Teams Connector config tfs 1.png" style="width:80%;" />

1. Choose a name for the Connector, for example "My project notifications", and click Create. Note: this name is only used for managing the Connector.
<br/>
<img alt="Connectors list" src="./media/teams/Teams Connector config tfs 2.png" style="width:80%;" />

1. Copy the generated web hook URL. Provide this URL when you're setting up service hook subscriptions in your TFS project.

### From Team Foundation Server

1. From your TFS team project page (```https://mycompany/tfs/[collection]/[project]```), navigate to **Service Hooks** in the settings:

   <img alt="Azure DevOps Services, Service Hook Settings" src="./media/slack/vsts-service-hooks.png" style="width:70%; height:auto;" />

1. Click **Create subscription** and select the "Teams" service.

1. Choose the type of activity you want to appear in your Teams channel.
   > You can filter each of the triggers in specific ways.
   > For example, the *pull request created* trigger can be filtered on the repository in which the pull request occurs,
   > the target branch it applies to, and the team members that are required or invited to review the request.

1. Paste the web hook URL from the Teams connector configuration step and click Finish.

Activity from your TFS project will start appearing in your Teams channel.

## Kanban board & Dashboards in Teams (Azure DevOps Services only)

<img alt="Kanban board tab in Teams channel" src="./media/teams/Teams Kanban board 2.png" style="width:100%;" />

Bring in your teams kanban board or favorite dashboard directly into Microsoft Teams.

>[!NOTE]  
>The Kanban board and Dashboard integration has the following limitations:
>1. Only works for Azure DevOps Services (Team Foundation Server is not supported)
>2. Only Kanban boards and Dashboards within organizations in the same organization (Azure Active Directory tenant) as your Microsoft Teams account can be configured.

### Configuring Azure DevOps Services Tabs in Microsoft Teams

1. To bring your Kanban board or Dashboard into Microsoft Teams, click the '+' ('add new tab') button on the top nav of your team channel. Find the Visual Studio icon and follow the steps to connect to your organization.

   <img alt="Add a new tab to Teams channel" src="./media/teams/Teams Kanban board 3.png" style="width:80%;" />

2. Once you've authenticated and selected your organization, you see a screen where you can select a Kanban board or Dashboard.
   <br/>
   <img alt="Teams tab configuration" src="./media/teams/Teams Kanban board 4.png" style="width:80%;" />

   <br>
   <img alt="Select Kanban board or Dashboard tab configuration" src="./media/teams/Teams Kanban board 6.png" style="width:80%;" />

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
