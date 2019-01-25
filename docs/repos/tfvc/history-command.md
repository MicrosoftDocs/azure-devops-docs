---
title: History command
titleSuffix: Azure Repos
description: History command
ms.assetid: 14c451c2-c59e-46c7-afd5-c727ba683eb2
ms.prod: devops
ms.technology: devops-code-tfvc
ms.manager: jillfra
ms.author: sdanie
author: steved0x
ms.topic: reference
ms.date: 08/10/2016
monikerRange: '>= tfs-2015'
---


# History command

#### Azure Repos | TFS 2018 | TFS 2017 | TFS 2015 | VS 2017 | VS 2015 | VS 2013

Displays the revision history of one or more files or folders. The data is displayed in either the History window, or if **/noprompt** option is specified, at the command prompt.

**Requirements:** See [Permissions and groups reference](../../organizations/security/permissions.md).

    tf hist[ory] itemspec [/version:versionspec] 
    [/stopafter:number] [/recursive] [/user:username] 
    [/format:(brief|detailed)] [/slotmode] [/itemmode] [/noprompt]
    [/login:username,[password]] [/sort:ascending,descending]
    [/collection:TeamProjectCollectionUrl]

## Parameters

<table>
<thead>
<tr>
<th><p><strong>Parameter</strong></p></th>
<th><p><strong>Description</strong></p></th>
</tr>
</thead>
<tbody>
<tr>
<td><p><strong>/collection</strong>: <i>TeamProjectCollectionUrl</i></p></td>
<td><p>Specifies the URL of the project collection that contains the items. For example: http://myserver:8080/tfs/DefaultCollection.</p>
<p>By default, the project collection is presumed to be the one that contains the workspace that maps the current directory.</p></td>
</tr>
<tr>
<td><p><strong>/format</strong></p></td>
<td><p>Specifies how much detail to display about each changeset when the <strong>/noprompt</strong> option is specified:</p>
<ul>
<li><p><strong>Brief</strong> (default): Displays one line about each changeset that includes: ID number, changes made, user who made the changes, date, and comment. Some of the data may be truncated.</p></li>
<li><p><strong>Detailed</strong>: Displays a full description of each changeset. In addition to the above information, this option displays additional data such as date with time, items changed, check-in notes, and check-in policy warnings.</p></li>
</ul></td>
</tr>
<tr>
<td><p><strong>/itemmode</strong></p></td>
<td><p>You cannot combine this option with the <strong>/slotmode</strong> option. See <a href="http://go.microsoft.com/fwlink/?LinkId=253467">Matt Mitrik: Changing to Slot Mode in TFS 2010 Version Control</a>.</p></td>
</tr>
<tr>
<td><p><i>itemspec</i></p></td>
<td><p>Specifies the items for which to display history. For syntax, see <a href="use-team-foundation-version-control-commands.md">Use Team Foundation version control commands</a>.</p></td>
</tr>
<tr>
<td><p><strong>/noprompt</strong></p></td>
<td><p>This option:</p>
<ul>
<li><p>Suppresses the display of windows and dialog boxes (such as the <strong>History</strong> window) and redirects output data to the command prompt. See <a href="use-team-foundation-version-control-commands.md">Use Team Foundation version control commands</a>.</p></li>
<li><p>Does not display the history of revisions that occurred before an item was moved, renamed, branched, or merged.</p></li>
</ul></td>
</tr>
<tr>
<td><p><strong>/login</strong>:<i>username</i>,[<i>password</i>]</p></td>
<td><p>Specifies the user account to run the command. See <a href="use-team-foundation-version-control-commands.md">Use Team Foundation version control commands</a>.</p></td>
</tr>
<tr>
<td><p><strong>/recursive</strong></p></td>
<td><p>Recursively retrieves historical data on items in the specified directory and any subdirectories.</p></td>
</tr>
<tr>
<td><p><strong>/slotmode</strong></p></td>
<td><p>You cannot combine this option with the <strong>/itemmode</strong> option. See <a href="http://go.microsoft.com/fwlink/?LinkId=253467">Matt Mitrik: Changing to Slot Mode in TFS 2010 Version Control</a>.</p></td>
</tr>
<tr>
<td><p><strong>/sort</strong></p></td>
<td><p>Sorts the revision history for one or more files or folders in either of the following orders:</p>
<ul>
<li><p><strong>Ascending</strong>: from the oldest to the most recent revision.</p></li>
<li><p><strong>Descending</strong> (default): from the most recent to the oldest revision.</p></li>
</ul>
<p>You must use the <strong>/noprompt</strong> option with this option.</p></td>
</tr>
<tr>
<td><p><strong>/stopafter</strong>:<i>number</i></p></td>
<td><p>Specifies the maximum number of changesets to display in the history data.</p></td>
</tr>
<tr>
<td><p><strong>/user</strong>:<i>username</i></p></td>
<td><p>Filters the historical data to show changes made by the specified user. An asterisk (<strong>*</strong>) symbol includes data on changes from all users (the default).</p></td>
</tr>
<tr>
<td><p><strong>/version</strong>:<i>versionspec</i></p></td>
<td><p>Specifies one of the following limits on the history data:</p>
<ul>
<li><p>The maximum version</p></li>
<li><p>The minimum and the maximum versions using the range <strong>~</strong> syntax.</p></li>
</ul>
<p>The default is `/version:W` (the version in the workspace).</p>
<p>For syntax, see <a href="use-team-foundation-version-control-commands.md">Use Team Foundation version control commands</a>.</p>
<p>You cannot combine this option with the <strong>/slotmode</strong> option.</p></td>
</tr>
</tbody>
</table>

