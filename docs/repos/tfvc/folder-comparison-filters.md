---
title: Folder comparison filters
titleSuffix: Azure Repos
description: Use folder comparison filters to match or exclude file and folder names you're comparing in Team Foundation Version Control (TFVC).
ms.assetid: a074c178-1b40-44dd-9e0f-8e9c7f565bfc
ms.service: azure-devops-repos
ms.topic: conceptual
ms.date: 11/08/2022
monikerRange: '<= azure-devops'
ms.subservice: azure-devops-repos-tfvc
---

# Folder comparison filters

[!INCLUDE [version-lt-eq-azure-devops](../../includes/version-lt-eq-azure-devops.md)]
[!INCLUDE [version-vs-gt-eq-2019](../../includes/version-vs-gt-eq-2019.md)]

The folder comparison filter is an ordered list of filters that match the names of files or folders when you [compare folders](compare-folders.md) in Team Foundation Version Control (TFVC).

To evaluate file or folder names against the name filters, you enter the filters in the **Filter** field of the **Compare** dialog box in Visual Studio. You can also specify filters by using the [tf folderdiff command](folderdiff-command.md).

The default name filters are as follows:

`!*.pdb;!*.obj;!*.dll;!*.exe;!*.res;!*.resources;!*.cache;!*.ilk;!*.ncb;!obj\;!objd\;!bin\`

## Name filters

The following wildcard characters have special meaning when they're used in a name filter:

- `?` matches exactly one character.
- `*` matches zero or more characters.
- `!` specifies an exclusion name filter.
- `\` specifies a folder name filter.
- `;` is the name filter delimiter.

>[!IMPORTANT]  
>The following characters aren't allowed in name filters: `"`, `<`, `>`, `|`, `\b`, `\0`, `\t`, and numerals `0`-`31`.

The name filters are applied to the file and folder names by using the following rules:

-   When **Compare** evaluates a file or folder name, it compares the name to each filter in the order that you specified the filters. As soon as the file or folder name matches a filter, the name is a match, and it isn't compared against the remaining filters.

-   A folder filter must end with the `\` wildcard character.

-   An exclusion filter must begin with the `!` wildcard character.

-   For any filters that aren't the exclusion filter, the results include only files or folders that match the specified filters.

-   For an exclusion filter, the results include all files or folders that don't match the exclusion filter.

-   If you want to exclude a subset of file or folder names, you must first specify the filter for the file or folder name that you want to match. Then specify the exclusion filter.

## Examples

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

## Next steps

-  [Compare folders](compare-folders.md) 
-  [Reconcile differences between two folders](reconcile-differences-between-two-folders.md) 
