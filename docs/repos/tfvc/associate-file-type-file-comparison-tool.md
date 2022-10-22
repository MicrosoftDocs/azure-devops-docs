---
title: Associate a file type with a file-comparison tool
titleSuffix: Azure Repos
description: See how to associate a file type with a file-comparison tool, and how to specify arguments for the tool.
ms.assetid: 3cda923d-7bd8-4ff7-a071-03d8cf60d509
ms.service: azure-devops-repos
ms.topic: conceptual
ms.date: 10/07/2022
monikerRange: '<= azure-devops'
ms.subservice: azure-devops-repos-tfvc
---


# Associate a file type with a file-comparison tool

[!INCLUDE [version-lt-eq-azure-devops](../../includes/version-lt-eq-azure-devops.md)]
[!INCLUDE [version-vs-gt-eq-2019](../../includes/version-vs-gt-eq-2019.md)]

You can compare text files by using the [Diff window](compare-files.md), the default file-comparison tool integrated with Visual Studio. You can also enable a different file-comparison tool to use for file types that you specify. You can use any comparison tool that supports as command-line arguments the full paths of the two files that you want to compare.

## Prerequisites

You must be a member of the **Administrators** or **Users** security group on the computer where Visual Studio is installed. For more information, see [Permissions and groups reference](../../organizations/security/permissions.md).

## Associate a file type with a file-comparison tool

To associate a file type with a file-comparison tool, you can start from a developer command prompt or from Visual Studio.

### Developer command prompt

1. In Windows, select **Start** and then type *Developer Command Prompt*. From the search results, select the developer command prompt for your Visual Studio version, such as **Developer Command Prompt for Visual Studio 2022**.
1. In the command prompt window, enter `tf diff /configure`.
1. Follow the instructions to [configure the tool](#configure-the-tool).

### Visual Studio

1. In Visual Studio, select **Tools** > **Options**.
1. In the **Options** dialog box, expand **Source Control**, and then select **Visual Studio Team Foundation Server**.
1. Select **Configure User Tools**.
1. Follow the instructions to [configure the tool](#configure-the-tool).

### Configure the tool

1. In the **Configure User Tools** dialog box, select **Add**.
1. In the **Configure Tool** dialog box, in the **Extension** field, enter the file extension you want to associate, such as *.cpp*, or *\** for all files.
1. For **Operation**, expand the dropdown list and select **Compare**.
1. In the **Command** text box, either enter the path and name of your comparison tool, or choose the ellipsis **...** to browse to and select the tool. For example, enter or browse to *C:\\Program Files\\OtherDiff\\otherdiff.exe*.
1. In the **Arguments** text box, enter any arguments that your tool requires.
1. Choose the arrow next to the **Arguments** box to select from a list of variables that the diff command populates and passes to the tool. Any other text in the argument box passes to the tool directly.
1. Select **OK**.
1. Select **OK** again, or select **Add** to add more file extensions. When you're finished adding extensions, select **OK**.

### Specify arguments

When you specify arguments for the diff tool, use the following syntax:

- Use white space to delimit arguments. For example, you can specify the following syntax to compare two files:<br>`%1 %2`.

- Use quotation marks to pass white space or quotation marks to the tool. If an argument includes one or more spaces, enclose the argument in quotation marks, for example `"an argument"`. If an argument contains quotation marks, add another quotation mark immediately after the quotation mark in the argument. For example, you could specify the following argument: `"This character "" is a double quote mark"`.

The following tokens designate variables to pass to the diff tool:

- `%1` is the path to the source file.
- `%2` is the path to the target file.
- `%5` is a string of options that you specify by using `/option` with the `difference` command. For more information, see [Difference Command](difference-command.md).
- `%6` is a friendly-name label for the source file.
- `%7` is a friendly-name label for the target file.

Pass friendly-name labels to the tool if possible. If your tool supports displaying friendly-name labels, such as `c:\workspace\test\MyWindow.xaml.cs;C5 (server) 4/26/2010 1:32 PM`, you can include the `%6` and `%7` tokens to pass the label values to the tool. If you don't specify these tokens, the tool may show names of temporary files, which can be difficult to read.

For example, you might specify the following syntax to display friendly-name labels:<br>`%1 /title1=%6 %2 /title2=%7`.

> [!NOTE]
> The friendly-name label capability isn't related to version-control labels, which you apply to specific versions of items in version control. For more information about version-control labels, see [Use labels to take a snapshot of your files](use-labels-take-snapshot-your-files.md).

## Related articles

For more information about frequently used external tools and the arguments that they require, see [Configuring different diff/merge tools for Team Foundation Version Control](https://devblogs.microsoft.com/buckh/configuring-different-diffmerge-tools-for-team-foundation-version-control/).

