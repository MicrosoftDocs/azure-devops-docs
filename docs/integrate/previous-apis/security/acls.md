---
ms.prod: devops
ms.technology: devops-ecosystem
monikerRange: '>= tfs-2013 < vsts'
title: Access control lists (ACLs) | REST API Reference for Team Foundation Server
description: Access control lists reference for integrating with VSTS
ms.assetid: 79447872-9742-42c5-9d4a-2e291df06c85
ms.manager: douge
ms.topic: article
ms.author: elbatk
author: elbatk
ms.date: 03/15/2017
---

# Access Control Lists (ACLs)
[!INCLUDE [API_version](../_data/version.md)]

## Add a list of access control lists
<a name="add" />

Use this API to add or update ACLs in a security namespace. All data that currently exists for the ACLs supplied will be overwritten. 

```no-highlight
POST https://{instance}/_apis/accesscontrollists/{securitynamespace}/?api-version={version}
```

| Parameter         | Type    | Default | Notes
|:------------------|:--------|:--------|:-------------------------------------------------------------------------------------------------------------
| URL		
| instance          | string  |         | TFS server name ({server:port}).
| securitynamespace | guid    |         | ID of the security namespace. 
| Query
| api-version       | string  |         | [Version](../../concepts/rest-api-versioning.md) of the API to use.
| Body
| acls              | Json Object |         | A Json Object containing the ACLs to set. 

[!code-REST [POST_acls](./_data/POST__accesscontrollists__securityNamespaceId__.json)]

## Get a list of access control lists
<a name="get" />

```no-highlight
GET https://{instance}/_apis/accesscontrollists/{securitynamespace}/?api-version={version}[&token={string}&descriptors={string}&includeExtendedInfo={bool}&recurse={bool}]
```

| Parameter         | Type    | Default | Notes
|:------------------|:--------|:--------|:-------------------------------------------------------------------------------------------------------------
| URL		         
| instance          | string  |         | TFS server name ({server:port}).
| securitynamespace | guid    |         | ID of the security namespace.
| Query 
| api-version       | string  |         | [Version](../../concepts/rest-api-versioning.md) of the API to use.
| token             | string  | null    | The token whose ACL should be retrieved; null for no filter. 
| descriptors	    | string  |         | An optional filter string containing a list of identity descriptors separated by ',' whose ACEs should be retrieved. If this is left null, entire ACLs will be returned.
| includeExtendedInfo | bool    | false   | True if the returned ACLs should have their ACEs' ExtendedInfo properties populated; false otherwise.
| recurse           | bool    | false   | If true and this is a hierarchical namespace, child ACLs of the specified token will be additionally returned.

### All ACLs in a security namespace

All ACLs in the security namespace will be retrieved if no optional parameters are provided. 

[!code-REST [GET_acls](./_data/GET__accesscontrollists__securityNamespaceId__.json)]

### Filter by token

[!code-REST [GET_acls_token](./_data/GET__accesscontrollists__securityNamespaceId___token-_existingToken_.json)]

### Filter by IdentityDescriptors

[!code-REST [GET_acls_descriptors](./_data/GET__accesscontrollists__securityNamespaceId___descriptors-_descriptor1_.json)]

### Include ExtendedInfo properties

[!code-REST [GET_acls_token_extendedinfo](./_data/GET__accesscontrollists__securityNamespaceId___token-_existingToken__includeExtendedInfo-True.json)]

### Include child ACLs

[!code-REST [GET_acls_token_recurse](./_data/GET__accesscontrollists__securityNamespaceId___token-_existingToken__includeExtendedInfo-False_recurse-True.json)]

## Remove a list of access control lists
<a name="remove" />

Use this API to remove the ACLs belonging to the provided tokens from a security namespace. If the recurse flag is set, then any child ACLs will be removed also. 
API returns true if the ACLs are successfully removed. 

```no-highlight
DELETE https://{instance}/_apis/accesscontrollists/{securitynamespace}/?api-version={version}&tokens={string}&recurse={bool}
```

| Parameter         | Type    | Default | Notes
|:------------------|:--------|:--------|:-------------------------------------------------------------------------------------------------------------
| URL		         
| instance          | string  |         | TFS server name ({server:port}).
| securitynamespace | guid    |         | ID of the security namespace.
| Query 
| api-version       | string  |         | [Version](../../concepts/rest-api-versioning.md) of the API to use.
| tokens            | string  |         | String containing a list of tokens separated by ',' whose ACLs should be removed.
| recurse           | bool    |         | If true and this is a hierarchical namespace, then any child ACLs will also be removed.

[!code-REST [DELETE_acls](./_data/DELETE__accesscontrollists__securityNamespaceId___tokens-_newToken1_,_newToken2__recurse-False.json)]
