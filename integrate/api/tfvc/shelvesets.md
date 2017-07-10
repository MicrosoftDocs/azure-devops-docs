---
ms.prod: vs-devops-alm
ms.technology: vs-devops-integrate
title: TFVC Shelvesets | REST API Reference for Visual Studio Team Services and Team Foundation Server
description: Work with TFVC shelvesets programmatically using the REST APIs for Visual Studio Team Services and Team Foundation Server.
ms.assetid: 01032D9F-ECAA-401A-8ECA-C857073876B9
ms.manager: douge
ms.author: elbatk
ms.date: 08/04/2016
---

# Shelvesets
[!INCLUDE [API_version](../_data/version.md)]

[!INCLUDE [GET_STARTED](../_data/get-started.md)]

## Get list of shelvesets

```no-highlight
GET https://{instance}/DefaultCollection/_apis/tfvc/shelvesets?api-version={version}[&owner={string}&maxContentLength={int}&$top={int}&$skip={int}]
```

| Parameter        | Type   | Default | Notes
|:-----------------|:-------|:--------|---------------------------------
| URL
| instance         | string |         | [VS Team Services account](/integrate/get-started/rest/basics.md#vs-team-services) ({account}.visualstudio.com) or [TFS server](/integrate/get-started/rest/basics.md#tfs) ({server:port}).
| Query
| api-version      | string |         | [Version](../../get-started/rest/basics.md#versions) of the API to use.
| owner            | string |         | Display name, unique name, or ID of person who created the shelveset.
| maxCommentLength | int    | 80      | Return only this many characters of each comment.
| $top             | int    | 100     | Maximum number of shelvesets to return.
| $skip            | int    | 0       | Number of shelvesets to skip.

[!code-REST [GET__tfvc_shelvesets_json](./_data/shelvesets/GET__tfvc_shelvesets.json)]

### By person
[!code-REST [GET__tfvc_shelvesets_owner-_owner__json](./_data/shelvesets/GET__tfvc_shelvesets_owner-_owner_.json)]

### With more or less comments
[!code-REST [GET__tfvc_shelvesets_maxCommentLength-_maxCommentLength__json](./_data/shelvesets/GET__tfvc_shelvesets_maxCommentLength-_maxCommentLength_.json)]

### A page at a time
[!code-REST [GET__tfvc_shelvesets__top-_top___skip-_skip__json](./_data/shelvesets/GET__tfvc_shelvesets__top-_top___skip-_skip_.json)]


## Get a shelveset

```no-highlight
GET https://{instance}/DefaultCollection/_apis/tfvc/shelvesets/{shelveset};{owner}?api-version={version}
```

| Parameter        | Type   | Default | Notes
|:-----------------|:-------|:--------|---------------------------------
| URL
| instance         | string |         | [VS Team Services account](/integrate/get-started/rest/basics.md#vs-team-services) ({account}.visualstudio.com) or [TFS server](/integrate/get-started/rest/basics.md#tfs) ({server:port}).
| shelveset        | string |         | Name of shelveset.
| owner            | string |         | Display name, unique name, or ID of person who created the shelveset.
| Query
| api-version      | string |         | [Version](../../get-started/rest/basics.md#versions) of the API to use.
| includeDetails   | bool   | false   | Return policy overrides and notes.
| includeWorkItems | bool   | false   | Return work items.
| maxChangeCount   | int    | 0       | Maximum number of changes to return. 
| maxCommentLength | int    | 2000    | Maximum number of characters in the comment to return.

[!code-REST [GET__tfvc_shelvesets__shelvesetId__json](./_data/shelvesets/GET__tfvc_shelvesets__shelvesetId_.json)]

### With policy overrides and notes
[!code-REST [GET__tfvc_shelvesets__shelvesetId__includeDetails-true_json](./_data/shelvesets/GET__tfvc_shelvesets__shelvesetId__includeDetails-true.json)]

### With work items
[!code-REST [GET__tfvc_shelvesets__shelvesetId__includeWorkItems-true_json](./_data/shelvesets/GET__tfvc_shelvesets__shelvesetId__includeWorkItems-true.json)]

### With changes
[!code-REST [GET__tfvc_shelvesets__shelvesetId__maxChangeCount-100_json](./_data/shelvesets/GET__tfvc_shelvesets__shelvesetId__maxChangeCount-100.json)]

### With more or less comments
[!code-REST [GET__tfvc_shelvesets__shelvesetId__maxCommentLength-_maxCommentLength__json](./_data/shelvesets/GET__tfvc_shelvesets__shelvesetId__maxCommentLength-_maxCommentLength_.json)]

## Get shelveset changes
Retrieves a list of changes included in a shelveset. Paging is supported using $top and $skip.

```no-highlight
GET https://{instance}/DefaultCollection/_apis/tfvc/shelvesets/{shelveset};{owner}/changes?api-version={version}
```

| Parameter        | Type   | Default | Notes
|:-----------------|:-------|:--------|---------------------------------
| URL
| instance         | string |         | [VS Team Services account](/integrate/get-started/rest/basics.md#vs-team-services) ({account}.visualstudio.com) or [TFS server](/integrate/get-started/rest/basics.md#tfs) ({server:port}).
| shelveset        | string |         | Name of shelveset.
| owner            | string |         | Display name, unique name, or ID of person who created the shelveset.
| Query
| api-version      | string |         | [Version](../../get-started/rest/basics.md#versions) of the API to use.
| $top             | int    | 100     | Maximum number of shelvesets to return.
| $skip            | int    | 0       | Number of shelvesets to skip.

[!code-REST [GET__tfvc_shelvesets__shelvesetId__changes_json](./_data/shelvesets/GET__tfvc_shelvesets__shelvesetId__changes.json)]

### A page at a time
[!code-REST [GET__tfvc_shelvesets__shelvesetId__changes__top-_top___skip-_skip__json](./_data/shelvesets/GET__tfvc_shelvesets__shelvesetId__changes__top-_top___skip-_skip_.json)]

## Get shelveset work items

Retrieves the work items associated with the shelveset. 

```no-highlight
GET https://{instance}/DefaultCollection/_apis/tfvc/shelvesets/{shelveset};{owner}/workitems?api-version={version}
```

| Parameter        | Type   | Default | Notes
|:-----------------|:-------|:--------|---------------------------------
| URL
| instance         | string |         | [VS Team Services account](/integrate/get-started/rest/basics.md#vs-team-services) ({account}.visualstudio.com) or [TFS server](/integrate/get-started/rest/basics.md#tfs) ({server:port}).
| shelveset        | string |         | Name of shelveset.
| owner            | string |         | Display name, unique name, or ID of person who created the shelveset.
| Query
| api-version      | string |         | [Version](../../get-started/rest/basics.md#versions) of the API to use.

[!code-REST [GET__tfvc_shelvesets__shelvesetId__workitems_json](./_data/shelvesets/GET__tfvc_shelvesets__shelvesetId__workitems.json)]
