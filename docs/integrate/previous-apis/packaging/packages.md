---
title: Packages | REST API Reference for VSTS 
description: Work with packages programmatically using the REST APIs for VSTS .
ms.assetid: 1f8825e8-7916-488b-b71e-c807f1f5234d
ms.manager: douge
ms.date: 09/29/2016
ms.prod: devops
ms.technology: devops-ecosystem
monikerRange: '>= tfs-2013 < vsts'
ms.topic: article
ms.author: elbatk
author: elbatk
ms.date: 08/04/2016
---

# Packages
[!INCLUDE [API_version](../_data/version2-preview1.md)]

[!INCLUDE [disclaimer](../_data/disclaimer.md)]

[!INCLUDE [GET_STARTED](../_data/get-started.md)]

## Get packages

```no-highlight
GET https://{account}.feeds.VisualStudio.com/DefaultCollection/_apis/packaging/feeds/{feed}/packages?api-version={version}
```

| Parameter             | Type    | Default   | Notes
|:----------------------|:--------|:----------|:---------------------------------------------------------------------------------------------------
| URL
| account               | string  |           | VSTS organization
| feed                  | string  |           | Name or ID of the feed
| Query
| packageNameQuery      | string  |           | Include packages where the display name includes this query
| normalizedPackageName | string  |           | Include the package where its normalized package name exactly matches this parameter.  Must be used in conjunction with protocolType.  Cannot be used in conjunction with packageNameQuery
| protocolType          | string  |           | The protocol type of the package e.g. NuGet
| includeUrls           | boolean | true      | Include REST Urls with the response
| includeAllVersions    | boolean | false     | Include minimum details of all packages, otherwise the latest packages is the only listed
| includeDescription    | boolean | false     | Include descriptions on the version details
| isListed              | boolean?| null      | True only displays listed packages (at least one listed version), False shows only delisted packages (packages with at least one delisted version), null shows all packages
| getTopPackageVersions | boolean | false     | Changes the behavior of top/skip to take the top package versions instead of top packages. Must be used in conjunction with includeAllVersions=true
| $top                  | integer | 1000      | Get the top N packages (or package versions with getTopPackageVersions=true)
| $skip                 | integer | 0         | Skip N packages (or package versions with getTopPackageVersions=true)
| api-version           | string  |           | [Version](../../concepts/rest-api-versioning.md) of the API to use

[!code-REST [GET__packaging_feeds_json](./_data/packages/GET__packaging_feeds__feedName__packages.json)]

## Get a package

```no-highlight
GET https://{account}.feeds.VisualStudio.com/DefaultCollection/_apis/packaging/feeds/{feed}/packages/{packageId}?api-version={version}
```

| Parameter             | Type    | Default   | Notes
|:----------------------|:--------|:----------|:---------------------------------------------------------------------------------------------------
| URL
| account               | string  |           | VSTS organization
| feed                  | string  |           | Name or ID of the feed
| packageId             | guid    |           | ID of the package
| Query
| includeUrls           | boolean | true      | Include REST Urls with the response
| includeAllVersions    | boolean | false     | Include minimum details of all packages, otherwise the latest packages is the only listed
| includeDescription    | boolean | false     | Include descriptions on the version details
| api-version           | string  |           | [Version](../../concepts/rest-api-versioning.md) of the API to use

[!code-REST [GET__packaging_feeds_json](./_data/packages/GET__packaging_feeds__feedName__packages__packageId__.json)]

## Get all package versions

```no-highlight
GET https://{account}.feeds.VisualStudio.com/DefaultCollection/_apis/packaging/feeds/{feed}/packages/{packageId}/versions?api-version={version}
```

| Parameter             | Type    | Default   | Notes
|:----------------------|:--------|:----------|:---------------------------------------------------------------------------------------------------
| URL
| account               | string  |           | VSTS organization
| feed                  | string  |           | Name or ID of the feed
| packageId             | guid    |           | ID of the package
| Query
| includeUrls           | boolean | true      | Include REST Urls with the response
| isListed              | boolean?| null      | True only displays listed packages (at least one listed version), False shows only delisted packages (packages with at least one delisted version), null shows all packages
| api-version           | string  |           | [Version](../../concepts/rest-api-versioning.md) of the API to use

[!code-REST [GET__packaging_feeds_json](./_data/packages/GET__packaging_feeds__feedName__packages__packageId__versions.json)]

## Get a package version

```no-highlight
GET https://{account}.feeds.VisualStudio.com/DefaultCollection/_apis/packaging/feeds/{feed}/packages/{packageId}/versions/{versionId}?api-version={version}
```

| Parameter             | Type    | Default   | Notes
|:----------------------|:--------|:----------|:---------------------------------------------------------------------------------------------------
| URL
| account               | string  |           | VSTS organization
| feed                  | string  |           | Name or ID of the feed
| packageId             | guid    |           | ID of the package
| versionId             | guid    |           | ID of the package version
| Query
| includeUrls           | boolean | true      | Include REST Urls with the response
| api-version           | string  |           | [Version](../../concepts/rest-api-versioning.md) of the API to use

[!code-REST [GET__packaging_feeds_json](./_data/packages/GET__packaging_feeds__feedName__packages__packageId__versions__versionId_.json)]

## Protocol Endpoints

We intend to provide a mechanism for retrieving protocol-specific packaging endpoints.
Until that mechanism exists, you may use a convention-based approach to convert a feed response into a NuGet endpoint URL.

For example, consider this feed response:

[!code-REST [GET__packaging_feeds_feedName_json](./_data/feeds/GET__packaging_feeds__feedName_.json)]

To construct the [NuGet v3](http://docs.nuget.org/) endpoint URL, take the organization name *contoso* and feed name *EngineeringInternal* and insert them into this URL template: `https://{account}.pkgs.visualstudio.com/DefaultCollection/_packaging/{feedName}/nuget/v3/index.json`

For example, the NuGet v3 endpoint for the feed shown above is `https://contoso.pkgs.visualstudio.com/DefaultCollection/_packaging/EngineeringInternal/nuget/v3/index.json`.

To construct the NuGet v2 endpoint URL, take the organization name *contoso* and feed name *EngineeringInternal* and insert them into this URL template: `https://{account}.pkgs.visualstudio.com/DefaultCollection/_packaging/{feedName}/nuget/v2`

For example, the NuGet v2 endpoint for the feed shown above is `https://contoso.pkgs.visualstudio.com/DefaultCollection/_packaging/EngineeringInternal/nuget/v2`.
