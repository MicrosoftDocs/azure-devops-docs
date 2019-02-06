---
title: Policy Type Settings | REST API Reference for Team Foundation Server
description: Work with policies programmatically using the REST APIs for Team Foundation Server.
ms.assetid: e4b5513c-75ef-41e6-acd9-c0afee020894
ms.prod: devops
ms.technology: devops-ecosystem
monikerRange: '>= tfs-2015 < azure-devops'
ms.manager: jillfra
ms.topic: article
ms.author: elbatk
author: elbatk
ms.date: 08/04/2016
---

# Policy type settings

[!INCLUDE [azure-devops](../_data/azure-devops-message.md)]

[!INCLUDE [API_version](../_data/version2-preview1.md)]

[!INCLUDE [disclaimer](../_data/disclaimer.md)]

[!INCLUDE [GET_STARTED](../_data/get-started.md)]

## Required reviewers policy
**Policy type ID** = fd2167ab-b0be-447a-8ec8-39368250530e

This policy adds required or optional reviewers to a pull request when certain filename patterns are present in the pull request. If the policy is set up such that *isBlocking* is true, then these reviewers will be marked as "required" on the pull request and all must sign off before the pull request can be committed.  If *isBlocking* is false, the reviewers listed here will simply be added to the pull request, and the review can be committed even if one or all of them did not approve the changes. 

### Settings
```json
{
    "requiredReviewerIds": [{guid}, ...],
    "filenamePatterns": [{string}, ...],
    "addedFilesOnly": {bool},
    "message":{string},
    "scope": [{git-ref-scope}, ...]
}
```

