---
title: Feeds | REST API Reference for VSTS 
description: Work with feeds programmatically using the REST APIs for VSTS .
ms.assetid: 47944084-6828-4908-bf7f-86988390b673
ms.manager: jillfra
ms.author: elbatk
author: elbatk
ms.date: 09/29/2016
ms.prod: devops
ms.technology: devops-ecosystem
monikerRange: '>= tfs-2015 < azure-devops'
ms.topic: article
---

# Feeds

[!INCLUDE [azure-devops](../_data/azure-devops-message.md)]

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

#### Sample request

```
GET https://mytfsserver/DefaultCollection/_apis/packaging/feeds?api-version=2.0-preview.1
```

#### Sample response

```json
{
  "count": 1,
  "value": [
    {
      "id": "64ccc8b7-705d-48f7-a91c-d9be3cd36468",
      "name": "EngineeringInternal",
      "description": "Contains packages internal to the engineering organization",
      "url": "https://mytfsserver/DefaultCollection/_apis/Packaging/Feeds/64ccc8b7-705d-48f7-a91c-d9be3cd36468",
      "_links": {
        "self": {
          "href": "https://mytfsserver/DefaultCollection/_apis/Packaging/Feeds/64ccc8b7-705d-48f7-a91c-d9be3cd36468"
        }
      }
    }
  ]
}
```


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

#### Sample request

```
GET https://mytfsserver/DefaultCollection/_apis/packaging/feeds/EngineeringInternal?api-version=2.0-preview.1
```

#### Sample response

```json
{
  "id": "64ccc8b7-705d-48f7-a91c-d9be3cd36468",
  "name": "EngineeringInternal",
  "description": "Contains packages internal to the engineering organization",
  "url": "https://mytfsserver/DefaultCollection/_apis/Packaging/Feeds/64ccc8b7-705d-48f7-a91c-d9be3cd36468",
  "_links": {
    "self": {
      "href": "https://mytfsserver/DefaultCollection/_apis/Packaging/Feeds/64ccc8b7-705d-48f7-a91c-d9be3cd36468"
    }
  }
}
```



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

#### Sample request

```
POST https://mytfsserver/DefaultCollection/_apis/packaging/feeds?api-version=2.0-preview.1
```
```json
{
  "name": "EngineeringInternal",
  "description": "Contains packages internal to the engineering organization"
}
```

#### Sample response

```json
{
  "id": "64ccc8b7-705d-48f7-a91c-d9be3cd36468",
  "name": "EngineeringInternal",
  "description": "Contains packages internal to the engineering organization",
  "url": "https://mytfsserver/DefaultCollection/_apis/Packaging/Feeds/64ccc8b7-705d-48f7-a91c-d9be3cd36468",
  "_links": {
    "self": {
      "href": "https://mytfsserver/DefaultCollection/_apis/Packaging/Feeds/64ccc8b7-705d-48f7-a91c-d9be3cd36468"
    }
  }
}
```


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

#### Sample request

```
PATCH https://mytfsserver/DefaultCollection/_apis/packaging/feeds/64ccc8b7-705d-48f7-a91c-d9be3cd36468?api-version=2.0-preview.1
```
```json
{
  "name": "LegacyEngineeringInternal",
  "description": "Contains legacy packages internal to the engineering organization"
}
```

#### Sample response

```json
{
  "id": "64ccc8b7-705d-48f7-a91c-d9be3cd36468",
  "name": "LegacyEngineeringInternal",
  "description": "Contains legacy packages internal to the engineering organization",
  "url": "https://mytfsserver/DefaultCollection/_apis/Packaging/Feeds/64ccc8b7-705d-48f7-a91c-d9be3cd36468",
  "_links": {
    "self": {
      "href": "https://mytfsserver/DefaultCollection/_apis/Packaging/Feeds/64ccc8b7-705d-48f7-a91c-d9be3cd36468"
    }
  }
}
```


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

#### Sample request

```
DELETE https://mytfsserver/DefaultCollection/_apis/packaging/feeds/64ccc8b7-705d-48f7-a91c-d9be3cd36468?api-version=2.0-preview.1
```

