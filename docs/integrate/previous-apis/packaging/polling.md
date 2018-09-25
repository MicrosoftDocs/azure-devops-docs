---
title: Feed polling | REST API Reference for VSTS  
description: Work with feeds programmatically using the REST APIs for VSTS.  
ms.assetid: 12ea9aa2-0c5c-413b-b167-44cd16410cc6
ms.date: 09/29/2016
ms.prod: devops
ms.technology: devops-ecosystem
monikerRange: '>= tfs-2013 < vsts'
ms.manager: douge
ms.topic: article
ms.author: elbatk
author: elbatk
ms.date: 08/17/2016
---

# Feed Polling
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

[!code-REST [GET__packaging_feedchanges_json](./_data/feedchanges/GET__packaging_feedChanges.json)]

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

[!code-REST  [GET__packaging_feedchanges_feed_json](./_data/feedchanges/GET__packaging_feedchanges_feed.json)]

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

[!code-REST [GET__packaging_feedchanges_packagechanges_json](./_data/feedchanges/GET__packaging_feedchanges_packagechanges.json)]