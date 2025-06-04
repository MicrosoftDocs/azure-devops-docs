---
title: Integrate with Service Hooks
description: Become familiar with service hooks and find out how to use them to perform tasks in other services when events happen in your Azure DevOps project.
ms.assetid: c0617128-b67c-4ec4-b1c9-e65e1b3ab82c
ms.subservice: azure-devops-service-hooks
ms.topic: conceptual
ms.author: chcomley
author: chcomley
monikerRange: '<= azure-devops'
ms.date: 06/04/2025
# customer intent: As a team member, I want to find out how to use service hooks so that I can automate tasks in other services when events happen in my Azure DevOps project.
---

# Integrate with service hooks

[!INCLUDE [Azure DevOps Services | Azure DevOps Server 2022 | Azure DevOps Server 2020](../includes/version-gt-eq-2020.md)]

You can use service hooks to run tasks on other services when events happen in your Azure DevOps project.

For example, you can use a service hook to automatically create a card in Trello when a work item gets created in Azure DevOps. Or you can automatically send a push notification to your team's mobile devices when a build fails. You can also use service hooks in custom apps and services as a more efficient way to drive activities when events happen in your projects.

## How do service hooks work?

Service hook **publishers** define a set of *events* that you can subscribe to. 
**Subscriptions** listen for these events and define **actions** to take based on events. 

Subscriptions also target **consumers**, which are external services that can run their own actions 
when events occur.

:::image type="content" source="media/service-hooks.png" alt-text="Diagram with an arrow labeled Event from a publisher box to a subscription box, and arrows from the subscription box to consumer and actions boxes.":::

::: moniker range=" azure-devops"

