---
title: Changeset Command
titleSuffix: Azure Repos
description: Changeset Command
ms.assetid: 74d584cf-277f-41f9-b7a1-642ebab963af
ms.prod: devops
ms.technology: devops-code-tfvc
ms.manager: jillfra
ms.author: sdanie
author: steved0x
ms.topic: reference
ms.date: 08/10/2016
monikerRange: '>= tfs-2015'
---


# Changeset Command

#### Azure Repos | TFS 2018 | TFS 2017 | TFS 2015 | VS 2017 | VS 2015 | VS 2013

Displays information about and lets you change the attributes, such as comments and check-in notes, that are associated with a changeset.

**Required Permissions**

To use the **changeset** command you must have the **Read** permission set to **Allow** for any files or folders in the changeset for which you wish to display full information. The only users who can modify the notes and comments that are associated with a changeset are the users who created the changeset or a user who has the Revise other user's changes global permission. For more information, see [Permissions and groups reference](../../organizations/security/permissions.md).

    tf changeset [/comment:("comment"|@commentfile)] 
    [/notes:("NoteFieldName"="NoteFieldValue"|@notefile)] [/noprompt][/collection:TeamProjectCollectionUrl]] 
    [changesetnumber | /latest][/login:username,[password]]

## Parameters

| **Argument** | **Description** |
|---|---|
| *comment* | Provides a comment about the check-in. |
| *@commentfile* | Specifies a path of a file on disk that contains the comment used for the check-in. |
| *NoteFieldName=NoteFieldValue* | Sets the value of the check-in note field. You can provide multiple, semicolon-separated &quot;field=value&quot; expressions. |
| *@notefile* | Provides the path of a file on disk that contains check-in note field names and values in the format of &quot;field=value&quot; with one per line. |
| *TeamProjectCollectionUrl* | The URL of the project collection that contains a changeset about which you want to display information or whose attributes you want to modify (for example, http://myserver:8080/tfs/DefaultCollection). |
| *username* | Provides a value to the **/user** option. You can specify this argument as either *Domain*\*UserName* or *UserName*. |
| *changesetnumber* | Identifies the changeset to be reviewed or modified. Cannot be used with **/latest**. |

| **Option** | **Description** |
|---|---|
| **/comment** | Replaces the changeset comment that was created during the check-in process, with a new comment. |
| **/notes** | Provides one or more check-in notes to associate with the changeset. |
| **/latest** | Specifies the most recent changeset. Cannot be used with *changesetnumber.* |
| **/noprompt** | Suppresses any prompts for input from you. |
| **/collection** | Specifies the project collection. |
| **/login** | Specifies the user name and the password to authenticate the user with Visual Studio Team Foundation Server. |

## Remarks
A *changeset* is a set of file and folder revisions that were committed to the Team Foundation version control server as part of the same check-in event. For more information, see [Working with Changesets](find-view-changesets.md).

You can use the **changeset** command to view the attributes of a changeset and modify its properties. You can use the History command to determine which changeset you want to obtain information about. For more information, see [History Command](history-command.md).

For links to other Team Foundation commands that provide additional information about the items in your Team Foundation version control server and all the workspaces that map to it, see [Informational Commands](https://msdn.microsoft.com/library/ms181450).

For more information on how to find the **tf** command-line utility, see [Tf Command-Line Utility Commands](https://msdn.microsoft.com/library/z51z7zy0).

## Examples

The following example Displays detailed information about changeset 8675309 in an editable format in the **Changeset **dialog box and replaces the existing comment with "This is a new comment."

After you press ENTER, the **Details for Changeset** *\<changeset number\>* **- Source Files** dialog box appears. Click **Save** to associate the comment with the changeset.

    c:\projects>tf changeset /comment:"This is a new comment." 8675309

The following example provides two check-in notes to associate with the changeset.

    c:\projects>tf changeset /notes:reviewer=Jo;Security = checked 8675309

The following example provides two check-in notes that include spaces in the values and names to associate with the changeset.

    c:\projects>tf changeset /notes:"Code Reviewer"="John Smith";"Security Reviewer"="Chen Yang" 8675309

The following example associates the check-in notes included in the file notes.txt with the changeset 8675309.

    c:\projects>tf changeset /notes:@notes.txt 8675309

Where the notes.txt can be in following format:

```
field1=value1;
```
```
field2=value that
```
```
spans multiple
```
```
lines;
```
```
field3 = value3;
```

The following example replaces the existing comment for changeset 8675309 and displays information about the changeset in the Command Prompt window. The example does not start the **Changeset **dialog box.

    c:\projects>tf changeset /comment:"This is an automatically generated comment." /noprompt 8675309

The following example displays non-editable information about changeset 8675309 in the Command Prompt window.

    c:\projects>tf changeset 8675309 /noprompt

Sample output:

    Changeset: 8675309
    User: DOMAIN\JohnG
    Date: 01/21/2004 21:03:45
    Comment:  This check-in fixes issues in several features.  I also refactored some items in buf.c into a new file named bif.c because buf.c was too hard to parse.
    Items:
       $/baz/proj/bif.c           Added
       $/baz/proj/buf.c          Modified, Renamed
    Work Items:
       34527     The "Access Denied" message is not descriptive enough.
       35628     The UI flickers when I press the '8', 'y', 'Ctrl', and 'End' buttons at the same time.
    Check-in Notes:
       Code Reviewer:  ShellM
       Performance Reviewer: ShellM
       Security Reviewer: ShellM

## See Also

#### Reference

[Checkin Command](checkin-command.md)

[Checkout and Edit Commands](checkout-or-edit-command.md)

[Shelve Command](shelve-command.md)

[History Command](history-command.md)

[Configure Command](configure-command.md)

#### Concepts

[Working with Changesets](find-view-changesets.md)

#### Other Resources

[Tf Command-Line Utility Commands](https://msdn.microsoft.com/library/z51z7zy0)
