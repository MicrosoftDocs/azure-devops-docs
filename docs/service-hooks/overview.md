---
title: Integrate with service hooks
description: Perform tasks with other services when events happen in your project in Azure DevOps.
ms.assetid: c0617128-b67c-4ec4-b1c9-e65e1b3ab82c
ms.subservice: azure-devops-service-hooks
ms.topic: conceptual
ms.author: chcomley
author: chcomley
monikerRange: '<= azure-devops'
ms.date: 11/21/2022
---

# Integrate with service hooks

[!INCLUDE [version-lt-eq-azure-devops](../includes/version-lt-eq-azure-devops.md)]

Service hooks let you run tasks on other services when events happen in your project in Azure DevOps.

For example, you can create a card in Trello when a work item gets created or send a push notification to your team's mobile devices when a build fails. You can also use service hooks in custom apps and services as a more efficient way to drive activities when events happen in your projects.

## How do service hooks work?

Service hook **publishers** define a set of *events* that you can subscribe to. 
**Subscriptions** listen for these *events* and define **actions** to take based on the event. 

Subscriptions also target **consumers**, which are external services that can run their own actions 
when events occur.

![Diagram of service hooks.](./media/service-hooks.png)

::: moniker range=" azure-devops"

> [!NOTE]
> Service hooks require allowing IP ranges for inbound connection to service endpoints. The service endpoint is the set of properties provided to a service hook. For more information, see [Allowed address lists and network connections, IP addresses and range restrictions](../organizations/security/allow-list-ip-url.md#range-restrictions).

::: moniker-end


## Available services

The following services are available as the target of service hooks. For more information about other apps and services that integrate with Azure DevOps, go to the [Visual Studio Marketplace](https://marketplace.visualstudio.com/#AzureDevOpsServices).


|Service  |Supported events  | Supported actions |
|---------|---------|-------|
|[App Center](/appcenter/dashboard/bugtracker/)   |Work item updated | Send notification |
|[AppVeyor](https://www.appveyor.com/docs/)     | Code pushed        |Trigger an AppVeyor build |
|[Azuqua](https://go.microsoft.com/fwlink/?LinkID=521778)   | All        | Post event to FLO |
|[Azure App Service](https://go.microsoft.com/fwlink/?LinkId=613645)  | Code pushed        | Deploy web app   |
|[Azure Service Bus](/azure/devops/pipelines/tasks/reference/publish-to-azure-service-bus-v1)    | All        | Send a message to a Notification Hub, Service Bus Queue, or Service Bus Topic  |
|[Azure Storage](/azure/azure-functions/functions-integrate-storage-queue-output-binding)   |  All | Insert a message in a Storage Queue |
|[Bamboo](https://confluence.atlassian.com/bamboo/using-webhooks-1018270680.html)    | Build completed, Code pushed | Queue a build |
|[Campfire](https://go.microsoft.com/fwlink/?LinkID=393613)   |  All | Post a message to a room |
|[Datadog](./services/datadog.md)  |  All  | Post an event in Datadog |
|[Grafana](./services/grafana.md)  | Release deployment completed | Add annotation to Grafana database |
|HipChat    | (No longer supported)        | |
|[HockeyApp](https://aka.ms/vsts-hockeyapp-integration)   | Work item updated| Send notification |
|[Jenkins](./services/jenkins.md)     |  Build completed, code pushed, PR merge attempted, release deployment completed | Trigger generic or Git build |
|[Microsoft Teams](./services/teams.md)    |   All  | Post a message to a channel |
|[MyGet](https://docs.myget.org/docs/reference/webhooks)  | Build completed, code pushed | Publish NuGet package to MyGet, trigger a MyGet build |
|[Office 365](/office/office-365-management-api/office-365-management-activity-api-reference#start-a-subscription) | All  | Post a message to a group |
|[Slack](./services/slack.md)   |  All       | Post a message to a channel |
|[Trello](./services/trello.md)  | All | Create a card or list |
|[UserVoice](https://feedback.uservoice.com/knowledgebase/articles/363410-vsts-azure-devops-integration)    |  Work item created or updated       | Send linked work item event |
|[Web Hooks](./services/webhooks.md) | All | Post via HTTP |
|[Workplace Message Apps](https://aka.ms/WorkplaceMessagingApps-Integration) | All | Send notifications |
|[Zapier](https://zapier.com/apps/webhook/integrations) | All | Send notification |
| [Zendesk](https://support.zendesk.com/hc/articles/204890268-Creating-webhooks-with-the-HTTP-target) | Work item commented on | Create a private comment in a ticket |

## Create a subscription

When you integrate one of these services with Azure DevOps, you must create a new subscription. In many cases, you need to do some work in the other service, too. For specific details, 
check out the information on the service that you're interested in.

::: moniker range=">= azure-devops-2019"

1.	Open the admin page for a project in web access.
    
    <img alt="Screenshot of highlighted Project settings button." src="./media/devops-service-hooks.png" />

1. 	Run the wizard to create the subscription.

    ![Screenshot of highlighted button, Create subscription.](./media/devops-create-subscription.png)
 
1.	Select the service that you want to integrate with.

    :::image type="content" source="./media/select-service.png" alt-text="Select the service to integrate":::   
 
1.	Select the event to trigger on and any applicable filters.

    :::image type="content" source="./media/trello-wizard-event.png" alt-text="Select the event to trigger on and any filters":::  
 
1.	Select an action to run on the target service. 

	> [!NOTE]
    > The list of available actions may be limited based on the event type that you selected. 

    :::image type="content" source="./media/trello-wizard-action.png" alt-text="Screenshot showing selection of an action for the target service.":::  

1.	To confirm the settings are correct, test the subscription and then finish the wizard.

    :::image type="content" source="./media/test1.png" alt-text="Screenshot showing test notification 1.":::  
	
    :::image type="content" source="./media/test2.png" alt-text="Screenshot showing test notification 2.":::  
 
::: moniker-end

::: moniker range="tfs-2018"

1.	Open the admin page for a project in web access.

    :::image type="content" source="./media/openadmin.png" alt-text="Screenshot of the admin page."::: 

1. 	Create a subscription by running the wizard.

    :::image type="content" source="./media/createfirst.png" alt-text="Screenshot of highlighted box, Create subscription, to select to run the subscription wizard."::: 
 
1.	Select the service you want to integrate with.

    :::image type="content" source="./media/select-service.png" alt-text="Screenshot showing services selection to integrate.":::  
 
1.	Select the event to trigger on and any filters (if applicable).

    :::image type="content" source="./media/trello-wizard-event.png" alt-text="Screenshot showing selection of the event to trigger on.":::  
 
1.	Select an action to run on the target service. 

	> [!NOTE]
    > The list of available actions may be limited based on the event type you selected. 

    :::image type="content" source="./media/trello-wizard-action.png" alt-text="Screenshot showing selected action to perform on the target service.":::  

1.	To confirm the settings are correct, test the subscription and then finish the wizard.

    :::image type="content" source="./media/test1.png" alt-text="Screenshot showing test notification 1.":::  
	
    :::image type="content" source="./media/test2.png" alt-text="Screenshot showing test notification 2.":::  
 
::: moniker-end

## FAQs

<a id="subscription-permissions" /> 

### Q: What permissions do I need to set up a subscription?

A: *Edit subscriptions* and *View subscriptions*. By default, only project administrators 
have these permissions. To grant them to other users directly, you can use the [command line tool](../organizations/security/manage-tokens-namespaces.md) or the [Security](/rest/api/azure/devops/security/) REST API. 

### Q: What are the security implications of granting *Edit subscriptions* and *View subscriptions* permissions?

A: The user with these permissions can see all subscriptions created in the 
project and the notification history for those subscriptions. That user can then 
create any type of service hook subscription in that project. If the user sets up a 
subscription for a resource that they don't otherwise have permission to access, the 
subscription won't get triggered. 

**For example:** If you don't have access to work items in area path XYZ, and you set up a 
subscription to the work item update events, you don't get notifications for updates 
to work items in area path XYZ. But, if another user, who does have access to the work 
items in area path XYZ, receives those "work item update" events, then you could see the 
notification history of the other user's events, which includes work item data that you 
don't otherwise have access to.

### Q: Can I create service hook subscriptions for a project programmatically?

A: Yes. For more information, see [Create a service hooks subscription](create-subscription.md).

### Q: Can I remove an app's access to my organization after I've authorized it?

A: Yes. You can revoke authorizations from your profile.

1. 	Go to your profile page from https://visualstudio.microsoft.com/. 

	Make sure you start from the Visual Studio site (https://visualstudio.microsoft.com/) 
	instead of your organization (```https://dev.azure.com/{orgName}```) because your profile accessed from your organization takes you to the wrong implementation 
	of the authorizations management feature.

2.	Manage your authorizations.
	
	:::image type="content" source="media/Profile-manage-applications.png" alt-text="Screenshot showing highlighted Manage applications button.":::
	
3.	Revoke any authorizations you no longer want to allow.

	:::image type="content" source="media/Authorizations.png" alt-text="Screenshot showing Revoke option for authorizations.":::
	
### Q: Why can't we set up service hooks for HipChat anymore?

A: Atlassian officially dropped support for HipChat. See more on that announcement [here](https://www.atlassian.com/partnerships/slack/faq#faq-3ccc5a61-711b-4ef2-9ca2-3a34b2ec143b).

## Related articles

* [Troubleshoot service hooks and FAQs](troubleshoot.md)
* [Visual Studio Marketplace](https://marketplace.visualstudio.com/azuredevops)
* [Billing information](../organizations/billing/overview.md)
