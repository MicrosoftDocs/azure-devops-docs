---
ms.subservice: azure-devops-ecosystem
title: Contribution model
description: Overview of the contribution model, including an overview of contributions, types, and targeting other contributions for Azure DevOps.
ms.assetid: 96509f47-bac2-4319-9085-2621ff8f814a
ms.custom: engagement-fy23
ms.topic: conceptual
monikerRange: '<= azure-devops'
ms.author: chcomley
author: chcomley
ms.date: 10/14/2022
---

# Contribution model

[!INCLUDE [version-lt-eq-azure-devops](../../includes/version-lt-eq-azure-devops.md)]

Extensions add new capabilities into the system by providing contributions and by defining ways for other extensions to plug in to them. A contribution type defines something that can be added to the system. A contribution is a specific instance of a contribution type. For example, `hub` is a contribution type defined by a core Microsoft-provided extension. The `Explorer` hub under the Build hub group is a specific contribution of type `hub`.

For more information, see the following references:
- [Extensibility points](../reference/targets/overview.md) 
- [azure-devops-extension-api](/javascript/api/azure-devops-extension-api/?source=recommendations) 
- [azure-devops-extension-sdk](/javascript/api/azure-devops-extension-sdk/)

## Contribution types

A **contribution type** defines a contract that all contributions to the system of that type must adhere to. A contribution type can also extend from another contribution type. The following examples of contribution types define the properties set by instances of that type:
- `hub`
- `action`
- `build-task`

Each property definition specifies the following aspects:
- Property type, for example string, boolean, and so on.
- Whether the property is required
- Default value, if not specified by a contribution (optional). 

### Example

Here's an example of a contribution type declaration in an extension manifest:
  
```js
{
    ...
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
                    "description": "An optional ordering value which can indicate in which position to place the hub within the hub group",
                    "type": "integer"
                }
				...
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

You can use *relative* contribution references within an extension manifest for a contribution's reference to another contribution or contribution type within that same extension. In this case, the publisher and extension IDs aren't included, and the ID is a dot `.` followed by the contribution ID. For example, `.hub` may be used within the `vss-web` extension mentioned previously as a shortcut for `ms.vss-web.hub`.