## Examples

### Get history of a single file

    c:\code\SiteApp\Main\SolutionA\Project1>tf history program2.cs

Displays all changes made to program.cs in the History window.

    c:\code\SiteApp\Main\SolutionA\Project1>tf history program2.cs /noprompt

Displays all changes made to program.cs in the command prompt window. For example:

    Changeset Change                     User              Date       Comment
    --------- -------------------------- ----------------- ---------- -------- 
    29        edit                       Jamal Hartnett    4/23/2012  Fix bug
    20        add                        Raisa Pokrovskaya 4/12/2012  Add new  

### Get history of all items in a folder

    c:\code\SiteApp\Main\SolutionA>tf history * /recursive

Displays all changes made to all items in SolutionA (including those in subfolders) in the History window.

### Get history of the last five changes to all items in a folder

    c:\code\SiteApp\Main\SolutionA>tf history * /noprompt /recursive /stopafter:5

Displays the latest 5 changes made to items in SolutionA (including those in subfolders):

    Changeset User              Date       Comment
    --------- ----------------- ---------- ----------------------------------------
    31        Raisa Pokrovskaya 5/15/2012
    30        Raisa Pokrovskaya 4/23/2012
    29        Jamal Hartnett    4/23/2012  Fix bug in new method
    20        Raisa Pokrovskaya 4/12/2012  Add new method, add program2.cs to Proje
    15        Raisa Pokrovskaya 4/8/2012

### Get history from version x and earlier

    c:\code\SiteApp\Main\SolutionA>tf history /noprompt * /recursive /v:30

Displays changes made to all items in SolutionA (including those in subfolders) in version 30 and earlier:

    Changeset User              Date       Comment
    --------- ----------------- ---------- ----------------------------------------
    30        Raisa Pokrovskaya 4/23/2012
    29        Jamal Hartnett    4/23/2012  Fix bug in new method
    20        Raisa Pokrovskaya 4/12/2012  Add new method, add program2.cs to 15        Raisa Pokrovskaya 4/8/2012

### Get history from date D and earlier

    c:\code\SiteApp\Main\SolutionA>tf history /noprompt * /recursive /v:D4/24/2012

-- or --

    c:\code\SiteApp\Main\SolutionA>tf history /noprompt * /recursive /v:D2012-04-24T12:00

Displays changes made to all items in SolutionA (including those in subfolders) on 4/23/12 or earlier:

    Changeset User              Date       Comment
    --------- ----------------- ---------- ----------------------------------------
    30        Raisa Pokrovskaya 4/23/2012
    29        Jamal Hartnett    4/23/2012  Fix bug in new method
    20        Raisa Pokrovskaya 4/12/2012  Add new method, add program2.cs to 15        Raisa Pokrovskaya 4/8/2012

### Get history from version x to version y

    c:\code\SiteApp\Main\SolutionA>tf history /noprompt * /recursive /v:D4/12/2012~D4/24/2012

Displays changes made to all items in SolutionA (including those in subfolders) between 4/12/2012 and 4/23/12:

    Changeset User              Date       Comment
    --------- ----------------- ---------- ----------------------------------------
    30        Raisa Pokrovskaya 4/23/2012
    29        Jamal Hartnett    4/23/2012  Fix bug in new method
    20        Raisa Pokrovskaya 4/12/2012  Add new method, add program2.cs to 

### Get detailed history

    c:\code\SiteApp\Main\SolutionA>tf history /noprompt * /recursive /v:D4/12/2012~D4/24/2012 /format:detailed

Displays details about changes made to all items in SolutionA (including those in subfolders) between 4/12/2012 and 4/23/12:

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

### Get the non-recursive history of a folder

    c:\code\SiteApp\Main\SolutionA>tf history .

Displays the history of the SolutionA folder in the History window, which enables you to explore earlier changes to the folder. For example, if the most recent change to the folder was a rename, you can expand the changeset to see changes that occurred before the rename.

    c:\code\SiteApp\Main\SolutionA>tf history . /noprompt

Displays the most recent change to the SolutionA folder in the command prompt window.

## Work in Visual Studio

-    [Get the history of an item](get-history-item.md)  Use Visual Studio to get revision history.

## Tips

-   ![Tip](_img/history-command/IC572374.png) For information about how to use the **History** window, see [Get the history of an item](get-history-item.md).

-   ![Tip](_img/history-command/IC572374.png) To get more detailed information about a changeset (for example, you want to see associated work items):

    -   In the History window, double-click the changeset or open its context menu and choose **Changeset Details**.

    -   From the command prompt, use the [Changeset Command](changeset-command.md).

-   ![Tip](_img/history-command/IC572374.png) For more information about changesets, see [Find and view changesets](find-view-changesets.md).

-   ![Tip](_img/history-command/IC572374.png) The **/collection** option is useful for running this command from a machine and user account that does not have a workspace mapped to the Project Collection that contains the items.

-   ![Tip](_img/history-command/IC572374.png) See [View and manage past versions](view-manage-past-versions.md).
