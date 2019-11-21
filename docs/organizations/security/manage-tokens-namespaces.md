---
title: Manage tokens & namespaces
titleSuffix: Azure DevOps Services
description: Manage security permissions using the Azure DevOps CLI.  
ms.technology: devops-security
ms.prod: devops
ms.assetid: 
ms.topic: conceptual
ms.manager: geverghe
ms.reviewer: jrice 
ms.author: kaelli
author: KathrynEE
monikerRange: 'azure-devops'
ms.date: 11/20/2019
---

# Manage tokens and namespaces

[!INCLUDE [temp](../../_shared/version-vsts-only.md)]  

Security namespaces are used to store access control lists (ACLs) on tokens. Data stored in security namespaces are used to determine whether a user has permissions to perform a specific action on a specific resource.

Each family of resources (such as work items or Git repositories) is secured through a unique namespace. Each security namespace contains zero or more access control lists (ACLs). Each ACL contains a token, an inherit flag, and a set of zero or more access control entries (ACEs). Each ACE contains an identity descriptor, an allowed permissions bitmask, and a denied permissions bitmask. Tokens are arbitrary strings representing resources in Azure DevOps Services.

You can manage tokens and namespaces for your organization with the [az devops security permission](/cli/azure/ext/azure-devops/devops/security/permission) commands. Use this command to:

- View the permissions associated with tokens and namespaces
- View details about those permissions
- Update or reset permissions

> [!NOTE]
> For Azure DevOps Services, you can manage tokens and namespaces using the az devops security permission documented in this article, or using the TFSSecurity command. To use the TFSSecurity command, you must install Azure DevOps Server 2019 to get access to the command line tool. To learn more, see [TFSSecurity command](/azure/devops/server/command-line/tfssecurity-cmd).

## Prerequisites 

- To manage tokens and namespaces, you must be a member of the Project Collection Administrators security group.  
- You must have installed the Azure DevOps CLI extension as described in [Get started with Azure DevOps CLI](../../cli/index.md).  
- Sign into Azure DevOps using `az login`.  
- For the examples in this article, set the default organization using `az devops configure --defaults organization=YourOrganizationURL`.  

## Security permission commands

> [!div class="mx-tdBreakAll"]  
> | Command | Description |
> |--------| -----------|
> | `az devops security permission list` | List tokens for specified user or group and namespace. |
> | `az devops security permission namespace list` | List all available namespaces for an organization. |
> | `az devops security permission namespace show` | Show details of permissions available in each namespace. |
> | `az devops security permission reset` | Reset permission for specified permission bit(s). |
> | `az devops security permission reset-all` | Clear all permissions of this token for a user or group. |
> | `az devops security permission show` | Show permissions for specified token, namespace and user or group. |
> | `az devops security permission update` | Assign allow or deny permission to specified user or group. |

The following parameters are optional for all commands, and not listed in the examples provided in this article. 

- **detect**: Automatically detect organization. Accepted values: false, true. Default is true.
- **org**: Azure DevOps organization URL. You can configure the default organization using az devops configure -d organization=ORG_URL. Required if not configured as default or picked up via git config. Example: `--org https://dev.azure.com/MyOrganizationName/`. 

## List tokens

