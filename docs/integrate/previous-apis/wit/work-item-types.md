---
ms.prod: devops
ms.technology: devops-ecosystem
monikerRange: '>= tfs-2013 < vsts'
title: Work Item Types | REST API Reference for Team Foundation Server
description: Work with work item types programmatically using the REST APIs for Team Foundation Server. 
ms.assetid: C58D078F-9310-4BE9-95A5-715CB70370FD
ms.manager: douge
ms.topic: article
ms.author: elbatk
author: elbatk
ms.date: 08/04/2016
---

# Work item types
[!INCLUDE [API_version](../_data/version.md)]

[!INCLUDE [GET_STARTED](../_data/get-started.md)]

## Get a list of work item types
<a name="getalistofworkitemtypes" />

```no-highlight
GET https://{instance}/DefaultCollection/{project}/_apis/wit/workItemTypes?api-version={version}
```

| Property  	| Type 		| Description 
|:--------------|:----------|:---------------------------
| URL
| instance      | string    | TFS server name ({server:port}).
| project 		| string 	| Name or ID of a project that contains the work item types
| Query
| api-version   | string | [Version](../../concepts/rest-api-versioning.md) of the API to use.

[!code-REST [GET__wit_workItemTypes_json](./_data/workItemTypes/GET__wit_workItemTypes.json)]

## Get a work item type
<a name="getaworkitemtype" />

```no-highlight
GET https://{instance}/DefaultCollection/{project}/_apis/wit/workItemTypes/{name}?api-version={version}
```

| Property | Type   | Description |
|:---------|:-------|:---------------------------
| URL
| instance | string	| TFS server name ({server:port}).
| project  | string | Name or ID of a project that contains the work item types
| name 	   | string | Name of the work item type
| Query
| api-version | string | [Version](../../concepts/rest-api-versioning.md) of the API to use.

[!code-REST [GET__wit_workItemTypes_Bug_json](./_data/workItemTypes/GET__wit_workItemTypes_Bug.json)]
