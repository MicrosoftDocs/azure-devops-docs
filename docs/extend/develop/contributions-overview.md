---
ms.prod: devops
ms.technology: devops-ecosystem
title: Contributions Model Fundamentals | Extensions for Azure DevOps Services
description: Overview of the contribution model, including an overview of contributions, types, and targeting other contributions
ms.assetid: 96509f47-bac2-4319-9085-2621ff8f814a
ms.topic: conceptual
ms.manager: jillfra
monikerRange: '>= tfs-2017'
ms.author: elbatk
author: elbatk
ms.date: 08/04/2016
---

# Contribution model

Extensions add new capabilities into the system by providing contributions and by defining ways for other extensions to plug in to them.
A contribution type defines something that can be added to the system. A contribution is a specific instance of a contribution type. For
example, `hub` is a contribution type defined by a core, Microsoft-provided extension. The `Explorer` hub under the Build hub group is a 
specific contribution of type `hub`.

### Contribution types

A **contribution type** defines a contract that all contributions to the system of that type must adhere to. `hub`, `action`, and `build-task`
are all examples of contribution types. Types define the properties set by instances of that type. Each property definition indicates the type
of the property (string, boolean, etc.), whether the property is required, and optionally specifies a default value if not specified by a 
contribution. A contribution type can also extend from another contribution type.

#### Example

Here is an example of a contribution type declaration in an extension manifest:
  
```js
{
    ...
    "contributionTypes": [
        {
            "id": "hub",
            "name": "Web Access Hub",
            "description": "A hub that will appear in the hubs menu at the top of web pages.",
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

### Contributions

A **contribution** is an instance of a contribution type. For example, the `Queries` hub under the Work hub group is a contribution
of type `hub` and the `Publish Test Results` build task is a contribution of type `build-task`. 

All contributions must specify a type and specify values for any properties required by that contribution type.

#### Example

Here is an example of a hub contribution declaration in an extension manifest:

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

### Targeting contributions

A contribution can **target** one or more other contributions. This creates a relationship between the contribution and each of its
target(s) that enables the system to discover contributions for the target at runtime. For example, a `hub` contribution (`Explorer`) 
might target a specific `hub-group` contribution (`Build`). 

```json
{
    "id": "build-explorer-hub",
    "type": "ms.vss-web.hub",
    "targets": [
        ".build-hub-group"
    ]
}
```

When the hub group is being rendered, the system can query for all hub 
contributions that target the hub group in order to know which hubs to render.


### Identifying contributions and types

Every contribution and contribution type must have a unique ID (within the extension it is declared in). 

A *full* contribution identifier includes the publisher ID, extension ID, and contribution/type ID, separated by
a dot (.). For example: "ms.vss-web.hub" is the full identifier for the contribution with ID of `hub` in the `vss-web` extension published
by the `ms` (Microsoft) publisher.

*Relative* contribution references may be used within an extension manifest for a contribution's reference to another contribution or contribution
type within that same extension. In this case, the publisher and extension IDs are NOT included, and the ID is simply a dot (.) followed
by the contribution id. For example, ".hub" may be used within the "vss-web" extension mentioned above as a shortcut for "ms.vss-web.hub".