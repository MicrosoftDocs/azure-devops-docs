---
title: Rename Command (Team Foundation Version Control)
titleSuffix: Azure Repos
description: Rename Command (Team Foundation Version Control)
ms.assetid: 5d754d91-41b0-40bd-a57a-aa22518deb23
ms.technology: devops-code-tfvc
ms.topic: reference
ms.date: 08/10/2016
monikerRange: '>= tfs-2015'
---


# Rename Command (Team Foundation Version Control)

**Azure Repos | Azure DevOps Server 2020 | Azure DevOps Server 2019 | TFS 2018 | TFS 2017 | TFS 2015 | VS 2017 | VS 2015 | VS 2013**

The **rename** command changes the name or the path of a file or folder. You can use the **rename** command or the aliases **move** or **ren**, to move a file or folder to a new location.

> [!NOTE]
> The results of this command are not reflected in the Team Foundation version control server until you perform a check-in operation. For more information, see [Check In Pending Changes](/previous-versions/visualstudio/visual-studio-2010/ms181411(v=vs.100)).

**Required Permissions**

To use the **rename** command, you have the **Check out** permission set to **Allow**. For more information, see [Permissions and groups reference](../../organizations/security/permissions.md).

```
tf rename [/lock:(none|checkout|checkin)] [/login:username,[password]] olditem newitem
```

## Parameters

:::row:::
   :::column span="1":::
   **Argument**
   :::column-end:::
   :::column span="3":::
   **Description**
   :::column-end:::
:::row-end:::

:::row:::
   :::column span="1":::
   *olditem*
   :::column-end:::
   :::column span="3":::
   The original name and path of the file or folder that is to be renamed. You can specify a local workspace path such as C:\myfiles\314.cs or a Team Foundation version control server path such as $/myfiles/314.cs.
   :::column-end:::
:::row-end:::
:::row:::
   :::column span="1":::
   *newitem*
   :::column-end:::
   :::column span="3":::
   The new name of the file or folder. You can use this to specify a different local or a Team Foundation version control server path location.
   :::column-end:::
:::row-end:::
:::row:::
   :::column span="1":::
   *username*
   :::column-end:::
   :::column span="3":::
   Provides a value to the **/login** option. You can specify a username value as either *DOMAIN\UserName* or *UserName*.
   :::column-end:::
:::row-end:::


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
   **/lock**
   :::column-end:::
   :::column span="3":::
   Include this option to prevent other users from checking in or checking out the specified items. If this option is not specified, the existing lock status of the item is not changed. For more information, see [Understanding Lock Types](understand-lock-types.md).

   Lock Options:

   
   - **None**  No lock is applied.

   - **Checkin**  Other users can check out the specified items but they cannot check in revisions to locked files until you release the lock by performing a check-in. If any other users have locked any one of the specified items, the lock operation fails.

   - **Checkout**  Prevents other users from checking in or checking out any one of the specified items until you release the lock by performing a check-in. If any other users have locked any one of the specified items, the lock operation fails.

   :::column-end:::
:::row-end:::
:::row:::
   :::column span="1":::
   **/login**
   :::column-end:::
   :::column span="3":::
   Specifies the user name and password to authenticate the user with Visual Studio Team Foundation Server.
   :::column-end:::
:::row-end:::


## Remarks
You can use the **rename** command of the **tf** command-line utility to move or rename a version-controlled item in your workspace. Use the **rename** command to move multiple files by specifying wildcard characters. The ability to rename multiple version-controlled files or folders, is only available from the command-line.

Use Rename to do the following:

-   Rename the *olditem* to the *newitem*, such as `tf rename 314.cs 315.cs`.

-   Move the *olditem* to a new location in the Team Foundation version control server by providing a *newitem* whose path differs from that of the *olditem*, such as ** **`tf rename 314.cs ..\\newdir\\314.cs`.

If you provide a *newitem* that specifies a non-existent folder, the **rename** command creates the destination folder. If *newitem* is a folder, *olditem* becomes a child of *newitem*.

You cannot rename an item if:

-   You have already deleted it before it was checked in to the same workspace.

-   The new name already exists in the Team Foundation version control server and is not a folder.

-   You have already added, branched, or renamed the pending check-in of the item.

-   The item is mapped in the workspace but not available on the local disk.

-   The item is cloaked.

You can rename an item for which another file of the same name has been added pending check-in but you cannot rename an item that has been branched but not yet checked in. When you rename a file that has pending edits, the edits are preserved.

An item that is explicitly mapped cannot be renamed without first changing the mapping. For example, if there is a working folder mapping of $/ProjectX/MyApp to c:\\MyApp, you cannot rename MyApp. You can rename items under *MyApp* but not *MyApp* itself.

For more information on how to find the **tf** command-line utility, see [Tf Command-Line Utility Commands](/previous-versions/visualstudio/visual-studio-2010/z51z7zy0(v=vs.100)).
## Examples
The following example changes the name of 314.cs to 1254.cs.

```
c:\projects>tf rename  314.cs  1254.cs
```

The following example renames 314.cs to 1254.cs and moves it to the newdir folder.

```
c:\projects>tf rename 314.cs ..\newdir\1254.cs
```

The following example changes the name of Form1.vb to MainPage.vb and applies a lock to it.

```
c:\projects>tf rename Form1.vb MainPage.vb /lock:checkin
```

## See Also

#### Tasks

[Move, Rename, and Delete Version-Controlled Files and Folders](rename-move-files-folders.md)

#### Reference

[Command-Line Syntax (Version Control)](/previous-versions/visualstudio/visual-studio-2010/56f7w6be(v=vs.100))

[Add Command](add-command.md)

[Delete Command (Team Foundation Version Control)](delete-command-team-foundation-version-control.md)

[Get Command](get-command.md)

#### Concepts

[Understanding Lock Types](understand-lock-types.md)

[Pending Changes](/previous-versions/visualstudio/visual-studio-2010/ms181409(v=vs.100))

#### Other Resources

[Tf Command-Line Utility Commands](/previous-versions/visualstudio/visual-studio-2010/z51z7zy0(v=vs.100))
