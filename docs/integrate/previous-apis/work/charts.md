---
title: Charts for Kanban boards | REST API Reference for Team Foundation Server
description: Work with the charts on Kanban boards programmatically using the REST APIs for Team Foundation Server. 
ms.assetid: b23c71d1-7c01-4c29-a48d-a64c6f7a5560
ms.prod: devops
ms.technology: devops-ecosystem
monikerRange: '>= tfs-2015 < azure-devops'
ms.manager: jillfra
ms.topic: article
ms.author: elbatk
author: elbatk
ms.date: 08/04/2016
---

# Charts on a Kanban board

[!INCLUDE [azure-devops](../_data/azure-devops-message.md)]

[!INCLUDE [API_version](../_data/version2-preview1.md)]

[!INCLUDE [GET_STARTED](../_data/get-started.md)]

## Get charts on a board 
<a name="getchartsonaboard" />

```no-highlight
GET https://{instance}/DefaultCollection/{project}/{team}/_apis/work/boards/{board}/charts?api-version={api-version}
```

| Parameter | Type    |Default Value | Notes	
|:----------|:--------|:------------ |:------------------------------
| URL
| instance  | string  | | TFS server name ({server:port}).
| project   | string  | | Name or ID of a project.
| team	    | string  | Project's default team Id| Name or ID of a team within the project.
| board	| string  || Name or ID of the specific board.
| Query
| api-version | string  || [Version](../../concepts/rest-api-versioning.md) of the API to use.

#### Sample request

```
GET mytfsserver/defaultcollection/fabrikam/fabrikam%20team/_apis/work/boards/Stories/charts?api-version=2.0-preview.1
```

#### Sample response

```json
{
  "count": 1,
  "value": [
    {
      "name": "cumulativeFlow",
      "url": "mytfsserver/defaultcollection/bfeaf5d7-8bf6-4bc8-96c0-47a1727c7815/00f7c2e3-e13b-4e7d-8ecb-bb599e7a0764/_apis/work/boards/Stories/charts/cumulativeFlow"
    }
  ]
}
```


## Get a chart by name
<a name="getachartbyname" />

```no-highlight
GET https://{instance}/DefaultCollection/{project}/{team}/_apis/work/boards/{board}/charts/{chart}?api-version={api-version}
```

| Parameter | Type    |Default Value | Notes	
|:----------|:--------|:------------ |:------------------------------
| URL
| instance  | string  | | TFS server name ({server:port}).
| project   | string  | | Name or ID of a project.
| team	    | string  | Project's default team Id| Name or ID of a team within the project.
| board	| string  || Name or ID of the specific board.
| chart| enum (CumulativeFlow)|| Name of the specific chart.
| Query
| api-version | string  || [Version](../../concepts/rest-api-versioning.md) of the API to use.


#### Sample request

```
GET mytfsserver/defaultcollection/fabrikam/fabrikam%20team/_apis/work/boards/Stories/charts/cumulativeFlow?api-version=2.0-preview.1
```

#### Sample response

```json
{
  "name": "cumulativeFlow",
  "url": "mytfsserver/defaultcollection/bfeaf5d7-8bf6-4bc8-96c0-47a1727c7815/00f7c2e3-e13b-4e7d-8ecb-bb599e7a0764/_apis/work/boards/Stories/charts/cumulativeFlow",
  "settings": {
    "startDate": null,
    "hideIncomingColumn": false
  },
  "_links": {
    "self": {
      "href": "mytfsserver/defaultcollection/bfeaf5d7-8bf6-4bc8-96c0-47a1727c7815/00f7c2e3-e13b-4e7d-8ecb-bb599e7a0764/_apis/work/boards/Stories/charts/cumulativeFlow"
    },
    "board": {
      "href": "mytfsserver/defaultcollection/bfeaf5d7-8bf6-4bc8-96c0-47a1727c7815/00f7c2e3-e13b-4e7d-8ecb-bb599e7a0764/_apis/work/boards/Stories"
    }
  }
}
```


## Update a cumulative flow chart
<a name="updateacumulativeflowchart" />

```no-highlight
PATCH https://{instance}/DefaultCollection/{project}/{team}/_apis/work/boards/{board}/charts/CumulativeFlow?api-version={api-version}
```
```http
Content-Type: application/json
```
```json
{
  "settings": {
    "startDate": {startDate},
    "hideIncomingColumn": {hideIncomingColumn},
    "hideOutgoingColumn": {hideOutgoingColumn}
  }
}
```

| Parameter | Type    |Default Value | Notes	
|:----------|:--------|:--------|:------------------------------
| URL
| instance  | string  |   | TFS server name ({server:port}).
| project   | string  |  | Name or ID of a project.
| team	    | string  | Project's default team Id| Name or ID of a team within the project.
| board	| string  |  | Name or ID of the specific board.
| chart| enum (CumulativeFlow)| | Name of the specific chart.
| Query
| api-version | string  |  |[Version](../../concepts/rest-api-versioning.md) of the API to use.
| Body
| startDate	| date | null  |The start date of the CFD chart. The date will be stored as UTC, it is the consumers' responsibility to convert their date to UTC.
| hideIncomingColumn	| bool	| false | Indicate if the CFD chart should hide the incoming column.
| hideOutgoingColumn	| bool	| false | Indicate if the CFD chart should hide the outgoing column.

#### Sample request

```
PATCH mytfsserver/defaultcollection/fabrikam/fabrikam%20team/_apis/work/boards/Stories/charts/cumulativeFlow?api-version=2.0-preview.1
```
```json
{
  "settings": {
    "startDate": "2015-09-01T12:07:11Z",
    "hideIncomingColumn": true,
    "hideOutgoingColumn": true
  }
}
```

#### Sample response

```json
{
  "name": "cumulativeFlow",
  "url": "mytfsserver/defaultcollection/bfeaf5d7-8bf6-4bc8-96c0-47a1727c7815/00f7c2e3-e13b-4e7d-8ecb-bb599e7a0764/_apis/work/boards/Stories/charts/cumulativeFlow",
  "settings": {
    "startDate": "2015-09-01T12:07:11Z",
    "hideIncomingColumn": true,
    "hideOutgoingColumn": true
  },
  "_links": {
    "self": {
      "href": "mytfsserver/defaultcollection/bfeaf5d7-8bf6-4bc8-96c0-47a1727c7815/00f7c2e3-e13b-4e7d-8ecb-bb599e7a0764/_apis/work/boards/Stories/charts/cumulativeFlow"
    },
    "board": {
      "href": "mytfsserver/defaultcollection/bfeaf5d7-8bf6-4bc8-96c0-47a1727c7815/00f7c2e3-e13b-4e7d-8ecb-bb599e7a0764/_apis/work/boards/Stories"
    }
  }
}
```



## Q&A

<!-- BEGINSECTION class="md-qanda" -->

#### Q: Why do I only get the cumulative flow chart back?

A: The cumulative flow chart is the only chart supported at this point.

<!-- ENDSECTION --> 


