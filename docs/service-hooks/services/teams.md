---
ms.author: elbatk
author: elbatk
ms.prod: devops
ms.technology: devops-collab
ms.topic: conceptual
title: Microsoft Teams with VSTS and Team Foundation Server
description: Use Microsoft Teams with your VSTS account
monikerRange: '>= tfs-2017'
ms.date: 10/10/2017
---


# Microsoft Teams with Visual Studio Team Services (VSTS) and Team Foundation Server (TFS)

<b>VSTS | TFS 2017.2</b> 

>[!NOTE]  
>This topic applies to VSTS and to TFS 2017.2 and later versions.  
 
See activity about your VSTS or Team Foundation Server (2017.2 and later) projects directly in your Microsoft Teams channel, for example:

* Work item updates
* Pull requests
* Code commits
* Builds
* Release deployments and approvals

Also bring your VSTS Kanban board directly into Microsoft Teams as a tab. 

While the functionality is the same across VSTS and Team Foundation Server, the configuration process is different. Check out the appropriate getting started section below for details. 

>[!NOTE]  
>You must be a member of Project Administrators or Project Collection Administrators to configure the connector.

## Configuring a new connector for VSTS

1. To bring events from VSTS into Microsoft Teams, click the ellipsis or '...' at the top nav of your team channel, and then select Connectors.
<img alt="Adding a new Connector to Teams" src="./_img/teams/Teams Connector config 1.png" style="border: 1px solid #CCCCCC; width:80%; display:block;margin-right:auto;margin-left:auto;margin-top:10px" />

2. Select **VSTS** from the list.
<img alt="Connectors list" src="./_img/teams/Teams Connector config 2.png" style="border: 1px solid #CCCCCC; width:80%; display:block;margin-right:auto;margin-left:auto;margin-top:10px" />

3. Select your VSTS account (you may be prompted to sign in first), the project, and your team.
<img alt="VSTS Connector event configuration" src="./_img/teams/Teams Connector config 4.png" style="border: 1px solid #CCCCCC; width:80%; display:block;margin-right:auto;margin-left:auto;margin-top:10px" />

1. Choose the type of activity you want to be notified about. Depending on the event, you may be given further fields to filter down the notifications so you can filter out notifications your team does not care about. For example, for work item events, you can filter by area path, work item type, and even particular field changes.
<img alt="Example work item event configuration" src="./_img/teams/Teams Connector config 5.png" style="border: 1px solid #CCCCCC; width:80%; display:block;margin-right:auto;margin-left:auto;margin-top:10px" />

1. When you are happy with the configuration, save it.

Activity from your VSTS project will start appearing in your Teams channel.

### Changing an existing connector

To make a change to an existing connector:

1. Navigate to the "Configured" tab on the Connector dialog, find the connector, and click Manage.
<img alt="Example work item event configuration" src="./_img/teams/Teams Connector config 6.png" style="border: 1px solid #CCCCCC; width:80%; display:block;margin-right:auto;margin-left:auto;margin-top:10px" />

## Configuring a new connector for Team Foundation Server (TFS)

Configuring integration between Team Foundation Server and Teams is a two step process. First setup a connector in Teams, then setup one or more service hook subscriptions in your Team Foundation Server project.

>[!NOTE]  
>Project administrator permissions are required to create service hook subscriptions. 

### From Teams

1. To bring events from TFS into Microsoft Teams, click the ellipsis or '...' at the top nav of your team channel, and select Connectors. 
<img alt="Adding a new Connector to Teams" src="./_img/teams/Teams Connector config 1.png" style="border: 1px solid #CCCCCC; width:80%; display:block;margin-right:auto;margin-left:auto;margin-top:10px" />

1. Select **Team Foundation Server** from the list.
<img alt="Connectors list" src="./_img/teams/Teams Connector config tfs 1.png" style="border: 1px solid #CCCCCC; width:80%; display:block;margin-right:auto;margin-left:auto;margin-top:10px" />

1. Choose a name for the Connector, for example "My project notifications", and click Create. Note: this name is only used for managing the Connector.
<img alt="Connectors list" src="./_img/teams/Teams Connector config tfs 2.png" style="border: 1px solid #CCCCCC; width:80%; display:block;margin-right:auto;margin-left:auto;margin-top:10px" />

1. Copy the generated web hook URL. You will provide this URL when setting up service hook subscriptions in your TFS project.

### From Team Foundation Server

1. From your TFS team project page (```https://mycompany/tfs/[collection]/[project]```), navigate to **Service Hooks** in the settings:
<img alt="VSTS Service Hook Settings" src="./_img/slack/vsts-service-hooks.png" style="border: 1px solid #CCCCCC; width:70%; height:auto; display:block;margin-right:auto;margin-left:auto;margin-top:10px" />

1. Click **Create subscription** and select the "Teams" service.

1. Choose the type of activity you want to appear in your Teams channel.
> You can filter each of the triggers in specific ways.
> For example, the *pull request created* trigger can be filtered on the repository in which the pull request occurs,
> the target branch it applies to, and the team members that are required or invited to review the request.

1. Paste the web hook URL from the Teams connector configuration step and click Finish.

Activity from your TFS project will start appearing in your Teams channel.

## Kanban board in Teams (VSTS only)

<img alt="Kanban board tab in Teams channel" src="./_img/teams/Teams Kanban board 2.png" style="border: 1px solid #CCCCCC; width:100%; display:block;margin-right:auto;margin-left:auto;margin-top:10px" />

Developers and product managers can track and create new work items by bringing their VSTS Kanban boards right into Microsoft Teams. All your favorite Kanban board features - live refresh, card styling, tag coloring, extensions, and more - are available without leaving your team's channel.

>[!NOTE]  
>The Kanban board integration has the following limitations
>1. Only works for VSTS (Team Foundation Server is not supported)
>2. Only Kanban boards within VSTS accounts in the same organization (Azure Active Directory tenant) as your Microsoft Teams account can be configured.

### Configuring your VSTS Kanban board for Microsoft Teams

1. To bring your Kanban board into Microsoft Teams, click the '+' ('add new tab') button on the top nav of your team channel. Find the Visual Studio icon and follow the steps to connect to your VSTS account.

<img alt="Add a new tab to Teams channel" src="./_img/teams/Teams Kanban board 3.png" style="border: 1px solid #CCCCCC; width:80%; display:block;margin-right:auto;margin-left:auto;margin-top:10px" />

1. Once you have authenticated and selected your VSTS account, select the project, team and level of the board you want to add.

<img alt="Kanban board tab configuration" src="./_img/teams/Teams Kanban board 4.png" style="border: 1px solid #CCCCCC; width:80%; display:block;margin-right:auto;margin-left:auto;margin-top:10px" />

## Q & A

<!-- BEGINSECTION class="m-qanda" -->

####Q: How can I get multiple events from my TFS project to show up in my Teams channel?

A: Create a new subscription for each type of event you want.
For example, if you want to see build failures and new work items in your Teams channel,
create two additional subscriptions.

####Q: I don't see my VSTS account when trying to connect Microsoft Teams 

A: Only VSTS accounts in the same organization (Azure Active Directory tenant) as your Microsoft Teams account can be connected. This means even if the sign-in email address is the same for VSTS and Microsoft Teams, they may be backed by different tenants and therefore cannot be linked.

To resolve this you can create a new Team in the same Azure Active Directory (AAD) as VSTS, or move your VSTS to the same AAD as Teams (see [Q: Why is my VSTS account already connected to a directory? Can I change that directory?](../../organizations/accounts/faq-azure-access.md#connect-to-directory)).

<!-- ENDSECTION -->
