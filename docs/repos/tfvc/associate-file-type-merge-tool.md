---
title: Associate a file type with a merge tool
titleSuffix: Azure Repos
description: See how to associate a file type with a merge tool in Visual Studio or with a developer command prompt.
ms.assetid: be153b5c-b26d-4bfe-aec2-fd23156ead68
ms.service: azure-devops-repos
ms.topic: conceptual
ms.date: 10/07/2022
monikerRange: '<= azure-devops'
ms.subservice: azure-devops-repos-tfvc
---


# Associate a file type with a merge tool

[!INCLUDE [version-lt-eq-azure-devops](../../includes/version-lt-eq-azure-devops.md)]
[!INCLUDE [version-vs-gt-eq-2019](../../includes/version-vs-gt-eq-2019.md)]

The Team Foundation Version Control diff/merge tool opens when you try to compare two files or two versions of a file, or when you try to do a manual merge of a file that has conflicting changes.

The tool is compatible with text and XML based files, but to associate a specific file type or set up a third-party merge or diff tool, you can use the following procedure.

## Prerequisites

You must be a member of the **Administrators** or **Users** security group on the computer where Visual Studio is installed. For more information, see [Permissions and groups reference](../../organizations/security/permissions.md).

## Associate a file type with a merge tool

To associate a file type with a merge tool, you can start from the developer command prompt or from Visual Studio.

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
1. For **Operation**, expand the dropdown list and select **Merge**.
1. In the **Command** text box, either enter the path and name of your merge tool, or choose the ellipsis to browse to and select the tool.
1. In the **Arguments** text box, enter any arguments that your tool requires.

   Choose the arrow next to the **Arguments** box to select from a list of variables that the diff/merge command populates and passes to the tool. Any other text in the argument box passes to the tool directly.

1. Select **OK**.
1. Select **OK** again, or select **Add** to add more file extensions. When you're finished adding extensions, select **OK**.

## Related articles

- [Merge folders and files](merge-folders-files.md) 
