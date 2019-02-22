---
ms.prod: devops
ms.technology: devops-ecosystem
monikerRange: '>= tfs-2015 < azure-devops'
title: Access control lists (ACLs) | REST API Reference for Team Foundation Server
description: Access control lists reference for integrating with VSTS
ms.assetid: 79447872-9742-42c5-9d4a-2e291df06c85
ms.manager: jillfra
ms.topic: article
ms.author: elbatk
author: elbatk
ms.date: 03/15/2017
---

# Access Control Lists (ACLs)

[!INCLUDE [azure-devops](../_data/azure-devops-message.md)]

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

#### Sample request

```
POST https://mytfsserver/DefaultCollection/_apis/accesscontrollists/5a27515b-ccd7-42c9-84f1-54c998f03866/?api-version=1.0
```
```json
{
  "value": [
    {
      "inheritPermissions": false,
      "token": "token1",
      "acesDictionary": {
        "Microsoft.TeamFoundation.Identity;S-1-9-1551374245-1204400969-2402986413-2179408616-0-0-0-0-1": {
          "descriptor": "Microsoft.TeamFoundation.Identity;S-1-9-1551374245-1204400969-2402986413-2179408616-0-0-0-0-1",
          "allow": 31,
          "deny": 0
        }
      }
    },
    {
      "inheritPermissions": false,
      "token": "token2",
      "acesDictionary": {
        "Microsoft.TeamFoundation.Identity;S-1-9-1551374245-1204400969-2402986413-2179408616-0-0-0-0-1": {
          "descriptor": "Microsoft.TeamFoundation.Identity;S-1-9-1551374245-1204400969-2402986413-2179408616-0-0-0-0-1",
          "allow": 1,
          "deny": 0
        },
        "Microsoft.TeamFoundation.Identity;S-1-9-1551374245-1204400969-2402986413-2179408616-0-0-0-0-2": {
          "descriptor": "Microsoft.TeamFoundation.Identity;S-1-9-1551374245-1204400969-2402986413-2179408616-0-0-0-0-2",
          "allow": 8,
          "deny": 0
        }
      }
    }
  ]
}
```


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

#### Sample request

```
GET https://mytfsserver/DefaultCollection/_apis/accesscontrollists/5a27515b-ccd7-42c9-84f1-54c998f03866/?api-version=1.0
```

#### Sample response

