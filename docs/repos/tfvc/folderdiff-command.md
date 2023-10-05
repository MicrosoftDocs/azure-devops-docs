---
title: Folderdiff command
titleSuffix: Azure Repos
description: Use the folderdiff command to compare differences between folders in Team Foundation Version Control (TFVC).
ms.assetid: 6bfb8318-ee32-4114-b5d1-d7196b1a1855
ms.service: azure-devops-repos
ms.topic: reference
ms.date: 11/08/2022
monikerRange: '<= azure-devops'
ms.subservice: azure-devops-repos-tfvc
---


# Folderdiff command (Team Foundation Version Control)


[!INCLUDE [version-lt-eq-azure-devops](../../includes/version-lt-eq-azure-devops.md)]
[!INCLUDE [version-vs-gt-eq-2019](../../includes/version-vs-gt-eq-2019.md)]

Use the TFVC `folderdiff` command to display and compare a visual representation of the differences between files in two server folders, in a server folder and a local folder, or in two local folders.

## Prerequisites

To use the `folderdiff` command, you must have the **Read** permission set to **Allow**. For more information, see [Default TFVC permissions](../../organizations/security/default-tfvc-permissions.md).

## Syntax

```
tf folderdiff [sourcePath] targetPath [/recursive] [/noprompt] [/collection:TeamProjectCollectionUrl] [/filter:filter] [/filterLocalPathsOnly] [/login:username,[password]] [/view:same,different,sourceOnly,targetOnly]
```

## Parameters

### Arguments

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
   `<sourcePath>`
   :::column-end:::
   :::column span="3":::
   The local or server source path in the compare operation. If this argument isn't supplied and `targetPath` is the local mapped path, `sourcePath` is the server path that it maps to.
   :::column-end:::
:::row-end:::
:::row:::
   :::column span="1":::
   `<targetPath>`
   :::column-end:::
   :::column span="3":::
   The local or server target path in the compare operation.
   :::column-end:::
