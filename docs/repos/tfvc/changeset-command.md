---
title: Changeset command
titleSuffix: Azure Repos
description: See how to use the Changeset command in TFVC.
ms.assetid: 74d584cf-277f-41f9-b7a1-642ebab963af
ms.service: azure-devops-repos
ms.topic: reference
ms.date: 10/22/2022
monikerRange: '<= azure-devops'
ms.subservice: azure-devops-repos-tfvc
---

# Changeset command

[!INCLUDE [version-lt-eq-azure-devops](../../includes/version-lt-eq-azure-devops.md)]
[!INCLUDE [version-vs-gt-eq-2019](../../includes/version-vs-gt-eq-2019.md)]


Displays information about and lets you change the attributes, such as comments and check-in notes, that are associated with a changeset.
 

## Prerequisites

To use the `changeset` command, you must have the **Read** permission set to **Allow** for any files or folders in the changeset for which you wish to display full information. The only users who can modify the notes and comments that are associated with a changeset are the users who created the changeset or a user who has the **Revise other user's changes** global permission. 

For more information, see  [Default TFVC permissions](../../organizations/security/default-tfvc-permissions.md).

## Syntax

```
tf changeset [/comment:("comment"|@commentfile)] 
[/notes:("NoteFieldName"="NoteFieldValue"|@notefile)] [/noprompt][/collection:TeamProjectCollectionUrl]] 
[changesetnumber | /latest][/login:username,[password]]
```

## Parameters

### Argument

|          **Argument**          |                                                                                               **Description**                                                                                               |
|--------------------------------|-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
|           `comment`            |                                                                                   Provides a comment about the check-in.                                                                                    |
|     `@<commentfile>`      |                                                             Specifies a path of a file on disk that contains the comment used for the check-in.                                                             |
| `<NoteFieldName>=<NoteFieldValue>` |                                        Sets the value of the check-in note field. You can provide multiple, semicolon-separated `field=value` expressions.                                        |
|       `@<notefile>`       |                             Provides the path of a file on disk that contains check-in note field names and values in the format of `field=value` with one per line.                              |
|   `<TeamProjectCollectionUrl>`   | The URL of the project collection that contains a changeset about which you want to display information or whose attributes you want to modify, for example, `http://myserver:8080/tfs/DefaultCollection`.|
|           `<username>`           |                                            Provides a value to the `/user` option. You can specify this argument as either `Domain\username` or `username`.                                            |
|       `<changesetnumber>`        |                                                            Identifies the changeset to be reviewed or modified. Can't be used with `/latest`.                                                            |


### Option

| **Option** | **Description** |
|---|---|
| `/comment` | Replaces the changeset comment that was created during the check-in process, with a new comment. |
| `/notes` | Provides one or more check-in notes to associate with the changeset. |
| `/latest` | Specifies the most recent changeset. Can't be used with `<changesetnumber>`. |
| `/noprompt` | Suppresses any prompts for input from you. |
| `/collection` | Specifies the project collection. |
| `/login` | Specifies the user name and the password to authenticate the user with Azure DevOps. |

## Remarks
A *changeset* is a set of file and folder revisions that were committed to the Team Foundation version control server as part of the same check-in event. For more information, see [Working with Changesets](find-view-changesets.md).

You can use the `changeset` command to view the attributes of a changeset and modify its properties. You can use the `history` command to determine which changeset you want to obtain information about. For more information, see [History Command](history-command.md).



For more information on how to use the `tf` command-line utility, see [Use Team Foundation version control commands](use-team-foundation-version-control-commands.md).

## Examples

The following example displays detailed information about changeset 8675309 in an editable format in the Visual Studio **Details for Changeset 8675309 - Source Files** dialog box, and replaces the existing comment with **This is a new comment**.

```
c:\projects>tf changeset /comment:"This is a new comment." 8675309
```

After you enter the command, in the Visual Studio **Details for Changeset 8675309 - Source Files** dialog box, select **Save** to associate the comment with the changeset.

The following example provides two check-in notes to associate with the changeset.

```
c:\projects>tf changeset /notes:reviewer=Jo;Security = checked 8675309
```

The following example provides two check-in notes that include spaces in the values and names to associate with the changeset.

```
c:\projects>tf changeset /notes:"Code Reviewer"="John Smith";"Security Reviewer"="Chen Yang" 8675309
```

The following example associates the check-in notes included in the file *notes.txt* with the changeset 8675309.

```
c:\projects>tf changeset /notes:@notes.txt 8675309
```

Where the *notes.txt* can be in the following format:

```
field1=value1;
field2=value that
spans multiple
lines;
field3 = value3;
```

The following example replaces the existing comment for changeset 8675309 and displays information about the changeset in the command prompt window. This example doesn't open the Visual Studio **Changeset** dialog box.

```
c:\projects>tf changeset /comment:"This is an automatically generated comment." /noprompt 8675309
```

The following example displays non-editable information about changeset 8675309 in the command prompt window.

```
c:\projects>tf changeset 8675309 /noprompt
```

Sample output:

```
Changeset: 8675309
User: DOMAIN\JohnG
Date: 01/21/2004 21:03:45
Comment:  This check-in fixes issues in several features.  I also refactored some items in buf.c into a new file named bif.c because buf.c was too hard to parse.
Items:
    $/baz/proj/bif.c           Added
    $/baz/proj/buf.c          Modified, Renamed
Work Items:
    34527     The "Access Denied" message isn't descriptive enough.
    35628     The UI flickers when I press the '8', 'y', 'Ctrl', and 'End' buttons at the same time.
Check-in Notes:
    Code Reviewer:  ShellM
    Performance Reviewer: ShellM
    Security Reviewer: ShellM
```

## Related articles

- [Checkin Command](checkin-command.md)
- [Checkout and Edit Commands](checkout-or-edit-command.md)
- [Shelve Command](shelve-command.md)
- [History Command](history-command.md)
- [Configure Command](configure-command.md)
- [Working with Changesets](find-view-changesets.md)
