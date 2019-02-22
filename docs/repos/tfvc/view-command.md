---
title: Retrieve a file using the TFVC View Command
titleSuffix: Azure Repos
description: Retrieve a file using the TFVC View Command for Azure DevOps Services or TFS
ms.assetid: d67fcb55-6f54-434f-ba05-4564f976b8d9
ms.prod: devops
ms.technology: devops-code-tfvc
ms.manager: jillfra
ms.author: sdanie
author: steved0x
ms.topic: reference
ms.date: 08/10/2016
monikerRange: '>= tfs-2015'
---


# View Command

#### Azure Repos | TFS 2018 | TFS 2017 | TFS 2015 | VS 2017 | VS 2015 | VS 2013

The **view** command retrieves a specific version of a file to a temporary folder on your computer and displays it.

**Required Permissions**

To use the **view** command, you must have the **Read** permission set to **Allow**. For more information, see [Permissions and groups reference](../../organizations/security/permissions.md).

    tf view [/collection:TeamProjectCollectionUrl] [/console] [/recursive] [/output:localfile]
    [/shelveset:shelvesetname[;owner]] [/noprompt] itemspec 
    [/version:versionspec] [/login:username,[password]]
## Parameters<table>
<thead>
<tr>
<th><p><strong>Argument</strong></p></th>
<th><p><strong>Description</strong></p></th>
</tr>
</thead>
<tbody>
<tr>
<td><p><em>TeamProjectCollectionUrl</em></p></td>
<td><p>The URL of the project collection that contains a specific version of a file about which you want to retrieve information (for example, http://myserver:8080/tfs/DefaultCollection).</p></td>
</tr>
<tr>
<td><p><em>shelvesetname [:owner]</em></p></td>
<td><p>Identifies the shelveset. The optional <em>owner</em> argument is used to specify a shelveset that is not owned by the current user.</p></td>
</tr>
<tr>
<td><p><em>Itemspec</em></p></td>
<td><p>Identifies the file or folder to retrieve. For more information about how Team Foundation parses itemspecs to determine which items are within scope, see <a href="https://msdn.microsoft.com/library/4y2ash30">Command-Line Options</a>.</p>
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
<td><p><em>Versionspec</em></p></td>
<td><p>Provides a value such as C3 for the <strong>/version</strong> option. For more information about how Team Foundation parses a version specification to determine which items are within its scope, see <a href="https://msdn.microsoft.com/library/56f7w6be">Command-Line Syntax (Version Control)</a>.</p></td>
</tr>
<tr>
<td><p><em>username</em></p></td>
<td><p>Provides a value to the <strong>/login</strong> option. You can specify a username value as either <em>DOMAIN</em>\<em>UserName</em> or <em>UserName</em>.</p></td>
</tr>
<tr>
<td><p><em>localfile</em></p></td>
<td><p>Provides the path of the folder to which you want to output the file.</p></td>
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
<td><p><strong>/console</strong></p></td>
<td><p>Specifies that the file output should be directed to the console. This is useful if you want to write the file out to disk using console redirection (with a different name or location than the versioned item).</p></td>
</tr>
<tr>
<td><p><strong>/recursive</strong></p></td>
<td><p>Views all items in the specified directory and any subdirectories.</p></td>
</tr>
<tr>
<td><p><strong>/shelveset</strong></p></td>
<td><p>Specifies the shelveset by name.</p></td>
</tr>
<tr>
<td><p><strong>/noprompt</strong></p></td>
<td><p>Specifies that Team Foundation should not prompt you before displaying each file when you include a wildcard in an <em>itemspec</em> that matches more than one file.</p></td>
</tr>
<tr>
<td><p><strong>/version</strong></p></td>
<td><p>Specifies the version of the file to open for viewing. If you omit this option, <strong>view</strong> retrieves the latest Team Foundation version control server version.</p></td>
</tr>
<tr>
<td><p><strong>/collection</strong></p></td>
<td><p>Specifies the project collection.</p></td>
</tr>
<tr>
<td><p><strong>/login</strong></p></td>
<td><p>Specifies the user name and password to authenticate the user with Visual Studio Team Foundation Server.</p></td>
</tr>
<tr>
<td><p><strong>/output</strong></p></td>
<td><p>Outputs the file to a local folder instead of invoking a Windows shell to open the file.</p></td>
</tr>
</tbody>
</table>
## Remarks
The **view** command of the **tf** command-line utility retrieves a read-only copy of a file from the Team Foundation version control server to a temporary folder on your computer and displays its contents. Unless you specify a particular version, Team Foundation retrieves the latest version of the file from the Team Foundation version control server.

The **view** command does not retrieve files into your workspace or check them out. See [Get Command](get-command.md) and [Checkout and Edit Commands](checkout-or-edit-command.md) for more information about how to get the Team Foundation version control server version of and check out files.

You can use the [Difference Command](difference-command.md) to view the differences between two versions of a file.

For more information on how to find the **tf** command-line utility, see [Tf Command-Line Utility Commands](https://msdn.microsoft.com/library/z51z7zy0).

### Output Options

By default, Team Foundation displays the contents of the file in the viewer associated with its file type.

If you include the **/console** option, Team Foundation prints the contents of the file to the command console. Likewise, if Team Foundation cannot locate a viewer for the type of file you have specified, it prints the contents of the file to the command console.

Finally, you can redirect the contents of a file to standard out using **|** or **\>** in order to save it in another file or pass it to another program for post-processing.
## Examples
The following example displays the latest version of the file 314.c.

    c:\projects>tf view 314.c

The following example displays the version of 314.c that was checked in with changeset 1999.

    c:\projects>tf view /version:C1999 314.c

The following example retrieves version 5 of 314.c and writes it to the file 314.old.

    c:\projects>tf view /version:5 314.c > 314.old

The following example displays the latest version of each file that matches the wildcard "\*.cs".

    c:\projects>tf view *.cs

## See Also

#### Reference

[Command-Line Syntax (Version Control)](https://msdn.microsoft.com/library/56f7w6be)

[Checkout and Edit Commands](checkout-or-edit-command.md)

[Get Command](get-command.md)

[Difference Command](difference-command.md)

#### Other Resources

[Tf Command-Line Utility Commands](https://msdn.microsoft.com/library/z51z7zy0)
