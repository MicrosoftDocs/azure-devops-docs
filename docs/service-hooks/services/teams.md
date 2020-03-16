---
title: Create a service hook Microsoft Teams
titleSuffix: Azure DevOps Server
description: Use Microsoft Teams with your Azure DevOps organization
ms.technology: devops-collab
ms.topic: conceptual
monikerRange: '>= tfs-2017'
ms.date: 03/16/2020
---

# Create a service hook for Team Foundation Server (TFS) with Microsoft Teams

>[!NOTE]
> If you use Azure DevOps Services, we recommend you use  
[Azure Pipelines app for Microsoft Teams](https://aka.ms/AzurePipelinesTeamsIntegration), [Azure Pipelines app for Microsoft Teams](https://aka.ms/AzurePipelinesTeamsIntegration) and [Azure Repos app for Microsoft Teams](https://aka.ms/AzureReposTeamsIntegration)

 
See activity about your Team Foundation Server (2017.2 and later) projects directly in your Microsoft Teams channel, for example:

* Work item updates
* Pull requests
* Code commits
* Builds
* Release deployments and approvals


## Configuring a new connector for TFS

Configuring integration between Team Foundation Server and Teams is a two step process. First setup a connector in Teams, then setup one or more service hook subscriptions in your Team Foundation Server project.

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

1. Copy the generated web hook URL. You will provide this URL when setting up service hook subscriptions in your TFS project.

### From Team Foundation Server

1. From your TFS team project page (```https://mycompany/tfs/[collection]/[project]```), navigate to **Service Hooks** in the settings:

   <img alt="Azure DevOps Services Service Hook Settings" src="./media/slack/vsts-service-hooks.png" style="width:70%; height:auto;" />

1. Click **Create subscription** and select the "Teams" service.

1. Choose the type of activity you want to appear in your Teams channel.
   > You can filter each of the triggers in specific ways.
   > For example, the *pull request created* trigger can be filtered on the repository in which the pull request occurs,
   > the target branch it applies to, and the team members that are required or invited to review the request.

1. Paste the web hook URL from the Teams connector configuration step and click Finish.

Activity from your TFS project will start appearing in your Teams channel.

## Q & A

<!-- BEGINSECTION class="m-qanda" -->

### Q: How can I get multiple events from my TFS project to show up in my Teams channel?

A: Create a new subscription for each type of event you want.
For example, if you want to see build failures and new work items in your Teams channel,
create two additional subscriptions.

<!-- ENDSECTION -->
