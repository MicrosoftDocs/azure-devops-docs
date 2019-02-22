---
ms.prod: devops
ms.technology: devops-ecosystem
monikerRange: '>= tfs-2015 < azure-devops'
title: Permissions and security with VSTS | REST API Reference for Team Foundation Server
description: Permissions reference fpr integrating with VSTS
ms.assetid: ede350bd-bdf7-4360-90ac-e5be3fe24266
ms.manager: jillfra
ms.topic: article
ms.author: elbatk
author: elbatk
ms.date: 03/15/2017
---

# Permissions

[!INCLUDE [azure-devops](../_data/azure-devops-message.md)]

[!INCLUDE [API_version](../_data/version.md)]

## Evaluate permissions
<a name="evaluate" />

Use this API to evaluate whether the calling identity has the requested permissions to a token or set of tokens.
If the alwaysAllowAdministrators flag is set, then members of the Administrators group for the service host containing the namespace (i.e. 'Project Collection Administrators' or 'Organization Administrators') will always pass the security check.

### Evaluate permissions on a single token

```no-highlight
GET https://{instance}/_apis/permissions/{securitynamespace}/{permissions}/?api-version={version}&token={string}&alwaysAllowAdministrators={bool}
```

| Parameter         | Type     | Default | Notes
|:------------------|:---------|:--------|:-------------------------------------------------------------------------------------------------------------
| URL		         
| instance          | string   |         | TFS server name ({server:port}).
| securitynamespace | guid     |         | ID of the security namespace.
| permissions       | int      |         | The permission bits to demand.
| Query 
| api-version       | string   |         | [Version](../../concepts/rest-api-versioning.md) of the API to use.
| token             | string   |         | The token on which to check permissions.
| alwaysAllowAdministrators | bool     |         | True if members of the Administrators group should always pass the security check.

#### AlwaysAllowAdministrators set to false

#### Sample request

```
GET https://mytfsserver/DefaultCollection/_apis/permissions/5a27515b-ccd7-42c9-84f1-54c998f03866/8/?token=token1&alwaysAllowAdministrators=False&api-version=1.0
```


#### AlwaysAllowAdministrators set to true

#### Sample request

```
GET https://mytfsserver/DefaultCollection/_apis/permissions/5a27515b-ccd7-42c9-84f1-54c998f03866/8/?token=token1&alwaysAllowAdministrators=True&api-version=1.0
```

#### Sample response

```json
true
```


### Evaluate permissions on a list of tokens

Permissions evaluation on a list of tokens does not aggregate the results, nor does it short-circuit if one of the evaluations yields a false result.

There are two versions of this API. 

#### Plural version

This version of the API is just the plural version of permission check on a single token. 

```no-highlight
GET https://{instance}/_apis/permissions/{securitynamespace}/{permissions}/?api-version={version}&tokens={string}&alwaysAllowAdministrators={bool}&delimiter={char}
```

| Parameter         | Type     | Default | Notes
|:------------------|:---------|:--------|:-------------------------------------------------------------------------------------------------------------
| URL		         
| instance          | string   |         | TFS server name ({server:port}).
| securitynamespace | guid     |         | ID of the security namespace.
| permissions       | int      |         | The permission bits to demand.
| Query 
| api-version       | string   |         | [Version](../../concepts/rest-api-versioning.md) of the API to use. Works with Version 2.2 and above.
| tokens            | string   |         | String containing a list of tokens (separated by the delimiter) on which to check permissions.
| alwaysAllowAdministrators | bool     |         | True if members of the Administrators group should always pass the security check.
| delimiter         | char     | ,       | The delimiter to use when encoding the list of tokens on the wire as a single string.

#### Sample request

```
GET https://mytfsserver/DefaultCollection/_apis/permissions/5a27515b-ccd7-42c9-84f1-54c998f03866/8/?api-version=2.2&tokens=token1,token2,token3&alwaysAllowAdministrators=False
```

#### Sample response

```json
{
  "count": 3,
  "value": [
    false,
    false,
    true
  ]
}
```


