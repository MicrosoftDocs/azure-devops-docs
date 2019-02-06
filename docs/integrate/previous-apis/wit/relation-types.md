---
ms.prod: devops
ms.technology: devops-ecosystem
monikerRange: '>= tfs-2015 < azure-devops'
title: Work Item Relation Types | REST API Reference for Team Foundation Server
description: Work with work item relation types programmatically using the REST APIs for Team Foundation Server. 
ms.assetid: D5EAD6ED-8972-4A9F-A5EE-369C1C77E996
ms.manager: jillfra
ms.topic: article
ms.author: elbatk
author: elbatk
ms.date: 08/04/2016
---

# Work item relation types

[!INCLUDE [azure-devops](../_data/azure-devops-message.md)]

[!INCLUDE [API_version](../_data/version.md)]

Relation types define the types of associations work items can have with work items and other resources,
but especially [links between two work items](http://msdn.microsoft.com/library/dd293534.aspx).

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

#### Sample request

```
GET https://mytfsserver/DefaultCollection/_apis/wit/workitemrelationtypes?api-version=1.0
```

#### Sample response

```json
{
  "count": 14,
  "value": [
    {
      "attributes": {
        "usage": "workItemLink",
        "editable": true,
        "enabled": true,
        "acyclic": true,
        "directional": true,
        "singleTarget": true,
        "topology": "dependency"
      },
      "referenceName": "Microsoft.VSTS.TestCase.SharedParameterReferencedBy-Forward",
      "name": "Referenced By",
      "url": "https://mytfsserver/DefaultCollection/_apis/wit/workItemRelationTypes/Microsoft.VSTS.TestCase.SharedParameterReferencedBy-Forward"
    },
    {
      "attributes": {
        "usage": "workItemLink",
        "editable": true,
        "enabled": true,
        "acyclic": true,
        "directional": true,
        "singleTarget": true,
        "topology": "dependency"
      },
      "referenceName": "Microsoft.VSTS.TestCase.SharedParameterReferencedBy-Reverse",
      "name": "References",
      "url": "https://mytfsserver/DefaultCollection/_apis/wit/workItemRelationTypes/Microsoft.VSTS.TestCase.SharedParameterReferencedBy-Reverse"
    },
    {
      "attributes": {
        "usage": "workItemLink",
        "editable": true,
        "enabled": true,
        "acyclic": true,
        "directional": true,
        "singleTarget": true,
        "topology": "dependency"
      },
      "referenceName": "Microsoft.VSTS.Common.TestedBy-Forward",
      "name": "Tested By",
      "url": "https://mytfsserver/DefaultCollection/_apis/wit/workItemRelationTypes/Microsoft.VSTS.Common.TestedBy-Forward"
    },
    {
      "attributes": {
        "usage": "workItemLink",
        "editable": true,
        "enabled": true,
        "acyclic": true,
        "directional": true,
        "singleTarget": true,
        "topology": "dependency"
      },
      "referenceName": "Microsoft.VSTS.Common.TestedBy-Reverse",
      "name": "Tests",
      "url": "https://mytfsserver/DefaultCollection/_apis/wit/workItemRelationTypes/Microsoft.VSTS.Common.TestedBy-Reverse"
    },
    {
      "attributes": {
        "usage": "workItemLink",
        "editable": true,
        "enabled": true,
        "acyclic": true,
        "directional": true,
        "singleTarget": true,
        "topology": "dependency"
      },
      "referenceName": "Microsoft.VSTS.TestCase.SharedStepReferencedBy-Forward",
      "name": "Test Case",
      "url": "https://mytfsserver/DefaultCollection/_apis/wit/workItemRelationTypes/Microsoft.VSTS.TestCase.SharedStepReferencedBy-Forward"
    },
    {
      "attributes": {
        "usage": "workItemLink",
        "editable": true,
        "enabled": true,
        "acyclic": true,
        "directional": true,
        "singleTarget": true,
        "topology": "dependency"
      },
      "referenceName": "Microsoft.VSTS.TestCase.SharedStepReferencedBy-Reverse",
      "name": "Shared Steps",
      "url": "https://mytfsserver/DefaultCollection/_apis/wit/workItemRelationTypes/Microsoft.VSTS.TestCase.SharedStepReferencedBy-Reverse"
    },
    {
      "attributes": {
        "usage": "workItemLink",
        "editable": false,
        "enabled": true,
        "acyclic": true,
        "directional": true,
        "singleTarget": true,
        "topology": "dependency"
      },
      "referenceName": "System.LinkTypes.Dependency-Forward",
      "name": "Successor",
      "url": "https://mytfsserver/DefaultCollection/_apis/wit/workItemRelationTypes/System.LinkTypes.Dependency-Forward"
    },
    {
      "attributes": {
        "usage": "workItemLink",
        "editable": false,
        "enabled": true,
        "acyclic": true,
        "directional": true,
        "singleTarget": true,
        "topology": "dependency"
      },
      "referenceName": "System.LinkTypes.Dependency-Reverse",
      "name": "Predecessor",
      "url": "https://mytfsserver/DefaultCollection/_apis/wit/workItemRelationTypes/System.LinkTypes.Dependency-Reverse"
    },
    {
      "attributes": {
        "usage": "workItemLink",
        "editable": false,
        "enabled": true,
        "acyclic": true,
        "directional": true,
        "singleTarget": false,
        "topology": "tree"
      },
      "referenceName": "System.LinkTypes.Hierarchy-Forward",
      "name": "Child",
      "url": "https://mytfsserver/DefaultCollection/_apis/wit/workItemRelationTypes/System.LinkTypes.Hierarchy-Forward"
    },
    {
      "attributes": {
        "usage": "workItemLink",
        "editable": false,
        "enabled": true,
        "acyclic": true,
        "directional": true,
        "singleTarget": false,
        "topology": "tree"
      },
      "referenceName": "System.LinkTypes.Hierarchy-Reverse",
      "name": "Parent",
      "url": "https://mytfsserver/DefaultCollection/_apis/wit/workItemRelationTypes/System.LinkTypes.Hierarchy-Reverse"
    },
    {
      "attributes": {
        "usage": "workItemLink",
        "editable": false,
        "enabled": true,
        "acyclic": false,
        "directional": false,
        "singleTarget": true,
        "topology": "network"
      },
      "referenceName": "System.LinkTypes.Related",
      "name": "Related",
      "url": "https://mytfsserver/DefaultCollection/_apis/wit/workItemRelationTypes/System.LinkTypes.Related"
    },
    {
      "attributes": {
        "usage": "resourceLink",
        "editable": false,
        "enabled": true
      },
      "referenceName": "AttachedFile",
      "name": "Attached File",
      "url": "https://mytfsserver/DefaultCollection/_apis/wit/workItemRelationTypes/AttachedFile"
    },
    {
      "attributes": {
        "usage": "resourceLink",
        "editable": false,
        "enabled": true
      },
      "referenceName": "Hyperlink",
      "name": "Hyperlink",
      "url": "https://mytfsserver/DefaultCollection/_apis/wit/workItemRelationTypes/Hyperlink"
    },
    {
      "attributes": {
        "usage": "resourceLink",
        "editable": false,
        "enabled": true
      },
      "referenceName": "ArtifactLink",
      "name": "Artifact Link",
      "url": "https://mytfsserver/DefaultCollection/_apis/wit/workItemRelationTypes/ArtifactLink"
    }
  ]
}
```



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

#### Sample request

```
GET https://mytfsserver/DefaultCollection/_apis/wit/workitemrelationtypes/System.LinkTypes.Related?api-version=1.0
```

#### Sample response

```json
{
  "attributes": {
    "usage": "workItemLink",
    "editable": false,
    "enabled": true,
    "acyclic": false,
    "directional": false,
    "singleTarget": true,
    "topology": "network"
  },
  "referenceName": "System.LinkTypes.Related",
  "name": "Related",
  "url": "https://mytfsserver/DefaultCollection/_apis/wit/workItemRelationTypes/System.LinkTypes.Related"
}
```

