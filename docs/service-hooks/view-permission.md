---
title: How to define view permission for a group in Service Hooks
titleSuffix: Azure DevOps ServiceHooks
description: Learn the steps for defining the *View* permission for a group in Service Hooks.
ms.service: azure-devops
ms.subservice: azure-devops-service-hooks
ms.topic: how-to 
ms.custom: cross-service
ms.author: rgundogmus
author: rgundogmusm
monikerRange: 'azure-devops'
ms.date: 06/13/2025
---

# Set View permission for a group in Service Hooks
[!INCLUDE [version-lt-eq-azure-devops](../includes/version-lt-eq-azure-devops.md)]

This article explains how to grant _View_ or _Edit_ permissions for Service Hooks in Azure DevOps. By default, only Project Administrators have these permissions. To assign them to other users or groups, use the [command line tool](../organizations/security/manage-tokens-namespaces.md) or the [Security](/rest/api/azure/devops/security/) REST API.

The `ServiceHooks` security namespace ID is defined under [List Security Namespaces](../organizations/security/manage-tokens-namespaces.md#list-security-namespaces).

## Prerequisites

| Category | Requirements |
|--------------|-------------|
|**Project access**| [Project member](../organizations/security/add-users-team-project.md). |
|**Permissions**| - Member of the [Project Collection Administrators group](../organizations/security/look-up-project-collection-administrators.md). Organization owners are automatically members of this group.<br>- [Microsoft Entra token](../integrate/get-started/authentication/entra.md) or [Personal access token (PAT)](../organizations/accounts/use-personal-access-tokens-to-authenticate.md) for your Azure DevOps profile. <br>[!INCLUDE [use-microsoft-entra-reduce-pats](../includes/use-microsoft-entra-reduce-pats.md)]   |
|**Tools**|[Azure CLI](/cli/azure/install-azure-cli).<br>1. Sign in with `az devops login`.<br>2. You can define your organization as default organization. Otherwise, define `--org "https://dev.azure.com/{organization}"` for each command. ```az devops configure --defaults organization="https://dev.azure.com/{organization}"```<br>3. Check if you can see list of permissions for your organization: ```az devops security permission namespace list --org "https://dev.azure.com/{organization}"```.   |

## Read group identity and permission token

1. Find your group identity descriptor.
    ```
    > az devops security group list --project 00000000-0000-0000-0000-000000000000 --output table

    Name                                             Descriptor
    -----------------------------------------------  --------------------------------------------------------------------------------------------------------------------------------------------------
    [TEAM FOUNDATION]\EntraServiceHooksRead          Aa1Bb~2Cc3.-Dd4Ee5Ff6Gg7Hh8Ii9_Jj0Kk1Ll2
    ```
    If you want to filter by group name, you can use `findstr` or `grep` command depends on your command prompt.

2. Get permission token.
    ```
    > az devops security permission list --id 00000000-0000-0000-0000-000000000000 --subject <Group or user descriptor> --output table

    Token                                                   Effective Allow    Effective Deny
    ------------------------------------------------------  -----------------  ----------------
    PublisherSecurity                                       0                  0
    PublisherSecurity/00000000-0000-0000-0000-000000000000  0                  0
    ```

## Update read permission for service hooks

1. List of possible permissions that you can define for `--allow-bit`.
    - View Subscriptions
    - Edit Subscription
    - Delete Subscriptions
    - Publish Events

    ```
    > az devops security permission namespace show --id 00000000-0000-0000-0000-000000000000
      {
        "actions": [
          {
            "bit": 1,
            "displayName": "View Subscriptions",
            "name": "ViewSubscriptions",
            "namespaceId": "00000000-0000-0000-0000-000000000000"
          },
          {
            "bit": 2,
            "displayName": "Edit Subscription",
            "name": "EditSubscriptions",
            "namespaceId": "00000000-0000-0000-0000-000000000000"
          },
          {
            "bit": 4,
            "displayName": "Delete Subscriptions",
            "name": "DeleteSubscriptions",
            "namespaceId": "00000000-0000-0000-0000-000000000000"
          },
          {
            "bit": 8,
            "displayName": "Publish Events",
            "name": "PublishEvents",
            "namespaceId": "00000000-0000-0000-0000-000000000000"
          }
        ],
        "dataspaceCategory": "Default",
        "displayName": "ServiceHooks",
        "elementLength": -1,
        "extensionType": null,
        "isRemotable": true,
        "name": "ServiceHooks",
        "namespaceId": "00000000-0000-0000-0000-000000000000",
        "readPermission": 1,
        "separatorValue": "/",
        "structureValue": 1,
        "systemBitMask": 0,
        "useTokenTranslator": true,
        "writePermission": 7
      }
    ```

2. Set _View_ access for the group. View ServiceHooks Subscriptions equals 1 for `--allow-bit`.
    ```
    > az devops security permission update --namespace-id 00000000-0000-0000-0000-000000000000 --subject <Group or user descriptor> --token PublisherSecurity/00000000-0000-0000-0000-000000000000 --allow-bit 1

    [
      {
        "acesDictionary": {
          "Microsoft.TeamFoundation.Identity;00000000-0000-0000-0000-000000000000": {
            "allow": 1,
            "deny": 0,
            "descriptor": "Microsoft.TeamFoundation.Identity;00000000-0000-0000-0000-000000000000",
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
        "token": "PublisherSecurity/00000000-0000-0000-0000-000000000000"
      }
    ]
    ```

3. Get permission token to see your changes.
    ```
    > az devops security permission list --id cb594ebe-87dd-4fc9-ac2c-6a10a4c92046 --subject <Group or user descriptor> --output table

    Token                                                   Effective Allow    Effective Deny
    ------------------------------------------------------  -----------------  ----------------
    PublisherSecurity                                       0                  0
    PublisherSecurity/00000000-0000-0000-0000-000000000000  1                  0
    ```

The following example shows that the user can see the service hooks subscriptions.

![Screenshot showing the ServiceHooks page with permission.](./media/permissions/service-hooks-subscriptions-with-permission.png)

## Reset all Service Hooks permissions of a group

- If you need to reset all Service Hooks permissions of a group or user, you can call `reset-all`.

    ```
    > az devops security permission reset-all --id 00000000-0000-0000-0000-000000000000 --subject <Group or user descriptor> --token PublisherSecurity/00000000-0000-0000-0000-000000000000

    Are you sure you want to reset all explicit permissions for this user/group and token? (y/n): Y
    true

    > az devops security permission list --id 00000000-0000-0000-0000-000000000000 --subject <Group or user descriptor> --output table
    Token                                                   Effective Allow    Effective Deny
    ------------------------------------------------------  -----------------  ----------------
    PublisherSecurity                                       0                  0
    PublisherSecurity/00000000-0000-0000-0000-000000000000  0                  0
    ```

- The following example shows that the user can't view to service hooks subscriptions after the permission gets reset.

    ![Screenshot showing the ServiceHooks page without permission.](./media/permissions/no-permission-service-hooks.png)

