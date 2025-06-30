---
title: Service Hook Consumers
description: Find information about Azure DevOps service hook consumers, including settings to use when you create subscriptions in Azure DevOps and configure consumers.
ms.custom: engagement-fy23, devx-track-jenkins
ms.assetid: CDACB8A1-4BAB-499F-B9ED-BD1680743B26
ms.subservice: azure-devops-service-hooks
ms.topic: conceptual
ms.author: chcomley
author: chcomley
monikerRange: '<= azure-devops'
ms.date: 06/30/2025
# customer intent: As a developer, I want to access reference information about consumers in Azure DevOps service hooks so that I can use service hooks to perform actions on those consumers when events occur in Azure DevOps projects.
---

# Service hook consumers

[!INCLUDE [Azure DevOps Services | Azure DevOps Server 2022 | Azure DevOps Server 2020](../includes/version-gt-eq-2020.md)]

You can use a service hook to perform an action on a consumer service when an event occurs in an Azure DevOps project. For example, a service hook can notify a consumer when a build fails. 

To configure a service hook, you create a subscription that specifies the event, the consumer, and the action. With some consumers, you create a subscription in the consumer service, not in Azure DevOps. This article provides information about the consumer settings you use when you [programmatically create a subscription](create-subscription.md) in Azure DevOps.

You can select from the following consumers when you create a subscription in Azure DevOps:

