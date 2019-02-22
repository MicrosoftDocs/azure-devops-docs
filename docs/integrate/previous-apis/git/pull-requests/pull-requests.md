---
ms.prod: devops
ms.technology: devops-ecosystem
monikerRange: '>= tfs-2015 < azure-devops'
title: Git Pull Requests | REST API Reference for Team Foundation Server
description: Work with Git pull requests programmatically using the REST APIs for Team Foundation Server.
ms.assetid: AD95CA6B-A2DC-4236-ACA8-387621E83FE8
ms.manager: jillfra
ms.topic: article
ms.author: elbatk
author: elbatk
ms.date: 11/3/2016
---

# Git pull requests

[!INCLUDE [azure-devops](../../_data/azure-devops-message.md)]

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

#### Sample request

```
GET https://mytfsserver/DefaultCollection/_apis/git/repositories/3411ebc1-d5aa-464f-9615-0b527bc66719/pullRequests?api-version=3.0
```

#### Sample response

```json
{
  "value": [
    {
      "repository": {
        "id": "3411ebc1-d5aa-464f-9615-0b527bc66719",
        "name": "2016_10_31",
        "url": "https://mytfsserver/DefaultCollection/_apis/git/repositories/3411ebc1-d5aa-464f-9615-0b527bc66719",
        "project": {
          "id": "a7573007-bbb3-4341-b726-0c4148a07853",
          "name": "2016_10_31",
          "state": "unchanged"
        }
      },
      "pullRequestId": 22,
      "codeReviewId": 22,
      "status": "active",
      "createdBy": {
        "id": "d6245f20-2af8-44f4-9451-8107cb2767db",
        "displayName": "Normal Paulk",
        "uniqueName": "fabrikamfiber16@hotmail.com",
        "url": "https://mytfsserver/DefaultCollection/_apis/Identities/d6245f20-2af8-44f4-9451-8107cb2767db",
        "imageUrl": "https://mytfsserver/DefaultCollection/_api/_common/identityImage?id=d6245f20-2af8-44f4-9451-8107cb2767db"
      },
      "creationDate": "2016-11-01T16:30:31.6655471Z",
      "title": "A new feature",
      "description": "Adding a new feature",
      "sourceRefName": "refs/heads/npaulk/my_work",
      "targetRefName": "refs/heads/new_feature",
      "mergeStatus": "succeeded",
      "mergeId": "f5fc8381-3fb2-49fe-8a0d-27dcc2d6ef82",
      "lastMergeSourceCommit": {
        "commitId": "b60280bc6e62e2f880f1b63c1e24987664d3bda3",
        "url": "https://mytfsserver/DefaultCollection/_apis/git/repositories/3411ebc1-d5aa-464f-9615-0b527bc66719/commits/b60280bc6e62e2f880f1b63c1e24987664d3bda3"
      },
      "lastMergeTargetCommit": {
        "commitId": "f47bbc106853afe3c1b07a81754bce5f4b8dbf62",
        "url": "https://mytfsserver/DefaultCollection/_apis/git/repositories/3411ebc1-d5aa-464f-9615-0b527bc66719/commits/f47bbc106853afe3c1b07a81754bce5f4b8dbf62"
      },
      "lastMergeCommit": {
        "commitId": "39f52d24533cc712fc845ed9fd1b6c06b3942588",
        "url": "https://mytfsserver/DefaultCollection/_apis/git/repositories/3411ebc1-d5aa-464f-9615-0b527bc66719/commits/39f52d24533cc712fc845ed9fd1b6c06b3942588"
      },
      "reviewers": [
        {
          "reviewerUrl": "https://mytfsserver/DefaultCollection/_apis/git/repositories/3411ebc1-d5aa-464f-9615-0b527bc66719/pullRequests/22/reviewers/d6245f20-2af8-44f4-9451-8107cb2767db",
          "vote": 0,
          "id": "d6245f20-2af8-44f4-9451-8107cb2767db",
          "displayName": "Normal Paulk",
          "uniqueName": "fabrikamfiber16@hotmail.com",
          "url": "https://mytfsserver/DefaultCollection/_apis/Identities/d6245f20-2af8-44f4-9451-8107cb2767db",
          "imageUrl": "https://mytfsserver/DefaultCollection/_api/_common/identityImage?id=d6245f20-2af8-44f4-9451-8107cb2767db"
        }
      ],
      "url": "https://mytfsserver/DefaultCollection/_apis/git/repositories/3411ebc1-d5aa-464f-9615-0b527bc66719/pullRequests/22",
      "supportsIterations": true
    },
    {
      "repository": {
        "id": "3411ebc1-d5aa-464f-9615-0b527bc66719",
        "name": "2016_10_31",
        "url": "https://mytfsserver/DefaultCollection/_apis/git/repositories/3411ebc1-d5aa-464f-9615-0b527bc66719",
        "project": {
          "id": "a7573007-bbb3-4341-b726-0c4148a07853",
          "name": "2016_10_31",
          "state": "unchanged"
        }
      },
      "pullRequestId": 21,
      "codeReviewId": 21,
      "status": "active",
      "createdBy": {
        "id": "d6245f20-2af8-44f4-9451-8107cb2767db",
        "displayName": "Normal Paulk",
        "uniqueName": "fabrikamfiber16@hotmail.com",
        "url": "https://mytfsserver/DefaultCollection/_apis/Identities/d6245f20-2af8-44f4-9451-8107cb2767db",
        "imageUrl": "https://mytfsserver/DefaultCollection/_api/_common/identityImage?id=d6245f20-2af8-44f4-9451-8107cb2767db"
      },
      "creationDate": "2016-11-01T16:30:23.8410158Z",
      "title": "Added known issues document",
      "description": "Added known issues document",
      "sourceRefName": "refs/heads/npaulk/known_issues",
      "targetRefName": "refs/heads/new_feature",
      "mergeStatus": "succeeded",
      "mergeId": "58a34c62-01b5-4029-8337-c99782ee9003",
      "lastMergeSourceCommit": {
        "commitId": "05ce817c4692afc93c1eb952643bdf7ffbab18ee",
        "url": "https://mytfsserver/DefaultCollection/_apis/git/repositories/3411ebc1-d5aa-464f-9615-0b527bc66719/commits/05ce817c4692afc93c1eb952643bdf7ffbab18ee"
      },
      "lastMergeTargetCommit": {
        "commitId": "f47bbc106853afe3c1b07a81754bce5f4b8dbf62",
        "url": "https://mytfsserver/DefaultCollection/_apis/git/repositories/3411ebc1-d5aa-464f-9615-0b527bc66719/commits/f47bbc106853afe3c1b07a81754bce5f4b8dbf62"
      },
      "lastMergeCommit": {
        "commitId": "bf27525b51b5347483ed9d7dc52ce5a3cf2b045a",
        "url": "https://mytfsserver/DefaultCollection/_apis/git/repositories/3411ebc1-d5aa-464f-9615-0b527bc66719/commits/bf27525b51b5347483ed9d7dc52ce5a3cf2b045a"
      },
      "reviewers": [
        {
          "reviewerUrl": "https://mytfsserver/DefaultCollection/_apis/git/repositories/3411ebc1-d5aa-464f-9615-0b527bc66719/pullRequests/21/reviewers/d6245f20-2af8-44f4-9451-8107cb2767db",
          "vote": 0,
          "id": "d6245f20-2af8-44f4-9451-8107cb2767db",
          "displayName": "Normal Paulk",
          "uniqueName": "fabrikamfiber16@hotmail.com",
          "url": "https://mytfsserver/DefaultCollection/_apis/Identities/d6245f20-2af8-44f4-9451-8107cb2767db",
          "imageUrl": "https://mytfsserver/DefaultCollection/_api/_common/identityImage?id=d6245f20-2af8-44f4-9451-8107cb2767db"
        }
      ],
      "url": "https://mytfsserver/DefaultCollection/_apis/git/repositories/3411ebc1-d5aa-464f-9615-0b527bc66719/pullRequests/21",
      "supportsIterations": true
    },
    {
      "repository": {
        "id": "3411ebc1-d5aa-464f-9615-0b527bc66719",
        "name": "2016_10_31",
        "url": "https://mytfsserver/DefaultCollection/_apis/git/repositories/3411ebc1-d5aa-464f-9615-0b527bc66719",
        "project": {
          "id": "a7573007-bbb3-4341-b726-0c4148a07853",
          "name": "2016_10_31",
          "state": "unchanged"
        }
      },
      "pullRequestId": 1,
      "codeReviewId": 1,
      "status": "active",
      "createdBy": {
        "id": "d6245f20-2af8-44f4-9451-8107cb2767db",
        "displayName": "Normal Paulk",
        "uniqueName": "fabrikamfiber16@hotmail.com",
        "url": "https://mytfsserver/DefaultCollection/_apis/Identities/d6245f20-2af8-44f4-9451-8107cb2767db",
        "imageUrl": "https://mytfsserver/DefaultCollection/_api/_common/identityImage?id=d6245f20-2af8-44f4-9451-8107cb2767db"
      },
      "creationDate": "2016-10-31T20:20:32.3087249Z",
      "title": "some_branch edit",
      "description": " - Updated README.md",
      "sourceRefName": "refs/heads/some_branch",
      "targetRefName": "refs/heads/master",
      "mergeStatus": "succeeded",
      "mergeId": "b294fd81-d539-461d-b271-71a6e61f3c24",
      "lastMergeSourceCommit": {
        "commitId": "34a9e500f29d119802a828d7a759f6fa2e546750",
        "url": "https://mytfsserver/DefaultCollection/_apis/git/repositories/3411ebc1-d5aa-464f-9615-0b527bc66719/commits/34a9e500f29d119802a828d7a759f6fa2e546750"
      },
      "lastMergeTargetCommit": {
        "commitId": "f47bbc106853afe3c1b07a81754bce5f4b8dbf62",
        "url": "https://mytfsserver/DefaultCollection/_apis/git/repositories/3411ebc1-d5aa-464f-9615-0b527bc66719/commits/f47bbc106853afe3c1b07a81754bce5f4b8dbf62"
      },
      "lastMergeCommit": {
        "commitId": "41e98d9939cf4ec0ce166079c22e2b40de862cf5",
        "url": "https://mytfsserver/DefaultCollection/_apis/git/repositories/3411ebc1-d5aa-464f-9615-0b527bc66719/commits/41e98d9939cf4ec0ce166079c22e2b40de862cf5"
      },
      "reviewers": [
        {
          "reviewerUrl": "https://mytfsserver/DefaultCollection/_apis/git/repositories/3411ebc1-d5aa-464f-9615-0b527bc66719/pullRequests/1/reviewers/98d08d98-a075-46e7-a81e-21bc6f12cae7",
          "vote": 0,
          "id": "98d08d98-a075-46e7-a81e-21bc6f12cae7",
          "displayName": "[2016_10_31]\\2016_10_31 Team",
          "uniqueName": "vstfs:///Classification/TeamProject/a7573007-bbb3-4341-b726-0c4148a07853\\2016_10_31 Team",
          "url": "https://mytfsserver/DefaultCollection/_apis/Identities/98d08d98-a075-46e7-a81e-21bc6f12cae7",
          "imageUrl": "https://mytfsserver/DefaultCollection/_api/_common/identityImage?id=98d08d98-a075-46e7-a81e-21bc6f12cae7",
          "isContainer": true
        }
      ],
      "url": "https://mytfsserver/DefaultCollection/_apis/git/repositories/3411ebc1-d5aa-464f-9615-0b527bc66719/pullRequests/1",
      "supportsIterations": true
    }
  ],
  "count": 3
}
```


