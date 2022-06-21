---
ms.technology: devops-ecosystem
title: Create a consumer service for service hooks | Extensions for Azure DevOps 
description: Learn how to create a custom consumer service for service hooks in Azure DevOps.
ms.assetid: 294ae93b-7522-40ef-95ab-d5002f8c3ca8
ms.custom: freshness-fy22q2
ms.topic: conceptual
monikerRange: '<= azure-devops'
ms.author: chcomley
author: chcomley
ms.date: 10/27/2021
---

# Create a consumer service for service hooks

[!INCLUDE [version-lt-eq-azure-devops](../../includes/version-lt-eq-azure-devops.md)]

With service hooks, you can do tasks on other services when events happen in your project. For example, create a card in Trello when a work item gets created or send a push notification to your team's mobile devices when a build fails. Service hooks can also be used in custom apps and services, as a more efficient way to drive activities when events happen in your projects.

[!INCLUDE [extension-docs-new-sdk](../../includes/extension-docs-new-sdk.md)]

## How service hooks work

Service hook **publishers** define a set of *events*. **Subscriptions** listen for the *events* and define **actions** to take based on the event.
Subscriptions also target **consumers**, which are external services that can do their own actions, when an event occurs.

:::image type="content" source="media/service-hooks.png" alt-text="Service hooks diagram":::

## Custom consumer service

This article walks through developing an extension that implements a **sample consumer service** that includes:

- Supported events that trigger actions to be taken
  - Code pushed
  - Pull request created
  - Pull request updated
- Supported actions to take when events occur
  - Do action

> [!NOTE]
> This article refers to the home directory for your project as "home".

:::image type="content" source="media/consumer-service.png" alt-text="Sample consumer service":::

## Create the extension

1. (Optional) Add an icon - a square image in the ```images``` folder that identifies your extension.
It's displayed in the Marketplace and when someone installs your extension. You don't need to add an icon for your extension to work, but you can use it alongside your extension name, like in the following image.

> [!NOTE]
> Name the image ```logo.png```, or remove the "icons" sections from the manifest file if you wish to skip this step.

:::image type="content" source="../get-started/media/logo.png" alt-text="Sample logo.":::

:::image type="content" source="../get-started/media/first-sample-extension.png" alt-text="First extension sample.":::

2. Create the manifest file and populate it. The [manifest file](./manifest.md) defines both your extension and the consumer service.

   Create a json file (`vss-extension.json`, for example) in the `home` directory of your extension with the following contents:

```json
{
    "manifestVersion": 1,
    "id": "tools",
    "version": "0.1.0",
    "name": "Fabrikam Tools",
    "publisher": "fabrikam",
    "targets": [
        {
            "id": "Microsoft.VisualStudio.Services"
        }
    ],
    "categories": [
        "Azure xxx"
    ],
}
```

> [!NOTE]
> Make sure to update the `publisher` property.
> Valid values for categories are: `Azure Repos`, `Azure Boards`, `Azure Pipelines`, `Azure Test Plans`, and `Azure Artifacts`.

For a consumer service, the following properties are required:

| Property           | Description
|--------------------|-----------------------|
| manifestVersion    | Number corresponding to the version of the manifest format.  |
| id                 | Unique ID for your consumer service.       |
| version            | String specifying the version of the consumer service.
| name               | Name of the consumer service.    |
| publisher          | Identifier of the publisher.  |
| categories         | Array of strings representing the categories your consumer service belongs to. For more information, see [Required attributes](manifest.md#required-attributes).     |
| targets            | Products and services supported by your integration of extension. For more information, see [Installation targets](manifest.md).

## Next steps

> [!div class="nextstepaction"]
> [Package, publish, and install extensions](../publish/overview.md)

## Related articles

- [Testing and debugging extensions](/previous-versions/azure/devops/extend/test/debug-in-browser)
