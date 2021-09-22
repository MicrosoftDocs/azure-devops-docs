---
title: Checkin command
titleSuffix: Azure Repos
description: Checkin command
ms.assetid: 90b18c7c-b0ae-4f46-829f-3a4471614086
ms.technology: devops-code-tfvc
ms.topic: reference
ms.date: 10/31/2017
monikerRange: '>= tfs-2015'
---


# Checkin command

**Azure Repos | Azure DevOps Server 2020 | Azure DevOps Server 2019 | TFS 2018 | TFS 2017 | TFS 2015 | VS 2017 | VS 2015 | VS 2013**

Checks in your pending changes to files or folders to the server.

Almost every change that you make to the files on your dev machine is stored in your workspace as a [pending change](develop-code-manage-pending-changes.md) until you check it in. When you check in your changes, they are stored as a [changeset](find-view-changesets.md) on the server. Although the **Checkin** command provides a different user interface than the one you can use in Visual Studio (see [Check in your work to the team's codebase](check-your-work-team-codebase.md)), the process is fundamentally the same.

**Requirements**: See [Permissions and groups reference](../../organizations/security/permissions.md).

```
tf checkin [/author:author name] [/comment:("comment"|@comment file)] 
[/noprompt] [/notes:("Note Name"="note text"|@notefile)] 
[/override:(reason|@reasonfile)] [/recursive] [/saved] [/validate] [itemspec] [/bypass] [/force] [/noautoresolve]  [/login:username,[password]] [/new]
```

```
tf checkin /shelveset:shelvesetname[;shelvesetowner] [/bypass] [/noprompt] [/login:username,[password]] [/collection:TeamProjectCollectionUrl][/author:author name] [/force]
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
   **/author**:*author name*
   :::column-end:::
   :::column span="3":::
   Identifies the author of the pending changes so that one user can check in changes on behalf of another user.

   Requires the **CheckinOther **permission. See [Permissions and groups reference](../../organizations/security/permissions.md)
   :::column-end:::
:::row-end:::
:::row:::
   :::column span="1":::
   **/bypass**
   :::column-end:::
   :::column span="3":::
   Bypasses a gated check-in requirement. For more information, see [Check in to a folder that is controlled by a gated check-in build process](check-folder-controlled-by-gated-check-build-process.md).
   :::column-end:::
:::row-end:::
:::row:::
   :::column span="1":::
   **/collection**:*TeamProjectCollectionUrl*
   :::column-end:::
   :::column span="3":::
   If you use the **shelveset** option, the **/collection** option specifies the URL of the project collection that contains the shelveset. For example:`http://myserver:8080/tfs/DefaultCollection`.

   By default, the project collection is presumed to be the one that contains the workspace that maps the current directory.
   :::column-end:::
:::row-end:::
:::row:::
   :::column span="1":::
   **/comment**
   :::column-end:::
   :::column span="3":::
   Associates a comment with the changeset using one of the following arguments:

   
   - *Comment*: A user-provided comment about the check-in.

   - *<xref href="comment" data-throw-if-not-resolved="False" data-raw-source="@comment"></xref> file*: The path to a file on disk that contains the comment for the check-in.

   
   :::column-end:::
:::row-end:::
:::row:::
   :::column span="1":::
   **/force**
   :::column-end:::
   :::column span="3":::
   Forces a check-in on items with pending edits even when there are no content changes in the file.
   :::column-end:::
:::row-end:::
:::row:::
   :::column span="1":::
   *itemspec*
   :::column-end:::
   :::column span="3":::
   Specifies the scope of the items to check in from the user&#39;s workspace. You can specify more than one *Itemspec* argument. For syntax, see [Use Team Foundation version control commands](use-team-foundation-version-control-commands.md).
   :::column-end:::
:::row-end:::
:::row:::
   :::column span="1":::
   **/login**:*username*,[*password*]
   :::column-end:::
   :::column span="3":::
   Specifies the user account to run the command. See [Use Team Foundation version control commands](use-team-foundation-version-control-commands.md).
   :::column-end:::
:::row-end:::
:::row:::
   :::column span="1":::
   **/new**
   :::column-end:::
   :::column span="3":::
   The selected state of each pending change (as shown in the **Check In** dialog box), the comment, associated work items, check-in notes, and check-in policy override reason, are stored on your dev machine as pending changes until you check them in. The **/new** option clears this check-in metadata before you check in.

   This option and the behavior it modifies have no effect when you use the **/noprompt** option.
   :::column-end:::
:::row-end:::
:::row:::
   :::column span="1":::
   **/noautoresolve**
   :::column-end:::
   :::column span="3":::
   By default, the system automatically attempts to **AutoResolve All** (see [Resolve Team Foundation Version Control conflicts](resolve-team-foundation-version-control-conflicts.md)). Specify this option to disable this default behavior.
   :::column-end:::
:::row-end:::
:::row:::
   :::column span="1":::
   **/noprompt**
   :::column-end:::
   :::column span="3":::
   Suppresses the display of windows and dialog boxes (such as the **Check In** dialog box) and redirects output data to the command prompt. See [Use Team Foundation version control commands](use-team-foundation-version-control-commands.md).
   :::column-end:::
:::row-end:::
:::row:::
   :::column span="1":::
   **/notes**
   :::column-end:::
   :::column span="3":::
   Provides one or more check-in notes to associate with the changeset using one of the following arguments:

   
   - *NoteFieldName=NoteFieldValue*: Sets the value of the check-in note field. You can provide multiple, semicolon-separated &quot;field=value&quot; expressions.

   - *Notefile*: The user-provided path of a file on disk that contains check-in note field names and values in the format of &quot;field=value&quot;. A semicolon separated note tile can span multiple lines, for example:

     Field1=Value1;

     Field2=First line of Value2

     Second line Value2;

     Field3=Value3;

   :::column-end:::
:::row-end:::
:::row:::
   :::column span="1":::
   **/override**
   :::column-end:::
   :::column span="3":::
   Overrides a check-in policy using one of the following arguments:

   
   - *reason*: A user-provided reason why the check-in policy is being ignored.

   - *Reasonfile*: The path to a file that contains a user-provided description of the reason why the check-in policy is being ignored.

   
   :::column-end:::
:::row-end:::
:::row:::
   :::column span="1":::
   **/recursive**
   :::column-end:::
   :::column span="3":::
   Recursively checks in items in the specified directory and any subdirectories.
   :::column-end:::
:::row-end:::
:::row:::
   :::column span="1":::
   **/saved**
   :::column-end:::
   :::column span="3":::
   Ignore this parameter.
   :::column-end:::
:::row-end:::
:::row:::
   :::column span="1":::
   **/shelveset**:*shelvesetname[;owner]*
   :::column-end:::
   :::column span="3":::
   Specifies a shelveset to check in. The optional *owner* argument is used to specify a shelveset that the current user does not own.

   > [!Note]  
   > After you check in the shelveset, the system deletes it.
   :::column-end:::
:::row-end:::
:::row:::
   :::column span="1":::
   **/validate**
   :::column-end:::
   :::column span="3":::
   Tests whether the check in would succeed without checking in the files. The system evaluates check-in policies, check-in notes, and lists conflicts.

   > [!Note]  
   > If you do not specify the **/noprompt** option, you must choose the **Check In** button on the **Check In** dialog box to validate the check in. After you choose this button, the system will not check in the files.</p>
   :::column-end:::
:::row-end:::


## Examples

### Check in all pending changes in the current workspace

```
c:\code\SiteApp\Main>tf checkin
```

Displays the **Check In** dialog box, which displays all pending changes in the current workspace. You can use the **Check In** dialog box to select or clear the pending changes you want to check in, add a comment, associate work items, and perform other tasks and then choose the **Check In** button when you are ready to proceed.

### Check in all pending changes with a comment

```
c:\code\SiteApp\Main>tf checkin /comment:"Re-implemented Pi calculator"
```

Checks in all pending changes in the current workspace and provides a comment to help your teammates understand the purpose of your changes.

### Check in a change to a single item without using the Check In dialog box

```
c:\code\SiteApp\Main>tf checkin program.cs /noprompt
```

Checks in your pending changes to program.cs. The **Check In** dialog box is not displayed, and if any conflicts block the check in, the system does not display the conflicts window.


## Work in Visual Studio

-    [Check in your work to the team's codebase](check-your-work-team-codebase.md)  Use Visual Studio to check in your changes to the server.

## Tips

-   ![Tip](media/checkin-command/IC572374.png) To set aside changes (and perhaps also want to clean your workspace for another task), use the [Shelve Command](shelve-command.md).

-   ![Tip](media/checkin-command/IC572374.png) If conflicts block your check-in, you can use the [Resolve Command](resolve-command.md) to resolve them.

-   ![Tip](media/checkin-command/IC572374.png) If a machine and user account do not have a workspace mapped to the Project Collection that contains the shelveset, you can use the **/shelveset** and **/collection** options to check in a shelveset.