### By status

#### Sample request

```
GET https://mytfsserver/DefaultCollection/_apis/git/repositories/3411ebc1-d5aa-464f-9615-0b527bc66719/pullRequests?status=completed&api-version=3.0
```

#### Sample response

```json
{
  "value": [
    {
      "repository": {
        "id": "3411ebc1-d5aa-464f-9615-0b527bc66719",
        "name": "2016_10_31",
        "url": "https://mytfsserver/DefaultCollection/_apis/git/repositories/3411ebc1-d5aa-464f-9615-0b527bc66719",
        "project": {
          "id": "a7573007-bbb3-4341-b726-0c4148a07853",
          "name": "2016_10_31",
          "state": "unchanged"
        }
      },
      "pullRequestId": 20,
      "codeReviewId": 20,
      "status": "completed",
      "createdBy": {
        "id": "d6245f20-2af8-44f4-9451-8107cb2767db",
        "displayName": "Normal Paulk",
        "uniqueName": "fabrikamfiber16@hotmail.com",
        "url": "https://mytfsserver/DefaultCollection/_apis/Identities/d6245f20-2af8-44f4-9451-8107cb2767db",
        "imageUrl": "https://mytfsserver/DefaultCollection/_api/_common/identityImage?id=d6245f20-2af8-44f4-9451-8107cb2767db"
      },
      "creationDate": "2016-11-01T16:28:08.8900118Z",
      "closedDate": "2016-11-01T16:30:02.0413914Z",
      "title": "Updated pull request title",
      "description": "Updated pull request description",
      "sourceRefName": "refs/heads/npaulk/my_work",
      "targetRefName": "refs/heads/new_feature",
      "mergeStatus": "succeeded",
      "mergeId": "1b5f1536-565e-46f4-ace2-e8cbf50c676b",
      "lastMergeSourceCommit": {
        "commitId": "ae875f124fe5c625664fae12af26cc294ed1575f",
        "url": "https://mytfsserver/DefaultCollection/_apis/git/repositories/3411ebc1-d5aa-464f-9615-0b527bc66719/commits/ae875f124fe5c625664fae12af26cc294ed1575f"
      },
      "lastMergeTargetCommit": {
        "commitId": "f47bbc106853afe3c1b07a81754bce5f4b8dbf62",
        "url": "https://mytfsserver/DefaultCollection/_apis/git/repositories/3411ebc1-d5aa-464f-9615-0b527bc66719/commits/f47bbc106853afe3c1b07a81754bce5f4b8dbf62"
      },
      "lastMergeCommit": {
        "commitId": "1e924c570d532d92c12e955b9f8948935f54944e",
        "url": "https://mytfsserver/DefaultCollection/_apis/git/repositories/3411ebc1-d5aa-464f-9615-0b527bc66719/commits/1e924c570d532d92c12e955b9f8948935f54944e"
      },
      "reviewers": [
        {
          "reviewerUrl": "https://mytfsserver/DefaultCollection/_apis/git/repositories/3411ebc1-d5aa-464f-9615-0b527bc66719/pullRequests/20/reviewers/d6245f20-2af8-44f4-9451-8107cb2767db",
          "vote": 10,
          "id": "d6245f20-2af8-44f4-9451-8107cb2767db",
          "displayName": "Normal Paulk",
          "uniqueName": "fabrikamfiber16@hotmail.com",
          "url": "https://mytfsserver/DefaultCollection/_apis/Identities/d6245f20-2af8-44f4-9451-8107cb2767db",
          "imageUrl": "https://mytfsserver/DefaultCollection/_api/_common/identityImage?id=d6245f20-2af8-44f4-9451-8107cb2767db"
        }
      ],
      "url": "https://mytfsserver/DefaultCollection/_apis/git/repositories/3411ebc1-d5aa-464f-9615-0b527bc66719/pullRequests/20",
      "supportsIterations": true,
      "completionQueueTime": "2016-11-01T16:30:00.6380112Z"
    }
  ],
  "count": 1
}
```


### By target branch

#### Sample request

```
GET https://mytfsserver/DefaultCollection/_apis/git/repositories/3411ebc1-d5aa-464f-9615-0b527bc66719/pullRequests?targetRefName=refs/heads/master&api-version=3.0
```

#### Sample response

```json
{
  "value": [
    {
      "repository": {
        "id": "3411ebc1-d5aa-464f-9615-0b527bc66719",
        "name": "2016_10_31",
        "url": "https://mytfsserver/DefaultCollection/_apis/git/repositories/3411ebc1-d5aa-464f-9615-0b527bc66719",
        "project": {
          "id": "a7573007-bbb3-4341-b726-0c4148a07853",
          "name": "2016_10_31",
          "state": "unchanged"
        }
      },
      "pullRequestId": 1,
      "codeReviewId": 1,
      "status": "active",
      "createdBy": {
        "id": "d6245f20-2af8-44f4-9451-8107cb2767db",
        "displayName": "Normal Paulk",
        "uniqueName": "fabrikamfiber16@hotmail.com",
        "url": "https://mytfsserver/DefaultCollection/_apis/Identities/d6245f20-2af8-44f4-9451-8107cb2767db",
        "imageUrl": "https://mytfsserver/DefaultCollection/_api/_common/identityImage?id=d6245f20-2af8-44f4-9451-8107cb2767db"
      },
      "creationDate": "2016-10-31T20:20:32.3087249Z",
      "title": "some_branch edit",
      "description": " - Updated README.md",
      "sourceRefName": "refs/heads/some_branch",
      "targetRefName": "refs/heads/master",
      "mergeStatus": "succeeded",
      "mergeId": "b294fd81-d539-461d-b271-71a6e61f3c24",
      "lastMergeSourceCommit": {
        "commitId": "34a9e500f29d119802a828d7a759f6fa2e546750",
        "url": "https://mytfsserver/DefaultCollection/_apis/git/repositories/3411ebc1-d5aa-464f-9615-0b527bc66719/commits/34a9e500f29d119802a828d7a759f6fa2e546750"
      },
      "lastMergeTargetCommit": {
        "commitId": "f47bbc106853afe3c1b07a81754bce5f4b8dbf62",
        "url": "https://mytfsserver/DefaultCollection/_apis/git/repositories/3411ebc1-d5aa-464f-9615-0b527bc66719/commits/f47bbc106853afe3c1b07a81754bce5f4b8dbf62"
      },
      "lastMergeCommit": {
        "commitId": "41e98d9939cf4ec0ce166079c22e2b40de862cf5",
        "url": "https://mytfsserver/DefaultCollection/_apis/git/repositories/3411ebc1-d5aa-464f-9615-0b527bc66719/commits/41e98d9939cf4ec0ce166079c22e2b40de862cf5"
      },
      "reviewers": [
        {
          "reviewerUrl": "https://mytfsserver/DefaultCollection/_apis/git/repositories/3411ebc1-d5aa-464f-9615-0b527bc66719/pullRequests/1/reviewers/98d08d98-a075-46e7-a81e-21bc6f12cae7",
          "vote": 0,
          "id": "98d08d98-a075-46e7-a81e-21bc6f12cae7",
          "displayName": "[2016_10_31]\\2016_10_31 Team",
          "uniqueName": "vstfs:///Classification/TeamProject/a7573007-bbb3-4341-b726-0c4148a07853\\2016_10_31 Team",
          "url": "https://mytfsserver/DefaultCollection/_apis/Identities/98d08d98-a075-46e7-a81e-21bc6f12cae7",
          "imageUrl": "https://mytfsserver/DefaultCollection/_api/_common/identityImage?id=98d08d98-a075-46e7-a81e-21bc6f12cae7",
          "isContainer": true
        }
      ],
      "url": "https://mytfsserver/DefaultCollection/_apis/git/repositories/3411ebc1-d5aa-464f-9615-0b527bc66719/pullRequests/1",
      "supportsIterations": true
    }
  ],
  "count": 1
}
```


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

#### Sample request

```
GET https://mytfsserver/DefaultCollection/2016_10_31/_apis/git/pullRequests?api-version=3.0
```

#### Sample response

