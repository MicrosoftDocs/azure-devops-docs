---
ms.prod: devops
ms.technology: devops-ecosystem
monikerRange: '>= tfs-2015 < azure-devops'
title: Git Pull Request Comments | REST API Reference for Team Foundation Server
description: Work with Git pull requests programmatically using the REST APIs for Team Foundation Server.
ms.assetid: A2B50741-6909-4C7A-BAEB-13F2D7239246
ms.manager: jillfra
ms.topic: article
ms.author: elbatk
author: elbatk
ms.date: 11/3/2016
---

# Git pull request comments

[!INCLUDE [azure-devops](../../_data/azure-devops-message.md)]

[!INCLUDE [API_version](../../_data/version3-preview.md)]

[!INCLUDE [disclaimer](../../_data/disclaimer.md)]

[!INCLUDE [GET_STARTED](../../_data/get-started.md)]

Comment threads can be added to the pull request in general or to a specific location in a file.  When a comment thread is
created for a location in a file, an iteration context must be provided.  When requesting comment threads, a iteration context
should be provided then as well.  This allows the comment thread to be positioned correctly in each iteration.  So if these
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

#### Sample request

```
GET https://mytfsserver/DefaultCollection/_apis/git/repositories/3411ebc1-d5aa-464f-9615-0b527bc66719/pullRequests/22/threads?api-version=3.0
```

#### Sample response

