---
ms.subservice: azure-devops-ecosystem
title: Create a custom consumer for service hooks
titleSuffix: Azure DevOps
description: Learn how to create a custom consumer for service hooks in Azure DevOps.
ms.custom: engagement-fy23, UpdateFrequency3
ms.topic: how-to
monikerRange: '<= azure-devops'
ms.author: chcomley
author: chcomley
ms.date: 04/03/2026
ai-usage: ai-assisted
---

# Create a custom consumer for service hooks

[!INCLUDE [version-lt-eq-azure-devops](../../includes/version-lt-eq-azure-devops.md)]

Use service hooks to notify external systems about events in your Azure DevOps project. A custom consumer extension sends an HTTP POST to an endpoint you configure when specific events occur.

[!INCLUDE [extension-samples-tip](../includes/extension-samples-tip.md)]

This article shows how to build an extension that implements a sample consumer service. The example consumer:

- Listens for three Git events: code pushed, pull request created, and pull request updated
- Sends an HTTP POST with the event payload to a configurable endpoint URL

:::image type="content" source="media/consumer-service.png" alt-text="Diagram that shows a sample consumer service sending HTTP messages for code push and pull request events.":::

For the complete source, see the [extension sample GitHub repo](https://github.com/microsoft/azure-devops-extension-sample). For all available event types, see [Service hook event types](../../service-hooks/events.md).

[!INCLUDE [extension-docs-new-sdk](../../includes/extension-docs-new-sdk.md)]

## How service hooks work

Service hooks have three components:

- **Publishers** emit events, such as "code pushed" or "pull request created."
- **Subscriptions** match specific events to actions.
- **Consumers** define the actions to run, such as sending an HTTP POST.

:::image type="content" source="media/service-hooks.png" alt-text="Diagram that shows the service hook flow: publishers emit events, subscriptions match events, and actions run when an event matches a subscription.":::

In this article, the extension implements a custom consumer. When a matching event occurs, the consumer sends an HTTP POST with the event payload to the endpoint URL configured in the subscription.

## Create the extension

### 1. Set up the project

Create your extension project. For instructions, see [Develop a web extension](../get-started/node.md).

### 2. Add the consumer contribution

Add the consumer contribution to your [manifest file](./manifest.md) (`vss-extension.json`). The following example shows a complete manifest with a service hook consumer:

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
> Update the `publisher` property to match your publisher ID.

The `contributions` array is the key section. Each contribution defines:

- **Type**: `ms.vss-servicehooks.consumer` — registers a consumer service
- **Target**: `ms.vss-servicehooks.consumers` — the consumer services collection
- **Properties**: Consumer configuration, including inputs and actions (see [property reference](#consumer-properties))

### 3. Package, publish, and test

[Package and publish](../publish/overview.md) the extension to your Azure DevOps organization. Then create a service hook subscription that uses your custom consumer to verify it works.

## Property reference

### Consumer properties

| Property         | Description                                                                             |
| ---------------- | --------------------------------------------------------------------------------------- |
| id               | Unique ID for the consumer service.                                                 |
| name             | Display name shown when users create service hook subscriptions. |
| description      | Describes the consumer service.                                                        |
| informationUrl   | URL where users can learn more about the extension.                                    |
| inputDescriptors | Inputs that users provide when creating subscriptions (for example, a URL endpoint).   |
| actions          | Actions to take when events occur, and which event types trigger each action.                            |

### Action properties

Each action in the `actions` array has the following properties:

| Property            | Description                                                                                                                                                                          |
| ------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| id                  | Unique ID for the action.                                                                                                                                                        |
| name                | Display name of the action.                                                                                                                                                               |
| description         | Description of what the action does.                                                                                                                                              |
| supportedEventTypes | Array of event type IDs that trigger this action. For available types, see [Service hook event types](../../service-hooks/events.md). |
| publishEvent.url    | Endpoint URL that receives the HTTP POST. Use triple-brace Mustache syntax (`{{{inputId}}}`) to substitute values from `inputDescriptors` that users provide when creating the subscription. |

## Next step

> [!div class="nextstepaction"]
> [Package, publish, and install extensions](../publish/overview.md)

## Related content

- [Service hook consumers](../../service-hooks/consumers.md)
- [Available services for service hooks](../../service-hooks/overview.md#available-services)
- [Create a service hook subscription programmatically](../../service-hooks/create-subscription.md)
- [Extension example GitHub repository](https://github.com/microsoft/azure-devops-extension-sample)
- [List of event types](../../service-hooks/events.md)