```json
{
  "count": 5,
  "value": [
    {
      "inheritPermissions": true,
      "token": "1ba198c0-7a12-46ed-a96b-f4e77554c6d4",
      "acesDictionary": {
        "Microsoft.TeamFoundation.Identity;S-1-9-1551374245-1204400969-2402986413-2179408616-0-0-0-0-1": {
          "descriptor": "Microsoft.TeamFoundation.Identity;S-1-9-1551374245-1204400969-2402986413-2179408616-0-0-0-0-1",
          "allow": 31,
          "deny": 0
        },
        "Microsoft.TeamFoundation.Identity;S-1-9-1551374245-1204400969-2402986413-2179408616-0-0-0-0-2": {
          "descriptor": "Microsoft.TeamFoundation.Identity;S-1-9-1551374245-1204400969-2402986413-2179408616-0-0-0-0-2",
          "allow": 31,
          "deny": 0
        },
        "Microsoft.TeamFoundation.Identity;S-1-9-1551374245-1204400969-2402986413-2179408616-0-0-0-0-3": {
          "descriptor": "Microsoft.TeamFoundation.Identity;S-1-9-1551374245-1204400969-2402986413-2179408616-0-0-0-0-3",
          "allow": 1,
          "deny": 0
        }
      }
    },
    {
      "inheritPermissions": true,
      "token": "1ba198c0-7a12-46ed-a96b-f4e77554c6d4\\846cd9c3-56ba-4158-b6d2-23a3a73244e5",
      "acesDictionary": {
        "Microsoft.TeamFoundation.Identity;S-1-9-1551374245-1204400969-2402986413-2179408616-0-0-0-1-2": {
          "descriptor": "Microsoft.TeamFoundation.Identity;S-1-9-1551374245-1204400969-2402986413-2179408616-0-0-0-1-2",
          "allow": 8,
          "deny": 0
        }
      }
    },
    {
      "inheritPermissions": true,
      "token": "28b9bb88-a513-4115-9b5c-8be39ce1f1ba",
      "acesDictionary": {
        "Microsoft.TeamFoundation.Identity;S-1-9-1551374245-2294004008-329585985-2606533603-2632053178-0-0-0-0-1": {
          "descriptor": "Microsoft.TeamFoundation.Identity;S-1-9-1551374245-2294004008-329585985-2606533603-2632053178-0-0-0-0-1",
          "allow": 31,
          "deny": 0
        },
        "Microsoft.TeamFoundation.Identity;S-1-9-1551374245-2294004008-329585985-2606533603-2632053178-0-0-0-0-2": {
          "descriptor": "Microsoft.TeamFoundation.Identity;S-1-9-1551374245-2294004008-329585985-2606533603-2632053178-0-0-0-0-2",
          "allow": 31,
          "deny": 0
        },
        "Microsoft.TeamFoundation.Identity;S-1-9-1551374245-2294004008-329585985-2606533603-2632053178-0-0-0-0-3": {
          "descriptor": "Microsoft.TeamFoundation.Identity;S-1-9-1551374245-2294004008-329585985-2606533603-2632053178-0-0-0-0-3",
          "allow": 1,
          "deny": 0
        }
      }
    },
    {
      "inheritPermissions": false,
      "token": "token1",
      "acesDictionary": {
        "Microsoft.TeamFoundation.Identity;S-1-9-1551374245-1204400969-2402986413-2179408616-0-0-0-0-1": {
          "descriptor": "Microsoft.TeamFoundation.Identity;S-1-9-1551374245-1204400969-2402986413-2179408616-0-0-0-0-1",
          "allow": 31,
          "deny": 0
        }
      }
    },
    {
      "inheritPermissions": false,
      "token": "token2",
      "acesDictionary": {
        "Microsoft.TeamFoundation.Identity;S-1-9-1551374245-1204400969-2402986413-2179408616-0-0-0-0-1": {
          "descriptor": "Microsoft.TeamFoundation.Identity;S-1-9-1551374245-1204400969-2402986413-2179408616-0-0-0-0-1",
          "allow": 1,
          "deny": 0
        },
        "Microsoft.TeamFoundation.Identity;S-1-9-1551374245-1204400969-2402986413-2179408616-0-0-0-0-2": {
          "descriptor": "Microsoft.TeamFoundation.Identity;S-1-9-1551374245-1204400969-2402986413-2179408616-0-0-0-0-2",
          "allow": 8,
          "deny": 0
        }
      }
    }
  ]
}
```


### Filter by token

#### Sample request

```
GET https://mytfsserver/DefaultCollection/_apis/accesscontrollists/5a27515b-ccd7-42c9-84f1-54c998f03866/?token=1ba198c0-7a12-46ed-a96b-f4e77554c6d4&api-version=1.0
```

#### Sample response

```json
{
  "count": 1,
  "value": [
    {
      "inheritPermissions": true,
      "token": "1ba198c0-7a12-46ed-a96b-f4e77554c6d4",
      "acesDictionary": {
        "Microsoft.TeamFoundation.Identity;S-1-9-1551374245-1204400969-2402986413-2179408616-0-0-0-0-1": {
          "descriptor": "Microsoft.TeamFoundation.Identity;S-1-9-1551374245-1204400969-2402986413-2179408616-0-0-0-0-1",
          "allow": 31,
          "deny": 0
        },
        "Microsoft.TeamFoundation.Identity;S-1-9-1551374245-1204400969-2402986413-2179408616-0-0-0-0-2": {
          "descriptor": "Microsoft.TeamFoundation.Identity;S-1-9-1551374245-1204400969-2402986413-2179408616-0-0-0-0-2",
          "allow": 31,
          "deny": 0
        },
        "Microsoft.TeamFoundation.Identity;S-1-9-1551374245-1204400969-2402986413-2179408616-0-0-0-0-3": {
          "descriptor": "Microsoft.TeamFoundation.Identity;S-1-9-1551374245-1204400969-2402986413-2179408616-0-0-0-0-3",
          "allow": 1,
          "deny": 0
        }
      }
    }
  ]
}
```


