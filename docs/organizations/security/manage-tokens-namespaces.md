---
title: Manage permissions with a command line tool 
titleSuffix: Azure DevOps
description: Manage security permissions using az devops security permission commands  
ms.technology: devops-security
ms.assetid: 
ms.topic: conceptual
ms.author: kaelli
author: KathrynEE
monikerRange: '>= tfs-2013'
ms.date: 09/14/2020
---

# Manage permissions with command line tool

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
> - For on-premises Azure DevOps instances, you can use the [TFSSecurity](/azure/devops/server/command-line/tfssecurity-cmd) commands. 


## Hierarchy and tokens

A security namespace can be either hierarchical or flat. 
Tokens in a hierarchical namespace exist in a hierarchy with effective permissions inherited from parent tokens to child tokens.
Tokens in a flat namespace have no concept of a parent-child relationship between any two tokens.

Tokens in a hierarchical namespace either have a fixed length for each path part, or variable length.
If the tokens have variable-length path parts, then a separator character is used to distinguish where one path part ends and another begins.

Token examples for different namespaces are provided in the next section. 

## Prerequisites 

- To manage tokens and namespaces, you must be a member of the Project Collection Administrators security group.  
- You must have installed the Azure DevOps CLI extension as described in [Get started with Azure DevOps CLI](../../cli/index.md).  
- Sign into Azure DevOps using `az login`.  
- For the examples in this article, set the default organization using `az devops configure --defaults organization=YourOrganizationURL`.  

## Security permission commands

You can manage security permissions for a user or security group by using the `az devops security permission` commands. Enter the following command to list all available commands.  

`az devops security permission -h`

For more information on concepts related to security permissions, see the [Security REST API documentation](/rest/api/azure/devops/security)


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

<a id="list-namespaces" />

## List security namespaces 

