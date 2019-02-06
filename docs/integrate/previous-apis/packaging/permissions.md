---
title: Permissions | REST API Reference for VSTS
description: Work with feeds programmatically using the REST APIs for VSTS .
ms.assetid: 72a0f637-2b25-4532-a1d3-1e4d446b3aba
ms.manager: jillfra
ms.date: 09/29/2016
ms.prod: devops
ms.technology: devops-ecosystem
monikerRange: '>= tfs-2015 < azure-devops'
ms.topic: article
ms.author: elbatk
author: elbatk
ms.date: 08/17/2016
---

# Permissions

[!INCLUDE [azure-devops](../_data/azure-devops-message.md)]

[!INCLUDE [API_version](../_data/version2-preview1.md)]

[!INCLUDE [disclaimer](../_data/disclaimer.md)]

## Get permissions for a feed

```no-highlight
GET https://{account}.Feeds.VisualStudio.com/DefaultCollection/_apis/packaging/feeds/{feed}/Permissions?api-version={version}
```

| Parameter | Type    | Notes
|:----------|:--------|:-------------------------------------------------------------------------------------------------------------
| URL
| account   | string  | VSTS organization.
| feed        | string | Name or ID of the feed.
| Query
| api-version | string | [Version](../../concepts/rest-api-versioning.md) of the API to use.

#### Sample request

```
GET https://mytfsserver/DefaultCollection/_apis/packaging/feeds/EngineeringInternal/permissions?api-version=2.0-preview.1
```

#### Sample response

```json
{
  "count": 3,
  "value": [
    {
      "role": "administrator",
      "identityDescriptor": "Microsoft.TeamFoundation.Identity;S-1-9-1551374245-2520422648-1909688902-2986275227-4210569620-1-653012555-3795782475-2724694617-2471557501"
    },
    {
      "role": "contributor",
      "identityDescriptor": "Microsoft.TeamFoundation.ServiceIdentity;185a8d6e-60c1-4b69-9ca6-ed9dcbbfa941:Build:6cb12e9f-c433-4ae5-9c34-553955d1a530"
    },
    {
      "role": "reader",
      "identityDescriptor": "Microsoft.TeamFoundation.Identity;S-1-9-1551374245-2712299484-177020235-2467464201-2866546392-1-2139524724-1218764870-2465287707-3992568220"
    }
  ]
}
```


## Update permissions for a feed

```no-highlight
PATCH https://{account}.Feeds.VisualStudio.com/DefaultCollection/_apis/packaging/feeds/{feed}/Permissions?api-version={version}
```

| Parameter   | Type   | Notes
|:------------|:-------|:-------------------------------------------------------------------------------------------------------------
| URL
| account     | string | VSTS organization.
| feed        | string | Name or ID of feed to be updated
| Query
| api-version | string | [Version](../../concepts/rest-api-versioning.md) of the API to use.
| Body
| role        | enum   | 4 = owner, 3 = contributor, 2 = reader
| identityDescriptor | string | Identity descriptor receiving an access level

#### Sample request

```
PATCH https://mytfsserver/DefaultCollection/_apis/packaging/feeds/EngineeringInternal/permissions?api-version=2.0-preview.1
```
```json
[
  {
    "role": 3,
    "identityDescriptor": "Microsoft.TeamFoundation.Identity;S-1-9-1551374245-2520422648-1909688902-2986275227-4210569620-1-653012555-3795782475-2724694617-2471557501"
  }
]
```

#### Sample response

```json
{
  "count": 1,
  "value": [
    {
      "role": "contributor",
      "identityDescriptor": "Microsoft.TeamFoundation.Identity;S-1-9-1551374245-2520422648-1909688902-2986275227-4210569620-1-653012555-3795782475-2724694617-2471557501"
    }
  ]
}
```


## Get Package Management permissions

```no-highlight
GET https://{account}.Feeds.VisualStudio.com/DefaultCollection/_apis/packaging/globalpermissions?api-version={version}
```

