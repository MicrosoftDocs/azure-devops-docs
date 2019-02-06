---
ms.prod: devops
ms.technology: devops-ecosystem
monikerRange: '>= tfs-2015 < azure-devops'
title: Service Endpoints | REST API Reference for Team Foundation Server
description: Get, create, update and delete endpoints
ms.ContentId: 01af664f-d3e9-4331-b1c4-8b323045940b
---

# Service endpoints

[!INCLUDE [azure-devops](../_data/azure-devops-message.md)]


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

#### Sample request

```
GET https://mytfsserver/DefaultCollection/ff213d65-d61d-447c-b39d-d16f21b18364/_apis/distributedtask/serviceendpoints?api-version=3.0-preview.1
```

#### Sample response

```json
{
  "count": 3,
  "value": [
    {
      "data": {
        "subscriptionId": "ddc11291-9826-55be-b932-70349146ddf8",
        "subscriptionName": "Fabrikam-Azure"
      },
      "id": "178cd0a2-536d-4ceb-9e5b-2ebc46a66d0e",
      "name": "Fabrikam-Azure",
      "type": "azure",
      "url": "https://management.core.windows.net/",
      "createdBy": {
        "id": "52a5bc8d-4730-400a-95c7-7276d4ae5953",
        "displayName": "Chuck Reinhart",
        "uniqueName": "chuckreinhart@outlook.com"
      },
      "authorization": {
        "scheme": "Certificate"
      },
      "groupScopeId": "afd9a2f8-2ff2-490c-b5bb-a070a5acffe8",
      "administratorsGroup": {
        "id": "e98d5799-6571-46b3-a867-aeaf33c6df8d",
        "displayName": "[Service Endpoint 178cd0a2-536d-4ceb-9e5b-2ebc46a66d0e]\\Endpoint Administrators",
        "uniqueName": "vstfs:///Framework/Generic/afd9a2f8-2ff2-490c-b5bb-a070a5acffe8\\Endpoint Administrators",
        "isContainer": true
      },
      "readersGroup": {
        "id": "fcfdfa1c-f958-427d-8743-b8e3a1981689",
        "displayName": "[Service Endpoint 178cd0a2-536d-4ceb-9e5b-2ebc46a66d0e]\\Endpoint Readers",
        "uniqueName": "vstfs:///Framework/Generic/afd9a2f8-2ff2-490c-b5bb-a070a5acffe8\\Endpoint Readers",
        "isContainer": true
      },
      "isReady": true
    },
    {
      "data": {},
      "id": "03b4a664-2285-4c1b-bfb1-51595ac6b44b",
      "name": "Jenkins-Fabrikam",
      "type": "jenkins",
      "url": "https://fab-jenkins:8080/",
      "createdBy": {
        "id": "52a5bc8d-4730-400a-95c7-7276d4ae5953",
        "displayName": "Chuck Reinhart",
        "uniqueName": "chuckreinhart@outlook.com"
      },
      "authorization": {
        "scheme": "UsernamePassword"
      },
      "groupScopeId": "4147b96d-4c42-49d0-bf6d-04406b44f807",
      "administratorsGroup": {
        "id": "25b7297a-b10a-49ff-9437-c8f91521165e",
        "displayName": "[Service Endpoint 03b4a664-2285-4c1b-bfb1-51595ac6b44b]\\Endpoint Administrators",
        "uniqueName": "vstfs:///Framework/Generic/4147b96d-4c42-49d0-bf6d-04406b44f807\\Endpoint Administrators",
        "isContainer": true
      },
      "readersGroup": {
        "id": "fc783397-019e-4bb1-94e8-dd99e3aa6a75",
        "displayName": "[Service Endpoint 03b4a664-2285-4c1b-bfb1-51595ac6b44b]\\Endpoint Readers",
        "uniqueName": "vstfs:///Framework/Generic/4147b96d-4c42-49d0-bf6d-04406b44f807\\Endpoint Readers",
        "isContainer": true
      },
      "isReady": true
    }
  ]
}
```


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

#### Sample request