### Filter by IdentityDescriptors

#### Sample request

```
GET https://mytfsserver/DefaultCollection/_apis/accesscontrollists/5a27515b-ccd7-42c9-84f1-54c998f03866/?descriptors=Microsoft.TeamFoundation.Identity;S-1-9-1551374245-1204400969-2402986413-2179408616-0-0-0-0-1&api-version=1.0
```

#### Sample response

```json
{
  "count": 5,
  "value": [
    {
      "inheritPermissions": true,
      "token": "1ba198c0-7a12-46ed-a96b-f4e77554c6d4",
      "acesDictionary": {
        "Microsoft.TeamFoundation.Identity;S-1-9-1551374245-1204400969-2402986413-2179408616-0-0-0-0-1": {
          "descriptor": "Microsoft.TeamFoundation.Identity;S-1-9-1551374245-1204400969-2402986413-2179408616-0-0-0-0-1",
          "allow": 31,
          "deny": 0
        }
      }
    },
    {
      "inheritPermissions": true,
      "token": "1ba198c0-7a12-46ed-a96b-f4e77554c6d4\\846cd9c3-56ba-4158-b6d2-23a3a73244e5",
      "acesDictionary": {
        "Microsoft.TeamFoundation.Identity;S-1-9-1551374245-1204400969-2402986413-2179408616-0-0-0-0-1": {
          "descriptor": "Microsoft.TeamFoundation.Identity;S-1-9-1551374245-1204400969-2402986413-2179408616-0-0-0-0-1",
          "allow": 0,
          "deny": 0
        }
      }
    },
    {
      "inheritPermissions": true,
      "token": "28b9bb88-a513-4115-9b5c-8be39ce1f1ba",
      "acesDictionary": {
        "Microsoft.TeamFoundation.Identity;S-1-9-1551374245-1204400969-2402986413-2179408616-0-0-0-0-1": {
          "descriptor": "Microsoft.TeamFoundation.Identity;S-1-9-1551374245-1204400969-2402986413-2179408616-0-0-0-0-1",
          "allow": 0,
          "deny": 0
        }
      }
    },
    {
      "inheritPermissions": false,
      "token": "token1",
      "acesDictionary": {
        "Microsoft.TeamFoundation.Identity;S-1-9-1551374245-1204400969-2402986413-2179408616-0-0-0-0-1": {
          "descriptor": "Microsoft.TeamFoundation.Identity;S-1-9-1551374245-1204400969-2402986413-2179408616-0-0-0-0-1",
          "allow": 31,
          "deny": 0
        }
      }
    },
    {
      "inheritPermissions": false,
      "token": "token2",
      "acesDictionary": {
        "Microsoft.TeamFoundation.Identity;S-1-9-1551374245-1204400969-2402986413-2179408616-0-0-0-0-1": {
          "descriptor": "Microsoft.TeamFoundation.Identity;S-1-9-1551374245-1204400969-2402986413-2179408616-0-0-0-0-1",
          "allow": 1,
          "deny": 0
        }
      }
    }
  ]
}
```


### Include ExtendedInfo properties

#### Sample request

```
GET https://mytfsserver/DefaultCollection/_apis/accesscontrollists/5a27515b-ccd7-42c9-84f1-54c998f03866/?token=1ba198c0-7a12-46ed-a96b-f4e77554c6d4&includeExtendedInfo=True&api-version=1.0
```

#### Sample response

