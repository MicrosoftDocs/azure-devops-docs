---
title: Git view command
titleSuffix: Azure Repos
description: See how to use the tf git view command to view a file from a Git repository on your computer.
ms.assetid: e9ec11ff-9f66-454a-8448-e2b354ae5b74
ms.service: azure-devops-repos
ms.topic: reference
ms.date: 11/14/2022
monikerRange: '<= azure-devops'
ms.subservice: azure-devops-repos-tfvc
---


# Git view command

[!INCLUDE [version-lt-eq-azure-devops](../../includes/version-lt-eq-azure-devops.md)]
[!INCLUDE [version-vs-gt-eq-2019](../../includes/version-vs-gt-eq-2019.md)]

The `tf git view` command retrieves a file from a Git repository to a temporary location on your computer and displays it.

## Prerequisites

- For requirements, see [Default TFVC permissions](../../organizations/security/default-tfvc-permissions.md).

- You must be able to view the artifact for the type of information you are requesting: **View collection-level information** for project collections, **View project-level information** for projects, and **Read** for repository and branch if you're viewing branch information. For more information, see [Default Git permissions](../../organizations/security/default-git-permissions.md).

## Syntax

```
tf git view /collection:TeamProjectCollectionUrl
            /teamproject:TeamProjectIdentifier
            /repository:RepositoryIdentifier
            (/blobId:blobId | /path:path [/commitId:commitId])
            [/output:localfile]
            [/console]
            [/login:username[,password]]
```

## Parameters

|                     Parameter                     |                                                                                                            Description                                                                                                            |
|---------------------------------------------------|-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| `/collection:<TeamProjectCollectionUrl>` |            Specifies the URL of the project collection that contains the file to view. For example: `http://myserver:8080/tfs/DefaultCollection` or `https://dev.azure.com/fabrikam-fiber`. This parameter is required.             |
|  `/teamproject:<TeamProjectIdentifier>`  |                                                                       Specifies the name of the project that contains the repo. This parameter is required.                                                                       |
|   `/repository:<RepositoryIdentifier>`   |                                                                    Specifies the name of the repo that contains the file to view. This parameter is required.                                                                     |
|            `/blobId:<blobId>`            |                                          Specifies the ID of a blob to retrieve. This option can't be used with the `path` parameter. One of either `path` or `blob` is required.                                          |
|            `/path:<path>`            |                                              Specifies the path of the file. This option can't be used with the `blob` parameter. One of either `path` or `blob` is required.                                              |
|          `/commitId:<commitId>`          | Specifies the commit that contains the file to open for viewing. If you omit this option, `git view` retrieves the latest version from the default branch, typically `main`. This parameter can only be used with the `path` option. |
|          `/output:<localfile>`           |                                                         The path and name under which to save the retrieved file. If not supplied, the file is saved in *%Temp%\\TFSTemp*.                                                         |
|                   `/console`                    |         Specifies that the file output should be directed to the console. This parameter is useful if you want to write the file out to disk using console redirection, with a different name or location than the versioned item.         |
|      `/login:<username>[,<password>]`      |                                        Specifies the user account to run the command. See [Use Team Foundation version control commands](use-team-foundation-version-control-commands.md).                                        |

## Examples

>[!NOTE]
>The following examples are broken into multiple lines for readability. To copy and paste them into the command-line and run them, first copy them and paste them into Notepad or another tool and edit them so the commands are contained on a single line.

The following example retrieves a file from the default branch, typically `main`, saves it to the current folder, and prompts the user for their credentials.

```
tf git view /collection:https://dev.azure.com/fabrikam-fiber /teamproject:FabrikamProject 
            /repository:FabrikamRepo 
            /path:FabrikamApp/Global.asax.cs 
            /output:Global.asax.cs 
```

The following example retrieves a file from the default branch, typically `main`, and doesn't prompt for credentials since they're supplied.

```
tf git view /collection:https://dev.azure.com/fabrikam-fiber 
            /teamproject:FabrikamProject 
            /repository:FabrikamRepo 
            /path:FabrikamApp/Global.asax.cs 
            /output:Global.asax.cs 
            /login:FabrikamUser@hotmail.com,FabrikamPassword
```

The following example retrieves a file from the specified commit.

```
tf git view /collection:https://dev.azure.com/fabrikam-fiber 
            /teamproject:FabrikamProject 
            /repository:FabrikamRepo 
            /path:FabrikamApp/Global.asax.cs 
            /commitID:a2db383ffefa46a6f6638605a806925ea7c16ad9 
            /output:Global.asax.cs 
            /login:FabrikamUser@hotmail.com,FabrikamPassword
```

## Related articles

- [Git permission command](git-permission-command.md)
