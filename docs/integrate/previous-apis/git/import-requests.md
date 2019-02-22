---
ms.prod: devops
ms.technology: devops-ecosystem
monikerRange: '>= tfs-2015 < azure-devops'
title: Git Import Requests | REST API Reference for Team Foundation Server
description: Work with Git import requests programmatically using the REST APIs for Team Foundation Server.
ms.contentid: 95B4933F-8191-4073-835A-3A0E218987D3
---

# Git import requests

[!INCLUDE [azure-devops](../_data/azure-devops-message.md)]

[!INCLUDE [API_version](../_data/version3-preview.md)]

[!INCLUDE [GET_STARTED](../_data/get-started.md)]

## Get a list of import requests

```no-highlight
GET https://{instance}/DefaultCollection/{project}/_apis/repos/git/repositories/{repository}/importRequests?api-version={version}[&includeAbandoned={bool}]
```

| Parameter         | Type    | Default | Notes
|:------------------|:--------|:--------|:----------------------------------------------------------------------------------------------------------------------------
| URL
| instance          | string  |         | TFS server name ({server:port}).
| project           | string  |         | ID or name of the [project](../tfs/projects.md). *Optional if specifying an ID for repository.*
| repository        | string  |         | ID of the [repository](./repositories.md).
| Query
| api-version       | string  |         | [Version](../../concepts/rest-api-versioning.md) of the API to use.
| includeAbandoned  | bool    |  false  | If true, include abandoned requests in the result

[!INCLUDE [ID_vs_Name](_data/id_or_name.md)]

### By repository ID
#### Sample request

```
GET https://mytfsserver/DefaultCollection/Test/_apis/git/repositories/0eb02d2e-fff9-4990-bd45-2f7503f5aae5/importRequests?api-version=3.0-preview
```

#### Sample response

```json
{
  "count": 1,
  "value": [
    {
      "importRequestId": 2,
      "repository": {
        "id": "0eb02d2e-fff9-4990-bd45-2f7503f5aae5",
        "name": "EmptyGitRepo",
        "url": "https://mytfsserver/DefaultCollection/_apis/git/repositories/0eb02d2e-fff9-4990-bd45-2f7503f5aae5",
        "project": {
          "id": "5745879a-8531-41c3-9ed3-ae7fc07309ff",
          "name": "Test",
          "url": "https://mytfsserver/DefaultCollection/_apis/projects/5745879a-8531-41c3-9ed3-ae7fc07309ff",
          "state": "wellFormed",
          "revision": 7
        },
        "remoteUrl": "https://mytfsserver/DefaultCollection/Test/_git/EmptyGitRepo"
      },
      "parameters": {
        "gitSource": {
          "url": "https://github.com/Microsoft/vsts-agent.git"
        }
      },
      "status": "queued",
      "detailedStatus": {
        "currentStep": 1,
        "allSteps": [
          "Processing request",
          "Analyzing repository objects",
          "Storing objects",
          "Storing index file",
          "Updating references",
          "Import completed successfully"
        ]
      },
      "_links": {
        "self": {
          "href": "https://mytfsserver/DefaultCollection/Test/_apis/git/repositories/0eb02d2e-fff9-4990-bd45-2f7503f5aae5/importRequests/2"
        },
        "repository": {
          "href": "https://mytfsserver/DefaultCollection/_apis/git/repositories/0eb02d2e-fff9-4990-bd45-2f7503f5aae5"
        }
      },
      "url": "https://mytfsserver/DefaultCollection/Test/_apis/git/repositories/0eb02d2e-fff9-4990-bd45-2f7503f5aae5/importRequests/2"
    }
  ]
}
```


### By repository ID with abandoned requests
#### Sample request

```
GET https://mytfsserver/DefaultCollection/Test/_apis/git/repositories/0eb02d2e-fff9-4990-bd45-2f7503f5aae5/importRequests?includeAbandoned=true&api-version=3.0-preview
```

#### Sample response

