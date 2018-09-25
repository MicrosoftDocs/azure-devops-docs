---
ms.prod: devops
ms.technology: devops-ecosystem
monikerRange: '>= tfs-2013 < vsts'
title: Git Pull Request Comments | REST API Reference for Team Foundation Server
description: Work with Git pull requests programmatically using the REST APIs for Team Foundation Server.
ms.assetid: A2B50741-6909-4C7A-BAEB-13F2D7239246
ms.manager: douge
ms.topic: article
ms.author: elbatk
author: elbatk
ms.date: 11/3/2016
---

# Git pull request comments
[!INCLUDE [API_version](../../_data/version3-preview.md)]

[!INCLUDE [disclaimer](../../_data/disclaimer.md)]

[!INCLUDE [GET_STARTED](../../_data/get-started.md)]

Comment threads can be added to the pull request in general or to a specific location in a file.  When a comment thread is
created for a location in a file, an iteration context must be provided.  When requesting comment threads, a iteration context
should be provided then as well.  This allows the comment thread to be posisitioned correctly in each iteration.  So if these
two contexts do not match, the file location of the returned threads may not match
the file location of the thread when it was created if the file was modified between the two iterations.

## Get comments

```no-highlight
GET https://{instance}/DefaultCollection/{project}/_apis/repos/git/repositories/{repository}/pullRequests/{pullRequest}/threads?api-version={version}
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

[!code-REST [GET__git_repositories__repositoryId__pullRequests__pullRequestId__threads_json](../_data/pullRequests/GET__git_repositories__repositoryId__pullRequests__pullRequestId__threads.json)]

## Create a thread

```no-highlight
POST https://{instance}/DefaultCollection/{project}/_apis/repos/git/repositories/{repository}/pullRequests/{pullRequest}/threads?api-version={version}
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
| Body
| comments    | Comment | see below
| properties  | structure | optional properties to associate with the thread
| status      | integer | possible values: 1 (active), 2 (fixed), 3 (won't fix), 4 (closed), 5 (by design), 6 (pending)
| threadContext | ThreadContext | see below
| pullRequestThreadContext | PullRequestThreadContext | see below


*Comment*

| Member      | Type    | Notes
|:------------|:--------|:---------------------------------------------------------------------------------------
| parentCommentId | integer | comment ID of the parent comment when replying.  Should be zero when creating a thread
| content     | string  | content of the comment
| commentType | integer | must be 1

*ThreadContext*

| Member      | Type    | Notes
|:------------|:--------|:---------------------------------------------------------------------------------------
| filePath    | string  | file associated with this comment thread
| leftFileStart | FilePosition | see below
| leftFileEnd | FilePosition | see below
| rightFileStart | FilePosition | see below
| rightFileEnd | FilePosition | see below

When comparing files in a side-by-side view the older version is put on the left and the newer version is on the right.  A Comment
thread can be placed in either view and the location should be specified by either setting leftFileStart and leftFileEnd or by
setting rightFileStart and rightFileEnd.

*FilePosition*

| Member      | Type    | Notes
|:------------|:--------|:---------------------------------------------------------------------------------------
| line        | integer | one-based line number in the file
| offset      | integer | one-based position on the line


*PullRequestThreadContext*

| Member      | Type    | Notes
|:------------|:--------|:---------------------------------------------------------------------------------------
| iterationContext | IterationContext | see below

*IterationContext*

| Member      | Type    | Notes
|:------------|:--------|:---------------------------------------------------------------------------------------
| firstComparingIteration | integer | the iteration ID of the "left" version of the file
| secondComparingIteration | integer | the iteration ID of the "right" version of the file

### Create a comment thread

[!code-REST [POST__git_repositories__repositoryId__pullRequests__pullRequestId__threads_json](../_data/pullRequests/POST__git_repositories__repositoryId__pullRequests__pullRequestId__threads.json)]

### Create a thread at a particular file location

[!code-REST [POST__git_repositories__repositoryId__pullRequests__pullRequestId__threads2_json](../_data/pullRequests/POST__git_repositories__repositoryId__pullRequests__pullRequestId__threads2.json)]


## Add a comment to a thread

```no-highlight
POST https://{instance}/DefaultCollection/{project}/_apis/repos/git/repositories/{repository}/pullRequests/{pullRequest}/threads/{threadID}/comments?api-version={version}
```

| Parameter   | Type    | Notes
|:------------|:--------|:---------------------------------------------------------------------------------------
| URL
| instance    | string  | TFS server name ({server:port}).
| project     | string  | ID or name of the [project](../../tfs/projects.md). *Optional if specifying an ID for repository.*
| repository  | string  | ID of the [repository](../repositories.md).
| pullRequest | integer | ID of the pull request.
| threadID    | integer | ID of the thread.
| Query
| api-version | string  | [Version](../../../concepts/rest-api-versioning.md) of the API to use.
| Body
| parentCommentId | integer | comment ID of the parent comment when replying.  Only single level replies are supported - must be set to 1
| content     | string  | content of the comment
| commentType | integer | must be 1

[!code-REST [POST__git_repositories__repositoryId__pullRequests__pullRequestId__threads__threadId__comments_json](../_data/pullRequests/POST__git_repositories__repositoryId__pullRequests__pullRequestId__threads__threadId__comments.json)]

## Delete a comment

Threads can not be deleted, only comments can.  If all the comments in a thread are deleted, the thread will not be
displayed on the web page.

```no-highlight
POST https://{instance}/DefaultCollection/{project}/_apis/repos/git/repositories/{repository}/pullRequests/{pullRequest}/threads/{threadID}/comments/{commentID}?api-version={version}
```

| Parameter   | Type    | Notes
|:------------|:--------|:---------------------------------------------------------------------------------------
| URL
| instance    | string  | TFS server name ({server:port}).
| project     | string  | ID or name of the [project](../../tfs/projects.md). *Optional if specifying an ID for repository.*
| repository  | string  | ID of the [repository](../repositories.md).
| pullRequest | integer | ID of the pull request.
| threadID    | integer | ID of the thread.
| commentID   | integer | ID of the comment.
| Query
| api-version | string  | [Version](../../../concepts/rest-api-versioning.md) of the API to use.

[!code-REST [DELETE__git_repositories__repositoryId__pullRequests__pullRequestId__threads__threadId__comments__commentId__json](../_data/pullRequests/DELETE__git_repositories__repositoryId__pullRequests__pullRequestId__threads__threadId__comments__commentId_.json)]