#### Batch version

This version of the API performs a batch of "has permission" checks. 

```no-highlight
POST https://{instance}/_apis/security/permissionevaluationbatch/?api-version={version}
```

| Parameter         | Type     | Default | Notes
|:------------------|:---------|:--------|:-------------------------------------------------------------------------------------------------------------
| URL		         
| instance          | string   |         | TFS server name ({server:port}).
| Query
| api-version       | string   |         | [Version](../../concepts/rest-api-versioning.md) of the API to use. Works with Version 3.0 and above.
| Body 
| alwaysAllowAdministrators | bool     |         | True if members of the Administrators group should always pass the security check.
| evaluations       | PermissionEvaluation[] |         | Array of evaluation requests.

Each PermissionEvaluation contains:

Parameter           | Type     | Notes
|:------------------|:---------|:-------------------------------------------------------------------------------------------------------------
| securitynamespace | guid     | Security namespace identifier for this permission evaluation.
| token             | string   | Security namespace-specific token for this permission evaluation.
| permissions       | int      | The permission bits to demand.
| value             | bool     | [Out] The result of the security evaluation.

#### Sample request

```
POST https://mytfsserver/DefaultCollection/_apis/security/permissionevaluationbatch/?api-version=3.0-preview
```
```json
{
  "alwaysallowadministrators": false,
  "evaluations": [
    {
      "securitynamespaceid": "5a27515b-ccd7-42c9-84f1-54c998f03866",
      "token": "token1",
      "permissions": 8
    },
    {
      "securitynamespaceid": "5a27515b-ccd7-42c9-84f1-54c998f03866",
      "token": "token2",
      "permissions": 8
    },
    {
      "securitynamespaceid": "5a27515b-ccd7-42c9-84f1-54c998f03866",
      "token": "token3",
      "permissions": 8
    }
  ]
}
```

#### Sample response

```json
{
  "evaluations": [
    {
      "securityNamespaceId": "5a27515b-ccd7-42c9-84f1-54c998f03866",
      "token": "token1",
      "permissions": 8,
      "value": false
    },
    {
      "securityNamespaceId": "5a27515b-ccd7-42c9-84f1-54c998f03866",
      "token": "token2",
      "permissions": 8,
      "value": false
    },
    {
      "securityNamespaceId": "5a27515b-ccd7-42c9-84f1-54c998f03866",
      "token": "token3",
      "permissions": 8,
      "value": true
    }
  ]
}
```


## Remove permissions
<a name="remove" />

Removes the specified bits from the allow and deny values for the ACE with the given identity descriptor in the ACL for the given token. 
If no ACE for the given identity descriptor is found, no change is made.

```no-highlight
DELETE https://{instance}/_apis/permissions/{securitynamespace}/{permissions}/?token={string}&descriptor={IdentityDescriptor}
```

| Parameter         | Type     | Default | Notes
|:------------------|:---------|:--------|:-------------------------------------------------------------------------------------------------------------
| URL		         
| instance          | string   |         | TFS server name ({server:port}).
| securitynamespace | guid     |         | ID of the security namespace.
| permissions       | int      |         | The permission bits to remove from the ACE's allow and deny bitmasks.
| Query 
| token             | string   |         | The token whose ACL contains the ACE to be modified.
| descriptor        | IdentityDescriptor |         | The descriptor of the ACE to be modified.

#### Sample request

```
DELETE https://mytfsserver/DefaultCollection/_apis/permissions/5a27515b-ccd7-42c9-84f1-54c998f03866/4/?token=token1&descriptor=Microsoft.TeamFoundation.Identity;S-1-9-1551374245-1204400969-2402986413-2179408616-0-0-0-0-1&api-version=1.0
```

#### Sample response

```json
{
  "descriptor": "Microsoft.TeamFoundation.Identity;S-1-9-1551374245-1204400969-2402986413-2179408616-0-0-0-0-1",
  "allow": 1,
  "deny": 0
}
```
