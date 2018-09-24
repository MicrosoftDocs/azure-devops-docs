---
title: Release Views | REST API Reference for VSTS
description: Work with release views programmatically using the REST APIs for VSTS .
ms.assetid: AED5CC40-4B11-447E-BAE6-D9806687736E
ms.prod: devops
ms.technology: devops-ecosystem
monikerRange: '>= tfs-2013 < vsts'
ms.date: 10/10/2016
---

# Release views
[!INCLUDE [API_version](../_data/version3-preview.md)]

[!INCLUDE [disclaimer](../_data/disclaimer.md)]

[!INCLUDE [GET_STARTED](../_data/get-started.md)]

## Get release views

```httprequest
GET https://{account}.Feeds.VisualStudio.com/DefaultCollection/_apis/packaging/feeds/{feed}/views?api-version={version}
```

| Parameter | Type    | Notes
|:----------|:--------|:-------------------------------------------------------------------------------------------------------------
| URL
| account   | string  | VSTS organization.
| feed      | string  | Name or ID of the feed.
| Query
| api-version | string | [Version](../../concepts/rest-api-versioning.md) of the API to use.

[!code-REST [GET__packaging_feeds__feedName__views](./_data/views/GET__packaging_feeds__feedName__views.json)]

## Get a release view

```httprequest
GET https://{account}.Feeds.VisualStudio.com/DefaultCollection/_apis/packaging/feeds/{feed}/views/{view}?api-version={version}
```

| Parameter | Type    | Notes
|:----------|:--------|:-------------------------------------------------------------------------------------------------------------
| URL
| account   | string  | VSTS organization.
| feed        | string | Name or ID of the feed.
| view        | string | Name or ID of the release view.
| Query
| api-version | string | [Version](../../concepts/rest-api-versioning.md) of the API to use.

[!code-REST [GET__packaging_feeds__feedName__views__viewName_](./_data/views/GET__packaging_feeds__feedName__views__viewName_.json)]


## Create a release view
Release view names are limited to 64 characters and can only contain alphanumeric characters.

```httprequest
POST https://{account}.Feeds.VisualStudio.com/DefaultCollection/_apis/packaging/feeds/{feed}/views?api-version={version}
```

| Parameter   | Type   | Notes
|:------------|:-------|:-------------------------------------------------------------------------------------------------------------
| URL
| account     | string | VSTS organization.
| feed        | string | Name or ID of the feed.
| Query
| api-version | string | [Version](../../concepts/rest-api-versioning.md) of the API to use.
| Body
| name        | string | Name of the release view to be created.
| type        | string | Type of the release view to be created, currently only "release" views are supported.

[!code-REST [POST__packaging_feeds__feedName__views](./_data/views/POST__packaging_feeds__feedName__views.json)]

## Update a release view

```httprequest
PATCH https://{account}.Feeds.VisualStudio.com/DefaultCollection/_apis/packaging/feeds/{feed}/views/{view}?api-version={version}
```

| Parameter   | Type   | Notes
|:------------|:-------|:-------------------------------------------------------------------------------------------------------------
| URL
| account     | string | VSTS organization.
| feed        | string | Name or ID of feed to be updated.
| view        | string | Name or ID of the release view to be updated.
| Query
| api-version | string | [Version](../../concepts/rest-api-versioning.md) of the API to use.
| Body
| name        | string | Updated name of the release view.

[!code-REST [PATCH__packaging_feeds__feedName__views__viewName_](./_data/views/PATCH__packaging_feeds__feedName__views__viewName_.json)]

## Delete a release view

```httprequest
DELETE https://{account}.Feeds.VisualStudio.com/DefaultCollection/_apis/packaging/feeds/{feed}/views/{view}?api-version={version}
```

| Parameter   | Type   | Notes
|:------------|:-------|:-------------------------------------------------------------------------------------------------------------
| URL
| account     | string | VSTS organization.
| feed        | string | Name or ID of the feed to be deleted.
| view        | string | Name or ID of the release view to be deleted.
| Query
| api-version | string | [Version](../../concepts/rest-api-versioning.md) of the API to use.

[!code-REST [DELETE__packaging_feeds__feedName__views__newViewName_](./_data/views/DELETE__packaging_feeds__feedName__views__newViewName_.json)]
