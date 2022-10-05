---
title: Associate a file type with a merge tool
titleSuffix: Azure Repos
description: Associate a file type with a merge tool
ms.assetid: be153b5c-b26d-4bfe-aec2-fd23156ead68
ms.service: azure-devops-repos
ms.topic: conceptual
ms.date: 06/30/2022
monikerRange: '<= azure-devops'
ms.subservice: azure-devops-repos-tfvc
---


# Associate a file type with a merge tool

[!INCLUDE [version-lt-eq-azure-devops](../../includes/version-lt-eq-azure-devops.md)]
[!INCLUDE [version-vs-gt-2013](../../includes/version-vs-gt-2013.md)]

The diff/merge tool included in Team Foundation opens when the user tries to compare two files (or two versions of a file), or when the user elects to perform a manual merge of a file that has conflicting changes.

The tool is compatible with text and XML based files; however, should you want to associate a specific file type with a third-party merging or diff tool, use the procedure that is described in the following procedure.

## Prerequisites

To perform this procedure, you must be a member of the **Administrators** or **Users** security group on the computer where Visual Studio is installed. For more information, see [Permissions and groups reference](../../organizations/security/permissions.md).

### To associate a file type with a third-party merge tool

#### Developer command prompt

1.  In Windows, choose **Start**, **All Programs**, **Visual Studio 
2. (version)**, **Developer Command Prompt**.  
3. Type **tf diff /configure**.  
4.  In the **Configure User Tools** dialog box, choose **Add**.

    The **Configure Tool** dialog box appears.

4. Choose **Merge** from the **Operation** drop-down.
5.  In the **Command** text box, either type the path and name of the tool tool, or use the ellipses to browse to it.

6.  In the **Arguments** text box, type any arguments that your tool requires.

    The arrow button shows a list of available variables that the diff/resolve command will fill in before passing them to the configured tool as specified in the arguments box. Any other text in the argument box will be passed to the tool directly.

7.  Click **OK**.
8. Repeat these steps to add more file extensions.

#### Visual Studio
1.  From the **Tools** menu, click **Options**.

2.  In the **Options** dialog box, open **Source Control**, expand it, and then click **Visual Studio Team Foundation Server**.

3.  Click **Configure User Tools**.

4.  In the **Configure User Tools** dialog box, click **Add**.

5.  In **Configure Tools** dialog box, specify the extension you want to associate with your tool in the **Extension** box, for example .cpp or \* for all files.

6.  Use the **Operation** drop-down list to click **Merge**.

7.  In the **Command** text box, either type the path and name of the tool tool, or use the ellipses to browse to it.

8.  In the **Arguments** text box, type any arguments that your tool requires.

    The arrow button shows a list of available variables that the diff/resolve command will fill in before passing them to the configured tool as specified in the arguments box. Any other text in the argument box will be passed to the tool directly.

9.  Click **OK**.

10. Repeat steps 4 - 9 to add more file type extensions.

11. Click **OK**.

## Related articles

- [Merge folders and files](merge-folders-files.md) 