```json
{
  "count": 2,
  "value": [
    {
      "importRequestId": 2,
      "repository": {
        "id": "0eb02d2e-fff9-4990-bd45-2f7503f5aae5",
        "name": "EmptyGitRepo",
        "url": "https://mytfsserver/DefaultCollection/_apis/git/repositories/0eb02d2e-fff9-4990-bd45-2f7503f5aae5",
        "project": {
          "id": "5745879a-8531-41c3-9ed3-ae7fc07309ff",
          "name": "Test",
          "url": "https://mytfsserver/DefaultCollection/_apis/projects/5745879a-8531-41c3-9ed3-ae7fc07309ff",
          "state": "wellFormed",
          "revision": 7
        },
        "remoteUrl": "https://mytfsserver/DefaultCollection/Test/_git/EmptyGitRepo"
      },
      "parameters": {
        "gitSource": {
          "url": "https://github.com/Microsoft/vsts-agent.git"
        }
      },
      "status": "queued",
      "detailedStatus": {
        "currentStep": 1,
        "allSteps": [
          "Processing request",
          "Analyzing repository objects",
          "Storing objects",
          "Storing index file",
          "Updating references",
          "Import completed successfully"
        ]
      },
      "_links": {
        "self": {
          "href": "https://mytfsserver/DefaultCollection/Test/_apis/git/repositories/0eb02d2e-fff9-4990-bd45-2f7503f5aae5/importRequests/2"
        },
        "repository": {
          "href": "https://mytfsserver/DefaultCollection/_apis/git/repositories/0eb02d2e-fff9-4990-bd45-2f7503f5aae5"
        }
      },
      "url": "https://mytfsserver/DefaultCollection/Test/_apis/git/repositories/0eb02d2e-fff9-4990-bd45-2f7503f5aae5/importRequests/2"
    },
    {
      "importRequestId": 1,
      "repository": {
        "id": "0eb02d2e-fff9-4990-bd45-2f7503f5aae5",
        "name": "EmptyGitRepo",
        "url": "https://mytfsserver/DefaultCollection/_apis/git/repositories/0eb02d2e-fff9-4990-bd45-2f7503f5aae5",
        "project": {
          "id": "5745879a-8531-41c3-9ed3-ae7fc07309ff",
          "name": "Test",
          "url": "https://mytfsserver/DefaultCollection/_apis/projects/5745879a-8531-41c3-9ed3-ae7fc07309ff",
          "state": "wellFormed",
          "revision": 7
        },
        "remoteUrl": "https://mytfsserver/DefaultCollection/Test/_git/EmptyGitRepo"
      },
      "parameters": {
        "gitSource": {
          "url": "https://github.com/Microsoft/vscode.git"
        }
      },
      "status": "abandoned",
      "detailedStatus": {
        "currentStep": 1,
        "allSteps": [
          "Processing request",
          "Analyzing repository objects",
          "Storing objects",
          "Storing index file",
          "Updating references",
          "Import completed successfully"
        ],
        "errorMessage": "this remote has never connected"
      },
      "_links": {
        "self": {
          "href": "https://mytfsserver/DefaultCollection/Test/_apis/git/repositories/0eb02d2e-fff9-4990-bd45-2f7503f5aae5/importRequests/1"
        },
        "repository": {
          "href": "https://mytfsserver/DefaultCollection/_apis/git/repositories/0eb02d2e-fff9-4990-bd45-2f7503f5aae5"
        }
      },
      "url": "https://mytfsserver/DefaultCollection/Test/_apis/git/repositories/0eb02d2e-fff9-4990-bd45-2f7503f5aae5/importRequests/1"
    }
  ]
}
```


## Get an import request

```no-highlight
GET https://{instance}/DefaultCollection/{project}/_apis/repos/git/repositories/{repository}/importRequests/{importRequestId}?api-version={version}
```

| Parameter         | Type    | Notes
|:------------------|:--------|:----------------------------------------------------------------------------------------------------------------------------
| URL
| instance          | string  | TFS server name ({server:port}).
| project           | string  | ID or name of the [project](../tfs/projects.md). *Optional if specifying an ID for repository.*
| repository        | string  | ID of the [repository](./repositories.md).
| importRequestId   | int     | ID of the import request.
| Query
| api-version       | string  | [Version](../../concepts/rest-api-versioning.md) of the API to use.

#### Sample request

