---
ms.prod: devops
ms.technology: devops-ecosystem
monikerRange: '>= tfs-2013 < vsts'
title: Git Import Requests | REST API Reference for Team Foundation Server
description: Work with Git import requests programmatically using the REST APIs for Team Foundation Server.
ms.contentid: 95B4933F-8191-4073-835A-3A0E218987D3
---

# Git import requests
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
[!code-REST [GET__git_repositories__repositoryId__importRequests__json](./_data/importRequests/GET__git_repositories__repositoryId__importRequests.json)]

### By repository ID with abandoned requests
[!code-REST [GET__git_repositories__repositoryId__importRequests__includeAbandoned-True__json](./_data/importRequests/GET__git_repositories__repositoryId__importRequests_includeAbandoned-True.json)]

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

[!code-REST [GET__git_repositories__repositoryId__importRequests__importRequeestId__json](./_data/importRequests/GET__git_repositories__repositoryId__importRequests__importRequestId_.json)]

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

[!code-REST [POST__git_repositories__repositoryId__importRequests_json](./_data/importRequests/POST__git_repositories__repositoryId__importRequests.json)]

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

[!code-REST [PATCH__git_repositories__repositoryId__importRequests__importRequestId__json](./_data/importRequests/PATCH__git_repositories__repositoryId__importRequests__importRequestId_.json)]
