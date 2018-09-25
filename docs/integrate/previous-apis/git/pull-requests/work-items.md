---
ms.prod: devops
ms.technology: devops-ecosystem
monikerRange: '>= tfs-2013 < vsts'
title: Git Pull Request Work Item Linking | REST API Reference for Team Foundation Server
description: Work with Git pull requests programmatically using the REST APIs for Team Foundation Server.
ms.assetid: BFED54AE-D618-48D7-9F0E-11D4C107232E
ms.manager: douge
ms.topic: article
ms.author: elbatk
author: elbatk
ms.date: 11/3/2016
---

# Git pull request work item linking
[!INCLUDE [API_version](../../_data/version3-preview.md)]

[!INCLUDE [disclaimer](../../_data/disclaimer.md)]

[!INCLUDE [GET_STARTED](../../_data/get-started.md)]

## Get items linked to a pull request

```no-highlight
GET https://{instance}/DefaultCollection/{project}/_apis/repos/git/repositories/{repository}/pullRequests/{pullRequest}/workitems?api-version={version}
```

| Parameter   | Type    | Notes
|:------------|:--------|:---------------------------------------------------------------------------------------
| URL
| instance    | string  | TFS server name ({server:port}).
| project     | string  | ID or name of the [project](../../tfs/projects.md). *Optional if specifying an ID for repository.*
| repository  | string  | ID of the [repository](../repositories.md).
| pullRequest | integer | ID of the pull request.
| Query
| api-version | string  | [Version](../../../concepts/rest-api-versioning.md) of the API to use.

[!INCLUDE [ID_vs_Name](../_data/id_or_name.md)]

[!code-REST [GET__git_repositories__repositoryId__pullRequests__autoCompletePullRequestId__workitems_json](../_data/pullRequests/GET__git_repositories__repositoryId__pullRequests__autoCompletePullRequestId__workitems.json)]

## Adding and removing work item links to a pull request

See [Work Item Tracking](../../wit/overview.md) for more information.

The URL is the artifact ID of a pull request which can be retrieved from the [Pull Request Details](./pull-requests.md)

### Adding a work item link

[!code-REST [PATCH__wit_workItems__witTask__json](../_data/pullRequests/PATCH__wit_workItems__witTask_.json)]

### Remove a work item link

[!code-REST [PATCH__wit_workItems__witTask_2_json](../_data/pullRequests/PATCH__wit_workItems__witTask_2.json)]

