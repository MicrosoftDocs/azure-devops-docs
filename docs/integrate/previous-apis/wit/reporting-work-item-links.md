---
ms.prod: devops
ms.technology: devops-ecosystem
monikerRange: '>= tfs-2015 < azure-devops'
title: Reporting Work Item Links | REST API Reference for Team Foundation Server
description: Report on work item links programmatically using the REST APIs for Team Foundation Server.
ms.assetid: 56c1dc20-c204-4550-8294-8d88b6a54aec
ms.manager: jillfra
ms.topic: article
ms.author: elbatk
author: elbatk
ms.date: 08/04/2016
---

# Work item links

[!INCLUDE [azure-devops](../_data/azure-devops-message.md)]

[!INCLUDE [API_version](../_data/version2-2.md)]


This API provides access to all work item links in your project or collection and allows you to build a warehouse.

The response of the API contains a batch of work item links ("values"), a URL to the next batch of work item links ("nextLink") and a boolean that tells you whether you have read all currently available work item links ("isLastBatch").

The workflow for building your warehouse is as follows:
  1. Make a request to the API without providing a watermark parameter
  2. Process the work item links returned by the API
  3. Persist "nextLink" and check "isLastBatch"
    * If "isLastBatch" is true, pause for a period of time (varies depending on your target latency)
  4. Make the next request using the URL from "nextLink"
  5. Go to step 2

## Get a batch of work item links

```no-highlight
GET https://{instance}/DefaultCollection/[{project}/]_apis/wit/reporting/workItemLinks?[continuationToken={string}]&[types={string}]&api-version={string}
```

| Property      | Type     | Description
|:--------------|:---------|:----------------------------
| URL
| instance      | string   | TFS server name ({server:port}).
| project       | string   | The result will contain all links where either source or target work item (or both) is in the specified project. The project can be specified by name or ID.
| Query
| continuationToken     | string   | Specifies the token to start the batch from. Omit this parameter to get the first batch of links.
| types         | string   | A comma-separated of work item types to return only those links that involve one of those types of work items. Omit this parameter to get work item links of all work item types.
| startDateTime | datetime | Date/time to use as a starting point for link changes. Only link changes that occurred after that date/time will be returned. Cannot be used in conjunction with 'watermark' parameter.
| api-version   | string   | [Version](../../concepts/rest-api-versioning.md) of the API to use.

Note: as of API version 2.2, the watermark property has been deprecated in favor of the continuationToken property. Existing watermark values can be passed in as the continuationToken to continue getting incremental updates when using the version 2.2 APIs.
API version 2.2 fixes an issue where certain links changes were not being exposed through the links reporting API.

#### Sample request

```
GET https://mytfsserver/DefaultCollection/_apis/wit/reporting/workItemLinks?api-version=2.2
```

#### Sample response

```json
{
  "values": [
    {
      "rel": "System.LinkTypes.Hierarchy",
      "sourceId": 7,
      "targetId": 8,
      "changedDate": "2014-03-18T17:17:52.02Z",
      "isActive": true
    },
    {
      "rel": "System.LinkTypes.Hierarchy",
      "sourceId": 7,
      "targetId": 9,
      "changedDate": "2014-03-18T17:18:03.007Z",
      "isActive": true
    },
    {
      "rel": "System.LinkTypes.Hierarchy",
      "sourceId": 10,
      "targetId": 13,
      "changedDate": "2014-03-18T17:21:27.623Z",
      "isActive": true
    }
  ],
  "nextLink": "https://mytfsserver/DefaultCollection/_apis/wit/reporting/workItemLinks?continuationToken=6281123&api-version=2.2",
  "isLastBatch": true
}
```