You can list the tokens for a specified namespace and user or group with the [az devops security permission list](/cli/azure/ext/azure-devops/devops/security/permission#ext-azure-devops-az-devops-security-permission-list) command.

> [!div class="tabbedCodeSnippets"]
```CLI
az devops security permission list --id
                                   --subject
                                   [--recurse]
                                   [--token]
```

### Parameters

- **id**: Required. ID of security namespace. To obtain the ID, use the [az devops security permission namespace list](#list-namespaces) command.
- **subject**: Required. The email address or group descriptor of the user.
- **recurse**: Optional. If true, and the namespace is hierarchical, this parameter returns the child ACLs of the tokens.
- **token**: Optional. Specify an individual security token.

### Example

The following command lists the tokens in table format for the specified namespace, which corresponds to Analytics, and associated with the user  contoso@contoso.com.

> [!div class="tabbedCodeSnippets"]
```CLI
az devops security permission list --id 58450c49-b02d-465a-ab12-59ae512d6531 --subject contoso@contoso.com --output table

Token                                   Effective Allow    Effective Deny
--------------------------------------  -----------------  ----------------
$/0611925a-b287-4b0b-90a1-90f1a96e9f1f  0                  0
$/087572e2-5569-49ec-af80-d3caf22b446c  0                  0
$/131271e0-a6ad-49ba-837e-2d475ab2b169  0                  0
$/14c92f9d-9fff-48ec-8171-9d1106056ab3  0                  0
$/1965830d-5fc4-4412-8c71-a1c39c939a42  0                  0
$/4b80d122-a5ca-46ec-ba28-e03d37e53404  0                  0
$/4fa8e9de-e86b-4986-ac75-f421881a7664  0                  0
$/5417a1c3-4b04-44d1-aead-50774b9dbf5f  0                  0
$/56af920d-393b-4236-9a07-24439ccaa85c  0                  0
$/69265579-a1e0-4a30-a141-ac9e3bb82572  0                  0
```

## List namespaces

You can list all available namespaces for an organization with the [az devops security permission namespace list](/cli/azure/ext/azure-devops/devops/security/permission/namespace#ext-azure-devops-az-devops-security-permission-namespace-list) command.

> [!div class="tabbedCodeSnippets"]
```CLI
az devops security permission namespace list [--local-only]
```

### Parameters

- **local-only**: Optional. If true, retrieve only local security namespaces.

    Security namespaces may have their data mastered in one microservice, but still be visible in other microservices. If a security namespace's data is mastered in microservice X, it is said to be local to that microservice. Otherwise, it is said to be remote.

### Example

The following command lists only the local security namespaces for your organization and shows the results in table format.  

> [!div class="tabbedCodeSnippets"]
```CLI
az devops security permission namespace list --local-only --output table

Id                                    Name
------------------------------------  ------------------------------
71356614-aad7-4757-8f2c-0fb3bff6f680  WorkItemQueryFolders
fa557b48-b5bf-458a-bb2b-1b680426fe8b  Favorites
4ae0db5d-8437-4ee8-a18b-1f6fb38bd34c  Registry
c2ee56c9-e8fa-4cdd-9d48-2c44f697a58e  Graph
dc02bf3d-cd48-46c3-8a41-345094ecc94b  ViewActivityPaneSecurity
2a887f97-db68-4b7c-9ae3-5cebd7add999  Job
73e71c45-d483-40d5-bdba-62fd076f7f87  WorkItemTracking
4a9e8381-289a-4dfd-8460-69028eaa93b3  StrongBox
1f4179b3-6bac-4d01-b421-71ea09171400  Server
e06e1c24-e93d-4e4a-908a-7d951187b483  TestManagement
6ec4592e-048c-434e-8e6c-8671753a8418  SettingEntries
302acaca-b667-436d-a946-87133492041c  BuildAdministration
```

## Show namespace details

You can show details of permissions available in each namespace with the [az devops security permission namespace show](/cli/azure/ext/azure-devops/devops/security/permission/namespace#ext-azure-devops-az-devops-security-permission-namespace-show) command.

> [!div class="tabbedCodeSnippets"]
```CLI
az devops security permission namespace show --id
```

### Parameters

- **id**: Required. ID of security namespace.

### Example

The following command shows details of the available permissions for the specified namespace ID and returns the results in table format.  

> [!div class="tabbedCodeSnippets"]
```CLI
az devops security permission namespace show --namespace-id 58450c49-b02d-465a-ab12-59ae512d6531 --output table

Name                      Permission Description                                    Permission Bit
------------------------  --------------------------------------------------------  ----------------
Read                      View analytics                                            1
Administer                Manage analytics permissions                              2
Stage                     Push the data to staging area                             4
ExecuteUnrestrictedQuery  Execute query without any restrictions on the query form  8
ReadEuii                  Read EUII data                                            16

```

## Reset permissions

You can reset the permission bits for a specified user or group with the [az devops security permission reset](/cli/azure/ext/azure-devops/devops/security/permission#ext-azure-devops-az-devops-security-permission-reset) command. 

> [!div class="tabbedCodeSnippets"]
```CLI
az devops security permission reset --id
                                    --permission-bit
                                    --subject
                                    --token
```

### Parameters

- **id**: Required. ID of security namespace.
- **permission-bit**: Required. Permission bit or addition of permission bits which needs to be reset for given user or group and token.
- **subject**: Required. The email address or group descriptor of the user.
- **token**: Required. Individual security token.

### Example

The following command resets a token's permission bit 8 for the user contoso@contoso.com in the specified namespace and returns the results in table format.

> [!div class="tabbedCodeSnippets"]
```CLI
az devops security permission reset --id 58450c49-b02d-465a-ab12-59ae512d6531 --permission-bit 8 --subject contoso@contoso.com --token 0611925a-b287-4b0b-90a1-90f1a96e9f1f --output table

Name                      Bit    Permission Description                                    Permission Value
------------------------  -----  --------------------------------------------------------  ------------------
ExecuteUnrestrictedQuery  8      Execute query without any restrictions on the query form  Not set
```

## Reset all permissions

You can clear all permissions of a token for a user or group with the [az devops security permission reset-all](/cli/azure/ext/azure-devops/devops/security/permission#ext-azure-devops-az-devops-security-permission-reset-all) command.

> [!div class="tabbedCodeSnippets"]
```CLI
az devops security permission reset-all --id
                                        --subject
                                        --token
                                        [--yes]
```

### Parameters

- **id**: Required. ID of security namespace.
- **subject**: Required. The email address or group descriptor of the user.
- **token**: Required. Individual security token.
- **yes**: Optional. Don't prompt for confirmation.

### Example

The following command clears all permissions for the user contoso@contoso.com in the specified namespace without requiring confirmation. The result is shown in the CLI.

> [!div class="tabbedCodeSnippets"]
```CLI
az devops security permission reset-all --id 58450c49-b02d-465a-ab12-59ae512d6531 --subject contoso@contoso.com --token 0611925a-b287-4b0b-90a1-90f1a96e9f1f --yes --output table

Result
--------
True
```

## Show permissions

You can show the permissions for a specified token, namespace, and user or group with the [az devops security permission show](/cli/azure/ext/azure-devops/devops/security/permission#ext-azure-devops-az-devops-security-permission-show) command.

> [!div class="tabbedCodeSnippets"]
```CLI
az devops security permission show --id
                                   --subject
                                   --token
```

### Parameters

- **id**: Required. ID of security namespace.
- **subject**: Required. The email address or group descriptor of the user.
- **token**: Required. Individual security token.

### Example

The following command shows a token's permission details for the user contoso@contoso.com in the specified namespace and returns the results in table format.

> [!div class="tabbedCodeSnippets"]
```CLI
az devops security permission show --id 58450c49-b02d-465a-ab12-59ae512d6531 --subject contoso@contoso.com --token 0611925a-b287-4b0b-90a1-90f1a96e9f1f --output table

Name                      Bit    Permission Description                                    Permission Value
------------------------  -----  --------------------------------------------------------  ------------------
Read                      1      View analytics                                            Not set
Administer                2      Manage analytics permissions                              Allow
Stage                     4      Push the data to staging area                             Not set
ExecuteUnrestrictedQuery  8      Execute query without any restrictions on the query form  Not set
ReadEuii                  16     Read EUII data                                            Deny
```

## Update permissions

You can assign *allow* or *deny* permissions to a specified user or group with the [az devops security permission update](/cli/azure/ext/azure-devops/devops/security/permission#ext-azure-devops-az-devops-security-permission-update) command. 

> [!div class="tabbedCodeSnippets"]
```CLI
az devops security permission update --id
                                     --subject
                                     --token
                                     [--allow-bit]
                                     [--deny-bit]
                                     [--merge {false, true}]
```

### Parameters

- **id**: Required. ID of security namespace.
- **subject**: Required. The email address or group descriptor of the user.
- **token**: Required. Individual security token.
- **allow-bit**: Optional. Allow bit or addition of bits. Required if --deny-bit is missing.
- **deny-bit**: Optional. Deny bit or addition of bits. Required if --allow-bit is missing.
- **merge**: Optional. If set, the existing access control entry (ACE) has its allow and deny merged with the incoming ACE's allow and deny. If unset, the existing ACE is displaced. The accepted values are *false* or *true*.

### Example

The following command updates the permissions for **ExecuteUnrestrictedQuery** (bit 8) for the user contoso@contoso.com in the specified namespace, and shows the results in table format.  

> [!div class="tabbedCodeSnippets"]
```CLI
az devops security permission update --allow-bit 8 --id 58450c49-b02d-465a-ab12-59ae512d6531 --subject contoso@contoso.com --token 56af920d-393b-4236-9a07-24439ccaa85c --output table

Name                      Bit    Permission Description                                    Permission Value
------------------------  -----  --------------------------------------------------------  ------------------
ExecuteUnrestrictedQuery  8      Execute query without any restrictions on the query form  Allow
```

## Related articles

- [Security REST API](/rest/api/azure/devops/security/)
- [TFSSecurity command](/azure/devops/server/command-line/tfssecurity-cmd) 
- [Security glossary](security-glossary.md)
