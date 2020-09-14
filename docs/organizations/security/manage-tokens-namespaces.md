---
title: Manage tokens & namespaces
titleSuffix: Azure DevOps
description: Manage security permissions using the Azure DevOps CLI.  
ms.technology: devops-security
ms.assetid: 
ms.topic: conceptual
ms.manager: geverghe
ms.reviewer: jrice 
ms.author: kaelli
author: KathrynEE
monikerRange: '>= azure-devops-2020'
ms.date: 08/18/2020
---

# Manage tokens and namespaces

[!INCLUDE [version-azure-devops-plus-azure-devops-server-2020](../../includes/version-azure-devops-plus-azure-devops-server-2020.md)]

Security namespaces are used to store access control lists (ACLs) on tokens. Data stored in security namespaces are used to determine whether a user has permissions to perform a specific action on a specific resource.

Each family of resources (such as work items or Git repositories) is secured through a unique namespace. Each security namespace contains zero or more access control lists (ACLs). Each ACL contains a token, an inherit flag, and a set of zero or more access control entries (ACEs). Each ACE contains an identity descriptor, an allowed permissions bitmask, and a denied permissions bitmask. Tokens are arbitrary strings representing resources in Azure DevOps.

You can manage tokens and namespaces for your organization with the [az devops security permission](/cli/azure/ext/azure-devops/devops/security/permission) commands. Use this command to:

- View the permissions associated with tokens and namespaces
- View details about those permissions
- Update or reset permissions

