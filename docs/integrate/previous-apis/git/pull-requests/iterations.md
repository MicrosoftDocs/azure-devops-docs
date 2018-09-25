---
ms.prod: devops
ms.technology: devops-ecosystem
monikerRange: '>= tfs-2013 < vsts'
title: Git Pull Request Iterations | REST API Reference for Team Foundation Server
description: Work with Git pull requests programmatically using the REST APIs for Team Foundation Server.
ms.assetid: EF349F15-C2BD-4338-9DB8-3FF7DECC5801
ms.manager: douge
ms.topic: article
ms.author: elbatk
author: elbatk
ms.date: 11/3/2016
---

# Git pull request iterations
[!INCLUDE [API_version](../../_data/version3-preview.md)]

[!INCLUDE [disclaimer](../../_data/disclaimer.md)]

[!INCLUDE [GET_STARTED](../../_data/get-started.md)]

Iterations contain the history of the pull request.  Every time commits are pushed to the source branch and when the pull
request is created, an iteration is created.  Each iteration can contain more than one commit.

## Get a list of iterations

```no-highlight
GET https://{instance}/DefaultCollection/{project}/_apis/repos/git/repositories/{repository}/pullRequests/{pullRequest}/iterations?api-version={version}
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

[!code-REST [GET__git_repositories__repositoryId__pullRequests__pullRequestId__iterations_json](../_data/pullRequests/GET__git_repositories__repositoryId__pullRequests__pullRequestId__iterations.json)]

## Get a specific iteration

```no-highlight
GET https://{instance}/DefaultCollection/{project}/_apis/repos/git/repositories/{repository}/pullRequests/{pullRequest}/iterations/{iterationId}?api-version={version}
```

| Parameter   | Type    | Notes
|:------------|:--------|:---------------------------------------------------------------------------------------
| URL
| instance    | string  | TFS server name ({server:port}).
| project     | string  | ID or name of the [project](../../tfs/projects.md). *Optional if specifying an ID for repository.*
| repository  | string  | ID of the [repository](../repositories.md).
| pullRequest | integer | ID of the pull request.
| iterationId | integer | ID of the iteration.
| Query
| api-version | string  | [Version](../../../concepts/rest-api-versioning.md) of the API to use.


[!code-REST [GET__git_repositories__repositoryId__pullRequests__pullRequestId__iterations__iterationId___json](../_data/pullRequests/GET__git_repositories__repositoryId__pullRequests__pullRequestId__iterations__iterationId_.json)]

## Get the commits for an iteration

```no-highlight
GET https://{instance}/DefaultCollection/{project}/_apis/repos/git/repositories/{repository}/pullRequests/{pullRequest}/iterations/{iterationId}/commits?api-version={version}
```

| Parameter   | Type    | Notes
|:------------|:--------|:---------------------------------------------------------------------------------------
| URL
| instance    | string  | TFS server name ({server:port}).
| project     | string  | ID or name of the [project](../../tfs/projects.md). *Optional if specifying an ID for repository.*
| repository  | string  | ID of the [repository](../repositories.md).
| pullRequest | integer | ID of the pull request.
| iterationId | integer | ID of the iteration.
| Query
| api-version | string  | [Version](../../../concepts/rest-api-versioning.md) of the API to use.

[!code-REST [GET__git_repositories__repositoryId__pullRequests__pullRequestId__iterations__iterationId__commits_json](../_data/pullRequests/GET__git_repositories__repositoryId__pullRequests__pullRequestId__iterations__iterationId__commits.json)]

## Get the changes in the pull request at an iteration

```no-highlight
GET https://{instance}/DefaultCollection/{project}/_apis/repos/git/repositories/{repository}/pullRequests/{pullRequest}/iterations/{iterationId}/changes?$top={top};$skip={skip};$compareTo={compareTo};api-version={version}
```

| Parameter   | Type    | Notes
|:------------|:--------|:---------------------------------------------------------------------------------------
| URL
| instance    | string  | TFS server name ({server:port}).
| project     | string  | ID or name of the [project](../../tfs/projects.md). *Optional if specifying an ID for repository.*
| repository  | string  | ID of the [repository](../repositories.md).
| pullRequest | integer | ID of the pull request.
| iterationId | integer | ID of the iteration.
| Query
| top         | integer | the number of changes to retrieve
| skip        | integer | the number of changes to ignore
| compareTo   | integer | ID of an iteration to compare against.  If not specified, the iteration is compared against the common commit with the target branch of the pull request.
| api-version | string  | [Version](../../../concepts/rest-api-versioning.md) of the API to use.

[!code-REST [GET__git_repositories__repositoryId__pullRequests__pullRequestId__iterations__iterationId__changes_json](../_data/pullRequests/GET__git_repositories__repositoryId__pullRequests__pullRequestId__iterations__iterationId__changes.json)]

### Get the changes in an iteration compared to another iteration

[!code-REST [GET__git_repositories__repositoryId__pullRequests__pullRequestId__iterations__iterationId__changes__compareTo-_previousIteration__json](../_data/pullRequests/GET__git_repositories__repositoryId__pullRequests__pullRequestId__iterations__iterationId__changes__compareTo-_previousIteration_.json)]