| Parameter               | Type                            | Notes
|:------------------------|:--------------------------------|:----------------------------------------------------------------------------------------------------------------------------------
| requiredReviewerIds     | Array of GUID                   | IDs of reviewers to approve before the pull request is completed.
| filenamePatterns        | Array of string                 | A list of filename patterns that, when matched, will trigger this policy. Use `*` as a wildcard matching zero or more characters (including `.`), e.g. `*.txt` or `/my/protected/path/*`
| addedFilesOnly          | bool                            | If `true`, only files new to the target branch will trigger the policy. If `false`, edits will also trigger the policy
| message                 | string                          | If set, this message will be displayed in the pull request overview activity when the reviewers are added by this policy
| scope                   | Array of [Git ref scope](./settings.md#gitrefscope) | Determines what Git refs (e.g. branches) this policy applies to. To enforce the policy, direct pushes to these refs from Git clients will be rejected. Use pull requests to update refs within the scope of this policy.

### Example
This example request will alter a required reviewers policy so that it:

 * Protects the branch `master` and all branches starting with `releases/` in all repositories, and additionally the `adventureworks` branch in a specified repository
 * Triggers when a pull request contains files matching `API*.cs` or in the folder `sql/tables`
 * Adds two required reviewers when triggered
 * Rejects the pull request if any of the required reviewers have not approved it
 * Prevents the pull request from being completed if it does not comply with policy (*isBlocking* is true)


#### Sample request

```
PUT https://mytfsserver/DefaultCollection/fabrikam-fiber-git/_apis/policy/configurations/17?api-version=2.0-preview
```
```json
{
  "isEnabled": true,
  "isBlocking": true,
  "type": {
    "id": "fd2167ab-b0be-447a-8ec8-39368250530e"
  },
  "settings": {
    "requiredReviewerIds": [
      "1d1dad71-f27c-4370-810d-838ec41efd41",
      "13272ea3-92ef-46d1-b77e-608ebbf3428b"
    ],
    "filenamePatterns": [
      "*/API*.cs",
      "sql/tables/*"
    ],
    "addedFilesOnly": false,
    "scope": [
      {
        "repositoryId": null,
        "refName": "refs/heads/master",
        "matchKind": "exact"
      },
      {
        "repositoryId": null,
        "refName": "refs/heads/releases/",
        "matchKind": "prefix"
      },
      {
        "repositoryId": "49c1d4d0-be28-4f20-9e0a-4ecfafc39257",
        "refName": "refs/heads/adventureworks",
        "matchKind": "exact"
      }
    ]
  }
}
```

#### Sample response

```json
{
  "createdBy": {
    "id": "d6245f20-2af8-44f4-9451-8107cb2767db",
    "displayName": "Normal Paulk",
    "uniqueName": "fabrikamfiber16@hotmail.com",
    "url": "https://mytfsserver/DefaultCollection/_apis/Identities/d6245f20-2af8-44f4-9451-8107cb2767db",
    "imageUrl": "https://mytfsserver/DefaultCollection/_api/_common/identityImage?id=d6245f20-2af8-44f4-9451-8107cb2767db"
  },
  "createdDate": "2015-02-23T12:51:06.85754Z",
  "isEnabled": true,
  "isBlocking": true,
  "isDeleted": false,
  "settings": {
    "requiredReviewerIds": [
      "1d1dad71-f27c-4370-810d-838ec41efd41",
      "13272ea3-92ef-46d1-b77e-608ebbf3428b"
    ],
    "filenamePatterns": [
      "*/API*.cs",
      "sql/tables/*"
    ],
    "addedFilesOnly": false,
    "message": null,
    "scope": [
      {
        "refName": "refs/heads/master",
        "matchKind": "Exact",
        "repositoryId": null
      },
      {
        "refName": "refs/heads/releases/",
        "matchKind": "Prefix",
        "repositoryId": null
      },
      {
        "refName": "refs/heads/adventureworks",
        "matchKind": "Exact",
        "repositoryId": "49c1d4d0-be28-4f20-9e0a-4ecfafc39257"
      }
    ]
  },
  "_links": {
    "self": {
      "href": "https://mytfsserver/DefaultCollection/_apis/policy/configurations/17"
    },
    "type": {
      "href": "https://mytfsserver/DefaultCollection/1be3fc5b-c58c-4173-8fd7-6647d11eccd1/_apis/policy/types/fd2167ab-b0be-447a-8ec8-39368250530e"
    }
  },
  "revision": 2,
  "id": 17,
  "url": "https://mytfsserver/DefaultCollection/_apis/policy/configurations/17",
  "type": {
    "id": "fd2167ab-b0be-447a-8ec8-39368250530e",
    "url": "https://mytfsserver/DefaultCollection/1be3fc5b-c58c-4173-8fd7-6647d11eccd1/_apis/policy/types/fd2167ab-b0be-447a-8ec8-39368250530e",
    "displayName": "Required reviewers"
  }
}
```


## Minimum approval count policy
**Policy type ID** = fa4e907d-c16b-4a4c-9dfa-4906e5d171dd

Requires that a specified minimum number of reviewers have to approved a pull request before it can be completed.

### Settings
```json
{
    "minimumApproverCount": {integer},
    "creatorVoteCounts": {bool},
    "allowDownvotes": {bool},
    "scope": [{git-ref-scope}, ...]
}
```

| Parameter            | Type    | Notes
|:---------------------|:--------|:----------------------------------------------------------------------------------------------------------------------
| minimumApproverCount | integer | The number of people who must approve the pull request before it can be completed
| creatorVoteCounts    | boolean | If `false`, the vote of the person who created the pull request does not count toward the minimum approver count
| allowDownvotes       | boolean | If `true`, the pull request is allowed to be completed even if one of the votes is a 'reject' or 'wait for author' as long as there are enough approvers. If `false`, the pull request will be blocked if any down vote is cast, regardless of whether the minimum number of approvals is met.
| scope                | Array of [Git ref scope](./settings.md#gitrefscope) | Determines what Git refs (e.g. branches) this policy applies to. To enforce the policy, direct pushes to these refs from Git clients will be rejected. Use pull requests to update refs within the scope of this policy.

### Example

This example adds an approval count policy that:

 * Protects the master branch in all repositories in the project
 * Rejects the pull request if there is not at least one reviewer who has approved the pull request
 * Does not count the user who created the pull request
 * Does not block the pull request from being completed (*isBlocking* is false)
     * The web interface warns the user on completion if the pull request does not comply with the policy

#### Sample request

```
POST https://mytfsserver/DefaultCollection/fabrikam-fiber-git/_apis/policy/configurations?api-version=2.0-preview
```
```json
{
  "isEnabled": true,
  "isBlocking": false,
  "type": {
    "id": "fa4e907d-c16b-4a4c-9dfa-4906e5d171dd"
  },
  "settings": {
    "minimumApproverCount": 1,
    "creatorVoteCounts": false,
    "scope": [
      {
        "repositoryId": null,
        "refName": "refs/heads/master",
        "matchKind": "exact"
      }
    ]
  }
}
```

#### Sample response

```json
{
  "createdBy": {
    "id": "d6245f20-2af8-44f4-9451-8107cb2767db",
    "displayName": "Normal Paulk",
    "uniqueName": "fabrikamfiber16@hotmail.com",
    "url": "https://mytfsserver/DefaultCollection/_apis/Identities/d6245f20-2af8-44f4-9451-8107cb2767db",
    "imageUrl": "https://mytfsserver/DefaultCollection/_api/_common/identityImage?id=d6245f20-2af8-44f4-9451-8107cb2767db"
  },
  "createdDate": "2015-02-23T12:51:06.8887894",
  "isEnabled": true,
  "isBlocking": false,
  "settings": {
    "minimumApproverCount": 1,
    "creatorVoteCounts": false,
    "scope": [
      {
        "refName": "refs/heads/master",
        "matchKind": "Exact",
        "repositoryId": null
      }
    ]
  },
  "_links": {
    "self": {
      "href": "https://mytfsserver/DefaultCollection/_apis/policy/configurations/18"
    },
    "type": {
      "href": "https://mytfsserver/DefaultCollection/1be3fc5b-c58c-4173-8fd7-6647d11eccd1/_apis/policy/types/fa4e907d-c16b-4a4c-9dfa-4906e5d171dd"
    }
  },
  "revision": 1,
  "id": 18,
  "url": "https://mytfsserver/DefaultCollection/_apis/policy/configurations/18",
  "type": {
    "id": "fa4e907d-c16b-4a4c-9dfa-4906e5d171dd",
    "url": "https://mytfsserver/DefaultCollection/1be3fc5b-c58c-4173-8fd7-6647d11eccd1/_apis/policy/types/fa4e907d-c16b-4a4c-9dfa-4906e5d171dd",
    "displayName": "Minimum approval count"
  }
}
```


## Build policy
**Policy type ID** = 0609b952-1397-4640-95ec-e00a01b2c241

Requires that the merged result of a pull request builds successfully using a specified build definition before the pull request can be completed.

### Settings
```json
{
    "buildDefinitionId": {integer},
    "queueOnSourceUpdateOnly": {bool},
    "validDuration": {double},
    "manualQueueOnly":{bool},
    "displayName":{bool},
    "scope": [{git-ref-scope}, ...]
}
```

| Parameter         | Type    | Notes
|:------------------------|:--------|:----------------------------------------------------------------------------------------------------------------------------------
| buildDefinitionId       | integer | ID of a build definition to use for validation. The system will automatically queue the build once the candidate merge commit is ready.
| queueOnSourceUpdateOnly | boolean | If `true`, the build will only be queued when the pull request source branch gets updated.
| validDuration           | double  | If `true` & `queueOnSourceUpdateOnly` has to also be set to `true`, the build will only be queued when the pull request source branch gets updated but will expire after the number of minutes specified
| manualQueueOnly         | boolean | If `true`, the build will not be queued automatically when the pull request is created or updated. Users will be given the option to manually queue the build from the UX when they desire.
| displayName             | string  | If set, this string is used as the policy name. Default is "Build".
| scope                   | Array of [Git ref scope](./settings.md#gitrefscope) | Determines what Git refs (e.g. branches) this policy applies to. To enforce the policy, direct pushes to these refs from Git clients will be rejected. Use pull requests to update refs within the scope of this policy.

### Example
This example adds a build policy that:
 
 * Protects branches beginning with `features/` in all repositories
 * Automatically queues a build using a specified definition once the merged code is available
 * Rejects the pull request if the build has not completed successfully
 * Does not block the pull request from being completed (*isBlocking* is false)
     * The web interface warns the user on completion if the pull request does not comply with the policy

#### Sample request

```
POST https://mytfsserver/DefaultCollection/fabrikam-fiber-git/_apis/policy/configurations?api-version=2.0-preview
```
```json
{
  "isEnabled": true,
  "isBlocking": false,
  "type": {
    "id": "0609b952-1397-4640-95ec-e00a01b2c241"
  },
  "settings": {
    "buildDefinitionId": 5,
    "scope": [
      {
        "repositoryId": null,
        "refName": "refs/heads/features/",
        "matchKind": "prefix"
      }
    ]
  }
}
```

#### Sample response

```json
{
  "createdBy": {
    "id": "d6245f20-2af8-44f4-9451-8107cb2767db",
    "displayName": "Normal Paulk",
    "uniqueName": "fabrikamfiber16@hotmail.com",
    "url": "https://mytfsserver/DefaultCollection/_apis/Identities/d6245f20-2af8-44f4-9451-8107cb2767db",
    "imageUrl": "https://mytfsserver/DefaultCollection/_api/_common/identityImage?id=d6245f20-2af8-44f4-9451-8107cb2767db"
  },
  "createdDate": "2015-02-23T12:51:06.935666",
  "isEnabled": true,
  "isBlocking": false,
  "settings": {
    "buildDefinitionId": 5,
    "scope": [
      {
        "refName": "refs/heads/features/",
        "matchKind": "Prefix",
        "repositoryId": null
      }
    ]
  },
  "_links": {
    "self": {
      "href": "https://mytfsserver/DefaultCollection/_apis/policy/configurations/19"
    },
    "type": {
      "href": "https://mytfsserver/DefaultCollection/1be3fc5b-c58c-4173-8fd7-6647d11eccd1/_apis/policy/types/0609b952-1397-4640-95ec-e00a01b2c241"
    }
  },
  "revision": 1,
  "id": 19,
  "url": "https://mytfsserver/DefaultCollection/_apis/policy/configurations/19",
  "type": {
    "id": "0609b952-1397-4640-95ec-e00a01b2c241",
    "url": "https://mytfsserver/DefaultCollection/1be3fc5b-c58c-4173-8fd7-6647d11eccd1/_apis/policy/types/0609b952-1397-4640-95ec-e00a01b2c241",
    "displayName": "Build"
  }
}
```


## Work item linking policy
**Policy type ID** = 40e92b44-2fe1-4dd6-b3d8-74a9c21d0c6e

Requires that at least one work item is associated with a pull request before it can be completed.

### Settings
```json
{
    "scope": [{git-ref-scope}, ...]
}
```

| Parameter            | Type    | Notes
|:---------------------|:--------|:----------------------------------------------------------------------------------------------------------------------
| scope                | Array of [Git ref scope](./settings.md#gitrefscope) | Determines what Git refs (e.g. branches) this policy applies to. To enforce the policy, direct pushes to these refs from Git clients will be rejected. Use pull requests to update refs within the scope of this policy.

### Example

This example adds a work item policy that:

 * Protects the master branch in all repositories in the project
 * Rejects the pull request if there is not at least one work item associated with the pull request
 * Does not block the pull request from being completed (*isBlocking* is false)
     * The web interface warns the user on completion if the pull request does not comply with the policy

#### Sample request

```
POST https://mytfsserver/DefaultCollection/fabrikam-fiber-git/_apis/policy/configurations?api-version=2.0-preview
```
```json
{
  "isEnabled": true,
  "isBlocking": false,
  "type": {
    "id": "40e92b44-2fe1-4dd6-b3d8-74a9c21d0c6e"
  },
  "settings": {
    "scope": [
      {
        "repositoryId": null,
        "refName": "refs/heads/master",
        "matchKind": "exact"
      }
    ]
  }
}
```

#### Sample response

```json
{
  "createdBy": {
    "id": "d6245f20-2af8-44f4-9451-8107cb2767db",
    "displayName": "Normal Paulk",
    "uniqueName": "fabrikamfiber16@hotmail.com",
    "url": "https://mytfsserver/DefaultCollection/_apis/Identities/d6245f20-2af8-44f4-9451-8107cb2767db",
    "imageUrl": "https://mytfsserver/DefaultCollection/_api/_common/identityImage?id=d6245f20-2af8-44f4-9451-8107cb2767db"
  },
  "createdDate": "2015-02-23T12:51:06.935666",
  "isEnabled": true,
  "isBlocking": false,
  "settings": {
    "scope": [
      {
        "refName": "refs/heads/master",
        "matchKind": "Exact",
        "repositoryId": null
      }
    ]
  },
  "_links": {
    "self": {
      "href": "https://mytfsserver/DefaultCollection/_apis/policy/configurations/19"
    },
    "type": {
      "href": "https://mytfsserver/DefaultCollection/1be3fc5b-c58c-4173-8fd7-6647d11eccd1/_apis/policy/types/40e92b44-2fe1-4dd6-b3d8-74a9c21d0c6e"
    }
  },
  "revision": 1,
  "id": 19,
  "url": "https://mytfsserver/DefaultCollection/_apis/policy/configurations/19",
  "type": {
    "id": "40e92b44-2fe1-4dd6-b3d8-74a9c21d0c6e",
    "url": "https://mytfsserver/DefaultCollection/1be3fc5b-c58c-4173-8fd7-6647d11eccd1/_apis/policy/types/40e92b44-2fe1-4dd6-b3d8-74a9c21d0c6e",
    "displayName": "Work item linking"
  }
}
```


## Merge strategy policy
**Policy type ID** = fa4e907d-c16b-4a4c-9dfa-4916e5d171ab

Requires that a pull request uses a specific merge strategy when completed.

### Settings
```json
{
    "useSquashMerge": {bool},
    "scope": [{git-ref-scope}, ...]
}
```

| Parameter            | Type    | Notes
|:---------------------|:--------|:----------------------------------------------------------------------------------------------------------------------
| useSquashMerge       | boolean | If `true` pull requests are forced to use squash merge when merging. If `false` pull requests are forced to use merge when merging.
| scope                | Array of [Git ref scope](./settings.md#gitrefscope) | Determines what Git refs (e.g. branches) this policy applies to. To enforce the policy, direct pushes to these refs from Git clients will be rejected. Use pull requests to update refs within the scope of this policy.

### Example

This example adds a merge strategy policy that:

 * Ensures all pull requests going into master are squash merged

#### Sample request

```
POST https://mytfsserver/DefaultCollection/fabrikam-fiber-git/_apis/policy/configurations?api-version=2.0-preview
```
```json
{
  "isEnabled": true,
  "isBlocking": true,
  "type": {
    "id": "fa4e907d-c16b-4a4c-9dfa-4916e5d171ab"
  },
  "settings": {
    "useSquashMerge": true,
    "scope": [
      {
        "repositoryId": "1d1dad71-f27c-4370-810d-838ec41efd41",
        "refName": "refs/heads/master",
        "matchKind": "exact"
      }
    ]
  }
}
```

#### Sample response

```json
{
  "createdBy": {
    "id": "d6245f20-2af8-44f4-9451-8107cb2767db",
    "displayName": "Normal Paulk",
    "uniqueName": "fabrikamfiber16@hotmail.com",
    "url": "https://mytfsserver/DefaultCollection/_apis/Identities/d6245f20-2af8-44f4-9451-8107cb2767db",
    "imageUrl": "https://mytfsserver/DefaultCollection/_api/_common/identityImage?id=d6245f20-2af8-44f4-9451-8107cb2767db"
  },
  "createdDate": "2015-02-23T12:51:06.935666",
  "isEnabled": true,
  "isBlocking": true,
  "settings": {
    "useSquashMerge": true,
    "scope": [
      {
        "refName": "refs/heads/master",
        "matchKind": "Exact",
        "repositoryId": "1d1dad71-f27c-4370-810d-838ec41efd41"
      }
    ]
  },
  "_links": {
    "self": {
      "href": "https://mytfsserver/DefaultCollection/_apis/policy/configurations/19"
    },
    "type": {
      "href": "https://mytfsserver/DefaultCollection/1be3fc5b-c58c-4173-8fd7-6647d11eccd1/_apis/policy/types/fa4e907d-c16b-4a4c-9dfa-4916e5d171ab"
    }
  },
  "revision": 1,
  "id": 19,
  "url": "https://mytfsserver/DefaultCollection/_apis/policy/configurations/19",
  "type": {
    "id": "fa4e907d-c16b-4a4c-9dfa-4916e5d171ab",
    "url": "https://mytfsserver/DefaultCollection/1be3fc5b-c58c-4173-8fd7-6647d11eccd1/_apis/policy/types/fa4e907d-c16b-4a4c-9dfa-4916e5d171ab",
    "displayName": "Require a merge strategy"
  }
}
```


## Git ref scope
<a name="gitrefscope" />
Describes that a policy should apply to specified Git refs according to a pattern
```json
{
    "repositoryId": {guid-or-null},
    "refName": {string},
    "matchKind": "prefix|exact"
}
```

| Parameter     | Type                   | Notes
|:--------------|:-----------------------|:----------------------------------------------------------------------------------------------------------------------------------
| repositoryId  | guid or null           | The ID of the repository the scope applies to, or null for all repositories in the project. Must always be specified, even if null
| refName       | string                 | The ref name to select with the scope. Include the `refs/heads/` prefix.
| matchKind     | enum { Prefix, Exact } | Determines how *refName* is matched against Git ref names. Comparison is always case-sensitive.
