---
ms.prod: devops
ms.technology: devops-ecosystem
monikerRange: '>= tfs-2015 < azure-devops'
title: Work Item Tags | REST API Reference for Team Foundation Server
description: Work with work item tags programmatically using the REST APIs for Team Foundation Server. 
ms.assetid: DDD158EB-BCCB-48AE-8C2F-5409D2326E48
ms.manager: jillfra
ms.topic: article
ms.author: elbatk
author: elbatk
ms.date: 08/04/2016
---

# Work item tags

[!INCLUDE [azure-devops](../_data/azure-devops-message.md)]

[!INCLUDE [API_version](../_data/version.md)]

[!INCLUDE [GET_STARTED](../_data/get-started.md)]

## Get a list of tags

```no-highlight
GET https://{instance}/DefaultCollection/_apis/tagging/scopes/{scope}/tags?api-version={version}[&includeInactive={bool}]
```

| Parameter       | Type    | Default | Notes
|:----------------|:--------|:-------|:------------
| URL
| instance        | string  |         | TFS server name ({server:port}).
| scope           | GUID    |         | ID of the enclosing scope.<br/>Typically, this is the ID if the project. You can define your own scope GUIDs, but tags using this scope would not appear in the work item tracking user interface.
| Query
| api-version     | string  |         | [Version](../../concepts/rest-api-versioning.md) of the API to use.
| includeInactive | bool    | false   | If true, inactive tags are returned.<br/>Inactive tags are typically retained for work item history and would not normally be shown to the user.

#### Sample request

```
GET https://mytfsserver/DefaultCollection/_apis/tagging/scopes/6ce954b1-ce1f-45d1-b94d-e6bf2464ba2c/tags?api-version=1.0
```

#### Sample response

```json
{
  "count": 9,
  "value": [
    {
      "id": "d3b448f5-01ea-4e04-a779-923160a05111",
      "name": "Billing",
      "active": true,
      "url": "https://mytfsserver/DefaultCollection/_apis/Tagging/scopes/6ce954b1-ce1f-45d1-b94d-e6bf2464ba2c/tags/d3b448f5-01ea-4e04-a779-923160a05111"
    },
    {
      "id": "e4b2b4cc-c728-42fa-92d7-1e8187dcdaf1",
      "name": "Customer",
      "active": true,
      "url": "https://mytfsserver/DefaultCollection/_apis/Tagging/scopes/6ce954b1-ce1f-45d1-b94d-e6bf2464ba2c/tags/e4b2b4cc-c728-42fa-92d7-1e8187dcdaf1"
    },
    {
      "id": "afb5078a-b81a-4f5d-a7a0-38de6a055200",
      "name": "Customer Service",
      "active": true,
      "url": "https://mytfsserver/DefaultCollection/_apis/Tagging/scopes/6ce954b1-ce1f-45d1-b94d-e6bf2464ba2c/tags/afb5078a-b81a-4f5d-a7a0-38de6a055200"
    },
    {
      "id": "9dfc2f21-b2aa-4e11-a36a-f3761e9861cb",
      "name": "My Tag",
      "active": true,
      "url": "https://mytfsserver/DefaultCollection/_apis/Tagging/scopes/6ce954b1-ce1f-45d1-b94d-e6bf2464ba2c/tags/9dfc2f21-b2aa-4e11-a36a-f3761e9861cb"
    },
    {
      "id": "7339639a-089f-4592-b352-993f0648c877",
      "name": "Tag1",
      "active": true,
      "url": "https://mytfsserver/DefaultCollection/_apis/Tagging/scopes/6ce954b1-ce1f-45d1-b94d-e6bf2464ba2c/tags/7339639a-089f-4592-b352-993f0648c877"
    },
    {
      "id": "05d4d487-054e-498e-8d6f-9132ed72c295",
      "name": "Tag2",
      "active": true,
      "url": "https://mytfsserver/DefaultCollection/_apis/Tagging/scopes/6ce954b1-ce1f-45d1-b94d-e6bf2464ba2c/tags/05d4d487-054e-498e-8d6f-9132ed72c295"
    },
    {
      "id": "d894c59f-9d24-4cce-9242-515f210eb681",
      "name": "Technician",
      "active": true,
      "url": "https://mytfsserver/DefaultCollection/_apis/Tagging/scopes/6ce954b1-ce1f-45d1-b94d-e6bf2464ba2c/tags/d894c59f-9d24-4cce-9242-515f210eb681"
    },
    {
      "id": "ec448db2-46bc-49a1-a806-54798dde05b3",
      "name": "UX review needed",
      "active": true,
      "url": "https://mytfsserver/DefaultCollection/_apis/Tagging/scopes/6ce954b1-ce1f-45d1-b94d-e6bf2464ba2c/tags/ec448db2-46bc-49a1-a806-54798dde05b3"
    },
    {
      "id": "8b3d3191-bc8f-46b4-ad68-35dd14d1f494",
      "name": "zendesk",
      "active": true,
      "url": "https://mytfsserver/DefaultCollection/_apis/Tagging/scopes/6ce954b1-ce1f-45d1-b94d-e6bf2464ba2c/tags/8b3d3191-bc8f-46b4-ad68-35dd14d1f494"
    }
  ]
}
```


