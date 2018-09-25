---
ms.prod: devops
ms.technology: devops-ecosystem
monikerRange: '>= tfs-2013 < vsts'
title: Work Item Fields | REST API Reference for Team Foundation Server
description: Work with work item fields programmatically using the REST APIs for Team Foundation Server. 
ms.assetid: A2365AB4-482A-46A5-A235-2D3C94C2ED96
ms.manager: douge
ms.topic: article
ms.author: elbatk
author: elbatk
ms.date: 08/04/2016
---

# Work item fields
[!INCLUDE [API_version](../_data/version.md)]

[!INCLUDE [GET_STARTED](../_data/get-started.md)]

## Get a list of work item fields

```no-highlight
GET https://{instance}/DefaultCollection/_apis/wit/fields?api-version={version}
```

| Property  	| Type 		| Description 
|:--------------|:----------|:----------------------------
| URL
| instance      | string    | TFS server name ({server:port}).
| Query
| api-version   | string    | [Version](../../concepts/rest-api-versioning.md) of the API to use.

[!code-REST [GET__wit_fields_json](./_data/fields/GET__wit_fields.json)]

#### Sample code

* [C# (GetReadonlyWorkItemFields method)](https://github.com/Microsoft/vsts-dotnet-samples/blob/master/ClientLibrary/Snippets/Microsoft.TeamServices.Samples.Client/WorkItemTracking/FieldsSample.cs#L40)

## Get a work item field

```no-highlight
GET https://{instance}/DefaultCollection/_apis/wit/fields/{fieldName}?api-version={version}
```

| Property  	| Type 		| Description 
|:--------------|:----------|:----------------------------
| instance      | string    | TFS server name ({server:port}).
| fieldName     | string    | Refernce name of the field
| Query
| api-version   | string    | [Version](../../concepts/rest-api-versioning.md) of the API to use.

[!code-REST [GET__wit_fields__fieldName__json](./_data/fields/GET__wit_fields__fieldName_.json)]

#### Sample code

* [C# (GetFieldDetails method)](https://github.com/Microsoft/vsts-dotnet-samples/blob/master/ClientLibrary/Snippets/Microsoft.TeamServices.Samples.Client/WorkItemTracking/FieldsSample.cs#L40)
