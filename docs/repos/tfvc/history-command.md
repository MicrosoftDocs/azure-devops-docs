---
title: History command (Team Foundation Version Control)
titleSuffix: Azure Repos
description: See how to use the tf history command to display the revision history of files or folders.
ms.assetid: 14c451c2-c59e-46c7-afd5-c727ba683eb2
ms.service: azure-devops-repos
ms.topic: reference
ms.date: 11/15/2022
monikerRange: '<= azure-devops'
ms.subservice: azure-devops-repos-tfvc
---


# History command (Team Foundation Version Control)

[!INCLUDE [version-lt-eq-azure-devops](../../includes/version-lt-eq-azure-devops.md)]
[!INCLUDE [version-vs-gt-eq-2019](../../includes/version-vs-gt-eq-2019.md)]

The Team Foundation Version Control (TFVC) `tf history` command displays the revision history of one or more files or folders. The command data is displayed in either the **History** window in Visual Studio, or if the `/noprompt` option is specified, at the command prompt.

You can also use Visual Studio to get revision history. For more information, see [Get the history of an item](get-history-item.md).

## Prerequisites

See  [Default TFVC permissions](../../organizations/security/default-tfvc-permissions.md).

## Syntax
```
tf hist[ory] itemspec [/version:versionspec] 
[/stopafter:number] [/recursive] [/user:username] 
[/format:(brief|detailed)] [/slotmode] [/itemmode] [/noprompt]
[/login:username,[password]] [/sort:ascending,descending]
[/collection:TeamProjectCollectionUrl]
```

## Parameters

:::row:::
   :::column span="1":::
   **Parameter**
   :::column-end:::
   :::column span="3":::
   **Description**
   :::column-end:::
:::row-end:::

:::row:::
   :::column span="1":::
   `/collection:<TeamProjectCollectionUrl>`
   :::column-end:::
   :::column span="3":::
   Specifies the URL of the project collection that contains the items. For example: `http://myserver:8080/tfs/DefaultCollection`.

   By default, the project collection is presumed to be the one that contains the workspace that maps the current directory.
   :::column-end:::
:::row-end:::
:::row:::
   :::column span="1":::
   `/format`
   :::column-end:::
   :::column span="3":::
   Specifies how much detail to display about each changeset when the `/noprompt` option is specified:
   
   - `Brief` (default): Displays one line about each changeset that includes: ID number, changes made, user who made the changes, date, and comment. Some of the data may be truncated.

   - `Detailed`: Displays a full description of each changeset. In addition to the preceding information, this option displays more data such as date with time, items changed, check-in notes, and check-in policy warnings.   
   :::column-end:::
:::row-end:::
:::row:::
   :::column span="1":::
   `/itemmode`
   :::column-end:::
   :::column span="3":::
   You can't combine this option with the `/slotmode` option. For more information, see [Matt Mitrik: Changing to Slot Mode in TFS 2010 Version Control](/archive/blogs/mitrik/changing-to-slot-mode-in-tfs-2010-version-control).
   :::column-end:::
:::row-end:::
:::row:::
   :::column span="1":::
   `<itemspec>`
   :::column-end:::
   :::column span="3":::
   Specifies the items for which to display history. For syntax, see [Use Team Foundation version control commands](use-team-foundation-version-control-commands.md).
   :::column-end:::
:::row-end:::
:::row:::
   :::column span="1":::
   `/noprompt`
   :::column-end:::
   :::column span="3":::
   Suppresses the display of windows and dialog boxes, such as the **History** window, and redirects output data to the command prompt. See [Use Team Foundation version control commands](use-team-foundation-version-control-commands.md).

   Doesn't display the history of revisions that occurred before an item was moved, renamed, branched, or merged.
   :::column-end:::
:::row-end:::
:::row:::
   :::column span="1":::
   `/login:<username>[,<password>]`
   :::column-end:::
   :::column span="3":::
   Specifies the user account to run the command. See [Use Team Foundation version control commands](use-team-foundation-version-control-commands.md).
   :::column-end:::
:::row-end:::
:::row:::
   :::column span="1":::
   `/recursive`
   :::column-end:::
   :::column span="3":::
   Recursively retrieves historical data on items in the specified directory and any subdirectories.
   :::column-end:::
