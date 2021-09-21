---
title: Permission Command
titleSuffix: Azure Repos
description: Permission Command
ms.assetid: 7a0b5521-ee07-44eb-9b8f-f145d918ebeb
ms.technology: devops-code-tfvc
ms.topic: reference
ms.date: 08/10/2016
monikerRange: '>= tfs-2015'
---


# Permission Command

**Azure Repos | Azure DevOps Server 2020 | Azure DevOps Server 2019 | TFS 2018 | TFS 2017 | TFS 2015 | VS 2017 | VS 2015 | VS 2013**

Modifies the user access control list (ACL) and displays authorization settings for an item under version control.

**Required Permissions**

To use the **permission** command, you must have the **Manipulate security settings** permission set to **Allow** for the folders being modified, be a member of the **Team Foundation Administrators** security group, or be a system administrator on the local computer (Windows Administrator security group). For more information, see [Permissions and groups reference](../../organizations/security/permissions.md).

```
tf permission [/allow:(* |perm1[,perm2,...]] 
[/deny:(* |perm1[,perm2,...])] [/remove:(* |perm1[,perm2,...])] 
[/inherit:yes|no] [/user:username1[,username2,...]] 
[/group:groupname1[,groupname2,...]] [/collection:TeamProjectCollectionUrl] 
[/recursive] itemspec [/global][/login:username,[password]]
```

## Parameters


:::row:::
   :::column span="1":::
   **Argument**
   :::column-end:::
   :::column span="1":::
   **Description**
   :::column-end:::
:::row-end:::

:::row:::
   :::column span="1":::
   *perm*
   :::column-end:::
   :::column span="1":::
   Name of a permission or role to modify. For more information about the permission names, see [Team Foundation Server Permissions](../../organizations/security/permissions.md).
   :::column-end:::
:::row-end:::
:::row:::
   :::column span="1":::
   *Username*
   :::column-end:::
   :::column span="1":::
   Provides a value to the **/user** option. A username value can be expressed in one of two ways, depending on the network settings: DOMAIN\username or username.
   :::column-end:::
:::row-end:::
:::row:::
   :::column span="1":::
   *Groupname*
   :::column-end:::
   :::column span="1":::
   The user-provided value for the **/group** option.
   :::column-end:::
