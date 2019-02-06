---
title: Labels Command
titleSuffix: Azure Repos
description: Labels Command
ms.assetid: 7772bc3d-7c43-47d8-ba5c-eee89aeed3ce
ms.prod: devops
ms.technology: devops-code-tfvc
ms.manager: jillfra
ms.author: sdanie
author: steved0x
ms.topic: reference
ms.date: 08/10/2016
monikerRange: '>= tfs-2015'
---


# Labels Command

#### Azure Repos | TFS 2018 | TFS 2017 | TFS 2015 | VS 2017 | VS 2015 | VS 2013

Displays the list of labels in the server for Team Foundation version control.

**Required Permissions**

To use the **labels** command, you must have the **Read** permission set to **Allow** for all files or folders to which the specified label is attached. If you have permission to some, but not all the files referenced in the label, partial results are displayed. For more information, see [Permissions and groups reference](../../organizations/security/permissions.md).

    tf labels [/owner:ownername] [/format:(brief|detailed)] 
    [/collection:TeamProjectCollectionUrl] [labelname] [/login:username,[password]]

## Parameters<table>
|**Argument**|**Description**|
|---|---|
|*ownername*|Provides a username as DOMAIN\JuanGo or juango to the **/owner** option.|
|*labelname*|Specifies a string that should be used to filter the list of labels. If this parameter is omitted, the label name field will not be filtered.|
|*TeamProjectCollectionUrl*|The URL of the project collection for which you want to display the list of labels (for example, http://myserver:8080/tfs/DefaultCollection).|
|*username*|Provides a value to the **/login** option. You can specify a username value as either *DOMAIN*\*UserName* or *UserName.*|

|**Option**|**Description**|
|---|---|
|**/owner**|Specifies the name of the user who owns the label. By default, the owner is the person who applies the label.|
|**/format**|Displays information about the specified label in one of the following formats:<ul><li><strong>Brief:</strong> Includes label, owner, and date created. This is the default.</li><li><strong>Detailed:</strong> Includes also comments, scope, and a list of files and folders associated with each label.</li></ul>|
|**/collection**|Specifies the project collection.|
|**/login**|Specifies the user name and password to authenticate the user with Visual Studio Team Foundation Server.|
## Remarks
The **labels** command displays information about labels in the Team Foundation version control server. If you do not specify a Team Foundation version control server, the Team Explorer tries to determine the Team Foundation version control server based by using the current directory. If the current directory is not mapped to a Team Foundation version control server, you must specify one by using the **/s** option.

By default, the results display the label name, owner and creation date for each label. If the format is changed to "detailed," comments and the list of files and folders associated with each label are also displayed.

For links to other Team Foundation commands that provide additional information about the items in your Team Foundation version control server and all of the workspaces that map to it, see [Informational Commands](https://msdn.microsoft.com/library/ms181450).

For more information on how to find the **tf** command-line utility, see [Tf Command-Line Utility Commands](https://msdn.microsoft.com/library/z51z7zy0).
## Examples
The following example displays the list of labels created by user "jasonj."

    c:\projects> tf labels /owner:jasonj

The following example displays information about "build1033" label and lists the files and folders to which the label has been applied in the Team Foundation version control server.

    c:\projects> tf labels /format:detailed build1033

The following example displays all labels in the Team Foundation version control server that have a *labelname* that begins with "build" and are owned by the account executing the **labels** command.

    c:\projects> tf labels build*

## See Also

#### Reference

[Command-Line Syntax (Version Control)](https://msdn.microsoft.com/library/56f7w6be)

[Label Command (Team Foundation Version Control)](label-command-team-foundation-version-control.md)

[Unlabel Command](unlabel-command.md)

#### Concepts

[Informational Commands](https://msdn.microsoft.com/library/ms181450)

#### Other Resources

[Tf Command-Line Utility Commands](https://msdn.microsoft.com/library/z51z7zy0)
