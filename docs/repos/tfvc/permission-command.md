---
title: Permission command (Team Foundation Version Control)
titleSuffix: Azure Repos
description: Use the TFVC permission command to modify the user access control list (ACL) and display authorization settings for an item.
ms.assetid: 7a0b5521-ee07-44eb-9b8f-f145d918ebeb
ms.service: azure-devops-repos
ms.topic: reference
ms.date: 11/29/2022
monikerRange: '<= azure-devops'
ms.subservice: azure-devops-repos-tfvc
---

# Permission command  (Team Foundation Version Control)

[!INCLUDE [version-lt-eq-azure-devops](../../includes/version-lt-eq-azure-devops.md)]
[!INCLUDE [version-vs-gt-eq-2019](../../includes/version-vs-gt-eq-2019.md)]

The `tf permission` command modifies the user access control list (ACL) and displays authorization settings for an item in Team Foundation Version Control (TFVC).

## Prerequisites

To use the `permission` command, you must have the **Manipulate security settings** permission set to **Allow** for the folders being modified, be a member of the **Azure DevOps Administrators** security group, or be a system administrator on the local computer (Windows Administrator security group). 
For more information, see  [Default TFVC permissions](../../organizations/security/default-tfvc-permissions.md).

## Syntax

```
tf permission [/allow:(* |perm1[,perm2,...]] 
[/deny:(* |perm1[,perm2,...])] [/remove:(* |perm1[,perm2,...])] 
[/inherit:yes|no] [/user:username1[,username2,...]] 
[/group:groupname1[,groupname2,...]] [/collection:TeamProjectCollectionUrl] 
[/recursive] itemspec [/global][/login:username,[password]]
```

## Parameters

### Arguments

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
   `<permission>`
   :::column-end:::
   :::column span="3":::
   Name of a permission or role to modify. For more information about the permission names, see [Security groups, service accounts, and permissions in Azure DevOps](../../organizations/security/permissions.md).
   :::column-end:::
:::row-end:::
:::row:::
   :::column span="1":::
   `<username>`
   :::column-end:::
   :::column span="3":::
   Value for the `/user` option. A user name value can be expressed as `DOMAIN\username` or `username`, depending on network settings.
   :::column-end:::
:::row-end:::
:::row:::
   :::column span="1":::
   `<groupname>`
   :::column-end:::
   :::column span="3":::
   The user-provided value for the `/group` option.
   :::column-end:::
:::row-end:::
:::row:::
   :::column span="1":::
   `<TeamProjectCollectionUrl>`
   :::column-end:::
   :::column span="3":::
   The URL of the project collection that contains the item for which to modify permissions, for example `http://myserver:8080/tfs/DefaultCollection`.
   :::column-end:::
:::row-end:::
:::row:::
   :::column span="1":::
   `<itemspec>`
   :::column-end:::
   :::column span="3":::
   The file or folder for which to modify permissions. For more information about how TFVC parses an `itemspec` to determine which items are within scope, see [Use Team Foundation version control commands](use-team-foundation-version-control-commands.md).

   > [!Note]  
   > You can specify more than one `itemspec` argument.
   :::column-end:::
:::row-end:::
:::row:::
   :::column span="1":::
   `<username>`
   :::column-end:::
   :::column span="3":::
   Provides a value to the `/login` option. You can specify a user name value as either `DOMAIN\username` or `username`.
   :::column-end:::
:::row-end:::

### Options

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
   `/allow`
   :::column-end:::
   :::column span="3":::
   Specifies a list of TFVC permissions to add to the allow ACL.
   :::column-end:::
:::row-end:::
:::row:::
   :::column span="1":::
   `/deny`
   :::column-end:::
   :::column span="3":::
   Specifies a list of denied TFVC access permissions to add to the user ACL.
   :::column-end:::
:::row-end:::
:::row:::
   :::column span="1":::
   `/remove`
   :::column-end:::
   :::column span="3":::
   Specifies a list of TFVC permissions to remove from both the allow and the deny ACLs.
   :::column-end:::
