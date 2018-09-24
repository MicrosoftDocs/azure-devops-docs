---
ms.prod: devops
ms.technology: devops-ecosystem
monikerRange: '>= tfs-2013 < vsts'
title: Work Item Tags | REST API Reference for Team Foundation Server
description: Work with work item tags programmatically using the REST APIs for Team Foundation Server. 
ms.assetid: DDD158EB-BCCB-48AE-8C2F-5409D2326E48
ms.manager: douge
ms.topic: article
ms.author: elbatk
author: elbatk
ms.date: 08/04/2016
---

# Work item tags
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

[!code-REST [GET__tagging_scopes__scopeId__tags_json](./_data/tags/GET__tagging_scopes__scopeId__tags.json)]

#### Sample code

* [C# (GetListOfTags method)](https://github.com/Microsoft/vsts-dotnet-samples/blob/master/ClientLibrary/Snippets/Microsoft.TeamServices.Samples.Client/WorkItemTracking/TagsSample.cs#L21)

### Including inactive tags

[!code-REST [GET__tagging_scopes__scopeId__tags_includeInactive-true_json](./_data/tags/GET__tagging_scopes__scopeId__tags_includeInactive-true.json)]

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

[!code-REST [GET__tagging_scopes__scopeId__tags__name__json](./_data/tags/GET__tagging_scopes__scopeId__tags__name_.json)]

#### Sample code

* [C# (GetTagByName method)](https://github.com/Microsoft/vsts-dotnet-samples/blob/master/ClientLibrary/Snippets/Microsoft.TeamServices.Samples.Client/WorkItemTracking/TagsSample.cs#L62)

### By ID

[!code-REST [GET__tagging_scopes__scopeId__tags__tagId__json](./_data/tags/GET__tagging_scopes__scopeId__tags__tagId_.json)]

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

[!code-REST [POST__tagging_scopes__scopeId__tags_json](./_data/tags/POST__tagging_scopes__scopeId__tags.json)]

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

[!code-REST [PATCH__tagging_scopes__scopeId__tags__tagId__json](./_data/tags/PATCH__tagging_scopes__scopeId__tags__tagId_.json)]

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

[!code-REST [DELETE__tagging_scopes__scopeId__tags__tagId__json](./_data/tags/DELETE__tagging_scopes__scopeId__tags__tagId_.json)]

#### Sample code

* [C# (DeleteTag method)](https://github.com/Microsoft/vsts-dotnet-samples/blob/master/ClientLibrary/Snippets/Microsoft.TeamServices.Samples.Client/WorkItemTracking/TagsSample.cs#L154)

## Samples

* [Delete all inactive tags (DeleteAllInactiveTags method)](https://github.com/Microsoft/vsts-dotnet-samples/blob/master/ClientLibrary/Snippets/Microsoft.TeamServices.Samples.Client/WorkItemTracking/TagsSample.cs#L168)