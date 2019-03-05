---
title: Difference Command
titleSuffix: Azure Repos
description: Difference Command
ms.assetid: d7bf3b53-b0b8-4b57-a9ce-5a475b715e1d
ms.prod: devops
ms.technology: devops-code-tfvc
ms.manager: jillfra
ms.author: sdanie
author: steved0x
ms.topic: reference
ms.date: 08/10/2016
monikerRange: '>= tfs-2015'
---


# Difference Command

#### Azure Repos | TFS 2018 | TFS 2017 | TFS 2015 | VS 2017 | VS 2015 | VS 2013

Compares, and if it is possible, displays differences between two files, files in two folders, or a shelveset and a local or a server file.

**Required Permissions**

To use the **difference** command, you must have the **Read** permission for all specified items set to **Allow**. For more information, see [Permissions and groups reference](../../organizations/security/permissions.md).

    tf diff[erence] itemspec [/version:versionspec] [/type:filetype] 
    [/format:format [/ignorespace] [/ignoreeol] [/ignorecase] [/recursive] 
    [/options][/noprompt][/login:username,[password]]

&nbsp;

    tf diff[erence] itemspec itemspec2 [/type:filetype] [/format: format] 
    [/ignorespace] [/ignoreeol] [/ignorecase] [/recursive] [/options] [/noprompt][/login:username,[password]]

&nbsp;

    tf diff[erence] [/shelveset:shelvesetname[;shelvesetowner]] 
    shelveset_itemspec [/type:filetype] 
    [/format: format] [/ignorespace] [/ignoreeol] [/ignorecase] 
    [/recursive] [/options] [/noprompt][/login:username,[password]]

&nbsp;

    tf diff[erence] /configure

## Parameters

<table><thead>
<tr><th><p><strong>Argument</strong></p></th><th><p><strong>Description</strong></p></th></tr></thead><tbody>
<tr>
	<td><p><em>itemspec</em></p></td>
	<td><p>Required. Specifies the item to be compared. If no version or path is specified, the <em>current workspace version </em>is assumed. Accepts both local and Team Foundation version control server paths.</p><p>For more information about how Team Foundation parses itemspecs to determine which items are within scope, see <a href="https://msdn.microsoft.com/library/56f7w6be">Command-Line Syntax (Version Control)</a>.</p><p>The <strong>difference</strong> command does not support wildcard characters.</p><p>This parameter cannot be combined with the <strong>/shelveset</strong> option.</p></td></tr>
<tr>
	<td><p><em>Itemspec2</em></p></td>
	<td><p>Optional. The item to which the <em>itemspec</em> is to be compared. If you do not provide a second i<em>temspec</em>, the latest Team Foundation version control server version of the item is used.</p></td></tr>
<tr>
	<td><p><em>Filetype</em></p></td>
	<td><p>Provides a value for the <strong>/type</strong> option. You can specify &quot;binary&quot; or &quot;text,&quot; and a codepage number or the friendly name for a codepage.</p></td></tr>
<tr>
	<td><p><em>Format</em></p></td>
	<td><p>Used with the <strong>/format</strong> option to specify an output format of one of the following types:</p><ul><li><p>Visual</p></li><li><p>Brief</p></li><li><p>Context</p></li><li><p>RCS</p></li><li><p>SS</p></li><li><p>SS_SideBySide</p></li><li><p>SS_Unix</p></li><li><p>Unified</p></li><li><p>Unix</p></li></ul><p>These outputs formats are explained in the Remarks section of this topic.</p></td></tr>
<tr>
	<td><p><em>Versionspec</em></p></td>
	<td><p>The user-provided value for the <strong>/version</strong> option. For more information about how Team Foundation parses a version specification to determine which items are within its scope, see <a href="https://msdn.microsoft.com/library/56f7w6be">Command-Line Syntax (Version Control)</a>.</p></td></tr>
<tr>
	<td><p><em>Shelvesetowner</em></p></td>
	<td><p>Identifies the owner of the shelveset by user name. If a value for this parameter is not provided, the current user is assumed.</p></td></tr>
<tr>
	<td><p><em>Shelvesetname</em></p></td>
	<td><p>Specifies the name of a shelveset. You can create more than one shelveset with the same name on the server that is running Team Foundation Server as long as a different user owns each shelveset.</p></td></tr>
<tr>
	<td><p><em>Shelveset_itemspec</em></p></td>
	<td><p>Specifies the name of a folder or file in the shelveset to compare to the base shelveset version.</p></td></tr>
<tr>
	<td><p><em>username</em></p></td>
	<td><p>Provides a value to the <strong>/login</strong> option. You can specify a username value as either <em>DOMAIN</em>\<em>UserName</em> or <em>UserName.</em></p></td></tr></tbody>
</table>

|**Option**|**Description**|
|---|---|
|**/type**|Overrides any detected encodings and uses the specified encoding to present the files to the differencing engine.|
|**/version**|Specifies the version of the file or folder to compare. By default, Team Foundation uses the workspace version if you do not provide a *versionspec*.<br /><br />Instead of using the **/version** flag, you can specify versions by appending a semicolon and version specifier to the end of each file name.|
|**/format**|Specifies an output format specified by the *format* argument.|
|**/ignorespace**|Does not highlight white-space differences between the compared files.|
|**/ignoreeol**|Ignores differences between the new line characters in two files or file versions. **/ignoreeol** works differently from **/ignoreSpace**. **/ignorespace** treats eight spaces identically to one. However, if you use the **/ignoreeol** option and File A has two new line characters between unchanged areas of text, and File B has one, the result displays as a difference. If both files have only one new line, but File A uses `\r\n` as a new line and File B uses `\n`, **/ignoreEOL** option would ignore that as a difference.|
|**/ignorecase**|Does not highlight differences in letter casing between the compared files.|
|**/recursive**|Compares the differences between the current folder and all its subfolders.|
|**/options**|Specifies an option string for the tool to be invoked by diff. For more information, see [Associate a File Type with a Difference Tool](associate-file-type-file-comparison-tool.md) and [Associate a File Type with a Merge Tool](associate-file-type-merge-tool.md).|
|**/shelveset**|Specifies a shelveset to compare to the Team Foundation version control server version upon which the shelveset is based.<br /><br />This option cannot be combined with an *itemspec* argument. To compare individual shelveset items, you can provide a *shelveset_itemspec*.|
|**/noprompt**|Suppresses any dialog boxes that would otherwise be displayed during the completion of this operation.|
|**/configure**|Invokes the **Configure User Tools** dialog box. This tool is available from the Visual Studio user interface. For more information, see [Associate a File Type with a Difference Tool](associate-file-type-file-comparison-tool.md).|
|**/login**|Specifies the user name and password to authenticate the user with Team Foundation Server.|

## Remarks
>**Note:**  
>You can type **tf diff** or **tf difference** at the command line to run this command.

You can use the **difference** command to compare and if it is possible, display differences between:

-   Two different files or two versions of the same file.

-   One or more of the items in a folder.

-   One, some, or all the items in a shelveset on the Team Foundation Server.

You can use the **difference** command to compare both versioned and non-versioned files.

Team Foundation categorizes all files by type. Text files can be merged and compared, side by side and line by line, as long as both files have the same encoding. If you want to compare two files whose encodings are not the same, you can temporarily mask, or override the encoding property for a file by using the **/type** option. Binary files can be compared but cannot be merged. When you pass one or more binary files to the difference command, Team Foundation indicates whether differences exist between it and the item to which it is being compared. For more information about how Team Foundation differentiates between and treats files of disparate types, see [Managing File Types](/azure/devops/server/admin/manage-file-types).

If you specify two file names, the two files are compared. Instead of using the **/version** flag, you can specify versions by appending a semicolon and version specifier to the end of each file name.

If you pass only one *itemspec* to the difference command:

-   If do not provide a versionspec, your current workspace version of the item is compared to the base workspace version, by default. For example, **tf difference header.h** compares the current version of header.h to the version upon which header.h is based.

-   If you include a versionspec in your itemspec such as , **tf difference header.h;LBeta1**, Team Foundation compares that version to your current workspace version on disk.

-   If you specify a range of versions such as **/version:C1~C4**, the versions of the file at the two end points of the range are compared.

For more information on how to find the **tf** command-line utility, see [Tf Command-Line Utility Commands](https://msdn.microsoft.com/library/z51z7zy0).

### Output Format types

The *format* parameter, used with the **/format** option, specifies many different output formats. The available output types are

-   **Visual**

    **Visual** format type opens an external difference application. By default diffmerge.exe is launched.

-   **Brief**

    Brief format prints whether the files being compared differ.

-   **Context**

    **Context** format provides lines of context for the differences in the files. This format is derived from the UNIX based **diff -c** output format.

-   **RCS**

    **RCS** format is similar to **/format:unix**, except context lines are not supplied.

    No special handing for a missing end of line marker at the end of the file is provided.

-   **SS**

    **SS** is default difference output format for Visual SourceSafe. For more information, see "Diff (Command Line)" at the Microsoft Web site (<http://go.microsoft.com/fwlink/?LinkId=99139>).

-   **SS\_SideBySide**

    **SS\_SideBySide** is the default side-by-side output format for Visual SourceSafe.

-   **SS\_Unix**

    SS\_Unix is similar to the /format:unix output format, but /format:ss\_unix includes context lines and /format:unix does not.

-   **Unified**

    **Unified** format is derived from the UNIX based **diff -u** output format. **/format:context** repeats identical context lines between the difference strings although **/format:unified** does not.

    **Unified** format produces a new unified difference string (@@ ... @@) line only when the distance to the next difference string is larger than the number of context lines.

-   **Unix**

    This output type is derived from the UNIX based **diff** command output format.

    The **Unix** output format is constructed in the following way:

            <metadataline>
        "< " line prefix for lines from the first file
        "---" line
        "> " line prefix for lines from the second file

        <metadataline> can be one of these possibilities:
        #a#,# -- add lines from line # in file1 into file2 at lines #->#
        #,#d# -- delete lines from line # -> # in file 1 from file2 at line #
        #,#c#,# -- change lines from line # -> # in file1 into the lines in file2 at line # -> #

        # signs separated by commas indicate a line range.
        # signs before the character indicate line numbers in the first file
        # signs after the character indicate line numbers in the second file

        /// No end of line marker at the end of the file:
        /// \ No newline at end of file
## Examples
The following example displays the differences between the local version of 314.cs and the workspace version of 314.cs that is the version of the file that was checked out from the Team Foundation version control server.

    c:\projects>tf difference 314.cs

The following example displays all files that have been changed in the src folder. Does not display files that have been changed in subfolders of src.

    c:\projects>tf difference src /format:visual

The following example displays the differences between changeset 3 and changeset 8 of 1254.cs.

    c:\projects>tf difference /version:C3~C8 1254.cs

The following examples display the differences between the version of 314.cs that belong to the label "release" and the version that belongs to changeset 3200.

    c:\projects>tf difference 314.cs;Lrelease 314.cs;C3200

-or-

    c:\projects>tf difference 314.cs;Lrelease~C3200

The following example displays the difference between the versions of e271.cs that a user named Nadia shelved in shelveset PeerCodeReview8 and the *base shelveset version* that is the version upon which she based her changes. Also displays the types of changes pending against e271.cs when Nadia shelved.

    c:\projects> tf difference /shelveset:PeerCodeReview8;Nadia e271.cs

The following example displays the differences between all files in the PeerCodeReview2 shelveset and the base shelveset version of those files.

    c:\projects> tf difference /shelveset:PeerCodeReview2

## See Also

#### Reference

[Merge Command](merge-command.md)

[Checkin Command](checkin-command.md)

[Shelvesets Command](shelvesets-command.md)

#### Concepts

[Managing File Types](/azure/devops/server/admin/manage-file-types)

#### Other Resources

[Tf Command-Line Utility Commands](https://msdn.microsoft.com/library/z51z7zy0)

[Comparing Folders and Files](compare-folders-files.md)
