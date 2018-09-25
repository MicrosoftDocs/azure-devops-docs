---
ms.prod: devops
ms.technology: devops-ecosystem
monikerRange: '>= tfs-2013 < vsts'
title: Git Pull Requests | REST API Reference for Team Foundation Server
description: Work with Git pull requests programmatically using the REST APIs for Team Foundation Server.
ms.assetid: AD95CA6B-A2DC-4236-ACA8-387621E83FE8
ms.manager: douge
ms.topic: article
ms.author: elbatk
author: elbatk
ms.date: 11/3/2016
---

# Git pull requests
[!INCLUDE [API_version](../../_data/version3-preview.md)]

[!INCLUDE [disclaimer](../../_data/disclaimer.md)]

[!INCLUDE [GET_STARTED](../../_data/get-started.md)]

## Get a list of pull requests in the repository

```no-highlight
GET https://{instance}/DefaultCollection/{project}/_apis/repos/git/repositories/{repository}/pullRequests?api-version={version}[&status={string}&creatorId={GUID}&reviewerId={GUID}&sourceRefName={string}&targetRefName={string}&$top={integer}&$skip={integer}]
```

| Parameter     | Type                                   | Default | Notes
|:--------------|:---------------------------------------|:--------|:----------------------------------------------------------------------------------------------------------------------------
| URL
| instance      | string                                 |         | TFS server name ({server:port}).
| project       | string                                 |         | ID or name of the [project](../../tfs/projects.md). *Optional if specifying an ID for repository.*
| repository    | string                                 |         | ID of the [repository](../repositories.md).
| Query
| api-version   | string                                 |         | [Version](../../../concepts/rest-api-versioning.md) of the API to use.
| status        | enum { Active, Abandoned, Completed }  | Active  | Return pull requests with a specific status.
| creatorId     | Guid                                   |         | Filter by creator. See [team members](../../tfs/teams.md#get-a-teams-members).
| reviewerId    | Guid                                   |         | Filter by reviewer. See [team members](../../tfs/teams.md#get-a-teams-members).
| sourceRefName | string                                 |         | Filter by source [branch](../refs.md) name. Example: refs/heads/topic/sometopic
| targetRefName | string                                 |         | Filter by target [branch](../refs.md) name. Example: refs/heads/master
| $top          | integer                                |         | Number of pull requests to return.
| $skip         | integer                                |         | Number of pull requests to skip.

[!INCLUDE [ID_vs_Name](../_data/id_or_name.md)]

### By repository ID

[!code-REST [GET__git_repositories__repositoryId__pullRequests_json](../_data/pullRequests/GET__git_repositories__repositoryId__pullRequests.json)]

### By status

[!code-REST [GET__git_repositories__repositoryId__pullRequests_status-completed_json](../_data/pullRequests/GET__git_repositories__repositoryId__pullRequests_status-completed.json)]

### By target branch

[!code-REST [GET__git_repositories__repositoryId__pullRequests_targetRefName-refs_heads_master_json](../_data/pullRequests/GET__git_repositories__repositoryId__pullRequests_targetRefName-refs_heads_master.json)]

## Get a list of pull requests in the project

```no-highlight
GET https://{instance}/DefaultCollection/{project}/_apis/repos/git/pullRequests?api-version={version}[&status={string}&creatorId={GUID}&reviewerId={GUID}&sourceRefName={string}&targetRefName={string}&$top={integer}&$skip={integer}]
```

| Parameter     | Type                                   | Default | Notes
|:--------------|:---------------------------------------|:--------|:----------------------------------------------------------------------------------------------------------------------------
| URL
| instance      | string                                 |         | TFS server name ({server:port}).
| project       | string                                 |         | ID or name of the [project](../../tfs/projects.md). *Optional if specifying an ID for repository.*
| Query
| api-version   | string                                 |         | [Version](../../../concepts/rest-api-versioning.md) of the API to use.
| project       | string                                 |         | Return pull requests in a specific project
| status        | enum { Active, Abandoned, Completed }  | Active  | Return pull requests with a specific status.
| creatorId     | Guid                                   |         | Filter by creator. See [team members](../../tfs/teams.md#get-a-teams-members).
| reviewerId    | Guid                                   |         | Filter by reviewer. See [team members](../../tfs/teams.md#get-a-teams-members).
| sourceRefName | string                                 |         | Filter by source [branch](../refs.md) name. Example: refs/heads/topic/sometopic
| targetRefName | string                                 |         | Filter by target [branch](../refs.md) name. Example: refs/heads/master
| $top          | integer                                |         | Number of pull requests to return.
| $skip         | integer                                |         | Number of pull requests to skip.

[!code-REST [GET__git_pullRequests_json](../_data/pullRequests/GET__git_pullRequests.json)]

## Get a list of pull requests in the account

```no-highlight
GET https://{instance}/DefaultCollection/{project}/_apis/repos/git/pullRequests?api-version={version}[&status={string}&creatorId={GUID}&reviewerId={GUID}&sourceRefName={string}&targetRefName={string}&$top={integer}&$skip={integer}]
```

| Parameter     | Type                                   | Default | Notes
|:--------------|:---------------------------------------|:--------|:----------------------------------------------------------------------------------------------------------------------------
| URL
| instance      | string                                 |         | TFS server name ({server:port}).
| project       | string                                 |         | ID or name of the [project](../../tfs/projects.md). *Optional if specifying an ID for repository.*
| Query
| api-version   | string                                 |         | [Version](../../../concepts/rest-api-versioning.md) of the API to use.
| status        | enum { Active, Abandoned, Completed }  | Active  | Return pull requests with a specific status.
| creatorId     | Guid                                   |         | Filter by creator. See [team members](../../tfs/teams.md#get-a-teams-members).
| reviewerId    | Guid                                   |         | Filter by reviewer. See [team members](../../tfs/teams.md#get-a-teams-members).
| sourceRefName | string                                 |         | Filter by source [branch](../refs.md) name. Example: refs/heads/topic/sometopic
| targetRefName | string                                 |         | Filter by target [branch](../refs.md) name. Example: refs/heads/master
| $top          | integer                                |         | Number of pull requests to return.
| $skip         | integer                                |         | Number of pull requests to skip.

[!code-REST [GET__git_pullRequests2_json](../_data/pullRequests/GET__git_pullRequests2.json)]


### By pull request ID

```
GET  https://{instance}/DefaultCollection/{project}/_apis/repos/git/pullRequests/{pullrequest}?api-version={version}
```

| Parameter   | Type     | Default | Notes
|:------------|:---------|:--------|:----------------------------------------------------------------------------------------------------------------------------
| URL
| instance    | string   |         | TFS server name ({server:port}).
| project     | string   |         | ID or name of the [project](../../tfs/projects.md). *Optional if specifying an ID for repository.*
| pullRequest | integer  |         | ID of the pull request.
| Query
| api-version | string   |         | [Version](../../../concepts/rest-api-versioning.md) of the API to use.

[!code-REST [GET__git_pullRequests__pullRequestId__json](../_data/pullRequests/GET__git_pullRequests__pullRequestId_.json)]

## Get a pull request

```no-highlight
GET https://{instance}/DefaultCollection/{project}/_apis/repos/git/repositories/{repository}/pullRequests/{pullRequest}?api-version={version}
```

| Parameter   | Type     | Default | Notes
|:------------|:---------|:--------|:----------------------------------------------------------------------------------------------------------------------------
| URL
| instance    | string   |         | TFS server name ({server:port}).
| project     | string   |         | ID or name of the [project](../../tfs/projects.md). *Optional if specifying an ID for repository.*
| repository  | string   |         | ID of the [repository](../repositories.md).
| pullRequest | integer  |         | ID of the pull request.
| Query
| api-version | string   |         | [Version](../../../concepts/rest-api-versioning.md) of the API to use.

[!code-REST [GET__git_repositories__repositoryId__pullRequests__pullRequestId__json](../_data/pullRequests/GET__git_repositories__repositoryId__pullRequests__pullRequestId_.json)]

## Get commits for the pull request

```no-highlight
GET https://{instance}/DefaultCollection/{project}/_apis/repos/git/repositories/{repository}/pullRequests/{pullRequest}/commits?api-version={version}
```

| Parameter   | Type     | Default | Notes
|:------------|:---------|:--------|:----------------------------------------------------------------------------------------------------------------------------
| URL
| instance    | string   |         | TFS server name ({server:port}).
| project     | string   |         | ID or name of the [project](../../tfs/projects.md). *Optional if specifying an ID for repository.*
| repository  | string   |         | ID of the [repository](../repositories.md).
| pullRequest | integer  |         | ID of the pull request.
| Query
| api-version | string   |         | [Version](../../../concepts/rest-api-versioning.md) of the API to use.

[!code-REST [GET__git_repositories__repositoryId__pullRequests__pullRequestId__commits_json](../_data/pullRequests/GET__git_repositories__repositoryId__pullRequests__pullRequestId__commits.json)]

## Create a pull request

```no-highlight
POST https://{instance}/DefaultCollection/{project}/_apis/repos/git/repositories/{repository}/pullRequests?api-version={version}
```
```json
{
  "sourceRefName": {string},
  "targetRefName": {string},
  "title": {string},
  "description": {string},
  "reviewers": [
    {
      "id": { GUID }
    }
  ]
}
```

| Parameter     | Type     | Notes
|:--------------|:---------|:----------------------------------------------------------------------------------------------------------------------------
| URL
| instance      | string   | TFS server name ({server:port}).
| project       | string   | ID or name of the [project](../../tfs/projects.md). *Optional if specifying an ID for repository.*
| repository    | string   | ID of the [repository](../repositories.md).
| pullRequest   | integer  | ID of the pull request.
| Query
| api-version   | string   | [Version](../../../concepts/rest-api-versioning.md) of the API to use.
| Body
| sourceRefName | string   | The name of the source [branch](../refs.md). Example: refs/heads/topic/sometopic
| targetRefName | string   | The name of the target [branch](../refs.md). Example: refs/heads/master
| title         | string   | Title of the pull request.
| description   | string   | Description of the pull request.
| reviewers.id  | integer  | ID(s) of the initial reviewer(s).

[!code-REST [POST__git_repositories__repositoryId__pullRequests_json](../_data/pullRequests/POST__git_repositories__repositoryId__pullRequests.json)]

## Update a pull request

```no-highlight
PATCH https://{instance}/DefaultCollection/{project}/_apis/repos/git/repositories/{repository}/pullrequests/{pullRequest}?api-version={version}
```

| Parameter             | Type     | Notes
|:----------------------|:---------|:------------------------------------------------------------------------------------------------
| URL
| instance              | string   | TFS server name ({server:port}).
| project               | string   | ID or name of the [project](../../tfs/projects.md). *Optional if specifying an ID for repository.*
| repository            | string   | ID of the [repository](../repositories.md).
| pullRequest           | integer  | ID of the pull request.
| Query
| api-version           | string   | [Version](../../../concepts/rest-api-versioning.md) of the API to use.
| Body
| title                 | string   | Title of the pull request
| description           | string   | Description of the pull request
| status                | string   | State of the pull request.  Possible values are: "active", "abandoned" and "completed".
| lastMergeSourceCommit | Commit   | ID of the commit to merge into the target branch.  Must be the latest commit to the source branch to ensure the correct commit is merged.  (only required when setting status to "completed")
| autoCompleteSetBy     | ID       | ID of the user who requested auto complete.  Set to zero to cancel auto-complete
| completionOptions     | CompletionOptions | see below


*CompletionOptions*

| Member      | Type    | Notes
|:------------|:--------|:---------------------------------------------------------------------------------------
| mergeCommitMessage | string | Commit message for the merge commit
| deleteSourceBranch | boolean | When true, the source branch will be deleted after the pull request is completed
| squashMerge | boolean | When true, a squash merge is used when the pull request is completed.  When false, a fast-forward merge is used
| bypassPolicy | boolean | When true, if the user is [exempt from policy enforcement](https://go.microsoft.com/fwlink/?linkid=841587) for the target branch, the merge will bypass policy requirements.


### Title

[!code-REST [PATCH__git_repositories__repositoryId__pullRequests__pullRequestId__json](../_data/pullRequests/PATCH__git_repositories__repositoryId__pullRequests__pullRequestId_.json)]

### description

[!code-REST [PATCH__git_repositories__repositoryId__pullRequests__pullRequestId_2_json](../_data/pullRequests/PATCH__git_repositories__repositoryId__pullRequests__pullRequestId_2.json)]

### Status

[!code-REST [PATCH__git_repositories__repositoryId__pullRequests__pullRequestId_3_json](../_data/pullRequests/PATCH__git_repositories__repositoryId__pullRequests__pullRequestId_3.json)]

### Auto-complete

[!code-REST [PATCH__git_repositories__repositoryId__pullRequests__autoCompletePullRequestId__json](../_data/pullRequests/PATCH__git_repositories__repositoryId__pullRequests__autoCompletePullRequestId_.json)]