```json
{
  "count": 1,
  "value": [
    {
      "inheritPermissions": true,
      "token": "1ba198c0-7a12-46ed-a96b-f4e77554c6d4",
      "acesDictionary": {
        "Microsoft.TeamFoundation.Identity;S-1-9-1551374245-1204400969-2402986413-2179408616-0-0-0-0-1": {
          "descriptor": "Microsoft.TeamFoundation.Identity;S-1-9-1551374245-1204400969-2402986413-2179408616-0-0-0-0-1",
          "allow": 31,
          "deny": 0,
          "extendedInfo": {
            "effectiveAllow": 31
          }
        },
        "Microsoft.TeamFoundation.Identity;S-1-9-1551374245-1204400969-2402986413-2179408616-0-0-0-0-2": {
          "descriptor": "Microsoft.TeamFoundation.Identity;S-1-9-1551374245-1204400969-2402986413-2179408616-0-0-0-0-2",
          "allow": 31,
          "deny": 0,
          "extendedInfo": {
            "effectiveAllow": 31
          }
        },
        "Microsoft.TeamFoundation.Identity;S-1-9-1551374245-1204400969-2402986413-2179408616-0-0-0-0-3": {
          "descriptor": "Microsoft.TeamFoundation.Identity;S-1-9-1551374245-1204400969-2402986413-2179408616-0-0-0-0-3",
          "allow": 1,
          "deny": 0,
          "extendedInfo": {
            "effectiveAllow": 1
          }
        }
      },
      "includeExtendedInfo": true
    }
  ]
}
```


### Include child ACLs

#### Sample request

```
GET https://mytfsserver/DefaultCollection/_apis/accesscontrollists/5a27515b-ccd7-42c9-84f1-54c998f03866/?token=1ba198c0-7a12-46ed-a96b-f4e77554c6d4&includeExtendedInfo=False&recurse=True&api-version=1.0
```

#### Sample response

```json
{
  "count": 2,
  "value": [
    {
      "inheritPermissions": true,
      "token": "1ba198c0-7a12-46ed-a96b-f4e77554c6d4",
      "acesDictionary": {
        "Microsoft.TeamFoundation.Identity;S-1-9-1551374245-1204400969-2402986413-2179408616-0-0-0-0-1": {
          "descriptor": "Microsoft.TeamFoundation.Identity;S-1-9-1551374245-1204400969-2402986413-2179408616-0-0-0-0-1",
          "allow": 31,
          "deny": 0
        },
        "Microsoft.TeamFoundation.Identity;S-1-9-1551374245-1204400969-2402986413-2179408616-0-0-0-0-2": {
          "descriptor": "Microsoft.TeamFoundation.Identity;S-1-9-1551374245-1204400969-2402986413-2179408616-0-0-0-0-2",
          "allow": 31,
          "deny": 0
        },
        "Microsoft.TeamFoundation.Identity;S-1-9-1551374245-1204400969-2402986413-2179408616-0-0-0-0-3": {
          "descriptor": "Microsoft.TeamFoundation.Identity;S-1-9-1551374245-1204400969-2402986413-2179408616-0-0-0-0-3",
          "allow": 1,
          "deny": 0
        }
      }
    },
    {
      "inheritPermissions": true,
      "token": "1ba198c0-7a12-46ed-a96b-f4e77554c6d4\\846cd9c3-56ba-4158-b6d2-23a3a73244e5",
      "acesDictionary": {
        "Microsoft.TeamFoundation.Identity;S-1-9-1551374245-1204400969-2402986413-2179408616-0-0-0-1-2": {
          "descriptor": "Microsoft.TeamFoundation.Identity;S-1-9-1551374245-1204400969-2402986413-2179408616-0-0-0-1-2",
          "allow": 8,
          "deny": 0
        }
      }
    }
  ]
}
```


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

#### Sample request

```
DELETE https://mytfsserver/DefaultCollection/_apis/accesscontrollists/5a27515b-ccd7-42c9-84f1-54c998f03866/?tokens=token1,token2&recurse=False&api-version=1.0
```

#### Sample response

```json
true
```