```json
{
  "value": [
    {
      "pullRequestThreadContext": null,
      "id": 141,
      "publishedDate": "2016-11-01T16:30:32.74Z",
      "lastUpdatedDate": "2016-11-01T16:30:32.74Z",
      "comments": [
        {
          "id": 1,
          "parentCommentId": 0,
          "author": {
            "id": "41113706-4320-4083-9150-925feb93fc22",
            "displayName": "[DefaultCollection]\\Project Collection Service Accounts",
            "url": "https://mytfsserver/DefaultCollection/_apis/Identities/41113706-4320-4083-9150-925feb93fc22",
            "imageUrl": "https://mytfsserver/DefaultCollection/_api/_common/identityImage?id=41113706-4320-4083-9150-925feb93fc22",
            "isContainer": true
          },
          "content": "The pull request is mergable and the target commit would be 39f52d24533cc712fc845ed9fd1b6c06b3942588.",
          "publishedDate": "2016-11-01T16:30:32.74Z",
          "lastUpdatedDate": "2016-11-01T16:30:32.74Z",
          "commentType": "system",
          "usersLiked": []
        }
      ],
      "threadContext": null,
      "properties": {
        "CodeReviewMergeCommit": {
          "$type": "System.String",
          "$value": "39f52d24533cc712fc845ed9fd1b6c06b3942588"
        },
        "CodeReviewMergeStatus": {
          "$type": "System.String",
          "$value": "Succeeded"
        },
        "CodeReviewSourceCommit": {
          "$type": "System.String",
          "$value": "b60280bc6e62e2f880f1b63c1e24987664d3bda3"
        },
        "CodeReviewTargetCommit": {
          "$type": "System.String",
          "$value": "f47bbc106853afe3c1b07a81754bce5f4b8dbf62"
        },
        "CodeReviewThreadType": {
          "$type": "System.String",
          "$value": "MergeAttempt"
        }
      },
      "isDeleted": false
    },
    {
      "pullRequestThreadContext": null,
      "id": 142,
      "publishedDate": "2016-11-01T16:30:35Z",
      "lastUpdatedDate": "2016-11-01T16:30:35Z",
      "comments": [
        {
          "id": 1,
          "parentCommentId": 0,
          "author": {
            "id": "41113706-4320-4083-9150-925feb93fc22",
            "displayName": "[DefaultCollection]\\Project Collection Service Accounts",
            "url": "https://mytfsserver/DefaultCollection/_apis/Identities/41113706-4320-4083-9150-925feb93fc22",
            "imageUrl": "https://mytfsserver/DefaultCollection/_api/_common/identityImage?id=41113706-4320-4083-9150-925feb93fc22",
            "isContainer": true
          },
          "content": "Normal Paulk added Johnnie McLeod as a reviewer",
          "publishedDate": "2016-11-01T16:30:35Z",
          "lastUpdatedDate": "2016-11-01T16:30:35Z",
          "commentType": "system",
          "usersLiked": []
        }
      ],
      "threadContext": null,
      "properties": {
        "CodeReviewThreadType": {
          "$type": "System.String",
          "$value": "ReviewersUpdate"
        },
        "CodeReviewReviewersUpdatedAddedDisplayName": {
          "$type": "System.String",
          "$value": "Johnnie McLeod"
        },
        "CodeReviewReviewersUpdatedAddedTfId": {
          "$type": "System.String",
          "$value": "2428198325304a9caeb788d60d57acfd"
        },
        "CodeReviewReviewersUpdatedByDisplayname": {
          "$type": "System.String",
          "$value": "Normal Paulk"
        },
        "CodeReviewReviewersUpdatedByTfId": {
          "$type": "System.String",
          "$value": "b335b0d4578f4944b94ca45216eb1a1a"
        },
        "CodeReviewReviewersUpdatedNumAdded": {
          "$type": "System.Int32",
          "$value": 1
        },
        "CodeReviewReviewersUpdatedNumRemoved": {
          "$type": "System.Int32",
          "$value": 0
        }
      },
      "isDeleted": false
    },
    {
      "pullRequestThreadContext": null,
      "id": 143,
      "publishedDate": "2016-11-01T16:30:36.58Z",
      "lastUpdatedDate": "2016-11-01T16:30:36.58Z",
      "comments": [
        {
          "id": 1,
          "parentCommentId": 0,
          "author": {
            "id": "41113706-4320-4083-9150-925feb93fc22",
            "displayName": "[DefaultCollection]\\Project Collection Service Accounts",
            "url": "https://mytfsserver/DefaultCollection/_apis/Identities/41113706-4320-4083-9150-925feb93fc22",
            "imageUrl": "https://mytfsserver/DefaultCollection/_api/_common/identityImage?id=41113706-4320-4083-9150-925feb93fc22",
            "isContainer": true
          },
          "content": "Normal Paulk voted 10",
          "publishedDate": "2016-11-01T16:30:36.58Z",
          "lastUpdatedDate": "2016-11-01T16:30:36.58Z",
          "commentType": "system",
          "usersLiked": []
        }
      ],
      "threadContext": null,
      "properties": {
        "CodeReviewThreadType": {
          "$type": "System.String",
          "$value": "VoteUpdate"
        },
        "CodeReviewVotedByDisplayName": {
          "$type": "System.String",
          "$value": "Normal Paulk"
        },
        "CodeReviewVotedByTfId": {
          "$type": "System.String",
          "$value": "d6245f20-2af8-44f4-9451-8107cb2767db"
        },
        "CodeReviewVoteResult": {
          "$type": "System.String",
          "$value": "10"
        }
      },
      "isDeleted": false
    },
    {
      "pullRequestThreadContext": null,
      "id": 144,
      "publishedDate": "2016-11-01T16:30:38.603Z",
      "lastUpdatedDate": "2016-11-01T16:30:38.603Z",
      "comments": [
        {
          "id": 1,
          "parentCommentId": 0,
          "author": {
            "id": "41113706-4320-4083-9150-925feb93fc22",
            "displayName": "[DefaultCollection]\\Project Collection Service Accounts",
            "url": "https://mytfsserver/DefaultCollection/_apis/Identities/41113706-4320-4083-9150-925feb93fc22",
            "imageUrl": "https://mytfsserver/DefaultCollection/_api/_common/identityImage?id=41113706-4320-4083-9150-925feb93fc22",
            "isContainer": true
          },
          "content": "Normal Paulk removed Johnnie McLeod from the reviewers",
          "publishedDate": "2016-11-01T16:30:38.603Z",
          "lastUpdatedDate": "2016-11-01T16:30:38.603Z",
          "commentType": "system",
          "usersLiked": []
        }
      ],
      "threadContext": null,
      "properties": {
        "CodeReviewThreadType": {
          "$type": "System.String",
          "$value": "ReviewersUpdate"
        },
        "CodeReviewReviewersUpdatedByDisplayname": {
          "$type": "System.String",
          "$value": "Normal Paulk"
        },
        "CodeReviewReviewersUpdatedByTfId": {
          "$type": "System.String",
          "$value": "b335b0d4578f4944b94ca45216eb1a1a"
        },
        "CodeReviewReviewersUpdatedNumAdded": {
          "$type": "System.Int32",
          "$value": 0
        },
        "CodeReviewReviewersUpdatedNumRemoved": {
          "$type": "System.Int32",
          "$value": 1
        },
        "CodeReviewReviewersUpdatedRemovedDisplayName": {
          "$type": "System.String",
          "$value": "Johnnie McLeod"
        },
        "CodeReviewReviewersUpdatedRemovedTfId": {
          "$type": "System.String",
          "$value": "2428198325304a9caeb788d60d57acfd"
        }
      },
      "isDeleted": false
    },
    {
      "pullRequestThreadContext": null,
      "id": 145,
      "publishedDate": "2016-11-01T16:30:40.84Z",
      "lastUpdatedDate": "2016-11-01T16:30:40.84Z",
      "comments": [
        {
          "id": 1,
          "parentCommentId": 0,
          "author": {
            "id": "41113706-4320-4083-9150-925feb93fc22",
            "displayName": "[DefaultCollection]\\Project Collection Service Accounts",
            "url": "https://mytfsserver/DefaultCollection/_apis/Identities/41113706-4320-4083-9150-925feb93fc22",
            "imageUrl": "https://mytfsserver/DefaultCollection/_api/_common/identityImage?id=41113706-4320-4083-9150-925feb93fc22",
            "isContainer": true
          },
          "content": "The reference refs/heads/npaulk/my_work was updated.",
          "publishedDate": "2016-11-01T16:30:40.84Z",
          "lastUpdatedDate": "2016-11-01T16:30:40.84Z",
          "commentType": "system",
          "usersLiked": []
        }
      ],
      "threadContext": null,
      "properties": {
        "CodeReviewThreadType": {
          "$type": "System.String",
          "$value": "RefUpdate"
        },
        "CodeReviewRefName": {
          "$type": "System.String",
          "$value": "refs/heads/npaulk/my_work"
        },
        "CodeReviewRefNewCommits": {
          "$type": "System.String",
          "$value": "8c9396b5cf22f929767c7172e9dbbe777ddc6357"
        },
        "CodeReviewRefNewCommitsCount": {
          "$type": "System.Int32",
          "$value": 1
        },
        "CodeReviewRefNewHeadCommit": {
          "$type": "System.String",
          "$value": "8c9396b5cf22f929767c7172e9dbbe777ddc6357"
        },
        "CodeReviewRefUpdatedBy": {
          "$type": "System.String",
          "$value": "fabrikamfiber16@hotmail.com"
        },
        "CodeReviewRefUpdatedByDisplayName": {
          "$type": "System.String",
          "$value": "Normal Paulk"
        },
        "CodeReviewRefUpdatedByTfId": {
          "$type": "System.String",
          "$value": "d6245f20-2af8-44f4-9451-8107cb2767db"
        }
      },
      "isDeleted": false
    },
    {
      "pullRequestThreadContext": null,
      "id": 146,
      "publishedDate": "2016-11-01T16:30:41.123Z",
      "lastUpdatedDate": "2016-11-01T16:30:41.123Z",
      "comments": [
        {
          "id": 1,
          "parentCommentId": 0,
          "author": {
            "id": "41113706-4320-4083-9150-925feb93fc22",
            "displayName": "[DefaultCollection]\\Project Collection Service Accounts",
            "url": "https://mytfsserver/DefaultCollection/_apis/Identities/41113706-4320-4083-9150-925feb93fc22",
            "imageUrl": "https://mytfsserver/DefaultCollection/_api/_common/identityImage?id=41113706-4320-4083-9150-925feb93fc22",
            "isContainer": true
          },
          "content": "The pull request is mergable and the target commit would be fd8da3e51efe350811d2157b2223df53d4db46c3.",
          "publishedDate": "2016-11-01T16:30:41.123Z",
          "lastUpdatedDate": "2016-11-01T16:30:41.123Z",
          "commentType": "system",
          "usersLiked": []
        }
      ],
      "threadContext": null,
      "properties": {
        "CodeReviewMergeCommit": {
          "$type": "System.String",
          "$value": "fd8da3e51efe350811d2157b2223df53d4db46c3"
        },
        "CodeReviewMergeStatus": {
          "$type": "System.String",
          "$value": "Succeeded"
        },
        "CodeReviewSourceCommit": {
          "$type": "System.String",
          "$value": "8c9396b5cf22f929767c7172e9dbbe777ddc6357"
        },
        "CodeReviewTargetCommit": {
          "$type": "System.String",
          "$value": "f47bbc106853afe3c1b07a81754bce5f4b8dbf62"
        },
        "CodeReviewThreadType": {
          "$type": "System.String",
          "$value": "MergeAttempt"
        }
      },
      "isDeleted": false
    },
    {
      "pullRequestThreadContext": null,
      "id": 147,
      "publishedDate": "2016-11-01T16:30:48.91Z",
      "lastUpdatedDate": "2016-11-01T16:30:48.91Z",
      "comments": [
        {
          "id": 1,
          "parentCommentId": 0,
          "author": {
            "id": "d6245f20-2af8-44f4-9451-8107cb2767db",
            "displayName": "Normal Paulk",
            "uniqueName": "fabrikamfiber16@hotmail.com",
            "url": "https://mytfsserver/DefaultCollection/_apis/Identities/d6245f20-2af8-44f4-9451-8107cb2767db",
            "imageUrl": "https://mytfsserver/DefaultCollection/_api/_common/identityImage?id=d6245f20-2af8-44f4-9451-8107cb2767db"
          },
          "content": "This new feature looks good!",
          "publishedDate": "2016-11-01T16:30:48.91Z",
          "lastUpdatedDate": "2016-11-01T16:30:48.91Z",
          "commentType": "text",
          "usersLiked": []
        }
      ],
      "status": "active",
      "threadContext": null,
      "properties": {
        "Microsoft.TeamFoundation.Discussion.SupportsMarkdown": {
          "$type": "System.Int32",
          "$value": 1
        }
      },
      "isDeleted": false
    },
    {
      "pullRequestThreadContext": {
        "iterationContext": {
          "firstComparingIteration": 1,
          "secondComparingIteration": 2
        },
        "changeTrackingId": 1
      },
      "id": 148,
      "publishedDate": "2016-11-01T16:30:50.083Z",
      "lastUpdatedDate": "2016-11-01T16:30:52.48Z",
      "comments": [
        {
          "id": 1,
          "parentCommentId": 0,
          "author": {
            "id": "d6245f20-2af8-44f4-9451-8107cb2767db",
            "displayName": "Normal Paulk",
            "uniqueName": "fabrikamfiber16@hotmail.com",
            "url": "https://mytfsserver/DefaultCollection/_apis/Identities/d6245f20-2af8-44f4-9451-8107cb2767db",
            "imageUrl": "https://mytfsserver/DefaultCollection/_api/_common/identityImage?id=d6245f20-2af8-44f4-9451-8107cb2767db"
          },
          "content": "Should we add a comment about what this value means?",
          "publishedDate": "2016-11-01T16:30:50.083Z",
          "lastUpdatedDate": "2016-11-01T16:30:50.083Z",
          "commentType": "text",
          "usersLiked": []
        },
        {
          "id": 2,
          "parentCommentId": 1,
          "author": {
            "id": "d6245f20-2af8-44f4-9451-8107cb2767db",
            "displayName": "Normal Paulk",
            "uniqueName": "fabrikamfiber16@hotmail.com",
            "url": "https://mytfsserver/DefaultCollection/_apis/Identities/d6245f20-2af8-44f4-9451-8107cb2767db",
            "imageUrl": "https://mytfsserver/DefaultCollection/_api/_common/identityImage?id=d6245f20-2af8-44f4-9451-8107cb2767db"
          },
          "publishedDate": "2016-11-01T16:30:51.383Z",
          "lastUpdatedDate": "2016-11-01T16:30:52.48Z",
          "isDeleted": true,
          "commentType": "text",
          "usersLiked": []
        }
      ],
      "status": "active",
      "threadContext": {
        "filePath": "/new_feature.cpp",
        "rightFileStart": {
          "line": 5,
          "offset": 1
        },
        "rightFileEnd": {
          "line": 5,
          "offset": 13
        }
      },
      "properties": {
        "Microsoft.TeamFoundation.Discussion.SupportsMarkdown": {
          "$type": "System.Int32",
          "$value": 1
        }
      },
      "isDeleted": false
    }
  ],
  "count": 8
}
```


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

