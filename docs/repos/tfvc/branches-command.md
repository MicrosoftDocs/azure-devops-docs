---
title: Branches Command
titleSuffix: Azure Repos
description: Branches Command
ms.assetid: dae78c90-c65a-444d-96cb-84027b91ad4a
ms.prod: devops
ms.technology: devops-code-tfvc
ms.manager: jillfra
ms.author: sdanie
author: steved0x
ms.topic: reference
ms.date: 08/10/2016
monikerRange: '>= tfs-2015'
---


# Branches Command

#### Azure Repos | TFS 2018 | TFS 2017 | TFS 2015 | VS 2017 | VS 2015 | VS 2013

Displays the history of a branch for a specified file or folder.

**Required Permissions**

To use the **branches** command, your **Read** permission must be set to **Allow** for the item and any branches to view their history. For more information, see [Permissions and groups reference](../../organizations/security/permissions.md).

    tf branches itemspec [/version:versionspec] [/collection:TeamProjectCollectionUrl] [/login:username,[password]]

## Parameters<table>
<thead>
<tr>
<th><p><strong>Argument</strong></p></th>
<th><p><strong>Description</strong></p></th>
</tr>
</thead>
<tbody>
<tr>
<td><p><i>Itemspec</i></p></td>
<td><p>Identifies the file or folder that contains the branch you want to examine. For more information about how Team Foundation parses itemspecs to determine which items are within scope, see <a href="https://msdn.microsoft.com/library/4y2ash30">Command-Line Options</a>.</p></td>
</tr>
<tr>
<td><p><i>Versionspec</i></p></td>
<td><p>Provides a value for the <strong>/version</strong> option. For more information about how Team Foundation parses a version specification to determine which items are within its scope, see <a href="https://msdn.microsoft.com/library/56f7w6be">Command-Line Syntax (Version Control)</a>.</p></td>
</tr>
<tr>
<td><p><i>TeamProjectCollectionUrl</i></p></td>
<td><p>The URL of the project collection that contains a file or folder in a branch for which you want to display the history (for example, http://myserver:8080/tfs/DefaultCollection).</p></td>
</tr>
<tr>
<td><p><i>username</i></p></td>
<td><p>Provides a value to the <strong>/login</strong> option. You can specify a username value as either <i>Domain</i>\<i>UserName</i> or <i>UserName</i>.</p></td>
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
<td><p><strong>/version</strong></p></td>
<td><p>Specifies the version for the path. This option is rarely used.</p></td>
</tr>
<tr>
<td><p><strong>/collection</strong></p></td>
<td><p>Specifies the project collection.</p></td>
</tr>
<tr>
<td><p><strong>/login</strong></p></td>
<td><p>Specifies the user name and password to authenticate the user with Visual Studio Team Foundation Server.</p></td>
</tr>
</tbody>
</table>
## Remarks
The branches command tells you when an item has been the source or destination of a branch operation. The output displays the parent branch for each version.

For more information on how to find the **tf** command-line utility, see [Tf Command-Line Utility Commands](https://msdn.microsoft.com/library/z51z7zy0).

## Examples

The following example displays branch history for the version-controlled file C:\\314.cs.

    c:\projects>tf branches 314.cs

The following example displays branch history for the header.h item in the Team Foundation version control server.

    c:\projects>tf branches $/applications/header.h

The following example displays the branch history of the folder $/rel30/math.

    c:\projects>tf branches $/rel30/math/

The following example displays the branch history for WindowsApplication13-branch. The results indicate the history for the specified branch by using angle brackets.

    D:\projects\ws1>tf branches WindowsApplication13-branch
    $/jun16-1/WindowsApplication13
    >>      $/jun16-1/WindowsApplication13-branch   Branched from version 3 <<
                    $/jun16-1/WindowsApplication13-branch-prime     Branched from version 5
            $/jun16-1/WindowsApplication13-branch2  Branched from version 3

## See Also

#### Reference

[Branch Command](branch-command.md)

[Merges Command](merges-command.md)

#### Concepts

[Informational Commands](https://msdn.microsoft.com/library/ms181450)

#### Other Resources

[Tf Command-Line Utility Commands](https://msdn.microsoft.com/library/z51z7zy0)

[Branching and Merging](use-branches-isolate-risk-team-foundation-version-control.md)
