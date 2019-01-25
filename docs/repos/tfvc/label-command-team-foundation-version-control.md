---
title: Label Command (Team Foundation Version Control)
titleSuffix: Azure Repos
description: Label Command (Team Foundation Version Control)
ms.assetid: 815fd18a-1511-4f72-8a4a-7b1b0d3b2144
ms.prod: devops
ms.technology: devops-code-tfvc
ms.manager: jillfra
ms.author: sdanie
author: steved0x
ms.topic: reference
ms.date: 08/10/2016
monikerRange: '>= tfs-2015'
---


# Label Command (Team Foundation Version Control)

#### Azure Repos | TFS 2018 | TFS 2017 | TFS 2015 | VS 2017 | VS 2015 | VS 2013

Updated: October 2011

Attaches a label to or removes a label from a version of a file or folder in the server for Team Foundation version control.

**Required Permissions**

To use the **label** command, you must have the **Label** permission set to **Allow**. To modify or delete labels created by other users, you must have the **Administer labels** permission set to **Allow**. For more information, see [Permissions and groups reference](../../organizations/security/permissions.md).

    tf label labelname[@scope] [/owner:ownername] 
    itemspec [/version:versionspec] [/comment:("comment"|@commentfile)] 
    [/child:(replace|merge)] [/recursive] [/login:username,[password]] [/collection:TeamProjectCollectionUrl]	

	tf label /delete labelname[@scope] 
    itemspec [/login:username,[password]] [/collection:TeamProjectCollectionUrl]

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
<td><p><i>labelname</i></p></td>
<td><p>Identifies the name of the label to attach, modify, or remove from the specified items.</p></td>
</tr>
<tr>
<td><p><i>@scope</i></p></td>
<td><p>Specifies a Team Foundation version control server directory within which the labelname is unique. This parameter lets you independently create, manage, retrieve, and delete one label or set of labeled items when two labels of the same name are in different parts of the Team Foundation version control server.</p></td>
</tr>
<tr>
<td><p><i>ownername</i></p></td>
<td><p>Provides a value such as DOMAIN\JuanGo or just juango to the <strong>/owner</strong> option.</p></td>
</tr>
<tr>
<td><p><i>itemspec</i></p></td>
<td><p>Identifies the file or folder from which to label, re-label, or modify. For more information about how Team Foundation parses itemspecs to determine which items are within scope, see <a href="https://msdn.microsoft.com/library/56f7w6be">Command-Line Syntax (Version Control)</a>.</p>
<div class="alert">
<div class="mtps-table" xmlns="http://www.w3.org/1999/xhtml">
<div class="mtps-row">
<strong>Note</strong>
</div>
<div class="mtps-row">
You can specify more than one <i>Itemspec</i> argument.
</div>
</div>
</div></td>
</tr>
<tr>
<td><p><i>versionspec</i></p></td>
<td><p>Provides a value such as c2 for the <strong>/version</strong> option. For more information about how Team Foundation parses a version specification to determine which items are within its scope, see <a href="https://msdn.microsoft.com/library/56f7w6be">Command-Line Syntax (Version Control)</a>.</p></td>
</tr>
<tr>
<td><p><i>comment</i></p></td>
<td><p>A user-provided comment about the label.</p></td>
</tr>
<tr>
<td><p><i>@commentfile</i></p></td>
<td><p>The user-provided path of a file on disk that contains the comment to use for the check-in.</p></td>
</tr>
<tr>
<td><p><i>username</i></p></td>
<td><p>Provides a value to the <strong>/login</strong> option. You can specify a username value as either <i>DOMAIN</i>\\<i>UserName</i> or <i>UserName</i>.</p></td>
</tr>
<tr>
<td><p><i>TeamProjectCollectionUrl</i></p></td>
<td><p>The URL of the specified project collection that contains a version of a file or folder to which you want to attach a label or from which you want to delete a label (for example, http://myserver:8080/tfs/DefaultCollection).</p></td>
</tr>
</tbody>
</table>

| **Option** | **Description** |
|---|---|
| **/owner** | Specifies the name of the user who owns the label. |
| **/version** | Optional. Specifies the version of the file or folder to which the label should be attached, modified, or from which the label should be removed. These are changeset values, for example, C93. By default, Team Foundation uses the base workspace version if no *versionspec* is provided. |
| **/comment** | Adds or modifies a description or comment for the label. |
| **/child** | Not documented. |
| **/recursive** | Labels all items in the directory that matches your *itemspec* and *versionspec*. Cannot be used with the **/delete** option. |
| **/delete** | Removes the label. |
| **/login** | Specifies the user name and password to authenticate the user with Visual Studio Team Foundation Server. |
| **/collection** | Specifies the project collection. |


## Remarks
A label is a marker that you can attach to a set of unrelated files and folders in the Team Foundation version control server. Use the label to simplify their retrieval to a workspace for either development or build purposes. Therefore, a label is like a changeset or date/time to which and from which you can arbitrarily add and remove files and folders or change the versions of the items therein. A label is a version specification that can be passed to the following Team Foundation commands:

-   [Branch Command](branch-command.md)

-   [Difference Command](difference-command.md)

-   [Dir Command](dir-command.md)

-   [Get Command](get-command.md)

-   [History Command](history-command.md)

-   [Merge Command](merge-command.md)

-   [View Command](view-command.md)

Common types of labels are milestone labels such as "M1," "Beta2," or "Release Candidate 0."

Labels are version-specific, that is, you can only attach a label to one version of a file or folder. Each version of an item can support multiple labels.

A label is not a versioned object; therefore, the label history of files is not tracked. Additionally, a label operation does not create a pending change in your workspace. When you issue the **label** command, the update is immediately reflected in the Team Foundation version control server.

For more information about how to find the **tf** command-line utility, see [Tf Command-Line Utility Commands](https://msdn.microsoft.com/library/z51z7zy0).

### Removing and Deleting Labels

You can use the [Unlabel Command](unlabel-command.md) to remove a label from a file or folder. Alternatively, you can delete a label from the system using the `tf label /delete` command.

For information about an existing label that includes a list of the items to which the label has been attached, its comment, scope, and owner, see [Labels Command](labels-command.md).

### Managing Overloaded Labels

Label names must be unique throughout a specified scope. When you add a label, you reserve the use of that label name at or under the specified or implied scope. The default value for the *@scope* parameter is the project, for example, $/TeamProject1.

If another team or user adds a common label such as "M3" to a set of version-controlled files in a different part of the Team Foundation version control server, you can apply the M3 label to version-controlled files in your project as long as the root project folders are in different directories. For example, if files in the $/math directory are labeled "M3," you can apply the "M3" to files in your $/projects directory.

To get, remove a label, or otherwise manage your M3-labeled items, you should specify the @scope parameter to tell Team Foundation which M3 label you want to work with.

You can prevent other users from "overloading" a label such as "M3" in different parts of the Team Foundation version control server by either creating your label at the root ($/) of the Team Foundation version control server or by adjusting Label permissions for certain folders.
## Examples
The following example attaches the "goodbuild" label to the workspace version of the "docs" folder and the files and folders it contains.

    c:\projects>tf label goodbuild docs /recursive

The following example attaches the "goodbuild" label to the "docs" folder but not the files and folders the docs folder contains.

    c:\projects>tf label goodbuild docs

The following example attaches the "goodbuild" label to version 3 of 314.cs in the Team Foundation version control server.

    c:\projects>tf label goodbuild /version:3 $/src/314.cs

The following example deletes the "badbuild" label from all items in the Team Foundation version control server.

    c:\projects>tf label /delete badbuild

The following example uses the scope option to apply a label to 314.cs.

    c:\projects>tf label goodbuild@$/TeamProject1 314.cs

## See Also

#### Reference

[Command-Line Syntax (Version Control)](https://msdn.microsoft.com/library/56f7w6be)

[Labels Command](labels-command.md)

[Unlabel Command](unlabel-command.md)

#### Concepts

[Use Labels to Take a Snapshot of Your Files](use-labels-take-snapshot-your-files.md)

[Use Labels to Take a Snapshot of Your Files](use-labels-take-snapshot-your-files.md)

#### Other Resources

[Tf Command-Line Utility Commands](https://msdn.microsoft.com/library/z51z7zy0)
## Change History

| Date | History | Reason |
|---|---|---|
| October 2011 | Removed incorrect guidance on `/child` option. | Content bug fix. |