#### Sample request

```
POST https://mytfsserver/DefaultCollection/_apis/git/repositories/3411ebc1-d5aa-464f-9615-0b527bc66719/pullRequests/22/threads?api-version=3.0
```
```json
{
  "comments": [
    {
      "parentCommentId": 0,
      "content": "This new feature looks good!",
      "commentType": 1
    }
  ],
  "properties": {
    "Microsoft.TeamFoundation.Discussion.SupportsMarkdown": {
      "type": "System.Int32",
      "value": 1
    }
  },
  "status": 1
}
```

#### Sample response

```json
{
  "pullRequestThreadContext": null,
  "id": 147,
  "publishedDate": "2016-11-01T16:30:48.91Z",
  "lastUpdatedDate": "2016-11-01T16:30:48.91Z",
  "comments": [
    {
      "id": 1,
      "parentCommentId": 0,
      "author": {
        "id": "d6245f20-2af8-44f4-9451-8107cb2767db",
        "displayName": "Normal Paulk",
        "uniqueName": "fabrikamfiber16@hotmail.com",
        "url": "https://mytfsserver/DefaultCollection/_apis/Identities/d6245f20-2af8-44f4-9451-8107cb2767db",
        "imageUrl": "https://mytfsserver/DefaultCollection/_api/_common/identityImage?id=d6245f20-2af8-44f4-9451-8107cb2767db"
      },
      "content": "This new feature looks good!",
      "publishedDate": "2016-11-01T16:30:48.91Z",
      "lastUpdatedDate": "2016-11-01T16:30:48.91Z",
      "commentType": "text"
    }
  ],
  "status": "active",
  "threadContext": null,
  "properties": {
    "Microsoft.TeamFoundation.Discussion.SupportsMarkdown": {
      "$type": "System.Int32",
      "$value": 1
    }
  },
  "isDeleted": false,
  "_links": {
    "self": {
      "href": "https://mytfsserver/DefaultCollection/_apis/git/repositories/3411ebc1-d5aa-464f-9615-0b527bc66719/pullRequests/22/threads/147"
    },
    "repository": {
      "href": "https://mytfsserver/DefaultCollection/_apis/git/repositories/3411ebc1-d5aa-464f-9615-0b527bc66719"
    }
  }
}
```


