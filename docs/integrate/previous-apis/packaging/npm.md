---
title: npm | REST API Reference for VSTS
description: Work with npm packages programmatically using the REST APIs for VSTS.
ms.assetid: 12059603-5562-4AB1-B028-CAC39BB81A51
ms.manager: jillfra
ms.topic: article
ms.author: elbatk
author: elbatk
ms.date: 09/29/2016
ms.prod: devops
ms.technology: devops-ecosystem
monikerRange: '>= tfs-2015 < azure-devops'
---
# npm

[!INCLUDE [azure-devops](../_data/azure-devops-message.md)]


[!INCLUDE [API_version](../_data/version3-preview1.md)]

[!INCLUDE [disclaimer](../_data/disclaimer.md)]

## Get package info


| Parameter             | Type    | Default   | Notes
|:----------------------|:--------|:----------|:---------------------------------------------------------------------------------------------------
| URL
| account               | string  |           | VSTS organization.
| feedName              | string  |           | Name or ID of the feed.
| packageScope          | string  |           | Scope of the package, preceded by an @-symbol. Required parameter for scoped packages.
| packageName           | string  |           | Name or ID of the package.
| packageVersion        | string  |           | Version of the package or Version ID. Dist-tags are not currently supported.
| showUnpublished       |   bool  |   false   | Set to true to return metadata for packages that have been unpublished.
| api-version           | string  |           | [Version](../../concepts/rest-api-versioning.md) of the API to use.


### Unscoped packages

```no-highlight
GET https://{account}.pkgs.visualstudio.com/defaultcollection/_apis/packaging/feeds/{feedName}/npm/{packageName}/versions/{packageVersion}?api-version={api-version}&showUnpublished={showUnpublished}
```

#### Sample request

```
GET https://mytfsserver/DefaultCollection/_apis/packaging/feeds/contoso/npm/bootstrap/versions/3.3.6/?api-version=3.0-preview
```

#### Sample response

```json
{
  "id": "bootstrap",
  "name": "bootstrap",
  "version": "3.3.6",
  "unpublishedDate": null,
  "deprecateMessage": null
}
```


### Scoped packages

```no-highlight
GET https://{account}.pkgs.visualstudio.com/defaultcollection/_apis/packaging/feeds/{feedName}/npm/@{packageScope}/{packageName}/versions/{packageVersion}?api-version={api-version}&showUnpublished={showUnpublished}
```

#### Sample request

```
GET https://mytfsserver/DefaultCollection/_apis/packaging/feeds/contoso/npm/@myscope/bootstrap/versions/3.3.6/?api-version=3.0-preview
```

#### Sample response

```json
{
  "id": "@myscope/bootstrap",
  "name": "@myscope/bootstrap",
  "version": "3.3.6",
  "unpublishedDate": null,
  "deprecateMessage": null
}
```


## Deprecate a package

| Parameter             | Type    | Default   | Notes
|:----------------------|:--------|:----------|:---------------------------------------------------------------------------------------------------
| URL
| account               | string  |           | VSTS organization.
| feedName              | string  |           | Name or ID of the feed.
| packageScope          | string  |           | Scope of the package, preceded by an @-symbol. Required parameter for scoped packages.
| packageName           | string  |           | Name or ID of the package.
| packageVersion        | string  |           | Version of the package or Version ID.
| api-version           | string  |           | [Version](../../concepts/rest-api-versioning.md) of the API to use.


### Unscoped packages

```no-highlight
PATCH https://{account}.pkgs.visualstudio.com/defaultcollection/_apis/packaging/feeds/{feedname}/npm/{packageName}/versions/{packageVersion}/content?api-version={api-version}
```

#### Sample request

```
PATCH https://mytfsserver/DefaultCollection/_apis/packaging/feeds/contoso/npm/bootstrap/versions/3.3.6/?api-version=3.0-preview
```
```json
{
  "deprecateMessage": "This package has been deprecated. Please use version 3.3.7 instead."
}
```

#### Sample response

```json
{
  "id": "bootstrap",
  "name": "bootstrap",
  "version": "3.3.6",
  "unpublishedDate": null,
  "deprecateMessage": "This package has been deprecated. Please use version 3.3.7 instead."
}
```


### Scoped packages

```no-highlight
PATCH https://{account}.pkgs.visualstudio.com/defaultcollection/_apis/packaging/feeds/{feedname}/npm/@{packageScope}/{packageName}/versions/{packageVersion}/content?api-version={api-version}
```

#### Sample request

```
PATCH https://mytfsserver/DefaultCollection/_apis/packaging/feeds/contoso/npm/@myscope/bootstrap/versions/3.3.6/?api-version=3.0-preview
```
```json
{
  "deprecateMessage": "This package has been deprecated. Please use version 3.3.7 instead."
}
```

#### Sample response

```json
{
  "id": "@myscope/bootstrap",
  "name": "@myscope/bootstrap",
  "version": "3.3.6",
  "unpublishedDate": null,
  "deprecateMessage": "This package has been deprecated. Please use version 3.3.7 instead."
}
```


## Undeprecate a package

To undeprecate a package, call the deprecate package API with an empty deprecation message.

## Unpublish

| Parameter             | Type    | Default   | Notes
|:----------------------|:--------|:----------|:---------------------------------------------------------------------------------------------------
| URL
| account               | string  |           | VSTS organization.
| feedName              | string  |           | Name or ID of the feed.
| packageScope          | string  |           | Scope of the package, preceded by an @-symbol. Required parameter for scoped packages.
| packageName           | string  |           | Name or ID of the package.
| packageVersion        | string  |           | Version of the package or Version ID.
| api-version           | string  |           | [Version](../../concepts/rest-api-versioning.md) of the API to use.

