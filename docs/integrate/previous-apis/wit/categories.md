---
ms.prod: devops
ms.technology: devops-ecosystem
monikerRange: '>= tfs-2013 < vsts'
title: Work Item Type Categories | REST API Reference for Team Foundation Server
description: Work with categories of work item types programmatically using the REST APIs for Team Foundation Server. 
ms.assetid: 5DACB173-F971-4288-8EBD-29B4EF98237C
ms.manager: douge
ms.topic: article
ms.author: elbatk
author: elbatk
ms.date: 08/04/2016
---

# Categories of work item types
[!INCLUDE [API_version](../_data/version.md)]

[Categories](http://msdn.microsoft.com/en-us/library/dd695775.aspx) define the set of work item types that are used in a specific role in your project.
For example, work item types in the "requirements" category show up in your backlog.

[!INCLUDE [GET_STARTED](../_data/get-started.md)]

## Get a list of work item type categories
<a name="getalistofworkitemtypecategories" />
```no-highlight
GET https://{instance}/DefaultCollection/{project}/_apis/wit/workItemTypeCategories?api-version={version}
```

| Property  	| Type 		| Description 
|:--------------|:----------|:-----------------
| URL
| instance      | string    | TFS server name ({server:port}).
| project 		| string 	| Name or ID of a project that contains the categories
| Query
| api-version   | string    | [Version](../../concepts/rest-api-versioning.md) of the API to use.

[!code-REST [GET__wit_workItemTypeCategories_json](./_data/categories/GET__wit_workItemTypeCategories.json)]

#### Sample code

* [C# (GetListOfWorkItemTypeCategories method)](https://github.com/Microsoft/vsts-dotnet-samples/blob/master/ClientLibrary/Snippets/Microsoft.TeamServices.Samples.Client/WorkItemTracking/WorkItemTypeCategoriesSample.cs#L23)

## Get a work item type category
<a name="getaworkitemtypecategory" />

```no-highlight
GET https://{instance}/DefaultCollection/{project}/_apis/wit/workItemTypeCategories/{name}?api-version={version}
```

| Property  | Type 		| Description |
|:--------------|:----------|:-----------------
| instance  | string    | TFS server name ({server:port}).
| project 	| string 	| Name or ID of a project that contains the categories
| name 		| string 	| Name of the category
| Query
| api-version | string  | [Version](../../concepts/rest-api-versioning.md) of the API to use.

[!code-REST [GET__wit_workItemTypeCategories__categoryName__json](./_data/categories/GET__wit_workItemTypeCategories__categoryName_.json)]

#### Sample code

* [C# (GetWorkItemCategory method)](https://github.com/Microsoft/vsts-dotnet-samples/blob/master/ClientLibrary/Snippets/Microsoft.TeamServices.Samples.Client/WorkItemTracking/WorkItemTypeCategoriesSample.cs#L43)
