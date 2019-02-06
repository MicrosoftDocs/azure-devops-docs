---
ms.prod: devops
ms.technology: devops-ecosystem
monikerRange: '>= tfs-2015 < azure-devops'
title: Security namespace reference | REST API Reference for Team Foundation Server
description: Security namespace reference fpr integrating with VSTS
ms.assetid: c5b4c4b9-8d80-43a4-92c5-8ecdd335ac49
ms.manager: jillfra
ms.topic: article
ms.author: elbatk
author: elbatk
ms.date: 03/15/2017
---

# Security namespaces

[!INCLUDE [azure-devops](../_data/azure-devops-message.md)]

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

#### Sample request

```
GET https://mytfsserver/DefaultCollection/_apis/securitynamespaces/00000000-0000-0000-0000-000000000000/?api-version=1.0
```

#### Sample response

```json
{
  "count": 10,
  "value": [
    {
      "namespaceId": "5a27515b-ccd7-42c9-84f1-54c998f03866",
      "name": "Identity",
      "displayName": "Identity",
      "separatorValue": "\\",
      "elementLength": -1,
      "writePermission": 4,
      "readPermission": 1,
      "dataspaceCategory": "Default",
      "actions": [
        {
          "bit": 1,
          "name": "Read",
          "displayName": "View identity information",
          "namespaceId": "5a27515b-ccd7-42c9-84f1-54c998f03866"
        },
        {
          "bit": 2,
          "name": "Write",
          "displayName": "Edit identity information",
          "namespaceId": "5a27515b-ccd7-42c9-84f1-54c998f03866"
        },
        {
          "bit": 4,
          "name": "Delete",
          "displayName": "Delete identity information",
          "namespaceId": "5a27515b-ccd7-42c9-84f1-54c998f03866"
        },
        {
          "bit": 8,
          "name": "ManageMembership",
          "displayName": "Manage group membership",
          "namespaceId": "5a27515b-ccd7-42c9-84f1-54c998f03866"
        },
        {
          "bit": 16,
          "name": "CreateScope",
          "displayName": "Create identity scopes",
          "namespaceId": "5a27515b-ccd7-42c9-84f1-54c998f03866"
        }
      ],
      "structureValue": 1,
      "extensionType": "Microsoft.TeamFoundation.Framework.Server.IdentitySecurityNamespaceExtension",
      "isRemotable": false,
      "useTokenTranslator": false
    },
    {
      "namespaceId": "445d2788-c5fb-4132-bbef-09c4045ad93f",
      "name": "WorkItemTrackingAdministration",
      "displayName": "WorkItemTrackingAdministration",
      "separatorValue": "\u0000",
      "elementLength": -1,
      "writePermission": 1,
      "readPermission": 0,
      "dataspaceCategory": "WorkItem",
      "actions": [
        {
          "bit": 1,
          "name": "ManagePermissions",
          "displayName": "Manage permissions",
          "namespaceId": "445d2788-c5fb-4132-bbef-09c4045ad93f"
        },
        {
          "bit": 2,
          "name": "DestroyAttachments",
          "displayName": "Destroy attachments",
          "namespaceId": "445d2788-c5fb-4132-bbef-09c4045ad93f"
        }
      ],
      "structureValue": 0,
      "extensionType": null,
      "isRemotable": false,
      "useTokenTranslator": false
    },
    {
      "namespaceId": "101eae8c-1709-47f9-b228-0e476c35b3ba",
      "name": "DistributedTask",
      "displayName": "DistributedTask",
      "separatorValue": "/",
      "elementLength": -1,
      "writePermission": 8,
      "readPermission": 1,
      "dataspaceCategory": "DistributedTask",
      "actions": [
        {
          "bit": 1,
          "name": "View",
          "displayName": "View",
          "namespaceId": "101eae8c-1709-47f9-b228-0e476c35b3ba"
        },
        {
          "bit": 2,
          "name": "Manage",
          "displayName": "Manage",
          "namespaceId": "101eae8c-1709-47f9-b228-0e476c35b3ba"
        },
        {
          "bit": 4,
          "name": "Listen",
          "displayName": "Listen",
          "namespaceId": "101eae8c-1709-47f9-b228-0e476c35b3ba"
        },
        {
          "bit": 8,
          "name": "AdministerPermissions",
          "displayName": "Administer Permissions",
          "namespaceId": "101eae8c-1709-47f9-b228-0e476c35b3ba"
        },
        {
          "bit": 16,
          "name": "Use",
          "displayName": "Use",
          "namespaceId": "101eae8c-1709-47f9-b228-0e476c35b3ba"
        },
        {
          "bit": 32,
          "name": "Create",
          "displayName": "Create",
          "namespaceId": "101eae8c-1709-47f9-b228-0e476c35b3ba"
        }
      ],
      "structureValue": 1,
      "extensionType": "Microsoft.TeamFoundation.DistributedTask.Server.Extensions.TaskSecurityExtension",
      "isRemotable": false,
      "useTokenTranslator": false
    },
    {
      "namespaceId": "71356614-aad7-4757-8f2c-0fb3bff6f680",
      "name": "WorkItemQueryFolders",
      "displayName": "WorkItemQueryFolders",
      "separatorValue": "/",
      "elementLength": -1,
      "writePermission": 8,
      "readPermission": 1,
      "dataspaceCategory": "WorkItem",
      "actions": [
        {
          "bit": 1,
          "name": "Read",
          "displayName": "Read",
          "namespaceId": "71356614-aad7-4757-8f2c-0fb3bff6f680"
        },
        {
          "bit": 2,
          "name": "Contribute",
          "displayName": "Contribute",
          "namespaceId": "71356614-aad7-4757-8f2c-0fb3bff6f680"
        },
        {
          "bit": 4,
          "name": "Delete",
          "displayName": "Delete",
          "namespaceId": "71356614-aad7-4757-8f2c-0fb3bff6f680"
        },
        {
          "bit": 8,
          "name": "ManagePermissions",
          "displayName": "Manage Permissions",
          "namespaceId": "71356614-aad7-4757-8f2c-0fb3bff6f680"
        },
        {
          "bit": 16,
          "name": "FullControl",
          "displayName": "Full Control",
          "namespaceId": "71356614-aad7-4757-8f2c-0fb3bff6f680"
        }
      ],
      "structureValue": 1,
      "extensionType": null,
      "isRemotable": false,
      "useTokenTranslator": true
    },
    {
      "namespaceId": "2e9eb7ed-3c0a-47d4-87c1-0ffdd275fd87",
      "name": "Git Repositories",
      "displayName": "Git Repositories",
      "separatorValue": "/",
      "elementLength": -1,
      "writePermission": 8192,
      "readPermission": 2,
      "dataspaceCategory": "Git",
      "actions": [
        {
          "bit": 1,
          "name": "Administer",
          "displayName": "Administer",
          "namespaceId": "2e9eb7ed-3c0a-47d4-87c1-0ffdd275fd87"
        },
        {
          "bit": 2,
          "name": "GenericRead",
          "displayName": "Read",
          "namespaceId": "2e9eb7ed-3c0a-47d4-87c1-0ffdd275fd87"
        },
        {
          "bit": 4,
          "name": "GenericContribute",
          "displayName": "Contribute",
          "namespaceId": "2e9eb7ed-3c0a-47d4-87c1-0ffdd275fd87"
        },
        {
          "bit": 8,
          "name": "ForcePush",
          "displayName": "Force push (rewrite history and delete branches)",
          "namespaceId": "2e9eb7ed-3c0a-47d4-87c1-0ffdd275fd87"
        },
        {
          "bit": 16,
          "name": "CreateBranch",
          "displayName": "Create branch",
          "namespaceId": "2e9eb7ed-3c0a-47d4-87c1-0ffdd275fd87"
        },
        {
          "bit": 32,
          "name": "CreateTag",
          "displayName": "Create tag",
          "namespaceId": "2e9eb7ed-3c0a-47d4-87c1-0ffdd275fd87"
        },
        {
          "bit": 64,
          "name": "ManageNote",
          "displayName": "Manage notes",
          "namespaceId": "2e9eb7ed-3c0a-47d4-87c1-0ffdd275fd87"
        },
        {
          "bit": 128,
          "name": "PolicyExempt",
          "displayName": "Exempt from policy enforcement",
          "namespaceId": "2e9eb7ed-3c0a-47d4-87c1-0ffdd275fd87"
        },
        {
          "bit": 256,
          "name": "CreateRepository",
          "displayName": "Create repository",
          "namespaceId": "2e9eb7ed-3c0a-47d4-87c1-0ffdd275fd87"
        },
        {
          "bit": 512,
          "name": "DeleteRepository",
          "displayName": "Delete repository",
          "namespaceId": "2e9eb7ed-3c0a-47d4-87c1-0ffdd275fd87"
        },
        {
          "bit": 1024,
          "name": "RenameRepository",
          "displayName": "Rename repository",
          "namespaceId": "2e9eb7ed-3c0a-47d4-87c1-0ffdd275fd87"
        },
        {
          "bit": 2048,
          "name": "EditPolicies",
          "displayName": "Edit policies",
          "namespaceId": "2e9eb7ed-3c0a-47d4-87c1-0ffdd275fd87"
        },
        {
          "bit": 4096,
          "name": "RemoveOthersLocks",
          "displayName": "Remove others' locks",
          "namespaceId": "2e9eb7ed-3c0a-47d4-87c1-0ffdd275fd87"
        },
        {
          "bit": 8192,
          "name": "ManagePermissions",
          "displayName": "Manage permissions",
          "namespaceId": "2e9eb7ed-3c0a-47d4-87c1-0ffdd275fd87"
        }
      ],
      "structureValue": 1,
      "extensionType": null,
      "isRemotable": true,
      "useTokenTranslator": false
    },
    {
      "namespaceId": "4ae0db5d-8437-4ee8-a18b-1f6fb38bd34c",
      "name": "Registry",
      "displayName": "Registry",
      "separatorValue": "/",
      "elementLength": -1,
      "writePermission": 2,
      "readPermission": 1,
      "dataspaceCategory": "Default",
      "actions": [
        {
          "bit": 1,
          "name": "Read",
          "displayName": "Read registry entries",
          "namespaceId": "4ae0db5d-8437-4ee8-a18b-1f6fb38bd34c"
        },
        {
          "bit": 2,
          "name": "Write",
          "displayName": "Write registry entries",
          "namespaceId": "4ae0db5d-8437-4ee8-a18b-1f6fb38bd34c"
        }
      ],
      "structureValue": 1,
      "extensionType": null,
      "isRemotable": false,
      "useTokenTranslator": false
    },
    {
      "namespaceId": "3c15a8b7-af1a-45c2-aa97-2cb97078332e",
      "name": "VersionControlItems2",
      "displayName": "VersionControlItems2",
      "separatorValue": "/",
      "elementLength": -1,
      "writePermission": 1024,
      "readPermission": 1,
      "dataspaceCategory": "VersionControl",
      "actions": [
        {
          "bit": 1,
          "name": "Read",
          "displayName": "Read",
          "namespaceId": "3c15a8b7-af1a-45c2-aa97-2cb97078332e"
        },
        {
          "bit": 2,
          "name": "PendChange",
          "displayName": "Pend a change in a server workspace",
          "namespaceId": "3c15a8b7-af1a-45c2-aa97-2cb97078332e"
        },
        {
          "bit": 4,
          "name": "Checkin",
          "displayName": "Check in",
          "namespaceId": "3c15a8b7-af1a-45c2-aa97-2cb97078332e"
        },
        {
          "bit": 8,
          "name": "Label",
          "displayName": "Label",
          "namespaceId": "3c15a8b7-af1a-45c2-aa97-2cb97078332e"
        },
        {
          "bit": 16,
          "name": "Lock",
          "displayName": "Lock",
          "namespaceId": "3c15a8b7-af1a-45c2-aa97-2cb97078332e"
        },
        {
          "bit": 32,
          "name": "ReviseOther",
          "displayName": "Revise other users' changes",
          "namespaceId": "3c15a8b7-af1a-45c2-aa97-2cb97078332e"
        },
        {
          "bit": 64,
          "name": "UnlockOther",
          "displayName": "Unlock other users' changes",
          "namespaceId": "3c15a8b7-af1a-45c2-aa97-2cb97078332e"
        },
        {
          "bit": 128,
          "name": "UndoOther",
          "displayName": "Undo other users' changes",
          "namespaceId": "3c15a8b7-af1a-45c2-aa97-2cb97078332e"
        },
        {
          "bit": 256,
          "name": "LabelOther",
          "displayName": "Administer labels",
          "namespaceId": "3c15a8b7-af1a-45c2-aa97-2cb97078332e"
        },
        {
          "bit": 1024,
          "name": "AdminProjectRights",
          "displayName": "Manage permissions",
          "namespaceId": "3c15a8b7-af1a-45c2-aa97-2cb97078332e"
        },
        {
          "bit": 2048,
          "name": "CheckinOther",
          "displayName": "Check in other users' changes",
          "namespaceId": "3c15a8b7-af1a-45c2-aa97-2cb97078332e"
        },
        {
          "bit": 4096,
          "name": "Merge",
          "displayName": "Merge",
          "namespaceId": "3c15a8b7-af1a-45c2-aa97-2cb97078332e"
        },
        {
          "bit": 8192,
          "name": "ManageBranch",
          "displayName": "Manage branch",
          "namespaceId": "3c15a8b7-af1a-45c2-aa97-2cb97078332e"
        }
      ],
      "structureValue": 1,
      "extensionType": "Microsoft.TeamFoundation.VersionControl.Server.PlugIns.RepositorySecurityNamespaceExtension",
      "isRemotable": true,
      "useTokenTranslator": true
    },
    {
      "namespaceId": "2bf24a2b-70ba-43d3-ad97-3d9e1f75622f",
      "name": "EventSubscriber",
      "displayName": "EventSubscriber",
      "separatorValue": ":",
      "elementLength": -1,
      "writePermission": 2,
      "readPermission": 1,
      "dataspaceCategory": "Default",
      "actions": [
        {
          "bit": 1,
          "name": "GENERIC_READ",
          "displayName": "View",
          "namespaceId": "2bf24a2b-70ba-43d3-ad97-3d9e1f75622f"
        },
        {
          "bit": 2,
          "name": "GENERIC_WRITE",
          "displayName": "Edit",
          "namespaceId": "2bf24a2b-70ba-43d3-ad97-3d9e1f75622f"
        }
      ],
      "structureValue": 1,
      "extensionType": null,
      "isRemotable": false,
      "useTokenTranslator": false
    },
    {
      "namespaceId": "5a6cd233-6615-414d-9393-48dbb252bd23",
      "name": "WorkItemTrackingProvision",
      "displayName": "WorkItemTrackingProvision",
      "separatorValue": "/",
      "elementLength": -1,
      "writePermission": 1,
      "readPermission": 0,
      "dataspaceCategory": "WorkItem",
      "actions": [
        {
          "bit": 1,
          "name": "Administer",
          "displayName": "Administer",
          "namespaceId": "5a6cd233-6615-414d-9393-48dbb252bd23"
        },
        {
          "bit": 2,
          "name": "ManageLinkTypes",
          "displayName": "Manage work item link types",
          "namespaceId": "5a6cd233-6615-414d-9393-48dbb252bd23"
        }
      ],
      "structureValue": 1,
      "extensionType": "Microsoft.TeamFoundation.WorkItemTracking.Server.WitProvisionSecurityExtension",
      "isRemotable": false,
      "useTokenTranslator": true
    },
    {
      "namespaceId": "49b48001-ca20-4adc-8111-5b60c903a50c",
      "name": "ServiceEndpoints",
      "displayName": "ServiceEndpoints",
      "separatorValue": "/",
      "elementLength": -1,
      "writePermission": 2,
      "readPermission": 0,
      "dataspaceCategory": "Default",
      "actions": [
        {
          "bit": 1,
          "name": "View",
          "displayName": "View Endpoint",
          "namespaceId": "49b48001-ca20-4adc-8111-5b60c903a50c"
        },
        {
          "bit": 2,
          "name": "Administer",
          "displayName": "Administer Endpoint",
          "namespaceId": "49b48001-ca20-4adc-8111-5b60c903a50c"
        },
        {
          "bit": 4,
          "name": "Create",
          "displayName": "Create Endpoint",
          "namespaceId": "49b48001-ca20-4adc-8111-5b60c903a50c"
        },
        {
          "bit": 8,
          "name": "ViewAuthorization",
          "displayName": "View Authorization",
          "namespaceId": "49b48001-ca20-4adc-8111-5b60c903a50c"
        }
      ],
      "structureValue": 1,
      "extensionType": null,
      "isRemotable": false,
      "useTokenTranslator": true
    }
  ]
}
```


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

