---
ms.prod: devops
ms.technology: devops-ecosystem
monikerRange: '>= tfs-2013 < vsts'
title: Access control entries (ACEs) | REST API Reference for Team Foundation Server
description: Access control entries reference for integrating with VSTS
ms.assetid: ca6693b0-1982-4f8b-9b25-41b903fad3ca
ms.manager: douge
ms.topic: article
ms.author: elbatk
author: elbatk
ms.date: 03/15/2017
---

# Access Control Entries (ACEs)
[!INCLUDE [API_version](../_data/version.md)]

## Add a list of access control entries
<a name="add" />

Use this API to add or update ACEs in the ACL for the provided token. 
In the case of a collision (by identity descriptor) with an existing ACE in the ACL, the "merge" parameter determines the behavior. 
If set, the existing ACE has its allow and deny merged with the incoming ACE's allow and deny. If unset, the existing ACE is displaced.

```no-highlight
POST https://{instance}/_apis/accesscontrolentries/{securitynamespace}/?api-version={version}
```

| Parameter         | Type     | Default | Notes
|:------------------|:---------|:--------|:-------------------------------------------------------------------------------------------------------------
| URL		         
| instance          | string   |         | TFS server name ({server:port}).
| securitynamespace | guid     |         | ID of the security namespace.
| Query
| api-version       | string   |         | [Version](../../concepts/rest-api-versioning.md) of the API to use.
| Body 
| token             | string   |         | The token whose ACL should be modified. 
| aces              | AccessControlEntry[] |         | The ACEs to set. 
| merge		        | bool     |         | True to merge permission bits in case of a conflicting ACE; false to overwrite


### No merge

The allow bit is set to 5 before the update. 

[!code-REST [POST_aces_replace](./_data/POST__accesscontrolentries__securityNamespaceId__.json)]

### With merge

The allow bit is set to 5 before the update. 

[!code-REST [POST_aces_merge](./_data/POST__accesscontrolentries__securityNamespaceId__merge.json)]

## Remove a list of access control entries
<a name="remove" />

Use this API to remove the provided ACEs from the ACL belonging to the provided token.

```no-highlight
DELETE https://{instance}/_apis/accesscontrolentries/{securitynamespace}/?api-version={version}&token={string}[&descriptors={string}]
```

| Parameter         | Type     | Default | Notes
|:------------------|:---------|:--------|:-------------------------------------------------------------------------------------------------------------
| URL		         
| instance          | string   |         | TFS server name ({server:port}).
| securitynamespace | guid     |         | ID of the security namespace.
| Query 
| api-version       | string   |         | [Version](../../concepts/rest-api-versioning.md) of the API to use.
| token             | string   |         | The token whose ACL should be modified. 
| descriptors       | string   |         | String containing a list of identity descriptors separated by ',' whose entries should be removed.

### Remove ACEs

Any ACEs whose descriptor is in the provided descriptors list will be removed from the ACL.

[!code-REST [DELETE_aces_descriptors](./_data/DELETE__accesscontrolentries__securityNamespaceId___token-_token__descriptors-_descriptor1_,_descriptor2_.json)]