You can list all available namespaces for an organization with the [az devops security permission namespace list](/cli/azure/ext/azure-devops/devops/security/permission/namespace#ext-azure-devops-az-devops-security-permission-namespace-list) command.

> [!div class="tabbedCodeSnippets"]
```CLI
az devops security permission namespace list [--local-only]
```

### Parameters

- **local-only**: Optional. If true, retrieve only local security namespaces.

    Security namespaces may have their data mastered in one microservice, but still be visible in other microservices. If a security namespace's data is mastered in microservice X, it is said to be local to that microservice. Otherwise, it is said to be remote.


Enter `az devops security permission namespace list` to list the namespaces defined for your organization or on-premises server.   

> [!NOTE]   
> Some namespaces listed are deprecated and should not be used. For a list of deprecated namespaces, see the [Deprecated and read-only namespaces](#deprecated-namespaces) section later in this article. 


> [!div class="tabbedCodeSnippets"]
```CLI
C: az devops security permission namespace list --org https://dev.azure.com/OrganizationName --output table
 
Id                                    Name
------------------------------------  ------------------------------
c788c23e-1b46-4162-8f5e-d7585343b5de  ReleaseManagement
58450c49-b02d-465a-ab12-59ae512d6531  Analytics
d34d3680-dfe5-4cc6-a949-7d9c68f73cba  AnalyticsViews
62a7ad6b-8b8d-426b-ba10-76a7090e94d5  PipelineCachePrivileges
7c7d32f7-0e86-4cd6-892e-b35dbba870bd  ReleaseManagement
a6cc6381-a1ca-4b36-b3c1-4e65211e82b6  AuditLog
5a27515b-ccd7-42c9-84f1-54c998f03866  Identity
445d2788-c5fb-4132-bbef-09c4045ad93f  WorkItemTrackingAdministration
101eae8c-1709-47f9-b228-0e476c35b3ba  DistributedTask
71356614-aad7-4757-8f2c-0fb3bff6f680  WorkItemQueryFolders
2e9eb7ed-3c0a-47d4-87c1-0ffdd275fd87  Git Repositories
3c15a8b7-af1a-45c2-aa97-2cb97078332e  VersionControlItems2
2bf24a2b-70ba-43d3-ad97-3d9e1f75622f  EventSubscriber
5a6cd233-6615-414d-9393-48dbb252bd23  WorkItemTrackingProvision
49b48001-ca20-4adc-8111-5b60c903a50c  ServiceEndpoints
cb594ebe-87dd-4fc9-ac2c-6a10a4c92046  ServiceHooks
bc295513-b1a2-4663-8d1a-7017fd760d18  Chat
3e65f728-f8bc-4ecd-8764-7e378b19bfa7  Collection
cb4d56d2-e84b-457e-8845-81320a133fbb  Proxy
bed337f8-e5f3-4fb9-80da-81e17d06e7a8  Plan
2dab47f9-bd70-49ed-9bd5-8eb051e59c02  Process
11238e09-49f2-40c7-94d0-8f0307204ce4  AccountAdminSecurity
b7e84409-6553-448a-bbb2-af228e07cbeb  Library
83d4c2e6-e57d-4d6e-892b-b87222b7ad20  Environment
52d39943-cb85-4d7f-8fa8-c6baac873819  Project
58b176e7-3411-457a-89d0-c6d0ccb3c52b  EventSubscription
83e28ad4-2d72-4ceb-97b0-c7726d5502c3  CSS
9e4894c3-ff9a-4eac-8a85-ce11cafdc6f1  TeamLabSecurity
fc5b7b85-5d6b-41eb-8534-e128cb10eb67  ProjectAnalysisLanguageMetrics
bb50f182-8e5e-40b8-bc21-e8752a1e7ae2  Tagging
f6a4de49-dbe2-4704-86dc-f8ec1a294436  MetaTask
bf7bfa03-b2b7-47db-8113-fa2e002cc5b1  Iteration
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
2725d2bc-7520-4af4-b0e3-8d876494731f  Location
83abde3a-4593-424e-b45f-9898af99034d  UtilizationPermissions
c0e7a722-1cad-4ae6-b340-a8467501e7ce  WorkItemsHub
0582eb05-c896-449a-b933-aa3d99e121d6  WebPlatform
66312704-deb5-43f9-b51c-ab4ff5e351c3  VersionControlPrivileges
93bafc04-9075-403a-9367-b7164eac6b5c  Workspaces
093cbb02-722b-4ad6-9f88-bc452043fa63  CrossProjectWidgetView
35e35e8e-686d-4b01-aff6-c369d6e36ce0  WorkItemTrackingConfiguration
0d140cae-8ac1-4f48-b6d1-c93ce0301a12  Discussion Threads
5ab15bc8-4ea1-d0f3-8344-cab8fe976877  BoardsExternalIntegration
7ffa7cf4-317c-4fea-8f1d-cfda50cfa956  DataProvider
81c27cc8-7a9f-48ee-b63f-df1e1d0412dd  Social
9a82c708-bfbe-4f31-984c-e860c2196781  Security
a60e0d84-c2f8-48e4-9c0c-f32da48d5fd1  IdentityPicker
84cc1aa4-15bc-423d-90d9-f97c450fc729  ServicingOrchestration
33344d9c-fc72-4d6f-aba5-fa317101a7e9  Build
8adf73b7-389a-4276-b638-fe1653f7efc7  DashboardsPrivileges
a39371cf-0841-4c16-bbd3-276e341bc052  VersionControlItems
```



### Example: List local security namespaces 

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

## List tokens for a security namespace 

You can list the tokens for a specified namespace and user or group with the [az devops security permission list](/cli/azure/ext/azure-devops/devops/security/permission#ext-azure-devops-az-devops-security-permission-list) command.

> [!div class="tabbedCodeSnippets"]
```CLI
az devops security permission list --id
                                   --subject
                                   [--recurse]
                                   [--token]
```

### Parameters

- - **id** or **namespace-id**: Required. ID of security namespace. To obtain the ID, use the [az devops security permission namespace list](#list-namespaces) command.
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

## Show namespace details

You can show details of permissions available in each namespace with the [az devops security permission namespace show](/cli/azure/ext/azure-devops/devops/security/permission/namespace#ext-azure-devops-az-devops-security-permission-namespace-show) command.

> [!div class="tabbedCodeSnippets"]
```CLI
az devops security permission namespace show --namespace-id <NAMESPACE_ID>
```

### Parameters

- **id** or **namespace-id**: Required. ID of security namespace.

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

- **id** or **namespace-id**: Required. ID of security namespace.
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

- **id** or **namespace-id**: Required. ID of security namespace.
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

- **id** or **namespace-id**: Required. ID of security namespace.
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


- **id** or **namespace-id**: Required. ID of security namespace.
- **subject**: Required. The email address or group descriptor of the user.
- **token**: Required. Individual security token.
- **allow-bit**: Optional. Allow bit or addition of bits. Required if **--deny-bit** is missing.
- **deny-bit**: Optional. Deny bit or addition of bits. Required if **--allow-bit** is missing.
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

## Security namespaces and their IDs

The following table lists valid namespaces and provides descriptions and links to more information.  

> [!NOTE]   
> Some permissions don't appear in any user interface. These permissions are assigned to security roles, members of a security group, or internal resources. 


---
:::row:::
   :::column span="1":::
      **Namespace**
   :::column-end:::
   :::column span="1":::
      **ID**
   :::column-end:::
   :::column span="2":::
      **Notes**
   :::column-end:::
:::row-end:::
---
:::row:::
   :::column span="":::
      AccountAdminSecurity
   :::column-end:::
   :::column span="":::
      11238e09-49f2-40c7-94d0-8f0307204ce4
   :::column-end:::
   :::column span="2":::
      Sets permissions to read, create, and modify organization account. These permissions are assigned to the organization owner and members of the Project Collection Administrator group.  
   :::column-end:::
:::row-end:::
---
::: moniker range=">= azure-devops-2019"
:::row:::
   :::column span="":::
      Analytics
   :::column-end:::
   :::column span="":::
      58450c49-b02d-465a-ab12-59ae512d6531
   :::column-end:::
   :::column span="2":::
      Manages permissions to read, administer permissions, and execute queries against the Analytics service.  
      **Token format for project-level permissions**: `$/PROJECT_ID`  
      **Example**: `$/xxxxxxxx-a1de-4bc8-b751-188eea17c3ba`  
   :::column-end:::
:::row-end:::
---
:::row:::
   :::column span="":::
      AnalyticsViews
   :::column-end:::
   :::column span="":::
      d34d3680-dfe5-4cc6-a949-7d9c68f73cba
   :::column-end:::
   :::column span="2":::
      [Manages object-level Analytics views permissions](/azure/devops/organizations/security/permissions#analytics-views-permissions) to read, edit, delete, and generate reports. You can manage these permissions for each [Analytics view from the user interface](/azure/devops/report/powerbi/analytics-security).  
      **Token format for project level permissions**: `$/Shared/PROJECT_ID`  
      **Example**: `$/Shared/xxxxxxxx-a1de-4bc8-b751-188eea17c3ba`  
   :::column-end:::
:::row-end:::
---
::: moniker-end
::: moniker range=">= azure-devops-2020"
:::row:::
   :::column span="":::
      AuditLog
   :::column-end:::
   :::column span="":::
      a6cc6381-a1ca-4b36-b3c1-4e65211e82b6
   :::column-end:::
   :::column span="2":::
      [Manages auditing permissions](/azure/devops/organizations/security/permissions#audit-streams-permissions) to read or write to the audit log and manage or delete audit streams.  
      **Token format**: `/AllPermissions`
   :::column-end:::
:::row-end:::
---
::: moniker-end
::: moniker range=">= azure-devops-2020"
:::row:::
   :::column span="":::
      BoardsExternalIntegration
   :::column-end:::
   :::column span="":::
      5ab15bc8-4ea1-d0f3-8344-cab8fe976877
   :::column-end:::
   :::column span="2":::
      Manages read/write permissions of external integrations with Azure Boards. 
   :::column-end:::
:::row-end:::
---
::: moniker-end
:::row:::
   :::column span="":::
      Build
   :::column-end:::
   :::column span="":::
      33344d9c-fc72-4d6f-aba5-fa317101a7e9
   :::column-end:::
   :::column span="2":::
      [Manages object-level build permissions](/azure/devops/organizations/security/permissions#build-object-level).  
      **Token format for project-level build permissions**: `PROJECT_ID`  
      If you need to update permissions for a particular build definition ID, for example, 12, security token for that build definition looks as follows:  
      **Token format for project level build permissions**: `PROJECT_ID/12`  
      **Example**: `xxxxxxxx-a1de-4bc8-b751-188eea17c3ba/12`  
   :::column-end:::
:::row-end:::
---
:::row:::
   :::column span="":::
      BuildAdministration
   :::column-end:::
   :::column span="":::
      302acaca-b667-436d-a946-87133492041c
   :::column-end:::
   :::column span="2":::
      [Manages organization or collection-level permissions for build resources](/azure/devops/organizations/security/permissions#collection-level) to view, manage, use, or administer permissions.  
   :::column-end:::
:::row-end:::
---
::: moniker range=">= azure-devops-2020"
:::row:::
   :::column span="":::
      Chat
   :::column-end:::
   :::column span="":::
      bc295513-b1a2-4663-8d1a-7017fd760d18
   :::column-end:::
   :::column span="2":::
      Manages permissions for chat services integrated with Azure DevOps, such as Slack and Microsoft Teams. For more information, see [Azure Boards with Slack](/azure/devops/boards/integrations/boards-slack), [Azure Boards with Microsoft Teams](/azure/devops/boards/integrations/boards-teams), [Azure Pipelines with Slack](/azure/devops/pipelines/integrations/slack), [Azure Pipelines with Microsoft Teams](/azure/devops/pipelines/integrations/microsoft-teams), [Azure Repos with Slack](/azure/devops/repos/integrations/repos-slack), and [Azure Repos with Microsoft Teams](/azure/devops/repos/integrations/repos-teams). 
   :::column-end:::
:::row-end:::
::: moniker-end
---
:::row:::
   :::column span="":::
      Collection
   :::column-end:::
   :::column span="":::
      3e65f728-f8bc-4ecd-8764-7e378b19bfa7
   :::column-end:::
   :::column span="2":::
      [Manages organization or collection-level general and service account permissions](/azure/devops/organizations/security/permissions#collection-level). You can manage these permissions through the [Organization or Collection settings administrative interface](/azure/devops/organizations/security/set-project-collection-level-permissions). 
   :::column-end:::
:::row-end:::
---
:::row:::
   :::column span="":::
      CSS   
   :::column-end:::
   :::column span="":::
      83e28ad4-2d72-4ceb-97b0-c7726d5502c3
   :::column-end:::
   :::column span="2":::
      [Manages area path (object-level) permissions](/azure/devops/organizations/security/permissions#area-path-object-level) to create, edit, and delete child nodes and set permissions to view or edit work items in a node. You can manage these permissions through the [Project settings, Project configuration administrative interface](/azure/devops/organizations/security/set-permissions-access-work-tracking#create-child-nodes-modify-work-items-under-an-area-path).   
   :::column-end:::
:::row-end:::
---
::: moniker range=">= tfs-2015"
:::row:::
   :::column span="":::
      DashboardsPrivileges
   :::column-end:::
   :::column span="":::
      8adf73b7-389a-4276-b638-fe1653f7efc7
   :::column-end:::
   :::column span="2":::
      [Manages dashboard (object-level) permissions](/azure/devops/organizations/security/permissions#dasboard-permissions) to edit and delete dashboards and manage permissions for a project dashboard. You can manage these permissions through the [Dashboards user interface](/azure/devops/report/dashboards/dashboard-permissions#set-permissions-for-a-project-dashboard).   
   :::column-end:::
:::row-end:::
---
::: moniker-end
::: moniker range="azure-devops"
:::row:::
   :::column span="":::
      Discussion Threads
   :::column-end:::
   :::column span="":::
      0d140cae-8ac1-4f48-b6d1-c93ce0301a12
   :::column-end:::
   :::column span="2":::
      Manages permissions to view, manage, moderate, and contribute to [code review discussions setup for Azure Pipelines](/azure/devops/pipelines/process/environments-kubernetes#setup-review-app). 
   :::column-end:::
:::row-end:::
---
::: moniker-end
::: moniker range=">= tfs-2017"
:::row:::
   :::column span="":::
      DistributedTask
   :::column-end:::
   :::column span="":::
      101eae8c-1709-47f9-b228-0e476c35b3ba
   :::column-end:::
   :::column span="2":::
      Manages permissions to view, manage, listen, create, and use [distributed tasks in Azure Pipelines](/azure/devops/pipelines/tasks/deploy/app-center-distribute).  
   :::column-end:::
:::row-end:::
---
::: moniker-end
:::row:::
   :::column span="":::
      Environment
   :::column-end:::
   :::column span="":::
      83d4c2e6-e57d-4d6e-892b-b87222b7ad20
   :::column-end:::
   :::column span="2":::
      Manages read and write permissions to the Environment security namespace at the project collection host level to the Pipelines service principal. 
   :::column-end:::
:::row-end:::
---
:::row:::
   :::column span="":::
      EventSubscriber
   :::column-end:::
   :::column span="":::
      2bf24a2b-70ba-43d3-ad97-3d9e1f75622f
   :::column-end:::
   :::column span="2":::
      Grant read and write permissions for notification handler. 
   :::column-end:::
:::row-end:::
---
:::row:::
   :::column span="":::
      EventSubscription
   :::column-end:::
   :::column span="":::
      58b176e7-3411-457a-89d0-c6d0ccb3c52b
   :::column-end:::
   :::column span="2":::
      Manages member permissions to view, edit, and unsubscribe from notifications or create a SOAP subscription.   
   :::column-end:::
:::row-end:::
---
:::row:::
   :::column span="":::
      Git Repositories
   :::column-end:::
   :::column span="":::
      2e9eb7ed-3c0a-47d4-87c1-0ffdd275fd87
   :::column-end:::
   :::column span="2":::
      [Manages Git repository (object-level) permissions](/azure/devops/organizations/security/permissions#git-repository-permissions-object-level). You can manage these permissions through the [Project settings, Repositories administrative interface](/azure/devops/organizations/security/set-git-tfvc-repository-permissions#set-git-repository-permissions).  
      **Token format for project-level permissions**: `repoV2/PROJECT_ID`  
      You need to append `RepositoryID` to update repository-level permissions.  
      **Token format for repository level permissions**: `repoV2/PROJECT_ID/REPO_ID`  
      For more information on the Git Repositories namespace and its tokens refer to this blog post, [Git repo tokens for the security service](https://devblogs.microsoft.com/devops/git-repo-tokens-for-the-security-service/).  
   :::column-end:::
:::row-end:::
---
:::row:::
   :::column span="":::
      Identity
   :::column-end:::
   :::column span="":::
      5a27515b-ccd7-42c9-84f1-54c998f03866
   :::column-end:::
   :::column span="2":::
      Manages permissions to read, write, delete user account identity information; manage group membership and create and restore identity scopes. The Manage group membership permissions is automatically granted to members of the Project Administrators and Project Collection Administrators group.   
      
      **Token format for project-level permissions**: `PROJECT_ID`  
      **Example**: `xxxxxxxx-a1de-4bc8-b751-188eea17c3ba`  
      To modify group level permissions for Group Origin ID [2b087996-2e64-4cc1-a1dc-1ccd5e7eb95b]:  
      **Token**: `xxxxxxxx-a1de-4bc8-b751-188eea17c3ba\2b087996-2e64-4cc1-a1dc-1ccd5e7eb95b`  
   :::column-end:::
:::row-end:::
---
:::row:::
   :::column span="":::
      Iteration
   :::column-end:::
   :::column span="":::
      bf7bfa03-b2b7-47db-8113-fa2e002cc5b1
   :::column-end:::
   :::column span="2":::
      [Manages iteration path (object-level) permissions](/azure/devops/organizations/security/permissions#iteration-path-permissions) to create, edit, and delete child nodes and view child node permissions. You can manage these permissions through the [Project settings, Project configuration administrative interface](/azure/devops/organizations/security/set-permissions-access-work-tracking#create-child-nodes-modify-work-items-under-an-area-path). <br/>
      **Token format**: `'vstfs:///Classification/Node/Iteration_Identifier/'`  
      Suppose, you have the following iterations configured for your team.  
      &ndash; ProjectIteration1  
      &nbsp;&nbsp;TeamIteration1  
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&ndash; TeamIteration1ChildIteration1  
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&ndash; TeamIteration1ChildIteration2  
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&ndash; TeamIteration1ChildIteration3  
      &nbsp;&nbsp;TeamIteration2  
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&ndash; TeamIteration2ChildIteration1  
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&ndash; TeamIteration2ChildIteration2  
      <br/>
      To update permissions for `ProjectIteration1\TeamIteration1\TeamIteration1ChildIteration1`, the security token looks as follows:  
      `vstfs:///Classification/Node/ProjectIteration1_Identifier:vstfs:///Classification/Node/TeamIteration1_Identifier:vstfs:///Classification/Node/TeamIteration1ChildIteration1_Identifier`  
   :::column-end:::
:::row-end:::
---
:::row:::
   :::column span="":::
      Library
   :::column-end:::
   :::column span="":::
      b7e84409-6553-448a-bbb2-af228e07cbeb
   :::column-end:::
   :::column span="2":::
      Manages library permissions to create, use, view, and administer library items. These permissions are assigned through [Library asset security roles](/azure/devops/organizations/security/about-security-roles#library-roles).   
   :::column-end:::
:::row-end:::
---
:::row:::
   :::column span="":::
      MetaTask
   :::column-end:::
   :::column span="":::
      f6a4de49-dbe2-4704-86dc-f8ec1a294436
   :::column-end:::
   :::column span="2":::
      [Manages task group permissions](/azure/devops/organizations/security/permissions#task-group) to edit and delete task groups, and administer task group permissions.  
   :::column-end:::
:::row-end:::
---
:::row:::
   :::column span="":::
      PipelineCachePrivileges
   :::column-end:::
   :::column span="":::
      62a7ad6b-8b8d-426b-ba10-76a7090e94d5
   :::column-end:::
   :::column span="2":::
      Manages permissions to read and write [pipeline cache entries](/azure/devops/pipelines/release/caching).  
   :::column-end:::
:::row-end:::
---
::: moniker range=">= tfs-2017"
:::row:::
   :::column span="":::
      Plan
   :::column-end:::
   :::column span="":::
      bed337f8-e5f3-4fb9-80da-81e17d06e7a8
   :::column-end:::
   :::column span="2":::
      [Manages permissions for Delivery Plans (object-level)](/azure/devops/organizations/security/permissions#plan-permissions") to view, edit, delete, and manage delivery plans. You can manage these permissions through the [user interface for each plan](/azure/devops/organizations/security/set-permissions-access-work-tracking#edit-or-manage-permissions-for-delivery-plans).      
   :::column-end:::
:::row-end:::
---
::: moniker-end
::: moniker range=">= azure-devops-2019"
:::row:::
   :::column span="":::
      Process
   :::column-end:::
   :::column span="":::
      2dab47f9-bd70-49ed-9bd5-8eb051e59c02
   :::column-end:::
   :::column span="2":::
      [Manages organization or collection-level permissions for processes](/azure/devops/organizations/security/permissions#administer-process-permissions) to create, edit, delete, and view processes and manage process permissions. You can manage these permissions through the [Organization or Collection settings, Process administrative interface](/azure/devops/organizations/security/set-permissions-access-work-tracking#customize-an-inherited-process).
   :::column-end:::
:::row-end:::
---
::: moniker-end
:::row:::
   :::column span="":::
      Project
   :::column-end:::
   :::column span="":::
      52d39943-cb85-4d7f-8fa8-c6baac873819
   :::column-end:::
   :::column span="2":::
      [Manages Project-level permissions](/azure/devops/organizations/security/permissions#project-level-permissions). You can manage these permissions through the [Project settings, Security or Permissions administrative interface](/azure/devops/organizations/security/set-project-collection-level-permissions#change-the-permission-level-for-a-project-level-group). <br/>  
      **Root token format**: `$PROJECT`  
      Token to secure permissions for each project in your organization.  
      `$PROJECT:vstfs:///Classification/TeamProject/PROJECT_ID`.  <br/>  
      Assume you have a project named `Test Project 1`.  
      You can get the project ID for this project by using `project show` command.  
      `az devops project show --project "Test Project 1"`  
      The command returns a project-id, for example, `xxxxxxxx-a1de-4bc8-b751-188eea17c3ba`.  
      Therefore, the token to secure project-related permissions for `Test Project 1` is:  
      `'$PROJECT:vstfs:///Classification/TeamProject/xxxxxxxx-a1de-4bc8-b751-188eea17c3ba'`  
   :::column-end:::
:::row-end:::
---
::: moniker range="tfs-2017 || tfs-2018"
:::row:::
   :::column span="":::
      Publisher (Publish extensions)
   :::column-end:::
   :::column span="":::
       
   :::column-end:::
   :::column span="2":::
      [Manages permissions to create, delete, update, and publish extensions](/azure/devops/extend/publish/overview). These permissions are granted when a user creates a publisher via the [Visual Studio Marketplace Publishing Portal](https://marketplace.visualstudio.com/manage/createpublisher). 
   :::column-end:::
:::row-end:::
---
::: moniker-end
::: moniker range=">= tfs-2017"
:::row:::
   :::column span="":::
      ReleaseManagement
   :::column-end:::
   :::column span="":::
      c788c23e-1b46-4162-8f5e-d7585343b5de
   :::column-end:::
   :::column span="2":::
      [Manages release (object-level-permissions](/azure/devops/organizations/security/permissions#release-management).  
      **Token format for project-level permissions**: `PROJECT_ID`  
      **Example**: `xxxxxxxx-a1de-4bc8-b751-188eea17c3ba`  
      If you need to update permissions for a particular release definition ID, for example, 12, security token for that release definition looks as follows:  
      **Token format for project-level release permissions**: `PROJECT_ID/12`  
      **Example**: `xxxxxxxx-a1de-4bc8-b751-188eea17c3ba/12`  
      If the release definition ID lives in a folder, then the security tokens look as follows:  
      **Token format**: `PROJECT_ID/{folderName}/12`  
      For stages, tokens look like: `PROJECT_ID/{folderName}/{DefinitionId}/Environment/{EnvironmentId}`.  
   :::column-end:::
:::row-end:::
---
::: moniker-end
::: moniker range="< azure-devops"
:::row:::
   :::column span="":::
      Server
   :::column-end:::
   :::column span="":::
      1f4179b3-6bac-4d01-b421-71ea09171400
   :::column-end:::
   :::column span="2":::
      [Manages permissions set at the server-level](/azure/devops/organizations/security/permissions#server-permissions). This includes permissions to create and delete project collections, edit instance-level information, make requests on behalf of others, and trigger events. You can manage these permissions, which are granted to members of the Team Foundation Administrators group, through the [Azure DevOps Server administration console](/azure/devops/server/admin/add-administrator). 
   :::column-end:::
:::row-end:::
---
::: moniker-end
::: moniker range=">= tfs-2015"
:::row:::
   :::column span="":::
      ServiceEndpoints
   :::column-end:::
   :::column span="":::
      49b48001-ca20-4adc-8111-5b60c903a50c
   :::column-end:::
   :::column span="2":::
      Manages permissions to create and use service connections or service endpoints. These permissions are assigned through [Service connection security roles](/azure/devops/organizations/security/about-security-roles#service-endpoint-roles).   
   :::column-end:::
:::row-end:::
---
::: moniker-end
::: moniker range=">= tfs-2017"
:::row:::
   :::column span="":::
      ServiceHooks
   :::column-end:::
   :::column span="":::
      cb594ebe-87dd-4fc9-ac2c-6a10a4c92046
   :::column-end:::
   :::column span="2":::
      Manage permissions to view, edit, and delete service hook subscriptions and publish service hook events. 
   :::column-end:::
:::row-end:::
---
::: moniker-end
:::row:::
   :::column span="":::
      Tagging
   :::column-end:::
   :::column span="":::
      bb50f182-8e5e-40b8-bc21-e8752a1e7ae2
   :::column-end:::
   :::column span="2":::
      Manages permissions to create, delete, enumerate, and use work item tags. You can manage the **Create tag definition** permission through the [Project settings, Permissions administrative interface](/azure/devops/organizations/security/set-project-collection-level-permissions#change-the-permission-level-for-a-project-level-group). <br/> 
      **Token format for project-level permissions**: `/PROJECT_ID`  
      **Example**: `/xxxxxxxx-a1de-4bc8-b751-188eea17c3ba`  
   :::column-end:::
:::row-end:::
---
::: moniker range="<= tfs-2015"
:::row:::
   :::column span="":::
      TeamLabSecurity
   :::column-end:::
   :::column span="":::
      9e4894c3-ff9a-4eac-8a85-ce11cafdc6f1
   :::column-end:::
   :::column span="2":::
      [Manages Lab Management permissions](/azure/devops/organizations/security/permissions#lab).
      > [!NOTE]  
      > Lab Management is deprecated for TFS 2017. We recommend that you [use Build and Release Management instead of Lab Management for automated testing](/visualstudio/test/lab-management/use-build-or-rm-instead-of-lab-management).
   :::column-end:::
:::row-end:::
---
::: moniker-end
::: moniker range="azure-devops"
:::row:::
   :::column span="":::
      UtilizationPermissions
   :::column-end:::
   :::column span="":::
      83abde3a-4593-424e-b45f-9898af99034d
   :::column-end:::
   :::column span="2":::
      Manages permissions to query usage.  
      **Token format**: `/`
   :::column-end:::
:::row-end:::
---
::: moniker-end
:::row:::
   :::column span="":::
      VersionControlItems 
   :::column-end:::
   :::column span="":::
      a39371cf-0841-4c16-bbd3-276e341bc052
   :::column-end:::
   :::column span="2":::
      Manages permissions for a [Team Foundation Version Control (TFVC) repository](/azure/devops/organizations/security/permissions#tfvc). You can manage these permissions through the [Project settings, Repository administrative interface](/azure/devops/organizations/security/set-git-tfvc-repository-permissions#set-tfvc-repository-permissions). 
   :::column-end:::
:::row-end:::
---
:::row:::
   :::column span="":::
      VersionControlItems2
   :::column-end:::
   :::column span="":::
      3c15a8b7-af1a-45c2-aa97-2cb97078332e
   :::column-end:::
   :::column span="2":::
      Manages permissions for a [Team Foundation Version Control (TFVC) repository](/azure/devops/organizations/security/permissions#tfvc). You can manage these permissions through the [Project settings, Repository administrative interface](/azure/devops/organizations/security/set-git-tfvc-repository-permissions#set-tfvc-repository-permissions). 
   :::column-end:::
:::row-end:::
---
:::row:::
   :::column span="":::
      VersionControlPrivileges
   :::column-end:::
   :::column span="":::
      66312704-deb5-43f9-b51c-ab4ff5e351c3
   :::column-end:::
   :::column span="2":::
      Manages project-level permissions for [Team Foundation Version Control (TFVC) repository](/azure/devops/organizations/security/permissions#tfvc). You can manage these permissions through the [Project settings, Permissions administrative interface](/azure/devops/organizations/security/set-project-collection-level-permissions#change-the-permission-level-for-a-project-level-group).
   :::column-end:::
:::row-end:::
---
::: moniker range="< azure-devops"
:::row:::
   :::column span="":::
      Warehouse
   :::column-end:::
   :::column span="":::
          
   :::column-end:::
   :::column span="2":::
      Can process or change settings for the data warehouse or SQL Server Analysis cube by using the [Warehouse Control Web Service](/azure/devops/report/admin/manage-reports-data-warehouse-cube?view=azure-devops-2020&preserve-view=true). You can manage the Administer Warehouse permission through the [Azure DevOps Server administration console](/azure/devops/server/admin/add-administrator). 
   :::column-end:::
:::row-end:::
---
::: moniker-end
:::row:::
   :::column span="":::
      WorkItemTrackingAdministration
   :::column-end:::
   :::column span="":::
      445d2788-c5fb-4132-bbef-09c4045ad93f
   :::column-end:::
   :::column span="2":::
      Manages permissions for administrating work tracking and destroying attachments. 
   :::column-end:::
:::row-end:::
---
:::row:::
   :::column span="":::
      WorkItemTrackingProvision
   :::column-end:::
   :::column span="":::
      5a6cd233-6615-414d-9393-48dbb252bd23
   :::column-end:::
   :::column span="2":::
      Manages permissions for changing work tracking processes and managing link types. The `WorkItemTrackingProvision` namespace is an older security namespace that is mostly used for TFS-2018 and earlier versions. The `Process` namespace replaces this namespace for managing processes in Azure DevOps Server 2019 and later versions.  
      **Root token format**: `/$`   
      **Token format for a specific project**: `$/PROJECT_ID`  
   :::column-end:::
:::row-end:::
---
:::row:::
   :::column span="":::
      Workspaces
   :::column-end:::
   :::column span="":::
      93bafc04-9075-403a-9367-b7164eac6b5c
   :::column-end:::
   :::column span="2":::
      Manages permissions for administering schleved changes, workspaces, and the ability to create a workspace at the organizaiton or collection level. The Workspaces namespace is only valid with the TFVC repository. You can manage these permissions through the [Organization or Collection settings administrative interface](/azure/devops/organizations/security/set-project-collection-level-permissions).   
      **Root token format**: `/`  
      **Token format for a specific workspace**: `/{workspace_name};{owner_id}`  
   :::column-end:::
:::row-end:::



<a id="deprecated-namespaces" /> 

## Deprecated and read-only namespaces

The following namespaces are either deprecated or read-only. You shouldn't use them. 

- `CrossProjectWidgetView`
- `DataProvider`
- `Favorites`
- `Graph`
- `IdentityPicker`
- `Job`
- `Location`
- `ProjectAnalysisLanguageMetrics`
- `Proxy`
- `Registry`
- `Security`
- `ServicingOrchestration`
- `SettingEntries`
- `Social`
- `StrongBox`
- `TestManagement`
- `ViewActivityPaneSecurity`
- `WebPlatform`
- `WorkItemsHub`
- `WorkItemTracking`
- `WorkItemTrackingConfiguration`


## Related articles

- [Security Namespaces REST API](/rest/api/azure/devops/security/security%20namespaces)
- [TFSSecurity](/azure/devops/server/command-line/tfssecurity-cmd) 
- [Security glossary](security-glossary.md)