#### Sample request

```
GET https://mytfsserver/DefaultCollection/_apis/securitynamespaces/5a27515b-ccd7-42c9-84f1-54c998f03866/?api-version=1.0
```

#### Sample response

```json
{
  "count": 1,
  "value": [
    {
      "namespaceId": "5a27515b-ccd7-42c9-84f1-54c998f03866",
      "name": "Identity",
      "displayName": "Identity",
      "separatorValue": "\\",
      "elementLength": -1,
      "writePermission": 4,
      "readPermission": 1,
      "dataspaceCategory": "Default",
      "actions": [
        {
          "bit": 1,
          "name": "Read",
          "displayName": "View identity information",
          "namespaceId": "5a27515b-ccd7-42c9-84f1-54c998f03866"
        },
        {
          "bit": 2,
          "name": "Write",
          "displayName": "Edit identity information",
          "namespaceId": "5a27515b-ccd7-42c9-84f1-54c998f03866"
        },
        {
          "bit": 4,
          "name": "Delete",
          "displayName": "Delete identity information",
          "namespaceId": "5a27515b-ccd7-42c9-84f1-54c998f03866"
        },
        {
          "bit": 8,
          "name": "ManageMembership",
          "displayName": "Manage group membership",
          "namespaceId": "5a27515b-ccd7-42c9-84f1-54c998f03866"
        },
        {
          "bit": 16,
          "name": "CreateScope",
          "displayName": "Create identity scopes",
          "namespaceId": "5a27515b-ccd7-42c9-84f1-54c998f03866"
        }
      ],
      "structureValue": 1,
      "extensionType": "Microsoft.TeamFoundation.Framework.Server.IdentitySecurityNamespaceExtension",
      "isRemotable": false,
      "useTokenTranslator": false
    }
  ]
}
```


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

#### Sample request

```
POST https://mytfsserver/DefaultCollection/_apis/securitynamespaces/5a27515b-ccd7-42c9-84f1-54c998f03866/?api-version=1.0
```
```json
{
  "token": "1ba198c0-7a12-46ed-a96b-f4e77554c6d4",
  "inherit": false
}
```
