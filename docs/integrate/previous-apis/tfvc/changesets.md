---
ms.prod: devops
ms.technology: devops-ecosystem
monikerRange: '>= tfs-2013 < vsts'
title: TFVC Changesets | REST API Reference for Team Foundation Server
description: Work with TFVC changesets programmatically using the REST APIs for Team Foundation Server.
ms.assetid: 27A32DF1-E6D8-47E1-93FB-7FB812F2B47D
ms.manager: douge
ms.topic: article
ms.author: elbatk
author: elbatk
ms.date: 08/04/2016
---

# Changesets
[!INCLUDE [API_version](../_data/version.md)]

[!INCLUDE [GET_STARTED](../_data/get-started.md)]

## Get list of changesets

```no-highlight
GET https://{instance}/DefaultCollection/_apis/tfvc/changesets?api-version={version}
```

| Parameter                    | Type                    | Default | Notes
|:-----------------------------|:------------------------|:--------|:------------
| URL
| instance                     | string                  |         | TFS server name ({server:port}).
| Query
| api-version                  | string                  |         | [Version](../../concepts/rest-api-versioning.md) of the API to use.
| searchCriteria.itemPath      | string                  | $/      | Changesets for the item at this path.
| searchCriteria.version       | string                  |         | Changesets at this [version](./items.md#getaspecificversion) of the item.
| searchCriteria.versionType   | string                  | branch  | If the version is specified, the [type of version](./items.md#getaspecificversion) that is used.
| searchCriteria.versionOption | string                  |         | If the version is specified, an [optional modifier for the version](./items.md#getaspecificversion).
| searchCriteria.author        | string                  |         | Person who checked in the changeset.<br/>Example: `searchCriteria.author=johnsmith@live.com`.
| searchCriteria.fromId        | int                     |         | ID of the oldest changeset to return.
| searchCriteria.toId          | int                     |         | ID of the newest changeset to return.
| searchCriteria.fromDate      | [DateTime](http://msdn.microsoft.com/en-us/library/az4se3k1.aspx) |         | Date and time of the earliest changeset to return.
| searchCriteria.toDate        | [DateTime](http://msdn.microsoft.com/en-us/library/az4se3k1.aspx) |         | Date and time of the latest changesets to return.
| $top                         | int                     | 100     | The maximum number of results to return.
| $skip                        | int                     | 0       | Number of results to skip.
| $orderby                     | "id asc" or "id desc"   | id desc | Results are sorted by ID in descending order by default. Use `id asc` to sort by ID in ascending order.
| maxCommentLength             | int                     | full comment | Return up to this many characters of the comment.

[!code-REST [GET__tfvc_changesets_json](./_data/changesets/GET__tfvc_changesets.json)]

### By item path

Get the changesets that contain changes to the specified item.

[!code-REST [GET__tfvc_changesets_searchCriteria.itemPath-_path__json](./_data/changesets/GET__tfvc_changesets_searchCriteria.itemPath-_path_.json)]

### By person

[!code-REST [GET__tfvc_changesets_searchcriteria.author-_author__json](./_data/changesets/GET__tfvc_changesets_searchcriteria.author-_author_.json)]

### In a range of IDs

Get the changesets in a range of changeset IDs.

[!code-REST [GET__tfvc_changesets_fromId-_from__toId-_to__json](./_data/changesets/GET__tfvc_changesets_fromId-_from__toId-_to_.json)]

### In a date range
<a name="inadaterange" />

[!code-REST [GET__tfvc_changesets_fromDate-_fromDate__toDate-_toDate__json](./_data/changesets/GET__tfvc_changesets_fromDate-_fromDate__toDate-_toDate_.json)]

### A page at a time
<a name="apageatatime" />

[!code-REST [GET__tfvc_changesets__top-_top___skip-_skip__json](./_data/changesets/GET__tfvc_changesets__top-_top___skip-_skip_.json)]

### Sorted

[!code-REST [GET__tfvc_changesets__orderBy-_order__json](./_data/changesets/GET__tfvc_changesets__orderBy-_order_.json)]

### With more or less of each comment

By default, 80 characters of each comments in the changset are returned.

[!code-REST [GET__tfvc_changesets_maxCommentLength-_commentLength__json](./_data/changesets/GET__tfvc_changesets_maxCommentLength-_commentLength_.json)]

### By a list of IDs
Retrieves representations for all items given a list of paths.
 
| Parameter        | Type   | Default | Notes
|:-----------------|:-------|:--------|------------
| URL
| instance         | string |         | TFS server name ({server:port}).
| Query
| api-version      | string |         | [Version](../../concepts/rest-api-versioning.md) of the API to use.
| Body
| changesetIds     | array  |         | List of changeset IDs.
| maxCommentLength | int    | 80      | Return up to this many characters of the comment.<br/>When not specified, the full comment is returned.

[!code-REST [POST__tfvc_changesetsBatch_json](./_data/changesets/POST__tfvc_changesetsBatch.json)]

## Get a changeset

```no-highlight
GET https://{instance}/DefaultCollection/_apis/tfvc/changesets/{id}?api-version={version}[&includeDetails={Boolean}&includeWorkItems={Boolean}&includeSourceRenames={Boolean}&maxChangeCount={int}&maxCommentLength={int}]
```

| Parameter            | Type   | Default | Notes
|:---------------------|:-------|:--------|:---------------------------
| URL
| instance             | string |         | TFS server name ({server:port}).
| id                   | int    |         | ID of the changeset.
| Query
| api-version          | string |         | [Version](../../concepts/rest-api-versioning.md) of the API to use.
| includeDetails       | bool   | false   | Include policy details and check-in notes in the response.
| includeWorkItems     | bool   | false   | Include details about associated work items in the response.
| maxChangeCount       | int    | 0       | Number of changes to return (maximum 100 changes)
| maxCommentLength     | int    | 2000    | Maximum number of characters of the comment to return.

[!code-REST [GET__tfvc_changesets__id__json](./_data/changesets/GET__tfvc_changesets__id_.json)]

### With policy details and check-in notes
<a name="withpolicydetailsandcheck-innotes" />


[!code-REST [GET__tfvc_changesets__id__includeDetails-true_json](./_data/changesets/GET__tfvc_changesets__id__includeDetails-true.json)]

### With work items
<a name="withworkitems" />

[!code-REST [GET__tfvc_changesets__id__includeWorkItems-true_json](./_data/changesets/GET__tfvc_changesets__id__includeWorkItems-true.json)]

### With changes
<a name="withallchanges" />

[!code-REST [GET__tfvc_changesets__id__maxChangeCount_json](./_data/changesets/GET__tfvc_changesets__id__maxChangeCount.json)]

## Get list of changes in a changeset

```no-highlight
GET https://{instance}/DefaultColletion/_apis/tfvc/changesets/{id}/changes?api-version={version}[&$skip={int}&$top={int}]
```

| Parameter | Type   | Default | Notes
|:----------|:-------|:--------|----------------------------------------
| URL
| instance  | string |         | TFS server name ({server:port}).
| id        | int    |         | ID of the changeset.
| Query
| Query
| api-version | string |       | [Version](../../concepts/rest-api-versioning.md) of the API to use.
| $top      | int    | 100     | Maximum number of changes to return.
| $skip     | int    | 0       | Number of changes to skip.

If there are more changes than the specified top value, the json contains an additional boolean field "hasMoreChanges"

[!code-REST [GET__tfvc_changesets__id__changes_json](./_data/changesets/GET__tfvc_changesets__id__changes.json)]

## Get list of associated work items
Retrieves the work items associated with a particular changeset

```no-highlight
GET /tfvc/changesets/{id}/workitems?api-version={version}
```
| Parameter | Type   | Default | Notes
|:----------|:-------|:--------|----------------------------------------
| URL
| instance  | string |         | TFS server name ({server:port}).
| id        | int    |         | ID of the changeset.
| Query
| Query
| api-version | string |       | [Version](../../concepts/rest-api-versioning.md) of the API to use.
| $top      | int    | 100     | Maximum number of work items to return.
| $skip     | int    | 0       | Number of work items to skip.

[!code-REST [GET__tfvc_changesets__id__workitems_json](./_data/changesets/GET__tfvc_changesets__id__workitems.json)]

