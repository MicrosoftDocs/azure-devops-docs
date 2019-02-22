---
title: Packages | REST API Reference for VSTS 
description: Work with packages programmatically using the REST APIs for VSTS .
ms.assetid: 1f8825e8-7916-488b-b71e-c807f1f5234d
ms.manager: jillfra
ms.date: 09/29/2016
ms.prod: devops
ms.technology: devops-ecosystem
monikerRange: '>= tfs-2015 < azure-devops'
ms.topic: article
ms.author: elbatk
author: elbatk
ms.date: 08/04/2016
---

# Packages

[!INCLUDE [azure-devops](../_data/azure-devops-message.md)]

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

#### Sample request

```
GET https://mytfsserver/DefaultCollection/_apis/packaging/feeds/EngineeringInternal/packages?api-version=2.0-preview
```

#### Sample response

```json
{
  "count": 1,
  "value": [
    {
      "id": "e3d6b8ad-9a15-40cf-ab6c-d08a409bba6b",
      "normalizedName": "feed.client",
      "name": "Feed.Client",
      "protocolType": "NuGet",
      "url": "https://mytfsserver/DefaultCollection/_apis/Packaging/Feeds/ebe02934-8b9a-419b-bd8d-0cd33d7c86f4/Packages/e3d6b8ad-9a15-40cf-ab6c-d08a409bba6b",
      "versions": [
        {
          "id": "c2f2a3a8-517d-46c4-ad66-a1a7ec6d20d2",
          "normalizedVersion": "0.1.4",
          "version": "0.1.4",
          "isLatest": true,
          "isListed": true,
          "storageId": "32D68E06C0EA73CB32BA03071C99F1B351C86D9E3384B02D04210C9ACB9F2BA300"
        }
      ],
      "_links": {
        "self": {
          "href": "https://mytfsserver/DefaultCollection/_apis/Packaging/Feeds/ebe02934-8b9a-419b-bd8d-0cd33d7c86f4/Packages/e3d6b8ad-9a15-40cf-ab6c-d08a409bba6b"
        },
        "feed": {
          "href": "https://mytfsserver/DefaultCollection/_apis/Packaging/Feeds/ebe02934-8b9a-419b-bd8d-0cd33d7c86f4"
        },
        "versions": {
          "href": "https://mytfsserver/DefaultCollection/_apis/Packaging/Feeds/ebe02934-8b9a-419b-bd8d-0cd33d7c86f4/Packages/e3d6b8ad-9a15-40cf-ab6c-d08a409bba6b/Versions"
        }
      }
    }
  ]
}
```


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

#### Sample request

```
GET https://mytfsserver/DefaultCollection/_apis/packaging/feeds/EngineeringInternal/packages/e3d6b8ad-9a15-40cf-ab6c-d08a409bba6b/?api-version=2.0-preview
```

#### Sample response

```json
{
  "id": "e3d6b8ad-9a15-40cf-ab6c-d08a409bba6b",
  "normalizedName": "feed.client",
  "name": "Feed.Client",
  "protocolType": "NuGet",
  "url": "https://mytfsserver/DefaultCollection/_apis/Packaging/Feeds/ebe02934-8b9a-419b-bd8d-0cd33d7c86f4/Packages/e3d6b8ad-9a15-40cf-ab6c-d08a409bba6b",
  "versions": [
    {
      "id": "c2f2a3a8-517d-46c4-ad66-a1a7ec6d20d2",
      "normalizedVersion": "0.1.4",
      "version": "0.1.4",
      "isLatest": true,
      "isListed": true,
      "storageId": "32D68E06C0EA73CB32BA03071C99F1B351C86D9E3384B02D04210C9ACB9F2BA300"
    }
  ],
  "_links": {
    "self": {
      "href": "https://mytfsserver/DefaultCollection/_apis/Packaging/Feeds/ebe02934-8b9a-419b-bd8d-0cd33d7c86f4/Packages/e3d6b8ad-9a15-40cf-ab6c-d08a409bba6b"
    },
    "feed": {
      "href": "https://mytfsserver/DefaultCollection/_apis/Packaging/Feeds/ebe02934-8b9a-419b-bd8d-0cd33d7c86f4"
    },
    "versions": {
      "href": "https://mytfsserver/DefaultCollection/_apis/Packaging/Feeds/ebe02934-8b9a-419b-bd8d-0cd33d7c86f4/Packages/e3d6b8ad-9a15-40cf-ab6c-d08a409bba6b/Versions"
    }
  }
}
```


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

