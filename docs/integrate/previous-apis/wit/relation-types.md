---
ms.prod: devops
ms.technology: devops-ecosystem
monikerRange: '>= tfs-2013 < vsts'
title: Work Item Relation Types | REST API Reference for Team Foundation Server
description: Work with work item relation types programmatically using the REST APIs for Team Foundation Server. 
ms.assetid: D5EAD6ED-8972-4A9F-A5EE-369C1C77E996
ms.manager: douge
ms.topic: article
ms.author: elbatk
author: elbatk
ms.date: 08/04/2016
---

# Work item relation types
[!INCLUDE [API_version](../_data/version.md)]

Relation types define the types of associations work items can have with work items and other resources,
but especially [links between two work items](http://msdn.microsoft.com/en-us/library/dd293534.aspx).

[!INCLUDE [GET_STARTED](../_data/get-started.md)]

## Get a list of relation types
<a name="getalistofrelationtypes" />

```no-highlight
GET https://{instance}/DefaultCollection/_apis/wit/workItemRelationTypes?api-version={version}
```

| Property  	| Type 		| Description 
|:--------------|:----------|:---------------------------
| URL
| instance      | string    | TFS server name ({server:port}).
| Query
| api-version   | string    | [Version](../../concepts/rest-api-versioning.md) of the API to use.

[!code-REST [GET__wit_workItemRelationTypes_json](./_data/relationTypes/GET__wit_workItemRelationTypes.json)]


## Get a relation type

```no-highlight
GET https://{instance}/DefaultCollection/_apis/wit/workItemRelationTypes/{name}?api-version={version}
```

| Property  	| Type 		| Description 
|:--------------|:----------|:---------------------------
| URL
| instance      | string    | TFS server name ({server:port}).
| name          | string    | The name of the relationship.
| Query
| api-version   | string    | [Version](../../concepts/rest-api-versioning.md) of the API to use.

[!code-REST [GET__wit_workItemRelationTypes__relationName__json](./_data/relationTypes/GET__wit_workItemRelationTypes__relationName_.json)]