:::row-end:::
:::row:::
   :::column span="1":::
   `<filter>`
   :::column-end:::
   :::column span="3":::
   A semicolon-delimited list of inclusion and exclusion filter masks for the `/filter` option. The default is `*`, or include all. See [Remarks](#remarks) for a detailed description of filters and masks.
   :::column-end:::
:::row-end:::
:::row:::
   :::column span="1":::
   `<TeamProjectCollectionUrl>`
   :::column-end:::
   :::column span="3":::
   The URL of the project collection that contains the files for which you want to display and compare the differences, for example `http://myserver:8080/tfs/DefaultCollection`.
   :::column-end:::
:::row-end:::
:::row:::
   :::column span="1":::
   `<username>`
   :::column-end:::
   :::column span="3":::
   Provides a value to the `/login` option. You can specify a username value as either `DOMAIN\username` or `username`.
   :::column-end:::
:::row-end:::

### Options

:::row:::
   :::column span="1":::
   **Option**
   :::column-end:::
   :::column span="3":::
   **Description**
   :::column-end:::
:::row-end:::

:::row:::
   :::column span="1":::
   `/recursive`
   :::column-end:::
   :::column span="3":::
   Optional. Fully compares the two folders recursively.
   :::column-end:::
:::row-end:::
:::row:::
   :::column span="1":::
   `/noprompt`
   :::column-end:::
   :::column span="3":::
   Optional. Runs `tf folderdiff` without displaying the output in the Visual Studio **Folder Difference** window. The command prompt window displays the output instead.
   :::column-end:::
:::row-end:::
:::row:::
   :::column span="1":::
   `/filter`
   :::column-end:::
   :::column span="3":::
   Optional. Specifies a list of inclusion and filter masks that are used to match the names of files and folders to be compared.
   :::column-end:::
:::row-end:::
:::row:::
   :::column span="1":::
   `/filterLocalPathsOnly`
   :::column-end:::
   :::column span="3":::
   Optional. Specifies that only the local paths will be filtered, unless the corresponding server path exists.
   :::column-end:::
:::row-end:::
:::row:::
   :::column span="1":::
   `/view`
   :::column-end:::
   :::column span="3":::
   Optional. Specifies which information to include in the output by using a comma-separated list of the following values:

   - `same` displays files with the same content in both source and target directories.

   - `different` displays files with different content in both source and target directories.

   - `sourceOnly` displays files that exist only in the source directory.

   - `targetOnly` displays files that exist only in the target directory.

   The default is `different,sourceOnly,targetOnly`.
   :::column-end:::
:::row-end:::
:::row:::
   :::column span="1":::
   `/collection`
   :::column-end:::
   :::column span="3":::
   Specifies the project collection.
   :::column-end:::
:::row-end:::
:::row:::
   :::column span="1":::
   `/login`
   :::column-end:::
   :::column span="3":::
   Specifies the user name and password to authenticate the user with Azure DevOps.
   :::column-end:::
:::row-end:::

## Remarks
The command prompt window displays the output if you specify `/noprompt`. Otherwise, the Visual Studio **Folder Difference** window displays the output.

When the system compares the local mapped folder to the server folder it's mapped to, the output in the **Folder Difference** window includes a list of pending changes. Also, the output in the **Folder Difference** window tells you whether or not the local folder contains the latest copy.

The output displayed in the command prompt window lists all the files in the folders in the following five sections:

-   Items that exist only in the server folder.
-   Items that exist only in the local folder.
-   Items that have different contents.
-   Items that have identical contents. You must specify the `same` argument with the `/view` option.
-   Summary.

### File and folder filters

A filter is an ordered list of name masks used to match the name of files and folders to be compared. Masks can contain the question mark `?` wildcard character to match exactly one character, and the asterisk `*` wildcard character to match zero or more characters.

You delimit the masks in a filter by using semicolons `;`. Folder masks must end in a backslash `\`. To specify an exclusion mask, prefix the mask with an exclamation mark `!`.

The filter applies to the file and folder names by using the following rules:

-   When a filter specifies both file and folder masks, the file and folder masks are separated into a file mask list and a folder mask list. File masks apply only to file names. Folder masks apply only to folder names.

-   To match a file or folder name, the command compares the name to each mask in the filter in the order it was specified. As soon as the name matches a mask, the name is considered to be a match.

-   If the file masks in the filter contain an inclusion mask, files that don't match any of the file masks are excluded.

-   If the file masks in the filter contain only exclusion masks, files that don't match any of the file masks are included.

-   If the folder masks in the filter contain an inclusion mask, folders that don't match any of the folder masks are excluded.

-   If the folder masks in the filter contain only exclusion masks, folders that don't match any of the folder masks are included.

The following table lists filter name mask examples.

|**Name mask**|**Description**|
|---|---|
|`*.cs` | Matches all C# files.|
|`My*.bmp` | Matches all bitmap files that begin with *My*.|
|`!*.exe` | Excludes all executable files.|
|`!objd\` | Excludes all *objd* folders.|

The following table lists filter examples.

|**Filter**|**Description**|
|---|---|
|`*.cs;!objd\;!obj\;!bin\` | Matches all C# files except the ones in *objd*, *obj*, or *bin* folders.|
|`!*.resx;!*.ini;!resources\;!*junk*\` | Excludes all *.resx* and *.ini* files, all files in the *resources* folder, and all files in any folder that has a name that includes the word *junk*.|

For more information on how to use the `tf` command-line utility, see [Use Team Foundation version control commands](use-team-foundation-version-control-commands.md).

## Examples
The following example compares the files in the server folder and a local folder, organizes the files in the local folder recursively, and displays the output in the command prompt window.

```
tf folderdiff $/<serverFolder> F:\<localFolder> /recursive /noprompt
```

## Next steps

- [Compare folders](compare-folders.md)
- [View file changes using annotate](view-file-changes-using-annotate.md)
- [Reconcile differences between two folders](reconcile-differences-between-two-folders.md)
- [Folder comparison filters](folder-comparison-filters.md)
- [Compare files](./compare-files.md)