```json
{
  "value": [
    {
      "repository": {
        "id": "3411ebc1-d5aa-464f-9615-0b527bc66719",
        "name": "2016_10_31",
        "url": "https://mytfsserver/DefaultCollection/_apis/git/repositories/3411ebc1-d5aa-464f-9615-0b527bc66719",
        "project": {
          "id": "a7573007-bbb3-4341-b726-0c4148a07853",
          "name": "2016_10_31",
          "state": "unchanged"
        }
      },
      "pullRequestId": 22,
      "codeReviewId": 22,
      "status": "active",
      "createdBy": {
        "id": "d6245f20-2af8-44f4-9451-8107cb2767db",
        "displayName": "Normal Paulk",
        "uniqueName": "fabrikamfiber16@hotmail.com",
        "url": "https://mytfsserver/DefaultCollection/_apis/Identities/d6245f20-2af8-44f4-9451-8107cb2767db",
        "imageUrl": "https://mytfsserver/DefaultCollection/_api/_common/identityImage?id=d6245f20-2af8-44f4-9451-8107cb2767db"
      },
      "creationDate": "2016-11-01T16:30:31.6655471Z",
      "title": "A new feature",
      "description": "Adding a new feature",
      "sourceRefName": "refs/heads/npaulk/my_work",
      "targetRefName": "refs/heads/new_feature",
      "mergeStatus": "succeeded",
      "mergeId": "f5fc8381-3fb2-49fe-8a0d-27dcc2d6ef82",
      "lastMergeSourceCommit": {
        "commitId": "b60280bc6e62e2f880f1b63c1e24987664d3bda3",
        "url": "https://mytfsserver/DefaultCollection/_apis/git/repositories/3411ebc1-d5aa-464f-9615-0b527bc66719/commits/b60280bc6e62e2f880f1b63c1e24987664d3bda3"
      },
      "lastMergeTargetCommit": {
        "commitId": "f47bbc106853afe3c1b07a81754bce5f4b8dbf62",
        "url": "https://mytfsserver/DefaultCollection/_apis/git/repositories/3411ebc1-d5aa-464f-9615-0b527bc66719/commits/f47bbc106853afe3c1b07a81754bce5f4b8dbf62"
      },
      "lastMergeCommit": {
        "commitId": "39f52d24533cc712fc845ed9fd1b6c06b3942588",
        "url": "https://mytfsserver/DefaultCollection/_apis/git/repositories/3411ebc1-d5aa-464f-9615-0b527bc66719/commits/39f52d24533cc712fc845ed9fd1b6c06b3942588"
      },
      "reviewers": [
        {
          "reviewerUrl": "https://mytfsserver/DefaultCollection/_apis/git/repositories/3411ebc1-d5aa-464f-9615-0b527bc66719/pullRequests/22/reviewers/d6245f20-2af8-44f4-9451-8107cb2767db",
          "vote": 0,
          "id": "d6245f20-2af8-44f4-9451-8107cb2767db",
          "displayName": "Normal Paulk",
          "uniqueName": "fabrikamfiber16@hotmail.com",
          "url": "https://mytfsserver/DefaultCollection/_apis/Identities/d6245f20-2af8-44f4-9451-8107cb2767db",
          "imageUrl": "https://mytfsserver/DefaultCollection/_api/_common/identityImage?id=d6245f20-2af8-44f4-9451-8107cb2767db"
        }
      ],
      "url": "https://mytfsserver/DefaultCollection/_apis/git/repositories/3411ebc1-d5aa-464f-9615-0b527bc66719/pullRequests/22",
      "supportsIterations": true
    },
    {
      "repository": {
        "id": "3411ebc1-d5aa-464f-9615-0b527bc66719",
        "name": "2016_10_31",
        "url": "https://mytfsserver/DefaultCollection/_apis/git/repositories/3411ebc1-d5aa-464f-9615-0b527bc66719",
        "project": {
          "id": "a7573007-bbb3-4341-b726-0c4148a07853",
          "name": "2016_10_31",
          "state": "unchanged"
        }
      },
      "pullRequestId": 21,
      "codeReviewId": 21,
      "status": "active",
      "createdBy": {
        "id": "d6245f20-2af8-44f4-9451-8107cb2767db",
        "displayName": "Normal Paulk",
        "uniqueName": "fabrikamfiber16@hotmail.com",
        "url": "https://mytfsserver/DefaultCollection/_apis/Identities/d6245f20-2af8-44f4-9451-8107cb2767db",
        "imageUrl": "https://mytfsserver/DefaultCollection/_api/_common/identityImage?id=d6245f20-2af8-44f4-9451-8107cb2767db"
      },
      "creationDate": "2016-11-01T16:30:23.8410158Z",
      "title": "Added known issues document",
      "description": "Added known issues document",
      "sourceRefName": "refs/heads/npaulk/known_issues",
      "targetRefName": "refs/heads/new_feature",
      "mergeStatus": "succeeded",
      "mergeId": "58a34c62-01b5-4029-8337-c99782ee9003",
      "lastMergeSourceCommit": {
        "commitId": "05ce817c4692afc93c1eb952643bdf7ffbab18ee",
        "url": "https://mytfsserver/DefaultCollection/_apis/git/repositories/3411ebc1-d5aa-464f-9615-0b527bc66719/commits/05ce817c4692afc93c1eb952643bdf7ffbab18ee"
      },
      "lastMergeTargetCommit": {
        "commitId": "f47bbc106853afe3c1b07a81754bce5f4b8dbf62",
        "url": "https://mytfsserver/DefaultCollection/_apis/git/repositories/3411ebc1-d5aa-464f-9615-0b527bc66719/commits/f47bbc106853afe3c1b07a81754bce5f4b8dbf62"
      },
      "lastMergeCommit": {
        "commitId": "bf27525b51b5347483ed9d7dc52ce5a3cf2b045a",
        "url": "https://mytfsserver/DefaultCollection/_apis/git/repositories/3411ebc1-d5aa-464f-9615-0b527bc66719/commits/bf27525b51b5347483ed9d7dc52ce5a3cf2b045a"
      },
      "reviewers": [
        {
          "reviewerUrl": "https://mytfsserver/DefaultCollection/_apis/git/repositories/3411ebc1-d5aa-464f-9615-0b527bc66719/pullRequests/21/reviewers/d6245f20-2af8-44f4-9451-8107cb2767db",
          "vote": 0,
          "id": "d6245f20-2af8-44f4-9451-8107cb2767db",
          "displayName": "Normal Paulk",
          "uniqueName": "fabrikamfiber16@hotmail.com",
          "url": "https://mytfsserver/DefaultCollection/_apis/Identities/d6245f20-2af8-44f4-9451-8107cb2767db",
          "imageUrl": "https://mytfsserver/DefaultCollection/_api/_common/identityImage?id=d6245f20-2af8-44f4-9451-8107cb2767db"
        }
      ],
      "url": "https://mytfsserver/DefaultCollection/_apis/git/repositories/3411ebc1-d5aa-464f-9615-0b527bc66719/pullRequests/21",
      "supportsIterations": true
    },
    {
      "repository": {
        "id": "3411ebc1-d5aa-464f-9615-0b527bc66719",
        "name": "2016_10_31",
        "url": "https://mytfsserver/DefaultCollection/_apis/git/repositories/3411ebc1-d5aa-464f-9615-0b527bc66719",
        "project": {
          "id": "a7573007-bbb3-4341-b726-0c4148a07853",
          "name": "2016_10_31",
          "state": "unchanged"
        }
      },
      "pullRequestId": 1,
      "codeReviewId": 1,
      "status": "active",
      "createdBy": {
        "id": "d6245f20-2af8-44f4-9451-8107cb2767db",
        "displayName": "Normal Paulk",
        "uniqueName": "fabrikamfiber16@hotmail.com",
        "url": "https://mytfsserver/DefaultCollection/_apis/Identities/d6245f20-2af8-44f4-9451-8107cb2767db",
        "imageUrl": "https://mytfsserver/DefaultCollection/_api/_common/identityImage?id=d6245f20-2af8-44f4-9451-8107cb2767db"
      },
      "creationDate": "2016-10-31T20:20:32.3087249Z",
      "title": "some_branch edit",
      "description": " - Updated README.md",
      "sourceRefName": "refs/heads/some_branch",
      "targetRefName": "refs/heads/master",
      "mergeStatus": "succeeded",
      "mergeId": "b294fd81-d539-461d-b271-71a6e61f3c24",
      "lastMergeSourceCommit": {
        "commitId": "34a9e500f29d119802a828d7a759f6fa2e546750",
        "url": "https://mytfsserver/DefaultCollection/_apis/git/repositories/3411ebc1-d5aa-464f-9615-0b527bc66719/commits/34a9e500f29d119802a828d7a759f6fa2e546750"
      },
      "lastMergeTargetCommit": {
        "commitId": "f47bbc106853afe3c1b07a81754bce5f4b8dbf62",
        "url": "https://mytfsserver/DefaultCollection/_apis/git/repositories/3411ebc1-d5aa-464f-9615-0b527bc66719/commits/f47bbc106853afe3c1b07a81754bce5f4b8dbf62"
      },
      "lastMergeCommit": {
        "commitId": "41e98d9939cf4ec0ce166079c22e2b40de862cf5",
        "url": "https://mytfsserver/DefaultCollection/_apis/git/repositories/3411ebc1-d5aa-464f-9615-0b527bc66719/commits/41e98d9939cf4ec0ce166079c22e2b40de862cf5"
      },
      "reviewers": [
        {
          "reviewerUrl": "https://mytfsserver/DefaultCollection/_apis/git/repositories/3411ebc1-d5aa-464f-9615-0b527bc66719/pullRequests/1/reviewers/98d08d98-a075-46e7-a81e-21bc6f12cae7",
          "vote": 0,
          "id": "98d08d98-a075-46e7-a81e-21bc6f12cae7",
          "displayName": "[2016_10_31]\\2016_10_31 Team",
          "uniqueName": "vstfs:///Classification/TeamProject/a7573007-bbb3-4341-b726-0c4148a07853\\2016_10_31 Team",
          "url": "https://mytfsserver/DefaultCollection/_apis/Identities/98d08d98-a075-46e7-a81e-21bc6f12cae7",
          "imageUrl": "https://mytfsserver/DefaultCollection/_api/_common/identityImage?id=98d08d98-a075-46e7-a81e-21bc6f12cae7",
          "isContainer": true
        }
      ],
      "url": "https://mytfsserver/DefaultCollection/_apis/git/repositories/3411ebc1-d5aa-464f-9615-0b527bc66719/pullRequests/1",
      "supportsIterations": true
    }
  ],
  "count": 3
}
```


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

#### Sample request

```
GET https://mytfsserver/DefaultCollection/_apis/git/pullRequests?api-version=3.0
```

#### Sample response