```
GET https://mytfsserver/DefaultCollection/Test/_apis/git/repositories/0eb02d2e-fff9-4990-bd45-2f7503f5aae5/importRequests/2?api-version=3.0-preview
```

#### Sample response

```json
{
  "importRequestId": 2,
  "repository": {
    "id": "0eb02d2e-fff9-4990-bd45-2f7503f5aae5",
    "name": "EmptyGitRepo",
    "url": "https://mytfsserver/DefaultCollection/_apis/git/repositories/0eb02d2e-fff9-4990-bd45-2f7503f5aae5",
    "project": {
      "id": "5745879a-8531-41c3-9ed3-ae7fc07309ff",
      "name": "Test",
      "url": "https://mytfsserver/DefaultCollection/_apis/projects/5745879a-8531-41c3-9ed3-ae7fc07309ff",
      "state": "wellFormed",
      "revision": 7
    },
    "remoteUrl": "https://mytfsserver/DefaultCollection/Test/_git/EmptyGitRepo"
  },
  "parameters": {
    "gitSource": {
      "url": "https://github.com/Microsoft/vsts-agent.git"
    }
  },
  "status": "queued",
  "detailedStatus": {
    "currentStep": 1,
    "allSteps": [
      "Processing request",
      "Analyzing repository objects",
      "Storing objects",
      "Storing index file",
      "Updating references",
      "Import completed successfully"
    ]
  },
  "_links": {
    "self": {
      "href": "https://mytfsserver/DefaultCollection/Test/_apis/git/repositories/0eb02d2e-fff9-4990-bd45-2f7503f5aae5/importRequests/2"
    },
    "repository": {
      "href": "https://mytfsserver/DefaultCollection/_apis/git/repositories/0eb02d2e-fff9-4990-bd45-2f7503f5aae5"
    }
  },
  "url": "https://mytfsserver/DefaultCollection/Test/_apis/git/repositories/0eb02d2e-fff9-4990-bd45-2f7503f5aae5/importRequests/2"
}
```


## Create a request to import a repository

```no-highlight
POST https://{instance}/DefaultCollection/{project}/_apis/repos/git/repositories/{repository}/importRequests?api-version={version}
```
```
{
  "parameters":
    {
      "gitSource":
        {
          "url": {string}
        },
      "serviceEndpointId": {string},
      "deleteServiceEndpointAfterImportIsDone": {bool}
    }
}
```

| Parameter                                          | Type     | Notes
|:---------------------------------------------------|:---------|:----------------------------------------------------------------------------------------------------------------------------
| URL
| instance                                           | string   | TFS server name ({server:port}).
| project                                            | string   | ID or name of the [project](../tfs/projects.md). *Optional if specifying an ID for repository.*
| repository                                         | string   | ID of the [repository](./repositories.md).
| Query
| api-version                                        | string   | [Version](../../concepts/rest-api-versioning.md) of the API to use.
| Body
| parameters.gitSource.url                           | string   | Url of the source Git repository to import from
| parameters.serviceEndpointId                       | string   | [Service endpoint](../endpoints/overview.md) ID. Required if source repository is private.
| parameters.deleteServiceEndpointAfterImportIsDone  | bool     | If true, delete service endpoint after import is done.

#### Sample request

```
POST https://mytfsserver/DefaultCollection/Test/_apis/git/repositories/0eb02d2e-fff9-4990-bd45-2f7503f5aae5/importRequests?api-version=3.0-preview
```
```json
{
  "parameters": {
    "gitSource": {
      "url": "https://github.com/Microsoft/vsts-agent.git"
    }
  }
}
```

#### Sample response

