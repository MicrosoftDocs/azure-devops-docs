---
title: Feeds | REST API Reference for VSTS 
description: Work with feeds programmatically using the REST APIs for VSTS .
ms.assetid: 47944084-6828-4908-bf7f-86988390b673
ms.manager: douge
ms.author: elbatk
author: elbatk
ms.date: 09/29/2016
ms.prod: devops
ms.technology: devops-ecosystem
monikerRange: '>= tfs-2013 < vsts'
ms.topic: article
---

# Feeds
[!INCLUDE [API_version](../_data/version2-preview1.md)]

[!INCLUDE [disclaimer](../_data/disclaimer.md)]

[!INCLUDE [GET_STARTED](../_data/get-started.md)]

## Get feeds
<a name="getfeeds" />

```no-highlight
GET https://{account}.Feeds.VisualStudio.com/DefaultCollection/_apis/packaging/feeds?api-version={version}
```

| Parameter | Type    | Notes
|:----------|:--------|:-------------------------------------------------------------------------------------------------------------
| URL
| account   | string  | VSTS organization.
| Query
| api-version | string | [Version](../../concepts/rest-api-versioning.md) of the API to use.

[!code-REST [GET__packaging_feeds_json](./_data/feeds/GET__packaging_feeds.json)]

## Get a feed

```no-highlight
GET https://{account}.Feeds.VisualStudio.com/DefaultCollection/_apis/packaging/feeds/{feed}?api-version={version}
```

| Parameter | Type    | Notes
|:----------|:--------|:-------------------------------------------------------------------------------------------------------------
| URL
| account   | string  | VSTS organization.
| feed        | string | Name or ID of the feed.
| Query
| api-version | string | [Version](../../concepts/rest-api-versioning.md) of the API to use.

[!code-REST [GET__packaging_feeds_feedName_json](./_data/feeds/GET__packaging_feeds__feedName_.json)]


## Create a feed
<a name="createafeed" />

```no-highlight
POST https://{account}.Feeds.VisualStudio.com/DefaultCollection/_apis/packaging/feeds?api-version={version}
```
```http
Content-Type: application/json
```
```json
{
    "name" : "EngineeringInternal",
    "description" : "Contains packages internal to the engineering organization"  
}
```

| Parameter   | Type   | Notes
|:------------|:-------|:-------------------------------------------------------------------------------------------------------------
| URL
| account     | string | VSTS organization.
| Query
| api-version | string | [Version](../../concepts/rest-api-versioning.md) of the API to use.
| Body
| name        | string | Name of the feed to be created. Optional.
| description | string | Description of the feed to be created. Optional.

[!code-REST [POST__packaging_feeds_json](./_data/feeds/POST__packaging_feeds_api-version-2.0-preview.json)]

## Update a feed

```no-highlight
PATCH https://{account}.Feeds.VisualStudio.com/DefaultCollection/_apis/packaging/feeds/{feed}?api-version={version}
```
```http
Content-Type: application/json
```
```json
{
    "name" : "LegacyEngineeringInternal",
    "description" : "Contains legacy packages internal to the engineering organization"  
}
```

| Parameter   | Type   | Notes
|:------------|:-------|:-------------------------------------------------------------------------------------------------------------
| URL
| account     | string | VSTS organization.
| feed        | string | Name or ID of feed to be updated
| Query
| api-version | string | [Version](../../concepts/rest-api-versioning.md) of the API to use.
| Body
| name        | string | Updated name of the feed.
| description | string | Updated description of the feed.

[!code-REST [PATCH__packaging_feeds_json](./_data/feeds/PATCH__packaging_feeds__feedId__api-version-2.0-preview.json)]

## Delete a feed

```no-highlight
DELETE https://{account}.Feeds.VisualStudio.com/DefaultCollection/_apis/packaging/feeds/{feed}?api-version={version}
```
```http
Content-Type: application/json
```

| Parameter   | Type   | Notes
|:------------|:-------|:-------------------------------------------------------------------------------------------------------------
| URL
| account     | string | VSTS organization.
| feed        | string | Name or ID of the feed to be deleted.
| Query
| api-version | string | [Version](../../concepts/rest-api-versioning.md) of the API to use.

[!code-REST [DELETE__packaging_feeds__feedId_json](./_data/feeds/DELETE__packaging_feeds__feedId__api-version-2.0-preview.json)]