```json
{
  "value": [
    {
      "repository": {
        "id": "3411ebc1-d5aa-464f-9615-0b527bc66719",
        "name": "2016_10_31",
        "url": "https://mytfsserver/DefaultCollection/_apis/git/repositories/3411ebc1-d5aa-464f-9615-0b527bc66719",
        "project": {
          "id": "a7573007-bbb3-4341-b726-0c4148a07853",
          "name": "2016_10_31",
          "state": "unchanged"
        }
      },
      "pullRequestId": 22,
      "codeReviewId": 22,
      "status": "active",
      "createdBy": {
        "id": "d6245f20-2af8-44f4-9451-8107cb2767db",
        "displayName": "Normal Paulk",
        "uniqueName": "fabrikamfiber16@hotmail.com",
        "url": "https://mytfsserver/DefaultCollection/_apis/Identities/d6245f20-2af8-44f4-9451-8107cb2767db",
        "imageUrl": "https://mytfsserver/DefaultCollection/_api/_common/identityImage?id=d6245f20-2af8-44f4-9451-8107cb2767db"
      },
      "creationDate": "2016-11-01T16:30:31.6655471Z",
      "title": "A new feature",
      "description": "Adding a new feature",
      "sourceRefName": "refs/heads/npaulk/my_work",
      "targetRefName": "refs/heads/new_feature",
      "mergeStatus": "succeeded",
      "mergeId": "f5fc8381-3fb2-49fe-8a0d-27dcc2d6ef82",
      "lastMergeSourceCommit": {
        "commitId": "b60280bc6e62e2f880f1b63c1e24987664d3bda3",
        "url": "https://mytfsserver/DefaultCollection/_apis/git/repositories/3411ebc1-d5aa-464f-9615-0b527bc66719/commits/b60280bc6e62e2f880f1b63c1e24987664d3bda3"
      },
      "lastMergeTargetCommit": {
        "commitId": "f47bbc106853afe3c1b07a81754bce5f4b8dbf62",
        "url": "https://mytfsserver/DefaultCollection/_apis/git/repositories/3411ebc1-d5aa-464f-9615-0b527bc66719/commits/f47bbc106853afe3c1b07a81754bce5f4b8dbf62"
      },
      "lastMergeCommit": {
        "commitId": "39f52d24533cc712fc845ed9fd1b6c06b3942588",
        "url": "https://mytfsserver/DefaultCollection/_apis/git/repositories/3411ebc1-d5aa-464f-9615-0b527bc66719/commits/39f52d24533cc712fc845ed9fd1b6c06b3942588"
      },
      "reviewers": [
        {
          "reviewerUrl": "https://mytfsserver/DefaultCollection/_apis/git/repositories/3411ebc1-d5aa-464f-9615-0b527bc66719/pullRequests/22/reviewers/d6245f20-2af8-44f4-9451-8107cb2767db",
          "vote": 0,
          "id": "d6245f20-2af8-44f4-9451-8107cb2767db",
          "displayName": "Normal Paulk",
          "uniqueName": "fabrikamfiber16@hotmail.com",
          "url": "https://mytfsserver/DefaultCollection/_apis/Identities/d6245f20-2af8-44f4-9451-8107cb2767db",
          "imageUrl": "https://mytfsserver/DefaultCollection/_api/_common/identityImage?id=d6245f20-2af8-44f4-9451-8107cb2767db"
        }
      ],
      "url": "https://mytfsserver/DefaultCollection/_apis/git/repositories/3411ebc1-d5aa-464f-9615-0b527bc66719/pullRequests/22",
      "supportsIterations": true
    },
    {
      "repository": {
        "id": "3411ebc1-d5aa-464f-9615-0b527bc66719",
        "name": "2016_10_31",
        "url": "https://mytfsserver/DefaultCollection/_apis/git/repositories/3411ebc1-d5aa-464f-9615-0b527bc66719",
        "project": {
          "id": "a7573007-bbb3-4341-b726-0c4148a07853",
          "name": "2016_10_31",
          "state": "unchanged"
        }
      },
      "pullRequestId": 21,
      "codeReviewId": 21,
      "status": "active",
      "createdBy": {
        "id": "d6245f20-2af8-44f4-9451-8107cb2767db",
        "displayName": "Normal Paulk",
        "uniqueName": "fabrikamfiber16@hotmail.com",
        "url": "https://mytfsserver/DefaultCollection/_apis/Identities/d6245f20-2af8-44f4-9451-8107cb2767db",
        "imageUrl": "https://mytfsserver/DefaultCollection/_api/_common/identityImage?id=d6245f20-2af8-44f4-9451-8107cb2767db"
      },
      "creationDate": "2016-11-01T16:30:23.8410158Z",
      "title": "Added known issues document",
      "description": "Added known issues document",
      "sourceRefName": "refs/heads/npaulk/known_issues",
      "targetRefName": "refs/heads/new_feature",
      "mergeStatus": "succeeded",
      "mergeId": "58a34c62-01b5-4029-8337-c99782ee9003",
      "lastMergeSourceCommit": {
        "commitId": "05ce817c4692afc93c1eb952643bdf7ffbab18ee",
        "url": "https://mytfsserver/DefaultCollection/_apis/git/repositories/3411ebc1-d5aa-464f-9615-0b527bc66719/commits/05ce817c4692afc93c1eb952643bdf7ffbab18ee"
      },
      "lastMergeTargetCommit": {
        "commitId": "f47bbc106853afe3c1b07a81754bce5f4b8dbf62",
        "url": "https://mytfsserver/DefaultCollection/_apis/git/repositories/3411ebc1-d5aa-464f-9615-0b527bc66719/commits/f47bbc106853afe3c1b07a81754bce5f4b8dbf62"
      },
      "lastMergeCommit": {
        "commitId": "bf27525b51b5347483ed9d7dc52ce5a3cf2b045a",
        "url": "https://mytfsserver/DefaultCollection/_apis/git/repositories/3411ebc1-d5aa-464f-9615-0b527bc66719/commits/bf27525b51b5347483ed9d7dc52ce5a3cf2b045a"
      },
      "reviewers": [
        {
          "reviewerUrl": "https://mytfsserver/DefaultCollection/_apis/git/repositories/3411ebc1-d5aa-464f-9615-0b527bc66719/pullRequests/21/reviewers/d6245f20-2af8-44f4-9451-8107cb2767db",
          "vote": 0,
          "id": "d6245f20-2af8-44f4-9451-8107cb2767db",
          "displayName": "Normal Paulk",
          "uniqueName": "fabrikamfiber16@hotmail.com",
          "url": "https://mytfsserver/DefaultCollection/_apis/Identities/d6245f20-2af8-44f4-9451-8107cb2767db",
          "imageUrl": "https://mytfsserver/DefaultCollection/_api/_common/identityImage?id=d6245f20-2af8-44f4-9451-8107cb2767db"
        }
      ],
      "url": "https://mytfsserver/DefaultCollection/_apis/git/repositories/3411ebc1-d5aa-464f-9615-0b527bc66719/pullRequests/21",
      "supportsIterations": true
    },
    {
      "repository": {
        "id": "3411ebc1-d5aa-464f-9615-0b527bc66719",
        "name": "2016_10_31",
        "url": "https://mytfsserver/DefaultCollection/_apis/git/repositories/3411ebc1-d5aa-464f-9615-0b527bc66719",
        "project": {
          "id": "a7573007-bbb3-4341-b726-0c4148a07853",
          "name": "2016_10_31",
          "state": "unchanged"
        }
      },
      "pullRequestId": 1,
      "codeReviewId": 1,
      "status": "active",
      "createdBy": {
        "id": "d6245f20-2af8-44f4-9451-8107cb2767db",
        "displayName": "Normal Paulk",
        "uniqueName": "fabrikamfiber16@hotmail.com",
        "url": "https://mytfsserver/DefaultCollection/_apis/Identities/d6245f20-2af8-44f4-9451-8107cb2767db",
        "imageUrl": "https://mytfsserver/DefaultCollection/_api/_common/identityImage?id=d6245f20-2af8-44f4-9451-8107cb2767db"
      },
      "creationDate": "2016-10-31T20:20:32.3087249Z",
      "title": "some_branch edit",
      "description": " - Updated README.md",
      "sourceRefName": "refs/heads/some_branch",
      "targetRefName": "refs/heads/master",
      "mergeStatus": "succeeded",
      "mergeId": "b294fd81-d539-461d-b271-71a6e61f3c24",
      "lastMergeSourceCommit": {
        "commitId": "34a9e500f29d119802a828d7a759f6fa2e546750",
        "url": "https://mytfsserver/DefaultCollection/_apis/git/repositories/3411ebc1-d5aa-464f-9615-0b527bc66719/commits/34a9e500f29d119802a828d7a759f6fa2e546750"
      },
      "lastMergeTargetCommit": {
        "commitId": "f47bbc106853afe3c1b07a81754bce5f4b8dbf62",
        "url": "https://mytfsserver/DefaultCollection/_apis/git/repositories/3411ebc1-d5aa-464f-9615-0b527bc66719/commits/f47bbc106853afe3c1b07a81754bce5f4b8dbf62"
      },
      "lastMergeCommit": {
        "commitId": "41e98d9939cf4ec0ce166079c22e2b40de862cf5",
        "url": "https://mytfsserver/DefaultCollection/_apis/git/repositories/3411ebc1-d5aa-464f-9615-0b527bc66719/commits/41e98d9939cf4ec0ce166079c22e2b40de862cf5"
      },
      "reviewers": [
        {
          "reviewerUrl": "https://mytfsserver/DefaultCollection/_apis/git/repositories/3411ebc1-d5aa-464f-9615-0b527bc66719/pullRequests/1/reviewers/98d08d98-a075-46e7-a81e-21bc6f12cae7",
          "vote": 0,
          "id": "98d08d98-a075-46e7-a81e-21bc6f12cae7",
          "displayName": "[2016_10_31]\\2016_10_31 Team",
          "uniqueName": "vstfs:///Classification/TeamProject/a7573007-bbb3-4341-b726-0c4148a07853\\2016_10_31 Team",
          "url": "https://mytfsserver/DefaultCollection/_apis/Identities/98d08d98-a075-46e7-a81e-21bc6f12cae7",
          "imageUrl": "https://mytfsserver/DefaultCollection/_api/_common/identityImage?id=98d08d98-a075-46e7-a81e-21bc6f12cae7",
          "isContainer": true
        }
      ],
      "url": "https://mytfsserver/DefaultCollection/_apis/git/repositories/3411ebc1-d5aa-464f-9615-0b527bc66719/pullRequests/1",
      "supportsIterations": true
    }
  ],
  "count": 3
}
```



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

#### Sample request

```
GET https://mytfsserver/DefaultCollection/_apis/git/pullRequests/22?api-version=3.0
```

#### Sample response

```json
{
  "repository": {
    "id": "3411ebc1-d5aa-464f-9615-0b527bc66719",
    "name": "2016_10_31",
    "url": "https://mytfsserver/DefaultCollection/_apis/git/repositories/3411ebc1-d5aa-464f-9615-0b527bc66719",
    "project": {
      "id": "a7573007-bbb3-4341-b726-0c4148a07853",
      "name": "2016_10_31",
      "description": "test project created on Halloween 2016",
      "url": "https://mytfsserver/DefaultCollection/_apis/projects/a7573007-bbb3-4341-b726-0c4148a07853",
      "state": "wellFormed",
      "revision": 7
    },
    "remoteUrl": "https://mytfsserver/DefaultCollection/_git/2016_10_31"
  },
  "pullRequestId": 22,
  "codeReviewId": 22,
  "status": "active",
  "createdBy": {
    "id": "d6245f20-2af8-44f4-9451-8107cb2767db",
    "displayName": "Normal Paulk",
    "uniqueName": "fabrikamfiber16@hotmail.com",
    "url": "https://mytfsserver/DefaultCollection/_apis/Identities/d6245f20-2af8-44f4-9451-8107cb2767db",
    "imageUrl": "https://mytfsserver/DefaultCollection/_api/_common/identityImage?id=d6245f20-2af8-44f4-9451-8107cb2767db"
  },
  "creationDate": "2016-11-01T16:30:31.6655471Z",
  "title": "A new feature",
  "description": "Adding a new feature",
  "sourceRefName": "refs/heads/npaulk/my_work",
  "targetRefName": "refs/heads/new_feature",
  "mergeStatus": "succeeded",
  "mergeId": "f5fc8381-3fb2-49fe-8a0d-27dcc2d6ef82",
  "lastMergeSourceCommit": {
    "commitId": "b60280bc6e62e2f880f1b63c1e24987664d3bda3",
    "url": "https://mytfsserver/DefaultCollection/_apis/git/repositories/3411ebc1-d5aa-464f-9615-0b527bc66719/commits/b60280bc6e62e2f880f1b63c1e24987664d3bda3"
  },
  "lastMergeTargetCommit": {
    "commitId": "f47bbc106853afe3c1b07a81754bce5f4b8dbf62",
    "url": "https://mytfsserver/DefaultCollection/_apis/git/repositories/3411ebc1-d5aa-464f-9615-0b527bc66719/commits/f47bbc106853afe3c1b07a81754bce5f4b8dbf62"
  },
  "lastMergeCommit": {
    "commitId": "39f52d24533cc712fc845ed9fd1b6c06b3942588",
    "author": {
      "name": "Normal Paulk",
      "email": "fabrikamfiber16@hotmail.com",
      "date": "2016-11-01T16:30:32Z"
    },
    "committer": {
      "name": "Normal Paulk",
      "email": "fabrikamfiber16@hotmail.com",
      "date": "2016-11-01T16:30:32Z"
    },
    "comment": "Merge pull request 22 from npaulk/my_work into new_feature",
    "url": "https://mytfsserver/DefaultCollection/_apis/git/repositories/3411ebc1-d5aa-464f-9615-0b527bc66719/commits/39f52d24533cc712fc845ed9fd1b6c06b3942588"
  },
  "reviewers": [
    {
      "reviewerUrl": "https://mytfsserver/DefaultCollection/_apis/git/repositories/3411ebc1-d5aa-464f-9615-0b527bc66719/pullRequests/22/reviewers/d6245f20-2af8-44f4-9451-8107cb2767db",
      "vote": 0,
      "id": "d6245f20-2af8-44f4-9451-8107cb2767db",
      "displayName": "Normal Paulk",
      "uniqueName": "fabrikamfiber16@hotmail.com",
      "url": "https://mytfsserver/DefaultCollection/_apis/Identities/d6245f20-2af8-44f4-9451-8107cb2767db",
      "imageUrl": "https://mytfsserver/DefaultCollection/_api/_common/identityImage?id=d6245f20-2af8-44f4-9451-8107cb2767db"
    }
  ],
  "url": "https://mytfsserver/DefaultCollection/_apis/git/repositories/3411ebc1-d5aa-464f-9615-0b527bc66719/pullRequests/22",
  "supportsIterations": true,
  "artifactId": "vstfs:///Git/PullRequestId/a7573007-bbb3-4341-b726-0c4148a07853%2f3411ebc1-d5aa-464f-9615-0b527bc66719%2f22"
}
```


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

