---
title: Git permission command
titleSuffix: Azure Repos
description: See how to use the tf git permission command to manage permissions for git projects.
ms.assetid: 14c451c2-c59e-46c7-afd5-c727ba683eb2
ms.service: azure-devops-repos
ms.topic: reference
ms.date: 11/14/2022
monikerRange: '<= azure-devops'
ms.subservice: azure-devops-repos-tfvc
---

# Git permission command

[!INCLUDE [version-lt-eq-azure-devops](../../includes/version-lt-eq-azure-devops.md)]
[!INCLUDE [version-vs-gt-eq-2019](../../includes/version-vs-gt-eq-2019.md)]

The `tf git permission` command modifies the user access control list (ACL) and displays authorization settings for a Git repository or branch within a Git repository.

## Prerequisites

- To view permissions, you must be able to view the artifact for the type of information you're requesting: **View collection-level information** for project collections, **View project-level information** for projects, and **Read** for repository and branch if you're viewing branch permissions.

- To manage permissions, you must have **Manage permissions** for the desired artifact.  

For more information, see [Default Git permissions](../../organizations/security/default-git-permissions.md).

## Syntax

```
tf git permission [/allow:(* |perm1[,perm2,...]] 
                  [/deny:(* |perm1[,perm2,...])]
                  [/remove:(* |perm1[,perm2,...])]
                  [/user:username1[,username2,...]]
                  [/group:groupname1[,groupname2,...]]
                  /collection:TeamProjectCollectionUrl
                  [/teamproject:TeamProjectIdentifier]
                  [/repository:RepositoryIdentifier]
                  [/branch:BranchName]
                  [/login:username,[password]]
```

## Parameters

|                     Parameter                     |                                                                                                                                                          Description                                                                                                                                                           |
|---------------------------------------------------|--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
|       `/allow:(* |<perm1>[,<perm2>,...])`       |                                                                                                                                                   The permissions to allow.                                                                                                                                                    |
|       `/deny:(* |<perm1>[,<perm2>,...])`        |                                                                                                                                                    The permissions to deny.                                                                                                                                                    |
|      `/remove:(* |<perm1>[,<perm2>,...])`       | The permissions to remove, sometimes referred to as not set. You can use all three of `/allow`, `/deny`, and `/remove` in the same invocation. For more information on how the allow, deny, and remove settings interact, see [Permission settings](../../organizations/security/about-permissions.md#permission-settings). |
|   `/user:<username1>[,<username2>,...]`    |                                                                                                              The user or users for which to allow, deny, or remove permissions. You must specify at least one user or group.                                                                                                               |
|  `/group:<groupname1>[,<groupname2>,...]`  |                                                                                      The groups or groups for which to allow, deny, or remove permissions. You must specify at least one user or group. Groups and individuals can be used together.                                                                                       |
| `/collection:<TeamProjectCollectionUrl>` |                                                 Specifies the URL of the project collection that contains the permissions to view or modify. For example: `http://myserver:8080/tfs/DefaultCollection` or `https://fabrikam-fiber.visualstudio.com`. This parameter is required.                                                 |
|  `/teamproject:<TeamProjectIdentifier>`  |                                                                                                                       Specifies the name of the project that contains the permissions to view or modify.                                                                                                                       |
|   `/repository:<RepositoryIdentifier>`   |                                                                                                                        Specifies the name of the repo that contains the permissions to view or modify.                                                                                                                         |
|          `/branch:<BranchName>`          |                                                                                      Specifies the name of the branch that contains the permissions to view or modify. If you specify `/branch`, you must also specify `/repository`.                                                                                      |
|      `/login:<username>[,<password>]`      |                                                                                      Specifies the user account to run the command. See [Use Team Foundation version control commands](use-team-foundation-version-control-commands.md).                                                                                       |

See [Git repository permission namespaces](../../organizations/security/namespace-reference.md#git-repositories) for a list of the permissions that can be administered by the `tf git permission` command.

## Examples

> [!NOTE]
> The following examples are broken into multiple lines for readability. To copy and paste them into the command line and run them, first copy them and paste them into Notepad or another tool and edit them so the commands are contained on a single line.

### View collection level permissions

The following example lists the permissions for the `fabrikam-fiber` collection.

```
tf git permission /collection:https://dev.azure.com/fabrikam-fiber 
                  /login:FabrikamUser@hotmail.com,FabrikamPassword
```

### View project level permissions

The following example lists the project level permissions for the `FabrikamFiber` project, which is in the `fabrikam-fiber` collection.

```
tf git permission /collection:https://dev.azure.com/fabrikam-fiber 
                  /teamproject:FabrikamFiber
                  /login:FabrikamUser@hotmail.com,FabrikamPassword
```

### View repository level permissions

The following example lists the project level permissions for the `FabrikamFiber` repository, which is in the `FabrikamFiber` project.

```
tf git permission /collection:https://dev.azure.com/fabrikam-fiber 
                  /teamproject:FabrikamFiber 
                  /repository:FabrikamFiber 
                  /login:FabrikamUser@hotmail.com,FabrikamPassword
```
### Require branch folders commands

The following examples show how to create a branch policy that enforces the following constraints:

- Only `main` can exist at the repository root.
- All users will be allowed to create branches under the `features/` and `users/` folders.
- Administrators will be able to create branches under the `releases/` folder.

In this example you use the following collection, project, and repository:

- `/collection: https://fabrikam-fiber.visualstudio.com`
- `/teamproject: FabrikamProject` 
- `/repository FabrikamRepo`

First, block the `CreateBranch` permission at the repository root for the project's contributors.

```
tf git permission /deny:CreateBranch 
                  /group:[FabrikamProject]\Contributors 
                  /collection:https://dev.azure.com/fabrikam-fiber/ 
                  /teamproject:FabrikamProject 
                  /repository:FabrikamRepo
```

Then, allow contributors to create branches under `features` and `users`.

```
tf git permission /allow:CreateBranch 
                  /group:[FabrikamProject]\Contributors 
                  /collection:https://dev.azure.com/fabrikam-fiber/ 
                  /teamproject:FabrikamProject 
                  /repository:FabrikamRepo 
                  /branch:features

tf git permission /allow:CreateBranch 
                  /group:[FabrikamProject]\Contributors 
                  /collection:https://dev.azure.com/fabrikam-fiber/ 
                  /teamproject:FabrikamProject 
                  /repository:FabrikamRepo 
                  /branch:users
```

Allow administrators to create branches under `releases`.

```
tf git permission /allow:CreateBranch 
                  /group:"[FabrikamProject]\Project Administrators" 
                  /collection:https://dev.azure.com/fabrikam-fiber/ 
                  /teamproject:FabrikamProject 
                  /repository:FabrikamRepo 
                  /branch:releases
```

Finally, allow administrators to create a branch called `main`, in case it ever gets deleted accidentally.

```
tf git permission /allow:CreateBranch 
                  /group:"[FabrikamProject]\Project Administrators" 
                  /collection:https://dev.azure.com/fabrikam-fiber/ 
                  /teamproject:FabrikamProject 
                  /repository:FabrikamRepo 
                  /branch:main
```
## Related articles

- [Git view command](git-view-command.md)
