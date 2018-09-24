---
title: Policy Configurations | REST API Reference for Team Foundation Server
description: Work with policy configurations programmatically using the REST APIs for Team Foundation Server.
ms.assetid: ddcf1e33-29c3-42b0-ae44-673643e07e38
ms.prod: devops
ms.technology: devops-ecosystem
monikerRange: '>= tfs-2013 < vsts'
ms.manager: douge
ms.topic: article
ms.author: elbatk
author: elbatk
ms.date: 08/04/2016
---

# Policy configurations
[!INCLUDE [API_version](../_data/version2-preview1.md)]

[!INCLUDE [disclaimer](../_data/disclaimer.md)]

[!INCLUDE [GET_STARTED](../_data/get-started.md)]

## Get a list of policy configurations

```no-highlight
GET https://{instance}/defaultcollection/{project}/_apis/policy/configurations?api-version={version}[&$top={top}&$skip={skip}]
```

| Parameter     | Type    | Default | Notes
|:--------------|:--------|:--------|:--------------------------------------------------------------------------------------------------------------------
| URL
| instance      | string  |         | TFS server name ({server:port}).
| project       | string  |         | Name or ID of the [project](../tfs/projects.md) that contains the policies.
| Query
| api-version   | string  |         | [Version](../../concepts/rest-api-versioning.md) of the API to use.
| $top          | integer | 100     | Number of policy configurations to return.
| $skip         | integer | 0       | Number of policy configurations to skip.

[!code-REST [GetConfigurationsExample](./_data/configurations/GET__policy_configurations.json)]

### A page at a time

[!code-REST [GetConfigurationsPagedExample](./_data/configurations/GET__policy_configurations__top-_top___skip-_skip_.json)]

## Get a policy configuration

```no-highlight
GET https://{instance}/defaultcollection/{project}/_apis/policy/configurations/{id}?api-version={version}
```

| Parameter     | Type    | Notes
|:--------------|:--------|:----------------------------------------------------------------------------------------------------------------------------
| URL
| instance      | string  | TFS server name ({server:port}).
| project       | string  | Name or ID of the [project](../tfs/projects.md) that contains the policies.
| id            | integer | ID of the policy configuration.
| Query
| api-version   | string  | [Version](../../concepts/rest-api-versioning.md) of the API to use.

[!code-REST [GetOneConfigurationExample](./_data/configurations/GET__policy_configurations__configurationId_.json)]

## Get a list of historical revisions

```no-highlight
GET https://{instance}/defaultcollection/{project}/_apis/policy/configurations/{id}/revisions?api-version={version}[&$top={top}&$skip={skip}]
```

| Parameter     | Type    | Default | Notes
|:--------------|:--------|:--------|:--------------------------------------------------------------------------------------------------------------------
| URL
| instance      | string  |         | TFS server name ({server:port}).
| project       | string  |         | Name or ID of the [project](../tfs/projects.md) that contains the policies.
| id            | integer |         | ID of the policy configuration.
| Query
| api-version   | string  |         | [Version](../../concepts/rest-api-versioning.md) of the API to use.
| $top          | integer | 100     | Number of policy configurations to return.
| $skip         | integer | 0       | Number of policy configurations to skip.

[!code-REST [GetRevisionsExample](./_data/configurations/GET__policy_configurations__configurationId__revisions.json)]

### A page at a time

[!code-REST [GetRevisionsPagedExample](./_data/configurations/GET__policy_configurations__configurationId__revisions__top-_top___skip-_skip_.json)]

## Get a specific historical revision 

```no-highlight
GET https://{instance}/defaultcollection/{project}/_apis/policy/configurations/{id}/revisions/{revision}?api-version={version}
```

| Parameter     | Type    | Notes
|:--------------|:--------|:----------------------------------------------------------------------------------------------------------------------------
| URL
| instance      | string  | TFS server name ({server:port}).
| project       | string  | Name or ID of the [project](../tfs/projects.md) that contains the policies.
| id            | integer | ID of the policy configuration.
| revision      | integer | ID of the specific revision of the configuration
| Query
| api-version   | string  | [Version](../../concepts/rest-api-versioning.md) of the API to use.

[!code-REST [GetOneRevisionExample](./_data/configurations/GET__policy_configurations__configurationId__revisions__configurationRevision_.json)]

## Create a policy configuration

```no-highlight
POST https://{instance}/defaultcollection/{project}/_apis/policy/configurations?api-version={version}
```
```json
{
   "isEnabled": {bool},
   "isBlocking": {bool},
   "type": {
      "id": {guid}
   },
   "settings": {object}
}
```

| Parameter   | Type        | Notes
|:------------|:------------|:--------------------------------------------------------------------------------------------------------------------------
| URL
| instance    | string      | TFS server name ({server:port}).
| project     | string      | Name or ID of the [project](../tfs/projects.md) that contains the policies.
| Query
| api-version | string      | [Version](../../concepts/rest-api-versioning.md) of the API to use.
| **Body**
| isEnabled   | bool        | If `true`, the policy is initially enabled.
| isBlocking  | bool        | If `false`, the policy will not block artifacts from being committed even if the policy rejects the artifact.
| type.id     | guid        | ID of the [type](./types.md) of policy to create.
| settings    | JSON object | Object containing settings for the policy. [Format varies by type](./settings.md)

[!code-REST [CreateConfigurationExample](./_data/configurations/POST__policy_configurations.json)]

## Update a policy configuration

```no-highlight
PUT https://{instance}/defaultcollection/{project}/_apis/policy/configurations/{id}?api-version={version}
```
```json
{
   "isEnabled": {bool},
   "isBlocking": {bool},
   "type": {
      "id": {guid}
   },
   "settings": {object}
}
```

| Parameter   | Type        | Notes
|:------------|:------------|:--------------------------------------------------------------------------------------------------------------------------
| URL
| instance    | string      | TFS server name ({server:port}).
| project     | string      | Name or ID of the [project](../tfs/projects.md) that contains the policies.
| id          | integer     | ID of the policy configuration.
| Query
| api-version | string      | [Version](../../concepts/rest-api-versioning.md) of the API to use.
| **Body**
| isEnabled   | bool        | If `true`, the policy is enabled.
| isBlocking  | bool        | If `false`, the policy will not block artifacts from being committed even if the policy rejects the artifact.
| type.id     | guid        | ID of the [type](./types.md) of policy. This must be the same as the configuration's existing type.
| settings    | JSON object | Object containing settings for the policy. [Format varies by type](./settings.md)

[!code-REST [UpdateConfigurationExample](./_data/configurations/PUT__policy_configurations__configurationId_.json)]

## Delete a policy configuration

```no-highlight
DELETE https://{instance}/defaultcollection/{project}/_apis/policy/configurations/{id}?api-version={version}
```

| Parameter   | Type        | Notes
|:------------|:------------|:--------------------------------------------------------------------------------------------------------------------------
| URL
| instance    | string      | TFS server name ({server:port}).
| project     | string      | Name or ID of the [project](../tfs/projects.md) that contains the policies.
| id          | integer     | ID of the policy configuration.
| Query
| api-version | string      | [Version](../../concepts/rest-api-versioning.md) of the API to use.

[!code-REST [DeleteConfigurationExample](./_data/configurations/DELETE__policy_configurations__configurationId_.json)]