:::row-end:::
:::row:::
   :::column span="1":::
   `/slotmode`
   :::column-end:::
   :::column span="3":::
   You can't combine this option with the `/itemmode` option. For more information, see [Matt Mitrik: Changing to Slot Mode in TFS 2010 Version Control](/archive/blogs/mitrik/changing-to-slot-mode-in-tfs-2010-version-control).
   :::column-end:::
:::row-end:::
:::row:::
   :::column span="1":::
   `/sort`
   :::column-end:::
   :::column span="3":::
   Sorts the revision history for one or more files or folders in either of the following orders:

   
   - `Ascending`: From the oldest to the most recent revision.

   - `Descending` (default): From the most recent to the oldest revision.

   
   You must use the `/noprompt` option with this option.
   :::column-end:::
:::row-end:::
:::row:::
   :::column span="1":::
   `/stopafter:<number>`
   :::column-end:::
   :::column span="3":::
   Specifies the maximum number of changesets to display in the history data.
   :::column-end:::
:::row-end:::
:::row:::
   :::column span="1":::
   `/user:<username>`
   :::column-end:::
   :::column span="3":::
   Filters the historical data to show changes made by the specified user. An asterisk (\*) symbol includes data on changes from all users, the default.
   :::column-end:::
:::row-end:::
:::row:::
   :::column span="1":::
   `/version:<versionspec>`
   :::column-end:::
   :::column span="3":::
   Specifies either the maximum version, or the minimum and maximum versions by using the range `~` syntax. The default is `/version:W`, the version in the workspace.

   You can't combine this option with the `/slotmode` option.

   For syntax, see [Use Team Foundation version control commands](use-team-foundation-version-control-commands.md).
   :::column-end:::
:::row-end:::

## Remarks

- To get more detailed information about a changeset, for example to see associated work items:

  - In the Visual Studio **History** window, double-click or right-click the changeset and choose **Changeset Details**.

  - From the command prompt, use the [Changeset command](changeset-command.md).

- The `/collection` option is useful for running this command from a machine and user account that doesn't have a workspace mapped to the project collection that contains the items.

## Examples

The following examples assume that *c:\\code\\SiteApp\\Main* maps to the main folder in the workspace.

### Get history of a single file

The following example displays all changes made to *program2.cs* in the **History** window.

```
c:\code\SiteApp\Main\SolutionA\Project1>tf history program2.cs
```

The following example displays all changes made to *program2.cs* in the command prompt window.

```
c:\code\SiteApp\Main\SolutionA\Project1>tf history program2.cs /noprompt
```

Output:

```
Changeset Change                     User              Date       Comment
--------- -------------------------- ----------------- ---------- -------- 
29        edit                       Jamal Hartnett    4/23/2012  Fix bug
20        add                        Raisa Pokrovskaya 4/12/2012  Add new  
```

### Get history of all items in a folder

The following example displays all changes made to all items in *SolutionA*, including those in subfolders, in the **History** window.

```
c:\code\SiteApp\Main\SolutionA>tf history * /recursive
```

### Get history of the last five changes to all items in a folder

The following example displays the latest five changes made to items in *SolutionA*, including those in subfolders, in the command prompt window:

```
c:\code\SiteApp\Main\SolutionA>tf history * /noprompt /recursive /stopafter:5
```

Output:
```
Changeset User              Date       Comment
--------- ----------------- ---------- ----------------------------------------
31        Raisa Pokrovskaya 5/15/2012
30        Raisa Pokrovskaya 4/23/2012
29        Jamal Hartnett    4/23/2012  Fix bug in new method
20        Raisa Pokrovskaya 4/12/2012  Add new method, add program2.cs to Proje
15        Raisa Pokrovskaya 4/8/2012
```

### Get history from version x and earlier

The following example displays changes made to all items in *SolutionA*, including those in subfolders, in version 30 and earlier, in the command prompt window:

```
c:\code\SiteApp\Main\SolutionA>tf history /noprompt * /recursive /v:30
```

Output:

