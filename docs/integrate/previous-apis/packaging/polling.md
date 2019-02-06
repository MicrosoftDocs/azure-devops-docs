---
title: Feed polling | REST API Reference for VSTS  
description: Work with feeds programmatically using the REST APIs for VSTS.  
ms.assetid: 12ea9aa2-0c5c-413b-b167-44cd16410cc6
ms.date: 09/29/2016
ms.prod: devops
ms.technology: devops-ecosystem
monikerRange: '>= tfs-2015 < azure-devops'
ms.manager: jillfra
ms.topic: article
ms.author: elbatk
author: elbatk
ms.date: 08/17/2016
---

# Feed Polling

[!INCLUDE [azure-devops](../_data/azure-devops-message.md)]

[!INCLUDE [API_version](../_data/version2-preview1.md)]

[!INCLUDE [disclaimer](../_data/disclaimer.md)]

These APIs can help you stay up-to-date with the contents of a feed or feeds.

## Poll all feeds for updates 

```no-highlight
GET https://{account}.Feeds.VisualStudio.com/DefaultCollection/_apis/packaging/feedChanges?api-version={version}
```

| Parameter | Type    | Notes
|:----------|:--------|:-------------------------------------------------------------------------------------------------------------
| URL                        
| account   | string  | VSTS organization.
| Query
| includeDeleted | boolean | If true, get changes for all feeds including deleted feeds. The default value is false.
| continuationToken          | long    |  A continuation token which acts as a bookmark to a previously retrieved change. This token allows the user to continue retrieving changes in batches, picking up where the previous batch left off. If specified, all the changes that occur strictly after the token will be returned. If not specified or 0, iteration will start with the first change.
| batchSize	     | int     | Number of feed changes to fetch. The default value is 1000. The maximum value is 2000. 
| api-version    | string  | Version of the API to use.

#### Sample request

```
GET https://mytfsserver/DefaultCollection/_apis/packaging/feedChanges?api-version=2.0-preview.1
```

#### Sample response

```json
{
  "count": 2,
  "feedchanges": [
    {
      "feed": {
        "id": "64ccc8b7-705d-48f7-a91c-d9be3cd36468",
        "name": "EngineeringInternal",
        "description": "Contains packages internal to the engineering organization",
        "upstreamEnabled": false,
        "url": "https://mytfsserver/DefaultCollection/_apis/Packaging/Feeds/64ccc8b7-705d-48f7-a91c-d9be3cd36468"
      },
      "changeType": "addOrUpdate",
      "feedContinuationToken": 1,
      "latestPackageContinuationToken": 2000
    },
    {
      "feed": {
        "id": "1ff10ae7-62f5-487c-8040-feeee696cddb",
        "name": "EngineeringExternal",
        "description": "Contains packages external to the engineering organization",
        "upstreamEnabled": false,
        "url": "https://mytfsserver/DefaultCollection/_apis/Packaging/Feeds/1ff10ae7-62f5-487c-8040-feeee696cddb"
      },
      "changeType": "addOrUpdate",
      "feedContinuationToken": 2,
      "latestPackageContinuationToken": 3000
    }
  ],
  "nextFeedContinuationToken": 2,
  "_links": {
    "next": {
      "href": "https://mytfsserver/DefaultCollection/_apis/Packaging/FeedChanges?continuationtoken=2&batchSize=1000"
    }
  }
}
```


## Poll a feed for metadata updates

```no-highlight
GET https://{account}.Feeds.VisualStudio.com/DefaultCollection/_apis/packaging/feedChanges/{feed}?api-version={version}
```

| Parameter   | Type   | Notes
|:------------|:-------|:-------------------------------------------------------------------------------------------------------------
| URL
| account   | string  | VSTS organization.
| feed        | string | Name or ID of feed.
| Query
| api-version | string | Version of the API to use.

#### Sample request

```
GET https://mytfsserver/DefaultCollection/_apis/packaging/feedChanges/EngineeringInternal?api-version=2.0-preview.1
```

#### Sample response

```json
{
  "feed": {
    "id": "64ccc8b7-705d-48f7-a91c-d9be3cd36468",
    "name": "EngineeringInternal",
    "description": "Contains packages internal to the engineering organization",
    "upstreamEnabled": "false",
    "url": "https://mytfsserver/DefaultCollection/_apis/Packaging/Feeds/64ccc8b7-705d-48f7-a91c-d9be3cd36468"
  },
  "changeType": "addOrUpdate",
  "feedContinuationToken": 1,
  "latestPackageContinuationToken": 2000
}
```


## Poll a feed for package updates

```no-highlight
GET https://{account}.Feeds.VisualStudio.com/DefaultCollection/_apis/packaging/feeds/{feed}/packageChanges?api-version={version}
```

| Parameter   | Type   | Notes
|:------------|:-------|:-------------------------------------------------------------------------------------------------------------
| URL
| account   | string  | VSTS organization.
| feed         | string | Name or ID of feed.
| Query
| continuationToken        | long   | A continuation token which acts as a bookmark to a previously retrieved change. This token allows the user to continue retrieving changes in batches, picking up where the previous batch left off.  If specified, all the changes that occur strictly after the token will be returned. If not specified or 0, iteration will start with the first change.
| batchSize	   | int    | Number of package changes to fetch. The default value is 1000. The maximum value is 2000.
| api-version  | string | Version of the API to use.

#### Sample request

```
GET https://mytfsserver/DefaultCollection/_apis/packaging/feeds/EngineeringInternal/packageChanges?api-version=2.0-preview.1
```

#### Sample response

```json
{
  "count": 2,
  "packageChanges": [
    {
      "package": {
        "id": "1c3db219-57b8-4ff6-9966-04cf20d0c3c2",
        "normalizedName": "testpackage",
        "name": "TestPackage",
        "protocolType": "NuGet"
      },
      "packageVersionChange": {
        "packageVersion": {
          "id": "70427b86-1c84-436c-ad3b-b49c9b92c65b",
          "normalizedVersion": "1.0.0",
          "version": "1.0.0",
          "summary": "this is for testing",
          "description": "this is test package v1.0.0",
          "author": "testauthor",
          "publishDate": "2015-11-07T01:10:50.8157964Z",
          "isListed": true
        },
        "changeType": "addOrUpdate",
        "continuationToken": 1
      }
    },
    {
      "package": {
        "id": "1c3db219-57b8-4ff6-9966-04cf20d0c3c2",
        "normalizedName": "testpackage",
        "name": "TestPackage",
        "protocolType": "NuGet"
      },
      "packageVersionChange": {
        "packageVersion": {
          "id": "9f2d11b4-4b1b-4f2f-8c02-88205630007a",
          "normalizedVersion": "1.0.1",
          "version": "1.0.1",
          "summary": "this is for testing",
          "description": "this is test package v1.0.1",
          "author": "testauthor",
          "publishDate": "2015-11-07T01:12:18.1266668Z",
          "isListed": true
        },
        "changeType": "addOrUpdate",
        "continuationToken": 2
      }
    }
  ],
  "nextPackageContinuationToken": 2,
  "_links": {
    "next": {
      "href": "https://mytfsserver/DefaultCollection/_apis/Packaging/Feeds/64ccc8b7-705d-48f7-a91c-d9be3cd36468/PackageChanges?continuationtoken=2&batchSize=1000"
    }
  }
}
```