```
POST https://mytfsserver/DefaultCollection/ff213d65-d61d-447c-b39d-d16f21b18364/_apis/distributedtask/serviceendpoints?api-version=3.0-preview.1
```
```json
{
  "name": "Fabrikam-Chef",
  "type": "chef",
  "url": "https://fabrikam-chef:9090",
  "authorization": {
    "scheme": "UsernamePassword",
    "parameters": {
      "username": "someUsername",
      "password": "somePassword"
    }
  }
}
```

#### Sample response

```json
{
  "data": {},
  "id": "d4177445-c5ad-414a-82bf-2d5727a8176e",
  "name": "Fabrikam-Chef",
  "type": "chef",
  "url": "https://fabrikam-chef:9090",
  "createdBy": {
    "id": "52a5bc8d-4730-400a-95c7-7276d4ae5953",
    "displayName": "Chuck Reinhart",
    "uniqueName": "chuckreinhart@outlook.com"
  },
  "authorization": {
    "parameters": {
      "username": "someUsername",
      "password": "somePassword"
    },
    "scheme": "UsernamePassword"
  },
  "groupScopeId": "24f9e5e0-93a3-465a-a2a3-f5db672a72c2",
  "administratorsGroup": {
    "id": "3efde1c2-fd15-414e-acd1-975f5570d382"
  },
  "readersGroup": {
    "id": "4b12a0e3-48c9-45d7-8861-cadf0e5ca992"
  },
  "isReady": true
}
```


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

#### Sample request

```
GET https://mytfsserver/DefaultCollection/ff213d65-d61d-447c-b39d-d16f21b18364/_apis/distributedtask/serviceendpoints/d4177445-c5ad-414a-82bf-2d5727a8176e?api-version=3.0-preview.1
```

#### Sample response

```json
{
  "data": {},
  "id": "d4177445-c5ad-414a-82bf-2d5727a8176e",
  "name": "Fabrikam-Chef",
  "type": "chef",
  "url": "https://fabrikam-chef:9090/",
  "createdBy": {
    "id": "52a5bc8d-4730-400a-95c7-7276d4ae5953",
    "displayName": "Chuck Reinhart",
    "uniqueName": "chuckreinhart@outlook.com"
  },
  "authorization": {
    "parameters": {
      "username": "someUsername"
    },
    "scheme": "UsernamePassword"
  },
  "groupScopeId": "24f9e5e0-93a3-465a-a2a3-f5db672a72c2",
  "administratorsGroup": {
    "id": "3efde1c2-fd15-414e-acd1-975f5570d382"
  },
  "readersGroup": {
    "id": "4b12a0e3-48c9-45d7-8861-cadf0e5ca992"
  },
  "isReady": true
}
```


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

#### Sample request

```
PUT https://mytfsserver/DefaultCollection/ff213d65-d61d-447c-b39d-d16f21b18364/_apis/distributedtask/serviceendpoints/d4177445-c5ad-414a-82bf-2d5727a8176e?api-version=3.0-preview.1
```
```json
{
  "name": "Fabrikam-Chef-Updated",
  "type": "chef",
  "url": "https://fabrikam-chef-updated:9090",
  "authorization": {
    "scheme": "UsernamePassword",
    "parameters": {
      "username": "someUsername",
      "password": "somePassword"
    }
  }
}
```

#### Sample response

```json
{
  "data": {},
  "id": "d4177445-c5ad-414a-82bf-2d5727a8176e",
  "name": "Fabrikam-Chef-Updated",
  "type": "chef",
  "url": "https://fabrikam-chef-updated:9090",
  "authorization": {
    "parameters": {
      "username": "someUsername",
      "password": "somePassword"
    },
    "scheme": "UsernamePassword"
  },
  "isReady": true
}
```


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

#### Sample request

```
DELETE https://mytfsserver/DefaultCollection/ff213d65-d61d-447c-b39d-d16f21b18364/_apis/distributedtask/serviceendpoints/d4177445-c5ad-414a-82bf-2d5727a8176e?api-version=3.0-preview.1
```