| Parameter | Type    | Notes
|:----------|:--------|:-------------------------------------------------------------------------------------------------------------
| URL
| account   | string  | VSTS organization.
| Query
| api-version | string | [Version](../../concepts/rest-api-versioning.md) of the API to use.

#### Sample request

```
GET https://mytfsserver/DefaultCollection/_apis/packaging/globalpermissions?api-version=2.0-preview.1
```

#### Sample response

```json
{
  "count": 2,
  "value": [
    {
      "role": "none",
      "identityDescriptor": "Microsoft.IdentityModel.Claims.ClaimsIdentity;00000030-0000-8888-8000-000000000000@2c895908-04e0-4952-89fd-54b0046d6288"
    },
    {
      "role": "FeedCreator",
      "identityDescriptor": "Microsoft.TeamFoundation.Identity;S-1-9-1551374245-1204400969-2402986413-2179408616-0-0-0-0-1"
    }
  ]
}
```


## Update Package Management permissions

```no-highlight
PATCH https://{account}.Feeds.VisualStudio.com/DefaultCollection/_apis/packaging/globalpermissions?api-version={version}
```

| Parameter          | Type    | Notes
|:-------------------|:--------|:-------------------------------------------------------------------------------------------------------------
| URL
| account            | string  | VSTS organization.
| Query
| api-version        | string  | [Version../../concepts/rest-api-versioning.md) of the API to use.
| Body
| role               | enum    | 2 = FeedCreator, 1 = None
| identityDescriptor | string  | Identity descriptor receiving an access level

#### Sample request

```
PATCH https://mytfsserver/DefaultCollection/_apis/packaging/globalpermissions?api-version=2.0-preview.1
```
```json
[
  {
    "identityDescriptor": "Microsoft.TeamFoundation.Identity;S-1-9-1551374245-1204400969-2402986413-2179408616-0-0-0-0-3",
    "role": 2
  },
  {
    "identityDescriptor": "Microsoft.IdentityModel.Claims.ClaimsIdentity;afd9e15b-cb4a-4adb-931b-8cc520a03c36",
    "role": 1
  }
]
```

#### Sample response

```json
{
  "count": 2,
  "value": [
    {
      "role": "none",
      "identityDescriptor": "Microsoft.TeamFoundation.Identity;S-1-9-1551374245-1204400969-2402986413-2179408616-0-0-0-0-1"
    },
    {
      "role": "feedCreator",
      "identityDescriptor": "Microsoft.TeamFoundation.Identity;S-1-9-1551374245-1204400969-2402986413-2179408616-0-0-0-0-3"
    }
  ]
}
```


## Grant and remove permissions to 'Everyone'
In order to allow or deny everyone access to create feeds, you'll need to use the special identityDescriptor that represents the Everyone group:
```
Microsoft.TeamFoundation.Identity;S-1-9-1551374245-1204400969-2402986413-2179408616-0-0-0-0-3
```
The previous sample request would grant permissions to everyone. Use a request similar to the following to remove permission from Everyone, so only Project Collection Administrators are able to create feeds:

#### Sample request

```
PATCH https://mytfsserver/DefaultCollection/_apis/packaging/globalpermissions?api-version=2.0-preview.1
```
```json
[
  {
    "identityDescriptor": "Microsoft.TeamFoundation.Identity;S-1-9-1551374245-1204400969-2402986413-2179408616-0-0-0-0-3",
    "role": 1
  }
]
```

#### Sample response

```json
{
  "count": 2,
  "value": [
    {
      "role": "none",
      "identityDescriptor": "Microsoft.IdentityModel.Claims.ClaimsIdentity;00000030-0000-8888-8000-000000000000@2c895908-04e0-4952-89fd-54b0046d6288"
    },
    {
      "role": "none",
      "identityDescriptor": "Microsoft.TeamFoundation.Identity;S-1-9-1551374245-1204400969-2402986413-2179408616-0-0-0-0-1"
    }
  ]
}
```
