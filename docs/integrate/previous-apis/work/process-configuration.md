---
ms.prod: devops
ms.technology: devops-ecosystem
monikerRange: '>= tfs-2013 < vsts'
title: Process Configuration | REST API Reference for Team Foundation Server
description: Work with Process Configuration programmatically using the REST APIs for Team Foundation Server.
ms.assetid: 086ce0df-bb60-4cd0-99de-4d54cf348985
ms.manager: douge
ms.topic: article
ms.author: elbatk
author: elbatk
ms.date: 08/17/2016
---

[!INCLUDE [latest](./_data/see-latest.md)]

# Process Configuration
[!INCLUDE [API_version](../_data/version2-preview1.md)]

[!INCLUDE [GET_STARTED](../_data/get-started.md)]

## Get a project's process configuration 
<a id="GetProcessConfiguration"></a>

[Projects](../tfs/projects.md) have process configuration, process configuration defines the behavior of backlogs and boards.  

| Setting Name       | Description 
|:------------------ |:---------   
| typeFields         | Specifies a collection of TypeFields. TypeFields are abstractions of customizable fields. For example, the type of the "Story points" field is "Effort". 
| taskBacklog        | Specifies the state and work item types for sprint backlog. 
| requirementBacklog | Specifies the state and work item types for requirement backlog. 
| portfolioBacklogs  | Specifies the state and work item types for portfolio backlogs. 
| bugWorkItems       | Specifies the state and work item types for bugs.

```no-highlight
GET https://{instance}/DefaultCollection/{project}/_apis/Work/ProcessConfiguration?api-version={version}
```

| Parameter  | Type     | Notes
|:-----------|:---------|:----------------------------------------------------------------------------------------------------------------------------
| URL
| instance   | string   | TFS server name ({server:port}).
| project    | string   | Name or ID of the project.
| Query
| api-version | string  | [Version](../../concepts/rest-api-versioning.md) of the API to use.


[!code-REST [GET__work_processconfiguration__JSON](./_data/GET__work_processconfiguration.json)]