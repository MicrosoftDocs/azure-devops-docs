---
title: Difference Command
titleSuffix: Azure Repos
description: Difference Command
ms.assetid: d7bf3b53-b0b8-4b57-a9ce-5a475b715e1d
ms.service: azure-devops-repos
ms.topic: reference
ms.date: 06/30/2022
monikerRange: '<= azure-devops'
ms.subservice: azure-devops-repos-tfvc
---


# Difference Command

[!INCLUDE [version-lt-eq-azure-devops](../../includes/version-lt-eq-azure-devops.md)]
[!INCLUDE [version-vs-gt-2013](../../includes/version-vs-gt-2013.md)]

Compares, and if it is possible, displays differences between two files, files in two folders, or a shelveset and a local or a server file.

## Prerequisites

To use the **difference** command, you must have the **Read** permission for all specified items set to **Allow**.  For more information, see [Default TFVC permissions](../../organizations/security/default-tfvc-permissions.md).

## Syntax

```
tf diff[erence] itemspec [/version:versionspec] [/type:filetype] 
[/format:format [/ignorespace] [/ignoreeol] [/ignorecase] [/recursive] 
[/options][/noprompt][/login:username,[password]]
```

```
tf diff[erence] itemspec itemspec2 [/type:filetype] [/format: format] 
[/ignorespace] [/ignoreeol] [/ignorecase] [/recursive] [/options] [/noprompt][/login:username,[password]]
```

```
tf diff[erence] [/shelveset:shelvesetname[;shelvesetowner]] 
shelveset_itemspec [/type:filetype] 
[/format: format] [/ignorespace] [/ignoreeol] [/ignorecase] 
[/recursive] [/options] [/noprompt][/login:username,[password]]
```

```
tf diff[erence] /configure
```

## Parameters

### Argument

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
   *itemspec*
   :::column-end:::
   :::column span="3":::
   Required. Specifies the item to be compared. If no version or path is specified, the *current workspace version *is assumed. Accepts both local and Team Foundation version control server paths.

   For more information about how Team Foundation parses itemspecs to determine which items are within scope, see [Use Team Foundation version control commands](use-team-foundation-version-control-commands.md).

   The **difference** command does not support wildcard characters.

   This parameter cannot be combined with the **/shelveset** option.
   :::column-end:::
:::row-end:::
:::row:::
   :::column span="1":::
   *Itemspec2*
   :::column-end:::
   :::column span="3":::
   Optional. The item to which the *itemspec* is to be compared. If you do not provide a second i*temspec*, the latest Team Foundation version control server version of the item is used.
   :::column-end:::
:::row-end:::
:::row:::
   :::column span="1":::
   *Filetype*
   :::column-end:::
   :::column span="3":::
   Provides a value for the **/type** option. You can specify &quot;binary&quot; or &quot;text,&quot; and a codepage number or the friendly name for a codepage.
   :::column-end:::
:::row-end:::
:::row:::
   :::column span="1":::
   *Format*
   :::column-end:::
   :::column span="3":::
   Used with the **/format** option to specify an output format of one of the following types:
   
   - Visual
   - Brief
   - Context
   - RCS
   - SS
   - SS_SideBySide
   - SS_Unix
   - Unified
   - Unix
   
   These outputs formats are explained in the Remarks section of this topic.
   :::column-end:::
:::row-end:::
:::row:::
   :::column span="1":::
   *Versionspec*
   :::column-end:::
   :::column span="3":::
   The user-provided value for the **/version** option. For more information about how Team Foundation parses a version specification to determine which items are within its scope, see [Use Team Foundation version control commands](use-team-foundation-version-control-commands.md).
   :::column-end:::
:::row-end:::
:::row:::
   :::column span="1":::
   *Shelvesetowner*
   :::column-end:::
   :::column span="3":::
   Identifies the owner of the shelveset by user name. If a value for this parameter is not provided, the current user is assumed.
   :::column-end:::
:::row-end:::
:::row:::
   :::column span="1":::
   *Shelvesetname*
   :::column-end:::
   :::column span="3":::
   Specifies the name of a shelveset. You can create more than one shelveset with the same name on the server that is running Team Foundation Server as long as a different user owns each shelveset.
   :::column-end:::
:::row-end:::
:::row:::
   :::column span="1":::
   *Shelveset_itemspec*
   :::column-end:::
   :::column span="3":::
   Specifies the name of a folder or file in the shelveset to compare to the base shelveset version.
   :::column-end:::
:::row-end:::
:::row:::
   :::column span="1":::
   *username*
   :::column-end:::
   :::column span="3":::
   Provides a value to the **/login** option. You can specify a username value as either *DOMAIN UserName* or *UserName.*
   :::column-end:::
:::row-end:::

### Option

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
   **/type**
   :::column-end:::
   :::column span="1":::
   Overrides any detected encodings and uses the specified encoding to present the files to the differencing engine.
   :::column-end:::
:::row-end:::
:::row:::
   :::column span="1":::
   **/version**
   :::column-end:::
   :::column span="1":::
   Specifies the version of the file or folder to compare. By default, Team Foundation uses the workspace version if you do not provide a *versionspec*.

   Instead of using the **/version** flag, you can specify versions by appending a semicolon and version specifier to the end of each file name.
   :::column-end:::
:::row-end:::
:::row:::
   :::column span="1":::
   **/format**
   :::column-end:::
   :::column span="1":::
   Specifies an output format specified by the *format* argument.
   :::column-end:::
:::row-end:::
:::row:::
   :::column span="1":::
   **/ignorespace**
   :::column-end:::
   :::column span="1":::
   Does not highlight white-space differences between the compared files.
   :::column-end:::
