---
ms.prod: devops
ms.technology: devops-ecosystem
monikerRange: '>= tfs-2013 < vsts'
title: Work Item Areas and Iterations | REST API Reference for Team Foundation Server
description: Work with work item areas and iterations programmatically using the REST APIs for Team Foundation Server. 
ms.assetid: 8AD3C764-692D-440D-8133-311CD6A0FC94
ms.manager: douge
ms.topic: article
ms.author: elbatk
author: elbatk
ms.date: 08/04/2016
---

# Work item classification nodes
[!INCLUDE [API_version](../_data/version.md)]

All work items have an area and an iteration field. 
The values that these fields can have are defined in the [classification hierarchies](http://msdn.microsoft.com/en-us/library/ms181692.aspx). 

[!INCLUDE [GET_STARTED](../_data/get-started.md)]

## Get a list of classification nodes

```no-highlight
GET https://{instance}/DefaultCollection/{project}/_apis/wit/classificationnodes/{nodeType}/[{nodePath}]?api-version={version}[&$depth={int}]
```

| Property  	| Type 		| Description |
|:--------------|:----------|:------------
| URL
| instance      | string    | TFS server name ({server:port}).
| project 		| string 	| Name or ID of a project that contains the classification nodes. |
| nodeType		| enum {areas, iterations} | The type of classification node you are trying access. |
| nodePath      | string    | Path of the classification node. |
| Query
| api-version   | string    | [Version](../../concepts/rest-api-versioning.md) of the API to use.
| $depth		| int		| Depth of children to retrieve.  

### Get the root area tree
[!code-REST [GET__wit_classificationnodes_areas_json](./_data/classificationnodes/GET__wit_classificationnodes_areas.json)]
<a name="gettheareatreeroot" />

### Get the area tree with 2 levels of children
<a name="gettheareatreewith2levelsofchildren" />
[!code-REST [GET__wit_classificationnodes_areas__depth-2_json](./_data/classificationnodes/GET__wit_classificationnodes_areas__depth-2.json)]

#### Sample code

* [C# (ListAreas method)](https://github.com/Microsoft/vsts-dotnet-samples/blob/master/ClientLibrary/Snippets/Microsoft.TeamServices.Samples.Client/WorkItemTracking/ClassificationNodesSample.cs#L20)

### Get the root iteration tree
<a name="gettheiterationroot" />
[!code-REST [GET__wit_classificationnodes_iterations_json](./_data/classificationnodes/GET__wit_classificationnodes_iterations.json)]

### Get the iteration tree with 2 levels of children
<a name="gettheiterationtreewith2levelsofchildren" />
[!code-REST [GET__wit_classificationnodes_iterations__depth-2_json](./_data/classificationnodes/GET__wit_classificationnodes_iterations__depth-2.json)]

#### Sample code

* [C# (ListIterations method)](https://github.com/Microsoft/vsts-dotnet-samples/blob/master/ClientLibrary/Snippets/Microsoft.TeamServices.Samples.Client/WorkItemTracking/ClassificationNodesSample.cs#L40)

## Get a classification node

```no-highlight
GET https://{instance}/DefaultCollection/{project}/_apis/wit/classificationnodes/{nodeType}/{nodePath}?api-version={version}[&$depth={int}]
```

| Parameter Name| Type 		| Description 	|
|:--------------|:----------|:------------
| URL
| instance      | string    | TFS server name ({server:port}).
| project 		| string 	| Name or ID of a project that contains the classification nodes. |
| nodeType		| enum {areas, iterations} | The type of classification node you are trying access. |
| nodePath      | string 	| Path of the classification node. |
| Query
| api-version   | string    | [Version](../../concepts/rest-api-versioning.md) of the API to use.
| $depth		| int		| Depth of children to retrieve.  

### Get an area
[!code-REST [GET__wit_classificationnodes_areas__areaPath__json](./_data/classificationnodes/GET__wit_classificationnodes_areas__areaPath_.json)]

#### Sample code

* [C# (GetArea method)](https://github.com/Microsoft/vsts-dotnet-samples/blob/master/ClientLibrary/Snippets/Microsoft.TeamServices.Samples.Client/WorkItemTracking/ClassificationNodesSample.cs#L266)

### Get an iteration
[!code-REST [GET__wit_classificationnodes_iterations__iterationPath__json](./_data/classificationnodes/GET__wit_classificationnodes_iterations__iterationPath_.json)]

#### Sample code

* [C# (GetIteration method)](https://github.com/Microsoft/vsts-dotnet-samples/blob/master/ClientLibrary/Snippets/Microsoft.TeamServices.Samples.Client/WorkItemTracking/ClassificationNodesSample.cs#L291)

## Create a classification node

```no-highlight
POST https://{instance}/DefaultCollection/{project}/_apis/wit/classificationnodes/{nodeType}/{nodePath}?api-version={version}[&$depth={int}]
```

| Parameter Name| Type          		| Description 	|
|:--------------|:--------------------|:------------
| URL
| instance      | string              | TFS server name ({server:port}).
| project 		| string			  | Name or ID of a project that contains the classification nodes. |
| nodeType		| enum {areas, iterations} | The type of classification node you are trying access. |
| nodePath      | string 			  | Path of the classification nodes. |
| Query
| api-version   | string              | [Version](../../concepts/rest-api-versioning.md) of the API to use.
| Body
| name          | string              | Name of the classification node. |
| attributes    | array of name/value pairs | Additional attributes of the node. E.g. startDate and finishDate for iterations.

### Create an area

[!code-REST [POST__wit_classificationnodes_iterations__areaPath__json](./_data/classificationnodes/POST__wit_classificationnodes_areas.json)]

#### Sample code

* [C# (CreateArea method)](https://github.com/Microsoft/vsts-dotnet-samples/blob/master/ClientLibrary/Snippets/Microsoft.TeamServices.Samples.Client/WorkItemTracking/ClassificationNodesSample.cs#L74)

### Create an iteration

[!code-REST [POST__wit_classificationnodes_iterations__iterationPath__json](./_data/classificationnodes/POST__wit_classificationnodes_iterations.json)]

#### Sample code

* [C# (CreateIteration method)](https://github.com/Microsoft/vsts-dotnet-samples/blob/master/ClientLibrary/Snippets/Microsoft.TeamServices.Samples.Client/WorkItemTracking/ClassificationNodesSample.cs#L118)

## Update a classification node

```no-highlight
PATCH https://{instance}/DefaultCollection/{project}/_apis/wit/classificationnodes/{nodeType}/{nodePath}?api-version={version}
```

| Parameter Name| Type          		| Description 	|
|:--------------|:--------------------|:------------
| URL
| instance      | string              | TFS server name ({server:port}).
| project 		| string              | Name or ID of a project that contains the classification nodes. |
| nodeType		| enum {areas, iterations} | The type of classification node you are trying access. |
| nodePath      | string 	          | Path of the classification nodes. |
| Query
| api-version   | string              | [Version](../../concepts/rest-api-versioning.md) of the API to use.
| Body
| name          | string              | Name of the classification node. |
| attributes    | array of name/value pairs | Additional attributes of the node. E.g. startDate and finishDate for iterations.

<a name="updateIteration"></a>
### Update iteration dates

Start and end dates for iterations can be accessed and set through the startDate and finishDate attributes on iteration nodes.

[!code-REST [PATCH__wit_classificationnodes_iterations__iterationPathNew_json](./_data/classificationnodes/PATCH__wit_classificationnodes_iterations__iterationPathNew_.json)]

#### Sample code

* [C# (UpdateIterationDates method)](https://github.com/Microsoft/vsts-dotnet-samples/blob/master/ClientLibrary/Snippets/Microsoft.TeamServices.Samples.Client/WorkItemTracking/ClassificationNodesSample.cs#L227)

### Rename a classification node

[!code-REST [PATCH__wit_classificationnodes_areas__areaPath_json](./_data/classificationnodes/PATCH__wit_classificationnodes_areas__areaPath_.json)]

#### Sample code

* [C# (RenameArea method)](https://github.com/Microsoft/vsts-dotnet-samples/blob/master/ClientLibrary/Snippets/Microsoft.TeamServices.Samples.Client/WorkItemTracking/ClassificationNodesSample.cs#L154)
* [C# (RenameIteration method)](https://github.com/Microsoft/vsts-dotnet-samples/blob/master/ClientLibrary/Snippets/Microsoft.TeamServices.Samples.Client/WorkItemTracking/ClassificationNodesSample.cs#L191)

## Move a classification node

```no-highlight
POST https://{instance}/DefaultCollection/{project}/_apis/wit/classificationnodes/{nodeType}/{targetNodeName}?api-version={version}
```

| Parameter Name| Type          		| Description 	|
|:--------------|:--------------------|:------------
| URL
| instance      | string              | TFS server name ({server:port}).
| project 	| string                  | Name or ID of a project that contains the classification nodes. |
| nodeType	| enum {areas, iterations} | The type of classification node you are trying access. |
| targetNodePath| string 	          | Path of the target parent classification node.  |
| Query
| api-version   | string              | [Version](../../concepts/rest-api-versioning.md) of the API to use.
| Body
| id            | int                 | ID of the node being moved.

### Move an area node

[!code-REST [POST__wit_classificationnodes_areas__areaParent__json](./_data/classificationnodes/POST__wit_classificationnodes_areas__areaParent_.json)]

#### Sample code

* [C# (MoveArea method)](https://github.com/Microsoft/vsts-dotnet-samples/blob/master/ClientLibrary/Snippets/Microsoft.TeamServices.Samples.Client/WorkItemTracking/ClassificationNodesSample.cs#L315)

### Move an iteration node

[!code-REST [POST__wit_classificationnodes_iterations__iterationParent__json](./_data/classificationnodes/POST__wit_classificationnodes_iterations__iterationParent_.json)]

## Delete a classification node

```no-highlight
DELETE https://{instance}/DefaultCollection/{project}/_apis/wit/classificationnodes/{nodeType}/{nodePath}?api-version={version}[?$reclassifyId={reclassifyId}]
```

| Parameter Name       | Type          		      | Description 	|
|:--------------       |:--------------------     |:------------
| URL
| instance             | string                   | TFS server name ({server:port}).
| project              | string                   | Name or ID of a project that contains the classification nodes. |
| nodeType		       | enum {areas, iterations} | The type of classification node you are trying access. |
| nodePath             | string 	              | Path of the classification nodes.|
| Query
| api-version		   | string                   | [Version](../../concepts/rest-api-versioning.md) of the API to use.
| reclassifyId         | string                   | ID of the node where work items of the deleted node are moved. 

### Delete an area node

[!code-REST [DELETE__wit_classificationNodes_areas__areaParent___reclassifyId-_rootAreaId_](./_data/classificationnodes/DELETE__wit_classificationNodes_areas__areaParent___reclassifyId-_rootAreaId_.json)]

#### Sample code

* [C# (DeleteArea method)](https://github.com/Microsoft/vsts-dotnet-samples/blob/master/ClientLibrary/Snippets/Microsoft.TeamServices.Samples.Client/WorkItemTracking/ClassificationNodesSample.cs#L339)

###Delete an iteration node

[!code-REST [DELETE__wit_classificationNodes_iterations__iterationParent___reclassifyId-_rootIterationId_](./_data/classificationnodes/DELETE__wit_classificationNodes_iterations__iterationParent___reclassifyId-_rootIterationId_.json)]

#### Sample code
* [C# (DeleteIteration method)](https://github.com/Microsoft/vsts-dotnet-samples/blob/master/ClientLibrary/Snippets/Microsoft.TeamServices.Samples.Client/WorkItemTracking/ClassificationNodesSample.cs#L339)

## Samples

### Getting Started
<a name="samples-getting-started" />

If this is your first time using the REST API's or .Net Libraries, check out the [getting started sample](../../get-started/rest/samples.md) first.

>All sample source code can be found in [our GitHub repo](https://github.com/Microsoft/vsts-restapi-samplecode).

### Get Full Area or Iteration Tree
<a name="samples-get-tree" />

Get the full tree of area paths. You can do the same with iterations by changing the type to ```Iterations```.

* [C# (GetFullTree method)](https://github.com/Microsoft/vsts-dotnet-samples/blob/master/ClientLibrary/Snippets/Microsoft.TeamServices.Samples.Client/WorkItemTracking/ClassificationNodesSample.cs#L391)