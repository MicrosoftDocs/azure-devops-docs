---
ms.subservice: azure-devops-ecosystem
title: Developing extensions for vertical web navigation
description: Guidance for developing extensions to be used with vertical web navigation
ms.assetid: 3fa22433-150b-428c-8e10-3ffb4d832c20
ms.topic: conceptual
monikerRange: 'azure-devops'
ms.author: chcomley
author: chcomley
ms.date: 06/08/2021
---

# Vertical navigation guidance

[!INCLUDE [version-eq-azure-devops](../../includes/version-eq-azure-devops.md)]

Vertical navigation brings with it changes that affect some extensions. These outcomes include support for extension icons along with changes to team context.

[!INCLUDE [extension-docs-new-sdk](../../includes/extension-docs-new-sdk.md)]

## Team context

In traditional horizontal navigation, users could go to a project or team by selecting from a picker that's in the top left of the page header. This picker presented a list of recent teams and a way to browse for all teams. In the new vertical navigation, a user can only navigate into a project (and not into a team). This change was made to simplify the overall experience. But, it introduced a challenge for web extensions that rely on users' ability to switch teams using the traditional team picker in the page header.

`VSS.getWebContext()` is a client-side API provided by the VSS SDK that provides information about the current organization, project, and team the user is operating in:

```json
{
    "account": {
        "name": "Fabrikam",
        "id": "50e49b94-4bb6-40e7-8c85-a6d756d8a4d8"
    },
    "project": {
        "name": "Fabrikam Dev",
        "id": "049b1af2-fc87-4e50-95e4-151357f04b7f"
    },
    "team": {
        "name": "Ops Team",
        "id": "9b3a6b80-fe95-4c8c-8aa1-1e5d535d7af1"
    }
}
```

We don't recommend relying on `VSS.getWebContext().team`. Instead, follow the guidance below, based on the category your extension falls under.

### Hub extensions that are team aware

If your extension needs to provide users a way to select a team, you can use the Teams REST API to get a list of teams for the current project. The following example shows how to call this API from your extension.

```javascript
VSS.require(["VSS/Service", "TFS/Core/RestClient"],
   function(VSS_Service, Tfs_Core_WebApi) {
      var client = VSS_Service.getCollectionClient(Tfs_Core_WebApi.CoreHttpClient4);
  
      client.getTeams(VSS.getWebContext().project.id).then(
         function(teams) {
            console.log(teams);
         }
      );
});
```

For an example of an extension that provides a team picker control, see [Team Calendar](https://github.com/Microsoft/vsts-team-calendar).

### Pivots/Panels extensions that are in team aware hubs like Backlogs and Dashboard

Your extension can check the *configuration* object passed to your contribution. This object has different properties depending on the contribution type and where the contribution is hosted. Example shows reading team from the *configuration* and falling back to reading team from *webContext* to support both new vertical navigation and older horizontal navigation in on-premise releases.

```javascript
function getCurrentTeam() {
  let webContext = VSS.getWebContext();
  let configuration = VSS.getConfiguration();

  if ("team" in configuration) {
    return configuration.team;
  } else if ("team" in webContext) {
    return webContext.team;
  } else {
    return null; // should only happen if not in a project context
  }
}
```

### Actions extensions that are in team aware hubs like Backlogs and Dashboard

Your extension can check the *actionContext* object passed to the callback invoked when a user selects the contributed menu item. Example shows reading team from the *actionContext*.

```javascript
var menuContributionHandler = (function () {
        "use strict";
        return {
            // This is a callback that gets invoked when a user selects the newly contributed menu item
            // The actionContext parameter contains team information.
            execute: function (actionContext) {
                if("team" in actionContext) {
                    alert(`Team. Id is ${actionContext.team.id}, Name is ${actionContext.team.name}`);
                }
            }
        };
    }());
```

## Hub icon

You can optionally set an asset (like a .png or .jpg) as the icon for your hub. This icon appears next to the hub in the vertical navigation bar. It must be packaged with your extension.

> [!NOTE]
> These icons don't appear in horizontal navigation.

Complete the following steps to set an icon for your hub.

1. Set the `iconAsset` property of the hub contribution to the fully qualified asset identifier, which follows the pattern: `{publisher-id}.{extension-id}/{asset-path}`.

2. Add an entry for this asset in the `includesata` contribution property.

3. Package the asset with your extension by listing it in the `files` property at the root of your manifest.

**Example #1:**

```json
{
  "id": "my-extension",
  "publisherId": "my-publisher",
  ...
  "contributions": [
        {
            "id": "example-hub",
            "type": "ms.vss-web.hub",
            "targets": [
                "ms.vss-code-web.code-hub-group"
            ],
            "properties": {
                "name": "My Hub",
                "iconAsset": "my-publisher.my-extension/images/fabrikam-logo.png",
                "includesData": {
                    "assets": [
                        "my-publisher.my-extension/images/fabrikam-logo.png"
                    ]
                }
            }
       }
  ],
 "files": [
     {
         "path": "images/fabrikam-logo.png",
         "addressable": true
     }
 ]
}
```

**Example #2:**

When themes like light versus dark get applied, you can specify the icons in your extension manifest as follows.

```json

{
    "id": "hub",
    "type": "ms.vss-web.hub",
    "targets": [
        "ms.vss-work-web.work-hub-group"
    ],
    "properties": {
        "name": "Hub",
        "description": "Something",
        "uri": "pages/Hub.html",
        "icon": {
            "light": "img/hub-light.png",
            "dark": "img/hub-dark.png"
        }
    }
}
```