#### Sample request

```
GET https://mytfsserver/DefaultCollection/_apis/git/repositories/3411ebc1-d5aa-464f-9615-0b527bc66719/pullRequests/22?api-version=3.0
```

#### Sample response

```json
{
  "repository": {
    "id": "3411ebc1-d5aa-464f-9615-0b527bc66719",
    "name": "2016_10_31",
    "url": "https://mytfsserver/DefaultCollection/_apis/git/repositories/3411ebc1-d5aa-464f-9615-0b527bc66719",
    "project": {
      "id": "a7573007-bbb3-4341-b726-0c4148a07853",
      "name": "2016_10_31",
      "description": "test project created on Halloween 2016",
      "url": "https://mytfsserver/DefaultCollection/_apis/projects/a7573007-bbb3-4341-b726-0c4148a07853",
      "state": "wellFormed",
      "revision": 7
    },
    "remoteUrl": "https://mytfsserver/DefaultCollection/_git/2016_10_31"
  },
  "pullRequestId": 22,
  "codeReviewId": 22,
  "status": "active",
  "createdBy": {
    "id": "d6245f20-2af8-44f4-9451-8107cb2767db",
    "displayName": "Normal Paulk",
    "uniqueName": "fabrikamfiber16@hotmail.com",
    "url": "https://mytfsserver/DefaultCollection/_apis/Identities/d6245f20-2af8-44f4-9451-8107cb2767db",
    "imageUrl": "https://mytfsserver/DefaultCollection/_api/_common/identityImage?id=d6245f20-2af8-44f4-9451-8107cb2767db"
  },
  "creationDate": "2016-11-01T16:30:31.6655471Z",
  "title": "A new feature",
  "description": "Adding a new feature",
  "sourceRefName": "refs/heads/npaulk/my_work",
  "targetRefName": "refs/heads/new_feature",
  "mergeStatus": "succeeded",
  "mergeId": "f5fc8381-3fb2-49fe-8a0d-27dcc2d6ef82",
  "lastMergeSourceCommit": {
    "commitId": "b60280bc6e62e2f880f1b63c1e24987664d3bda3",
    "url": "https://mytfsserver/DefaultCollection/_apis/git/repositories/3411ebc1-d5aa-464f-9615-0b527bc66719/commits/b60280bc6e62e2f880f1b63c1e24987664d3bda3"
  },
  "lastMergeTargetCommit": {
    "commitId": "f47bbc106853afe3c1b07a81754bce5f4b8dbf62",
    "url": "https://mytfsserver/DefaultCollection/_apis/git/repositories/3411ebc1-d5aa-464f-9615-0b527bc66719/commits/f47bbc106853afe3c1b07a81754bce5f4b8dbf62"
  },
  "lastMergeCommit": {
    "commitId": "39f52d24533cc712fc845ed9fd1b6c06b3942588",
    "author": {
      "name": "Normal Paulk",
      "email": "fabrikamfiber16@hotmail.com",
      "date": "2016-11-01T16:30:32Z"
    },
    "committer": {
      "name": "Normal Paulk",
      "email": "fabrikamfiber16@hotmail.com",
      "date": "2016-11-01T16:30:32Z"
    },
    "comment": "Merge pull request 22 from npaulk/my_work into new_feature",
    "url": "https://mytfsserver/DefaultCollection/_apis/git/repositories/3411ebc1-d5aa-464f-9615-0b527bc66719/commits/39f52d24533cc712fc845ed9fd1b6c06b3942588"
  },
  "reviewers": [
    {
      "reviewerUrl": "https://mytfsserver/DefaultCollection/_apis/git/repositories/3411ebc1-d5aa-464f-9615-0b527bc66719/pullRequests/22/reviewers/d6245f20-2af8-44f4-9451-8107cb2767db",
      "vote": 0,
      "id": "d6245f20-2af8-44f4-9451-8107cb2767db",
      "displayName": "Normal Paulk",
      "uniqueName": "fabrikamfiber16@hotmail.com",
      "url": "https://mytfsserver/DefaultCollection/_apis/Identities/d6245f20-2af8-44f4-9451-8107cb2767db",
      "imageUrl": "https://mytfsserver/DefaultCollection/_api/_common/identityImage?id=d6245f20-2af8-44f4-9451-8107cb2767db"
    }
  ],
  "url": "https://mytfsserver/DefaultCollection/_apis/git/repositories/3411ebc1-d5aa-464f-9615-0b527bc66719/pullRequests/22",
  "_links": {
    "self": {
      "href": "https://mytfsserver/DefaultCollection/_apis/git/repositories/3411ebc1-d5aa-464f-9615-0b527bc66719/pullRequests/22"
    },
    "repository": {
      "href": "https://mytfsserver/DefaultCollection/_apis/git/repositories/3411ebc1-d5aa-464f-9615-0b527bc66719"
    },
    "workItems": {
      "href": "https://mytfsserver/DefaultCollection/_apis/git/repositories/3411ebc1-d5aa-464f-9615-0b527bc66719/pullRequests/22/workitems"
    },
    "sourceBranch": {
      "href": "https://mytfsserver/DefaultCollection/_apis/git/repositories/3411ebc1-d5aa-464f-9615-0b527bc66719/refs"
    },
    "targetBranch": {
      "href": "https://mytfsserver/DefaultCollection/_apis/git/repositories/3411ebc1-d5aa-464f-9615-0b527bc66719/refs"
    },
    "sourceCommit": {
      "href": "https://mytfsserver/DefaultCollection/_apis/git/repositories/3411ebc1-d5aa-464f-9615-0b527bc66719/commits/b60280bc6e62e2f880f1b63c1e24987664d3bda3"
    },
    "targetCommit": {
      "href": "https://mytfsserver/DefaultCollection/_apis/git/repositories/3411ebc1-d5aa-464f-9615-0b527bc66719/commits/f47bbc106853afe3c1b07a81754bce5f4b8dbf62"
    },
    "createdBy": {
      "href": "https://mytfsserver/DefaultCollection/_apis/Identities/d6245f20-2af8-44f4-9451-8107cb2767db"
    },
    "iterations": {
      "href": "https://mytfsserver/DefaultCollection/_apis/git/repositories/3411ebc1-d5aa-464f-9615-0b527bc66719/pullRequests/22/iterations"
    }
  },
  "supportsIterations": true,
  "artifactId": "vstfs:///Git/PullRequestId/a7573007-bbb3-4341-b726-0c4148a07853%2f3411ebc1-d5aa-464f-9615-0b527bc66719%2f22"
}
```


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

#### Sample request

```
GET https://mytfsserver/DefaultCollection/_apis/git/repositories/3411ebc1-d5aa-464f-9615-0b527bc66719/pullRequests/22/commits?api-version=3.0
```

#### Sample response

```json
{
  "value": [
    {
      "commitId": "8c9396b5cf22f929767c7172e9dbbe777ddc6357",
      "author": {
        "name": "Normal Paulk",
        "email": "fabrikamfiber16@hotmail.com",
        "date": "2016-11-01T16:30:37Z"
      },
      "committer": {
        "name": "Normal Paulk",
        "email": "fabrikamfiber16@hotmail.com",
        "date": "2016-11-01T16:30:37Z"
      },
      "comment": "Updated new_feature.cpp",
      "url": "https://mytfsserver/DefaultCollection/_apis/git/repositories/3411ebc1-d5aa-464f-9615-0b527bc66719/commits/8c9396b5cf22f929767c7172e9dbbe777ddc6357"
    },
    {
      "commitId": "b60280bc6e62e2f880f1b63c1e24987664d3bda3",
      "author": {
        "name": "Normal Paulk",
        "email": "fabrikamfiber16@hotmail.com",
        "date": "2016-11-01T16:30:28Z"
      },
      "committer": {
        "name": "Normal Paulk",
        "email": "fabrikamfiber16@hotmail.com",
        "date": "2016-11-01T16:30:28Z"
      },
      "comment": "Added new_feature.cpp",
      "url": "https://mytfsserver/DefaultCollection/_apis/git/repositories/3411ebc1-d5aa-464f-9615-0b527bc66719/commits/b60280bc6e62e2f880f1b63c1e24987664d3bda3"
    },
    {
      "commitId": "050acf036bcef766bcbe61abeb0aa67a56ca8586",
      "author": {
        "name": "Normal Paulk",
        "email": "fabrikamfiber16@hotmail.com",
        "date": "2016-11-01T16:30:25Z"
      },
      "committer": {
        "name": "Normal Paulk",
        "email": "fabrikamfiber16@hotmail.com",
        "date": "2016-11-01T16:30:25Z"
      },
      "comment": "Added new_feature.h",
      "url": "https://mytfsserver/DefaultCollection/_apis/git/repositories/3411ebc1-d5aa-464f-9615-0b527bc66719/commits/050acf036bcef766bcbe61abeb0aa67a56ca8586"
    }
  ],
  "count": 3
}
```


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

#### Sample request

