---
title: Developing extensions for Public Projects
titleSuffix: Azure DevOps Services
description: Guidance for developing Azure DevOps Services extensions that support non-member and public users.
ms.technology: devops-ecosystem
ms.assetid: 3fa22433-150b-428c-8e10-3ffb4d832c20
ms.topic: conceptual
monikerRange: 'azure-devops'
ms.author: apawast
author: apawast
ms.date: 06/02/2020
---

# Public project support by Azure DevOps Services extensions

[!INCLUDE [version-vsts-only](../../includes/version-vsts-only.md)]

Before public project support, all Azure DevOps Services projects were private. Private projects only authenticated users with access to the project, so the public couldn't see or interact with it. A public project allows non-member users to view the contents of that project in a read-only state. 


> A non-member user is either **anonymous** (not authenticated to Azure DevOps Services) or **public** (are authenticated to Azure DevOps Services, but do not belong to the organization).

Non-member users generally see the same views as authenticated users, however non-public functionality is hidden or disabled. An example of non-public functionality, such as settings and actions, includes a queue build.


> [!NOTE]
> Azure DevOps Services public project support is currently in **Limited Preview**. Contact [vsts-public@microsoft.com](mailto:vsts-public@microsoft.com) if you are interested in developing extensions that support public projects. To learn more about public projects, see [Azure DevOps Services Public Projects Limited Preview](https://blogs.msdn.microsoft.com/devops/2018/04/27/vsts-public-projects-limited-preview/).


## Decide whether to make an extension visible to non-member users

As the extension developer, you can make all or part of your extension available to non-member users. These users can only use your extension from within a public project. If you choose to not make your extension available to non-member users, no change is required and there's no impact on members, whether they use your extension from within a public project.

Use this checklist to help decide if you should make your extension available to non-member users:

> [!div class="checklist"]
> * Data presented by your extension is relevant to non-member users
> * Your extension contributes capabilities at the project level
> * Your extension contributes to areas of the product that are accessible by non-member users
> * Your extension doesn't extend or rely on features that are unavailable to non-member users, for example the Data Service or certain Azure DevOps Services REST APIs. For more information, see the [Limitations](#limitations) section of this article.

## Contribution visibility

By default, contributions are only visible to organization members. To give non-member users visibility to a contribution, set the `restrictedTo` attribute on that contribution. The value is a string array that lists which types of users should have visibility to the contribution. The possible values are:

* `member` an authenticated user that is a member of the organization
* `public` an authenticated user that is **not** a member of the organization
* `anonymous` an unauthenticated user

### Example: make a hub visible to anonymous, public, and member users

```json
{
    "contributions": [
        {
            "id": "my-hub",
            "type": "ms.vss-web.hub",
            "targets": [
                "ms.vss-code-web.code-hub-group"
            ],
            "restrictedTo": [
                "member",
                "public",
                "anonymous"
            ],
            "properties": {
                ...            
            }
        }
    ]
}
```

You can also set the default visibility for all contributions in your extension by setting the `restrictedTo` attribute at the root your extension manifest. You can then override this default on individual contributions.

### Example: make every contribution, except for one, visible to all users

```json
{
    "id:": "my-extension",
    "name": "My Extension",
    "version": "1.0.0",
    ...
    "restrictedTo": [
           "anonymous",
           "public",
           "member"
    ],
    "contributions": [
        {
            "id": "my-member-only-widget",
            "type": "ms.vss-dashboards-web.widget",
            "restrictedTo": [
                "member"
            ],
            "properties": {
                ...
            }
        },
        {
            "id": "my-hub",
            "type": "ms.vss-web.hub",
            "targets": [
                "ms.vss-code-web.code-hub-group"
            ],
            "properties": {  
                ...              
            }
        },
        {
            "id": "my-second-hub",
            "type": "ms.vss-web.hub",
            "targets": [
                "ms.vss-work-web.work-hub-group"
            ],
            "properties": {  
                ...              
            }
        }            
    ]
}
```

<a name="limitations"></a>

## Limitations

If you want to make some or all aspects of your contribution available to public users, be aware of the following limitations.

### VSS SDK methods

The core SDK script, VSS.SDK.js, allows web extensions to communicate with the parent frame to do operations like initializing communication and getting context information about the current user. The following VSS SDK methods aren't supported for non-member users:

* `VSS.getAccessToken()`
* `VSS.getAppToken()`

### Extension data service

Because data managed by the [extension data service](./data-storage.md) isn't scoped or secured to a project, non-member users can't read or write any type of extension data. 

#### Example: handling data access errors

If the data service can't access the data service because of permission limitations by the calling user, the promise returned from the call to `getValue` is rejected. The error passed to the reject function has a name, which can help you understand why the call failed to read or write data.

```javascript
VSS.getService(VSS.ServiceIds.ExtensionData).then(function(dataService) {
    dataService.getValue("someKey").then(function(value) {
         // do something with the value
    }, function(error) {
       if (error.name === "AccessCheckException") {
           alert(error.message);
       }
    });
});
```

### REST APIs

A limited set of Azure DevOps Services REST APIs is available to non-member users. These APIs include most organization-level and project-level APIs for features unavailable to non-member users in general. Consider this information when you're deciding whether to make your extension available to non-member users.

We recommend that you use version 5.0 and later APIs, as certain APIs are only available to non-member users starting with version 5.0.

#### Identity references

A majority of Azure DevOps Services REST APIs use a common "contract" to represent a user or group. To protect member information, like email addresses, when a REST API is invoked by an anonymous or public user, certain fields, like `uniqueName` are omitted.

## Checking user permissions

Use permissions to decide whether to surface or enable a capability in your extension. The Security REST API gets used from web extension code to check whether the current user has permission in Azure DevOps Services to complete the task. This way, the user won't think they have permission to do something, only to find that they don't.

#### Example: check whether the user has permission to queue builds

This example shows how to use the Security REST client to check whether the user has permissions to queue builds in the current project. By default, non-member users don't have this permission.

```javascript
VSS.require(["VSS/Service", "VSS/security/RestClient"], function(VSS_Service, Security_RestClient) {
   var client = VSS_Service.getCollectionClient(Security_RestClient.SecurityHttpClient3);
 
   var securityToken = VSS.getWebContext().project.id;
 
   client.hasPermissionsBatch({
    evaluations: [
       {
           "securityNamespaceId": "33344D9C-FC72-4d6f-ABA5-FA317101A7E9",
           "token": securityToken,
           "permissions": 128 /* queue builds */
       }
    ],
    alwaysAllowAdministrators: true
}
).then(function(response) {
     console.log("Can user queue builds in this project? " + response.evaluations[0].value);
  });
});
```

## Dashboard widget considerations

Just like other types of contributions, the visibility of dashboard widget contributions is controlled with the `restrictedTo` contribution property. For example to make a widget visible to both non-member and member users:

```json
{
  "contributions": [
    {
      "id": "HelloWorldWidget",
      "type": "ms.vss-dashboards-web.widget",
      "targets": [
        "ms.vss-dashboards-web.widget-catalog"
      ],
      "restrictedTo": [
        "member",
        "public",
        "anonymous"
      ],
      "properties": {
          ...
      }
    }
  ]
}
```

### Widget settings

While controlling visibility of the widget to non-member users, the dashboard framework also provides an optional, open-form storage mechanism for widget settings. Two mechanisms are available for indicate whether widget settings are available for use by non-member users in public projects. 

A widget with configurable settings that is visible to non-member users **must** follow one of the following patterns. Not doing so blocks the widget from surfacing to these users.

### Pattern 1: widget declares its instances only store project-specific settings

Set the widget contribution's `canStoreCrossProjectSettings` property to `false`, indicating the widget settings are project-specific.

```json
{
    "id:": "HelloWorldWidget",
    "type": "ms.vss-dashboards-web.widget",
    ...
    "properties": {
        "canStoreCrossProjectSettings": false
    }
}
```

### Pattern 2: a widget instance declares its settings are project-specific

Individual widget instances can also indicate that its settings are project-specific and available to non-member users. When saving the settings, the widget should set the `hasCrossProjectSettings` to `false` in the stringified JSON string:

```json
{
    "hasCrossProjectSettings": false,
    "hypotheticalWidgetOption": true,
    "backlogLevel": "Stories"
}
```

## Build and release considerations

If your extension contributes a build or release task, no change is required to use that task from a pipeline in a public project.

## Work item tracking considerations

Extensions don't work for non-member users in the context of a public project without changes. This includes the work item form, other work item experiences, or interaction with work item tracking REST APIs.

### Work item form

All work item updates or deletes fail for non-member users.

### Identities

In Azure DevOps Services REST API version 5.0 and later, identities are returned as `IdentityRef` objects instead of strings. As described previously, certain fields, like `uniqueName` aren't returned in these objects if the API call was made by a non-member user.

### APIs

Only project-scoped REST APIs can be invoked by an extension when the current user isn't an organization member. Any REST API calls not scoped to a project are rejected.

### Queries

There are the following limitations for non-member users related to work item queries:

* non-member users can run known queries by ID or path
* Queries must be scoped to the current project. Any work items not belonging to the current project are excluded
* non-member user can't create new queries or execute WIQL queries