:::row-end:::
:::row:::
   :::column span="1":::
   **/ignoreeol**
   :::column-end:::
   :::column span="1":::
   Ignores differences between the new line characters in two files or file versions. **/ignoreeol** works differently from **/ignoreSpace**. **/ignorespace** treats eight spaces identically to one. However, if you use the **/ignoreeol** option and File A has two new line characters between unchanged areas of text, and File B has one, the result displays as a difference. If both files have only one new line, but File A uses `\r\n` as a new line and File B uses `\n`, **/ignoreEOL** option would ignore that as a difference.
   :::column-end:::
:::row-end:::
:::row:::
   :::column span="1":::
   **/ignorecase**
   :::column-end:::
   :::column span="1":::
   Does not highlight differences in letter casing between the compared files.
   :::column-end:::
:::row-end:::
:::row:::
   :::column span="1":::
   **/recursive**
   :::column-end:::
   :::column span="1":::
   Compares the differences between the current folder and all its subfolders.
   :::column-end:::
:::row-end:::
:::row:::
   :::column span="1":::
   **/options**
   :::column-end:::
   :::column span="1":::
   Specifies an option string for the tool to be invoked by diff. For more information, see [Associate a File Type with a Difference Tool](associate-file-type-file-comparison-tool.md) and [Associate a File Type with a Merge Tool](associate-file-type-merge-tool.md).
   :::column-end:::
:::row-end:::
:::row:::
   :::column span="1":::
   **/shelveset**
   :::column-end:::
   :::column span="1":::
   Specifies a shelveset to compare to the Team Foundation version control server version upon which the shelveset is based.

   This option cannot be combined with an *itemspec* argument. To compare individual shelveset items, you can provide a *shelveset_itemspec*.
   :::column-end:::
:::row-end:::
:::row:::
   :::column span="1":::
   **/noprompt**
   :::column-end:::
   :::column span="1":::
   Suppresses any dialog boxes that would otherwise be displayed during the completion of this operation.
   :::column-end:::
:::row-end:::
:::row:::
   :::column span="1":::
   **/configure**
   :::column-end:::
   :::column span="1":::
   Invokes the **Configure User Tools** dialog box. This tool is available from the Visual Studio user interface. For more information, see [Associate a File Type with a Difference Tool](associate-file-type-file-comparison-tool.md).
   :::column-end:::
:::row-end:::
:::row:::
   :::column span="1":::
   **/login**
   :::column-end:::
   :::column span="1":::
   Specifies the user name and password to authenticate the user with Team Foundation Server.
   :::column-end:::
:::row-end:::   

## Remarks
> [!NOTE]
> You can type **tf diff** or **tf difference** at the command line to run this command.

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

For more information on how to find the **tf** command-line utility, see [Use Team Foundation version control commands](use-team-foundation-version-control-commands.md).

### Output Format types

The *format* parameter, used with the **/format** option, specifies many different output formats. The available output types are

- **Visual**

  **Visual** format type opens an external difference application. By default diffmerge.exe is launched.

- **Brief**

  Brief format prints whether the files being compared differ.

- **Context**

  **Context** format provides lines of context for the differences in the files. This format is derived from the UNIX based **diff -c** output format.

- **RCS**

  **RCS** format is similar to **/format:unix**, except context lines are not supplied.

  No special handing for a missing end of line marker at the end of the file is provided.

- **SS**

  **SS** is default difference output format for Visual SourceSafe. For more information, see [Diff (Command Line)](/previous-versions/9a7z21t6(v=vs.80)).

- **SS\_SideBySide**

  **SS\_SideBySide** is the default side-by-side output format for Visual SourceSafe.

- **SS\_Unix**

  SS\_Unix is similar to the /format:unix output format, but /format:ss\_unix includes context lines and /format:unix does not.

- **Unified**

  **Unified** format is derived from the UNIX based **diff -u** output format. **/format:context** repeats identical context lines between the difference strings although **/format:unified** does not.

  **Unified** format produces a new unified difference string (@@ ... @@) line only when the distance to the next difference string is larger than the number of context lines.

- **Unix**

  This output type is derived from the UNIX based **diff** command output format.

  The **Unix** output format is constructed in the following way:

    ```
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
    ```

  ## Examples
  The following example displays the differences between the local version of 314.cs and the workspace version of 314.cs that is the version of the file that was checked out from the Team Foundation version control server.

  c:\projects>tf difference 314.cs

The following example displays all files that have been changed in the src folder. Does not display files that have been changed in subfolders of src.

```
c:\projects>tf difference src /format:visual
```

The following example displays the differences between changeset 3 and changeset 8 of 1254.cs.

```
c:\projects>tf difference /version:C3~C8 1254.cs
```

The following examples display the differences between the version of 314.cs that belong to the label "release" and the version that belongs to changeset 3200.

```
c:\projects>tf difference 314.cs;Lrelease 314.cs;C3200
```

-or-

```
c:\projects>tf difference 314.cs;Lrelease~C3200
```

The following example displays the difference between the versions of e271.cs that a user named Nadia shelved in shelveset PeerCodeReview8 and the *base shelveset version* that is the version upon which she based her changes. Also displays the types of changes pending against e271.cs when Nadia shelved.

```
c:\projects> tf difference /shelveset:PeerCodeReview8;Nadia e271.cs
```

The following example displays the differences between all files in the PeerCodeReview2 shelveset and the base shelveset version of those files.

```
c:\projects> tf difference /shelveset:PeerCodeReview2
```

## Related articles

- [Merge Command](merge-command.md)
- [Checkin Command](checkin-command.md)
- [Shelvesets Command](shelvesets-command.md)
- [Managing File Types](/azure/devops/server/admin/manage-file-types)
- [Comparing Folders and Files](./compare-files.md)
