---
ms.prod: vs-devops-alm
ms.technology: vs-devops-integrate
title: Work Item Types | REST API Reference for Visual Studio Team Services and Team Foundation Server
description: Work with work item types programmatically using the REST APIs for Visual Studio Team Services and Team Foundation Server. 
ms.assetid: C58D078F-9310-4BE9-95A5-715CB70370FD
ms.manager: douge
ms.author: elbatk
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
| instance      | string    | [VS Team Services account](/integrate/get-started/rest/basics.md#vs-team-services) ({account}.visualstudio.com) or [TFS server](/integrate/get-started/rest/basics.md#tfs) ({server:port}).
| project 		| string 	| Name or ID of a team project that contains the work item types
| Query
| api-version   | string | [Version](../../get-started/rest/basics.md#versions) of the API to use.

[!code-REST [GET__wit_workItemTypes_json](./_data/workItemTypes/GET__wit_workItemTypes.json)]

## Get a work item type
<a name="getaworkitemtype" />

```no-highlight
GET https://{instance}/DefaultCollection/{project}/_apis/wit/workItemTypes/{name}?api-version={version}
```

| Property | Type   | Description |
|:---------|:-------|:---------------------------
| URL
| instance | string	| [VS Team Services account](/integrate/get-started/rest/basics.md#vs-team-services) ({account}.visualstudio.com) or [TFS server](/integrate/get-started/rest/basics.md#tfs) ({server:port}).
| project  | string | Name or ID of a team project that contains the work item types
| name 	   | string | Name of the work item type
| Query
| api-version | string | [Version](../../get-started/rest/basics.md#versions) of the API to use.

[!code-REST [GET__wit_workItemTypes_Bug_json](./_data/workItemTypes/GET__wit_workItemTypes_Bug.json)]