```json
{
  "importRequestId": 2,
  "repository": {
    "id": "0eb02d2e-fff9-4990-bd45-2f7503f5aae5",
    "name": "EmptyGitRepo",
    "url": "https://mytfsserver/DefaultCollection/_apis/git/repositories/0eb02d2e-fff9-4990-bd45-2f7503f5aae5",
    "project": {
      "id": "5745879a-8531-41c3-9ed3-ae7fc07309ff",
      "name": "Test",
      "url": "https://mytfsserver/DefaultCollection/_apis/projects/5745879a-8531-41c3-9ed3-ae7fc07309ff",
      "state": "wellFormed",
      "revision": 7
    },
    "remoteUrl": "https://mytfsserver/DefaultCollection/Test/_git/EmptyGitRepo"
  },
  "parameters": {
    "gitSource": {
      "url": "https://github.com/Microsoft/vsts-agent.git"
    }
  },
  "status": "queued",
  "detailedStatus": {
    "currentStep": 1,
    "allSteps": [
      "Processing request",
      "Analyzing repository objects",
      "Storing objects",
      "Storing index file",
      "Updating references",
      "Import completed successfully"
    ]
  },
  "_links": {
    "self": {
      "href": "https://mytfsserver/DefaultCollection/Test/_apis/git/repositories/0eb02d2e-fff9-4990-bd45-2f7503f5aae5/importRequests/2"
    },
    "repository": {
      "href": "https://mytfsserver/DefaultCollection/_apis/git/repositories/0eb02d2e-fff9-4990-bd45-2f7503f5aae5"
    }
  },
  "url": "https://mytfsserver/DefaultCollection/Test/_apis/git/repositories/0eb02d2e-fff9-4990-bd45-2f7503f5aae5/importRequests/2"
}
```


## Retry or abandon a failed import request

There can only be one active import request associated with a repository. Marking a failed import request abandoned makes it inactive.

```no-highlight
PATCH https://{instance}/DefaultCollection/{project}/_apis/repos/git/repositories/{repository}/importRequests/{importRequestId}?api-version={version}
```
```
{
  "status": {enum}
}
```

| Parameter            | Type                       | Notes
|:---------------------|:---------------------------|:----------------------------------------------------------------------------------------------------------------------------
| URL
| instance             | string                     | TFS server name ({server:port}).
| project              | string                     | ID or name of the [project](../tfs/projects.md). *Optional if specifying an ID for repository.*
| repository           | string                     | ID of the [repository](./repositories.md).
| importRequestId      | int                        | ID of the import request.
| Query
| api-version          | string                     | [Version](../../concepts/rest-api-versioning.md) of the API to use.
| Body
| status               | enum { queued, abandoned } | "queued" to retry or "abandoned" to abandon a failed request

#### Sample request

```
PATCH https://mytfsserver/DefaultCollection/Test/_apis/git/repositories/0eb02d2e-fff9-4990-bd45-2f7503f5aae5/importRequests/1?api-version=3.0-preview
```
```json
{
  "status": "abandoned"
}
```

#### Sample response

```json
{
  "importRequestId": 1,
  "repository": {
    "id": "0eb02d2e-fff9-4990-bd45-2f7503f5aae5",
    "name": "EmptyGitRepo",
    "url": "https://mytfsserver/DefaultCollection/_apis/git/repositories/0eb02d2e-fff9-4990-bd45-2f7503f5aae5",
    "project": {
      "id": "5745879a-8531-41c3-9ed3-ae7fc07309ff",
      "name": "Test",
      "url": "https://mytfsserver/DefaultCollection/_apis/projects/5745879a-8531-41c3-9ed3-ae7fc07309ff",
      "state": "wellFormed",
      "revision": 7
    },
    "remoteUrl": "https://mytfsserver/DefaultCollection/Test/_git/EmptyGitRepo"
  },
  "parameters": {
    "gitSource": {
      "url": "https://github.com/Microsoft/vscode.git"
    }
  },
  "status": "abandoned",
  "detailedStatus": {
    "currentStep": 1,
    "allSteps": [
      "Processing request",
      "Analyzing repository objects",
      "Storing objects",
      "Storing index file",
      "Updating references",
      "Import completed successfully"
    ],
    "errorMessage": "this remote has never connected"
  },
  "_links": {
    "self": {
      "href": "https://mytfsserver/DefaultCollection/Test/_apis/git/repositories/0eb02d2e-fff9-4990-bd45-2f7503f5aae5/importRequests/1"
    },
    "repository": {
      "href": "https://mytfsserver/DefaultCollection/_apis/git/repositories/0eb02d2e-fff9-4990-bd45-2f7503f5aae5"
    }
  },
  "url": "https://mytfsserver/DefaultCollection/Test/_apis/git/repositories/0eb02d2e-fff9-4990-bd45-2f7503f5aae5/importRequests/1"
}
```

