---
title: Retrieve a file using the TFVC View Command
titleSuffix: Azure Repos
description: Retrieve a file using the TFVC View Command for Azure DevOps Services or TFS
ms.assetid: d67fcb55-6f54-434f-ba05-4564f976b8d9
ms.technology: devops-code-tfvc
ms.topic: reference
ms.date: 08/10/2016
monikerRange: '>= tfs-2015'
---


# View Command

**Azure Repos | Azure DevOps Server 2020 | Azure DevOps Server 2019 | TFS 2018 | TFS 2017 | TFS 2015 | VS 2017 | VS 2015 | VS 2013**

The **view** command retrieves a specific version of a file to a temporary folder on your computer and displays it.

**Required Permissions**

To use the **view** command, you must have the **Read** permission set to **Allow**. For more information, see [Permissions and groups reference](../../organizations/security/permissions.md).

```
tf view [/collection:TeamProjectCollectionUrl] [/console] [/recursive] [/output:localfile]
[/shelveset:shelvesetname[;owner]] [/noprompt] itemspec 
[/version:versionspec] [/login:username,[password]]
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
   *TeamProjectCollectionUrl*
   :::column-end:::
   :::column span="3":::
   The URL of the project collection that contains a specific version of a file about which you want to retrieve information (for example, http://myserver:8080/tfs/DefaultCollection).
   :::column-end:::
:::row-end:::
:::row:::
   :::column span="1":::
   *shelvesetname [:owner]*
   :::column-end:::
   :::column span="3":::
   Identifies the shelveset. The optional *owner* argument is used to specify a shelveset that is not owned by the current user.
   :::column-end:::
:::row-end:::
:::row:::
   :::column span="1":::
   *Itemspec*
   :::column-end:::
   :::column span="3":::
   Identifies the file or folder to retrieve. For more information about how Team Foundation parses itemspecs to determine which items are within scope, see [Command-Line Options](/previous-versions/visualstudio/visual-studio-2010/4y2ash30(v=vs.100)).

   > [!Note]  
   > You can specify more than one *Itemspec* argument. 
   :::column-end:::
:::row-end:::
:::row:::
   :::column span="1":::
   *Versionspec*
   :::column-end:::
   :::column span="3":::
   Provides a value such as C3 for the **/version** option. For more information about how Team Foundation parses a version specification to determine which items are within its scope, see [Command-Line Syntax (Version Control)](/previous-versions/visualstudio/visual-studio-2010/56f7w6be(v=vs.100)).
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
   *localfile*
   :::column-end:::
   :::column span="3":::
   Provides the path of the folder to which you want to output the file.
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
   **/console**
   :::column-end:::
   :::column span="3":::
   Specifies that the file output should be directed to the console. This is useful if you want to write the file out to disk using console redirection (with a different name or location than the versioned item).
   :::column-end:::
:::row-end:::
:::row:::
   :::column span="1":::
   **/recursive**
   :::column-end:::
   :::column span="3":::
   Views all items in the specified directory and any subdirectories.
   :::column-end:::
:::row-end:::
:::row:::
   :::column span="1":::
   **/shelveset**
   :::column-end:::
   :::column span="3":::
   Specifies the shelveset by name.
   :::column-end:::
:::row-end:::
:::row:::
   :::column span="1":::
   **/noprompt**
   :::column-end:::
   :::column span="3":::
   Specifies that Team Foundation should not prompt you before displaying each file when you include a wildcard in an *itemspec* that matches more than one file.
   :::column-end:::
:::row-end:::
:::row:::
   :::column span="1":::
   **/version**
   :::column-end:::
   :::column span="3":::
   Specifies the version of the file to open for viewing. If you omit this option, **view** retrieves the latest Team Foundation version control server version.
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
:::row:::
   :::column span="1":::
   **/output**
   :::column-end:::
   :::column span="3":::
   Outputs the file to a local folder instead of invoking a Windows shell to open the file.
   :::column-end:::
:::row-end:::

## Remarks
The <strong>view</strong> command of the <strong>tf</strong> command-line utility retrieves a read-only copy of a file from the Team Foundation version control server to a temporary folder on your computer and displays its contents. Unless you specify a particular version, Team Foundation retrieves the latest version of the file from the Team Foundation version control server.

The **view** command does not retrieve files into your workspace or check them out. See [Get Command](get-command.md) and [Checkout and Edit Commands](checkout-or-edit-command.md) for more information about how to get the Team Foundation version control server version of and check out files.

You can use the [Difference Command](difference-command.md) to view the differences between two versions of a file.

For more information on how to find the **tf** command-line utility, see [Tf Command-Line Utility Commands](/previous-versions/visualstudio/visual-studio-2010/z51z7zy0(v=vs.100)).

### Output Options

By default, Team Foundation displays the contents of the file in the viewer associated with its file type.

If you include the **/console** option, Team Foundation prints the contents of the file to the command console. Likewise, if Team Foundation cannot locate a viewer for the type of file you have specified, it prints the contents of the file to the command console.

Finally, you can redirect the contents of a file to standard out using **|** or **\>** in order to save it in another file or pass it to another program for post-processing.
## Examples
The following example displays the latest version of the file 314.cs.

```
c:\projects>tf view 314.cs
```

The following example displays the version of 314.cs that was checked in with changeset 1999.

```
c:\projects>tf view /version:C1999 314.cs
```

The following example retrieves version 5 of 314.cs and writes it to the file 314.old.

```
c:\projects>tf view /version:5 314.cs > 314.old
```

The following example displays the latest version of each file that matches the wildcard "\*.cs".

```
c:\projects>tf view *.cs
```

## See Also

#### Reference

[Command-Line Syntax (Version Control)](/previous-versions/visualstudio/visual-studio-2010/56f7w6be(v=vs.100))

[Checkout and Edit Commands](checkout-or-edit-command.md)

[Get Command](get-command.md)

[Difference Command](difference-command.md)

#### Other Resources

[Tf Command-Line Utility Commands](/previous-versions/visualstudio/visual-studio-2010/z51z7zy0(v=vs.100))
