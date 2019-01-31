---
ms.prod: devops
ms.technology: devops-ecosystem
monikerRange: '>= tfs-2015 < azure-devops'
title: Git Pushes | REST API Reference for Team Foundation Server
description: Work with Git pushes programmatically using the REST APIs for Team Foundation Server.
ms.assetid: 20422F1A-30A6-405F-AAE2-BABDA6371E40
ms.manager: jillfra
ms.topic: article
ms.author: elbatk
author: elbatk
ms.date: 08/04/2016
---

# Git pushes

[!INCLUDE [azure-devops](../_data/azure-devops-message.md)]

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
| fromDate   | [DateTime](http://msdn.microsoft.com/library/az4se3k1.aspx) |         | Start date to search from.
| toDate     | [DateTime](http://msdn.microsoft.com/library/az4se3k1.aspx) |         | End date to search to.
| pusherId   | guid     |         | Identity of the person who submitted the push.
| refName    | string   |         | Branch name to consider.
| includeRefUpdates| bool	| false		| If `true`, include the list of refs that were updated by the push.
| $skip      | integer  | 0       | Number of pushes to skip.
| $top       | integer  | 100     | Number of pushes to return.

[!INCLUDE [ID_vs_Name](_data/id_or_name.md)]

### By repository ID

#### Sample request

```
GET https://mytfsserver/DefaultCollection/_apis/git/repositories/278d5cd2-584d-4b63-824a-2ba458937249/pushes?api-version=1.0
```

#### Sample response

```json
{
  "count": 22,
  "value": [
    {
      "repository": {
        "id": "278d5cd2-584d-4b63-824a-2ba458937249",
        "name": "Fabrikam-Fiber-Git",
        "url": "https://mytfsserver/DefaultCollection/_apis/git/repositories/278d5cd2-584d-4b63-824a-2ba458937249",
        "project": {
          "id": "6ce954b1-ce1f-45d1-b94d-e6bf2464ba2c",
          "name": "Fabrikam-Fiber-Git",
          "url": "https://mytfsserver/DefaultCollection/_apis/projects/6ce954b1-ce1f-45d1-b94d-e6bf2464ba2c",
          "state": "wellFormed"
        },
        "defaultBranch": "refs/heads/master",
        "remoteUrl": "https://mytfsserver/DefaultCollection/_git/Fabrikam-Fiber-Git"
      },
      "pushedBy": {
        "id": "d6245f20-2af8-44f4-9451-8107cb2767db",
        "displayName": "Normal Paulk",
        "uniqueName": "fabrikamfiber16@hotmail.com",
        "url": "https://mytfsserver/DefaultCollection/_apis/Identities/d6245f20-2af8-44f4-9451-8107cb2767db",
        "imageUrl": "https://mytfsserver/DefaultCollection/_api/_common/identityImage?id=d6245f20-2af8-44f4-9451-8107cb2767db"
      },
      "pushId": 23,
      "date": "2014-06-30T18:11:18.0929091Z",
      "url": "https://mytfsserver/DefaultCollection/_apis/git/repositories/278d5cd2-584d-4b63-824a-2ba458937249/pushes/23"
    },
    {
      "repository": {
        "id": "278d5cd2-584d-4b63-824a-2ba458937249",
        "name": "Fabrikam-Fiber-Git",
        "url": "https://mytfsserver/DefaultCollection/_apis/git/repositories/278d5cd2-584d-4b63-824a-2ba458937249",
        "project": {
          "id": "6ce954b1-ce1f-45d1-b94d-e6bf2464ba2c",
          "name": "Fabrikam-Fiber-Git",
          "url": "https://mytfsserver/DefaultCollection/_apis/projects/6ce954b1-ce1f-45d1-b94d-e6bf2464ba2c",
          "state": "wellFormed"
        },
        "defaultBranch": "refs/heads/master",
        "remoteUrl": "https://mytfsserver/DefaultCollection/_git/Fabrikam-Fiber-Git"
      },
      "pushedBy": {
        "id": "d291b0c4-a05c-4ea6-8df1-4b41d5f39eff",
        "displayName": "Jamal Hartnett",
        "uniqueName": "fabrikamfiber4@hotmail.com",
        "url": "https://mytfsserver/DefaultCollection/_apis/Identities/d291b0c4-a05c-4ea6-8df1-4b41d5f39eff",
        "imageUrl": "https://mytfsserver/DefaultCollection/_api/_common/identityImage?id=d291b0c4-a05c-4ea6-8df1-4b41d5f39eff"
      },
      "pushId": 22,
      "date": "2014-06-30T18:10:58.3426019Z",
      "url": "https://mytfsserver/DefaultCollection/_apis/git/repositories/278d5cd2-584d-4b63-824a-2ba458937249/pushes/22"
    },
    {
      "repository": {
        "id": "278d5cd2-584d-4b63-824a-2ba458937249",
        "name": "Fabrikam-Fiber-Git",
        "url": "https://mytfsserver/DefaultCollection/_apis/git/repositories/278d5cd2-584d-4b63-824a-2ba458937249",
        "project": {
          "id": "6ce954b1-ce1f-45d1-b94d-e6bf2464ba2c",
          "name": "Fabrikam-Fiber-Git",
          "url": "https://mytfsserver/DefaultCollection/_apis/projects/6ce954b1-ce1f-45d1-b94d-e6bf2464ba2c",
          "state": "wellFormed"
        },
        "defaultBranch": "refs/heads/master",
        "remoteUrl": "https://mytfsserver/DefaultCollection/_git/Fabrikam-Fiber-Git"
      },
      "pushedBy": {
        "id": "d6245f20-2af8-44f4-9451-8107cb2767db",
        "displayName": "Normal Paulk",
        "uniqueName": "fabrikamfiber16@hotmail.com",
        "url": "https://mytfsserver/DefaultCollection/_apis/Identities/d6245f20-2af8-44f4-9451-8107cb2767db",
        "imageUrl": "https://mytfsserver/DefaultCollection/_api/_common/identityImage?id=d6245f20-2af8-44f4-9451-8107cb2767db"
      },
      "pushId": 21,
      "date": "2014-06-30T17:58:34.1765687Z",
      "url": "https://mytfsserver/DefaultCollection/_apis/git/repositories/278d5cd2-584d-4b63-824a-2ba458937249/pushes/21"
    },
    {
      "repository": {
        "id": "278d5cd2-584d-4b63-824a-2ba458937249",
        "name": "Fabrikam-Fiber-Git",
        "url": "https://mytfsserver/DefaultCollection/_apis/git/repositories/278d5cd2-584d-4b63-824a-2ba458937249",
        "project": {
          "id": "6ce954b1-ce1f-45d1-b94d-e6bf2464ba2c",
          "name": "Fabrikam-Fiber-Git",
          "url": "https://mytfsserver/DefaultCollection/_apis/projects/6ce954b1-ce1f-45d1-b94d-e6bf2464ba2c",
          "state": "wellFormed"
        },
        "defaultBranch": "refs/heads/master",
        "remoteUrl": "https://mytfsserver/DefaultCollection/_git/Fabrikam-Fiber-Git"
      },
      "pushedBy": {
        "id": "d291b0c4-a05c-4ea6-8df1-4b41d5f39eff",
        "displayName": "Jamal Hartnett",
        "uniqueName": "fabrikamfiber4@hotmail.com",
        "url": "https://mytfsserver/DefaultCollection/_apis/Identities/d291b0c4-a05c-4ea6-8df1-4b41d5f39eff",
        "imageUrl": "https://mytfsserver/DefaultCollection/_api/_common/identityImage?id=d291b0c4-a05c-4ea6-8df1-4b41d5f39eff"
      },
      "pushId": 20,
      "date": "2014-06-30T17:51:33.6241533Z",
      "url": "https://mytfsserver/DefaultCollection/_apis/git/repositories/278d5cd2-584d-4b63-824a-2ba458937249/pushes/20"
    },
    {
      "repository": {
        "id": "278d5cd2-584d-4b63-824a-2ba458937249",
        "name": "Fabrikam-Fiber-Git",
        "url": "https://mytfsserver/DefaultCollection/_apis/git/repositories/278d5cd2-584d-4b63-824a-2ba458937249",
        "project": {
          "id": "6ce954b1-ce1f-45d1-b94d-e6bf2464ba2c",
          "name": "Fabrikam-Fiber-Git",
          "url": "https://mytfsserver/DefaultCollection/_apis/projects/6ce954b1-ce1f-45d1-b94d-e6bf2464ba2c",
          "state": "wellFormed"
        },
        "defaultBranch": "refs/heads/master",
        "remoteUrl": "https://mytfsserver/DefaultCollection/_git/Fabrikam-Fiber-Git"
      },
      "pushedBy": {
        "id": "d6245f20-2af8-44f4-9451-8107cb2767db",
        "displayName": "Normal Paulk",
        "uniqueName": "fabrikamfiber16@hotmail.com",
        "url": "https://mytfsserver/DefaultCollection/_apis/Identities/d6245f20-2af8-44f4-9451-8107cb2767db",
        "imageUrl": "https://mytfsserver/DefaultCollection/_api/_common/identityImage?id=d6245f20-2af8-44f4-9451-8107cb2767db"
      },
      "pushId": 19,
      "date": "2014-06-30T17:48:43.0279161Z",
      "url": "https://mytfsserver/DefaultCollection/_apis/git/repositories/278d5cd2-584d-4b63-824a-2ba458937249/pushes/19"
    },
    {
      "repository": {
        "id": "278d5cd2-584d-4b63-824a-2ba458937249",
        "name": "Fabrikam-Fiber-Git",
        "url": "https://mytfsserver/DefaultCollection/_apis/git/repositories/278d5cd2-584d-4b63-824a-2ba458937249",
        "project": {
          "id": "6ce954b1-ce1f-45d1-b94d-e6bf2464ba2c",
          "name": "Fabrikam-Fiber-Git",
          "url": "https://mytfsserver/DefaultCollection/_apis/projects/6ce954b1-ce1f-45d1-b94d-e6bf2464ba2c",
          "state": "wellFormed"
        },
        "defaultBranch": "refs/heads/master",
        "remoteUrl": "https://mytfsserver/DefaultCollection/_git/Fabrikam-Fiber-Git"
      },
      "pushedBy": {
        "id": "d291b0c4-a05c-4ea6-8df1-4b41d5f39eff",
        "displayName": "Jamal Hartnett",
        "uniqueName": "fabrikamfiber4@hotmail.com",
        "url": "https://mytfsserver/DefaultCollection/_apis/Identities/d291b0c4-a05c-4ea6-8df1-4b41d5f39eff",
        "imageUrl": "https://mytfsserver/DefaultCollection/_api/_common/identityImage?id=d291b0c4-a05c-4ea6-8df1-4b41d5f39eff"
      },
      "pushId": 18,
      "date": "2014-06-10T19:42:18.9974258Z",
      "url": "https://mytfsserver/DefaultCollection/_apis/git/repositories/278d5cd2-584d-4b63-824a-2ba458937249/pushes/18"
    },
    {
      "repository": {
        "id": "278d5cd2-584d-4b63-824a-2ba458937249",
        "name": "Fabrikam-Fiber-Git",
        "url": "https://mytfsserver/DefaultCollection/_apis/git/repositories/278d5cd2-584d-4b63-824a-2ba458937249",
        "project": {
          "id": "6ce954b1-ce1f-45d1-b94d-e6bf2464ba2c",
          "name": "Fabrikam-Fiber-Git",
          "url": "https://mytfsserver/DefaultCollection/_apis/projects/6ce954b1-ce1f-45d1-b94d-e6bf2464ba2c",
          "state": "wellFormed"
        },
        "defaultBranch": "refs/heads/master",
        "remoteUrl": "https://mytfsserver/DefaultCollection/_git/Fabrikam-Fiber-Git"
      },
      "pushedBy": {
        "id": "d291b0c4-a05c-4ea6-8df1-4b41d5f39eff",
        "displayName": "Jamal Hartnett",
        "uniqueName": "fabrikamfiber4@hotmail.com",
        "url": "https://mytfsserver/DefaultCollection/_apis/Identities/d291b0c4-a05c-4ea6-8df1-4b41d5f39eff",
        "imageUrl": "https://mytfsserver/DefaultCollection/_api/_common/identityImage?id=d291b0c4-a05c-4ea6-8df1-4b41d5f39eff"
      },
      "pushId": 17,
      "date": "2014-06-10T19:41:17.1222374Z",
      "url": "https://mytfsserver/DefaultCollection/_apis/git/repositories/278d5cd2-584d-4b63-824a-2ba458937249/pushes/17"
    },
    {
      "repository": {
        "id": "278d5cd2-584d-4b63-824a-2ba458937249",
        "name": "Fabrikam-Fiber-Git",
        "url": "https://mytfsserver/DefaultCollection/_apis/git/repositories/278d5cd2-584d-4b63-824a-2ba458937249",
        "project": {
          "id": "6ce954b1-ce1f-45d1-b94d-e6bf2464ba2c",
          "name": "Fabrikam-Fiber-Git",
          "url": "https://mytfsserver/DefaultCollection/_apis/projects/6ce954b1-ce1f-45d1-b94d-e6bf2464ba2c",
          "state": "wellFormed"
        },
        "defaultBranch": "refs/heads/master",
        "remoteUrl": "https://mytfsserver/DefaultCollection/_git/Fabrikam-Fiber-Git"
      },
      "pushedBy": {
        "id": "8c8c7d32-6b1b-47f4-b2e9-30b477b5ab3d",
        "displayName": "Chuck Reinhart",
        "uniqueName": "fabrikamfiber3@hotmail.com",
        "url": "https://mytfsserver/DefaultCollection/_apis/Identities/8c8c7d32-6b1b-47f4-b2e9-30b477b5ab3d",
        "imageUrl": "https://mytfsserver/DefaultCollection/_api/_common/identityImage?id=8c8c7d32-6b1b-47f4-b2e9-30b477b5ab3d"
      },
      "pushId": 16,
      "date": "2014-06-09T21:43:41.9016278Z",
      "url": "https://mytfsserver/DefaultCollection/_apis/git/repositories/278d5cd2-584d-4b63-824a-2ba458937249/pushes/16"
    },
    {
      "repository": {
        "id": "278d5cd2-584d-4b63-824a-2ba458937249",
        "name": "Fabrikam-Fiber-Git",
        "url": "https://mytfsserver/DefaultCollection/_apis/git/repositories/278d5cd2-584d-4b63-824a-2ba458937249",
        "project": {
          "id": "6ce954b1-ce1f-45d1-b94d-e6bf2464ba2c",
          "name": "Fabrikam-Fiber-Git",
          "url": "https://mytfsserver/DefaultCollection/_apis/projects/6ce954b1-ce1f-45d1-b94d-e6bf2464ba2c",
          "state": "wellFormed"
        },
        "defaultBranch": "refs/heads/master",
        "remoteUrl": "https://mytfsserver/DefaultCollection/_git/Fabrikam-Fiber-Git"
      },
      "pushedBy": {
        "id": "d291b0c4-a05c-4ea6-8df1-4b41d5f39eff",
        "displayName": "Jamal Hartnett",
        "uniqueName": "fabrikamfiber4@hotmail.com",
        "url": "https://mytfsserver/DefaultCollection/_apis/Identities/d291b0c4-a05c-4ea6-8df1-4b41d5f39eff",
        "imageUrl": "https://mytfsserver/DefaultCollection/_api/_common/identityImage?id=d291b0c4-a05c-4ea6-8df1-4b41d5f39eff"
      },
      "pushId": 14,
      "date": "2014-05-02T19:17:13.3309587Z",
      "url": "https://mytfsserver/DefaultCollection/_apis/git/repositories/278d5cd2-584d-4b63-824a-2ba458937249/pushes/14"
    },
    {
      "repository": {
        "id": "278d5cd2-584d-4b63-824a-2ba458937249",
        "name": "Fabrikam-Fiber-Git",
        "url": "https://mytfsserver/DefaultCollection/_apis/git/repositories/278d5cd2-584d-4b63-824a-2ba458937249",
        "project": {
          "id": "6ce954b1-ce1f-45d1-b94d-e6bf2464ba2c",
          "name": "Fabrikam-Fiber-Git",
          "url": "https://mytfsserver/DefaultCollection/_apis/projects/6ce954b1-ce1f-45d1-b94d-e6bf2464ba2c",
          "state": "wellFormed"
        },
        "defaultBranch": "refs/heads/master",
        "remoteUrl": "https://mytfsserver/DefaultCollection/_git/Fabrikam-Fiber-Git"
      },
      "pushedBy": {
        "id": "8c8c7d32-6b1b-47f4-b2e9-30b477b5ab3d",
        "displayName": "Chuck Reinhart",
        "uniqueName": "fabrikamfiber3@hotmail.com",
        "url": "https://mytfsserver/DefaultCollection/_apis/Identities/8c8c7d32-6b1b-47f4-b2e9-30b477b5ab3d",
        "imageUrl": "https://mytfsserver/DefaultCollection/_api/_common/identityImage?id=8c8c7d32-6b1b-47f4-b2e9-30b477b5ab3d"
      },
      "pushId": 13,
      "date": "2014-04-14T21:35:01.130535Z",
      "url": "https://mytfsserver/DefaultCollection/_apis/git/repositories/278d5cd2-584d-4b63-824a-2ba458937249/pushes/13"
    },
    {
      "repository": {
        "id": "278d5cd2-584d-4b63-824a-2ba458937249",
        "name": "Fabrikam-Fiber-Git",
        "url": "https://mytfsserver/DefaultCollection/_apis/git/repositories/278d5cd2-584d-4b63-824a-2ba458937249",
        "project": {
          "id": "6ce954b1-ce1f-45d1-b94d-e6bf2464ba2c",
          "name": "Fabrikam-Fiber-Git",
          "url": "https://mytfsserver/DefaultCollection/_apis/projects/6ce954b1-ce1f-45d1-b94d-e6bf2464ba2c",
          "state": "wellFormed"
        },
        "defaultBranch": "refs/heads/master",
        "remoteUrl": "https://mytfsserver/DefaultCollection/_git/Fabrikam-Fiber-Git"
      },
      "pushedBy": {
        "id": "8c8c7d32-6b1b-47f4-b2e9-30b477b5ab3d",
        "displayName": "Chuck Reinhart",
        "uniqueName": "fabrikamfiber3@hotmail.com",
        "url": "https://mytfsserver/DefaultCollection/_apis/Identities/8c8c7d32-6b1b-47f4-b2e9-30b477b5ab3d",
        "imageUrl": "https://mytfsserver/DefaultCollection/_api/_common/identityImage?id=8c8c7d32-6b1b-47f4-b2e9-30b477b5ab3d"
      },
      "pushId": 12,
      "date": "2014-03-28T17:06:05.3396557Z",
      "url": "https://mytfsserver/DefaultCollection/_apis/git/repositories/278d5cd2-584d-4b63-824a-2ba458937249/pushes/12"
    },
    {
      "repository": {
        "id": "278d5cd2-584d-4b63-824a-2ba458937249",
        "name": "Fabrikam-Fiber-Git",
        "url": "https://mytfsserver/DefaultCollection/_apis/git/repositories/278d5cd2-584d-4b63-824a-2ba458937249",
        "project": {
          "id": "6ce954b1-ce1f-45d1-b94d-e6bf2464ba2c",
          "name": "Fabrikam-Fiber-Git",
          "url": "https://mytfsserver/DefaultCollection/_apis/projects/6ce954b1-ce1f-45d1-b94d-e6bf2464ba2c",
          "state": "wellFormed"
        },
        "defaultBranch": "refs/heads/master",
        "remoteUrl": "https://mytfsserver/DefaultCollection/_git/Fabrikam-Fiber-Git"
      },
      "pushedBy": {
        "id": "8c8c7d32-6b1b-47f4-b2e9-30b477b5ab3d",
        "displayName": "Chuck Reinhart",
        "uniqueName": "fabrikamfiber3@hotmail.com",
        "url": "https://mytfsserver/DefaultCollection/_apis/Identities/8c8c7d32-6b1b-47f4-b2e9-30b477b5ab3d",
        "imageUrl": "https://mytfsserver/DefaultCollection/_api/_common/identityImage?id=8c8c7d32-6b1b-47f4-b2e9-30b477b5ab3d"
      },
      "pushId": 11,
      "date": "2014-03-27T19:51:18.5726644Z",
      "url": "https://mytfsserver/DefaultCollection/_apis/git/repositories/278d5cd2-584d-4b63-824a-2ba458937249/pushes/11"
    },
    {
      "repository": {
        "id": "278d5cd2-584d-4b63-824a-2ba458937249",
        "name": "Fabrikam-Fiber-Git",
        "url": "https://mytfsserver/DefaultCollection/_apis/git/repositories/278d5cd2-584d-4b63-824a-2ba458937249",
        "project": {
          "id": "6ce954b1-ce1f-45d1-b94d-e6bf2464ba2c",
          "name": "Fabrikam-Fiber-Git",
          "url": "https://mytfsserver/DefaultCollection/_apis/projects/6ce954b1-ce1f-45d1-b94d-e6bf2464ba2c",
          "state": "wellFormed"
        },
        "defaultBranch": "refs/heads/master",
        "remoteUrl": "https://mytfsserver/DefaultCollection/_git/Fabrikam-Fiber-Git"
      },
      "pushedBy": {
        "id": "8c8c7d32-6b1b-47f4-b2e9-30b477b5ab3d",
        "displayName": "Chuck Reinhart",
        "uniqueName": "fabrikamfiber3@hotmail.com",
        "url": "https://mytfsserver/DefaultCollection/_apis/Identities/8c8c7d32-6b1b-47f4-b2e9-30b477b5ab3d",
        "imageUrl": "https://mytfsserver/DefaultCollection/_api/_common/identityImage?id=8c8c7d32-6b1b-47f4-b2e9-30b477b5ab3d"
      },
      "pushId": 10,
      "date": "2014-03-26T20:25:46.9664106Z",
      "url": "https://mytfsserver/DefaultCollection/_apis/git/repositories/278d5cd2-584d-4b63-824a-2ba458937249/pushes/10"
    },
    {
      "repository": {
        "id": "278d5cd2-584d-4b63-824a-2ba458937249",
        "name": "Fabrikam-Fiber-Git",
        "url": "https://mytfsserver/DefaultCollection/_apis/git/repositories/278d5cd2-584d-4b63-824a-2ba458937249",
        "project": {
          "id": "6ce954b1-ce1f-45d1-b94d-e6bf2464ba2c",
          "name": "Fabrikam-Fiber-Git",
          "url": "https://mytfsserver/DefaultCollection/_apis/projects/6ce954b1-ce1f-45d1-b94d-e6bf2464ba2c",
          "state": "wellFormed"
        },
        "defaultBranch": "refs/heads/master",
        "remoteUrl": "https://mytfsserver/DefaultCollection/_git/Fabrikam-Fiber-Git"
      },
      "pushedBy": {
        "id": "8c8c7d32-6b1b-47f4-b2e9-30b477b5ab3d",
        "displayName": "Chuck Reinhart",
        "uniqueName": "fabrikamfiber3@hotmail.com",
        "url": "https://mytfsserver/DefaultCollection/_apis/Identities/8c8c7d32-6b1b-47f4-b2e9-30b477b5ab3d",
        "imageUrl": "https://mytfsserver/DefaultCollection/_api/_common/identityImage?id=8c8c7d32-6b1b-47f4-b2e9-30b477b5ab3d"
      },
      "pushId": 9,
      "date": "2014-03-26T18:56:27.5115387Z",
      "url": "https://mytfsserver/DefaultCollection/_apis/git/repositories/278d5cd2-584d-4b63-824a-2ba458937249/pushes/9"
    },
    {
      "repository": {
        "id": "278d5cd2-584d-4b63-824a-2ba458937249",
        "name": "Fabrikam-Fiber-Git",
        "url": "https://mytfsserver/DefaultCollection/_apis/git/repositories/278d5cd2-584d-4b63-824a-2ba458937249",
        "project": {
          "id": "6ce954b1-ce1f-45d1-b94d-e6bf2464ba2c",
          "name": "Fabrikam-Fiber-Git",
          "url": "https://mytfsserver/DefaultCollection/_apis/projects/6ce954b1-ce1f-45d1-b94d-e6bf2464ba2c",
          "state": "wellFormed"
        },
        "defaultBranch": "refs/heads/master",
        "remoteUrl": "https://mytfsserver/DefaultCollection/_git/Fabrikam-Fiber-Git"
      },
      "pushedBy": {
        "id": "8c8c7d32-6b1b-47f4-b2e9-30b477b5ab3d",
        "displayName": "Chuck Reinhart",
        "uniqueName": "fabrikamfiber3@hotmail.com",
        "url": "https://mytfsserver/DefaultCollection/_apis/Identities/8c8c7d32-6b1b-47f4-b2e9-30b477b5ab3d",
        "imageUrl": "https://mytfsserver/DefaultCollection/_api/_common/identityImage?id=8c8c7d32-6b1b-47f4-b2e9-30b477b5ab3d"
      },
      "pushId": 8,
      "date": "2014-03-26T18:38:57.5892977Z",
      "url": "https://mytfsserver/DefaultCollection/_apis/git/repositories/278d5cd2-584d-4b63-824a-2ba458937249/pushes/8"
    },
    {
      "repository": {
        "id": "278d5cd2-584d-4b63-824a-2ba458937249",
        "name": "Fabrikam-Fiber-Git",
        "url": "https://mytfsserver/DefaultCollection/_apis/git/repositories/278d5cd2-584d-4b63-824a-2ba458937249",
        "project": {
          "id": "6ce954b1-ce1f-45d1-b94d-e6bf2464ba2c",
          "name": "Fabrikam-Fiber-Git",
          "url": "https://mytfsserver/DefaultCollection/_apis/projects/6ce954b1-ce1f-45d1-b94d-e6bf2464ba2c",
          "state": "wellFormed"
        },
        "defaultBranch": "refs/heads/master",
        "remoteUrl": "https://mytfsserver/DefaultCollection/_git/Fabrikam-Fiber-Git"
      },
      "pushedBy": {
        "id": "8c8c7d32-6b1b-47f4-b2e9-30b477b5ab3d",
        "displayName": "Chuck Reinhart",
        "uniqueName": "fabrikamfiber3@hotmail.com",
        "url": "https://mytfsserver/DefaultCollection/_apis/Identities/8c8c7d32-6b1b-47f4-b2e9-30b477b5ab3d",
        "imageUrl": "https://mytfsserver/DefaultCollection/_api/_common/identityImage?id=8c8c7d32-6b1b-47f4-b2e9-30b477b5ab3d"
      },
      "pushId": 7,
      "date": "2014-03-26T16:17:22.08603Z",
      "url": "https://mytfsserver/DefaultCollection/_apis/git/repositories/278d5cd2-584d-4b63-824a-2ba458937249/pushes/7"
    },
    {
      "repository": {
        "id": "278d5cd2-584d-4b63-824a-2ba458937249",
        "name": "Fabrikam-Fiber-Git",
        "url": "https://mytfsserver/DefaultCollection/_apis/git/repositories/278d5cd2-584d-4b63-824a-2ba458937249",
        "project": {
          "id": "6ce954b1-ce1f-45d1-b94d-e6bf2464ba2c",
          "name": "Fabrikam-Fiber-Git",
          "url": "https://mytfsserver/DefaultCollection/_apis/projects/6ce954b1-ce1f-45d1-b94d-e6bf2464ba2c",
          "state": "wellFormed"
        },
        "defaultBranch": "refs/heads/master",
        "remoteUrl": "https://mytfsserver/DefaultCollection/_git/Fabrikam-Fiber-Git"
      },
      "pushedBy": {
        "id": "8c8c7d32-6b1b-47f4-b2e9-30b477b5ab3d",
        "displayName": "Chuck Reinhart",
        "uniqueName": "fabrikamfiber3@hotmail.com",
        "url": "https://mytfsserver/DefaultCollection/_apis/Identities/8c8c7d32-6b1b-47f4-b2e9-30b477b5ab3d",
        "imageUrl": "https://mytfsserver/DefaultCollection/_api/_common/identityImage?id=8c8c7d32-6b1b-47f4-b2e9-30b477b5ab3d"
      },
      "pushId": 6,
      "date": "2014-03-10T20:54:16.5904334Z",
      "url": "https://mytfsserver/DefaultCollection/_apis/git/repositories/278d5cd2-584d-4b63-824a-2ba458937249/pushes/6"
    },
    {
      "repository": {
        "id": "278d5cd2-584d-4b63-824a-2ba458937249",
        "name": "Fabrikam-Fiber-Git",
        "url": "https://mytfsserver/DefaultCollection/_apis/git/repositories/278d5cd2-584d-4b63-824a-2ba458937249",
        "project": {
          "id": "6ce954b1-ce1f-45d1-b94d-e6bf2464ba2c",
          "name": "Fabrikam-Fiber-Git",
          "url": "https://mytfsserver/DefaultCollection/_apis/projects/6ce954b1-ce1f-45d1-b94d-e6bf2464ba2c",
          "state": "wellFormed"
        },
        "defaultBranch": "refs/heads/master",
        "remoteUrl": "https://mytfsserver/DefaultCollection/_git/Fabrikam-Fiber-Git"
      },
      "pushedBy": {
        "id": "8c8c7d32-6b1b-47f4-b2e9-30b477b5ab3d",
        "displayName": "Chuck Reinhart",
        "uniqueName": "fabrikamfiber3@hotmail.com",
        "url": "https://mytfsserver/DefaultCollection/_apis/Identities/8c8c7d32-6b1b-47f4-b2e9-30b477b5ab3d",
        "imageUrl": "https://mytfsserver/DefaultCollection/_api/_common/identityImage?id=8c8c7d32-6b1b-47f4-b2e9-30b477b5ab3d"
      },
      "pushId": 5,
      "date": "2014-03-10T20:50:17.9492166Z",
      "url": "https://mytfsserver/DefaultCollection/_apis/git/repositories/278d5cd2-584d-4b63-824a-2ba458937249/pushes/5"
    },
    {
      "repository": {
        "id": "278d5cd2-584d-4b63-824a-2ba458937249",
        "name": "Fabrikam-Fiber-Git",
        "url": "https://mytfsserver/DefaultCollection/_apis/git/repositories/278d5cd2-584d-4b63-824a-2ba458937249",
        "project": {
          "id": "6ce954b1-ce1f-45d1-b94d-e6bf2464ba2c",
          "name": "Fabrikam-Fiber-Git",
          "url": "https://mytfsserver/DefaultCollection/_apis/projects/6ce954b1-ce1f-45d1-b94d-e6bf2464ba2c",
          "state": "wellFormed"
        },
        "defaultBranch": "refs/heads/master",
        "remoteUrl": "https://mytfsserver/DefaultCollection/_git/Fabrikam-Fiber-Git"
      },
      "pushedBy": {
        "id": "d291b0c4-a05c-4ea6-8df1-4b41d5f39eff",
        "displayName": "Jamal Hartnett",
        "uniqueName": "fabrikamfiber4@hotmail.com",
        "url": "https://mytfsserver/DefaultCollection/_apis/Identities/d291b0c4-a05c-4ea6-8df1-4b41d5f39eff",
        "imageUrl": "https://mytfsserver/DefaultCollection/_api/_common/identityImage?id=d291b0c4-a05c-4ea6-8df1-4b41d5f39eff"
      },
      "pushId": 4,
      "date": "2014-02-10T21:53:19.6570373Z",
      "url": "https://mytfsserver/DefaultCollection/_apis/git/repositories/278d5cd2-584d-4b63-824a-2ba458937249/pushes/4"
    },
    {
      "repository": {
        "id": "278d5cd2-584d-4b63-824a-2ba458937249",
        "name": "Fabrikam-Fiber-Git",
        "url": "https://mytfsserver/DefaultCollection/_apis/git/repositories/278d5cd2-584d-4b63-824a-2ba458937249",
        "project": {
          "id": "6ce954b1-ce1f-45d1-b94d-e6bf2464ba2c",
          "name": "Fabrikam-Fiber-Git",
          "url": "https://mytfsserver/DefaultCollection/_apis/projects/6ce954b1-ce1f-45d1-b94d-e6bf2464ba2c",
          "state": "wellFormed"
        },
        "defaultBranch": "refs/heads/master",
        "remoteUrl": "https://mytfsserver/DefaultCollection/_git/Fabrikam-Fiber-Git"
      },
      "pushedBy": {
        "id": "8c8c7d32-6b1b-47f4-b2e9-30b477b5ab3d",
        "displayName": "Chuck Reinhart",
        "uniqueName": "fabrikamfiber3@hotmail.com",
        "url": "https://mytfsserver/DefaultCollection/_apis/Identities/8c8c7d32-6b1b-47f4-b2e9-30b477b5ab3d",
        "imageUrl": "https://mytfsserver/DefaultCollection/_api/_common/identityImage?id=8c8c7d32-6b1b-47f4-b2e9-30b477b5ab3d"
      },
      "pushId": 3,
      "date": "2014-01-29T23:53:35.705139Z",
      "url": "https://mytfsserver/DefaultCollection/_apis/git/repositories/278d5cd2-584d-4b63-824a-2ba458937249/pushes/3"
    },
    {
      "repository": {
        "id": "278d5cd2-584d-4b63-824a-2ba458937249",
        "name": "Fabrikam-Fiber-Git",
        "url": "https://mytfsserver/DefaultCollection/_apis/git/repositories/278d5cd2-584d-4b63-824a-2ba458937249",
        "project": {
          "id": "6ce954b1-ce1f-45d1-b94d-e6bf2464ba2c",
          "name": "Fabrikam-Fiber-Git",
          "url": "https://mytfsserver/DefaultCollection/_apis/projects/6ce954b1-ce1f-45d1-b94d-e6bf2464ba2c",
          "state": "wellFormed"
        },
        "defaultBranch": "refs/heads/master",
        "remoteUrl": "https://mytfsserver/DefaultCollection/_git/Fabrikam-Fiber-Git"
      },
      "pushedBy": {
        "id": "8c8c7d32-6b1b-47f4-b2e9-30b477b5ab3d",
        "displayName": "Chuck Reinhart",
        "uniqueName": "fabrikamfiber3@hotmail.com",
        "url": "https://mytfsserver/DefaultCollection/_apis/Identities/8c8c7d32-6b1b-47f4-b2e9-30b477b5ab3d",
        "imageUrl": "https://mytfsserver/DefaultCollection/_api/_common/identityImage?id=8c8c7d32-6b1b-47f4-b2e9-30b477b5ab3d"
      },
      "pushId": 2,
      "date": "2014-01-29T23:34:00.1018737Z",
      "url": "https://mytfsserver/DefaultCollection/_apis/git/repositories/278d5cd2-584d-4b63-824a-2ba458937249/pushes/2"
    },
    {
      "repository": {
        "id": "278d5cd2-584d-4b63-824a-2ba458937249",
        "name": "Fabrikam-Fiber-Git",
        "url": "https://mytfsserver/DefaultCollection/_apis/git/repositories/278d5cd2-584d-4b63-824a-2ba458937249",
        "project": {
          "id": "6ce954b1-ce1f-45d1-b94d-e6bf2464ba2c",
          "name": "Fabrikam-Fiber-Git",
          "url": "https://mytfsserver/DefaultCollection/_apis/projects/6ce954b1-ce1f-45d1-b94d-e6bf2464ba2c",
          "state": "wellFormed"
        },
        "defaultBranch": "refs/heads/master",
        "remoteUrl": "https://mytfsserver/DefaultCollection/_git/Fabrikam-Fiber-Git"
      },
      "pushedBy": {
        "id": "8c8c7d32-6b1b-47f4-b2e9-30b477b5ab3d",
        "displayName": "Chuck Reinhart",
        "uniqueName": "fabrikamfiber3@hotmail.com",
        "url": "https://mytfsserver/DefaultCollection/_apis/Identities/8c8c7d32-6b1b-47f4-b2e9-30b477b5ab3d",
        "imageUrl": "https://mytfsserver/DefaultCollection/_api/_common/identityImage?id=8c8c7d32-6b1b-47f4-b2e9-30b477b5ab3d"
      },
      "pushId": 1,
      "date": "2014-01-29T23:33:15.2434002Z",
      "url": "https://mytfsserver/DefaultCollection/_apis/git/repositories/278d5cd2-584d-4b63-824a-2ba458937249/pushes/1"
    }
  ]
}
```


### In a date range

#### Sample request

```
GET https://mytfsserver/DefaultCollection/_apis/git/repositories/278d5cd2-584d-4b63-824a-2ba458937249/pushes?fromDate=2014-01-15&toDate=2014-02-01T14:00&api-version=1.0
```

#### Sample response

```json
{
  "count": 3,
  "value": [
    {
      "repository": {
        "id": "278d5cd2-584d-4b63-824a-2ba458937249",
        "name": "Fabrikam-Fiber-Git",
        "url": "https://mytfsserver/DefaultCollection/_apis/git/repositories/278d5cd2-584d-4b63-824a-2ba458937249",
        "project": {
          "id": "6ce954b1-ce1f-45d1-b94d-e6bf2464ba2c",
          "name": "Fabrikam-Fiber-Git",
          "url": "https://mytfsserver/DefaultCollection/_apis/projects/6ce954b1-ce1f-45d1-b94d-e6bf2464ba2c",
          "state": "wellFormed"
        },
        "defaultBranch": "refs/heads/master",
        "remoteUrl": "https://mytfsserver/DefaultCollection/_git/Fabrikam-Fiber-Git"
      },
      "pushedBy": {
        "id": "8c8c7d32-6b1b-47f4-b2e9-30b477b5ab3d",
        "displayName": "Chuck Reinhart",
        "uniqueName": "fabrikamfiber3@hotmail.com",
        "url": "https://mytfsserver/DefaultCollection/_apis/Identities/8c8c7d32-6b1b-47f4-b2e9-30b477b5ab3d",
        "imageUrl": "https://mytfsserver/DefaultCollection/_api/_common/identityImage?id=8c8c7d32-6b1b-47f4-b2e9-30b477b5ab3d"
      },
      "pushId": 3,
      "date": "2014-01-29T23:53:35.705139Z",
      "url": "https://mytfsserver/DefaultCollection/_apis/git/repositories/278d5cd2-584d-4b63-824a-2ba458937249/pushes/3"
    },
    {
      "repository": {
        "id": "278d5cd2-584d-4b63-824a-2ba458937249",
        "name": "Fabrikam-Fiber-Git",
        "url": "https://mytfsserver/DefaultCollection/_apis/git/repositories/278d5cd2-584d-4b63-824a-2ba458937249",
        "project": {
          "id": "6ce954b1-ce1f-45d1-b94d-e6bf2464ba2c",
          "name": "Fabrikam-Fiber-Git",
          "url": "https://mytfsserver/DefaultCollection/_apis/projects/6ce954b1-ce1f-45d1-b94d-e6bf2464ba2c",
          "state": "wellFormed"
        },
        "defaultBranch": "refs/heads/master",
        "remoteUrl": "https://mytfsserver/DefaultCollection/_git/Fabrikam-Fiber-Git"
      },
      "pushedBy": {
        "id": "8c8c7d32-6b1b-47f4-b2e9-30b477b5ab3d",
        "displayName": "Chuck Reinhart",
        "uniqueName": "fabrikamfiber3@hotmail.com",
        "url": "https://mytfsserver/DefaultCollection/_apis/Identities/8c8c7d32-6b1b-47f4-b2e9-30b477b5ab3d",
        "imageUrl": "https://mytfsserver/DefaultCollection/_api/_common/identityImage?id=8c8c7d32-6b1b-47f4-b2e9-30b477b5ab3d"
      },
      "pushId": 2,
      "date": "2014-01-29T23:34:00.1018737Z",
      "url": "https://mytfsserver/DefaultCollection/_apis/git/repositories/278d5cd2-584d-4b63-824a-2ba458937249/pushes/2"
    },
    {
      "repository": {
        "id": "278d5cd2-584d-4b63-824a-2ba458937249",
        "name": "Fabrikam-Fiber-Git",
        "url": "https://mytfsserver/DefaultCollection/_apis/git/repositories/278d5cd2-584d-4b63-824a-2ba458937249",
        "project": {
          "id": "6ce954b1-ce1f-45d1-b94d-e6bf2464ba2c",
          "name": "Fabrikam-Fiber-Git",
          "url": "https://mytfsserver/DefaultCollection/_apis/projects/6ce954b1-ce1f-45d1-b94d-e6bf2464ba2c",
          "state": "wellFormed"
        },
        "defaultBranch": "refs/heads/master",
        "remoteUrl": "https://mytfsserver/DefaultCollection/_git/Fabrikam-Fiber-Git"
      },
      "pushedBy": {
        "id": "8c8c7d32-6b1b-47f4-b2e9-30b477b5ab3d",
        "displayName": "Chuck Reinhart",
        "uniqueName": "fabrikamfiber3@hotmail.com",
        "url": "https://mytfsserver/DefaultCollection/_apis/Identities/8c8c7d32-6b1b-47f4-b2e9-30b477b5ab3d",
        "imageUrl": "https://mytfsserver/DefaultCollection/_api/_common/identityImage?id=8c8c7d32-6b1b-47f4-b2e9-30b477b5ab3d"
      },
      "pushId": 1,
      "date": "2014-01-29T23:33:15.2434002Z",
      "url": "https://mytfsserver/DefaultCollection/_apis/git/repositories/278d5cd2-584d-4b63-824a-2ba458937249/pushes/1"
    }
  ]
}
```


### By who submitted the pushes

#### Sample request

```
GET https://mytfsserver/DefaultCollection/_apis/git/repositories/278d5cd2-584d-4b63-824a-2ba458937249/pushes?pusherId=d6245f20-2af8-44f4-9451-8107cb2767db&api-version=1.0
```

#### Sample response

```json
{
  "count": 3,
  "value": [
    {
      "repository": {
        "id": "278d5cd2-584d-4b63-824a-2ba458937249",
        "name": "Fabrikam-Fiber-Git",
        "url": "https://mytfsserver/DefaultCollection/_apis/git/repositories/278d5cd2-584d-4b63-824a-2ba458937249",
        "project": {
          "id": "6ce954b1-ce1f-45d1-b94d-e6bf2464ba2c",
          "name": "Fabrikam-Fiber-Git",
          "url": "https://mytfsserver/DefaultCollection/_apis/projects/6ce954b1-ce1f-45d1-b94d-e6bf2464ba2c",
          "state": "wellFormed"
        },
        "defaultBranch": "refs/heads/master",
        "remoteUrl": "https://mytfsserver/DefaultCollection/_git/Fabrikam-Fiber-Git"
      },
      "pushedBy": {
        "id": "d6245f20-2af8-44f4-9451-8107cb2767db",
        "displayName": "Normal Paulk",
        "uniqueName": "fabrikamfiber16@hotmail.com",
        "url": "https://mytfsserver/DefaultCollection/_apis/Identities/d6245f20-2af8-44f4-9451-8107cb2767db",
        "imageUrl": "https://mytfsserver/DefaultCollection/_api/_common/identityImage?id=d6245f20-2af8-44f4-9451-8107cb2767db"
      },
      "pushId": 23,
      "date": "2014-06-30T18:11:18.0929091Z",
      "url": "https://mytfsserver/DefaultCollection/_apis/git/repositories/278d5cd2-584d-4b63-824a-2ba458937249/pushes/23"
    },
    {
      "repository": {
        "id": "278d5cd2-584d-4b63-824a-2ba458937249",
        "name": "Fabrikam-Fiber-Git",
        "url": "https://mytfsserver/DefaultCollection/_apis/git/repositories/278d5cd2-584d-4b63-824a-2ba458937249",
        "project": {
          "id": "6ce954b1-ce1f-45d1-b94d-e6bf2464ba2c",
          "name": "Fabrikam-Fiber-Git",
          "url": "https://mytfsserver/DefaultCollection/_apis/projects/6ce954b1-ce1f-45d1-b94d-e6bf2464ba2c",
          "state": "wellFormed"
        },
        "defaultBranch": "refs/heads/master",
        "remoteUrl": "https://mytfsserver/DefaultCollection/_git/Fabrikam-Fiber-Git"
      },
      "pushedBy": {
        "id": "d6245f20-2af8-44f4-9451-8107cb2767db",
        "displayName": "Normal Paulk",
        "uniqueName": "fabrikamfiber16@hotmail.com",
        "url": "https://mytfsserver/DefaultCollection/_apis/Identities/d6245f20-2af8-44f4-9451-8107cb2767db",
        "imageUrl": "https://mytfsserver/DefaultCollection/_api/_common/identityImage?id=d6245f20-2af8-44f4-9451-8107cb2767db"
      },
      "pushId": 21,
      "date": "2014-06-30T17:58:34.1765687Z",
      "url": "https://mytfsserver/DefaultCollection/_apis/git/repositories/278d5cd2-584d-4b63-824a-2ba458937249/pushes/21"
    },
    {
      "repository": {
        "id": "278d5cd2-584d-4b63-824a-2ba458937249",
        "name": "Fabrikam-Fiber-Git",
        "url": "https://mytfsserver/DefaultCollection/_apis/git/repositories/278d5cd2-584d-4b63-824a-2ba458937249",
        "project": {
          "id": "6ce954b1-ce1f-45d1-b94d-e6bf2464ba2c",
          "name": "Fabrikam-Fiber-Git",
          "url": "https://mytfsserver/DefaultCollection/_apis/projects/6ce954b1-ce1f-45d1-b94d-e6bf2464ba2c",
          "state": "wellFormed"
        },
        "defaultBranch": "refs/heads/master",
        "remoteUrl": "https://mytfsserver/DefaultCollection/_git/Fabrikam-Fiber-Git"
      },
      "pushedBy": {
        "id": "d6245f20-2af8-44f4-9451-8107cb2767db",
        "displayName": "Normal Paulk",
        "uniqueName": "fabrikamfiber16@hotmail.com",
        "url": "https://mytfsserver/DefaultCollection/_apis/Identities/d6245f20-2af8-44f4-9451-8107cb2767db",
        "imageUrl": "https://mytfsserver/DefaultCollection/_api/_common/identityImage?id=d6245f20-2af8-44f4-9451-8107cb2767db"
      },
      "pushId": 19,
      "date": "2014-06-30T17:48:43.0279161Z",
      "url": "https://mytfsserver/DefaultCollection/_apis/git/repositories/278d5cd2-584d-4b63-824a-2ba458937249/pushes/19"
    }
  ]
}
```


### A page at a time

#### Sample request

```
GET https://mytfsserver/DefaultCollection/_apis/git/repositories/278d5cd2-584d-4b63-824a-2ba458937249/pushes?$skip=2&$top=2&api-version=1.0
```

#### Sample response

```json
{
  "count": 2,
  "value": [
    {
      "repository": {
        "id": "278d5cd2-584d-4b63-824a-2ba458937249",
        "name": "Fabrikam-Fiber-Git",
        "url": "https://mytfsserver/DefaultCollection/_apis/git/repositories/278d5cd2-584d-4b63-824a-2ba458937249",
        "project": {
          "id": "6ce954b1-ce1f-45d1-b94d-e6bf2464ba2c",
          "name": "Fabrikam-Fiber-Git",
          "url": "https://mytfsserver/DefaultCollection/_apis/projects/6ce954b1-ce1f-45d1-b94d-e6bf2464ba2c",
          "state": "wellFormed"
        },
        "defaultBranch": "refs/heads/master",
        "remoteUrl": "https://mytfsserver/DefaultCollection/_git/Fabrikam-Fiber-Git"
      },
      "pushedBy": {
        "id": "d6245f20-2af8-44f4-9451-8107cb2767db",
        "displayName": "Normal Paulk",
        "uniqueName": "fabrikamfiber16@hotmail.com",
        "url": "https://mytfsserver/DefaultCollection/_apis/Identities/d6245f20-2af8-44f4-9451-8107cb2767db",
        "imageUrl": "https://mytfsserver/DefaultCollection/_api/_common/identityImage?id=d6245f20-2af8-44f4-9451-8107cb2767db"
      },
      "pushId": 21,
      "date": "2014-06-30T17:58:34.1765687Z",
      "url": "https://mytfsserver/DefaultCollection/_apis/git/repositories/278d5cd2-584d-4b63-824a-2ba458937249/pushes/21"
    },
    {
      "repository": {
        "id": "278d5cd2-584d-4b63-824a-2ba458937249",
        "name": "Fabrikam-Fiber-Git",
        "url": "https://mytfsserver/DefaultCollection/_apis/git/repositories/278d5cd2-584d-4b63-824a-2ba458937249",
        "project": {
          "id": "6ce954b1-ce1f-45d1-b94d-e6bf2464ba2c",
          "name": "Fabrikam-Fiber-Git",
          "url": "https://mytfsserver/DefaultCollection/_apis/projects/6ce954b1-ce1f-45d1-b94d-e6bf2464ba2c",
          "state": "wellFormed"
        },
        "defaultBranch": "refs/heads/master",
        "remoteUrl": "https://mytfsserver/DefaultCollection/_git/Fabrikam-Fiber-Git"
      },
      "pushedBy": {
        "id": "d291b0c4-a05c-4ea6-8df1-4b41d5f39eff",
        "displayName": "Jamal Hartnett",
        "uniqueName": "fabrikamfiber4@hotmail.com",
        "url": "https://mytfsserver/DefaultCollection/_apis/Identities/d291b0c4-a05c-4ea6-8df1-4b41d5f39eff",
        "imageUrl": "https://mytfsserver/DefaultCollection/_api/_common/identityImage?id=d291b0c4-a05c-4ea6-8df1-4b41d5f39eff"
      },
      "pushId": 20,
      "date": "2014-06-30T17:51:33.6241533Z",
      "url": "https://mytfsserver/DefaultCollection/_apis/git/repositories/278d5cd2-584d-4b63-824a-2ba458937249/pushes/20"
    }
  ]
}
```


### For a particular branch, including ref updates

#### Sample request

```
GET https://mytfsserver/DefaultCollection/_apis/git/repositories/278d5cd2-584d-4b63-824a-2ba458937249/pushes?refName=refs/heads/develop&includeRefUpdates=true&api-version=1.0
```

#### Sample response

```json
{
  "count": 2,
  "value": [
    {
      "refUpdates": [
        {
          "repositoryId": "278d5cd2-584d-4b63-824a-2ba458937249",
          "name": "refs/heads/develop",
          "oldObjectId": "be67f8871a4d2c75f13a51c1d3c30ac0d74d4ef4",
          "newObjectId": "67cae2b029dff7eb3dc062b49403aaedca5bad8d"
        }
      ],
      "repository": {
        "id": "278d5cd2-584d-4b63-824a-2ba458937249",
        "name": "Fabrikam-Fiber-Git",
        "url": "https://mytfsserver/DefaultCollection/_apis/git/repositories/278d5cd2-584d-4b63-824a-2ba458937249",
        "project": {
          "id": "6ce954b1-ce1f-45d1-b94d-e6bf2464ba2c",
          "name": "Fabrikam-Fiber-Git",
          "url": "https://mytfsserver/DefaultCollection/_apis/projects/6ce954b1-ce1f-45d1-b94d-e6bf2464ba2c",
          "state": "wellFormed"
        },
        "remoteUrl": "https://mytfsserver/DefaultCollection/_git/Fabrikam-Fiber-Git"
      },
      "pushedBy": {
        "id": "8c8c7d32-6b1b-47f4-b2e9-30b477b5ab3d",
        "displayName": "Chuck Reinhart",
        "uniqueName": "fabrikamfiber3@hotmail.com",
        "url": "https://mytfsserver/DefaultCollection/_apis/Identities/8c8c7d32-6b1b-47f4-b2e9-30b477b5ab3d",
        "imageUrl": "https://mytfsserver/DefaultCollection/_api/_common/identityImage?id=8c8c7d32-6b1b-47f4-b2e9-30b477b5ab3d"
      },
      "pushId": 3,
      "date": "2014-01-29T23:53:35.705139Z",
      "url": "https://mytfsserver/DefaultCollection/_apis/git/repositories/278d5cd2-584d-4b63-824a-2ba458937249/pushes/3"
    },
    {
      "refUpdates": [
        {
          "repositoryId": "278d5cd2-584d-4b63-824a-2ba458937249",
          "name": "refs/heads/develop",
          "oldObjectId": "0000000000000000000000000000000000000000",
          "newObjectId": "be67f8871a4d2c75f13a51c1d3c30ac0d74d4ef4"
        }
      ],
      "repository": {
        "id": "278d5cd2-584d-4b63-824a-2ba458937249",
        "name": "Fabrikam-Fiber-Git",
        "url": "https://mytfsserver/DefaultCollection/_apis/git/repositories/278d5cd2-584d-4b63-824a-2ba458937249",
        "project": {
          "id": "6ce954b1-ce1f-45d1-b94d-e6bf2464ba2c",
          "name": "Fabrikam-Fiber-Git",
          "url": "https://mytfsserver/DefaultCollection/_apis/projects/6ce954b1-ce1f-45d1-b94d-e6bf2464ba2c",
          "state": "wellFormed"
        },
        "remoteUrl": "https://mytfsserver/DefaultCollection/_git/Fabrikam-Fiber-Git"
      },
      "pushedBy": {
        "id": "8c8c7d32-6b1b-47f4-b2e9-30b477b5ab3d",
        "displayName": "Chuck Reinhart",
        "uniqueName": "fabrikamfiber3@hotmail.com",
        "url": "https://mytfsserver/DefaultCollection/_apis/Identities/8c8c7d32-6b1b-47f4-b2e9-30b477b5ab3d",
        "imageUrl": "https://mytfsserver/DefaultCollection/_api/_common/identityImage?id=8c8c7d32-6b1b-47f4-b2e9-30b477b5ab3d"
      },
      "pushId": 2,
      "date": "2014-01-29T23:34:00.1018737Z",
      "url": "https://mytfsserver/DefaultCollection/_apis/git/repositories/278d5cd2-584d-4b63-824a-2ba458937249/pushes/2"
    }
  ]
}
```



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

#### Sample request

```
GET https://mytfsserver/DefaultCollection/_apis/git/repositories/278d5cd2-584d-4b63-824a-2ba458937249/pushes/23?api-version=1.0
```

#### Sample response

```json
{
  "commits": [],
  "pushedBy": {
    "id": "d6245f20-2af8-44f4-9451-8107cb2767db",
    "displayName": "Normal Paulk",
    "uniqueName": "fabrikamfiber16@hotmail.com",
    "url": "https://mytfsserver/DefaultCollection/_apis/Identities/d6245f20-2af8-44f4-9451-8107cb2767db",
    "imageUrl": "https://mytfsserver/DefaultCollection/_api/_common/identityImage?id=d6245f20-2af8-44f4-9451-8107cb2767db"
  },
  "pushId": 23,
  "date": "2014-06-30T18:11:18.0929091Z",
  "url": "https://mytfsserver/DefaultCollection/_apis/git/repositories/278d5cd2-584d-4b63-824a-2ba458937249/pushes/23",
  "_links": {
    "self": {
      "href": "https://mytfsserver/DefaultCollection/_apis/git/repositories/278d5cd2-584d-4b63-824a-2ba458937249/pushes/23"
    },
    "repository": {
      "href": "https://mytfsserver/DefaultCollection/_apis/git/repositories/278d5cd2-584d-4b63-824a-2ba458937249"
    },
    "commits": {
      "href": "https://mytfsserver/DefaultCollection/_apis/git/repositories/278d5cd2-584d-4b63-824a-2ba458937249/pushes/23/commits"
    },
    "pusher": {
      "href": "https://mytfsserver/DefaultCollection/_apis/Identities/d6245f20-2af8-44f4-9451-8107cb2767db"
    }
  }
}
```


### With references
<a name="withreferences" />

Include the [references](./refs.md) that were updated with the push.

#### Sample request

```
GET https://mytfsserver/DefaultCollection/_apis/git/repositories/278d5cd2-584d-4b63-824a-2ba458937249/pushes/23?includeRefUpdates=true&api-version=1.0
```

#### Sample response

```json
{
  "commits": [],
  "refUpdates": [
    {
      "repositoryId": "278d5cd2-584d-4b63-824a-2ba458937249",
      "name": "refs/heads/master",
      "oldObjectId": "fe17a84cc2dfe0ea3a2202ab4dbac0706058e41f",
      "newObjectId": "23d0bc5b128a10056dc68afece360d8a0fabb014"
    }
  ],
  "pushedBy": {
    "id": "d6245f20-2af8-44f4-9451-8107cb2767db",
    "displayName": "Normal Paulk",
    "uniqueName": "fabrikamfiber16@hotmail.com",
    "url": "https://mytfsserver/DefaultCollection/_apis/Identities/d6245f20-2af8-44f4-9451-8107cb2767db",
    "imageUrl": "https://mytfsserver/DefaultCollection/_api/_common/identityImage?id=d6245f20-2af8-44f4-9451-8107cb2767db"
  },
  "pushId": 23,
  "date": "2014-06-30T18:11:18.0929091Z",
  "url": "https://mytfsserver/DefaultCollection/_apis/git/repositories/278d5cd2-584d-4b63-824a-2ba458937249/pushes/23",
  "_links": {
    "self": {
      "href": "https://mytfsserver/DefaultCollection/_apis/git/repositories/278d5cd2-584d-4b63-824a-2ba458937249/pushes/23"
    },
    "repository": {
      "href": "https://mytfsserver/DefaultCollection/_apis/git/repositories/278d5cd2-584d-4b63-824a-2ba458937249"
    },
    "commits": {
      "href": "https://mytfsserver/DefaultCollection/_apis/git/repositories/278d5cd2-584d-4b63-824a-2ba458937249/pushes/23/commits"
    },
    "pusher": {
      "href": "https://mytfsserver/DefaultCollection/_apis/Identities/d6245f20-2af8-44f4-9451-8107cb2767db"
    },
    "refs": {
      "href": "https://mytfsserver/DefaultCollection/_apis/git/repositories/278d5cd2-584d-4b63-824a-2ba458937249/refs/refs/heads/master"
    }
  }
}
```


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

#### Sample request

```
POST https://mytfsserver/DefaultCollection/_apis/git/repositories/8ee9091d-0f54-4633-9bb2-b5ac74855a46/pushes?api-version=2.0-preview
```
```json
{
  "refUpdates": [
    {
      "name": "refs/heads/master",
      "oldObjectId": "0000000000000000000000000000000000000000"
    }
  ],
  "commits": [
    {
      "comment": "Initial commit.",
      "changes": [
        {
          "changeType": "add",
          "item": {
            "path": "/readme.md"
          },
          "newContent": {
            "content": "My first file!",
            "contentType": "rawtext"
          }
        }
      ]
    }
  ]
}
```

#### Sample response

```json
{
  "commits": [
    {
      "treeId": "404ff66f65520c7a480b343f010b2ce68d7ffbb3",
      "commitId": "8b67126d2500e28c771f82c9ddc292679978197c",
      "author": {
        "name": "Normal Paulk",
        "email": "fabrikamfiber16@hotmail.com",
        "date": "2014-12-16T20:41:48Z"
      },
      "committer": {
        "name": "Normal Paulk",
        "email": "fabrikamfiber16@hotmail.com",
        "date": "2014-12-16T20:41:48Z"
      },
      "comment": "Initial commit.\n",
      "parents": [],
      "url": "https://mytfsserver/DefaultCollection/_apis/git/repositories/8ee9091d-0f54-4633-9bb2-b5ac74855a46/commits/8b67126d2500e28c771f82c9ddc292679978197c"
    }
  ],
  "refUpdates": [
    {
      "repositoryId": "8ee9091d-0f54-4633-9bb2-b5ac74855a46",
      "name": "refs/heads/master",
      "oldObjectId": "0000000000000000000000000000000000000000",
      "newObjectId": "8b67126d2500e28c771f82c9ddc292679978197c"
    }
  ],
  "pushedBy": {
    "id": "d6245f20-2af8-44f4-9451-8107cb2767db",
    "displayName": "Normal Paulk",
    "uniqueName": "fabrikamfiber16@hotmail.com",
    "url": "https://mytfsserver/DefaultCollection/_apis/Identities/d6245f20-2af8-44f4-9451-8107cb2767db",
    "imageUrl": "https://mytfsserver/DefaultCollection/_api/_common/identityImage?id=d6245f20-2af8-44f4-9451-8107cb2767db"
  },
  "pushId": 83,
  "date": "2014-12-16T20:41:48.9579947Z",
  "url": "https://mytfsserver/DefaultCollection/_apis/git/repositories/8ee9091d-0f54-4633-9bb2-b5ac74855a46/pushes/83",
  "_links": {
    "self": {
      "href": "https://mytfsserver/DefaultCollection/_apis/git/repositories/8ee9091d-0f54-4633-9bb2-b5ac74855a46/pushes/83"
    },
    "repository": {
      "href": "https://mytfsserver/DefaultCollection/_apis/git/repositories/8ee9091d-0f54-4633-9bb2-b5ac74855a46"
    },
    "commits": {
      "href": "https://mytfsserver/DefaultCollection/_apis/git/repositories/8ee9091d-0f54-4633-9bb2-b5ac74855a46/pushes/83/commits"
    },
    "pusher": {
      "href": "https://mytfsserver/DefaultCollection/_apis/Identities/d6245f20-2af8-44f4-9451-8107cb2767db"
    },
    "refs": {
      "href": "https://mytfsserver/DefaultCollection/_apis/git/repositories/8ee9091d-0f54-4633-9bb2-b5ac74855a46/refs/refs/heads/master"
    }
  }
}
```


### Add a text file

#### Sample request

```
POST https://mytfsserver/DefaultCollection/_apis/git/repositories/8ee9091d-0f54-4633-9bb2-b5ac74855a46/pushes?api-version=2.0-preview
```
```json
{
  "refUpdates": [
    {
      "name": "refs/heads/master",
      "oldObjectId": "8b67126d2500e28c771f82c9ddc292679978197c"
    }
  ],
  "commits": [
    {
      "comment": "Added task markdown file.",
      "changes": [
        {
          "changeType": "add",
          "item": {
            "path": "/tasks.md"
          },
          "newContent": {
            "content": "# Tasks\n\n* Item 1\n* Item 2",
            "contentType": "rawtext"
          }
        }
      ]
    }
  ]
}
```

#### Sample response

```json
{
  "commits": [
    {
      "treeId": "cf58444311c094fae277a7b30898f0f5b0c3c985",
      "commitId": "1380164a8118686087e38ce91f36b24b58c2df02",
      "author": {
        "name": "Normal Paulk",
        "email": "fabrikamfiber16@hotmail.com",
        "date": "2014-12-16T20:41:49Z"
      },
      "committer": {
        "name": "Normal Paulk",
        "email": "fabrikamfiber16@hotmail.com",
        "date": "2014-12-16T20:41:49Z"
      },
      "comment": "Added task markdown file.\n",
      "parents": [
        "8b67126d2500e28c771f82c9ddc292679978197c"
      ],
      "url": "https://mytfsserver/DefaultCollection/_apis/git/repositories/8ee9091d-0f54-4633-9bb2-b5ac74855a46/commits/1380164a8118686087e38ce91f36b24b58c2df02"
    }
  ],
  "refUpdates": [
    {
      "repositoryId": "8ee9091d-0f54-4633-9bb2-b5ac74855a46",
      "name": "refs/heads/master",
      "oldObjectId": "8b67126d2500e28c771f82c9ddc292679978197c",
      "newObjectId": "1380164a8118686087e38ce91f36b24b58c2df02"
    }
  ],
  "pushedBy": {
    "id": "d6245f20-2af8-44f4-9451-8107cb2767db",
    "displayName": "Normal Paulk",
    "uniqueName": "fabrikamfiber16@hotmail.com",
    "url": "https://mytfsserver/DefaultCollection/_apis/Identities/d6245f20-2af8-44f4-9451-8107cb2767db",
    "imageUrl": "https://mytfsserver/DefaultCollection/_api/_common/identityImage?id=d6245f20-2af8-44f4-9451-8107cb2767db"
  },
  "pushId": 84,
  "date": "2014-12-16T20:41:49.5419198Z",
  "url": "https://mytfsserver/DefaultCollection/_apis/git/repositories/8ee9091d-0f54-4633-9bb2-b5ac74855a46/pushes/84",
  "_links": {
    "self": {
      "href": "https://mytfsserver/DefaultCollection/_apis/git/repositories/8ee9091d-0f54-4633-9bb2-b5ac74855a46/pushes/84"
    },
    "repository": {
      "href": "https://mytfsserver/DefaultCollection/_apis/git/repositories/8ee9091d-0f54-4633-9bb2-b5ac74855a46"
    },
    "commits": {
      "href": "https://mytfsserver/DefaultCollection/_apis/git/repositories/8ee9091d-0f54-4633-9bb2-b5ac74855a46/pushes/84/commits"
    },
    "pusher": {
      "href": "https://mytfsserver/DefaultCollection/_apis/Identities/d6245f20-2af8-44f4-9451-8107cb2767db"
    },
    "refs": {
      "href": "https://mytfsserver/DefaultCollection/_apis/git/repositories/8ee9091d-0f54-4633-9bb2-b5ac74855a46/refs/refs/heads/master"
    }
  }
}
```


### Add a binary file

*Keep in mind that [Git isn't designed to store large or frequently-changing binaries](https://visualstudio.com/docs/repos/git/manage-large-files).*

#### Sample request

```
POST https://mytfsserver/DefaultCollection/_apis/git/repositories/8ee9091d-0f54-4633-9bb2-b5ac74855a46/pushes?api-version=2.0-preview
```
```json
{
  "refUpdates": [
    {
      "name": "refs/heads/master",
      "oldObjectId": "1380164a8118686087e38ce91f36b24b58c2df02"
    }
  ],
  "commits": [
    {
      "comment": "Added new image file.",
      "changes": [
        {
          "changeType": "add",
          "item": {
            "path": "/images/people/default.jpg"
          },
          "newContent": {
            "content": "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",
            "contentType": "base64encoded"
          }
        }
      ]
    }
  ]
}
```

#### Sample response

```json
{
  "commits": [
    {
      "treeId": "8132acc6e22bc93e8ba3d7fd63306017b6730610",
      "commitId": "fd1062428e0567cfbfcc28ac59d4bea077ce81c1",
      "author": {
        "name": "Normal Paulk",
        "email": "fabrikamfiber16@hotmail.com",
        "date": "2014-12-16T20:41:50Z"
      },
      "committer": {
        "name": "Normal Paulk",
        "email": "fabrikamfiber16@hotmail.com",
        "date": "2014-12-16T20:41:50Z"
      },
      "comment": "Added new image file.\n",
      "parents": [
        "1380164a8118686087e38ce91f36b24b58c2df02"
      ],
      "url": "https://mytfsserver/DefaultCollection/_apis/git/repositories/8ee9091d-0f54-4633-9bb2-b5ac74855a46/commits/fd1062428e0567cfbfcc28ac59d4bea077ce81c1"
    }
  ],
  "refUpdates": [
    {
      "repositoryId": "8ee9091d-0f54-4633-9bb2-b5ac74855a46",
      "name": "refs/heads/master",
      "oldObjectId": "1380164a8118686087e38ce91f36b24b58c2df02",
      "newObjectId": "fd1062428e0567cfbfcc28ac59d4bea077ce81c1"
    }
  ],
  "pushedBy": {
    "id": "d6245f20-2af8-44f4-9451-8107cb2767db",
    "displayName": "Normal Paulk",
    "uniqueName": "fabrikamfiber16@hotmail.com",
    "url": "https://mytfsserver/DefaultCollection/_apis/Identities/d6245f20-2af8-44f4-9451-8107cb2767db",
    "imageUrl": "https://mytfsserver/DefaultCollection/_api/_common/identityImage?id=d6245f20-2af8-44f4-9451-8107cb2767db"
  },
  "pushId": 85,
  "date": "2014-12-16T20:41:50.307555Z",
  "url": "https://mytfsserver/DefaultCollection/_apis/git/repositories/8ee9091d-0f54-4633-9bb2-b5ac74855a46/pushes/85",
  "_links": {
    "self": {
      "href": "https://mytfsserver/DefaultCollection/_apis/git/repositories/8ee9091d-0f54-4633-9bb2-b5ac74855a46/pushes/85"
    },
    "repository": {
      "href": "https://mytfsserver/DefaultCollection/_apis/git/repositories/8ee9091d-0f54-4633-9bb2-b5ac74855a46"
    },
    "commits": {
      "href": "https://mytfsserver/DefaultCollection/_apis/git/repositories/8ee9091d-0f54-4633-9bb2-b5ac74855a46/pushes/85/commits"
    },
    "pusher": {
      "href": "https://mytfsserver/DefaultCollection/_apis/Identities/d6245f20-2af8-44f4-9451-8107cb2767db"
    },
    "refs": {
      "href": "https://mytfsserver/DefaultCollection/_apis/git/repositories/8ee9091d-0f54-4633-9bb2-b5ac74855a46/refs/refs/heads/master"
    }
  }
}
```


### Update a file

#### Sample request

```
POST https://mytfsserver/DefaultCollection/_apis/git/repositories/8ee9091d-0f54-4633-9bb2-b5ac74855a46/pushes?api-version=2.0-preview
```
```json
{
  "refUpdates": [
    {
      "name": "refs/heads/master",
      "oldObjectId": "fd1062428e0567cfbfcc28ac59d4bea077ce81c1"
    }
  ],
  "commits": [
    {
      "comment": "Added a few more items to the task list.",
      "changes": [
        {
          "changeType": "edit",
          "item": {
            "path": "/tasks.md"
          },
          "newContent": {
            "content": "# Tasks\n\n* Item 1\n* Item 2\n* Item 3\n* Item 4\n\nIf you need to add more, update this file and add them!",
            "contentType": "rawtext"
          }
        }
      ]
    }
  ]
}
```

#### Sample response

```json
{
  "commits": [
    {
      "treeId": "bd2aeadd55cbc9794c3fac614ab105d07e20d387",
      "commitId": "fef9b2407969c5921a6ef4f7771a919e1a85de19",
      "author": {
        "name": "Normal Paulk",
        "email": "fabrikamfiber16@hotmail.com",
        "date": "2014-12-16T20:41:50Z"
      },
      "committer": {
        "name": "Normal Paulk",
        "email": "fabrikamfiber16@hotmail.com",
        "date": "2014-12-16T20:41:50Z"
      },
      "comment": "Added a few more items to the task list.\n",
      "parents": [
        "fd1062428e0567cfbfcc28ac59d4bea077ce81c1"
      ],
      "url": "https://mytfsserver/DefaultCollection/_apis/git/repositories/8ee9091d-0f54-4633-9bb2-b5ac74855a46/commits/fef9b2407969c5921a6ef4f7771a919e1a85de19"
    }
  ],
  "refUpdates": [
    {
      "repositoryId": "8ee9091d-0f54-4633-9bb2-b5ac74855a46",
      "name": "refs/heads/master",
      "oldObjectId": "fd1062428e0567cfbfcc28ac59d4bea077ce81c1",
      "newObjectId": "fef9b2407969c5921a6ef4f7771a919e1a85de19"
    }
  ],
  "pushedBy": {
    "id": "d6245f20-2af8-44f4-9451-8107cb2767db",
    "displayName": "Normal Paulk",
    "uniqueName": "fabrikamfiber16@hotmail.com",
    "url": "https://mytfsserver/DefaultCollection/_apis/Identities/d6245f20-2af8-44f4-9451-8107cb2767db",
    "imageUrl": "https://mytfsserver/DefaultCollection/_api/_common/identityImage?id=d6245f20-2af8-44f4-9451-8107cb2767db"
  },
  "pushId": 86,
  "date": "2014-12-16T20:41:51.1513097Z",
  "url": "https://mytfsserver/DefaultCollection/_apis/git/repositories/8ee9091d-0f54-4633-9bb2-b5ac74855a46/pushes/86",
  "_links": {
    "self": {
      "href": "https://mytfsserver/DefaultCollection/_apis/git/repositories/8ee9091d-0f54-4633-9bb2-b5ac74855a46/pushes/86"
    },
    "repository": {
      "href": "https://mytfsserver/DefaultCollection/_apis/git/repositories/8ee9091d-0f54-4633-9bb2-b5ac74855a46"
    },
    "commits": {
      "href": "https://mytfsserver/DefaultCollection/_apis/git/repositories/8ee9091d-0f54-4633-9bb2-b5ac74855a46/pushes/86/commits"
    },
    "pusher": {
      "href": "https://mytfsserver/DefaultCollection/_apis/Identities/d6245f20-2af8-44f4-9451-8107cb2767db"
    },
    "refs": {
      "href": "https://mytfsserver/DefaultCollection/_apis/git/repositories/8ee9091d-0f54-4633-9bb2-b5ac74855a46/refs/refs/heads/master"
    }
  }
}
```


### Delete a file

#### Sample request

```
POST https://mytfsserver/DefaultCollection/_apis/git/repositories/8ee9091d-0f54-4633-9bb2-b5ac74855a46/pushes?api-version=2.0-preview
```
```json
{
  "refUpdates": [
    {
      "name": "refs/heads/master",
      "oldObjectId": "fef9b2407969c5921a6ef4f7771a919e1a85de19"
    }
  ],
  "commits": [
    {
      "comment": "Removed default image file.",
      "changes": [
        {
          "changeType": "delete",
          "item": {
            "path": "/images/people/default.jpg"
          }
        }
      ]
    }
  ]
}
```

#### Sample response

```json
{
  "commits": [
    {
      "treeId": "09656595ab4a552c059d1372b589aef7ced5b49a",
      "commitId": "7f4fa8e454c196078e1ffca5cd6934515e605c96",
      "author": {
        "name": "Normal Paulk",
        "email": "fabrikamfiber16@hotmail.com",
        "date": "2014-12-16T20:41:51Z"
      },
      "committer": {
        "name": "Normal Paulk",
        "email": "fabrikamfiber16@hotmail.com",
        "date": "2014-12-16T20:41:51Z"
      },
      "comment": "Removed default image file.\n",
      "parents": [
        "fef9b2407969c5921a6ef4f7771a919e1a85de19"
      ],
      "url": "https://mytfsserver/DefaultCollection/_apis/git/repositories/8ee9091d-0f54-4633-9bb2-b5ac74855a46/commits/7f4fa8e454c196078e1ffca5cd6934515e605c96"
    }
  ],
  "refUpdates": [
    {
      "repositoryId": "8ee9091d-0f54-4633-9bb2-b5ac74855a46",
      "name": "refs/heads/master",
      "oldObjectId": "fef9b2407969c5921a6ef4f7771a919e1a85de19",
      "newObjectId": "7f4fa8e454c196078e1ffca5cd6934515e605c96"
    }
  ],
  "pushedBy": {
    "id": "d6245f20-2af8-44f4-9451-8107cb2767db",
    "displayName": "Normal Paulk",
    "uniqueName": "fabrikamfiber16@hotmail.com",
    "url": "https://mytfsserver/DefaultCollection/_apis/Identities/d6245f20-2af8-44f4-9451-8107cb2767db",
    "imageUrl": "https://mytfsserver/DefaultCollection/_api/_common/identityImage?id=d6245f20-2af8-44f4-9451-8107cb2767db"
  },
  "pushId": 87,
  "date": "2014-12-16T20:41:51.9325681Z",
  "url": "https://mytfsserver/DefaultCollection/_apis/git/repositories/8ee9091d-0f54-4633-9bb2-b5ac74855a46/pushes/87",
  "_links": {
    "self": {
      "href": "https://mytfsserver/DefaultCollection/_apis/git/repositories/8ee9091d-0f54-4633-9bb2-b5ac74855a46/pushes/87"
    },
    "repository": {
      "href": "https://mytfsserver/DefaultCollection/_apis/git/repositories/8ee9091d-0f54-4633-9bb2-b5ac74855a46"
    },
    "commits": {
      "href": "https://mytfsserver/DefaultCollection/_apis/git/repositories/8ee9091d-0f54-4633-9bb2-b5ac74855a46/pushes/87/commits"
    },
    "pusher": {
      "href": "https://mytfsserver/DefaultCollection/_apis/Identities/d6245f20-2af8-44f4-9451-8107cb2767db"
    },
    "refs": {
      "href": "https://mytfsserver/DefaultCollection/_apis/git/repositories/8ee9091d-0f54-4633-9bb2-b5ac74855a46/refs/refs/heads/master"
    }
  }
}
```


### Rename a file

#### Sample request

```
POST https://mytfsserver/DefaultCollection/_apis/git/repositories/8ee9091d-0f54-4633-9bb2-b5ac74855a46/pushes?api-version=2.0-preview
```
```json
{
  "refUpdates": [
    {
      "name": "refs/heads/master",
      "oldObjectId": "7f4fa8e454c196078e1ffca5cd6934515e605c96"
    }
  ],
  "commits": [
    {
      "comment": "Renaming tasks.md to activetasks.md",
      "changes": [
        {
          "changeType": "rename",
          "sourceServerItem": "/tasks.md",
          "item": {
            "path": "/activetasks.md"
          }
        }
      ]
    }
  ]
}
```

#### Sample response

```json
{
  "commits": [
    {
      "treeId": "5e5656e84cd88a8035eaee63c5ab65fba3249d75",
      "commitId": "6e3c1f07d12eaf805a16db1352771816148c24b5",
      "author": {
        "name": "Normal Paulk",
        "email": "fabrikamfiber16@hotmail.com",
        "date": "2014-12-16T20:41:52Z"
      },
      "committer": {
        "name": "Normal Paulk",
        "email": "fabrikamfiber16@hotmail.com",
        "date": "2014-12-16T20:41:52Z"
      },
      "comment": "Renaming tasks.md to activetasks.md\n",
      "parents": [
        "7f4fa8e454c196078e1ffca5cd6934515e605c96"
      ],
      "url": "https://mytfsserver/DefaultCollection/_apis/git/repositories/8ee9091d-0f54-4633-9bb2-b5ac74855a46/commits/6e3c1f07d12eaf805a16db1352771816148c24b5"
    }
  ],
  "refUpdates": [
    {
      "repositoryId": "8ee9091d-0f54-4633-9bb2-b5ac74855a46",
      "name": "refs/heads/master",
      "oldObjectId": "7f4fa8e454c196078e1ffca5cd6934515e605c96",
      "newObjectId": "6e3c1f07d12eaf805a16db1352771816148c24b5"
    }
  ],
  "pushedBy": {
    "id": "d6245f20-2af8-44f4-9451-8107cb2767db",
    "displayName": "Normal Paulk",
    "uniqueName": "fabrikamfiber16@hotmail.com",
    "url": "https://mytfsserver/DefaultCollection/_apis/Identities/d6245f20-2af8-44f4-9451-8107cb2767db",
    "imageUrl": "https://mytfsserver/DefaultCollection/_api/_common/identityImage?id=d6245f20-2af8-44f4-9451-8107cb2767db"
  },
  "pushId": 88,
  "date": "2014-12-16T20:41:52.6357345Z",
  "url": "https://mytfsserver/DefaultCollection/_apis/git/repositories/8ee9091d-0f54-4633-9bb2-b5ac74855a46/pushes/88",
  "_links": {
    "self": {
      "href": "https://mytfsserver/DefaultCollection/_apis/git/repositories/8ee9091d-0f54-4633-9bb2-b5ac74855a46/pushes/88"
    },
    "repository": {
      "href": "https://mytfsserver/DefaultCollection/_apis/git/repositories/8ee9091d-0f54-4633-9bb2-b5ac74855a46"
    },
    "commits": {
      "href": "https://mytfsserver/DefaultCollection/_apis/git/repositories/8ee9091d-0f54-4633-9bb2-b5ac74855a46/pushes/88/commits"
    },
    "pusher": {
      "href": "https://mytfsserver/DefaultCollection/_apis/Identities/d6245f20-2af8-44f4-9451-8107cb2767db"
    },
    "refs": {
      "href": "https://mytfsserver/DefaultCollection/_apis/git/repositories/8ee9091d-0f54-4633-9bb2-b5ac74855a46/refs/refs/heads/master"
    }
  }
}
```


### Move a file

#### Sample request

```
POST https://mytfsserver/DefaultCollection/_apis/git/repositories/8ee9091d-0f54-4633-9bb2-b5ac74855a46/pushes?api-version=2.0-preview
```
```json
{
  "refUpdates": [
    {
      "name": "refs/heads/master",
      "oldObjectId": "6e3c1f07d12eaf805a16db1352771816148c24b5"
    }
  ],
  "commits": [
    {
      "comment": "Moving activetasks.md to a new folder.",
      "changes": [
        {
          "changeType": "rename",
          "sourceServerItem": "/activetasks.md",
          "item": {
            "path": "/tasks/content/activetasks.md"
          }
        }
      ]
    }
  ]
}
```

#### Sample response

```json
{
  "commits": [
    {
      "treeId": "5587e0b919b64d9cfd3a57bc0236b5c17ce8e6c8",
      "commitId": "b92a68a4cd54506d0d8e264ddddbfe5076dca910",
      "author": {
        "name": "Normal Paulk",
        "email": "fabrikamfiber16@hotmail.com",
        "date": "2014-12-16T20:41:53Z"
      },
      "committer": {
        "name": "Normal Paulk",
        "email": "fabrikamfiber16@hotmail.com",
        "date": "2014-12-16T20:41:53Z"
      },
      "comment": "Moving activetasks.md to a new folder.\n",
      "parents": [
        "6e3c1f07d12eaf805a16db1352771816148c24b5"
      ],
      "url": "https://mytfsserver/DefaultCollection/_apis/git/repositories/8ee9091d-0f54-4633-9bb2-b5ac74855a46/commits/b92a68a4cd54506d0d8e264ddddbfe5076dca910"
    }
  ],
  "refUpdates": [
    {
      "repositoryId": "8ee9091d-0f54-4633-9bb2-b5ac74855a46",
      "name": "refs/heads/master",
      "oldObjectId": "6e3c1f07d12eaf805a16db1352771816148c24b5",
      "newObjectId": "b92a68a4cd54506d0d8e264ddddbfe5076dca910"
    }
  ],
  "pushedBy": {
    "id": "d6245f20-2af8-44f4-9451-8107cb2767db",
    "displayName": "Normal Paulk",
    "uniqueName": "fabrikamfiber16@hotmail.com",
    "url": "https://mytfsserver/DefaultCollection/_apis/Identities/d6245f20-2af8-44f4-9451-8107cb2767db",
    "imageUrl": "https://mytfsserver/DefaultCollection/_api/_common/identityImage?id=d6245f20-2af8-44f4-9451-8107cb2767db"
  },
  "pushId": 89,
  "date": "2014-12-16T20:41:53.4638459Z",
  "url": "https://mytfsserver/DefaultCollection/_apis/git/repositories/8ee9091d-0f54-4633-9bb2-b5ac74855a46/pushes/89",
  "_links": {
    "self": {
      "href": "https://mytfsserver/DefaultCollection/_apis/git/repositories/8ee9091d-0f54-4633-9bb2-b5ac74855a46/pushes/89"
    },
    "repository": {
      "href": "https://mytfsserver/DefaultCollection/_apis/git/repositories/8ee9091d-0f54-4633-9bb2-b5ac74855a46"
    },
    "commits": {
      "href": "https://mytfsserver/DefaultCollection/_apis/git/repositories/8ee9091d-0f54-4633-9bb2-b5ac74855a46/pushes/89/commits"
    },
    "pusher": {
      "href": "https://mytfsserver/DefaultCollection/_apis/Identities/d6245f20-2af8-44f4-9451-8107cb2767db"
    },
    "refs": {
      "href": "https://mytfsserver/DefaultCollection/_apis/git/repositories/8ee9091d-0f54-4633-9bb2-b5ac74855a46/refs/refs/heads/master"
    }
  }
}
```


### Update a file in a new branch

#### Sample request

```
POST https://mytfsserver/DefaultCollection/_apis/git/repositories/8ee9091d-0f54-4633-9bb2-b5ac74855a46/pushes?api-version=2.0-preview
```
```json
{
  "refUpdates": [
    {
      "name": "refs/heads/myfirstbranch",
      "oldObjectId": "b92a68a4cd54506d0d8e264ddddbfe5076dca910"
    }
  ],
  "commits": [
    {
      "comment": "Updating active tasks, but saving in a new branch.",
      "changes": [
        {
          "changeType": "edit",
          "item": {
            "path": "/tasks/content/activetasks.md"
          },
          "newContent": {
            "content": "# My Active Tasks\n\n* Item 1\n* Item 2\n* Item 3\n* Item 4\n* Item 5\n",
            "contentType": "rawtext"
          }
        }
      ]
    }
  ]
}
```

#### Sample response

```json
{
  "commits": [
    {
      "treeId": "f2c7729b8fce5c5046db163f7bb4ff502d17b53b",
      "commitId": "bee67802b97da2a274df88855065b110f232973f",
      "author": {
        "name": "Normal Paulk",
        "email": "fabrikamfiber16@hotmail.com",
        "date": "2014-12-16T20:41:54Z"
      },
      "committer": {
        "name": "Normal Paulk",
        "email": "fabrikamfiber16@hotmail.com",
        "date": "2014-12-16T20:41:54Z"
      },
      "comment": "Updating active tasks, but saving in a new branch.\n",
      "parents": [
        "b92a68a4cd54506d0d8e264ddddbfe5076dca910"
      ],
      "url": "https://mytfsserver/DefaultCollection/_apis/git/repositories/8ee9091d-0f54-4633-9bb2-b5ac74855a46/commits/bee67802b97da2a274df88855065b110f232973f"
    }
  ],
  "refUpdates": [
    {
      "repositoryId": "8ee9091d-0f54-4633-9bb2-b5ac74855a46",
      "name": "refs/heads/myfirstbranch",
      "oldObjectId": "0000000000000000000000000000000000000000",
      "newObjectId": "bee67802b97da2a274df88855065b110f232973f"
    }
  ],
  "pushedBy": {
    "id": "d6245f20-2af8-44f4-9451-8107cb2767db",
    "displayName": "Normal Paulk",
    "uniqueName": "fabrikamfiber16@hotmail.com",
    "url": "https://mytfsserver/DefaultCollection/_apis/Identities/d6245f20-2af8-44f4-9451-8107cb2767db",
    "imageUrl": "https://mytfsserver/DefaultCollection/_api/_common/identityImage?id=d6245f20-2af8-44f4-9451-8107cb2767db"
  },
  "pushId": 90,
  "date": "2014-12-16T20:41:54.0575978Z",
  "url": "https://mytfsserver/DefaultCollection/_apis/git/repositories/8ee9091d-0f54-4633-9bb2-b5ac74855a46/pushes/90",
  "_links": {
    "self": {
      "href": "https://mytfsserver/DefaultCollection/_apis/git/repositories/8ee9091d-0f54-4633-9bb2-b5ac74855a46/pushes/90"
    },
    "repository": {
      "href": "https://mytfsserver/DefaultCollection/_apis/git/repositories/8ee9091d-0f54-4633-9bb2-b5ac74855a46"
    },
    "commits": {
      "href": "https://mytfsserver/DefaultCollection/_apis/git/repositories/8ee9091d-0f54-4633-9bb2-b5ac74855a46/pushes/90/commits"
    },
    "pusher": {
      "href": "https://mytfsserver/DefaultCollection/_apis/Identities/d6245f20-2af8-44f4-9451-8107cb2767db"
    },
    "refs": {
      "href": "https://mytfsserver/DefaultCollection/_apis/git/repositories/8ee9091d-0f54-4633-9bb2-b5ac74855a46/refs/refs/heads/myfirstbranch"
    }
  }
}
```



### Multiple changes

#### Sample request

```
POST https://mytfsserver/DefaultCollection/_apis/git/repositories/8ee9091d-0f54-4633-9bb2-b5ac74855a46/pushes?api-version=2.0-preview
```
```json
{
  "refUpdates": [
    {
      "name": "refs/heads/master",
      "oldObjectId": "b92a68a4cd54506d0d8e264ddddbfe5076dca910"
    }
  ],
  "commits": [
    {
      "comment": "Updating active tasks and adding a few new files.",
      "changes": [
        {
          "changeType": "edit",
          "item": {
            "path": "/tasks/content/activetasks.md"
          },
          "newContent": {
            "content": "# Tasks\n\n* Item 1\n* Item 2\n* Item 3\n* Item 4\n* Item 5\n* Item 6",
            "contentType": "rawtext"
          }
        },
        {
          "changeType": "add",
          "item": {
            "path": "/tasks/content/newtasks.md"
          },
          "newContent": {
            "content": "# New Tasks\n\nTBD",
            "contentType": "rawtext"
          }
        },
        {
          "changeType": "add",
          "item": {
            "path": "/tasks/content/inactivetasks.md"
          },
          "newContent": {
            "content": "# Inactive Tasks\n\nTBD",
            "contentType": "rawtext"
          }
        }
      ]
    }
  ]
}
```

#### Sample response

```json
{
  "commits": [
    {
      "treeId": "ea40b6cc99f3f155a2c7be135e6aa2c82ae8e779",
      "commitId": "2b269bd10e6bd25ec459a0344e8641db395b3219",
      "author": {
        "name": "Normal Paulk",
        "email": "fabrikamfiber16@hotmail.com",
        "date": "2014-12-16T20:41:54Z"
      },
      "committer": {
        "name": "Normal Paulk",
        "email": "fabrikamfiber16@hotmail.com",
        "date": "2014-12-16T20:41:54Z"
      },
      "comment": "Updating active tasks and adding a few new files.\n",
      "parents": [
        "b92a68a4cd54506d0d8e264ddddbfe5076dca910"
      ],
      "url": "https://mytfsserver/DefaultCollection/_apis/git/repositories/8ee9091d-0f54-4633-9bb2-b5ac74855a46/commits/2b269bd10e6bd25ec459a0344e8641db395b3219"
    }
  ],
  "refUpdates": [
    {
      "repositoryId": "8ee9091d-0f54-4633-9bb2-b5ac74855a46",
      "name": "refs/heads/master",
      "oldObjectId": "b92a68a4cd54506d0d8e264ddddbfe5076dca910",
      "newObjectId": "2b269bd10e6bd25ec459a0344e8641db395b3219"
    }
  ],
  "pushedBy": {
    "id": "d6245f20-2af8-44f4-9451-8107cb2767db",
    "displayName": "Normal Paulk",
    "uniqueName": "fabrikamfiber16@hotmail.com",
    "url": "https://mytfsserver/DefaultCollection/_apis/Identities/d6245f20-2af8-44f4-9451-8107cb2767db",
    "imageUrl": "https://mytfsserver/DefaultCollection/_api/_common/identityImage?id=d6245f20-2af8-44f4-9451-8107cb2767db"
  },
  "pushId": 91,
  "date": "2014-12-16T20:41:54.7294804Z",
  "url": "https://mytfsserver/DefaultCollection/_apis/git/repositories/8ee9091d-0f54-4633-9bb2-b5ac74855a46/pushes/91",
  "_links": {
    "self": {
      "href": "https://mytfsserver/DefaultCollection/_apis/git/repositories/8ee9091d-0f54-4633-9bb2-b5ac74855a46/pushes/91"
    },
    "repository": {
      "href": "https://mytfsserver/DefaultCollection/_apis/git/repositories/8ee9091d-0f54-4633-9bb2-b5ac74855a46"
    },
    "commits": {
      "href": "https://mytfsserver/DefaultCollection/_apis/git/repositories/8ee9091d-0f54-4633-9bb2-b5ac74855a46/pushes/91/commits"
    },
    "pusher": {
      "href": "https://mytfsserver/DefaultCollection/_apis/Identities/d6245f20-2af8-44f4-9451-8107cb2767db"
    },
    "refs": {
      "href": "https://mytfsserver/DefaultCollection/_apis/git/repositories/8ee9091d-0f54-4633-9bb2-b5ac74855a46/refs/refs/heads/master"
    }
  }
}
```


