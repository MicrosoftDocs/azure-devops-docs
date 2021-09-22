---
title: Merges Command
titleSuffix: Azure Repos
description: Merges Command
ms.assetid: dfa1c139-028d-4329-aa03-0f9845337f82
ms.technology: devops-code-tfvc
ms.topic: reference
ms.date: 08/10/2016
monikerRange: '>= tfs-2015'
---


# Merges Command

**Azure Repos | Azure DevOps Server 2020 | Azure DevOps Server 2019 | TFS 2018 | TFS 2017 | TFS 2015 | VS 2017 | VS 2015 | VS 2013**

Displays detailed information about past merges between the specified source and destination branches.

**Required Permissions**  
To use the **merges** command, you must have the **Read** permission set to **Allow** for both source and destination branches. For more information, see [Permissions and groups reference](../../organizations/security/permissions.md).

```
tf merges [source] destination [/recursive] [/extended] [/format:(brief|detailed)] [/login:username, [password]] [/showall]]] [/collection:TeamProjectCollectionUrl]
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
   *source*
   :::column-end:::
   :::column span="3":::
   Filters the merge history to include only entries with the specified sources.

   This parameter is optional.
   :::column-end:::
:::row-end:::
:::row:::
   :::column span="1":::
   *destination*
   :::column-end:::
   :::column span="3":::
   Specifies the destination branch for which merge history is displayed.

   This parameter is required.
   :::column-end:::
:::row-end:::
:::row:::
   :::column span="1":::
   *username*
   :::column-end:::
   :::column span="3":::
   Provides a value to the **/login** option. You can specify a username value as either *DOMAIN*&lt;em&gt;UserName</em> or *UserName*.
   :::column-end:::
:::row-end:::
:::row:::
   :::column span="1":::
   *TeamProjectCollectionUrl*
   :::column-end:::
   :::column span="3":::
   The URL of the project collection that contains the branches about which you want to display the merge history (for example, http://myserver:8080/tfs/DefaultCollection).
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
   **/recursive**
   :::column-end:::
   :::column span="3":::
   Displays information for all merges in specified Team Foundation version control server folder and its subfolders.
   :::column-end:::
:::row-end:::
:::row:::
   :::column span="1":::
   **/extended**
   :::column-end:::
   :::column span="3":::
   Displays a list of merges for a specific range of target items (for example: **tf merges** tgt\file1.txt; C21-25). This option displays the types of merges (for example, add or edit) and detailed information about the source and target items. This option implies **/format: Detailed**.

   > [!Note]  
   > You cannot use this option if you have specified a source item. 
   :::column-end:::
:::row-end:::
:::row:::
   :::column span="1":::
   **/format**
   :::column-end:::
   :::column span="3":::
   Specifies the formats in which merge history can appear:

   - **Brief**: default value, shows the changeset numbers for both the source and target items and the author and the date of the target checkin.
   - **Detailed**: shows the detailed paths and changeset numbers for both the source and target items.
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
:::row:::
   :::column span="1":::
   **/showall**
   :::column-end:::
   :::column span="3":::
   Displays all past merges for a given target item under its current name and all previously used names.
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

## Remarks

For links to other Team Foundation commands that provide additional information about the items in your Team Foundation version control server and all the workspaces that map to it, see [Informational Commands](/previous-versions/visualstudio/visual-studio-2010/ms181450(v=vs.100)).

For more information on how to find the **tf** command-line utility, see [Tf Command-Line Utility Commands](/previous-versions/visualstudio/visual-studio-2010/z51z7zy0(v=vs.100)).

## Examples

The following example displays information about all merge operations performed between Beta1\_branch and RTM\_branch.

```
c:\projects>tf merges /recursive Beta1_branch RTM_branch
```

-   Sample output:

    ```
	Changeset  Merged in Changeset   Author   Date
	--------------------------------------------------------
	135         162                   Justin     10/31/2003
	146         162                   Justin      10/31/2003
	147*        167                   Bill       11/02/2003
    ```

    The asterisk '\*' next to changeset 147 indicates that only some of the changes in that changeset \#147 were merged into changeset \#167.


## Related articles

- [Command-Line Syntax (Version Control)](/previous-versions/visualstudio/visual-studio-2010/56f7w6be(v=vs.100))  
- [Merge Command](merge-command.md)  
- [Branch Command](branch-command.md)  
- [Informational Commands](/previous-versions/visualstudio/visual-studio-2010/ms181450(v=vs.100))  
- [Tf Command-Line Utility Commands](/previous-versions/visualstudio/visual-studio-2010/z51z7zy0(v=vs.100))  
- [Branching and Merging](./branching-strategies-with-tfvc.md)