```
POST https://mytfsserver/DefaultCollection/_apis/git/repositories/3411ebc1-d5aa-464f-9615-0b527bc66719/pullRequests?api-version=3.0
```
```json
{
  "sourceRefName": "refs/heads/npaulk/my_work",
  "targetRefName": "refs/heads/new_feature",
  "title": "A new feature",
  "description": "Adding a new feature",
  "reviewers": [
    {
      "id": "d6245f20-2af8-44f4-9451-8107cb2767db"
    }
  ]
}
```

#### Sample response

```json
{
  "repository": {
    "id": "3411ebc1-d5aa-464f-9615-0b527bc66719",
    "name": "2016_10_31",
    "url": "https://mytfsserver/DefaultCollection/_apis/git/repositories/3411ebc1-d5aa-464f-9615-0b527bc66719",
    "project": {
      "id": "a7573007-bbb3-4341-b726-0c4148a07853",
      "name": "2016_10_31",
      "description": "test project created on Halloween 2016",
      "url": "https://mytfsserver/DefaultCollection/_apis/projects/a7573007-bbb3-4341-b726-0c4148a07853",
      "state": "wellFormed",
      "revision": 7
    },
    "remoteUrl": "https://mytfsserver/DefaultCollection/_git/2016_10_31"
  },
  "pullRequestId": 22,
  "codeReviewId": 22,
  "status": "active",
  "createdBy": {
    "id": "d6245f20-2af8-44f4-9451-8107cb2767db",
    "displayName": "Normal Paulk",
    "uniqueName": "fabrikamfiber16@hotmail.com",
    "url": "https://mytfsserver/DefaultCollection/_apis/Identities/d6245f20-2af8-44f4-9451-8107cb2767db",
    "imageUrl": "https://mytfsserver/DefaultCollection/_api/_common/identityImage?id=d6245f20-2af8-44f4-9451-8107cb2767db"
  },
  "creationDate": "2016-11-01T16:30:31.6655471Z",
  "title": "A new feature",
  "description": "Adding a new feature",
  "sourceRefName": "refs/heads/npaulk/my_work",
  "targetRefName": "refs/heads/new_feature",
  "mergeStatus": "queued",
  "mergeId": "f5fc8381-3fb2-49fe-8a0d-27dcc2d6ef82",
  "lastMergeSourceCommit": {
    "commitId": "b60280bc6e62e2f880f1b63c1e24987664d3bda3",
    "url": "https://mytfsserver/DefaultCollection/_apis/git/repositories/3411ebc1-d5aa-464f-9615-0b527bc66719/commits/b60280bc6e62e2f880f1b63c1e24987664d3bda3"
  },
  "lastMergeTargetCommit": {
    "commitId": "f47bbc106853afe3c1b07a81754bce5f4b8dbf62",
    "url": "https://mytfsserver/DefaultCollection/_apis/git/repositories/3411ebc1-d5aa-464f-9615-0b527bc66719/commits/f47bbc106853afe3c1b07a81754bce5f4b8dbf62"
  },
  "reviewers": [
    {
      "reviewerUrl": "https://mytfsserver/DefaultCollection/_apis/git/repositories/3411ebc1-d5aa-464f-9615-0b527bc66719/pullRequests/22/reviewers/d6245f20-2af8-44f4-9451-8107cb2767db",
      "vote": 0,
      "id": "d6245f20-2af8-44f4-9451-8107cb2767db",
      "displayName": "Normal Paulk",
      "uniqueName": "fabrikamfiber16@hotmail.com",
      "url": "https://mytfsserver/DefaultCollection/_apis/Identities/d6245f20-2af8-44f4-9451-8107cb2767db",
      "imageUrl": "https://mytfsserver/DefaultCollection/_api/_common/identityImage?id=d6245f20-2af8-44f4-9451-8107cb2767db"
    }
  ],
  "url": "https://mytfsserver/DefaultCollection/_apis/git/repositories/3411ebc1-d5aa-464f-9615-0b527bc66719/pullRequests/22",
  "_links": {
    "self": {
      "href": "https://mytfsserver/DefaultCollection/_apis/git/repositories/3411ebc1-d5aa-464f-9615-0b527bc66719/pullRequests/22"
    },
    "repository": {
      "href": "https://mytfsserver/DefaultCollection/_apis/git/repositories/3411ebc1-d5aa-464f-9615-0b527bc66719"
    },
    "workItems": {
      "href": "https://mytfsserver/DefaultCollection/_apis/git/repositories/3411ebc1-d5aa-464f-9615-0b527bc66719/pullRequests/22/workitems"
    },
    "sourceBranch": {
      "href": "https://mytfsserver/DefaultCollection/_apis/git/repositories/3411ebc1-d5aa-464f-9615-0b527bc66719/refs"
    },
    "targetBranch": {
      "href": "https://mytfsserver/DefaultCollection/_apis/git/repositories/3411ebc1-d5aa-464f-9615-0b527bc66719/refs"
    },
    "sourceCommit": {
      "href": "https://mytfsserver/DefaultCollection/_apis/git/repositories/3411ebc1-d5aa-464f-9615-0b527bc66719/commits/b60280bc6e62e2f880f1b63c1e24987664d3bda3"
    },
    "targetCommit": {
      "href": "https://mytfsserver/DefaultCollection/_apis/git/repositories/3411ebc1-d5aa-464f-9615-0b527bc66719/commits/f47bbc106853afe3c1b07a81754bce5f4b8dbf62"
    },
    "createdBy": {
      "href": "https://mytfsserver/DefaultCollection/_apis/Identities/d6245f20-2af8-44f4-9451-8107cb2767db"
    },
    "iterations": {
      "href": "https://mytfsserver/DefaultCollection/_apis/git/repositories/3411ebc1-d5aa-464f-9615-0b527bc66719/pullRequests/22/iterations"
    }
  },
  "supportsIterations": true,
  "artifactId": "vstfs:///Git/PullRequestId/a7573007-bbb3-4341-b726-0c4148a07853%2f3411ebc1-d5aa-464f-9615-0b527bc66719%2f22"
}
```


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

#### Sample request

```
PATCH https://mytfsserver/DefaultCollection/_apis/git/repositories/3411ebc1-d5aa-464f-9615-0b527bc66719/pullRequests/22?api-version=3.0
```
```json
{
  "title": "Updated pull request title"
}
```

#### Sample response

```json
{
  "repository": {
    "id": "3411ebc1-d5aa-464f-9615-0b527bc66719",
    "name": "2016_10_31",
    "url": "https://mytfsserver/DefaultCollection/_apis/git/repositories/3411ebc1-d5aa-464f-9615-0b527bc66719",
    "project": {
      "id": "a7573007-bbb3-4341-b726-0c4148a07853",
      "name": "2016_10_31",
      "description": "test project created on Halloween 2016",
      "url": "https://mytfsserver/DefaultCollection/_apis/projects/a7573007-bbb3-4341-b726-0c4148a07853",
      "state": "wellFormed",
      "revision": 7
    },
    "remoteUrl": "https://mytfsserver/DefaultCollection/_git/2016_10_31"
  },
  "pullRequestId": 22,
  "codeReviewId": 22,
  "status": "active",
  "createdBy": {
    "id": "d6245f20-2af8-44f4-9451-8107cb2767db",
    "displayName": "Normal Paulk",
    "uniqueName": "fabrikamfiber16@hotmail.com",
    "url": "https://mytfsserver/DefaultCollection/_apis/Identities/d6245f20-2af8-44f4-9451-8107cb2767db",
    "imageUrl": "https://mytfsserver/DefaultCollection/_api/_common/identityImage?id=d6245f20-2af8-44f4-9451-8107cb2767db"
  },
  "creationDate": "2016-11-01T16:30:31.6655471Z",
  "title": "Updated pull request title",
  "description": "Adding a new feature",
  "sourceRefName": "refs/heads/npaulk/my_work",
  "targetRefName": "refs/heads/new_feature",
  "mergeStatus": "succeeded",
  "mergeId": "f5fc8381-3fb2-49fe-8a0d-27dcc2d6ef82",
  "lastMergeSourceCommit": {
    "commitId": "8c9396b5cf22f929767c7172e9dbbe777ddc6357",
    "url": "https://mytfsserver/DefaultCollection/_apis/git/repositories/3411ebc1-d5aa-464f-9615-0b527bc66719/commits/8c9396b5cf22f929767c7172e9dbbe777ddc6357"
  },
  "lastMergeTargetCommit": {
    "commitId": "f47bbc106853afe3c1b07a81754bce5f4b8dbf62",
    "url": "https://mytfsserver/DefaultCollection/_apis/git/repositories/3411ebc1-d5aa-464f-9615-0b527bc66719/commits/f47bbc106853afe3c1b07a81754bce5f4b8dbf62"
  },
  "lastMergeCommit": {
    "commitId": "fd8da3e51efe350811d2157b2223df53d4db46c3",
    "author": {
      "name": "Normal Paulk",
      "email": "fabrikamfiber16@hotmail.com",
      "date": "2016-11-01T16:30:40Z"
    },
    "committer": {
      "name": "Normal Paulk",
      "email": "fabrikamfiber16@hotmail.com",
      "date": "2016-11-01T16:30:40Z"
    },
    "comment": "Merge pull request 22 from npaulk/my_work into new_feature",
    "url": "https://mytfsserver/DefaultCollection/_apis/git/repositories/3411ebc1-d5aa-464f-9615-0b527bc66719/commits/fd8da3e51efe350811d2157b2223df53d4db46c3"
  },
  "reviewers": [
    {
      "reviewerUrl": "https://mytfsserver/DefaultCollection/_apis/git/repositories/3411ebc1-d5aa-464f-9615-0b527bc66719/pullRequests/22/reviewers/d6245f20-2af8-44f4-9451-8107cb2767db",
      "vote": 10,
      "id": "d6245f20-2af8-44f4-9451-8107cb2767db",
      "displayName": "Normal Paulk",
      "uniqueName": "fabrikamfiber16@hotmail.com",
      "url": "https://mytfsserver/DefaultCollection/_apis/Identities/d6245f20-2af8-44f4-9451-8107cb2767db",
      "imageUrl": "https://mytfsserver/DefaultCollection/_api/_common/identityImage?id=d6245f20-2af8-44f4-9451-8107cb2767db"
    }
  ],
  "url": "https://mytfsserver/DefaultCollection/_apis/git/repositories/3411ebc1-d5aa-464f-9615-0b527bc66719/pullRequests/22",
  "_links": {
    "self": {
      "href": "https://mytfsserver/DefaultCollection/_apis/git/repositories/3411ebc1-d5aa-464f-9615-0b527bc66719/pullRequests/22"
    },
    "repository": {
      "href": "https://mytfsserver/DefaultCollection/_apis/git/repositories/3411ebc1-d5aa-464f-9615-0b527bc66719"
    },
    "workItems": {
      "href": "https://mytfsserver/DefaultCollection/_apis/git/repositories/3411ebc1-d5aa-464f-9615-0b527bc66719/pullRequests/22/workitems"
    },
    "sourceBranch": {
      "href": "https://mytfsserver/DefaultCollection/_apis/git/repositories/3411ebc1-d5aa-464f-9615-0b527bc66719/refs"
    },
    "targetBranch": {
      "href": "https://mytfsserver/DefaultCollection/_apis/git/repositories/3411ebc1-d5aa-464f-9615-0b527bc66719/refs"
    },
    "sourceCommit": {
      "href": "https://mytfsserver/DefaultCollection/_apis/git/repositories/3411ebc1-d5aa-464f-9615-0b527bc66719/commits/8c9396b5cf22f929767c7172e9dbbe777ddc6357"
    },
    "targetCommit": {
      "href": "https://mytfsserver/DefaultCollection/_apis/git/repositories/3411ebc1-d5aa-464f-9615-0b527bc66719/commits/f47bbc106853afe3c1b07a81754bce5f4b8dbf62"
    },
    "createdBy": {
      "href": "https://mytfsserver/DefaultCollection/_apis/Identities/d6245f20-2af8-44f4-9451-8107cb2767db"
    },
    "iterations": {
      "href": "https://mytfsserver/DefaultCollection/_apis/git/repositories/3411ebc1-d5aa-464f-9615-0b527bc66719/pullRequests/22/iterations"
    }
  },
  "supportsIterations": true,
  "artifactId": "vstfs:///Git/PullRequestId/a7573007-bbb3-4341-b726-0c4148a07853%2f3411ebc1-d5aa-464f-9615-0b527bc66719%2f22"
}
```