```
Changeset User              Date       Comment
--------- ----------------- ---------- ----------------------------------------
30        Raisa Pokrovskaya 4/23/2012
29        Jamal Hartnett    4/23/2012  Fix bug in new method
20        Raisa Pokrovskaya 4/12/2012  Add new method, add program2.cs to 
15        Raisa Pokrovskaya 4/8/2012
```

### Get history from date D and earlier

The following examples display changes made to all items in *SolutionA*, including those in subfolders, on 4/23/12 or earlier, in the command prompt window:

```
c:\code\SiteApp\Main\SolutionA>tf history /noprompt * /recursive /v:D4/24/2012
```

Or:

```
c:\code\SiteApp\Main\SolutionA>tf history /noprompt * /recursive /v:D2012-04-24T12:00
```

Output:

```
Changeset User              Date       Comment
--------- ----------------- ---------- ----------------------------------------
30        Raisa Pokrovskaya 4/23/2012
29        Jamal Hartnett    4/23/2012  Fix bug in new method
20        Raisa Pokrovskaya 4/12/2012  Add new method, add program2.cs to 15        Raisa Pokrovskaya 4/8/2012
```

### Get history from a range of dates

The following example displays changes made to all items in *SolutionA*, including those in subfolders, between 4/12/2012 and 4/23/2012, in the command prompt window:

```
c:\code\SiteApp\Main\SolutionA>tf history /noprompt * /recursive /v:D4/12/2012~D4/24/2012
```

Output:

```
Changeset User              Date       Comment
--------- ----------------- ---------- ----------------------------------------
30        Raisa Pokrovskaya 4/23/2012
29        Jamal Hartnett    4/23/2012  Fix bug in new method
20        Raisa Pokrovskaya 4/12/2012  Add new method, add program2.cs to 
```

### Get detailed history

The following example displays details about changes made to all items in *SolutionA*, including those in subfolders, between 4/12/2012 and 4/23/2012, in the command prompt window:

```
c:\code\SiteApp\Main\SolutionA>tf history /noprompt * /recursive /v:D4/12/2012~D4/24/2012 /format:detailed
```

Output:

```
-------------------------------------------------------------------------------
Changeset: 30
User: Raisa Pokrovskaya (Fabrikam)
Date: Monday, April 23, 2012 1:23:05 PM

Comment:
  Much better name for this file

Items:
  rename                $/SiteApp/Main/SolutionA/Project1/programBig.cs
  delete, source rename $/SiteApp/Main/SolutionA/Project1/program3.cs;X15

-------------------------------------------------------------------------------
Changeset: 29
User: Raisa Pokrovskaya (Fabrikam)
Date: Monday, April 23, 2012 1:03:13 PM

Comment:
  Fix bug in new method

Items:
  edit $/SiteApp/Main/SolutionA/Project1/program1.cs
  edit $/SiteApp/Main/SolutionA/Project1/program2.cs

-------------------------------------------------------------------------------
Changeset: 20
User: Raisa Pokrovskaya (Fabrikam)
Date: Thursday, April 12, 2012 5:09:35 PM

Comment:
  Add new method, add program2.cs to Project1

Items:
  add $/SiteApp/Main/SolutionA/Project1/program2.cs

Check-in Notes:
  Documentation:
    An important new part of our codebase.

Policy Warnings:
  Override Reason:
    Jamal agrees with me that we can bypass for this check-in.
  Messages:
    The Code Analysis Policy requires files to be checked in through Visual
Studio with an open solution.
```

### Get the non-recursive history of a folder

The following example displays the history of the *SolutionA* folder in the Visual Studio **History** window, which enables you to explore earlier changes to the folder. For example, if the most recent change to the folder was a rename, you can expand the changeset to see changes that occurred before the rename.

```
c:\code\SiteApp\Main\SolutionA>tf history .
```

The following example displays the most recent change to the *SolutionA* folder in the command prompt window.

```
c:\code\SiteApp\Main\SolutionA>tf history . /noprompt
```


## Related articles

- For information about how to use the **History** window, see [Get the history of an item](get-history-item.md).
- For more information about changesets, see [Find and view changesets](find-view-changesets.md).
- Also see [View and manage past versions](view-manage-past-versions.md).

