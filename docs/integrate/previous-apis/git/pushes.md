---
ms.prod: devops
ms.technology: devops-ecosystem
monikerRange: '>= tfs-2013 < vsts'
title: Git Pushes | REST API Reference for Team Foundation Server
description: Work with Git pushes programmatically using the REST APIs for Team Foundation Server.
ms.assetid: 20422F1A-30A6-405F-AAE2-BABDA6371E40
ms.manager: douge
ms.topic: article
ms.author: elbatk
author: elbatk
ms.date: 08/04/2016
---

# Git pushes
[!INCLUDE [API_version](../_data/version.md)]

[!INCLUDE [GET_STARTED](../_data/get-started.md)]

There are [code samples](https://github.com/Microsoft/vsts-dotnet-samples/blob/master/ClientLibrary/Snippets/Microsoft.TeamServices.Samples.Client/repos/git/PushesSample.cs) available for this endpoint.


## Get a list of pushes

```no-highlight
GET https://{instance}/DefaultCollection/{project}/_apis/repos/git/repositories/{repository}/pushes?api-version={version}[&fromDate={dateTime}&toDate={dateTime}&pusherId={guid}&$skip={integer}&$top={integer}]
```

| Parameter  | Type     | Default | Notes
|:-----------|:---------|:--------|:----------------------------------------------------------------------------------------------------------------------------
| URL
| instance   | string   |         | TFS server name ({server:port}).
| project    | string   |         | ID or name of the [project](../tfs/projects.md). *Optional if specifying an ID for repository.*
| repository | string   |         | ID or name of the [repository](./repositories.md).
| Query
| api-version| string   |         | [Version](../../concepts/rest-api-versioning.md) of the API to use.
| fromDate   | [DateTime](http://msdn.microsoft.com/en-us/library/az4se3k1.aspx) |         | Start date to search from.
| toDate     | [DateTime](http://msdn.microsoft.com/en-us/library/az4se3k1.aspx) |         | End date to search to.
| pusherId   | guid     |         | Identity of the person who submitted the push.
| refName    | string   |         | Branch name to consider.
| includeRefUpdates| bool	| false		| If `true`, include the list of refs that were updated by the push.
| $skip      | integer  | 0       | Number of pushes to skip.
| $top       | integer  | 100     | Number of pushes to return.

[!INCLUDE [ID_vs_Name](_data/id_or_name.md)]

### By repository ID

[!code-REST [GET__git_repositories__repositoryId__pushes_json](./_data/pushes/GET__git_repositories__repositoryId__pushes.json)]

### In a date range

[!code-REST [GET__git_repositories__repositoryId__pushes_fromDate-_fromDate__toDate-_toDate__json](./_data/pushes/GET__git_repositories__repositoryId__pushes_fromDate-_fromDate__toDate-_toDate_.json)]

### By who submitted the pushes

[!code-REST [GET__git_repositories__repositoryId__pushes_pusherId-_pusherId__json](./_data/pushes/GET__git_repositories__repositoryId__pushes_pusherId-_pusherId_.json)]

### A page at a time

[!code-REST [GET__git_repositories__repositoryId__pushes__skip-_skip___top-_top__json](./_data/pushes/GET__git_repositories__repositoryId__pushes__skip-_skip___top-_top_.json)]

### For a particular branch, including ref updates

[!code-REST [GET__git_repositories__repositoryId__pushes_refName-_refName__includeRefUpdates-true_json](./_data/pushes/GET__git_repositories__repositoryId__pushes_refName-_refName__includeRefUpdates-true.json)]


## Get a push

```
GET https://{instance}/DefaultCollection/{project}/_apis/repos/git/repositories/{repository}/pushes/{pushId}?api-version={version}[&includeRefUpdates={bool}]
```

| Parameter         | Type     | Default | Notes
|:------------------|:---------|:--------|:-----------------------------------------------------------------------------------------------------------------------------------------
| URL
| instance          | string   |         | TFS server name ({server:port}).
| project           | string   |         | ID or name of the [project](../tfs/projects.md). *Optional if specifying an ID for repository.*
| repository        | string   |         | ID of the [repository](./repositories.md).
| pushId            | integer  |         | ID of the push.
| Query
| api-version       | string   |         | [Version](../../concepts/rest-api-versioning.md) of the API to use.
| includeRefUpdates | bool     | false   | If `true`, include the list of refs that were updated by the push.

### Just the push

[!code-REST [GET__git_repositories__repositoryId__pushes__pushId__json](./_data/pushes/GET__git_repositories__repositoryId__pushes__pushId_.json)]

### With references
<a name="withreferences" />

Include the [references](./refs.md) that were updated with the push.

[!code-REST [GET__git_repositories__repositoryId__pushes__pushId__includeRefUpdates-true_json](./_data/pushes/GET__git_repositories__repositoryId__pushes__pushId__includeRefUpdates-true.json)]

## Create a push

Use this API to add, edit, rename, move, and delete files in a Git repository.
You can either make changes in an existing branch or create a new branch.
Each new push is limited to 1 commit, but this commit can contain 1 or more changes.

| Parameter         | Type     | Default | Notes
|:------------------|:---------|:--------|:-----------------------------------------------------------------------------------------------------------------------------------------
| URL
| instance          | string   |         | TFS server name ({server:port}).
| project           | string   |         | ID or name of the [project](../tfs/projects.md). *Optional if specifying an ID for repository.*
| repository        | string   |         | ID of the [repository](./repositories.md).
| Body
| refUpdates        | array    |         | The name of the branch to update or create with the new commit. ```name```: the name of the new or existing branch (value should start with ```refs/heads```). ```oldObjectId```: SHA1 of the commit this new commit is based on (i.e. the previous HEAD for existing branches). This value should be omitted when a new branch is specified by ```name```. 
| commits           | array    |         | Commit to create. Must be an array of 1 item. See examples below.

```no-highlight
POST https://{instance}/DefaultCollection/{project}/_apis/repos/git/repositories/{repository}/pushes?api-version={version}
```

### Initial commit (Create a new branch)

[!code-REST [POST__git_repositories__tempRepoId__pushes_json](./_data/pushes/POST__git_repositories__tempRepoId__pushes.json)]

### Add a text file

[!code-REST [POST__git_repositories__tempRepoId__pushes2_json](./_data/pushes/POST__git_repositories__tempRepoId__pushes2.json)]

### Add a binary file

*Keep in mind that [Git isn't designed to store large or frequently-changing binaries](https://visualstudio.com/docs/repos/git/manage-large-files).*

[!code-REST [POST__git_repositories__tempRepoId__pushes3_json](./_data/pushes/POST__git_repositories__tempRepoId__pushes3.json)]

### Update a file

[!code-REST [POST__git_repositories__tempRepoId__pushes4_json](./_data/pushes/POST__git_repositories__tempRepoId__pushes4.json)]

### Delete a file

[!code-REST [POST__git_repositories__tempRepoId__pushes5_json](./_data/pushes/POST__git_repositories__tempRepoId__pushes5.json)]

### Rename a file

[!code-REST [POST__git_repositories__tempRepoId__pushes6_json](./_data/pushes/POST__git_repositories__tempRepoId__pushes6.json)]

### Move a file

[!code-REST [POST__git_repositories__tempRepoId__pushes7_json](./_data/pushes/POST__git_repositories__tempRepoId__pushes7.json)]

### Update a file in a new branch

[!code-REST [POST__git_repositories__tempRepoId__pushes8_json](./_data/pushes/POST__git_repositories__tempRepoId__pushes8.json)]


### Multiple changes

[!code-REST [POST__git_repositories__tempRepoId__pushes9_json](./_data/pushes/POST__git_repositories__tempRepoId__pushes9.json)]

