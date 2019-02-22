---
title: Checkin command
titleSuffix: Azure Repos
description: Checkin command
ms.assetid: 90b18c7c-b0ae-4f46-829f-3a4471614086
ms.prod: devops
ms.technology: devops-code-tfvc
ms.manager: jillfra
ms.author: sdanie
author: steved0x
ms.topic: reference
ms.date: 10/31/2017
monikerRange: '>= tfs-2015'
---


# Checkin command

#### Azure Repos | TFS 2018 | TFS 2017 | TFS 2015 | VS 2017 | VS 2015 | VS 2013

Checks in your pending changes to files or folders to the server.

Almost every change that you make to the files on your dev machine is stored in your workspace as a [pending change](develop-code-manage-pending-changes.md) until you check it in. When you check in your changes, they are stored as a [changeset](find-view-changesets.md) on the server. Although the **Checkin** command provides a different user interface than the one you can use in Visual Studio (see [Check in your work to the team's codebase](check-your-work-team-codebase.md)), the process is fundamentally the same.

**Requirements**: See [Permissions and groups reference](../../organizations/security/permissions.md).

    tf checkin [/author:author name] [/comment:("comment"|@comment file)] 
    [/noprompt] [/notes:("Note Name"="note text"|@notefile)] 
    [/override:(reason|@reasonfile)] [/recursive] [/saved] [/validate] [itemspec] [/bypass] [/force] [/noautoresolve]  [/login:username,[password]] [/new]

    tf checkin /shelveset:shelvesetname[;shelvesetowner] [/bypass] [/noprompt] [/login:username,[password]] [/collection:TeamProjectCollectionUrl][/author:author name] [/force]

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
<td><p><strong>/author</strong>:<i>author name</i></p></td>
<td><p>Identifies the author of the pending changes so that one user can check in changes on behalf of another user.</p>
<p>Requires the <strong>CheckinOther </strong>permission. See [Permissions and groups reference](../../organizations/security/permissions.md)</p></td>
</tr>
<tr>
<td><p><strong>/bypass</strong></p></td>
<td><p>Bypasses a gated check-in requirement. For more information, see <a href="check-folder-controlled-by-gated-check-build-process.md">Check in to a folder that is controlled by a gated check-in build process</a>.</p></td>
</tr>
<tr>
<td><p><strong>/collection</strong>:<i>TeamProjectCollectionUrl</i></p></td>
<td><p>If you use the <strong>shelveset</strong> option, the <strong>/collection</strong> option specifies the URL of the project collection that contains the shelveset. For example: http://myserver:8080/tfs/DefaultCollection.</p>
<p>By default, the project collection is presumed to be the one that contains the workspace that maps the current directory.</p></td>
</tr>
<tr>
<td><p><strong>/comment</strong></p></td>
<td><p>Associates a comment with the changeset using one of the following arguments:</p>
<ul>
<li><p><i>Comment</i>: A user-provided comment about the check-in.</p></li>
<li><p><i>@comment file</i>: The path to a file on disk that contains the comment for the check-in.</p></li>
</ul></td>
</tr>
<tr>
<td><p><strong>/force</strong></p></td>
<td><p>Forces a check-in on items with pending edits even when there are no content changes in the file.</p></td>
</tr>
<tr>
<td><p><i>itemspec</i></p></td>
<td><p>Specifies the scope of the items to check in from the user's workspace. You can specify more than one <em>Itemspec</em> argument. For syntax, see <a href="use-team-foundation-version-control-commands.md">Use Team Foundation version control commands</a>.</p></td>
</tr>
<tr>
<td><p><strong>/login</strong>:<i>username</i>,[<i>password</i>]</p></td>
<td><p>Specifies the user account to run the command. See <a href="use-team-foundation-version-control-commands.md">Use Team Foundation version control commands</a>.</p></td>
</tr>
<tr>
<td><p><strong>/new</strong></p></td>
<td><p>The selected state of each pending change (as shown in the <strong>Check In</strong> dialog box), the comment, associated work items, check-in notes, and check-in policy override reason, are stored on your dev machine as pending changes until you check them in. The <strong>/new</strong> option clears this check-in metadata before you check in.</p>
<p>This option and the behavior it modifies have no effect when you use the <strong>/noprompt</strong> option.</p></td>
</tr>
<tr>
<td><p><strong>/noautoresolve</strong></p></td>
<td><p>By default, the system automatically attempts to <strong>AutoResolve All</strong> (see <a href="resolve-team-foundation-version-control-conflicts.md">Resolve Team Foundation Version Control conflicts</a>). Specify this option to disable this default behavior.</p></td>
</tr>
<tr>
<td><p><strong>/noprompt</strong></p></td>
<td><p>Suppresses the display of windows and dialog boxes (such as the <strong>Check In</strong> dialog box) and redirects output data to the command prompt. See <a href="use-team-foundation-version-control-commands.md">Use Team Foundation version control commands</a>.</p></td>
</tr>
<tr>
<td><p><strong>/notes</strong></p></td>
<td><p>Provides one or more check-in notes to associate with the changeset using one of the following arguments:</p>
<ul>
<li><p><i>NoteFieldName=NoteFieldValue</i>: Sets the value of the check-in note field. You can provide multiple, semicolon-separated &quot;field=value&quot; expressions.</p></li>
<li><p><i>Notefile</i>: The user-provided path of a file on disk that contains check-in note field names and values in the format of &quot;field=value&quot;. A semicolon separated note tile can span multiple lines, for example:</p>
<p>Field1=Value1;</p>
<p>Field2=First line of Value2</p>
<p>Second line Value2;</p>
<p>Field3=Value3;</p></li>
</ul></td>
</tr>
<tr>
<td><p><strong>/override</strong></p></td>
<td><p>Overrides a check-in policy using one of the following arguments:</p>
<ul>
<li><p><i>reason</i>: A user-provided reason why the check-in policy is being ignored.</p></li>
<li><p><i>Reasonfile</i>: The path to a file that contains a user-provided description of the reason why the check-in policy is being ignored.</p></li>
</ul></td>
</tr>
<tr>
<td><p><strong>/recursive</strong></p></td>
<td><p>Recursively checks in items in the specified directory and any subdirectories.</p></td>
</tr>
<tr>
<td><p><strong>/saved</strong></p></td>
<td><p>Ignore this parameter.</p></td>
</tr>
<tr>
<td><p><strong>/shelveset</strong>:<i>shelvesetname[;owner]</i></p></td>
<td><p>Specifies a shelveset to check in. The optional <i>owner</i> argument is used to specify a shelveset that the current user does not own.</p>
<div class="alert">
<table>
<thead>
<tr>
<th> <strong>Note</strong></th>
</tr>
</thead>
<tbody>
<tr>
<td><p>After you check in the shelveset, the system deletes it.</p></td>
</tr>
</tbody>
</table>
</div></td>
</tr>
<tr>
<td><p><strong>/validate</strong></p></td>
<td><p>Tests whether the check in would succeed without checking in the files. The system evaluates check-in policies, check-in notes, and lists conflicts.</p>
<div class="alert">
<table>
<thead>
<tr>
<th> <strong>Note</strong></th>
</tr>
</thead>
<tbody>
<tr>
<td><p>If you do not specify the <strong>/noprompt</strong> option, you must choose the <strong>Check In</strong> button on the <strong>Check In</strong> dialog box to validate the check in. After you choose this button, the system will not check in the files.</p></td>
</tr>
</tbody>
</table>
</div></td>
</tr>
</tbody>
</table>

## Examples

### Check in all pending changes in the current workspace

    c:\code\SiteApp\Main>tf checkin

Displays the **Check In** dialog box, which displays all pending changes in the current workspace. You can use the **Check In** dialog box to select or clear the pending changes you want to check in, add a comment, associate work items, and perform other tasks and then choose the **Check In** button when you are ready to proceed.

### Check in all pending changes with a comment

    c:\code\SiteApp\Main>tf checkin /comment:"Re-implemented Pi calculator"

Checks in all pending changes in the current workspace and provides a comment to help your teammates understand the purpose of your changes.

### Check in a change to a single item without using the Check In dialog box

    c:\code\SiteApp\Main>tf checkin program.cs /noprompt

Checks in your pending changes to program.cs. The **Check In** dialog box is not displayed, and if any conflicts block the check in, the system does not display the conflicts window.


## Work in Visual Studio

-    [Check in your work to the team's codebase](check-your-work-team-codebase.md)  Use Visual Studio to check in your changes to the server.

## Tips

-   ![Tip](_img/checkin-command/IC572374.png) To set aside changes (and perhaps also want to clean your workspace for another task), use the [Shelve Command](shelve-command.md).

-   ![Tip](_img/checkin-command/IC572374.png) If conflicts block your check-in, you can use the [Resolve Command](resolve-command.md) to resolve them.

-   ![Tip](_img/checkin-command/IC572374.png) If a machine and user account do not have a workspace mapped to the Project Collection that contains the shelveset, you can use the **/shelveset** and **/collection** options to check in a shelveset.