### Create a thread at a particular file location

#### Sample request

```
POST https://mytfsserver/DefaultCollection/_apis/git/repositories/3411ebc1-d5aa-464f-9615-0b527bc66719/pullRequests/22/threads?api-version=3.0
```
```json
{
  "comments": [
    {
      "parentCommentId": 0,
      "content": "Should we add a comment about what this value means?",
      "commentType": 1
    }
  ],
  "properties": {
    "Microsoft.TeamFoundation.Discussion.SupportsMarkdown": {
      "type": "System.Int32",
      "value": 1
    }
  },
  "status": 1,
  "threadContext": {
    "filePath": "/new_feature.cpp",
    "leftFileEnd": null,
    "leftFileStart": null,
    "rightFileEnd": {
      "line": 5,
      "offset": 13
    },
    "rightFileStart": {
      "line": 5,
      "offset": 1
    }
  },
  "pullRequestThreadContext": {
    "changeTrackingId": 1,
    "iterationContext": {
      "firstComparingIteration": 1,
      "secondComparingIteration": 2
    }
  }
}
```

#### Sample response

```json
{
  "pullRequestThreadContext": {
    "iterationContext": {
      "firstComparingIteration": 1,
      "secondComparingIteration": 2
    },
    "changeTrackingId": 1
  },
  "id": 148,
  "publishedDate": "2016-11-01T16:30:50.083Z",
  "lastUpdatedDate": "2016-11-01T16:30:50.083Z",
  "comments": [
    {
      "id": 1,
      "parentCommentId": 0,
      "author": {
        "id": "d6245f20-2af8-44f4-9451-8107cb2767db",
        "displayName": "Normal Paulk",
        "uniqueName": "fabrikamfiber16@hotmail.com",
        "url": "https://mytfsserver/DefaultCollection/_apis/Identities/d6245f20-2af8-44f4-9451-8107cb2767db",
        "imageUrl": "https://mytfsserver/DefaultCollection/_api/_common/identityImage?id=d6245f20-2af8-44f4-9451-8107cb2767db"
      },
      "content": "Should we add a comment about what this value means?",
      "publishedDate": "2016-11-01T16:30:50.083Z",
      "lastUpdatedDate": "2016-11-01T16:30:50.083Z",
      "commentType": "text"
    }
  ],
  "status": "active",
  "threadContext": {
    "filePath": "/new_feature.cpp",
    "rightFileStart": {
      "line": 5,
      "offset": 1
    },
    "rightFileEnd": {
      "line": 5,
      "offset": 13
    }
  },
  "properties": {
    "Microsoft.TeamFoundation.Discussion.SupportsMarkdown": {
      "$type": "System.Int32",
      "$value": 1
    }
  },
  "isDeleted": false,
  "_links": {
    "self": {
      "href": "https://mytfsserver/DefaultCollection/_apis/git/repositories/3411ebc1-d5aa-464f-9615-0b527bc66719/pullRequests/22/threads/148"
    },
    "repository": {
      "href": "https://mytfsserver/DefaultCollection/_apis/git/repositories/3411ebc1-d5aa-464f-9615-0b527bc66719"
    }
  }
}
```



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

