---
ms.subservice: azure-devops-ecosystem
title: Service hooks custom consumer
description: Learn how to create a custom consumer service for service hooks in Azure DevOps.
ms.assetid: 294ae93b-7522-40ef-95ab-d5002f8c3ca8
ms.custom: engagement-fy23
ms.topic: conceptual
monikerRange: '<= azure-devops'
ms.author: chcomley
author: chcomley
ms.date: 12/23/2022
---

# Service hooks custom consumer

[!INCLUDE [version-lt-eq-azure-devops](../../includes/version-lt-eq-azure-devops.md)]

With service hooks, you can notify third-party systems about events happening in your project. Using extensions you can do your custom action by sending an HTTP message to the endpoint defined in the extension's manifest. We call this Custom Consumer for Service Hooks.

[!INCLUDE [extension-docs-new-sdk](../../includes/extension-docs-new-sdk.md)]

## How service hooks work

Service hook **publishers** define a set of *events*. **Subscriptions** listen and wait for the *events* they also define **actions** to be taken when the event is triggered.

:::image type="content" source="media/service-hooks.png" alt-text="Service hooks diagram":::

This is a general description of how all our Service Hooks implementations work. For our particular case, we will specify our consumer defined by extension and do specific action which will be taken when an event occurs.

## Custom consumer service

This article walks through developing an extension that implements a **sample consumer service** that includes:

- Supported events that trigger actions to be taken
  - Code pushed
  - Pull request created
  - Pull request updated
- Supported actions to take when events occur
  - Do action (Send HTTP message)

> [!NOTE]
> This article refers to the home directory for your project as "home".

:::image type="content" source="media/consumer-service.png" alt-text="Sample consumer service":::

- For those who are more learn by example persons, here is the link to the complete extension example GitHub project: [Extension example GitHub repo](https://github.com/microsoft/vsts-extension-samples/tree/master/service-hooks-consumer)
- List of all supported events you can use as triggers for your custom consumer extension: [List of event types](https://learn.microsoft.com/en-gb/azure/devops/service-hooks/events?view=azure-devops)


## Create the extension

1. Follow this [link](https://learn.microsoft.com/en-us/azure/devops/extend/get-started/node?view=azure-devops) where is described, how you can create your extension from the scratch.

2. Add the specific contribution for custom consumer implementation to your basic [manifest file](./manifest.md). Example of how should your manifest look after you add the contribution:

```json
{
    "manifestVersion": 1,
    "id": "samples-service-hooks-consumer",
    "version": "0.1.2",
    "name": "Service Hooks Sample",
    "description": "A simple extension that demonstrates how to contribute a consumer service into service hooks.",
    "publisher": "fabrikam",
    "public": false,
    "icons": {
        "default": "images/logo.png"
    },
    "scopes": [],
    "files": [
        {
            "path": "images",
            "addressable": true
        }
    ],
    "content": {
        "details": {
            "path": "readme.md"
        }
    },
    "categories": [
        "Developer samples"
    ],
    "targets": [
        {
            "id": "Microsoft.VisualStudio.Services"
        }
    ],
    "contributions": [
        {
            "id": "consumer",
            "type": "ms.vss-servicehooks.consumer",
            "targets": [
                "ms.vss-servicehooks.consumers"
            ],
            "properties": {
                "id": "consumer",
                "name": "Sample Consumer",
                "description": "Sample consumer service",
                "informationUrl": "https://aka.ms/vsoextensions",
                "inputDescriptors": [
                    {
                        "id": "url",
                        "isRequired": true,
                        "name": "URL",
                        "description": "URL to post event payload to",
                        "inputMode": "textbox"
                    }
                ],
                "actions": [
                    {
                        "id": "performAction",
                        "name": "Perform action",
                        "description": "Posts a standard event payload",
                        "supportedEventTypes": [
                            "git.push",
                            "git.pullrequest.created",
                            "git.pullrequest.updated"
                        ],
                        "publishEvent": {
                            "url": "{{{url}}}",
                            "resourceDetailsToSend": "all",
                            "messagesToSend": "all",
                            "detailedMessagesToSend": "all"
                        }
                    }
                ]
            }
        }
    ]
}
```
> [!NOTE]
> Note: Dont forget to update the `publisher` property.


For each contribution in your extension, the manifest defines
- the type of contribution - consumer service (ms.vss-servicehooks.consumer) in this case,
- the contribution target - consumer services (ms.vss-servicehooks.consumers) in this case,
- and the properties that are specific to each type of contribution. For a consumer service we have:

| Property         | Description                                                                             |
| ---------------- | --------------------------------------------------------------------------------------- |
| id               | Unique id for your consumer service.                                                    |
| name             | Name of the custom consumer. Will be visible during Service Hook subscription creation. |
| description      | Describes your consumer service.                                                        |
| informationUrl   | Where more info can be found about your extension.                                      |
| inputDescriptors | Inputs to be used by users that are creating subscriptions with the consumer service.   |
| actions          | Describes the actions to take and which events trigger them.                            |

Action for your custom consumer has the following properties:

| Property            | Description                                                                                                                                                                          |
| ------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| id                  | id for your action service.                                                                                                                                                          |
| name                | Name of the the action                                                                                                                                                               |
| description         | More detailed description of the action                                                                                                                                              |
| supportedEventTypes | Array of trigger types for which this action can be used. More info at: [List of event types](https://learn.microsoft.com/en-gb/azure/devops/service-hooks/events?view=azure-devops) |
| publishEvent.url    | URL where HTTP message will be sent to. It can be tempalted by values provided by inputDescriptors. Their actual values are defined by user when subscription is beeing created.     |
|                     |

## Next steps

Now you can deploy your extension to your Azure DevOps organization and test it.

> [!div class="nextstepaction"]
> [Package, publish, and install extensions](../publish/overview.md)

## Related articles

- [Service hook consumers](../../service-hooks/consumers.md)
- [Available services for service hooks](../../service-hooks/overview.md#available-services)
- [Create a service hook subscription programmatically](../../service-hooks/create-subscription.md)
- [Test and debug extensions](/previous-versions/azure/devops/extend/test/debug-in-browser)
- [Extension example GitHub repo](https://github.com/microsoft/vsts-extension-samples/tree/master/service-hooks-consumer)
- [List of event types](https://learn.microsoft.com/en-gb/azure/devops/service-hooks/events?view=azure-devops)