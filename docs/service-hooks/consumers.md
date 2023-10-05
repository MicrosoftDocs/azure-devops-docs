---
title: Service hook consumers
description: Service hooks consumer documentation for Azure DevOps.
ms.custom: engagement-fy23, devx-track-jenkins
ms.assetid: CDACB8A1-4BAB-499F-B9ED-BD1680743B26
ms.subservice: azure-devops-service-hooks
ms.topic: conceptual
ms.author: chcomley
author: chcomley
monikerRange: '<= azure-devops'
ms.date: 11/21/2022
---

# Service hook consumers

[!INCLUDE [version-lt-eq-azure-devops](../includes/version-lt-eq-azure-devops.md)]

Use service hook consumers to [programmatically create a subscription](./create-subscription.md). The subscription specifies the event, the consumer, and the action. 

Select the consumer that you want to use in your subscription from the following consumers. For more information about available services, see [Integrate with service hooks, Available services](overview.md#available-services).

- [Azure Service Bus](#azure-service-bus)
- [Azure Storage](#azure-storage)
- [Campfire](#campfire)
- [Jenkins](#jenkins)
- [Kato](#kato)
- [Trello](#trello)
- [Web Hooks](#webhooks)
- [Zendesk](#zendesk)

## Azure Service Bus

Provides integration with Microsoft Azure Service Bus, including Notification Hubs.

### Send a message to a Notification Hub

This action sends a generic, template notification to the specified Azure Notification Hub. For more information, see the [overview](./overview.md).

* Consumer ID: **azureServiceBus**
* Action ID: **serviceBusNotificationHubSend**
* Supported events: **build.complete, git.push, tfvc.checkin, workitem.created, workitem.commented, workitem.updated**
* Settings:
  * **connectionString**
    * SAS connection string
    * The SAS (shared access signature) connection string to use to connect with Azure Service Bus. This connection string is available in the Azure portal.
    * Data type: **string**
    * Required: **Yes**
  * **notificationHubName**
    * Notification Hub name
    * The name of the notification hub to send the notification to. The name can contain only letters, numbers, periods, hyphens, forward slashes, and underscores. The name must start and end with a letter or number. The hub should already exist.
    * Data type: **string**
    * Required: **Yes**
  * **tagsExpression**
    * Tags
    * The tags expression (for targeting specific sets of devices). [Learn more](/previous-versions/azure/azure-services/dn530749(v=azure.100)).
    * Data type: **string**
    * Required: **No**

### Send a message to a Service Bus Queue

This action sends a JSON string representation of the event to the specified Azure Service Bus queue. For more information, see [Service Bus queues, articles, and subscriptions](/azure/service-bus-messaging/service-bus-queues-topics-subscriptions).

* Consumer ID: **azureServiceBus**
* Action ID: **serviceBusQueueSend**
* Supported events: **build.complete, git.push, tfvc.checkin, workitem.created, workitem.commented, workitem.updated**
* Settings:
  * **connectionString**
    * SAS connection string
    * The SAS (shared access signature) connection string to use to connect with Azure Service Bus. This connection string is available in the Azure portal.
    * Data type: **string**
    * Required: **Yes**
  * **queueName**
    * Queue name
    * The name of the queue to send the message to. The name can contain only letters, numbers, periods, hyphens, forward slashes, and underscores. The name must start and end with a letter or number. If the queue doesn't exist, it's created if the specified connection string has the necessary permissions.
    * Data type: **string**
    * Required: **Yes**
  * **resourceDetailsToSend**
    * Resource details to send
    * Control the resource fields to send
    * Data type: **string**
    * Required: **No**
  * **messagesToSend**
    * Messages to send
    * Control the messages to send
    * Data type: **string**
    * Required: **No**
  * **detailedMessagesToSend**
    * Detailed messages to send
    * Control the detailed messages to send
    * Data type: **string**
    * Required: **No**

### Send a message to a Service Bus Topic

This action sends a JSON string representation of the event to the specified Azure Service Bus topic. For more information, see [Use the Azure portal to create a Service Bus topic and subscriptions to the topic](/azure/service-bus-messaging/service-bus-quickstart-topics-subscriptions-portal).

* Consumer ID: **azureServiceBus**
* Action ID: **serviceBusTopicSend**
* Supported events: **build.complete, git.push, tfvc.checkin, workitem.created, workitem.commented, workitem.updated**
* Settings:
  * **connectionString**
    * SAS connection string
    * The SAS (shared access signature) connection string to use to connect with Azure Service Bus. This connection string is available in the Azure portal.
    * Data type: **string**
    * Required: **Yes**
  * **topicName**
    * Topic name
    * The name of the topic to send the message to. The name can contain only letters, numbers, periods, hyphens, forward slashes, and underscores. The name must start and end with a letter or number. If the topic doesn't exist, it gets created if the specified connection string has the necessary permissions.
    * Data type: **string**
    * Required: **Yes**
  * **resourceDetailsToSend**
    * Resource details to send
    * Control the resource fields to send
    * Data type: **string**
    * Required: **No**
  * **messagesToSend**
    * Messages to send
    * Control the messages to send
    * Data type: **string**
    * Required: **No**
  * **detailedMessagesToSend**
    * Detailed messages to send
    * Control the detailed messages to send
    * Data type: **string**
    * Required: **No**

## Azure Storage

Provides integration with Microsoft Azure Storage.

### Insert a message in a Storage Queue

This action inserts a JSON string representation of the event to the specified Azure storage queue. For more information, see [What are Azure queues?](/azure/storage/queues/storage-queues-introduction).

* Consumer ID: **azureStorageQueue**
* Action ID: **enqueue**
* Supported events: **build.complete, git.push, tfvc.checkin, workitem.created, workitem.commented, workitem.updated**
* Settings:
  * **accountName**
    * Storage account name
    * The name associated with your Azure storage account (for example, ```https://STORAGE_ACCOUNT_NAME.queue.core.windows.net```).
    * Data type: **string**
    * Required: **Yes**
  * **accountKey**
    * Storage account key
    * The key associated with your Azure storage account.
    * Data type: **string**
    * Required: **Yes**
  * **queueName**
    * Queue name
    * The lowercase-only name of the queue to be used within Azure storage.  A queue by this name gets created if it doesn't already exist.
    * Data type: **string**
    * Required: **Yes**
  * **visiTimeout**
    * Message visibility timeout (in seconds)
    * Specifies the visibility timeout value, in seconds, for the enqueued message, relative to server time. The value must be larger than or equal to 0, and can't be larger than seven days, or 604,800 seconds. The visibility timeout must be set to a value smaller than the message's time-to-live value.
    * Data type: **number**
    * Required: **Yes**
  * **ttl**
    * Message time-to-live (in seconds)
    * Specifies the time-to-live interval for the queue message, in seconds. The maximum time-to-live allowed is seven days, or 604,800 seconds.
    * Data type: **number**
    * Required: **Yes**
  * **resourceDetailsToSend**
    * Resource details to send
    * Control the resource fields to send
    * Data type: **string**
    * Required: **No**
  * **messagesToSend**
    * Messages to send
    * Control the messages to send
    * Data type: **string**
    * Required: **No**
  * **detailedMessagesToSend**
    * Detailed messages to send
    * Control the detailed messages to send
    * Data type: **string**
    * Required: **No**

<a id="campfire"></a>

## Campfire

Campfire is similar to instant messaging, but designed exclusively for groups.

### Post a message to a room

Post a message about the event to a room in Campfire.

* Consumer ID: **campfire**
* Action ID: **postMessageToRoom**
* Supported events: **build.complete, git.push, tfvc.checkin, workitem.created, workitem.commented, workitem.updated**
* Settings:
  * **accountName**
    * Account name
    * Account name like ```https://{account name}.campfirenow.com```
    * Data type: **string**
    * Required: **Yes**
  * **authToken**
    * API authentication token
    * API authentication token for the user that messages are posted from. You can get this token visiting the user profile page at Campfire.
    * Data type: **string**
    * Required: **Yes**
  * **roomId**
    * Room
    * Room to post the message to.
    * Data type: **number**
    * Required: **Yes**
  * **showDetails**
    * Send a detailed message
    * Post a short or detailed message about the event.
    * Data type: **boolean**
    * Required: **No**

## Jenkins

Jenkins is a continuous integration server, which allows building and testing software projects continuously.

### Trigger Git build

Triggers a build configured to use a Git repository using the [Jenkins Git Plugin](https://plugins.jenkins.io/git/).

* Consumer ID: **jenkins**
* Action ID: **triggerGitBuild**
* Supported events: **git.push**
* Settings:
  * **serverBaseUrl**
    * Jenkins base URL
    * The base URL that hosts the Jenkins server
    * Data type: **uri**
    * Required: **Yes**
  * **username**
    * User name
    * The Jenkins user name of a user who is allowed to trigger the build
    * Data type: **string**
    * Required: **Yes**
  * **password**
    * User API token (or password)
    * The user's API token, which is available in the Jenkins user configuration page. The API token is new since version 1.426. For earlier versions of Jenkins the real user password must be specified.
    * Data type: **string**
    * Required: **Yes**

### Trigger generic build

Triggers a generic Jenkins build, invoking the Jenkins build URL.

* Consumer ID: **jenkins**
* Action ID: **triggerGenericBuild**
* Supported events: **git.push, build.complete, tfvc.checkin**
* Settings:
  * **serverBaseUrl**
    * Jenkins base URL
    * The base URL that hosts the Jenkins server
    * Data type: **uri**
    * Required: **Yes**
  * **username**
    * User name
    * The Jenkins user name of a user who is allowed to trigger the build
    * Data type: **string**
    * Required: **Yes**
  * **password**
    * User API token (or password)
    * The user's API token, which is available in the Jenkins user configuration page. The API token is new since version 1.426. For earlier versions of Jenkins the real user password must be specified.
    * Data type: **string**
    * Required: **Yes**
  * **buildName**
    * Build
    * The build name to trigger
    * Data type: **string**
    * Required: **Yes**
  * **buildAuthToken**
    * Build token
    * The authorization token in the form of a string so that only users who know it would be able to remotely trigger this project's builds
    * Data type: **string**
    * Required: **No**
  * **buildParameterized**
    * Accepts parameters
    * Indicates if the build is parameterized or not (build parameters are optionally specified previously)
    * Data type: **boolean**
    * Required: **No**
  * **buildParams**
    * Build parameters
    * Build parameters names and values separated by a colon(for example "param1:value1") with each name-value pair appearing on its own line of text
    * Data type: **string**
    * Required: **No**

## Kato

Kato provides a messaging service for modern organizations.

### Post event to room

Posts an event to a Kato room

* Consumer ID: **kato**
* Action ID: **postEventToRoom**
* Supported events: **build.complete, git.push, tfvc.checkin, workitem.created, workitem.commented, workitem.updated**
* Settings:
  * **roomToken**
    * Room token
    * The token for interacting with a room using the Kato API
    * Data type: **string**
    * Required: **Yes**
  * **roomName**
    * Room name
    * Room name as seen in Kato
    * Data type: **string**
    * Required: **No**
## Trello

Provides integration with Trello.

### Create a card

This action creates a card on an existing list in Trello. A card can represent a task, issue, event, or just about anything. A card's state is typically determined by what list it is on. For more information, see [Create a service hook with Trello](services/trello.md).

* Consumer ID: **trello**
* Action ID: **createCard**
* Supported events: **build.complete, git.push, tfvc.checkin, workitem.created, workitem.commented, workitem.updated**
* Settings:
  * **userToken**
    * User token (Need one? [Get it now](https://go.microsoft.com/fwlink/?LinkID=390580).)
    * Your user token provided by Trello.  Select the link in the previously described action description to learn how to obtain this token.
    * Data type: **string**
    * Required: **Yes**
  * **boardId**
    * Board
    * The name of the board on which the Trello card gets created.
    * Data type: **string**
    * Required: **Yes**
  * **listId**
    * List
    * The name of the list on which the Trello card gets created.
    * Data type: **string**
    * Required: **Yes**
  * **labels**
    * Labels
    * A comma-separated list of label colors to apply to the created card. Valid label color names are red, orange, yellow, green, blue, and purple.
    * Data type: **string**
    * Required: **No**
  * **addToTop**
    * Create at beginning of list
    * Indicates if the card should be created at the beginning of the Trello list, instead of the end.
    * Data type: **boolean**
    * Required: **No**

### Create a list

This action creates a list on an existing board in Trello. A list is used to organize cards on a board and typically represents a state. For more information, see [Create a service hook with Trello](services/trello.md).

* Consumer ID: **trello**
* Action ID: **createList**
* Supported events: **build.complete, git.push, tfvc.checkin, workitem.created, workitem.commented, workitem.updated**
* Settings:
  * **userToken**
    * User token (need one? [Get it now](https://go.microsoft.com/fwlink/?LinkID=390580).)
    * Your user token provided by Trello.  Select the link in the previously described action description to learn how to obtain this token.
    * Data type: **string**
    * Required: **Yes**
  * **boardId**
    * Board
    * The name of the board on which the Trello list gets created.
    * Data type: **string**
    * Required: **Yes**
  * **addToBottom**
    * Create at bottom of board
    * Indicates if the list should be created at the bottom of the board, instead of the top.
    * Data type: **boolean**
    * Required: **No**

## Webhooks

Webhooks provide event communication via HTTP.

### Post via HTTP

This action posts a JSON object representation of the event to the specified URL. HTTPS endpoints are recommended due to the potential for private data in the event payload. For more information, see [Webhooks](services/webhooks.md).

* Consumer ID: **webHooks**
* Action ID: **httpRequest**
* Supported events: **build.complete, git.push, tfvc.checkin, workitem.created, workitem.commented, workitem.updated**
* Settings:
  * **url**
    * URL
    * The URL to which an HTTP POST gets sent.
    * Data type: **uri**
    * Required: **Yes**
  * **httpHeaders**
    * HTTP headers
    * HTTP header keys and values separated by a colon(for example "Key1:value1") with each key-value-pair appearing on its own line of text.
    * Data type: **string**
    * Required: **No**
  * **basicAuthUsername**
    * Basic authentication username
    * Enter a username for standard HTTP authentication.  Basic HTTP authentication sends credentials in plain text (unencrypted) which means you should use a URL beginning with "https" to enable encryption of these credentials via secure transport layer (SSL).
    * Data type: **string**
    * Required: **No**
  * **basicAuthPassword**
    * Basic authentication password
    * Enter a password for standard HTTP authentication.  Basic HTTP authentication sends credentials in plain text (unencrypted) which means you should use a URL beginning with "https" to enable encryption of these credentials via SSL.
    * Data type: **string**
    * Required: **No**
  * **resourceDetailsToSend**
    * Resource details to send
    * Control the resource fields to send
    * Data type: **string**
    * Required: **No**
  * **messagesToSend**
    * Messages to send
    * Control the messages to send
    * Data type: **string**
    * Required: **No**
  * **detailedMessagesToSend**
    * Detailed messages to send
    * Control the detailed messages to send
    * Data type: **string**
    * Required: **No**

## Zendesk

Zendesk is a SaaS suite that offers help desk ticketing, issue tracking, and customer service support.

### Create a private comment in a ticket

Use Zendesk to create a private comment in a ticket.

* Consumer ID: **zendesk**
* Action ID: **createPrivateComment**
* Supported events: **workitem.commented**
* Settings:
  * **accountName**
    * Account name
    * Zendesk account name like ```https://{account name}.zendesk.com```
    * Data type: **string**
    * Required: **Yes**
  * **username**
    * User name
    * The Zendesk user name of a user who updates tickets
    * Data type: **string**
    * Required: **Yes**
  * **apiToken**
    * API token
    * The Zendesk API token (can be found in Zendesk app in Admin > Channels > API)
    * Data type: **string**
    * Required: **Yes**

## Related articles

- [Authorize other services](authorize.md)
- [Service hooks overview](overview.md)