#### Sample request

```
GET https://mytfsserver/DefaultCollection/_apis/packaging/feeds/EngineeringInternal/packages/e3d6b8ad-9a15-40cf-ab6c-d08a409bba6b/versions?api-version=2.0-preview
```

#### Sample response

```json
{
  "count": 2,
  "value": [
    {
      "author": "Microsoft",
      "description": "Feed.Client",
      "publishDate": "2016-05-05T15:41:00.3343232Z",
      "protocolMetadata": {
        "schemaVersion": 1,
        "data": {
          "copyright": "© Microsoft Corporation. All rights reserved.",
          "requireLicenseAcceptance": false
        }
      },
      "tags": [],
      "url": "https://mytfsserver/DefaultCollection/_apis/Packaging/Feeds/ebe02934-8b9a-419b-bd8d-0cd33d7c86f4/Packages/e3d6b8ad-9a15-40cf-ab6c-d08a409bba6b/Versions",
      "dependencies": [
        {
          "packageName": "Microsoft.AspNet.WebApi.Client",
          "versionRange": "[5.2.2, )"
        },
        {
          "packageName": "Microsoft.AspNet.WebApi.Core",
          "versionRange": "[5.2.2, )"
        },
        {
          "packageName": "Newtonsoft.Json",
          "versionRange": "[6.0.5, )"
        },
        {
          "packageName": "Vssf.Client",
          "versionRange": "[14.83.0-preview, )"
        }
      ],
      "_links": {
        "self": {
          "href": "https://mytfsserver/DefaultCollection/_apis/Packaging/Feeds/ebe02934-8b9a-419b-bd8d-0cd33d7c86f4/Packages/e3d6b8ad-9a15-40cf-ab6c-d08a409bba6b/Versions"
        },
        "feed": {
          "href": "https://mytfsserver/DefaultCollection/_apis/Packaging/Feeds/ebe02934-8b9a-419b-bd8d-0cd33d7c86f4"
        },
        "package": {
          "href": "https://mytfsserver/DefaultCollection/_apis/Packaging/Feeds/ebe02934-8b9a-419b-bd8d-0cd33d7c86f4/Packages/e3d6b8ad-9a15-40cf-ab6c-d08a409bba6b"
        }
      },
      "id": "c2f2a3a8-517d-46c4-ad66-a1a7ec6d20d2",
      "normalizedVersion": "0.1.4",
      "version": "0.1.4",
      "isLatest": true,
      "isListed": true,
      "storageId": "32D68E06C0EA73CB32BA03071C99F1B351C86D9E3384B02D04210C9ACB9F2BA300"
    },
    {
      "author": "Microsoft",
      "description": "Feed.Client",
      "publishDate": "2016-05-05T15:40:25.6265392Z",
      "protocolMetadata": {
        "schemaVersion": 1,
        "data": {
          "requireLicenseAcceptance": false
        }
      },
      "tags": [],
      "url": "https://mytfsserver/DefaultCollection/_apis/Packaging/Feeds/ebe02934-8b9a-419b-bd8d-0cd33d7c86f4/Packages/e3d6b8ad-9a15-40cf-ab6c-d08a409bba6b/Versions",
      "dependencies": [
        {
          "packageName": "Microsoft.AspNet.WebApi.Client",
          "versionRange": "[5.2.2, )"
        },
        {
          "packageName": "Microsoft.AspNet.WebApi.Core",
          "versionRange": "[5.2.2, )"
        },
        {
          "packageName": "Newtonsoft.Json",
          "versionRange": "[6.0.5, )"
        },
        {
          "packageName": "Vssf.Client",
          "versionRange": "[14.81.0-preview, )"
        }
      ],
      "_links": {
        "self": {
          "href": "https://mytfsserver/DefaultCollection/_apis/Packaging/Feeds/ebe02934-8b9a-419b-bd8d-0cd33d7c86f4/Packages/e3d6b8ad-9a15-40cf-ab6c-d08a409bba6b/Versions"
        },
        "feed": {
          "href": "https://mytfsserver/DefaultCollection/_apis/Packaging/Feeds/ebe02934-8b9a-419b-bd8d-0cd33d7c86f4"
        },
        "package": {
          "href": "https://mytfsserver/DefaultCollection/_apis/Packaging/Feeds/ebe02934-8b9a-419b-bd8d-0cd33d7c86f4/Packages/e3d6b8ad-9a15-40cf-ab6c-d08a409bba6b"
        }
      },
      "id": "b8a2a277-f77b-4ef2-acfd-0c0e550af5f7",
      "normalizedVersion": "0.1.1",
      "version": "0.1.1",
      "isLatest": false,
      "isListed": true,
      "storageId": "BC547A2DDC1217DCD0EE1998A5C2410F0559B5746CCC37BAB2B8A21D88BE594400"
    }
  ]
}
```


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

