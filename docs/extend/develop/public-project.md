---
title: Develop extensions for public projects
titleSuffix: Azure DevOps Services
description: Learn how to develop Azure DevOps Services extensions that support non-member and public users in public projects.
ms.subservice: azure-devops-ecosystem
ms.assetid: 3fa22433-150b-428c-8e10-3ffb4d832c20
ms.topic: how-to
monikerRange: 'azure-devops'
ms.author: chcomley
author: chcomley
ai-usage: ai-assisted
ms.date: 11/10/2025
---

# Develop extensions for public projects

[!INCLUDE [version-eq-azure-devops](../../includes/version-eq-azure-devops.md)]

Azure DevOps Services supports both private and public projects. Private projects restrict access to authenticated users with explicit permissions. Public projects allow non-member users to view project contents in a read-only state.

A non-member user can be either:
- **Anonymous**: Not authenticated to Azure DevOps Services
- **Public**: Authenticated to Azure DevOps Services but not a member of the organization

Non-member users see the same views as authenticated users, but Azure DevOps hides or disables non-public functionality such as settings, actions, and build queue operations.

[!INCLUDE [allow-public-project-policy](../../organizations/projects/includes/allow-public-project-policy.md)]

## Decide whether to make an extension visible to non-member users

As an extension developer, you can make all or part of your extension available to non-member users. These users can only use your extension from within public projects. If you choose not to make your extension available to non-member users, you need no changes and the decision has no impact on members who use your extension within public projects.

Use this checklist to help decide if you should make your extension available to non-member users:

> [!div class="checklist"]
> * Your extension presents data that is relevant to non-member users
> * Your extension contributes capabilities at the project level
> * Your extension contributes to product areas that non-member users can access
> * Your extension doesn't extend or rely on features that non-member users cannot access, such as the Extension Data Service or certain Azure DevOps Services REST APIs. For more information, see the [Limitations](#limitations) section.

## Configure contribution visibility

By default, Azure DevOps shows contributions only to organization members. To give non-member users visibility to a contribution, set the `restrictedTo` attribute on that contribution. The value is a string array that lists which user types should see the contribution. The possible values include:

* `member`: An authenticated user who is a member of the organization
* `public`: An authenticated user who is **not** a member of the organization
* `anonymous`: An unauthenticated user

### Make a hub visible to anonymous, public, and member users

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

You can also set the default visibility for all contributions in your extension by setting the `restrictedTo` attribute at the root of your extension manifest. You can then override this default on individual contributions.

### Make every contribution, except for one, visible to all users

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

## Understand limitations for non-member users

If you want to make some or all aspects of your contribution available to public users, consider the following limitations.

### VSS SDK method restrictions

The core SDK script, VSS.SDK.js, enables web extensions to communicate with the parent frame to perform operations like initializing communication and getting current user context information. The following VSS SDK methods do not support non-member users:

* `VSS.getAccessToken()`
* `VSS.getAppToken()`

### Extension data service limitations

Because the [extension data service](./data-storage.md) manages data that isn't scoped or secured to a project, non-member users cannot read or write any type of extension data.

#### Handle data access errors

When the data service cannot access data due to permission limitations by the calling user, the promise returned from the call to `getValue` gets rejected. The error passed to the reject function has a name property, which helps you understand why the call failed to read or write data.

```javascript
VSS.getService(VSS.ServiceIds.ExtensionData).then(function(dataService) {
    dataService.getValue("someKey").then(function(value) {
         // Process the value
    }, function(error) {
       if (error.name === "AccessCheckException") {
           alert(error.message);
       }
    });
});
```

### REST API access

Azure DevOps Services provides a limited set of REST APIs to non-member users. These APIs include most organization-level and project-level APIs for features that non-member users can generally access. Consider this information when you decide whether to make your extension available to non-member users.

We recommend that you use version 5.0 and later APIs, as Azure DevOps makes certain APIs available to non-member users only starting with version 5.0.

#### Identity references

Most Azure DevOps Services REST APIs use a common "contract" to represent a user or group. To protect member information, like email addresses, Azure DevOps omits certain fields, like `uniqueName`, when an anonymous or public user invokes a REST API.

## Check user permissions

Use permissions to decide whether to surface or enable a capability in your extension. Use the Security REST API from web extension code to check whether the current user has permission in Azure DevOps Services to complete the task. This approach prevents users from thinking they have permission to do something, only to discover that they don't.

#### Check whether the user has permission to queue builds

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

## Consider dashboard widget requirements

Just like other types of contributions, the `restrictedTo` contribution property controls the visibility of dashboard widget contributions. For example, to make a widget visible to both non-member and member users:

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

### Configure widget settings

When you control widget visibility to non-member users, the dashboard framework also provides an optional, open-form storage mechanism for widget settings. Two mechanisms indicate whether widget settings are available for non-member users in public projects.

A widget with configurable settings that is visible to non-member users **must** follow one of the following patterns. Not following these patterns blocks the widget from appearing to these users.

### Pattern 1: Widget declares its instances only store project-specific settings

Set the widget contribution's `canStoreCrossProjectSettings` property to `false`, indicating that the widget settings are project-specific.

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

### Pattern 2: A widget instance declares its settings are project-specific

Individual widget instances can also indicate that their settings are project-specific and available to non-member users. When saving the settings, the widget should set `hasCrossProjectSettings` to `false` in the stringified JSON string:

```json
{
    "hasCrossProjectSettings": false,
    "hypotheticalWidgetOption": true,
    "backlogLevel": "Stories"
}
```

## Consider build and release requirements

If your extension contributes a build or release task, you need no changes to use that task from a pipeline in a public project.

## Handle work item tracking considerations

Extensions don't work for non-member users in the context of a public project without changes. This includes the work item form, other work item experiences, and interaction with work item tracking REST APIs.

### Work item form limitations

Azure DevOps fails all work item updates or deletes for non-member users.

### Identity handling

In Azure DevOps Services REST API version 5.0 and later, the service returns identities as `IdentityRef` objects instead of strings. As described previously, Azure DevOps doesn't return certain fields, like `uniqueName`, in these objects if a non-member user makes the API call.

### API scope restrictions

Extensions can invoke only project-scoped REST APIs when the current user isn't an organization member. Azure DevOps rejects any REST API calls not scoped to a project.

### Query limitations

Non-member users face the following limitations related to work item queries:

* Non-member users can run known queries by ID or path only
* Queries must be scoped to the current project. Azure DevOps excludes any work items that don't belong to the current project
* Non-member users cannot create new queries or execute WIQL queries

## Related content

- [Extension data storage](./data-storage.md)
- [Azure DevOps Services REST API reference](/rest/api/azure/devops/)
- [Public projects overview](../../organizations/projects/about-projects.md)
- [Extension manifest reference](../develop/manifest.md)
