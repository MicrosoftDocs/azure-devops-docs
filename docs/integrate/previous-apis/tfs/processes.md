---
title: Processes | REST API Reference for Team Foundation Server
description: Work with processes programmatically using the REST APIs for Team Foundation Server.
ms.assetid: 118682B4-1067-4F9C-A38F-26B02F235334
ms.prod: devops
ms.technology: devops-ecosystem
monikerRange: '>= tfs-2015 < azure-devops'
ms.manager: jillfra
ms.topic: article
ms.author: elbatk
author: elbatk
ms.date: 08/04/2016
---

# Processes

[!INCLUDE [azure-devops](../_data/azure-devops-message.md)]

[!INCLUDE [API_version](../_data/version.md)]

Processes contain configuration settings for projects.

[!INCLUDE [GET_STARTED](../_data/get-started.md)]

## Get a list of processes
<a name="getalistofprocesses" />
<a id="GetProcesses"></a>

Get all processes in the project collection.

```no-highlight
GET https://{instance}/DefaultCollection/_apis/process/processes?api-version={version}
```

| Parameter          | Type                                                     | Notes                                                                                                                       
|:-------------------|:---------------------------------------------------------|:----------------------------------------------------------------------------------------------------------------------------
| URL
| instance           | string                                                   | TFS server name ({server:port}).
| api-version        | string                                                   | [Version](../../concepts/rest-api-versioning.md) of the API to use.

#### Sample request

```
GET https://mytfsserver/DefaultCollection/_apis/process/processes?api-version=1.0
```

#### Sample response

```json
{
  "count": 3,
  "value": [
    {
      "id": "adcc42ab-9882-485e-a3ed-7678f01f66bc",
      "description": "This template is flexible and will work great for most teams using Agile planning methods, including those practicing Scrum.",
      "isDefault": false,
      "url": "https://mytfsserver/DefaultCollection/_apis/process/processes/adcc42ab-9882-485e-a3ed-7678f01f66bc",
      "name": "Agile"
    },
    {
      "id": "27450541-8e31-4150-9947-dc59f998fc01",
      "description": "This template is for more formal projects requiring a framework for process improvement and an auditable record of decisions.",
      "isDefault": false,
      "url": "https://mytfsserver/DefaultCollection/_apis/process/processes/27450541-8e31-4150-9947-dc59f998fc01",
      "name": "CMMI"
    },
    {
      "id": "6b724908-ef14-45cf-84f8-768b5384da45",
      "description": "This template is for teams who follow the Scrum methodology and use Scrum terminology.",
      "isDefault": true,
      "url": "https://mytfsserver/DefaultCollection/_apis/process/processes/6b724908-ef14-45cf-84f8-768b5384da45",
      "name": "Scrum"
    }
  ]
}
```


#### Sample code

* [C# (ListProcesses method)](https://github.com/Microsoft/vsts-dotnet-samples/blob/master/ClientLibrary/Snippets/Microsoft.TeamServices.Samples.Client/ProjectsAndTeams/ProcessesSample.cs#L13)

## Get a process
<a id="GetProcess"></a>

```no-highlight
GET https://{instance}/DefaultCollection/_apis/process/processes/{processId}?api-version={version}
```

| Parameter          | Type    | Notes                                                                                                                       
|:-------------------|:--------|:----------------------------------------------------------------------------------------------------------------------------
| URL
| instance           | string  | TFS server name ({server:port}).
| processId          | string  | ID of the process.
| api-version        | string  | [Version](../../concepts/rest-api-versioning.md) of the API to use.

#### Sample request

```
GET https://mytfsserver/DefaultCollection/_apis/process/processes/adcc42ab-9882-485e-a3ed-7678f01f66bc?api-version=1.0
```

#### Sample response

```json
{
  "id": "adcc42ab-9882-485e-a3ed-7678f01f66bc",
  "description": "This template is flexible and will work great for most teams using Agile planning methods, including those practicing Scrum.",
  "isDefault": false,
  "_links": {
    "self": {
      "href": "https://mytfsserver/DefaultCollection/_apis/process/processes/adcc42ab-9882-485e-a3ed-7678f01f66bc"
    }
  },
  "url": "https://mytfsserver/DefaultCollection/_apis/process/processes/adcc42ab-9882-485e-a3ed-7678f01f66bc",
  "name": "Agile"
}
```


#### Sample code

* [C# (GetProcess method)](https://github.com/Microsoft/vsts-dotnet-samples/blob/master/ClientLibrary/Snippets/Microsoft.TeamServices.Samples.Client/ProjectsAndTeams/ProcessesSample.cs#L29)
