---
ms.author: elbatk
author: elbatk
ms.prod: devops
ms.technology: devops-collab
ms.topic: conceptual
title: Create a service hook for Azure DevOps Services and TFS with Microsoft Teams
description: Use Microsoft Teams with your Azure DevOps Services organization
monikerRange: '>= tfs-2017'
ms.date: 2/08/2019
---


# Create a service hook for Azure DevOps Services and Team Foundation Server (TFS) with Microsoft Teams

<b>Azure DevOps Services | TFS 2017.2</b> 

>[!NOTE]  
>This topic applies to Azure DevOps Services and to TFS 2017.2 and later versions.  
 
See activity about your Azure DevOps Services or Team Foundation Server (2017.2 and later) projects directly in your Microsoft Teams channel, for example:

* Work item updates
* Pull requests
* Code commits
* Builds
* Release deployments and approvals

Also bring your Azure DevOps Services Kanban board directly into Microsoft Teams as a tab. 

While the functionality is the same across Azure DevOps Services and Team Foundation Server, the configuration process is different. Check out the appropriate getting started section below for details. 

>[!NOTE]  
>You must be a member of Project Administrators or Project Collection Administrators to configure the connector.

## Configuring a new connector for Azure DevOps Services

1. To bring events from Azure DevOps Services into Microsoft Teams, click the ellipsis or '...' at the top nav of your team channel, and then select Connectors.

    <img alt="Adding a new Connector to Teams" src="./_img/teams/Teams Connector config 1.png" style="border: 1px solid #CCCCCC; width:80%; display:block;margin-right:auto;margin-left:auto;margin-top:10px" />

2. Select **Azure DevOps Services** from the list.

    <img alt="Connectors list" src="./_img/teams/Teams Connector config 2.png" style="border: 1px solid #CCCCCC; width:80%; display:block;margin-right:auto;margin-left:auto;margin-top:10px" />

3. Select your organization (you may be prompted to sign in first), the project, and your team.

    <img alt="Azure DevOps Services Connector event configuration" src="./_img/teams/Teams Connector config 4.png" style="border: 1px solid #CCCCCC; width:80%; display:block;margin-right:auto;margin-left:auto;margin-top:10px" />

4. Choose the type of activity you want to be notified about. Depending on the event, you may be given further fields to filter down the notifications so you can filter out notifications your team does not care about. For example, for work item events, you can filter by area path, work item type, and even particular field changes.

    <img alt="Example work item event configuration" src="./_img/teams/Teams Connector config 5.png" style="border: 1px solid #CCCCCC; width:80%; display:block;margin-right:auto;margin-left:auto;margin-top:10px" />

5. When you are happy with the configuration, save it.

Activity from your Azure DevOps Services project will start appearing in your Teams channel.

### Changing an existing connector

To make a change to an existing connector:

1. Navigate to the "Configured" tab on the Connector dialog, find the connector, and click Manage.
<img alt="Example work item event configuration" src="./_img/teams/Teams Connector config 6.png" style="width:80%;" />

## Configuring a new connector for TFS

Configuring integration between Team Foundation Server and Teams is a two step process. First setup a connector in Teams, then setup one or more service hook subscriptions in your Team Foundation Server project.

>[!NOTE]  
>Project administrator permissions are required to create service hook subscriptions. 

### From Teams

1. To bring events from TFS into Microsoft Teams, click the ellipsis or '...' at the top nav of your team channel, and select Connectors. 

   <img alt="Adding a new Connector to Teams" src="./_img/teams/Teams Connector config 1.png" style="width:80%;" />

1. Select **Team Foundation Server** from the list.

   <img alt="Connectors list" src="./_img/teams/Teams Connector config tfs 1.png" style="width:80%;" />

1. Choose a name for the Connector, for example "My project notifications", and click Create. Note: this name is only used for managing the Connector.
<br/>
<img alt="Connectors list" src="./_img/teams/Teams Connector config tfs 2.png" style="width:80%;" />

1. Copy the generated web hook URL. You will provide this URL when setting up service hook subscriptions in your TFS project.

### From Team Foundation Server

1. From your TFS team project page (```https://mycompany/tfs/[collection]/[project]```), navigate to **Service Hooks** in the settings:

   <img alt="Azure DevOps Services Service Hook Settings" src="./_img/slack/vsts-service-hooks.png" style="width:70%; height:auto;" />

1. Click **Create subscription** and select the "Teams" service.

1. Choose the type of activity you want to appear in your Teams channel.
   > You can filter each of the triggers in specific ways.
   > For example, the *pull request created* trigger can be filtered on the repository in which the pull request occurs,
   > the target branch it applies to, and the team members that are required or invited to review the request.

1. Paste the web hook URL from the Teams connector configuration step and click Finish.

Activity from your TFS project will start appearing in your Teams channel.

## Kanban board & Dashboards in Teams (Azure DevOps Services only)

<img alt="Kanban board tab in Teams channel" src="./_img/teams/Teams Kanban board 2.png" style="width:100%;" />

Bring in your teams kanban board or favorite dashboard directly into Microsoft Teams.

>[!NOTE]  
>The Kanban board and Dashboard integration has the following limitations:
>1. Only works for Azure DevOps Services (Team Foundation Server is not supported)
>2. Only Kanban boards and Dashboards within organizations in the same organization (Azure Active Directory tenant) as your Microsoft Teams account can be configured.

### Configuring Azure DevOps Services Tabs in Microsoft Teams

1. To bring your Kanban board or Dashboard into Microsoft Teams, click the '+' ('add new tab') button on the top nav of your team channel. Find the Visual Studio icon and follow the steps to connect to your organization.

   <img alt="Add a new tab to Teams channel" src="./_img/teams/Teams Kanban board 3.png" style="width:80%;" />

1. Once you have authenticated and selected your organization, you will be displayed a screen to select a Kanban board or Dashboard.
 <br/>
 <img alt="Teams tab configuration" src="./_img/teams/Teams Kanban board 4.png" style="width:80%;" />

 <br>
 <img alt="Select Kanban board or Dashboard tab configuration" src="./_img/teams/Teams Kanban board 6.png" style="width:80%;" />

## Q & A

<!-- BEGINSECTION class="m-qanda" -->

#### Q: How can I get multiple events from my TFS project to show up in my Teams channel?

A: Create a new subscription for each type of event you want.
For example, if you want to see build failures and new work items in your Teams channel,
create two additional subscriptions.

#### Q: I don't see my organization when trying to connect Microsoft Teams 

A: Only organizations in the same organization (Azure Active Directory tenant) as your Microsoft Teams account can be connected. This means even if the sign-in email address is the same for Azure DevOps Services and Microsoft Teams, they may be backed by different tenants and therefore cannot be linked.

To resolve this you can create a new Team in the same Azure Active Directory (Azure AD) as Azure DevOps Services, or move your Azure DevOps Services to the same Azure AD as Teams (see [Q: Why is my organization already connected to a directory? Can I change that directory?](../../organizations/accounts/faq-azure-access.md#connect-to-directory)).

<!-- ENDSECTION -->
