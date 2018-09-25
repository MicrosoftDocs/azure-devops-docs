---
title: Release Definitions | VSTS REST API Reference
description: Get release definitions programmatically using the REST APIs for VSTS.
ms.assetid: e61ec615-19fb-4ce9-a704-5b5e27221d5e
ms.prod: devops
ms.technology: devops-ecosystem
monikerRange: '>= tfs-2013 < vsts'
ms.manager: douge
ms.topic: article
ms.author: elbatk
author: elbatk
ms.date: 08/04/2016
---

#Release definitions
[!INCLUDE [API_version](../_data/version3-preview1.md)]

**On-premises use** : An earlier, and slightly different version of the Release Management API is available in Team Foundation Server 2015 Update 2. To use this earlier version, you must specify an API version of **2.2-preview.1**.   

## Get a list of release definitions

```no-highlight
GET https://{account}.vsrm.visualstudio.com/defaultcollection/{project}/_apis/release/definitions?api-version={version}[&$expand={enum}]
```

| Parameter     | Type   | Notes
|:--------------|:-------|:------------
| URL
| account       | string | Your VSTS organization.
| project       | string | [Project](../tfs/projects.md) ID or name.
| Query
| api-version   | string | [Version](../../concepts/rest-api-versioning.md) of the API to use.
| $expand		| enum {<br/>&nbsp;&nbsp;environments,<br/>&nbsp;&nbsp;artifacts,<br/>&nbsp;&nbsp;none<br/>} | The property that should be expanded in the list of Release Definition.

[!code-REST [GET__release_definitions_json](./_data/definitions/GET__release_definitions.json)]

### With environments details expanded
[!code-REST [GET__release_definitions__expand-environments_json](./_data/definitions/GET__release_definitions__expand-environments.json)]

### With artifacts details expanded
[!code-REST [GET__release_definitions__expand-artifacts_json](./_data/definitions/GET__release_definitions__expand-artifacts.json)]

## Get a release definition

```no-highlight
GET https://{account}.vsrm.visualstudio.com/defaultcollection/{project}/_apis/release/definitions/{definitionid}?api-version={version}
```

| Parameter    | Type   | Notes
|:-------------|:-------|:------------
| URL
| account      | string | Your VSTS organization.
| project      | string | [Project](../tfs/projects.md) ID or name.
| definitionId | int    | ID of the release definition.
| Query
| api-version  | string | [Version](../../concepts/rest-api-versioning.md) of the API to use.

[!code-REST [GET__release_definitions__definitionIdExisting__json](./_data/definitions/GET__release_definitions__definitionIdExisting_.json)]

## Create a release definition

```no-highlight
POST https://{account}.vsrm.visualstudio.com/defaultcollection/{project}/_apis/release/definitions?api-version={version}
```

| Parameter    | Type   | Notes
|:-------------|:-------|:------------
| URL
| account      | string | Your VSTS organization.
| project      | string | [Project](../tfs/projects.md) ID or name.
| Query
| api-version  | string | [Version](../../concepts/rest-api-versioning.md) of the API to use.

[!code-REST [POST__release_definitions_json](./_data/definitions/POST__release_definitions.json)]

## Update a release definition

```no-highlight
PUT https://{account}.vsrm.visualstudio.com/defaultcollection/{project}/_apis/release/definitions/{definitionid}?api-version={version}
```

[!code-REST [PUT__release_definitions__definitionId__json](./_data/definitions/PUT__release_definitions__definitionId_.json)]

## Delete a release definition

```no-highlight
DELETE https://{account}.vsrm.visualstudio.com/defaultcollection/{project}/_apis/release/definitions/{definitionid}?api-version={version}
```

| Parameter     | Type   | Notes
|:--------------|:-------|:------------
| URL
| account       | string | Your VSTS organization.
| project       | string | [Project](../tfs/projects.md) ID or name.
| definitionId  | int    | ID of the release definition.
| Query
| api-version   | string | [Version](../../concepts/rest-api-versioning.md) of the API to use.

[!code-REST [DELETE__release_definitions__definitionId_](./_data/definitions/DELETE__release_definitions__definitionId_.json)]

## Get revision history for a release definition

```no-highlight
GET https://{account}.vsrm.visualstudio.com/defaultcollection/{project}/_apis/release/definitions/{definitionid}/revisions?api-version={version}
```

| Parameter     | Type   | Notes
|:--------------|:-------|:------------
| URL
| account       | string | Your VSTS organization.
| project       | string | [Project](../tfs/projects.md) ID or name.
| definitionId  | int    | ID of the release definition.
| Query
| api-version   | string | [Version](../../concepts/rest-api-versioning.md) of the API to use.

[!code-REST [GET__release_definitions__definitionId__revisions_json](./_data/definitions/GET__release_definitions__definitionId__revisions.json)]

## Get a particular revision history

```no-highlight
GET https://{account}.vsrm.visualstudio.com/defaultcollection/{project}/_apis/release/definitions/{definitionid}/revisions/{revisionid}?api-version={version}
```

| Parameter     | Type   | Notes
|:--------------|:-------|:------------
| URL
| account       | string | Your VSTS organization.
| project       | string | [Project](../tfs/projects.md) ID or name.
| definitionId  | int    | ID of the release definition.
| revisionId  | int    | ID of the revision
| Query
| api-version   | string | [Version](../../concepts/rest-api-versioning.md) of the API to use.

[!code-REST [GET__release_definitions__definitionId__revisions_2_json](./_data/definitions/GET__release_definitions__definitionId__revisions_2.json)]