### description

#### Sample request

```
PATCH https://mytfsserver/DefaultCollection/_apis/git/repositories/3411ebc1-d5aa-464f-9615-0b527bc66719/pullRequests/22?api-version=3.0
```
```json
{
  "description": "Updated pull request description"
}
```

#### Sample response

```json
{
  "repository": {
    "id": "3411ebc1-d5aa-464f-9615-0b527bc66719",
    "name": "2016_10_31",
    "url": "https://mytfsserver/DefaultCollection/_apis/git/repositories/3411ebc1-d5aa-464f-9615-0b527bc66719",
    "project": {
      "id": "a7573007-bbb3-4341-b726-0c4148a07853",
      "name": "2016_10_31",
      "description": "test project created on Halloween 2016",
      "url": "https://mytfsserver/DefaultCollection/_apis/projects/a7573007-bbb3-4341-b726-0c4148a07853",
      "state": "wellFormed",
      "revision": 7
    },
    "remoteUrl": "https://mytfsserver/DefaultCollection/_git/2016_10_31"
  },
  "pullRequestId": 22,
  "codeReviewId": 22,
  "status": "active",
  "createdBy": {
    "id": "d6245f20-2af8-44f4-9451-8107cb2767db",
    "displayName": "Normal Paulk",
    "uniqueName": "fabrikamfiber16@hotmail.com",
    "url": "https://mytfsserver/DefaultCollection/_apis/Identities/d6245f20-2af8-44f4-9451-8107cb2767db",
    "imageUrl": "https://mytfsserver/DefaultCollection/_api/_common/identityImage?id=d6245f20-2af8-44f4-9451-8107cb2767db"
  },
  "creationDate": "2016-11-01T16:30:31.6655471Z",
  "title": "Updated pull request title",
  "description": "Updated pull request description",
  "sourceRefName": "refs/heads/npaulk/my_work",
  "targetRefName": "refs/heads/new_feature",
  "mergeStatus": "succeeded",
  "mergeId": "f5fc8381-3fb2-49fe-8a0d-27dcc2d6ef82",
  "lastMergeSourceCommit": {
    "commitId": "8c9396b5cf22f929767c7172e9dbbe777ddc6357",
    "url": "https://mytfsserver/DefaultCollection/_apis/git/repositories/3411ebc1-d5aa-464f-9615-0b527bc66719/commits/8c9396b5cf22f929767c7172e9dbbe777ddc6357"
  },
  "lastMergeTargetCommit": {
    "commitId": "f47bbc106853afe3c1b07a81754bce5f4b8dbf62",
    "url": "https://mytfsserver/DefaultCollection/_apis/git/repositories/3411ebc1-d5aa-464f-9615-0b527bc66719/commits/f47bbc106853afe3c1b07a81754bce5f4b8dbf62"
  },
  "lastMergeCommit": {
    "commitId": "fd8da3e51efe350811d2157b2223df53d4db46c3",
    "author": {
      "name": "Normal Paulk",
      "email": "fabrikamfiber16@hotmail.com",
      "date": "2016-11-01T16:30:40Z"
    },
    "committer": {
      "name": "Normal Paulk",
      "email": "fabrikamfiber16@hotmail.com",
      "date": "2016-11-01T16:30:40Z"
    },
    "comment": "Merge pull request 22 from npaulk/my_work into new_feature",
    "url": "https://mytfsserver/DefaultCollection/_apis/git/repositories/3411ebc1-d5aa-464f-9615-0b527bc66719/commits/fd8da3e51efe350811d2157b2223df53d4db46c3"
  },
  "reviewers": [
    {
      "reviewerUrl": "https://mytfsserver/DefaultCollection/_apis/git/repositories/3411ebc1-d5aa-464f-9615-0b527bc66719/pullRequests/22/reviewers/d6245f20-2af8-44f4-9451-8107cb2767db",
      "vote": 10,
      "id": "d6245f20-2af8-44f4-9451-8107cb2767db",
      "displayName": "Normal Paulk",
      "uniqueName": "fabrikamfiber16@hotmail.com",
      "url": "https://mytfsserver/DefaultCollection/_apis/Identities/d6245f20-2af8-44f4-9451-8107cb2767db",
      "imageUrl": "https://mytfsserver/DefaultCollection/_api/_common/identityImage?id=d6245f20-2af8-44f4-9451-8107cb2767db"
    }
  ],
  "url": "https://mytfsserver/DefaultCollection/_apis/git/repositories/3411ebc1-d5aa-464f-9615-0b527bc66719/pullRequests/22",
  "_links": {
    "self": {
      "href": "https://mytfsserver/DefaultCollection/_apis/git/repositories/3411ebc1-d5aa-464f-9615-0b527bc66719/pullRequests/22"
    },
    "repository": {
      "href": "https://mytfsserver/DefaultCollection/_apis/git/repositories/3411ebc1-d5aa-464f-9615-0b527bc66719"
    },
    "workItems": {
      "href": "https://mytfsserver/DefaultCollection/_apis/git/repositories/3411ebc1-d5aa-464f-9615-0b527bc66719/pullRequests/22/workitems"
    },
    "sourceBranch": {
      "href": "https://mytfsserver/DefaultCollection/_apis/git/repositories/3411ebc1-d5aa-464f-9615-0b527bc66719/refs"
    },
    "targetBranch": {
      "href": "https://mytfsserver/DefaultCollection/_apis/git/repositories/3411ebc1-d5aa-464f-9615-0b527bc66719/refs"
    },
    "sourceCommit": {
      "href": "https://mytfsserver/DefaultCollection/_apis/git/repositories/3411ebc1-d5aa-464f-9615-0b527bc66719/commits/8c9396b5cf22f929767c7172e9dbbe777ddc6357"
    },
    "targetCommit": {
      "href": "https://mytfsserver/DefaultCollection/_apis/git/repositories/3411ebc1-d5aa-464f-9615-0b527bc66719/commits/f47bbc106853afe3c1b07a81754bce5f4b8dbf62"
    },
    "createdBy": {
      "href": "https://mytfsserver/DefaultCollection/_apis/Identities/d6245f20-2af8-44f4-9451-8107cb2767db"
    },
    "iterations": {
      "href": "https://mytfsserver/DefaultCollection/_apis/git/repositories/3411ebc1-d5aa-464f-9615-0b527bc66719/pullRequests/22/iterations"
    }
  },
  "supportsIterations": true,
  "artifactId": "vstfs:///Git/PullRequestId/a7573007-bbb3-4341-b726-0c4148a07853%2f3411ebc1-d5aa-464f-9615-0b527bc66719%2f22"
}
```


### Status

#### Sample request

```
PATCH https://mytfsserver/DefaultCollection/_apis/git/repositories/3411ebc1-d5aa-464f-9615-0b527bc66719/pullRequests/22?api-version=3.0
```
```json
{
  "status": "completed",
  "lastMergeSourceCommit": {
    "commitId": "8c9396b5cf22f929767c7172e9dbbe777ddc6357"
  }
}
```

#### Sample response