:::row-end:::
:::row:::
   :::column span="1":::
   *TeamProjectCollectionUrl*
   :::column-end:::
   :::column span="1":::
   The URL of the project collection that contains the item for which you want to modify permissions (for example, http://myserver:8080/tfs/DefaultCollection).
   :::column-end:::
:::row-end:::
:::row:::
   :::column span="1":::
   *Itemspec*
   :::column-end:::
   :::column span="1":::
   Identifies the file or folder for which to modify permissions. For more information about how Team Foundation parses *itemspecs* to determine which items are within scope, see [Command-Line Syntax (Version Control)](/previous-versions/visualstudio/visual-studio-2010/56f7w6be(v=vs.100)).

   > [!Note]  
   > You can specify more than one *Itemspec* argument.
   :::column-end:::
:::row-end:::
:::row:::
   :::column span="1":::
   *Username*
   :::column-end:::
   :::column span="1":::
   Provides a value to the **/login** option. You can specify a username value as either *DOMAIN*&lt;em&gt;UserName</em> or *UserName*.
   :::column-end:::
:::row-end:::

   
:::row:::
   :::column span="1":::
   **Option**
   :::column-end:::
   :::column span="1":::
   **Description**
   :::column-end:::
:::row-end:::
:::row:::
   :::column span="1":::
   **/allow**
   :::column-end:::
   :::column span="1":::
   Specifies a list of Team Foundation version control permissions to add to the allow ACL.
   :::column-end:::
:::row-end:::
:::row:::
   :::column span="1":::
   **/deny**
   :::column-end:::
   :::column span="1":::
   Specifies a list of denied Team Foundation version control access permissions to add to the user access control list.
   :::column-end:::
:::row-end:::
:::row:::
   :::column span="1":::
   **/remove**
   :::column-end:::
   :::column span="1":::
   Specifies a list of Team Foundation version control permissions to remove from both the allow and the deny ACLs.
   :::column-end:::
:::row-end:::
:::row:::
   :::column span="1":::
   **/inherit**
   :::column-end:::
   :::column span="1":::
   If you select **yes**, all permissions associated with a parent ACL are inherited by an item. Cannot be combined with the **/remove** option.
   :::column-end:::
:::row-end:::
:::row:::
   :::column span="1":::
   **/user**
   :::column-end:::
   :::column span="1":::
   Specifies the name of a user to modify permissions for.
   :::column-end:::
:::row-end:::
:::row:::
   :::column span="1":::
   **/group**
   :::column-end:::
   :::column span="1":::
   Name of the group for which to modify permissions.
   :::column-end:::
:::row-end:::
:::row:::
   :::column span="1":::
   **/collection**
   :::column-end:::
   :::column span="1":::
   Specifies the project collection.
   :::column-end:::
:::row-end:::
:::row:::
   :::column span="1":::
   **/recursive**
   :::column-end:::
   :::column span="1":::
   Applies the specified command to all items in the directory and any subdirectories.

   **/recursive** option works only when viewing the permissions for items in a source tree. It does not work when setting permissions, for example with **/allow**, **/deny** and **/remove** options.
   :::column-end:::
:::row-end:::
:::row:::
   :::column span="1":::
   **/global**
   :::column-end:::
   :::column span="1":::
   Used to view or assign a TFVC collection-level permission.

   To assign permissions, use the **/allow**, **/deny**, or **/remove** options.

   The argument *itemspec* is not required. If it is listed, it is ignored.

   When used to view a TFVC collection-level, the five permissions listed are as follows:

   
   - tf: AdminShelvesets

   - tf: AdminWorkspaces

   - tf: CreateWorkspace

   - tf: AdminConfiguration

   - tf: AdminConnections

   
   For more information about permissions, see [Permissions and groups, Collection-level permissions](../../organizations/security/permissions.md#administer-shelved-changes).
   :::column-end:::
:::row-end:::
:::row:::
   :::column span="1":::
   **/login**
   :::column-end:::
   :::column span="1":::
   Specifies the user name and password to authenticate the user with Visual Studio Team Foundation Server.
   :::column-end:::
:::row-end:::



## Remarks

You can use the <strong>permission</strong> command (or alternatively its shortcut, <strong>perm</strong>) to manage authorization settings for Team Foundation version control server objects. However, this command does not let you manage authentication settings such as creating or modifying Team Foundation security groups.

For more information about how to find the **tf** command-line utility, see [Tf Command-Line Utility Commands](/previous-versions/visualstudio/visual-studio-2010/z51z7zy0(v=vs.100)).

## Examples

The following example displays the Team Foundation access control lists (ACLs) for 314.cs.

```
c:\projects>tf permission 314.cs
```

The following example displays the ACL information that relates to the group "developers" for the collection that is located at http://myserver:8080/tfs/DefaultCollection/.

```
c:\projects>tf permission /group:[teamproject]\developers /collection: http://myserver:8080/tfs/DefaultCollection/
```

The following example enables members of the "leads" group to change their local copies of all items in the $/baseobjects Team Foundation version control server folder.

```
c:\projects>tf permission /allow:PendChange /group:[teamproject]\leads $/baseobjects
```

The following example removes all permission-related settings from the $/baseobjects folder for members of the "developers" group.

```
c:\projects>tf permission /remove:* /group:developers $/baseobjects
```

The following example enables the group "testers" to change their local copies of all items in $/testproject.

```
c:\projects>tf permission /allow:PendChange /group:testers$/testproject
```

The following example enables user somealias to make pending changes to his local copy of $/testtproject/314.cs in his workspace.

```
c:\projects>tf permission /allow:PendChange /user:somealias $/testproject/314.cs.
```

The following example denies user somealias the ability to make pending changes to his local copy of $/testproject/1256.cs.

```
c:\projects>tf permission /deny:PendChange /user:somealias $/testproject/1256.cs
```

## Related articles 

- [Command-Line Syntax (version control)](/previous-versions/visualstudio/visual-studio-2010/56f7w6be(v=vs.100))
- [Tf Command-Line utility commands](/previous-versions/visualstudio/visual-studio-2010/z51z7zy0(v=vs.100))