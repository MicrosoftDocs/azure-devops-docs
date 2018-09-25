---
ms.prod: devops
ms.technology: devops-ecosystem
monikerRange: '>= tfs-2013 < vsts'
title: Work Item Recycle Bin | REST API Reference for Team Foundation Server
description: Work with deleted work items programmatically using the REST APIs for Team Foundation Server. 
ms.assetid: A4633743-4644-421E-9B4F-3C906F9D4D42
ms.manager: douge
ms.topic: article
ms.author: elbatk
author: elbatk
ms.date: 08/04/2016
---

# Recycle bin
[!INCLUDE [API_version](../_data/version3-preview.md)]

The recycle bin contains all work items that have been deleted.  They can be restored or permanently destroyed.

[!INCLUDE [GET_STARTED](../_data/get-started.md)]

## Get list of ids for all deleted items in the recycle bin
<a name="getalistofdeleteditemsintherecyclebin" />

```no-highlight
GET https://{instance}/DefaultCollection/{project}_apis/wit/recycleBin?api-version={version}
```

| Parameter | Type    | Notes
|:----------|:--------|:------------------------------
| URL
| instance  | string  | TFS server name ({server:port}).
| project   | string  | Project of the deleted work items
| Query
| api-version | string  | [Version](../../concepts/rest-api-versioning.md) of the API to use.

[!code-REST [GET__wit_recycleBin_json](./_data/recyclebin/GET__wit_recyclebin.json)]

#### Sample code

* [C# (GetDeleteWorkItems method)](https://github.com/Microsoft/vsts-dotnet-samples/blob/master/ClientLibrary/Snippets/Microsoft.TeamServices.Samples.Client/WorkItemTracking/RecycleBinSample.cs#L15)

##	Get a deleted item in the recycle bin

```no-highlight
GET https://{instance}/DefaultCollection/{project}/_apis/wit/recyclebin/{id}?api-version={version}
```

| Parameter | Type    | Notes
|:----------|:--------|:------------------------------
| URL
| instance  | string  | TFS server name ({server:port}).
| project   | string  | Project of the deleted work items
| id        | int     | ID of the deleted item
| Query
| api-version | string  | [Version](../../concepts/rest-api-versioning.md) of the API to use.

[!code-REST [GET__wit_recycleBin__id__json](./_data/recyclebin/GET__wit_recyclebin__id_.json)]

#### Sample code

* [C# (GetDeleteWorkItem method)](https://github.com/Microsoft/vsts-dotnet-samples/blob/master/ClientLibrary/Snippets/Microsoft.TeamServices.Samples.Client/WorkItemTracking/RecycleBinSample.cs#L28)

##	Get multiple deleted items in the recycle bin

```no-highlight
GET https://{instance}/DefaultCollection/{project}/_apis/wit/recyclebin?ids={ids}&api-version={version}
```

| Parameter | Type    | Notes
|:----------|:--------|:------------------------------
| URL
| instance  | string  | TFS server name ({server:port}).
| project   | string  | Project of the deleted work items
| ids       | string  | A comma-separated list of up to 200 IDs of the deleted work items to get.
| Query
| api-version | string  | [Version](../../concepts/rest-api-versioning.md) of the API to use.

[!code-REST [GET__wit_recycleBin__ids__json](./_data/recyclebin/GET__wit_recyclebin__ids_.json)]


#### Sample code

* [C# (GetMultipleDeletedWorkItems method)](https://github.com/Microsoft/vsts-dotnet-samples/blob/master/ClientLibrary/Snippets/Microsoft.TeamServices.Samples.Client/WorkItemTracking/RecycleBinSample.cs#L41)

## Restore a work item
<a name="restoreaworkitem" />

```no-highlight
PATCH https://{instance}/DefaultCollection/_apis/wit/recyclebin/{id}?api-version={version}
```

| Parameter | Type    | Notes
|:----------|:--------|:------------------------------
| URL
| instance  | string  | TFS server name ({server:port}).
| id        | int     | ID of the deleted item
| Query
| api-version | string  | [Version](../../concepts/rest-api-versioning.md) of the API to use.
| Body
| IsDeleted | boolean | Value of the IsDeleted field (should be set to false for restoring work items.

[!code-REST [PATCH__wit_recyclebin_restore_json](./_data/recyclebin/PATCH__wit_recyclebin_restore.json)]

#### Sample code

* [C# (RestoreWorkItem method)](https://github.com/Microsoft/vsts-dotnet-samples/blob/master/ClientLibrary/Snippets/Microsoft.TeamServices.Samples.Client/WorkItemTracking/RecycleBinSample.cs#L53)

## Restore multiple work items

The [batch apis](batch.md) can be leveraged to restore multiple work items at once.

```no-highlight
POST https://{instance}/DefaultCollection/_apis/wit/$batch
```

[!code-REST [POST__wit_recyclebin_ids_restore_json](./_data/recyclebin/POST__wit_recyclebin_ids_restore.json)]

#### Sample code

* [C# (RestoreMultipleWorkItems method)](https://github.com/Microsoft/vsts-dotnet-samples/blob/master/ClientLibrary/Snippets/Microsoft.TeamServices.Samples.Client/WorkItemTracking/RecycleBinSample.cs#L70)

## Permanently delete a work item

```no-highlight
DELETE https://{instance}/DefaultCollection/{project}/_apis/wit/recycleBin/{id}?api-version={version}
```

| Parameter | Type    | Notes	
|:----------|:--------|:------------------------------
| URL
| instance  | string  | TFS server name ({server:port}).
| project   | string  | Project of the deleted work items
| id        | int     | ID of the deleted item
| Query
| api-version | string  | [Version](../../concepts/rest-api-versioning.md) of the API to use.

[!code-REST [DELETE__wit_recycleBin__id__json](./_data/recyclebin/DELETE__wit_recyclebin__id_.json)]

#### Sample code

* [C# (PermenentlyDeleteWorkItem method)](https://github.com/Microsoft/vsts-dotnet-samples/blob/master/ClientLibrary/Snippets/Microsoft.TeamServices.Samples.Client/WorkItemTracking/RecycleBinSample.cs#L90)

## Permanently delete multiple work items

The [batch apis](batch.md) can be leveraged to restore multiple work items at once.

```no-highlight
POST https://{instance}/DefaultCollection/_apis/wit/$batch
```

[!code-REST [POST__wit_recyclebin_ids-_ids_json](./_data/recyclebin/POST__wit_recyclebin_ids-_ids_.json)]

#### Sample code

* [C# (PermenentlyDeleteMultipleWorkItems method)](https://github.com/Microsoft/vsts-dotnet-samples/blob/master/ClientLibrary/Snippets/Microsoft.TeamServices.Samples.Client/WorkItemTracking/RecycleBinSample.cs#L101)