```json
{
  "repository": {
    "id": "3411ebc1-d5aa-464f-9615-0b527bc66719",
    "name": "2016_10_31",
    "url": "https://mytfsserver/DefaultCollection/_apis/git/repositories/3411ebc1-d5aa-464f-9615-0b527bc66719",
    "project": {
      "id": "a7573007-bbb3-4341-b726-0c4148a07853",
      "name": "2016_10_31",
      "description": "test project created on Halloween 2016",
      "url": "https://mytfsserver/DefaultCollection/_apis/projects/a7573007-bbb3-4341-b726-0c4148a07853",
      "state": "wellFormed",
      "revision": 7
    },
    "remoteUrl": "https://mytfsserver/DefaultCollection/_git/2016_10_31"
  },
  "pullRequestId": 22,
  "codeReviewId": 22,
  "status": "active",
  "createdBy": {
    "id": "d6245f20-2af8-44f4-9451-8107cb2767db",
    "displayName": "Normal Paulk",
    "uniqueName": "fabrikamfiber16@hotmail.com",
    "url": "https://mytfsserver/DefaultCollection/_apis/Identities/d6245f20-2af8-44f4-9451-8107cb2767db",
    "imageUrl": "https://mytfsserver/DefaultCollection/_api/_common/identityImage?id=d6245f20-2af8-44f4-9451-8107cb2767db"
  },
  "creationDate": "2016-11-01T16:30:31.6655471Z",
  "title": "Updated pull request title",
  "description": "Updated pull request description",
  "sourceRefName": "refs/heads/npaulk/my_work",
  "targetRefName": "refs/heads/new_feature",
  "mergeStatus": "queued",
  "mergeId": "f5fc8381-3fb2-49fe-8a0d-27dcc2d6ef82",
  "lastMergeSourceCommit": {
    "commitId": "8c9396b5cf22f929767c7172e9dbbe777ddc6357",
    "url": "https://mytfsserver/DefaultCollection/_apis/git/repositories/3411ebc1-d5aa-464f-9615-0b527bc66719/commits/8c9396b5cf22f929767c7172e9dbbe777ddc6357"
  },
  "lastMergeTargetCommit": {
    "commitId": "f47bbc106853afe3c1b07a81754bce5f4b8dbf62",
    "url": "https://mytfsserver/DefaultCollection/_apis/git/repositories/3411ebc1-d5aa-464f-9615-0b527bc66719/commits/f47bbc106853afe3c1b07a81754bce5f4b8dbf62"
  },
  "reviewers": [
    {
      "reviewerUrl": "https://mytfsserver/DefaultCollection/_apis/git/repositories/3411ebc1-d5aa-464f-9615-0b527bc66719/pullRequests/22/reviewers/d6245f20-2af8-44f4-9451-8107cb2767db",
      "vote": 10,
      "id": "d6245f20-2af8-44f4-9451-8107cb2767db",
      "displayName": "Normal Paulk",
      "uniqueName": "fabrikamfiber16@hotmail.com",
      "url": "https://mytfsserver/DefaultCollection/_apis/Identities/d6245f20-2af8-44f4-9451-8107cb2767db",
      "imageUrl": "https://mytfsserver/DefaultCollection/_api/_common/identityImage?id=d6245f20-2af8-44f4-9451-8107cb2767db"
    }
  ],
  "url": "https://mytfsserver/DefaultCollection/_apis/git/repositories/3411ebc1-d5aa-464f-9615-0b527bc66719/pullRequests/22",
  "_links": {
    "self": {
      "href": "https://mytfsserver/DefaultCollection/_apis/git/repositories/3411ebc1-d5aa-464f-9615-0b527bc66719/pullRequests/22"
    },
    "repository": {
      "href": "https://mytfsserver/DefaultCollection/_apis/git/repositories/3411ebc1-d5aa-464f-9615-0b527bc66719"
    },
    "workItems": {
      "href": "https://mytfsserver/DefaultCollection/_apis/git/repositories/3411ebc1-d5aa-464f-9615-0b527bc66719/pullRequests/22/workitems"
    },
    "sourceBranch": {
      "href": "https://mytfsserver/DefaultCollection/_apis/git/repositories/3411ebc1-d5aa-464f-9615-0b527bc66719/refs"
    },
    "targetBranch": {
      "href": "https://mytfsserver/DefaultCollection/_apis/git/repositories/3411ebc1-d5aa-464f-9615-0b527bc66719/refs"
    },
    "sourceCommit": {
      "href": "https://mytfsserver/DefaultCollection/_apis/git/repositories/3411ebc1-d5aa-464f-9615-0b527bc66719/commits/8c9396b5cf22f929767c7172e9dbbe777ddc6357"
    },
    "targetCommit": {
      "href": "https://mytfsserver/DefaultCollection/_apis/git/repositories/3411ebc1-d5aa-464f-9615-0b527bc66719/commits/f47bbc106853afe3c1b07a81754bce5f4b8dbf62"
    },
    "createdBy": {
      "href": "https://mytfsserver/DefaultCollection/_apis/Identities/d6245f20-2af8-44f4-9451-8107cb2767db"
    },
    "iterations": {
      "href": "https://mytfsserver/DefaultCollection/_apis/git/repositories/3411ebc1-d5aa-464f-9615-0b527bc66719/pullRequests/22/iterations"
    }
  },
  "supportsIterations": true,
  "completionQueueTime": "2016-11-01T16:30:58.1154463Z",
  "closedBy": {
    "id": "d6245f20-2af8-44f4-9451-8107cb2767db",
    "displayName": "Normal Paulk",
    "uniqueName": "fabrikamfiber16@hotmail.com",
    "url": "https://mytfsserver/DefaultCollection/_apis/Identities/d6245f20-2af8-44f4-9451-8107cb2767db",
    "imageUrl": "https://mytfsserver/DefaultCollection/_api/_common/identityImage?id=d6245f20-2af8-44f4-9451-8107cb2767db"
  },
  "artifactId": "vstfs:///Git/PullRequestId/a7573007-bbb3-4341-b726-0c4148a07853%2f3411ebc1-d5aa-464f-9615-0b527bc66719%2f22"
}
```


### Auto-complete

#### Sample request

```
PATCH https://mytfsserver/DefaultCollection/_apis/git/repositories/3411ebc1-d5aa-464f-9615-0b527bc66719/pullRequests/21?api-version=3.0
```
```json
{
  "autoCompleteSetBy": {
    "id": "d6245f20-2af8-44f4-9451-8107cb2767db"
  },
  "completionOptions": {
    "deleteSourceBranch": "true",
    "mergeCommitMessage": "Added known issues document",
    "squashMerge": "false"
  }
}
```

#### Sample response

```json
{
  "repository": {
    "id": "3411ebc1-d5aa-464f-9615-0b527bc66719",
    "name": "2016_10_31",
    "url": "https://mytfsserver/DefaultCollection/_apis/git/repositories/3411ebc1-d5aa-464f-9615-0b527bc66719",
    "project": {
      "id": "a7573007-bbb3-4341-b726-0c4148a07853",
      "name": "2016_10_31",
      "description": "test project created on Halloween 2016",
      "url": "https://mytfsserver/DefaultCollection/_apis/projects/a7573007-bbb3-4341-b726-0c4148a07853",
      "state": "wellFormed",
      "revision": 7
    },
    "remoteUrl": "https://mytfsserver/DefaultCollection/_git/2016_10_31"
  },
  "pullRequestId": 21,
  "codeReviewId": 21,
  "status": "active",
  "createdBy": {
    "id": "d6245f20-2af8-44f4-9451-8107cb2767db",
    "displayName": "Normal Paulk",
    "uniqueName": "fabrikamfiber16@hotmail.com",
    "url": "https://mytfsserver/DefaultCollection/_apis/Identities/d6245f20-2af8-44f4-9451-8107cb2767db",
    "imageUrl": "https://mytfsserver/DefaultCollection/_api/_common/identityImage?id=d6245f20-2af8-44f4-9451-8107cb2767db"
  },
  "creationDate": "2016-11-01T16:30:23.8410158Z",
  "title": "Added known issues document",
  "description": "Added known issues document",
  "sourceRefName": "refs/heads/npaulk/known_issues",
  "targetRefName": "refs/heads/new_feature",
  "mergeStatus": "succeeded",
  "mergeId": "58a34c62-01b5-4029-8337-c99782ee9003",
  "lastMergeSourceCommit": {
    "commitId": "05ce817c4692afc93c1eb952643bdf7ffbab18ee",
    "url": "https://mytfsserver/DefaultCollection/_apis/git/repositories/3411ebc1-d5aa-464f-9615-0b527bc66719/commits/05ce817c4692afc93c1eb952643bdf7ffbab18ee"
  },
  "lastMergeTargetCommit": {
    "commitId": "f47bbc106853afe3c1b07a81754bce5f4b8dbf62",
    "url": "https://mytfsserver/DefaultCollection/_apis/git/repositories/3411ebc1-d5aa-464f-9615-0b527bc66719/commits/f47bbc106853afe3c1b07a81754bce5f4b8dbf62"
  },
  "lastMergeCommit": {
    "commitId": "bf27525b51b5347483ed9d7dc52ce5a3cf2b045a",
    "author": {
      "name": "Normal Paulk",
      "email": "fabrikamfiber16@hotmail.com",
      "date": "2016-11-01T16:30:25Z"
    },
    "committer": {
      "name": "Normal Paulk",
      "email": "fabrikamfiber16@hotmail.com",
      "date": "2016-11-01T16:30:25Z"
    },
    "comment": "Merge pull request 21 from npaulk/known_issues into new_feature",
    "url": "https://mytfsserver/DefaultCollection/_apis/git/repositories/3411ebc1-d5aa-464f-9615-0b527bc66719/commits/bf27525b51b5347483ed9d7dc52ce5a3cf2b045a"
  },
  "reviewers": [
    {
      "reviewerUrl": "https://mytfsserver/DefaultCollection/_apis/git/repositories/3411ebc1-d5aa-464f-9615-0b527bc66719/pullRequests/21/reviewers/d6245f20-2af8-44f4-9451-8107cb2767db",
      "vote": 0,
      "id": "d6245f20-2af8-44f4-9451-8107cb2767db",
      "displayName": "Normal Paulk",
      "uniqueName": "fabrikamfiber16@hotmail.com",
      "url": "https://mytfsserver/DefaultCollection/_apis/Identities/d6245f20-2af8-44f4-9451-8107cb2767db",
      "imageUrl": "https://mytfsserver/DefaultCollection/_api/_common/identityImage?id=d6245f20-2af8-44f4-9451-8107cb2767db"
    }
  ],
  "url": "https://mytfsserver/DefaultCollection/_apis/git/repositories/3411ebc1-d5aa-464f-9615-0b527bc66719/pullRequests/21",
  "_links": {
    "self": {
      "href": "https://mytfsserver/DefaultCollection/_apis/git/repositories/3411ebc1-d5aa-464f-9615-0b527bc66719/pullRequests/21"
    },
    "repository": {
      "href": "https://mytfsserver/DefaultCollection/_apis/git/repositories/3411ebc1-d5aa-464f-9615-0b527bc66719"
    },
    "workItems": {
      "href": "https://mytfsserver/DefaultCollection/_apis/git/repositories/3411ebc1-d5aa-464f-9615-0b527bc66719/pullRequests/21/workitems"
    },
    "sourceBranch": {
      "href": "https://mytfsserver/DefaultCollection/_apis/git/repositories/3411ebc1-d5aa-464f-9615-0b527bc66719/refs"
    },
    "targetBranch": {
      "href": "https://mytfsserver/DefaultCollection/_apis/git/repositories/3411ebc1-d5aa-464f-9615-0b527bc66719/refs"
    },
    "sourceCommit": {
      "href": "https://mytfsserver/DefaultCollection/_apis/git/repositories/3411ebc1-d5aa-464f-9615-0b527bc66719/commits/05ce817c4692afc93c1eb952643bdf7ffbab18ee"
    },
    "targetCommit": {
      "href": "https://mytfsserver/DefaultCollection/_apis/git/repositories/3411ebc1-d5aa-464f-9615-0b527bc66719/commits/f47bbc106853afe3c1b07a81754bce5f4b8dbf62"
    },
    "createdBy": {
      "href": "https://mytfsserver/DefaultCollection/_apis/Identities/d6245f20-2af8-44f4-9451-8107cb2767db"
    },
    "iterations": {
      "href": "https://mytfsserver/DefaultCollection/_apis/git/repositories/3411ebc1-d5aa-464f-9615-0b527bc66719/pullRequests/21/iterations"
    }
  },
  "completionOptions": {
    "mergeCommitMessage": "Added known issues document",
    "deleteSourceBranch": true
  },
  "supportsIterations": true,
  "autoCompleteSetBy": {
    "id": "d6245f20-2af8-44f4-9451-8107cb2767db",
    "displayName": "Normal Paulk",
    "uniqueName": "fabrikamfiber16@hotmail.com",
    "url": "https://mytfsserver/DefaultCollection/_apis/Identities/d6245f20-2af8-44f4-9451-8107cb2767db",
    "imageUrl": "https://mytfsserver/DefaultCollection/_api/_common/identityImage?id=d6245f20-2af8-44f4-9451-8107cb2767db"
  },
  "artifactId": "vstfs:///Git/PullRequestId/a7573007-bbb3-4341-b726-0c4148a07853%2f3411ebc1-d5aa-464f-9615-0b527bc66719%2f21"
}
```


