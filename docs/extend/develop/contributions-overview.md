---
ms.subservice: azure-devops-ecosystem
title: Contribution model
description: Overview of the contribution model, including contribution types and how to target other contributions for Azure DevOps.
ms.assetid: 96509f47-bac2-4319-9085-2621ff8f814a
ms.custom: engagement-fy23
ai-usage: ai-assisted
ms.topic: conceptual
monikerRange: '<= azure-devops'
ms.author: chcomley
author: chcomley
ms.date: 10/03/2025
---

# Contribution model

[!INCLUDE [version-lt-eq-azure-devops](../../includes/version-lt-eq-azure-devops.md)]

Extensions add capabilities to Azure DevOps by declaring contribution types and contribution instances. A contribution type defines a contract (the properties and behavior) that contributions of that type must implement. A contribution is a concrete instance of a contribution type (for example, a hub or a build task).

> [!INCLUDE [extension-samples-tip](../includes/extension-samples-tip.md)]

For more information, see:
- [Extensibility points](../reference/targets/overview.md)
- [azure-devops-extension-api](/javascript/api/azure-devops-extension-api/?source=recommendations)
- [azure-devops-extension-sdk](/javascript/api/azure-devops-extension-sdk/)

## Contribution types

A contribution type defines the properties and rules that contributions of that type must follow. A contribution type can extend another contribution type, inheriting its properties.

Common contribution types include:
- `hub`
- `action`
- `build-task`

Each property definition includes:
- property type (for example, string or boolean)
- whether the property is required
- an optional default value

### Example

A contribution type declaration in a manifest looks like this:

```json
{
  "contributionTypes": [
    {
      "id": "hub",
      "name": "Web Access Hub",
      "description": "A hub that appears in the hubs menu at the top of web pages.",
      "properties": {
        "name": {
          "description": "The text to display for the hub",
          "type": "string",
          "required": true
        },
        "uri": {
          "description": "URI of the contents of the hub page",
          "type": "string",
          "required": true
        },
        "order": {
          "description": "Optional ordering value indicating the hub's position within the hub group",
          "type": "integer"
        }
      }
    }
  ]
}
```

## Contributions

A **contribution** is an instance of a contribution type. For example, the `Queries` hub under the Work hub group is a contribution of type `hub` and the `Publish Test Results` build task is a contribution of type `build-task`. 

All contributions must specify a type and specify values for any properties required by that contribution type.

### Example

Here's an example of a hub contribution declaration in an extension manifest:

```js
{
    "contributions": [
        {
            "id": "build-explorer-hub",
            "type": "ms.vss-web.hub",
            "targets": [
                ".build-hub-group"
            ],
            "properties": {
                "name": "Explorer",
                "uri": "/_build",
                "order": 22
            }
        }
    ]
}
```

## Target contributions

A contribution can **target** one or more other contributions, which creates a relationship between the contribution and each of its targets. The system can discover contributions for the target at runtime. For example, a `hub` contribution (`Explorer`) might target a specific `hub-group` contribution (`Build`). 

```json
{
    "id": "build-explorer-hub",
    "type": "ms.vss-web.hub",
    "targets": [
        ".build-hub-group"
    ]
}
```

When the hub group renders, the system can query for all hub contributions that target the hub group to know which hubs to render.
## Identify contributions and types

Every contribution and contribution type must have a unique ID within the extension it's declared in. 

A *full* contribution identifier includes the following items, which you separate with a dot `.` :
- Publisher ID
- Extension ID
- Contribution/type ID

For example: `ms.vss-web.hub` is the full identifier for the following contribution:
- Publisher ID: `ms`
- Extension ID: `vss-web`
- Contribution/type ID: `hub`

You can use *relative* contribution references within an extension manifest for a contribution's reference to another contribution or contribution type within that same extension. In this case, the publisher and extension IDs aren't included, and the ID is a dot `.` followed by the contribution ID. For example, `.hub` might be used within the `vss-web` extension mentioned previously as a shortcut for `ms.vss-web.hub`.