#### Sample request

```
GET https://mytfsserver/DefaultCollection/_apis/packaging/feeds/EngineeringInternal/packages/e3d6b8ad-9a15-40cf-ab6c-d08a409bba6b/versions/b8a2a277-f77b-4ef2-acfd-0c0e550af5f7?api-version=2.0-preview
```

#### Sample response

```json
{
  "author": "Microsoft",
  "description": "Feed.Client",
  "publishDate": "2016-05-05T15:40:25.6265392Z",
  "protocolMetadata": {
    "schemaVersion": 1,
    "data": {
      "requireLicenseAcceptance": false
    }
  },
  "tags": [],
  "url": "https://mytfsserver/DefaultCollection/_apis/Packaging/Feeds/ebe02934-8b9a-419b-bd8d-0cd33d7c86f4/Packages/e3d6b8ad-9a15-40cf-ab6c-d08a409bba6b/Versions",
  "dependencies": [
    {
      "packageName": "Microsoft.AspNet.WebApi.Client",
      "versionRange": "[5.2.2, )"
    },
    {
      "packageName": "Microsoft.AspNet.WebApi.Core",
      "versionRange": "[5.2.2, )"
    },
    {
      "packageName": "Newtonsoft.Json",
      "versionRange": "[6.0.5, )"
    },
    {
      "packageName": "Vssf.Client",
      "versionRange": "[14.81.0-preview, )"
    }
  ],
  "_links": {
    "self": {
      "href": "https://mytfsserver/DefaultCollection/_apis/Packaging/Feeds/ebe02934-8b9a-419b-bd8d-0cd33d7c86f4/Packages/e3d6b8ad-9a15-40cf-ab6c-d08a409bba6b/Versions"
    },
    "feed": {
      "href": "https://mytfsserver/DefaultCollection/_apis/Packaging/Feeds/ebe02934-8b9a-419b-bd8d-0cd33d7c86f4"
    },
    "package": {
      "href": "https://mytfsserver/DefaultCollection/_apis/Packaging/Feeds/ebe02934-8b9a-419b-bd8d-0cd33d7c86f4/Packages/e3d6b8ad-9a15-40cf-ab6c-d08a409bba6b"
    }
  },
  "id": "b8a2a277-f77b-4ef2-acfd-0c0e550af5f7",
  "normalizedVersion": "0.1.1",
  "version": "0.1.1",
  "isLatest": false,
  "isListed": true,
  "storageId": "BC547A2DDC1217DCD0EE1998A5C2410F0559B5746CCC37BAB2B8A21D88BE594400"
}
```


## Protocol Endpoints

We intend to provide a mechanism for retrieving protocol-specific packaging endpoints.
Until that mechanism exists, you may use a convention-based approach to convert a feed response into a NuGet endpoint URL.

For example, consider this feed response:

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


To construct the [NuGet v3](http://docs.nuget.org/) endpoint URL, take the organization name *contoso* and feed name *EngineeringInternal* and insert them into this URL template: `https://{account}.pkgs.visualstudio.com/DefaultCollection/_packaging/{feedName}/nuget/v3/index.json`

For example, the NuGet v3 endpoint for the feed shown above is `https://contoso.pkgs.visualstudio.com/DefaultCollection/_packaging/EngineeringInternal/nuget/v3/index.json`.

To construct the NuGet v2 endpoint URL, take the organization name *contoso* and feed name *EngineeringInternal* and insert them into this URL template: `https://{account}.pkgs.visualstudio.com/DefaultCollection/_packaging/{feedName}/nuget/v2`

For example, the NuGet v2 endpoint for the feed shown above is `https://contoso.pkgs.visualstudio.com/DefaultCollection/_packaging/EngineeringInternal/nuget/v2`.
