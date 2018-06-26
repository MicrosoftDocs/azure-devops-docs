---
title: Processes | REST API Reference for Visual Studio Team Services and Team Foundation Server
description: Work with processes programmatically using the REST APIs for Visual Studio Team Services and Team Foundation Server.
ms.assetid: 118682B4-1067-4F9C-A38F-26B02F235334
ms.prod: devops
ms.technology: devops-ecosystem
monikerRange: '>= tfs-2013'
ms.manager: douge
ms.topic: article
ms.author: elbatk
author: elbatk
ms.date: 08/04/2016
---

# Processes
[!INCLUDE [API_version](../_data/version.md)]

Processes contain configuration settings for team projects.

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
| instance           | string                                                   | [VS Team Services account](/vsts/integrate/get-started/rest/basics) ({account}.visualstudio.com) or [TFS server](/vsts/integrate/get-started/rest/basics) ({server:port}).
| api-version        | string                                                   | [Version](../../concepts/rest-api-versioning.md) of the API to use.

[!code-REST [GET__processes_json](./_data/processes/GET__processes.json)]

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
| instance           | string  | [VS Team Services account](/vsts/integrate/get-started/rest/basics) ({account}.visualstudio.com) or [TFS server](/vsts/integrate/get-started/rest/basics) ({server:port}).
| processId          | string  | ID of the process.
| api-version        | string  | [Version](../../concepts/rest-api-versioning.md) of the API to use.

[!code-REST [GET__processes__processId_json](./_data/processes/GET__processes__processId_.json)]

#### Sample code

* [C# (GetProcess method)](https://github.com/Microsoft/vsts-dotnet-samples/blob/master/ClientLibrary/Snippets/Microsoft.TeamServices.Samples.Client/ProjectsAndTeams/ProcessesSample.cs#L29)
