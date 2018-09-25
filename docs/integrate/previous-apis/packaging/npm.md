---
title: npm | REST API Reference for VSTS
description: Work with npm packages programmatically using the REST APIs for VSTS.
ms.assetid: 12059603-5562-4AB1-B028-CAC39BB81A51
ms.manager: douge
ms.topic: article
ms.author: elbatk
author: elbatk
ms.date: 09/29/2016
ms.prod: devops
ms.technology: devops-ecosystem
monikerRange: '>= tfs-2013 < vsts'
---
# npm

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

[!code-REST [GET__packaging_feeds__feedName__npm__packageName__versions__packageVersion__](./_data/npm/GET__packaging_feeds__feedName__npm__packageName__versions__packageVersion__.json)]

### Scoped packages

```no-highlight
GET https://{account}.pkgs.visualstudio.com/defaultcollection/_apis/packaging/feeds/{feedName}/npm/@{packageScope}/{packageName}/versions/{packageVersion}?api-version={api-version}&showUnpublished={showUnpublished}
```

[!code-REST [GET__packaging_feeds__feedName__npm__scope___packageName__versions__packageVersion__](./_data/npm/GET__packaging_feeds__feedName__npm__scope___packageName__versions__packageVersion__.json)]

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

[!code-REST [PATCH__packaging_feeds__feedName__npm__packageName__versions__packageVersion__2](./_data/npm/PATCH__packaging_feeds__feedName__npm__packageName__versions__packageVersion__2.json)]

### Scoped packages

```no-highlight
PATCH https://{account}.pkgs.visualstudio.com/defaultcollection/_apis/packaging/feeds/{feedname}/npm/@{packageScope}/{packageName}/versions/{packageVersion}/content?api-version={api-version}
```

[!code-REST [PATCH__packaging_feeds__feedName__npm__scope___packageName__versions__packageVersion__2](./_data/npm/PATCH__packaging_feeds__feedName__npm__scope___packageName__versions__packageVersion__2.json)]

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

[!code-REST [DELETE__packaging_feeds__feedName__npm__packageName__versions__packageVersion__](./_data/npm/DELETE__packaging_feeds__feedName__npm__packageName__versions__packageVersion__.json)]

### Scoped packages

```no-highlight
DELETE https://{account}.pkgs.visualstudio.com/defaultcollection/_apis/packaging/feeds/{feedName}/npm/@{packageScope}/{packageName}/versions/{packageVersion}?api-version={api-version}
```

[!code-REST [DELETE__packaging_feeds__feedName__npm__scope___packageName__versions__packageVersion__](./_data/npm/DELETE__packaging_feeds__feedName__npm__scope___packageName__versions__packageVersion__.json)]

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

[!code-REST [GET__packaging_feeds__feedName__npm_packages__packageName__versions__packageVersion__content](./_data/npm/GET__packaging_feeds__feedName__npm_packages__packageName__versions__packageVersion__content.json)]

### Scoped packages
```no-highlight
GET https://{account}.pkgs.visualstudio.com/defaultcollection/_apis/packaging/feeds/{feedname}/npm/@{packageScope}/packages/{packagename}/versions/{packageversion}/content?api-version={api-version}
```

[!code-REST [GET__packaging_feeds__feedName__npm_packages__scope___packageName__versions__packageVersion__content](./_data/npm/GET__packaging_feeds__feedName__npm_packages__scope___packageName__versions__packageVersion__content.json)]

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

[!code-REST [PATCH__packaging_feeds__feedName__npm__packageName__versions__packageVersion__](./_data/npm/PATCH__packaging_feeds__feedName__npm__packageName__versions__packageVersion__.json)]


### Scoped packages

```no-highlight
PATCH https://{account}.pkgs.VisualStudio.com/DefaultCollection/_apis/packaging/feeds/{feedName}/npm/@{packageScope}/{packageName}/versions/{packageVersion}?api-version={api-version}
```

[!code-REST [PATCH__packaging_feeds__feedName__npm__scope___packageName__versions__packageVersion__](./_data/npm/PATCH__packaging_feeds__feedName__npm__scope___packageName__versions__packageVersion__.json)]
