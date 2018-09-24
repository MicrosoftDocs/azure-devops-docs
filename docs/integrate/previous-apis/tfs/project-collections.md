---
ms.prod: devops
ms.technology: devops-ecosystem
monikerRange: '>= tfs-2013 < vsts'
title: Project Collections | REST API Reference for Team Foundation Server
description: Work with project collections programmatically using the REST APIs for Team Foundation Server.
ms.assetid: 8172F58D-5131-4571-91D0-C1E11B05C4FE
ms.manager: douge
ms.topic: article
ms.author: elbatk
author: elbatk
ms.date: 08/04/2016
---

# Project collections
[!INCLUDE [API_version](../_data/version-preview2.md)]

[!INCLUDE [disclaimer](../_data/disclaimer.md)]

[Project collections](http://msdn.microsoft.com/en-us/library/dd236915.aspx) contain [projects](./projects.md) that have source code, work items, and other resources.

[!INCLUDE [GET_STARTED](../_data/get-started.md)]

## Get a project collection
<a id="GetProjectCollection"></a>

```no-highlight
GET https://{instance}/_apis/projectcollections/{collection}?api-version={version}
```

| Parameter   | Type   | Notes                                                                                                                       
|:------------|:-------|:----------------------------------------------------------------------------------------------------------------------------
| URL
| instance    | string | TFS server name ({server:port}).
| collection  | string | Name or ID of the project collection.                                                     
| Query
| api-version | string | [Version](../../concepts/rest-api-versioning.md) of the API to use.

[!code-REST [GET__projectCollections__collectionId__json](./_data/projectCollections/GET__projectCollections__collectionId_.json)]

#### Sample code

* [C# (ListProjectCollections method)](https://github.com/Microsoft/vsts-dotnet-samples/blob/master/ClientLibrary/Snippets/Microsoft.TeamServices.Samples.Client/ProjectsAndTeams/ProjectCollectionsSample.cs#L14)