### Unscoped packages

```no-highlight
DELETE https://{account}.pkgs.visualstudio.com/defaultcollection/_apis/packaging/feeds/{feedName}/npm/{packageName}/versions/{packageVersion}?api-version={api-version}
```

#### Sample request

```
DELETE https://mytfsserver/DefaultCollection/_apis/packaging/feeds/contoso/npm/bootstrap/versions/3.3.6/?api-version=3.0-preview
```

#### Sample response

```json
{
  "id": "bootstrap",
  "name": "bootstrap",
  "version": "3.3.6",
  "unpublishedDate": "2016-11-29T20:59:18.9752022Z",
  "deprecateMessage": null
}
```


### Scoped packages

```no-highlight
DELETE https://{account}.pkgs.visualstudio.com/defaultcollection/_apis/packaging/feeds/{feedName}/npm/@{packageScope}/{packageName}/versions/{packageVersion}?api-version={api-version}
```

#### Sample request

```
DELETE https://mytfsserver/DefaultCollection/_apis/packaging/feeds/contoso/npm/@myscope/bootstrap/versions/3.3.6/?api-version=3.0-preview
```

#### Sample response

```json
{
  "id": "@myscope/bootstrap",
  "name": "@myscope/bootstrap",
  "version": "3.3.6",
  "unpublishedDate": "2016-11-29T20:59:19.6158258Z",
  "deprecateMessage": null
}
```


## Download Package

This endpoint is not intended for programmatic usage or bulk downloads.  The service will throttle when excessive use is detected.

| Parameter             | Type    | Default  | Notes
|:----------------------|:--------|:---------|:----------------------------------------------------------------------------------------------------
| URL
| account               | string  |          | VSTS organization.
| feedName              | string  |          | Name or Id of the feed
| packageScope          | string  |          | Scope of the package, preceded by an @-symbol. Required parameter for scoped packages.
| packageName           | string  |          | Normalized Name or ID of the package
| packageVersion        | string  |          | Version of the package or Version ID
| api-version           | string  |          | [Version](../../concepts/rest-api-versioning.md) of the API to use.

### Unscoped packages
```no-highlight
GET https://{account}.pkgs.visualstudio.com/defaultcollection/_apis/packaging/feeds/{feedname}/npm/packages/{packagename}/versions/{packageversion}/content?api-version={api-version}
```

#### Sample request

```
GET https://mytfsserver/DefaultCollection/_apis/packaging/feeds/contoso/npm/packages/bootstrap/versions/3.3.6/content?api-version=2.0-preview
```

#### Sample response

```json
"ResponseIsBinary"
```


### Scoped packages
```no-highlight
GET https://{account}.pkgs.visualstudio.com/defaultcollection/_apis/packaging/feeds/{feedname}/npm/@{packageScope}/packages/{packagename}/versions/{packageversion}/content?api-version={api-version}
```

#### Sample request

```
GET https://mytfsserver/DefaultCollection/_apis/packaging/feeds/contoso/npm/packages/@myscope/bootstrap/versions/3.3.6/content?api-version=2.0-preview
```

#### Sample response

```json
"ResponseIsBinary"
```


## Release a package

| Parameter             | Type    | Default   | Notes
|:----------------------|:--------|:----------|:---------------------------------------------------------------------------------------------------
| URL
| account               | string  |           | VSTS organization.
| feedName              | string  |           | Name or ID of the feed.
| packageScope          | string  |           | Scope of the package, preceded by an @-symbol. Required parameter for scoped packages.
| packageName           | string  |           | Name or ID of the package.
| packageVersion        | string  |           | Version of the package or Version ID.
| api-version           | string  |           | [Version](../../concepts/rest-api-versioning.md) of the API to use.
| Body
| views                 | string  |           | JSON patch object


### Unscoped packages

```no-highlight
PATCH https://{account}.pkgs.VisualStudio.com/DefaultCollection/_apis/packaging/feeds/{feedName}/npm/{packageName}/versions/{packageVersion}?api-version={api-version}
```

#### Sample request

```
PATCH https://mytfsserver/DefaultCollection/_apis/packaging/feeds/contoso/npm/bootstrap/versions/3.3.6/?api-version=3.0-preview
```
```json
{
  "views": {
    "op": "add",
    "path": "/views/-",
    "value": "release"
  }
}
```

#### Sample response

```json
{
  "id": "bootstrap",
  "name": "bootstrap",
  "version": "3.3.6",
  "unpublishedDate": null,
  "deprecateMessage": null
}
```



### Scoped packages

```no-highlight
PATCH https://{account}.pkgs.VisualStudio.com/DefaultCollection/_apis/packaging/feeds/{feedName}/npm/@{packageScope}/{packageName}/versions/{packageVersion}?api-version={api-version}
```

#### Sample request

```
PATCH https://mytfsserver/DefaultCollection/_apis/packaging/feeds/contoso/npm/@myscope/bootstrap/versions/3.3.6/?api-version=3.0-preview
```
```json
{
  "views": {
    "op": "add",
    "path": "/views/-",
    "value": "release"
  }
}
```

#### Sample response

```json
{
  "id": "@myscope/bootstrap",
  "name": "@myscope/bootstrap",
  "version": "3.3.6",
  "unpublishedDate": null,
  "deprecateMessage": null
}
```