> [!NOTE]
> To use service hooks, you must allow specific IP address ranges for inbound connections to service endpoints. A service endpoint is a set of properties provided to a service hook. For more information, see [IP addresses and range restrictions](../organizations/security/allow-list-ip-url.md#range-restrictions).

::: moniker-end

## Available services

The following services are available as targets of service hooks. For more information about other apps and services that integrate with Azure DevOps, see the [Visual Studio Marketplace](https://marketplace.visualstudio.com/#AzureDevOpsServices).

::: moniker range="= azure-devops"

|Service  |Supported events  | Supported actions | Subscription management |
|---------|---------|---------|---------|
|[Visual Studio App Center](/appcenter/dashboard/bugtracker/)   | Work item updated | Send a notification | In App Center |
|[AppVeyor](https://www.appveyor.com/docs/)     | Code pushed        |Trigger an AppVeyor build | In AppVeyor |
|[Azuqua](https://marketplace.visualstudio.com/items?itemName=ms-vsts.vss-services-azuqua)   | All | Post an event to a flow language object (FLO) | In Azuqua |
|[Azure App Service](https://azure.microsoft.com/products/app-service)  | Code pushed | Deploy a web app | In App Service |
|[Azure Service Bus](/azure/devops/pipelines/tasks/reference/publish-to-azure-service-bus-v1)    | All | Send a message to Azure Notification Hubs, a Service Bus queue, or a Service Bus topic | In Azure DevOps |
|[Azure Storage](/azure/azure-functions/functions-integrate-storage-queue-output-binding)   |  All | Insert a message in a Storage queue | In Azure DevOps |
|[Bamboo](https://confluence.atlassian.com/bamboo/using-webhooks-1018270680.html)    | Build completed, code pushed | Queue a build | In Azure DevOps |
|[Datadog](services/datadog.md)  |  All  | Post an event in Datadog | In Azure DevOps |
|[Grafana](services/grafana.md)  | Release deployment completed | Add an annotation to a Grafana database | In Azure DevOps |
|[Jenkins](services/jenkins.md)     |  Build completed, code pushed, PR merge attempted | Trigger a generic or Git build | In Azure DevOps |
|[Microsoft Teams](services/teams.md)    |   All  | Post a message to a channel | In Teams |
|[MyGet](https://docs.myget.org/docs/reference/webhooks)  | Build completed, code pushed | Publish a NuGet package to MyGet, trigger a MyGet build | In MyGet |
|[Office 365](/office/office-365-management-api/office-365-management-activity-api-reference#start-a-subscription) | All  | Post a message to a group | In Office 365 |
|[Slack](services/slack.md)   |  All | Post a message to a channel | In Azure DevOps |
|[Trello](services/trello.md)  | All | Create a card or list | In Azure DevOps |
|[UserVoice](https://www.uservoice.com) | Work item created, work item updated | Send a linked work item event | In UserVoice |
|[Webhooks](services/webhooks.md) | All | Post a request via HTTP | In Azure DevOps |
|[Workplace messaging apps](services/workplace-messaging-apps.md) | All | Send a notification | In workplace messaging apps |
|[Zapier](https://zapier.com/apps/webhook/integrations) | All | Send a notification | In Zapier |
|[Zendesk](consumers.md#zendesk) | Work item commented on | Create a private comment in a ticket | In Azure DevOps |

::: moniker-end

::: moniker range="<= azure-devops-2022"

|Service  |Supported events  | Supported actions | Subscription management |
|---------|---------|---------|---------|
|[Azure Service Bus](/azure/devops/pipelines/tasks/reference/publish-to-azure-service-bus-v1)    | All | Send a message to Azure Notification Hubs, a Service Bus queue, or a Service Bus topic | In Azure DevOps |
|[Azure Storage](/azure/azure-functions/functions-integrate-storage-queue-output-binding)   |  All | Insert a message in a Storage queue | In Azure DevOps |
|[Bamboo](https://confluence.atlassian.com/bamboo/using-webhooks-1018270680.html)    | Build completed, code pushed | Queue a build | In Azure DevOps |
|[Datadog](services/datadog.md)  |  All  | Post an event in Datadog | In Azure DevOps |
|[Grafana](services/grafana.md)  | Release deployment completed | Add an annotation to a Grafana database | In Azure DevOps |
|[Jenkins](services/jenkins.md)     |  Build completed, code pushed, PR merge attempted | Trigger a generic or Git build | In Azure DevOps |
|[Microsoft Teams](services/teams.md)    |   All  | Post a message to a channel | In Teams |
|[Office 365](/office/office-365-management-api/office-365-management-activity-api-reference#start-a-subscription) | All  | Post a message to a group | In Office 365 |
|[Slack](services/slack.md)   |  All | Post a message to a channel | In Azure DevOps |
|[Trello](services/trello.md)  | All | Create a card or list | In Azure DevOps |
|[UserVoice](https://www.uservoice.com) | Work item created, work item updated | Send a linked work item event | In UserVoice |
|[Webhooks](services/webhooks.md) | All | Post a request via HTTP | In Azure DevOps |
|[Zendesk](consumers.md#zendesk) | Work item commented on | Create a private comment in a ticket | In Azure DevOps |

::: moniker-end

## Create a subscription

To integrate one of these services with Azure DevOps, you create a subscription. In many cases, you also need to configure the target service. For detailed information, see the documentation for the service that you want to integrate.

1. Go to your project, select **Project settings**, and then select **Service hooks**.

   :::image type="content" source="media/azure-devops-service-hooks.png" alt-text="Screenshot that shows an Azure DevOps project. On the side, Project settings and Service hooks are highlighted.":::

1. Select **Create subscription**.

   :::image type="content" source="media/azure-devops-create-subscription.png" alt-text="Screenshot of the Service Hooks page of an Azure DevOps project. The Create subscription button is highlighted.":::
 
1. Select the service that you want to integrate.

   :::image type="content" source="media/select-service.png" alt-text="Screenshot of the Service dialog. Numerous services are listed, Trello is selected, and a description of Trello is visible.":::

1. Select the event to trigger on and any applicable filters.

   :::image type="content" source="./media/trello-wizard-event.png" alt-text="Screenshot of the Trigger dialog. The Code pushed event is selected. Filters are set on a repository and a group.":::
 
1. Select an action to run on the target service. 

   > [!NOTE]
   > The available actions depend on the type of event that you select. 

   :::image type="content" source="./media/trello-wizard-action.png" alt-text="Screenshot of the Action dialog. Create a card is selected. Fields are available for specifying a token, a board, and other settings.":::

1. To confirm the settings are correct, test the subscription and then finish the wizard.

    :::image type="content" source="./media/test-notification-summary.png" alt-text="Screenshot of the Test Notification window. In the Summary tab, a message about a push shows a status of Succeeded.":::
	
    :::image type="content" source="./media/test-notification-request.png" alt-text="Screenshot of the Test Notification window. The Request tab shows a POST request to Trello with information about a commit that was pushed.":::

## FAQs

<a id="subscription-permissions"></a>

### Q: What permissions do I need to set up a subscription?

A: You need the *Edit subscriptions* and *View subscriptions* permissions. By default, only project administrators 
have these permissions. To grant them to other users directly, you can use a [command-line tool](../organizations/security/manage-tokens-namespaces.md) or the [Security](/rest/api/azure/devops/security/) REST API. 

To grant the *View* permission to a group, see [Set View permission for a group in service hooks](view-permission.md).

### Q: What are the security implications of granting Edit subscriptions and View subscriptions permissions?

A: A user who has the *Edit subscriptions* and *View subscriptions* permissions can:

- See all subscriptions in the project.
- See the notification history for all subscriptions in the project.
- Create any type of service hook subscription in the project.

If the user sets up a subscription for a resource that they don't otherwise have permission to access, the subscription doesn't get triggered. 

For example, suppose you create a subscription to send a notification when a work item in a specific area path gets updated. If you don't have access to the work items in that area path, the notifications don't get sent. However, if other users have access to the work items, you can see the notification history for subscriptions that alert them about updates.

### Q: Can I create service hook subscriptions for a project programmatically?

A: Yes. For more information, see [Create a service hooks subscription](create-subscription.md).

### Q: Can I remove an app's access to my organization after I authorize it?

A: Yes. You can revoke authorizations from your profile.

1. Go to [https://visualstudio.microsoft.com](https://visualstudio.microsoft.com). Select your profile photo, and then select **Visual Studio profile**.

   Make sure you start from the Visual Studio site, https://visualstudio.microsoft.com, when you manage authorizations. From that site, you can access the correct implementation of the authorizations management feature. Don't start from your organization (`https://dev.azure.com/{organization-name}`).

1. Select **Manage authorizations**.
	
	:::image type="content" source="media/Profile-manage-applications.png" alt-text="Screenshot of a Visual Studio profile page with contact information for a user. In the Authorizations section, Manage applications is highlighted.":::
	
1. Revoke any authorizations you no longer want to allow.

	:::image type="content" source="media/authorizations.png" alt-text="Screenshot of the Authorizations dialog. A list of permissions is visible, and a Revoke link is highlighted.":::
	
### Q: Why can't I set up service hooks for HipChat anymore?

A: Atlassian no longer supports HipChat. For more information, see [Atlassian Frequently Asked Questions](https://www.atlassian.com/partnerships/slack/faq#faq-3ccc5a61-711b-4ef2-9ca2-3a34b2ec143b).

## Related content

- [Troubleshoot service hooks](troubleshoot.md)
- [Visual Studio Marketplace](https://marketplace.visualstudio.com/azuredevops)
- [Billing overview](../organizations/billing/overview.md)
