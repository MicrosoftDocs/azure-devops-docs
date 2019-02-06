---
title: Folder comparison filters
titleSuffix: Azure Repos
description: Folder comparison filters
ms.assetid: a074c178-1b40-44dd-9e0f-8e9c7f565bfc
ms.prod: devops
ms.technology: devops-code-tfvc
ms.manager: jillfra
ms.author: sdanie
author: steved0x
ms.topic: conceptual
ms.date: 03/26/2018
monikerRange: '>= tfs-2015'
---


# Folder comparison filters

#### Azure Repos | TFS 2018 | TFS 2017 | TFS 2015 | VS 2017 | VS 2015 | VS 2013

The folder comparison filter is an ordered list of name filters that is used to match the names of files or folders that you are comparing. You can use **Compare** to evaluate the file or folder names against the name filters. Once **Compare** finds a match or exclusion, the comparison stops.

The default name filters are as follows:

`!*.pdb;!*.obj;!*.dll;!*.exe;!*.res;!*.resources;!*.cache;!*.ilk;!*.ncb;!obj\;!objd\;!bin\`

## Name Filters

The following wildcard characters have special meaning when they are used in a name filter:

-   ? - Matches exactly one character.

-   \* - Matches zero or more characters.

-   ! - Specifies an exclusion name filter.

-   \\ - Specifies a folder name filter.

-   ; - Name filter delimiter.

>[!IMPORTANT]  
>The following characters are not allowed in name filters: &quot; &lt; &gt; | \b \0 \t and characters 0-31.

The name filters are applied to the file and folder names by using the following rules:

-   When **Compare** evaluates a file or folder name, it compares the name to each filter in the order that you specified the filters. As soon as the file or folder name matches a filter, the name is a match and it is not compared against the remaining filters.

-   A folder filter must end with the \\ wildcard character.

-   An exclusion filter must begin with the ! wildcard character.

-   If you specify any filters that are not the exclusion filter, only files or folders that match the specified filters are included in the results.

-   If you specify an exclusion filter, all files or folders that do not match the exclusion filter are included in the results.

-   If you want to exclude a subset of file or folder names, you must specify the filter for the file or folder name that you want to match first and then specify the exclusion filter.

## Examples

The following table lists filter name mask examples.

|**Name Mask**|**Description**|
|---|---|
|\*.cs | Matches all C# files.|
|My\*.bmp | Matches all bitmap files that begin with My.|
|!\*.exe | Excludes all executable files.|
|!objd\\ | Excludes all objd folders.|


The following table lists filter examples.

|**Filter**|**Description**|
|---|---|
|\*.cs;!objd\\;!obj\\;!bin\\ | Matches all C# files except those in objd, obj, or bin folders.|
|!\*.resx;!\*.ini;!resources\\;!\*junk\*\\ | Excludes all .resx and .ini files, all files in the resources folder, and all files in any folder that has a name that includes the word junk.|


## See Also

#### Other Resources

 [Compare folders](compare-folders.md) 

 [Reconcile differences between two folders](reconcile-differences-between-two-folders.md) 
