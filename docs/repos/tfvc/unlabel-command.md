---
title: Unlabel Command
titleSuffix: Azure Repos
description: Unlabel Command
ms.assetid: 37b15bd4-ec75-4fbe-938e-544793c88a3c
ms.prod: devops
ms.technology: devops-code-tfvc
ms.manager: jillfra
ms.author: sdanie
author: steved0x
ms.topic: reference
ms.date: 08/10/2016
monikerRange: '>= tfs-2015'
---


# Unlabel Command

#### Azure Repos | TFS 2018 | TFS 2017 | TFS 2015 | VS 2017 | VS 2015 | VS 2013

Removes an item from an existing label in the server for Team Foundation version control.

**Required Permissions**

To use the **unlabel** command, you must either own the label, or have the **Administer labels** permission set to **Allow**. For more information, see [Permissions and groups reference](../../organizations/security/permissions.md).

    tf unlabel [/collection:TeamProjectCollectionUrl] [/recursive] [/login:username, [password]] labelname itemspec

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
<td><p><i>TeamProjectCollectionUrl</i></p></td>
<td><p>The URL of the project collection that contains the item that you want to remove from an existing label (for example, http://myserver:8080/tfs/DefaultCollection).</p></td>
</tr>
<tr>
<td><p><i>labelname</i></p></td>
<td><p>Specifies the name of the label to remove from the specified items.</p></td>
</tr>
<tr>
<td><p><i>itemspec</i></p></td>
<td><p>Identifies the file or folder from which to remove the specified label. For more information about how Team Foundation parses itemspecs to determine which items are within scope, see <a href="https://msdn.microsoft.com/library/56f7w6be">Command-Line Syntax (Version Control)</a>.</p>
<div class="alert">
<div class="mtps-table" xmlns="http://www.w3.org/1999/xhtml">
<div class="mtps-row">
<strong>Note</strong>
</div>
<div class="mtps-row">
You can specify more than one *itemspec* argument.
</div>
</div>
</div></td>
</tr>
<tr>
<td><p><i>username</i></p></td>
<td><p>Provides a value to the <strong>/login</strong> option. You can specify a username value as either <i>DOMAIN</i>\<i>UserName</i> or <i>UserName</i>.</p></td>
</tr>
</tbody>
</table>

| **Option** | **Description** |
|---|---|
| **/recursive** | Unlabels all items in the particular directory and all the subdirectories that match the *itemspec*. |
| **/collection** | Specifies the project collection. |
| **/login** | Specifies the user name and password to authenticate the user with Visual Studio Team Foundation Server. |

## Remarks

The **unlabel** command of the **tf** command-line utility removes an item from an existing label in the Team Foundation version control server. For an introduction to labels, see [Use Labels to Take a Snapshot of Your Files](use-labels-take-snapshot-your-files.md). For information about how to assign a label to a set of files and folders, see [Label Command (Team Foundation Version Control)](label-command-team-foundation-version-control.md).

If you remove all items from a label in the Team Foundation version control server, that label is deleted. You can also delete a label using the command `tf label /delete`. To learn more about the existing labels in the system, see [Labels Command](labels-command.md).

For more information on how to find the **tf** command-line utility, see [Tf Command-Line Utility Commands](https://msdn.microsoft.com/library/z51z7zy0).

## Examples

The following example removes the "goodbuild" label from 314.cs.

    c:\projects>tf unlabel goodbuild $/src/314.cs

The following example removes the "Beta1" label from all files and folders in the collection at http://myserver:8080/tfs/DefaultCollection.

    c:\projects>tf unlabel Beta1 $/ /collection:http://myserver:8080/tfs/DefaultCollection /recursive

## See Also

#### Reference

[Command-Line Syntax (Version Control)](https://msdn.microsoft.com/library/56f7w6be)

[Label Command (Team Foundation Version Control)](label-command-team-foundation-version-control.md)

[Labels Command](labels-command.md)

#### Concepts

[Use Labels to Take a Snapshot of Your Files](use-labels-take-snapshot-your-files.md)

#### Other Resources

[Tf Command-Line Utility Commands](https://msdn.microsoft.com/library/z51z7zy0)
