---
title: Merges Command
titleSuffix: Azure Repos
description: Merges Command
ms.assetid: dfa1c139-028d-4329-aa03-0f9845337f82
ms.prod: devops
ms.technology: devops-code-tfvc
ms.manager: jillfra
ms.author: sdanie
author: steved0x
ms.topic: reference
ms.date: 08/10/2016
monikerRange: '>= tfs-2015'
---


# Merges Command

#### Azure Repos | TFS 2018 | TFS 2017 | TFS 2015 | VS 2017 | VS 2015 | VS 2013

Displays detailed information about past merges between the specified source and destination branches.

**Required Permissions**  
To use the **merges** command, you must have the **Read** permission set to **Allow** for both source and destination branches. For more information, see [Permissions and groups reference](../../organizations/security/permissions.md).

    tf merges [source] destination [/recursive] [/extended] [/format:(brief|detailed)] [/login:username, [password]] [/showall]]] [/collection:TeamProjectCollectionUrl]

## Parameters<table>

<thead>
<tr><th><p><strong>Argument</strong></p></th><th><p><strong>Description</strong></p></th></tr></thead><tbody>
<tr>
	<td><p><em>source</em></p></td>
	<td><p>Filters the merge history to include only entries with the specified sources.</p><p>This parameter is optional.</p></td></tr>
<tr>
	<td><p><em>destination</em></p></td>
	<td><p>Specifies the destination branch for which merge history is displayed.</p><p>This parameter is required.</p></td></tr>
<tr>
	<td><p><em>username</em></p></td>
	<td><p>Provides a value to the <strong>/login</strong> option. You can specify a username value as either <em>DOMAIN</em>\<em>UserName</em> or <em>UserName</em>.</p></td></tr>
<tr>
	<td><p><em>TeamProjectCollectionUrl</em></p></td>
	<td><p>The URL of the project collection that contains the branches about which you want to display the merge history (for example, http://myserver:8080/tfs/DefaultCollection).</p></td></tr></tbody>
</table>

<table><thead>
<tr><th><p><strong>Option</strong></p></th><th><p><strong>Description</strong></p></th></tr></thead><tbody>
<tr>
	<td><p><strong>/recursive</strong></p></td>
	<td><p>Displays information for all merges in specified Team Foundation version control server folder and its subfolders.</p></td></tr>
<tr>
	<td><p><strong>/extended</strong></p></td>
	<td><p>Displays a list of merges for a specific range of target items (for example: <strong>tf merges</strong> tgt\file1.txt; C21-25). This option displays the types of merges (for example, add or edit) and detailed information about the source and target items. This option implies <strong>/format: Detailed</strong>.</p><strong>Note</strong>
 You cannot use this option if you have specified a source item. 
</td></tr>
<tr>
	<td><p><strong>/format</strong></p></td>
	<td><p>Specifies the formats in which merge history can appear:</p><ul><li><p><strong>Brief</strong>: default value, shows the changeset numbers for both the source and target items and the author and the date of the target checkin.</p></li><li><p><strong>Detailed</strong>: shows the detailed paths and changeset numbers for both the source and target items.</p></li></ul></td></tr>
<tr>
	<td><p><strong>/login</strong></p></td>
	<td><p>Specifies the user name and password to authenticate the user with Visual Studio Team Foundation Server.</p></td></tr>
<tr>
	<td><p><strong>/showall</strong></p></td>
	<td><p>Displays all past merges for a given target item under its current name and all previously used names.</p></td></tr>
<tr>
	<td><p><strong>/collection</strong></p></td>
	<td><p>Specifies the project collection.</p></td></tr></tbody>
</table>

## Remarks

For links to other Team Foundation commands that provide additional information about the items in your Team Foundation version control server and all the workspaces that map to it, see [Informational Commands](https://msdn.microsoft.com/library/ms181450).

For more information on how to find the **tf** command-line utility, see [Tf Command-Line Utility Commands](https://msdn.microsoft.com/library/z51z7zy0).

## Examples

The following example displays information about all merge operations performed between Beta1\_branch and RTM\_branch.

    c:\projects>tf merges /recursive Beta1_branch RTM_branch

-   Sample output:

        Changeset  Merged in Changeset   Author   Date
        --------------------------------------------------------
        135         162                   Justin     10/31/2003
        146         162                   Justin      10/31/2003
        147*        167                   Bill       11/02/2003

    The asterisk '\*' next to changeset 147 indicates that only some of the changes in that changeset \#147 were merged into changeset \#167.

## See Also

#### Reference

[Command-Line Syntax (Version Control)](https://msdn.microsoft.com/library/56f7w6be)  
[Merge Command](merge-command.md)  
[Branch Command](branch-command.md)  
#### Concepts

[Informational Commands](https://msdn.microsoft.com/library/ms181450)  
#### Other Resources

[Tf Command-Line Utility Commands](https://msdn.microsoft.com/library/z51z7zy0)  
[Branching and Merging](use-branches-isolate-risk-team-foundation-version-control.md)
