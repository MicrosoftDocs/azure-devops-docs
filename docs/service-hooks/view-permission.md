---
title: How to define view permission for a group in ServiceHooks
titleSuffix: Azure DevOps ServiceHooks
description: An example to define view permission for a group in ServiceHooks
ms.service: azure-devops
ms.subservice: azure-devops-service-hooks
ms.topic: how-to 
ms.custom: cross-service
ms.author: rgundogmus
author: rgundogmusm
monikerRange: '<= azure-devops'
ms.date: 04/17/2024
---

# How to define view permission for a group in ServiceHooks
[!INCLUDE [version-lt-eq-azure-devops](../includes/version-lt-eq-azure-devops.md)]

By default, only project administrators have view or edit permissions. To grant them to other users directly, you can use the [command line tool](../organizations/security/manage-tokens-namespaces.md) or the [Security](/rest/api/azure/devops/security/) REST API. 

![ServiceHooks page without permission](media/permissions/no-permission-service-hooks.png)

ServiceHooks security namespace id is defined under [List Security Namespaces](../organizations/security/manage-tokens-namespaces.md#list-security-namespaces) as `cb594ebe-87dd-4fc9-ac2c-6a10a4c92046`

## Prerequisites
1. Install Azure CLI to run `az devops` command. [How to install the Azure CLI](/cli/azure/install-azure-cli)
2. Create PAT under Azure DevOps profile. The user should be member of project collection administrator (PCA) group. 
 - Identity (Read)
 - Graph (Read)
 - Security (Manage) 
3. Login to azure devops with `az devops login`. Please install extension if you install `az devops` first time.
```
> az devops login
The command requires the extension azure-devops. Do you want to install it now? The command will continue to run after the extension is installed. (Y/n): Y
```
4. You can define your organization as default organization. Otherwise, you need to define `--org "https://dev.azure.com/{organization}"` for each command
```
az devops configure --defaults organization="https://dev.azure.com/{organization}"
```
5. Check if you can see list of permissions for your organization
```
az devops security permission namespace list --org "https://dev.azure.com/{organization}"
```

## Read group identity and permission token
1. Find your group identity descriptor.
```
> az devops security group list --project ac515e82-560c-4af8-845b-9f7f968d8e7b --output table

Name                                             Descriptor
-----------------------------------------------  --------------------------------------------------------------------------------------------------------------------------------------------------
[TEAM FOUNDATION]\EntraServiceHooksRead          aadgp.Uy0xLTktMTU1MTM3NDI0NS0xMjA0NDAwOTY5LTI0MDI5ODY0MTMtMjE3OTQwODYxNi0zLTM5NTQxNzM3ODYtMTUyMTA4MTkyNS0yNTQwNTA4MjYzLTMzNDgxNjQxNjg
```
- If you want to filter by group name, you can use `findstr` or `grep` command depends on your command prompt.

2. Get permission token.
```
> az devops security permission list --id cb594ebe-87dd-4fc9-ac2c-6a10a4c92046 --subject <Group or user descriptor> --output table

Token                                                   Effective Allow    Effective Deny
------------------------------------------------------  -----------------  ----------------
PublisherSecurity                                       0                  0
PublisherSecurity/ac515e82-560c-4af8-845b-9f7f968d8e7b  0                  0
```

## Update read permission for service hooks

1. List of possible permissions that you can define for `--allow-bit`.
- View Subscriptions
- Edit Subscription
- Delete Subscriptions
- Publish Events
```
> az devops security permission namespace show --id cb594ebe-87dd-4fc9-ac2c-6a10a4c92046

[
  {
    "actions": [
      {
        "bit": 1,
        "displayName": "View Subscriptions",
        "name": "ViewSubscriptions",
        "namespaceId": "cb594ebe-87dd-4fc9-ac2c-6a10a4c92046"
      },
      {
        "bit": 2,
        "displayName": "Edit Subscription",
        "name": "EditSubscriptions",
        "namespaceId": "cb594ebe-87dd-4fc9-ac2c-6a10a4c92046"
      },
      {
        "bit": 4,
        "displayName": "Delete Subscriptions",
        "name": "DeleteSubscriptions",
        "namespaceId": "cb594ebe-87dd-4fc9-ac2c-6a10a4c92046"
      },
      {
        "bit": 8,
        "displayName": "Publish Events",
        "name": "PublishEvents",
        "namespaceId": "cb594ebe-87dd-4fc9-ac2c-6a10a4c92046"
      }
    ],
    "dataspaceCategory": "Default",
    "displayName": "ServiceHooks",
    "elementLength": -1,
    "extensionType": null,
    "isRemotable": true,
    "name": "ServiceHooks",
    "namespaceId": "cb594ebe-87dd-4fc9-ac2c-6a10a4c92046",
    "readPermission": 1,
    "separatorValue": "/",
    "structureValue": 1,
    "systemBitMask": 0,
    "useTokenTranslator": true,
    "writePermission": 7
  }
```

2. Give view access to the group. `--allow-bit` is defined as 1 which is equal to View ServiceHooks subscriptions.

```
> az devops security permission update --namespace-id cb594ebe-87dd-4fc9-ac2c-6a10a4c92046 --subject <Group or user descriptor> --token PublisherSecurity/ac515e82-560c-4af8-845b-9f7f968d8e7b --allow-bit 1

[
  {
    "acesDictionary": {
      "Microsoft.TeamFoundation.Identity;S-1-9-1551374245-1204400969-2402986413-2179408616-3-3954173786-1521081925-2540508263-3348164168": {
        "allow": 1,
        "deny": 0,
        "descriptor": "Microsoft.TeamFoundation.Identity;S-1-9-1551374245-1204400969-2402986413-2179408616-3-3954173786-1521081925-2540508263-3348164168",
        "extendedInfo": {
          "effectiveAllow": 1
        },
        "resolvedPermissions": [
          {
            "bit": 1,
            "displayName": "View Subscriptions",
            "effectivePermission": "Allow",
            "name": "ViewSubscriptions"
          }
        ]
      }
    },
    "includeExtendedInfo": true,
    "inheritPermissions": true,
    "token": "PublisherSecurity/ac515e82-560c-4af8-845b-9f7f968d8e7b"
  }
]
```

3. Get permission token to see your changes
```
> az devops security permission list --id cb594ebe-87dd-4fc9-ac2c-6a10a4c92046 --subject <Group or user descriptor> --output table

Token                                                   Effective Allow    Effective Deny
------------------------------------------------------  -----------------  ----------------
PublisherSecurity                                       0                  0
PublisherSecurity/ac515e82-560c-4af8-845b-9f7f968d8e7b  1                  0

```

Then, the user can see the service hooks subscriptions

![ServiceHooks page with permission](media/permissions/service-hooks-subscriptions-with-permission.png)

## Reset permission for the group

If you need to reset permission for group or user, you can call `reset-all`

```
> az devops security permission reset-all --id cb594ebe-87dd-4fc9-ac2c-6a10a4c92046 --subject <Group or user descriptor> --token PublisherSecurity/ac515e82-560c-4af8-845b-9f7f968d8e7b

Are you sure you want to reset all explicit permissions for this user/group and token? (y/n): Y
true

> az devops security permission list --id cb594ebe-87dd-4fc9-ac2c-6a10a4c92046 --subject <Group or user descriptor> --output table
Token                                                   Effective Allow    Effective Deny
------------------------------------------------------  -----------------  ----------------
PublisherSecurity                                       0                  0
PublisherSecurity/ac515e82-560c-4af8-845b-9f7f968d8e7b  0                  0

```

Then, the user cannot view to service hooks subscriptions after permission reset.

![ServiceHooks page without permission](media/permissions/no-permission-service-hooks.png)