#### Sample request

```
POST https://mytfsserver/DefaultCollection/_apis/git/repositories/3411ebc1-d5aa-464f-9615-0b527bc66719/pullRequests/22/threads/148/comments?api-version=3.0
```
```json
{
  "content": "Good idea",
  "parentCommentId": 1,
  "commentType": 1
}
```

#### Sample response

```json
{
  "id": 2,
  "parentCommentId": 1,
  "author": {
    "id": "d6245f20-2af8-44f4-9451-8107cb2767db",
    "displayName": "Normal Paulk",
    "uniqueName": "fabrikamfiber16@hotmail.com",
    "url": "https://mytfsserver/DefaultCollection/_apis/Identities/d6245f20-2af8-44f4-9451-8107cb2767db",
    "imageUrl": "https://mytfsserver/DefaultCollection/_api/_common/identityImage?id=d6245f20-2af8-44f4-9451-8107cb2767db"
  },
  "content": "Good idea",
  "publishedDate": "2016-11-01T16:30:51.383Z",
  "lastUpdatedDate": "2016-11-01T16:30:51.383Z",
  "commentType": "text"
}
```


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

#### Sample request

```
DELETE https://mytfsserver/DefaultCollection/_apis/git/repositories/3411ebc1-d5aa-464f-9615-0b527bc66719/pullRequests/22/threads/148/comments/2?api-version=3.0
```

