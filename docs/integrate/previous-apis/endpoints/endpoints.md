---
ms.prod: devops
ms.technology: devops-ecosystem
monikerRange: '>= tfs-2013 < vsts'
title: Service Endpoints | REST API Reference for Team Foundation Server
description: Get, create, update and delete endpoints
ms.ContentId: 01af664f-d3e9-4331-b1c4-8b323045940b
---

# Service endpoints

[!INCLUDE [API_version](../_data/version3-preview1.md)]

[!INCLUDE [GET_STARTED](../_data/get-started.md)]

## Get a list of service endpoints

```no-highlight
GET https://{instance}/defaultcollection/{project}/_apis/distributedtask/serviceendpoints?[api-version={version}]
```

| Parameter     | Type     | Notes
|:--------------|:---------|:------------
| URL
| instance      | string   | TFS server name ({server:port}).
| project       | string   | [Project](../tfs/projects.md) ID or name.
| Query
| version       | string   | [Version](../../concepts/rest-api-versioning.md) of the API to use.

[!code-REST [listEndpoints](./_data/endpoints/GET__distributedtask_serviceendpoints.json)]

## Create a service endpoint

```no-highlight
POST https://{instance}/defaultcollection/{project}/_apis/distributedtask/serviceendpoints?[api-version={version}]
```

| Parameter     | Type     | Notes
|:--------------|:---------|:------------
| URL
| instance      | string   | TFS server name ({server:port}).
| project       | string   | [Project](../tfs/projects.md) ID or name.
| Query
| version       | string   | [Version](../../concepts/rest-api-versioning.md) of the API to use.
| Body
| name          | string   | Name of the service endpoint.
| type          | string   | Type of the service endpoint.
| url           | string   | Complete URL of the service that is being connected. 
| authorization | JSON | Inputs related to authentication of the service endpoint.
| data          | JSON     | Other inputs that are required by the mentioned endpoint type.
| Response
| isReady | bool  | Indicates if the created endpoint is ready to use or not. Applies only to Azure SPN, always true for other endpoint types

[!code-REST [createEndpoint](./_data/endpoints/POST__distributedtask_serviceendpoints.json)]

## Get a service endpoint

```no-highlight
GET https://{instance}/defaultcollection/{project}/_apis/distributedtask/serviceendpoints/{id}?[api-version={version}]
```

| Parameter     | Type     | Notes
|:--------------|:---------|:------------
| URL
| instance      | string   | TFS server name ({server:port}).
| project       | string   | [Project](../tfs/projects.md) ID or name.
| id            | string   | Endpoint ID.
| Query
| version       | string   | [Version](../../concepts/rest-api-versioning.md) of the API to use.

[!code-REST [getEndpoint](./_data/endpoints/GET__distributedtask_serviceendpoints__Id_.json)]

## Update a service endpoint

```no-highlight
PUT https://{instance}/defaultcollection/{project}/_apis/distributedtask/serviceendpoints/{id}?[api-version={version}]
```

| Parameter     | Type     | Notes
|:--------------|:---------|:------------
| URL
| instance      | string   | TFS server name ({server:port}).
| project       | string   | [Project](../tfs/projects.md) ID or name.
| id            | string   | Endpoint ID.
| Query
| version       | string   | [Version](../../concepts/rest-api-versioning.md) of the API to use.

[!code-REST [updateEndpoint](./_data/endpoints/PUT__distributedtask_serviceendpoints__Id_.json)]

## Delete a service endpoint

```no-highlight
DELETE https://{instance}/defaultcollection/{project}/_apis/distributedtask/serviceendpoints/{id}?[api-version={version}]
```

| Parameter     | Type     | Notes
|:--------------|:---------|:------------
| URL
| instance      | string   | TFS server name ({server:port}).
| project       | string   | [Project](../tfs/projects.md) ID or name.
| id            | string   | Endpoint ID.
| Query
| version       | string   | [Version](../../concepts/rest-api-versioning.md) of the API to use.

[!code-REST [deleteEndpoint](./_data/endpoints/DELETE__distributedtask_serviceendpoints__Id_.json)]