:::row-end:::
:::row:::
   :::column span="1":::
   `/inherit`
   :::column-end:::
   :::column span="3":::
   If `yes`, the item inherits all permissions associated with a parent ACL. Can't combine with the `/remove` option.
   :::column-end:::
:::row-end:::
:::row:::
   :::column span="1":::
   `/user`
   :::column-end:::
   :::column span="3":::
   Specifies the name of a user to modify permissions for.
   :::column-end:::
:::row-end:::
:::row:::
   :::column span="1":::
   `/group`
   :::column-end:::
   :::column span="3":::
   Specifies the name of the group to modify permissions for.
   :::column-end:::
:::row-end:::
:::row:::
   :::column span="1":::
   `/collection`
   :::column-end:::
   :::column span="3":::
   Specifies the project collection.
   :::column-end:::
:::row-end:::
:::row:::
   :::column span="1":::
   `/recursive`
   :::column-end:::
   :::column span="3":::
   Applies the specified command to all items in the directory and any subdirectories.

   The `/recursive` option works only when viewing permissions. It doesn't work when setting permissions, for example with the `/allow`, `/deny`, or `/remove` options.
   :::column-end:::
:::row-end:::
:::row:::
   :::column span="1":::
   `/global`
   :::column-end:::
   :::column span="3":::
   Views or assigns a TFVC collection-level permission. To assign permissions, use the `/allow`, `/deny`, or `/remove` options. The argument `itemspec` isn't required. If listed, it's ignored.

   When used to view a TFVC collection, lists the following five permissions:

   
   - `tf: AdminShelvesets`
   - `tf: AdminWorkspaces`
   - `tf: CreateWorkspace`
   - `tf: AdminConfiguration`
   - `tf: AdminConnections`

   
   For more information, see [Collection-level groups](../../organizations/security/permissions.md#collection-level-groups).
   :::column-end:::
:::row-end:::
:::row:::
   :::column span="1":::
   `/login`
   :::column-end:::
   :::column span="3":::
   Specifies the user name and password to authenticate the user with Azure DevOps.
   :::column-end:::
:::row-end:::

## Remarks

You can use the `permission` command or its shortcut `perm` to manage authorization settings for TFVC server objects. However, this command doesn't let you manage authentication settings such as creating or modifying Azure DevOps security groups.

For more information on how to use the `tf` command-line utility, see [Use Team Foundation version control commands](use-team-foundation-version-control-commands.md).

## Examples

The following example displays the TFVC ACLs for *314.cs*:

```
c:\projects>tf permission 314.cs
```

The following example displays the ACL information for the `developers` group in the collection at `http://myserver:8080/tfs/DefaultCollection/`:

```
c:\projects>tf permission /group:[teamproject]\developers /collection: http://myserver:8080/tfs/DefaultCollection/
```

The following example allows members of the `leads` group to change their local copies of all items in the *$/baseobjects* TFVC server folder:

```
c:\projects>tf permission /allow:PendChange /group:[teamproject]\leads $/baseobjects
```

The following example removes all permission-related settings from the *$/baseobjects* folder for members of the `developers` group:

```
c:\projects>tf permission /remove:* /group:developers $/baseobjects
```

The following example allows the `testers` group to change their local copies of all items in *$/testproject*:

```
c:\projects>tf permission /allow:PendChange /group:testers$/testproject
```

The following example allows user `somealias` to make pending changes to their local copy of *$/testtproject/314.cs* in their workspace:

```
c:\projects>tf permission /allow:PendChange /user:somealias $/testproject/314.cs.
```

The following example denies user `somealias` the ability to make pending changes to their local copy of *$/testproject/1256.cs*:

```
c:\projects>tf permission /deny:PendChange /user:somealias $/testproject/1256.cs
```

## Related articles 

- [Use Team Foundation version control commands](use-team-foundation-version-control-commands.md)
