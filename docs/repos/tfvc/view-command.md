---
title: Retrieve a file using the TFVC View command
titleSuffix: Azure Repos
description: Use the Team Foundation Version Control view command to retrieve a specific version of a file, store it in a temporary folder on your computer, and display it.
ms.assetid: d67fcb55-6f54-434f-ba05-4564f976b8d9
ms.service: azure-devops-repos
ms.topic: reference
ms.date: 11/22/2022
monikerRange: '<= azure-devops'
ms.subservice: azure-devops-repos-tfvc
---



# View command (Team Foundation Version Control)

[!INCLUDE [version-lt-eq-azure-devops](../../includes/version-lt-eq-azure-devops.md)]
[!INCLUDE [version-vs-gt-eq-2019](../../includes/version-vs-gt-eq-2019.md)]

The Team Foundation Version Control (TFVC) `view` command retrieves a specific version of a file, stores it in a temporary folder on your computer, and displays it.

## Prerequisites

To use the `view` command, you must have the **Read** permission set to **Allow**. For more information, see [Default TFVC permissions](../../organizations/security/default-tfvc-permissions.md).

## Syntax

```
tf view [/collection:<team-project-collection-url>] [/console] [/recursive] [/output:<local-file>]
[/shelveset:<shelveset-name>[;<owner>]] [/noprompt] <item-spec> 
[/version:<version-spec>] [/login:<username>,[<password>]]
```

## Parameters

The following sections describe arguments and options of the `view` command.

### Arguments

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
   `<team-project-collection-url>`
   :::column-end:::
   :::column span="3":::
   Provides the URL of the project collection that contains a specific version of a file that you want to retrieve information about, for example, `https://myserver:8080/tfs/DefaultCollection`.
   :::column-end:::
:::row-end:::
:::row:::
   :::column span="1":::
   `<shelveset-name> [:<owner>]`
   :::column-end:::
   :::column span="3":::
   Identifies the shelveset. The optional `<owner>` argument is used to specify a shelveset that's not owned by the current user.
   :::column-end:::
:::row-end:::
:::row:::
   :::column span="1":::
   `<item-spec>`
   :::column-end:::
   :::column span="3":::
   Identifies the file or folder to retrieve. For more information about how TFVC parses the `<item-spec>` argument to determine which items are within scope, see [Use Team Foundation version control commands - Use options to modify how a command functions](use-team-foundation-version-control-commands.md#use-options-to-modify-how-a-command-functions).

   > [!Note]  
   > You can specify more than one `<item-spec>` argument. 
   :::column-end:::
:::row-end:::
:::row:::
   :::column span="1":::
   `<version-spec>`
   :::column-end:::
   :::column span="3":::
   Provides a value such as **C3** for the `/version` option. For more information about how TFVC parses a version specification to determine which items are within its scope, see [Use Team Foundation version control commands](use-team-foundation-version-control-commands.md).
   :::column-end:::
:::row-end:::
:::row:::
   :::column span="1":::
   `<username>`
   :::column-end:::
   :::column span="3":::
   Provides a value to the `/login` option. You can specify this value as either `DOMAIN\<username>` or `<username>`.
   :::column-end:::
:::row-end:::
:::row:::
   :::column span="1":::
   `<password>`
   :::column-end:::
   :::column span="3":::
   Provides a value to the `/login` option.
   :::column-end:::
:::row-end:::
:::row:::
   :::column span="1":::
   `<local-file>`
   :::column-end:::
   :::column span="3":::
   Provides the path to the output file folder.
   :::column-end:::
:::row-end:::

### Options

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
   `/console`
   :::column-end:::
   :::column span="3":::
   Specifies that the file output should be directed to the console. This option is useful if you want to write the file to disk by using console redirection but use a different name or location than the versioned item.
   :::column-end:::
:::row-end:::
:::row:::
   :::column span="1":::
   `/recursive`
   :::column-end:::
   :::column span="3":::
   Views all items in the specified directory and any subdirectories.
   :::column-end:::
:::row-end:::
:::row:::
   :::column span="1":::
   `/shelveset`
   :::column-end:::
   :::column span="3":::
   Specifies the shelveset by name.
   :::column-end:::
:::row-end:::
:::row:::
   :::column span="1":::
   `/noprompt`
   :::column-end:::
   :::column span="3":::
   Specifies that TFVC shouldn't prompt you before displaying each file when you include a wildcard expression in an `<item-spec>` argument that matches more than one file.
   :::column-end:::
:::row-end:::
:::row:::
   :::column span="1":::
   `/version`
   :::column-end:::
   :::column span="3":::
   Specifies the version of the file to open for viewing. If you omit this option, `view` retrieves the latest Azure DevOps server version.
   :::column-end:::
:::row-end:::
:::row:::
   :::column span="1":::
   `/collection`
   :::column-end:::
   :::column span="3":::
   Specifies the project collection.
   :::column-end:::
:::row-end:::
:::row:::
   :::column span="1":::
   `/login`
   :::column-end:::
   :::column span="3":::
   Specifies the username and password to authenticate the user with Azure DevOps.
   :::column-end:::
:::row-end:::
:::row:::
   :::column span="1":::
   `/output`
   :::column-end:::
   :::column span="3":::
   Outputs the file to a local folder instead of invoking a Windows shell to open the file.
   :::column-end:::
:::row-end:::

## Remarks
The `view` command of the `tf` command-line utility retrieves a read-only copy of a file from the Azure DevOps server, stores the file in a temporary folder on your computer, and displays the file contents. Unless you specify a particular version, TFVC retrieves the latest version of the file from the Azure DevOps server.

The `view` command doesn't add files to your workspace or check them out. For more information about how to get the Azure DevOps server version of a file and check it out, see [Get command](get-command.md) and [Checkout and Edit commands](checkout-or-edit-command.md).

You can use the `difference` command to view the differences between two versions of a file. For more information, see [Difference command](difference-command.md).

For more information about how to use the `tf` command-line utility, see [Use Team Foundation version control commands](use-team-foundation-version-control-commands.md).

### Output options

- By default, TFVC displays the contents of the file in the viewer that's associated with its file type.

- If you include the `/console` option, TFVC prints the contents of the file to the command console. Likewise, if TFVC can't locate a viewer for the type of file that you specified, it prints the file contents to the command console.

- You can redirect the contents of a file to standard output by using `|` or `\>`. This option provides a way to save the file to another file or pass it to another program for post-processing.

## Examples

The following example displays the latest version of the file *314.cs*:

```
c:\projects>tf view 314.cs
```

The following example displays the version of *314.cs* that was checked in with changeset 1999:

```
c:\projects>tf view /version:C1999 314.cs
```

The following example retrieves version 5 of *314.cs* and writes it to the file *314.old*:

```
c:\projects>tf view /version:5 314.cs > 314.old
```

The following example displays the latest version of each file that matches the wildcard expression *\*.cs*:

```
c:\projects>tf view *.cs
```

## Related articles

- [Use Team Foundation version control commands](use-team-foundation-version-control-commands.md)
- [Checkout and Edit commands](checkout-or-edit-command.md)
- [Get command](get-command.md)
- [Difference command](difference-command.md)
