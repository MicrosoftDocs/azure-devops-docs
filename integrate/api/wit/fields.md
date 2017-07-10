---
ms.prod: vs-devops-alm
ms.technology: vs-devops-integrate
title: Work Item Fields | REST API Reference for Visual Studio Team Services and Team Foundation Server
description: Work with work item fields programmatically using the REST APIs for Visual Studio Team Services and Team Foundation Server. 
ms.assetid: A2365AB4-482A-46A5-A235-2D3C94C2ED96
ms.manager: douge
ms.author: elbatk
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
| instance      | string    | [VS Team Services account](/integrate/get-started/rest/basics.md#vs-team-services) ({account}.visualstudio.com) or [TFS server](/integrate/get-started/rest/basics.md#tfs) ({server:port}).
| Query
| api-version   | string    | [Version](../../get-started/rest/basics.md#versions) of the API to use.

[!code-REST [GET__wit_fields_json](./_data/fields/GET__wit_fields.json)]

#### Sample code

* [C# (GetReadonlyWorkItemFields method)](https://github.com/Microsoft/vsts-dotnet-samples/blob/master/Microsoft.TeamServices.Samples.Client/WorkItemTracking/FieldsSample.cs#L40)

## Get a work item field

```no-highlight
GET https://{instance}/DefaultCollection/_apis/wit/fields/{fieldName}?api-version={version}
```

| Property  	| Type 		| Description 
|:--------------|:----------|:----------------------------
| instance      | string    | [VS Team Services account](/integrate/get-started/rest/basics.md#vs-team-services) ({account}.visualstudio.com) or [TFS server](/integrate/get-started/rest/basics.md#tfs) ({server:port}).
| fieldName     | string    | Refernce name of the field
| Query
| api-version   | string    | [Version](../../get-started/rest/basics.md#versions) of the API to use.

[!code-REST [GET__wit_fields__fieldName__json](./_data/fields/GET__wit_fields__fieldName_.json)]

#### Sample code

* [C# (GetFieldDetails method)](https://github.com/Microsoft/vsts-dotnet-samples/blob/master/Microsoft.TeamServices.Samples.Client/WorkItemTracking/FieldsSample.cs#L40)
