---
title: Permissions | REST API Reference for VSTS
description: Work with feeds programmatically using the REST APIs for VSTS .
ms.assetid: 72a0f637-2b25-4532-a1d3-1e4d446b3aba
ms.manager: douge
ms.date: 09/29/2016
ms.prod: devops
ms.technology: devops-ecosystem
monikerRange: '>= tfs-2013 < vsts'
ms.topic: article
ms.author: elbatk
author: elbatk
ms.date: 08/17/2016
---

# Permissions
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

[!code-REST [GET__packaging_feeds__feedName_permissions_json](./_data/permissions/GET__packaging_feeds__feedName__permissions.json)]

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

[!code-REST [PATCH__packaging_feeds__feedName_permissions_json](./_data/permissions/PATCH__packaging_feeds__feedName__permissions.json)]

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

[!code-REST [GET__packaging_globalpermissions_json](./_data/permissions/GET__packaging_globalpermissions.json)]

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

[!code-REST [PATCH__packaging_globalpermissions_json](./_data/permissions/PATCH__packaging_globalpermissions.json)]

## Grant and remove permissions to 'Everyone'
In order to allow or deny everyone access to create feeds, you'll need to use the special identityDescriptor that represents the Everyone group:
```
Microsoft.TeamFoundation.Identity;S-1-9-1551374245-1204400969-2402986413-2179408616-0-0-0-0-3
```
The previous sample request would grant permissions to everyone. Use a request similar to the following to remove permission from Everyone, so only Project Collection Administrators are able to create feeds:

[!code-REST [PATCH__packaging_globalpermissions_json2](./_data/permissions/PATCH__packaging_globalpermissions2.json)]