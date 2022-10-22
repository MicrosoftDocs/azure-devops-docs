---
title: Labels Command
titleSuffix: Azure Repos
description: Labels Command
ms.assetid: 7772bc3d-7c43-47d8-ba5c-eee89aeed3ce
ms.service: azure-devops-repos
ms.topic: reference
ms.date: 07/13/2022
monikerRange: '<= azure-devops'
ms.subservice: azure-devops-repos-tfvc
---


# Labels command (Team Foundation Version Control)

[!INCLUDE [version-lt-eq-azure-devops](../../includes/version-lt-eq-azure-devops.md)]
[!INCLUDE [version-vs-gt-2013](../../includes/version-vs-gt-2013.md)]

Displays the list of labels in the server for Team Foundation version control.

## Prerequisites

To use the **labels** command, you must have the **Read** permission set to **Allow** for all files or folders to which the specified label is attached. If you have permission to some, but not all the files referenced in the label, partial results are displayed. 
For more information, see  [Default TFVC permissions](../../organizations/security/default-tfvc-permissions.md).

## Syntax

```
tf labels [/owner:ownername] [/format:(brief|detailed)] 
[/collection:TeamProjectCollectionUrl] [labelname] [/login:username,[password]]
```

## Parameters

### Argument

|**Argument**|**Description**|
|---|---|
|*ownername*|Provides a username as DOMAIN\JuanGo or juango to the **/owner** option.|
|*labelname*|Specifies a string that should be used to filter the list of labels. If this parameter is omitted, the label name field will not be filtered.|
|*TeamProjectCollectionUrl*|The URL of the project collection for which you want to display the list of labels (for example, http://myserver:8080/tfs/DefaultCollection).|
|*username*|Provides a value to the **/login** option. You can specify a username value as either *DOMAIN*\*UserName* or *UserName.*|


### Option

|   **Option**    |                                                                                                                                      **Description**                                                                                                                                       |
|-----------------|--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
|   **/owner**    |                                                                                       Specifies the name of the user who owns the label. By default, the owner is the person who applies the label.                                                                                        |
|   **/format**   | Displays information about the specified label in one of the following formats:<ul><li>**Brief:** Includes label, owner, and date created. This is the default.</li><li>**Detailed:** Includes also comments, scope, and a list of files and folders associated with each label.</li></ul> |
| **/collection** |                                                                                                                             Specifies the project collection.                                                                                                                              |
|   **/login**    |                                                                                          Specifies the user name and password to authenticate the user with Azure DevOps.                                                                                          |

## Remarks
The **labels** command displays information about labels in the Team Foundation version control server. If you do not specify a Team Foundation version control server, the Team Explorer tries to determine the Team Foundation version control server based by using the current directory. If the current directory is not mapped to a Team Foundation version control server, you must specify one by using the **/s** option.

By default, the results display the label name, owner and creation date for each label. If the format is changed to "detailed," comments and the list of files and folders associated with each label are also displayed.



For more information on how to find the **tf** command-line utility, see [Use Team Foundation version control commands](use-team-foundation-version-control-commands.md).
## Examples
The following example displays the list of labels created by user "jasonj."

```
c:\projects> tf labels /owner:jasonj
```

The following example displays information about "build1033" label and lists the files and folders to which the label has been applied in the Team Foundation version control server.

```
c:\projects> tf labels /format:detailed build1033
```

The following example displays all labels in the Team Foundation version control server that have a *labelname* that begins with "build" and are owned by the account executing the **labels** command.

```
c:\projects> tf labels build*
```

## Related articles

- [Use Team Foundation version control commands](use-team-foundation-version-control-commands.md)
- [Label Command (Team Foundation Version Control)](label-command-team-foundation-version-control.md)
- [Unlabel Command](unlabel-command.md)
