---
title: Integrate with service hooks | Azure DevOps Services
description: Perform tasks with other services when events happen in Azure DevOps Services projects
ms.assetid: c0617128-b67c-4ec4-b1c9-e65e1b3ab82c
ms.prod: devops
ms.technology: devops-collab
ms.topic: conceptual
ms.manager: douge
monikerRange: '>= tfs-2017'
ms.author: elbatk
author: elbatk
ms.date: 08/04/2016
---

# Integrate with service hooks

Service hooks enable you to perform tasks on other services when events happen in your Azure DevOps Services
projects. For example, create a card in Trello when a work item is created 
or send a push notification to your team's mobile devices when a build fails. Service hooks 
can also be used in custom apps and services as a more efficient way to drive activities 
when events happen in your projects.

## Available services

> These services are available as the target of service hooks. To learn about others apps and services that integrate with Azure DevOps Services, visit the [Visual Studio Marketplace](https://marketplace.visualstudio.com/#AzureDevOpsServices)

Build and release                  |  Collaborate 	                    | Customer support	                    | Plan and track 	             | Integrate
-------------------		           |  -------------	                    | ----------------		                | ---------		                 | -------
[AppVeyor](./services/appveyor.md) | [Campfire](./services/campfire.md) | [UserVoice](./services/uservoice.md)  | [Trello](./services/trello.md) | [Azure Service Bus](./services/azure-service-bus.md)
[Bamboo](./services/bamboo.md)	   |	[Flowdock](./services/flowdock.md)	|	[Zendesk](./services/zendesk.md) 		|			|	[Azure Storage](./services/azure-storage.md)
[Jenkins](./services/jenkins.md)   |	[HipChat](./services/hipchat.md)	|											|			|	[Web Hooks](./services/webhooks.md) |
[MyGet](./services/myget.md)	   |	[Hubot](./services/hubot.md)		|											|			|	[Zapier](./services/zapier.md) |
								   |	[Slack](./services/slack.md)		|											|			| |

## Create a subscription

When you integrate one of these services with Azure DevOps Services, 
you have to create a new subscription, something like this. In many cases, 
you have to do some work in the other service, too. For specific details, 
look at the information on the service that you're interested in.

1.	Open the admin page for a project in web access.

    <img alt="Open the admin page" src="./_img/openadmin.png" style="border: 1px solid #CCCCCC" />

2. 	Create a subscription by running the wizard.

    <img alt="Click the link to run the subscription wizard" src="./_img/createfirst.png" style="border: 1px solid #CCCCCC" />
 
3.	Select the service you want to integrate with.

    <img alt="Select the service to integrate" src="./_img/selectservice.png" style="border: 1px solid #CCCCCC" />
 
4.	Select the event to trigger on and any filters (if applicable).

    <img alt="Select the event to trigger on and any filters" src="./_img/Trello_wizard_Event.png" style="border: 1px solid #CCCCCC" />
 
5.	Select an action to perform on the target service. 

	> [!NOTE]
    > The list of available actions may be limited based on the event type you selected. 

    <img alt="Select an action to perform on the target service" src="./_img/Trello_wizard_Action.png" style="border: 1px solid #CCCCCC" />

6.	To confirm the settings are correct, test the subscription and then finish the wizard.

    <img alt="Test notification 1" src="./_img/test1.png" style="border: 1px solid #CCCCCC" />
	
    <img alt="Test notification 2" src="./_img/test2.png" style="border: 1px solid #CCCCCC" />	
 
## Q & A

<!-- BEGINSECTION class="md-qanda" -->

<a id="subscription-permissions" /> 
####Q: What permissions do I need to set up a subscription?

A: *Edit subscriptions* and *View subscriptions*. By default, only project administrators 
have these permissions. To grant them to other users directly, use **tfssecurity.exe** 
from the command line. For example:

```
tfssecurity /a+ /collection:https://dev.azure.com/fabrikam/DefaultCollection ServiceHooks PublisherSecurity/abcdef00-abcd-0000-0000-abcdef000000 ViewSubscriptions n:fabrikamfiber4@hotmail.com ALLOW
```

and

```
tfssecurity /a+ /collection:https://dev.azure.com/fabrikam/DefaultCollection ServiceHooks PublisherSecurity/abcdef00-abcd-0000-0000-abcdef000000 EditSubscriptions n:fabrikamfiber4@hotmail.com ALLOW
```

The GUID is the ID of the project. You can get it using the [Projects](/rest/api/vsts/) REST API.

####Q: What are the security implications of granting *Edit subscriptions* and *View subscriptions* permissions?

A: The user with these permissions can see all subscriptions created in the project 
project and the notification history for those subscriptions. That user will be able to 
create any type of service hook subscription in that project. If the user sets up a 
subscription for a resource that he does not otherwise have permission to access, the 
subscription will not get triggered. 

For example: if I don't have access to work items in area path XYZ, and I set up a 
subscription to the work item update events, I won't get notifications for updates 
to work items in area path XYZ. However, if another user who does have access to the work 
items in area path XYZ is receiving those "work item update" events, then I could see the 
notification history of that other user's events, which includes work item data that I 
don't otherwise have access to.

####Q: Can I create service hook subscriptions for a project programmatically?

A: Yes. Go [here](create-subscription.md) for more details.

####Q: Can I remove an app's access to my organization after I've authorized it?

A: Yes. You can revoke authorizations from your profile.

1. 	Go to your profile page from http://visualstudio.com. 

	Make sure you start from the Visual Studio site (http://visualstudio.com) 
	instead of your organization (```https://dev.azure.com/{orgName}```) because, right now, 
	your profile accessed from your organization will take you to the wrong implementation 
	of the authorizations management feature.

2.	Manage your authorizations.
	
	<img alt="Click Manage applications to manage authorizations" src="./_img/Profile-manage-applications.png" style="border: 1px solid #CCCCCC" />	
	
3.	Revoke any authorizations you no longer want to allow.

	<img alt="Click Revoke to revoke authorizations" src="./_img/authorizations.png" style="border: 1px solid #CCCCCC" />
	

<!-- ENDSECTION -->
