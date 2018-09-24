---
ms.prod: devops
ms.technology: devops-ecosystem
monikerRange: '>= tfs-2013 < vsts'
title: Security namespace reference | REST API Reference for Team Foundation Server
description: Security namespace reference fpr integrating with VSTS
ms.assetid: c5b4c4b9-8d80-43a4-92c5-8ecdd335ac49
ms.manager: douge
ms.topic: article
ms.author: elbatk
author: elbatk
ms.date: 03/15/2017
---

# Security namespaces
[!INCLUDE [API_version](../_data/version.md)]

Security namespaces are used to store [access control lists](./acls.md) (ACLs) on [tokens](./tokens.md) (arbitrary strings).

### Local vs. remote
* Security namespaces may have their data mastered in one microservice, but still be visible in other microservices.
* If a security namespace's data is mastered in microservice X, it is said to be **local** to that microservice. Otherwise, it is said to be **remote**.

## Get a list of security namespaces
<a name="getnamespaces" />

```no-highlight
GET https://{instance}/_apis/securitynamespaces/00000000-0000-0000-0000-000000000000/?api-version={version}[&localonly={bool}]
```

| Parameter         | Type    | Default | Notes
|:------------------|:--------|:--------|:-------------------------------------------------------------------------------------------------------------
| URL		        |		  |			|
| instance          | string  |         | TFS server name ({server:port}).
| Query
| api-version       | string  |         | [Version](../../concepts/rest-api-versioning.md) of the API to use.
| localonly         | bool    | false   | If true, retrieve only local security namespaces.

[!code-REST [GET_securitynamespaces](./_data/GET__securitynamespaces_.json)]

## Get a security namespace

```no-highlight
GET https://{instance}/_apis/securitynamespaces/{securitynamespace}/?api-version={version}[&localonly={bool}]
```

| Parameter         | Type    | Default | Notes
|:------------------|:--------|:--------|:-------------------------------------------------------------------------------------------------------------
| URL		        |		  |			|
| instance          | string  |         | TFS server name ({server:port}).
| securitynamespace | guid    |         | ID of the security namespace. 
| Query
| api-version       | string  |         | [Version](../../concepts/rest-api-versioning.md) of the API to use.
| localonly         | bool    | false   | If true, retrieve only local security namespaces.

[!code-REST [GET_securitynamespace](./_data/GET__securitynamespaces__securityNamespaceId__.json)]

## Set inherit flag 
<a name="inheritflag" />

Use this to update the inheritance flag on the ACL for the provided token. This action has no meaning in flat security namespaces. The default value of the inheritance flag is true.

```no-highlight
POST https://{instance}/_apis/securitynamespaces/{securitynamespace}/?api-version={version}
```

| Parameter         | Type    | Default | Notes
|:------------------|:--------|:--------|:-------------------------------------------------------------------------------------------------------------
| URL		
| instance          | string  |         | TFS server name ({server:port}).
| securitynamespace | guid    |         | ID of the security namespace. 
| Query           
| api-version       | string  |         | [Version](../../concepts/rest-api-versioning.md) of the API to use.
| Body
| token             | string  |         | The token whose ACL's inherit flag should be set.
| inherit           | bool    |         | New state for the ACL's inherit flag.

[!code-REST [POST_inheritflag](./_data/POST__securitynamespaces__securityNamespaceId__.json)]