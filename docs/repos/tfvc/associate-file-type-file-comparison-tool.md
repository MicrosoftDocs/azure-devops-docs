---
title: Associate a file type with a file-comparison tool
titleSuffix: Azure Repos
description: Associate a file type with a file-comparison tool
ms.assetid: 3cda923d-7bd8-4ff7-a071-03d8cf60d509
ms.prod: devops
ms.technology: devops-code-tfvc
ms.manager: jillfra
ms.author: sdanie
author: steved0x
ms.topic: conceptual
ms.date: 08/10/2016
monikerRange: '>= tfs-2015'
---


# Associate a file type with a file-comparison tool

#### Azure Repos | TFS 2018 | TFS 2017 | TFS 2015 | VS 2017 | VS 2015 | VS 2013

You can compare text files by using the default file-comparison tool integrated with Visual Studio, the [Diff window](compare-files.md). However, you can, for file types that you specify, enable the file-comparison tool that you prefer to use. You can use any comparison tool that supports, as command-line arguments, the full paths of the two files that you want to compare.

**Required Permissions**  
To perform this procedure, you must be a member of the **Administrators** or **Users** security group on the computer where Visual Studio is installed. For more information, see [Permissions and groups reference](../../organizations/security/permissions.md).

### To associate a file type with a third-party compare tool

1.  Perform either of the following sets of steps.  
    1.  In Visual Studio, on the menu bar, choose **Tools**, **Options**.  
    2.  In the **Options** dialog box, expand **Source Control**, choose **Visual Studio Team Foundation Server**, and then choose **Configure User Tools**.  
    --or--  
    1.  In Windows, choose **Start**, **All Programs**, **Microsoft Visual Studio 2012**, **Visual Studio Tools**, **Developer Command Prompt **.  
    2.  Type **tf diff /configure**.  
2.  In the **Configure User Tools** dialog box, choose **Add**.

    The **Configure Tool** dialog box appears.

3.  In the **Extension** box, specify the extension (for example, .cpp) that you want to associate with your tool.

	>**Tip:**  
	>Specify `.*` if you want to associate all types of files with your tool.
4.  In the **Operation** list, choose **Compare**.  
5.  In the **Command** box, either type the path and name of your tool, or choose the ellipses (**...**) to locate and specify it. The result should resemble the following example:

        C:\Program Files\OtherDiff\otherdiff.exe

6.  In the **Arguments** box, type any arguments that your tool requires:  
    -   **%1**: The path to the source file.  
    -   **%2**: The path to the target file.  
    -   **%5**: The options that the user specified by using the **/option** option of the Difference command. For more information, see [Difference Command](difference-command.md).  
    -   **%6**: Label ("friendly name") of the source file.  
    -   **%7**: Label ("friendly name") of the target file.

    >**Tip:**  
    >For information about frequently used external tools and the arguments that they require, see the following page on the Microsoft website: [diff/merge configuration in Team Foundation - common Command and Argument values](http://go.microsoft.com/fwlink/?LinkID=200171).

    **Use white space to delimit the arguments.**  
    For example, you might specify the following syntax to compare two files:

        %1 %2

    **Use quotation marks to pass white space or quotation marks to the tool.**  
    If an argument includes one or more spaces, you must enclose it in quotation marks (""). If an argument contains one or more quotation marks, you must add another quotation mark immediately after any quotation mark in the argument. For example, you could specify the following argument:

        "This "" embeds a double quote"

    **Pass labels ("friendly names") to the tool.**  
    If your tool supports displaying a label (a "friendly name"), such as **c:\\workspace\\test\\MyWindow.xaml.cs;C5 (server) 4/26/2010 1:32 PM**, you can include the `%6` and `%7` tokens to pass label values to the tool. If you do not specify these tokens, the tool may show names of temporary files, which can be difficult to read.

    For example, you might specify the following syntax to display labels.

        %1 /title1=%6 %2 /title2=%7

	>**Note:**  
	>This capability is not related to version-control labels, which you apply to specific versions of items in version control, as described in [Use labels to take a snapshot of your files](use-labels-take-snapshot-your-files.md).

7.  In the **Configure Tool** dialog box, choose **OK**.  
8.  If you want to specify more types of files, repeat steps 4-9.  
9.  In the **Configure User Tools** dialog box, choose **OK**.  
