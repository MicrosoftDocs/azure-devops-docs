---
title: Branch TFVC command
titleSuffix: Azure Repos
description: See how to use the Branch command in TFVC.
ms.assetid: 2e075024-9830-4373-a3d4-ac6a194d133f
ms.service: azure-devops-repos
ms.topic: reference
ms.date: 10/22/2022
monikerRange: '<= azure-devops'
ms.subservice: azure-devops-repos-tfvc
---


# Branch command (Team Foundation Version Control)

[!INCLUDE [version-lt-eq-azure-devops](../../includes/version-lt-eq-azure-devops.md)]
[!INCLUDE [version-vs-gt-eq-2019](../../includes/version-vs-gt-eq-2019.md)]


The TFVC `branch` command copies an item or set of items, including metadata and version control history, from one location to another in the Azure DevOps server and in the local workspace.

> [!NOTE]
> The results of this command are not reflected in the Azure DevOps server until you perform a check-in operation. For more information, see [Check in your work to the team's codebase](check-your-work-team-codebase.md).


## Prerequisites

To use the `branch` command, you must have the **Read** permission for the source item, and the **Check out** and **Merge** permissions for the target folder set to **Allow**. For more information, see  [Default TFVC permissions](../../organizations/security/default-tfvc-permissions.md).

## Syntax

```
tf branch olditem newitem [/version:versionspec] [/noget] [/lock:(none|checkin|checkout)] [/noprompt] [/silent] [/checkin] [/comment:("comment"|@commentfile)] [/author:authorname] [/login:username, [password]] [/recursive]
```

## Parameters

### Argument

|     **Argument**      |                                                                                                                                                                                      **Description**                                                                                                                                                                                       |
|-----------------------|--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
|       `<olditem>`       |                                                                                                                      Specifies the name of the source file or folder being branched. The `<olditem>` may also contain version information in the format `item;version`.                                                                                                                      |
|       `<newitem>`       | Specifies the name of the destination file or folder or the parent folder for the destination. If `<*newitem>` already exists and is an Azure DevOps Server folder, TFVC creates the branched items within it. Otherwise, `<newitem>` specifies the name of the destination file or folder. Conflicts can occur during check-in if the destination already exists. |
|     `<versionspec>`     |                                                            Provides a value for the `/version` option. For more information about how TFVC parses a version specification to determine which items are within its scope, see [Use Team Foundation version control commands](use-team-foundation-version-control-commands.md).                                                            |
|       `<comment>`       |                                                                                                                                                                            Provides a comment about the branch.                                                                                                                                                                            |
| `@<commentfile>` |                                                                                                                                                    Specifies the path of a file that contains the comment that is used for the branch.                                                                                                                                                     |
|     `<authorname>`      |                                                                                                                                                                    The user-provided value for the `/author` option.                                                                                                                                                                     |
|      `<username>`       |                                                                                                                                 Provides a value to the `/login` option. You can specify a username value as either `DOMAIN\username` or `<username>`.                                                                                                                                  |


### Option

:::row:::
   :::column span="1":::
   **Option**
   :::column-end:::
   :::column span="3":::
   **Description**
   :::column-end:::
:::row-end:::
:::row:::
   :::column span="1":::
   `/version`
   :::column-end:::
   :::column span="3":::
   The version of the item at which you want to create the branch. You can specify a version by:
   
   - Date/time (D10/20/2005)
   - Changeset number (C1256)
   - Label (Lmylabel)
   - Latest version (T)
   - Workspace (Wworkspacename)

   If no version is provided, TFVC uses the following logic to decide which version of the item to copy to the new branch:

   - If an Azure DevOps Server path is specified, then TFVC branches the item at the latest Azure DevOps Server version. For example, `tf branch $/projects/help.cs` uses the server version.
   - If a local path is specified for the source, TFVC uses the local, workspace version to create the new branch. For example, `tf branch C:\314.cs` uses the local workspace version.
   
   If you branch a file whose workspace version is older than the latest version in the Azure DevOps server, the file is branched at the older version.
   :::column-end:::
:::row-end:::
:::row:::
   :::column span="1":::
   `/lock`
   :::column-end:::
   :::column span="3":::
   Prevents other users from checking in or checking out items until you check in your pending branch and associated changes. For more information, see [Understanding Lock Types](understand-lock-types.md).
   
   Lock options:
   
   - `none`  
   Default. No lock is applied. If a lock exists on the file that you're creating a branch for, this option removes it.
   - `checkin`  
   Other users can check out the specified items, but they can't check in revisions to locked files until you release the lock by performing a check-in. If any other users have locked any one of the specified items, the lock operation fails.
   - `checkout`  
   Prevents other users from checking in or checking out any one of the specified items until you release the lock by performing a check-in. If any other users have locked any one of the specified items, the lock operation fails.
   :::column-end:::
:::row-end:::
:::row:::
   :::column span="1":::
   `/noget`
   :::column-end:::
   :::column span="3":::
   If this option is specified, local copies of the files and folders in the new branch aren't created in the local workspace. However, local copies will be retrieved into the workspace the next time that you perform a recursive get operation.

   > [!Note]  
   > You can prevent items, such as the contents of an */images* folder, from being retrieved to your workspace during recursive get and get latest operations by cloaking a workspace folder. For more information, see [Workfold Command](workfold-command.md).
   :::column-end:::
:::row-end:::
:::row:::
   :::column span="1":::
   `/noprompt`
   :::column-end:::
   :::column span="3":::
   Suppresses any prompts for input from you.
   :::column-end:::
:::row-end:::
:::row:::
   :::column span="1":::
   `/silent`
   :::column-end:::
   :::column span="3":::
   Implies `/noget`, and specifies that output isn't written to the command prompt window when you create a branch.
   :::column-end:::
:::row-end:::
:::row:::
   :::column span="1":::
   `/checkin`
   :::column-end:::
   :::column span="3":::
   Creates and checks in the branch to the server in one operation. This option doesn't create any pending changes in the local workspace.
   :::column-end:::
:::row-end:::
:::row:::
   :::column span="1":::
   `/comment`
   :::column-end:::
   :::column span="3":::
   Adds a comment to the new branch. This option is used only with the `/checkin` option.
   :::column-end:::
:::row-end:::
:::row:::
   :::column span="1":::
   `/author`
   :::column-end:::
   :::column span="3":::
   Identifies the author of the new branch. This option is used only with the `/checkin` option.
   :::column-end:::
:::row-end:::
:::row:::
   :::column span="1":::
   `/recursive`
   :::column-end:::
   :::column span="3":::
   For folders, branch all files inside too.
   :::column-end:::
:::row-end:::

## Remarks
If you specify a local path such as *c:\\00101* but don't specify a `<versionspec>`, TFVC uses the local workspace version as the basis for creating the new branch.

However, if you specify a server path such as *$/00101/\*.cs* and don't specify a `<versionspec>`, TFVC uses the latest Azure DevOps Server version as the basis for creating the new branch instead.

For more information on how to use the `tf` command-line utility, see [Use Team Foundation version control commands](use-team-foundation-version-control-commands.md).

## Examples
The following examples assume that `c:\projects` maps to the main folder in the workspace.

The following example creates a branch file that contains the latest workspace version of *314.cs*, names it *314\_branch*, and saves it to the current directory on disk and also to the Azure DevOps Server folder to which it maps.

```
c:\projects>tf branch 314.cs 314_branch
```

The following example copies all the files without pending edits in the workspace version of *314.cs* from its current Azure DevOps Server folder into the *testdata* Azure DevOps Server folder and from the current directory on disk to the working folder that maps to the *testdata* Azure DevOps Server folder.

```
c:\projects>tf branch C:\314.cs $/testdata
```

The following example copies all the files without pending edits in the current workspace version of the *testfiles* folder and the files it contains for all items from its current Azure DevOps Server folder into the *testfiles_branch* Azure DevOps Server folder and from *c:\\testfiles* into the local folder that maps to the *testfiles_branch* Azure DevOps Server folder.

```
c:\projects>tf branch C:\testfiles $/testfiles_branch
```

The following example creates a branch of *314.cs* as it existed in changeset #4 for the file. In the working folder on disk, as in the Azure DevOps server, a branch file titled *csharp_branch* is created.

```
c:\projects>tf branch C:\314.cs;C4 csharp_branch
```

The following example creates a new branch of *314.cs* as it was on 12/12/03. In the working folder on disk as in the Azure DevOps server, a branch file titled *314\branch* is created.

```
c:\projects>tf branch 314.cs;D12/12/03 314_branch
```

The following example branches the version of *314.cs* to which the `Beta1` label was applied, names it *Beta1branch*, and saves it to the current directory on disk in addition to the Azure DevOps Server folder to which the current directory maps.

```
c:\projects>tf branch 314.cs;LBeta1 314_Beta1branch
```

## Related articles

- [Use Team Foundation version control commands](use-team-foundation-version-control-commands.md)
- [Branch Folders and Files](branch-folders-files.md)
- [Branches Command](branches-command.md)
- [Merge Command](merge-command.md)
- [Working with Changesets](find-view-changesets.md)