- [Azure Service Bus](#azure-service-bus)
- [Azure Storage](#azure-storage)
- [Bamboo](#bamboo)
- [Datadog](#datadog)
- [Grafana](#grafana)
- [Jenkins](#jenkins)
- [Slack](#slack)
- [Trello](#trello)
- [Webhooks](#webhooks)
- [Zendesk](#zendesk)

For information about these consumers and others you can integrate with service hooks, see [Available services](overview.md#available-services).

## Azure Service Bus

Service Bus is a messaging service that facilitates asynchronous communication between applications and services. As a service hook consumer, it provides integration with Service Bus queues and topics and also with Azure Notification Hubs.

### Send a message to a notification hub

This action sends a generic, template notification to a specified instance of Notification Hubs.

- Consumer ID: `azureServiceBus`
- Action ID: `serviceBusNotificationHubSend`
- Supported events: All events
- Settings:

  | Input ID | Name | Description | Data type | Required |
  | --- | --- | --- | --- | --- |
  | `connectionString` | SAS connection string | The shared access signature (SAS) connection string to use to connect with Service Bus. This connection string is available in the Azure portal. | `string` | Yes |
  | `notificationHubName` | Notification hub name | The name of the notification hub to send the notification to. The name can contain only letters, numbers, periods, hyphens, forward slashes, and underscores. The name must start and end with a letter or number. The hub should already exist. | `string` | Yes |
  | `tagsExpression` | Tags | A tag expression that targets a specific set of devices. For more information, see [Routing and tag expressions](/previous-versions/azure/azure-services/dn530749(v=azure.100)). | `string` | No |

### Send a message to a Service Bus queue

This action sends a JSON string representation of an event to a specified Service Bus queue. For more information, see [Service Bus queues, topics, and subscriptions](/azure/service-bus-messaging/service-bus-queues-topics-subscriptions).

- Consumer ID: `azureServiceBus`
- Action ID: `serviceBusQueueSend`
- Supported events: All events
- Settings:

  | Input ID | Name | Description | Data type | Required |
  | --- | --- | --- | --- | --- |
  | `AuthenticationMechanismInputId` | Authentication mode | The authentication mode to use: either a connection string or a service connection. | `string` | No |
  | `ServiceConnectionInputId` | Azure Resource Manager connections | The ID of a service connection. | `string` | No |
  | `ServiceBusHostNameInputId` | Service Bus host name | The host name in the Azure portal, in the format `sb://<Service-Bus-name>.servicebus.windows.net`. | `string` | No |
  | `connectionString` | SAS connection string | The SAS connection string to use to connect with Service Bus. This connection string is available in the Azure portal. | `string` | No |
  | `queueName` | Queue name | The name of the queue to send the message to. The name can contain only letters, numbers, periods, hyphens, forward slashes, and underscores. The name must start and end with a letter or number. If the queue doesn't exist, it's created if the specified connection string has the necessary permissions. | `string` | Yes |
  | `bypassSerializer` | Send as nonserialized string | An option for sending messages to Service Bus as nonserialized strings instead of as .NET serialized strings. Select this setting when the receiver isn't a .NET client, for instance, when the client uses Azure Client Library for Node. | `boolean` | No |
  | `resourceDetailsToSend` | Resource details to send | The number of resource fields to send to the queue. Possibilities are all fields, a minimum number, and none. | `string` | No |
  | `messagesToSend` | Messages to send | The types of messages to send to the queue. | `string` | No |
  | `detailedMessagesToSend` | Detailed messages to send | The types of detailed messages to send to the queue. | `string` | No |

### Send a message to a Service Bus topic

This action sends a JSON string representation of an event to a specified Service Bus topic. For more information, see [Use the Azure portal to create a Service Bus topic and subscriptions to the topic](/azure/service-bus-messaging/service-bus-quickstart-topics-subscriptions-portal).

- Consumer ID: `azureServiceBus`
- Action ID: `serviceBusTopicSend`
- Supported events: All events
- Settings:

  | Input ID | Name | Description | Data type | Required |
  | --- | --- | --- | --- | --- |
  | `AuthenticationMechanismInputId` | Authentication mode | The authentication mode to use. | `string` | No |
  | `ServiceConnectionInputId` | Azure Resource Manager connections | The ID of a service connection. | `string` | No |
  | `ServiceBusHostNameInputId` | Service Bus host name | The host name in the Azure portal, in the format `sb://{Service-Bus-name}.servicebus.windows.net`. | `string` | No |
  | `connectionString` | SAS connection string | The SAS connection string to use to connect with Service Bus. This connection string is available in the Azure portal. | `string` | No |
  | `topicName` | Topic name | The name of the topic to send the message to. The name can contain only letters, numbers, periods, hyphens, forward slashes, and underscores. The name must start and end with a letter or number. If the topic doesn't exist, it's created if the specified connection string has the necessary permissions. | `string` | Yes |
  | `bypassSerializer` | Send as nonserialized string | An option for sending messages to Service Bus as nonserialized strings instead of as .NET serialized strings. Select this setting when the receiver isn't a .NET client, for instance, when the client uses Azure Client Library for Node. | `boolean` | No |
  | `resourceDetailsToSend` | Resource details to send | The number of resource fields to send to the topic. Possibilities are all fields, a minimum number, and none. | `string` | No |
  | `messagesToSend` | Messages to send | The types of messages to send to the topic. | `string` | No |
  | `detailedMessagesToSend` | Detailed messages to send | The types of detailed messages to send to the topic. | `string` | No |

## Azure Storage

Storage is a cloud storage solution for various types of data. Azure Queue Storage is a part of Storage that provides messaging queues that can act as service hooks consumers.

### Insert a message into a Storage queue

This action inserts a JSON string representation of an event into a specified Storage queue. For more information, see [What is Azure Queue Storage?](/azure/storage/queues/storage-queues-introduction).

- Consumer ID: `azureStorageQueue`
- Action ID: `enqueue`
- Supported events: All events
- Settings:

  | Input ID | Name | Description | Data type | Required |
  | --- | --- | --- | --- | --- |
  | `AuthenticationMechanismInputId` | Authentication mode | The authentication mode to use. | `string` | No |
  | `ServiceConnectionInputId` | Azure Resource Manager connections | The ID of a service connection. | `string` | No |
  | `accountName` | Storage account name | The name associated with your Storage account. This name is available in the Azure portal. | `string` | Yes |
  | `accountKey` | Storage account key | The key associated with your Storage account. | `string` | No |
  | `queueName` | Queue name | The lowercase-only name of the queue to use within Storage. A queue with this name gets created if it doesn't already exist. | `string` | Yes |
  | `visiTimeout` | Message visibility timeout | The visibility timeout value, in seconds, for the enqueued message, relative to the server time. The value must be greater than or equal to 0 and can't be greater than seven days, or 604,800 seconds. The visibility timeout must be set to a value that's less than the message's time-to-live value. | `number` | Yes |
  | `ttl` | Message time-to-live | The time-to-live interval for the queue message, in seconds. The maximum value you can use is seven days, or 604,800 seconds. | `number` | Yes |
  | `resourceDetailsToSend` | Resource details to send | The number of resource fields to send to the queue. Possibilities are all fields, a minimum number, and none. | `string` | No |
  | `messagesToSend` | Messages to send | The types of messages to send to the queue. | `string` | No |
  | `detailedMessagesToSend` | Detailed messages to send | The types of detailed messages to send to the queue. | `string` | No |

## Bamboo

Bamboo is a continuous integration server from Atlassian.

### Queue a build

This action queues a Bamboo build.

- Consumer ID: `bamboo`
- Action ID: `queueBuild`
- Supported events: `git.push`, `build.complete`, `tfvc.checkin`
- Settings:

  | Input ID | Name | Description | Data type | Required |
  | --- | --- | --- | --- | --- |
  | `serverBaseUrl` | Bamboo base URL | The URI that contains the hostname of the Bamboo server. | `uri` | Yes |
  | `basicAuthCredentials` | Basic authentication credentials | Standard credentials to use to authenticate to the Bamboo server. To avoid sending credentials in plain text, use the HTTPS protocol to encrypt the credentials via Transport Layer Security (TLS). We recommend using [service principals and managed identities in Azure DevOps](../integrate/get-started/authentication/service-principal-managed-identity.md). | `string` | Yes |
  | `planName` | Plan | The name of the plan to queue. | `string` | Yes |

## Datadog

Datadog is a monitoring and analytics platform for cloud environments.

### Post an event in Datadog

This action creates an event and corresponding metrics in Datadog.

- Consumer ID: `datadog`
- Action ID: `postEventInDatadog`
- Supported events: All events
- Settings:

  | Input ID | Name | Description | Data type | Required |
  | --- | --- | --- | --- | --- |
  | `apiKey` | Datadog API Key | The access key for your Datadog account. You can find your API key in the Datadog portal. Go to your profile, and then select **Organization Settings** > **API Keys**. | `string` | Yes |
  | `accountType` | Datadog Account Type | The type of your Datadog account. You can determine your account type from the hostname of the URL that your Datadog account uses:<br>- `app.datadoghq.com`: `US`<br>- `app.datadoghq.eu`: `EU`<br>- `us3.datadoghq.com`: `US3`<br>- `us5.datadoghq.com`: `US5`<br>- `ap1.datadoghq.com`: `AP1`<br>- `app.dog-gov.com`: `GOV` | `string` | Yes |

## Grafana

Grafana is an open-source dashboard and graph editor. 

### Add an annotation to a Grafana database

This action creates an annotation in Grafana.

- Consumer ID: `grafana`
- Action ID: `addAnnotation`
- Supported events: `ms.vss-release.deployment-completed-event`
- Settings:

  | Input ID | Name | Description | Data type | Required |
  | --- | --- | --- | --- | --- |
  | `url` | Grafana URL | The URL to use to post an annotation in Grafana​. | `uri` | Yes |
  | `apiToken` | API token | The access token for posting annotations to a Grafana database. For information about creating a token, see [Create Service Account tokens and dashboards for an organization](https://grafana.com/docs/grafana/latest/developers/http_api/examples/create-api-tokens-for-org/#create-service-account-tokens-and-dashboards-for-an-organization). | `string` | Yes |
  | `tags` | Tags | The comma-separated list of tags to use for adding annotations​. | `string` | Yes |
  | `annotationDeploymentDurationWindow` | Annotate deployment duration window | An option for configuring the duration window of an annotation.<br>- When selected, the annotation applies to the time between the start and the completion of deployment.<br>- When not selected, the annotation applies to the completion of the deployment. | `boolean` | No |
  | `text` | Text | A custom description for an annotation. When not specified, this setting describes the release and status​. This setting can include links, such as `<a href="https://www.contoso.com" target="_blank">Contoso</a>`. | `string` | No |
  | `dashboardId` | Dashboard | The ID of the dashboard to add the annotation to. When an ID isn't specified, the annotation is added at the global level​. | `string` | No |

## Jenkins

Jenkins is a continuous integration server that you can use to build and test software projects continuously.

### Trigger a Git build

This action uses the [Jenkins Git plug-in](https://plugins.jenkins.io/git/) to trigger a build in a Git repo.

- Consumer ID: `jenkins`
- Action ID: `triggerGitBuild`
- Supported events: `git.push`, `git.pullrequest.merged`
- Settings:

  | Input ID | Name | Description | Data type | Required |
  | --- | --- | --- | --- | --- |
  | `serverBaseUrl` | Jenkins base URL | The URI that contains the hostname of the Jenkins server. | `uri` | Yes |
  | `basicAuthCredentials` | Basic authentication credentials | Standard HTTP authentication credentials. To avoid sending credentials in plain text, use the HTTPS protocol to encrypt the credentials via TLS. We recommend using [service principals and managed identities in Azure DevOps](../integrate/get-started/authentication/service-principal-managed-identity.md). | `string` | Yes |
  | `useTfsPlugin` | Integration level | The selected integration level, which is one of two values:<br>- The built-in Jenkins API<br>- The extended integration provided by the Azure DevOps Server plug-in if that plug-in is installed on the Jenkins server | `string` | No |

### Trigger a generic build

This action triggers a generic Jenkins build that invokes the Jenkins build URL.

- Consumer ID: `jenkins`
- Action ID: `triggerGenericBuild`
- Supported events: `git.push`, `git.pullrequest.merged`, `build.complete`, `tfvc.checkin`, `ms.vss-release.deployment-completed-event`
- Settings:

  | Input ID | Name | Description | Data type | Required |
  | --- | --- | --- | --- | --- |
  | `serverBaseUrl` | Jenkins base URL | The URI that contains the hostname of the Jenkins server. | `uri` | Yes |
  | `basicAuthCredentials` | Basic authentication credentials | Standard HTTP authentication credentials. To avoid sending credentials in plain text, use the HTTPS protocol to encrypt the credentials via TLS. We recommend using [service principals and managed identities in Azure DevOps](../integrate/get-started/authentication/service-principal-managed-identity.md). | `string` | Yes |
  | `buildName` | Build | The name of the build to trigger. | `string` | Yes |
  | `useTfsPlugin` | Integration level | The selected integration level, which is one of two values:<br>- The built-in Jenkins API<br>- The extended integration provided by the Azure DevOps Server plug-in if that plug-in is installed on the Jenkins server | `string` | No |
  | `buildAuthToken` | Build token | An authorization token for a build. Only users who know the token can remotely trigger builds. | `string` | No |
  | `buildParameterized` | Accepts parameters | An option that specifies whether the build accepts parameters. | `boolean` | No |
  | `buildParams` | Build parameters | Build parameters in the form of name-value pairs. In each pair, the name and value are separated by a colon, such as `<parameter>:<value>`. Each name-value pair appears on its own line. | `string` | No |

## Slack

Slack is a searchable platform for team communication.

### Post a message to a channel

This action posts a message about an event to a Slack channel. For more information, see [Create a service hook for Azure DevOps with Slack](services/slack.md).

- Consumer ID: `slack`
- Action ID: `postMessageToChannel`
- Supported events: All events
- Settings:

  | Input ID | Name | Description | Data type | Required |
  | --- | --- | --- | --- | --- |
  | `url` | Slack webhook URL | The webhook URL provided by Slack to send HTTP POST requests to. | `uri` | Yes |

## Trello

Trello is a project management tool that uses boards, lists, and cards to help teams track workflows.

### Create a card

This action creates a card on an existing list in Trello. A card can represent a task, an issue, an event, or other project-related items. For more information, see [Create a service hook for Azure DevOps Services and TFS with Trello](services/trello.md).

- Consumer ID: `trello`
- Action ID: `createCard`
- Supported events: All events
- Settings:

  | Input ID | Name | Description | Data type | Required |
  | --- | --- | --- | --- | --- |
  | `userToken` | User token | A user token that provides access to Trello resources. To get a token, go to the [Trello authorization page](https://go.microsoft.com/fwlink/?LinkID=390580). | `string` | Yes |
  | `boardId` | Board | The name of the board on which the Trello card gets created. | `string` | Yes |
  | `listId` | List | The name of the list on which the Trello card gets created. | `string` | Yes |
  | `labels` | Labels | A comma-separated list of label colors to apply to the created card. Valid label color names are `red`, `orange`, `yellow`, `green`, `blue`, and `purple`. | `string` | No |
  | `addToTop` | Create at beginning of list | An option that indicates whether to create the card at the beginning or end of the Trello list. When this field is `true`, the card is created at the beginning. | `boolean` | No |
  | `cardName` | Card name | The name for the new card. By default, the text description of the event is used as the name. You can use placeholders to insert content from the event into the name. For more information, see [Create a service hook for Azure DevOps Services and TFS with Trello](services/trello.md). | `string` | No |
  | `cardDescription` | Card description | The description for the new card. By default, the detailed Markdown description of the event is used as the description. You can use placeholders to insert content from the event into the description. For more information, see [Create a service hook for Azure DevOps Services and TFS with Trello](services/trello.md).| `string` | No |

### Create a list

This action creates a list on an existing board in Trello. A list is used to organize cards on a board and typically represents a state. For more information, see [Create a service hook for Azure DevOps Services and TFS with Trello](services/trello.md).

- Consumer ID: `trello`
- Action ID: `createList`
- Supported events: All events
- Settings:

  | Input ID | Name | Description | Data type | Required |
  | --- | --- | --- | --- | --- |
  | `userToken` | User token | A user token that provides access to Trello resources. To get a token, go to the [Trello authorization page](https://go.microsoft.com/fwlink/?LinkID=390580). | `string` | Yes |
  | `boardId` | Board | The name of the board on which the Trello list gets created. | `string` | Yes |
  | `addToBottom` | Create at bottom of board | An option that indicates whether to create the card at the beginning or end of the board. When this field is `true`, the card is created at the end. | `boolean` | No |
  | `listName` | List name | The name for the new list. By default, the text description of the event is used as the name. You can use placeholders to insert content from the event into the name. For more information, see [Create a service hook for Azure DevOps Services and TFS with Trello](services/trello.md).| `string` | No |

## Webhooks

Webhooks provide a way to send a JSON representation of an Azure DevOps event to any service that has a public endpoint.

### Post via HTTP

This action posts a JSON object representation of an event to a specified URL. HTTPS endpoints are recommended due to the potential for private data in the event payload. For more information, see [Webhooks](services/webhooks.md).

- Consumer ID: `webHooks`
- Action ID: `httpRequest`
- Supported events: All events
- Settings:

  | Input ID | Name | Description | Data type | Required |
  | --- | --- | --- | --- | --- |
  | `url` | URL | The URL to send an HTTP POST to. | `uri` | Yes |
  | `acceptUntrustedCerts` | Accept untrusted SSL certificates | An option for not requiring a trusted Secure Sockets Layer (SSL) certificate for an endpoint. Use this option only during development and testing. | `boolean` | No |
  | `basicAuthCredentials` | Basic authentication credentials | Standard HTTP authentication credentials. To avoid sending credentials in plain text, use the HTTPS protocol to encrypt the credentials via TLS. We recommend using [service principals and managed identities in Azure DevOps](../integrate/get-started/authentication/service-principal-managed-identity.md). | `string` | Yes |
  | `httpHeaders` | HTTP headers | HTTP header keys and values in the form of key-value pairs. In each pair, the key and value are separated by a colon, such as `<key>:<value>`. Each key-value pair appears on its own line. These values are viewable by anyone who has access to the service hook subscription. | `string` | No |
  | `resourceDetailsToSend` | Resource details to send | The number of resource fields to send to the queue. Possibilities are all fields, a minimum number, and none. | `string` | No |
  | `messagesToSend` | Messages to send | The types of messages to send to the queue. | `string` | No |
  | `detailedMessagesToSend` | Detailed messages to send | The types of detailed messages to send to the queue. | `string` | No |

## Zendesk

Zendesk is a software as a service (SaaS) suite that offers help-desk ticketing, issue tracking, and customer-service support.

### Create a private comment in a ticket

This action creates a private comment in a Zendesk ticket.

- Consumer ID: `zendesk`
- Action ID: `createPrivateComment`
- Supported events: `workitem.commented`
- Settings:

  | Input ID | Name | Description | Data type | Required |
  | --- | --- | --- | --- | --- |
  | `accountName` | Account name | The Zendesk account name. You can find the account name in the URL of your Zendesk account, which has the format `https://<account-name>.zendesk.com`. | `string` | Yes |
  | `username` | User name | The user name of the Zendesk user who updates tickets. | `string` | Yes |
  | `apiToken` | API token | The Zendesk API token. To find the token, go to the Zendesk app, and then select **Admin** > **Channels** > **API**. | `string` | Yes |

## Related content

- [Authorize other services](authorize.md)
- [Service hooks overview](overview.md)
