---
ms.prod: devops
ms.technology: devops-ecosystem
monikerRange: '>= tfs-2015 < azure-devops'
title: Work Item Areas and Iterations | REST API Reference for Team Foundation Server
description: Work with work item areas and iterations programmatically using the REST APIs for Team Foundation Server. 
ms.assetid: 8AD3C764-692D-440D-8133-311CD6A0FC94
ms.manager: jillfra
ms.topic: article
ms.author: elbatk
author: elbatk
ms.date: 08/04/2016
---

# Work item classification nodes

[!INCLUDE [azure-devops](../_data/azure-devops-message.md)]

[!INCLUDE [API_version](../_data/version.md)]

All work items have an area and an iteration field. 
The values that these fields can have are defined in the [classification hierarchies](http://msdn.microsoft.com/library/ms181692.aspx). 

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
#### Sample request

```
GET https://mytfsserver/DefaultCollection/Fabrikam-Fiber-Git/_apis/wit/classificationNodes/areas?api-version=1.0
```

#### Sample response

```json
{
  "id": 3568,
  "name": "Fabrikam-Fiber-Git",
  "structureType": "area",
  "hasChildren": true,
  "_links": {
    "self": {
      "href": "https://mytfsserver/DefaultCollection/6ce954b1-ce1f-45d1-b94d-e6bf2464ba2c/_apis/wit/classificationNodes/Areas"
    }
  },
  "url": "https://mytfsserver/DefaultCollection/6ce954b1-ce1f-45d1-b94d-e6bf2464ba2c/_apis/wit/classificationNodes/Areas"
}
```

<a name="gettheareatreeroot" />

### Get the area tree with 2 levels of children
<a name="gettheareatreewith2levelsofchildren" />
#### Sample request

```
GET https://mytfsserver/DefaultCollection/Fabrikam-Fiber-Git/_apis/wit/classificationNodes/areas?$depth=2&api-version=1.0
```

#### Sample response

```json
{
  "id": 3568,
  "name": "Fabrikam-Fiber-Git",
  "structureType": "area",
  "hasChildren": true,
  "children": [
    {
      "id": 4482,
      "name": "Devices",
      "structureType": "area",
      "hasChildren": true,
      "children": [
        {
          "id": 4483,
          "name": "Windows Phone",
          "structureType": "area",
          "hasChildren": false,
          "url": "https://mytfsserver/DefaultCollection/6ce954b1-ce1f-45d1-b94d-e6bf2464ba2c/_apis/wit/classificationNodes/Areas/Devices/Windows%20Phone"
        },
        {
          "id": 4484,
          "name": "Surface",
          "structureType": "area",
          "hasChildren": false,
          "url": "https://mytfsserver/DefaultCollection/6ce954b1-ce1f-45d1-b94d-e6bf2464ba2c/_apis/wit/classificationNodes/Areas/Devices/Surface"
        },
        {
          "id": 4485,
          "name": "iPhone",
          "structureType": "area",
          "hasChildren": false,
          "url": "https://mytfsserver/DefaultCollection/6ce954b1-ce1f-45d1-b94d-e6bf2464ba2c/_apis/wit/classificationNodes/Areas/Devices/iPhone"
        }
      ],
      "url": "https://mytfsserver/DefaultCollection/6ce954b1-ce1f-45d1-b94d-e6bf2464ba2c/_apis/wit/classificationNodes/Areas/Devices"
    },
    {
      "id": 4486,
      "name": "Website",
      "structureType": "area",
      "hasChildren": false,
      "url": "https://mytfsserver/DefaultCollection/6ce954b1-ce1f-45d1-b94d-e6bf2464ba2c/_apis/wit/classificationNodes/Areas/Website"
    },
    {
      "id": 4487,
      "name": "Backend",
      "structureType": "area",
      "hasChildren": true,
      "children": [
        {
          "id": 4488,
          "name": "Database",
          "structureType": "area",
          "hasChildren": false,
          "url": "https://mytfsserver/DefaultCollection/6ce954b1-ce1f-45d1-b94d-e6bf2464ba2c/_apis/wit/classificationNodes/Areas/Backend/Database"
        },
        {
          "id": 4489,
          "name": "Middle-tier",
          "structureType": "area",
          "hasChildren": false,
          "url": "https://mytfsserver/DefaultCollection/6ce954b1-ce1f-45d1-b94d-e6bf2464ba2c/_apis/wit/classificationNodes/Areas/Backend/Middle-tier"
        }
      ],
      "url": "https://mytfsserver/DefaultCollection/6ce954b1-ce1f-45d1-b94d-e6bf2464ba2c/_apis/wit/classificationNodes/Areas/Backend"
    }
  ],
  "_links": {
    "self": {
      "href": "https://mytfsserver/DefaultCollection/6ce954b1-ce1f-45d1-b94d-e6bf2464ba2c/_apis/wit/classificationNodes/Areas"
    }
  },
  "url": "https://mytfsserver/DefaultCollection/6ce954b1-ce1f-45d1-b94d-e6bf2464ba2c/_apis/wit/classificationNodes/Areas"
}
```


#### Sample code

* [C# (ListAreas method)](https://github.com/Microsoft/vsts-dotnet-samples/blob/master/ClientLibrary/Snippets/Microsoft.TeamServices.Samples.Client/WorkItemTracking/ClassificationNodesSample.cs#L20)

### Get the root iteration tree
<a name="gettheiterationroot" />
#### Sample request

```
GET https://mytfsserver/DefaultCollection/Fabrikam-Fiber-Git/_apis/wit/classificationNodes/iterations?api-version=1.0
```

#### Sample response

```json
{
  "id": 3569,
  "name": "Fabrikam-Fiber-Git",
  "structureType": "iteration",
  "hasChildren": true,
  "_links": {
    "self": {
      "href": "https://mytfsserver/DefaultCollection/6ce954b1-ce1f-45d1-b94d-e6bf2464ba2c/_apis/wit/classificationNodes/Iterations"
    }
  },
  "url": "https://mytfsserver/DefaultCollection/6ce954b1-ce1f-45d1-b94d-e6bf2464ba2c/_apis/wit/classificationNodes/Iterations"
}
```


### Get the iteration tree with 2 levels of children
<a name="gettheiterationtreewith2levelsofchildren" />
#### Sample request

```
GET https://mytfsserver/DefaultCollection/Fabrikam-Fiber-Git/_apis/wit/classificationNodes/iterations?$depth=2&api-version=1.0
```

#### Sample response

```json
{
  "id": 3569,
  "name": "Fabrikam-Fiber-Git",
  "structureType": "iteration",
  "hasChildren": true,
  "children": [
    {
      "id": 3566,
      "name": "Release 3",
      "structureType": "iteration",
      "hasChildren": false,
      "url": "https://mytfsserver/DefaultCollection/6ce954b1-ce1f-45d1-b94d-e6bf2464ba2c/_apis/wit/classificationNodes/Iterations/Release%203"
    },
    {
      "id": 3571,
      "name": "Release 2",
      "structureType": "iteration",
      "hasChildren": false,
      "url": "https://mytfsserver/DefaultCollection/6ce954b1-ce1f-45d1-b94d-e6bf2464ba2c/_apis/wit/classificationNodes/Iterations/Release%202"
    },
    {
      "id": 3572,
      "name": "Release 4",
      "structureType": "iteration",
      "hasChildren": false,
      "url": "https://mytfsserver/DefaultCollection/6ce954b1-ce1f-45d1-b94d-e6bf2464ba2c/_apis/wit/classificationNodes/Iterations/Release%204"
    },
    {
      "id": 3576,
      "name": "Release 1",
      "structureType": "iteration",
      "hasChildren": true,
      "children": [
        {
          "id": 3564,
          "name": "Sprint 4",
          "structureType": "iteration",
          "hasChildren": false,
          "url": "https://mytfsserver/DefaultCollection/6ce954b1-ce1f-45d1-b94d-e6bf2464ba2c/_apis/wit/classificationNodes/Iterations/Release%201/Sprint%204"
        },
        {
          "id": 3565,
          "name": "Sprint 2",
          "structureType": "iteration",
          "hasChildren": false,
          "attributes": {
            "startDate": "2014-03-17T00:00:00Z",
            "finishDate": "2014-03-28T00:00:00Z"
          },
          "url": "https://mytfsserver/DefaultCollection/6ce954b1-ce1f-45d1-b94d-e6bf2464ba2c/_apis/wit/classificationNodes/Iterations/Release%201/Sprint%202"
        },
        {
          "id": 3567,
          "name": "Sprint 6",
          "structureType": "iteration",
          "hasChildren": false,
          "url": "https://mytfsserver/DefaultCollection/6ce954b1-ce1f-45d1-b94d-e6bf2464ba2c/_apis/wit/classificationNodes/Iterations/Release%201/Sprint%206"
        },
        {
          "id": 3573,
          "name": "Sprint 5",
          "structureType": "iteration",
          "hasChildren": false,
          "url": "https://mytfsserver/DefaultCollection/6ce954b1-ce1f-45d1-b94d-e6bf2464ba2c/_apis/wit/classificationNodes/Iterations/Release%201/Sprint%205"
        },
        {
          "id": 3574,
          "name": "Sprint 1",
          "structureType": "iteration",
          "hasChildren": false,
          "attributes": {
            "startDate": "2014-03-03T00:00:00Z",
            "finishDate": "2014-03-14T00:00:00Z"
          },
          "url": "https://mytfsserver/DefaultCollection/6ce954b1-ce1f-45d1-b94d-e6bf2464ba2c/_apis/wit/classificationNodes/Iterations/Release%201/Sprint%201"
        },
        {
          "id": 3575,
          "name": "Sprint 3",
          "structureType": "iteration",
          "hasChildren": false,
          "url": "https://mytfsserver/DefaultCollection/6ce954b1-ce1f-45d1-b94d-e6bf2464ba2c/_apis/wit/classificationNodes/Iterations/Release%201/Sprint%203"
        }
      ],
      "url": "https://mytfsserver/DefaultCollection/6ce954b1-ce1f-45d1-b94d-e6bf2464ba2c/_apis/wit/classificationNodes/Iterations/Release%201"
    }
  ],
  "_links": {
    "self": {
      "href": "https://mytfsserver/DefaultCollection/6ce954b1-ce1f-45d1-b94d-e6bf2464ba2c/_apis/wit/classificationNodes/Iterations"
    }
  },
  "url": "https://mytfsserver/DefaultCollection/6ce954b1-ce1f-45d1-b94d-e6bf2464ba2c/_apis/wit/classificationNodes/Iterations"
}
```


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
#### Sample request

```
GET https://mytfsserver/DefaultCollection/Fabrikam-Fiber-Git/_apis/wit/classificationNodes/areas/Web?api-version=1.0
```

#### Sample response

```json
{
  "id": 126391,
  "identifier": "d5d98099-47ac-468a-9579-c059c90bf7c5",
  "name": "Web",
  "structureType": "area",
  "hasChildren": false,
  "_links": {
    "self": {
      "href": "https://mytfsserver/DefaultCollection/6ce954b1-ce1f-45d1-b94d-e6bf2464ba2c/_apis/wit/classificationNodes/Areas/Web"
    },
    "parent": {
      "href": "https://mytfsserver/DefaultCollection/6ce954b1-ce1f-45d1-b94d-e6bf2464ba2c/_apis/wit/classificationNodes/Areas"
    }
  },
  "url": "https://mytfsserver/DefaultCollection/6ce954b1-ce1f-45d1-b94d-e6bf2464ba2c/_apis/wit/classificationNodes/Areas/Web"
}
```


#### Sample code

* [C# (GetArea method)](https://github.com/Microsoft/vsts-dotnet-samples/blob/master/ClientLibrary/Snippets/Microsoft.TeamServices.Samples.Client/WorkItemTracking/ClassificationNodesSample.cs#L266)

### Get an iteration
#### Sample request

```
GET https://mytfsserver/DefaultCollection/Fabrikam-Fiber-Git/_apis/wit/classificationNodes/iterations/Final%20Iteration?api-version=1.0
```

#### Sample response

```json
{
  "id": 126392,
  "name": "Final Iteration",
  "structureType": "iteration",
  "hasChildren": false,
  "attributes": {
    "startDate": "2014-10-27T00:00:00Z",
    "finishDate": "2014-10-31T00:00:00Z"
  },
  "_links": {
    "self": {
      "href": "https://mytfsserver/DefaultCollection/6ce954b1-ce1f-45d1-b94d-e6bf2464ba2c/_apis/wit/classificationNodes/Iterations/Final%20Iteration"
    },
    "parent": {
      "href": "https://mytfsserver/DefaultCollection/6ce954b1-ce1f-45d1-b94d-e6bf2464ba2c/_apis/wit/classificationNodes/Iterations"
    }
  },
  "url": "https://mytfsserver/DefaultCollection/6ce954b1-ce1f-45d1-b94d-e6bf2464ba2c/_apis/wit/classificationNodes/Iterations/Final%20Iteration"
}
```


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

#### Sample request

```
POST https://mytfsserver/DefaultCollection/Fabrikam-Fiber-Git/_apis/wit/classificationNodes/areas?api-version=1.0
```
```json
{
  "name": "Web"
}
```

#### Sample response

```json
{
  "id": 126391,
  "name": "Web",
  "structureType": "area",
  "hasChildren": false,
  "_links": {
    "self": {
      "href": "https://mytfsserver/DefaultCollection/6ce954b1-ce1f-45d1-b94d-e6bf2464ba2c/_apis/wit/classificationNodes/Areas/Web"
    },
    "parent": {
      "href": "https://mytfsserver/DefaultCollection/6ce954b1-ce1f-45d1-b94d-e6bf2464ba2c/_apis/wit/classificationNodes/Areas"
    }
  },
  "url": "https://mytfsserver/DefaultCollection/6ce954b1-ce1f-45d1-b94d-e6bf2464ba2c/_apis/wit/classificationNodes/Areas/Web"
}
```


#### Sample code

* [C# (CreateArea method)](https://github.com/Microsoft/vsts-dotnet-samples/blob/master/ClientLibrary/Snippets/Microsoft.TeamServices.Samples.Client/WorkItemTracking/ClassificationNodesSample.cs#L74)

### Create an iteration

#### Sample request

```
POST https://mytfsserver/DefaultCollection/Fabrikam-Fiber-Git/_apis/wit/classificationNodes/iterations?api-version=1.0
```
```json
{
  "name": "Final Iteration",
  "attributes": {
    "startDate": "2014-10-27T00:00:00Z",
    "finishDate": "2014-10-31T00:00:00Z"
  }
}
```

#### Sample response

```json
{
  "id": 126392,
  "name": "Final Iteration",
  "structureType": "iteration",
  "hasChildren": false,
  "attributes": {
    "startDate": "2014-10-27T00:00:00Z",
    "finishDate": "2014-10-31T00:00:00Z"
  },
  "_links": {
    "self": {
      "href": "https://mytfsserver/DefaultCollection/6ce954b1-ce1f-45d1-b94d-e6bf2464ba2c/_apis/wit/classificationNodes/Iterations/Final%20Iteration"
    },
    "parent": {
      "href": "https://mytfsserver/DefaultCollection/6ce954b1-ce1f-45d1-b94d-e6bf2464ba2c/_apis/wit/classificationNodes/Iterations"
    }
  },
  "url": "https://mytfsserver/DefaultCollection/6ce954b1-ce1f-45d1-b94d-e6bf2464ba2c/_apis/wit/classificationNodes/Iterations/Final%20Iteration"
}
```


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

#### Sample request

```
PATCH https://mytfsserver/DefaultCollection/Fabrikam-Fiber-Git/_apis/wit/classificationNodes/iterations/Ultimate%20iteration?api-version=1.0
```
```json
{
  "attributes": {
    "startDate": "2015-01-26T00:00:00Z",
    "finishDate": "2015-01-30T00:00:00Z"
  }
}
```

#### Sample response

```json
{
  "id": 126392,
  "name": "Ultimate iteration",
  "structureType": "iteration",
  "hasChildren": false,
  "attributes": {
    "startDate": "2015-01-26T00:00:00Z",
    "finishDate": "2015-01-30T00:00:00Z"
  },
  "_links": {
    "self": {
      "href": "https://mytfsserver/DefaultCollection/6ce954b1-ce1f-45d1-b94d-e6bf2464ba2c/_apis/wit/classificationNodes/Iterations/Ultimate%20iteration"
    },
    "parent": {
      "href": "https://mytfsserver/DefaultCollection/6ce954b1-ce1f-45d1-b94d-e6bf2464ba2c/_apis/wit/classificationNodes/Iterations"
    }
  },
  "url": "https://mytfsserver/DefaultCollection/6ce954b1-ce1f-45d1-b94d-e6bf2464ba2c/_apis/wit/classificationNodes/Iterations/Ultimate%20iteration"
}
```


#### Sample code

* [C# (UpdateIterationDates method)](https://github.com/Microsoft/vsts-dotnet-samples/blob/master/ClientLibrary/Snippets/Microsoft.TeamServices.Samples.Client/WorkItemTracking/ClassificationNodesSample.cs#L227)

### Rename a classification node

#### Sample request

```
PATCH https://mytfsserver/DefaultCollection/Fabrikam-Fiber-Git/_apis/wit/classificationNodes/areas/Web?api-version=1.0
```
```json
{
  "name": "Website team"
}
```

#### Sample response

```json
{
  "id": 126391,
  "name": "Website team",
  "structureType": "area",
  "hasChildren": false,
  "_links": {
    "self": {
      "href": "https://mytfsserver/DefaultCollection/6ce954b1-ce1f-45d1-b94d-e6bf2464ba2c/_apis/wit/classificationNodes/Areas/Website%20team"
    },
    "parent": {
      "href": "https://mytfsserver/DefaultCollection/6ce954b1-ce1f-45d1-b94d-e6bf2464ba2c/_apis/wit/classificationNodes/Areas"
    }
  },
  "url": "https://mytfsserver/DefaultCollection/6ce954b1-ce1f-45d1-b94d-e6bf2464ba2c/_apis/wit/classificationNodes/Areas/Website%20team"
}
```


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

#### Sample request

```
POST https://mytfsserver/DefaultCollection/Fabrikam-Fiber-Git/_apis/wit/classificationNodes/areas/Parent%20Area?api-version=1.0
```
```json
{
  "id": 126391
}
```

#### Sample response

```json
{
  "id": 126391,
  "name": "Website team",
  "structureType": "area",
  "hasChildren": false,
  "_links": {
    "self": {
      "href": "https://mytfsserver/DefaultCollection/6ce954b1-ce1f-45d1-b94d-e6bf2464ba2c/_apis/wit/classificationNodes/Areas/Parent%20Area/Website%20team"
    },
    "parent": {
      "href": "https://mytfsserver/DefaultCollection/6ce954b1-ce1f-45d1-b94d-e6bf2464ba2c/_apis/wit/classificationNodes/Areas/Parent%20Area"
    }
  },
  "url": "https://mytfsserver/DefaultCollection/6ce954b1-ce1f-45d1-b94d-e6bf2464ba2c/_apis/wit/classificationNodes/Areas/Parent%20Area/Website%20team"
}
```


#### Sample code

* [C# (MoveArea method)](https://github.com/Microsoft/vsts-dotnet-samples/blob/master/ClientLibrary/Snippets/Microsoft.TeamServices.Samples.Client/WorkItemTracking/ClassificationNodesSample.cs#L315)

### Move an iteration node

#### Sample request

```
POST https://mytfsserver/DefaultCollection/Fabrikam-Fiber-Git/_apis/wit/classificationNodes/iterations/Parent%20Iteration?api-version=1.0
```
```json
{
  "id": 126392
}
```

#### Sample response

```json
{
  "id": 126392,
  "name": "Ultimate iteration",
  "structureType": "iteration",
  "hasChildren": false,
  "_links": {
    "self": {
      "href": "https://mytfsserver/DefaultCollection/6ce954b1-ce1f-45d1-b94d-e6bf2464ba2c/_apis/wit/classificationNodes/Iterations/Parent%20Iteration/Ultimate%20iteration"
    },
    "parent": {
      "href": "https://mytfsserver/DefaultCollection/6ce954b1-ce1f-45d1-b94d-e6bf2464ba2c/_apis/wit/classificationNodes/Iterations/Parent%20Iteration"
    }
  },
  "url": "https://mytfsserver/DefaultCollection/6ce954b1-ce1f-45d1-b94d-e6bf2464ba2c/_apis/wit/classificationNodes/Iterations/Parent%20Iteration/Ultimate%20iteration"
}
```


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

#### Sample request

```
DELETE https://mytfsserver/DefaultCollection/Fabrikam-Fiber-Git/_apis/wit/classificationNodes/areas/Parent%20Area?$reclassifyId=3568&api-version=1.0
```


#### Sample code

* [C# (DeleteArea method)](https://github.com/Microsoft/vsts-dotnet-samples/blob/master/ClientLibrary/Snippets/Microsoft.TeamServices.Samples.Client/WorkItemTracking/ClassificationNodesSample.cs#L339)

###Delete an iteration node

#### Sample request

```
DELETE https://mytfsserver/DefaultCollection/Fabrikam-Fiber-Git/_apis/wit/classificationNodes/iterations/Parent%20Iteration?$reclassifyId=3569&api-version=1.0
```


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