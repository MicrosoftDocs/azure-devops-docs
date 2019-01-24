---
title: Permission Command
titleSuffix: Azure Repos
description: Permission Command
ms.assetid: 7a0b5521-ee07-44eb-9b8f-f145d918ebeb
ms.prod: devops
ms.technology: devops-code-tfvc
ms.manager: jillfra
ms.author: sdanie
author: steved0x
ms.topic: reference
ms.date: 08/10/2016
monikerRange: '>= tfs-2015'
---


# Permission Command

#### Azure Repos | TFS 2018 | TFS 2017 | TFS 2015 | VS 2017 | VS 2015 | VS 2013

Modifies the user access control list (ACL) and displays authorization settings for an item under version control.

**Required Permissions**

To use the **permission** command, you must have the **Manipulate security settings** permission set to **Allow** for the folders being modified, be a member of the **Team Foundation Administrators** security group, or be a system administrator on the local computer (Windows Administrator security group). For more information, see [Permissions and groups reference](../../organizations/security/permissions.md).

    tf permission [/allow:(* |perm1[,perm2,...]] 
    [/deny:(* |perm1[,perm2,...])] [/remove:(* |perm1[,perm2,...])] 
    [/inherit:yes|no] [/user:username1[,username2,...]] 
    [/group:groupname1[,groupname2,...]] [/collection:TeamProjectCollectionUrl] 
    [/recursive] itemspec [/global][/login:username,[password]]
## Parameters

<table>
<thead>
<tr>
<th><p><strong>Argument</strong></p></th>
<th><p><strong>Description</strong></p></th>
</tr>
</thead>
<tbody>
<tr>
<td><p><em>perm</em></p></td>
<td><p>Name of a permission or role to modify. For more information about the permission names, see <a href="../../organizations/security/permissions.md">Team Foundation Server Permissions</a>.</p></td>
</tr>
<tr>
<td><p><em>Username</em></p></td>
<td><p>Provides a value to the <strong>/user</strong> option. A username value can be expressed in one of two ways, depending on the network settings: DOMAIN\username or username.</p></td>
</tr>
<tr>
<td><p><em>Groupname</em></p></td>
<td><p>The user-provided value for the <strong>/group</strong> option.</p></td>
</tr>
<tr>
<td><p><em>TeamProjectCollectionUrl</em></p></td>
<td><p>The URL of the project collection that contains the item for which you want to modify permissions (for example, http://myserver:8080/tfs/DefaultCollection).</p></td>
</tr>
<tr>
<td><p><em>Itemspec</em></p></td>
<td><p>Identifies the file or folder for which to modify permissions. For more information about how Team Foundation parses <em>itemspecs</em> to determine which items are within scope, see <a href="https://msdn.microsoft.com/library/56f7w6be">Command-Line Syntax (Version Control)</a>.</p>
<div class="alert">
<div class="mtps-table" xmlns="http://www.w3.org/1999/xhtml">
<div class="mtps-row">
**Note**
</div>
<div class="mtps-row">
You can specify more than one *Itemspec* argument.
</div>
</div>
</div></td>
</tr>
<tr>
<td><p><em>Username</em></p></td>
<td><p>Provides a value to the <strong>/login</strong> option. You can specify a username value as either <em>DOMAIN</em>\<em>UserName</em> or <em>UserName</em>.</p></td>
</tr>
</tbody>
</table>

<table>
<thead>
<tr>
<th><p><strong>Option</strong></p></th>
<th><p><strong>Description</strong></p></th>
</tr>
</thead>
<tbody>
<tr>
<td><p><strong>/allow</strong></p></td>
<td><p>Specifies a list of Team Foundation version control permissions to add to the allow ACL.</p></td>
</tr>
<tr>
<td><p><strong>/deny</strong></p></td>
<td><p>Specifies a list of denied Team Foundation version control access permissions to add to the user access control list.</p></td>
</tr>
<tr>
<td><p><strong>/remove</strong></p></td>
<td><p>Specifies a list of Team Foundation version control permissions to remove from both the allow and the deny ACLs.</p></td>
</tr>
<tr>
<td><p><strong>/inherit</strong></p></td>
<td><p>If you select <strong>yes</strong>, all permissions associated with a parent ACL are inherited by an item. Cannot be combined with the <strong>/remove</strong> option.</p></td>
</tr>
<tr>
<td><p><strong>/user</strong></p></td>
<td><p>Specifies the name of a user to modify permissions for.</p></td>
</tr>
<tr>
<td><p><strong>/group</strong></p></td>
<td><p>Name of the group for which to modify permissions.</p></td>
</tr>
<tr>
<td><p><strong>/collection</strong></p></td>
<td><p>Specifies the project collection.</p></td>
</tr>
<tr>
<td><p><strong>/recursive</strong></p></td>
<td><p>Applies the specified command to all items in the directory and any subdirectories.</p>
<p><strong>/recursive</strong> option works only when viewing the permissions for items in a source tree. It does not work when setting permissions, for example with <strong>/allow</strong>, <strong>/deny</strong> and <strong>/remove</strong> options.</p></td>
</tr>
<tr>
<td><p><strong>/global</strong></p></td>
<td><p>Used to view or assign any Team Foundation server permission.</p>
<p>To assign permissions, use the <strong>/allow</strong>, <strong>/deny</strong>, or <strong>/remove</strong> options.</p>
<p>The argument <em>itemspec</em> is not required. If it is listed, it is ignored.</p>
<p>When used to view the Team Foundation server permissions, the five permissions listed are as follows:</p>
<ul>
<li><p>tf: AdminShelvesets</p></li>
<li><p>tf: AdminWorkspaces</p></li>
<li><p>tf: CreateWorkspace</p></li>
<li><p>tf: AdminConfiguration</p></li>
<li><p>tf: AdminConnections</p></li>
</ul>
<p>For more information about permissions, see <a href="../../organizations/security/permissions.md">Team Foundation Server Permissions</a>.</p></td>
</tr>
<tr>
<td><p><strong>/login</strong></p></td>
<td><p>Specifies the user name and password to authenticate the user with Visual Studio Team Foundation Server.</p></td>
</tr>
</tbody>
</table>
## Remarks
You can use the **permission** command (or alternatively its shortcut, **perm**) to manage authorization settings for Team Foundation version control server objects. However, this command does not let you manage authentication settings such as creating or modifying Team Foundation security groups.

For more information about how to find the **tf** command-line utility, see [Tf Command-Line Utility Commands](https://msdn.microsoft.com/library/z51z7zy0).
## Examples
The following example displays the Team Foundation access control lists (ACLs) for 314.cs.

    c:\projects>tf permission 314.cs

The following example displays the ACL information that relates to the group "developers" for the collection that is located at http://myserver:8080/tfs/DefaultCollection/.

    c:\projects>tf permission /group:[teamproject]\developers /collection: http://myserver:8080/tfs/DefaultCollection/

The following example enables members of the "leads" group to change their local copies of all items in the $/baseobjects Team Foundation version control server folder.

    c:\projects>tf permission /allow:PendChange /group:[teamproject]\leads $/baseobjects

The following example removes all permission-related settings from the $/baseobjects folder for members of the "developers" group.

    c:\projects>tf permission /remove:* /group:developers $/baseobjects

The following example enables the group "testers" to change their local copies of all items in $/testproject.

    c:\projects>tf permission /allow:PendChange /group:testers$/testproject

The following example enables user somealias to make pending changes to his local copy of $/testtproject/314.cs in his workspace.

    c:\projects>tf permission /allow:PendChange /user:somealias $/testproject/314.cs.

The following example denies user somealias the ability to make pending changes to his local copy of $/testproject/1256.cs.

    c:\projects>tf permission /deny:PendChange /user:somealias $/testproject/1256.cs

## See Also

#### Reference

[Command-Line Syntax (Version Control)](https://msdn.microsoft.com/library/56f7w6be)

#### Other Resources

[Tf Command-Line Utility Commands](https://msdn.microsoft.com/library/z51z7zy0)