#### Sample code

* [C# (GetListOfTags method)](https://github.com/Microsoft/vsts-dotnet-samples/blob/master/ClientLibrary/Snippets/Microsoft.TeamServices.Samples.Client/WorkItemTracking/TagsSample.cs#L21)

### Including inactive tags

#### Sample request

```
GET https://mytfsserver/DefaultCollection/_apis/tagging/scopes/6ce954b1-ce1f-45d1-b94d-e6bf2464ba2c/tags?includeInactive=true&api-version=1.0
```

#### Sample response

```json
{
  "count": 12,
  "value": [
    {
      "id": "d3b448f5-01ea-4e04-a779-923160a05111",
      "name": "Billing",
      "active": true,
      "url": "https://mytfsserver/DefaultCollection/_apis/Tagging/scopes/6ce954b1-ce1f-45d1-b94d-e6bf2464ba2c/tags/d3b448f5-01ea-4e04-a779-923160a05111"
    },
    {
      "id": "e4b2b4cc-c728-42fa-92d7-1e8187dcdaf1",
      "name": "Customer",
      "active": true,
      "url": "https://mytfsserver/DefaultCollection/_apis/Tagging/scopes/6ce954b1-ce1f-45d1-b94d-e6bf2464ba2c/tags/e4b2b4cc-c728-42fa-92d7-1e8187dcdaf1"
    },
    {
      "id": "afb5078a-b81a-4f5d-a7a0-38de6a055200",
      "name": "Customer Service",
      "active": true,
      "url": "https://mytfsserver/DefaultCollection/_apis/Tagging/scopes/6ce954b1-ce1f-45d1-b94d-e6bf2464ba2c/tags/afb5078a-b81a-4f5d-a7a0-38de6a055200"
    },
    {
      "id": "9dfc2f21-b2aa-4e11-a36a-f3761e9861cb",
      "name": "My Tag",
      "active": true,
      "url": "https://mytfsserver/DefaultCollection/_apis/Tagging/scopes/6ce954b1-ce1f-45d1-b94d-e6bf2464ba2c/tags/9dfc2f21-b2aa-4e11-a36a-f3761e9861cb"
    },
    {
      "id": "082d7579-65ae-4401-8768-f11caf29653b",
      "name": "New tag",
      "active": false,
      "url": "https://mytfsserver/DefaultCollection/_apis/Tagging/scopes/6ce954b1-ce1f-45d1-b94d-e6bf2464ba2c/tags/082d7579-65ae-4401-8768-f11caf29653b"
    },
    {
      "id": "4cc38671-cbaa-47e3-b5a4-8b6c36edfca8",
      "name": "Tag now inactive",
      "active": false,
      "url": "https://mytfsserver/DefaultCollection/_apis/Tagging/scopes/6ce954b1-ce1f-45d1-b94d-e6bf2464ba2c/tags/4cc38671-cbaa-47e3-b5a4-8b6c36edfca8"
    },
    {
      "id": "7339639a-089f-4592-b352-993f0648c877",
      "name": "Tag1",
      "active": true,
      "url": "https://mytfsserver/DefaultCollection/_apis/Tagging/scopes/6ce954b1-ce1f-45d1-b94d-e6bf2464ba2c/tags/7339639a-089f-4592-b352-993f0648c877"
    },
    {
      "id": "05d4d487-054e-498e-8d6f-9132ed72c295",
      "name": "Tag2",
      "active": true,
      "url": "https://mytfsserver/DefaultCollection/_apis/Tagging/scopes/6ce954b1-ce1f-45d1-b94d-e6bf2464ba2c/tags/05d4d487-054e-498e-8d6f-9132ed72c295"
    },
    {
      "id": "d894c59f-9d24-4cce-9242-515f210eb681",
      "name": "Technician",
      "active": true,
      "url": "https://mytfsserver/DefaultCollection/_apis/Tagging/scopes/6ce954b1-ce1f-45d1-b94d-e6bf2464ba2c/tags/d894c59f-9d24-4cce-9242-515f210eb681"
    },
    {
      "id": "3ebd34d1-1796-4f46-8aa4-f430c612ae7f",
      "name": "Urgent",
      "active": false,
      "url": "https://mytfsserver/DefaultCollection/_apis/Tagging/scopes/6ce954b1-ce1f-45d1-b94d-e6bf2464ba2c/tags/3ebd34d1-1796-4f46-8aa4-f430c612ae7f"
    },
    {
      "id": "ec448db2-46bc-49a1-a806-54798dde05b3",
      "name": "UX review needed",
      "active": true,
      "url": "https://mytfsserver/DefaultCollection/_apis/Tagging/scopes/6ce954b1-ce1f-45d1-b94d-e6bf2464ba2c/tags/ec448db2-46bc-49a1-a806-54798dde05b3"
    },
    {
      "id": "8b3d3191-bc8f-46b4-ad68-35dd14d1f494",
      "name": "zendesk",
      "active": true,
      "url": "https://mytfsserver/DefaultCollection/_apis/Tagging/scopes/6ce954b1-ce1f-45d1-b94d-e6bf2464ba2c/tags/8b3d3191-bc8f-46b4-ad68-35dd14d1f494"
    }
  ]
}
```


#### Sample code

* [C# (GetListOfTagsIncludeInactive method)](https://github.com/Microsoft/vsts-dotnet-samples/blob/master/ClientLibrary/Snippets/Microsoft.TeamServices.Samples.Client/WorkItemTracking/TagsSample.cs#L41)

## Get a tag

```no-highlight
GET https://{instance}/DefaultCollection/_apis/tagging/scopes/{scope}/tags/{tag}?api-version={version}
```

| Parameter       | Type    | Notes
|:----------------|:--------|:------------
| URL
| instance        | string  | TFS server name ({server:port}).
| scope           | GUID    | ID of the enclosing scope.<br/>Typically, this is the ID if the project. You can define your own scope GUIDs, but tags using this scope would not appear in the work item tracking user interface.
| tag             | string  | ID or name of the tag.<br/>Use ID for durable links to the tag because the name can change.
| Query
| api-version     | string  | [Version](../../concepts/rest-api-versioning.md) of the API to use.

### By name
<a name="byname" />

#### Sample request

```
GET https://mytfsserver/DefaultCollection/_apis/tagging/scopes/6ce954b1-ce1f-45d1-b94d-e6bf2464ba2c/tags/My%20Tag?api-version=1.0
```

#### Sample response

```json
{
  "id": "9dfc2f21-b2aa-4e11-a36a-f3761e9861cb",
  "name": "My Tag",
  "active": true,
  "url": "https://mytfsserver/DefaultCollection/_apis/Tagging/scopes/6ce954b1-ce1f-45d1-b94d-e6bf2464ba2c/tags/9dfc2f21-b2aa-4e11-a36a-f3761e9861cb"
}
```


#### Sample code

* [C# (GetTagByName method)](https://github.com/Microsoft/vsts-dotnet-samples/blob/master/ClientLibrary/Snippets/Microsoft.TeamServices.Samples.Client/WorkItemTracking/TagsSample.cs#L62)

### By ID

#### Sample request

```
GET https://mytfsserver/DefaultCollection/_apis/tagging/scopes/6ce954b1-ce1f-45d1-b94d-e6bf2464ba2c/tags/9dfc2f21-b2aa-4e11-a36a-f3761e9861cb?api-version=1.0
```

#### Sample response

```json
{
  "id": "9dfc2f21-b2aa-4e11-a36a-f3761e9861cb",
  "name": "My Tag",
  "active": true,
  "url": "https://mytfsserver/DefaultCollection/_apis/Tagging/scopes/6ce954b1-ce1f-45d1-b94d-e6bf2464ba2c/tags/9dfc2f21-b2aa-4e11-a36a-f3761e9861cb"
}
```


#### Sample code

* [C# (GetTagById method)](https://github.com/Microsoft/vsts-dotnet-samples/blob/master/ClientLibrary/Snippets/Microsoft.TeamServices.Samples.Client/WorkItemTracking/TagsSample.cs#L87)

## Create a tag
<a name="createatag" />

```no-highlight
POST https://{instance}/DefaultCollection/_apis/tagging/scopes/{scope}/tags?api-version={version}
```
```http
Content-type: Application/json
```
```json
{
  "name": { string }
}
```

| Parameter       | Type    | Notes
|:----------------|:--------|:------------
| URL
| instance        | string  | TFS server name ({server:port}).
| scope           | GUID    | ID of the enclosing scope.<br/>Typically, this is the ID if the project. You can define your own scope GUIDs, but tags using this scope would not appear in the work item tracking user interface.<br/>If the scope does not exist, a new scope will be created and used.<br/>To verify that the scope ID represents a project, check for the existence of the [project](../tfs/projects.md#getateamproject) by that ID.
| Query
| api-version     | string  | [Version](../../concepts/rest-api-versioning.md) of the API to use.
| Request body
| name            | string  | Name of the tag.<br/>If a tag by that name already exists, no tag is created. Instead, the response body includes the existing tag with that name.

#### Sample request

```
POST https://mytfsserver/DefaultCollection/_apis/tagging/scopes/6ce954b1-ce1f-45d1-b94d-e6bf2464ba2c/tags?api-version=1.0
```
```json
{
  "name": "My Tag"
}
```

#### Sample response

```json
{
  "id": "9dfc2f21-b2aa-4e11-a36a-f3761e9861cb",
  "name": "My Tag",
  "active": true,
  "url": "https://mytfsserver/DefaultCollection/_apis/Tagging/scopes/6ce954b1-ce1f-45d1-b94d-e6bf2464ba2c/tags/9dfc2f21-b2aa-4e11-a36a-f3761e9861cb"
}
```


#### Sample code

* [C# (CreateTag method)](https://github.com/Microsoft/vsts-dotnet-samples/blob/master/ClientLibrary/Snippets/Microsoft.TeamServices.Samples.Client/WorkItemTracking/TagsSample.cs#L112)

## Update a tag

```no-highlight
PATCH https://{instance}/DefaultCollection/_apis/tagging/scopes/{scope}/tags/{tag}?api-version={version}
```
```http
Content-type: Application/json
```
```json
{
  "name": { string },
  "active": { bool }
}
```

| Parameter       | Type    | Notes
|:----------------|:--------|:------------
| URL
| instance        | string  | TFS server name ({server:port}).
| scope           | GUID    | ID of the enclosing scope.<br/>Typically, this is the ID if the project. You can define your own scope GUIDs, but tags using this scope would not appear in the work item tracking user interface.<br/>If the scope does not exist, a new scope will be created and used.<br/>To verify that the scope ID represents a project, check for the existence of the [project](../tfs/projects.md#getateamproject) by that ID.
| tag             | string  | ID or name of the tag to update.
| Query
| api-version     | string  | [Version](../../concepts/rest-api-versioning.md) of the API to use.
| Body
| name            | string  | New name of the tag.<br/>If a tag already exists with this name, in the same scope, the update will fail.<br/>Names are not case-sensitive. You can update the name to change the case (from "case" to "Case", for example).
| active          | bool    | If false, the tag is inactive and is generally not shown to the user. Inactive tags aren't shown in the VSTS pages, for example.

#### Sample request

```
PATCH https://mytfsserver/DefaultCollection/_apis/tagging/scopes/6ce954b1-ce1f-45d1-b94d-e6bf2464ba2c/tags/9dfc2f21-b2aa-4e11-a36a-f3761e9861cb?api-version=1.0
```
```json
{
  "name": "My Tag Renamed",
  "active": false
}
```

#### Sample response

```json
{
  "id": "9dfc2f21-b2aa-4e11-a36a-f3761e9861cb",
  "name": "My Tag Renamed",
  "active": false,
  "url": "https://mytfsserver/DefaultCollection/_apis/Tagging/scopes/6ce954b1-ce1f-45d1-b94d-e6bf2464ba2c/tags/9dfc2f21-b2aa-4e11-a36a-f3761e9861cb"
}
```


#### Sample code

* [C# (UpdateTag method)](https://github.com/Microsoft/vsts-dotnet-samples/blob/master/ClientLibrary/Snippets/Microsoft.TeamServices.Samples.Client/WorkItemTracking/TagsSample.cs#L128)

## Delete a tag
Before you decide to delete a tag, consider that they may be associated with historical revisions of work items or other resources.
It is preferable to mark tags as inactive unless you know the tag is not associated with any other resources.

```no-highlight
PATCH https://{instance}/DefaultCollection/_apis/tagging/scopes/{scope}/tags/{tag}?api-version={version}
```

| Parameter       | Type    | Notes
|:----------------|:--------|:------------
| URL
| instance        | string  | TFS server name ({server:port}).
| scope           | GUID    | ID of the enclosing scope.<br/>Typically, this is the ID if the project. You can define your own scope GUIDs, but tags using this scope would not appear in the work item tracking user interface.
| tag             | string  | ID or name of the tag to delete.
| Query
| api-version     | string  | [Version](../../concepts/rest-api-versioning.md) of the API to use.

#### Sample request

```
DELETE https://mytfsserver/DefaultCollection/_apis/tagging/scopes/6ce954b1-ce1f-45d1-b94d-e6bf2464ba2c/tags/9dfc2f21-b2aa-4e11-a36a-f3761e9861cb?api-version=1.0
```


#### Sample code

* [C# (DeleteTag method)](https://github.com/Microsoft/vsts-dotnet-samples/blob/master/ClientLibrary/Snippets/Microsoft.TeamServices.Samples.Client/WorkItemTracking/TagsSample.cs#L154)

## Samples

* [Delete all inactive tags (DeleteAllInactiveTags method)](https://github.com/Microsoft/vsts-dotnet-samples/blob/master/ClientLibrary/Snippets/Microsoft.TeamServices.Samples.Client/WorkItemTracking/TagsSample.cs#L168)