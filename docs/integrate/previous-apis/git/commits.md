---
ms.prod: devops
ms.technology: devops-ecosystem
monikerRange: '>= tfs-2015 < azure-devops'
title: Git Commits | REST API Reference for Team Foundation Server
description: Work with Git commits programmatically using the REST APIs for Team Foundation Server.
ms.assetid: DD768682-3DC8-4E00-85E8-699633A93EB2
ms.manager: jillfra
ms.topic: article
ms.author: elbatk
author: elbatk
ms.date: 08/23/2016
---

# Git commits

[!INCLUDE [azure-devops](../_data/azure-devops-message.md)]

[!INCLUDE [API_version](../_data/version.md)]

[!INCLUDE [GET_STARTED](../_data/get-started.md)]

## Get a list of commits

```no-highlight
GET https://{instance}/DefaultCollection/{project}/_apis/repos/git/repositories/{repository}/commits?api-version={version}[&branch={string}&commit={string}&itemPath={string}&committer={string}&author={string}&fromDate={dateTime}&toDate={dateTime}[&$top={integer}&$skip={integer}]
```

| Parameter  | Type     | Default | Notes
|:-----------|:---------|:--------|:----------------------------------------------------------------------------------------------------------------------------
| URL
| instance   | string   |         | TFS server name ({server:port}).
| project    | string   |         | ID or name of the [project](../tfs/projects.md). *Optional if specifying an ID for repository.*
| repository | string   |         | ID of the [repository](./repositories.md).
| Query
| api-version| string   |         | Version of the API to use.
| branch     | string   |         | The name of a branch in the repository. (Cannot combine with commit parameter.)
| commit     | string   |         | The id of a commit in the repository. (Cannot combine with branch parameter.)
| itemPath   | string   | /       | Path of an item in the repository.
| committer  | string   |         | Name of the person who committed the change.
| author     | string   |         | Name of the author.
| fromDate   | [DateTime](http://msdn.microsoft.com/library/az4se3k1.aspx) |         | Start date to search from.
| toDate     | [DateTime](http://msdn.microsoft.com/library/az4se3k1.aspx) |         | End date to search to.
| $skip      | integer  | 0       | Number of commits to skip.
| $top       | integer  | 100     | Number of commits to return.

[!INCLUDE [ID_vs_Name](_data/id_or_name.md)]

### By repository ID

If you do not specify any optional parameters, then we return all commits in the repository, regardless of reachability from branches.

#### Sample request

```
GET https://mytfsserver/DefaultCollection/_apis/git/repositories/278d5cd2-584d-4b63-824a-2ba458937249/commits?api-version=1.0
```

#### Sample response

```json
{
  "count": 19,
  "value": [
    {
      "commitId": "23d0bc5b128a10056dc68afece360d8a0fabb014",
      "author": {
        "name": "Norman Paulk",
        "email": "Fabrikamfiber16@hotmail.com",
        "date": "2014-06-30T18:10:55Z"
      },
      "committer": {
        "name": "Norman Paulk",
        "email": "Fabrikamfiber16@hotmail.com",
        "date": "2014-06-30T18:10:55Z"
      },
      "comment": "Better description for hello world",
      "changeCounts": {
        "Edit": 1
      },
      "url": "https://mytfsserver/DefaultCollection/_apis/git/repositories/278d5cd2-584d-4b63-824a-2ba458937249/commits/23d0bc5b128a10056dc68afece360d8a0fabb014",
      "remoteUrl": "https://mytfsserver/DefaultCollection/_git/Fabrikam-Fiber-Git/commit/23d0bc5b128a10056dc68afece360d8a0fabb014"
    },
    {
      "commitId": "fe17a84cc2dfe0ea3a2202ab4dbac0706058e41f",
      "author": {
        "name": "Norman Paulk",
        "email": "Fabrikamfiber16@hotmail.com",
        "date": "2014-06-30T17:51:09Z"
      },
      "committer": {
        "name": "Norman Paulk",
        "email": "Fabrikamfiber16@hotmail.com",
        "date": "2014-06-30T17:51:09Z"
      },
      "comment": "Better description for hello world",
      "changeCounts": {
        "Edit": 1
      },
      "url": "https://mytfsserver/DefaultCollection/_apis/git/repositories/278d5cd2-584d-4b63-824a-2ba458937249/commits/fe17a84cc2dfe0ea3a2202ab4dbac0706058e41f",
      "remoteUrl": "https://mytfsserver/DefaultCollection/_git/Fabrikam-Fiber-Git/commit/fe17a84cc2dfe0ea3a2202ab4dbac0706058e41f"
    },
    {
      "commitId": "0360c963d7d86d040e9c33bba836feab14da4ad3",
      "author": {
        "name": "Norman Paulk",
        "email": "Fabrikamfiber16@hotmail.com",
        "date": "2014-06-10T19:42:13Z"
      },
      "committer": {
        "name": "Norman Paulk",
        "email": "Fabrikamfiber16@hotmail.com",
        "date": "2014-06-10T19:42:13Z"
      },
      "comment": "Fix for hello world class",
      "changeCounts": {
        "Edit": 1
      },
      "url": "https://mytfsserver/DefaultCollection/_apis/git/repositories/278d5cd2-584d-4b63-824a-2ba458937249/commits/0360c963d7d86d040e9c33bba836feab14da4ad3",
      "remoteUrl": "https://mytfsserver/DefaultCollection/_git/Fabrikam-Fiber-Git/commit/0360c963d7d86d040e9c33bba836feab14da4ad3"
    },
    {
      "commitId": "097d82b8aeabe493bf4c3553d320ae2529bba591",
      "author": {
        "name": "Chuck Reinhart",
        "email": "fabrikamfiber3@hotmail.com",
        "date": "2014-06-09T21:43:25Z"
      },
      "committer": {
        "name": "Chuck Reinhart",
        "email": "fabrikamfiber3@hotmail.com",
        "date": "2014-06-09T21:43:25Z"
      },
      "comment": "fix registration page",
      "changeCounts": {
        "Edit": 1
      },
      "url": "https://mytfsserver/DefaultCollection/_apis/git/repositories/278d5cd2-584d-4b63-824a-2ba458937249/commits/097d82b8aeabe493bf4c3553d320ae2529bba591",
      "remoteUrl": "https://mytfsserver/DefaultCollection/_git/Fabrikam-Fiber-Git/commit/097d82b8aeabe493bf4c3553d320ae2529bba591"
    },
    {
      "commitId": "33b55f7cb7e7e245323987634f960cf4a6e6bc74",
      "author": {
        "name": "Chuck Reinhart",
        "email": "fabrikamfiber3@hotmail.com",
        "date": "2014-05-02T19:17:05Z"
      },
      "committer": {
        "name": "Chuck Reinhart",
        "email": "fabrikamfiber3@hotmail.com",
        "date": "2014-05-02T19:17:05Z"
      },
      "comment": "Fixed bug in web.config file",
      "changeCounts": {
        "Edit": 1
      },
      "url": "https://mytfsserver/DefaultCollection/_apis/git/repositories/278d5cd2-584d-4b63-824a-2ba458937249/commits/33b55f7cb7e7e245323987634f960cf4a6e6bc74",
      "remoteUrl": "https://mytfsserver/DefaultCollection/_git/Fabrikam-Fiber-Git/commit/33b55f7cb7e7e245323987634f960cf4a6e6bc74"
    },
    {
      "commitId": "aad331d8d3b131fa9ae03cf5e53965b51942618a",
      "author": {
        "name": "Chuck Reinhart",
        "email": "fabrikamfiber3@hotmail.com",
        "date": "2014-04-14T21:34:52Z"
      },
      "committer": {
        "name": "Chuck Reinhart",
        "email": "fabrikamfiber3@hotmail.com",
        "date": "2014-04-14T21:34:52Z"
      },
      "comment": "Fixed bug for address validation.",
      "changeCounts": {
        "Edit": 1
      },
      "url": "https://mytfsserver/DefaultCollection/_apis/git/repositories/278d5cd2-584d-4b63-824a-2ba458937249/commits/aad331d8d3b131fa9ae03cf5e53965b51942618a",
      "remoteUrl": "https://mytfsserver/DefaultCollection/_git/Fabrikam-Fiber-Git/commit/aad331d8d3b131fa9ae03cf5e53965b51942618a"
    },
    {
      "commitId": "7c18355d8c2d946c5e1ce7a56f49653854445a1a",
      "author": {
        "name": "Chuck Reinhart",
        "email": "fabrikamfiber3@hotmail.com",
        "date": "2014-03-28T17:05:58Z"
      },
      "committer": {
        "name": "Chuck Reinhart",
        "email": "fabrikamfiber3@hotmail.com",
        "date": "2014-03-28T17:05:58Z"
      },
      "comment": "Added validation logic.",
      "changeCounts": {
        "Edit": 1
      },
      "url": "https://mytfsserver/DefaultCollection/_apis/git/repositories/278d5cd2-584d-4b63-824a-2ba458937249/commits/7c18355d8c2d946c5e1ce7a56f49653854445a1a",
      "remoteUrl": "https://mytfsserver/DefaultCollection/_git/Fabrikam-Fiber-Git/commit/7c18355d8c2d946c5e1ce7a56f49653854445a1a"
    },
    {
      "commitId": "cdaeef70a358ede7b4dc7b4a089f3853f37a6d2c",
      "author": {
        "name": "Chuck Reinhart",
        "email": "fabrikamfiber3@hotmail.com",
        "date": "2014-03-27T19:51:11Z"
      },
      "committer": {
        "name": "Chuck Reinhart",
        "email": "fabrikamfiber3@hotmail.com",
        "date": "2014-03-27T19:51:11Z"
      },
      "comment": "Added validation logic for zip code.",
      "changeCounts": {
        "Edit": 1
      },
      "url": "https://mytfsserver/DefaultCollection/_apis/git/repositories/278d5cd2-584d-4b63-824a-2ba458937249/commits/cdaeef70a358ede7b4dc7b4a089f3853f37a6d2c",
      "remoteUrl": "https://mytfsserver/DefaultCollection/_git/Fabrikam-Fiber-Git/commit/cdaeef70a358ede7b4dc7b4a089f3853f37a6d2c"
    },
    {
      "commitId": "ef837766c5eb3ae81a4c663d36bf95a8aed91312",
      "author": {
        "name": "Chuck Reinhart",
        "email": "fabrikamfiber3@hotmail.com",
        "date": "2014-03-26T20:25:39Z"
      },
      "committer": {
        "name": "Chuck Reinhart",
        "email": "fabrikamfiber3@hotmail.com",
        "date": "2014-03-26T20:25:39Z"
      },
      "comment": "Add validation code for zip code values.",
      "changeCounts": {
        "Edit": 1
      },
      "url": "https://mytfsserver/DefaultCollection/_apis/git/repositories/278d5cd2-584d-4b63-824a-2ba458937249/commits/ef837766c5eb3ae81a4c663d36bf95a8aed91312",
      "remoteUrl": "https://mytfsserver/DefaultCollection/_git/Fabrikam-Fiber-Git/commit/ef837766c5eb3ae81a4c663d36bf95a8aed91312"
    },
    {
      "commitId": "bd73638408daff89bcdac549a5a3396c9a7ce9dd",
      "author": {
        "name": "Chuck Reinhart",
        "email": "fabrikamfiber3@hotmail.com",
        "date": "2014-03-26T18:56:21Z"
      },
      "committer": {
        "name": "Chuck Reinhart",
        "email": "fabrikamfiber3@hotmail.com",
        "date": "2014-03-26T18:56:21Z"
      },
      "comment": "Added validation logic for zip code values.",
      "changeCounts": {
        "Edit": 1
      },
      "url": "https://mytfsserver/DefaultCollection/_apis/git/repositories/278d5cd2-584d-4b63-824a-2ba458937249/commits/bd73638408daff89bcdac549a5a3396c9a7ce9dd",
      "remoteUrl": "https://mytfsserver/DefaultCollection/_git/Fabrikam-Fiber-Git/commit/bd73638408daff89bcdac549a5a3396c9a7ce9dd"
    },
    {
      "commitId": "03bea1cebffa5726da0e3c0bc1487796d0dd0ee8",
      "author": {
        "name": "Chuck Reinhart",
        "email": "fabrikamfiber3@hotmail.com",
        "date": "2014-03-26T18:42:24Z"
      },
      "committer": {
        "name": "Chuck Reinhart",
        "email": "fabrikamfiber3@hotmail.com",
        "date": "2014-03-26T18:42:24Z"
      },
      "comment": "Added validation logic for address values.",
      "changeCounts": {
        "Edit": 1
      },
      "url": "https://mytfsserver/DefaultCollection/_apis/git/repositories/278d5cd2-584d-4b63-824a-2ba458937249/commits/03bea1cebffa5726da0e3c0bc1487796d0dd0ee8",
      "remoteUrl": "https://mytfsserver/DefaultCollection/_git/Fabrikam-Fiber-Git/commit/03bea1cebffa5726da0e3c0bc1487796d0dd0ee8"
    },
    {
      "commitId": "c093714168cdd190c1e171a803e996d685454352",
      "author": {
        "name": "Chuck Reinhart",
        "email": "fabrikamfiber3@hotmail.com",
        "date": "2014-03-26T18:37:32Z"
      },
      "committer": {
        "name": "Chuck Reinhart",
        "email": "fabrikamfiber3@hotmail.com",
        "date": "2014-03-26T18:37:32Z"
      },
      "comment": "Added validation logic for zip code values.",
      "changeCounts": {
        "Edit": 1
      },
      "url": "https://mytfsserver/DefaultCollection/_apis/git/repositories/278d5cd2-584d-4b63-824a-2ba458937249/commits/c093714168cdd190c1e171a803e996d685454352",
      "remoteUrl": "https://mytfsserver/DefaultCollection/_git/Fabrikam-Fiber-Git/commit/c093714168cdd190c1e171a803e996d685454352"
    },
    {
      "commitId": "3d203ea73427cec36b77a3a5a2e4f1f8ba7de170",
      "author": {
        "name": "Chuck Reinhart",
        "email": "fabrikamfiber3@hotmail.com",
        "date": "2014-03-26T18:00:14Z"
      },
      "committer": {
        "name": "Chuck Reinhart",
        "email": "fabrikamfiber3@hotmail.com",
        "date": "2014-03-26T18:00:14Z"
      },
      "comment": "Added code.",
      "changeCounts": {
        "Edit": 1
      },
      "url": "https://mytfsserver/DefaultCollection/_apis/git/repositories/278d5cd2-584d-4b63-824a-2ba458937249/commits/3d203ea73427cec36b77a3a5a2e4f1f8ba7de170",
      "remoteUrl": "https://mytfsserver/DefaultCollection/_git/Fabrikam-Fiber-Git/commit/3d203ea73427cec36b77a3a5a2e4f1f8ba7de170"
    },
    {
      "commitId": "1eea03b2ad9f14a5e7297c1307e36c980eb910ea",
      "author": {
        "name": "Chuck Reinhart",
        "email": "fabrikamfiber3@hotmail.com",
        "date": "2014-03-26T16:17:11Z"
      },
      "committer": {
        "name": "Chuck Reinhart",
        "email": "fabrikamfiber3@hotmail.com",
        "date": "2014-03-26T16:17:11Z"
      },
      "comment": "Added code.",
      "changeCounts": {
        "Edit": 1
      },
      "url": "https://mytfsserver/DefaultCollection/_apis/git/repositories/278d5cd2-584d-4b63-824a-2ba458937249/commits/1eea03b2ad9f14a5e7297c1307e36c980eb910ea",
      "remoteUrl": "https://mytfsserver/DefaultCollection/_git/Fabrikam-Fiber-Git/commit/1eea03b2ad9f14a5e7297c1307e36c980eb910ea"
    },
    {
      "commitId": "c40b5ceb9c77096b9f59e6a9193dae527bda79d9",
      "author": {
        "name": "Chuck Reinhart",
        "email": "fabrikamfiber3@hotmail.com",
        "date": "2014-03-10T20:54:10Z"
      },
      "committer": {
        "name": "Chuck Reinhart",
        "email": "fabrikamfiber3@hotmail.com",
        "date": "2014-03-10T20:54:10Z"
      },
      "comment": "Added method for submitting new customer address.",
      "changeCounts": {
        "Edit": 2
      },
      "url": "https://mytfsserver/DefaultCollection/_apis/git/repositories/278d5cd2-584d-4b63-824a-2ba458937249/commits/c40b5ceb9c77096b9f59e6a9193dae527bda79d9",
      "remoteUrl": "https://mytfsserver/DefaultCollection/_git/Fabrikam-Fiber-Git/commit/c40b5ceb9c77096b9f59e6a9193dae527bda79d9"
    },
    {
      "commitId": "6ff5e8f6256cc58aa062dbb1e096c1e3b3435ebe",
      "author": {
        "name": "Chuck Reinhart",
        "email": "fabrikamfiber3@hotmail.com",
        "date": "2014-03-10T20:50:08Z"
      },
      "committer": {
        "name": "Chuck Reinhart",
        "email": "fabrikamfiber3@hotmail.com",
        "date": "2014-03-10T20:50:08Z"
      },
      "comment": "Adding customer address module project",
      "changeCounts": {
        "Add": 12
      },
      "url": "https://mytfsserver/DefaultCollection/_apis/git/repositories/278d5cd2-584d-4b63-824a-2ba458937249/commits/6ff5e8f6256cc58aa062dbb1e096c1e3b3435ebe",
      "remoteUrl": "https://mytfsserver/DefaultCollection/_git/Fabrikam-Fiber-Git/commit/6ff5e8f6256cc58aa062dbb1e096c1e3b3435ebe"
    },
    {
      "commitId": "03b1b831e41df536d836c95e2f68a42db4f3e0db",
      "author": {
        "name": "Chuck Reinhart",
        "email": "fabrikamfiber3@hotmail.com",
        "date": "2014-02-10T21:52:47Z"
      },
      "committer": {
        "name": "Chuck Reinhart",
        "email": "fabrikamfiber3@hotmail.com",
        "date": "2014-02-10T21:52:47Z"
      },
      "comment": "Add Hello World to TFS",
      "changeCounts": {
        "Add": 5
      },
      "url": "https://mytfsserver/DefaultCollection/_apis/git/repositories/278d5cd2-584d-4b63-824a-2ba458937249/commits/03b1b831e41df536d836c95e2f68a42db4f3e0db",
      "remoteUrl": "https://mytfsserver/DefaultCollection/_git/Fabrikam-Fiber-Git/commit/03b1b831e41df536d836c95e2f68a42db4f3e0db"
    },
    {
      "commitId": "67cae2b029dff7eb3dc062b49403aaedca5bad8d",
      "author": {
        "name": "Chuck Reinhart",
        "email": "fabrikamfiber3@hotmail.com",
        "date": "2014-01-29T23:52:56Z"
      },
      "committer": {
        "name": "Chuck Reinhart",
        "email": "fabrikamfiber3@hotmail.com",
        "date": "2014-01-29T23:52:56Z"
      },
      "comment": "home page",
      "changeCounts": {
        "Edit": 1
      },
      "url": "https://mytfsserver/DefaultCollection/_apis/git/repositories/278d5cd2-584d-4b63-824a-2ba458937249/commits/67cae2b029dff7eb3dc062b49403aaedca5bad8d",
      "remoteUrl": "https://mytfsserver/DefaultCollection/_git/Fabrikam-Fiber-Git/commit/67cae2b029dff7eb3dc062b49403aaedca5bad8d"
    },
    {
      "commitId": "be67f8871a4d2c75f13a51c1d3c30ac0d74d4ef4",
      "author": {
        "name": "Chuck Reinhart",
        "email": "fabrikamfiber3@hotmail.com",
        "date": "2014-01-29T23:32:09Z"
      },
      "committer": {
        "name": "Chuck Reinhart",
        "email": "fabrikamfiber3@hotmail.com",
        "date": "2014-01-29T23:32:09Z"
      },
      "comment": "First cut",
      "changeCounts": {
        "Add": 305
      },
      "url": "https://mytfsserver/DefaultCollection/_apis/git/repositories/278d5cd2-584d-4b63-824a-2ba458937249/commits/be67f8871a4d2c75f13a51c1d3c30ac0d74d4ef4",
      "remoteUrl": "https://mytfsserver/DefaultCollection/_git/Fabrikam-Fiber-Git/commit/be67f8871a4d2c75f13a51c1d3c30ac0d74d4ef4"
    }
  ]
}
```


### In the history of a commit

To return the commits in the history of a specific commit, use the `commit` parameter.

#### Sample request

```
GET https://mytfsserver/DefaultCollection/_apis/git/repositories/278d5cd2-584d-4b63-824a-2ba458937249/commits?api-version=3.0-preview&commit=33b55f7cb7e7e245323987634f960cf4a6e6bc74
```

#### Sample response

```json
{
  "count": 15,
  "value": [
    {
      "commitId": "33b55f7cb7e7e245323987634f960cf4a6e6bc74",
      "author": {
        "name": "Norman Paulk",
        "email": "Fabrikamfiber16@hotmail.com",
        "date": "2014-05-02T19:17:05Z"
      },
      "committer": {
        "name": "Norman Paulk",
        "email": "Fabrikamfiber16@hotmail.com",
        "date": "2014-05-02T19:17:05Z"
      },
      "comment": "Fixed bug in web.config file",
      "changeCounts": {
        "Edit": 1
      },
      "url": "https://mytfsserver/DefaultCollection/_apis/git/repositories/278d5cd2-584d-4b63-824a-2ba458937249/commits/33b55f7cb7e7e245323987634f960cf4a6e6bc74",
      "remoteUrl": "https://mytfsserver/DefaultCollection/_git/Fabrikam-Fiber-Git/commit/33b55f7cb7e7e245323987634f960cf4a6e6bc74"
    },
    {
      "commitId": "aad331d8d3b131fa9ae03cf5e53965b51942618a",
      "author": {
        "name": "Norman Paulk",
        "email": "Fabrikamfiber16@hotmail.com",
        "date": "2014-04-14T21:34:52Z"
      },
      "committer": {
        "name": "Norman Paulk",
        "email": "Fabrikamfiber16@hotmail.com",
        "date": "2014-04-14T21:34:52Z"
      },
      "comment": "Fixed bug for address validation.",
      "changeCounts": {
        "Edit": 1
      },
      "url": "https://mytfsserver/DefaultCollection/_apis/git/repositories/278d5cd2-584d-4b63-824a-2ba458937249/commits/aad331d8d3b131fa9ae03cf5e53965b51942618a",
      "remoteUrl": "https://mytfsserver/DefaultCollection/_git/Fabrikam-Fiber-Git/commit/aad331d8d3b131fa9ae03cf5e53965b51942618a"
    },
    {
      "commitId": "7c18355d8c2d946c5e1ce7a56f49653854445a1a",
      "author": {
        "name": "Chuck Reinhart",
        "email": "fabrikamfiber3@hotmail.com",
        "date": "2014-03-28T17:05:58Z"
      },
      "committer": {
        "name": "Chuck Reinhart",
        "email": "fabrikamfiber3@hotmail.com",
        "date": "2014-03-28T17:05:58Z"
      },
      "comment": "Added validation logic.",
      "changeCounts": {
        "Edit": 1
      },
      "url": "https://mytfsserver/DefaultCollection/_apis/git/repositories/278d5cd2-584d-4b63-824a-2ba458937249/commits/7c18355d8c2d946c5e1ce7a56f49653854445a1a",
      "remoteUrl": "https://mytfsserver/DefaultCollection/_git/Fabrikam-Fiber-Git/commit/7c18355d8c2d946c5e1ce7a56f49653854445a1a"
    },
    {
      "commitId": "cdaeef70a358ede7b4dc7b4a089f3853f37a6d2c",
      "author": {
        "name": "Norman Paulk",
        "email": "Fabrikamfiber16@hotmail.com",
        "date": "2014-03-27T19:51:11Z"
      },
      "committer": {
        "name": "Norman Paulk",
        "email": "Fabrikamfiber16@hotmail.com",
        "date": "2014-03-27T19:51:11Z"
      },
      "comment": "Added validation logic for zip code.",
      "changeCounts": {
        "Edit": 1
      },
      "url": "https://mytfsserver/DefaultCollection/_apis/git/repositories/278d5cd2-584d-4b63-824a-2ba458937249/commits/cdaeef70a358ede7b4dc7b4a089f3853f37a6d2c",
      "remoteUrl": "https://mytfsserver/DefaultCollection/_git/Fabrikam-Fiber-Git/commit/cdaeef70a358ede7b4dc7b4a089f3853f37a6d2c"
    },
    {
      "commitId": "ef837766c5eb3ae81a4c663d36bf95a8aed91312",
      "author": {
        "name": "Chuck Reinhart",
        "email": "fabrikamfiber3@hotmail.com",
        "date": "2014-03-26T20:25:39Z"
      },
      "committer": {
        "name": "Chuck Reinhart",
        "email": "fabrikamfiber3@hotmail.com",
        "date": "2014-03-26T20:25:39Z"
      },
      "comment": "Add validation code for zip code values.",
      "changeCounts": {
        "Edit": 1
      },
      "url": "https://mytfsserver/DefaultCollection/_apis/git/repositories/278d5cd2-584d-4b63-824a-2ba458937249/commits/ef837766c5eb3ae81a4c663d36bf95a8aed91312",
      "remoteUrl": "https://mytfsserver/DefaultCollection/_git/Fabrikam-Fiber-Git/commit/ef837766c5eb3ae81a4c663d36bf95a8aed91312"
    },
    {
      "commitId": "bd73638408daff89bcdac549a5a3396c9a7ce9dd",
      "author": {
        "name": "Norman Paulk",
        "email": "Fabrikamfiber16@hotmail.com",
        "date": "2014-03-26T18:56:21Z"
      },
      "committer": {
        "name": "Norman Paulk",
        "email": "Fabrikamfiber16@hotmail.com",
        "date": "2014-03-26T18:56:21Z"
      },
      "comment": "Added validation logic for zip code values.",
      "changeCounts": {
        "Edit": 1
      },
      "url": "https://mytfsserver/DefaultCollection/_apis/git/repositories/278d5cd2-584d-4b63-824a-2ba458937249/commits/bd73638408daff89bcdac549a5a3396c9a7ce9dd",
      "remoteUrl": "https://mytfsserver/DefaultCollection/_git/Fabrikam-Fiber-Git/commit/bd73638408daff89bcdac549a5a3396c9a7ce9dd"
    },
    {
      "commitId": "03bea1cebffa5726da0e3c0bc1487796d0dd0ee8",
      "author": {
        "name": "Norman Paulk",
        "email": "Fabrikamfiber16@hotmail.com",
        "date": "2014-03-26T18:42:24Z"
      },
      "committer": {
        "name": "Norman Paulk",
        "email": "Fabrikamfiber16@hotmail.com",
        "date": "2014-03-26T18:42:24Z"
      },
      "comment": "Added validation logic for address values.",
      "changeCounts": {
        "Edit": 1
      },
      "url": "https://mytfsserver/DefaultCollection/_apis/git/repositories/278d5cd2-584d-4b63-824a-2ba458937249/commits/03bea1cebffa5726da0e3c0bc1487796d0dd0ee8",
      "remoteUrl": "https://mytfsserver/DefaultCollection/_git/Fabrikam-Fiber-Git/commit/03bea1cebffa5726da0e3c0bc1487796d0dd0ee8"
    },
    {
      "commitId": "c093714168cdd190c1e171a803e996d685454352",
      "author": {
        "name": "Norman Paulk",
        "email": "Fabrikamfiber16@hotmail.com",
        "date": "2014-03-26T18:37:32Z"
      },
      "committer": {
        "name": "Norman Paulk",
        "email": "Fabrikamfiber16@hotmail.com",
        "date": "2014-03-26T18:37:32Z"
      },
      "comment": "Added validation logic for zip code values.",
      "changeCounts": {
        "Edit": 1
      },
      "url": "https://mytfsserver/DefaultCollection/_apis/git/repositories/278d5cd2-584d-4b63-824a-2ba458937249/commits/c093714168cdd190c1e171a803e996d685454352",
      "remoteUrl": "https://mytfsserver/DefaultCollection/_git/Fabrikam-Fiber-Git/commit/c093714168cdd190c1e171a803e996d685454352"
    },
    {
      "commitId": "3d203ea73427cec36b77a3a5a2e4f1f8ba7de170",
      "author": {
        "name": "Norman Paulk",
        "email": "Fabrikamfiber16@hotmail.com",
        "date": "2014-03-26T18:00:14Z"
      },
      "committer": {
        "name": "Norman Paulk",
        "email": "Fabrikamfiber16@hotmail.com",
        "date": "2014-03-26T18:00:14Z"
      },
      "comment": "Added code.",
      "changeCounts": {
        "Edit": 1
      },
      "url": "https://mytfsserver/DefaultCollection/_apis/git/repositories/278d5cd2-584d-4b63-824a-2ba458937249/commits/3d203ea73427cec36b77a3a5a2e4f1f8ba7de170",
      "remoteUrl": "https://mytfsserver/DefaultCollection/_git/Fabrikam-Fiber-Git/commit/3d203ea73427cec36b77a3a5a2e4f1f8ba7de170"
    },
    {
      "commitId": "1eea03b2ad9f14a5e7297c1307e36c980eb910ea",
      "author": {
        "name": "Norman Paulk",
        "email": "Fabrikamfiber16@hotmail.com",
        "date": "2014-03-26T16:17:11Z"
      },
      "committer": {
        "name": "Norman Paulk",
        "email": "Fabrikamfiber16@hotmail.com",
        "date": "2014-03-26T16:17:11Z"
      },
      "comment": "Added code.",
      "changeCounts": {
        "Edit": 1
      },
      "url": "https://mytfsserver/DefaultCollection/_apis/git/repositories/278d5cd2-584d-4b63-824a-2ba458937249/commits/1eea03b2ad9f14a5e7297c1307e36c980eb910ea",
      "remoteUrl": "https://mytfsserver/DefaultCollection/_git/Fabrikam-Fiber-Git/commit/1eea03b2ad9f14a5e7297c1307e36c980eb910ea"
    },
    {
      "commitId": "c40b5ceb9c77096b9f59e6a9193dae527bda79d9",
      "author": {
        "name": "Norman Paulk",
        "email": "Fabrikamfiber16@hotmail.com",
        "date": "2014-03-10T20:54:10Z"
      },
      "committer": {
        "name": "Norman Paulk",
        "email": "Fabrikamfiber16@hotmail.com",
        "date": "2014-03-10T20:54:10Z"
      },
      "comment": "Added method for submitting new customer address.",
      "changeCounts": {
        "Edit": 2
      },
      "url": "https://mytfsserver/DefaultCollection/_apis/git/repositories/278d5cd2-584d-4b63-824a-2ba458937249/commits/c40b5ceb9c77096b9f59e6a9193dae527bda79d9",
      "remoteUrl": "https://mytfsserver/DefaultCollection/_git/Fabrikam-Fiber-Git/commit/c40b5ceb9c77096b9f59e6a9193dae527bda79d9"
    },
    {
      "commitId": "6ff5e8f6256cc58aa062dbb1e096c1e3b3435ebe",
      "author": {
        "name": "Norman Paulk",
        "email": "Fabrikamfiber16@hotmail.com",
        "date": "2014-03-10T20:50:08Z"
      },
      "committer": {
        "name": "Norman Paulk",
        "email": "Fabrikamfiber16@hotmail.com",
        "date": "2014-03-10T20:50:08Z"
      },
      "comment": "Adding customer address module project",
      "changeCounts": {
        "Add": 12
      },
      "url": "https://mytfsserver/DefaultCollection/_apis/git/repositories/278d5cd2-584d-4b63-824a-2ba458937249/commits/6ff5e8f6256cc58aa062dbb1e096c1e3b3435ebe",
      "remoteUrl": "https://mytfsserver/DefaultCollection/_git/Fabrikam-Fiber-Git/commit/6ff5e8f6256cc58aa062dbb1e096c1e3b3435ebe"
    },
    {
      "commitId": "03b1b831e41df536d836c95e2f68a42db4f3e0db",
      "author": {
        "name": "Chuck Reinhart",
        "email": "fabrikamfiber3@hotmail.com",
        "date": "2014-02-10T21:52:47Z"
      },
      "committer": {
        "name": "Chuck Reinhart",
        "email": "fabrikamfiber3@hotmail.com",
        "date": "2014-02-10T21:52:47Z"
      },
      "comment": "Add Hello World to TFS",
      "changeCounts": {
        "Add": 5
      },
      "url": "https://mytfsserver/DefaultCollection/_apis/git/repositories/278d5cd2-584d-4b63-824a-2ba458937249/commits/03b1b831e41df536d836c95e2f68a42db4f3e0db",
      "remoteUrl": "https://mytfsserver/DefaultCollection/_git/Fabrikam-Fiber-Git/commit/03b1b831e41df536d836c95e2f68a42db4f3e0db"
    },
    {
      "commitId": "67cae2b029dff7eb3dc062b49403aaedca5bad8d",
      "author": {
        "name": "Chuck Reinhart",
        "email": "fabrikamfiber3@hotmail.com",
        "date": "2014-01-29T23:52:56Z"
      },
      "committer": {
        "name": "Chuck Reinhart",
        "email": "fabrikamfiber3@hotmail.com",
        "date": "2014-01-29T23:52:56Z"
      },
      "comment": "home page",
      "changeCounts": {
        "Edit": 1
      },
      "url": "https://mytfsserver/DefaultCollection/_apis/git/repositories/278d5cd2-584d-4b63-824a-2ba458937249/commits/67cae2b029dff7eb3dc062b49403aaedca5bad8d",
      "remoteUrl": "https://mytfsserver/DefaultCollection/_git/Fabrikam-Fiber-Git/commit/67cae2b029dff7eb3dc062b49403aaedca5bad8d"
    },
    {
      "commitId": "be67f8871a4d2c75f13a51c1d3c30ac0d74d4ef4",
      "author": {
        "name": "Chuck Reinhart",
        "email": "fabrikamfiber3@hotmail.com",
        "date": "2014-01-29T23:32:09Z"
      },
      "committer": {
        "name": "Chuck Reinhart",
        "email": "fabrikamfiber3@hotmail.com",
        "date": "2014-01-29T23:32:09Z"
      },
      "comment": "First cut",
      "changeCounts": {
        "Add": 305
      },
      "url": "https://mytfsserver/DefaultCollection/_apis/git/repositories/278d5cd2-584d-4b63-824a-2ba458937249/commits/be67f8871a4d2c75f13a51c1d3c30ac0d74d4ef4",
      "remoteUrl": "https://mytfsserver/DefaultCollection/_git/Fabrikam-Fiber-Git/commit/be67f8871a4d2c75f13a51c1d3c30ac0d74d4ef4"
    }
  ]
}
```


### In the history of a branch

To return the commits in the history of a branch, use the `branch` parameter.

#### Sample request

```
GET https://mytfsserver/DefaultCollection/_apis/git/repositories/278d5cd2-584d-4b63-824a-2ba458937249/commits?api-version=3.0-preview&branch=master
```

#### Sample response

```json
{
  "count": 15,
  "value": [
    {
      "commitId": "33b55f7cb7e7e245323987634f960cf4a6e6bc74",
      "author": {
        "name": "Norman Paulk",
        "email": "Fabrikamfiber16@hotmail.com",
        "date": "2014-05-02T19:17:05Z"
      },
      "committer": {
        "name": "Norman Paulk",
        "email": "Fabrikamfiber16@hotmail.com",
        "date": "2014-05-02T19:17:05Z"
      },
      "comment": "Fixed bug in web.config file",
      "changeCounts": {
        "Edit": 1
      },
      "url": "https://mytfsserver/DefaultCollection/_apis/git/repositories/278d5cd2-584d-4b63-824a-2ba458937249/commits/33b55f7cb7e7e245323987634f960cf4a6e6bc74",
      "remoteUrl": "https://mytfsserver/DefaultCollection/_git/Fabrikam-Fiber-Git/commit/33b55f7cb7e7e245323987634f960cf4a6e6bc74"
    },
    {
      "commitId": "aad331d8d3b131fa9ae03cf5e53965b51942618a",
      "author": {
        "name": "Norman Paulk",
        "email": "Fabrikamfiber16@hotmail.com",
        "date": "2014-04-14T21:34:52Z"
      },
      "committer": {
        "name": "Norman Paulk",
        "email": "Fabrikamfiber16@hotmail.com",
        "date": "2014-04-14T21:34:52Z"
      },
      "comment": "Fixed bug for address validation.",
      "changeCounts": {
        "Edit": 1
      },
      "url": "https://mytfsserver/DefaultCollection/_apis/git/repositories/278d5cd2-584d-4b63-824a-2ba458937249/commits/aad331d8d3b131fa9ae03cf5e53965b51942618a",
      "remoteUrl": "https://mytfsserver/DefaultCollection/_git/Fabrikam-Fiber-Git/commit/aad331d8d3b131fa9ae03cf5e53965b51942618a"
    },
    {
      "commitId": "7c18355d8c2d946c5e1ce7a56f49653854445a1a",
      "author": {
        "name": "Chuck Reinhart",
        "email": "fabrikamfiber3@hotmail.com",
        "date": "2014-03-28T17:05:58Z"
      },
      "committer": {
        "name": "Chuck Reinhart",
        "email": "fabrikamfiber3@hotmail.com",
        "date": "2014-03-28T17:05:58Z"
      },
      "comment": "Added validation logic.",
      "changeCounts": {
        "Edit": 1
      },
      "url": "https://mytfsserver/DefaultCollection/_apis/git/repositories/278d5cd2-584d-4b63-824a-2ba458937249/commits/7c18355d8c2d946c5e1ce7a56f49653854445a1a",
      "remoteUrl": "https://mytfsserver/DefaultCollection/_git/Fabrikam-Fiber-Git/commit/7c18355d8c2d946c5e1ce7a56f49653854445a1a"
    },
    {
      "commitId": "cdaeef70a358ede7b4dc7b4a089f3853f37a6d2c",
      "author": {
        "name": "Norman Paulk",
        "email": "Fabrikamfiber16@hotmail.com",
        "date": "2014-03-27T19:51:11Z"
      },
      "committer": {
        "name": "Norman Paulk",
        "email": "Fabrikamfiber16@hotmail.com",
        "date": "2014-03-27T19:51:11Z"
      },
      "comment": "Added validation logic for zip code.",
      "changeCounts": {
        "Edit": 1
      },
      "url": "https://mytfsserver/DefaultCollection/_apis/git/repositories/278d5cd2-584d-4b63-824a-2ba458937249/commits/cdaeef70a358ede7b4dc7b4a089f3853f37a6d2c",
      "remoteUrl": "https://mytfsserver/DefaultCollection/_git/Fabrikam-Fiber-Git/commit/cdaeef70a358ede7b4dc7b4a089f3853f37a6d2c"
    },
    {
      "commitId": "ef837766c5eb3ae81a4c663d36bf95a8aed91312",
      "author": {
        "name": "Chuck Reinhart",
        "email": "fabrikamfiber3@hotmail.com",
        "date": "2014-03-26T20:25:39Z"
      },
      "committer": {
        "name": "Chuck Reinhart",
        "email": "fabrikamfiber3@hotmail.com",
        "date": "2014-03-26T20:25:39Z"
      },
      "comment": "Add validation code for zip code values.",
      "changeCounts": {
        "Edit": 1
      },
      "url": "https://mytfsserver/DefaultCollection/_apis/git/repositories/278d5cd2-584d-4b63-824a-2ba458937249/commits/ef837766c5eb3ae81a4c663d36bf95a8aed91312",
      "remoteUrl": "https://mytfsserver/DefaultCollection/_git/Fabrikam-Fiber-Git/commit/ef837766c5eb3ae81a4c663d36bf95a8aed91312"
    },
    {
      "commitId": "bd73638408daff89bcdac549a5a3396c9a7ce9dd",
      "author": {
        "name": "Norman Paulk",
        "email": "Fabrikamfiber16@hotmail.com",
        "date": "2014-03-26T18:56:21Z"
      },
      "committer": {
        "name": "Norman Paulk",
        "email": "Fabrikamfiber16@hotmail.com",
        "date": "2014-03-26T18:56:21Z"
      },
      "comment": "Added validation logic for zip code values.",
      "changeCounts": {
        "Edit": 1
      },
      "url": "https://mytfsserver/DefaultCollection/_apis/git/repositories/278d5cd2-584d-4b63-824a-2ba458937249/commits/bd73638408daff89bcdac549a5a3396c9a7ce9dd",
      "remoteUrl": "https://mytfsserver/DefaultCollection/_git/Fabrikam-Fiber-Git/commit/bd73638408daff89bcdac549a5a3396c9a7ce9dd"
    },
    {
      "commitId": "03bea1cebffa5726da0e3c0bc1487796d0dd0ee8",
      "author": {
        "name": "Norman Paulk",
        "email": "Fabrikamfiber16@hotmail.com",
        "date": "2014-03-26T18:42:24Z"
      },
      "committer": {
        "name": "Norman Paulk",
        "email": "Fabrikamfiber16@hotmail.com",
        "date": "2014-03-26T18:42:24Z"
      },
      "comment": "Added validation logic for address values.",
      "changeCounts": {
        "Edit": 1
      },
      "url": "https://mytfsserver/DefaultCollection/_apis/git/repositories/278d5cd2-584d-4b63-824a-2ba458937249/commits/03bea1cebffa5726da0e3c0bc1487796d0dd0ee8",
      "remoteUrl": "https://mytfsserver/DefaultCollection/_git/Fabrikam-Fiber-Git/commit/03bea1cebffa5726da0e3c0bc1487796d0dd0ee8"
    },
    {
      "commitId": "c093714168cdd190c1e171a803e996d685454352",
      "author": {
        "name": "Norman Paulk",
        "email": "Fabrikamfiber16@hotmail.com",
        "date": "2014-03-26T18:37:32Z"
      },
      "committer": {
        "name": "Norman Paulk",
        "email": "Fabrikamfiber16@hotmail.com",
        "date": "2014-03-26T18:37:32Z"
      },
      "comment": "Added validation logic for zip code values.",
      "changeCounts": {
        "Edit": 1
      },
      "url": "https://mytfsserver/DefaultCollection/_apis/git/repositories/278d5cd2-584d-4b63-824a-2ba458937249/commits/c093714168cdd190c1e171a803e996d685454352",
      "remoteUrl": "https://mytfsserver/DefaultCollection/_git/Fabrikam-Fiber-Git/commit/c093714168cdd190c1e171a803e996d685454352"
    },
    {
      "commitId": "3d203ea73427cec36b77a3a5a2e4f1f8ba7de170",
      "author": {
        "name": "Norman Paulk",
        "email": "Fabrikamfiber16@hotmail.com",
        "date": "2014-03-26T18:00:14Z"
      },
      "committer": {
        "name": "Norman Paulk",
        "email": "Fabrikamfiber16@hotmail.com",
        "date": "2014-03-26T18:00:14Z"
      },
      "comment": "Added code.",
      "changeCounts": {
        "Edit": 1
      },
      "url": "https://mytfsserver/DefaultCollection/_apis/git/repositories/278d5cd2-584d-4b63-824a-2ba458937249/commits/3d203ea73427cec36b77a3a5a2e4f1f8ba7de170",
      "remoteUrl": "https://mytfsserver/DefaultCollection/_git/Fabrikam-Fiber-Git/commit/3d203ea73427cec36b77a3a5a2e4f1f8ba7de170"
    },
    {
      "commitId": "1eea03b2ad9f14a5e7297c1307e36c980eb910ea",
      "author": {
        "name": "Norman Paulk",
        "email": "Fabrikamfiber16@hotmail.com",
        "date": "2014-03-26T16:17:11Z"
      },
      "committer": {
        "name": "Norman Paulk",
        "email": "Fabrikamfiber16@hotmail.com",
        "date": "2014-03-26T16:17:11Z"
      },
      "comment": "Added code.",
      "changeCounts": {
        "Edit": 1
      },
      "url": "https://mytfsserver/DefaultCollection/_apis/git/repositories/278d5cd2-584d-4b63-824a-2ba458937249/commits/1eea03b2ad9f14a5e7297c1307e36c980eb910ea",
      "remoteUrl": "https://mytfsserver/DefaultCollection/_git/Fabrikam-Fiber-Git/commit/1eea03b2ad9f14a5e7297c1307e36c980eb910ea"
    },
    {
      "commitId": "c40b5ceb9c77096b9f59e6a9193dae527bda79d9",
      "author": {
        "name": "Norman Paulk",
        "email": "Fabrikamfiber16@hotmail.com",
        "date": "2014-03-10T20:54:10Z"
      },
      "committer": {
        "name": "Norman Paulk",
        "email": "Fabrikamfiber16@hotmail.com",
        "date": "2014-03-10T20:54:10Z"
      },
      "comment": "Added method for submitting new customer address.",
      "changeCounts": {
        "Edit": 2
      },
      "url": "https://mytfsserver/DefaultCollection/_apis/git/repositories/278d5cd2-584d-4b63-824a-2ba458937249/commits/c40b5ceb9c77096b9f59e6a9193dae527bda79d9",
      "remoteUrl": "https://mytfsserver/DefaultCollection/_git/Fabrikam-Fiber-Git/commit/c40b5ceb9c77096b9f59e6a9193dae527bda79d9"
    },
    {
      "commitId": "6ff5e8f6256cc58aa062dbb1e096c1e3b3435ebe",
      "author": {
        "name": "Norman Paulk",
        "email": "Fabrikamfiber16@hotmail.com",
        "date": "2014-03-10T20:50:08Z"
      },
      "committer": {
        "name": "Norman Paulk",
        "email": "Fabrikamfiber16@hotmail.com",
        "date": "2014-03-10T20:50:08Z"
      },
      "comment": "Adding customer address module project",
      "changeCounts": {
        "Add": 12
      },
      "url": "https://mytfsserver/DefaultCollection/_apis/git/repositories/278d5cd2-584d-4b63-824a-2ba458937249/commits/6ff5e8f6256cc58aa062dbb1e096c1e3b3435ebe",
      "remoteUrl": "https://mytfsserver/DefaultCollection/_git/Fabrikam-Fiber-Git/commit/6ff5e8f6256cc58aa062dbb1e096c1e3b3435ebe"
    },
    {
      "commitId": "03b1b831e41df536d836c95e2f68a42db4f3e0db",
      "author": {
        "name": "Chuck Reinhart",
        "email": "fabrikamfiber3@hotmail.com",
        "date": "2014-02-10T21:52:47Z"
      },
      "committer": {
        "name": "Chuck Reinhart",
        "email": "fabrikamfiber3@hotmail.com",
        "date": "2014-02-10T21:52:47Z"
      },
      "comment": "Add Hello World to TFS",
      "changeCounts": {
        "Add": 5
      },
      "url": "https://mytfsserver/DefaultCollection/_apis/git/repositories/278d5cd2-584d-4b63-824a-2ba458937249/commits/03b1b831e41df536d836c95e2f68a42db4f3e0db",
      "remoteUrl": "https://mytfsserver/DefaultCollection/_git/Fabrikam-Fiber-Git/commit/03b1b831e41df536d836c95e2f68a42db4f3e0db"
    },
    {
      "commitId": "67cae2b029dff7eb3dc062b49403aaedca5bad8d",
      "author": {
        "name": "Chuck Reinhart",
        "email": "fabrikamfiber3@hotmail.com",
        "date": "2014-01-29T23:52:56Z"
      },
      "committer": {
        "name": "Chuck Reinhart",
        "email": "fabrikamfiber3@hotmail.com",
        "date": "2014-01-29T23:52:56Z"
      },
      "comment": "home page",
      "changeCounts": {
        "Edit": 1
      },
      "url": "https://mytfsserver/DefaultCollection/_apis/git/repositories/278d5cd2-584d-4b63-824a-2ba458937249/commits/67cae2b029dff7eb3dc062b49403aaedca5bad8d",
      "remoteUrl": "https://mytfsserver/DefaultCollection/_git/Fabrikam-Fiber-Git/commit/67cae2b029dff7eb3dc062b49403aaedca5bad8d"
    },
    {
      "commitId": "be67f8871a4d2c75f13a51c1d3c30ac0d74d4ef4",
      "author": {
        "name": "Chuck Reinhart",
        "email": "fabrikamfiber3@hotmail.com",
        "date": "2014-01-29T23:32:09Z"
      },
      "committer": {
        "name": "Chuck Reinhart",
        "email": "fabrikamfiber3@hotmail.com",
        "date": "2014-01-29T23:32:09Z"
      },
      "comment": "First cut",
      "changeCounts": {
        "Add": 305
      },
      "url": "https://mytfsserver/DefaultCollection/_apis/git/repositories/278d5cd2-584d-4b63-824a-2ba458937249/commits/be67f8871a4d2c75f13a51c1d3c30ac0d74d4ef4",
      "remoteUrl": "https://mytfsserver/DefaultCollection/_git/Fabrikam-Fiber-Git/commit/be67f8871a4d2c75f13a51c1d3c30ac0d74d4ef4"
    }
  ]
}
```


You can also send a POST request and send the [items version](./items.md#getaspecificversion) in the request body.

#### Sample request

```
POST https://mytfsserver/DefaultCollection/_apis/git/repositories/278d5cd2-584d-4b63-824a-2ba458937249/commitsBatch?api-version=1.0
```
```json
{
  "itemVersion": {
    "versionType": "branch",
    "version": "develop"
  }
}
```

#### Sample response

```json
{
  "count": 2,
  "value": [
    {
      "commitId": "67cae2b029dff7eb3dc062b49403aaedca5bad8d",
      "author": {
        "name": "Chuck Reinhart",
        "email": "fabrikamfiber3@hotmail.com",
        "date": "2014-01-29T23:52:56Z"
      },
      "committer": {
        "name": "Chuck Reinhart",
        "email": "fabrikamfiber3@hotmail.com",
        "date": "2014-01-29T23:52:56Z"
      },
      "comment": "home page",
      "changeCounts": {
        "Edit": 1
      },
      "url": "https://mytfsserver/DefaultCollection/_apis/git/repositories/278d5cd2-584d-4b63-824a-2ba458937249/commits/67cae2b029dff7eb3dc062b49403aaedca5bad8d",
      "remoteUrl": "https://mytfsserver/DefaultCollection/_git/Fabrikam-Fiber-Git/commit/67cae2b029dff7eb3dc062b49403aaedca5bad8d"
    },
    {
      "commitId": "be67f8871a4d2c75f13a51c1d3c30ac0d74d4ef4",
      "author": {
        "name": "Chuck Reinhart",
        "email": "fabrikamfiber3@hotmail.com",
        "date": "2014-01-29T23:32:09Z"
      },
      "committer": {
        "name": "Chuck Reinhart",
        "email": "fabrikamfiber3@hotmail.com",
        "date": "2014-01-29T23:32:09Z"
      },
      "comment": "First cut",
      "changeCounts": {
        "Add": 305
      },
      "url": "https://mytfsserver/DefaultCollection/_apis/git/repositories/278d5cd2-584d-4b63-824a-2ba458937249/commits/be67f8871a4d2c75f13a51c1d3c30ac0d74d4ef4",
      "remoteUrl": "https://mytfsserver/DefaultCollection/_git/Fabrikam-Fiber-Git/commit/be67f8871a4d2c75f13a51c1d3c30ac0d74d4ef4"
    }
  ]
}
```


### For an item

Get all the commits that included changes to an item. *Note:* When specifying `itemPath`, if you do not also specify a branch or commit, then the search will begin at the default branch (or any branch, if no default branch exists).

#### Sample request

```
GET https://mytfsserver/DefaultCollection/_apis/git/repositories/278d5cd2-584d-4b63-824a-2ba458937249/commits?branch=master&itemPath=/MyWebSite/MyWebSite/Views/Home/_Home.cshtml&api-version=1.0
```

#### Sample response

```json
{
  "count": 2,
  "value": [
    {
      "commitId": "67cae2b029dff7eb3dc062b49403aaedca5bad8d",
      "author": {
        "name": "Chuck Reinhart",
        "email": "fabrikamfiber3@hotmail.com",
        "date": "2014-01-29T23:52:56Z"
      },
      "committer": {
        "name": "Chuck Reinhart",
        "email": "fabrikamfiber3@hotmail.com",
        "date": "2014-01-29T23:52:56Z"
      },
      "comment": "home page",
      "changeCounts": {
        "Edit": 1
      },
      "changes": [
        {
          "sourceServerItem": "/MyWebSite/MyWebSite/Views/Home/_Home.cshtml",
          "changeType": "edit"
        }
      ],
      "url": "https://mytfsserver/DefaultCollection/_apis/git/repositories/278d5cd2-584d-4b63-824a-2ba458937249/commits/67cae2b029dff7eb3dc062b49403aaedca5bad8d",
      "remoteUrl": "https://mytfsserver/DefaultCollection/_git/Fabrikam-Fiber-Git/commit/67cae2b029dff7eb3dc062b49403aaedca5bad8d"
    },
    {
      "commitId": "be67f8871a4d2c75f13a51c1d3c30ac0d74d4ef4",
      "author": {
        "name": "Chuck Reinhart",
        "email": "fabrikamfiber3@hotmail.com",
        "date": "2014-01-29T23:32:09Z"
      },
      "committer": {
        "name": "Chuck Reinhart",
        "email": "fabrikamfiber3@hotmail.com",
        "date": "2014-01-29T23:32:09Z"
      },
      "comment": "First cut",
      "changeCounts": {
        "Add": 305
      },
      "changes": [
        {
          "sourceServerItem": "/MyWebSite/MyWebSite/Views/Home/_Home.cshtml",
          "changeType": "add"
        }
      ],
      "url": "https://mytfsserver/DefaultCollection/_apis/git/repositories/278d5cd2-584d-4b63-824a-2ba458937249/commits/be67f8871a4d2c75f13a51c1d3c30ac0d74d4ef4",
      "remoteUrl": "https://mytfsserver/DefaultCollection/_git/Fabrikam-Fiber-Git/commit/be67f8871a4d2c75f13a51c1d3c30ac0d74d4ef4"
    }
  ]
}
```


#### Sample request

```
GET https://mytfsserver/DefaultCollection/_apis/git/repositories/278d5cd2-584d-4b63-824a-2ba458937249/commits?commit=f41fbd7a791a3a89701bbd4f6763b916c49f7b38&itemPath=/MyWebSite/MyWebSite/Views/Home/_Home.cshtml&api-version=1.0
```

#### Sample response

```json
{
  "count": 2,
  "value": [
    {
      "commitId": "67cae2b029dff7eb3dc062b49403aaedca5bad8d",
      "author": {
        "name": "Chuck Reinhart",
        "email": "fabrikamfiber3@hotmail.com",
        "date": "2014-01-29T23:52:56Z"
      },
      "committer": {
        "name": "Chuck Reinhart",
        "email": "fabrikamfiber3@hotmail.com",
        "date": "2014-01-29T23:52:56Z"
      },
      "comment": "home page",
      "changeCounts": {
        "Edit": 1
      },
      "changes": [
        {
          "sourceServerItem": "/MyWebSite/MyWebSite/Views/Home/_Home.cshtml",
          "changeType": "edit"
        }
      ],
      "url": "https://mytfsserver/DefaultCollection/_apis/git/repositories/278d5cd2-584d-4b63-824a-2ba458937249/commits/67cae2b029dff7eb3dc062b49403aaedca5bad8d",
      "remoteUrl": "https://mytfsserver/DefaultCollection/_git/Fabrikam-Fiber-Git/commit/67cae2b029dff7eb3dc062b49403aaedca5bad8d"
    },
    {
      "commitId": "be67f8871a4d2c75f13a51c1d3c30ac0d74d4ef4",
      "author": {
        "name": "Chuck Reinhart",
        "email": "fabrikamfiber3@hotmail.com",
        "date": "2014-01-29T23:32:09Z"
      },
      "committer": {
        "name": "Chuck Reinhart",
        "email": "fabrikamfiber3@hotmail.com",
        "date": "2014-01-29T23:32:09Z"
      },
      "comment": "First cut",
      "changeCounts": {
        "Add": 305
      },
      "changes": [
        {
          "sourceServerItem": "/MyWebSite/MyWebSite/Views/Home/_Home.cshtml",
          "changeType": "add"
        }
      ],
      "url": "https://mytfsserver/DefaultCollection/_apis/git/repositories/278d5cd2-584d-4b63-824a-2ba458937249/commits/be67f8871a4d2c75f13a51c1d3c30ac0d74d4ef4",
      "remoteUrl": "https://mytfsserver/DefaultCollection/_git/Fabrikam-Fiber-Git/commit/be67f8871a4d2c75f13a51c1d3c30ac0d74d4ef4"
    }
  ]
}
```


### By the committer

Get the commits based on the person who committed them to the repository.

#### Sample request

```
GET https://mytfsserver/DefaultCollection/_apis/git/repositories/278d5cd2-584d-4b63-824a-2ba458937249/commits?committer=Chuck Reinhart&api-version=1.0
```

#### Sample response

```json
{
  "count": 4,
  "value": [
    {
      "commitId": "097d82b8aeabe493bf4c3553d320ae2529bba591",
      "author": {
        "name": "Chuck Reinhart",
        "email": "fabrikamfiber3@hotmail.com",
        "date": "2014-06-09T21:43:25Z"
      },
      "committer": {
        "name": "Chuck Reinhart",
        "email": "fabrikamfiber3@hotmail.com",
        "date": "2014-06-09T21:43:25Z"
      },
      "comment": "fix registration page",
      "changeCounts": {
        "Edit": 1
      },
      "url": "https://mytfsserver/DefaultCollection/_apis/git/repositories/278d5cd2-584d-4b63-824a-2ba458937249/commits/097d82b8aeabe493bf4c3553d320ae2529bba591",
      "remoteUrl": "https://mytfsserver/DefaultCollection/_git/Fabrikam-Fiber-Git/commit/097d82b8aeabe493bf4c3553d320ae2529bba591"
    },
    {
      "commitId": "03b1b831e41df536d836c95e2f68a42db4f3e0db",
      "author": {
        "name": "Chuck Reinhart",
        "email": "fabrikamfiber3@hotmail.com",
        "date": "2014-02-10T21:52:47Z"
      },
      "committer": {
        "name": "Chuck Reinhart",
        "email": "fabrikamfiber3@hotmail.com",
        "date": "2014-02-10T21:52:47Z"
      },
      "comment": "Add Hello World to TFS",
      "changeCounts": {
        "Add": 5
      },
      "url": "https://mytfsserver/DefaultCollection/_apis/git/repositories/278d5cd2-584d-4b63-824a-2ba458937249/commits/03b1b831e41df536d836c95e2f68a42db4f3e0db",
      "remoteUrl": "https://mytfsserver/DefaultCollection/_git/Fabrikam-Fiber-Git/commit/03b1b831e41df536d836c95e2f68a42db4f3e0db"
    },
    {
      "commitId": "67cae2b029dff7eb3dc062b49403aaedca5bad8d",
      "author": {
        "name": "Chuck Reinhart",
        "email": "fabrikamfiber3@hotmail.com",
        "date": "2014-01-29T23:52:56Z"
      },
      "committer": {
        "name": "Chuck Reinhart",
        "email": "fabrikamfiber3@hotmail.com",
        "date": "2014-01-29T23:52:56Z"
      },
      "comment": "home page",
      "changeCounts": {
        "Edit": 1
      },
      "url": "https://mytfsserver/DefaultCollection/_apis/git/repositories/278d5cd2-584d-4b63-824a-2ba458937249/commits/67cae2b029dff7eb3dc062b49403aaedca5bad8d",
      "remoteUrl": "https://mytfsserver/DefaultCollection/_git/Fabrikam-Fiber-Git/commit/67cae2b029dff7eb3dc062b49403aaedca5bad8d"
    },
    {
      "commitId": "be67f8871a4d2c75f13a51c1d3c30ac0d74d4ef4",
      "author": {
        "name": "Chuck Reinhart",
        "email": "fabrikamfiber3@hotmail.com",
        "date": "2014-01-29T23:32:09Z"
      },
      "committer": {
        "name": "Chuck Reinhart",
        "email": "fabrikamfiber3@hotmail.com",
        "date": "2014-01-29T23:32:09Z"
      },
      "comment": "First cut",
      "changeCounts": {
        "Add": 305
      },
      "url": "https://mytfsserver/DefaultCollection/_apis/git/repositories/278d5cd2-584d-4b63-824a-2ba458937249/commits/be67f8871a4d2c75f13a51c1d3c30ac0d74d4ef4",
      "remoteUrl": "https://mytfsserver/DefaultCollection/_git/Fabrikam-Fiber-Git/commit/be67f8871a4d2c75f13a51c1d3c30ac0d74d4ef4"
    }
  ]
}
```


### By the author

Get the commits based on who authored the files that were committed to the repository.

#### Sample request

```
GET https://mytfsserver/DefaultCollection/_apis/git/repositories/278d5cd2-584d-4b63-824a-2ba458937249/commits?author=Chuck Reinhart&api-version=1.0
```

#### Sample response

```json
{
  "count": 4,
  "value": [
    {
      "commitId": "097d82b8aeabe493bf4c3553d320ae2529bba591",
      "author": {
        "name": "Chuck Reinhart",
        "email": "fabrikamfiber3@hotmail.com",
        "date": "2014-06-09T21:43:25Z"
      },
      "committer": {
        "name": "Chuck Reinhart",
        "email": "fabrikamfiber3@hotmail.com",
        "date": "2014-06-09T21:43:25Z"
      },
      "comment": "fix registration page",
      "changeCounts": {
        "Edit": 1
      },
      "url": "https://mytfsserver/DefaultCollection/_apis/git/repositories/278d5cd2-584d-4b63-824a-2ba458937249/commits/097d82b8aeabe493bf4c3553d320ae2529bba591",
      "remoteUrl": "https://mytfsserver/DefaultCollection/_git/Fabrikam-Fiber-Git/commit/097d82b8aeabe493bf4c3553d320ae2529bba591"
    },
    {
      "commitId": "03b1b831e41df536d836c95e2f68a42db4f3e0db",
      "author": {
        "name": "Chuck Reinhart",
        "email": "fabrikamfiber3@hotmail.com",
        "date": "2014-02-10T21:52:47Z"
      },
      "committer": {
        "name": "Chuck Reinhart",
        "email": "fabrikamfiber3@hotmail.com",
        "date": "2014-02-10T21:52:47Z"
      },
      "comment": "Add Hello World to TFS",
      "changeCounts": {
        "Add": 5
      },
      "url": "https://mytfsserver/DefaultCollection/_apis/git/repositories/278d5cd2-584d-4b63-824a-2ba458937249/commits/03b1b831e41df536d836c95e2f68a42db4f3e0db",
      "remoteUrl": "https://mytfsserver/DefaultCollection/_git/Fabrikam-Fiber-Git/commit/03b1b831e41df536d836c95e2f68a42db4f3e0db"
    },
    {
      "commitId": "67cae2b029dff7eb3dc062b49403aaedca5bad8d",
      "author": {
        "name": "Chuck Reinhart",
        "email": "fabrikamfiber3@hotmail.com",
        "date": "2014-01-29T23:52:56Z"
      },
      "committer": {
        "name": "Chuck Reinhart",
        "email": "fabrikamfiber3@hotmail.com",
        "date": "2014-01-29T23:52:56Z"
      },
      "comment": "home page",
      "changeCounts": {
        "Edit": 1
      },
      "url": "https://mytfsserver/DefaultCollection/_apis/git/repositories/278d5cd2-584d-4b63-824a-2ba458937249/commits/67cae2b029dff7eb3dc062b49403aaedca5bad8d",
      "remoteUrl": "https://mytfsserver/DefaultCollection/_git/Fabrikam-Fiber-Git/commit/67cae2b029dff7eb3dc062b49403aaedca5bad8d"
    },
    {
      "commitId": "be67f8871a4d2c75f13a51c1d3c30ac0d74d4ef4",
      "author": {
        "name": "Chuck Reinhart",
        "email": "fabrikamfiber3@hotmail.com",
        "date": "2014-01-29T23:32:09Z"
      },
      "committer": {
        "name": "Chuck Reinhart",
        "email": "fabrikamfiber3@hotmail.com",
        "date": "2014-01-29T23:32:09Z"
      },
      "comment": "First cut",
      "changeCounts": {
        "Add": 305
      },
      "url": "https://mytfsserver/DefaultCollection/_apis/git/repositories/278d5cd2-584d-4b63-824a-2ba458937249/commits/be67f8871a4d2c75f13a51c1d3c30ac0d74d4ef4",
      "remoteUrl": "https://mytfsserver/DefaultCollection/_git/Fabrikam-Fiber-Git/commit/be67f8871a4d2c75f13a51c1d3c30ac0d74d4ef4"
    }
  ]
}
```


### In a date range
<a name="inadaterange" />

#### Sample request

```
GET https://mytfsserver/DefaultCollection/_apis/git/repositories/278d5cd2-584d-4b63-824a-2ba458937249/commits?fromDate=2014-01-29T23:32:09Z&toDate=2014-01-29T23:32:09Z&api-version=1.0
```

#### Sample response

```json
{
  "count": 1,
  "value": [
    {
      "commitId": "be67f8871a4d2c75f13a51c1d3c30ac0d74d4ef4",
      "author": {
        "name": "Chuck Reinhart",
        "email": "fabrikamfiber3@hotmail.com",
        "date": "2014-01-29T23:32:09Z"
      },
      "committer": {
        "name": "Chuck Reinhart",
        "email": "fabrikamfiber3@hotmail.com",
        "date": "2014-01-29T23:32:09Z"
      },
      "comment": "First cut",
      "changeCounts": {
        "Add": 305
      },
      "url": "https://mytfsserver/DefaultCollection/_apis/git/repositories/278d5cd2-584d-4b63-824a-2ba458937249/commits/be67f8871a4d2c75f13a51c1d3c30ac0d74d4ef4",
      "remoteUrl": "https://mytfsserver/DefaultCollection/_git/Fabrikam-Fiber-Git/commit/be67f8871a4d2c75f13a51c1d3c30ac0d74d4ef4"
    }
  ]
}
```


### A page at a time
<a name="apageatatime" />

#### Sample request

```
GET https://mytfsserver/DefaultCollection/_apis/git/repositories/278d5cd2-584d-4b63-824a-2ba458937249/commits?$skip=1&$top=2&api-version=1.0
```

#### Sample response

```json
{
  "count": 2,
  "value": [
    {
      "commitId": "fe17a84cc2dfe0ea3a2202ab4dbac0706058e41f",
      "author": {
        "name": "Norman Paulk",
        "email": "Fabrikamfiber16@hotmail.com",
        "date": "2014-06-30T17:51:09Z"
      },
      "committer": {
        "name": "Norman Paulk",
        "email": "Fabrikamfiber16@hotmail.com",
        "date": "2014-06-30T17:51:09Z"
      },
      "comment": "Better description for hello world",
      "changeCounts": {
        "Edit": 1
      },
      "url": "https://mytfsserver/DefaultCollection/_apis/git/repositories/278d5cd2-584d-4b63-824a-2ba458937249/commits/fe17a84cc2dfe0ea3a2202ab4dbac0706058e41f",
      "remoteUrl": "https://mytfsserver/DefaultCollection/_git/Fabrikam-Fiber-Git/commit/fe17a84cc2dfe0ea3a2202ab4dbac0706058e41f"
    },
    {
      "commitId": "0360c963d7d86d040e9c33bba836feab14da4ad3",
      "author": {
        "name": "Norman Paulk",
        "email": "Fabrikamfiber16@hotmail.com",
        "date": "2014-06-10T19:42:13Z"
      },
      "committer": {
        "name": "Norman Paulk",
        "email": "Fabrikamfiber16@hotmail.com",
        "date": "2014-06-10T19:42:13Z"
      },
      "comment": "Fix for hello world class",
      "changeCounts": {
        "Edit": 1
      },
      "url": "https://mytfsserver/DefaultCollection/_apis/git/repositories/278d5cd2-584d-4b63-824a-2ba458937249/commits/0360c963d7d86d040e9c33bba836feab14da4ad3",
      "remoteUrl": "https://mytfsserver/DefaultCollection/_git/Fabrikam-Fiber-Git/commit/0360c963d7d86d040e9c33bba836feab14da4ad3"
    }
  ]
}
```


### From a push

Get the commits that were introduced to the repo by a push. This does not include commits which already existed in the repo, for instance on another branch. 

#### Sample request

```
GET https://mytfsserver/DefaultCollection/_apis/git/repositories/278d5cd2-584d-4b63-824a-2ba458937249/pushes/1/commits?api-version=1.0
```

#### Sample response

```json
{
  "count": 1,
  "value": [
    {
      "commitId": "be67f8871a4d2c75f13a51c1d3c30ac0d74d4ef4",
      "author": {
        "name": "Chuck Reinhart",
        "email": "fabrikamfiber3@hotmail.com",
        "date": "2014-01-29T23:32:09Z"
      },
      "committer": {
        "name": "Chuck Reinhart",
        "email": "fabrikamfiber3@hotmail.com",
        "date": "2014-01-29T23:32:09Z"
      },
      "comment": "First cut",
      "url": "https://mytfsserver/DefaultCollection/_apis/git/repositories/278d5cd2-584d-4b63-824a-2ba458937249/commits/be67f8871a4d2c75f13a51c1d3c30ac0d74d4ef4",
      "remoteUrl": "https://mytfsserver/DefaultCollection/_git/Fabrikam-Fiber-Git/commit/be67f8871a4d2c75f13a51c1d3c30ac0d74d4ef4",
      "_links": {
        "self": {
          "href": "https://mytfsserver/DefaultCollection/_apis/git/repositories/278d5cd2-584d-4b63-824a-2ba458937249/commits/be67f8871a4d2c75f13a51c1d3c30ac0d74d4ef4"
        },
        "repository": {
          "href": "https://mytfsserver/DefaultCollection/_apis/git/repositories/278d5cd2-584d-4b63-824a-2ba458937249"
        },
        "web": {
          "href": "https://mytfsserver/DefaultCollection/_git/Fabrikam-Fiber-Git/commit/be67f8871a4d2c75f13a51c1d3c30ac0d74d4ef4"
        },
        "changes": {
          "href": "https://mytfsserver/DefaultCollection/_apis/git/repositories/278d5cd2-584d-4b63-824a-2ba458937249/commits/be67f8871a4d2c75f13a51c1d3c30ac0d74d4ef4/changes"
        }
      }
    }
  ]
}
```


## Get a batch of commits

```no-highlight
POST https://{instance}/DefaultCollection/{project}/_apis/repos/git/repositories/{repository}/commitsBatch?api-version={version}
```

| Parameter  | Type     | Default | Notes
|:-----------|:---------|:--------|:----------------------------------------------------------------------------------------------------------------------------
| URL
| instance   | string   |         | TFS server name ({server:port}).
| project    | string   |         | ID or name of the [project](../tfs/projects.md). *Optional if specifying an ID for repository.*
| repository | string   |         | ID of the [repository](./repositories.md).
| Query
| api-version| string   |         | Version of the API to use.

### By a list of commit IDs

Send a POST request with a list of IDs you want.



### Between two versions

To return the set of commits in the history of one version that are _not_ in the history of another, send a POST request and send the [items versions](./items.md#getaspecificversion) in the request body.

#### Sample request

```
POST https://mytfsserver/DefaultCollection/_apis/git/repositories/278d5cd2-584d-4b63-824a-2ba458937249/commitsBatch?api-version=1.0
```
```json
{
  "itemVersion": {
    "versionType": "branch",
    "version": "develop"
  },
  "compareVersion": {
    "versionType": "branch",
    "version": "master"
  }
}
```

#### Sample response

```json
{
  "count": 17,
  "value": [
    {
      "commitId": "23d0bc5b128a10056dc68afece360d8a0fabb014",
      "author": {
        "name": "Norman Paulk",
        "email": "Fabrikamfiber16@hotmail.com",
        "date": "2014-06-30T18:10:55Z"
      },
      "committer": {
        "name": "Norman Paulk",
        "email": "Fabrikamfiber16@hotmail.com",
        "date": "2014-06-30T18:10:55Z"
      },
      "comment": "Better description for hello world",
      "changeCounts": {
        "Edit": 1
      },
      "url": "https://mytfsserver/DefaultCollection/_apis/git/repositories/278d5cd2-584d-4b63-824a-2ba458937249/commits/23d0bc5b128a10056dc68afece360d8a0fabb014",
      "remoteUrl": "https://mytfsserver/DefaultCollection/_git/Fabrikam-Fiber-Git/commit/23d0bc5b128a10056dc68afece360d8a0fabb014"
    },
    {
      "commitId": "fe17a84cc2dfe0ea3a2202ab4dbac0706058e41f",
      "author": {
        "name": "Norman Paulk",
        "email": "Fabrikamfiber16@hotmail.com",
        "date": "2014-06-30T17:51:09Z"
      },
      "committer": {
        "name": "Norman Paulk",
        "email": "Fabrikamfiber16@hotmail.com",
        "date": "2014-06-30T17:51:09Z"
      },
      "comment": "Better description for hello world",
      "changeCounts": {
        "Edit": 1
      },
      "url": "https://mytfsserver/DefaultCollection/_apis/git/repositories/278d5cd2-584d-4b63-824a-2ba458937249/commits/fe17a84cc2dfe0ea3a2202ab4dbac0706058e41f",
      "remoteUrl": "https://mytfsserver/DefaultCollection/_git/Fabrikam-Fiber-Git/commit/fe17a84cc2dfe0ea3a2202ab4dbac0706058e41f"
    },
    {
      "commitId": "0360c963d7d86d040e9c33bba836feab14da4ad3",
      "author": {
        "name": "Norman Paulk",
        "email": "Fabrikamfiber16@hotmail.com",
        "date": "2014-06-10T19:42:13Z"
      },
      "committer": {
        "name": "Norman Paulk",
        "email": "Fabrikamfiber16@hotmail.com",
        "date": "2014-06-10T19:42:13Z"
      },
      "comment": "Fix for hello world class",
      "changeCounts": {
        "Edit": 1
      },
      "url": "https://mytfsserver/DefaultCollection/_apis/git/repositories/278d5cd2-584d-4b63-824a-2ba458937249/commits/0360c963d7d86d040e9c33bba836feab14da4ad3",
      "remoteUrl": "https://mytfsserver/DefaultCollection/_git/Fabrikam-Fiber-Git/commit/0360c963d7d86d040e9c33bba836feab14da4ad3"
    },
    {
      "commitId": "097d82b8aeabe493bf4c3553d320ae2529bba591",
      "author": {
        "name": "Chuck Reinhart",
        "email": "fabrikamfiber3@hotmail.com",
        "date": "2014-06-09T21:43:25Z"
      },
      "committer": {
        "name": "Chuck Reinhart",
        "email": "fabrikamfiber3@hotmail.com",
        "date": "2014-06-09T21:43:25Z"
      },
      "comment": "fix registration page",
      "changeCounts": {
        "Edit": 1
      },
      "url": "https://mytfsserver/DefaultCollection/_apis/git/repositories/278d5cd2-584d-4b63-824a-2ba458937249/commits/097d82b8aeabe493bf4c3553d320ae2529bba591",
      "remoteUrl": "https://mytfsserver/DefaultCollection/_git/Fabrikam-Fiber-Git/commit/097d82b8aeabe493bf4c3553d320ae2529bba591"
    },
    {
      "commitId": "33b55f7cb7e7e245323987634f960cf4a6e6bc74",
      "author": {
        "name": "Will Smythe",
        "email": "wismythe@microsoft.com",
        "date": "2014-05-02T19:17:05Z"
      },
      "committer": {
        "name": "Will Smythe",
        "email": "wismythe@microsoft.com",
        "date": "2014-05-02T19:17:05Z"
      },
      "comment": "Fixed bug in web.config file",
      "changeCounts": {
        "Edit": 1
      },
      "url": "https://mytfsserver/DefaultCollection/_apis/git/repositories/278d5cd2-584d-4b63-824a-2ba458937249/commits/33b55f7cb7e7e245323987634f960cf4a6e6bc74",
      "remoteUrl": "https://mytfsserver/DefaultCollection/_git/Fabrikam-Fiber-Git/commit/33b55f7cb7e7e245323987634f960cf4a6e6bc74"
    },
    {
      "commitId": "aad331d8d3b131fa9ae03cf5e53965b51942618a",
      "author": {
        "name": "Howie Hilliker",
        "email": "hhill@microsoft.com",
        "date": "2014-04-14T21:34:52Z"
      },
      "committer": {
        "name": "Howie Hilliker",
        "email": "hhill@microsoft.com",
        "date": "2014-04-14T21:34:52Z"
      },
      "comment": "Fixed bug for address validation.",
      "changeCounts": {
        "Edit": 1
      },
      "url": "https://mytfsserver/DefaultCollection/_apis/git/repositories/278d5cd2-584d-4b63-824a-2ba458937249/commits/aad331d8d3b131fa9ae03cf5e53965b51942618a",
      "remoteUrl": "https://mytfsserver/DefaultCollection/_git/Fabrikam-Fiber-Git/commit/aad331d8d3b131fa9ae03cf5e53965b51942618a"
    },
    {
      "commitId": "7c18355d8c2d946c5e1ce7a56f49653854445a1a",
      "author": {
        "name": "Howie Hilliker",
        "email": "hhill@microsoft.com",
        "date": "2014-03-28T17:05:58Z"
      },
      "committer": {
        "name": "Howie Hilliker",
        "email": "hhill@microsoft.com",
        "date": "2014-03-28T17:05:58Z"
      },
      "comment": "Added validation logic.",
      "changeCounts": {
        "Edit": 1
      },
      "url": "https://mytfsserver/DefaultCollection/_apis/git/repositories/278d5cd2-584d-4b63-824a-2ba458937249/commits/7c18355d8c2d946c5e1ce7a56f49653854445a1a",
      "remoteUrl": "https://mytfsserver/DefaultCollection/_git/Fabrikam-Fiber-Git/commit/7c18355d8c2d946c5e1ce7a56f49653854445a1a"
    },
    {
      "commitId": "cdaeef70a358ede7b4dc7b4a089f3853f37a6d2c",
      "author": {
        "name": "Howie Hilliker",
        "email": "hhill@microsoft.com",
        "date": "2014-03-27T19:51:11Z"
      },
      "committer": {
        "name": "Howie Hilliker",
        "email": "hhill@microsoft.com",
        "date": "2014-03-27T19:51:11Z"
      },
      "comment": "Added validation logic for zip code.",
      "changeCounts": {
        "Edit": 1
      },
      "url": "https://mytfsserver/DefaultCollection/_apis/git/repositories/278d5cd2-584d-4b63-824a-2ba458937249/commits/cdaeef70a358ede7b4dc7b4a089f3853f37a6d2c",
      "remoteUrl": "https://mytfsserver/DefaultCollection/_git/Fabrikam-Fiber-Git/commit/cdaeef70a358ede7b4dc7b4a089f3853f37a6d2c"
    },
    {
      "commitId": "ef837766c5eb3ae81a4c663d36bf95a8aed91312",
      "author": {
        "name": "Howie Hilliker",
        "email": "hhill@microsoft.com",
        "date": "2014-03-26T20:25:39Z"
      },
      "committer": {
        "name": "Howie Hilliker",
        "email": "hhill@microsoft.com",
        "date": "2014-03-26T20:25:39Z"
      },
      "comment": "Add validation code for zip code values.",
      "changeCounts": {
        "Edit": 1
      },
      "url": "https://mytfsserver/DefaultCollection/_apis/git/repositories/278d5cd2-584d-4b63-824a-2ba458937249/commits/ef837766c5eb3ae81a4c663d36bf95a8aed91312",
      "remoteUrl": "https://mytfsserver/DefaultCollection/_git/Fabrikam-Fiber-Git/commit/ef837766c5eb3ae81a4c663d36bf95a8aed91312"
    },
    {
      "commitId": "bd73638408daff89bcdac549a5a3396c9a7ce9dd",
      "author": {
        "name": "Howie Hilliker",
        "email": "hhill@microsoft.com",
        "date": "2014-03-26T18:56:21Z"
      },
      "committer": {
        "name": "Howie Hilliker",
        "email": "hhill@microsoft.com",
        "date": "2014-03-26T18:56:21Z"
      },
      "comment": "Added validation logic for zip code values.",
      "changeCounts": {
        "Edit": 1
      },
      "url": "https://mytfsserver/DefaultCollection/_apis/git/repositories/278d5cd2-584d-4b63-824a-2ba458937249/commits/bd73638408daff89bcdac549a5a3396c9a7ce9dd",
      "remoteUrl": "https://mytfsserver/DefaultCollection/_git/Fabrikam-Fiber-Git/commit/bd73638408daff89bcdac549a5a3396c9a7ce9dd"
    },
    {
      "commitId": "03bea1cebffa5726da0e3c0bc1487796d0dd0ee8",
      "author": {
        "name": "Howie Hilliker",
        "email": "hhill@microsoft.com",
        "date": "2014-03-26T18:42:24Z"
      },
      "committer": {
        "name": "Howie Hilliker",
        "email": "hhill@microsoft.com",
        "date": "2014-03-26T18:42:24Z"
      },
      "comment": "Added validation logic for address values.",
      "changeCounts": {
        "Edit": 1
      },
      "url": "https://mytfsserver/DefaultCollection/_apis/git/repositories/278d5cd2-584d-4b63-824a-2ba458937249/commits/03bea1cebffa5726da0e3c0bc1487796d0dd0ee8",
      "remoteUrl": "https://mytfsserver/DefaultCollection/_git/Fabrikam-Fiber-Git/commit/03bea1cebffa5726da0e3c0bc1487796d0dd0ee8"
    },
    {
      "commitId": "c093714168cdd190c1e171a803e996d685454352",
      "author": {
        "name": "Howie Hilliker",
        "email": "hhill@microsoft.com",
        "date": "2014-03-26T18:37:32Z"
      },
      "committer": {
        "name": "Howie Hilliker",
        "email": "hhill@microsoft.com",
        "date": "2014-03-26T18:37:32Z"
      },
      "comment": "Added validation logic for zip code values.",
      "changeCounts": {
        "Edit": 1
      },
      "url": "https://mytfsserver/DefaultCollection/_apis/git/repositories/278d5cd2-584d-4b63-824a-2ba458937249/commits/c093714168cdd190c1e171a803e996d685454352",
      "remoteUrl": "https://mytfsserver/DefaultCollection/_git/Fabrikam-Fiber-Git/commit/c093714168cdd190c1e171a803e996d685454352"
    },
    {
      "commitId": "3d203ea73427cec36b77a3a5a2e4f1f8ba7de170",
      "author": {
        "name": "Howie Hilliker",
        "email": "hhill@microsoft.com",
        "date": "2014-03-26T18:00:14Z"
      },
      "committer": {
        "name": "Howie Hilliker",
        "email": "hhill@microsoft.com",
        "date": "2014-03-26T18:00:14Z"
      },
      "comment": "Added code.",
      "changeCounts": {
        "Edit": 1
      },
      "url": "https://mytfsserver/DefaultCollection/_apis/git/repositories/278d5cd2-584d-4b63-824a-2ba458937249/commits/3d203ea73427cec36b77a3a5a2e4f1f8ba7de170",
      "remoteUrl": "https://mytfsserver/DefaultCollection/_git/Fabrikam-Fiber-Git/commit/3d203ea73427cec36b77a3a5a2e4f1f8ba7de170"
    },
    {
      "commitId": "1eea03b2ad9f14a5e7297c1307e36c980eb910ea",
      "author": {
        "name": "Howie Hilliker",
        "email": "hhill@microsoft.com",
        "date": "2014-03-26T16:17:11Z"
      },
      "committer": {
        "name": "Howie Hilliker",
        "email": "hhill@microsoft.com",
        "date": "2014-03-26T16:17:11Z"
      },
      "comment": "Added code.",
      "changeCounts": {
        "Edit": 1
      },
      "url": "https://mytfsserver/DefaultCollection/_apis/git/repositories/278d5cd2-584d-4b63-824a-2ba458937249/commits/1eea03b2ad9f14a5e7297c1307e36c980eb910ea",
      "remoteUrl": "https://mytfsserver/DefaultCollection/_git/Fabrikam-Fiber-Git/commit/1eea03b2ad9f14a5e7297c1307e36c980eb910ea"
    },
    {
      "commitId": "c40b5ceb9c77096b9f59e6a9193dae527bda79d9",
      "author": {
        "name": "Howie Hilliker",
        "email": "hhill@microsoft.com",
        "date": "2014-03-10T20:54:10Z"
      },
      "committer": {
        "name": "Howie Hilliker",
        "email": "hhill@microsoft.com",
        "date": "2014-03-10T20:54:10Z"
      },
      "comment": "Added method for submitting new customer address.",
      "changeCounts": {
        "Edit": 2
      },
      "url": "https://mytfsserver/DefaultCollection/_apis/git/repositories/278d5cd2-584d-4b63-824a-2ba458937249/commits/c40b5ceb9c77096b9f59e6a9193dae527bda79d9",
      "remoteUrl": "https://mytfsserver/DefaultCollection/_git/Fabrikam-Fiber-Git/commit/c40b5ceb9c77096b9f59e6a9193dae527bda79d9"
    },
    {
      "commitId": "6ff5e8f6256cc58aa062dbb1e096c1e3b3435ebe",
      "author": {
        "name": "Howie Hilliker",
        "email": "hhill@microsoft.com",
        "date": "2014-03-10T20:50:08Z"
      },
      "committer": {
        "name": "Howie Hilliker",
        "email": "hhill@microsoft.com",
        "date": "2014-03-10T20:50:08Z"
      },
      "comment": "Adding customer address module project",
      "changeCounts": {
        "Add": 12
      },
      "url": "https://mytfsserver/DefaultCollection/_apis/git/repositories/278d5cd2-584d-4b63-824a-2ba458937249/commits/6ff5e8f6256cc58aa062dbb1e096c1e3b3435ebe",
      "remoteUrl": "https://mytfsserver/DefaultCollection/_git/Fabrikam-Fiber-Git/commit/6ff5e8f6256cc58aa062dbb1e096c1e3b3435ebe"
    },
    {
      "commitId": "03b1b831e41df536d836c95e2f68a42db4f3e0db",
      "author": {
        "name": "Chuck Reinhart",
        "email": "fabrikamfiber3@hotmail.com",
        "date": "2014-02-10T21:52:47Z"
      },
      "committer": {
        "name": "Chuck Reinhart",
        "email": "fabrikamfiber3@hotmail.com",
        "date": "2014-02-10T21:52:47Z"
      },
      "comment": "Add Hello World to TFS",
      "changeCounts": {
        "Add": 5
      },
      "url": "https://mytfsserver/DefaultCollection/_apis/git/repositories/278d5cd2-584d-4b63-824a-2ba458937249/commits/03b1b831e41df536d836c95e2f68a42db4f3e0db",
      "remoteUrl": "https://mytfsserver/DefaultCollection/_git/Fabrikam-Fiber-Git/commit/03b1b831e41df536d836c95e2f68a42db4f3e0db"
    }
  ]
}
```


## Get a single commit

```no-highlight
GET https://{instance}/DefaultCollection/{project}/_apis/repos/git/repositories/{repository}/commits/{commitId}?api-version={version}[&changeCount={integer}]
```
| Parameter   | Type    | Default | Notes
|:------------|:--------|:--------|:----------------------------------------------------------------------------------------------------------------------------
| URL
| instance    | string  |         | TFS server name ({server:port}).
| project     | string  |         | ID or name of the [project](../tfs/projects.md). *Optional if specifying an ID for repository.*
| repository  | string  |         | ID of the [repository](./repositories.md).
| commitId    | string  |         | ID of the commit.
| Query
| api-version | string  |         | [Version](../../concepts/rest-api-versioning.md) of the API to use.
| changeCount | integer | 0       | The number of changes in the commit to include in the response.

### Just the commit

#### Sample request

```
GET https://mytfsserver/DefaultCollection/_apis/git/repositories/278d5cd2-584d-4b63-824a-2ba458937249/commits/be67f8871a4d2c75f13a51c1d3c30ac0d74d4ef4?api-version=1.0
```

#### Sample response

```json
{
  "parents": [],
  "treeId": "7fa1a3523ffef51c525ea476bffff7d648b8cb3d",
  "push": {
    "pushedBy": {
      "id": "8c8c7d32-6b1b-47f4-b2e9-30b477b5ab3d",
      "displayName": "Chuck Reinhart",
      "uniqueName": "fabrikamfiber3@hotmail.com",
      "url": "https://mytfsserver/DefaultCollection/_apis/Identities/8c8c7d32-6b1b-47f4-b2e9-30b477b5ab3d",
      "imageUrl": "https://mytfsserver/DefaultCollection/_api/_common/identityImage?id=8c8c7d32-6b1b-47f4-b2e9-30b477b5ab3d"
    },
    "pushId": 1,
    "date": "2014-01-29T23:33:15.2434002Z"
  },
  "commitId": "be67f8871a4d2c75f13a51c1d3c30ac0d74d4ef4",
  "author": {
    "name": "Chuck Reinhart",
    "email": "fabrikamfiber3@hotmail.com",
    "date": "2014-01-29T23:32:09Z"
  },
  "committer": {
    "name": "Chuck Reinhart",
    "email": "fabrikamfiber3@hotmail.com",
    "date": "2014-01-29T23:32:09Z"
  },
  "comment": "First cut\n",
  "url": "https://mytfsserver/DefaultCollection/_apis/git/repositories/278d5cd2-584d-4b63-824a-2ba458937249/commits/be67f8871a4d2c75f13a51c1d3c30ac0d74d4ef4",
  "remoteUrl": "https://mytfsserver/DefaultCollection/_git/Fabrikam-Fiber-Git/commit/be67f8871a4d2c75f13a51c1d3c30ac0d74d4ef4",
  "_links": {
    "self": {
      "href": "https://mytfsserver/DefaultCollection/_apis/git/repositories/278d5cd2-584d-4b63-824a-2ba458937249/commits/be67f8871a4d2c75f13a51c1d3c30ac0d74d4ef4"
    },
    "repository": {
      "href": "https://mytfsserver/DefaultCollection/_apis/git/repositories/278d5cd2-584d-4b63-824a-2ba458937249"
    },
    "changes": {
      "href": "https://mytfsserver/DefaultCollection/_apis/git/repositories/278d5cd2-584d-4b63-824a-2ba458937249/commits/be67f8871a4d2c75f13a51c1d3c30ac0d74d4ef4/changes"
    },
    "web": {
      "href": "https://mytfsserver/DefaultCollection/_git/Fabrikam-Fiber-Git/commit/be67f8871a4d2c75f13a51c1d3c30ac0d74d4ef4"
    },
    "tree": {
      "href": "https://mytfsserver/DefaultCollection/_apis/git/repositories/278d5cd2-584d-4b63-824a-2ba458937249/trees/7fa1a3523ffef51c525ea476bffff7d648b8cb3d"
    }
  }
}
```


### With changed items
<a name="withchangeditems" />

#### Sample request

```
GET https://mytfsserver/DefaultCollection/_apis/git/repositories/278d5cd2-584d-4b63-824a-2ba458937249/commits/be67f8871a4d2c75f13a51c1d3c30ac0d74d4ef4?changeCount=10&api-version=1.0
```

#### Sample response

```json
{
  "parents": [],
  "treeId": "7fa1a3523ffef51c525ea476bffff7d648b8cb3d",
  "push": {
    "pushedBy": {
      "id": "8c8c7d32-6b1b-47f4-b2e9-30b477b5ab3d",
      "displayName": "Chuck Reinhart",
      "uniqueName": "fabrikamfiber3@hotmail.com",
      "url": "https://mytfsserver/DefaultCollection/_apis/Identities/8c8c7d32-6b1b-47f4-b2e9-30b477b5ab3d",
      "imageUrl": "https://mytfsserver/DefaultCollection/_api/_common/identityImage?id=8c8c7d32-6b1b-47f4-b2e9-30b477b5ab3d"
    },
    "pushId": 1,
    "date": "2014-01-29T23:33:15.2434002Z"
  },
  "commitId": "be67f8871a4d2c75f13a51c1d3c30ac0d74d4ef4",
  "author": {
    "name": "Chuck Reinhart",
    "email": "fabrikamfiber3@hotmail.com",
    "date": "2014-01-29T23:32:09Z"
  },
  "committer": {
    "name": "Chuck Reinhart",
    "email": "fabrikamfiber3@hotmail.com",
    "date": "2014-01-29T23:32:09Z"
  },
  "comment": "First cut\n",
  "changeCounts": {
    "Add": 456
  },
  "changes": [
    {
      "item": {
        "gitObjectType": "blob",
        "path": "/.gitattributes",
        "url": "https://mytfsserver/DefaultCollection/_apis/git/repositories/278d5cd2-584d-4b63-824a-2ba458937249/items/.gitattributes?versionType=Commit"
      },
      "changeType": "add"
    },
    {
      "item": {
        "gitObjectType": "blob",
        "path": "/.gitignore",
        "url": "https://mytfsserver/DefaultCollection/_apis/git/repositories/278d5cd2-584d-4b63-824a-2ba458937249/items/.gitignore?versionType=Commit"
      },
      "changeType": "add"
    },
    {
      "item": {
        "gitObjectType": "tree",
        "path": "/MyWebSite",
        "isFolder": true,
        "url": "https://mytfsserver/DefaultCollection/_apis/git/repositories/278d5cd2-584d-4b63-824a-2ba458937249/items/MyWebSite?versionType=Commit"
      },
      "changeType": "add"
    },
    {
      "item": {
        "gitObjectType": "tree",
        "path": "/MyWebSite/MyWebSite",
        "isFolder": true,
        "url": "https://mytfsserver/DefaultCollection/_apis/git/repositories/278d5cd2-584d-4b63-824a-2ba458937249/items/MyWebSite/MyWebSite?versionType=Commit"
      },
      "changeType": "add"
    },
    {
      "item": {
        "gitObjectType": "blob",
        "path": "/MyWebSite/MyWebSite.sln",
        "url": "https://mytfsserver/DefaultCollection/_apis/git/repositories/278d5cd2-584d-4b63-824a-2ba458937249/items/MyWebSite/MyWebSite.sln?versionType=Commit"
      },
      "changeType": "add"
    },
    {
      "item": {
        "gitObjectType": "tree",
        "path": "/MyWebSite/packages",
        "isFolder": true,
        "url": "https://mytfsserver/DefaultCollection/_apis/git/repositories/278d5cd2-584d-4b63-824a-2ba458937249/items/MyWebSite/packages?versionType=Commit"
      },
      "changeType": "add"
    },
    {
      "item": {
        "gitObjectType": "tree",
        "path": "/MyWebSite/MyWebSite/App_Start",
        "isFolder": true,
        "url": "https://mytfsserver/DefaultCollection/_apis/git/repositories/278d5cd2-584d-4b63-824a-2ba458937249/items/MyWebSite/MyWebSite/App_Start?versionType=Commit"
      },
      "changeType": "add"
    },
    {
      "item": {
        "gitObjectType": "tree",
        "path": "/MyWebSite/MyWebSite/Areas",
        "isFolder": true,
        "url": "https://mytfsserver/DefaultCollection/_apis/git/repositories/278d5cd2-584d-4b63-824a-2ba458937249/items/MyWebSite/MyWebSite/Areas?versionType=Commit"
      },
      "changeType": "add"
    },
    {
      "item": {
        "gitObjectType": "tree",
        "path": "/MyWebSite/MyWebSite/Content",
        "isFolder": true,
        "url": "https://mytfsserver/DefaultCollection/_apis/git/repositories/278d5cd2-584d-4b63-824a-2ba458937249/items/MyWebSite/MyWebSite/Content?versionType=Commit"
      },
      "changeType": "add"
    },
    {
      "item": {
        "gitObjectType": "tree",
        "path": "/MyWebSite/MyWebSite/Controllers",
        "isFolder": true,
        "url": "https://mytfsserver/DefaultCollection/_apis/git/repositories/278d5cd2-584d-4b63-824a-2ba458937249/items/MyWebSite/MyWebSite/Controllers?versionType=Commit"
      },
      "changeType": "add"
    }
  ],
  "url": "https://mytfsserver/DefaultCollection/_apis/git/repositories/278d5cd2-584d-4b63-824a-2ba458937249/commits/be67f8871a4d2c75f13a51c1d3c30ac0d74d4ef4",
  "remoteUrl": "https://mytfsserver/DefaultCollection/_git/Fabrikam-Fiber-Git/commit/be67f8871a4d2c75f13a51c1d3c30ac0d74d4ef4",
  "_links": {
    "self": {
      "href": "https://mytfsserver/DefaultCollection/_apis/git/repositories/278d5cd2-584d-4b63-824a-2ba458937249/commits/be67f8871a4d2c75f13a51c1d3c30ac0d74d4ef4"
    },
    "repository": {
      "href": "https://mytfsserver/DefaultCollection/_apis/git/repositories/278d5cd2-584d-4b63-824a-2ba458937249"
    },
    "changes": {
      "href": "https://mytfsserver/DefaultCollection/_apis/git/repositories/278d5cd2-584d-4b63-824a-2ba458937249/commits/be67f8871a4d2c75f13a51c1d3c30ac0d74d4ef4/changes"
    },
    "web": {
      "href": "https://mytfsserver/DefaultCollection/_git/Fabrikam-Fiber-Git/commit/be67f8871a4d2c75f13a51c1d3c30ac0d74d4ef4"
    },
    "tree": {
      "href": "https://mytfsserver/DefaultCollection/_apis/git/repositories/278d5cd2-584d-4b63-824a-2ba458937249/trees/7fa1a3523ffef51c525ea476bffff7d648b8cb3d"
    }
  }
}
```


## Commit status
<a name="commit_status" />

Commit status allows you to mark commits with status information from other systems.
For instance, it's used in VSTS to surface build status in the web UI.

### Add status

```no-highlight
POST https://{instance}/DefaultCollection/{project}/_apis/repos/git/repositories/{repository}/commits/{commit}/statuses?api-version={version}
```
```
{
  "state": {string},
  "description": {string},
  "targetURL": {string},
  "context": {
      "name": {string},
      "genre": {string}
   }
}
```

| Parameter     | Type     | Notes
|:--------------|:---------|:----------------------------------------------------------------------------------------------------------------------------
| URL
| instance      | string                                     | TFS server name ({server:port}).
| project       | string                                     | ID or name of the [project](../tfs/projects.md). *Optional if specifying an ID for repository.*| repository    | string                                     | ID of the [repository](./repositories.md).
| Query
| api-version   | string                                     | [Version](../../concepts/rest-api-versioning.md) of the API to use.
| Body
| state         | enum { Pending, Succeeded, Failed, Error } | The state of the commit.
| description   | string                                     | Description of the status. Example: "The build is successful".
| targetUrl     | string                                     | Url of the target.
| context.name  | string                                     | Name of the status. Example: Build123.
| context.genre | string                                     | Type of the status. Example: continuous-integration.

#### Sample request

```
POST https://mytfsserver/DefaultCollection/_apis/git/repositories/278d5cd2-584d-4b63-824a-2ba458937249/commits/67cae2b029dff7eb3dc062b49403aaedca5bad8d/statuses?api-version=2.1
```
```json
{
  "state": "succeeded",
  "description": "The build is successful",
  "targetUrl": "https://ci.fabrikam.com/my-project/build/123 ",
  "context": {
    "name": "Build123",
    "genre": "continuous-integration"
  }
}
```

#### Sample response

```json
{
  "state": "succeeded",
  "description": "The build is successful",
  "context": {
    "name": "Build123",
    "genre": "continuous-integration"
  },
  "creationDate": "2016-01-27T09:33:07Z",
  "createdBy": {
    "id": "278d5cd2-584d-4b63-824a-2ba458937249",
    "displayName": "Norman Paulk",
    "uniqueName": "Fabrikamfiber16",
    "url": "https://mytfsserver/DefaultCollection/_apis/Identities/278d5cd2-584d-4b63-824a-2ba458937249",
    "imageUrl": "https://mytfsserver/DefaultCollection/_api/_common/identityImage?id=278d5cd2-584d-4b63-824a-2ba458937249"
  },
  "targetUrl": "https://ci.fabrikam.com/my-project/build/123 "
}
```


### Get statuses

```no-highlight
GET https://{instance}/DefaultCollection/{project}/_apis/repos/git/repositories/{repository}/commits/{commit}/statuses?api-version={version}
```

| Parameter     | Type                                   | Notes
|:--------------|:---------------------------------------|:----------------------------------------------------------------------------------------------------------------------------
| URL
| instance      | string                                 | TFS server name ({server:port}).
| project       | string                                 | ID or name of the [project](../tfs/projects.md). *Optional if specifying an ID for repository.*| repository    | string                                 | ID of the [repository](./repositories.md).
| Query
| api-version   | string                                 | [Version](../../concepts/rest-api-versioning.md) of the API to use.

#### Sample request

```
GET https://mytfsserver/DefaultCollection/_apis/git/repositories/278d5cd2-584d-4b63-824a-2ba458937249/commits/67cae2b029dff7eb3dc062b49403aaedca5bad8d/statuses?api-version=2.1
```

#### Sample response

```json
{
  "count": 1,
  "value": [
    {
      "state": "succeeded",
      "description": "The build is successful",
      "context": {
        "name": "Build123",
        "genre": "continuous-integration"
      },
      "creationDate": "2016-01-27T09:33:07Z",
      "createdBy": {
        "id": "278d5cd2-584d-4b63-824a-2ba458937249",
        "displayName": "Norman Paulk",
        "uniqueName": "Fabrikamfiber16",
        "url": "https://mytfsserver/DefaultCollection/_apis/Identities/278d5cd2-584d-4b63-824a-2ba458937249",
        "imageUrl": "https://mytfsserver/DefaultCollection/_api/_common/identityImage?id=278d5cd2-584d-4b63-824a-2ba458937249"
      },
      "targetUrl": "https://ci.fabrikam.com/my-project/build/123 "
    }
  ]
}
```


