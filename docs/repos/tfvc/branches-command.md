---
title: Branches Command
titleSuffix: Azure Repos
description: Branches Command
ms.assetid: dae78c90-c65a-444d-96cb-84027b91ad4a
ms.technology: devops-code-tfvc
ms.topic: reference
ms.date: 08/10/2016
monikerRange: '>= tfs-2015'
---


# Branches Command

**Azure Repos | Azure DevOps Server 2020 | Azure DevOps Server 2019 | TFS 2018 | TFS 2017 | TFS 2015 | VS 2017 | VS 2015 | VS 2013**

Displays the history of a branch for a specified file or folder.

**Required Permissions**

To use the **branches** command, your **Read** permission must be set to **Allow** for the item and any branches to view their history. For more information, see [Permissions and groups reference](../../organizations/security/permissions.md).

```
tf branches itemspec [/version:versionspec] [/collection:TeamProjectCollectionUrl] [/login:username,[password]]
```

## Parameters

:::row:::
   :::column span="1":::
   **Argument**
   :::column-end:::
   :::column span="3":::
   **Description**
   :::column-end:::
:::row-end:::
:::row:::
   :::column span="1":::
   *Itemspec*
   :::column-end:::
   :::column span="3":::
   Identifies the file or folder that contains the branch you want to examine. For more information about how Team Foundation parses itemspecs to determine which items are within scope, see [Command-Line Options](/previous-versions/visualstudio/visual-studio-2010/4y2ash30(v=vs.100)).
   :::column-end:::
:::row-end:::
:::row:::
   :::column span="1":::
   *Versionspec*
   :::column-end:::
   :::column span="3":::
   Provides a value for the **/version** option. For more information about how Team Foundation parses a version specification to determine which items are within its scope, see [Command-Line Syntax (Version Control)](/previous-versions/visualstudio/visual-studio-2010/56f7w6be(v=vs.100)).
   :::column-end:::
:::row-end:::
:::row:::
   :::column span="1":::
   *TeamProjectCollectionUrl*
   :::column-end:::
   :::column span="3":::
   The URL of the project collection that contains a file or folder in a branch for which you want to display the history (for example, `http://myserver:8080/tfs/DefaultCollection`.
   :::column-end:::
:::row-end:::
:::row:::
   :::column span="1":::
   *username*
   :::column-end:::
   :::column span="3":::
   Provides a value to the **/login** option. You can specify a username value as either *Domain\UserName* or *UserName*.
   :::column-end:::
:::row-end:::


:::row:::
   :::column span="1":::
   **Option**
   :::column-end:::
   :::column span="3":::
   **Description**
   :::column-end:::
:::row-end:::

:::row:::
   :::column span="1":::
   **/version**
   :::column-end:::
   :::column span="3":::
   Specifies the version for the path. This option is rarely used.
   :::column-end:::
:::row-end:::
:::row:::
   :::column span="1":::
   **/collection**
   :::column-end:::
   :::column span="3":::
   Specifies the project collection.
   :::column-end:::
:::row-end:::
:::row:::
   :::column span="1":::
   **/login**
   :::column-end:::
   :::column span="3":::
   Specifies the user name and password to authenticate the user with Visual Studio Team Foundation Server.
   :::column-end:::
:::row-end:::

## Remarks
The branches command tells you when an item has been the source or destination of a branch operation. The output displays the parent branch for each version.

For more information on how to find the **tf** command-line utility, see [Tf Command-Line Utility Commands](/previous-versions/visualstudio/visual-studio-2010/z51z7zy0(v=vs.100)).

## Examples

The following example displays branch history for the version-controlled file C:\\314.cs.

```
c:\projects>tf branches 314.cs
```

The following example displays branch history for the header.h item in the Team Foundation version control server.

```
c:\projects>tf branches $/applications/header.h
```

The following example displays the branch history of the folder $/rel30/math.

```
c:\projects>tf branches $/rel30/math/
```

The following example displays the branch history for WindowsApplication13-branch. The results indicate the history for the specified branch by using angle brackets.

```
D:\projects\ws1>tf branches WindowsApplication13-branch
$/jun16-1/WindowsApplication13
>>      $/jun16-1/WindowsApplication13-branch   Branched from version 3 <<
                $/jun16-1/WindowsApplication13-branch-prime     Branched from version 5
        $/jun16-1/WindowsApplication13-branch2  Branched from version 3
```

## See Also

#### Reference

[Branch Command](branch-command.md)

[Merges Command](merges-command.md)

#### Concepts

[Informational Commands](/previous-versions/visualstudio/visual-studio-2010/ms181450(v=vs.100))

#### Other Resources

[Tf Command-Line Utility Commands](/previous-versions/visualstudio/visual-studio-2010/z51z7zy0(v=vs.100))

[Branching and Merging](./branching-strategies-with-tfvc.md)