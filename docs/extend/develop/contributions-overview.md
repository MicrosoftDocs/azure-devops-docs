---
ms.subservice: azure-devops-ecosystem
title: Contribution model
titleSuffix: Azure DevOps
description: Understand the contribution model for Azure DevOps extensions, including contribution types, contributions, and targeting.
ms.assetid: 96509f47-bac2-4319-9085-2621ff8f814a
ms.custom: engagement-fy23, UpdateFrequency3
ai-usage: ai-assisted
ms.topic: concept
monikerRange: '<= azure-devops'
ms.author: chcomley
author: chcomley
ms.date: 04/03/2026
---

# Contribution model

[!INCLUDE [version-lt-eq-azure-devops](../../includes/version-lt-eq-azure-devops.md)]

Extensions add capabilities to Azure DevOps through *contributions* and *contribution types* declared in the [extension manifest](manifest.md). A **contribution type** defines a contract — the properties and behavior that contributions of that type must implement. A **contribution** is a concrete instance of a contribution type (for example, a hub or a build task).

[!INCLUDE [extension-samples-tip](../includes/extension-samples-tip.md)]

For more information, see:

- [Extensibility points](../reference/targets/overview.md)
- [azure-devops-extension-api](/javascript/api/azure-devops-extension-api/)
- [azure-devops-extension-sdk](/javascript/api/azure-devops-extension-sdk/)

## Contribution types

A contribution type defines the properties and rules that contributions of that type must follow. Contribution types can extend other contribution types, inheriting their properties.

Common built-in contribution types include:

- `ms.vss-web.hub` — a page in the web UI
- `ms.vss-web.action` — a menu action
- `ms.vss-distributed-task.task` — a build/release task

Each property definition in a contribution type specifies:

- **type** — the data type (for example, `string`, `boolean`, `integer`)
- **required** — whether the property must be provided
- **default** — an optional default value

### Contribution type example

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

A **contribution** is an instance of a contribution type. For example, the `Queries` hub under the Work hub group is a contribution of type `ms.vss-web.hub`, and the `Publish Test Results` build task is a contribution of type `ms.vss-distributed-task.task`.

Every contribution must specify a type and provide values for any properties required by that type.

### Contribution example

The following hub contribution declaration in an extension manifest adds a hub named "Explorer" to a build hub group:

```json
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

A contribution can **target** one or more other contributions, creating a parent-child relationship. The system discovers these relationships at runtime to determine what to render. For example, a `hub` contribution targets a `hub-group` contribution so the system knows which hubs belong to which group.

```json
{
    "id": "build-explorer-hub",
    "type": "ms.vss-web.hub",
    "targets": [
        ".build-hub-group"
    ]
}
```

When the hub group renders, the system queries for all hub contributions that target it to determine which hubs to display.

## Contribution identifiers

Every contribution and contribution type must have a unique ID within its extension.

A **fully qualified** identifier has three parts separated by dots (`.`):

| Part | Example |
|------|--------|
| Publisher ID | `ms` |
| Extension ID | `vss-web` |
| Contribution/type ID | `hub` |

Full identifier: `ms.vss-web.hub`

Within the same extension manifest, you can use **relative references** — a dot followed by the contribution ID. For example, `.hub` is a shortcut for `ms.vss-web.hub` when used inside the `vss-web` extension.

## Related content

- [Extension manifest reference](manifest.md)
- [Extensibility points](../reference/targets/overview.md)
- [Develop a web extension](../get-started/node.md)
