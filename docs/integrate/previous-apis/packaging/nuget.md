---
title: NuGet | REST API Reference for VSTS 
description: Work with NuGet packages programmatically using the REST APIs for VSTS.
ms.assetid: 8D402655-CA86-4673-B091-244C0B2B673B
ms.manager: douge
ms.topic: article
ms.author: elbatk
author: elbatk
ms.date: 09/29/2016
ms.prod: devops
ms.technology: devops-ecosystem
monikerRange: '>= tfs-2013 < vsts'
---
# NuGet

[!INCLUDE [API_version](../_data/version3-preview1.md)]

[!INCLUDE [disclaimer](../_data/disclaimer.md)]

## Get package info

```no-highlight
GET https://{account}.pkgs.visualstudio.com/DefaultCollection/_apis/packaging/feeds/{feedName}/nuget/packages/{packageName}/versions/{packageVersion}?api-version={api-version}&showDeleted={showDeleted}
```

| Parameter             | Type    | Default   | Notes
|:----------------------|:--------|:----------|:---------------------------------------------------------------------------------------------------
| URL
| account               | string  |           | VSTS organization
| feedName              | string  |           | Name or ID of the feed
| packageName           | string  |           | Normalized Name or ID of the package
| packageVersion        | string  |           | Version of the package or Version ID
| showDeleted           | bool    | false     | Set to true to return metadata for packages that have been deleted
| api-version           | string  |           | [Version](../../concepts/rest-api-versioning.md) of the API to use

[!code-REST [GET__packaging_feeds__feedName__nuget_packages__packgeName__versions__packageVersion__](./_data/nuget_packages/GET__packaging_feeds__feedName__nuget_packages__packgeName__versions__packageVersion__.json)]

## Unlist/Relist package

```no-highlight
PATCH https://{account}.pkgs.visualstudio.com/DefaultCollection/_apis/packaging/feeds/{feedName}/nuget/packages/{packageName}/versions/{packageVersion}?api-version={api-version}
```

```http
Content-Type: application/json
```

```json
{
    "listed": false
}
```

| Parameter             | Type    | Default   | Notes
|:----------------------|:--------|:----------|:---------------------------------------------------------------------------------------------------
| URL
| account               | string  |           | VSTS organization
| feedName              | string  |           | Name or ID of the feed
| packageName           | string  |           | Normalized name or ID of the package
| packageVersion        | string  |           | Version or version ID of the package
| api-version           | string  |           | [Version](../../concepts/rest-api-versioning.md) of the API to use
| Body
| listed                | boolean |            | Set to true for relist and false for unlist

[!code-REST [PATCH__packaging_feeds__feedName__nuget_packages__packgeName__versions__packageVersion__](./_data/nuget_packages/PATCH__packaging_feeds__feedName__nuget_packages__packgeName__versions__packageVersion__.json)]

## Delete package

```no-highlight
DELETE https://{account}.pkgs.visualstudio.com/DefaultCollection/_apis/packaging/feeds/{feedName}/nuget/packages/{packageName}/versions/{packageVersion}?api-version={api-version}
```

| Parameter             | Type    | Default   | Notes
|:----------------------|:--------|:----------|:---------------------------------------------------------------------------------------------------
| URL
| account               | string  |           | VSTS organization
| feedName              | string  |           | Name or ID of the feed
| packageName           | string  |           | Normalized name or ID of the package
| packageVersion        | string  |           | Version or version ID of the package
| api-version           | string  |           | [Version](../../concepts/rest-api-versioning.md) of the API to use

[!code-REST [DELETE__packaging_feeds__feedName__nuget_packages__packgeName__versions__packageVersion__](./_data/nuget_packages/DELETE__packaging_feeds__feedName__nuget_packages__packgeName__versions__packageVersion__.json)]

## Download Package

This endpoint is not intended for programmatic usage or bulk downloads.  The service will throttle when excessive use is detected.

```no-highlight
GET https://{account}.pkgs.visualstudio.com/defaultcollection/_apis/packaging/feeds/{feedname}/nuget/packages/{packagename}/versions/{packageversion}/content?api-version={api-version}
```

| Parameter | Type    | Notes
|:----------|:--------|:-------------------------------------------------------------------------------------------------------------
| URL
| account   | string  | VSTS organization.
| feedname   | string  | Name or Id of the feed
| packageName   | string  | Normalized Name or ID of the package
| packageversion   | string  | Version of the package or Version ID
| api-version | string | [Version](../../concepts/rest-api-versioning.md) of the API to use.


**Response**

#####Status code: 200
*Response is binary*

## Release Package
```httprequest
PATCH https://{account}.pkgs.VisualStudio.com/DefaultCollection/_apis/packaging/feeds/{feedName}/nuget/packages/{packageName}/versions/{packageVersion}?api-version={api-version}
```

```http
Content-Type: application/json
```
```json
{
    "views": { "op":"add", "path":"/views/-", "value":"release" }
}
```

| Parameter             | Type    | Default   | Notes
|:----------------------|:--------|:----------|:---------------------------------------------------------------------------------------------------
| URL
| account               | string  |           | VSTS organization
| feedName              | string  |           | Name or ID of the feed
| packageName           | string  |           | Normalized name or ID of the package
| packageVersion        | string  |           | Version or version ID of the package
| api-version           | string  |           | [Version](../../concepts/rest-api-versioning.md) of the API to use
| Body
| views                 | string  |           | JSON patch object

[!code-REST [PATCH__packaging_feeds__feedName__nuget_packages__packgeName__versions__packageVersion__3](./_data/nuget_packages/PATCH__packaging_feeds__feedName__nuget_packages__packgeName__versions__packageVersion__3.json)]