> [!NOTE]   
> Namespaces and tokens are valid for all versions of Azure DevOps. Some namespaces have been deprecated as listed in [Security namespaces and tokens for permissions management](/azure/devops/cli/security-tokens#deprecated-namespaces). 
>
> To list namespaces and manage permissions with command line tools: 
> - For Azure DevOps Server 2020 and Azure DevOps Services, you can use the `az devops security permission` commands. 
> - For on-premises Azure DevOps instances, you can use the [TFSSecurity](/azure/devops/server/command-line/tfssecurity-cmd?view=azure-devops-2019) commands. 


> [!NOTE]
> For Azure DevOps Services, you can manage tokens and namespaces using the `az devops security permission documented in this article, or using the TFSSecurity command. To use the TFSSecurity command, you must install Azure DevOps Server 2019 to get access to the command line tool. To learn more, see [TFSSecurity command](/azure/devops/server/command-line/tfssecurity-cmd).

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

## Namespaces and their IDs

The following table lists the IDs for the security namespaces.

| Namespace                      | ID                                   |
|--------------------------------|--------------------------------------|
| AccountAdminSecurity           | 58450c49-b02d-465a-ab12-59ae512d6531 |
| Analytics                      | d34d3680-dfe5-4cc6-a949-7d9c68f73cba |
| AnalyticsViews                 | 7c7d32f7-0e86-4cd6-892e-b35dbba870bd |
| AuditLog                       | c788c23e-1b46-4162-8f5e-d7585343b5de |
| BoardsExternalIntegration      | a6cc6381-a1ca-4b36-b3c1-4e65211e82b6 |
| Build                          | 5a27515b-ccd7-42c9-84f1-54c998f03866 |
| BuildAdministration            | 445d2788-c5fb-4132-bbef-09c4045ad93f |
| Chat                           | 101eae8c-1709-47f9-b228-0e476c35b3ba |
| Collection                     | 71356614-aad7-4757-8f2c-0fb3bff6f680 |
| CrossProjectWidgetView         | 2e9eb7ed-3c0a-47d4-87c1-0ffdd275fd87 |
| CSS                            | 3c15a8b7-af1a-45c2-aa97-2cb97078332e |
| DashboardsPrivileges           | 2bf24a2b-70ba-43d3-ad97-3d9e1f75622f |
| DataProvider                   | 5a6cd233-6615-414d-9393-48dbb252bd23 |
| Discussion Threads             | 49b48001-ca20-4adc-8111-5b60c903a50c |
| DistributedTask                | cb594ebe-87dd-4fc9-ac2c-6a10a4c92046 |
| Environment                    | bc295513-b1a2-4663-8d1a-7017fd760d18 |
| EventSubscriber                | 3e65f728-f8bc-4ecd-8764-7e378b19bfa7 |
| EventSubscription              | cb4d56d2-e84b-457e-8845-81320a133fbb |
| Favorites                      | bed337f8-e5f3-4fb9-80da-81e17d06e7a8 |
| Git Repositories               | 2dab47f9-bd70-49ed-9bd5-8eb051e59c02 |
| Graph                          | 11238e09-49f2-40c7-94d0-8f0307204ce4 |
| Identity                       | b7e84409-6553-448a-bbb2-af228e07cbeb |
| IdentityPicker                 | 83d4c2e6-e57d-4d6e-892b-b87222b7ad20 |
| Iteration                      | 52d39943-cb85-4d7f-8fa8-c6baac873819 |
| Job                            | 58b176e7-3411-457a-89d0-c6d0ccb3c52b |
| Library                        | 83e28ad4-2d72-4ceb-97b0-c7726d5502c3 |
| Location                       | 9e4894c3-ff9a-4eac-8a85-ce11cafdc6f1 |
| MetaTask                       | fc5b7b85-5d6b-41eb-8534-e128cb10eb67 |
| Plan                           | bb50f182-8e5e-40b8-bc21-e8752a1e7ae2 |
| Process                        | f6a4de49-dbe2-4704-86dc-f8ec1a294436 |
| Project                        | bf7bfa03-b2b7-47db-8113-fa2e002cc5b1 |
| ProjectAnalysisLanguageMetrics | fa557b48-b5bf-458a-bb2b-1b680426fe8b |
| Proxy                          | 4ae0db5d-8437-4ee8-a18b-1f6fb38bd34c |
| Registry                       | c2ee56c9-e8fa-4cdd-9d48-2c44f697a58e |
| ReleaseManagement              | dc02bf3d-cd48-46c3-8a41-345094ecc94b |
| ReleaseManagement              | 2a887f97-db68-4b7c-9ae3-5cebd7add999 |
| Security                       | 73e71c45-d483-40d5-bdba-62fd076f7f87 |
| Server                         | 4a9e8381-289a-4dfd-8460-69028eaa93b3 |
| ServiceEndpoints               | 1f4179b3-6bac-4d01-b421-71ea09171400 |
| ServiceHooks                   | e06e1c24-e93d-4e4a-908a-7d951187b483 |
| ServicingOrchestration         | 6ec4592e-048c-434e-8e6c-8671753a8418 |
| SettingEntries                 | 302acaca-b667-436d-a946-87133492041c |
| Social                         | 2725d2bc-7520-4af4-b0e3-8d876494731f |
| StrongBox                      | 83abde3a-4593-424e-b45f-9898af99034d |
| Tagging                        | c0e7a722-1cad-4ae6-b340-a8467501e7ce |
| TeamLabSecurity                | 0582eb05-c896-449a-b933-aa3d99e121d6 |
| TestManagement                 | 66312704-deb5-43f9-b51c-ab4ff5e351c3 |
| UtilizationPermissions         | 93bafc04-9075-403a-9367-b7164eac6b5c |
| VersionControlItems            | 093cbb02-722b-4ad6-9f88-bc452043fa63 |
| VersionControlItems2           | 35e35e8e-686d-4b01-aff6-c369d6e36ce0 |
| VersionControlPrivileges       | 0d140cae-8ac1-4f48-b6d1-c93ce0301a12 |
| ViewActivityPaneSecurity       | 5ab15bc8-4ea1-d0f3-8344-cab8fe976877 |
| WebPlatform                    | 7ffa7cf4-317c-4fea-8f1d-cfda50cfa956 |
| WorkItemQueryFolders           | 81c27cc8-7a9f-48ee-b63f-df1e1d0412dd |
| WorkItemsHub                   | 9a82c708-bfbe-4f31-984c-e860c2196781 |
| WorkItemTracking               | a60e0d84-c2f8-48e4-9c0c-f32da48d5fd1 |
| WorkItemTrackingAdministration | 84cc1aa4-15bc-423d-90d9-f97c450fc729 |
| WorkItemTrackingConfiguration  | 33344d9c-fc72-4d6f-aba5-fa317101a7e9 |
| WorkItemTrackingProvision      | 8adf73b7-389a-4276-b638-fe1653f7efc7 |
| Workspaces                     | a39371cf-0841-4c16-bbd3-276e341bc052 |

## Related articles

- [Security REST API](/rest/api/azure/devops/security/)
- [TFSSecurity command](/azure/devops/server/command-line/tfssecurity-cmd) 
- [Security glossary](security-glossary.md)
