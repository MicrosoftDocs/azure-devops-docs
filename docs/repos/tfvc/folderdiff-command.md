---
title: Folderdiff Command
titleSuffix: Azure Repos
description: Folderdiff Command
ms.assetid: 6bfb8318-ee32-4114-b5d1-d7196b1a1855
ms.prod: devops
ms.technology: devops-code-tfvc
ms.manager: jillfra
ms.author: sdanie
author: steved0x
ms.topic: reference
ms.date: 03/26/2018
monikerRange: '>= tfs-2015'
---


# Folderdiff Command

#### Azure Repos | TFS 2018 | TFS 2017 | TFS 2015 | VS 2017 | VS 2015 | VS 2013

Use the **folderdiff** command to display and compare a visual representation of the differences between files in two server folders, in a server folder and a local folder, or in two local folders.

**Required Permissions**

To use the **folderdiff** command, you must have the **Read** permission set to **Allow**. For more information, see [Permissions and groups reference](../../organizations/security/permissions.md).

    tf folderdiff [sourcePath] targetPath [/recursive] [/noprompt] [/collection:TeamProjectCollectionUrl] [/filter:filter] [/filterLocalPathsOnly] [/login:username,[password]] [/view:same,different,sourceOnly,targetOnly]

## Parameters<table>
<thead>
<tr>
<th><p><strong>Argument</strong></p></th>
<th><p><strong>Description</strong></p></th>
</tr>
</thead>
<tbody>
<tr>
<td><p><i>sourcePath</i></p></td>
<td><p>The local or server path that is the source path in the compare operation. If this argument is not supplied and <i>targetPath</i> is the local mapped path, <i>sourcePath</i> is the server path that is mapped to it.</p></td>
</tr>
<tr>
<td><p><i>targetPath</i></p></td>
<td><p>The local or server path that is the target path in the compare operation.</p></td>
</tr>
<tr>
<td><p><i>filter</i></p></td>
<td><p>Specifies a semicolon delimited list of inclusion and exclusion filter masks for the <strong>/filter</strong> option. Default is &quot;*&quot; (include all). The Remarks section in this topic includes a detailed description of filters and masks.</p></td>
</tr>
<tr>
<td><p><i>TeamProjectCollectionUrl</i></p></td>
<td><p>The URL of the project collection that contains the files for which you want to display and compare the differences (for example, http://myserver:8080/tfs/DefaultCollection).</p></td>
</tr>
<tr>
<td><p><i>username</i></p></td>
<td><p>Provides a value to the <strong>/login</strong> option. You can specify a username value as either <i>DOMAIN</i>\<i>UserName</i> or <i>UserName.</i></p></td>
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
<td><p><strong>/recursive</strong></p></td>
<td><p>Optional. Specifies that the two folders are fully compared recursively.</p></td>
</tr>
<tr>
<td><p><strong>/noprompt</strong></p></td>
<td><p>Optional. <strong>tf folderdiff</strong> runs without displaying user interface. The output is displayed in the Command Prompt window instead.</p></td>
</tr>
<tr>
<td><p><strong>/filter</strong></p></td>
<td><p>Optional. Specifies a list of inclusion and filter masks that are used to match the names of files and folders to be compared.</p></td>
</tr>
<tr>
<td><p><strong>/filterLocalPathsOnly</strong></p></td>
<td><p>Optional. Specifies that only the local paths will be filtered, unless the corresponding server path exists.</p></td>
</tr>
<tr>
<td><p><strong>/view</strong></p></td>
<td><p>Optional. Specifies what information is included in the output using a comma separated list of the following values:</p>
<p><i>same</i>-output displays files with the same content in both source and target directories.</p>
<p><i>different</i>-output displays files with different content in both source and target directories.</p>
<p><i>sourceOnly</i>-output displays files that exist only in source directory.</p>
<p><i>targetOnly</i>-output displays files that exist only in target directory.</p>
<p>The default is &quot;<i>different</i>,<i>sourceOnly</i>,<i>targetOnly</i>&quot;</p></td>
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
The Command Prompt window displays the output if you specify **/noprompt**. Otherwise, the **Folder Difference** window displays the output. When the system compares the local mapped folder to the server folder to which it is mapped, the output in the **Folder Difference** window includes a list of pending changes. Also, the output in the **Folder Difference** window tells you whether the local folder contains the latest copy or not.

The output displayed in the Command Prompt window lists all the files in the folders in the following five sections:

-   Items that exist only in the server folder.

-   Items that exist only in the local folder.

-   Items that have different contents.

-   Items that have identical contents (you must specify the same argument with the **/view** option).

-   Summary.

### File and Folder Filters

A filter is an ordered list of name masks used to match the name of files and folders to be compared. Each mask can contain the wildcard characters question mark (?) and asterisk (\*). '?' matches exactly one character and '\*' matches zero or more characters. The masks in a filter are delimited by semicolons (;). Folder masks must end in backslash (\\). To specify an exclusion mask, prefix the mask with an exclamation mark (!).

The filter is applied to the file and folder names using the following rules:

-   When both file and folder masks are specified together in a filter, the file masks are separated into a file mask list and the folder masks are separated into the folder mask list. File masks are applied only to file names. Folder masks are applied only to folder names.

-   When the command matches a file or folder name, it compares the name to each mask in the filter in the order it was specified. As soon as the name matches a mask, the name is considered to be a match.

-   If the file masks in the filter contain an inclusion mask, files that do not match any of the file masks are excluded.

-   If the file masks in the filter contain only exclusion masks, files that do not match any of the file masks are included.

-   If the folder masks in the filter contain an inclusion mask, folders that do not match any of the folder masks are excluded.

-   If the folder masks in the filter contain only exclusion masks, folders that do not match any of the folder masks are included.

The following table lists filter name mask examples.

|**Name Mask**|**Description**|
|---|---|
|\*.cs | Matches all C# files. |
|My\*.bmp | Matches all bitmap files that begin with My.|
|!\*.exe | Excludes all executable files.|
|!objd\\ | Excludes all objd folders.|


The following table lists filter examples.

|**Filter**|**Description**|
|---|---|
|\*.cs;!objd\\;!obj\\;!bin\\ | Matches all C# files except those in objd, obj, or bin folders.|
|!\*.resx;!\*.ini;!resources\\;!\*junk\*\\ | Excludes all .resx and .ini files, all files in the resources folder, and all files in any folder that has a name that includes the word junk.|

For more information on how to find the **tf** command-line utility, see [Tf Command-Line Utility Commands](https://msdn.microsoft.com/library/z51z7zy0).

## Examples
The following example compares the files in the server folder and a local folder. It organizes the files in the localFolder recursively and displays the output in the Command Prompt window.

    C:>tf folderdiff $/serverFolder F:\localFolder /recursive /noprompt

## See Also

#### Tasks

[Compare Two Folders](compare-folders.md)

[View File Changes Using Annotate](view-file-changes-using-annotate.md)

[Reconcile Differences Between Two Folders](reconcile-differences-between-two-folders.md)

#### Concepts

[Folder Comparison Filters](folder-comparison-filters.md)

#### Other Resources

[Comparing Folders and Files](compare-folders-files.md)

[Tf Command-Line Utility Commands](https://msdn.microsoft.com/library/z51z7zy0)
